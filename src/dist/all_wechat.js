/*! jQuery v1.7 jquery.com | jquery.org/license */
(function(a,b){function cA(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cx(a){if(!cm[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cn||(cn=c.createElement("iframe"),cn.frameBorder=cn.width=cn.height=0),b.appendChild(cn);if(!co||!cn.createElement)co=(cn.contentWindow||cn.contentDocument).document,co.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),co.close();d=co.createElement(a),co.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cn)}cm[a]=e}return cm[a]}function cw(a,b){var c={};f.each(cs.concat.apply([],cs.slice(0,b)),function(){c[this]=a});return c}function cv(){ct=b}function cu(){setTimeout(cv,0);return ct=f.now()}function cl(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ck(){try{return new a.XMLHttpRequest}catch(b){}}function ce(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cd(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function cc(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bG.test(a)?d(a,e):cc(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)cc(a+"["+e+"]",b[e],c,d);else d(a,b)}function cb(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function ca(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bV,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=ca(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=ca(a,c,d,e,"*",g));return l}function b_(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bR),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bE(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bz:bA;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bB(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function br(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bi,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bq(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bp(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bp)}function bp(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bo(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bn(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bm(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bl(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a){var b=Y.split(" "),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function W(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(R.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function V(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function N(){return!0}function M(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.add(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return a!=null&&m.test(a)&&!isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(I)return I.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())}),typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return e});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){return i.done.apply(i,arguments).fail.apply(i,arguments)},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,unknownElems:!!a.getElementsByTagName("nav").length,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",enctype:!!c.createElement("form").enctype,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.lastChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-999px",top:"-999px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;f(function(){var a,b,d,e,g,h,i=1,j="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",l="visibility:hidden;border:0;",n="style='"+j+"border:5px solid #000;padding:0;'",p="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>";m=c.getElementsByTagName("body")[0];!m||(a=c.createElement("div"),a.style.cssText=l+"width:0;height:0;position:static;top:0;margin-top:"+i+"px",m.insertBefore(a,m.firstChild),o=c.createElement("div"),o.style.cssText=j+l,o.innerHTML=p,a.appendChild(o),b=o.firstChild,d=b.firstChild,g=b.nextSibling.firstChild.firstChild,h={doesNotAddBorder:d.offsetTop!==5,doesAddBorderForTableAndCells:g.offsetTop===5},d.style.position="fixed",d.style.top="20px",h.fixedPosition=d.offsetTop===20||d.offsetTop===15,d.style.position=d.style.top="",b.style.overflow="hidden",b.style.position="relative",h.subtractsBorderForOverflowNotVisible=d.offsetTop===-5,h.doesNotIncludeMarginInBodyOffset=m.offsetTop!==i,m.removeChild(a),o=a=null,f.extend(k,h))}),o.innerHTML="",n.removeChild(o),o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[f.expando]:a[f.expando]&&f.expando,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[f.expando]=n=++f.uuid:n=f.expando),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[f.expando]:f.expando;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)?b=b:b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" "));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];if(!arguments.length){if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}return b}e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!a||j===3||j===8||j===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g},removeAttr:function(a,b){var c,d,e,g,h=0;if(a.nodeType===1){d=(b||"").split(p),g=d.length;for(;h<g;h++)e=d[h].toLowerCase(),c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1)}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return b;h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/\.(.*)$/,A=/^(?:textarea|input|select)$/i,B=/\./g,C=/ /g,D=/[^\w\s.|`]/g,E=/^([^\.]*)?(?:\.(.+))?$/,F=/\bhover(\.\S+)?/,G=/^key/,H=/^(?:mouse|contextmenu)|click/,I=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,J=function(a){var b=I.exec(a);b&&
(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},K=function(a,b){return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||a.id===b[2])&&(!b[3]||b[3].test(a.className))},L=function(a){return f.event.special.hover?a:a.replace(F,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=L(c).split(" ");for(k=0;k<c.length;k++){l=E.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,namespace:n.join(".")},p),g&&(o.quick=J(g),!o.quick&&f.expr.match.POS.test(g)&&(o.isPositional=!0)),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d){var e=f.hasData(a)&&f._data(a),g,h,i,j,k,l,m,n,o,p,q;if(!!e&&!!(m=e.events)){b=L(b||"").split(" ");for(g=0;g<b.length;g++){h=E.exec(b[g])||[],i=h[1],j=h[2];if(!i){j=j?"."+j:"";for(l in m)f.event.remove(a,l+j,c,d);return}n=f.event.special[i]||{},i=(d?n.delegateType:n.bindType)||i,p=m[i]||[],k=p.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;if(c||j||d||n.remove)for(l=0;l<p.length;l++){q=p[l];if(!c||c.guid===q.guid)if(!j||j.test(q.namespace))if(!d||d===q.selector||d==="**"&&q.selector)p.splice(l--,1),q.selector&&p.delegateCount--,n.remove&&n.remove.call(a,q)}else p.length=0;p.length===0&&k!==p.length&&((!n.teardown||n.teardown.call(a,j)===!1)&&f.removeEvent(a,i,e.handle),delete m[i])}f.isEmptyObject(m)&&(o=e.handle,o&&(o.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"",(g||!e)&&c.preventDefault();if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,n=null;for(m=e.parentNode;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length;l++){m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d);if(c.isPropagationStopped())break}c.type=h,c.isDefaultPrevented()||(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=(f.event.special[c.type]||{}).handle,j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click"))for(m=c.target;m!=this;m=m.parentNode||this){o={},q=[];for(k=0;k<e;k++)r=d[k],s=r.selector,t=o[s],r.isPositional?t=(t||(o[s]=f(s))).index(m)>=0:t===b&&(t=o[s]=r.quick?K(m,r.quick):f(m).is(s)),t&&q.push(r);q.length&&j.push({elem:m,matches:q})}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){p=j[k],c.currentTarget=p.elem;for(l=0;l<p.matches.length&&!c.isImmediatePropagationStopped();l++){r=p.matches[l];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=(i||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},focus:{delegateType:"focusin",noBubble:!0},blur:{delegateType:"focusout",noBubble:!0},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?N:M):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=N;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=N;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=N,this.stopPropagation()},isDefaultPrevented:M,isPropagationStopped:M,isImmediatePropagationStopped:M},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]=f.event.special[b]={delegateType:b,bindType:b,handle:function(a){var b=this,c=a.relatedTarget,d=a.handleObj,e=d.selector,g,h;if(!c||d.origType===a.type||c!==b&&!f.contains(b,c))g=a.type,a.type=d.origType,h=d.handler.apply(this,arguments),a.type=g;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(A.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;A.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return A.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=M;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=M);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),G.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),H.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw"Syntax error, unrecognized expression: "+a};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var O=/Until$/,P=/^(?:parents|prevUntil|prevAll)/,Q=/,/,R=/^.[^:#\[\.,]*$/,S=Array.prototype.slice,T=f.expr.match.POS,U={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(W(this,a,!1),"not",a)},filter:function(a){return this.pushStack(W(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?T.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=T.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(V(c[0])||V(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=S.call(arguments);O.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!U[a]?f.unique(e):e,(this.length>1||Q.test(d))&&P.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",Z=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,_=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,ba=/<([\w:]+)/,bb=/<tbody/i,bc=/<|&#?\w+;/,bd=/<(?:script|style)/i,be=/<(?:script|object|embed|option|style)/i,bf=new RegExp("<(?:"+Y.replace(" ","|")+")","i"),bg=/checked\s*(?:[^=]|=\s*.checked.)/i,bh=/\/(java|ecma)script/i,bi=/^\s*<!(?:\[CDATA\[|\-\-)/,bj={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bk=X(c);bj.optgroup=bj.option,bj.tbody=bj.tfoot=bj.colgroup=bj.caption=bj.thead,bj.th=bj.td,f.support.htmlSerialize||(bj._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after"
,arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Z,""):null;if(typeof a=="string"&&!bd.test(a)&&(f.support.leadingWhitespace||!$.test(a))&&!bj[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(_,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bg.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bl(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,br)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!be.test(j)&&(f.support.checkClone||!bg.test(j))&&!f.support.unknownElems&&bf.test(j)&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bn(a,d),e=bo(a),g=bo(d);for(h=0;e[h];++h)g[h]&&bn(e[h],g[h])}if(b){bm(a,d);if(c){e=bo(a),g=bo(d);for(h=0;e[h];++h)bm(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bc.test(k))k=b.createTextNode(k);else{k=k.replace(_,"<$1></$2>");var l=(ba.exec(k)||["",""])[1].toLowerCase(),m=bj[l]||bj._default,n=m[0],o=b.createElement("div");b===c?bk.appendChild(o):X(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=bb.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&$.test(k)&&o.insertBefore(b.createTextNode($.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bq(k[i]);else bq(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bh.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bs=/alpha\([^)]*\)/i,bt=/opacity=([^)]*)/,bu=/([A-Z]|^ms)/g,bv=/^-?\d+(?:px)?$/i,bw=/^-?\d/,bx=/^([\-+])=([\-+.\de]+)/,by={position:"absolute",visibility:"hidden",display:"block"},bz=["Left","Right"],bA=["Top","Bottom"],bB,bC,bD;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bB(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bx.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bB)return bB(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bE(a,b,d);f.swap(a,by,function(){e=bE(a,b,d)});return e}},set:function(a,b){if(!bv.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bt.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bs,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bs.test(g)?g.replace(bs,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bB(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bC=function(a,c){var d,e,g;c=c.replace(bu,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bD=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bv.test(f)&&bw.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bB=bC||bD,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bF=/%20/g,bG=/\[\]$/,bH=/\r?\n/g,bI=/#.*$/,bJ=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bK=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bL=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bM=/^(?:GET|HEAD)$/,bN=/^\/\//,bO=/\?/,bP=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bQ=/^(?:select|textarea)/i,bR=/\s+/,bS=/([?&])_=[^&]*/,bT=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bU=f.fn.load,bV={},bW={},bX,bY,bZ=["*/"]+["*"];try{bX=e.href}catch(b$){bX=c.createElement("a"),bX.href="",bX=bX.href}bY=bT.exec(bX.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bU)return bU.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bP,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bQ.test(this.nodeName)||bK.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bH,"\r\n")}}):{name:b.name,value:c.replace(bH,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?cb(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),cb(a,b);return a},ajaxSettings:{url:bX,isLocal:bL.test(bY[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bZ},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:b_(bV),ajaxTransport:b_(bW),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cd(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=ce(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bJ.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bI,"").replace(bN,bY[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bR),d.crossDomain==null&&(r=bT.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bY[1]&&r[2]==bY[2]&&(r[3]||(r[1]==="http:"?80:443))==(bY[3]||(bY[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),ca(bV,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bM.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bO.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bS,"$1_="+x);d.url=y+(y===d.url?(bO.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bZ+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=ca(bW,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)cc(g,a[g],c,e);return d.join("&").replace(bF,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cf=f.now(),cg=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cf++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cg.test(b.url)||e&&cg.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cg,l),b.url===j&&(e&&(k=k.replace(cg,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ch=a.ActiveXObject?function(){for(var a in cj)cj[a](0,1)}:!1,ci=0,cj;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ck()||cl()}:ck,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ch&&delete cj[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++ci,ch&&(cj||(cj={},f(a).unload(ch)),cj[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cm={},cn,co,cp=/^(?:toggle|show|hide)$/,cq=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cr,cs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],ct;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cw("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cx(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cw("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cw("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cx(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cp.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=cq.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cw("show",1),slideUp:cw("hide",1),slideToggle:cw("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=ct||cu(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cr&&(cr=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=ct||cu(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cr),cr=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now))}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cy=/^t(?:able|d|h)$/i,cz=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cA(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cy.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cz.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cz.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cA(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cA(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);
;(function(){
	'use strict';

	// can we support addEventListener
	var hasNative = 'addEventListener' in (new Image());

	var preLoader = function(images, options){
		this.options = {
			pipeline: false,
			auto: true,
			prefetch: false,
			/* onProgress: function(){}, */
			/* onError: function(){}, */
			onComplete: function(){}
		};

		options && typeof options == 'object' && this.setOptions(options);

		this.addQueue(images);
		this.queue.length && this.options.auto && this.processQueue();
	};

	preLoader.prototype.setOptions = function(options){
		// shallow copy
		var o = this.options,
			key;

		for (key in options) options.hasOwnProperty(key) && (o[key] = options[key]);

		return this;
	};

	preLoader.prototype.addQueue = function(images){
		// stores a local array, dereferenced from original
		this.queue = images.slice();

		return this;
	};

	preLoader.prototype.reset = function(){
		// reset the arrays
		this.completed = [];
		this.errors = [];

		return this;
	};

	preLoader.prototype.addEvents = function(image, src, index){
		var self = this,
			o = this.options,
			cleanup = function(){
				if (hasNative){
					this.removeEventListener('error', abort);
					this.removeEventListener('abort', abort);
					this.removeEventListener('load', load);
				}
				else {
					this.onerror = this.onabort = this.onload = null;
				}
			},
			abort = function(){
				//console.log('src error:' + src);
				cleanup.call(this);

				self.errors.push(src);
				o.onError && o.onError.call(self, src);
				checkProgress.call(self, src);
				o.pipeline && self.loadNext(index);
			},
			load = function(){
				//console.log('src load:' + src);
				cleanup.call(this);

				// store progress. this === image
				self.completed.push(src); // this.src may differ
				checkProgress.call(self, src, this);
				o.pipeline && self.loadNext(index);
			};

		if (hasNative){
			image.addEventListener('error', abort, false);
			image.addEventListener('abort', abort, false);
			image.addEventListener('load', load, false);
		}
		else {
			image.onerror = image.onabort = abort;
			image.onload = load;
		}

	};

	preLoader.prototype.load = function(src, index){
		/*jshint -W058 */
		var image = new Image;

		this.addEvents(image, src, index);

		// actually load
		image.src = src;

		return this;
	};

	preLoader.prototype.loadNext = function(index){
		// when pipeline loading is enabled, calls next item
		index++;
		this.queue[index] && this.load(this.queue[index], index);

		return this;
	};

	preLoader.prototype.processQueue = function(){
		// runs through all queued items.
		var i = 0,
			queue = this.queue,
			len = queue.length;

		// process all queue items
		this.reset();

		if (!this.options.pipeline) for (; i < len; ++i) this.load(queue[i], i);
		else this.load(queue[0], 0);

		return this;
	};

	/*jshint validthis:true */
	function checkProgress(src, image){
		// intermediate checker for queue remaining. not exported.
		// called on preLoader instance as scope
		var args = [],
			o = this.options;

		// call onProgress
		o.onProgress && src && o.onProgress.call(this, src, image, this.completed.length);

		if (this.completed.length + this.errors.length === this.queue.length){
			args.push(this.completed);
			this.errors.length && args.push(this.errors);
			o.onComplete.apply(this, args);
		}

		return this;
	}
	/*jshint validthis:false */

	if (typeof define === 'function' && define.amd){
		// we have an AMD loader.
		define(function(){
			return preLoader;
		});
	}
	else {
		this.preLoader = preLoader;
	}
}).call(this);

/* turn.js 4.1.0 | Copyright (c) 2012 Emmanuel Garcia | turnjs.com | turnjs.com/license.txt */

(function(f){function J(a,b,c){if(!c[0]||"object"==typeof c[0])return b.init.apply(a,c);if(b[c[0]])return b[c[0]].apply(a,Array.prototype.slice.call(c,1));throw q(c[0]+" is not a method or property");}function l(a,b,c,d){return{css:{position:"absolute",top:a,left:b,overflow:d||"hidden",zIndex:c||"auto"}}}function S(a,b,c,d,e){var h=1-e,f=h*h*h,g=e*e*e;return j(Math.round(f*a.x+3*e*h*h*b.x+3*e*e*h*c.x+g*d.x),Math.round(f*a.y+3*e*h*h*b.y+3*e*e*h*c.y+g*d.y))}function j(a,b){return{x:a,y:b}}function F(a,
b,c){return z&&c?" translate3d("+a+"px,"+b+"px, 0px) ":" translate("+a+"px, "+b+"px) "}function G(a){return" rotate("+a+"deg) "}function n(a,b){return Object.prototype.hasOwnProperty.call(b,a)}function T(){for(var a=["Moz","Webkit","Khtml","O","ms"],b=a.length,c="";b--;)a[b]+"Transform"in document.body.style&&(c="-"+a[b].toLowerCase()+"-");return c}function P(a,b,c,d,e){var h,f=[];if("-webkit-"==w){for(h=0;h<e;h++)f.push("color-stop("+d[h][0]+", "+d[h][1]+")");a.css({"background-image":"-webkit-gradient(linear, "+
b.x+"% "+b.y+"%,"+c.x+"% "+c.y+"%, "+f.join(",")+" )"})}else{var b={x:b.x/100*a.width(),y:b.y/100*a.height()},c={x:c.x/100*a.width(),y:c.y/100*a.height()},g=c.x-b.x;h=c.y-b.y;var i=Math.atan2(h,g),x=i-Math.PI/2,x=Math.abs(a.width()*Math.sin(x))+Math.abs(a.height()*Math.cos(x)),g=Math.sqrt(h*h+g*g),c=j(c.x<b.x?a.width():0,c.y<b.y?a.height():0),k=Math.tan(i);h=-1/k;k=(h*c.x-c.y-k*b.x+b.y)/(h-k);c=h*k-h*c.x+c.y;b=Math.sqrt(Math.pow(k-b.x,2)+Math.pow(c-b.y,2));for(h=0;h<e;h++)f.push(" "+d[h][1]+" "+100*
(b+g*d[h][0])/x+"%");a.css({"background-image":w+"linear-gradient("+-i+"rad,"+f.join(",")+")"})}}function t(a,b,c){a=f.Event(a);b.trigger(a,c);return a.isDefaultPrevented()?"prevented":a.isPropagationStopped()?"stopped":""}function q(a){function b(a){this.name="TurnJsError";this.message=a}b.prototype=Error();b.prototype.constructor=b;return new b(a)}function D(a){var b={top:0,left:0};do b.left+=a.offsetLeft,b.top+=a.offsetTop;while(a=a.offsetParent);return b}var z,U,w="",K=Math.PI,L=K/2,u="ontouchstart"in
window,r=u?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchend"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},p={backward:["bl","tl"],forward:["br","tr"],all:"tl bl tr br l r".split(" ")},V=["single","double"],W=["ltr","rtl"],X={acceleration:!0,display:"double",duration:600,page:1,gradients:!0,turnCorners:"bl,br",when:null},Y={cornerSize:100},g={init:function(a){z="WebKitCSSMatrix"in window||"MozPerspective"in document.body.style;var b;
U=(b=/AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent))?534.3<parseFloat(b[1]):!0;w=T();var c;b=0;var d=this.data(),e=this.children(),a=f.extend({width:this.width(),height:this.height(),direction:this.attr("dir")||this.css("direction")||"ltr"},X,a);d.opts=a;d.pageObjs={};d.pages={};d.pageWrap={};d.pageZoom={};d.pagePlace={};d.pageMv=[];d.zoom=1;d.totalPages=a.pages||0;d.eventHandlers={touchStart:f.proxy(g._touchStart,this),touchMove:f.proxy(g._touchMove,this),touchEnd:f.proxy(g._touchEnd,this),
start:f.proxy(g._eventStart,this)};if(a.when)for(c in a.when)n(c,a.when)&&this.bind(c,a.when[c]);this.css({position:"relative",width:a.width,height:a.height});this.turn("display",a.display);""!==a.direction&&this.turn("direction",a.direction);z&&(!u&&a.acceleration)&&this.transform(F(0,0,!0));for(c=0;c<e.length;c++)"1"!=f(e[c]).attr("ignore")&&this.turn("addPage",e[c],++b);f(this).bind(r.down,d.eventHandlers.touchStart).bind("end",g._eventEnd).bind("pressed",g._eventPressed).bind("released",g._eventReleased).bind("flip",
g._flip);f(this).parent().bind("start",d.eventHandlers.start);f(document).bind(r.move,d.eventHandlers.touchMove).bind(r.up,d.eventHandlers.touchEnd);this.turn("page",a.page);d.done=!0;return this},addPage:function(a,b){var c,d=!1,e=this.data(),h=e.totalPages+1;if(e.destroying)return!1;if(c=/\bp([0-9]+)\b/.exec(f(a).attr("class")))b=parseInt(c[1],10);if(b)if(b==h)d=!0;else{if(b>h)throw q('Page "'+b+'" cannot be inserted');}else b=h,d=!0;1<=b&&b<=h&&(c="double"==e.display?b%2?" odd":" even":"",e.done&&
this.turn("stop"),b in e.pageObjs&&g._movePages.call(this,b,1),d&&(e.totalPages=h),e.pageObjs[b]=f(a).css({"float":"left"}).addClass("page p"+b+c),-1!=navigator.userAgent.indexOf("MSIE 9.0")&&e.pageObjs[b].hasClass("hard")&&e.pageObjs[b].removeClass("hard"),g._addPage.call(this,b),g._removeFromDOM.call(this));return this},_addPage:function(a){var b=this.data(),c=b.pageObjs[a];if(c)if(g._necessPage.call(this,a)){if(!b.pageWrap[a]){b.pageWrap[a]=f("<div/>",{"class":"page-wrapper",page:a,css:{position:"absolute",
overflow:"hidden"}});this.append(b.pageWrap[a]);b.pagePlace[a]||(b.pagePlace[a]=a,b.pageObjs[a].appendTo(b.pageWrap[a]));var d=g._pageSize.call(this,a,!0);c.css({width:d.width,height:d.height});b.pageWrap[a].css(d)}b.pagePlace[a]==a&&g._makeFlip.call(this,a)}else b.pagePlace[a]=0,b.pageObjs[a]&&b.pageObjs[a].remove()},hasPage:function(a){return n(a,this.data().pageObjs)},center:function(a){var b=this.data(),c=f(this).turn("size"),d=0;b.noCenter||("double"==b.display&&(a=this.turn("view",a||b.tpage||
b.page),"ltr"==b.direction?a[0]?a[1]||(d+=c.width/4):d-=c.width/4:a[0]?a[1]||(d-=c.width/4):d+=c.width/4),f(this).css({marginLeft:d}));return this},destroy:function(){var a=this,b=this.data(),c="end first flip last pressed released start turning turned zooming missing".split(" ");if("prevented"!=t("destroying",this)){b.destroying=!0;f.each(c,function(b,c){a.unbind(c)});this.parent().unbind("start",b.eventHandlers.start);for(f(document).unbind(r.move,b.eventHandlers.touchMove).unbind(r.up,b.eventHandlers.touchEnd);0!==
b.totalPages;)this.turn("removePage",b.totalPages);b.fparent&&b.fparent.remove();b.shadow&&b.shadow.remove();this.removeData();b=null;return this}},is:function(){return"object"==typeof this.data().pages},zoom:function(a){var b=this.data();if("number"==typeof a){if(0.0010>a||100<a)throw q(a+" is not a value for zoom");if("prevented"==t("zooming",this,[a,b.zoom]))return this;var c=this.turn("size"),d=this.turn("view"),e=1/b.zoom,h=Math.round(c.width*e*a),c=Math.round(c.height*e*a);b.zoom=a;f(this).turn("stop").turn("size",
h,c);b.opts.autoCenter&&this.turn("center");g._updateShadow.call(this);for(a=0;a<d.length;a++)d[a]&&b.pageZoom[d[a]]!=b.zoom&&(this.trigger("zoomed",[d[a],d,b.pageZoom[d[a]],b.zoom]),b.pageZoom[d[a]]=b.zoom);return this}return b.zoom},_pageSize:function(a,b){var c=this.data(),d={};if("single"==c.display)d.width=this.width(),d.height=this.height(),b&&(d.top=0,d.left=0,d.right="auto");else{var e=this.width()/2,h=this.height();c.pageObjs[a].hasClass("own-size")?(d.width=c.pageObjs[a].width(),d.height=
c.pageObjs[a].height()):(d.width=e,d.height=h);if(b){var f=a%2;d.top=(h-d.height)/2;"ltr"==c.direction?(d[f?"right":"left"]=e-d.width,d[f?"left":"right"]="auto"):(d[f?"left":"right"]=e-d.width,d[f?"right":"left"]="auto")}}return d},_makeFlip:function(a){var b=this.data();if(!b.pages[a]&&b.pagePlace[a]==a){var c="single"==b.display,d=a%2;b.pages[a]=b.pageObjs[a].css(g._pageSize.call(this,a)).flip({page:a,next:d||c?a+1:a-1,turn:this}).flip("disable",b.disabled);g._setPageLoc.call(this,a);b.pageZoom[a]=
b.zoom}return b.pages[a]},_makeRange:function(){var a,b;if(!(1>this.data().totalPages)){b=this.turn("range");for(a=b[0];a<=b[1];a++)g._addPage.call(this,a)}},range:function(a){var b,c,d,e=this.data(),a=a||e.tpage||e.page||1;d=g._view.call(this,a);if(1>a||a>e.totalPages)throw q('"'+a+'" is not a valid page');d[1]=d[1]||d[0];1<=d[0]&&d[1]<=e.totalPages?(a=Math.floor(2),e.totalPages-d[1]>d[0]?(b=Math.min(d[0]-1,a),c=2*a-b):(c=Math.min(e.totalPages-d[1],a),b=2*a-c)):c=b=5;return[Math.max(1,d[0]-b),Math.min(e.totalPages,
d[1]+c)]},_necessPage:function(a){if(0===a)return!0;var b=this.turn("range");return this.data().pageObjs[a].hasClass("fixed")||a>=b[0]&&a<=b[1]},_removeFromDOM:function(){var a,b=this.data();for(a in b.pageWrap)n(a,b.pageWrap)&&!g._necessPage.call(this,a)&&g._removePageFromDOM.call(this,a)},_removePageFromDOM:function(a){var b=this.data();if(b.pages[a]){var c=b.pages[a].data();i._moveFoldingPage.call(b.pages[a],!1);c.f&&c.f.fwrapper&&c.f.fwrapper.remove();b.pages[a].removeData();b.pages[a].remove();
delete b.pages[a]}b.pageObjs[a]&&b.pageObjs[a].remove();b.pageWrap[a]&&(b.pageWrap[a].remove(),delete b.pageWrap[a]);g._removeMv.call(this,a);delete b.pagePlace[a];delete b.pageZoom[a]},removePage:function(a){var b=this.data();if("*"==a)for(;0!==b.totalPages;)this.turn("removePage",b.totalPages);else{if(1>a||a>b.totalPages)throw q("The page "+a+" doesn't exist");b.pageObjs[a]&&(this.turn("stop"),g._removePageFromDOM.call(this,a),delete b.pageObjs[a]);g._movePages.call(this,a,-1);b.totalPages-=1;b.page>
b.totalPages?(b.page=null,g._fitPage.call(this,b.totalPages)):(g._makeRange.call(this),this.turn("update"))}return this},_movePages:function(a,b){var c,d=this,e=this.data(),h="single"==e.display,f=function(a){var c=a+b,f=c%2,i=f?" odd ":" even ";e.pageObjs[a]&&(e.pageObjs[c]=e.pageObjs[a].removeClass("p"+a+" odd even").addClass("p"+c+i));e.pagePlace[a]&&e.pageWrap[a]&&(e.pagePlace[c]=c,e.pageWrap[c]=e.pageObjs[c].hasClass("fixed")?e.pageWrap[a].attr("page",c):e.pageWrap[a].css(g._pageSize.call(d,
c,!0)).attr("page",c),e.pages[a]&&(e.pages[c]=e.pages[a].flip("options",{page:c,next:h||f?c+1:c-1})),b&&(delete e.pages[a],delete e.pagePlace[a],delete e.pageZoom[a],delete e.pageObjs[a],delete e.pageWrap[a]))};if(0<b)for(c=e.totalPages;c>=a;c--)f(c);else for(c=a;c<=e.totalPages;c++)f(c)},display:function(a){var b=this.data(),c=b.display;if(void 0===a)return c;if(-1==f.inArray(a,V))throw q('"'+a+'" is not a value for display');switch(a){case "single":b.pageObjs[0]||(this.turn("stop").css({overflow:"hidden"}),
b.pageObjs[0]=f("<div />",{"class":"page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this));this.addClass("shadow");break;case "double":b.pageObjs[0]&&(this.turn("stop").css({overflow:""}),b.pageObjs[0].remove(),delete b.pageObjs[0]),this.removeClass("shadow")}b.display=a;c&&(a=this.turn("size"),g._movePages.call(this,1,0),this.turn("size",a.width,a.height).turn("update"));return this},direction:function(a){var b=this.data();if(void 0===a)return b.direction;a=a.toLowerCase();
if(-1==f.inArray(a,W))throw q('"'+a+'" is not a value for direction');"rtl"==a&&f(this).attr("dir","ltr").css({direction:"ltr"});b.direction=a;b.done&&this.turn("size",f(this).width(),f(this).height());return this},animating:function(){return 0<this.data().pageMv.length},corner:function(){var a,b,c=this.data();for(b in c.pages)if(n(b,c.pages)&&(a=c.pages[b].flip("corner")))return a;return!1},data:function(){return this.data()},disable:function(a){var b,c=this.data(),d=this.turn("view");c.disabled=
void 0===a||!0===a;for(b in c.pages)n(b,c.pages)&&c.pages[b].flip("disable",c.disabled?!0:-1==f.inArray(parseInt(b,10),d));return this},disabled:function(a){return void 0===a?!0===this.data().disabled:this.turn("disable",a)},size:function(a,b){if(void 0===a||void 0===b)return{width:this.width(),height:this.height()};this.turn("stop");var c,d,e=this.data();d="double"==e.display?a/2:a;this.css({width:a,height:b});e.pageObjs[0]&&e.pageObjs[0].css({width:d,height:b});for(c in e.pageWrap)n(c,e.pageWrap)&&
(d=g._pageSize.call(this,c,!0),e.pageObjs[c].css({width:d.width,height:d.height}),e.pageWrap[c].css(d),e.pages[c]&&e.pages[c].css({width:d.width,height:d.height}));this.turn("resize");return this},resize:function(){var a,b=this.data();b.pages[0]&&(b.pageWrap[0].css({left:-this.width()}),b.pages[0].flip("resize",!0));for(a=1;a<=b.totalPages;a++)b.pages[a]&&b.pages[a].flip("resize",!0);g._updateShadow.call(this);b.opts.autoCenter&&this.turn("center")},_removeMv:function(a){var b,c=this.data();for(b=
0;b<c.pageMv.length;b++)if(c.pageMv[b]==a)return c.pageMv.splice(b,1),!0;return!1},_addMv:function(a){var b=this.data();g._removeMv.call(this,a);b.pageMv.push(a)},_view:function(a){var b=this.data(),a=a||b.page;return"double"==b.display?a%2?[a-1,a]:[a,a+1]:[a]},view:function(a){var b=this.data(),a=g._view.call(this,a);return"double"==b.display?[0<a[0]?a[0]:0,a[1]<=b.totalPages?a[1]:0]:[0<a[0]&&a[0]<=b.totalPages?a[0]:0]},stop:function(a,b){if(this.turn("animating")){var c,d,e,h=this.data();h.tpage&&
(h.page=h.tpage,delete h.tpage);for(c=0;c<h.pageMv.length;c++)h.pageMv[c]&&h.pageMv[c]!==a&&(e=h.pages[h.pageMv[c]],d=e.data().f.opts,e.flip("hideFoldedPage",b),b||i._moveFoldingPage.call(e,!1),d.force&&(d.next=0===d.page%2?d.page-1:d.page+1,delete d.force))}this.turn("update");return this},pages:function(a){var b=this.data();if(a){if(a<b.totalPages)for(var c=b.totalPages;c>a;c--)this.turn("removePage",c);b.totalPages=a;g._fitPage.call(this,b.page);return this}return b.totalPages},_missing:function(a){var b=
this.data();if(!(1>b.totalPages)){for(var c=this.turn("range",a),d=[],a=c[0];a<=c[1];a++)b.pageObjs[a]||d.push(a);0<d.length&&this.trigger("missing",[d])}},_fitPage:function(a){var b=this.data(),c=this.turn("view",a);g._missing.call(this,a);if(b.pageObjs[a]){b.page=a;this.turn("stop");for(var d=0;d<c.length;d++)c[d]&&b.pageZoom[c[d]]!=b.zoom&&(this.trigger("zoomed",[c[d],c,b.pageZoom[c[d]],b.zoom]),b.pageZoom[c[d]]=b.zoom);g._removeFromDOM.call(this);g._makeRange.call(this);g._updateShadow.call(this);
this.trigger("turned",[a,c]);this.turn("update");b.opts.autoCenter&&this.turn("center")}},_turnPage:function(a){var b,c,d=this.data(),e=d.pagePlace[a],h=this.turn("view"),i=this.turn("view",a);if(d.page!=a){var j=d.page;if("prevented"==t("turning",this,[a,i])){j==d.page&&-1!=f.inArray(e,d.pageMv)&&d.pages[e].flip("hideFoldedPage",!0);return}-1!=f.inArray(1,i)&&this.trigger("first");-1!=f.inArray(d.totalPages,i)&&this.trigger("last")}"single"==d.display?(b=h[0],c=i[0]):h[1]&&a>h[1]?(b=h[1],c=i[0]):
h[0]&&a<h[0]&&(b=h[0],c=i[1]);e=d.opts.turnCorners.split(",");h=d.pages[b].data().f;i=h.opts;j=h.point;g._missing.call(this,a);d.pageObjs[a]&&(this.turn("stop"),d.page=a,g._makeRange.call(this),d.tpage=c,i.next!=c&&(i.next=c,i.force=!0),this.turn("update"),h.point=j,"hard"==h.effect?"ltr"==d.direction?d.pages[b].flip("turnPage",a>b?"r":"l"):d.pages[b].flip("turnPage",a>b?"l":"r"):"ltr"==d.direction?d.pages[b].flip("turnPage",e[a>b?1:0]):d.pages[b].flip("turnPage",e[a>b?0:1]))},page:function(a){var b=
this.data();if(void 0===a)return b.page;if(!b.disabled&&!b.destroying){a=parseInt(a,10);if(0<a&&a<=b.totalPages)return a!=b.page&&(!b.done||-1!=f.inArray(a,this.turn("view"))?g._fitPage.call(this,a):g._turnPage.call(this,a)),this;throw q("The page "+a+" does not exist");}},next:function(){return this.turn("page",Math.min(this.data().totalPages,g._view.call(this,this.data().page).pop()+1))},previous:function(){return this.turn("page",Math.max(1,g._view.call(this,this.data().page).shift()-1))},peel:function(a,
b){var c=this.data(),d=this.turn("view"),b=void 0===b?!0:!0===b;!1===a?this.turn("stop",null,b):"single"==c.display?c.pages[c.page].flip("peel",a,b):(d="ltr"==c.direction?-1!=a.indexOf("l")?d[0]:d[1]:-1!=a.indexOf("l")?d[1]:d[0],c.pages[d]&&c.pages[d].flip("peel",a,b));return this},_addMotionPage:function(){var a=f(this).data().f.opts,b=a.turn;b.data();g._addMv.call(b,a.page)},_eventStart:function(a,b,c){var d=b.turn.data(),e=d.pageZoom[b.page];a.isDefaultPrevented()||(e&&e!=d.zoom&&(b.turn.trigger("zoomed",
[b.page,b.turn.turn("view",b.page),e,d.zoom]),d.pageZoom[b.page]=d.zoom),"single"==d.display&&c&&("l"==c.charAt(1)&&"ltr"==d.direction||"r"==c.charAt(1)&&"rtl"==d.direction?(b.next=b.next<b.page?b.next:b.page-1,b.force=!0):b.next=b.next>b.page?b.next:b.page+1),g._addMotionPage.call(a.target));g._updateShadow.call(b.turn)},_eventEnd:function(a,b,c){f(a.target).data();var a=b.turn,d=a.data();if(c){if(c=d.tpage||d.page,c==b.next||c==b.page)delete d.tpage,g._fitPage.call(a,c||b.next,!0)}else g._removeMv.call(a,
b.page),g._updateShadow.call(a),a.turn("update")},_eventPressed:function(a){var a=f(a.target).data().f,b=a.opts.turn;b.data().mouseAction=!0;b.turn("update");return a.time=(new Date).getTime()},_eventReleased:function(a,b){var c;c=f(a.target);var d=c.data().f,e=d.opts.turn,h=e.data();c="single"==h.display?"br"==b.corner||"tr"==b.corner?b.x<c.width()/2:b.x>c.width()/2:0>b.x||b.x>c.width();if(200>(new Date).getTime()-d.time||c)a.preventDefault(),g._turnPage.call(e,d.opts.next);h.mouseAction=!1},_flip:function(a){a.stopPropagation();
a=f(a.target).data().f.opts;a.turn.trigger("turn",[a.next]);a.turn.data().opts.autoCenter&&a.turn.turn("center",a.next)},_touchStart:function(){var a=this.data(),b;for(b in a.pages)if(n(b,a.pages)&&!1===i._eventStart.apply(a.pages[b],arguments))return!1},_touchMove:function(){var a=this.data(),b;for(b in a.pages)n(b,a.pages)&&i._eventMove.apply(a.pages[b],arguments)},_touchEnd:function(){var a=this.data(),b;for(b in a.pages)n(b,a.pages)&&i._eventEnd.apply(a.pages[b],arguments)},calculateZ:function(a){var b,
c,d,e,h=this,f=this.data();b=this.turn("view");var i=b[0]||b[1],g=a.length-1,j={pageZ:{},partZ:{},pageV:{}},k=function(a){a=h.turn("view",a);a[0]&&(j.pageV[a[0]]=!0);a[1]&&(j.pageV[a[1]]=!0)};for(b=0;b<=g;b++)c=a[b],d=f.pages[c].data().f.opts.next,e=f.pagePlace[c],k(c),k(d),c=f.pagePlace[d]==d?d:c,j.pageZ[c]=f.totalPages-Math.abs(i-c),j.partZ[e]=2*f.totalPages-g+b;return j},update:function(){var a,b=this.data();if(this.turn("animating")&&0!==b.pageMv[0]){var c,d=this.turn("calculateZ",b.pageMv),e=
this.turn("corner"),h=this.turn("view"),i=this.turn("view",b.tpage);for(a in b.pageWrap)if(n(a,b.pageWrap)&&(c=b.pageObjs[a].hasClass("fixed"),b.pageWrap[a].css({display:d.pageV[a]||c?"":"none",zIndex:(b.pageObjs[a].hasClass("hard")?d.partZ[a]:d.pageZ[a])||(c?-1:0)}),c=b.pages[a]))c.flip("z",d.partZ[a]||null),d.pageV[a]&&c.flip("resize"),b.tpage?c.flip("hover",!1).flip("disable",-1==f.inArray(parseInt(a,10),b.pageMv)&&a!=i[0]&&a!=i[1]):c.flip("hover",!1===e).flip("disable",a!=h[0]&&a!=h[1])}else for(a in b.pageWrap)n(a,
b.pageWrap)&&(d=g._setPageLoc.call(this,a),b.pages[a]&&b.pages[a].flip("disable",b.disabled||1!=d).flip("hover",!0).flip("z",null));return this},_updateShadow:function(){var a,b,c=this.data(),d=this.width(),e=this.height(),h="single"==c.display?d:d/2;a=this.turn("view");c.shadow||(c.shadow=f("<div />",{"class":"shadow",css:l(0,0,0).css}).appendTo(this));for(var i=0;i<c.pageMv.length&&a[0]&&a[1];i++)a=this.turn("view",c.pages[c.pageMv[i]].data().f.opts.next),b=this.turn("view",c.pageMv[i]),a[0]=a[0]&&
b[0],a[1]=a[1]&&b[1];switch(a[0]?a[1]?3:"ltr"==c.direction?2:1:"ltr"==c.direction?1:2){case 1:c.shadow.css({width:h,height:e,top:0,left:h});break;case 2:c.shadow.css({width:h,height:e,top:0,left:0});break;case 3:c.shadow.css({width:d,height:e,top:0,left:0})}},_setPageLoc:function(a){var b=this.data(),c=this.turn("view"),d=0;if(a==c[0]||a==c[1])d=1;else if("single"==b.display&&a==c[0]+1||"double"==b.display&&a==c[0]-2||a==c[1]+2)d=2;if(!this.turn("animating"))switch(d){case 1:b.pageWrap[a].css({zIndex:b.totalPages,
display:""});break;case 2:b.pageWrap[a].css({zIndex:b.totalPages-1,display:""});break;case 0:b.pageWrap[a].css({zIndex:0,display:b.pageObjs[a].hasClass("fixed")?"":"none"})}return d},options:function(a){if(void 0===a)return this.data().opts;var b=this.data();f.extend(b.opts,a);a.pages&&this.turn("pages",a.pages);a.page&&this.turn("page",a.page);a.display&&this.turn("display",a.display);a.direction&&this.turn("direction",a.direction);a.width&&a.height&&this.turn("size",a.width,a.height);if(a.when)for(var c in a.when)n(c,
a.when)&&this.unbind(c).bind(c,a.when[c]);return this},version:function(){return"4.1.0"}},i={init:function(a){this.data({f:{disabled:!1,hover:!1,effect:this.hasClass("hard")?"hard":"sheet"}});this.flip("options",a);i._addPageWrapper.call(this);return this},setData:function(a){var b=this.data();b.f=f.extend(b.f,a);return this},options:function(a){var b=this.data().f;return a?(i.setData.call(this,{opts:f.extend({},b.opts||Y,a)}),this):b.opts},z:function(a){var b=this.data().f;b.opts["z-index"]=a;b.fwrapper&&
b.fwrapper.css({zIndex:a||parseInt(b.parent.css("z-index"),10)||0});return this},_cAllowed:function(){var a=this.data().f,b=a.opts.page,c=a.opts.turn.data(),d=b%2;return"hard"==a.effect?"ltr"==c.direction?[d?"r":"l"]:[d?"l":"r"]:"single"==c.display?1==b?"ltr"==c.direction?p.forward:p.backward:b==c.totalPages?"ltr"==c.direction?p.backward:p.forward:p.all:"ltr"==c.direction?p[d?"forward":"backward"]:p[d?"backward":"forward"]},_cornerActivated:function(a){var b=this.data().f,c=this.width(),d=this.height(),
a={x:a.x,y:a.y,corner:""},e=b.opts.cornerSize;if(0>=a.x||0>=a.y||a.x>=c||a.y>=d)return!1;var h=i._cAllowed.call(this);switch(b.effect){case "hard":if(a.x>c-e)a.corner="r";else if(a.x<e)a.corner="l";else return!1;break;case "sheet":if(a.y<e)a.corner+="t";else if(a.y>=d-e)a.corner+="b";else return!1;if(a.x<=e)a.corner+="l";else if(a.x>=c-e)a.corner+="r";else return!1}return!a.corner||-1==f.inArray(a.corner,h)?!1:a},_isIArea:function(a){var b=this.data().f.parent.offset(),a=u&&a.originalEvent?a.originalEvent.touches[0]:
a;return i._cornerActivated.call(this,{x:a.pageX-b.left,y:a.pageY-b.top})},_c:function(a,b){b=b||0;switch(a){case "tl":return j(b,b);case "tr":return j(this.width()-b,b);case "bl":return j(b,this.height()-b);case "br":return j(this.width()-b,this.height()-b);case "l":return j(b,0);case "r":return j(this.width()-b,0)}},_c2:function(a){switch(a){case "tl":return j(2*this.width(),0);case "tr":return j(-this.width(),0);case "bl":return j(2*this.width(),this.height());case "br":return j(-this.width(),
this.height());case "l":return j(2*this.width(),0);case "r":return j(-this.width(),0)}},_foldingPage:function(){var a=this.data().f;if(a){var b=a.opts;if(b.turn)return a=b.turn.data(),"single"==a.display?1<b.next||1<b.page?a.pageObjs[0]:null:a.pageObjs[b.next]}},_backGradient:function(){var a=this.data().f,b=a.opts.turn.data();if((b=b.opts.gradients&&("single"==b.display||2!=a.opts.page&&a.opts.page!=b.totalPages-1))&&!a.bshadow)a.bshadow=f("<div/>",l(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(a.parent);
return b},type:function(){return this.data().f.effect},resize:function(a){var b=this.data().f,c=b.opts.turn.data(),d=this.width(),e=this.height();switch(b.effect){case "hard":a&&(b.wrapper.css({width:d,height:e}),b.fpage.css({width:d,height:e}),c.opts.gradients&&(b.ashadow.css({width:d,height:e}),b.bshadow.css({width:d,height:e})));break;case "sheet":a&&(a=Math.round(Math.sqrt(Math.pow(d,2)+Math.pow(e,2))),b.wrapper.css({width:a,height:a}),b.fwrapper.css({width:a,height:a}).children(":first-child").css({width:d,
height:e}),b.fpage.css({width:d,height:e}),c.opts.gradients&&b.ashadow.css({width:d,height:e}),i._backGradient.call(this)&&b.bshadow.css({width:d,height:e})),b.parent.is(":visible")&&(c=D(b.parent[0]),b.fwrapper.css({top:c.top,left:c.left}),c=D(b.opts.turn[0]),b.fparent.css({top:-c.top,left:-c.left})),this.flip("z",b.opts["z-index"])}},_addPageWrapper:function(){var a=this.data().f,b=a.opts.turn.data(),c=this.parent();a.parent=c;if(!a.wrapper)switch(a.effect){case "hard":var d={};d[w+"transform-style"]=
"preserve-3d";d[w+"backface-visibility"]="hidden";a.wrapper=f("<div/>",l(0,0,2)).css(d).appendTo(c).prepend(this);a.fpage=f("<div/>",l(0,0,1)).css(d).appendTo(c);b.opts.gradients&&(a.ashadow=f("<div/>",l(0,0,0)).hide().appendTo(c),a.bshadow=f("<div/>",l(0,0,0)));break;case "sheet":var d=this.width(),e=this.height();Math.round(Math.sqrt(Math.pow(d,2)+Math.pow(e,2)));a.fparent=a.opts.turn.data().fparent;a.fparent||(d=f("<div/>",{css:{"pointer-events":"none"}}).hide(),d.data().flips=0,d.css(l(0,0,"auto",
"visible").css).appendTo(a.opts.turn),a.opts.turn.data().fparent=d,a.fparent=d);this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"});a.wrapper=f("<div/>",l(0,0,this.css("z-index"))).appendTo(c).prepend(this);a.fwrapper=f("<div/>",l(c.offset().top,c.offset().left)).hide().appendTo(a.fparent);a.fpage=f("<div/>",l(0,0,0,"visible")).css({cursor:"default"}).appendTo(a.fwrapper);b.opts.gradients&&(a.ashadow=f("<div/>",l(0,0,1)).appendTo(a.fpage));i.setData.call(this,a)}i.resize.call(this,
!0)},_fold:function(a){var b=this.data().f,c=b.opts.turn.data(),d=i._c.call(this,a.corner),e=this.width(),h=this.height();switch(b.effect){case "hard":a.x="l"==a.corner?Math.min(Math.max(a.x,0),2*e):Math.max(Math.min(a.x,e),-e);var f,g,s,x,k,n=c.totalPages,l=b.opts["z-index"]||n,q={overflow:"visible"},p=d.x?(d.x-a.x)/e:a.x/e,r=90*p,t=90>r;switch(a.corner){case "l":x="0% 50%";k="100% 50%";t?(f=0,g=0<b.opts.next-1,s=1):(f="100%",g=b.opts.page+1<n,s=0);break;case "r":x="100% 50%",k="0% 50%",r=-r,e=-e,
t?(f=0,g=b.opts.next+1<n,s=0):(f="-100%",g=1!=b.opts.page,s=1)}q[w+"perspective-origin"]=k;b.wrapper.transform("rotateY("+r+"deg)translate3d(0px, 0px, "+(this.attr("depth")||0)+"px)",k);b.fpage.transform("translateX("+e+"px) rotateY("+(180+r)+"deg)",x);b.parent.css(q);t?(p=-p+1,b.wrapper.css({zIndex:l+1}),b.fpage.css({zIndex:l})):(p-=1,b.wrapper.css({zIndex:l}),b.fpage.css({zIndex:l+1}));c.opts.gradients&&(g?b.ashadow.css({display:"",left:f,backgroundColor:"rgba(0,0,0,"+0.5*p+")"}).transform("rotateY(0deg)"):
b.ashadow.hide(),b.bshadow.css({opacity:-p+1}),t?b.bshadow.parent()[0]!=b.wrapper[0]&&b.bshadow.appendTo(b.wrapper):b.bshadow.parent()[0]!=b.fpage[0]&&b.bshadow.appendTo(b.fpage),P(b.bshadow,j(100*s,0),j(100*(-s+1),0),[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]],2));break;case "sheet":var u=this,H=0,z,A,B,M,y,N,D,v=j(0,0),Q=j(0,0),m=j(0,0),J=i._foldingPage.call(this);Math.tan(0);var O=c.opts.acceleration,R=b.wrapper.height(),E="t"==a.corner.substr(0,1),C="l"==a.corner.substr(1,1),I=function(){var b=
j(0,0),f=j(0,0);b.x=d.x?d.x-a.x:a.x;b.y=U?d.y?d.y-a.y:a.y:0;f.x=C?e-b.x/2:a.x+b.x/2;f.y=b.y/2;var g=L-Math.atan2(b.y,b.x),k=g-Math.atan2(f.y,f.x),k=Math.max(0,Math.sin(k)*Math.sqrt(Math.pow(f.x,2)+Math.pow(f.y,2)));H=180*(g/K);m=j(k*Math.sin(g),k*Math.cos(g));if(g>L&&(m.x+=Math.abs(m.y*b.y/b.x),m.y=0,Math.round(m.x*Math.tan(K-g))<h))return a.y=Math.sqrt(Math.pow(h,2)+2*f.x*b.x),E&&(a.y=h-a.y),I();g>L&&(b=K-g,f=R-h/Math.sin(b),v=j(Math.round(f*Math.cos(b)),Math.round(f*Math.sin(b))),C&&(v.x=-v.x),
E&&(v.y=-v.y));z=Math.round(m.y/Math.tan(g)+m.x);b=e-z;f=b*Math.cos(2*g);k=b*Math.sin(2*g);Q=j(Math.round(C?b-f:z+f),Math.round(E?k:h-k));c.opts.gradients&&(y=b*Math.sin(g),b=i._c2.call(u,a.corner),b=Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2))/e,D=Math.sin(L*(1<b?2-b:b)),N=Math.min(b,1),M=100<y?(y-100)/y:0,A=j(100*(y*Math.sin(g)/e),100*(y*Math.cos(g)/h)),i._backGradient.call(u)&&(B=j(100*(1.2*y*Math.sin(g)/e),100*(1.2*y*Math.cos(g)/h)),C||(B.x=100-B.x),E||(B.y=100-B.y)));m.x=Math.round(m.x);
m.y=Math.round(m.y);return!0};f=function(a,d,f,g){var k=["0","auto"],m=(e-R)*f[0]/100,l=(h-R)*f[1]/100,d={left:k[d[0]],top:k[d[1]],right:k[d[2]],bottom:k[d[3]]},k={},n=90!=g&&-90!=g?C?-1:1:0,s=f[0]+"% "+f[1]+"%";u.css(d).transform(G(g)+F(a.x+n,a.y,O),s);b.fpage.css(d).transform(G(g)+F(a.x+Q.x-v.x-e*f[0]/100,a.y+Q.y-v.y-h*f[1]/100,O)+G((180/g-2)*g),s);b.wrapper.transform(F(-a.x+m-n,-a.y+l,O)+G(-g),s);b.fwrapper.transform(F(-a.x+v.x+m,-a.y+v.y+l,O)+G(-g),s);c.opts.gradients&&(f[0]&&(A.x=100-A.x),f[1]&&
(A.y=100-A.y),k["box-shadow"]="0 0 20px rgba(0,0,0,"+0.5*D+")",J.css(k),P(b.ashadow,j(C?100:0,E?0:100),j(A.x,A.y),[[M,"rgba(0,0,0,0)"],[0.8*(1-M)+M,"rgba(0,0,0,"+0.2*N+")"],[1,"rgba(255,255,255,"+0.2*N+")"]],3,0),i._backGradient.call(u)&&P(b.bshadow,j(C?0:100,E?0:100),j(B.x,B.y),[[0.6,"rgba(0,0,0,0)"],[0.8,"rgba(0,0,0,"+0.3*N+")"],[1,"rgba(0,0,0,0)"]],3))};switch(a.corner){case "tl":a.x=Math.max(a.x,1);I();f(m,[1,0,0,1],[100,0],H);break;case "tr":a.x=Math.min(a.x,e-1);I();f(j(-m.x,m.y),[0,0,0,1],
[0,0],-H);break;case "bl":a.x=Math.max(a.x,1);I();f(j(m.x,-m.y),[1,1,0,0],[100,100],-H);break;case "br":a.x=Math.min(a.x,e-1),I(),f(j(-m.x,-m.y),[0,1,1,0],[0,100],H)}}b.point=a},_moveFoldingPage:function(a){var b=this.data().f;if(b){var c=b.opts.turn,d=c.data(),e=d.pagePlace;a?(d=b.opts.next,e[d]!=b.opts.page&&(b.folding&&i._moveFoldingPage.call(this,!1),i._foldingPage.call(this).appendTo(b.fpage),e[d]=b.opts.page,b.folding=d),c.turn("update")):b.folding&&(d.pages[b.folding]?(c=d.pages[b.folding].data().f,
d.pageObjs[b.folding].appendTo(c.wrapper)):d.pageWrap[b.folding]&&d.pageObjs[b.folding].appendTo(d.pageWrap[b.folding]),b.folding in e&&(e[b.folding]=b.folding),delete b.folding)}},_showFoldedPage:function(a,b){var c=i._foldingPage.call(this),d=this.data(),e=d.f,f=e.visible;if(c){if(!f||!e.point||e.point.corner!=a.corner)if(c="hover"==e.status||"peel"==e.status||e.opts.turn.data().mouseAction?a.corner:null,f=!1,"prevented"==t("start",this,[e.opts,c]))return!1;if(b){var g=this,d=e.point&&e.point.corner==
a.corner?e.point:i._c.call(this,a.corner,1);this.animatef({from:[d.x,d.y],to:[a.x,a.y],duration:500,frame:function(b){a.x=Math.round(b[0]);a.y=Math.round(b[1]);i._fold.call(g,a)}})}else i._fold.call(this,a),d.effect&&!d.effect.turning&&this.animatef(!1);if(!f)switch(e.effect){case "hard":e.visible=!0;i._moveFoldingPage.call(this,!0);e.fpage.show();e.opts.shadows&&e.bshadow.show();break;case "sheet":e.visible=!0,e.fparent.show().data().flips++,i._moveFoldingPage.call(this,!0),e.fwrapper.show(),e.bshadow&&
e.bshadow.show()}return!0}return!1},hide:function(){var a=this.data().f,b=a.opts.turn.data(),c=i._foldingPage.call(this);switch(a.effect){case "hard":b.opts.gradients&&(a.bshadowLoc=0,a.bshadow.remove(),a.ashadow.hide());a.wrapper.transform("");a.fpage.hide();break;case "sheet":0===--a.fparent.data().flips&&a.fparent.hide(),this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform(""),a.wrapper.transform(""),a.fwrapper.hide(),a.bshadow&&a.bshadow.hide(),c.transform("")}a.visible=!1;return this},
hideFoldedPage:function(a){var b=this.data().f;if(b.point){var c=this,d=b.point,e=function(){b.point=null;b.status="";c.flip("hide");c.trigger("end",[b.opts,!1])};if(a){var f=i._c.call(this,d.corner),a="t"==d.corner.substr(0,1)?Math.min(0,d.y-f.y)/2:Math.max(0,d.y-f.y)/2,g=j(d.x,d.y+a),l=j(f.x,f.y-a);this.animatef({from:0,to:1,frame:function(a){a=S(d,g,l,f,a);d.x=a.x;d.y=a.y;i._fold.call(c,d)},complete:e,duration:800,hiding:!0})}else this.animatef(!1),e()}},turnPage:function(a){var b=this,c=this.data().f,
d=c.opts.turn.data(),a={corner:c.corner?c.corner.corner:a||i._cAllowed.call(this)[0]},e=c.point||i._c.call(this,a.corner,c.opts.turn?d.opts.elevation:0),f=i._c2.call(this,a.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(c){c=S(e,e,f,f,c);a.x=c.x;a.y=c.y;i._showFoldedPage.call(b,a)},complete:function(){b.trigger("end",[c.opts,!0])},duration:d.opts.duration,turning:!0});c.corner=null},moving:function(){return"effect"in this.data()},isTurning:function(){return this.flip("moving")&&
this.data().effect.turning},corner:function(){return this.data().f.corner},_eventStart:function(a){var b=this.data().f,c=b.opts.turn;if(!b.corner&&!b.disabled&&!this.flip("isTurning")&&b.opts.page==c.data().pagePlace[b.opts.page]){b.corner=i._isIArea.call(this,a);if(b.corner&&i._foldingPage.call(this))return this.trigger("pressed",[b.point]),i._showFoldedPage.call(this,b.corner),!1;b.corner=null}},_eventMove:function(a){var b=this.data().f;if(!b.disabled)if(a=u?a.originalEvent.touches:[a],b.corner){var c=
b.parent.offset();b.corner.x=a[0].pageX-c.left;b.corner.y=a[0].pageY-c.top;i._showFoldedPage.call(this,b.corner)}else if(b.hover&&!this.data().effect&&this.is(":visible"))if(a=i._isIArea.call(this,a[0])){if("sheet"==b.effect&&2==a.corner.length||"hard"==b.effect)b.status="hover",b=i._c.call(this,a.corner,b.opts.cornerSize/2),a.x=b.x,a.y=b.y,i._showFoldedPage.call(this,a,!0)}else"hover"==b.status&&(b.status="",i.hideFoldedPage.call(this,!0))},_eventEnd:function(){var a=this.data().f,b=a.corner;!a.disabled&&
b&&"prevented"!=t("released",this,[a.point||b])&&i.hideFoldedPage.call(this,!0);a.corner=null},disable:function(a){i.setData.call(this,{disabled:a});return this},hover:function(a){i.setData.call(this,{hover:a});return this},peel:function(a,b){var c=this.data().f;if(a){if(-1==f.inArray(a,p.all))throw q("Corner "+a+" is not permitted");if(-1!=f.inArray(a,i._cAllowed.call(this))){var d=i._c.call(this,a,c.opts.cornerSize/2);c.status="peel";i._showFoldedPage.call(this,{corner:a,x:d.x,y:d.y},b)}}else c.status=
"",i.hideFoldedPage.call(this,b);return this}};window.requestAnim=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};f.extend(f.fn,{flip:function(){return J(f(this[0]),i,arguments)},turn:function(){return J(f(this[0]),g,arguments)},transform:function(a,b){var c={};b&&(c[w+"transform-origin"]=b);c[w+"transform"]=a;return this.css(c)},animatef:function(a){var b=
this.data();b.effect&&b.effect.stop();if(a){a.to.length||(a.to=[a.to]);a.from.length||(a.from=[a.from]);for(var c=[],d=a.to.length,e=!0,g=this,i=(new Date).getTime(),j=function(){if(b.effect&&e){for(var f=[],k=Math.min(a.duration,(new Date).getTime()-i),l=0;l<d;l++)f.push(b.effect.easing(1,k,a.from[l],c[l],a.duration));a.frame(1==d?f[0]:f);k==a.duration?(delete b.effect,g.data(b),a.complete&&a.complete()):window.requestAnim(j)}},l=0;l<d;l++)c.push(a.to[l]-a.from[l]);b.effect=f.extend({stop:function(){e=
!1},easing:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c}},a);this.data(b);j()}else delete b.effect}});f.isTouch=u;f.mouseEvents=r;f.cssPrefix=T;f.cssTransitionEnd=function(){var a,b=document.createElement("fakeelement"),c={transition:"transitionend",OTransition:"oTransitionEnd",MSTransition:"transitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in c)if(void 0!==b.style[a])return c[a]};f.findPos=D})(jQuery);

(function(doc, win) {
    var docEl = doc.documentElement,
    isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
    dpr = isIOS? Math.min(win.devicePixelRatio, 3) : 1,
    scale = 1 / dpr,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    //fix iphone plus bug
    if(dpr == 3){
        scale=1;
        dpr = 2;
    }
    docEl.dataset.dpr = dpr;
    //var metaEl = doc.createElement('meta');
    //metaEl.name = 'viewport';
    //metaEl.content = 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale;
    //docEl.firstElementChild.appendChild(metaEl);
    var recalc = function () {
        var width = docEl.clientWidth,
			height = docEl.clientHeight;
        if (width / dpr > 750) {
            width = 750 * dpr;
        }
				if(width/height>750/1207){
					docEl.style.fontSize = 100 * (height / 1207) + 'px';

				}else{
					docEl.style.fontSize = 100 * (width / 750) + 'px';
				}
      };
    recalc();
    if (!doc.addEventListener) return;
    //win.addEventListener(resizeEvt, recalc, false);
})(document, window);
var region = [
    {
        name:'省份',"city":[{"name":"城市","area":["区县"]}]
    },
    { "name": "北京", "city":[{"name":"北京", "area":["东城区","西城区","崇文区","宣武区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","平谷区","怀柔区","密云县","延庆县"]}]},

    { "name": "天津", "city":[{"name":"天津", "area":["和平区","河东区","河西区","南开区","河北区","红桥区","塘沽区","汉沽区","大港区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","宁河县","静海县","蓟  县"]}]},

    { "name": "河北", "city":[

        {"name":"石家庄", "area":["长安区","桥东区","桥西区","新华区","郊  区","井陉矿区","井陉县","正定县","栾城县","行唐县","灵寿县","高邑县","深泽县","赞皇县","无极县","平山县","元氏县","赵  县","辛集市","藁","晋州市","新乐市","鹿泉市"]},

        {"name":"唐山", "area":["路南区","路北区","古冶区","开平区","新  区","丰润县","滦  县","滦南县","乐亭县","迁西县","玉田县","唐海县","遵化市","丰南市","迁安市"]},

        {"name":"秦皇岛", "area":["海港区","山海关区","北戴河区","青龙满族自治县","昌黎县","抚宁县","卢龙县"]},

        {"name":"邯郸", "area":["邯山区","丛台区","复兴区","峰峰矿区","邯郸县","临漳县","成安县","大名县","涉  县","磁  县","肥乡县","永年县","邱  县","鸡泽县","广平县","馆陶县","魏  县","曲周县","武安市"]},

        {"name":"邢台", "area":["桥东区","桥西区","邢台县","临城县","内丘县","柏乡县","隆尧县","任  县","南和县","宁晋县","巨鹿县","新河县","广宗县","平乡县","威  县","清河县","临西县","南宫市","沙河市"]},

        {"name":"保定", "area":["新市区","北市区","南市区","满城县","清苑县","涞水县","阜平县","徐水县","定兴县","唐  县","高阳县","容城县","涞源县","望都县","安新县","易  县","曲阳县","蠡  县","顺平县","博野","雄县","涿州市","定州市","安国市","高碑店市"]},

        {"name":"张家口", "area":["桥东区","桥西区","宣化区","下花园区","宣化县","张北县","康保县","沽源县","尚义县","蔚  县","阳原县","怀安县","万全县","怀来县","涿鹿县","赤城县","崇礼县"]},

        {"name":"承德", "area":["双桥区","双滦区","鹰手营子矿区","承德县","兴隆县","平泉县","滦平县","隆化县","丰宁满族自治县","宽城满族自治县","围场满族蒙古族自治县"]},

        {"name":"沧州", "area":["新华区","运河区","沧  县","青  县","东光县","海兴县","盐山县","肃宁县","南皮县","吴桥县","献  县","孟村回族自治县","泊头市","任丘市","黄骅市","河间市"]},

        {"name":"廊坊", "area":["安次区","固安县","永清县","香河县","大城县","文安县","大厂回族自治县","霸州市","三河市"]},

        {"name":"衡水", "area":["桃城区","枣强县","武邑县","武强县","饶阳县","安平县","故城县","景  县","阜城县","冀州市","深州市"]}

    ]},

    { "name": "山西", "city":[

        {"name":"太原", "area":["小店区","迎泽区","杏花岭区","尖草坪区","万柏林区","晋源区","清徐县","阳曲县","娄烦县","古交市"]},

        {"name":"大同", "area":["城  区","矿  区","南郊区","新荣区","阳高县","天镇县","广灵县","灵丘县","浑源县","左云县","大同县"]},

        {"name":"阳泉", "area":["城  区","矿  区","郊  区","平定县","盂  县"]},

        {"name":"长治", "area":["城  区","郊  区","长治县","襄垣县","屯留县","平顺县","黎城县","壶关县","长子县","武乡县","沁  县","沁源县","潞城市"]},

        {"name":"晋城", "area":["城  区","沁水县","阳城县","陵川县","泽州县","高平市"]},

        {"name":"朔州", "area":["朔城区","平鲁区","山阴县","应  县","右玉县","怀仁县"]},

        {"name":"忻州", "area":["忻府区","原平市","定襄县","五台县","代  县","繁峙县","宁武县","静乐县","神池县","五寨县","岢岚县","河曲县","保德县","偏关县"]},

        {"name":"吕梁", "area":["离石区","孝义市","汾阳市","文水县","交城县","兴  县","临  县","柳林县","石楼县","岚  县","方山县","中阳县","交口县"]},

        {"name":"晋中", "area":["榆次市","介休市","榆社县","左权县","和顺县","昔阳县","寿阳县","太谷县","祁  县","平遥县","灵石县"]},

        {"name":"临汾", "area":["临汾市","侯马市","霍州市","曲沃县","翼城县","襄汾县","洪洞县","古  县","安泽县","浮山县","吉  县","乡宁县","蒲  县","大宁县","永和县","隰  县","汾西县"]},

        {"name":"运城", "area":["运城市","永济市","河津市","芮城县","临猗县","万荣县","新绛县","稷山县","闻喜县","夏  县","绛  县","平陆县","垣曲县"]}

    ]},

    { "name": "内蒙古", "city":[

        {"name":"呼和浩特", "area":["新城区","回民区","玉泉区","郊  区","土默特左旗","托克托县","和林格尔县","清水河县","武川县"]},

        {"name":"包头", "area":["东河区","昆都伦区","青山区","石拐矿区","白云矿区","郊  区","土默特右旗","固阳县","达尔罕茂明安联合旗"]},

        {"name":"乌海", "area":["海勃湾区","海南区","乌达区"]},

        {"name":"赤峰", "area":["红山区","元宝山区","松山区","阿鲁科尔沁旗","巴林左旗","巴林右旗","林西县","克什克腾旗","翁牛特旗","喀喇沁旗","宁城县","敖汉旗"]},

        {"name":"呼伦贝尔", "area":["海拉尔市","满洲里市","扎兰屯市","牙克石市","根河市","额尔古纳市","阿荣旗","莫力达瓦达斡尔族自治旗","鄂伦春自治旗","鄂温克族自治旗","新巴尔虎右旗","新巴尔虎左旗","陈巴尔虎旗"]},

        {"name":"兴安盟", "area":["乌兰浩特市","阿尔山市","科尔沁右翼前旗","科尔沁右翼中旗","扎赉特旗","突泉县"]},

        {"name":"通辽", "area":["科尔沁区","霍林郭勒市","科尔沁左翼中旗","科尔沁左翼后旗","开鲁县","库伦旗","奈曼旗","扎鲁特旗"]},

        {"name":"锡林郭勒盟", "area":["二连浩特市","锡林浩特市","阿巴嘎旗","苏尼特左旗","苏尼特右旗","东乌珠穆沁旗","西乌珠穆沁旗","太仆寺旗","镶黄旗","正镶白旗","正蓝旗","多伦县"]},

        {"name":"乌兰察布盟", "area":["集宁市","丰镇市","卓资县","化德县","商都县","兴和县","凉城县","察哈尔右翼前旗","察哈尔右翼中旗","察哈尔右翼后旗","四子王旗"]},

        {"name":"伊克昭盟", "area":["东胜市","达拉特旗","准格尔旗","鄂托克前旗","鄂托克旗","杭锦旗","乌审旗","伊金霍洛旗"]},

        {"name":"巴彦淖尔盟", "area":["临河市","五原县","磴口县","乌拉特前旗","乌拉特中旗","乌拉特后旗","杭锦后旗"]},

        {"name":"阿拉善盟", "area":["阿拉善左旗","阿拉善右旗","额济纳旗"]}

    ]},

    { "name": "辽宁", "city":[

        {"name":"沈阳", "area":["沈河区","皇姑区","和平区","大东区","铁西区","苏家屯区","东陵区","于洪区","新民市","法库县","辽中县","康平县","新城子区","其他"]},

        {"name":"大连", "area":["西岗区","中山区","沙河口区","甘井子区","旅顺口区","金州区","瓦房店市","普兰店市","庄河市","长海县","其他"]},

        {"name":"鞍山", "area":["铁东区","铁西区","立山区","千山区","海城市","台安县","岫岩满族自治县","其他"]},

        {"name":"抚顺", "area":["顺城区","新抚区","东洲区","望花区","抚顺县","清原满族自治县","新宾满族自治县","其他"]},

        {"name":"本溪", "area":["平山区","明山区","溪湖区","南芬区","本溪满族自治县","桓仁满族自治县","其他"]},

        {"name":"丹东", "area":["振兴区","元宝区","振安区","东港市","凤城市","宽甸满族自治县","其他"]},

        {"name":"锦州", "area":["太和区","古塔区","凌河区","凌海市","黑山县","义县","北宁市","其他"]},

        {"name":"营口", "area":["站前区","西市区","鲅鱼圈区","老边区","大石桥市","盖州市","其他"]},

        {"name":"阜新", "area":["海州区","新邱区","太平区","清河门区","细河区","彰武县","阜新蒙古族自治县","其他"]},

        {"name":"辽阳", "area":["白塔区","文圣区","宏伟区","太子河区","弓长岭区","灯塔市","辽阳县","其他"]},

        {"name":"盘锦", "area":["双台子区","兴隆台区","盘山县","大洼县","其他"]},

        {"name":"铁岭", "area":["银州区","清河区","调兵山市","开原市","铁岭县","昌图县","西丰县","其他"]},

        {"name":"朝阳", "area":["双塔区","龙城区","凌源市","北票市","朝阳县","建平县","喀喇沁左翼蒙古族自治县","其他"]},

        {"name":"葫芦岛", "area":["龙港区","南票区","连山区","兴城市","绥中县","建昌县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "吉林", "city":[

        {"name":"长春", "area":["朝阳区","宽城区","二道区","南关区","绿园区","双阳区","九台市","榆树市","德惠市","农安县","其他"]},

        {"name":"吉林", "area":["船营区","昌邑区","龙潭区","丰满区","舒兰市","桦甸市","蛟河市","磐石市","永吉县","其他"]},

        {"name":"四平", "area":["铁西区","铁东区","公主岭市","双辽市","梨树县","伊通满族自治县","其他"]},

        {"name":"辽源", "area":["龙山区","西安区","东辽县","东丰县","其他"]},

        {"name":"通化", "area":["东昌区","二道江区","梅河口市","集安市","通化县","辉南县","柳河县","其他"]},

        {"name":"白山", "area":["八道江区","江源区","临江市","靖宇县","抚松县","长白朝鲜族自治县","其他"]},

        {"name":"松原", "area":["宁江区","乾安县","长岭县","扶余县","前郭尔罗斯蒙古族自治县","其他"]},

        {"name":"白城", "area":["洮北区","大安市","洮南市","镇赉县","通榆县","其他"]},

        {"name":"延边朝鲜族自治州", "area":["延吉市","图们市","敦化市","龙井市","珲春市","和龙市","安图县","汪清县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "黑龙江", "city":[

        {"name":"哈尔滨", "area":["松北区","道里区","南岗区","平房区","香坊区","道外区","呼兰区","阿城区","双城市","尚志市","五常市","宾县","方正县","通河县","巴彦县","延寿县","木兰县","依兰县","其他"]},

        {"name":"齐齐哈尔", "area":["龙沙区","昂昂溪区","铁锋区","建华区","富拉尔基区","碾子山区","梅里斯达斡尔族区","讷河市","富裕县","拜泉县","甘南县","依安县","克山县","泰来县","克东县","龙江县","其他"]},

        {"name":"鹤岗", "area":["兴山区","工农区","南山区","兴安区","向阳区","东山区","萝北县","绥滨县","其他"]},

        {"name":"双鸭山", "area":["尖山区","岭东区","四方台区","宝山区","集贤县","宝清县","友谊县","饶河县","其他"]},

        {"name":"鸡西", "area":["鸡冠区","恒山区","城子河区","滴道区","梨树区","麻山区","密山市","虎林市","鸡东县","其他"]},

        {"name":"大庆", "area":["萨尔图区","红岗区","龙凤区","让胡路区","大同区","林甸县","肇州县","肇源县","杜尔伯特蒙古族自治县","其他"]},

        {"name":"伊春", "area":["伊春区","带岭区","南岔区","金山屯区","西林区","美溪区","乌马河区","翠峦区","友好区","上甘岭区","五营区","红星区","新青区","汤旺河区","乌伊岭区","铁力市","嘉荫县","其他"]},

        {"name":"牡丹江", "area":["爱民区","东安区","阳明区","西安区","绥芬河市","宁安市","海林市","穆棱市","林口县","东宁县","其他"]},

        {"name":"佳木斯", "area":["向阳区","前进区","东风区","郊区","同江市","富锦市","桦川县","抚远县","桦南县","汤原县","其他"]},

        {"name":"七台河", "area":["桃山区","新兴区","茄子河区","勃利县","其他"]},

        {"name":"黑河", "area":["爱辉区","北安市","五大连池市","逊克县","嫩江县","孙吴县","其他"]},

        {"name":"绥化", "area":["北林区","安达市","肇东市","海伦市","绥棱县","兰西县","明水县","青冈县","庆安县","望奎县","其他"]},

        {"name":"大兴安岭地区", "area":["呼玛县","塔河县","漠河县","大兴安岭辖区","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "上海", "city":[

        {"name":"上海", "area":["黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","宝山区","闵行区","嘉定区","松江区","金山区","青浦区","南汇区","奉贤区","浦东新区","崇明县","其他"]}

    ]},

    { "name": "江苏", "city":[

        {"name":"南京", "area":["玄武区","白下区","秦淮区","建邺区","鼓楼区","下关区","栖霞区","雨花台区","浦口区","江宁区","六合区","溧水县","高淳县","其他"]},

        {"name":"苏州", "area":["金阊区","平江区","沧浪区","虎丘区","吴中区","相城区","常熟市","张家港市","昆山市","吴江市","太仓市","其他"]},

        {"name":"无锡", "area":["崇安区","南长区","北塘区","滨湖区","锡山区","惠山区","江阴市","宜兴市","其他"]},

        {"name":"常州", "area":["钟楼区","天宁区","戚墅堰区","新北区","武进区","金坛市","溧阳市","其他"]},

        {"name":"镇江", "area":["京口区","润州区","丹徒区","丹阳市","扬中市","句容市","其他"]},

        {"name":"南通", "area":["崇川区","港闸区","通州市","如皋市","海门市","启东市","海安县","如东县","其他"]},

        {"name":"泰州", "area":["海陵区","高港区","姜堰市","泰兴市","靖江市","兴化市","其他"]},

        {"name":"扬州", "area":["广陵区","维扬区","邗江区","江都市","仪征市","高邮市","宝应县","其他"]},

        {"name":"盐城", "area":["亭湖区","盐都区","大丰市","东台市","建湖县","射阳县","阜宁县","滨海县","响水县","其他"]},

        {"name":"连云港", "area":["新浦区","海州区","连云区","东海县","灌云县","赣榆县","灌南县","其他"]},

        {"name":"徐州", "area":["云龙区","鼓楼区","九里区","泉山区","贾汪区","邳州市","新沂市","铜山县","睢宁县","沛县","丰县","其他"]},

        {"name":"淮安", "area":["清河区","清浦区","楚州区","淮阴区","涟水县","洪泽县","金湖县","盱眙县","其他"]},

        {"name":"宿迁", "area":["宿城区","宿豫区","沭阳县","泗阳县","泗洪县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "浙江", "city":[

        {"name":"杭州", "area":["拱墅区","西湖区","上城区","下城区","江干区","滨江区","余杭区","萧山区","建德市","富阳市","临安市","桐庐县","淳安县","其他"]},

        {"name":"宁波", "area":["海曙区","江东区","江北区","镇海区","北仑区","鄞州区","余姚市","慈溪市","奉化市","宁海县","象山县","其他"]},

        {"name":"温州", "area":["鹿城区","龙湾区","瓯海区","瑞安市","乐清市","永嘉县","洞头县","平阳县","苍南县","文成县","泰顺县","其他"]},

        {"name":"嘉兴", "area":["秀城区","秀洲区","海宁市","平湖市","桐乡市","嘉善县","海盐县","其他"]},

        {"name":"湖州", "area":["吴兴区","南浔区","长兴县","德清县","安吉县","其他"]},

        {"name":"绍兴", "area":["越城区","诸暨市","上虞市","嵊州市","绍兴县","新昌县","其他"]},

        {"name":"金华", "area":["婺城区","金东区","兰溪市","义乌市","东阳市","永康市","武义县","浦江县","磐安县","其他"]},

        {"name":"衢州", "area":["柯城区","衢江区","江山市","龙游县","常山县","开化县","其他"]},

        {"name":"舟山", "area":["定海区","普陀区","岱山县","嵊泗县","其他"]},

        {"name":"台州", "area":["椒江区","黄岩区","路桥区","临海市","温岭市","玉环县","天台县","仙居县","三门县","其他"]},

        {"name":"丽水", "area":["莲都区","龙泉市","缙云县","青田县","云和县","遂昌县","松阳县","庆元县","景宁畲族自治县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "安徽", "city":[

        {"name":"合肥", "area":["庐阳区","瑶海区","蜀山区","包河区","长丰县","肥东县","肥西县","其他"]},

        {"name":"芜湖", "area":["镜湖区","弋江区","鸠江区","三山区","芜湖县","南陵县","繁昌县","其他"]},

        {"name":"蚌埠", "area":["蚌山区","龙子湖区","禹会区","淮上区","怀远县","固镇县","五河县","其他"]},

        {"name":"淮南", "area":["田家庵区","大通区","谢家集区","八公山区","潘集区","凤台县","其他"]},

        {"name":"马鞍山", "area":["雨山区","花山区","金家庄区","当涂县","其他"]},

        {"name":"淮北", "area":["相山区","杜集区","烈山区","濉溪县","其他"]},

        {"name":"铜陵", "area":["铜官山区","狮子山区","郊区","铜陵县","其他"]},

        {"name":"安庆", "area":["迎江区","大观区","宜秀区","桐城市","宿松县","枞阳县","太湖县","怀宁县","岳西县","望江县","潜山县","其他"]},

        {"name":"黄山", "area":["屯溪区","黄山区","徽州区","休宁县","歙县","祁门县","黟县","其他"]},

        {"name":"滁州", "area":["琅琊区","南谯区","天长市","明光市","全椒县","来安县","定远县","凤阳县","其他"]},

        {"name":"阜阳", "area":["颍州区","颍东区","颍泉区","界首市","临泉县","颍上县","阜南县","太和县","其他"]},

        {"name":"宿州", "area":["埇桥区","萧县","泗县","砀山县","灵璧县","其他"]},

        {"name":"巢湖", "area":["居巢区","含山县","无为县","庐江县","和县","其他"]},

        {"name":"六安", "area":["金安区","裕安区","寿县","霍山县","霍邱县","舒城县","金寨县","其他"]},

        {"name":"亳州", "area":["谯城区","利辛县","涡阳县","蒙城县","其他"]},

        {"name":"池州", "area":["贵池区","东至县","石台县","青阳县","其他"]},

        {"name":"宣城", "area":["宣州区","宁国市","广德县","郎溪县","泾县","旌德县","绩溪县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "福建", "city":[

        {"name":"福州", "area":["鼓楼区","台江区","仓山区","马尾区","晋安区","福清市","长乐市","闽侯县","闽清县","永泰县","连江县","罗源县","平潭县","其他"]},

        {"name":"厦门", "area":["思明区","海沧区","湖里区","集美区","同安区","翔安区","其他"]},

        {"name":"莆田", "area":["城厢区","涵江区","荔城区","秀屿区","仙游县","其他"]},

        {"name":"三明", "area":["梅列区","三元区","永安市","明溪县","将乐县","大田县","宁化县","建宁县","沙县","尤溪县","清流县","泰宁县","其他"]},

        {"name":"泉州", "area":["鲤城区","丰泽区","洛江区","泉港区","石狮市","晋江市","南安市","惠安县","永春县","安溪县","德化县","金门县","其他"]},

        {"name":"漳州", "area":["芗城区","龙文区","龙海市","平和县","南靖县","诏安县","漳浦县","华安县","东山县","长泰县","云霄县","其他"]},

        {"name":"南平", "area":["延平区","建瓯市","邵武市","武夷山市","建阳市","松溪县","光泽县","顺昌县","浦城县","政和县","其他"]},

        {"name":"龙岩", "area":["新罗区","漳平市","长汀县","武平县","上杭县","永定县","连城县","其他"]},

        {"name":"宁德", "area":["蕉城区","福安市","福鼎市","寿宁县","霞浦县","柘荣县","屏南县","古田县","周宁县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "江西", "city":[

        {"name":"南昌", "area":["东湖区","西湖区","青云谱区","湾里区","青山湖区","新建县","南昌县","进贤县","安义县","其他"]},

        {"name":"景德镇", "area":["珠山区","昌江区","乐平市","浮梁县","其他"]},

        {"name":"萍乡", "area":["安源区","湘东区","莲花县","上栗县","芦溪县","其他"]},

        {"name":"九江", "area":["浔阳区","庐山区","瑞昌市","九江县","星子县","武宁县","彭泽县","永修县","修水县","湖口县","德安县","都昌县","其他"]},

        {"name":"新余", "area":["渝水区","分宜县","其他"]},

        {"name":"鹰潭", "area":["月湖区","贵溪市","余江县","其他"]},

        {"name":"赣州", "area":["章贡区","瑞金市","南康市","石城县","安远县","赣县","宁都县","寻乌县","兴国县","定南县","上犹县","于都县","龙南县","崇义县","信丰县","全南县","大余县","会昌县","其他"]},

        {"name":"吉安", "area":["吉州区","青原区","井冈山市","吉安县","永丰县","永新县","新干县","泰和县","峡江县","遂川县","安福县","吉水县","万安县","其他"]},

        {"name":"宜春", "area":["袁州区","丰城市","樟树市","高安市","铜鼓县","靖安县","宜丰县","奉新县","万载县","上高县","其他"]},

        {"name":"抚州", "area":["临川区","南丰县","乐安县","金溪县","南城县","东乡县","资溪县","宜黄县","广昌县","黎川县","崇仁县","其他"]},

        {"name":"上饶", "area":["信州区","德兴市","上饶县","广丰县","鄱阳县","婺源县","铅山县","余干县","横峰县","弋阳县","玉山县","万年县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "山东", "city":[

        {"name":"济南", "area":["市中区","历下区","天桥区","槐荫区","历城区","长清区","章丘市","平阴县","济阳县","商河县","其他"]},

        {"name":"青岛", "area":["市南区","市北区","城阳区","四方区","李沧区","黄岛区","崂山区","胶南市","胶州市","平度市","莱西市","即墨市","其他"]},

        {"name":"淄博", "area":["张店区","临淄区","淄川区","博山区","周村区","桓台县","高青县","沂源县","其他"]},

        {"name":"枣庄", "area":["市中区","山亭区","峄城区","台儿庄区","薛城区","滕州市","其他"]},

        {"name":"东营", "area":["东营区","河口区","垦利县","广饶县","利津县","其他"]},

        {"name":"烟台", "area":["芝罘区","福山区","牟平区","莱山区","龙口市","莱阳市","莱州市","招远市","蓬莱市","栖霞市","海阳市","长岛县","其他"]},

        {"name":"潍坊", "area":["潍城区","寒亭区","坊子区","奎文区","青州市","诸城市","寿光市","安丘市","高密市","昌邑市","昌乐县","临朐县","其他"]},

        {"name":"济宁", "area":["市中区","任城区","曲阜市","兖州市","邹城市","鱼台县","金乡县","嘉祥县","微山县","汶上县","泗水县","梁山县","其他"]},

        {"name":"泰安", "area":["泰山区","岱岳区","新泰市","肥城市","宁阳县","东平县","其他"]},

        {"name":"威海", "area":["环翠区","乳山市","文登市","荣成市","其他"]},

        {"name":"日照", "area":["东港区","岚山区","五莲县","莒县","其他"]},

        {"name":"莱芜", "area":["莱城区","钢城区","其他"]},

        {"name":"临沂", "area":["兰山区","罗庄区","河东区","沂南县","郯城县","沂水县","苍山县","费县","平邑县","莒南县","蒙阴县","临沭县","其他"]},

        {"name":"德州", "area":["德城区","乐陵市","禹城市","陵县","宁津县","齐河县","武城县","庆云县","平原县","夏津县","临邑县","其他"]},

        {"name":"聊城", "area":["东昌府区","临清市","高唐县","阳谷县","茌平县","莘县","东阿县","冠县","其他"]},

        {"name":"滨州", "area":["滨城区","邹平县","沾化县","惠民县","博兴县","阳信县","无棣县","其他"]},

        {"name":"菏泽", "area":["牡丹区","鄄城县","单县","郓城县","曹县","定陶县","巨野县","东明县","成武县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "河南", "city":[

        {"name":"郑州", "area":["中原区","金水区","二七区","管城回族区","上街区","惠济区","巩义市","新郑市","新密市","登封市","荥阳市","中牟县","其他"]},

        {"name":"开封", "area":["鼓楼区","龙亭区","顺河回族区","禹王台区","金明区","开封县","尉氏县","兰考县","杞县","通许县","其他"]},

        {"name":"洛阳", "area":["西工区","老城区","涧西区","瀍河回族区","洛龙区","吉利区","偃师市","孟津县","汝阳县","伊川县","洛宁县","嵩县","宜阳县","新安县","栾川县","其他"]},

        {"name":"平顶山", "area":["新华区","卫东区","湛河区","石龙区","汝州市","舞钢市","宝丰县","叶县","郏县","鲁山县","其他"]},

        {"name":"安阳", "area":["北关区","文峰区","殷都区","龙安区","林州市","安阳县","滑县","内黄县","汤阴县","其他"]},

        {"name":"鹤壁", "area":["淇滨区","山城区","鹤山区","浚县","淇县","其他"]},

        {"name":"新乡", "area":["卫滨区","红旗区","凤泉区","牧野区","卫辉市","辉县市","新乡县","获嘉县","原阳县","长垣县","封丘县","延津县","其他"]},

        {"name":"焦作", "area":["解放区","中站区","马村区","山阳区","沁阳市","孟州市","修武县","温县","武陟县","博爱县","其他"]},

        {"name":"濮阳", "area":["华龙区","濮阳县","南乐县","台前县","清丰县","范县","其他"]},

        {"name":"许昌", "area":["魏都区","禹州市","长葛市","许昌县","鄢陵县","襄城县","其他"]},

        {"name":"漯河", "area":["源汇区","郾城区","召陵区","临颍县","舞阳县","其他"]},

        {"name":"三门峡", "area":["湖滨区","义马市","灵宝市","渑池县","卢氏县","陕县","其他"]},

        {"name":"南阳", "area":["卧龙区","宛城区","邓州市","桐柏县","方城县","淅川县","镇平县","唐河县","南召县","内乡县","新野县","社旗县","西峡县","其他"]},

        {"name":"商丘", "area":["梁园区","睢阳区","永城市","宁陵县","虞城县","民权县","夏邑县","柘城县","睢县","其他"]},

        {"name":"信阳", "area":["浉河区","平桥区","潢川县","淮滨县","息县","新县","商城县","固始县","罗山县","光山县","其他"]},

        {"name":"周口", "area":["川汇区","项城市","商水县","淮阳县","太康县","鹿邑县","西华县","扶沟县","沈丘县","郸城县","其他"]},

        {"name":"驻马店", "area":["驿城区","确山县","新蔡县","上蔡县","西平县","泌阳县","平舆县","汝南县","遂平县","正阳县","其他"]},

        {"name":"焦作", "area":["济源市","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "湖北", "city":[

        {"name":"武汉", "area":["江岸区","武昌区","江汉区","硚口区","汉阳区","青山区","洪山区","东西湖区","汉南区","蔡甸区","江夏区","黄陂区","新洲区","其他"]},

        {"name":"黄石", "area":["黄石港区","西塞山区","下陆区","铁山区","大冶市","阳新县","其他"]},

        {"name":"十堰", "area":["张湾区","茅箭区","丹江口市","郧县","竹山县","房县","郧西县","竹溪县","其他"]},

        {"name":"荆州", "area":["沙市区","荆州区","洪湖市","石首市","松滋市","监利县","公安县","江陵县","其他"]},

        {"name":"宜昌", "area":["西陵区","伍家岗区","点军区","猇亭区","夷陵区","宜都市","当阳市","枝江市","秭归县","远安县","兴山县","五峰土家族自治县","长阳土家族自治县","其他"]},

        {"name":"襄樊", "area":["襄城区","樊城区","襄阳区","老河口市","枣阳市","宜城市","南漳县","谷城县","保康县","其他"]},

        {"name":"鄂州", "area":["鄂城区","华容区","梁子湖区","其他"]},

        {"name":"荆门", "area":["东宝区","掇刀区","钟祥市","京山县","沙洋县","其他"]},

        {"name":"孝感", "area":["孝南区","应城市","安陆市","汉川市","云梦县","大悟县","孝昌县","其他"]},

        {"name":"黄冈", "area":["黄州区","麻城市","武穴市","红安县","罗田县","浠水县","蕲春县","黄梅县","英山县","团风县","其他"]},

        {"name":"咸宁", "area":["咸安区","赤壁市","嘉鱼县","通山县","崇阳县","通城县","其他"]},

        {"name":"随州", "area":["曾都区","广水市","其他"]},

        {"name":"恩施土家族苗族自治州", "area":["恩施市","利川市","建始县","来凤县","巴东县","鹤峰县","宣恩县","咸丰县","其他"]},

        {"name":"仙桃", "area":["仙桃"]},

        {"name":"天门", "area":["天门"]},

        {"name":"潜江", "area":["潜江"]},

        {"name":"神农架林区", "area":["神农架林区"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "湖南", "city":[

        {"name":"长沙", "area":["岳麓区","芙蓉区","天心区","开福区","雨花区","浏阳市","长沙县","望城县","宁乡县","其他"]},

        {"name":"株洲", "area":["天元区","荷塘区","芦淞区","石峰区","醴陵市","株洲县","炎陵县","茶陵县","攸县","其他"]},

        {"name":"湘潭", "area":["岳塘区","雨湖区","湘乡市","韶山市","湘潭县","其他"]},

        {"name":"衡阳", "area":["雁峰区","珠晖区","石鼓区","蒸湘区","南岳区","耒阳市","常宁市","衡阳县","衡东县","衡山县","衡南县","祁东县","其他"]},

        {"name":"邵阳", "area":["双清区","大祥区","北塔区","武冈市","邵东县","洞口县","新邵县","绥宁县","新宁县","邵阳县","隆回县","城步苗族自治县","其他"]},

        {"name":"岳阳", "area":["岳阳楼区","云溪区","君山区","临湘市","汨罗市","岳阳县","湘阴县","平江县","华容县","其他"]},

        {"name":"常德", "area":["武陵区","鼎城区","津市市","澧县","临澧县","桃源县","汉寿县","安乡县","石门县","其他"]},

        {"name":"张家界", "area":["永定区","武陵源区","慈利县","桑植县","其他"]},

        {"name":"益阳", "area":["赫山区","资阳区","沅江市","桃江县","南县","安化县","其他"]},

        {"name":"郴州", "area":["北湖区","苏仙区","资兴市","宜章县","汝城县","安仁县","嘉禾县","临武县","桂东县","永兴县","桂阳县","其他"]},

        {"name":"永州", "area":["冷水滩区","零陵区","祁阳县","蓝山县","宁远县","新田县","东安县","江永县","道县","双牌县","江华瑶族自治县","其他"]},

        {"name":"怀化", "area":["鹤城区","洪江市","会同县","沅陵县","辰溪县","溆浦县","中方县","新晃侗族自治县","芷江侗族自治县","通道侗族自治县","靖州苗族侗族自治县","麻阳苗族自治县","其他"]},

        {"name":"娄底", "area":["娄星区","冷水江市","涟源市","新化县","双峰县","其他"]},

        {"name":"湘西土家族苗族自治州", "area":["吉首市","古丈县","龙山县","永顺县","凤凰县","泸溪县","保靖县","花垣县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "广东", "city":[

        {"name":"广州", "area":["越秀区","荔湾区","海珠区","天河区","白云区","黄埔区","番禺区","花都区","南沙区","萝岗区","增城市","从化市","其他"]},

        {"name":"深圳", "area":["福田区","罗湖区","南山区","宝安区","龙岗区","盐田区","其他"]},

        {"name":"东莞", "area":["莞城","常平","塘厦","塘厦","塘厦","其他"]},

        {"name":"中山", "area":["中山"]},

        {"name":"潮州", "area":["湘桥区","潮安县","饶平县","其他"]},

        {"name":"揭阳", "area":["榕城区","揭东县","揭西县","惠来县","普宁市","其他"]},

        {"name":"云浮", "area":["云城区","新兴县","郁南县","云安县","罗定市","其他"]},

        {"name":"珠海", "area":["香洲区","斗门区","金湾区","其他"]},

        {"name":"汕头", "area":["金平区","濠江区","龙湖区","潮阳区","潮南区","澄海区","南澳县","其他"]},

        {"name":"韶关", "area":["浈江区","武江区","曲江区","乐昌市","南雄市","始兴县","仁化县","翁源县","新丰县","乳源瑶族自治县","其他"]},

        {"name":"佛山", "area":["禅城区","南海区","顺德区","三水区","高明区","其他"]},

        {"name":"江门", "area":["蓬江区","江海区","新会区","恩平市","台山市","开平市","鹤山市","其他"]},

        {"name":"湛江", "area":["赤坎区","霞山区","坡头区","麻章区","吴川市","廉江市","雷州市","遂溪县","徐闻县","其他"]},

        {"name":"茂名", "area":["茂南区","茂港区","化州市","信宜市","高州市","电白县","其他"]},

        {"name":"肇庆", "area":["端州区","鼎湖区","高要市","四会市","广宁县","怀集县","封开县","德庆县","其他"]},

        {"name":"惠州", "area":["惠城区","惠阳区","博罗县","惠东县","龙门县","其他"]},

        {"name":"梅州", "area":["梅江区","兴宁市","梅县","大埔县","丰顺县","五华县","平远县","蕉岭县","其他"]},

        {"name":"汕尾", "area":["城区","陆丰市","海丰县","陆河县","其他"]},

        {"name":"河源", "area":["源城区","紫金县","龙川县","连平县","和平县","东源县","其他"]},

        {"name":"阳江", "area":["江城区","阳春市","阳西县","阳东县","其他"]},

        {"name":"清远", "area":["清城区","英德市","连州市","佛冈县","阳山县","清新县","连山壮族瑶族自治县","连南瑶族自治县","其他"]}

    ]},

    { "name": "广西", "city":[

        {"name":"南宁", "area":["青秀区","兴宁区","西乡塘区","良庆区","江南区","邕宁区","武鸣县","隆安县","马山县","上林县","宾阳县","横县","其他"]},

        {"name":"柳州", "area":["城中区","鱼峰区","柳北区","柳南区","柳江县","柳城县","鹿寨县","融安县","融水苗族自治县","三江侗族自治县","其他"]},

        {"name":"桂林", "area":["象山区","秀峰区","叠彩区","七星区","雁山区","阳朔县","临桂县","灵川县","全州县","平乐县","兴安县","灌阳县","荔浦县","资源县","永福县","龙胜各族自治县","恭城瑶族自治县","其他"]},

        {"name":"梧州", "area":["万秀区","蝶山区","长洲区","岑溪市","苍梧县","藤县","蒙山县","其他"]},

        {"name":"北海", "area":["海城区","银海区","铁山港区","合浦县","其他"]},

        {"name":"防城港", "area":["港口区","防城区","东兴市","上思县","其他"]},

        {"name":"钦州", "area":["钦南区","钦北区","灵山县","浦北县","其他"]},

        {"name":"贵港", "area":["港北区","港南区","覃塘区","桂平市","平南县","其他"]},

        {"name":"玉林", "area":["玉州区","北流市","容县","陆川县","博白县","兴业县","其他"]},

        {"name":"百色", "area":["右江区","凌云县","平果县","西林县","乐业县","德保县","田林县","田阳县","靖西县","田东县","那坡县","隆林各族自治县","其他"]},

        {"name":"贺州", "area":["八步区","钟山县","昭平县","富川瑶族自治县","其他"]},

        {"name":"河池", "area":["金城江区","宜州市","天峨县","凤山县","南丹县","东兰县","都安瑶族自治县","罗城仫佬族自治县","巴马瑶族自治县","环江毛南族自治县","大化瑶族自治县","其他"]},

        {"name":"来宾", "area":["兴宾区","合山市","象州县","武宣县","忻城县","金秀瑶族自治县","其他"]},

        {"name":"崇左", "area":["江州区","凭祥市","宁明县","扶绥县","龙州县","大新县","天等县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "海南", "city":[

        {"name":"海口", "area":["龙华区","秀英区","琼山区","美兰区","其他"]},

        {"name":"三亚", "area":["三亚市","其他"]},

        {"name":"五指山", "area":["五指山"]},

        {"name":"琼海", "area":["琼海"]},

        {"name":"儋州", "area":["儋州"]},

        {"name":"文昌", "area":["文昌"]},

        {"name":"万宁", "area":["万宁"]},

        {"name":"东方", "area":["东方"]},

        {"name":"澄迈县", "area":["澄迈县"]},

        {"name":"定安县", "area":["定安县"]},

        {"name":"屯昌县", "area":["屯昌县"]},

        {"name":"临高县", "area":["临高县"]},

        {"name":"白沙黎族自治县", "area":["白沙黎族自治县"]},

        {"name":"昌江黎族自治县", "area":["昌江黎族自治县"]},

        {"name":"乐东黎族自治县", "area":["乐东黎族自治县"]},

        {"name":"陵水黎族自治县", "area":["陵水黎族自治县"]},

        {"name":"保亭黎族苗族自治县", "area":["保亭黎族苗族自治县"]},

        {"name":"琼中黎族苗族自治县", "area":["琼中黎族苗族自治县"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "重庆", "city":[

        {"name":"重庆", "area":["渝中区","大渡口区","江北区","南岸区","北碚区","渝北区","巴南区","长寿区","双桥区","沙坪坝区","万盛区","万州区","涪陵区","黔江区","永川区","合川区","江津区","九龙坡区","南川区","綦江县","潼南县","荣昌县","璧山县","大足县","铜梁县","梁平县","开县","忠县","城口县","垫江县","武隆县","丰都县","奉节县","云阳县","巫溪县","巫山县","石柱土家族自治县","秀山土家族苗族自治县","酉阳土家族苗族自治县","彭水苗族土家族自治县","其他"]}

    ]},

    { "name": "四川", "city":[

        {"name":"成都", "area":["青羊区","锦江区","金牛区","武侯区","成华区","龙泉驿区","青白江区","新都区","温江区","都江堰市","彭州市","邛崃市","崇州市","金堂县","郫县","新津县","双流县","蒲江县","大邑县","其他"]},

        {"name":"自贡", "area":["大安区","自流井区","贡井区","沿滩区","荣县","富顺县","其他"]},

        {"name":"攀枝花", "area":["仁和区","米易县","盐边县","东区","西区","其他"]},

        {"name":"泸州", "area":["江阳区","纳溪区","龙马潭区","泸县","合江县","叙永县","古蔺县","其他"]},

        {"name":"德阳", "area":["旌阳区","广汉市","什邡市","绵竹市","罗江县","中江县","其他"]},

        {"name":"绵阳", "area":["涪城区","游仙区","江油市","盐亭县","三台县","平武县","安县","梓潼县","北川羌族自治县","其他"]},

        {"name":"广元", "area":["元坝区","朝天区","青川县","旺苍县","剑阁县","苍溪县","市中区","其他"]},

        {"name":"遂宁", "area":["船山区","安居区","射洪县","蓬溪县","大英县","其他"]},

        {"name":"内江", "area":["市中区","东兴区","资中县","隆昌县","威远县","其他"]},

        {"name":"乐山", "area":["市中区","五通桥区","沙湾区","金口河区","峨眉山市","夹江县","井研县","犍为县","沐川县","马边彝族自治县","峨边彝族自治县","其他"]},

        {"name":"南充", "area":["顺庆区","高坪区","嘉陵区","阆中市","营山县","蓬安县","仪陇县","南部县","西充县","其他"]},

        {"name":"眉山", "area":["东坡区","仁寿县","彭山县","洪雅县","丹棱县","青神县","其他"]},

        {"name":"宜宾", "area":["翠屏区","宜宾县","兴文县","南溪县","珙县","长宁县","高县","江安县","筠连县","屏山县","其他"]},

        {"name":"广安", "area":["广安区","华蓥市","岳池县","邻水县","武胜县","其他"]},

        {"name":"达州", "area":["通川区","万源市","达县","渠县","宣汉县","开江县","大竹县","其他"]},

        {"name":"雅安", "area":["雨城区","芦山县","石棉县","名山县","天全县","荥经县","宝兴县","汉源县","其他"]},

        {"name":"巴中", "area":["巴州区","南江县","平昌县","通江县","其他"]},

        {"name":"资阳", "area":["雁江区","简阳市","安岳县","乐至县","其他"]},

        {"name":"阿坝藏族羌族自治州", "area":["马尔康县","九寨沟县","红原县","汶川县","阿坝县","理县","若尔盖县","小金县","黑水县","金川县","松潘县","壤塘县","茂县","其他"]},

        {"name":"甘孜藏族自治州", "area":["康定县","丹巴县","炉霍县","九龙县","甘孜县","雅江县","新龙县","道孚县","白玉县","理塘县","德格县","乡城县","石渠县","稻城县","色达县","巴塘县","泸定县","得荣县","其他"]},

        {"name":"凉山彝族自治州", "area":["西昌市","美姑县","昭觉县","金阳县","甘洛县","布拖县","雷波县","普格县","宁南县","喜德县","会东县","越西县","会理县","盐源县","德昌县","冕宁县","木里藏族自治县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "贵州", "city":[

        {"name":"贵阳", "area":["南明区","云岩区","花溪区","乌当区","白云区","小河区","清镇市","开阳县","修文县","息烽县","其他"]},

        {"name":"六盘水", "area":["钟山区","水城县","盘县","六枝特区","其他"]},

        {"name":"遵义", "area":["红花岗区","汇川区","赤水市","仁怀市","遵义县","绥阳县","桐梓县","习水县","凤冈县","正安县","余庆县","湄潭县","道真仡佬族苗族自治县","务川仡佬族苗族自治县","其他"]},

        {"name":"安顺", "area":["西秀区","普定县","平坝县","镇宁布依族苗族自治县","紫云苗族布依族自治县","关岭布依族苗族自治县","其他"]},

        {"name":"铜仁地区", "area":["铜仁市","德江县","江口县","思南县","石阡县","玉屏侗族自治县","松桃苗族自治县","印江土家族苗族自治县","沿河土家族自治县","万山特区","其他"]},

        {"name":"毕节地区", "area":["毕节市","黔西县","大方县","织金县","金沙县","赫章县","纳雍县","威宁彝族回族苗族自治县","其他"]},

        {"name":"黔西南布依族苗族自治州", "area":["兴义市","望谟县","兴仁县","普安县","册亨县","晴隆县","贞丰县","安龙县","其他"]},

        {"name":"黔东南苗族侗族自治州", "area":["凯里市","施秉县","从江县","锦屏县","镇远县","麻江县","台江县","天柱县","黄平县","榕江县","剑河县","三穗县","雷山县","黎平县","岑巩县","丹寨县","其他"]},

        {"name":"黔南布依族苗族自治州", "area":["都匀市","福泉市","贵定县","惠水县","罗甸县","瓮安县","荔波县","龙里县","平塘县","长顺县","独山县","三都水族自治县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "云南", "city":[

        {"name":"昆明", "area":["盘龙区","五华区","官渡区","西山区","东川区","安宁市","呈贡县","晋宁县","富民县","宜良县","嵩明县","石林彝族自治县","禄劝彝族苗族自治县","寻甸回族彝族自治县","其他"]},

        {"name":"曲靖", "area":["麒麟区","宣威市","马龙县","沾益县","富源县","罗平县","师宗县","陆良县","会泽县","其他"]},

        {"name":"玉溪", "area":["红塔区","江川县","澄江县","通海县","华宁县","易门县","峨山彝族自治县","新平彝族傣族自治县","元江哈尼族彝族傣族自治县","其他"]},

        {"name":"保山", "area":["隆阳区","施甸县","腾冲县","龙陵县","昌宁县","其他"]},

        {"name":"昭通", "area":["昭阳区","鲁甸县","巧家县","盐津县","大关县","永善县","绥江县","镇雄县","彝良县","威信县","水富县","其他"]},

        {"name":"丽江", "area":["古城区","永胜县","华坪县","玉龙纳西族自治县","宁蒗彝族自治县","其他"]},

        {"name":"普洱", "area":["思茅区","普洱哈尼族彝族自治县","墨江哈尼族自治县","景东彝族自治县","景谷傣族彝族自治县","镇沅彝族哈尼族拉祜族自治县","江城哈尼族彝族自治县","孟连傣族拉祜族佤族自治县","澜沧拉祜族自治县","西盟佤族自治县","其他"]},

        {"name":"临沧", "area":["临翔区","凤庆县","云县","永德县","镇康县","双江拉祜族佤族布朗族傣族自治县","耿马傣族佤族自治县","沧源佤族自治县","其他"]},

        {"name":"德宏傣族景颇族自治州", "area":["潞西市","瑞丽市","梁河县","盈江县","陇川县","其他"]},

        {"name":"怒江傈僳族自治州", "area":["泸水县","福贡县","贡山独龙族怒族自治县","兰坪白族普米族自治县","其他"]},

        {"name":"迪庆藏族自治州", "area":["香格里拉县","德钦县","维西傈僳族自治县","其他"]},

        {"name":"大理白族自治州", "area":["大理市","祥云县","宾川县","弥渡县","永平县","云龙县","洱源县","剑川县","鹤庆县","漾濞彝族自治县","南涧彝族自治县","巍山彝族回族自治县","其他"]},

        {"name":"楚雄彝族自治州", "area":["楚雄市","双柏县","牟定县","南华县","姚安县","大姚县","永仁县","元谋县","武定县","禄丰县","其他"]},

        {"name":"红河哈尼族彝族自治州", "area":["蒙自县","个旧市","开远市","绿春县","建水县","石屏县","弥勒县","泸西县","元阳县","红河县","金平苗族瑶族傣族自治县","河口瑶族自治县","屏边苗族自治县","其他"]},

        {"name":"文山壮族苗族自治州", "area":["文山县","砚山县","西畴县","麻栗坡县","马关县","丘北县","广南县","富宁县","其他"]},

        {"name":"西双版纳傣族自治州", "area":["景洪市","勐海县","勐腊县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "西藏", "city":[

        {"name":"拉萨", "area":["城关区","林周县","当雄县","尼木县","曲水县","堆龙德庆县","达孜县","墨竹工卡县","其他"]},

        {"name":"那曲地区", "area":["那曲县","嘉黎县","比如县","聂荣县","安多县","申扎县","索县","班戈县","巴青县","尼玛县","其他"]},

        {"name":"昌都地区", "area":["昌都县","江达县","贡觉县","类乌齐县","丁青县","察雅县","八宿县","左贡县","芒康县","洛隆县","边坝县","其他"]},

        {"name":"林芝地区", "area":["林芝县","工布江达县","米林县","墨脱县","波密县","察隅县","朗县","其他"]},

        {"name":"山南地区", "area":["乃东县","扎囊县","贡嘎县","桑日县","琼结县","曲松县","措美县","洛扎县","加查县","隆子县","错那县","浪卡子县","其他"]},

        {"name":"日喀则地区", "area":["日喀则市","南木林县","江孜县","定日县","萨迦县","拉孜县","昂仁县","谢通门县","白朗县","仁布县","康马县","定结县","仲巴县","亚东县","吉隆县","聂拉木县","萨嘎县","岗巴县","其他"]},

        {"name":"阿里地区", "area":["噶尔县","普兰县","札达县","日土县","革吉县","改则县","措勤县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "陕西", "city":[

        {"name":"西安", "area":["莲湖区","新城区","碑林区","雁塔区","灞桥区","未央区","阎良区","临潼区","长安区","高陵县","蓝田县","户县","周至县","其他"]},

        {"name":"铜川", "area":["耀州区","王益区","印台区","宜君县","其他"]},

        {"name":"宝鸡", "area":["渭滨区","金台区","陈仓区","岐山县","凤翔县","陇县","太白县","麟游县","扶风县","千阳县","眉县","凤县","其他"]},

        {"name":"咸阳", "area":["秦都区","渭城区","杨陵区","兴平市","礼泉县","泾阳县","永寿县","三原县","彬县","旬邑县","长武县","乾县","武功县","淳化县","其他"]},

        {"name":"渭南", "area":["临渭区","韩城市","华阴市","蒲城县","潼关县","白水县","澄城县","华县","合阳县","富平县","大荔县","其他"]},

        {"name":"延安", "area":["宝塔区","安塞县","洛川县","子长县","黄陵县","延川县","富县","延长县","甘泉县","宜川县","志丹县","黄龙县","吴起县","其他"]},

        {"name":"汉中", "area":["汉台区","留坝县","镇巴县","城固县","南郑县","洋县","宁强县","佛坪县","勉县","西乡县","略阳县","其他"]},

        {"name":"榆林", "area":["榆阳区","清涧县","绥德县","神木县","佳县","府谷县","子洲县","靖边县","横山县","米脂县","吴堡县","定边县","其他"]},

        {"name":"安康", "area":["汉滨区","紫阳县","岚皋县","旬阳县","镇坪县","平利县","石泉县","宁陕县","白河县","汉阴县","其他"]},

        {"name":"商洛", "area":["商州区","镇安县","山阳县","洛南县","商南县","丹凤县","柞水县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "甘肃", "city":[

        {"name":"兰州", "area":["城关区","七里河区","西固区","安宁区","红古区","永登县","皋兰县","榆中县","其他"]},

        {"name":"嘉峪关", "area":["嘉峪关市","其他"]},

        {"name":"金昌", "area":["金川区","永昌县","其他"]},

        {"name":"白银", "area":["白银区","平川区","靖远县","会宁县","景泰县","其他"]},

        {"name":"天水", "area":["清水县","秦安县","甘谷县","武山县","张家川回族自治县","北道区","秦城区","其他"]},

        {"name":"武威", "area":["凉州区","民勤县","古浪县","天祝藏族自治县","其他"]},

        {"name":"酒泉", "area":["肃州区","玉门市","敦煌市","金塔县","肃北蒙古族自治县","阿克塞哈萨克族自治县","安西县","其他"]},

        {"name":"张掖", "area":["甘州区","民乐县","临泽县","高台县","山丹县","肃南裕固族自治县","其他"]},

        {"name":"庆阳", "area":["西峰区","庆城县","环县","华池县","合水县","正宁县","宁县","镇原县","其他"]},

        {"name":"平凉", "area":["崆峒区","泾川县","灵台县","崇信县","华亭县","庄浪县","静宁县","其他"]},

        {"name":"定西", "area":["安定区","通渭县","临洮县","漳县","岷县","渭源县","陇西县","其他"]},

        {"name":"陇南", "area":["武都区","成县","宕昌县","康县","文县","西和县","礼县","两当县","徽县","其他"]},

        {"name":"临夏回族自治州", "area":["临夏市","临夏县","康乐县","永靖县","广河县","和政县","东乡族自治县","积石山保安族东乡族撒拉族自治县","其他"]},

        {"name":"甘南藏族自治州", "area":["合作市","临潭县","卓尼县","舟曲县","迭部县","玛曲县","碌曲县","夏河县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "青海", "city":[

        {"name":"西宁", "area":["城中区","城东区","城西区","城北区","湟源县","湟中县","大通回族土族自治县","其他"]},

        {"name":"海东地区", "area":["平安县","乐都县","民和回族土族自治县","互助土族自治县","化隆回族自治县","循化撒拉族自治县","其他"]},

        {"name":"海北藏族自治州", "area":["海晏县","祁连县","刚察县","门源回族自治县","其他"]},

        {"name":"海南藏族自治州", "area":["共和县","同德县","贵德县","兴海县","贵南县","其他"]},

        {"name":"黄南藏族自治州", "area":["同仁县","尖扎县","泽库县","河南蒙古族自治县","其他"]},

        {"name":"果洛藏族自治州", "area":["玛沁县","班玛县","甘德县","达日县","久治县","玛多县","其他"]},

        {"name":"玉树藏族自治州", "area":["玉树县","杂多县","称多县","治多县","囊谦县","曲麻莱县","其他"]},

        {"name":"海西蒙古族藏族自治州", "area":["德令哈市","格尔木市","乌兰县","都兰县","天峻县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "宁夏", "city":[

        {"name":"银川", "area":["兴庆区","西夏区","金凤区","灵武市","永宁县","贺兰县","其他"]},

        {"name":"石嘴山", "area":["大武口区","惠农区","平罗县","其他"]},

        {"name":"吴忠", "area":["利通区","青铜峡市","盐池县","同心县","其他"]},

        {"name":"固原", "area":["原州区","西吉县","隆德县","泾源县","彭阳县","其他"]},

        {"name":"中卫", "area":["沙坡头区","中宁县","海原县","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "新疆", "city":[

        {"name":"乌鲁木齐", "area":["天山区","沙依巴克区","新市区","水磨沟区","头屯河区","达坂城区","东山区","乌鲁木齐县","其他"]},

        {"name":"克拉玛依", "area":["克拉玛依区","独山子区","白碱滩区","乌尔禾区","其他"]},

        {"name":"吐鲁番地区", "area":["吐鲁番市","托克逊县","鄯善县","其他"]},

        {"name":"哈密地区", "area":["哈密市","伊吾县","巴里坤哈萨克自治县","其他"]},

        {"name":"和田地区", "area":["和田市","和田县","洛浦县","民丰县","皮山县","策勒县","于田县","墨玉县","其他"]},

        {"name":"阿克苏地区", "area":["阿克苏市","温宿县","沙雅县","拜城县","阿瓦提县","库车县","柯坪县","新和县","乌什县","其他"]},

        {"name":"喀什地区", "area":["喀什市","巴楚县","泽普县","伽师县","叶城县","岳普湖县","疏勒县","麦盖提县","英吉沙县","莎车县","疏附县","塔什库尔干塔吉克自治县","其他"]},

        {"name":"克孜勒苏柯尔克孜自治州", "area":["阿图什市","阿合奇县","乌恰县","阿克陶县","其他"]},

        {"name":"巴音郭楞蒙古自治州", "area":["库尔勒市","和静县","尉犁县","和硕县","且末县","博湖县","轮台县","若羌县","焉耆回族自治县","其他"]},

        {"name":"昌吉回族自治州", "area":["昌吉市","阜康市","奇台县","玛纳斯县","吉木萨尔县","呼图壁县","木垒哈萨克自治县","米泉市","其他"]},

        {"name":"博尔塔拉蒙古自治州", "area":["博乐市","精河县","温泉县","其他"]},

        {"name":"石河子", "area":["石河子"]},

        {"name":"阿拉尔", "area":["阿拉尔"]},

        {"name":"图木舒克", "area":["图木舒克"]},

        {"name":"五家渠", "area":["五家渠"]},

        {"name":"伊犁哈萨克自治州", "area":["伊宁市","奎屯市","伊宁县","特克斯县","尼勒克县","昭苏县","新源县","霍城县","巩留县","察布查尔锡伯自治县","塔城地区","阿勒泰地区","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "台湾", "city":[

        {"name":"台湾", "area":["台北市","高雄市","台北县","桃园县","新竹县","苗栗县","台中县","彰化县","南投县","云林县","嘉义县","台南县","高雄县","屏东县","宜兰县","花莲县","台东县","澎湖县","基隆市","新竹市","台中市","嘉义市","台南市","其他"]},

        {"name":"其他", "area":["其他"]}

    ]},

    { "name": "澳门", "city":[

        {"name":"澳门", "area":["花地玛堂区","圣安多尼堂区","大堂区","望德堂区","风顺堂区","嘉模堂区","圣方济各堂区","路凼","其他"]}

    ]},

    { "name": "香港", "city":[

        {"name":"香港", "area":["中西区","湾仔区","东区","南区","深水埗区","油尖旺区","九龙城区","黄大仙区","观塘区","北区","大埔区","沙田区","西贡区","元朗区","屯门区","荃湾区","葵青区","离岛区","其他"]}

    ]},

    { "name": "钓鱼岛", "city":[

        {"name":"钓鱼岛", "area":["钓鱼岛"]}

    ]}

];
;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
		gotoPin:function(num){
			$('.wrapper .pin').removeClass('current');
			$('.wrapper .pin').eq(num).addClass('current');
		},
		getParameterByName:function(name){
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
			var results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		},
		setParameterByName:function(name,value){
			var query = location.search.substring(1,location.search.length);
			result = query;
			var queryArr = query.split('&');
			//update arr
			var newQuery = '';
			for(var i=0;i<queryArr.length;i++){
				if(queryArr[i].indexOf(name)>-1){
					queryArr[i] = name + '=' + value;
				}
				newQuery = newQuery+queryArr[i]+'&';
			};

			return '?'+newQuery;
		},
        hashRoute:function(){
            var hasTag = location.hash;
            if(hasTag.indexOf('#page=')>-1){
                var hashArr = hasTag.split('=');
                //console.log()
                if(hashArr[1] < $('.pin').length){
                    Common.gotoPin(hashArr[1]);
                }else{
                    Common.gotoPin(0);
                }
            }
        },
		msgBox:{
			add:function(msg,long){
				if(long){
					$('body').append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+msg+'</div></div>');
				}else{
					$('body').append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+msg+'</div></div>');
				}
			},
			remove:function(){
				$('.ajaxpop').remove();
			}
		},
		errorMsg : {
			add:function(ele,msg){

				for(var i in ele.childNodes){
					if(ele.childNodes[i].className == 'error'){
						ele.childNodes[i].textContent = msg;
						return true;
					}else{
						if(i==ele.childNodes.length-1){
							var newDiv = document.createElement('div');
							newDiv.textContent = msg;
							newDiv.className = 'error';
							ele.appendChild(newDiv);
						}
					}
				}
			},
			remove:function(ele){

				for(var i in ele.childNodes){
					if(ele.childNodes[i].className == 'error'){
						ele.childNodes[i].parentNode.removeChild(ele.childNodes[i]);
						return;
					}
				}
			}
		},
		errorMsgBox : {
			add:function(msg){
				if(!$('.msgbox').length){
					$('#pin-fillform').append('<div class="msgbox">'+msg+'</div>');
				}else{
					$('#pin-fillform .msgbox').html(msg);
				}
				var rvMsgBox = setTimeout(function(){
					$('.msgbox').remove();
				},3000);
			},
			remove:function(ele){
				if($('.msgbox').length){
					$('.msgbox').remove();
				}
			}
		},
		alertBox:{
			add:function(msg){
				$('body').append('<div class="alertpop msgbox"><div class="inner"><div class="msg">'+msg+'</div><div class="btn-alert-ok">关闭</div></div></div>');
			},
			remove:function(){
				$('.alertpop').remove();
			}
		},
		overscroll: function(el){
			el.addEventListener('touchstart', function() {
				var top = el.scrollTop
					, totalScroll = el.scrollHeight
					, currentScroll = top + el.offsetHeight
				//If we're at the top or the bottom of the containers
				//scroll, push up or down one pixel.
				//
				//this prevents the scroll from "passing through" to
				//the body.
				console.log(currentScroll);
				if(top === 0) {
					el.scrollTop = 1
				} else if(currentScroll === totalScroll) {
					el.scrollTop = top - 1
				}
			});
			el.addEventListener('touchmove', function(evt) {
				//if the content is actually scrollable, i.e. the content is long enough
				//that scrolling can occur
				if(el.offsetHeight < el.scrollHeight)
					evt._isScroller = true
			})
		},


	};


	this.Common = Common;

}).call(this);

var isScroll=false;
var noBounce = function() {
	var module = {};

	var settings = {
		animate: false
	};

	var track = [];

	var velocity = {
		x: 0,
		y: 0
	};

	var vector = {
		subtraction: function(v1, v2) {
			return {
				x: v1.x - v2.x,
				y: v1.y - v2.y
			};
		},
		length: function(v) {
			return Math.sqrt((v.x * v.x) + (v.y * v.y));
		},
		unit: function(v) {
			var length = vector.length(v);
			v.x /= length;
			v.y /= length;
		},
		skalarMult: function(v, s) {
			v.x *= s;
			v.y *= s;
		}
	};

	var requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();

	function handleTouchStart(evt) {
		var point,
			touch;

		touch = evt.changedTouches[0];
		point = {
			x: touch.clientX,
			y: touch.clientY,
			timeStamp: evt.timeStamp
		};
		track = [point];
	}

	function handleTouchMove(evt) {
		var point,
			touch;


		if(isScroll){
			//touch = evt.changedTouches[0];
			//point = {
			//	x: touch.clientX,
			//	y: touch.clientY,
			//	timeStamp: evt.timeStamp
			//};
			//track.push(point);
			//doScroll();
			evt.stopPropagation();
			return;
		}
		evt.preventDefault();


	}

	function handleTouchEnd(evt) {
		if (track.length > 2 && settings.animate) {
			velocity = calcVelocity();
			requestAnimFrame(animate);
		}
	}

	function calcVelocity() {
		var p1,
			p2,
			v,
			timeDiff,
			length;

		p1 = track[0];
		p2 = track[track.length - 1];
		timeDiff = p2.timeStamp - p1.timeStamp;
		v = vector.subtraction(p2, p1);
		length = vector.length(v);
		vector.unit(v);
		vector.skalarMult(v, length / timeDiff * 20);
		return v;
	}

	function doScroll() {
		var p1,
			p2,
			x,
			y;

		if (track.length > 1) {
			p1 = track[track.length - 1];
			p2 = track[track.length - 2];
			x = p2.x - p1.x;
			y = p2.y - p1.y;
			requestAnimFrame(function() {
				window.scrollBy(x, y);
			});
		}
	}

	function animate() {
		scrollBy(-velocity.x, -velocity.y);
		vector.skalarMult(velocity, 0.95);
		if (vector.length(velocity) > 0.2) {
			requestAnimFrame(animate);
		}
	}

	//Returns true if it is a DOM element
	function isElement(o) {
		return (
			typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
			o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
		);
	}

	module.init = function(options) {
		if (typeof options.animate === "boolean") {
			settings.animate = options.animate;
		}
		if (isElement(options.element)) {
			settings.element = options.element;
		}

		var element = settings.element || document;

		element.addEventListener("touchstart", handleTouchStart);
		element.addEventListener("touchmove", handleTouchMove);
		element.addEventListener("touchend", handleTouchEnd);
		element.addEventListener("touchcancel", handleTouchEnd);
		element.addEventListener("touchleave", handleTouchEnd);
	};

	return module;
}();

noBounce.init({
	animate: false
});

$(document).ready(function(){

//	close alert pop
	$('body').on('touchstart','.btn-alert-ok',function(){
		$(this).parent().parent('.alertpop').remove();
	});
	//Common.overscroll(document.querySelector('.wrapper'));




});




/*All the api collection*/
Api = {
    //submit user info
    //{
    //    name: '张三',
    //        tel: '13112345678',
    //    province: '上海',
    //    city: '上海',
    //    area: '黄浦区',
    //    address: '湖滨路'
    //}
    submitForm:function(obj,callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/submit',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
                //status=1 有库存
            }
        });

        //return callback({
        //    status:0,
        //    msg:'fillform'
        //})


    },

    //type: gift1
    getStock:function(obj,callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/stock',
            type:'POST',
            data:obj,
            dataType:'json',
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
            }
        });

        //return callback({
        //    status:1,
        //    msg:'zhognjiang'
        //})


    },
    //抽奖API
    lottery:function(callback){
        Common.msgBox.add('抽奖中...');
        $.ajax({
            url:'/api/lottery',
            type:'POST',
            dataType:'json',
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
            }
        });

        //return callback({
        //    status:1,
        //    msg:'提交成功'
        //});


    },

    getImgValidateCode:function(callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/piccode',
            type:'POST',
            dataType:'json',
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
            }
        });

        //return callback({
        //    status:1,
        //    msg:'提交成功'
        //});


    },

    checkImgValidateCode:function(obj,callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/checkpiccode',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
            }
        });

        //return callback({
        //    status:1,
        //    msg:'提交成功'
        //});


    },


    //sent message validate code
    //phone
    sendMsgValidateCode:function(obj,callback){
        Common.msgBox.add('loading...');
        $.ajax({
            url:'/api/phonecode',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                Common.msgBox.remove();
                return callback(data);
            }
        });

        //return callback({
        //    status:1,
        //    msg:'提交成功'
        //});


    },


};
//;(function(){
//
//    this.weixinshare = weixinshare;
//}).call(this);
function weixinshare(obj,successCallBack){
    //wx.config({
    //    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //    appId: data.appId, // 必填，公众号的唯一标识
    //    timestamp: data.timestamp, // 必填，生成签名的时间戳
    //    nonceStr: data.nonceStr, // 必填，生成签名的随机串
    //    signature: data.signature,// 必填，签名，见附录1
    //    jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //});
    wx.ready(function(){

        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        wx.onMenuShareAppMessage({
            title: obj.title1,
            desc: obj.des,
            link: obj.link,
            imgUrl: obj.img,
            type: '',
            dataUrl: '',
            success: function () {
                //_hmt.push(['_trackEvent', 'buttons', 'click', 'onMenuShareAppMessage']);
                successCallBack();

            },
            cancel: function () {

            }
        });
        wx.onMenuShareTimeline({
            title: obj.title1,
            link: obj.link,
            imgUrl: obj.img,
            success: function () {
                //_hmt.push(['_trackEvent', 'buttons', 'click', 'onMenuShareTimeline']);
                successCallBack();
            },
            cancel: function () {

            }
        });
    });
};

$(document).ready(function(){
    weixinshare({
        title1: '全新KENZO花颜舒柔',
        des: '花颜挚友侯明昊、胡冰卿的花“颜”巧“语”',
        link: window.location.origin+location.pathname,
        img: window.location.origin+'/src/dist/images/share.png'
    },function(){
        console.log('sharesuccess');
    });

});
/*For join page
 * Inclue two function, one is load new qr for each person, another is show rule popup
 * */
;(function(){
    var controller = function(){
        //get userflow status from backend

        //var userInfo = {
        //    isOld: false, /*是否是老用户*/
        //    isSubmit: false, /*是否提交了用户详细信息表单*/
        //    isGift: false, /*是否领取了小样*/
        //    isLuckyDraw: false /*是否抽奖*/
        //};
        this.selectedGift = 'gift1'; //1 is hou,2 is hu
        this.isStock = true; // if stock true, show form, else show qrcode
        this.resultTips = [
            {
                status:0,
                msg: '提交失败！',
                des:'请检查信息是否填写正确'
            },
            {
                status: 1,
                msg: "提交成功！",
                des:'请耐心等待礼物送达<br>扫码关注KENZO公众号<br>发现更多精彩活动'
            },
            {
                status: '2',
                msg: '您已领取过礼物！',
                des:'请耐心等待礼物送达<br>扫码关注KENZO公众号<br>发现更多精彩活动'
            },
            {
                status: '3',
                msg: '手机验证码错误！',
            },
            {
                status: '-1',
                msg: '礼物已派送结束！',
                des:'扫码关注KENZO公众号<br>发现更多精彩活动'
            }
        ];
        this.disableClick = false;



    };
    //init
    controller.prototype.init = function(){
        var self = this;

        var timeStart = 0,
            step= 1,
            isTrueNext = false,
            isFalseNext = false;
        var loadingAni = setInterval(function(){
            if(timeStart>100){
                isFalseNext = true;
                if(isTrueNext){
                    self.startUp();
                }
                clearInterval(loadingAni);
                return;
            };
            if(timeStart==step){
                $('.animate-flower').addClass('fadenow');
            }
            $('.loading-num .num').html(timeStart);
            timeStart += step;
        },50);

        var baseurl = ''+'/src/dist/images/';
        var imagesArray = [
            baseurl + 'bg.png',
            baseurl + 'book-bg.png',
            baseurl + 'book-cover-1.png',
            baseurl + 'book-cover-2.png',
            baseurl + 'book-cover-3.png',
            baseurl + 'book-cover-4.png',
            baseurl + 'btn-audio.png',
            baseurl + 'btn-back.png',
            baseurl + 'btn-hou-audio.png',
            baseurl + 'btn-lookup.png',
            baseurl + 'btn-play.png',
            baseurl + 'btn-prize-details.png',
            baseurl + 'btn-submit.png',
            baseurl + 'form-bg.png',
            baseurl + 'logo.png',
            baseurl + 'p1-img1.png',
            baseurl + 'p3-btn-1.png',
            baseurl + 'p3-img1.png',
            baseurl + 'prize-hou.png',
            baseurl + 'prize-hu.png',
            baseurl + 'qrcode.png',
            baseurl + 'share-guide.png',
            baseurl + 'share.png',
            baseurl + 'arrow-down.png',
            baseurl + 'arrow-left.png',
            baseurl + 'arrow-right.png',
            baseurl + 'audio.png',
        //    audio
            '/src/media/' + 'hlh.aac',
            '/src/media/' + 'hmj.aac',
            '/src/media/' + 'hwy.aac',
            '/src/media/' + 'hyz.aac',
        ];

        var i = 0,j= 0;
        new preLoader(imagesArray, {
            onProgress: function(){
                i++;
                //var progress = parseInt(i/imagesArray.length*100);
                //console.log(progress);
                //$('.preload .v-content').html(''+progress+'%');
                //console.log(i+'i');
            },
            onComplete: function(){
                isTrueNext  = true;
                if(isFalseNext){
                    self.startUp();
                }

            }
        });


    };

    controller.prototype.startUp = function(){
        var self = this;
        $('.preload').remove();
        $('.wrapper').addClass('fade');
        Common.gotoPin(0);
        self.bindEvent();
        self.showAllProvince();
        Common.hashRoute();
        if(location.hash == '#page=4'){
            self.getValidateCode();
        }
    };

    //bind Events
    controller.prototype.bindEvent = function(){
        var self = this;

        //play video and close video
        if(!(navigator.userAgent.indexOf('iPhone')>-1)){
        //    not iphone,will andriod
            $('body').addClass('device-andriod');
        }
        var myVideo = document.getElementById('myvideo');
        //play video
        $('.btn-playvideo').on('touchstart', function(){
            $('.video-wrap').addClass('show');
            myVideo.play();
        });
        //close video, pause video
        $('.btn-closevideo').on('touchstart', function(){
            myVideo.pause();
            $('.video-wrap').removeClass('show');
        });


        //look up the dictionary, load turns js, go pin-lexicon page
        $('.btn-go').on('touchstart', function(){
            Common.gotoPin(1);
            self.lexiconPage();
        });

        //the book area
        $('.block-gonext').on('touchstart', function(){
            Common.gotoPin(1);
            self.lexiconPage();
        });

        //selected relative gift,go prize details page to show relative content,call api to show if there's stock
        $('.btn-show-gift').on('touchstart', function(){
            self.selectedGift = 'gift'+parseInt($(this).index()+1);
            //console.log('call api');
            Api.getStock({type:self.selectedGift},function(data){
                if(data.status==0){
                    $('#pin-prize-details .btn').addClass('sellout');
                    self.isStock = false;
                }else if(data.status==1){
                    $('#pin-prize-details .btn').removeClass('sellout');
                    self.isStock = true;
                }else{
                    Common.alertBox.add(data.msg);
                }
                //if there's stock, show '领见面礼'， else show "来晚了"
                if(self.selectedGift == 'gift1'){
                    $('.p4-1 img').attr('src','src/dist/images/prize-hou.png');
                }else{
                    $('.p4-1 img').attr('src','src/dist/images/prize-hu.png');
                }
                Common.gotoPin(3);
            });

        });

        //get gift, '领见面礼' or "来晚了"
        $('.btn-get-gift').on('touchstart', function(){
            Api.getStock({type:self.selectedGift},function(data){
                if(data.status==0){
                    self.isStock = false;
                    //result page
                    $("#pin-result .title").html(self.resultTips[4].msg);
                    $("#pin-result .des").html(self.resultTips[4].des);
                    Common.gotoPin(5);
                }else if(data.status==1){
                    self.isStock = true;
                    //    go form page
                    location.hash = '#page=4';
                    self.getValidateCode();
                    Common.gotoPin(4);
                }else{
                    Common.alertBox.add(data.msg);
                }
            });
        });


        //show and hide terms pop
            //close terms popup
        $('body').on('touchstart','.btn-close',function(){
            //_hmt.push(['_trackEvent', 'buttons', 'click', 'closeTermsPop']);
            $('.terms-pop').removeClass('show');
        });
        //    show terms pop
        $('.link-rule').on('touchstart',function(){
            $('.terms-pop').addClass('show');
        });


        /*
        * submit the form
        * */
        $('.btn-submit').on('touchstart',function(){
            //_hmt.push(['_trackEvent', 'buttons', 'click', 'btnForSubmitForm']);
            if(self.validateForm()){
                //name mobile province city area address
                var inputNameVal = $('#input-name').val(),
                    inputMobileVal = $('#input-mobile').val(),
                    inputAddressVal = $('#input-address').val(),
                    inputMsgCodeVal = $('#input-validate-message-code').val(),
                    selectProvinceVal = $('#select-province').val(),
                    selectCityVal = $('#select-city').val(),
                    selectDistrictVal = $('#select-district').val();
                //{
                //    name: evenly,
                //        phone: 13112311231,
                //    phonecode: 1234,
                //    province: 安徽,
                //    city: 合肥,
                //    area: 城中区,
                //    address: 好人大街,
                //    type: gift1,
                //    refer: from_wechat
                //}
                Api.submitForm({
                    name:inputNameVal,
                    phone:inputMobileVal,
                    province:selectProvinceVal,
                    city:selectCityVal,
                    phonecode:inputMsgCodeVal,
                    area:selectDistrictVal,
                    address:inputAddressVal,
                    type: self.selectedGift,
                    refer: from || 'web'//三种来源，分别是wechat，weibo,web,from 变量写在静态页头中
                },function(data){
                    if(data.status==1){
                        $("#pin-result .title").html(self.resultTips[1].msg);
                        $("#pin-result .des").html(self.resultTips[1].des);
                        Common.gotoPin(5);
                        location.hash = '';
                    }else if(data.status==0){
                        $("#pin-result .title").html(self.resultTips[0].msg);
                        $("#pin-result .des").html(self.resultTips[0].des);
                        Common.gotoPin(5);
                        location.hash = '';
                    }else if(data.status==2){
                        $("#pin-result .title").html(self.resultTips[2].msg);
                        $("#pin-result .des").html(self.resultTips[2].des);
                        Common.gotoPin(5);
                        location.hash = '';
                    }else if(data.status == -1){
                        $("#pin-result .title").html(self.resultTips[4].msg);
                        $("#pin-result .des").html(self.resultTips[4].des);
                        Common.gotoPin(5);
                        location.hash = '';
                    }else{
                        Common.alertBox.add(data.msg);
                    }
                });
            }

        });

    //    switch the province
        var curProvinceIndex = 0;
        $('#select-province').on('change',function(){
            curProvinceIndex = document.getElementById('select-province').selectedIndex;
            self.showCity(curProvinceIndex);
        });

        $('#select-city').on('change',function(){
            var curCityIndex = document.getElementById('select-city').selectedIndex;
            self.showDistrict(curProvinceIndex,curCityIndex);
        });

        $('#select-district').on('change',function(){
            var districtInputEle = $('#input-text-district'),
                districtSelectEle = $('#select-district');
            var curCityIndex = document.getElementById('select-district').selectedIndex;
            districtInputEle.val(districtSelectEle.val());
        });


    //    imitate share function on pc====test
    //    $('.share-popup .guide-share').on('touchstart',function(){
    //        self.shareSuccess();
    //    });

        //switch validate code
        $('.validate-code').on('touchstart', function(){
            //_hmt.push(['_trackEvent', 'buttons', 'click', 'getValidateCode']);
            self.getValidateCode();
        });

        /*
        * validate phonenumber first
        * Get message validate code,check image validate code
        * if image validate code is right
        * */
        $('.btn-get-msg-code').on('touchstart', function(){
            //_hmt.push(['_trackEvent', 'buttons', 'click', 'getMsgValidateCode']);
            if(self.disableClick) return;
            if(!$('#input-mobile').val()){
                Common.errorMsgBox.add('手机号码不能为空');
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test($('#input-mobile').val()))){
                    validate = false;
                    Common.errorMsgBox.add('手机号格式错误，请重新输入');
                }else{
                    if(!$('#input-validate-code').val()){
                        Common.alertBox.add('你的验证码不能为空');
                        return;
                    }
                    Api.checkImgValidateCode({
                        picture:$('#input-validate-code').val(),
                        phone:$('#input-mobile').val()
                    },function(data){
                        if(data.status == 1){
                            //start to count down and sent message to your phone
                            //Api.sendMsgValidateCode({
                            //    phone:$('#input-mobile').val()
                            //},function(json){
                            //    if(json.status==1){
                            //        //console.log('开始倒计时');
                            //
                            //    }else{
                            //        Common.alertBox.add(json.msg);
                            //    }
                            //});
                            self.countDown();
                            self.disableClick = true;
                        }else{
                            Common.alertBox.add('验证码输入错误，请重新输入');
                            self.getValidateCode();
                        }
                    });
                }
            }

        });


        $('.link-share').on('touchstart', function(){
            $('.share-popup').addClass('show');
        });

        /*
        * For share tips overlay,click will disappear
        * */
        $('.share-popup').on('touchstart', function(e){
            //_hmt.push(['_trackEvent', 'buttons', 'click', 'ShowSharePop']);
            if(e.target.className.indexOf('.share-popup')){
                $('.share-popup').removeClass('show');
            }
        });

    //    btn-back
        $('.btn-back').on('touchstart', function(){
            //reload first page again,init all element
            //window.location.href = window.location.origin+location.pathname;
            //back to third page
            Common.gotoPin(2);
        });
    };

    //events for lexicon page
    controller.prototype.lexiconPage = function(){
        var curSlideIndex = 1;

        $('.flipbook').turn({
            // Width

            width:$(window).width()*0.82,

            // Height

            height:$(window).width()*0.82*920/616,


            // Elevation

            elevation: 50,

            // Enable gradients

            gradients: true,

            // Auto center this flipbook

            autoCenter: false,
            display: 'single',

        });

        var myAudio = document.getElementById('myaudio');
        var isAudioPlay = false;
        $('.arrow-left').on('click',function(){
            myAudio.pause();
            $(".flipbook").turn("previous");
            if($('.arrow-right').hasClass('disabled')){
                $('.arrow-right').removeClass('disabled');
            };
            //if($('.arrow-left').hasClass('disabled')){
            //    Common.gotoPin(0);
            //}
        });

        $('.arrow-right').on('click',function(){
            myAudio.pause();
            $(".flipbook").turn("next");

            if($('.arrow-left').hasClass('disabled')){
                $('.arrow-left').removeClass('disabled');
            }
            if($('.arrow-right').hasClass('disabled')){
                //    go prize page
                Common.gotoPin(2);
            }
        });

        $('.flipbook-viewport .container').on('touchstart', function(){
            if(curSlideIndex==4){
                Common.gotoPin(2);
            }
        });

        myAudio.onpause = function(){
            isAudioPlay = false;
            $('.btn-play-audio .icon-audio').removeClass('play');
        };
//    $(".flipbook").bind("first", function(event) {
//        $('.arrow-left').addClass('disabled');
//    });
//    $(".flipbook").bind("last", function(event) {
//        $('.arrow-right').addClass('disabled');
//    });

        $(".flipbook").bind("turning", function(event, page, pageObject) {
            //console.log(page);
            curSlideIndex = page;
            myAudio.pause();
            switch(page) {
                case 1:
                    $('.arrow-left').addClass('disabled');
                    $('.arrow-right').removeClass('disabled');
                    $('.btn-play-audio').removeClass('hu');
                    break;
                case 2:
                    $('.arrow-left').removeClass('disabled');
                    $('.arrow-right').removeClass('disabled');
                    $('.btn-play-audio').addClass('hu');
                    break;
                case 3:
                    $('.arrow-left').removeClass('disabled');
                    $('.arrow-right').removeClass('disabled');
                    $('.btn-play-audio').removeClass('hu');
                    break;
                case 4:
                    //set timeout to click event
                    $('.btn-play-audio').addClass('hu');
                    var aaa = setTimeout(function(){
                        $('.arrow-left').removeClass('disabled');
                        $('.arrow-right').addClass('disabled');
                        clearTimeout(aaa);
                    },1000);
                    break;
                default:
                    $('.btn-play-audio').removeClass('hu');
                    //set timeout to click event
                    var aaa = setTimeout(function(){
                        $('.arrow-left').removeClass('disabled');
                        $('.arrow-right').addClass('disabled');
                        clearTimeout(aaa);
                    },1000);

            }
        });

        //play current audio
        var audioList = [
            'src/media/hwy.aac',
            'src/media/hlh.aac',
            'src/media/hyz.aac',
            'src/media/hmj.aac'
        ];

        $('.btn-play-audio').on('touchstart', function(){
            if(!isAudioPlay){
                isAudioPlay = true;
                var audioIndex = curSlideIndex - 1;
                myAudio.src = audioList[audioIndex];
                myAudio.load();
                myAudio.play();
                $('.btn-play-audio .icon-audio').addClass('play');
            }else{
                isAudioPlay = false;
                myAudio.pause();
            }

        });

    };

    controller.prototype.showLandingPage = function(page){
        Common.gotoPin(0);
        if(page == 1){
            $('.btn-luckydraw').text('即刻领取体验装');
            $('.limit-quantity').removeClass('hide');
        }else if(page == 2){
            $('.btn-luckydraw').text('即刻赢取礼赠');
            $('.limit-quantity').addClass('hide');
        }
    };
    /*
    * Countdown
    * Disabled click the button untill the end the countdown
    * */

    controller.prototype.countDown = function(){
        var self = this;
        self.disableClick = true;
        $('.btn-get-msg-code').addClass('disabled');
        var maxSeconds = 60;
        var ele = $('.btn-get-msg-code .second');
        var aaa = setInterval(function(){
            maxSeconds--;
            ele.text('('+maxSeconds+'s'+')');
            if(maxSeconds<1){
                self.disableClick = false;
                ele.text('');
                $('.btn-get-msg-code').removeClass('disabled');
                clearInterval(aaa);
            }
        },1000);
    };

    controller.prototype.getValidateCode = function(){
        Api.getImgValidateCode(function(data){
            //console.log(data);
            if(data.status==1){
                $('.validate-code-img').html('<img src="data:image/jpeg;base64,'+data.picture+'" />');
                //var codeImg = new Image();
                //codeImg.onload = function(){
                //
                //}
                //codeImg.src = data.picture;
            }
        });
    };

    controller.prototype.gotoFormPage = function(){
        var self = this;
        Common.gotoPin(4);
        self.getValidateCode();
    }

    //share success
    controller.prototype.shareSuccess = function(){
        var self = this;
        if(self.isTransformedOld){
            $('.share-popup').removeClass('show');
            if(self.user.isSubmit){
                self.callLotteryApi();
            }else{
                self.gotoFormPage();
            }
        }
    };

    //province city and district
    controller.prototype.showAllProvince = function(){
        var self = this;
        //    list all province
        var provinces = '';
        var provinceSelectEle = $('#select-province'),
            provinceInputEle = $('#input-text-province');
        region.forEach(function(item){
            provinces = provinces+'<option value="'+item.name+'">'+item.name+'</option>';
        });
        provinceSelectEle.html(provinces);
        provinceInputEle.val(provinceSelectEle.val());
        self.showCity(0);
        self.showDistrict(0,0);
    };

    controller.prototype.showCity = function(curProvinceId){
        var self = this;
        //    show current cities
        var cities='';
        var provinceSelectEle = $('#select-province'),
            provinceInputEle = $('#input-text-province'),
            citySelectEle = $('#select-city'),
            cityInputEle = $('#input-text-city');
        var cityJson = region[curProvinceId].city;
        cityJson.forEach(function(item,index){
            cities = cities + '<option data-id="'+index+'" value="'+item.name+'">'+item.name+'</option>';
        });
        citySelectEle.html(cities);
        provinceInputEle.val(provinceSelectEle.val());
        cityInputEle.val(citySelectEle.val());
        self.showDistrict(curProvinceId,0);
    };

    controller.prototype.showDistrict = function(curProvinceId,curCityId){
        var self = this;
        var districtSelectEle = $('#select-district'),
            districtInputEle = $('#input-text-district'),
            citySelectEle = $('#select-city'),
            cityInputEle = $('#input-text-city');
        //    show current districts
        var districts = '';
        var districtJson = region[curProvinceId].city[curCityId].area;
        districtJson.forEach(function(item,index){
            districts = districts + '<option data-id="'+index+'" value="'+item+'">'+item+'</option>';
        });
        cityInputEle.val(citySelectEle.val());
        districtSelectEle.html(districts);
        districtInputEle.val(districtSelectEle.val());
    };

    //validation the form
    controller.prototype.validateForm = function(){
        var self = this;
        var validate = true,
            inputName = document.getElementById('input-name'),
            inputMobile = document.getElementById('input-mobile'),
            inputAddress = document.getElementById('input-address'),
            selectProvince = document.getElementById('select-province'),
            selectCity = document.getElementById('select-city'),
            selectDistrict = document.getElementById('select-district');

        if(!inputName.value){
            Common.errorMsgBox.add('请填写姓名');
            validate = false;
        };

        if(!inputMobile.value){
            Common.errorMsgBox.add('手机号码不能为空');
            //Common.errorMsg.add(inputMobile.parentElement,'手机号码不能为空');
            validate = false;
        }else{
            var reg=/^1\d{10}$/;
            if(!(reg.test(inputMobile.value))){
                validate = false;
                Common.errorMsgBox.add('手机号格式错误，请重新输入');
                //Common.errorMsg.add(inputMobile.parentElement,'手机号格式错误，请重新输入');
            }else{
                //Common.errorMsg.remove(inputMobile.parentElement);
            }
        }

        if(!selectProvince.value || selectProvince.value == '省份'){
            //Common.errorMsg.add(selectProvince.parentElement,'请选择省份');
            Common.errorMsgBox.add('请选择省份');
            validate = false;
        }else{
            //Common.errorMsg.remove(selectProvince.parentElement);
        };

        if(!selectCity.value || selectCity.value == '城市' || !selectDistrict.value || selectDistrict.value == '区县' ){
            //Common.errorMsg.add(selectCity.parentElement.parentElement,'请选择城市和区县');
            Common.errorMsgBox.add('请选择城市和区县');
            validate = false;
        }else{
            //Common.errorMsg.remove(selectCity.parentElement);
        };

        if(!inputAddress.value){
            //Common.errorMsg.add(inputAddress.parentElement,'请填写地址');
            Common.errorMsgBox.add('请填写地址');
            validate = false;
        }else{
            //Common.errorMsg.remove(inputAddress.parentElement);
        };

        if(validate){
            return true;
        }
        return false;
    };


    $(document).ready(function(){
//    show form
        var newFollow = new controller();
        if(location.hash.indexOf('#page=')>-1){
            console.log('start');
            newFollow.startUp();
        }else{
            console.log('init');
            newFollow.init();
        }

    });

})();
console.log('wechat 专属');
