import{d as T,h as w,g as P,F as d,i as x,j as f,b as h,o as y,c as k,f as t,w as o,m as S,u as p,k as R,e as i,l as U,s as A,p as D,n as L,_ as M}from"./index-48fb6c4a.js";import{u as O}from"./useDataTable-7713bbf7.js";const g=c=>(D("data-v-503400d6"),c=c(),L(),c),F={class:"card"},$={class:"datatable-header"},j=g(()=>i("h5",null,"Мои заказы",-1)),B={class:"p-input-icon-left"},E=g(()=>i("i",{class:"pi pi-search"},null,-1)),q=T({__name:"my-messages",setup(c){const I=w(),v=P(),{tableData:_,filters:s,dataTableRef:V,exportCSV:z}=O();s.value={global:{value:null,matchMode:d.CONTAINS},orderId:{value:null,matchMode:d.CONTAINS},authorName:{value:null,matchMode:d.CONTAINS},text:{value:null,matchMode:d.CONTAINS},createdAt:{value:null,matchMode:d.CONTAINS}};async function b(){const n=await fetch("/data/my-messages.json").then(r=>r.json());_.value=n}x(async()=>{await v.$load({name:"app-data"}).catch(n=>f.error(n)),f.debug(v.products),b(),f.debug(_)});const N={globalFilterFields:["orderId","text","createdAt","authorName"],filterDisplay:"row",stripedRows:!0,paginator:!0,rows:10,rowClass:()=>"cursor-pointer",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Показаны записи с {first} по {last}. Всего: {totalRecords}"};function C(n){I.push("/user/my-order-info?orderId="+n.data.orderId)}return(n,r)=>{const u=h("InputText"),m=h("Column");return y(),k("div",F,[t(p(A),S({ref_key:"dataTableRef",ref:V,filters:p(s),"onUpdate:filters":r[1]||(r[1]=e=>R(s)?s.value=e:null),value:p(_),"data-key":"name",class:"p-datatable-sm"},N,{onRowClick:C}),{header:o(()=>[i("div",$,[j,i("span",B,[E,t(u,{modelValue:p(s).global.value,"onUpdate:modelValue":r[0]||(r[0]=e=>p(s).global.value=e),placeholder:"Поиск"},null,8,["modelValue"])])])]),empty:o(()=>[U(" Записи не найдены ")]),default:o(()=>[t(m,{field:"orderId",header:"Номер заказа",sortable:!0},{filter:o(({filterModel:e,filterCallback:l})=>[t(u,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onInput:a=>l(),class:"p-column-filter"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),t(m,{field:"authorName",header:"Отправитель",sortable:!0},{filter:o(({filterModel:e,filterCallback:l})=>[t(u,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onInput:a=>l(),class:"p-column-filter"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),t(m,{field:"text",header:"Сообщение",sortable:!0},{filter:o(({filterModel:e,filterCallback:l})=>[t(u,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onInput:a=>l(),class:"p-column-filter"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),t(m,{field:"createdAt",header:"Время",sortable:!0},{filter:o(({filterModel:e,filterCallback:l})=>[t(u,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onInput:a=>l(),class:"p-column-filter"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1})]),_:1},16,["filters","value"])])}}});const J=M(q,[["__scopeId","data-v-503400d6"]]);export{J as default};
