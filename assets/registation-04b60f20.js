import{d as c,r as u,a as d,b as o,o as p,c as _,e as f,f as n,w as v,u as b,_ as h}from"./index-a031bde1.js";const x={class:"layout"},y={class:"card"},k=c({__name:"registation",setup(V){const s=u([{$el:"h5",children:"Регистрация"},{$formkit:"primeInputText",name:"fullName",label:"Имя",validation:"required"},{$formkit:"primeInputText",name:"email",label:"Email",validation:"required | email"},{$formkit:"primeInputText",type:"tel",name:"phoneNumber",label:"Телефон",validation:""},{$el:"span",children:"Вам будет отправлен временный пароль. Вы сможете изменить его после входа."}]),e=d({});async function i(){await new Promise(t=>setTimeout(t,1e3))}return(t,a)=>{const l=o("FormKitSchema"),m=o("FormKit");return p(),_("div",x,[f("div",y,[n(m,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r),type:"form","submit-label":"Зарегистрироваться","submit-attrs":{inputClass:"p-button p-component"},onSubmit:i},{default:v(()=>[n(l,{schema:b(s),data:e.value},null,8,["schema","data"])]),_:1},8,["modelValue"])])])}}});const g=h(k,[["__scopeId","data-v-922236c3"]]);export{g as default};