import{K as Be,T as Ve,L as De,M as Oe,v as re,i as b,k as w,t as T,l as y,x as ue,j as f,p as Me,g as H,w as le,m as I,z as Se,$ as Ne,y as N,q as Q}from"../chunks/disclose-version.DdsrvPbs.js";import{n as ne,E as Ue,a0 as He,a1 as Qe,f as Ke,b as Ge,B as We,a2 as Ye,q as me,K as W,a as he,N as Y,M as j,x as O,g as S,G as se,z as A,Q as G,a3 as Xe,a4 as Je,a5 as Ze}from"../chunks/runtime.6J5aEZU7.js";import{i as R,o as $e}from"../chunks/index-client.BlVK4Nsz.js";import{a as de,d as ve,s as $,j as et,t as te,b as tt,k as at,l as Te,m as fe,e as Ce,i as rt,c as qe,n as Le,g as ot,A as it,Q as nt,h as st}from"../chunks/randomKey.CvWxylyc.js";import{a as z,p as M}from"../chunks/props.DDMHF-id.js";import{i as lt}from"../chunks/lifecycle.hZc_Fe1U.js";function Z(t,e,a,i,r){var o=t.__attributes??(t.__attributes={}),c=t.style,l="style-"+e;o[l]===a&&!r||(o[l]=a,a==null?c.removeProperty(e):c.setProperty(e,a,""))}const je=typeof window<"u",dt=je?requestAnimationFrame:ne,vt=je?()=>performance.now():()=>Date.now(),U={tick:t=>dt(t),now:()=>vt(),tasks:new Set};function Ie(t){U.tasks.forEach(e=>{e.c(t)||(U.tasks.delete(e),e.f())}),U.tasks.size!==0&&U.tick(Ie)}function ct(t){let e;return U.tasks.size===0&&U.tick(Ie),{promise:new Promise(a=>{U.tasks.add(e={c:t,f:a})}),abort(){U.tasks.delete(e)}}}function oe(t,e){t.dispatchEvent(new CustomEvent(e))}function ut(t){const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function we(t){const e={},a=t.split(";");for(const i of a){const[r,o]=i.split(":");if(!r||o===void 0)break;const c=ut(r.trim());e[c]=o.trim()}return e}const ft=t=>t;function J(t,e,a,i){var r=(t&Ve)!==0,o=(t&De)!==0,c=r&&o,l=(t&Oe)!==0,_=c?"both":r?"in":"out",s,n=e.inert,u,d,p;function C(){return s??(s=a()(e,i==null?void 0:i(),{direction:_}))}var m={is_global:l,in(){e.inert=n,d==null||d.abort(),u==null||u.abort(),r?(oe(e,"introstart"),u=_e(e,C(),d,1,()=>{oe(e,"introend"),u=s=void 0},c?void 0:()=>{u=s=void 0})):p==null||p()},out(g){d==null||d.abort(),o?(e.inert=!0,oe(e,"outrostart"),d=_e(e,C(),u,0,()=>{oe(e,"outroend"),d=s=void 0,g==null||g()},c?void 0:()=>{d=s=void 0}),p=d.reset):g==null||g()},stop:()=>{u==null||u.abort(),d==null||d.abort()}},q=We;if((q.transitions??(q.transitions=[])).push(m),r&&Be){let g=l;if(!g){for(var v=q.parent;v&&v.f&Ue;)for(;(v=v.parent)&&!(v.f&He););g=!v||(v.f&Qe)!==0}g&&Ke(()=>{Ge(()=>m.in())})}}function _e(t,e,a,i,r,o){var c=i===1;if(Ye(e)){var l;return me(()=>{var h=e({direction:c?"in":"out"});l=_e(t,h,a,i,r,o)}),{abort:()=>l.abort(),deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:h=>l.t(h)}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return r==null||r(),{abort:ne,deactivate:ne,reset:ne,t:()=>i};const{delay:_=0,css:s,tick:n,easing:u=ft}=e;var d=U.now()+_,p=(a==null?void 0:a.t(d))??1-i,C=i-p,m=e.duration*Math.abs(C),q=d+m,v,g;return s?me(()=>{var h=[],k=Math.ceil(m/16.666666666666668);if(c&&_>0){let B=Math.ceil(_/16.666666666666668),ae=we(s(0,1));for(let V=0;V<B;V+=1)h.push(ae)}for(var x=0;x<=k;x+=1){var L=p+C*u(x/k),E=s(L,1-L);h.push(we(E))}v=t.animate(h,{delay:c?0:_,duration:m+(c?_:0),easing:"linear",fill:"forwards"}),v.finished.then(()=>{r==null||r(),i===1&&v.cancel()}).catch(B=>{if(v.startTime!==null&&v.currentTime!==null)throw B})}):(p===0&&(n==null||n(0,1)),g=ct(h=>{if(h>=q)return n==null||n(i,1-i),r==null||r(),!1;if(h>=d){var k=p+C*u((h-d)/m);n==null||n(k,1-k)}return!0})),{abort:()=>{v==null||v.cancel(),g==null||g.abort(),o==null||o()},deactivate:()=>{r=void 0,o=void 0},reset:()=>{i===0&&(n==null||n(1,0))},t:h=>{var k=p+C*u((h-d)/m);return Math.min(1,Math.max(0,k))}}}const _t=!0,qa=Object.freeze(Object.defineProperty({__proto__:null,prerender:_t},Symbol.toStringTag,{value:"Module"})),ht=t=>t;function Pe(t){const e=t-1;return e*e*e+1}function Ae(t,{delay:e=0,duration:a=400,easing:i=ht}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:i,css:o=>`opacity: ${o*r}`}}function mt(t,{delay:e=0,duration:a=400,easing:i=Pe,axis:r="y"}={}){const o=getComputedStyle(t),c=+o.opacity,l=r==="y"?"height":"width",_=parseFloat(o[l]),s=r==="y"?["top","bottom"]:["left","right"],n=s.map(v=>`${v[0].toUpperCase()}${v.slice(1)}`),u=parseFloat(o[`padding${n[0]}`]),d=parseFloat(o[`padding${n[1]}`]),p=parseFloat(o[`margin${n[0]}`]),C=parseFloat(o[`margin${n[1]}`]),m=parseFloat(o[`border${n[0]}Width`]),q=parseFloat(o[`border${n[1]}Width`]);return{delay:e,duration:a,easing:i,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*c};${l}: ${v*_}px;padding-${s[0]}: ${v*u}px;padding-${s[1]}: ${v*d}px;margin-${s[0]}: ${v*p}px;margin-${s[1]}: ${v*C}px;border-${s[0]}-width: ${v*m}px;border-${s[1]}-width: ${v*q}px;`}}function ge(t,e){for(const a in e)t[a]=e[a];return t}function wt({fallback:t,...e}){const a=new Map,i=new Map;function r(c,l,_){const{delay:s=0,duration:n=L=>Math.sqrt(L)*30,easing:u=Pe}=ge(ge({},e),_),d=c.getBoundingClientRect(),p=l.getBoundingClientRect(),C=d.left-p.left,m=d.top-p.top,q=d.width/p.width,v=d.height/p.height,g=Math.sqrt(C*C+m*m),h=getComputedStyle(l),k=h.transform==="none"?"":h.transform,x=+h.opacity;return{delay:s,duration:typeof n=="function"?n(g):n,easing:u,css:(L,E)=>`
			   opacity: ${L*x};
			   transform-origin: top left;
			   transform: ${k} translate(${E*C}px,${E*m}px) scale(${L+(1-L)*q}, ${L+(1-L)*v});
		   `}}function o(c,l,_){return(s,n)=>(c.set(n.key,s),()=>{if(l.has(n.key)){const u=l.get(n.key);return l.delete(n.key),r(u,s,n)}return c.delete(n.key),t&&t(s,n,_)})}return[o(i,a,!1),o(a,i,!0)]}function gt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function ye(t,e){e.darkMode=!e.darkMode}var yt=T(`<div class="moon svelte-17bgi9x"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75
                        0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75
                        21a9.753 9.753 0 009.002-5.998z"></path></svg></div>`),bt=T(`<div class="sun svelte-17bgi9x"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12
                        18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75
                        3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg></div>`),kt=T('<div role="button" tabindex="0" class="icon svelte-17bgi9x"><!></div>');function pt(t,e){W(e,!0);const a="darkMode",[i,r]=wt({duration:250,easing:gt});let o=z({isInitialized:!1,darkMode:!1});he(()=>{o.isInitialized?l(o.darkMode):(o.darkMode=c(),o.isInitialized=!0)});function c(){var u,d;const n=(u=window==null?void 0:window.localStorage)==null?void 0:u.getItem(a);return n?n==="true":(d=window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)"))==null?void 0:d.matches}function l(n){n?(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")),localStorage.setItem(a,n.toString())}var _=kt();_.__click=[ye,o],_.__keydown=[ye,o];var s=b(_);R(s,()=>o.darkMode,n=>{var u=yt(),d=b(u);b(d),y(d),y(u),J(1,u,()=>r,()=>({key:"dark",delay:200})),J(2,u,()=>i,()=>({key:"light"})),w(n,u)},n=>{var u=bt(),d=b(u);b(d),y(d),y(u),J(1,u,()=>r,()=>({key:"light",delay:200})),J(2,u,()=>i,()=>({key:"dark"})),w(n,u)}),y(_),w(t,_),Y()}re(["click","keydown"]);var xt=T('<div class="theme-switch svelte-jrz9as"><!></div>');function Mt(t){var e=xt(),a=b(e);pt(a,{$$legacy:!0}),y(e),w(t,e)}var St=T("<form><!></form>");function $t(t,e){W(e,!0);let a=M(e,"method",3,"POST"),i=M(e,"isError",7);async function r(l){l.preventDefault();const _=l.currentTarget;if(_.reportValidity())i(!1);else{i(!0);return}const n=new FormData(_);let u=new URLSearchParams;if(n.forEach((p,C)=>{u.append(C,p.toString())}),e.onSubmit){e.onSubmit(_,u);return}const d=await fetch(_.action,{method:_.method,headers:{"Content-type":"application/x-www-form-urlencoded"},body:u});et(d),e.onResponse&&(e.onResponse(d),d.ok&&_.reset())}var o=St(),c=b(o);de(c,ve(e),{}),y(o),j(()=>{$(o,"action",e.action),$(o,"method",a())}),ue("submit",o,r,!1),w(t,o),Y()}var Tt=T('<div class="container svelte-1yqkxw6"><div class="loading svelte-1yqkxw6"><div class="loading-1 svelte-1yqkxw6"></div> <div class="loading-2 svelte-1yqkxw6"></div> <div class="loading-3 svelte-1yqkxw6"></div></div></div>');function Ct(t,e){let a=M(e,"background",3,!1),i=M(e,"color",3,"var(--col-text)"),r=M(e,"global",3,!1),o=M(e,"offset",3,0);var c=Tt(),l=b(c),_=b(l),s=f(f(_,!0)),n=f(f(s,!0));y(l),y(c),j(()=>{te(c,"global",r()),te(c,"local",!r()),te(c,"background",a()),$(l,"style",`margin-top: ${o()??""}px;`),Z(_,"background",i()),Z(s,"background",i()),Z(n,"background",i())}),J(3,c,()=>Ae,()=>({duration:100})),w(t,c)}function be(t,e){e.onclick&&e.onclick()}var qt=T('<div class="load svelte-jw4hyj"><!></div>'),Lt=T('<div class="txt svelte-jw4hyj"><!></div>'),jt=T('<button class="svelte-jw4hyj"><!></button>');function It(t,e){W(e,!0);let a=M(e,"type",3,"button"),i=M(e,"level",3,1),r=M(e,"width",3,"inherit"),o=M(e,"isDisabled",3,!1),c=M(e,"isLoading",3,!1),l=O(!c()),_=se(()=>o()||c());he(()=>{c()?setTimeout(()=>{A(l,!1)},120):setTimeout(()=>{A(l,!0)},120)});var s=jt();s.__click=[be,e],s.__keydown=[be,e];var n=b(s);R(n,c,u=>{var d=qt(),p=b(d),C=se(()=>(i()>1,"var(--col-text)"));Ct(p,{background:!1,get color(){return S(C)}}),y(d),w(u,d)},u=>{var d=Me(),p=H(d);R(p,()=>S(l),C=>{var m=Lt(),q=b(m);de(q,ve(e),{}),y(m),J(1,m,()=>Ae),w(C,m)},null,!0),w(u,d)}),y(s),j(()=>{$(s,"type",a()),s.disabled=S(_),te(s,"l1",i()===1),te(s,"l2",i()===2),te(s,"l3",i()>2),Z(s,"width",r()),Z(s,"cursor",c()?"default":"pointer")}),w(t,s),Y()}re(["click","keydown"]);var Pt=le(`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0
            002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375
            3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375
            7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8
            0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125
            1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"></path></svg>`);function At(t,e){let a=M(e,"opacity",0,.9),i=M(e,"width",0,20);var r=Pt();$(r,"stroke-width",2),b(r),y(r),j(()=>{$(r,"width",i()),$(r,"opacity",a())}),w(t,r)}var Et=le(`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138
            2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0
            01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0
            0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>`);function zt(t,e){let a=M(e,"color",0,"var(--col-err)"),i=M(e,"opacity",0,.9),r=M(e,"width",0,24);var o=Et();$(o,"stroke-width",2),b(o),y(o),j(()=>{$(o,"width",r()),$(o,"color",a()),$(o,"opacity",i())}),w(t,o)}var Ft=le(`<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963
            7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);function Rt(t,e){let a=M(e,"color",0,"var(--col-ok)"),i=M(e,"opacity",0,.9),r=M(e,"width",0,24);var o=Ft();$(o,"stroke-width",2);var c=b(o);f(c),y(o),j(()=>{$(o,"width",r()),$(o,"color",a()),$(o,"opacity",i())}),w(t,o)}function ke(t,e){navigator.clipboard?navigator.clipboard.writeText(e()):console.error("Copy to clipboard is only available in secure contexts")}function Bt(t){t.code}function pe(t,e){e()==="password"?e("text"):e("password")}function Vt(t){}var Dt=T('<div role="button" tabindex="0" class="btn clip svelte-1ofxkqs"><!></div>'),Ot=T('<div class="nolabel svelte-1ofxkqs"></div>'),Nt=T('<div class="error svelte-1ofxkqs"><!> </div>'),Ut=T('<div><div class="input-row svelte-1ofxkqs"><input> <div class="rel svelte-1ofxkqs"><!> <div role="button" tabindex="0" class="btn show svelte-1ofxkqs"><!></div></div></div></div> <div class="label svelte-1ofxkqs"><label class="font-label noselect svelte-1ofxkqs"> </label> <!></div>',1);function Ht(t,e){let a=M(e,"type",7,"password"),i=M(e,"name",3,"password"),r=M(e,"value",7,""),o=M(e,"label",3,"Password"),c=M(e,"autocomplete",3,"current-password"),l=M(e,"placeholder",3,"Password"),_=M(e,"title",3,"Password"),s=M(e,"disabled",3,!1),n=M(e,"min",3,"14"),u=M(e,"max",3,"128"),d=M(e,"required",3,!0),p=M(e,"width",3,"inherit"),C=M(e,"showCopy",3,!1),m=O(!1);function q(P){var X;const F=(X=P==null?void 0:P.currentTarget)==null?void 0:X.reportValidity();A(m,!F)}function v(P){P.preventDefault(),A(m,!0)}var g=Ut(),h=H(g),k=b(h),x=b(k);at(x),x.__input=[Vt],x.__keydown=[Bt];var L=f(f(x,!0)),E=b(L);R(E,C,P=>{var F=Dt();F.__click=[ke,r],F.__keydown=[ke,r];var X=b(F);At(X,{}),y(F),w(P,F)});var B=f(f(E,!0));B.__click=[pe,a],B.__keydown=[pe,a];var ae=b(B);R(ae,()=>a()==="password",P=>{zt(P,{width:22})},P=>{Rt(P,{width:22})}),y(B),y(L),y(k),y(h);var V=f(f(h,!0)),D=b(V),ce=b(D);y(D);var Ee=f(f(D,!0));R(Ee,()=>S(m),P=>{var F=Nt(),X=b(F);R(X,()=>!o(),Fe=>{var Re=Ot();w(Fe,Re)});var ze=f(X,!0);y(F),j(()=>I(ze,` ${_()??""}`)),J(3,F,()=>mt),w(P,F)}),y(V),j(()=>{Z(h,"width",p()),$(x,"type",a()),$(x,"id",e.id),$(x,"name",i()),$(x,"title",_()),$(x,"aria-label",_()),$(x,"autocomplete",c()),$(x,"placeholder",l()),x.disabled=s(),x.required=d()||void 0,$(x,"maxlength",e.maxLength||void 0),$(x,"min",n()||void 0),$(x,"max",u()||void 0),$(x,"pattern",e.pattern||void 0),Z(x,"padding-right",C()?"55px":"30px"),$(D,"for",e.id),I(ce,o())}),tt(x,r,P=>r(P)),ue("invalid",x,v,!1),ue("blur",x,q,!1),w(t,g)}re(["input","keydown","click"]);var Qt=T('<meta property="description" content="Hiqlite Login">'),Kt=T("Login",1),Gt=T("<!> <!>",1),Wt=T('<div class="container svelte-9m879t"><div class="login svelte-9m879t"><!></div></div>');function Yt(t,e){W(e,!1);async function a(c){if(c.status===200){let l=await c.json();fe.set(l)}}lt();var i=Wt();Se(c=>{var l=Qt();Ne.title="Login",w(c,l)});var r=b(i),o=b(r);$t(o,{action:`${Te}/session`,onResponse:a,children:(c,l)=>{var _=Gt(),s=H(_);Ht(s,{id:"password",name:"password",autocomplete:"current-password",placeholder:"Password",title:"Valid Dashboard Password",required:!0,$$legacy:!0});var n=f(f(s,!0));It(n,{type:"submit",children:(u,d)=>{N();var p=Kt();w(u,p)},$$slots:{default:!0},$$legacy:!0}),w(c,_)},$$slots:{default:!0},$$legacy:!0}),y(r),y(i),w(t,i),Y()}var ee=(t=>(t.Table="table",t.Index="index",t.Trigger="view",t.View="trigger",t))(ee||{}),Xt=T(" <br>",1),Jt=T('<section class="svelte-1843bx4"><h5 class="header"> <br> </h5> <div class="sql font-mono svelte-1843bx4"></div></section>');function Zt(t,e){W(e,!0);let a=se(()=>{var s;return(s=e.table.sql)==null?void 0:s.split(`
`)});var i=Jt(),r=b(i),o=b(r),c=f(o),l=f(c,!0);y(r);var _=f(f(r,!0));Ce(_,73,()=>S(a),rt,(s,n,u)=>{var d=Xt(),p=H(d,!0);f(p),j(()=>I(p,G(n))),w(s,d)}),y(_),y(i),j(()=>{I(o,e.table.name),I(l,` ${e.table.typ??""}: ${e.table.tbl_name??""}`)}),w(t,i),Y()}function xe(t,e,a){e(a.view)}var ea=T('<div role="button" tabindex="0"> </div>');function ie(t,e){let a=M(e,"viewSelected",7);var i=ea();i.__click=[xe,a,e],i.__keydown=[xe,a,e];var r=b(i);y(i),j(()=>{qe(i,`${(a()===e.view?"selected":"")??""} svelte-1epva8a`),I(r,e.view)}),w(t,i)}re(["click","keydown"]);var ta=le('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>');function aa(t,e){let a=M(e,"opacity",0,.9),i=M(e,"width",0,24);var r=ta();$(r,"stroke-width",2),b(r),y(r),j(()=>{$(r,"width",i()),$(r,"opacity",a())}),w(t,r)}var ra=T('<div class="err"> </div>'),oa=(t,e,a)=>e(G(a).name),ia=(t,e,a)=>e(G(a).name),na=(t,e,a)=>e(G(a).name),sa=(t,e,a)=>e(G(a).name),la=T('<div role="button" tabindex="0" class="btn svelte-1z0ctku"><!></div>'),da=T('<div role="button" tabindex="0"><div> </div> <!></div>'),va=T('<!> <div class="selector svelte-1z0ctku"><!> <!> <!> <!></div> <div id="tables" class="svelte-1z0ctku"><div class="tables svelte-1z0ctku"></div> <!></div>',1);function ca(t,e){W(e,!0);let a=O(z([])),i=O(void 0),r=O(z(ee.Table)),o=O(void 0);he(()=>{c(S(r))});async function c(h){let k=await Le(`/tables/${h}`);k.status===200?A(a,z(await k.json())):A(o,z(await k.json()))}function l(h){A(i,z(S(a).filter(k=>k.name===h)[0]))}function _(h){let k={id:`${h}_${ot(4)}`,query:`${it}
PRAGMA table_info(${h})`};nt.push(k),l(h)}var s=va(),n=H(s);R(n,()=>S(o),h=>{var k=ra(),x=b(k);y(k),j(()=>I(x,S(o))),w(h,k)});var u=f(f(n,!0)),d=b(u);ie(d,{get view(){return ee.Table},get viewSelected(){return S(r)},set viewSelected(h){A(r,z(h))}});var p=f(f(d,!0));ie(p,{get view(){return ee.Index},get viewSelected(){return S(r)},set viewSelected(h){A(r,z(h))}});var C=f(f(p,!0));ie(C,{get view(){return ee.Trigger},get viewSelected(){return S(r)},set viewSelected(h){A(r,z(h))}});var m=f(f(C,!0));ie(m,{get view(){return ee.View},get viewSelected(){return S(r)},set viewSelected(h){A(r,z(h))}}),y(u);var q=f(f(u,!0)),v=b(q);Ce(v,77,()=>S(a),(h,k)=>h.name,(h,k,x)=>{var L=da();L.__click=[oa,l,k],L.__keydown=[ia,l,k];var E=b(L),B=b(E);y(E);var ae=f(f(E,!0));R(ae,()=>G(k).typ==="table",V=>{var D=la();D.__click=[na,_,k],D.__keydown=[sa,_,k];var ce=b(D);aa(ce,{}),y(D),w(V,D)}),y(L),j(()=>{var V;qe(L,`${(((V=S(i))==null?void 0:V.name)===G(k).name?"entry selected":"entry")??""} svelte-1z0ctku`),I(B,G(k).name)}),w(h,L)}),y(v);var g=f(f(v,!0));R(g,()=>S(i),h=>{Zt(h,{get table(){return S(i)}})}),y(q),w(t,s),Y()}re(["click","keydown"]);var ua=T('<div class="metric svelte-1ktnipf"><div class="label font-label svelte-1ktnipf"> </div> <div class="font-mono"><!></div></div>');function K(t,e){var a=ua(),i=b(a),r=b(i);y(i);var o=f(f(i,!0)),c=b(o);de(c,ve(e),{}),y(o),y(a),j(()=>I(r,e.label)),w(t,a)}var fa=T("<b>Metrics</b> <!> <!> <!> <!> <!> <!> <!> <!>",1);function _a(t,e){W(e,!0);let a=O(void 0),i=se(()=>{var m;return(m=S(a))==null?void 0:m.membership_config.membership.configs.join(", ")});setInterval(()=>{r()},1e4),$e(()=>{r()});async function r(){let m=await Le("/metrics");m.status===200?A(a,z(await m.json())):console.error(await m.json())}var o=fa(),c=H(o),l=f(f(c,!0));K(l,{label:"Node",children:(m,q)=>{N();var v=Q();j(()=>{var g,h;return I(v,`${((g=S(a))==null?void 0:g.id)??""}
    ${((h=S(a))==null?void 0:h.state)??""}`)}),w(m,v)},$$slots:{default:!0}});var _=f(f(l,!0));K(_,{label:"Current Leader",children:(m,q)=>{N();var v=Q();j(()=>{var g;return I(v,(g=S(a))==null?void 0:g.current_leader)}),w(m,v)},$$slots:{default:!0}});var s=f(f(_,!0));K(s,{label:"Last Log Index",children:(m,q)=>{N();var v=Q();j(()=>{var g;return I(v,(g=S(a))==null?void 0:g.last_log_index)}),w(m,v)},$$slots:{default:!0}});var n=f(f(s,!0));K(n,{label:"Last Applied Log",children:(m,q)=>{N();var v=Q();j(()=>{var g,h,k,x,L,E;return I(v,`${((h=(g=S(a))==null?void 0:g.last_applied)==null?void 0:h.leader_id.node_id)??""}
    -
    ${((x=(k=S(a))==null?void 0:k.last_applied)==null?void 0:x.leader_id.term)??""}
    -
    ${((E=(L=S(a))==null?void 0:L.last_applied)==null?void 0:E.index)??""}`)}),w(m,v)},$$slots:{default:!0}});var u=f(f(n,!0));K(u,{label:"Snapshot",children:(m,q)=>{N();var v=Q();j(()=>{var g,h,k,x;return I(v,`${((h=(g=S(a))==null?void 0:g.snapshot)==null?void 0:h.leader_id)??""}
    -
    ${((x=(k=S(a))==null?void 0:k.snapshot)==null?void 0:x.index)??""}`)}),w(m,v)},$$slots:{default:!0}});var d=f(f(u,!0));K(d,{label:"Vote Leader",children:(m,q)=>{N();var v=Q();j(()=>{var g;return I(v,(g=S(a))==null?void 0:g.vote.leader_id.node_id)}),w(m,v)},$$slots:{default:!0}});var p=f(f(d,!0));K(p,{label:"Millis Quorum Ack",children:(m,q)=>{N();var v=Q();j(()=>{var g;return I(v,(g=S(a))==null?void 0:g.millis_since_quorum_ack)}),w(m,v)},$$slots:{default:!0}});var C=f(f(p,!0));K(C,{label:"Members",children:(m,q)=>{N();var v=Q();j(()=>I(v,S(i))),w(m,v)},$$slots:{default:!0}}),w(t,o),Y()}var ha=T('<aside class="svelte-v6apjd"><!></aside>');function ma(t){var e=ha(),a=b(e);_a(a,{$$legacy:!0}),y(e),w(t,e)}const wa=(t,e,a)=>{if(Xe(t))return Je(t);const i=e(a);return Ze(t,i),i},ga=(t,e)=>wa(t,ya,e),ya=t=>{let e=O(z(t));return{get value(){return S(e)},set value(a){A(e,z(a))}}};var ba=T('<meta name="robots" content="noindex nofollow">'),ka=T('<nav class="svelte-1t53nk0"><!></nav> <main class="svelte-1t53nk0"><!></main> <!>',1),pa=T("<!> <!>",1);function La(t,e){W(e,!0);let a=O(void 0),i=O(!1);ga("queries",[st]),fe.subscribe(l=>{A(a,z(l))}),$e(async()=>{let l=await fetch(`${Te}/session`);l.status===200&&fe.set(await l.json()),A(i,!0)});var r=pa();Se(l=>{var _=ba();w(l,_)});var o=H(r);R(o,()=>S(a),l=>{var _=ka(),s=H(_),n=b(s);ca(n,{}),y(s);var u=f(f(s,!0)),d=b(u);de(d,ve(e),{}),y(u);var p=f(f(u,!0));ma(p),w(l,_)},l=>{var _=Me(),s=H(_);R(s,()=>S(i),n=>{Yt(n,{})},null,!0),w(l,_)});var c=f(f(o,!0));Mt(c),w(t,r),Y()}export{La as component,qa as universal};
