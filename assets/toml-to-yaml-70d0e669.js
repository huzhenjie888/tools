import{_ as e}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-02d988c3.js";import{p as m}from"./toml-esm-9c5f6a1e.js";import{d as i,E as s,o as n,at as p}from"./index-9f81791e.js";import{w as l}from"./defaults-4d6daddf.js";import{i as u}from"./toml.services-387bcfeb.js";import"./TextareaCopyable-1ecafa3c.js";import"./copy-ca62dfd9.js";import"./Copy-8393bb39.js";import"./Scrollbar-afa78041.js";import"./boolean-c7e7c785.js";const b=i({__name:"toml-to-yaml",setup(f){const r=o=>o.trim()===""?"":l(()=>p(m(o)),""),t=[{validator:u,message:"Provided TOML is not valid."}];return(o,c)=>{const a=e;return n(),s(a,{"input-label":"Your TOML","input-placeholder":"Paste your TOML here...","output-label":"YAML from your TOML","output-language":"yaml","input-validation-rules":t,transformer:r})}}});export{b as default};