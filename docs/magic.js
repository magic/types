function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function t(e){if(Array.isArray(e))return e}function i(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){var n,s;n=e,s=i[t],t in n?Object.defineProperty(n,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[t]=s})}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i.push.apply(i,n)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}function o(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}function r(e,n){return t(e)||function(e,t){var i,n,s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var o=[],r=!0,a=!1;try{for(s=s.call(e);!(r=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);r=!0);}catch(e){a=!0,n=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw n}}return o}}(e,n)||a(e,n)||i()}function a(t,i){if(t){if("string"==typeof t)return e(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,i)}}!function(){var e,l,c,u,f,p,d,y,m,h,g,v,b,x,w,C,O,j,k,S,A=(e={},c=(l=[]).map,u=Array.isArray,f="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,p=function(e){var t="";if("string"==typeof e)return e;if(u(e)&&e.length>0)for(var i,n=0;n<e.length;n++)""!==(i=p(e[n]))&&(t+=(t&&" ")+i);else for(var n in e)e[n]&&(t+=(t&&" ")+n);return t},d=function(e,t){var i={};for(var n in e)i[n]=e[n];for(var n in t)i[n]=t[n];return i},y=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:y(t):0)},l)},m=function(e,t){if(e!==t)for(var i in d(e,t)){var n,s;if(e[i]!==t[i]&&(n=e[i],s=t[i],!(u(n)&&u(s))||n[0]!==s[0]||"function"!=typeof n[0]))return!0;t[i]=e[i]}},h=function(e,t,i){for(var n,s,o=0,r=[];o<e.length||o<t.length;o++)n=e[o],r.push((s=t[o])?!n||s[0]!==n[0]||m(s[1],n[1])?[s[0],s[1],s[0](i,s[1]),n&&n[2]()]:n:n&&n[2]());return r},g=function(e,t,i,n,s,o){if("key"===t);else if("style"===t)for(var r in d(i,n))i=null==n||null==n[r]?"":n[r],"-"===r[0]?e[t].setProperty(r,i):e[t][r]=i;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=n)?i||e.addEventListener(t,s):e.removeEventListener(t,s):!o&&"list"!==t&&t in e?e[t]=null==n?"":n:null!=n&&!1!==n&&("class"!==t||(n=p(n)))?e.setAttribute(t,n):e.removeAttribute(t)},v=function(e,t,i){var n=e.props,s=3===e.type?document.createTextNode(e.name):(i=i||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:n.is}):document.createElement(e.name,{is:n.is});for(var o in n)g(s,o,null,n[o],t,i);for(var r=0,a=e.children.length;r<a;r++)s.appendChild(v(e.children[r]=O(e.children[r]),t,i));return e.node=s},b=function(e){return null==e?null:e.key},x=function(e,t,i,n,s,o){if(i===n);else if(null!=i&&3===i.type&&3===n.type)i.name!==n.name&&(t.nodeValue=n.name);else if(null==i||i.name!==n.name)t=e.insertBefore(v(n=O(n),s,o),t),null!=i&&e.removeChild(i.node);else{var r,a,l,c,u=i.props,f=n.props,p=i.children,y=n.children,m=0,h=0,w=p.length-1,C=y.length-1;for(var j in o=o||"svg"===n.name,d(u,f))("value"===j||"selected"===j||"checked"===j?t[j]:u[j])!==f[j]&&g(t,j,u[j],f[j],s,o);for(;h<=C&&m<=w&&null!=(l=b(p[m]))&&l===b(y[h]);)x(t,p[m].node,p[m],y[h]=O(y[h++],p[m++]),s,o);for(;h<=C&&m<=w&&null!=(l=b(p[w]))&&l===b(y[C]);)x(t,p[w].node,p[w],y[C]=O(y[C--],p[w--]),s,o);if(m>w)for(;h<=C;)t.insertBefore(v(y[h]=O(y[h++]),s,o),(a=p[m])&&a.node);else if(h>C)for(;m<=w;)t.removeChild(p[m++].node);else{for(var j=m,k={},S={};j<=w;j++)null!=(l=p[j].key)&&(k[l]=p[j]);for(;h<=C;){if(l=b(a=p[m]),c=b(y[h]=O(y[h],a)),S[l]||null!=c&&c===b(p[m+1])){null==l&&t.removeChild(a.node),m++;continue}null==c||1===i.type?(null==l&&(x(t,a&&a.node,a,y[h],s,o),h++),m++):(l===c?(x(t,a.node,a,y[h],s,o),S[c]=!0,m++):null!=(r=k[c])?(x(t,t.insertBefore(r.node,a&&a.node),r,y[h],s,o),S[c]=!0):x(t,a&&a.node,null,y[h],s,o),h++)}for(;m<=w;)null==b(a=p[m++])&&t.removeChild(a.node);for(var j in k)null==S[j]&&t.removeChild(k[j].node)}}return n.node=t},w=function(e,t){for(var i in e)if(e[i]!==t[i])return!0;for(var i in t)if(e[i]!==t[i])return!0},C=function(e){return"object"==typeof e?e:k(e)},O=function(e,t){return 2===e.type?((!t||!t.lazy||w(t.lazy,e.lazy))&&((t=C(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},j=function(e,t,i,n,s,o){return{name:e,props:t,children:i,node:n,type:o,key:s}},k=function(t,i){return j(t,e,l,i,void 0,3)},S=function(t){return 3===t.nodeType?k(t.nodeValue,t):j(t.nodeName.toLowerCase(),e,c.call(t.childNodes,S),t,void 0,1)},{h:function(t,i){for(var n,s=[],o=[],r=arguments.length;r-- >2;)s.push(arguments[r]);for(;s.length>0;)if(u(n=s.pop()))for(var r=n.length;r-- >0;)s.push(n[r]);else!1===n||!0===n||null==n||o.push(C(n));return i=i||e,"function"==typeof t?t(i,o):j(t,i,o,void 0,i.key)},app:function(e){var t={},i=!1,n=e.view,s=e.node,o=s&&S(s),r=e.subscriptions,a=[],l=function(e){d(this.actions[e.type],e)},c=function(e){return t!==e&&(t=e,r&&(a=h(a,y([r(t)]),d)),n&&!i&&f(m,i=!0)),t},p=e.middleware,d=(void 0===p?function(e){return e}:p)(function(e,i){return"function"==typeof e?d(e(t,i)):u(e)?"function"==typeof e[0]||u(e[0])?d(e[0],"function"==typeof e[1]?e[1](i):e[1]):(y(e.slice(1)).map(function(e){e&&e[0](d,e[1])},c(e[0])),t):c(e)}),m=function(){i=!1,s=x(s.parentNode,s,o,o=C(n(t)),l)};d(e.init)}}),E=A.h,M=A.app,P=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,n=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return i.some(function(t){return t===(void 0===e?"undefined":e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e)})};if(n(i,"undefined")){if(t.props)return E(e,{},[t]);n(t,"string","number","function")||Array.isArray(t)?(i=t,t={}):n(t.View,"function")&&(i=t.View,t={})}return E(e,t,i)}},N=P("a");P("abbr"),P("address"),P("animate"),P("animateMotion"),P("animateTransform"),P("area"),P("article"),P("aside"),P("audio"),P("b"),P("base"),P("bdi"),P("bdo"),P("blockquote"),P("body"),P("br");var F=P("button");P("canvas"),P("caption");var D=P("circle");P("cite"),P("clipPath");var B=P("code");P("col"),P("colgroup"),P("data"),P("datalist"),P("dd"),P("defs"),P("del"),P("desc"),P("description"),P("details"),P("dfn"),P("dialog"),P("discard");var T=P("div");P("dl"),P("dt"),P("ellipse"),P("em"),P("embed"),P("feBlend"),P("feColorMatrix"),P("feComponentTransfer"),P("feComposite"),P("feConvolveMatrix"),P("feDiffuseLighting"),P("feDisplacementMap"),P("feDistantLight"),P("feDropShadow"),P("feFlood"),P("feFuncA"),P("feFuncB"),P("feFuncG"),P("feFuncR"),P("feGaussianBlur"),P("feImage"),P("feMerge"),P("feMergeNode"),P("feMorphology"),P("feOffset"),P("fePointLight"),P("feSpecularLighting"),P("feSpotLight"),P("feTile"),P("feTurbulence"),P("fieldset"),P("figcaption"),P("figure"),P("filter");var q=P("footer");P("foreignObject"),P("form");var R=P("g"),U=P("h1"),W=P("h2"),I=P("h3");P("h4"),P("h5"),P("h6"),P("hatch"),P("hatchpath"),P("head");var L=P("header");P("hgroup"),P("hr"),P("html"),P("i"),P("iframe"),P("image");var G=P("img"),z=P("input");P("ins"),P("kbd"),P("label"),P("legend");var H=P("li");P("line"),P("linearGradient"),P("link");var V=P("main");P("map"),P("mark"),P("marker"),P("mask"),P("mesh"),P("meshgradient"),P("meshpatch"),P("meshrow"),P("meta"),P("metadata"),P("meter"),P("mpath");var Y=P("nav");P("noscript"),P("object"),P("ol"),P("optgroup"),P("option"),P("output");var _=P("p");P("param");var J=P("path");P("pattern"),P("picture"),P("polygon"),P("polyline");var $=P("pre");P("progress"),P("q"),P("radialGradient"),P("rb"),P("rect"),P("rp"),P("rt"),P("rtc"),P("ruby"),P("s"),P("samp"),P("script"),P("section"),P("select"),P("set"),P("small"),P("solidcolor"),P("source");var K=P("span");P("stop"),P("strong"),P("style"),P("sub"),P("summary"),P("sup");var Q=P("svg");P("symbol"),P("table"),P("tbody"),P("td"),P("template"),P("text"),P("textPath"),P("textarea"),P("tfoot"),P("th"),P("thead"),P("time"),P("title"),P("tr"),P("track"),P("tspan"),P("u");var X=P("ul");P("unknown"),P("use"),P("video"),P("view"),P("wbr");var Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return q({class:"Footer"},[T({class:"Container"},[T({class:"Credits"},["made with a few bits of ",en({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),t])])},ee=function(e){if("string"==typeof e)e={project:e};else if(!e.project)return;var t=e.branch,i=void 0===t?"master":t,n=e.host,s=void 0===n?"github":n,o=e.project,a=void 0!==o&&o,l="",c=a;a.startsWith("@")?(l="@",a=a.substr(1)):c=a.split("/")[1];var u=[["npm",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{to:"https://www.npmjs.com/package/".concat(c),src:"https://img.shields.io/npm/v/".concat(l).concat(e,"?color=blue")}}],["node",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{src:"https://img.shields.io/node/v/".concat(l).concat(e,"?color=blue")}}],["license",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{src:"https://img.shields.io/npm/l/".concat(l).concat(e,"?color=blue")}}],["travis",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{to:"https://travis-ci.com/".concat(e),src:"https://img.shields.io/travis/com/".concat(e,"/").concat(i)}}],["appveyor",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if(e){var t=r(e.split("/"),2),n=t[0],s=t[1];return n=n.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(n,"/").concat(s,"/branch/").concat(i),src:"https://img.shields.io/appveyor/ci/".concat(n,"/").concat(s,"/").concat(i,".svg")}}}],["coveralls",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return{to:"https://coveralls.io/".concat(s,"/").concat(e),src:"https://img.shields.io/coveralls/".concat(s,"/").concat(e,"/").concat(i,".svg")}}],["snyk",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e&&{to:"https://snyk.io/test/".concat(s,"/").concat(e),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(e,".svg")}}]].map(function(t){var i=r(t,2),n=i[0];return(0,i[1])(e[n])});if(u.length)return X({class:"GitBadges"},u.map(function(e){var t=e.to,i=e.src;if(i){var n=ei({src:i,height:"23"});return t?H(en({to:t},n)):H(n)}}))},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=e.logo,n=e.menu,s=e.logotext,o=e.hash,r=e.url;if(i||n||s)return L({class:"Header"},[es(),s&&_(s),n&&eo({url:r,hash:o,menu:n}),t])},ei=function(e){if("string"==typeof e&&(e={src:e}),e.src)return e.alt||(e.title?e.alt=e.title:(e.role="presentation",e.alt="",e.loading=e.loading||"lazy")),G(e)},en=function(e,t){var i=e.to,n=e.action,s=void 0===n?ef.go:n,r=e.text,a=o(e,["to","action","text"]),l=a.href,c=a.nofollow,u=a.noreferrer,f=o(a,["href","nofollow","noreferrer"]);return i=i||l||"",f.href=i,r&&t?r=[r,t]:r||(r=t||i),"/"===i[0]||"#"===i[0]?f.onclick=[s,eu.preventDefault]:(f.target="_blank",f.rel="noopener",c&&(f.rel+=" nofollow"),u&&(f.rel+=" noreferrer")),N(f,r)},es=function(){return en({to:"/types/",class:"Logo"},[Q({viewBox:"0 0 512 444"},[J({d:"M512 444L256 0 0 444z",fill:"#663695"}),D({cx:"256",cy:"294",r:"130",fill:"#fff"}),D({cx:"256",cy:"281",r:"40",fill:"#663695"}),J({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),J({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])])},eo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collapse,i=void 0===t||t,o=e.menu,r=e.hash,a=e.class,l=void 0===a?"":a,c=e.url;return l.includes("Menu")||(l="Menu ".concat(l).trim()),r&&!c.endsWith(r)&&(c+="#".concat(r)),Y({className:l},X(o.map(function(e){return er(s(n({},e),{url:c,collapse:i}))})))},er=function(e){var t=e.collapse,i=e.items,s=void 0===i?[]:i,r=e.text,a=e.url,l=o(e,["collapse","items","text","url"]),c={class:{}},u=l.to;u===a&&(c.class.active=!0);var f=[];return(!t||a.includes(u))&&s.length&&(f=X(s.map(function(e){return er(n({url:a,collapse:t},e))}))),H(c,[u?en(l,r):K(l,r),f])},ea=function(e){var t=e.nospy,i=void 0===t?{}:t;e.cookies;var n=i.show,s=i.title,o=void 0===s?"Privacy Notice":s,r=i.content,a=void 0===r?"This app neither saves, collects, nor shares any data about you.":r,l=i.buttonText;return n?T({class:"NoSpy"},[T({class:"Background",onclick:ef.nospy.toggle}),T({class:"Container"},[o&&I(o),a&&_(a),z({onclick:ef.nospy.toggle,value:void 0===l?"Awesome!":l,type:"button"})])]):T({class:"NoSpy"},Q({class:"icon",onclick:ef.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[R([J({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),D({cx:"192",cy:"128",r:"32"}),D({cx:"128",cy:"256",r:"32"}),D({cx:"288",cy:"384",r:"32"}),D({cx:"272",cy:"272",r:"16"}),D({cx:"400",cy:"336",r:"16"}),D({cx:"176",cy:"368",r:"16"})])]))},el=function(e,t){var i=e.page,n=e.state;return V({id:"Magic",class:n.pageClass},T({class:{Wrapper:!0}},[et(n),T({class:"Page",id:"page"},i(n)),Z(n),t]))},ec=function(e,t){"string"==typeof e?e={content:e}:t?e=n({content:t},e):Array.isArray(e)&&(e={content:e.join("")});var i=e.content,s=e.lines,o=void 0===s||s;return T({class:{Pre:!0,lines:o&&"false"!==o}},[T({class:"menu"},[F({onclick:[ef.pre.clip,function(e){return{e:e,content:i}}]},"copy")]),$(i.trim().split("\n").map(ec.Line))])};ec.Comment=function(e){return K({class:"comment"},e)},ec.Line=function(e){return B({class:"line"},ec.Words(e))},ec.Word=function(e){if(!e)return"";var t=e.includes("://"),i=e.startsWith("mailto:")||e.includes("@")&&e.includes(".");if(t||i)return en({to:e,text:e});var n="";return("state"===e?n="state":"actions"===e?n="actions":eu.pre.keywords.includes(e)?n="keyword":eu.pre.builtins.includes(e)?n="builtin":eu.pre.booleans.includes(e)&&(n="boolean"),n)?K({class:n},e):e},ec.Words=function(e){var n,s=t(n=e.split(eu.pre.commentRegex))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||a(n)||i(),o=s[0],l=s.slice(1);if(!o.endsWith(":")&&l.length)return[ec.Words(o),ec.Comment(l.join("").split(eu.pre.wordRegex).map(ec.Word))];var c=[],u=e;return(e.replace(eu.pre.stringRegex,function(e){if(u){var t=r(u.split(e),2),i=t[0],n=t[1];i&&c.push(i.split(eu.pre.wordRegex).map(ec.Word).filter(function(e){return e})),u=n}c.push(K({class:"string"},e))}),u!==e)?(u&&c.push(u.split(eu.pre.wordRegex).map(ec.Word).filter(function(e){return e})),c):e.split(eu.pre.wordRegex).filter(function(e){return e}).map(ec.Word)};var eu={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function(e){return e.preventDefault(),e}},ef={changeTheme:function(e){return s(n({},e),{pageClass:s(n({},e.pageClass),{light:"dark"===e.theme}),theme:"dark"===e.theme?"light":"dark"})},go:function(e,t){var i=t.currentTarget.href.replace(window.location.origin,""),o=r(i.split("#"),2),a=o[0],l=o[1],c=void 0===l?"":l;if(a===e.url&&c===e.hash)return c&&(window.location.hash=c),e;var u=e.pages&&e.pages[a]&&e.pages[a].title;u&&(document.title=e.title=u),a!==e.url?c||window.scrollTo({top:0}):window.location.hash=c;var f=window.scrollY;return window.history.pushState({url:a,hash:c,scrollY:f},e.title,i),s(n({},e),{url:a,hash:c,prev:e.url})},nospy:{toggle:function(e){return e.nospy.show=!e.nospy.show,n({},e)}},pop:function(e,t){var i=window.location,o=i.pathname,r=i.hash;r=r.substring(1);var a=0;return t.state&&(o=t.state.url,r=t.state.hash,a=t.state.scrollY||0),r?window.location.hash=r:window.scroll({top:a}),s(n({},e),{url:o,hash:r})},pre:{clip:function(e,t){var i=t.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var n=document.createElement("textarea");n.id="copy",n.innerHTML=i,document.body.appendChild(n);var s=document.getElementById("copy");s.select(),document.execCommand("copy"),document.body.removeChild(s)}return e}}},ep={listenPopState:function(e,t){var i=function(i){return e(t,i)};return addEventListener("popstate",i),function(){return removeEventListener("popstate",i)}}},ed={"/types/":function(e){return[U(e.title),_(e.description),I("v0.1.0 uses esmodules without compilation."),ee("@magic/types"),W({id:"install"}," install"),ec("npm install @magic/types"),W({id:"import"},"import"),I({id:"import-single-function"}," import single function"),ec("\n// single function import\nimport { isArray } from '@magic/types'\n\nisArray([]) // true"),I({id:"import-all-functions"}," import all functions"),ec("\nimport is from '@magic/types'\n\nis.array([]) // true"),I({id:"functions"},"functions"),_("@magic/types exports an object of functions to typecheck."),I({id:"functions-is"},"is"),_("test a value for multiple types"),ec("\nis(ele, ...types)\n\nis('astring', 'string', 'object') // true\nis(42, 'string', 'object') // false\n"),_({class:"alias"},"alias is.eq, isEq, test"),I({id:"functions-not"},"not"),_("test if a value is not of a type"),ec("\nnot(ele, ...types)\n\nnot('astring', 'string', 'object') // false\nnot(42, 'string', 'object') // true"),_({class:"alias"},"alias is.neq, isNeq, isNot"),I({id:"functions-testtype"},"testType"),ec("testType(42, 'number') // true"),_({class:"alias"},"alias is.type"),I({id:"functions-test"},"test"),_("test if a value is one of the provided types"),ec("\ntest(42, ['string', 'object']) // false\ntest('42', ['string', 'object']) // true"),_({class:"alias"},"alias is.types"),I({id:"functions-issametype"},"isSameType"),_("compare the types of two values."),ec("\nisSameType(42, 'string') // false\ntest(42, 23) // true"),_({class:"alias"},"alias isSame, is.sameType, is.same"),I({id:"functions-array"},"isArray"),ec("isArray([]) // true"),_("alias isArr, is.array, is.arr"),I({id:"functions-boolean"},"isBoolean"),ec("isBoolean(true) // true"),_({class:"alias"},"alias isBool, is.boolean, is.bool"),I({id:"functions-defined"},"isDefined"),ec("isDefined(undefined) //false"),_({class:"alias"},"alias isDef, is.defined, is.def"),I({id:"functions-undefined"},"isUndefined"),ec("isUndefined(undefined) //false"),_({class:"alias"},"alias isUndef, is.undefined, is.undef"),I({id:"functions-function"},"isFunction"),ec("isFunction(() => {}) // true"),_({class:"alias"},"alias isFunc, isFn, is.function, is.func, is.fn"),I({id:"functions-asyncfunction"},"isAsyncFunction"),ec("isAsyncFunction(async () => {}) // true"),_({class:"alias"},"alias isAsyncFunc, isAsyncFn, is.asyncFunction, is.asyncFunc, is.asyncFn"),I({id:"functions-generatorfunction"},"isGeneratorFunction"),ec("isGeneratorFunction(function * () {}) // true"),_({class:"alias"},"alias isGeneratorFunc, isGeneratorFn, is.generatorFunction, is.generator, is.generatorFunc, is.generatorFn"),I({id:"functions-number"},"isNumber"),ec("isNumber(1) // true"),_({class:"alias"},"alias isNum, is.number, is.num"),I({id:"functions-integer"},"isInteger"),ec("isInteger(1) // true"),_({class:"alias"},"alias isInt, is.integer, is.int"),I({id:"functions-float"},"isFloat"),ec("isFloat(1.1) // true"),_({class:"alias"},"alias is.float"),I({id:"functions-object"},"isObject"),ec("isObject({}) // true"),_({class:"alias"},"alias isObj, is.object, is.obj"),I({id:"functions-string"},"isString"),ec("isString('') // true"),_({class:"alias"},"alias isStr, is.string, is.str"),I({id:"functions-rgbaobject"},"isRGBAObject"),ec("isRGBAObject({ r: 1, g: 1, b: 1, a: 1 }) // true"),_({class:"alias"},"alias isRGBA, is.rgbaObject, is.rgba"),I({id:"functions-rgbobject"},"isRGBObject"),ec("isRGBObject({ r: 1, g: 1, b: 1 }) // true"),_({class:"alias"},"alias isRGB, is.rgbObject, is.rgb"),I({id:"functions-hexcolor"},"isHexColor"),ec("isHexColor('#333') // true"),_({class:"alias"},"alias isHex, is.hex, is.hexColor"),I({id:"functions-hexalphacolor"},"isHexAlphaColor"),ec("isHexAlphaColor('#3333') // true"),_({class:"alias"},"alias isHexa, is.hexa, is.hexAlphaColor"),I({id:"functions-color"},"isColor"),ec("isColor('#444') // true"),_({class:"alias"},"alias isCol, is.color, is.col"),I({id:"functions-date"},"isDate"),ec("isDate(new Date()) // true"),_({class:"alias"},"alias isTime, is.date, is.time"),I({id:"functions-regexp"},"isRegExp"),ec("isRegExp(/regexp/) // true"),_({class:"alias"},"alias isRegex, is.regexp, is.regExp, is.regex"),I({id:"functions-truthy"},"isTruthy"),ec("isTruthy('true') // true"),_({class:"alias"},"alias is.truthy"),I({id:"functions-falsy"},"isFalsy"),ec("isFalsy(0) // true"),_({class:"alias"},"alias is.falsy"),I({id:"functions-empty"},"isEmpty"),ec("isEmpty('') // true"),_({class:"alias"},"alias is.empty"),I({id:"functions-error"},"isError"),ec("isError(new Error('')) // true"),_({class:"alias"},"alias isErr, is.error, is.err"),I({id:"functions-iterable"},"isIterable"),ec("isIterable([]) // true"),_({class:"alias"},"alias is.iterable"),I({id:"functions-email"},"isEmail"),ec("isEmail('a@b.c') // true"),_({class:"alias"},"alias isMail, is.email, is.mail"),I({id:"functions-null"},"isNull"),ec("isNull(null) // true"),_({class:"alias"},"alias isNil, is.nil, is.null"),I({id:"functions-undefinedornull"},"isUndefinedOrNull"),ec("isUndefinedOrNull(undefined || null) // true"),_({class:"alias"},["alias is.undefinedOrNull,"," is.undefinedOrNil, is.undefOrNull, is.undefOrNil"]),I({id:"functions-buffer"},"isBuffer"),ec("isBuffer(new Buffer('test')) // true"),_({class:"alias"},"alias isBuff, is.buffer, is.buff"),I({id:"functions-promise"},"isPromise"),ec("isPromise(new Promise()) // true"),_({class:"alias"},"alias is.promise, isThenable, isThen, is.thenable, is.then"),I({id:"functions-uuid"},"isUUID"),ec("isUUID(uuid) // true"),_({class:"alias"},"alias is.uuid"),I({id:"functions-eq"},"isEq"),ec("isEq(42, 'number') // true"),_({class:"alias"},"alias isEqual isEq is.equal is.eq is.is"),I({id:"functions-not"},"isNot"),ec("isNot(42, 'number') // true"),_({class:"alias"},"alias is.neq, isNeq, is.not"),I({id:"functions-deepequal"},"isDeepEqual"),ec("isDeepEqual([1, 2, 3], [1, 2, 3]) // true"),_({class:"alias"},"alias is.deep.eq, is.deep.equal"),I({id:"functions-deepdifferent"},"isDeepDifferent"),ec("isDeepDifferent([1, 2, 3], [1, 2, 3]) // false"),_({class:"alias"},"alias is.deep.diff, is.deep.different"),I({id:"functions-ismap"},"isMap"),ec("isMap(new Map()) //true"),_({class:"alias"},"alias is.map"),I({id:"functions-isset"},"isSet"),ec("isSet(new Set()) //true"),_({class:"alias"},"alias is.set"),I({id:"functions-isweakmap"},"isWeakMap"),ec("isWeakMap(new WeakMap()) //true"),_({class:"alias"},"alias is.weakMap"),I({id:"functions-isweakset"},"isWeakSet"),ec("isWeakSet(new WeakSet()) //true"),_({class:"alias"},"alias is.weakSet"),I({id:"functions-isevery"},"isEvery"),ec("\nisEvery([1, 2, 3], 'number') // true\nisEvery([1, 2, 3], is.number) // true\n  "),_({class:"alias"},"alias is.every, is.all"),I({id:"functions-issome"},"isSome"),ec("\nisSome([1, 'str', {}], 'number') // true\nisSome([1, 'str', {}], is.number) // true\n  "),_({class:"alias"},"alias is.some"),I({id:"functions-isnone"},"isNone"),ec("\nisNone([1, 2, 3], 'string') // true\nisNone([1, 2, 3], is.number) // false\n  "),_({class:"alias"},"alias is.none"),I({id:"functions-iscase"},"isCase"),ec("\nisCase('UPPERCASE', 'up') // true\nisCase('lowercase', 'low') // true\n  "),_({class:"alias"},"alias is.case"),I({id:"functions-isuppercase"},"isUpperCase"),ec("\nisUpperCase('UPPERCASE') // true\nisUpperCase(23) // false\n"),_({class:"alias"},"alias is.case.upper, isCase.upper"),I({id:"functions-islowercase"},"isLowerCase"),ec("\nisLowerCase('lowercase') // true\nisLowerCase(23) // false\n"),_({class:"alias"},"alias is.case.lower, isCase.lower"),I({id:"functions-ismergeableobject"},"isMergeableObject"),ec("\nisMergeableObject({}) // true\nisMergeableObject(23) // false\n"),_({class:"alias"},"alias is.mergeable, isMergeable, is.isMergeable, is.mergeableObject"),I({id:"functions-isownprop"},"isOwnProp"),ec("\nisOwnProp({ test: false }, 'test') // true\nisOwnProp({ test: false }, 'different') // false\nisOwnProp(undefined, 'test) // false\n"),_({class:"alias"},"alias isOwnProperty, is.ownProperty, is.ownProp, is.prop"),I({id:"functions-ismodule"},"isModule"),ec("\nconst imported = await import(file)\nisModule(imported) // true\nisModule({ ... anything else }) // false\n"),_({class:"alias"},"alias is.module"),W({id:"source"},"source"),_(["the source for this page is in the ",en({to:"https://github.com/magic/types/tree/master/example"},"example directory")," and gets built and published to github using ",en({to:"https://github.com/magic/core"},"@magic/core")])]},"/types/404/":function(){return T("404 - not found.")}};M({init:s(n({},{description:"comprehensive and thoroughly tested type comparison library",logotext:"@magic/types",menu:[{text:"install",to:"/types/#install"},{items:[{text:"import single function",to:"/types/#import-single-function"},{text:"import all functions",to:"/types/#import-all-functions"}],text:"import",to:"/types/#import"},{items:[{text:"is",to:"/types/#functions-is"},{text:"not",to:"/types/#functions-not"},{text:"test",to:"/types/#functions-test"},{text:"testType",to:"/types/#functions-testtype"},{text:"isSameType",to:"/types/#functions-issametype"},{text:"isArray",to:"/types/#functions-array"},{text:"isBoolean",to:"/types/#functions-boolean"},{text:"isDefined",to:"/types/#functions-defined"},{text:"isUndefined",to:"/types/#functions-undefined"},{text:"isFunction",to:"/types/#functions-function"},{text:"isAsyncFunction",to:"/types/#functions-asyncfunction"},{text:"isGeneratorFunction",to:"/types/#functions-generatorfunction"},{text:"isNumber",to:"/types/#functions-number"},{text:"isInteger",to:"/types/#functions-integer"},{text:"isFloat",to:"/types/#functions-float"},{text:"isObject",to:"/types/#functions-object"},{text:"isString",to:"/types/#functions-string"},{text:"isRGBAObject",to:"/types/#functions-rgbaobject"},{text:"isRGBObject",to:"/types/#functions-rgbobject"},{text:"isHexColor",to:"/types/#functions-hexcolor"},{text:"isHexAlphaColor",to:"/types/#functions-hexalphacolor"},{text:"isColor",to:"/types/#functions-color"},{text:"isDate",to:"/types/#functions-date"},{text:"isRegExp",to:"/types/#functions-regexp"},{text:"isTruthy",to:"/types/#functions-truthy"},{text:"isFalsy",to:"/types/#functions-falsy"},{text:"isEmpty",to:"/types/#functions-empty"},{text:"isError",to:"/types/#functions-error"},{text:"isIterable",to:"/types/#functions-iterable"},{text:"isEmail",to:"/types/#functions-email"},{text:"isNull",to:"/types/#functions-null"},{text:"isUndefinedOrNull",to:"/types/#functions-undefinedornull"},{text:"isBuffer",to:"/types/#functions-buffer"},{text:"isPromise",to:"/types/#functions-promise"},{text:"isUUID",to:"/types/#functions-uuid"},{text:"isEq",to:"/types/#functions-eq"},{text:"isNot",to:"/types/#functions-not"},{text:"isDeepEqual",to:"/types/#functions-deepequal"},{text:"isDeepDifferent",to:"/types/#functions-deepdifferent"},{text:"isMap",to:"/types/#functions-ismap"},{text:"isSet",to:"/types/#functions-isset"},{text:"isWeakMap",to:"/types/#functions-isweakmap"},{text:"isWeakSet",to:"/types/#functions-isweakset"},{text:"isEvery",to:"/types/#functions-isevery"},{text:"isSome",to:"/types/#functions-issome"},{text:"isNone",to:"/types/#functions-isnone"},{text:"isCase",to:"/types/#functions-iscase"},{text:"isUpperCase",to:"/types/#functions-isuppercase"},{text:"isLowerCase",to:"/types/#functions-islowercase"},{text:"isModule",to:"/types/#functions-ismodule"},{text:"isOwnProp",to:"/types/#functions-isownprop"}],text:"functions",to:"/types/#functions"},{text:"source",to:"/types/#source"}],nospy:{show:!1},pageClass:{},pages:{"/types/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/types/",theme:"dark",title:"@magic/types",url:"/types/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function(e){return[[ep.listenPopState,ef.pop]]},view:function(e){var t=ed[e.url]?e.url:"/404/",i=ed[t],n=e.pages&&e.pages[t];return n&&Object.keys(n).forEach(function(t){e[t]=n[t]}),e.url=t,el({page:i,state:e},[ea(e),function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],Q({class:"LightSwitch icon",onclick:ef.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[J({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),J({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),J({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])}(e)])},node:document.getElementById("Magic")})}();