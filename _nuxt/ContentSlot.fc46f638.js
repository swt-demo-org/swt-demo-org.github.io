import{a as c}from"./utils.ecdce029.js";import{f as g,a4 as h,ac as m,l as y,a7 as p}from"./entry.15548f8f.js";import"./preview.e463f309.js";import"./index.cd32510b.js";const U=g({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:i}=h(),{between:s,default:l}=m(),u=y(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:u,between:s,parent:i}},render({use:e,unwrap:i,fallbackSlot:s,between:l,tags:u,parent:n}){var f;try{let o=e;if(typeof e=="string"&&(o=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!o)return s?s():p("div");if(!i)return[o()];const{flatUnwrap:d}=c(),a=d(o(),u);return l?a.flatMap((t,r)=>r===0?[t]:[l(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{U as default};
