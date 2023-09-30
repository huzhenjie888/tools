import{_ as f}from"./InputCopyable.vue_vue_type_script_setup_true_lang-f107698c.js";import{d as b,ab as g,e as B,B as I,j as s,k as n,n as l,z as S,F as h,r as x,C as k,o,E as T}from"./index-9f81791e.js";import{c as i}from"./integer-base-converter.model-81b950ae.js";import{a as y,i as C,b as p}from"./ipv4-address-converter.service-96f1e3bd.js";import{_ as V}from"./Divider-186728fb.js";import"./content-copy-019a43b6.js";import"./copy-ca62dfd9.js";const H=b({__name:"ipv4-address-converter",setup(w){const e=g("ipv4-converter:ip","192.168.1.1"),u=B(()=>{const a=C({ip:e.value});return[{label:"Decimal: ",value:String(a)},{label:"Hexadecimal: ",value:i({fromBase:10,toBase:16,value:String(a)}).toUpperCase()},{label:"Binary: ",value:i({fromBase:10,toBase:2,value:String(a)})},{label:"Ipv6: ",value:p({ip:e.value})},{label:"Ipv6 (short): ",value:p({ip:e.value,prefix:"::ffff:"})}]}),{attrs:v}=I({source:e,rules:[{message:"Invalid ipv4 address",validator:a=>y({ip:a})}]});return(a,r)=>{const c=k,d=V,m=f;return o(),s("div",null,[n(c,{value:l(e),"onUpdate:value":r[0]||(r[0]=t=>S(e)?e.value=t:null),label:"The ipv4 address:",placeholder:"The ipv4 address..."},null,8,["value"]),n(d),(o(!0),s(h,null,x(l(u),({label:t,value:_})=>(o(),T(m,{key:t,label:t,"label-position":"left","label-width":"100px","label-align":"right","mb-2":"",value:l(v).validationStatus==="error"?"":_,placeholder:"Set a correct ipv4 address"},null,8,["label","value"]))),128))])}}});export{H as default};
