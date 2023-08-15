import{e as V,b as H,m as B,d as G,t as D,f as C,a as L,g as $,w as A,r as T,j as tt,k as et,o as st,n as nt,l as ot,p as ct}from"./vue.esm-bundler-3bd10302.js";var rt=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let J;const R=t=>J=t,N=Symbol();function E(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var x;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(x||(x={}));function bt(){const t=V(!0),n=t.run(()=>H({}));let s=[],e=[];const r=B({install(u){R(r),r._a=u,u.provide(N,r),u.config.globalProperties.$pinia=r,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!rt?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return r}const q=()=>{};function F(t,n,s,e=q){t.push(n);const r=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&et()&&st(r),r}function p(t,...n){t.slice().forEach(s=>{s(...n)})}const ut=t=>t();function I(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],r=t[s];E(r)&&E(e)&&t.hasOwnProperty(s)&&!C(e)&&!L(e)?t[s]=I(r,e):t[s]=e}return t}const ft=Symbol();function at(t){return!E(t)||!t.hasOwnProperty(ft)}const{assign:v}=Object;function it(t){return!!(C(t)&&t.effect)}function lt(t,n,s,e){const{state:r,actions:u,getters:a}=n,f=s.state.value[t];let P;function b(){f||(s.state.value[t]=r?r():{});const y=ot(s.state.value[t]);return v(y,u,Object.keys(a||{}).reduce((d,m)=>(d[m]=B(ct(()=>{R(s);const _=s._s.get(t);return a[m].call(_,_)})),d),{}))}return P=z(t,b,n,s,e,!0),P}function z(t,n,s={},e,r,u){let a;const f=v({actions:{}},s),P={deep:!0};let b,y,d=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),H({});let O;function W(c){let o;b=y=!1,typeof c=="function"?(c(e.state.value[t]),o={type:x.patchFunction,storeId:t,events:_}):(I(e.state.value[t],c),o={type:x.patchObject,payload:c,storeId:t,events:_});const h=O=Symbol();nt().then(()=>{O===h&&(b=!0)}),y=!0,p(d,o,e.state.value[t])}const K=u?function(){const{state:o}=s,h=o?o():{};this.$patch(S=>{v(S,h)})}:q;function M(){a.stop(),d=[],m=[],e._s.delete(t)}function Q(c,o){return function(){R(e);const h=Array.from(arguments),S=[],w=[];function Y(i){S.push(i)}function Z(i){w.push(i)}p(m,{args:h,name:c,store:l,after:Y,onError:Z});let k;try{k=o.apply(this&&this.$id===t?this:l,h)}catch(i){throw p(w,i),i}return k instanceof Promise?k.then(i=>(p(S,i),i)).catch(i=>(p(w,i),Promise.reject(i))):(p(S,k),k)}}const U={_p:e,$id:t,$onAction:F.bind(null,m),$patch:W,$reset:K,$subscribe(c,o={}){const h=F(d,c,o.detached,()=>S()),S=a.run(()=>A(()=>e.state.value[t],w=>{(o.flush==="sync"?y:b)&&c({storeId:t,type:x.direct,events:_},w)},v({},P,o)));return h},$dispose:M},l=T(U);e._s.set(t,l);const X=e._a&&e._a.runWithContext||ut,g=e._e.run(()=>(a=V(),X(()=>a.run(n))));for(const c in g){const o=g[c];if(C(o)&&!it(o)||L(o))u||(j&&at(o)&&(C(o)?o.value=j[c]:I(o,j[c])),e.state.value[t][c]=o);else if(typeof o=="function"){const h=Q(c,o);g[c]=h,f.actions[c]=o}}return v(l,g),v(D(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{W(o=>{v(o,c)})}}),e._p.forEach(c=>{v(l,a.run(()=>c({store:l,app:e._a,pinia:e,options:f})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function vt(t,n,s){let e,r;const u=typeof n=="function";typeof t=="string"?(e=t,r=u?s:n):(r=t,e=t.id);function a(f,P){const b=tt();return f=f||(b?G(N,null):null),f&&R(f),f=J,f._s.has(e)||(u?z(e,n,r,f):lt(e,r,f)),f._s.get(e)}return a.$id=e,a}function yt(t){{t=D(t);const n={};for(const s in t){const e=t[s];(C(e)||L(e))&&(n[s]=$(t,s))}return n}}export{bt as c,vt as d,yt as s};
//# sourceMappingURL=pinia-e7b481fe.js.map
