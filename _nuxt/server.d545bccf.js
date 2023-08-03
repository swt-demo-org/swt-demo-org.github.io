import{h as L}from"./index.cd32510b.js";import{u as q}from"./asyncData.88786b73.js";import{h as d,l as C,X as B,P as O,S as W,_ as G,$ as z,a0 as H,a1 as J,f as N,a2 as K,o as V,c as j,a as w,t as F,d as X,b}from"./entry.15548f8f.js";import{s as Y}from"./button.esm.a668e176.js";import"./basecomponent.esm.a967ec16.js";import"./index.esm.ec58c5ce.js";import"./baseicon.esm.2e7e59f1.js";function Q(e,t,n){const[a={},o]=typeof t=="string"?[{},t]:[t,n],r=a.key||L([o,d(a.baseURL),typeof e=="string"?e:"",d(a.params||a.query)]);if(!r||typeof r!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+r);if(!e)throw new Error("[nuxt] [useFetch] request is missing.");const s=r===o?"$f"+r:r,i=C(()=>{let h=e;return typeof h=="function"&&(h=h()),d(h)});if(!a.baseURL&&typeof i.value=="string"&&i.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:m,lazy:f,default:u,transform:v,pick:y,watch:g,immediate:$,...x}=a,c=B({...x,cache:typeof a.cache=="boolean"?void 0:a.cache}),l={server:m,lazy:f,default:u,transform:v,pick:y,immediate:$,watch:g===!1?[]:[c,i,...g||[]]};let p;return q(s,()=>{var I;return(I=p==null?void 0:p.abort)==null||I.call(p),p=typeof AbortController<"u"?new AbortController:{},typeof i.value=="string"&&i.value.startsWith("/"),(a.$fetch||globalThis.$fetch)(i.value,{signal:p.signal,...c})},l)}function S(e){return z()?(H(e),!0):!1}function D(e){return typeof e=="function"?e():d(e)}const P=typeof window<"u";function Z(e=0,t={}){const n=O(e),{max:a=1/0,min:o=-1/0}=t,r=(u=1)=>n.value=Math.min(a,n.value+u),s=(u=1)=>n.value=Math.max(o,n.value-u),i=()=>n.value,m=u=>n.value=Math.max(o,Math.min(a,u));return{count:n,inc:r,dec:s,get:i,set:m,reset:(u=e)=>(e=u,m(u))}}function ee(e,t=1e3,n={}){const{immediate:a=!0,immediateCallback:o=!1}=n;let r=null;const s=O(!1);function i(){r&&(clearInterval(r),r=null)}function m(){s.value=!1,i()}function f(){const u=D(t);u<=0||(s.value=!0,o&&e(),i(),r=setInterval(e,u))}if(a&&P&&f(),W(t)||typeof t=="function"){const u=G(t,()=>{s.value&&P&&f()});S(u)}return S(m),{isActive:s,pause:m,resume:f}}const te=P?window:void 0;function ne(e,t={}){const{immediate:n=!0,window:a=te}=t,o=O(!1);let r=0,s=null;function i(u){if(!o.value||!a)return;const v=u-(r||u);e({delta:v,timestamp:u}),r=u,s=a.requestAnimationFrame(i)}function m(){!o.value&&a&&(o.value=!0,s=a.requestAnimationFrame(i))}function f(){o.value=!1,s!=null&&a&&(a.cancelAnimationFrame(s),s=null)}return n&&m(),S(f),{isActive:J(o),pause:f,resume:m}}var ae=Object.defineProperty,E=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,M=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t)=>{for(var n in t||(t={}))oe.call(t,n)&&M(e,n,t[n]);if(E)for(var n of E(t))re.call(t,n)&&M(e,n,t[n]);return e};function ie(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,a=O(new Date),o=()=>a.value=new Date,r=n==="requestAnimationFrame"?ne(o,{immediate:!0}):ee(o,n,{immediate:!0});return t?se({now:a},r):a}var ue=Object.defineProperty,A=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ce=(e,t)=>{for(var n in t||(t={}))R.call(t,n)&&T(e,n,t[n]);if(A)for(var n of A(t))U.call(t,n)&&T(e,n,t[n]);return e},le=(e,t)=>{var n={};for(var a in e)R.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&A)for(var a of A(e))t.indexOf(a)<0&&U.call(e,a)&&(n[a]=e[a]);return n};const fe=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:1/0,value:31536e6,name:"year"}],me={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function pe(e){return e.toISOString().slice(0,10)}function de(e,t={}){const{controls:n=!1,updateInterval:a=3e4}=t,o=ie({interval:a,controls:!0}),{now:r}=o,s=le(o,["now"]),i=C(()=>ve(new Date(D(e)),t,D(r)));return n?ce({timeAgo:i},s):i}function ve(e,t={},n=Date.now()){var a;const{max:o,messages:r=me,fullDateFormatter:s=pe,units:i=fe,showSecond:m=!1,rounding:f="round"}=t,u=typeof f=="number"?c=>+c.toFixed(f):Math[f],v=+n-+e,y=Math.abs(v);function g(c,l){return u(Math.abs(c)/l.value)}function $(c,l){const p=g(c,l),_=c>0,h=x(l.name,p,_);return x(_?"past":"future",h,_)}function x(c,l,p){const _=r[c];return typeof _=="function"?_(l,p):_.replace("{0}",l.toString())}if(y<6e4&&!m)return r.justNow;if(typeof o=="number"&&y>o)return s(new Date(e));if(typeof o=="string"){const c=(a=i.find(l=>l.name===o))==null?void 0:a.max;if(c&&y>c)return s(new Date(e))}for(const[c,l]of i.entries()){if(g(v,l)<=0&&i[c-1])return $(v,i[c-1]);if(y<l.max)return $(v,l)}return r.invalid}function k(e){let t,n=e[0],a=1;for(;a<e.length;){const o=e[a],r=e[a+1];if(a+=2,(o==="optionalAccess"||o==="optionalCall")&&n==null)return;o==="access"||o==="optionalAccess"?(t=n,n=r(n)):(o==="call"||o==="optionalCall")&&(n=r((...s)=>n.call(t,...s)),t=void 0)}return n}const _e={class:"text-gray:80 text-2xl"},he={"font-500":"","text-gray":""},ye={"text-gray":""},we=N({__name:"PageView",async setup(e){let t,n;const{data:a}=([t,n]=K(()=>Q("/api/pageview","$GYaFMVMIJ4")),t=await t,n(),t),o=de(C(()=>k([a,"access",s=>s.value,"optionalAccess",s=>s.startAt]))),r=k([a,"access",s=>s.value,"optionalAccess",s=>s.pageview]);return(s,i)=>(V(),j("div",_e,[w("span",he,F(d(r)),1),X(" page views since "),w("span",ye,F(d(o)),1)]))}}),ge={class:"card"},$e=w("h2",null,"Server API Usage",-1),xe=w("h2",null,"Counter (useState)",-1),Ae={class:"grid grid-cols-3 w-80 mt-8"},Oe={class:"text-4xl"},Ee=N({__name:"server",setup(e){const t=Z();return(n,a)=>{const o=we,r=Y;return V(),j("div",ge,[$e,b(o),xe,w("div",Ae,[b(r,{icon:"pi pi-plus",class:"p-button-rounded p-button-info",onClick:a[0]||(a[0]=s=>d(t).inc())}),w("span",Oe,F(d(t).count),1),b(r,{icon:"pi pi-minus",class:"p-button-rounded p-button-success",onClick:a[1]||(a[1]=s=>d(t).dec())})])])}}});export{Ee as default};
