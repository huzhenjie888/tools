import{_ as a}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-02d988c3.js";import{J as r}from"./index-d4e515d0.js";import{w as i}from"./defaults-4d6daddf.js";import{d as s,E as l,o as p}from"./index-9f81791e.js";import"./TextareaCopyable-1ecafa3c.js";import"./copy-ca62dfd9.js";import"./Copy-8393bb39.js";import"./Scrollbar-afa78041.js";const u=`{
	"hello": [
		"world"
	]
}`,w=s({__name:"json-minify",setup(m){const t=o=>i(()=>JSON.stringify(r.parse(o),null,0),""),e=[{validator:o=>o===""||r.parse(o),message:"Provided JSON is not valid."}];return(o,f)=>{const n=a;return p(),l(n,{"input-label":"Your raw JSON","input-default":u,"input-placeholder":"Paste your raw JSON here...","output-label":"Minified version of your JSON","output-language":"json","input-validation-rules":e,transformer:t})}}});export{w as default};
