import{G as q,cC as d,cD as w,bX as x,an as R,cE as i,a5 as _,e as k}from"./index-9f81791e.js";const c=new WeakMap;function v(e,n,y={}){const{mode:o="replace",route:r=q(),router:a=d(),transform:m=s=>s}=y;c.has(r)||c.set(r,new Map);const t=c.get(r);w(()=>{t.delete(e)}),t.set(e,r.query[e]);let f;const g=x((s,p)=>(f=p,{get(){s();const u=t.get(e);return m(u!==void 0?u:i(n))},set(u){t.get(e)!==u&&(t.set(e,u),p(),_(()=>{const{params:l,query:h,hash:b}=r;a[i(o)]({params:l,query:{...h,...Object.fromEntries(t.entries())},hash:b})}))}}));return R(()=>r.query[e],s=>{t.set(e,s),f()},{flush:"sync"}),g}const Q={number:{fromQuery:e=>Number(e),toQuery:e=>String(e)},string:{fromQuery:e=>e,toQuery:e=>e},boolean:{fromQuery:e=>e.toLowerCase()==="true",toQuery:e=>e?"true":"false"}};function D({name:e,defaultValue:n}){const o=Q[typeof n]??Q.string,r=v(e,o.toQuery(n));return k({get(){return o.fromQuery(r.value)},set(a){r.value=o.toQuery(a)}})}export{D as u};
