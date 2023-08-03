import{s as m}from"./basecomponent.esm.db2113e5.js";import{v as I,o as i,c as p,q as u,d as P,t as v,s as r,O as c,R as k,B as b,x as w,y as z,n as g,z as f,C as y,a as C}from"./entry.83941338.js";import{s as N}from"./index.esm.5d538a02.js";var O=`
.p-badge {
    display: inline-block;
    border-radius: 10px;
    text-align: center;
    padding: 0 .5rem;
}

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%,-50%);
    transform-origin: 100% 0;
    margin: 0;
}

.p-badge-dot {
    width: .5rem;
    min-width: .5rem;
    height: .5rem;
    border-radius: 50%;
    padding: 0;
}

.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}
`,T={root:function(t){var n=t.props,o=t.instance;return["p-badge p-component",{"p-badge-no-gutter":c.isNotEmpty(n.value)&&String(n.value).length===1,"p-badge-dot":c.isEmpty(n.value)&&!o.$slots.default,"p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warning":n.severity==="warning","p-badge-danger":n.severity==="danger"}]}},E=I(O,{name:"badge",manual:!0}),A=E.load,D={name:"BaseBadge",extends:m,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},css:{classes:T,loadStyle:A},provide:function(){return{$parentInstance:this}}},h={name:"Badge",extends:D};function L(e,t,n,o,a,d){return i(),p("span",r({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"badge"}),[u(e.$slots,"default",{},function(){return[P(v(e.value),1)]})],16)}h.render=L;function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function l(e,t,n){return t=V(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e){var t=R(e,"string");return s(t)==="symbol"?t:String(t)}function R(e,t){if(s(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(s(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var q={root:function(t){var n,o=t.instance,a=t.props;return["p-button p-component",(n={"p-button-icon-only":o.hasIcon&&!a.label&&!a.badge,"p-button-vertical":(a.iconPos==="top"||a.iconPos==="bottom")&&a.label,"p-disabled":o.$attrs.disabled||o.$attrs.disabled===""||a.loading,"p-button-loading":a.loading,"p-button-loading-label-only":a.loading&&!o.hasIcon&&a.label,"p-button-link":a.link},l(n,"p-button-".concat(a.severity),a.severity),l(n,"p-button-raised",a.raised),l(n,"p-button-rounded",a.rounded),l(n,"p-button-text",a.text),l(n,"p-button-outlined",a.outlined),l(n,"p-button-sm",a.size==="small"),l(n,"p-button-lg",a.size==="large"),l(n,"p-button-plain",a.plain),n)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(t){var n=t.props;return["p-button-icon",{"p-button-icon-left":n.iconPos==="left"&&n.label,"p-button-icon-right":n.iconPos==="right"&&n.label,"p-button-icon-top":n.iconPos==="top"&&n.label,"p-button-icon-bottom":n.iconPos==="bottom"&&n.label}]},label:"p-button-label"},K={name:"BaseButton",extends:m,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},css:{classes:q},provide:function(){return{$parentInstance:this}}},U={name:"Button",extends:K,methods:{getPTOptions:function(t){return this.ptm(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:N,Badge:h},directives:{ripple:k}},F=["aria-label","disabled","data-pc-severity"];function G(e,t,n,o,a,d){var S=b("SpinnerIcon"),$=b("Badge"),B=w("ripple");return z((i(),p("button",r({class:e.cx("root"),type:"button","aria-label":d.defaultAriaLabel,disabled:d.disabled},d.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":e.severity}),[u(e.$slots,"default",{},function(){return[e.loading?u(e.$slots,"loadingicon",{key:0,class:g([e.cx("loadingIcon"),e.cx("icon")])},function(){return[e.loadingIcon?(i(),p("span",r({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(i(),f(S,r({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):u(e.$slots,"icon",{key:1,class:g(e.cx("icon"))},function(){return[e.icon?(i(),p("span",r({key:0,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):y("",!0)]}),C("span",r({class:e.cx("label")},e.ptm("label")),v(e.label||" "),17),e.badge?(i(),f($,r({key:2,value:e.badge,class:e.badgeClass,unstyled:e.unstyled},e.ptm("badge")),null,16,["value","class","unstyled"])):y("",!0)]})],16,F)),[[B]])}U.render=G;export{U as s};
