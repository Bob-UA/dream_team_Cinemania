const We=`
  .hero-text{
    max-height: 80px;
    max-width: 160px;
     -webkit-line-clamp: unset;
}

  .hero {
    background-image: linear-gradient(
        86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%
      ),
      url(../../../images/home-mobile-1x.jpg);
       background-size: cover;
  background-position: 0px;
  background-repeat: no-repeat;
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .hero {
      background-image: linear-gradient(
          86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%
        ),
        url(../../../images/home-mobile-2x.jpg);
    }
  }

@media screen and (min-width: 768px) {
  .hero-text{
    max-height: 64px;
    max-width: 357px;
}

.hero-text-container{
max-width: 357px;
}

  .hero {
    background-image: linear-gradient(
        81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%
      ),
      url(../../../images/home-tablet-1x.jpg);
      background-size: contain;
    background-position: 200px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .hero {
      background-image: linear-gradient(
          81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%
        ),
        url(/images/home-tablet-2x.jpg);
    }
  }
}
@media screen and (min-width: 1280px) {
  .hero-text{
    max-height: 76px;
    max-width: 455px;
}

.hero-text-container {
    max-width: 464px;
  }

  .hero {
    background-image: linear-gradient(
        83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%
      ),
      url(../../../images/home-desktop-1x.jpg);
      background-position: 200px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    .hero {
      background-image: linear-gradient(
          83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%
        ),
        url(../../../images/home-desktop-2x.jpg);
    }
  }
}`;function Oe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ge}=Object.prototype,{getPrototypeOf:se}=Object,z=(e=>t=>{const n=Ge.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>z(t)===e),J=e=>t=>typeof t===e,{isArray:L}=Array,k=J("undefined");function Ke(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=O("ArrayBuffer");function Ye(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Xe=J("string"),E=J("function"),Te=J("number"),V=e=>e!==null&&typeof e=="object",Qe=e=>e===!0||e===!1,U=e=>{if(z(e)!=="object")return!1;const t=se(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ze=O("Date"),et=O("File"),tt=O("Blob"),nt=O("FileList"),rt=e=>V(e)&&E(e.pipe),ot=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=z(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},st=O("URLSearchParams"),it=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function xe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Ne=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ce=e=>!k(e)&&e!==Ne;function te(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,o)=>{const i=e&&xe(t,o)||o;U(t[i])&&U(r)?t[i]=te(t[i],r):U(r)?t[i]=te({},r):L(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&_(arguments[r],n);return t}const at=(e,t,n,{allOwnKeys:r}={})=>(_(t,(o,i)=>{n&&E(o)?e[i]=Oe(o,n):e[i]=o},{allOwnKeys:r}),e),ct=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),lt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ut=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&se(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},dt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ft=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Te(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&se(Uint8Array)),mt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},ht=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},yt=O("HTMLFormElement"),bt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ue=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),gt=O("RegExp"),Le=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};_(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},wt=e=>{Le(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Et=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return L(e)?r(e):r(String(e).split(t)),n},St=()=>{},Rt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",de="0123456789",Pe={DIGIT:de,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+de},Ot=(e=16,t=Pe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function At(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Tt=e=>{const t=new Array(10),n=(r,o)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=L(r)?[]:{};return _(r,(s,l)=>{const d=n(s,o+1);!k(d)&&(i[l]=d)}),t[o]=void 0,i}}return r};return n(e,0)},xt=O("AsyncFunction"),Nt=e=>e&&(V(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:L,isArrayBuffer:Ae,isBuffer:Ke,isFormData:ot,isArrayBufferView:Ye,isString:Xe,isNumber:Te,isBoolean:Qe,isObject:V,isPlainObject:U,isUndefined:k,isDate:Ze,isFile:et,isBlob:tt,isRegExp:gt,isFunction:E,isStream:rt,isURLSearchParams:st,isTypedArray:pt,isFileList:nt,forEach:_,merge:te,extend:at,trim:it,stripBOM:ct,inherits:lt,toFlatObject:ut,kindOf:z,kindOfTest:O,endsWith:dt,toArray:ft,forEachEntry:mt,matchAll:ht,isHTMLForm:yt,hasOwnProperty:ue,hasOwnProp:ue,reduceDescriptors:Le,freezeMethods:wt,toObjectSet:Et,toCamelCase:bt,noop:St,toFiniteNumber:Rt,findKey:xe,global:Ne,isContextDefined:Ce,ALPHABET:Pe,generateString:Ot,isSpecCompliantForm:At,toJSONObject:Tt,isAsyncFn:xt,isThenable:Nt};function h(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ke=h.prototype,_e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_e[e]={value:e}});Object.defineProperties(h,_e);Object.defineProperty(ke,"isAxiosError",{value:!0});h.from=(e,t,n,r,o,i)=>{const s=Object.create(ke);return a.toFlatObject(e,s,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),h.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Ct=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Me(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function fe(e,t,n){return e?e.concat(t).map(function(o,i){return o=Me(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Lt(e){return a.isArray(e)&&!e.some(ne)}const Pt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,A){return!a.isUndefined(A[m])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,m,A){let S=f;if(f&&!A&&typeof f=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Lt(f)||(a.isFileList(f)||a.endsWith(m,"[]"))&&(S=a.toArray(f)))return m=Me(m),S.forEach(function(I,Ve){!(a.isUndefined(I)||I===null)&&t.append(s===!0?fe([m],Ve,i):s===null?m:m+"[]",c(I))}),!1}return ne(f)?!0:(t.append(fe(A,m,i),c(f)),!1)}const p=[],b=Object.assign(Pt,{defaultVisitor:u,convertValue:c,isVisitable:ne});function y(f,m){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(f),a.forEach(f,function(S,N){(!(a.isUndefined(S)||S===null)&&o.call(t,S,a.isString(N)?N.trim():N,m,b))===!0&&y(S,m?m.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&W(e,this,t)}const Be=ie.prototype;Be.append=function(t,n){this._pairs.push([t,n])};Be.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ve(e,t,n){if(!t)return e;const r=n&&n.encode||kt,o=n&&n.serialize;let i;if(o?i=o(t,n):i=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class _t{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=_t,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mt=typeof URLSearchParams<"u"?URLSearchParams:ie,Bt=typeof FormData<"u"?FormData:null,vt=typeof Blob<"u"?Blob:null,Dt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ft=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:Mt,FormData:Bt,Blob:vt},isStandardBrowserEnv:Dt,isStandardBrowserWebWorkerEnv:Ft,protocols:["http","https","file","blob","url","data"]};function It(e,t){return W(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jt(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Fe(e){function t(n,r,o,i){let s=n[i++];const l=Number.isFinite(+s),d=i>=n.length;return s=!s&&a.isArray(o)?o.length:s,d?(a.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!a.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&a.isArray(o[s])&&(o[s]=jt(o[s])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Ut(r),o,n,0)}),n}return null}const $t={"Content-Type":void 0};function Ht(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const G={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Fe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return It(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return W(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Ht(t)):t}],transformResponse:[function(t){const n=this.transitional||G.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?h.from(l,h.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){G.headers[t]={}});a.forEach(["post","put","patch"],function(t){G.headers[t]=a.merge($t)});const ae=G,qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},he=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function Jt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Vt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function X(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Wt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Gt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,d,c){const u=P(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||d]=j(l))}const s=(l,d)=>a.forEach(l,(c,u)=>i(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?s(t,n):a.isString(t)&&(t=t.trim())&&!Vt(t)?s(zt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=P(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Jt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||X(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=P(s),s){const l=a.findKey(r,s);l&&(!n||X(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||X(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,i)=>{const s=a.findKey(r,i);if(s){n[s]=j(o),delete n[i];return}const l=t?Wt(i):String(i).trim();l!==i&&delete n[i],n[l]=j(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[he]=this[he]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=P(s);r[l]||(Gt(o,s),r[l]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(K.prototype);a.freezeMethods(K);const T=K;function Q(e,t){const n=this||ae,r=t||n,o=T.from(r.headers);let i=r.data;return a.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Ie(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,h,{__CANCEL__:!0});function Kt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Yt=R.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,s,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(s)&&d.push("domain="+s),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Xt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Qt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ue(e,t){return e&&!Xt(t)?Qt(e,t):t}const Zt=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=a.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function en(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[i];s||(s=c),n[o]=d,r[o]=c;let p=i,b=0;for(;p!==o;)b+=n[p++],p=p%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-s<t)return;const y=u&&c-u;return y?Math.round(b*1e3/y):void 0}}function ye(e,t){let n=0;const r=tn(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,l=i-n,d=r(l),c=i<=s;n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:l,rate:d||void 0,estimated:d&&s&&c?(s-i)/d:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const nn=typeof XMLHttpRequest<"u",rn=nn&&function(e){return new Promise(function(n,r){let o=e.data;const i=T.from(e.headers).normalize(),s=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}const u=Ue(e.baseURL,e.url);c.open(e.method.toUpperCase(),ve(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Kt(function(S){n(S),d()},function(S){r(S),d()},m),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||De;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new h(f,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},R.isStandardBrowserEnv){const y=(e.withCredentials||Zt(u))&&e.xsrfCookieName&&Yt.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(f,m){c.setRequestHeader(m,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new M(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const b=en(u);if(b&&R.protocols.indexOf(b)===-1){r(new h("Unsupported protocol "+b+":",h.ERR_BAD_REQUEST,e));return}c.send(o||null)})},$={http:Ct,xhr:rn};a.forEach($,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const on={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?$[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new h(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp($,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:$};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function be(e){return Z(e),e.headers=T.from(e.headers),e.data=Q.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),on.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return Z(e),r.data=Q.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return Ie(r)||(Z(e),r&&r.response&&(r.response.data=Q.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const ge=e=>e instanceof T?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function i(c,u){if(!a.isUndefined(u))return r(void 0,u)}function s(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(c,u)=>o(ge(c),ge(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||o,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==l||(n[u]=b)}),n}const je="1.4.0",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const we={};ce.transitional=function(t,n,r){function o(i,s){return"[Axios v"+je+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new h(o(s," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!we[s]&&(we[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function sn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],d=l===void 0||s(l,i,e);if(d!==!0)throw new h("option "+i+" must be "+d,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+i,h.ERR_BAD_OPTION)}}const re={assertOptions:sn,validators:ce},x=re.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:re.assertOptions(o,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=i&&a.merge(i.common,i[n.method]),s&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=T.concat(s,i);const l=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let u,p=0,b;if(!d){const f=[be.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),b=f.length,u=Promise.resolve(n);p<b;)u=u.then(f[p++],f[p++]);return u}b=l.length;let y=n;for(p=0;p<b;){const f=l[p++],m=l[p++];try{y=f(y)}catch(A){m.call(this,A);break}}try{u=be.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,b=c.length;p<b;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=C(this.defaults,t);const n=Ue(t.baseURL,t.url);return ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(C(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const H=q;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new M(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(o){t=o}),cancel:t}}}const an=le;function cn(e){return function(n){return e.apply(null,n)}}function ln(e){return a.isObject(e)&&e.isAxiosError===!0}const oe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oe).forEach(([e,t])=>{oe[t]=e});const un=oe;function $e(e){const t=new H(e),n=Oe(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return $e(C(e,o))},n}const g=$e(ae);g.Axios=H;g.CanceledError=M;g.CancelToken=an;g.isCancel=Ie;g.VERSION=je;g.toFormData=W;g.AxiosError=h;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=cn;g.isAxiosError=ln;g.mergeConfig=C;g.AxiosHeaders=T;g.formToJSON=e=>Fe(a.isHTMLForm(e)?new FormData(e):e);g.HttpStatusCode=un;g.default=g;const B=g,v="9d709850c7590845ffb60644b29d6f51",D="https://api.themoviedb.org/3/",dn="trending/movie/",fn="search/movie",He="movie/",pn="genre/movie/list";async function mn(e="week",t=1){try{return await B(`${D}${dn}${e}?api_key=${v}`,{params:{page:t}})}catch(n){F(n)}}async function _n(e="",t=1,n=""){try{return await B(`${D}${fn}?api_key=${v}`,{params:{page:t,query:e,year:n}})}catch(r){F(r)}}async function hn(e){try{return await B(`${D}${He}${e}?api_key=${v}`,{params:{}})}catch(t){F(t)}}async function yn(e){try{return await B(`${D}${He}${e}/videos?api_key=${v}`,{params:{}})}catch(t){F(t)}}async function Mn(){try{return await B(`${D}${pn}?api_key=${v}`,{params:{}})}catch(e){F(e)}}function F(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}const bn="https://image.tmdb.org/t/p/original";async function gn(e){const{poster_path:t,title:n,vote_average:r,vote_count:o,popularity:i,genres:s,overview:l}=e,d=bn+t,c=s.map(y=>y.name).join(" "),u=Math.round10(r,-1),p=Math.round10(o,-1),b=Math.round10(i,-1);return`<div class="modal-img-wrap">
            <img class="modal-video-img" src="${d}" alt="${n}" />
          </div>
          <div class="modal-about-movie-container">
            <h2 class="modal-card-title">${n}</h2>
            <ul class="modal-info-movie-list">
              <li class="modal-info-movie-item">
                <p class="modal-card-subtitle">Vote / Votes</p>
                <div class="modal-rating-wraper">
                  <p class="modal-rating">${u}</p>
                  <p class="modal-slesh">/</p>
                  <p class="modal-rating">${p}</p>
                </div>
              </li>
              <li class="modal-info-movie-item">
                <p class="modal-card-subtitle">Popularity</p>
                <p class="modal-info-data-item">${b}</p>
              </li>
              <li class="modal-info-movie-item">
                <p class="modal-card-subtitle">Genre</p>
                <p class="modal-info-data-item  genres">${c}</p>
              </li>
            </ul>
            <p class="modal-about-subtitle">About</p>
            <p class="modal-item-description">
              ${l}
            </p>

            <button class="modal-my-library-btn add-btn" type="button">
              <span class="modal-btn-title">Add to my library</span>
            </button>

            <button class="modal-my-library-btn remove-btn hide" type="button">
                <span class="modal-btn-title">Remove from my library</span>
            </button>
          </div>`}function wn(e,t,n){return typeof n>"u"||+n==0?Math[e](t):(t=+t,n=+n,isNaN(t)||!(typeof n=="number"&&n%1===0)?NaN:(t=t.toString().split("e"),t=Math[e](+(t[0]+"e"+(t[1]?+t[1]-n:-n))),t=t.toString().split("e"),+(t[0]+"e"+(t[1]?+t[1]+n:n))))}Math.round10||(Math.round10=function(e,t){return wn("round",e,t)});const w={gallaryContainer:document.querySelector(".gallery-movies"),modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector(".data-modal-close"),movieInfoContainer:document.querySelector(".modal-movie-info_container"),detailsBtnModal:document.querySelector(".js-details-btn"),backdropMovieInfoContainer:document.querySelector(".backdrop-movie-info"),backdropMovieInfoDetailsCatalog:document.querySelector(".backdrop-movie-info")},En="https://image.tmdb.org/t/p/original/",Ee=document.querySelector(".hero-container"),Sn=document.querySelector(".player_container"),ee="MY_LIBRARY";function Se(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}async function Rn(){try{const t=await(await mn("day")).data.results,n=Se(0,t.length-1);if(t[n]){const r=await yn(t[n].id),o=Se(0,r.data.results.length-1);Sn.innerHTML=On(r.data.results[o].key),Ee.innerHTML=An(t[n])}else{Ee.innerHTML=Tn();const r=document.createElement("style");r.innerHTML=We,document.head.appendChild(r)}}catch(e){console.error(e)}}function On(e){return`<iframe class="iframe_video_player" src="https://www.youtube.com/embed/${e}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}const An=({backdrop_path:e,title:t,vote_average:n,overview:r,id:o})=>` <div class="hero-content"><div class="hero-text-container">
    <h1 class="title hero-title">${t}</h1>
    <p class="hero-stars">${n}</p>
      <p class="text hero-text">
        ${r}
      </p>
    </div>
      <ul class="btn-list">
        <li>
          <a href=""><button class="btn">Watch trailer</button></a>
        </li>
         <li>
         <button class="btn-details js-details-btn" data-id="${o}">More details</button>
        </li>
      </ul></div>
      <div class="img-container"><img class="hero-img" src="${En}${e}" alt="${t}"></div>
      `,Tn=()=>`<div class="hero-text-container">
<h1 class="title hero-title">Let’s Make Your Own Cinema</h1>
      <p class="text hero-text">
        Is a guide to creating a personalized movie theater experience. You'll
        need a projector, screen, and speakers. <span class="mobile-hidden"> Decorate your space, choose your
        films, and stock up on snacks for the full experience.</span>
      </p>
      </div>
      <ul class="btn-list">
        <li>
          <a href="../../catalog.html"><button class="btn">Get Started</button></a>
        </li>
      </ul>`;await Rn();const xn=document.querySelector(".js-details-btn");xn.addEventListener("click",Nn);function qe(e){e.currentTarget===e.target&&(w.backdropMovieInfoContainer.classList.add("is-hidden"),w.movieInfoContainer.innerHTML="",w.backdropMovieInfoContainer.removeEventListener("click",qe))}function ze(e){const t="Escape";e.code==t&&(w.backdropMovieInfoContainer.classList.add("is-hidden"),w.movieInfoContainer.innerHTML="",window.removeEventListener("keydown",ze))}async function Nn(e){if(!e.target.classList.contains("js-details-btn"))return;w.backdropMovieInfoContainer.addEventListener("click",qe),window.addEventListener("keydown",ze),w.closeModalBtn.addEventListener("click",Je);const n=+e.target.dataset.id,{data:r}=await kn(n),o=r,i=await gn(o);w.movieInfoContainer.insertAdjacentHTML("beforeend",i),w.modal.classList.toggle("is-hidden");const s={addBtn:document.querySelector(".add-btn"),removeBtm:document.querySelector(".remove-btn")},l=Cn(ee);l&&l.map(d=>{if(d.id===n){s.addBtn.classList.add("hide"),s.removeBtm.classList.remove("hide");return}}),s.addBtn.addEventListener("click",()=>{let d="";if(l){const p=JSON.stringify(l);d=Ln(p)}const c=JSON.stringify(o),u=Pn(c,d);s.addBtn.classList.toggle("hide"),s.removeBtm.classList.toggle("hide"),Re(ee,u)}),s.removeBtm.addEventListener("click",()=>{s.addBtn.classList.toggle("hide"),s.removeBtm.classList.toggle("hide");const d=l.map(c=>{if(c.id!==n)return c}).filter(c=>{if(c)return c});Re(ee,d)})}function Cn(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}}function Re(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(n){console.error("Set state error: ",n.message)}}function Ln(e){return e.slice(1,e.length-1)}function Pn(e,t){return JSON.parse(t?`[${t}, ${e}]`:`[${e}]`)}function Je(){w.modal.classList.toggle("is-hidden"),w.movieInfoContainer.innerHTML="",w.closeModalBtn.removeEventListener("click",Je)}async function kn(e){return await hn(e)}й;export{_n as a,Mn as b,gn as c,hn as d,B as e,mn as g,w as r};
