(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a){return k(a)||c(a)||g()}function c(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function f(a,b){return k(a)||j(a,b)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function k(a){if(Array.isArray(a))return a}function l(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){m(a,b,c[b])})}return a}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a,b){if(a==null)return{};var c=o(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function o(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function q(a){return q=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function q(a){return typeof a}:function q(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},q(a)}var r=require("hyperapp"),s=r.app,t=r.h;var e=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===q(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),t(a,b,d)}};var h=e("div");var u=e("p");var v=function Link(a,b){var c=a.to,d=n(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,l=n(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",l.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?l.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(l.target="_blank",l.rel="noopener",i&&(l.rel+=" nofollow"),j&&(l.rel+=" noreferrer")),x(l,[h,b])}};var w=e("span");var x=e("a");var a=e("li");var p=e("header");var y=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),A(a)}};var z=function Menu(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],g=f===void 0?"Menu":f,h=c.items,i=h===void 0?[]:h,j=c.collapse;var m=b.url,n=b[e],o=n===void 0?[]:n;if(i=i.length?i:o,!!i.length)return b.hash&&(m+="#".concat(b.hash)),J({"class":g},H(i.map(function(a){return z.Item(l({},a,{url:m,collapse:j===void 0||j}))})))}};z.Item=function(b){var c=b.url,d=b.text,e=b.items,f=e===void 0?[]:e,g=b.parentTo,h=g===void 0?undefined:g,j=b.collapse,k=n(b,["url","text","items","parentTo","collapse"]);return function(b){if(k.to||d){var e={"class":"MenuItem"};if(h){var o=k.to.includes("://");var p=k.to.startsWith("/");var q=!h||k.to.startsWith(h);!q&&!p&&!o&&(!h.endsWith("/")&&!k.to.startsWith("-")&&(h="".concat(h,"/")),k.to=h+k.to)}var g=k.to.startsWith(b.root)?k.to:"".concat(b.root).concat(k.to.substr(1));var i=c.startsWith(g);c===g&&(e["class"]+=" active");var n=[];return(f.length&&i||!j)&&(n=H(f.map(function(a){return z.Item(l({parentTo:k.to,url:c,collapse:j},a))}))),a(e,[k.to?v(k,d):w(k,d),n])}}};var A=e("img");var B=e("button");var C=e("text");var D=e("pre");var E=e("h3");var F=e("code");var G=e("i");var i=e("h1");var H=e("ul");var I=function GitBadges(b){if(typeof b==="string")b={project:b};else if(!b.project)return;var c=b,d=c.project,e=d!==void 0&&d,g=c.branch,h=g===void 0?"master":g,i=c.host,j=i===void 0?"github":i;var k=[["npm",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(h)}}],["appveyor",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;if(a){var b=a.split("/"),c=f(b,2),d=c[0],g=c[1];return d=d.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(d,"/").concat(g,"/branch/").concat(h),src:"https://img.shields.io/appveyor/ci/".concat(d,"/").concat(g,"/").concat(h,".svg")}}}],["coveralls",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return{to:"https://coveralls.io/".concat(j,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(j,"/").concat(a,"/").concat(h,".svg")}}],["greenkeeper",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:e;return a&&{to:"https://snyk.io/test/".concat(j,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(a){var c=f(a,2),d=c[0],e=c[1];return e(b[d])}).filter(function(b){return b.to&&b.src});return k.length?H({"class":"GitBadges"},k.map(function(b){var c=b.to,d=b.src;return a([v({to:c},y({src:d}))])})):void 0};var J=e("nav");var K=e("h2");var L=function Footer(){return P({"class":"Footer"},[h({"class":"wrapper"},["made with a few bits of ",v({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])};var M=function Pre(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(c,d){return h({"class":"Pre ".concat(b||c.pre.theme)},[h({"class":"menu"},[!b&&B({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),B({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),D(LIB.PRE.format(a))])}};var N=function Header(a){return(a.logo||a.menu||a.tagline)&&p({"class":"Header"},[(a.logo||a.logotext)&&v({to:"/types/","class":"LogoWrapper"},[a.logo&&y({"class":"Logo",src:a.logo}),a.logotext&&w({"class":"LogoText"},a.logotext)]),a.menu&&z])};var O=function Page(a){return function(b,c){return h({"class":"Wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&c.go&&window.addEventListener("popstate",c.go)}},[N,h({"class":"Page"},a?a(b,c):"404 - not found"),L])}};var P=e("footer");var Q={};(function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var d=["true","false"];var e=function wrapWords(b){if(typeof b!=="string")return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(b!==""){var g="";return b==="state"?g="state":b==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(b=w({"class":g},b)),b}}),b};var f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;var g=function wrapEmails(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a);var c=a.replace("mailto:","");return v({"class":"email",to:b},c)}return e(a)})};var h=function wrapComments(a,b){return[l(a.substring(0,b)),l(a.substring(b))]};var i=function wrapLinks(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?v({to:a},a):l(a)})};var j=function wrapUrls(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)};var k=function wrapStrings(a){var c=a.replace(/"/g,"'");var d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2);var k=i;k.length===1?k=l(k[0]):k.length>1&&(k=l(k.join("'")));var m=[];return m=typeof h==="undefined"?e(a):[e(g),w({"class":"string"},["'",j(h),"'"]),k],m};var l=function wordsByLine(a){var b=a.indexOf("//");var c=a.trim();if(c.startsWith("//")){var d=a.search(/\S|$/);var e="";for(var f=0;f<d;f++)e+=" ";return!c.startsWith("// ")&&(a="".concat(e,"// ").concat(c.substr(2))),w({"class":"comment"},[e,"// ",l(c.substring(3))])}return b>-1&&a[b-1]!==":"?h(a,b):a.indexOf("://")>2?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)};var m=function wrapLine(a){return F({"class":"line"},l(a))};Q.PRE={keywords:a,builtins:c,format:function format(a){return a.trim().split("\n").map(m)},wordsByLine:l,wrapWords:e}})(),window.LIB=Q;var R={"/types/":function types(a){return[i(a.title),u(a.description),I("magic/types"),K({id:"install"}," install"),M("npm install @magic/types"),K({id:"require"},"require"),E({id:"require-single-function"}," import single function"),M("\n// single function import\nconst { isArray } = require('@magic/types')\n\nisArray([]) // true"),E({id:"require-all-functions"}," import all functions"),M("\nconst is = require('@magic/types')\n\nis.array([]) // true"),E({id:"functions"},"functions"),u("@magic/types exports an object of functions to typecheck."),E({id:"functions-is"},"is"),u("test a value for multiple types"),M("\nis(ele, ...types)\n\nis('astring', 'string', 'object') // true\nis(42, 'string', 'object') // false\n"),u({"class":"alias"},"alias is.eq, isEq, test"),E({id:"functions-not"},"not"),u("test if a value is not of a type"),M("\nnot(ele, ...types)\n\nnot('astring', 'string', 'object') // false\nnot(42, 'string', 'object') // true"),u({"class":"alias"},"alias is.neq, isNeq, isNot"),E({id:"functions-testtype"},"testType"),M("testType(42, 'number') // true"),u({"class":"alias"},"alias is.type"),E({id:"functions-test"},"test"),u("test if a value is one of the provided types"),M("\ntest(42, ['string', 'object']) // false\ntest('42', ['string', 'object']) // true"),u({"class":"alias"},"alias is.types"),E({id:"functions-array"},"type comparisons"),M("isArray([]) // true"),u("alias isArr, is.array, is.arr"),E({id:"functions-boolean"},"isBoolean"),M("isBoolean(true) // true"),u({"class":"alias"},"alias isBool, is.boolean, is.bool"),E({id:"functions-defined"},"isDefined"),M("isDefined(undefined) //false"),u({"class":"alias"},"alias isDef, is.defined, is.def"),E({id:"functions-undefined"},"isUndefined"),M("isUndefined(undefined) //false"),u({"class":"alias"},"alias isUndef, is.undefined, is.undef"),E({id:"functions-function"},"isFunction"),M("isFunction(() => {}) // true"),u({"class":"alias"},"alias isFunc, isFn, is.function, is.func, is.fn"),E({id:"functions-number"},"isNumber"),M("isNumber(1) // true"),u({"class":"alias"},"alias isNum, is.number, is.num"),E({id:"functions-integer"},"isInteger"),M("isInteger(1) // true"),u({"class":"alias"},"alias isInt, is.integer, is.int"),E({id:"functions-float"},"isFloat"),M("isFloat(1.1) // true"),u({"class":"alias"},"alias is.float"),E({id:"functions-object"},"isObject"),M("isObject({}) // true"),u({"class":"alias"},"alias isObj, is.object, is.obj"),E({id:"functions-string"},"isString"),M("isString('') // true"),u({"class":"alias"},"alias isStr, is.string, is.str"),E({id:"functions-rgbaobject"},"isRGBAObject"),M("isRGBAObject({ r: 1, g: 1, b: 1, a: 1 }) // true"),u({"class":"alias"},"alias isRGBA, is.rgbaObject, is.rgba"),E({id:"functions-rgbobject"},"isRGBObject"),M("isRGBObject({ r: 1, g: 1, b: 1 }) // true"),u({"class":"alias"},"alias isRGB, is.rgbObject, is.rgb"),E({id:"functions-hexcolor"},"isHexColor"),M("isHexColor('#333') // true"),u({"class":"alias"},"alias isHex, is.hex, is.hexColor"),E({id:"functions-hexalphacolor"},"isHexAlphaColor"),M("isHexAlphaColor('#3333') // true"),u({"class":"alias"},"alias isHexa, is.hexa, is.hexAlphaColor"),E({id:"functions-color"},"isColor"),M("isColor('#444') // true"),u({"class":"alias"},"alias isCol, is.color, is.col"),E({id:"functions-date"},"isDate"),M("isDate(new Date()) // true"),u({"class":"alias"},"alias isTime, is.date, is.time"),E({id:"functions-regexp"},"isRegExp"),M("isRegExp(/regexp/) // true"),u({"class":"alias"},"alias isRegex, is.regexp, is.regExp, is.regex"),E({id:"functions-truthy"},"isTruthy"),M("isTruthy('true') // true"),u({"class":"alias"},"alias is.truthy"),E({id:"functions-falsy"},"isFalsy"),M("isFalsy(0) // true"),u({"class":"alias"},"alias is.falsy"),E({id:"functions-empty"},"isEmpty"),M("isEmpty('') // true"),u({"class":"alias"},"alias is.empty"),E({id:"functions-error"},"isError"),M("isError(new Error('')) // true"),u({"class":"alias"},"alias isErr, is.error, is.err"),E({id:"functions-iterable"},"isIterable"),M("isIterable([]) // true"),u({"class":"alias"},"alias is.iterable"),E({id:"functions-email"},"isEmail"),M("isEmail('a@b.c') // true"),u({"class":"alias"},"alias isMail, is.email, is.mail"),E({id:"functions-null"},"isNull"),M("isNull(null) // true"),u({"class":"alias"},"alias isNil, is.nil, is.null"),E({id:"functions-undefinedornull"},"isUndefinedOrNull"),M("isUndefinedOrNull(undefined || null) // true"),u({"class":"alias"},["alias is.undefinedOrNull,"," is.undefinedOrNil, is.undefOrNull, is.undefOrNil"]),E({id:"functions-buffer"},"isBuffer"),M("isBuffer(new Buffer('test')) // true"),u({"class":"alias"},"alias isBuff, is.buffer, is.buff"),E({id:"functions-promise"},"isPromise"),M("isPromise(new Promise()) // true"),u({"class":"alias"},"alias is.promise, isThenable, isThen, is.thenable, is.then"),E({id:"functions-arguments"},"isArguments"),M("isArguments(() => return arguments) // true"),u({"class":"alias"},"alias isArgs, is.arguments, is.args"),E({id:"functions-uuid"},"isUUID"),M("isUUID(uuid) // true"),u({"class":"alias"},"alias is.uuid"),E({id:"functions-eq"},"isEq"),M("isEq(42, 'number') // true"),u({"class":"alias"},"alias isEqual isEq is.equal is.eq is.is"),E({id:"functions-not"},"isNot"),M("isNot(42, 'number') // true"),u({"class":"alias"},"alias is.neq, isNeq, is.not"),E({id:"functions-deepequal"},"isDeepEqual"),M("isDeepEqual([1, 2, 3], [1, 2, 3]) // true"),u({"class":"alias"},"alias is.deep.eq, is.deep.equal"),E({id:"functions-deepdifferent"},"isDeepDifferent"),M("isDeepDifferent([1, 2, 3], [1, 2, 3]) // false"),u({"class":"alias"},"alias is.deep.diff, is.deep.different"),E({id:"functions-ismap"},"isMap"),M("isMap(new Map()) //true"),u({"class":"alias"},"alias is.map"),E({id:"functions-isset"},"isSet"),M("isSet(new Set()) //true"),u({"class":"alias"},"alias is.set"),E({id:"functions-isweakmap"},"isWeakMap"),M("isWeakMap(new WeakMap()) //true"),u({"class":"alias"},"alias is.weakMap"),E({id:"functions-isweakset"},"isWeakSet"),M("isWeakSet(new WeakSet()) //true"),u({"class":"alias"},"alias is.weakSet"),K({id:"source"},"source"),u(["the source for this page is in the ",v({to:"https://github.com/magic/types/tree/master/example"},"example directory")," and gets built and published to github using ",v({to:"https://github.com/magic/core"},"@magic/core")])]},"/types/404/":function types404(){return h("404 - not found")}};var S={"url":"/types/","root":"/types/","logotext":"@magic/types","title":"@magic/types","description":"comprehensive and thoroughly tested type comparison library","menu":[{to:"/types/#install","text":"install"},{to:"/types/#require","text":"require","items":[{to:"/types/#require-single-function","text":"import single function"},{to:"/types/#require-all-functions","text":"import all functions"}]},{to:"/types/#functions","text":"functions","items":[{"to":"-is","text":"is"},{"to":"-not","text":"not"},{"to":"-test","text":"test"},{"to":"-testtype","text":"testType"},{"to":"-type-compare","text":"type comparisons"},{"to":"-array","text":"isArray"},{"to":"-boolean","text":"isBoolean"},{"to":"-defined","text":"isDefined"},{"to":"-undefined","text":"isUndefined"},{"to":"-function","text":"isFunction"},{"to":"-number","text":"isNumber"},{"to":"-integer","text":"isInteger"},{"to":"-float","text":"isFloat"},{"to":"-object","text":"isObject"},{"to":"-string","text":"isString"},{"to":"-rgbaobject","text":"isRGBAObject"},{"to":"-rgbobject","text":"isRGBObject"},{"to":"-hexcolor","text":"isHexColor"},{"to":"-hexalphacolor","text":"isHexAlphaColor"},{"to":"-color","text":"isColor"},{"to":"-date","text":"isDate"},{"to":"-regexp","text":"isRegExp"},{"to":"-truthy","text":"isTruthy"},{"to":"-falsy","text":"isFalsy"},{"to":"-empty","text":"isEmpty"},{"to":"-error","text":"isError"},{"to":"-iterable","text":"isIterable"},{"to":"-email","text":"isEmail"},{"to":"-null","text":"isNull"},{"to":"-undefinedornull","text":"isUndefinedOrNull"},{"to":"-buffer","text":"isBuffer"},{"to":"-promise","text":"isPromise"},{"to":"-arguments","text":"isArguments"},{"to":"-uuid","text":"isUUID"},{"to":"-eq","text":"isEq"},{"to":"-not","text":"isNot"},{"to":"-deepequal","text":"isDeepEqual"},{"to":"-deepdifferent","text":"isDeepDifferent"},{"to":"-ismap","text":"isMap"},{"to":"-isset","text":"isSet"},{"to":"-isweakmap","text":"isWeakMap"},{"to":"-isweakset","text":"isWeakSet"}]},{to:"/types/#source","text":"source"}],"pre":{"theme":"light"}};S.url=window.location.pathname,S.root="/types/";var T={"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var c=a.to;var d=a.e?a.e:a;d.preventDefault();var e=b.url;var g=e.split("#"),h=f(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(c){e=c.replace(window.location.origin,"");var l=e.split("#"),m=f(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p&&p!=="/"?p:"";var q=b.hash?"#".concat(b.hash):window.location.hash;var r=b.url+q;(e!==r||k!==q)&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=d.state?d.state.uri:"/";if(window.location&&k){var s=document.getElementById(k);if(s){var t=s.offsetTop;window.scrollTo(0,t),window.location.hash=k}}return{url:i,hash:k,prev:b.url}}},"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var U=function view(a,b){var c=R[a.url]?a.url:"/404/";var d=R[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return O(d)(a,b)};var V=document;var d=V.getElementById("Magic");!d&&(d=V.createElement("div"),d.id="magic",V.body.appendChild(d)),s(S,T,U,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
