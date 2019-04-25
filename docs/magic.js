(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
function b(a,b){return l(a)||c(a,b)||j()}function c(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function e(a,b){if(a==null)return{};var c=f(a,b);var d,e;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function f(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function g(a){return l(a)||k(a)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function l(a){if(Array.isArray(a))return a}function m(a){return m=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function m(a){return typeof a}:function m(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=require("hyperapp"),o=n.app,q=n.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),q(a,b,d)}};var r=h("div");var s=h("button");var t=h("code");var u=h("i");var i=h("pre");var v=h("span");var w=h("h2");var x=h("h3");var y=h("h4");var z=h("p");var p={View:function View(a){var b=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];return function(c,d){var f="dark";return!b&&c.pre.theme==="dark"&&(f="light"),r({"class":"Pre ".concat(b||c.pre.theme)},[r({"class":"menu"},[!b&&s({onclick:function onclick(){return d.pre.changeTheme(f)}},f),s({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),i(function format(a){var e=function wrapWords(a){if(typeof a!=="string")return a;var e=a.split(/\b/);return a=e.map(function(a,f){if(a!==""){var g="";return a==="state"?g="state":a==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":j(a)?g="html":"let this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require".includes(a)?g="keyword":"Array Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array".includes(a)?g="builtin":"true false".includes(a)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(a=v({"class":g},a)),a}}),a};var h={canvas:1,video:1};var i=function wordsByLine(a){if(a.trim().startsWith("//"))return t({"class":"line comment"},a);if(a.includes("//")){var m=a.split("//");m[0]=i(m[0]);for(var n=1;n<m.length;n++)m[n]=t({"class":"comment"},"//".concat(m[n]));return t({"class":"line"},m)}var b=a.replace(/"/g,"'");var c=b.split("'"),d=g(c),f=d[0],h=d[1],j=d.slice(2);var k=j;k.length===1?k=i(k[0]):k.length>1&&(k=i(k.join("'")));var l=[];return l=typeof h==="undefined"?e(a):[e(f),v({"class":"string"},"'".concat(h,"'")),k],l};var j=function isHtmlTag(a){if(h.hasOwnProperty(a))return!0;try{var b=typeof global==="undefined"?document.createElement(a).toString()==="[object HTMLDivElement]":Object.keys(o.dependencies).includes(a);if(b)return h[a]=!0,!0}catch(a){}};a=a.replace(/^\n|\n$/g,"");var k=a.split("\n").map(function(a){return t({"class":"line"},i(a))});return k}(a))])}}};var A=h("a");var a=h("text");var B=function Link(a,b){var c=a.to,d=a.href,f=a.text,g=a.nofollow,h=a.noreferrer,i=a.onclick,j=e(a,["to","href","text","nofollow","noreferrer","onclick"]);return function(a,k){return c=c||d||"",j.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?j.onclick=function(a){i&&i({e:a,to:c}),k.go({e:a,to:c})}:(j.target="_blank",j.rel="noopener",g&&(j.rel+=" nofollow"),h&&(j.rel+=" noreferrer")),A(j,[f,b])}};var C=h("img");var D=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),C(a)}};var E=h("li");var F=h("ul");var G=function GitBadges(a){var c=a.project,d=c!==void 0&&c,e=a.branch,f=e===void 0?"master":e;var g=Object.entries({npm:function npm(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}},travis:function travis(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}},appveyor:function appveyor(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://ci.appveyor.com/project/".concat(a,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(a,"/").concat(f,".svg")}},coveralls:function coveralls(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://coveralls.io/github/".concat(a),src:"https://coveralls.io/repos/github/".concat(a,"/badge.svg")}},greenkeeper:function greenkeeper(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}},snyk:function snyk(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/github/".concat(a),src:"https://snyk.io/test/github/".concat(a,"/badge.svg")}}}).map(function(c){var d=b(c,2),e=d[0],f=d[1];return f(a[e])}).filter(function(b){return b.to&&b.src});return g.length?F({"class":"GitBadges"},g.map(function(a){var b=a.to,c=a.src;return E([B({to:b},D({src:c}))])})):void 0};var H={View:function View(){return I({"class":"main"},[r({"class":"wrapper"},["made with a few bits of ",B({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var I=h("footer");var J={View:function View(a){var b=a.name,c=b===void 0?"menu":b,d=a["class"],f=d===void 0?"":d,g=a.between,h=g!==void 0&&g,i=a.items,j=i===void 0?[]:i;return function(a){if(j.length||a[c]&&a[c].length)return!j.length&&(j=a[c]),K({"class":"Menu ".concat(f)},[F(j.map(function(b,d){var f=b.items,g=e(b,["items"]);var i={};var j=a.hash?"#".concat(a.hash):"";var k=a.url+j;g.to===k&&(i["class"]="active");var l;return f&&k.startsWith(g.to)&&(l=F(f.map(function(a){var b={};return a.to===k&&(b["class"]="active"),E(b,B(a))}))),[E(i,[B(g),l]),h&&d<a[c].length-1?E(h):""]}))])}}};var K=h("nav");var L=h("header");var M=function PageHead(a){return(a.logo||a.menu||a.tagline)&&L({"class":"main"},[(a.logo||a.logotext)&&B({to:"/types/","class":"logo-wrapper"},[a.logo&&D({"class":"logo",src:a.logo}),a.logotext&&v({"class":"logo-text"},a.logotext)]),J.View])};var N={"/types/":function types(){return[w("@magic/types"),z("comprehensive and thoroughly tested type comparison library"),G({project:"magic/types",appveyor:"jaeh/types"}),x({id:"install"}," install"),p.View("npm install @magic/types"),x({id:"import-single-function"}," import single function"),p.View("\n// single function import\nconst { isArray } = require('@magic/types')\n\nisArray([]) // true"),x({id:"import-all-functions"}," import all functions"),p.View("\nconst is = require('@magic/types')\n\nis.array([]) // true"),x({id:"functions"},"functions"),z("@magic/types exports an object of functions to typecheck."),y({id:"functions-is"},"is"),z("test a value for multiple types"),p.View("\nis(ele, ...types)\n\nis('astring', 'string', 'object') // true\nis(42, 'string', 'object') // false\n"),z({"class":"alias"},"alias is.eq, isEq, test"),y({id:"functions-not"},"not"),z("test if a value is not of a type"),p.View("\nnot(ele, ...types)\n\nnot('astring', 'string', 'object') // false\nnot(42, 'string', 'object') // true"),z({"class":"alias"},"alias is.neq, isNeq, isNot"),y({id:"functions-testtype"},"testType"),p.View("testType(42, 'number') // true"),z({"class":"alias"},"alias is.type"),y({id:"functions-test"},"test"),z("test if a value is one of the provided types"),p.View("\ntest(42, ['string', 'object']) // false\ntest('42', ['string', 'object']) // true"),z({"class":"alias"},"alias is.types"),y({id:"functions-array"},"type comparisons"),p.View("isArray([]) // true"),z("alias isArr, is.array, is.arr"),y({id:"functions-boolean"},"isBoolean"),p.View("isBoolean(true) // true"),z({"class":"alias"},"alias isBool, is.boolean, is.bool"),x({id:"functions-defined"},"isDefined"),p.View("isDefined(undefined) //false"),z({"class":"alias"},"alias isDef, is.defined, is.def"),x({id:"functions-undefined"},"isUndefined"),p.View("isUndefined(undefined) //false"),z({"class":"alias"},"alias isUndef, is.undefined, is.undef"),x({id:"functions-function"},"isFunction"),p.View("isFunction(() => {}) // true"),z({"class":"alias"},"alias isFunc, isFn, is.function, is.func, is.fn"),x({id:"functions-number"},"isNumber"),p.View("isNumber(1) // true"),z({"class":"alias"},"alias isNum, is.number, is.num"),x({id:"functions-integer"},"isInteger"),p.View("isInteger(1) // true"),z({"class":"alias"},"alias isInt, is.integer, is.int"),x({id:"functions-float"},"isFloat"),p.View("isFloat(1.1) // true"),z({"class":"alias"},"alias is.float"),x({id:"functions-object"},"isObject"),p.View("isObject({}) // true"),z({"class":"alias"},"alias isObj, is.object, is.obj"),x({id:"functions-string"},"isString"),p.View("isString('') // true"),z({"class":"alias"},"alias isStr, is.string, is.str"),x({id:"functions-rgbaobject"},"isRGBAObject"),p.View("isRGBAObject({ r: 1, g: 1, b: 1, a: 1 }) // true"),z({"class":"alias"},"alias isRGBA, is.rgbaObject, is.rgba"),x({id:"functions-rgbobject"},"isRGBObject"),p.View("isRGBObject({ r: 1, g: 1, b: 1 }) // true"),z({"class":"alias"},"alias isRGB, is.rgbObject, is.rgb"),x({id:"functions-hexcolor"},"isHexColor"),p.View("isHexColor('#333') // true"),z({"class":"alias"},"alias isHex, is.hex, is.hexColor"),x({id:"functions-hexalphacolor"},"isHexAlphaColor"),p.View("isHexAlphaColor('#3333') // true"),z({"class":"alias"},"alias isHexa, is.hexa, is.hexAlphaColor"),x({id:"functions-color"},"isColor"),p.View("isColor('#444') // true"),z({"class":"alias"},"alias isCol, is.color, is.col"),x({id:"functions-date"},"isDate"),p.View("isDate(new Date()) // true"),z({"class":"alias"},"alias isTime, is.date, is.time"),x({id:"functions-regexp"},"isRegExp"),p.View("isRegExp(/regexp/) // true"),z({"class":"alias"},"alias isRegex, is.regexp, is.regExp, is.regex"),x({id:"functions-truthy"},"isTruthy"),p.View("isTruthy('true') // true"),z({"class":"alias"},"alias is.truthy"),x({id:"functions-falsy"},"isFalsy"),p.View("isFalsy(0) // true"),z({"class":"alias"},"alias is.falsy"),x({id:"functions-empty"},"isEmpty"),p.View("isEmpty('') // true"),z({"class":"alias"},"alias is.empty"),x({id:"functions-error"},"isError"),p.View("isError(new Error('')) // true"),z({"class":"alias"},"alias isErr, is.error, is.err"),x({id:"functions-iterable"},"isIterable"),p.View("isIterable([]) // true"),z({"class":"alias"},"alias is.iterable"),x({id:"functions-email"},"isEmail"),p.View("isEmail('a@b.c') // true"),z({"class":"alias"},"alias isMail, is.email, is.mail"),x({id:"functions-null"},"isNull"),p.View("isNull(null) // true"),z({"class":"alias"},"alias isNil, is.nil, is.null"),x({id:"functions-undefinedornull"},"isUndefinedOrNull"),p.View("isUndefinedOrNull(undefined || null) // true"),z({"class":"alias"},"alias is.undefinedOrNull, is.undefinedOrNil, is.undefOrNull, is.undefOrNil"),x({id:"functions-buffer"},"isBuffer"),p.View("isBuffer(new Buffer('test')) // true"),z({"class":"alias"},"alias isBuff, is.buffer, is.buff"),x({id:"functions-promise"},"isPromise"),p.View("isPromise(new Promise()) // true"),z({"class":"alias"},"alias is.promise, isThenable, isThen, is.thenable, is.then"),x({id:"functions-arguments"},"isArguments"),p.View("isArguments(() => return arguments) // true"),z({"class":"alias"},"alias isArgs, is.arguments, is.args"),x({id:"functions-uuid"},"isUUID"),p.View("isUUID(uuid) // true"),z({"class":"alias"},"alias is.uuid"),x({id:"functions-eq"},"isEq"),p.View("isEq(42, 'number') // true"),z({"class":"alias"},"alias isEqual isEq is.equal is.eq is.is"),x({id:"functions-not"},"isNot"),p.View("isNot(42, 'number') // true"),z({"class":"alias"},"alias is.neq, isNeq, is.not"),x({id:"functions-deepequal"},"isDeepEqual"),p.View("isDeepEqual([1, 2, 3], [1, 2, 3]) // true"),z({"class":"alias"},"alias is.deep.eq, is.deep.equal"),x({id:"functions-deepdifferent"},"isDeepDifferent"),p.View("isDeepDifferent([1, 2, 3], [1, 2, 3]) // false"),z({"class":"alias"},"alias is.deep.diff, is.deep.different")]},"/404/":function _(){return r("404 - not found")}};var O={"url":"/types/","menu":[{to:"/types/#install","text":"install"},{to:"/types/#require","text":"require"},{to:"/types/#import-single-function","text":"import single function"},{to:"/types/#import-all-functions","text":"import all functions"},{to:"/types/#functions","text":"functions","items":[{to:"/types/#functions-is","text":"is"},{to:"/types/#functions-not","text":"not"},{to:"/types/#functions-test","text":"test"},{to:"/types/#functions-testtype","text":"testType"},{to:"/types/#functions-type-compare","text":"type comparisons"},{to:"/types/#functions-array","text":"isArray"},{to:"/types/#functions-boolean","text":"isBoolean"},{to:"/types/#functions-defined","text":"isDefined"},{to:"/types/#functions-undefined","text":"isUndefined"},{to:"/types/#functions-function","text":"isFunction"},{to:"/types/#functions-number","text":"isNumber"},{to:"/types/#functions-integer","text":"isInteger"},{to:"/types/#functions-float","text":"isFloat"},{to:"/types/#functions-object","text":"isObject"},{to:"/types/#functions-string","text":"isString"},{to:"/types/#functions-rgbaobject","text":"isRGBAObject"},{to:"/types/#functions-rgbobject","text":"isRGBObject"},{to:"/types/#functions-hexcolor","text":"isHexColor"},{to:"/types/#functions-hexalphacolor","text":"isHexAlphaColor"},{to:"/types/#functions-color","text":"isColor"},{to:"/types/#functions-date","text":"isDate"},{to:"/types/#functions-regexp","text":"isRegExp"},{to:"/types/#functions-truthy","text":"isTruthy"},{to:"/types/#functions-falsy","text":"isFalsy"},{to:"/types/#functions-empty","text":"isEmpty"},{to:"/types/#functions-error","text":"isError"},{to:"/types/#functions-iterable","text":"isIterable"},{to:"/types/#functions-email","text":"isEmail"},{to:"/types/#functions-null","text":"isNull"},{to:"/types/#functions-undefinedornull","text":"isUndefinedOrNull"},{to:"/types/#functions-buffer","text":"isBuffer"},{to:"/types/#functions-promise","text":"isPromise"},{to:"/types/#functions-arguments","text":"isArguments"},{to:"/types/#functions-uuid","text":"isUUID"},{to:"/types/#functions-eq","text":"isEq"},{to:"/types/#functions-not","text":"isNot"},{to:"/types/#functions-deepequal","text":"isDeepEqual"},{to:"/types/#functions-deepdifferent","text":"isDeepDifferent"}]}],"pages":{"/types/":{"logotext":"@magic/types","title":"@magic/types"}},"pre":{"theme":"light"}};O.url=window.location.pathname;var P={"pre":{"changeTheme":function changeTheme(a){return{theme:a}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}},"go":function go(a){return function(c){if(typeof window==="undefined"||!window.history)return!0;var d=a.to;var f=a.e?a.e:a;f.preventDefault();var e=c.url;var g=e.split("#"),h=b(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(d){e=d.replace(window.location.origin,"");var l=e.split("#"),m=b(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p;var q=c.hash?"#".concat(c.hash):"";var r=c.url+q;e!==r&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=f.state?f.state.uri:"/";return k&&window.location&&(window.location.hash=k),{url:i,hash:k,prev:c.url}}}};var Q=function view(a,b){var c=N[a.url]?a.url:"/404/";var d=N[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return r({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[M,d?r({"class":"page"},d(a,b)):r({"class":"page"},"404 - not found"),H.View])};var R=document;var d=R.getElementById("magic");!d&&(d=R.createElement("div"),d.id="magic",R.body.appendChild(d)),o(O,P,Q,d);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
