import{U as B,o as l,c as u,a as p,s,v as X,Z as E,O as h,E as d,H as Y,L as $,R as _,B as P,x as ee,q as y,d as I,t as O,z as x,A,n as k,C as w,b as H,w as K,T as te,N as ne,F as R,r as ie,y as re}from"./entry.15548f8f.js";import{s as oe}from"./index.esm.8a786733.js";import{s as se}from"./baseicon.esm.2e7e59f1.js";import{s as le}from"./index.esm.ec58c5ce.js";import{s as ae}from"./index.esm.40399c3f.js";import{O as de}from"./overlayeventbus.esm.c47b1f1b.js";import{s as ue}from"./portal.esm.0c8771aa.js";import{s as pe}from"./virtualscroller.esm.abfce7f7.js";import{s as ce}from"./basecomponent.esm.a967ec16.js";var N={name:"FilterIcon",extends:se,computed:{pathId:function(){return"pv_icon_clip_".concat(B())}}},fe=["clipPath"],he=p("path",{d:"M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z",fill:"currentColor"},null,-1),ye=[he],be=["id"],ge=p("rect",{width:"14",height:"14",fill:"white"},null,-1),me=[ge];function Oe(t,e,n,r,o,i){return l(),u("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),[p("g",{clipPath:"url(#".concat(i.pathId,")")},ye,8,fe),p("defs",null,[p("clipPath",{id:"".concat(i.pathId)},me,8,be)])],16)}N.render=Oe;var ve=`
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}

.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}

.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-dropdown-label {
    cursor: default;
}

.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}

.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}

.p-dropdown-items-wrapper {
    overflow: auto;
}

.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-dropdown-item-group {
    cursor: auto;
}

.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-dropdown-filter {
    width: 100%;
}

.p-dropdown-filter-container {
    position: relative;
}

.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-dropdown {
    display: flex;
}

.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`,Ie={root:function(e){var n=e.instance,r=e.props,o=e.state;return["p-dropdown p-component p-inputwrapper",{"p-disabled":r.disabled,"p-dropdown-clearable":r.showClear&&!r.disabled,"p-focus":o.focused,"p-inputwrapper-filled":n.hasSelectedOption,"p-inputwrapper-focus":o.focused||o.overlayVisible,"p-overlay-open":o.overlayVisible}]},input:function(e){var n=e.instance,r=e.props;return["p-dropdown-label p-inputtext",{"p-placeholder":!r.editable&&n.label===r.placeholder,"p-dropdown-label-empty":!r.editable&&!n.$slots.value&&(n.label==="p-emptylabel"||n.label.length===0)}]},clearIcon:"p-dropdown-clear-icon",trigger:"p-dropdown-trigger",loadingicon:"p-dropdown-trigger-icon",dropdownIcon:"p-dropdown-trigger-icon",panel:function(e){var n=e.instance;return["p-dropdown-panel p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1}]},header:"p-dropdown-header",filterContainer:"p-dropdown-filter-container",filterInput:"p-dropdown-filter p-inputtext p-component",filterIcon:"p-dropdown-filter-icon",wrapper:"p-dropdown-items-wrapper",list:"p-dropdown-items",itemGroup:"p-dropdown-item-group",item:function(e){var n=e.instance,r=e.state,o=e.option,i=e.focusedOption;return["p-dropdown-item",{"p-highlight":n.isSelected(o),"p-focus":r.focusedOptionIndex===i,"p-disabled":n.isOptionDisabled(o)}]},emptyMessage:"p-dropdown-empty-message"},we=X(ve,{name:"dropdown",manual:!0}),Se=we.load,Fe={name:"BaseDropdown",extends:ce,props:{modelValue:null,options:Array,optionLabel:String||Function,optionValue:String||Function,optionDisabled:String||Function,optionGroupLabel:String||Function,optionGroupChildren:String||Function,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},disabled:{type:Boolean,default:!1},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},filterInputProps:{type:null,default:null},clearIconProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},css:{classes:Ie,loadStyle:Se},provide:function(){return{$parentInstance:this}}};function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function Le(t){return ke(t)||xe(t)||Ve(t)||Ce()}function Ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(t,e){if(t){if(typeof t=="string")return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(t,e)}}function xe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ke(t){if(Array.isArray(t))return G(t)}function G(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(r){q(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function q(t,e,n){return e=Ke(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ke(t){var e=Me(t,"string");return S(e)==="symbol"?e:String(e)}function Me(t,e){if(S(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(S(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var W={name:"Dropdown",extends:Fe,emits:["update:modelValue","change","focus","blur","before-show","before-hide","show","hide","filter"],outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,focusOnHover:!1,data:function(){return{id:this.$attrs.id,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||B()},modelValue:function(){this.isModelValueChanged=!0},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||B(),this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(E.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?h.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?h.resolveFieldData(e,this.optionValue):e},getOptionRenderKey:function(e,n){return(this.dataKey?h.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,r,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(r,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?h.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return h.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return h.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(r){return n.isOptionGroup(r)}).length:e)+1},show:function(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&d.focus(this.$refs.focusInput)},hide:function(e){var n=this,r=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.focusedOptionIndex=-1,n.searchValue="",n.resetFilterOnHide&&(n.filterValue=null),e&&d.focus(n.$refs.focusInput)};setTimeout(function(){r()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!n&&h.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}},onEditableInput:function(e){var n=e.target.value;this.searchValue="";var r=this.searchOptions(e,n);!r&&(this.focusedOptionIndex=-1),this.updateModel(e,n)},onContainerClick:function(e){this.disabled||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.tagName==="path"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0))},onClearClick:function(e){this.updateModel(e,null)},onFirstHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?d.getFirstFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;d.focus(n)},onLastHiddenFocus:function(e){var n=e.relatedTarget===this.$refs.focusInput?d.getLastFocusableElement(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;d.focus(n)},onOptionSelect:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,o=this.getOptionValue(n);this.updateModel(e,o),r&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onFilterChange:function(e){var n=e.target.value;this.filterValue=n,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:n}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){de.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!n)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var r=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,r),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n?(e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1):(this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show()),e.preventDefault()},onEndKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var r=e.currentTarget,o=r.value.length;r.setSelectionRange(o,o),this.focusedOptionIndex=-1}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(e),e.preventDefault()},onSpaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!n&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n||(this.overlayVisible&&this.hasFocusableElements()?(d.focus(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&!this.overlayVisible&&this.show()},onOverlayEnter:function(e){E.set("overlay",e,this.$primevue.config.zIndex.overlay),d.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&d.focus(this.$refs.filterInput)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){E.clear(e)},alignOverlay:function(){this.appendTo==="self"?d.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=d.getOuterWidth(this.$el)+"px",d.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&!e.$el.contains(n.target)&&!e.overlay.contains(n.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Y(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!d.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},hasFocusableElements:function(){return d.getFocusableElements(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(e){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},isValidOption:function(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.isValidOption(e)&&h.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return h.findLastIndex(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,r=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(o){return n.isValidOption(o)}):-1;return r>-1?r+e+1:e},findPrevOptionIndex:function(e){var n=this,r=e>0?h.findLastIndex(this.visibleOptions.slice(0,e),function(o){return n.isValidOption(o)}):-1;return r>-1?r:e},findSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,n){var r=this;this.searchValue=(this.searchValue||"")+n;var o=-1,i=!1;return this.focusedOptionIndex!==-1?(o=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(c){return r.isOptionMatched(c)}),o=o===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(c){return r.isOptionMatched(c)}):o+this.focusedOptionIndex):o=this.visibleOptions.findIndex(function(c){return r.isOptionMatched(c)}),o!==-1&&(i=!0),o===-1&&this.focusedOptionIndex===-1&&(o=this.findFirstFocusedOptionIndex()),o!==-1&&this.changeFocusedOptionIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),i},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,r=n!==-1?"".concat(this.id,"_").concat(n):this.focusedOptionId,o=d.findSingle(this.list,'li[id="'.concat(r,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(function(){e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)},0)},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(r,o,i){r.push({optionGroup:o,group:!0,index:i});var c=n.getOptionGroupChildren(o);return c&&c.forEach(function(v){return r.push(v)}),r},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,n=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var r=$.filter(n,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var o=this.options||[],i=[];return o.forEach(function(c){var v=e.getOptionGroupChildren(c),L=v.filter(function(M){return r.includes(M)});L.length>0&&i.push(j(j({},c),{},q({},typeof e.optionGroupChildren=="string"?e.optionGroupChildren:"items",Le(L))))}),this.flatOptions(i)}return r}return n},hasSelectedOption:function(){return h.isNotEmpty(this.modelValue)},label:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.modelValue||""},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return h.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},directives:{ripple:_},components:{VirtualScroller:pe,Portal:ue,TimesIcon:ae,ChevronDownIcon:oe,SpinnerIcon:le,FilterIcon:N}};function F(t){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?U(Object(n),!0).forEach(function(r){De(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function De(t,e,n){return e=Te(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Te(t){var e=Ee(t,"string");return F(e)==="symbol"?e:String(e)}function Ee(t,e){if(F(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(F(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Pe=["id"],Ae=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],He=["id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-disabled"],Be=["value","placeholder","aria-owns","aria-activedescendant"],Ge=["id"],Re=["id"],ze=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-highlight","data-p-focused","data-p-disabled"];function je(t,e,n,r,o,i){var c=P("SpinnerIcon"),v=P("VirtualScroller"),L=P("Portal"),M=ee("ripple");return l(),u("div",s({ref:"container",id:o.id,class:t.cx("root"),onClick:e[15]||(e[15]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},t.ptm("root"),{"data-pc-name":"dropdown"}),[t.editable?(l(),u("input",s({key:0,ref:"focusInput",id:t.inputId,type:"text",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:i.editableInputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onEditableInput&&i.onEditableInput.apply(i,arguments)})},g(g({},t.inputProps),t.ptm("input"))),null,16,Ae)):(l(),u("span",s({key:1,ref:"focusInput",id:t.inputId,class:[t.cx("input"),t.inputClass],style:t.inputStyle,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel||(i.label==="p-emptylabel"?void 0:i.label),"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":o.id+"_list","aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[4]||(e[4]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[5]||(e[5]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[6]||(e[6]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},g(g({},t.inputProps),t.ptm("input"))),[y(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){return[I(O(i.label==="p-emptylabel"?" ":i.label||"empty"),1)]})],16,He)),t.showClear&&t.modelValue!=null?y(t.$slots,"clearicon",{key:2,class:k(t.cx("clearIcon")),onClick:i.onClearClick},function(){return[(l(),x(A(t.clearIcon?"i":"TimesIcon"),s({ref:"clearIcon",class:[t.cx("clearIcon"),t.clearIcon],onClick:i.onClearClick},g(g({},t.clearIconProps),t.ptm("clearIcon")),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):w("",!0),p("div",s({class:t.cx("trigger")},t.ptm("trigger")),[t.loading?y(t.$slots,"loadingicon",{key:0,class:k(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(l(),u("span",s({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(l(),x(c,s({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):y(t.$slots,"dropdownicon",{key:1,class:k(t.cx("dropdownIcon"))},function(){return[(l(),x(A(t.dropdownIcon?"span":"ChevronDownIcon"),s({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),H(L,{appendTo:t.appendTo},{default:K(function(){return[H(te,{name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},{default:K(function(){return[o.overlayVisible?(l(),u("div",s({key:0,ref:i.overlayRef,class:[t.cx("panel"),t.panelClass],style:t.panelStyle,onClick:e[13]||(e[13]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[14]||(e[14]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},g(g({},t.panelProps),t.ptm("panel"))),[p("span",s({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[7]||(e[7]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),y(t.$slots,"header",{value:t.modelValue,options:i.visibleOptions}),t.filter?(l(),u("div",s({key:0,class:t.cx("header")},t.ptm("header")),[p("div",s({class:t.cx("filterContainer")},t.ptm("filterContainer")),[p("input",s({ref:"filterInput",type:"text",value:o.filterValue,onVnodeMounted:e[8]||(e[8]=function(){return i.onFilterUpdated&&i.onFilterUpdated.apply(i,arguments)}),class:t.cx("filterInput"),placeholder:t.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":i.focusedOptionId,onKeydown:e[9]||(e[9]=function(){return i.onFilterKeyDown&&i.onFilterKeyDown.apply(i,arguments)}),onBlur:e[10]||(e[10]=function(){return i.onFilterBlur&&i.onFilterBlur.apply(i,arguments)}),onInput:e[11]||(e[11]=function(){return i.onFilterChange&&i.onFilterChange.apply(i,arguments)})},g(g({},t.filterInputProps),t.ptm("filterInput"))),null,16,Be),y(t.$slots,"filtericon",{class:k(t.cx("filterIcon"))},function(){return[(l(),x(A(t.filterIcon?"span":"FilterIcon"),s({class:[t.cx("filterIcon"),t.filterIcon]},t.ptm("filterIcon")),null,16,["class"]))]})],16),p("span",s({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),O(i.filterResultMessageText),17)],16)):w("",!0),p("div",s({class:t.cx("wrapper"),style:{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("wrapper")),[H(v,s({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{items:i.visibleOptions,style:{height:t.scrollHeight},tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),ne({content:K(function(m){var D=m.styleClass,Z=m.contentRef,C=m.items,b=m.getItemOptions,J=m.contentStyle,V=m.itemSize;return[p("ul",s({ref:function(f){return i.listRef(f,Z)},id:o.id+"_list",class:[t.cx("list"),D],style:J,role:"listbox"},t.ptm("list")),[(l(!0),u(R,null,ie(C,function(a,f){return l(),u(R,{key:i.getOptionRenderKey(a,i.getOptionIndex(f,b))},[i.isOptionGroup(a)?(l(),u("li",s({key:0,id:o.id+"_"+i.getOptionIndex(f,b),style:{height:V?V+"px":void 0},class:t.cx("itemGroup"),role:"option"},t.ptm("itemGroup")),[y(t.$slots,"optiongroup",{option:a.optionGroup,index:i.getOptionIndex(f,b)},function(){return[I(O(i.getOptionGroupLabel(a.optionGroup)),1)]})],16,Re)):re((l(),u("li",s({key:1,id:o.id+"_"+i.getOptionIndex(f,b),class:t.cx("item",{option:a,focusedOption:i.getOptionIndex(f,b)}),style:{height:V?V+"px":void 0},role:"option","aria-label":i.getOptionLabel(a),"aria-selected":i.isSelected(a),"aria-disabled":i.isOptionDisabled(a),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(f,b)),onClick:function(T){return i.onOptionSelect(T,a)},onMousemove:function(T){return i.onOptionMouseMove(T,i.getOptionIndex(f,b))},"data-p-highlight":i.isSelected(a),"data-p-focused":o.focusedOptionIndex===i.getOptionIndex(f,b),"data-p-disabled":i.isOptionDisabled(a)},i.getPTOptions(a,b,f,"item")),[y(t.$slots,"option",{option:a,index:i.getOptionIndex(f,b)},function(){return[I(O(i.getOptionLabel(a)),1)]})],16,ze)),[[M]])],64)}),128)),o.filterValue&&(!C||C&&C.length===0)?(l(),u("li",s({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[y(t.$slots,"emptyfilter",{},function(){return[I(O(i.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(l(),u("li",s({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[y(t.$slots,"empty",{},function(){return[I(O(i.emptyMessageText),1)]})],16)):w("",!0)],16,Ge)]}),_:2},[t.$slots.loader?{name:"loader",fn:K(function(m){var D=m.options;return[y(t.$slots,"loader",{options:D})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),y(t.$slots,"footer",{value:t.modelValue,options:i.visibleOptions}),!t.options||t.options&&t.options.length===0?(l(),u("span",s({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),O(i.emptyMessageText),17)):w("",!0),p("span",s({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),O(i.selectedMessageText),17),p("span",s({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[12]||(e[12]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):w("",!0)]}),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,Pe)}W.render=je;const $e=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{N as a,$e as d,W as s};
