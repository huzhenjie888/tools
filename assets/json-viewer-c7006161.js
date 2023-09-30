import{ak as m,d as k,y as J,ab as f,e as O,B as S,j as N,q as w,k as n,w as p,n as s,F as j,o as V,z as c,C as z,p as C}from"./index-9f81791e.js";import{J as y}from"./index-d4e515d0.js";import{w as B}from"./defaults-4d6daddf.js";import{T as E}from"./TextareaCopyable-1ecafa3c.js";import{_ as P}from"./FormItem-fd96190c.js";import{_ as U}from"./Switch-820757ae.js";import{_ as A}from"./InputNumber-1b763fe2.js";import"./copy-ca62dfd9.js";import"./Copy-8393bb39.js";import"./Scrollbar-afa78041.js";import"./use-form-item-46895a8e.js";import"./use-locale-d840bf60.js";import"./Input-72ef33b2.js";import"./Button-940ace79.js";import"./Remove-49566c12.js";import"./Add-54b1840e.js";function d(t){return typeof t!="object"||t===null?t:Array.isArray(t)?t.map(d):Object.keys(t).sort((o,e)=>o.localeCompare(e)).reduce((o,e)=>(o[e]=d(t[e]),o),{})}function F({rawJson:t,sortKeys:o=!0,indentSize:e=3}){const a=y.parse(m(t));return JSON.stringify(m(o)?d(a):a,null,m(e))}const I={style:{flex:"0 0 100%"}},K={style:{margin:"0 auto","max-width":"600px"},flex:"","justify-center":"","gap-3":""},T=k({__name:"json-viewer",setup(t){const o=J(),e=f("json-prettify:raw-json",'{"hello": "world", "foo": "bar"}'),a=f("json-prettify:indent-size",3),i=f("json-prettify:sort-keys",!0),g=O(()=>B(()=>F({rawJson:e,indentSize:a,sortKeys:i}),"")),v=S({source:e,rules:[{validator:_=>_===""||y.parse(_),message:"Provided JSON is not valid."}]});return(_,l)=>{const b=U,u=P,h=A,x=z;return V(),N(j,null,[w("div",I,[w("div",K,[n(u,{label:"Sort keys :","label-placement":"left","label-width":"100"},{default:p(()=>[n(b,{value:s(i),"onUpdate:value":l[0]||(l[0]=r=>c(i)?i.value=r:null)},null,8,["value"])]),_:1}),n(u,{label:"Indent size :","label-placement":"left","label-width":"100","show-feedback":!1},{default:p(()=>[n(h,{value:s(a),"onUpdate:value":l[1]||(l[1]=r=>c(a)?a.value=r:null),min:"0",max:"10",style:{width:"100px"}},null,8,["value"])]),_:1})])]),n(u,{label:"Your raw JSON",feedback:s(v).message,"validation-status":s(v).status},{default:p(()=>[n(x,{ref_key:"inputElement",ref:o,value:s(e),"onUpdate:value":l[2]||(l[2]=r=>c(e)?e.value=r:null),placeholder:"Paste your raw JSON here...",rows:"20",multiline:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",monospace:""},null,8,["value"])]),_:1},8,["feedback","validation-status"]),n(u,{label:"Prettified version of your JSON"},{default:p(()=>[n(E,{value:s(g),language:"json","follow-height-of":s(o)},null,8,["value","follow-height-of"])]),_:1})],64)}}});const ne=C(T,[["__scopeId","data-v-2c415be6"]]);export{ne as default};