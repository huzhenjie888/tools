import{d as R,bV as w,v as s,j as f,F as g,r as k,n as c,o as v,E as x,w as a,k as u,m as p,s as K}from"./index-9f81791e.js";import{_ as C}from"./InputGroupLabel-4aae0c1d.js";import{_ as F}from"./InputNumber-1b763fe2.js";import{_ as N}from"./InputGroup-3e94ef53.js";import"./use-locale-d840bf60.js";import"./use-form-item-46895a8e.js";import"./Input-72ef33b2.js";import"./Button-940ace79.js";import"./Remove-49566c12.js";import"./Add-54b1840e.js";const b=e=>e+273.15,D=e=>e-273.15,B=e=>(e+459.67)*(5/9),E=e=>e*(9/5)-459.67,V=e=>e*(5/9),j=e=>e*(9/5),y=e=>373.15-2/3*e,U=e=>3/2*(373.15-e),L=e=>e*(100/33)+273.15,M=e=>(e-273.15)*(33/100),O=e=>e*(5/4)+273.15,S=e=>(e-273.15)*(4/5),$=e=>(e-7.5)*(40/21)+273.15,q=e=>(e-273.15)*(21/40)+7.5,Y=R({__name:"temperature-converter",setup(e){const n=w({kelvin:{title:"Kelvin",unit:"K",ref:0,toKelvin:s.identity,fromKelvin:s.identity},celsius:{title:"Celsius",unit:"°C",ref:0,toKelvin:b,fromKelvin:D},fahrenheit:{title:"Fahrenheit",unit:"°F",ref:0,toKelvin:B,fromKelvin:E},rankine:{title:"Rankine",unit:"°R",ref:0,toKelvin:V,fromKelvin:j},delisle:{title:"Delisle",unit:"°De",ref:0,toKelvin:y,fromKelvin:U},newton:{title:"Newton",unit:"°N",ref:0,toKelvin:L,fromKelvin:M},reaumur:{title:"Réaumur",unit:"°Ré",ref:0,toKelvin:O,fromKelvin:S},romer:{title:"Rømer",unit:"°Rø",ref:0,toKelvin:$,fromKelvin:q}});function m(i){const{ref:_,toKelvin:o}=n[i],r=o(_)??0;s.chain(n).omit(i).forEach(({fromKelvin:l},t)=>{n[t].ref=Math.floor((l(r)??0)*100)/100}).value()}return m("kelvin"),(i,_)=>{const o=C,r=F,l=N;return v(),f("div",null,[(v(!0),f(g,null,k(Object.entries(c(n)),([t,{title:d,unit:h}])=>(v(),x(l,{key:t,"mb-3":"","w-full":""},{default:a(()=>[u(o,{style:{width:"100px"}},{default:a(()=>[p(K(d),1)]),_:2},1024),u(r,{value:c(n)[t].ref,"onUpdate:value":[T=>c(n)[t].ref=T,()=>m(t)],style:{flex:"1"}},null,8,["value","onUpdate:value"]),u(o,{style:{width:"50px"}},{default:a(()=>[p(K(h),1)]),_:2},1024)]),_:2},1024))),128))])}}});export{Y as default};