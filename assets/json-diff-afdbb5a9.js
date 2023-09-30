import{v as i,k as a,F as y,m as T,d as b,aA as F,y as g,ac as $,aE as L,e as m,n as l,j as J,q as I,w as N,ag as P,A as Y,o as v,z as k,E as j,p as z,C as M}from"./index-9f81791e.js";import{J as h}from"./index-d4e515d0.js";import{u as w}from"./copy-ca62dfd9.js";import{_ as G}from"./FormItem-fd96190c.js";import{_ as H}from"./Switch-820757ae.js";import{w as V}from"./defaults-4d6daddf.js";import{i as K}from"./boolean-c7e7c785.js";import"./use-form-item-46895a8e.js";function Q(e,t,{onlyShowDifferences:s=!1}={}){return i.isArray(e)&&i.isArray(t)?{key:"",type:"array",children:D(e,t,{onlyShowDifferences:s}),oldValue:e,value:t,status:p(e,t)}:i.isObject(e)&&i.isObject(t)?{key:"",type:"object",children:E(e,t,{onlyShowDifferences:s}),oldValue:e,value:t,status:p(e,t)}:{key:"",type:"value",oldValue:e,value:t,status:p(e,t)}}function E(e,t,{onlyShowDifferences:s=!1}={}){return Object.keys({...e,...t}).map(r=>S(e?.[r],t?.[r],r,{onlyShowDifferences:s})).filter(r=>!s||r.status!=="unchanged")}function S(e,t,s,{onlyShowDifferences:n=!1}={}){const r=_(e);return r==="object"?{key:s,type:r,children:E(e,t,{onlyShowDifferences:n}),oldValue:e,value:t,status:p(e,t)}:r==="array"?{key:s,type:r,children:D(e,t,{onlyShowDifferences:n}),value:t,oldValue:e,status:p(e,t)}:{key:s,type:r,value:t,oldValue:e,status:p(e,t)}}function D(e,t,{onlyShowDifferences:s=!1}={}){const n=Math.max(0,e?.length,t?.length);return Array.from({length:n},(r,o)=>S(e?.[o],t?.[o],o,{onlyShowDifferences:s})).filter(r=>!s||r.status!=="unchanged")}function _(e){return e===null?"value":Array.isArray(e)?"array":typeof e=="object"?"object":"value"}function p(e,t){if(e===void 0)return"added";if(t===void 0)return"removed";const s=_(e)==="object"&&_(t)==="object",n=_(e)==="array"&&_(t)==="array";return i.isEqual(e,t)?"unchanged":s||n?"children-updated":"updated"}function W({diff:e}){return a("div",{class:"diffs-viewer"},[a("ul",null,[R({diff:e,showKeys:!1})])])}function R({diff:e,showKeys:t=!0}){const{type:s,status:n}=e;return n==="updated"?Z({diff:e,showKeys:t}):s==="array"?C({diff:e,showKeys:t,showChildrenKeys:!1,openTag:"[",closeTag:"]"}):s==="object"?C({diff:e,showKeys:t,openTag:"{",closeTag:"}"}):X({diff:e,showKeys:t})}function X({diff:e,showKeys:t}){const{value:s,key:n,status:r,oldValue:o}=e,u=r==="removed"?o:s;return a("li",null,[a("span",{class:[r,"result"]},[t&&a(y,null,[a("span",{class:"key"},[n]),": "]),x({value:u,status:r})]),T(",")])}function Z({diff:e,showKeys:t}){const{value:s,key:n,oldValue:r}=e;return a("li",{class:"updated-line"},[t&&a(y,null,[a("span",{class:"key"},[n]),": "]),x({value:r,status:"removed"}),x({value:s,status:"added"}),T(",")])}function C({diff:e,openTag:t,closeTag:s,showKeys:n,showChildrenKeys:r=!0}){const{children:o,key:u,status:c,type:f}=e;return a("li",null,[a("div",{class:[f,c],style:{display:"inline-block"}},[n&&a(y,null,[a("span",{class:"key"},[u]),": "]),t,o.length>0&&a("ul",null,[o.map(d=>R({diff:d,showKeys:r}))]),`${s},`])])}function ee(e){return i.isNull(e)?"null":JSON.stringify(e)}function x({value:e,status:t}){const s=ee(e),{copy:n}=w({source:s});return a("span",{class:["value",t],onClick:()=>n()},[s])}const te={key:0},se={flex:"","justify-center":""},re={key:0,"text-center":"","op-70":""},ne=b({__name:"diff-viewer",props:{leftJson:{},rightJson:{}},setup(e){const t=e;F(d=>({"7a613f80":l(o).text.mutedColor,ed7825ee:l(o).success.colorFaded,"31e3079f":l(o).success.color,"8956bfb8":l(o).error.colorFaded,"3a20e0b8":l(o).error.color,"29d2da8a":l(o).text.baseColor}));const s=g(!1),{leftJson:n,rightJson:r}=$(t),o=L(),u=m(()=>Q(n.value,r.value,{onlyShowDifferences:s.value})),c=m(()=>i.isEqual(n.value,r.value)),f=m(()=>!i.isUndefined(n.value)&&!i.isUndefined(r.value));return(d,A)=>{const q=H,O=G,U=Y;return l(f)?(v(),J("div",te,[I("div",se,[a(O,{label:"Only show differences","label-placement":"left"},{default:N(()=>[a(q,{value:l(s),"onUpdate:value":A[0]||(A[0]=B=>k(s)?s.value=B:null)},null,8,["value"])]),_:1})]),a(U,{"data-test-id":"diff-result"},{default:N(()=>[l(c)?(v(),J("div",re," The provided JSONs are the same ")):(v(),j(l(W),{key:1,diff:l(u)},null,8,["diff"]))]),_:1})])):P("",!0)}}});const ae=z(ne,[["__scopeId","data-v-d84bb557"]]),_e=b({__name:"json-diff",setup(e){const t=g(""),s=g(""),n=m(()=>V(()=>h.parse(t.value),void 0)),r=m(()=>V(()=>h.parse(s.value),void 0)),o=[{validator:u=>u===""||K(()=>h.parse(u)),message:"Invalid JSON format"}];return(u,c)=>{const f=M;return v(),J(y,null,[a(f,{value:l(t),"onUpdate:value":c[0]||(c[0]=d=>k(t)?t.value=d:null),"validation-rules":o,label:"Your first JSON",placeholder:"Paste your first JSON here...",rows:"20",multiline:"","test-id":"leftJson","raw-text":"",monospace:""},null,8,["value"]),a(f,{value:l(s),"onUpdate:value":c[1]||(c[1]=d=>k(s)?s.value=d:null),"validation-rules":o,label:"Your JSON to compare",placeholder:"Paste your JSON to compare here...",rows:"20",multiline:"","test-id":"rightJson","raw-text":"",monospace:""},null,8,["value"]),a(ae,{"left-json":l(n),"right-json":l(r)},null,8,["left-json","right-json"])],64)}}});export{_e as default};
