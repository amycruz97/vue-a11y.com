(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{322:function(e,t,n){},323:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},324:function(e,t,n){var r=n(32),s="["+n(323)+"]",i=RegExp("^"+s+s+"*"),a=RegExp(s+s+"*$"),o=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},325:function(e,t,n){var r=n(7),s=n(113);e.exports=function(e,t,n){var i,a;return s&&"function"==typeof(i=t.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&s(e,a),e}},327:function(e,t,n){},328:function(e,t,n){},329:function(e,t,n){},334:function(e,t,n){"use strict";var r=n(322);n.n(r).a},335:function(e,t,n){"use strict";var r=n(3),s=n(324).trim;r({target:"String",proto:!0,forced:n(342)("trim")},{trim:function(){return s(this)}})},337:function(e,t,n){"use strict";n(84);var r=n(37),s=n(2),i={name:"NewsletterForm",setup:function(e,t){var n=t.root,i=t.refs,a=Object(s.k)(null),o=Object(s.k)({}),l="email-".concat(Math.floor(1e3*Math.random()));function u(){return(u=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.emailField.validity.valid){e.next=3;break}throw new Error(i.emailField.validationMessage);case 3:i.newsletterForm.submit(),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),n.$announcer.assertive(o.value.msg),o.value={result:"error",msg:e.t0.message};case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(s.l)(a,(function(e){""===e&&(o.value={})})),{email:a,message:o,emailLabel:l,submitNewsletter:function(){return u.apply(this,arguments)}}}},a=(n(334),n(31)),o=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{ref:"newsletterForm",staticClass:"flex flex-wrap newsletter-form",attrs:{novalidate:"",method:"POST",action:e.$themeConfig.mailchimp},on:{submit:function(t){return t.preventDefault(),e.submitNewsletter(t)}}},[n("label",{staticClass:"flex flex-1",attrs:{for:e.emailLabel}},[n("span",{staticClass:"sr-only"},[e._v(e._s(e.$themeLocaleConfig.a11y.newsletter.placeholder))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],ref:"emailField",staticClass:"w-full p-4 border border-solid rounded-md outline-none newsletter-form-input c-border-color hover:border-accent focus:border-accent",attrs:{id:e.emailLabel,name:"EMAIL",type:"email",required:"",autocomplete:"email",placeholder:e.$themeLocaleConfig.a11y.newsletter.placeholder},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),e._t("button",[n("button",{staticClass:"-ml-2 text-black btn btn-accent newsletter-form-btn",attrs:{type:"submit"}},[e._v("\n      "+e._s(e.$themeLocaleConfig.newsletter.textButton)+"\n    ")])]),e._v(" "),n("span",{staticClass:"inline-block w-full px-4 py-2 mt-4 text-sm rounded-md newsletter-form-msg",class:{"newsletter-form-msg-success":"success"===e.message.result,"newsletter-form-msg-error":"error"===e.message.result}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.message.result,expression:"message.result"}],domProps:{textContent:e._s(e.message.msg)}})])],2)}),[],!1,null,null,null);t.a=o.exports},339:function(e,t,n){},340:function(e,t,n){"use strict";var r=n(327);n.n(r).a},341:function(e,t,n){"use strict";var r=n(185),s=n(9),i=n(18),a=n(32),o=n(186),l=n(187);r("match",1,(function(e,t,n){return[function(t){var n=a(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=s(e),u=String(this);if(!a.global)return l(a,u);var c=a.unicode;a.lastIndex=0;for(var f,h=[],d=0;null!==(f=l(a,u));){var p=String(f[0]);h[d]=p,""===p&&(a.lastIndex=o(u,i(a.lastIndex),c)),d++}return 0===d?null:h}]}))},342:function(e,t,n){var r=n(4),s=n(323);e.exports=function(e){return r((function(){return!!s[e]()||"​᠎"!="​᠎"[e]()||s[e].name!==e}))}},343:function(e,t,n){var r=n(8),s=n(6),i=n(112),a=n(325),o=n(12).f,l=n(81).f,u=n(183),c=n(119),f=n(190),h=n(14),d=n(4),p=n(41).set,m=n(189),g=n(5)("match"),v=s.RegExp,b=v.prototype,x=/a/g,y=/a/g,w=new v(x)!==x,_=f.UNSUPPORTED_Y;if(r&&i("RegExp",!w||_||d((function(){return y[g]=!1,v(x)!=x||v(y)==y||"/a/i"!=v(x,"i")})))){for(var C=function(e,t){var n,r=this instanceof C,s=u(e),i=void 0===t;if(!r&&s&&e.constructor===C&&i)return e;w?s&&!i&&(e=e.source):e instanceof C&&(i&&(t=c.call(e)),e=e.source),_&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=a(w?new v(e,t):v(e,t),r?this:b,C);return _&&n&&p(o,{sticky:n}),o},k=function(e){e in C||o(C,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},$=l(v),S=0;$.length>S;)k($[S++]);b.constructor=C,C.prototype=b,h(s,"RegExp",C)}m("RegExp")},344:function(e,t,n){"use strict";var r,s=n(3),i=n(26).f,a=n(18),o=n(117),l=n(32),u=n(118),c=n(28),f="".endsWith,h=Math.min,d=u("endsWith");s({target:"String",proto:!0,forced:!!(c||d||(r=i(String.prototype,"endsWith"),!r||r.writable))&&!d},{endsWith:function(e){var t=String(l(this));o(e);var n=arguments.length>1?arguments[1]:void 0,r=a(t.length),s=void 0===n?r:h(a(n),r),i=String(e);return f?f.call(t,i,s):t.slice(s-i.length,s)===i}})},345:function(e,t,n){"use strict";var r=n(185),s=n(183),i=n(9),a=n(32),o=n(116),l=n(186),u=n(18),c=n(187),f=n(85),h=n(4),d=[].push,p=Math.min,m=!h((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!s(e))return t.call(r,e,i);for(var o,l,u,c=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,h+"g");(o=f.call(m,r))&&!((l=m.lastIndex)>p&&(c.push(r.slice(p,o.index)),o.length>1&&o.index<r.length&&d.apply(c,o.slice(1)),u=o[0].length,p=l,c.length>=i));)m.lastIndex===o.index&&m.lastIndex++;return p===r.length?!u&&m.test("")||c.push(""):c.push(r.slice(p)),c.length>i?c.slice(0,i):c}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var s=a(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,s,n):r.call(String(s),t,n)},function(e,s){var a=n(r,e,this,s,r!==t);if(a.done)return a.value;var f=i(e),h=String(this),d=o(f,RegExp),g=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),b=new d(m?f:"^(?:"+f.source+")",v),x=void 0===s?4294967295:s>>>0;if(0===x)return[];if(0===h.length)return null===c(b,h)?[h]:[];for(var y=0,w=0,_=[];w<h.length;){b.lastIndex=m?w:0;var C,k=c(b,m?h:h.slice(w));if(null===k||(C=p(u(b.lastIndex+(m?0:w)),h.length))===y)w=l(h,w,g);else{if(_.push(h.slice(y,w)),_.length===x)return _;for(var $=1;$<=k.length-1;$++)if(_.push(k[$]),_.length===x)return _;w=y=C}}return _.push(h.slice(y)),_}]}),!m)},346:function(e,t,n){"use strict";var r=n(328);n.n(r).a},347:function(e,t,n){"use strict";var r=n(329);n.n(r).a},373:function(e,t,n){"use strict";var r=n(2),s={name:"Logo"},i=n(31),a=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("router-link",{staticClass:"inline-flex p-3 pt-2",attrs:{to:this.$localePath}},[t("img",{attrs:{src:"/vue-a11y-logo.svg",alt:"Vue A11y logo"}}),this._v(" "),t("span",{staticClass:"font-bold sr-only text-22 lg:ml-2 lg:not-sr-only "},[this._v("Vue A11y")])])}),[],!1,null,null,null).exports,o={name:"TheNavigation"},l=(n(340),Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"the-nav",attrs:{"aria-label":e.$themeLocaleConfig.a11y.landmarks.nav.main}},[n("ul",{staticClass:"flex items-center"},[e._l(e.$themeLocaleConfig.nav,(function(t){return n("li",{key:t.text,staticClass:"mr-1"},[n("router-link",{attrs:{to:t.link},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.href,i=(r.route,r.navigate),a=r.isActive;return[n("a",{staticClass:"px-3 py-3 border-b-4 border-transparent border-solid the-nav-link hover:border-accent",class:{"active border-accent":a&&0===e.$route.path.indexOf(t.link)},attrs:{href:s,"aria-current":a&&0===e.$route.path.indexOf(t.link)?"page":null},on:{click:i}},[e._v("\n          "+e._s(t.text)+"\n        ")])]}}],null,!0)})],1)})),e._v(" "),n("li",[n("ExternalLink",{staticClass:"px-3 py-3 border-b-4 border-transparent border-solid the-nav-link hover:border-accent",attrs:{href:"https://github.com/"+e.$themeConfig.repo,label:"Github"}})],1)],2)])}),[],!1,null,null,null).exports),u={name:"TheHeader",components:{Logo:a,SearchBox:n(375).a,TheNavigation:l},props:{bgSidebar:{type:Boolean,default:!1},hasSidebar:{type:Boolean,default:!1},isSidebarOpen:{type:Boolean,default:!1}},setup:function(e,t){var n=t.root,s=t.emit,i=n.$themeLocaleConfig.a11y.labels,a=i.menuButton?Object(r.a)((function(){return e.isSidebarOpen?i.menuButton.close:i.menuButton.open})):"Menu sidebar button";return Object(r.l)((function(){return n.$route.fullPath}),(function(){return e.isSidebarOpen&&s("toggle-sidebar")})),{menuButtonAriaLabel:a}}},c=(n(347),Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"relative z-10 flex flex-wrap w-full border-b header c-border-color container-layout",attrs:{itemscope:"",itemtype:"https://schema.org/Organization"}},[n("meta",{attrs:{itemprop:"name",content:e.$siteTitle}}),e._v(" "),e._l(e.$themeConfig.social,(function(e){return n("meta",{key:"meta-rich-"+e.name,attrs:{itemprop:"sameAs",content:e.link}})})),e._v(" "),n("div",{staticClass:"flex items-center justify-end w-1/5 h-16 md:pl-0 container-layout-pl md:w-1/7 lg:w-2/7",class:e.bgSidebar?"header-logo--bg":null},[n("div",{staticClass:"w-full"},[n("Logo")],1)]),e._v(" "),n("div",{staticClass:"flex items-center flex-grow-0 w-3/5 h-16 md:pr-0 md:w-auto md:flex-grow",class:{"w-4/5":!e.hasSidebar}},[n("form",{staticClass:"w-full lg:pl-10"},[n("SearchBox",{staticClass:"w-full",attrs:{role:"search"}})],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.hasSidebar,expression:"hasSidebar"}],staticClass:"flex items-center justify-end w-1/5 md:hidden"},[n("button",{staticClass:"flex px-4 py-2 mr-1 md:hidden",attrs:{type:"button","aria-controls":"s-sidebar-wrapper","aria-label":e.menuButtonAriaLabel,"aria-expanded":e.isSidebarOpen.toString()},on:{click:function(t){return e.$emit("toggle-sidebar")}}},[n("vp-icon",{attrs:{name:e.isSidebarOpen?"close":"menu",size:"23"}})],1)]),e._v(" "),n("div",{staticClass:"flex items-center h-16 header-nav md:justify-end container-layout-pr md:flex-grow"},[n("TheNavigation")],1)],2)}),[],!1,null,null,null));t.a=c.exports},375:function(e,t,n){"use strict";n(27),n(184),n(182),n(82),n(80),n(188),n(341),n(335),n(191),n(56),n(202),n(343),n(120),n(344),n(111),n(345);var r=n(199),s=n.n(r),i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=s()(t,"title","");return s()(t,"frontmatter.tags")&&(r+=" ".concat(t.frontmatter.tags.join(" "))),n&&(r+=" ".concat(n)),a(e,r)},a=function(e,t){var n=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},r=new RegExp("[^\0-]"),s=e.split(/\s+/g).map((function(e){return e.trim()})).filter((function(e){return!!e}));if(r.test(e))return s.some((function(e){return t.toLowerCase().indexOf(e)>-1}));var i=e.endsWith(" ");return new RegExp(s.map((function(e,t){return s.length!==t+1||i?"(?=.*\\b".concat(n(e),"\\b)"):"(?=.*\\b".concat(n(e),")")})).join("")+".+","gi").test(t)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var e=this.query.trim().toLowerCase();if(e){for(var t=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||10,r=this.$localePath,s=[],a=0;a<t.length&&!(s.length>=n);a++){var o=t[a];if(this.getPageLocalePath(o)===r&&this.isSearchable(o))if(i(e,o))s.push(o);else if(o.headers)for(var l=0;l<o.headers.length&&!(s.length>=n);l++){var u=o.headers[l];u.title&&i(e,o,u.title)&&s.push(Object.assign({},o,{path:o.path+"#"+u.slug,header:u}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(e){for(var t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable:function(e){var t=null;return null===t||(t=Array.isArray(t)?t:new Array(t)).filter((function(t){return e.path.match(t)})).length>0},onHotkey:function(e){e.srcElement===document.body&&["s","/"].includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus:function(e){this.focusIndex=e},unfocus:function(){this.focusIndex=-1}}},l=(n(346),n(31)),u=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown(t)}]}}),e._v(" "),e.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===e.focusIndex},on:{mousedown:function(t){return e.go(r)},mouseenter:function(t){return e.focus(r)}}},[n("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[n("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?n("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);t.a=u.exports},376:function(e,t,n){"use strict";var r={name:"TheMain"},s=n(31),i=Object(s.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{attrs:{id:"main"}},[t("span",{attrs:{id:"page-top"}}),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);t.a=i.exports},379:function(e,t,n){"use strict";var r=n(339);n.n(r).a},399:function(e,t,n){"use strict";n.r(t);var r={name:"TheFooter",components:{NewsletterForm:n(337).a}},s=(n(379),n(31)),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"relative z-10 footer"},[n("div",{staticClass:"flex justify-center w-full px-4 py-24 border border-solid lg:py-32 c-bg-secondary c-border-color"},[n("div",{staticClass:"max-w-md"},[n("div",{staticClass:"flex justify-center"},[n("vp-icon",{attrs:{name:"send",size:"1.6rem"}}),e._v(" "),n("span",{staticClass:"ml-2 text-3xl font-bold leading-7"},[e._v(e._s(e.$themeLocaleConfig.newsletter.title))])],1),e._v(" "),n("p",{staticClass:"mt-2 text-center",attrs:{id:"a-newsletter-description"}},[e._v("\n        "+e._s(e.$themeLocaleConfig.newsletter.description)+"\n      ")]),e._v(" "),n("NewsletterForm",{staticClass:"mt-6"}),e._v(" "),n("ul",{staticClass:"flex justify-center mt-16"},e._l(e.$themeConfig.social,(function(t){return n("li",{key:"footer-sn-"+t.icon,staticClass:"last:ml-4"},[n("a",{staticClass:"block p-5 border border-solid rounded-full c-border-color btn-social",attrs:{href:t.link,target:"_blank",rel:"me noopener"}},[n("span",{staticClass:"sr-only"},[e._v(e._s(t.name)+" Vue A11y "+e._s(e.$themeLocaleConfig.externalLinkText))]),e._v(" "),n("vp-icon",{staticStyle:{color:"var(--color-social-icons)"},attrs:{name:t.icon,size:"1.5rem"}})],1)])})),0)],1)]),e._v(" "),e._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"w-full py-6 text-center"},[t("span",{staticClass:"text-sm"},[this._v("MIT Licensed | Copyright © 2020")])])}],!1,null,null,null).exports,a=n(373),o=n(376),l={name:"Full",components:{TheFooter:i,TheHeading:a.a,TheMain:o.a}},u=Object(s.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"full-layout"},[t("TheHeading"),this._v(" "),t("TheMain",[this._t("default",[t(this.$frontmatter.view||"Home",{tag:"component"})])],2),this._v(" "),t("TheFooter")],1)}),[],!1,null,null,null);t.default=u.exports}}]);