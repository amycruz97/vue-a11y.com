(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{327:function(t,e,a){},329:function(t,e,a){},341:function(t,e,a){"use strict";var r=a(327);a.n(r).a},348:function(t,e,a){"use strict";var r=a(329);a.n(r).a},349:function(t,e,a){},350:function(t,e,a){},374:function(t,e,a){"use strict";var r=a(2),n={name:"Logo"},i=a(21),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("RouterLink",{staticClass:"inline-flex p-3 pt-2",attrs:{to:this.$localePath}},[e("img",{attrs:{src:"/vue-a11y-logo.svg",alt:"Vue A11y logo"}}),this._v(" "),e("span",{staticClass:"font-bold sr-only text-22 lg:ml-2 lg:not-sr-only "},[this._v("Vue A11y")])])}),[],!1,null,null,null).exports,l={name:"TheNavigation"},o=(a(341),Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"the-nav",attrs:{"aria-label":t.$themeLocaleConfig.a11y.landmarks.nav.main}},[a("ul",{staticClass:"flex items-center"},[t._l(t.$themeLocaleConfig.nav,(function(e){return a("li",{key:e.text,staticClass:"mr-1"},[a("RouterLink",{attrs:{to:e.link},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.href,i=(r.route,r.navigate),s=r.isActive;return[a("a",{staticClass:"px-3 py-3 border-b-4 border-transparent border-solid the-nav-link hover:border-accent",class:{"active border-accent":s&&0===t.$route.path.indexOf(e.link)},attrs:{href:n,"aria-current":s&&0===t.$route.path.indexOf(e.link)?"page":null},on:{click:i}},[t._v("\n          "+t._s(e.text)+"\n        ")])]}}],null,!0)})],1)})),t._v(" "),a("li",[a("ExternalLink",{staticClass:"px-3 py-3 border-b-4 border-transparent border-solid the-nav-link hover:border-accent",attrs:{href:"https://github.com/"+t.$themeConfig.repo,label:"Github"}})],1)],2)])}),[],!1,null,null,null).exports),c={name:"TheHeader",components:{Logo:s,SearchBox:a(376).a,TheNavigation:o},props:{bgSidebar:{type:Boolean,default:!1},hasSidebar:{type:Boolean,default:!1},isSidebarOpen:{type:Boolean,default:!1}},setup:function(t,e){var a=e.root,n=e.emit,i=a.$themeLocaleConfig.a11y.labels,s=i.menuButton?Object(r.a)((function(){return t.isSidebarOpen?i.menuButton.close:i.menuButton.open})):"Menu sidebar button";return Object(r.l)((function(){return a.$route.fullPath}),(function(){return t.isSidebarOpen&&n("toggle-sidebar")})),{menuButtonAriaLabel:s}}},u=(a(348),Object(i.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"relative z-10 flex flex-wrap w-full border-b header c-border-color container-layout",attrs:{itemscope:"",itemtype:"https://schema.org/Organization"}},[a("meta",{attrs:{itemprop:"name",content:t.$siteTitle}}),t._v(" "),t._l(t.$themeConfig.social,(function(t){return a("meta",{key:"meta-rich-"+t.name,attrs:{itemprop:"sameAs",content:t.link}})})),t._v(" "),a("div",{staticClass:"flex items-center justify-end w-1/5 h-16 md:pl-0 container-layout-pl md:w-1/7 lg:w-2/7",class:t.bgSidebar?"header-logo--bg":null},[a("div",{staticClass:"w-full"},[a("Logo")],1)]),t._v(" "),a("div",{staticClass:"flex items-center flex-grow-0 w-3/5 h-16 md:pr-0 md:w-auto md:flex-grow",class:{"w-4/5":!t.hasSidebar}},[a("form",{staticClass:"w-full lg:pl-10"},[a("SearchBox",{staticClass:"w-full",attrs:{role:"search"}})],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasSidebar,expression:"hasSidebar"}],staticClass:"flex items-center justify-end w-1/5 md:hidden"},[a("button",{staticClass:"flex px-4 py-2 mr-1 md:hidden",attrs:{type:"button","aria-controls":"s-sidebar-wrapper","aria-label":t.menuButtonAriaLabel,"aria-expanded":t.isSidebarOpen.toString()},on:{click:function(e){return t.$emit("toggle-sidebar")}}},[a("vp-icon",{attrs:{name:t.isSidebarOpen?"close":"menu",size:"23"}})],1)]),t._v(" "),a("div",{staticClass:"flex items-center h-16 header-nav md:justify-end container-layout-pr md:flex-grow"},[a("TheNavigation")],1)],2)}),[],!1,null,null,null));e.a=u.exports},377:function(t,e,a){"use strict";var r={name:"TheMain"},n=a(21),i=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{attrs:{id:"main"}},[e("span",{attrs:{id:"page-top"}}),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},383:function(t,e,a){"use strict";var r=a(349);a.n(r).a},384:function(t,e,a){"use strict";var r=a(350);a.n(r).a},399:function(t,e,a){"use strict";a.r(e);var r=a(382),n=(a(326),a(2)),i=a(111),s=a(26),l={name:"BackToTop",props:{anchor:{type:String,default:"#page-top"},marginTop:{type:Number,default:100},threshold:{type:Number,default:500},selector:{type:String,default:"#main"}},setup:function(t,e){var a=t.marginTop,r=t.threshold,l=t.selector,o=(e.root,Object(n.k)(!1)),c=Object(n.k)(null),u=Object(s.a)((function(){if(c.value){var t=c.value.clientHeight-a;o.value=c.value.scrollTop>t}}),r);return Object(i.a)("scroll",u,{},l),Object(n.h)((function(){c.value=document.querySelector(l),u()})),{show:o}}},o=a(21),c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"fixed bottom-0 right-0 z-10 p-6 mb-10 mr-16",class:{block:this.show,hidden:!this.show},attrs:{href:this.anchor}},[e("span",{staticClass:"sr-only"},[this._v(this._s(this.$themeLocaleConfig.backToTopText))]),this._v(" "),e("vp-icon",{attrs:{name:"back-to-top",size:"24"}})],1)}),[],!1,null,null,null).exports,u=a(374),d=a(377),p=(a(330),a(33),a(182),a(83),a(56),a(43),a(57),a(81),a(35),/^[a-z]+:/i);function f(t,e,a){var r=t.children||[],n={title:t.title,children:[]};return r.length?(r.forEach((function(r){var i,s=Array.isArray(r),l=""===r;if(s&&(i=r[1],p.test(i)))return n.children.push({title:r[0],type:"external",path:r[1]});if(s&&"manual"===t.type)return n.children.push({title:r[0],path:r[1]});var o=e.find((function(t){return l?t.regularPath===a:0===t.regularPath.indexOf(a+(s?r[1]:r))}));return o?n.children.push({title:s?r[0]:o.title,path:o.regularPath}):void 0})),n):n}function h(t,e,a){var r=e.pages,n=e.themeConfig,i=Object.keys(a).length?a:n;if(!i.sidebar)return[];var s=function(t,e){for(var a in e){if(0===(/(\.html|\/)$/.test(t)?t:t+"/").indexOf(encodeURI(a)))return{base:a,config:"string"==typeof e[a]?e[e[a]]:e[a]}}return{}}(t,i.sidebar),l=s.base,o=s.config;return o?o.map((function(t){return f(t,r,l)})):[]}var b={name:"TheSidebar",setup:function(t,e){var a=e.root;return{items:Object(n.a)((function(){return h(a.$page.regularPath,a.$site,a.$themeLocaleConfig)}))}}},m=(a(383),Object(o.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative w-full sidebar"},[a("button",{staticClass:"absolute top-0 left-0 flex ml-4 -mt-10 text-xs md:hidden",attrs:{type:"button"},on:{click:function(e){return t.$emit("toggle-sidebar")}}},[a("vp-icon",{staticClass:"mt-1",attrs:{name:"corner-up-left",size:"8"}}),t._v(" "),a("span",{staticClass:"ml-2 font-bold uppercase"},[t._v("Close")]),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("menu sidebar")])],1),t._v(" "),a("nav",{staticClass:"mt-12 mb-10",attrs:{"aria-label":t.$themeLocaleConfig.a11y.landmarks.nav.secondary}},[t._l(t.items,(function(e,r){return[a("span",{key:"nav-heading-"+r,staticClass:"mt-12 ml-4 text-xl font-bold"},[t._v(t._s(e.title))]),t._v(" "),a("ul",{key:"nav-list-"+r,staticClass:"mt-3 mb-10 sidebar-list"},t._l(e.children,(function(e,n){return a("li",{key:"nav-list-"+r+"-item-"+n,staticClass:"pr-2 sidebar-list-item"},["external"===e.type?a("ExternalLink",{staticClass:"block px-4 py-1",attrs:{href:e.path,label:e.title}}):a("RouterLink",{attrs:{to:e.path},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.href,i=(r.route,r.navigate),s=r.isActive;return[a("a",{staticClass:"block px-4 py-1",class:{"active font-bold":s&&t.$route.path===e.path},attrs:{href:n,"aria-current":s&&t.$route.path===e.path?"page":null},on:{click:i}},[t._v("\n              "+t._s(e.title)+"\n            ")])]}}],null,!0)}),t._v(" "),t.$route.path===e.path&&0!==t.$frontmatter.sidebarDepth?a("ul",{staticClass:"xl:hidden"},t._l(t.$page.headers,(function(r,n){return a("li",{key:"sidebar-subHeader-"+n,staticClass:"pl-4"},[a("RouterLink",{attrs:{to:t.$page.regularPath+"#"+r.slug},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.href,s=(n.route,n.navigate,n.isActive);return[a("a",{staticClass:"block px-3 py-1 text-sm hover:underline",class:{"active underline font-bold":s&&t.$route.path===e.path},attrs:{href:i,"aria-current":s&&t.$route.path===e.path?"page":null}},[t._v("\n                  "+t._s(r.title)+"\n                ")])]}}],null,!0)})],1)})),0):t._e()],1)})),0)]}))],2)])}),[],!1,null,null,null).exports),v={name:"Layout",components:{TheMain:d.a,FocusLoop:r.a,TheHeading:u.a,TheSidebar:m,BackToTop:c},setup:function(t,e){var a=e.refs,r=Object(i.d)(a),n=r.isSidebarOpen;return{sidebarFixed:r.sidebarFixed,toggleSidebar:r.toggleSidebar,isSidebarOpen:n}}},g=(a(384),Object(o.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap main-layout"},[a("TheHeading",{staticClass:"relative z-10",attrs:{"has-sidebar":"","bg-sidebar":"","is-sidebar-open":t.isSidebarOpen},on:{"toggle-sidebar":t.toggleSidebar}}),t._v(" "),a("div",{ref:"sidebar",staticClass:"relative z-10 flex justify-end w-64 h-full sidebar-wrapper container-layout-pl lg:w-2/7",class:{"sidebar-wrapper-show":t.isSidebarOpen},attrs:{id:"s-sidebar-wrapper"}},[a("FocusLoop",{staticClass:"w-full",attrs:{disabled:!t.sidebarFixed,"is-visible":t.isSidebarOpen}},[a("TheSidebar",{attrs:{"is-sidebar-open":t.isSidebarOpen},on:{"toggle-sidebar":t.toggleSidebar}})],1)],1),t._v(" "),t.isSidebarOpen?a("div",{staticClass:"fixed top-0 left-0 z-0 w-full h-full opacity-50 sidebar-overlay md:hidden",on:{click:t.toggleSidebar}}):t._e(),t._v(" "),a("TheMain",{ref:"theMain",staticClass:"flex flex-grow main-wrapper container-layout-pr md:w-4/7 lg:flex-grow-0 lg:w-5/7"},[t._t("default",[a(t.$frontmatter.view||"Page",{tag:"component"})])],2),t._v(" "),a("BackToTop",{attrs:{"root-container":"#main"}})],1)}),[],!1,null,null,null));e.default=g.exports}}]);