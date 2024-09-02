use crate::client::stream::{ClientExecutePayload, ClientStreamReq};
use crate::network::api::ApiStreamResponsePayload;
use crate::query::rows::RowOwned;
use crate::store::state_machine::sqlite::state_machine::{Query, QueryWrite};
use crate::{Client, Error, Params, Response};
use std::borrow::Cow;
use tokio::sync::oneshot;

impl Client {
    /// Execute any modifying / non-read-only query on the database.
    /// Returns the affected rows on success.
    ///
    /// ```rust, notest
    /// client
    ///     .execute(
    ///         "INSERT INTO test (id, num, description) VALUES ($1, $2, $3)",
    ///         params!("id1", 123, "my description"),
    ///     )
    ///     .await?;
    /// ```
    pub async fn execute<S>(&self, sql: S, params: Params) -> Result<usize, Error>
    where
        S: Into<Cow<'static, str>>,
    {
        let sql = Query {
            sql: sql.into(),
            params,
        };

        match self.execute_req(sql.clone()).await {
            Ok(res) => Ok(res),
            Err(err) => {
                if self
                    .was_leader_update_error(&err, &self.inner.leader_db, &self.inner.tx_client_db)
                    .await
                {
                    self.execute_req(sql).await
                } else {
                    Err(err)
                }
            }
        }
    }

    #[inline(always)]
    async fn execute_req(&self, sql: Query) -> Result<usize, Error> {
        if let Some(state) = self.is_leader_db_with_state().await {
            let res = state
                .raft_db
                .raft
                .client_write(QueryWrite::Execute(sql))
                .await?;
            let resp: Response = res.data;
            match resp {
                Response::Execute(res) => res.result,
                _ => unreachable!(),
            }
        } else {
            let (ack, rx) = oneshot::channel();
            self.inner
                .tx_client_db
                .send_async(ClientStreamReq::Execute(ClientExecutePayload {
                    request_id: self.new_request_id(),
                    sql,
                    ack,
                }))
                .await
                .expect("Client Stream Manager to always be running");
            let res = rx
                .await
                .expect("To always receive an answer from Client Stream Manager")?;
            match res {
                ApiStreamResponsePayload::Execute(res) => res,
                _ => unreachable!(),
            }
        }
    }

    /// Execute a query on the database that includes a `RETURNING` statement.
    ///
    /// Returns the rows mapped to the output type on success. This only works for types that
    /// `impl<'r> From<hiqlite::Row<'r>>`
    pub async fn execute_returning_map<S, T>(&self, sql: S, params: Params) -> Result<Vec<T>, Error>
    where
        S: Into<Cow<'static, str>>,
        T: for<'r> From<crate::Row<'r>> + Send + 'static,
    {
        let rows: Vec<crate::Row> = self.execute_returning::<S>(sql, params).await?;
        let mut res: Vec<T> = Vec::with_capacity(rows.len());
        for row in rows {
            res.push(T::from(row))
        }
        Ok(res)
    }

    /// Execute a query on the database that includes a `RETURNING` statement.
    /// Returns the raw rows on success.
    pub async fn execute_returning<S>(
        &self,
        sql: S,
        params: Params,
    ) -> Result<Vec<crate::Row>, Error>
    where
        S: Into<Cow<'static, str>>,
    {
        let sql = Query {
            sql: sql.into(),
            params,
        };

        let rows = match self.execute_returning_req(sql.clone()).await {
            Ok(res) => res,
            Err(err) => {
                if self
                    .was_leader_update_error(&err, &self.inner.leader_db, &self.inner.tx_client_db)
                    .await
                {
                    self.execute_returning_req(sql).await?
                } else {
                    return Err(err);
                }
            }
        };

        let mut res: Vec<crate::Row> = Vec::with_capacity(rows.len());
        for row in rows {
            res.push(crate::Row::Owned(row))
        }
        Ok(res)
    }

    #[inline]
    pub(crate) async fn execute_returning_req(&self, sql: Query) -> Result<Vec<RowOwned>, Error> {
        if let Some(state) = self.is_leader_db_with_state().await {
            let res = state
                .raft_db
                .raft
                .client_write(QueryWrite::ExecuteReturning(sql))
                .await?;
            let resp: Response = res.data;
            match resp {
                Response::ExecuteReturning(res) => res.result,
                _ => unreachable!(),
            }
        } else {
            let (ack, rx) = oneshot::channel();
            self.inner
                .tx_client_db
                .send_async(ClientStreamReq::ExecuteReturning(ClientExecutePayload {
                    request_id: self.new_request_id(),
                    sql,
                    ack,
                }))
                .await
                .expect("Client Stream Manager to always be running");
            let res = rx
                .await
                .expect("To always receive an answer from Client Stream Manager")?;
            match res {
                ApiStreamResponsePayload::ExecuteReturning(res) => res,
                _ => unreachable!(),
            }
        }
    }
}
