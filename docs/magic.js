"use strict";function b(a){return s(a)||c(a)||n(a)||m()}function c(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?f(Object(b),!0).forEach(function(c){k(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):f(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a,b){return s(a)||r(a,b)||n(a,b)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(a,b){if(a){if("string"==typeof a)return q(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?q(a,b):void 0}}function q(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function r(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function s(a){if(Array.isArray(a))return a}function t(a){"@babel/helpers - typeof";return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(a)}var u=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)r(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)r(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(r(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,u[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===t(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||s(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),v=u.h,h=u.app,i=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===t(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return v(a,{},b);return v(a,b,d)}},o=i("a"),a=i("button"),w=i("circle"),x=i("code"),y=i("div"),z=i("footer"),A=i("g"),g=i("h1"),B=i("h2"),C=i("h3"),D=i("h4"),E=i("h5"),F=i("header"),G=i("img"),H=i("input"),I=i("label"),J=i("li"),K=i("link"),L=i("main"),M=i("meta"),N=i("nav"),O=i("p"),p=i("path"),P=i("pre"),Q=i("script"),R=i("span"),S=i("svg"),T=i("title"),U=i("ul"),V=i("view"),W={description:"comprehensive and thoroughly tested type comparison library",gdpr:{allowed:[]},logotext:"@magic/types",menu:[{text:"install",to:"/#install"},{items:[{text:"import single function",to:"-single-function"},{text:"import all functions",to:"-all-functions"}],text:"import",to:"/#import"},{items:[{text:"is",to:"-is"},{text:"not",to:"-not"},{text:"test",to:"-test"},{text:"testType",to:"-testtype"},{text:"isArray",to:"-array"},{text:"isBoolean",to:"-boolean"},{text:"isDefined",to:"-defined"},{text:"isUndefined",to:"-undefined"},{text:"isFunction",to:"-function"},{text:"isAsyncFunction",to:"-asyncfunction"},{text:"isGeneratorFunction",to:"-generatorfunction"},{text:"isNumber",to:"-number"},{text:"isInteger",to:"-integer"},{text:"isFloat",to:"-float"},{text:"isObject",to:"-object"},{text:"isString",to:"-string"},{text:"isRGBAObject",to:"-rgbaobject"},{text:"isRGBObject",to:"-rgbobject"},{text:"isHexColor",to:"-hexcolor"},{text:"isHexAlphaColor",to:"-hexalphacolor"},{text:"isColor",to:"-color"},{text:"isDate",to:"-date"},{text:"isRegExp",to:"-regexp"},{text:"isTruthy",to:"-truthy"},{text:"isFalsy",to:"-falsy"},{text:"isEmpty",to:"-empty"},{text:"isError",to:"-error"},{text:"isIterable",to:"-iterable"},{text:"isEmail",to:"-email"},{text:"isNull",to:"-null"},{text:"isUndefinedOrNull",to:"-undefinedornull"},{text:"isBuffer",to:"-buffer"},{text:"isPromise",to:"-promise"},{text:"isArguments",to:"-arguments"},{text:"isUUID",to:"-uuid"},{text:"isEq",to:"-eq"},{text:"isNot",to:"-not"},{text:"isDeepEqual",to:"-deepequal"},{text:"isDeepDifferent",to:"-deepdifferent"},{text:"isMap",to:"-ismap"},{text:"isSet",to:"-isset"},{text:"isWeakMap",to:"-isweakmap"},{text:"isWeakSet",to:"-isweakset"},{text:"isEvery",to:"-isevery"},{text:"isSome",to:"-issome"},{text:"isNone",to:"-isnone"},{text:"isCase",to:"-iscase"},{text:"isUpperCase",to:"-isuppercase"},{text:"isLowerCase",to:"-islowercase"}],text:"functions",to:"/#functions"},{text:"source",to:"/#source"}],pageClass:{},pages:{"/types/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/types/",theme:"dark",title:"@magic/types",url:"/types/"},X={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},Y=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[C(b?ga({to:b},i):i),h.map(function(c){var d=l(c,2),e=d[0],f=d[1];return f.map(function(c){return Z(j(j(j({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},Z=function(a){return y([D([a.day,"-",a.month,"-",a.year," - ",ga({to:a.name},a.title)]),O(a.description)])},$=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),y([B(c?ga({to:b},d):d),Object.entries(e[d]).map(function(c){var d=l(c,2),e=d[0],f=d[1];return Y(j(j({},a),{},{month:e,days:f,link:b}))})])},_=function(){return y({class:"Credits"},["made with a few bits of ",ga({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")])},aa=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return z({class:"Footer"},[y({class:"Container"},[_(),a])])},ba=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,s=void 0===r?"Selected":r,t=c.denyText,u=void 0===t?"None":t;if(!f)return y({class:"Gdpr"},S({class:"ShowHide",onclick:[oa.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[A([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),w({cx:"192",cy:"128",r:"32"}),w({cx:"128",cy:"256",r:"32"}),w({cx:"288",cy:"384",r:"32"}),w({cx:"272",cy:"272",r:"16"}),w({cx:"400",cy:"336",r:"16"}),w({cx:"176",cy:"368",r:"16"})])]));var v=!!e.length;return y({class:"Gdpr"},[y({class:"Container"},[h&&C(h),j&&O(j),v&&[U(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return J({class:"Cookie"},[H({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[oa.gdpr.toggleAllow,{name:b}]}),(d||e)&&I({for:b},[d&&D(d),e&&O(e)])])}))],v?[E(n),H({class:"allow all",onclick:oa.gdpr.allow,type:"button",value:q}),H({class:"allow",onclick:oa.gdpr.close,type:"button",value:s}),H({class:"allow none",onclick:oa.gdpr.deny,type:"button",value:u})]:H({onclick:oa.gdpr.close,value:l,type:"button"})])])},ca=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.branch,d=void 0===c?"master":c,e=b.host,f=void 0===e?"github":e,g=a,h=g.project,i=void 0!==h&&h,j="",k=i;i.startsWith("@")?(j="@",i=i.substr(1)):k=i.split("/")[1];var m=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://www.npmjs.com/package/".concat(k),src:"https://img.shields.io/npm/v/".concat(j).concat(a,"?color=blue")}}],["node",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/node/v/".concat(j).concat(a,"?color=blue")}}],["license",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/npm/l/".concat(j).concat(a,"?color=blue")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(d)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;if(a){var b=a.split("/"),c=l(b,2),e=c[0],f=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(f,"/branch/").concat(d),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(f,"/").concat(d,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return{to:"https://coveralls.io/".concat(f,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(f,"/").concat(a,"/").concat(d,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://snyk.io/test/".concat(f,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=l(b,2),d=c[0],e=c[1];return e(a[d])});return m.length?U({class:"GitBadges"},m.map(function(a){var b=a.to,c=a.src;if(c){var d=ea({src:c,height:"23"});return b?J(ga({to:b},d)):J(d)}})):void 0},da=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,e=a.menu,f=a.logotext,g=d(a,["logo","menu","logotext"]);return c||e||f?F({class:"Header"},[(c||f)&&ha({root:g.root,theme:g.theme,img:c,text:f}),e&&ia({state:g,items:e}),b]):void 0},ea=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),G(a)},fa=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:oa.changeTheme},S({viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},ga=function(a){var b=a.to,c=a.action,e=void 0===c?oa.go:c,f=d(a,["to","action"]),g=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],h=f.href,i=f.text,j=f.nofollow,k=f.noreferrer,l=d(f,["href","text","nofollow","noreferrer"]);b=b||h||"",l.href=b;var m="/"===b[0]||"#"===b[0];return m?l.onclick=[e,na.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),o(l,[i,g])},ha=function(a){var b=a.img,c=a.text,e=d(a,["img","text"]);return ga({to:e.root,class:"Logo"},[b&&ea(b),c&&R(c)])},ia=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),N({className:c},U(e.map(function(a){return ja(j(j({},a),{},{url:g,root:i,collapse:void 0===d||d}))})))},ja=function(a){var b=a.text,c=a.items,e=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,k=a.collapse,l=d(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;g&&n.startsWith("/")&&(n=n.substr(1));var o=l.to[0];i&&("-"===o||"#"===o)&&(n=i+n);var p=n.startsWith(g);g&&("/"===o||"-"===o||"#"===o)&&!p&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var q=[],r=f.startsWith(l.to)||!k;return r&&e.length&&(q=U(e.map(function(a){return ja(j({parentTo:l.to,url:f,root:g,collapse:k},a))}))),J(m,[l.to?ka(l,b):R(l,b),q])},ka=function(a,b){return ga(a,b)},la=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return L(e,y({class:{Wrapper:!0}},[da(d),y({class:"Page",id:"page"},c(d)),aa(d),b]))},ma=function(b,c){"string"==typeof b?b={content:b}:c?b=j({content:c},b):Array.isArray(b)&&(b={content:b.join("")});var d=b,f=d.content,g=d.lines,h=!(void 0!==g)||g;return y({class:{Pre:!0,lines:!h||"false"!==h}},[y({class:"menu"},[a({onclick:[oa.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),P(f.trim().split("\n").map(ma.Line))])};ma.Comment=function(a){return R({class:"comment"},a)},ma.Line=function(a){return x({class:"line"},ma.Words(a))},ma.Word=function(a){if(!a)return"";var b=a.includes("://"),c=a.startsWith("mailto:")||a.includes("@")&&a.includes(".");if(b||c)return ga({to:a,text:a});var d="";return"state"===a?d="state":"actions"===a?d="actions":na.pre.keywords.includes(a)?d="keyword":na.pre.builtins.includes(a)?d="builtin":na.pre.booleans.includes(a)&&(d="boolean"),d?R({class:d},a):a},ma.Words=function(a){var c=a.split(na.pre.commentRegex),d=b(c),e=d[0],f=d.slice(1),g=!e.endsWith(":")&&f.length;if(g)return[ma.Words(e),ma.Comment(f.join("").split(na.pre.wordRegex).map(ma.Word))];var h=[],i=a;if(a.replace(na.pre.stringRegex,function(a){var b=i.split(a),c=l(b,2),d=c[0],e=c[1];h.push(d.split(na.pre.wordRegex).map(ma.Word)),h.push(R({class:"string"},a)),i=e}),i!==a)return h.push(i.split(na.pre.wordRegex).map(ma.Word)),h;var j=a.split(na.pre.wordRegex);return j.map(ma.Word)};var na={db:{del:function del(a,b){var c=b.action,d=b.key,e=na.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},get:function get(a,b){var c=b.action,d=b.key,e=na.db.init(),f=void 0;return d&&e[d]&&(f=na.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}},set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=na.db.init(),g=na.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))}},json:{parse:function parse(){return na.tryCatch(JSON.parse).apply(void 0,arguments)},stringify:function stringify(){return na.tryCatch(JSON.stringify).apply(void 0,arguments)}},pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function preventDefault(a){return a.preventDefault(),a},tryCatch:function tryCatch(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}}},oa={changeTheme:function changeTheme(a){return j(j({},a),{},{pageClass:j(j({},a.pageClass),{},{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[j(j({},a),{},{gdpr:j(j({},a.gdpr),{},{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[na.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[oa.gdpr.show,{show:!1}]}]]},close:function close(a){return[j(j({},a),{},{gdpr:j(j({},a.gdpr),{},{show:!1})}),[na.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[oa.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[j(j({},a),{},{gdpr:j(j({},a.gdpr),{},{allowed:[]})}),[na.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[oa.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?j(j({},a),{},{gdpr:j(j({},a.gdpr),{},{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),j(j({},a),{},{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=l(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=window,k=i.scrollY,m=a.pages&&a.pages[f]&&a.pages[f].title;if(m&&(document.title=a.title=m),f===a.url)window.location.hash=h;else if(!h){var n=document.getElementsByTagName("html"),o=l(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return window.history.pushState({url:f,hash:h,scrollY:k},a.title,c),j(j({},a),{},{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),j(j({},a),{},{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},pa={"/types/":function types(a){return[g(a.title),O(a.description),C("v0.1.0 uses esmodules without compilation."),ca("magic/types"),B({id:"install"}," install"),ma("npm install @magic/types"),B({id:"import"},"import"),C({id:"import-single-function"}," import single function"),ma("\n// single function import\nimport { isArray } from '@magic/types'\n\nisArray([]) // true"),C({id:"import-all-functions"}," import all functions"),ma("\nimport is from '@magic/types'\n\nis.array([]) // true"),C({id:"functions"},"functions"),O("@magic/types exports an object of functions to typecheck."),C({id:"functions-is"},"is"),O("test a value for multiple types"),ma("\nis(ele, ...types)\n\nis('astring', 'string', 'object') // true\nis(42, 'string', 'object') // false\n"),O({class:"alias"},"alias is.eq, isEq, test"),C({id:"functions-not"},"not"),O("test if a value is not of a type"),ma("\nnot(ele, ...types)\n\nnot('astring', 'string', 'object') // false\nnot(42, 'string', 'object') // true"),O({class:"alias"},"alias is.neq, isNeq, isNot"),C({id:"functions-testtype"},"testType"),ma("testType(42, 'number') // true"),O({class:"alias"},"alias is.type"),C({id:"functions-test"},"test"),O("test if a value is one of the provided types"),ma("\ntest(42, ['string', 'object']) // false\ntest('42', ['string', 'object']) // true"),O({class:"alias"},"alias is.types"),C({id:"functions-array"},"isArray"),ma("isArray([]) // true"),O("alias isArr, is.array, is.arr"),C({id:"functions-boolean"},"isBoolean"),ma("isBoolean(true) // true"),O({class:"alias"},"alias isBool, is.boolean, is.bool"),C({id:"functions-defined"},"isDefined"),ma("isDefined(undefined) //false"),O({class:"alias"},"alias isDef, is.defined, is.def"),C({id:"functions-undefined"},"isUndefined"),ma("isUndefined(undefined) //false"),O({class:"alias"},"alias isUndef, is.undefined, is.undef"),C({id:"functions-function"},"isFunction"),ma("isFunction(() => {}) // true"),O({class:"alias"},"alias isFunc, isFn, is.function, is.func, is.fn"),C({id:"functions-asyncfunction"},"isAsyncFunction"),ma("isAsyncFunction(async () => {}) // true"),O({class:"alias"},"alias isAsyncFunc, isAsyncFn, is.asyncFunction, is.asyncFunc, is.asyncFn"),C({id:"functions-generatorfunction"},"isGeneratorFunction"),ma("isGeneratorFunction(async () => {}) // true"),O({class:"alias"},"alias isGeneratorFunc, isGeneratorFn, is.generatorFunction, is.generatorFunc, is.generatorFn"),C({id:"functions-number"},"isNumber"),ma("isNumber(1) // true"),O({class:"alias"},"alias isNum, is.number, is.num"),C({id:"functions-integer"},"isInteger"),ma("isInteger(1) // true"),O({class:"alias"},"alias isInt, is.integer, is.int"),C({id:"functions-float"},"isFloat"),ma("isFloat(1.1) // true"),O({class:"alias"},"alias is.float"),C({id:"functions-object"},"isObject"),ma("isObject({}) // true"),O({class:"alias"},"alias isObj, is.object, is.obj"),C({id:"functions-string"},"isString"),ma("isString('') // true"),O({class:"alias"},"alias isStr, is.string, is.str"),C({id:"functions-rgbaobject"},"isRGBAObject"),ma("isRGBAObject({ r: 1, g: 1, b: 1, a: 1 }) // true"),O({class:"alias"},"alias isRGBA, is.rgbaObject, is.rgba"),C({id:"functions-rgbobject"},"isRGBObject"),ma("isRGBObject({ r: 1, g: 1, b: 1 }) // true"),O({class:"alias"},"alias isRGB, is.rgbObject, is.rgb"),C({id:"functions-hexcolor"},"isHexColor"),ma("isHexColor('#333') // true"),O({class:"alias"},"alias isHex, is.hex, is.hexColor"),C({id:"functions-hexalphacolor"},"isHexAlphaColor"),ma("isHexAlphaColor('#3333') // true"),O({class:"alias"},"alias isHexa, is.hexa, is.hexAlphaColor"),C({id:"functions-color"},"isColor"),ma("isColor('#444') // true"),O({class:"alias"},"alias isCol, is.color, is.col"),C({id:"functions-date"},"isDate"),ma("isDate(new Date()) // true"),O({class:"alias"},"alias isTime, is.date, is.time"),C({id:"functions-regexp"},"isRegExp"),ma("isRegExp(/regexp/) // true"),O({class:"alias"},"alias isRegex, is.regexp, is.regExp, is.regex"),C({id:"functions-truthy"},"isTruthy"),ma("isTruthy('true') // true"),O({class:"alias"},"alias is.truthy"),C({id:"functions-falsy"},"isFalsy"),ma("isFalsy(0) // true"),O({class:"alias"},"alias is.falsy"),C({id:"functions-empty"},"isEmpty"),ma("isEmpty('') // true"),O({class:"alias"},"alias is.empty"),C({id:"functions-error"},"isError"),ma("isError(new Error('')) // true"),O({class:"alias"},"alias isErr, is.error, is.err"),C({id:"functions-iterable"},"isIterable"),ma("isIterable([]) // true"),O({class:"alias"},"alias is.iterable"),C({id:"functions-email"},"isEmail"),ma("isEmail('a@b.c') // true"),O({class:"alias"},"alias isMail, is.email, is.mail"),C({id:"functions-null"},"isNull"),ma("isNull(null) // true"),O({class:"alias"},"alias isNil, is.nil, is.null"),C({id:"functions-undefinedornull"},"isUndefinedOrNull"),ma("isUndefinedOrNull(undefined || null) // true"),O({class:"alias"},["alias is.undefinedOrNull,"," is.undefinedOrNil, is.undefOrNull, is.undefOrNil"]),C({id:"functions-buffer"},"isBuffer"),ma("isBuffer(new Buffer('test')) // true"),O({class:"alias"},"alias isBuff, is.buffer, is.buff"),C({id:"functions-promise"},"isPromise"),ma("isPromise(new Promise()) // true"),O({class:"alias"},"alias is.promise, isThenable, isThen, is.thenable, is.then"),C({id:"functions-uuid"},"isUUID"),ma("isUUID(uuid) // true"),O({class:"alias"},"alias is.uuid"),C({id:"functions-eq"},"isEq"),ma("isEq(42, 'number') // true"),O({class:"alias"},"alias isEqual isEq is.equal is.eq is.is"),C({id:"functions-not"},"isNot"),ma("isNot(42, 'number') // true"),O({class:"alias"},"alias is.neq, isNeq, is.not"),C({id:"functions-deepequal"},"isDeepEqual"),ma("isDeepEqual([1, 2, 3], [1, 2, 3]) // true"),O({class:"alias"},"alias is.deep.eq, is.deep.equal"),C({id:"functions-deepdifferent"},"isDeepDifferent"),ma("isDeepDifferent([1, 2, 3], [1, 2, 3]) // false"),O({class:"alias"},"alias is.deep.diff, is.deep.different"),C({id:"functions-ismap"},"isMap"),ma("isMap(new Map()) //true"),O({class:"alias"},"alias is.map"),C({id:"functions-isset"},"isSet"),ma("isSet(new Set()) //true"),O({class:"alias"},"alias is.set"),C({id:"functions-isweakmap"},"isWeakMap"),ma("isWeakMap(new WeakMap()) //true"),O({class:"alias"},"alias is.weakMap"),C({id:"functions-isweakset"},"isWeakSet"),ma("isWeakSet(new WeakSet()) //true"),O({class:"alias"},"alias is.weakSet"),C({id:"functions-isevery"},"isEvery"),ma("\nisEvery([1, 2, 3], 'number') // true\nisEvery([1, 2, 3], is.number) // true\n  "),O({class:"alias"},"alias is.every, is.all"),C({id:"functions-issome"},"isSome"),ma("\nisSome([1, 'str', {}], 'number') // true\nisSome([1, 'str', {}], is.number) // true\n  "),O({class:"alias"},"alias is.some"),C({id:"functions-isnone"},"isNone"),ma("\nisNone([1, 2, 3], 'string') // true\nisNone([1, 2, 3], is.number) // false\n  "),O({class:"alias"},"alias is.none"),C({id:"functions-iscase"},"isCase"),ma("\nisCase('UPPERCASE', 'up') // true\nisCase('lowercase', 'low') // true\n  "),O({class:"alias"},"alias is.case"),C({id:"functions-isuppercase"},"isUpperCase"),ma("\nisUpperCase('UPPERCASE') // true\nisUpperCase(23) // false\n"),O({class:"alias"},"alias is.case.upper, isCase.upper"),C({id:"functions-islowercase"},"isLowerCase"),ma("\nisLowerCase('lowercase') // true\nisLowerCase(23) // false\n"),O({class:"alias"},"alias is.case.lower, isCase.lower"),B({id:"source"},"source"),O(["the source for this page is in the ",ga({to:"https://github.com/magic/types/tree/master/example"},"example directory")," and gets built and published to github using ",ga({to:"https://github.com/magic/core"},"@magic/core")])]},"/types/404/":function types404(){return y("404 - not found.")}};h({init:[j(j({},W),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[na.db.get,{key:"magic-gdpr",action:oa.gdpr.show}]]],subscriptions:function subscriptions(){return[[X.listenPopState,oa.pop]]},view:function(a){var b=pa[a.url]?a.url:"/404/",c=pa[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,la({page:c,state:a},[ba(a),fa(a)])},node:document.getElementById("Magic")});