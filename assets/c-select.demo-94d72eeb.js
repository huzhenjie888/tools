import{_ as f}from"./c-select-f5bfdcd9.js";import{d as h,y as g,j as p,F as b,r as v,k as n,n as s,z as i,q as o,o as r}from"./index-9f81791e.js";import"./c-label.vue_vue_type_script_setup_true_lang-d4bb2fcf.js";const B=o("h2",null,"Sizes",-1),L=o("h2",null,"Searchable",-1),y=o("h2",null,"Big list",-1),O=o("h2",null,"Empty",-1),k=o("h2",null,"String array as options",-1),x=o("h2",null,"Labels",-1),C=h({__name:"c-select.demo",setup(U){const m=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],_=Array.from({length:1e3},(c,e)=>({label:`Option ${e}`,value:e})),d=["small","medium","large"],l=g("");return(c,e)=>{const a=f;return r(),p(b,null,[B,(r(),p(b,null,v(d,t=>n(a,{key:t,value:s(l),"onUpdate:value":e[0]||(e[0]=u=>i(l)?l.value=u:null),options:m,size:t,"mb-2":""},null,8,["value","size"])),64)),L,(r(),p(b,null,v(d,t=>n(a,{key:t,value:s(l),"onUpdate:value":e[1]||(e[1]=u=>i(l)?l.value=u:null),options:m,size:t,searchable:"","mb-2":""},null,8,["value","size"])),64)),y,n(a,{value:s(l),"onUpdate:value":e[2]||(e[2]=t=>i(l)?l.value=t:null),options:s(_),searchable:""},null,8,["value","options"]),O,n(a,{options:[]}),k,n(a,{value:s(l),"onUpdate:value":e[3]||(e[3]=t=>i(l)?l.value=t:null),options:["a","Option B","Option C"]},null,8,["value"]),x,n(a,{label:"Label","mb-2":""}),n(a,{label:"Label","label-position":"left","mb-2":""}),n(a,{label:"Label","label-position":"left","label-align":"left","mb-2":"","label-width":"200px"}),n(a,{label:"Label","label-position":"left","label-align":"center","mb-2":"","label-width":"200px"}),n(a,{label:"Label","label-position":"left","label-align":"right","mb-2":"","label-width":"200px"})],64)}}});export{C as default};
