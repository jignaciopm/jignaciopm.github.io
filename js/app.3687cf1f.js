(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],i[o]&&m.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7380112f"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t),s=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");o.type=n,o.request=s,a[1](o)}i[t]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=a("8fff"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:[t.isPortfolio?"body-portfolio":"body-no-portfolio"],attrs:{id:"app"}},[a("transition",{attrs:{mode:"out-in","enter-active-class":"animated slideInLeft","leave-active-class":"animated slideOutLeft"}},[t.isPortfolio?t._e():a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("span",{staticClass:"d-block d-lg-none"},[t._v("José Ignacio Palma")]),a("span",{staticClass:"d-none d-lg-block"},[a("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:"img/profile.jpg",alt:""}})])]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t.isEn?a("span",[t._v("About Me")]):t._e(),t.isEs?a("span",[t._v("Sobre Mi")]):t._e()])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/experience"}},[t.isEn?a("span",[t._v("Experience")]):t._e(),t.isEs?a("span",[t._v("Experiencia")]):t._e()])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/education"}},[t.isEn?a("span",[t._v("Education")]):t._e(),t.isEs?a("span",[t._v("Educación")]):t._e()])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/skills"}},[t.isEn?a("span",[t._v("Skills")]):t._e(),t.isEs?a("span",[t._v("Habilidades")]):t._e()])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/interests"}},[t.isEn?a("span",[t._v("Interests")]):t._e(),t.isEs?a("span",[t._v("Intereses")]):t._e()])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/portfolio"}},[t.isEn?a("span",[t._v("Portfolio")]):t._e(),t.isEs?a("span",[t._v("Portafolio")]):t._e()])],1)])])],1)]),a("transition",{attrs:{name:"custom-classes-transition",mode:"out-in","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"}},[a("router-view")],1),a("a",{staticClass:"hvr-sweep-to-right button-fixed",class:[t.isPortfolio?"button-fixed-portfolio":"button-fixed-resume"],on:{click:t.changeLenguage}},["en"==t.$store.state.language?a("span",[t._v("ES")]):t._e(),"es"==t.$store.state.language?a("span",[t._v("EN")]):t._e()])],1)])},o=[],r=(a("6762"),a("2fdb"),{data:function(){return{currentRoute:window.location.pathname}},mounted:function(){document.querySelector("body").classList.remove("nav-active"),document.title=this.$router.currentRoute.meta.title},updated:function(){document.querySelector("body").classList.remove("nav-active"),document.title=this.$router.currentRoute.meta.title,this.currentRoute=window.location.pathname},methods:{changeLenguage:function(){"en"==this.$store.state.language?this.$store.state.language="es":"es"==this.$store.state.language&&(this.$store.state.language="en")}},computed:{isPortfolio:function(){return this.currentRoute.includes("portfolio")},isEs:function(){return"es"==this.$store.state.language},isEn:function(){return"en"==this.$store.state.language}},watch:{$route:function(t,e){this.$store.state.loaded=!1}}}),l=r,c=a("2877"),u=Object(c["a"])(l,s,o,!1,null,null,null),d=u.exports,m=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid p-0"},[a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex d-column",attrs:{id:"about"}},[a("div",{staticClass:"my-auto"},[t._m(0),t._m(1),t._m(2),a("p",{directives:[{name:"show",rawName:"v-show",value:t.isEn,expression:"isEn"}],staticClass:"lead mb-5 animated fadeIn",staticStyle:{"animation-delay":"1.2s"}},[t._v("Responsible, dynamic and enterprising. Easy adaptation and ability to work as a team. With initiative to solve problems and achieve the goals and objectives set. Fast learning and proactive.")]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.isEs,expression:"isEs"}],staticClass:"lead mb-5 animated fadeIn",staticStyle:{"animation-delay":"1.2s"}},[t._v("Responsable, dinámico y emprendedor. Fácil adaptación y capacidad para trabajar en equipo. Con iniciativa para resolver problemas y lograr las metas y objetivos establecidos. Aprendizaje rápido y proactivo.")]),t._m(3)])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"mb-0 animated fadeIn",staticStyle:{"animation-delay":".5s"}},[t._v("José Ignacio\n\t            \t"),a("span",{staticClass:"text-primary"},[t._v("Palma")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subheading mb-5 animated fadeIn",staticStyle:{"animation-delay":"1s"}},[t._v("Caracas, Venezuela · +58 424 380 46 33 ·\n\t            \t"),a("a",{attrs:{href:"mailto:name@email.com"}},[t._v("jignaciopm13@gmail.com")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subheading animated fadeIn",staticStyle:{"animation-delay":"1.1s"}},[a("div",{staticClass:"typewrite",attrs:{"data-period":"2000","data-type":'[ "I am a full stack developer.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'}},[a("span",{staticClass:"wrap"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social-icons"},[a("a",{staticClass:"animated fadeIn",staticStyle:{"animation-delay":"1.4s"},attrs:{href:"http://www.linkedin.com/in/jignaciopm",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin-in"})]),a("a",{staticClass:"animated fadeIn",staticStyle:{"animation-delay":"1.6s"},attrs:{href:"https://www.instagram.com/jignaciopm/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})])])}],v={name:"home",mounted:function(){this.$store.state.loaded=!0},computed:{isEs:function(){return"es"==this.$store.state.language},isEn:function(){return"en"==this.$store.state.language}}},b=v,g=Object(c["a"])(b,p,f,!1,null,null,null),h=g.exports;n["a"].use(m["a"]);var _=[{path:"",name:"1",meta:{title:"Portfolio | Jose Ignacio Palma"},component:function(){return a.e("about").then(a.bind(null,"30a0"))}},{path:"homboo",name:"homboo",meta:{title:"Homboo | Jose Ignacio Palma"},component:function(){return a.e("about").then(a.bind(null,"ccbe"))}},{path:"2",name:"2",meta:{title:"Portfolio | Jose Ignacio Palma"},component:function(){return a.e("about").then(a.bind(null,"d5e0"))}},{path:"3gp",name:"3gp",meta:{title:"3GProcurement | Jose Ignacio Palma"},component:function(){return a.e("about").then(a.bind(null,"6a8c"))}}],y=[{path:"/",name:"home",meta:{title:"About | Jose Ignacio Palma"},component:h},{path:"/experience",name:"experience",meta:{title:"Experience | Jose Ignacio Palma"},component:function(){return a.e("about").then(a.bind(null,"459e"))}},{path:"/education",name:"education",meta:{title:"Education | Jose Ignacio Palma"},component:function(){return a.e("about").then(a.bind(null,"7a0c"))}},{path:"/skills",name:"skills",meta:{title:"Skills | Jose Ignacio Palma"},component:function(){return a.e("about").then(a.bind(null,"ad83"))}},{path:"/interests",name:"interests",meta:{title:"Interests | Jose Ignacio Palma"},component:function(){return a.e("about").then(a.bind(null,"f1fd"))}},{path:"/portfolio",name:"portfolio",meta:{title:"Portfolio | Jose Ignacio Palma"},component:function(){return a.e("about").then(a.bind(null,"c9e5"))},children:_}],C=new m["a"]({mode:"history",base:"/",routes:y,scrollBehavior:function(t,e,a){return new Promise(function(t,e){setTimeout(function(){t({x:0,y:0})},500)})}});C.beforeResolve(function(t,e,a){document.querySelector("body").classList.remove("nav-active"),a()});var w=C,E=a("2f62");n["a"].use(E["a"]);var k=new E["a"].Store({state:{loaded:!1,language:"en"},mutations:{},actions:{}});n["a"].config.productionTip=!1,n["a"].use(i["a"]),new n["a"]({router:w,store:k,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.3687cf1f.js.map