!function(){var t={9662:function(t,n,r){var e=r(614),o=r(6330),i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,n,r){var e=r(111),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not an object")}},8533:function(t,n,r){"use strict";var e=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},2092:function(t,n,r){var e=r(9974),o=r(1702),i=r(8361),u=r(7908),c=r(6244),a=r(5417),f=o([].push),s=function(t){var n=1==t,r=2==t,o=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(y,b,h,d){for(var g,m,x=u(y),S=i(x),w=e(b,h),j=c(S),L=0,O=d||a,E=n?O(y,j):r||p?O(y,0):void 0;j>L;L++)if((v||L in S)&&(m=w(g=S[L],L,x),t))if(n)E[L]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:f(E,g)}else switch(t){case 4:return!1;case 7:f(E,g)}return l?-1:o||s?s:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},9341:function(t,n,r){"use strict";var e=r(7293);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){return 1},1)}))}},7475:function(t,n,r){var e=r(3157),o=r(4411),i=r(111),u=r(5112)("species"),c=Array;t.exports=function(t){var n;return e(t)&&(n=t.constructor,(o(n)&&(n===c||e(n.prototype))||i(n)&&null===(n=n[u]))&&(n=void 0)),void 0===n?c:n}},5417:function(t,n,r){var e=r(7475);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},4326:function(t,n,r){var e=r(1702),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,n,r){var e=r(1694),o=r(614),i=r(4326),u=r(5112)("toStringTag"),c=Object,a="Arguments"==i(function(){return arguments}());t.exports=e?i:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=c(t),u))?r:a?i(n):"Object"==(e=i(n))&&o(n.callee)?"Arguments":e}},8880:function(t,n,r){var e=r(9781),o=r(3070),i=r(9114);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},8052:function(t,n,r){var e=r(614),o=r(3070),i=r(6339),u=r(3072);t.exports=function(t,n,r,c){c||(c={});var a=c.enumerable,f=void 0!==c.name?c.name:n;if(e(r)&&i(r,f,c),c.global)a?t[n]=r:u(n,r);else{try{c.unsafe?t[n]&&(a=!0):delete t[n]}catch(t){}a?t[n]=r:o.f(t,n,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3072:function(t,n,r){var e=r(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,r){var e=r(7854),o=r(111),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,n,r){var e=r(317)("span").classList,o=e&&e.constructor&&e.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,i=r(7854),u=r(8113),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,n,r){var e=r(1702),o=r(9662),i=r(4374),u=e(e.bind);t.exports=function(t,n){return o(t),void 0===n?t:i?u(t,n):function(){return t.apply(n,arguments)}}},4374:function(t,n,r){var e=r(7293);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,r){var e=r(4374),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,n,r){var e=r(9781),o=r(2597),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},1702:function(t,n,r){var e=r(4374),o=Function.prototype,i=o.bind,u=o.call,c=e&&i.bind(u,u);t.exports=e?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:function(t,n,r){var e=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},8173:function(t,n,r){var e=r(9662);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,n,r){var e=r(1702),o=r(7908),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,r){var e=r(9781),o=r(7293),i=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,r){var e=r(1702),o=r(7293),i=r(4326),u=Object,c=e("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},2788:function(t,n,r){var e=r(1702),o=r(614),i=r(5465),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:function(t,n,r){var e,o,i,u=r(8536),c=r(7854),a=r(1702),f=r(111),s=r(8880),l=r(2597),p=r(5465),v=r(6200),y=r(3501),b="Object already initialized",h=c.TypeError,d=c.WeakMap;if(u||p.state){var g=p.state||(p.state=new d),m=a(g.get),x=a(g.has),S=a(g.set);e=function(t,n){if(x(g,t))throw new h(b);return n.facade=t,S(g,t,n),n},o=function(t){return m(g,t)||{}},i=function(t){return x(g,t)}}else{var w=v("state");y[w]=!0,e=function(t,n){if(l(t,w))throw new h(b);return n.facade=t,s(t,w,n),n},o=function(t){return l(t,w)?t[w]:{}},i=function(t){return l(t,w)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw h("Incompatible receiver, "+t+" required");return r}}}},3157:function(t,n,r){var e=r(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,n,r){var e=r(1702),o=r(7293),i=r(614),u=r(648),c=r(5005),a=r(2788),f=function(){},s=[],l=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=e(p.exec),y=!p.exec(f),b=function(t){if(!i(t))return!1;try{return l(f,s,t),!0}catch(t){return!1}},h=function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(p,a(t))}catch(t){return!0}};h.sham=!0,t.exports=!l||o((function(){var t;return b(b.call)||!b(Object)||!b((function(){t=!0}))||t}))?h:b},111:function(t,n,r){var e=r(614);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},1913:function(t){t.exports=!1},2190:function(t,n,r){var e=r(5005),o=r(614),i=r(7976),u=r(3307),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return o(n)&&i(n.prototype,c(t))}},6244:function(t,n,r){var e=r(7466);t.exports=function(t){return e(t.length)}},6339:function(t,n,r){var e=r(7293),o=r(614),i=r(2597),u=r(9781),c=r(6530).CONFIGURABLE,a=r(2788),f=r(9909),s=f.enforce,l=f.get,p=Object.defineProperty,v=u&&!e((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),b=t.exports=function(t,n,r){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!i(t,"name")||c&&t.name!==n)&&(u?p(t,"name",{value:n,configurable:!0}):t.name=n),v&&r&&i(r,"arity")&&t.length!==r.arity&&p(t,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?u&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var e=s(t);return i(e,"source")||(e.source=y.join("string"==typeof n?n:"")),t};Function.prototype.toString=b((function(){return o(this)&&l(this).source||a(this)}),"toString")},4758:function(t){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},133:function(t,n,r){var e=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8536:function(t,n,r){var e=r(7854),o=r(614),i=r(2788),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},3070:function(t,n,r){var e=r(9781),o=r(4664),i=r(3353),u=r(9670),c=r(4948),a=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";n.f=e?i?function(t,n,r){if(u(t),n=c(n),u(r),"function"==typeof t&&"prototype"===n&&"value"in r&&v in r&&!r.writable){var e=s(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:p in r?r.configurable:e.configurable,enumerable:l in r?r.enumerable:e.enumerable,writable:!1})}return f(t,n,r)}:f:function(t,n,r){if(u(t),n=c(n),u(r),o)try{return f(t,n,r)}catch(t){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},7976:function(t,n,r){var e=r(1702);t.exports=e({}.isPrototypeOf)},288:function(t,n,r){"use strict";var e=r(1694),o=r(648);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(t,n,r){var e=r(6916),o=r(614),i=r(111),u=TypeError;t.exports=function(t,n){var r,c;if("string"===n&&o(r=t.toString)&&!i(c=e(r,t)))return c;if(o(r=t.valueOf)&&!i(c=e(r,t)))return c;if("string"!==n&&o(r=t.toString)&&!i(c=e(r,t)))return c;throw u("Can't convert object to primitive value")}},4488:function(t){var n=TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},6200:function(t,n,r){var e=r(2309),o=r(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3072),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.23.3",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",source:"https://github.com/zloirock/core-js"})},9303:function(t,n,r){var e=r(4758);t.exports=function(t){var n=+t;return n!=n||0===n?0:e(n)}},7466:function(t,n,r){var e=r(9303),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,n,r){var e=r(4488),o=Object;t.exports=function(t){return o(e(t))}},7593:function(t,n,r){var e=r(6916),o=r(111),i=r(2190),u=r(8173),c=r(2140),a=r(5112),f=TypeError,s=a("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var r,a=u(t,s);if(a){if(void 0===n&&(n="default"),r=e(a,t,n),!o(r)||i(r))return r;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},4948:function(t,n,r){var e=r(7593),o=r(2190);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},1694:function(t,n,r){var e={};e[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(e)},6330:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:function(t,n,r){var e=r(1702),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,n,r){var e=r(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,r){var e=r(9781),o=r(7293);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,r){var e=r(7854),o=r(2309),i=r(2597),u=r(9711),c=r(133),a=r(3307),f=o("wks"),s=e.Symbol,l=s&&s.for,p=a?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!c&&"string"!=typeof f[t]){var n="Symbol."+t;c&&i(s,t)?f[t]=s[t]:f[t]=a&&l?l(n):p(n)}return f[t]}},1539:function(t,n,r){var e=r(1694),o=r(8052),i=r(288);e||o(Object.prototype,"toString",i,{unsafe:!0})},4747:function(t,n,r){var e=r(7854),o=r(8324),i=r(8509),u=r(8533),c=r(8880),a=function(t){if(t&&t.forEach!==u)try{c(t,"forEach",u)}catch(n){t.forEach=u}};for(var f in o)o[f]&&a(e[f]&&e[f].prototype);a(i)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";r(1539),r(4747);document.addEventListener("DOMContentLoaded",(function(t){document.querySelectorAll(".js-only").forEach((function(t){return t.classList.remove("js-only")})),document.querySelectorAll(".no-js").forEach((function(t){return t.classList.add("hide")})),document.querySelectorAll(".print-button").forEach((function(t){return t.addEventListener("pointerdown",(function(){window.print()}))})),document.querySelectorAll(".copyLink").forEach((function(t){var n=t.querySelector("input[type=text]"),r=t.querySelector("button");r&&r.addEventListener("pointerdown",(function(t){var e=n.value;navigator.clipboard.writeText(e).then((function(){r.classList.add("success"),setTimeout((function(){r.classList.remove("success")}),3e3)})).catch((function(t){console.error(t),r.classList.add("failure"),setTimeout((function(){r.classList.remove("failure")}),3e3)}))}))}))}))}(),function(){"use strict"}()}();