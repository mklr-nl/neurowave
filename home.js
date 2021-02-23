(()=>{"use strict";var e={"./node_modules/delegated-events/dist/index.js":(e,t,n)=>{n.r(t),n.d(t,{fire:()=>x,off:()=>v,on:()=>g});var s=n("./node_modules/selector-set/selector-set.next.js"),r={},o={},i=new WeakMap,c=new WeakMap,a=new WeakMap,l=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function u(e,t,n){var s=e[t];return e[t]=function(){return n.apply(e,arguments),s.apply(e,arguments)},e}function d(){i.set(this,!0)}function p(){i.set(this,!0),c.set(this,!0)}function f(){return a.get(this)||null}function h(e,t){l&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||l.get})}function m(e){if(function(e){try{return e.eventPhase,!0}catch(e){return!1}}(e)){var t=(1===e.eventPhase?o:r)[e.type];if(t){var n=function(e,t,n){var s=[],r=t;do{if(1!==r.nodeType)break;var o=e.matches(r);if(o.length){var i={node:r,observers:o};n?s.unshift(i):s.push(i)}}while(r=r.parentElement);return s}(t,e.target,1===e.eventPhase);if(n.length){u(e,"stopPropagation",d),u(e,"stopImmediatePropagation",p),h(e,f);for(var s=0,l=n.length;s<l&&!i.get(e);s++){var m=n[s];a.set(e,m.node);for(var g=0,v=m.observers.length;g<v&&!c.get(e);g++)m.observers[g].data.call(m.node,e)}a.delete(e),h(e)}}}}function g(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=!!i.capture,a=c?o:r,l=a[e];l||(l=new s.default,a[e]=l,document.addEventListener(e,m,c)),l.add(t,n)}function v(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=!!s.capture,c=i?o:r,a=c[e];a&&(a.remove(t,n),a.size||(delete c[e],document.removeEventListener(e,m,i)))}function x(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n}))}},"./src/components/Footer/index.scss":(e,t,n)=>{n.r(t)},"./src/components/Header/index.scss":(e,t,n)=>{n.r(t)},"./src/components/Infoboxes/index.scss":(e,t,n)=>{n.r(t)},"./src/components/Intro/index.scss":(e,t,n)=>{n.r(t)},"./src/components/Observer/index.scss":(e,t,n)=>{n.r(t)},"./src/layouts/main/index.scss":(e,t,n)=>{n.r(t)},"./src/routes/home/index.scss":(e,t,n)=>{n.r(t)},"./src/utils/grid/_index.scss":(e,t,n)=>{n.r(t)},"./node_modules/selector-set/selector-set.next.js":(e,t,n)=>{function s(){if(!(this instanceof s))return new s;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}n.r(t),n.d(t,{default:()=>s});var r=window.document.documentElement,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.oMatchesSelector||r.msMatchesSelector;s.prototype.matchesSelector=function(e,t){return o.call(e,t)},s.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},s.prototype.indexes=[];var i=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;s.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(i))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var c=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;s.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(c))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var a,l=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;s.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(l))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),s.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},a="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var u=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function d(e,t){var n,s,r,o,i,c,a=(e=e.slice(0).concat(e.default)).length,l=t,d=[];do{if(u.exec(""),(r=u.exec(l))&&(l=r[3],r[2]||!l))for(n=0;n<a;n++)if(i=(c=e[n]).selector(r[1])){for(s=d.length,o=!1;s--;)if(d[s].index===c&&d[s].key===i){o=!0;break}o||d.push({index:c,key:i});break}}while(r);return d}function p(e,t){var n,s,r;for(n=0,s=e.length;n<s;n++)if(r=e[n],t.isPrototypeOf(r))return r}function f(e,t){return e.id-t.id}s.prototype.logDefaultIndexUsed=function(){},s.prototype.add=function(e,t){var n,s,r,o,i,c,l,u,f=this.activeIndexes,h=this.selectors,m=this.selectorObjects;if("string"==typeof e){for(m[(n={id:this.uid++,selector:e,data:t}).id]=n,l=d(this.indexes,e),s=0;s<l.length;s++)o=(u=l[s]).key,(i=p(f,r=u.index))||((i=Object.create(r)).map=new a,f.push(i)),r===this.indexes.default&&this.logDefaultIndexUsed(n),(c=i.map.get(o))||(c=[],i.map.set(o,c)),c.push(n);this.size++,h.push(e)}},s.prototype.remove=function(e,t){if("string"==typeof e){var n,s,r,o,i,c,a,l,u=this.activeIndexes,p=this.selectors=[],f=this.selectorObjects,h={},m=1===arguments.length;for(n=d(this.indexes,e),r=0;r<n.length;r++)for(s=n[r],o=u.length;o--;)if(c=u[o],s.index.isPrototypeOf(c)){if(a=c.map.get(s.key))for(i=a.length;i--;)(l=a[i]).selector!==e||!m&&l.data!==t||(a.splice(i,1),h[l.id]=!0);break}for(r in h)delete f[r],this.size--;for(r in f)p.push(f[r].selector)}},s.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,s,r,o,i,c,a,l={},u=[],d=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,s=d.length;t<s;t++)for(o=d[t],n=0,r=(i=this.matches(o)).length;n<r;n++)l[(a=i[n]).id]?c=l[a.id]:(c={id:a.id,selector:a.selector,data:a.data,elements:[]},l[a.id]=c,u.push(c)),c.elements.push(o);return u.sort(f)},s.prototype.matches=function(e){if(!e)return[];var t,n,s,r,o,i,c,a,l,u,d,p=this.activeIndexes,h={},m=[];for(t=0,r=p.length;t<r;t++)if(a=(c=p[t]).element(e))for(n=0,o=a.length;n<o;n++)if(l=c.map.get(a[n]))for(s=0,i=l.length;s<i;s++)!h[d=(u=l[s]).id]&&this.matchesSelector(e,u.selector)&&(h[d]=!0,m.push(u));return m.sort(f)}},"./src/components/Footer/index.js":(e,t,n)=>{n.r(t);n("./src/components/Footer/index.scss")},"./src/components/Header/index.js":(e,t,n)=>{n.r(t);var s=n("./node_modules/delegated-events/dist/index.js");n("./src/components/Header/index.scss");const r=document.querySelector(".Nav__burger__icon__open"),o=document.querySelector(".Nav__burger__icon__close"),i=document.querySelector(".Extra__menu"),c=document.querySelector(".opacityLower");(0,s.on)("click",".Nav__burger__icon",(function(e){i.classList.toggle("moveDown100px"),r.classList.toggle("notActive"),o.classList.toggle("notActive"),c.classList.toggle("opacity20")}))},"./src/components/Infoboxes/index.js":(e,t,n)=>{n.r(t);n("./src/components/Infoboxes/index.scss")},"./src/components/Intro/index.js":(e,t,n)=>{n.r(t);n("./src/components/Intro/index.scss")},"./src/components/Observer/index.js":(e,t,n)=>{n.r(t);n("./src/components/Observer/index.scss");const s=document.querySelectorAll(".Info__boxes__box"),r=(s[0],s[1],s[2],new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&(e.target.classList.toggle("inverse"),t.unobserve(e.target),console.log(e.target))}))}),{root:null,threshold:.1,rootMargin:"0px"}));s.forEach((e=>{r.observe(e)}))},"./src/layouts/main/index.js":(e,t,n)=>{n.r(t);n("./src/components/Header/index.js"),n("./src/components/Intro/index.js"),n("./src/components/Footer/index.js"),n("./src/components/Infoboxes/index.js"),n("./src/components/Observer/index.js"),n("./src/utils/grid/_index.scss"),n("./src/layouts/main/index.scss")}},t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{n.r(s);n("./src/layouts/main/index.js"),n("./src/routes/home/index.scss")})()})();
//# sourceMappingURL=home.js.map