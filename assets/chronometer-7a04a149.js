import{d as k,y as l,c3 as h,j as x,k as f,w as o,q as m,n as c,E as g,A as w,x as $,o as _,s as D,m as u,p as R}from"./index-9f81791e.js";function C(a){const e=a%1e3,t=(a-e)/1e3%60,n=((a-e)/1e3-t)/60%60,s=(((a-e)/1e3-t)/60-n)/60;return`${s>0?`${s.toString().padStart(2,"0")}:`:""}${n.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}.${e.toString().padStart(3,"0")}`}const B={class:"duration"},b={"mt-5":"",flex:"","justify-center":"","gap-3":""},N=k({__name:"chronometer",setup(a){const e=l(!1),t=l(0);let n=Date.now();const{pause:s,resume:i}=h(()=>{const p=Date.now()-n;n=Date.now(),t.value+=p},{immediate:!1});function S(){n=Date.now(),i(),e.value=!0}function v(){s(),e.value=!1}return(p,d)=>{const y=w,r=$;return _(),x("div",null,[f(y,null,{default:o(()=>[m("div",B,D(c(C)(c(t))),1)]),_:1}),m("div",b,[c(e)?(_(),g(r,{key:1,type:"warning",onClick:v},{default:o(()=>[u(" Stop ")]),_:1})):(_(),g(r,{key:0,type:"primary",onClick:S},{default:o(()=>[u(" Start ")]),_:1})),f(r,{onClick:d[0]||(d[0]=V=>t.value=0)},{default:o(()=>[u(" Reset ")]),_:1})])])}}});const E=R(N,[["__scopeId","data-v-3e03ad8b"]]);export{E as default};
