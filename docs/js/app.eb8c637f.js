(function(e){function t(t){for(var a,c,l=t[0],u=t[1],i=t[2],b=0,s=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(s.length)s.shift()();return n.push.apply(n,i||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},o={app:0},n=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2b8983e6"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=a);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var i=new Error;n=function(t){u.onerror=u.onload=null,clearTimeout(b);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,r[1](i)}o[e]=void 0}};var b=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var d=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"13cd":function(e,t,r){},"1cd7":function(e,t,r){},"4b62":function(e,t,r){"use strict";r("1cd7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),o={id:"nav"},n=Object(a["f"])("主页"),c=Object(a["f"])(" | "),l=Object(a["f"])("About");function u(e,t){var r=Object(a["v"])("router-link"),u=Object(a["v"])("router-view");return Object(a["p"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("div",o,[Object(a["g"])(r,{to:"/"},{default:Object(a["A"])((function(){return[n]})),_:1}),c,Object(a["g"])(r,{to:"/about"},{default:Object(a["A"])((function(){return[l]})),_:1})]),Object(a["g"])(u)],64)}r("4b62");const i={};i.render=u;var b=i,d=r("9483");Object(d["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var s=r("6c02"),v=r("cf05"),p=r.n(v),f={class:"home"},g=Object(a["g"])("img",{alt:"Vue logo",src:p.a},null,-1);function h(e,t,r,o,n,c){var l=Object(a["v"])("HelloWorld");return Object(a["p"])(),Object(a["d"])("div",f,[g,Object(a["g"])(l,{msg:"Welcome to Your Vue.js App"})])}var j=Object(a["B"])("data-v-db1b11c8");Object(a["s"])("data-v-db1b11c8");var m={class:"hello"},O=Object(a["e"])('<p data-v-db1b11c8> For a guide and recipes on how to configure / customize this project,<br data-v-db1b11c8> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-db1b11c8>vue-cli documentation</a>. </p><h3 data-v-db1b11c8>Installed CLI Plugins</h3><ul data-v-db1b11c8><li data-v-db1b11c8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-db1b11c8>babel</a></li><li data-v-db1b11c8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-db1b11c8>pwa</a></li><li data-v-db1b11c8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-db1b11c8>router</a></li><li data-v-db1b11c8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-db1b11c8>vuex</a></li><li data-v-db1b11c8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-db1b11c8>eslint</a></li></ul><h3 data-v-db1b11c8>Essential Links</h3><ul data-v-db1b11c8><li data-v-db1b11c8><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-db1b11c8>Core Docs</a></li><li data-v-db1b11c8><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-db1b11c8>Forum</a></li><li data-v-db1b11c8><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-db1b11c8>Community Chat</a></li><li data-v-db1b11c8><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-db1b11c8>Twitter</a></li><li data-v-db1b11c8><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-db1b11c8>News</a></li></ul><h3 data-v-db1b11c8>Ecosystem</h3><ul data-v-db1b11c8><li data-v-db1b11c8><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-db1b11c8>vue-router</a></li><li data-v-db1b11c8><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-db1b11c8>vuex</a></li><li data-v-db1b11c8><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-db1b11c8>vue-devtools</a></li><li data-v-db1b11c8><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-db1b11c8>vue-loader</a></li><li data-v-db1b11c8><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-db1b11c8>awesome-vue</a></li></ul>',7);Object(a["q"])();var k=j((function(e,t,r,o,n,c){return Object(a["p"])(),Object(a["d"])("div",m,[Object(a["g"])("h1",null,Object(a["x"])(r.msg),1),O])})),w={name:"HelloWorld",props:{msg:String}};r("b13d");w.render=k,w.__scopeId="data-v-db1b11c8";var y=w,_={name:"Home",components:{HelloWorld:y}};_.render=h;var x=_,P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],A=Object(s["a"])({history:Object(s["b"])(""),routes:P}),C=A,S=r("5502"),E=Object(S["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(b).use(E).use(C).mount("#app")},b13d:function(e,t,r){"use strict";r("13cd")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.eb8c637f.js.map