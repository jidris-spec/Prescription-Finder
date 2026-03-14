import{r as U,a as am,b as cm}from"./react-BOXoAlrN.js";import{u as Qn,P as on,R as lm,a as um,O as hm,C as dm}from"./ui-vendor-CCc9uJhd.js";var Ao={exports:{}},Ro={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl;function fm(){return bl||(bl=1,(function(n){function e(x,z){var k=x.length;x.push(z);e:for(;0<k;){var te=k-1>>>1,he=x[te];if(0<s(he,z))x[te]=z,x[k]=he,k=te;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var z=x[0],k=x.pop();if(k!==z){x[0]=k;e:for(var te=0,he=x.length,He=he>>>1;te<He;){var N=2*(te+1)-1,W=x[N],Y=N+1,K=x[Y];if(0>s(W,k))Y<he&&0>s(K,W)?(x[te]=K,x[Y]=k,te=Y):(x[te]=W,x[N]=k,te=N);else if(Y<he&&0>s(K,k))x[te]=K,x[Y]=k,te=Y;else break e}}return z}function s(x,z){var k=x.sortIndex-z.sortIndex;return k!==0?k:x.id-z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var a=Date,c=a.now();n.unstable_now=function(){return a.now()-c}}var u=[],h=[],f=1,p=null,m=3,E=!1,R=!1,P=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function q(x){for(var z=t(h);z!==null;){if(z.callback===null)r(h);else if(z.startTime<=x)r(h),z.sortIndex=z.expirationTime,e(u,z);else break;z=t(h)}}function Q(x){if(P=!1,q(x),!R)if(t(u)!==null)R=!0,M||(M=!0,b());else{var z=t(h);z!==null&&ue(Q,z.startTime-x)}}var M=!1,w=-1,_=5,v=-1;function I(){return S?!0:!(n.unstable_now()-v<_)}function T(){if(S=!1,M){var x=n.unstable_now();v=x;var z=!0;try{e:{R=!1,P&&(P=!1,F(w),w=-1),E=!0;var k=m;try{t:{for(q(x),p=t(u);p!==null&&!(p.expirationTime>x&&I());){var te=p.callback;if(typeof te=="function"){p.callback=null,m=p.priorityLevel;var he=te(p.expirationTime<=x);if(x=n.unstable_now(),typeof he=="function"){p.callback=he,q(x),z=!0;break t}p===t(u)&&r(u),q(x)}else r(u);p=t(u)}if(p!==null)z=!0;else{var He=t(h);He!==null&&ue(Q,He.startTime-x),z=!1}}break e}finally{p=null,m=k,E=!1}z=void 0}}finally{z?b():M=!1}}}var b;if(typeof B=="function")b=function(){B(T)};else if(typeof MessageChannel<"u"){var y=new MessageChannel,ee=y.port2;y.port1.onmessage=T,b=function(){ee.postMessage(null)}}else b=function(){O(T,0)};function ue(x,z){w=O(function(){x(n.unstable_now())},z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(x){x.callback=null},n.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<x?Math.floor(1e3/x):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_next=function(x){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var k=m;m=z;try{return x()}finally{m=k}},n.unstable_requestPaint=function(){S=!0},n.unstable_runWithPriority=function(x,z){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var k=m;m=x;try{return z()}finally{m=k}},n.unstable_scheduleCallback=function(x,z,k){var te=n.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?te+k:te):k=te,x){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=k+he,x={id:f++,callback:z,priorityLevel:x,startTime:k,expirationTime:he,sortIndex:-1},k>te?(x.sortIndex=k,e(h,x),t(u)===null&&x===t(h)&&(P?(F(w),w=-1):P=!0,ue(Q,k-te))):(x.sortIndex=he,e(u,x),R||E||(R=!0,M||(M=!0,b()))),x},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(x){var z=m;return function(){var k=m;m=z;try{return x.apply(this,arguments)}finally{m=k}}}})(Ro)),Ro}var Al;function nA(){return Al||(Al=1,Ao.exports=fm()),Ao.exports}const pm=()=>{};var Rl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},mm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,E=h&63;u||(E=64,a||(m=64)),r.push(t[f],t[p],t[m],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ah(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new gm;const m=i<<2|c>>4;if(r.push(m),h!==64){const E=c<<4&240|h>>2;if(r.push(E),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _m=function(n){const e=Ah(n);return Rh.encodeByteArray(e,!0)},ci=function(n){return _m(n).replace(/\./g,"")},Sh=function(n){try{return Rh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=()=>ym().__FIREBASE_DEFAULTS__,wm=()=>{if(typeof process>"u"||typeof Rl>"u")return;const n=Rl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Em=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sh(n[1]);return e&&JSON.parse(e)},Vi=()=>{try{return pm()||vm()||wm()||Em()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ch=n=>Vi()?.emulatorHosts?.[n],Tm=n=>{const e=Ch(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ph=()=>Vi()?.config,kh=n=>Vi()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ci(JSON.stringify(t)),ci(JSON.stringify(a)),""].join(".")}const Qr={};function Am(){const n={prod:[],emulator:[]};for(const e of Object.keys(Qr))Qr[e]?n.emulator.push(e):n.prod.push(e);return n}function Rm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Sl=!1;function Dh(n,e){if(typeof window>"u"||typeof document>"u"||!hr(window.location.host)||Qr[n]===e||Qr[n]||Sl)return;Qr[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Am().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,E){m.setAttribute("width","24"),m.setAttribute("id",E),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Sl=!0,a()},m}function f(m,E){m.setAttribute("id",E),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Rm(r),E=t("text"),R=document.getElementById(E)||document.createElement("span"),P=t("learnmore"),S=document.getElementById(P)||document.createElement("a"),O=t("preprendIcon"),F=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;c(B),f(S,P);const q=h();u(F,O),B.append(F,R,S,q),document.body.appendChild(B)}i?(R.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Cm(){const n=Vi()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function km(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dm(){const n=Be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xm(){return!Cm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nm(){try{return typeof indexedDB=="object"}catch{return!1}}function Om(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="FirebaseError";class Dt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mm,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Lm(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Dt(s,c,r)}}function Lm(n,e){return n.replace(Fm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Fm=/\{\$([^}]+)}/g;function Um(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Cl(i)&&Cl(a)){if(!Tn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Cl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $r(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Bm(n,e){const t=new jm(n,e);return t.subscribe.bind(t)}class jm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");qm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=So),s.error===void 0&&(s.error=So),s.complete===void 0&&(s.complete=So);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function So(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n){return n&&n._delegate?n._delegate:n}class In{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Im;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wm(e))try{this.getOrInitializeService({instanceIdentifier:_n})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_n){return this.instances.has(e)}getOptions(e=_n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_n){return this.component?this.component.multipleInstances?e:_n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zm(n){return n===_n?void 0:n}function Wm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $m(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const Gm={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Km=ae.INFO,Qm={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Ym=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Qm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ca{constructor(e){this.name=e,this._logLevel=Km,this._logHandler=Ym,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Jm=(n,e)=>e.some(t=>n instanceof t);let Pl,kl;function Xm(){return Pl||(Pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zm(){return kl||(kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xh=new WeakMap,Yo=new WeakMap,Nh=new WeakMap,Co=new WeakMap,Pa=new WeakMap;function eg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Gt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&xh.set(t,n)}).catch(()=>{}),Pa.set(e,n),e}function tg(n){if(Yo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Yo.set(n,e)}let Jo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ng(n){Jo=n(Jo)}function rg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Po(this),e,...t);return Nh.set(r,e.sort?e.sort():[e]),Gt(r)}:Zm().includes(n)?function(...e){return n.apply(Po(this),e),Gt(xh.get(this))}:function(...e){return Gt(n.apply(Po(this),e))}}function sg(n){return typeof n=="function"?rg(n):(n instanceof IDBTransaction&&tg(n),Jm(n,Xm())?new Proxy(n,Jo):n)}function Gt(n){if(n instanceof IDBRequest)return eg(n);if(Co.has(n))return Co.get(n);const e=sg(n);return e!==n&&(Co.set(n,e),Pa.set(e,n)),e}const Po=n=>Pa.get(n);function ig(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Gt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Gt(a.result),u.oldVersion,u.newVersion,Gt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const og=["get","getKey","getAll","getAllKeys","count"],ag=["put","add","delete","clear"],ko=new Map;function Vl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ko.get(e))return ko.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ag.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||og.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return ko.set(e,i),i}ng(n=>({...n,get:(e,t,r)=>Vl(e,t)||n.get(e,t,r),has:(e,t)=>!!Vl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lg(n){return n.getComponent()?.type==="VERSION"}const Xo="@firebase/app",Dl="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Ca("@firebase/app"),ug="@firebase/app-compat",hg="@firebase/analytics-compat",dg="@firebase/analytics",fg="@firebase/app-check-compat",pg="@firebase/app-check",mg="@firebase/auth",gg="@firebase/auth-compat",_g="@firebase/database",yg="@firebase/data-connect",vg="@firebase/database-compat",wg="@firebase/functions",Eg="@firebase/functions-compat",Tg="@firebase/installations",Ig="@firebase/installations-compat",bg="@firebase/messaging",Ag="@firebase/messaging-compat",Rg="@firebase/performance",Sg="@firebase/performance-compat",Cg="@firebase/remote-config",Pg="@firebase/remote-config-compat",kg="@firebase/storage",Vg="@firebase/storage-compat",Dg="@firebase/firestore",xg="@firebase/ai",Ng="@firebase/firestore-compat",Og="firebase",Mg="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="[DEFAULT]",Lg={[Xo]:"fire-core",[ug]:"fire-core-compat",[dg]:"fire-analytics",[hg]:"fire-analytics-compat",[pg]:"fire-app-check",[fg]:"fire-app-check-compat",[mg]:"fire-auth",[gg]:"fire-auth-compat",[_g]:"fire-rtdb",[yg]:"fire-data-connect",[vg]:"fire-rtdb-compat",[wg]:"fire-fn",[Eg]:"fire-fn-compat",[Tg]:"fire-iid",[Ig]:"fire-iid-compat",[bg]:"fire-fcm",[Ag]:"fire-fcm-compat",[Rg]:"fire-perf",[Sg]:"fire-perf-compat",[Cg]:"fire-rc",[Pg]:"fire-rc-compat",[kg]:"fire-gcs",[Vg]:"fire-gcs-compat",[Dg]:"fire-fst",[Ng]:"fire-fst-compat",[xg]:"fire-vertex","fire-js":"fire-js",[Og]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Map,Fg=new Map,ea=new Map;function xl(n,e){try{n.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rr(n){const e=n.name;if(ea.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;ea.set(e,n);for(const t of ts.values())xl(t,n);for(const t of Fg.values())xl(t,n);return!0}function ka(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new ps("app","Firebase",Ug);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=Mg;function jg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Zo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(t||(t=Ph()),!t)throw Kt.create("no-options");const i=ts.get(s);if(i){if(Tn(t,i.options)&&Tn(r,i.config))return i;throw Kt.create("duplicate-app",{appName:s})}const a=new Hm(s);for(const u of ea.values())a.addComponent(u);const c=new Bg(t,r,a);return ts.set(s,c),c}function Oh(n=Zo){const e=ts.get(n);if(!e&&n===Zo&&Ph())return jg();if(!e)throw Kt.create("no-app",{appName:n});return e}function rA(){return Array.from(ts.values())}function wn(n,e,t){let r=Lg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(a.join(" "));return}rr(new In(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="firebase-heartbeat-database",$g=1,ns="firebase-heartbeat-store";let Vo=null;function Mh(){return Vo||(Vo=ig(qg,$g,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ns)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),Vo}async function zg(n){try{const t=(await Mh()).transaction(ns),r=await t.objectStore(ns).get(Lh(n));return await t.done,r}catch(e){if(e instanceof Dt)Rt.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e?.message});Rt.warn(t.message)}}}async function Nl(n,e){try{const r=(await Mh()).transaction(ns,"readwrite");await r.objectStore(ns).put(e,Lh(n)),await r.done}catch(t){if(t instanceof Dt)Rt.warn(t.message);else{const r=Kt.create("idb-set",{originalErrorMessage:t?.message});Rt.warn(r.message)}}}function Lh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=1024,Hg=30;class Gg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ol();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Hg){const s=Yg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Rt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ol(),{heartbeatsToSend:t,unsentEntries:r}=Kg(this._heartbeatsCache.heartbeats),s=ci(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Rt.warn(e),""}}}function Ol(){return new Date().toISOString().substring(0,10)}function Kg(n,e=Wg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ml(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ml(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Qg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nm()?Om().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Nl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Nl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ml(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}function Yg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n){rr(new In("platform-logger",e=>new cg(e),"PRIVATE")),rr(new In("heartbeat",e=>new Gg(e),"PRIVATE")),wn(Xo,Dl,n),wn(Xo,Dl,"esm2020"),wn("fire-js","")}Jg("");function Fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xg=Fh,Uh=new ps("auth","Firebase",Fh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Ca("@firebase/auth");function Zg(n,...e){li.logLevel<=ae.WARN&&li.warn(`Auth (${dr}): ${n}`,...e)}function Js(n,...e){li.logLevel<=ae.ERROR&&li.error(`Auth (${dr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n,...e){throw Va(n,...e)}function dt(n,...e){return Va(n,...e)}function Bh(n,e,t){const r={...Xg(),[e]:t};return new ps("auth","Firebase",r).create(e,{appName:n.name})}function ft(n){return Bh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Va(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Uh.create(n,...e)}function X(n,e,...t){if(!n)throw Va(e,...t)}function It(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Js(e),new Error(e)}function St(n,e){n||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){return typeof self<"u"&&self.location?.href||""}function e_(){return Ll()==="http:"||Ll()==="https:"}function Ll(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e_()||km()||"connection"in navigator)?navigator.onLine:!0}function n_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,St(t>e,"Short delay should be less than long delay!"),this.isMobile=Sm()||Vm()}get(){return t_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n,e){St(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],i_=new gs(3e4,6e4);function an(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function xt(n,e,t,r,s={}){return qh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ms({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return Pm()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&hr(n.emulatorConfig.host)&&(h.credentials="include"),jh.fetch()(await $h(n,n.config.apiHost,t,c),h)})}async function qh(n,e,t){n._canInitEmulator=!1;const r={...r_,...e};try{const s=new a_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Bs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Bs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Bs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Bh(n,f,h);rt(n,f)}}catch(s){if(s instanceof Dt)throw s;rt(n,"network-request-failed",{message:String(s)})}}async function _s(n,e,t,r,s={}){const i=await xt(n,e,t,r,s);return"mfaPendingCredential"in i&&rt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function $h(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Da(n.config,s):`${n.config.apiScheme}://${s}`;return s_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function o_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class a_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),i_.get())})}}function Bs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=dt(n,e,r);return s.customData._tokenResponse=t,s}function Fl(n){return n!==void 0&&n.enterprise!==void 0}class c_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return o_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function l_(n,e){return xt(n,"GET","/v2/recaptchaConfig",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function ui(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function h_(n,e=!1){const t=ke(n),r=await t.getIdToken(e),s=xa(r);X(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Yr(Do(s.auth_time)),issuedAtTime:Yr(Do(s.iat)),expirationTime:Yr(Do(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Do(n){return Number(n)*1e3}function xa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Js("JWT malformed, contained fewer than 3 sections"),null;try{const s=Sh(t);return s?JSON.parse(s):(Js("Failed to decode base64 JWT payload"),null)}catch(s){return Js("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ul(n){const e=xa(n);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Dt&&d_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function d_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yr(this.lastLoginAt),this.creationTime=Yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(n){const e=n.auth,t=await n.getIdToken(),r=await sr(n,ui(e,{idToken:t}));X(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?zh(s.providerUserInfo):[],a=m_(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new na(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function p_(n){const e=ke(n);await hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function m_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(n,e){const t=await qh(n,{},async()=>{const r=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await $h(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&hr(n.emulatorConfig.host)&&(u.credentials="include"),jh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function __(n,e){return xt(n,"POST","/v2/accounts:revokeToken",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=Ul(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await g_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Yn;return r&&(X(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n,e){X(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new f_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new na(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await sr(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return h_(this,e)}reload(){return p_(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await hi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(ft(this.auth));const e=await this.getIdToken();return await sr(this,u_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:E,providerData:R,stsTokenManager:P}=t;X(p&&P,e,"internal-error");const S=Yn.fromJSON(this.name,P);X(typeof p=="string",e,"internal-error"),Bt(r,e.name),Bt(s,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof E=="boolean",e,"internal-error"),Bt(i,e.name),Bt(a,e.name),Bt(c,e.name),Bt(u,e.name),Bt(h,e.name),Bt(f,e.name);const O=new tt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:E,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:S,createdAt:h,lastLoginAt:f});return R&&Array.isArray(R)&&(O.providerData=R.map(F=>({...F}))),u&&(O._redirectEventId=u),O}static async _fromIdTokenResponse(e,t,r=!1){const s=new Yn;s.updateFromServerResponse(t);const i=new tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new Yn;c.updateFromIdToken(r);const u=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new na(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map;function bt(n){St(n instanceof Function,"Expected a class definition");let e=Bl.get(n);return e?(St(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Bl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wh.type="NONE";const jl=Wh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n,e,t){return`firebase:${n}:${e}:${t}`}class Jn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ui(this.auth,{idToken:e}).catch(()=>{});return t?tt._fromGetAccountInfoResponse(this.auth,t,e):null}return tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Jn(bt(jl),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bt(jl);const a=Xs(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const m=await ui(e,{idToken:f}).catch(()=>{});if(!m)break;p=await tt._fromGetAccountInfoResponse(e,m,f)}else p=tt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Jn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jh(e))return"Blackberry";if(Xh(e))return"Webos";if(Gh(e))return"Safari";if((e.includes("chrome/")||Kh(e))&&!e.includes("edge/"))return"Chrome";if(Yh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Hh(n=Be()){return/firefox\//i.test(n)}function Gh(n=Be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kh(n=Be()){return/crios\//i.test(n)}function Qh(n=Be()){return/iemobile/i.test(n)}function Yh(n=Be()){return/android/i.test(n)}function Jh(n=Be()){return/blackberry/i.test(n)}function Xh(n=Be()){return/webos/i.test(n)}function Na(n=Be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function y_(n=Be()){return Na(n)&&!!window.navigator?.standalone}function v_(){return Dm()&&document.documentMode===10}function Zh(n=Be()){return Na(n)||Yh(n)||Xh(n)||Jh(n)||/windows phone/i.test(n)||Qh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n,e=[]){let t;switch(n){case"Browser":t=ql(Be());break;case"Worker":t=`${ql(Be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(n,e={}){return xt(n,"GET","/v2/passwordPolicy",an(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=6;class I_{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??T_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.beforeStateQueue=new w_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Jn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ui(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Qe(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(ft(this));const t=e?ke(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await E_(this),t=new I_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await __(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bt(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ed(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Zg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function xn(n){return ke(n)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bm(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A_(n){Di=n}function td(n){return Di.loadJS(n)}function R_(){return Di.recaptchaEnterpriseScript}function S_(){return Di.gapiScript}function C_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class P_{constructor(){this.enterprise=new k_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class k_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const V_="recaptcha-enterprise",nd="NO_RECAPTCHA";class D_{constructor(e){this.type=V_,this.auth=xn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{l_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new c_(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Fl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(nd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new P_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Fl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=R_();u.length!==0&&(u+=c),td(u).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function zl(n,e,t,r=!1,s=!1){const i=new D_(n);let a;if(s)a=nd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ra(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await zl(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await zl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n,e){const t=ka(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Tn(i,e??{}))return s;rt(s,"already-initialized")}return t.initialize({options:e})}function N_(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(bt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function O_(n,e,t){const r=xn(n);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rd(e),{host:a,port:c}=M_(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Tn(h,r.config.emulator)&&Tn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,hr(a)?(Vh(`${i}//${a}${u}`),Dh("Auth",!0)):L_()}function rd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function M_(n){const e=rd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Wl(a)}}}function Wl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function L_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,t){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function F_(n,e){return xt(n,"POST","/v1/accounts:update",e)}async function U_(n,e){return xt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(n,e){return _s(n,"POST","/v1/accounts:signInWithPassword",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n,e){return _s(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}async function q_(n,e){return _s(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Oa{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new rs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new rs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,t,"signInWithPassword",B_);case"emailLink":return j_(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,r,"signUpPassword",U_);case"emailLink":return q_(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(n,e){return _s(n,"POST","/v1/accounts:signInWithIdp",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="http://localhost";class bn extends Oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new bn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xn(e,t)}buildRequest(){const e={requestUri:$_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ms(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function W_(n){const e=$r(zr(n)).link,t=e?$r(zr(e)).deep_link_id:null,r=$r(zr(n)).deep_link_id;return(r?$r(zr(r)).link:null)||r||t||e||n}class Ma{constructor(e){const t=$r(zr(e)),r=t.apiKey??null,s=t.oobCode??null,i=z_(t.mode??null);X(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=W_(e);try{return new Ma(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.providerId=fr.PROVIDER_ID}static credential(e,t){return rs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ma.parseLink(t);return X(r,"argument-error"),rs._fromEmailAndCode(e,r.code,r.tenantId)}}fr.PROVIDER_ID="password";fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends sd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ys{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $t.credential(t,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends ys{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends ys{constructor(){super("twitter.com")}static credential(e,t){return bn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wt.credential(t,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(n,e){return _s(n,"POST","/v1/accounts:signUp",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),a=Hl(r);return new An({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Hl(r);return new An({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Hl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Dt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,di.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new di(e,t,r,s)}}function id(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?di._fromErrorAndOperation(n,i,e,r):i})}async function G_(n,e,t=!1){const r=await sr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return An._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(n,e,t=!1){const{auth:r}=n;if(Qe(r.app))return Promise.reject(ft(r));const s="reauthenticate";try{const i=await sr(n,id(r,s,e,n),t);X(i.idToken,r,"internal-error");const a=xa(i.idToken);X(a,r,"internal-error");const{sub:c}=a;return X(n.uid===c,r,"user-mismatch"),An._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&rt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(n,e,t=!1){if(Qe(n.app))return Promise.reject(ft(n));const r="signIn",s=await id(n,r,e),i=await An._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Q_(n,e){return od(xn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(n){const e=xn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sA(n,e,t){if(Qe(n.app))return Promise.reject(ft(n));const r=xn(n),a=await ra(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",H_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ad(n),u}),c=await An._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function iA(n,e,t){return Qe(n.app)?Promise.reject(ft(n)):Q_(ke(n),fr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ad(n),r})}function oA(n,e){const t=ke(n);return Qe(t.auth.app)?Promise.reject(ft(t.auth)):Y_(t,e)}async function Y_(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e);const a=await sr(n,F_(r,i));await n._updateTokensIfNecessary(a,!0)}function J_(n,e,t,r){return ke(n).onIdTokenChanged(e,t,r)}function X_(n,e,t){return ke(n).beforeAuthStateChanged(e,t)}function aA(n,e,t,r){return ke(n).onAuthStateChanged(e,t,r)}function cA(n){return ke(n).signOut()}const fi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fi,"1"),this.storage.removeItem(fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=1e3,ey=10;class ld extends cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);v_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ey):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ld.type="LOCAL";const ty=ld;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ud.type="SESSION";const hd=ud;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new xi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await ny(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=La("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function sy(n){pt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function iy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oy(){return navigator?.serviceWorker?.controller||null}function ay(){return dd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="firebaseLocalStorageDb",cy=1,pi="firebaseLocalStorage",pd="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ni(n,e){return n.transaction([pi],e?"readwrite":"readonly").objectStore(pi)}function ly(){const n=indexedDB.deleteDatabase(fd);return new vs(n).toPromise()}function sa(){const n=indexedDB.open(fd,cy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(pi,{keyPath:pd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(pi)?e(r):(r.close(),await ly(),e(await sa()))})})}async function Gl(n,e,t){const r=Ni(n,!0).put({[pd]:e,value:t});return new vs(r).toPromise()}async function uy(n,e){const t=Ni(n,!1).get(e),r=await new vs(t).toPromise();return r===void 0?null:r.value}function Kl(n,e){const t=Ni(n,!0).delete(e);return new vs(t).toPromise()}const hy=800,dy=3;class md{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xi._getInstance(ay()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await iy(),!this.activeServiceWorker)return;this.sender=new ry(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sa();return await Gl(e,fi,"1"),await Kl(e,fi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>uy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ni(s,!1).getAll();return new vs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}md.type="LOCAL";const fy=md;new gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n,e){return e?bt(e):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function my(n){return od(n.auth,new Fa(n),n.bypassAuthState)}function gy(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),K_(t,new Fa(n),n.bypassAuthState)}async function _y(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),G_(t,new Fa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return my;case"linkViaPopup":case"linkViaRedirect":return _y;case"reauthViaPopup":case"reauthViaRedirect":return gy;default:rt(this.auth,"internal-error")}}resolve(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new gs(2e3,1e4);class Kn extends gd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const e=La();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yy.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="pendingRedirect",Zs=new Map;class wy extends gd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Zs.get(this.auth._key());if(!e){try{const r=await Ey(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Zs.set(this.auth._key(),e)}return this.bypassAuthState||Zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ey(n,e){const t=by(e),r=Iy(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Ty(n,e){Zs.set(n._key(),e)}function Iy(n){return bt(n._redirectPersistence)}function by(n){return Xs(vy,n.config.apiKey,n.name)}async function Ay(n,e,t=!1){if(Qe(n.app))return Promise.reject(ft(n));const r=xn(n),s=py(r,e),a=await new wy(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=600*1e3;class Sy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!_d(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(dt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ry&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ql(e))}saveEventToCache(e){this.cachedEventUids.add(Ql(e)),this.lastProcessedEventTime=Date.now()}}function Ql(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _d({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Cy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _d(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Py(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vy=/^https?/;async function Dy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Py(n);for(const t of e)try{if(xy(t))return}catch{}rt(n,"unauthorized-domain")}function xy(n){const e=ta(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Vy.test(t))return!1;if(ky.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=new gs(3e4,6e4);function Yl(){const n=pt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Oy(n){return new Promise((e,t)=>{function r(){Yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yl(),t(dt(n,"network-request-failed"))},timeout:Ny.get()})}if(pt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(pt().gapi?.load)r();else{const s=C_("iframefcb");return pt()[s]=()=>{gapi.load?r():t(dt(n,"network-request-failed"))},td(`${S_()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw ei=null,e})}let ei=null;function My(n){return ei=ei||Oy(n),ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new gs(5e3,15e3),Fy="__/auth/iframe",Uy="emulator/auth/iframe",By={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qy(n){const e=n.config;X(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Da(e,Uy):`https://${n.config.authDomain}/${Fy}`,r={apiKey:e.apiKey,appName:n.name,v:dr},s=jy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ms(r).slice(1)}`}async function $y(n){const e=await My(n),t=pt().gapi;return X(t,n,"internal-error"),e.open({where:document.body,url:qy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:By,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=dt(n,"network-request-failed"),c=pt().setTimeout(()=>{i(a)},Ly.get());function u(){pt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wy=500,Hy=600,Gy="_blank",Ky="http://localhost";class Jl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qy(n,e,t,r=Wy,s=Hy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...zy,width:r.toString(),height:s.toString(),top:i,left:a},h=Be().toLowerCase();t&&(c=Kh(h)?Gy:t),Hh(h)&&(e=e||Ky,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[E,R])=>`${m}${E}=${R},`,"");if(y_(h)&&c!=="_self")return Yy(e||"",c),new Jl(null);const p=window.open(e||"",c,f);X(p,n,"popup-blocked");try{p.focus()}catch{}return new Jl(p)}function Yy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="__/auth/handler",Xy="emulator/auth/handler",Zy=encodeURIComponent("fac");async function Xl(n,e,t,r,s,i){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:dr,eventId:s};if(e instanceof sd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Um(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof ys){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${Zy}=${encodeURIComponent(u)}`:"";return`${ev(n)}?${ms(c).slice(1)}${h}`}function ev({config:n}){return n.emulator?Da(n,Xy):`https://${n.authDomain}/${Jy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="webStorageSupport";class tv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hd,this._completeRedirectFn=Ay,this._overrideRedirectResult=Ty}async _openPopup(e,t,r,s){St(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Xl(e,t,r,ta(),s);return Qy(e,i,La())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Xl(e,t,r,ta(),s);return sy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(St(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await $y(e),r=new Sy(e);return t.register("authEvent",s=>(X(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xo,{type:xo},s=>{const i=s?.[0]?.[xo];i!==void 0&&t(!!i),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zh()||Gh()||Na()}}const nv=tv;var Zl="@firebase/auth",eu="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iv(n){rr(new In("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;X(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ed(n)},h=new b_(r,s,i,u);return N_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rr(new In("auth-internal",e=>{const t=xn(e.getProvider("auth").getImmediate());return(r=>new rv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Zl,eu,sv(n)),wn(Zl,eu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=300,av=kh("authIdTokenMaxAge")||ov;let tu=null;const cv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>av)return;const s=t?.token;tu!==s&&(tu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lA(n=Oh()){const e=ka(n,"auth");if(e.isInitialized())return e.getImmediate();const t=x_(n,{popupRedirectResolver:nv,persistence:[fy,ty,hd]}),r=kh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=cv(i.toString());X_(t,a,()=>a(t.currentUser)),J_(t,c=>a(c))}}const s=Ch("auth");return s&&O_(t,`http://${s}`),t}function lv(){return document.getElementsByTagName("head")?.[0]??document}A_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=dt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",lv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iv("Browser");var nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,yd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function v(){}v.prototype=_.prototype,w.F=_.prototype,w.prototype=new v,w.prototype.constructor=w,w.D=function(I,T,b){for(var y=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)y[ee-2]=arguments[ee];return _.prototype[T].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,v){v||(v=0);const I=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)I[T]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(T=0;T<16;++T)I[T]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=w.g[0],v=w.g[1],T=w.g[2];let b=w.g[3],y;y=_+(b^v&(T^b))+I[0]+3614090360&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(T^_&(v^T))+I[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(v^b&(_^v))+I[2]+606105819&4294967295,T=b+(y<<17&4294967295|y>>>15),y=v+(_^T&(b^_))+I[3]+3250441966&4294967295,v=T+(y<<22&4294967295|y>>>10),y=_+(b^v&(T^b))+I[4]+4118548399&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(T^_&(v^T))+I[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(v^b&(_^v))+I[6]+2821735955&4294967295,T=b+(y<<17&4294967295|y>>>15),y=v+(_^T&(b^_))+I[7]+4249261313&4294967295,v=T+(y<<22&4294967295|y>>>10),y=_+(b^v&(T^b))+I[8]+1770035416&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(T^_&(v^T))+I[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(v^b&(_^v))+I[10]+4294925233&4294967295,T=b+(y<<17&4294967295|y>>>15),y=v+(_^T&(b^_))+I[11]+2304563134&4294967295,v=T+(y<<22&4294967295|y>>>10),y=_+(b^v&(T^b))+I[12]+1804603682&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(T^_&(v^T))+I[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(v^b&(_^v))+I[14]+2792965006&4294967295,T=b+(y<<17&4294967295|y>>>15),y=v+(_^T&(b^_))+I[15]+1236535329&4294967295,v=T+(y<<22&4294967295|y>>>10),y=_+(T^b&(v^T))+I[1]+4129170786&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^T&(_^v))+I[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^v&(b^_))+I[11]+643717713&4294967295,T=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(T^b))+I[0]+3921069994&4294967295,v=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(v^T))+I[5]+3593408605&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^T&(_^v))+I[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^v&(b^_))+I[15]+3634488961&4294967295,T=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(T^b))+I[4]+3889429448&4294967295,v=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(v^T))+I[9]+568446438&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^T&(_^v))+I[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^v&(b^_))+I[3]+4107603335&4294967295,T=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(T^b))+I[8]+1163531501&4294967295,v=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(v^T))+I[13]+2850285829&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^T&(_^v))+I[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^v&(b^_))+I[7]+1735328473&4294967295,T=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(T^b))+I[12]+2368359562&4294967295,v=T+(y<<20&4294967295|y>>>12),y=_+(v^T^b)+I[5]+4294588738&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^T)+I[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^v)+I[11]+1839030562&4294967295,T=b+(y<<16&4294967295|y>>>16),y=v+(T^b^_)+I[14]+4259657740&4294967295,v=T+(y<<23&4294967295|y>>>9),y=_+(v^T^b)+I[1]+2763975236&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^T)+I[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^v)+I[7]+4139469664&4294967295,T=b+(y<<16&4294967295|y>>>16),y=v+(T^b^_)+I[10]+3200236656&4294967295,v=T+(y<<23&4294967295|y>>>9),y=_+(v^T^b)+I[13]+681279174&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^T)+I[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^v)+I[3]+3572445317&4294967295,T=b+(y<<16&4294967295|y>>>16),y=v+(T^b^_)+I[6]+76029189&4294967295,v=T+(y<<23&4294967295|y>>>9),y=_+(v^T^b)+I[9]+3654602809&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^T)+I[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^v)+I[15]+530742520&4294967295,T=b+(y<<16&4294967295|y>>>16),y=v+(T^b^_)+I[2]+3299628645&4294967295,v=T+(y<<23&4294967295|y>>>9),y=_+(T^(v|~b))+I[0]+4096336452&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~T))+I[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~v))+I[14]+2878612391&4294967295,T=b+(y<<15&4294967295|y>>>17),y=v+(b^(T|~_))+I[5]+4237533241&4294967295,v=T+(y<<21&4294967295|y>>>11),y=_+(T^(v|~b))+I[12]+1700485571&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~T))+I[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~v))+I[10]+4293915773&4294967295,T=b+(y<<15&4294967295|y>>>17),y=v+(b^(T|~_))+I[1]+2240044497&4294967295,v=T+(y<<21&4294967295|y>>>11),y=_+(T^(v|~b))+I[8]+1873313359&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~T))+I[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~v))+I[6]+2734768916&4294967295,T=b+(y<<15&4294967295|y>>>17),y=v+(b^(T|~_))+I[13]+1309151649&4294967295,v=T+(y<<21&4294967295|y>>>11),y=_+(T^(v|~b))+I[4]+4149444226&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~T))+I[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~v))+I[2]+718787259&4294967295,T=b+(y<<15&4294967295|y>>>17),y=v+(b^(T|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const v=_-this.blockSize,I=this.C;let T=this.h,b=0;for(;b<_;){if(T==0)for(;b<=v;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<_;)if(I[T++]=w.charCodeAt(b++),T==this.blockSize){s(this,I),T=0;break}}else for(;b<_;)if(I[T++]=w[b++],T==this.blockSize){s(this,I),T=0;break}}this.h=T,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var v=w.length-8;v<w.length;++v)w[v]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,v=0;v<4;++v)for(let I=0;I<32;I+=8)w[_++]=this.g[v]>>>I&255;return w};function i(w,_){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=_(w)}function a(w,_){this.h=_;const v=[];let I=!0;for(let T=w.length-1;T>=0;T--){const b=w[T]|0;I&&b==_||(v[T]=b,I=!1)}this.g=v}var c={};function u(w){return-128<=w&&w<128?i(w,function(_){return new a([_|0],_<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return S(h(-w));const _=[];let v=1;for(let I=0;w>=v;I++)_[I]=w/v|0,v*=4294967296;return new a(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return S(f(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(_,8));let I=p;for(let b=0;b<w.length;b+=8){var T=Math.min(8,w.length-b);const y=parseInt(w.substring(b,b+T),_);T<8?(T=h(Math.pow(_,T)),I=I.j(T).add(h(y))):(I=I.j(v),I=I.add(h(y)))}return I}var p=u(0),m=u(1),E=u(16777216);n=a.prototype,n.m=function(){if(P(this))return-S(this).m();let w=0,_=1;for(let v=0;v<this.g.length;v++){const I=this.i(v);w+=(I>=0?I:4294967296+I)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(P(this))return"-"+S(this).toString(w);const _=h(Math.pow(w,6));var v=this;let I="";for(;;){const T=q(v,_).g;v=O(v,T.j(_));let b=((v.g.length>0?v.g[0]:v.h)>>>0).toString(w);if(v=T,R(v))return b+I;for(;b.length<6;)b="0"+b;I=b+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function P(w){return w.h==-1}n.l=function(w){return w=O(this,w),P(w)?-1:R(w)?0:1};function S(w){const _=w.g.length,v=[];for(let I=0;I<_;I++)v[I]=~w.g[I];return new a(v,~w.h).add(m)}n.abs=function(){return P(this)?S(this):this},n.add=function(w){const _=Math.max(this.g.length,w.g.length),v=[];let I=0;for(let T=0;T<=_;T++){let b=I+(this.i(T)&65535)+(w.i(T)&65535),y=(b>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);I=y>>>16,b&=65535,y&=65535,v[T]=y<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function O(w,_){return w.add(S(_))}n.j=function(w){if(R(this)||R(w))return p;if(P(this))return P(w)?S(this).j(S(w)):S(S(this).j(w));if(P(w))return S(this.j(S(w)));if(this.l(E)<0&&w.l(E)<0)return h(this.m()*w.m());const _=this.g.length+w.g.length,v=[];for(var I=0;I<2*_;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(let T=0;T<w.g.length;T++){const b=this.i(I)>>>16,y=this.i(I)&65535,ee=w.i(T)>>>16,ue=w.i(T)&65535;v[2*I+2*T]+=y*ue,F(v,2*I+2*T),v[2*I+2*T+1]+=b*ue,F(v,2*I+2*T+1),v[2*I+2*T+1]+=y*ee,F(v,2*I+2*T+1),v[2*I+2*T+2]+=b*ee,F(v,2*I+2*T+2)}for(w=0;w<_;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=_;w<2*_;w++)v[w]=0;return new a(v,0)};function F(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function B(w,_){this.g=w,this.h=_}function q(w,_){if(R(_))throw Error("division by zero");if(R(w))return new B(p,p);if(P(w))return _=q(S(w),_),new B(S(_.g),S(_.h));if(P(_))return _=q(w,S(_)),new B(S(_.g),_.h);if(w.g.length>30){if(P(w)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=_;I.l(w)<=0;)v=Q(v),I=Q(I);var T=M(v,1),b=M(I,1);for(I=M(I,2),v=M(v,2);!R(I);){var y=b.add(I);y.l(w)<=0&&(T=T.add(v),b=y),I=M(I,1),v=M(v,1)}return _=O(w,T.j(_)),new B(T,_)}for(T=p;w.l(_)>=0;){for(v=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),b=h(v),y=b.j(_);P(y)||y.l(w)>0;)v-=I,b=h(v),y=b.j(_);R(b)&&(b=m),T=T.add(b),w=O(w,y)}return new B(T,w)}n.B=function(w){return q(this,w).h},n.and=function(w){const _=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<_;I++)v[I]=this.i(I)&w.i(I);return new a(v,this.h&w.h)},n.or=function(w){const _=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<_;I++)v[I]=this.i(I)|w.i(I);return new a(v,this.h|w.h)},n.xor=function(w){const _=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<_;I++)v[I]=this.i(I)^w.i(I);return new a(v,this.h^w.h)};function Q(w){const _=w.g.length+1,v=[];for(let I=0;I<_;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(v,w.h)}function M(w,_){const v=_>>5;_%=32;const I=w.g.length-v,T=[];for(let b=0;b<I;b++)T[b]=_>0?w.i(b+v)>>>_|w.i(b+v+1)<<32-_:w.i(b+v);return new a(T,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,yd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Qt=a}).apply(typeof nu<"u"?nu:typeof self<"u"?self:typeof window<"u"?window:{});var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vd,Wr,wd,ti,ia,Ed,Td,Id;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof js=="object"&&js];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var A=o[g];if(!(A in d))break e;d=d[A]}o=o[o.length-1],g=d[o],l=l(g),l!=g&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var d=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&d.push([g,l[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,d){return o.call.apply(o.bind,arguments)}function h(o,l,d){return h=u,h.apply(null,arguments)}function f(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,l){function d(){}d.prototype=l.prototype,o.Z=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(g,A,C){for(var L=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)L[ie-2]=arguments[ie];return l.prototype[A].apply(g,L)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function E(o){const l=o.length;if(l>0){const d=Array(l);for(let g=0;g<l;g++)d[g]=o[g];return d}return[]}function R(o,l){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const C=A.length||0;o.length=d+C;for(let L=0;L<C;L++)o[d+L]=A[L]}else o.push(A)}}class P{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function S(o){a.setTimeout(()=>{throw o},0)}function O(){var o=w;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class F{constructor(){this.h=this.g=null}add(l,d){const g=B.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var B=new P(()=>new q,o=>o.reset());class q{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,M=!1,w=new F,_=()=>{const o=Promise.resolve(void 0);Q=()=>{o.then(v)}};function v(){for(var o;o=O();){try{o.h.call(o.g)}catch(d){S(d)}var l=B;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}M=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,l),a.removeEventListener("test",d,l)}catch{}return o})();function y(o){return/^[\s\xa0]*$/.test(o)}function ee(o,l){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}p(ee,T),ee.prototype.init=function(o,l){const d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ee.Z.h.call(this)},ee.prototype.h=function(){ee.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ue="closure_listenable_"+(Math.random()*1e6|0),x=0;function z(o,l,d,g,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=A,this.key=++x,this.da=this.fa=!1}function k(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function te(o,l,d){for(const g in o)l.call(d,o[g],g,o)}function he(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function He(o){const l={};for(const d in o)l[d]=o[d];return l}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function W(o,l){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)o[d]=g[d];for(let C=0;C<N.length;C++)d=N[C],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function Y(o){this.src=o,this.g={},this.h=0}Y.prototype.add=function(o,l,d,g,A){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const L=fe(o,l,g,A);return L>-1?(l=o[L],d||(l.fa=!1)):(l=new z(l,this.src,C,!!g,A),l.fa=d,o.push(l)),l};function K(o,l){const d=l.type;if(d in o.g){var g=o.g[d],A=Array.prototype.indexOf.call(g,l,void 0),C;(C=A>=0)&&Array.prototype.splice.call(g,A,1),C&&(k(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function fe(o,l,d,g){for(let A=0;A<o.length;++A){const C=o[A];if(!C.da&&C.listener==l&&C.capture==!!d&&C.ha==g)return A}return-1}var ne="closure_lm_"+(Math.random()*1e6|0),Re={};function je(o,l,d,g,A){if(Array.isArray(l)){for(let C=0;C<l.length;C++)je(o,l[C],d,g,A);return null}return d=Pc(d),o&&o[ue]?o.J(l,d,c(g)?!!g.capture:!1,A):et(o,l,d,!1,g,A)}function et(o,l,d,g,A,C){if(!l)throw Error("Invalid event type");const L=c(A)?!!A.capture:!!A;let ie=io(o);if(ie||(o[ne]=ie=new Y(o)),d=ie.add(l,d,g,L,C),d.proxy)return d;if(g=Ir(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)b||(A=L),A===void 0&&(A=!1),o.addEventListener(l.toString(),g,A);else if(o.attachEvent)o.attachEvent(Cc(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ir(){function o(d){return l.call(o.src,o.listener,d)}const l=Np;return o}function un(o,l,d,g,A){if(Array.isArray(l))for(var C=0;C<l.length;C++)un(o,l[C],d,g,A);else g=c(g)?!!g.capture:!!g,d=Pc(d),o&&o[ue]?(o=o.i,C=String(l).toString(),C in o.g&&(l=o.g[C],d=fe(l,d,g,A),d>-1&&(k(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete o.g[C],o.h--)))):o&&(o=io(o))&&(l=o.g[l.toString()],o=-1,l&&(o=fe(l,d,g,A)),(d=o>-1?l[o]:null)&&so(d))}function so(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[ue])K(l.i,o);else{var d=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(d,g,o.capture):l.detachEvent?l.detachEvent(Cc(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=io(l))?(K(d,o),d.h==0&&(d.src=null,l[ne]=null)):k(o)}}}function Cc(o){return o in Re?Re[o]:Re[o]="on"+o}function Np(o,l){if(o.da)o=!0;else{l=new ee(l,this);const d=o.listener,g=o.ha||o.src;o.fa&&so(o),o=d.call(g,l)}return o}function io(o){return o=o[ne],o instanceof Y?o:null}var oo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pc(o){return typeof o=="function"?o:(o[oo]||(o[oo]=function(l){return o.handleEvent(l)}),o[oo])}function Me(){I.call(this),this.i=new Y(this),this.M=this,this.G=null}p(Me,I),Me.prototype[ue]=!0,Me.prototype.removeEventListener=function(o,l,d,g){un(this,o,l,d,g)};function qe(o,l){var d,g=o.G;if(g)for(d=[];g;g=g.G)d.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new T(l,o);else if(l instanceof T)l.target=l.target||o;else{var A=l;l=new T(g,o),W(l,A)}A=!0;let C,L;if(d)for(L=d.length-1;L>=0;L--)C=l.g=d[L],A=Cs(C,g,!0,l)&&A;if(C=l.g=o,A=Cs(C,g,!0,l)&&A,A=Cs(C,g,!1,l)&&A,d)for(L=0;L<d.length;L++)C=l.g=d[L],A=Cs(C,g,!1,l)&&A}Me.prototype.N=function(){if(Me.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const d=o.g[l];for(let g=0;g<d.length;g++)k(d[g]);delete o.g[l],o.h--}}this.G=null},Me.prototype.J=function(o,l,d,g){return this.i.add(String(o),l,!1,d,g)},Me.prototype.K=function(o,l,d,g){return this.i.add(String(o),l,!0,d,g)};function Cs(o,l,d,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let C=0;C<l.length;++C){const L=l[C];if(L&&!L.da&&L.capture==d){const ie=L.listener,Se=L.ha||L.src;L.fa&&K(o.i,L),A=ie.call(Se,g)!==!1&&A}}return A&&!g.defaultPrevented}function Op(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function kc(o){o.g=Op(()=>{o.g=null,o.i&&(o.i=!1,kc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Mp extends I{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:kc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(o){I.call(this),this.h=o,this.g={}}p(br,I);var Vc=[];function Dc(o){te(o.g,function(l,d){this.g.hasOwnProperty(d)&&so(l)},o),o.g={}}br.prototype.N=function(){br.Z.N.call(this),Dc(this)},br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ao=a.JSON.stringify,Lp=a.JSON.parse,Fp=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function xc(){}function Nc(){}var Ar={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function co(){T.call(this,"d")}p(co,T);function lo(){T.call(this,"c")}p(lo,T);var hn={},Oc=null;function Ps(){return Oc=Oc||new Me}hn.Ia="serverreachability";function Mc(o){T.call(this,hn.Ia,o)}p(Mc,T);function Rr(o){const l=Ps();qe(l,new Mc(l))}hn.STAT_EVENT="statevent";function Lc(o,l){T.call(this,hn.STAT_EVENT,o),this.stat=l}p(Lc,T);function $e(o){const l=Ps();qe(l,new Lc(l,o))}hn.Ja="timingevent";function Fc(o,l){T.call(this,hn.Ja,o),this.size=l}p(Fc,T);function Sr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function Cr(){this.g=!0}Cr.prototype.ua=function(){this.g=!1};function Up(o,l,d,g,A,C){o.info(function(){if(o.g)if(C){var L="",ie=C.split("&");for(let me=0;me<ie.length;me++){var Se=ie[me].split("=");if(Se.length>1){const Ve=Se[0];Se=Se[1];const lt=Ve.split("_");L=lt.length>=2&&lt[1]=="type"?L+(Ve+"="+Se+"&"):L+(Ve+"=redacted&")}}}else L=null;else L=C;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+l+`
`+d+`
`+L})}function Bp(o,l,d,g,A,C,L){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+l+`
`+d+`
`+C+" "+L})}function Fn(o,l,d,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+qp(o,d)+(g?" "+g:"")})}function jp(o,l){o.info(function(){return"TIMEOUT: "+l})}Cr.prototype.info=function(){};function qp(o,l){if(!o.g)return l;if(!l)return null;try{const C=JSON.parse(l);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var d=C[o];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let L=1;L<g.length;L++)g[L]=""}}}}return ao(C)}catch{return l}}var ks={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Uc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Bc;function uo(){}p(uo,xc),uo.prototype.g=function(){return new XMLHttpRequest},Bc=new uo;function Pr(o){return encodeURIComponent(String(o))}function $p(o){var l=1;o=o.split(":");const d=[];for(;l>0&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function Nt(o,l,d,g){this.j=o,this.i=l,this.l=d,this.S=g||1,this.V=new br(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new jc}function jc(){this.i=null,this.g="",this.h=!1}var qc={},ho={};function fo(o,l,d){o.M=1,o.A=Ds(ct(l)),o.u=d,o.R=!0,$c(o,null)}function $c(o,l){o.F=Date.now(),Vs(o),o.B=ct(o.A);var d=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),nl(d.i,"t",g),o.C=0,d=o.j.L,o.h=new jc,o.g=wl(o.j,d?l:null,!o.u),o.P>0&&(o.O=new Mp(h(o.Y,o,o.g),o.P)),l=o.V,d=o.g,g=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(Vc[0]=A.toString()),A=Vc);for(let C=0;C<A.length;C++){const L=je(d,A[C],g||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=o.J?He(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Rr(),Up(o.i,o.v,o.B,o.l,o.S,o.u)}Nt.prototype.ba=function(o){o=o.target;const l=this.O;l&&Lt(o)==3?l.j():this.Y(o)},Nt.prototype.Y=function(o){try{if(o==this.g)e:{const ie=Lt(this.g),Se=this.g.ya(),me=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||ll(this.g)))){this.K||ie!=4||Se==7||(Se==8||me<=0?Rr(3):Rr(2)),po(this);var l=this.g.ca();this.X=l;var d=zp(this);if(this.o=l==200,Bp(this.i,this.v,this.B,this.l,this.S,ie,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var C=g;break t}}C=null}if(o=C)Fn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,mo(this,o);else{this.o=!1,this.m=3,$e(12),dn(this),kr(this);break e}}if(this.R){o=!0;let Ve;for(;!this.K&&this.C<d.length;)if(Ve=Wp(this,d),Ve==ho){ie==4&&(this.m=4,$e(14),o=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ve==qc){this.m=4,$e(15),Fn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Fn(this.i,this.l,Ve,null),mo(this,Ve);if(zc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||d.length!=0||this.h.h||(this.m=1,$e(16),o=!1),this.o=this.o&&o,!o)Fn(this.i,this.l,d,"[Invalid Chunked Response]"),dn(this),kr(this);else if(d.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Io(L),L.P=!0,$e(11))}}else Fn(this.i,this.l,d,null),mo(this,d);ie==4&&dn(this),this.o&&!this.K&&(ie==4?gl(this.j,this):(this.o=!1,Vs(this)))}else im(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,$e(12)):(this.m=0,$e(13)),dn(this),kr(this)}}}catch{}finally{}};function zp(o){if(!zc(o))return o.g.la();const l=ll(o.g);if(l==="")return"";let d="";const g=l.length,A=Lt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return dn(o),kr(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<g;C++)o.h.h=!0,d+=o.h.i.decode(l[C],{stream:!(A&&C==g-1)});return l.length=0,o.h.g+=d,o.C=0,o.h.g}function zc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Wp(o,l){var d=o.C,g=l.indexOf(`
`,d);return g==-1?ho:(d=Number(l.substring(d,g)),isNaN(d)?qc:(g+=1,g+d>l.length?ho:(l=l.slice(g,g+d),o.C=g+d,l)))}Nt.prototype.cancel=function(){this.K=!0,dn(this)};function Vs(o){o.T=Date.now()+o.H,Wc(o,o.H)}function Wc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Sr(h(o.aa,o),l)}function po(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Nt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(jp(this.i,this.B),this.M!=2&&(Rr(),$e(17)),dn(this),this.m=2,kr(this)):Wc(this,this.T-o)};function kr(o){o.j.I==0||o.K||gl(o.j,o)}function dn(o){po(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Dc(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function mo(o,l){try{var d=o.j;if(d.I!=0&&(d.g==o||go(d.h,o))){if(!o.L&&go(d.h,o)&&d.I==3){try{var g=d.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Ls(d),Os(d);else break e;To(d),$e(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Sr(h(d.Va,d),6e3));Kc(d.h)<=1&&d.ta&&(d.ta=void 0)}else pn(d,11)}else if((o.L||d.g==o)&&Ls(d),!y(l))for(A=d.Ba.g.parse(l),l=0;l<A.length;l++){let me=A[l];const Ve=me[0];if(!(Ve<=d.K))if(d.K=Ve,me=me[1],d.I==2)if(me[0]=="c"){d.M=me[1],d.ba=me[2];const lt=me[3];lt!=null&&(d.ka=lt,d.j.info("VER="+d.ka));const mn=me[4];mn!=null&&(d.za=mn,d.j.info("SVER="+d.za));const Ft=me[5];Ft!=null&&typeof Ft=="number"&&Ft>0&&(g=1.5*Ft,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ut=o.g;if(Ut){const Us=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Us){var C=g.h;C.g||Us.indexOf("spdy")==-1&&Us.indexOf("quic")==-1&&Us.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(_o(C,C.h),C.h=null))}if(g.G){const bo=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(g.wa=bo,_e(g.J,g.G,bo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var L=o;if(g.na=vl(g,g.L?g.ba:null,g.W),L.L){Qc(g.h,L);var ie=L,Se=g.O;Se&&(ie.H=Se),ie.D&&(po(ie),Vs(ie)),g.g=L}else pl(g);d.i.length>0&&Ms(d)}else me[0]!="stop"&&me[0]!="close"||pn(d,7);else d.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?pn(d,7):Eo(d):me[0]!="noop"&&d.l&&d.l.qa(me),d.A=0)}}Rr(4)}catch{}}var Hp=class{constructor(o,l){this.g=o,this.map=l}};function Hc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Kc(o){return o.h?1:o.g?o.g.size:0}function go(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function _o(o,l){o.g?o.g.add(l):o.h=l}function Qc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Hc.prototype.cancel=function(){if(this.i=Yc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Yc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.G);return l}return E(o.i)}var Jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gp(o,l){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const g=o[d].indexOf("=");let A,C=null;g>=0?(A=o[d].substring(0,g),C=o[d].substring(g+1)):A=o[d],l(A,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Ot(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Ot?(this.l=o.l,Vr(this,o.j),this.o=o.o,this.g=o.g,Dr(this,o.u),this.h=o.h,yo(this,rl(o.i)),this.m=o.m):o&&(l=String(o).match(Jc))?(this.l=!1,Vr(this,l[1]||"",!0),this.o=xr(l[2]||""),this.g=xr(l[3]||"",!0),Dr(this,l[4]),this.h=xr(l[5]||"",!0),yo(this,l[6]||"",!0),this.m=xr(l[7]||"")):(this.l=!1,this.i=new Or(null,this.l))}Ot.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Nr(l,Xc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Nr(l,Xc,!0),"@"),o.push(Pr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Nr(d,d.charAt(0)=="/"?Yp:Qp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Nr(d,Xp)),o.join("")},Ot.prototype.resolve=function(o){const l=ct(this);let d=!!o.j;d?Vr(l,o.j):d=!!o.o,d?l.o=o.o:d=!!o.g,d?l.g=o.g:d=o.u!=null;var g=o.h;if(d)Dr(l,o.u);else if(d=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=l.h.lastIndexOf("/");A!=-1&&(g=l.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const C=[];for(let L=0;L<A.length;){const ie=A[L++];ie=="."?g&&L==A.length&&C.push(""):ie==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&L==A.length&&C.push("")):(C.push(ie),g=!0)}g=C.join("/")}else g=A}return d?l.h=g:d=o.i.toString()!=="",d?yo(l,rl(o.i)):d=!!o.m,d&&(l.m=o.m),l};function ct(o){return new Ot(o)}function Vr(o,l,d){o.j=d?xr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Dr(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function yo(o,l,d){l instanceof Or?(o.i=l,Zp(o.i,o.l)):(d||(l=Nr(l,Jp)),o.i=new Or(l,o.l))}function _e(o,l,d){o.i.set(l,d)}function Ds(o){return _e(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function xr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Nr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Kp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Kp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xc=/[#\/\?@]/g,Qp=/[#\?:]/g,Yp=/[#\?]/g,Jp=/[#\?@]/g,Xp=/#/g;function Or(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function fn(o){o.g||(o.g=new Map,o.h=0,o.i&&Gp(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Or.prototype,n.add=function(o,l){fn(this),this.i=null,o=Un(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Zc(o,l){fn(o),l=Un(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function el(o,l){return fn(o),l=Un(o,l),o.g.has(l)}n.forEach=function(o,l){fn(this),this.g.forEach(function(d,g){d.forEach(function(A){o.call(l,A,g,this)},this)},this)};function tl(o,l){fn(o);let d=[];if(typeof l=="string")el(o,l)&&(d=d.concat(o.g.get(Un(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)d=d.concat(o[l]);return d}n.set=function(o,l){return fn(this),this.i=null,o=Un(this,o),el(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=tl(this,o),o.length>0?String(o[0]):l):l};function nl(o,l,d){Zc(o,l),d.length>0&&(o.i=null,o.g.set(Un(o,l),E(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var d=l[g];const A=Pr(d);d=tl(this,d);for(let C=0;C<d.length;C++){let L=A;d[C]!==""&&(L+="="+Pr(d[C])),o.push(L)}}return this.i=o.join("&")};function rl(o){const l=new Or;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Un(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Zp(o,l){l&&!o.j&&(fn(o),o.i=null,o.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(Zc(this,g),nl(this,A,d))},o)),o.j=l}function em(o,l){const d=new Cr;if(a.Image){const g=new Image;g.onload=f(Mt,d,"TestLoadImage: loaded",!0,l,g),g.onerror=f(Mt,d,"TestLoadImage: error",!1,l,g),g.onabort=f(Mt,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=f(Mt,d,"TestLoadImage: timeout",!1,l,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function tm(o,l){const d=new Cr,g=new AbortController,A=setTimeout(()=>{g.abort(),Mt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(A),C.ok?Mt(d,"TestPingServer: ok",!0,l):Mt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Mt(d,"TestPingServer: error",!1,l)})}function Mt(o,l,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function nm(){this.g=new Fp}function vo(o){this.i=o.Sb||null,this.h=o.ab||!1}p(vo,xc),vo.prototype.g=function(){return new xs(this.i,this.h)};function xs(o,l){Me.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xs,Me),n=xs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Lr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Mr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Lr(this)),this.g&&(this.readyState=3,Lr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function sl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Mr(this):Lr(this),this.readyState==3&&sl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Mr(this))},n.Na=function(o){this.g&&(this.response=o,Mr(this))},n.ga=function(){this.g&&Mr(this)};function Mr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Lr(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Lr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function il(o){let l="";return te(o,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function wo(o,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=il(d),typeof o=="string"?d!=null&&Pr(d):_e(o,l,d))}function we(o){Me.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(we,Me);var rm=/^https?$/i,sm=["POST","PUT"];n=we.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Bc.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){ol(this,C);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())d.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(sm,l,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of d)this.g.setRequestHeader(C,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){ol(this,C)}};function ol(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,al(o),Ns(o)}function al(o){o.A||(o.A=!0,qe(o,"complete"),qe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,qe(this,"complete"),qe(this,"abort"),Ns(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ns(this,!0)),we.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?cl(this):this.Xa())},n.Xa=function(){cl(this)};function cl(o){if(o.h&&typeof i<"u"){if(o.v&&Lt(o)==4)setTimeout(o.Ca.bind(o),0);else if(qe(o,"readystatechange"),Lt(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=C===0){let L=String(o.D).match(Jc)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),g=!rm.test(L?L.toLowerCase():"")}d=g}if(d)qe(o,"complete"),qe(o,"success");else{o.o=6;try{var A=Lt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",al(o)}}finally{Ns(o)}}}}function Ns(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,l||qe(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Lt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Lt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Lp(l)}};function ll(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function im(o){const l={};o=(o.g&&Lt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(y(o[g]))continue;var d=$p(o[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=l[A]||[];l[A]=C,C.push(d)}he(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function ul(o){this.za=0,this.i=[],this.j=new Cr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fr("baseRetryDelayMs",5e3,o),this.Za=Fr("retryDelaySeedMs",1e4,o),this.Ta=Fr("forwardChannelMaxRetries",2,o),this.va=Fr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Hc(o&&o.concurrentRequestLimit),this.Ba=new nm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ul.prototype,n.ka=8,n.I=1,n.connect=function(o,l,d,g){$e(0),this.W=o,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=vl(this,null,this.W),Ms(this)};function Eo(o){if(hl(o),o.I==3){var l=o.V++,d=ct(o.J);if(_e(d,"SID",o.M),_e(d,"RID",l),_e(d,"TYPE","terminate"),Ur(o,d),l=new Nt(o,o.j,l),l.M=2,l.A=Ds(ct(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=l.A,d=!0),d||(l.g=wl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Vs(l)}yl(o)}function Os(o){o.g&&(Io(o),o.g.cancel(),o.g=null)}function hl(o){Os(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ls(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ms(o){if(!Gc(o.h)&&!o.m){o.m=!0;var l=o.Ea;Q||_(),M||(Q(),M=!0),w.add(l,o),o.D=0}}function om(o,l){return Kc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Sr(h(o.Ea,o,l),_l(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Nt(this,this.j,o);let C=this.o;if(this.U&&(C?(C=He(C),W(C,this.U)):C=this.U),this.u!==null||this.R||(A.J=C,C=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=fl(this,A,l),d=ct(this.J),_e(d,"RID",o),_e(d,"CVER",22),this.G&&_e(d,"X-HTTP-Session-Id",this.G),Ur(this,d),C&&(this.R?l="headers="+Pr(il(C))+"&"+l:this.u&&wo(d,this.u,C)),_o(this.h,A),this.Ra&&_e(d,"TYPE","init"),this.S?(_e(d,"$req",l),_e(d,"SID","null"),A.U=!0,fo(A,d,null)):fo(A,d,l),this.I=2}}else this.I==3&&(o?dl(this,o):this.i.length==0||Gc(this.h)||dl(this))};function dl(o,l){var d;l?d=l.l:d=o.V++;const g=ct(o.J);_e(g,"SID",o.M),_e(g,"RID",d),_e(g,"AID",o.K),Ur(o,g),o.u&&o.o&&wo(g,o.u,o.o),d=new Nt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),l&&(o.i=l.G.concat(o.i)),l=fl(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),_o(o.h,d),fo(d,g,l)}function Ur(o,l){o.H&&te(o.H,function(d,g){_e(l,g,d)}),o.l&&te({},function(d,g){_e(l,g,d)})}function fl(o,l,d){d=Math.min(o.i.length,d);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let ie=-1;for(;;){const Se=["count="+d];ie==-1?d>0?(ie=A[0].g,Se.push("ofs="+ie)):ie=0:Se.push("ofs="+ie);let me=!0;for(let Ve=0;Ve<d;Ve++){var C=A[Ve].g;const lt=A[Ve].map;if(C-=ie,C<0)ie=Math.max(0,A[Ve].g-100),me=!1;else try{C="req"+C+"_"||"";try{var L=lt instanceof Map?lt:Object.entries(lt);for(const[mn,Ft]of L){let Ut=Ft;c(Ft)&&(Ut=ao(Ft)),Se.push(C+mn+"="+encodeURIComponent(Ut))}}catch(mn){throw Se.push(C+"type="+encodeURIComponent("_badmap")),mn}}catch{g&&g(lt)}}if(me){L=Se.join("&");break e}}L=void 0}return o=o.i.splice(0,d),l.G=o,L}function pl(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;Q||_(),M||(Q(),M=!0),w.add(l,o),o.A=0}}function To(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Sr(h(o.Da,o),_l(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,ml(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Sr(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,$e(10),Os(this),ml(this))};function Io(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function ml(o){o.g=new Nt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=ct(o.na);_e(l,"RID","rpc"),_e(l,"SID",o.M),_e(l,"AID",o.K),_e(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&_e(l,"TO",o.ia),_e(l,"TYPE","xmlhttp"),Ur(o,l),o.u&&o.o&&wo(l,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Ds(ct(l)),d.u=null,d.R=!0,$c(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Os(this),To(this),$e(19))};function Ls(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function gl(o,l){var d=null;if(o.g==l){Ls(o),Io(o),o.g=null;var g=2}else if(go(o.h,l))d=l.G,Qc(o.h,l),g=1;else return;if(o.I!=0){if(l.o)if(g==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var A=o.D;g=Ps(),qe(g,new Fc(g,d)),Ms(o)}else pl(o);else if(A=l.m,A==3||A==0&&l.X>0||!(g==1&&om(o,l)||g==2&&To(o)))switch(d&&d.length>0&&(l=o.h,l.i=l.i.concat(d)),A){case 1:pn(o,5);break;case 4:pn(o,10);break;case 3:pn(o,6);break;default:pn(o,2)}}}function _l(o,l){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*l}function pn(o,l){if(o.j.info("Error code "+l),l==2){var d=h(o.bb,o),g=o.Ua;const A=!g;g=new Ot(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vr(g,"https"),Ds(g),A?em(g.toString(),d):tm(g.toString(),d)}else $e(2);o.I=0,o.l&&o.l.pa(l),yl(o),hl(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function yl(o){if(o.I=0,o.ja=[],o.l){const l=Yc(o.h);(l.length!=0||o.i.length!=0)&&(R(o.ja,l),R(o.ja,o.i),o.h.i.length=0,E(o.i),o.i.length=0),o.l.oa()}}function vl(o,l,d){var g=d instanceof Ot?ct(d):new Ot(d);if(g.g!="")l&&(g.g=l+"."+g.g),Dr(g,g.u);else{var A=a.location;g=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const C=new Ot(null);g&&Vr(C,g),l&&(C.g=l),A&&Dr(C,A),d&&(C.h=d),g=C}return d=o.G,l=o.wa,d&&l&&_e(g,d,l),_e(g,"VER",o.ka),Ur(o,g),g}function wl(o,l,d){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new we(new vo({ab:d})):new we(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}n=El.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Fs(){}Fs.prototype.g=function(o,l){return new Ge(o,l)};function Ge(o,l){Me.call(this),this.g=new ul(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!y(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Bn(this)}p(Ge,Me),Ge.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){Eo(this.g)},Ge.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=ao(o),o=d);l.i.push(new Hp(l.Ya++,o)),l.I==3&&Ms(l)},Ge.prototype.N=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,Ge.Z.N.call(this)};function Tl(o){co.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}p(Tl,co);function Il(){lo.call(this),this.status=1}p(Il,lo);function Bn(o){this.g=o}p(Bn,El),Bn.prototype.ra=function(){qe(this.g,"a")},Bn.prototype.qa=function(o){qe(this.g,new Tl(o))},Bn.prototype.pa=function(o){qe(this.g,new Il)},Bn.prototype.oa=function(){qe(this.g,"b")},Fs.prototype.createWebChannel=Fs.prototype.g,Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,Id=function(){return new Fs},Td=function(){return Ps()},Ed=hn,ia={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ks.NO_ERROR=0,ks.TIMEOUT=8,ks.HTTP_ERROR=6,ti=ks,Uc.COMPLETE="complete",wd=Uc,Nc.EventType=Ar,Ar.OPEN="a",Ar.CLOSE="b",Ar.ERROR="c",Ar.MESSAGE="d",Me.prototype.listen=Me.prototype.J,Wr=Nc,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,vd=we}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr="12.9.0";function uv(n){pr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Ca("@firebase/firestore");function $n(){return Rn.logLevel}function $(n,...e){if(Rn.logLevel<=ae.DEBUG){const t=e.map(Ua);Rn.debug(`Firestore (${pr}): ${n}`,...t)}}function Ct(n,...e){if(Rn.logLevel<=ae.ERROR){const t=e.map(Ua);Rn.error(`Firestore (${pr}): ${n}`,...t)}}function Sn(n,...e){if(Rn.logLevel<=ae.WARN){const t=e.map(Ua);Rn.warn(`Firestore (${pr}): ${n}`,...t)}}function Ua(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,bd(n,r,t)}function bd(n,e,t){let r=`FIRESTORE (${pr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ct(r),new Error(r)}function pe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||bd(e,s,r)}function se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fe.UNAUTHENTICATED)))}shutdown(){}}class dv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class fv{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){pe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new At;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new At,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new At)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new Ad(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class pv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class mv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new pv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ru{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){pe(this.o===void 0,3512);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ru(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ru(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_v(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function oa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return No(s)===No(i)?ce(s,i):No(s)?1:-1}return ce(n.length,e.length)}const yv=55296,vv=57343;function No(n){const e=n.charCodeAt(0);return e>=yv&&e<=vv}function ir(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="__name__";class ut{constructor(e,t,r){t===void 0?t=0:t>e.length&&Z(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Z(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ut?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ut.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ce(e.length,t.length)}static compareSegments(e,t){const r=ut.isNumericId(e),s=ut.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ut.extractNumericId(e).compare(ut.extractNumericId(t)):oa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qt.fromString(e.substring(4,e.length-2))}}class ge extends ut{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ge(t)}static emptyPath(){return new ge([])}}const wv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends ut{construct(e,t,r){return new Ne(e,t,r)}static isValidIdentifier(e){return wv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===su}static keyField(){return new Ne([su])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(ge.fromString(e))}static fromName(e){return new J(ge.fromString(e).popFirst(5))}static empty(){return new J(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(n,e,t){if(!t)throw new j(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ev(n,e,t,r){if(e===!0&&r===!0)throw new j(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function iu(n){if(!J.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ou(n){if(J.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Oi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z(12329,{type:typeof n})}function st(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Oi(n);throw new j(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function ws(n,e){if(!Sd(n))throw new j(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new j(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=-62135596800,cu=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*cu);return new ye(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<au)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cu}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ws(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-au;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Ae("string",ye._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new ye(0,0))}static max(){return new re(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=-1;function Tv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new Jt(s,J.empty(),e)}function Iv(n){return new Jt(n.readTime,n.key,ss)}class Jt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Jt(re.min(),J.empty(),ss)}static max(){return new Jt(re.max(),J.empty(),ss)}}function bv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=J.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Av)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((s=>s?D.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next((f=>{a[h]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,t){return new D(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Sv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Mi.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=-1;function Li(n){return n==null}function mi(n){return n===0&&1/n==-1/0}function Cv(n){return typeof n=="number"&&Number.isInteger(n)&&!mi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="";function Pv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=lu(e)),e=kv(n.get(t),e);return lu(e)}function kv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Cd:t+="";break;default:t+=i}}return t}function lu(n){return n+Cd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Pd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qs(this.root,e,this.comparator,!1)}getReverseIterator(){return new qs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qs(this.root,e,this.comparator,!0)}}class qs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??xe.RED,this.left=s??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hu(this.data.getIterator())}getIteratorFrom(e){return new hu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class hu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new Pe(Ne.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ir(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kd("Invalid base64 string: "+i):i}})(e);return new Oe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const Vv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(pe(!!n,39018),typeof n=="string"){let e=0;const t=Vv.exec(n);if(pe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="server_timestamp",Dd="__type__",xd="__previous_value__",Nd="__local_write_time__";function qa(n){return(n?.mapValue?.fields||{})[Dd]?.stringValue===Vd}function Fi(n){const e=n.mapValue.fields[xd];return qa(e)?Fi(e):e}function is(n){const e=Xt(n.mapValue.fields[Nd].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t,r,s,i,a,c,u,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const gi="(default)";class os{constructor(e,t){this.projectId=e,this.database=t||gi}static empty(){return new os("","")}get isDefaultDatabase(){return this.database===gi}isEqual(e){return e instanceof os&&e.projectId===this.projectId&&e.database===this.database}}function xv(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new os(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="__type__",Nv="__max__",$s={mapValue:{}},Md="__vector__",_i="value";function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qa(n)?4:Mv(n)?9007199254740991:Ov(n)?10:11:Z(28295,{value:n})}function vt(n,e){if(n===e)return!0;const t=en(n);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return is(n).isEqual(is(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xt(s.timestampValue),c=Xt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Zt(s.bytesValue).isEqual(Zt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ee(s.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ee(s.integerValue)===Ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ee(s.doubleValue),c=Ee(i.doubleValue);return a===c?mi(a)===mi(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return ir(n.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(uu(a)!==uu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!vt(a[u],c[u])))return!1;return!0})(n,e);default:return Z(52216,{left:n})}}function as(n,e){return(n.values||[]).find((t=>vt(t,e)))!==void 0}function or(n,e){if(n===e)return 0;const t=en(n),r=en(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Ee(i.integerValue||i.doubleValue),u=Ee(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return du(n.timestampValue,e.timestampValue);case 4:return du(is(n),is(e));case 5:return oa(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Zt(i),u=Zt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=ce(c[h],u[h]);if(f!==0)return f}return ce(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ce(Ee(i.latitude),Ee(a.latitude));return c!==0?c:ce(Ee(i.longitude),Ee(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return fu(n.arrayValue,e.arrayValue);case 10:return(function(i,a){const c=i.fields||{},u=a.fields||{},h=c[_i]?.arrayValue,f=u[_i]?.arrayValue,p=ce(h?.values?.length||0,f?.values?.length||0);return p!==0?p:fu(h,f)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===$s.mapValue&&a===$s.mapValue)return 0;if(i===$s.mapValue)return 1;if(a===$s.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=oa(u[p],f[p]);if(m!==0)return m;const E=or(c[u[p]],h[f[p]]);if(E!==0)return E}return ce(u.length,f.length)})(n.mapValue,e.mapValue);default:throw Z(23264,{he:t})}}function du(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=Xt(n),r=Xt(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function fu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=or(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function ar(n){return aa(n)}function aa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Xt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Zt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return J.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=aa(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${aa(t.fields[a])}`;return s+"}"})(n.mapValue):Z(61005,{value:n})}function ni(n){switch(en(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fi(n);return e?16+ni(e):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ni(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return cn(r.fields,((i,a)=>{s+=i.length+ni(a)})),s})(n.mapValue);default:throw Z(13486,{value:n})}}function pu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ca(n){return!!n&&"integerValue"in n}function $a(n){return!!n&&"arrayValue"in n}function mu(n){return!!n&&"nullValue"in n}function gu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ri(n){return!!n&&"mapValue"in n}function Ov(n){return(n?.mapValue?.fields||{})[Od]?.stringValue===Md}function Jr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return cn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Jr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jr(n.arrayValue.values[t]);return e}return{...n}}function Mv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Nv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ri(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(t)}setAll(e){let t=Ne.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Jr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ri(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ri(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){cn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new We(Jr(this.value))}}function Ld(n){const e=[];return cn(n.fields,((t,r)=>{const s=new Ne([t]);if(ri(r)){const i=Ld(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ue(e,0,re.min(),re.min(),re.min(),We.empty(),0)}static newFoundDocument(e,t,r,s){return new Ue(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new Ue(e,2,t,re.min(),re.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Ue(e,3,t,re.min(),re.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.position=e,this.inclusive=t}}function _u(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),t.key):r=or(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function yu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Lv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{}class be extends Fd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Uv(e,t,r):t==="array-contains"?new qv(e,r):t==="in"?new $v(e,r):t==="not-in"?new zv(e,r):t==="array-contains-any"?new Wv(e,r):new be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Bv(e,r):new jv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(or(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(or(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class it extends Fd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new it(e,t)}matches(e){return Ud(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ud(n){return n.op==="and"}function Bd(n){return Fv(n)&&Ud(n)}function Fv(n){for(const e of n.filters)if(e instanceof it)return!1;return!0}function la(n){if(n instanceof be)return n.field.canonicalString()+n.op.toString()+ar(n.value);if(Bd(n))return n.filters.map((e=>la(e))).join(",");{const e=n.filters.map((t=>la(t))).join(",");return`${n.op}(${e})`}}function jd(n,e){return n instanceof be?(function(r,s){return s instanceof be&&r.op===s.op&&r.field.isEqual(s.field)&&vt(r.value,s.value)})(n,e):n instanceof it?(function(r,s){return s instanceof it&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&jd(a,s.filters[c])),!0):!1})(n,e):void Z(19439)}function qd(n){return n instanceof be?(function(t){return`${t.field.canonicalString()} ${t.op} ${ar(t.value)}`})(n):n instanceof it?(function(t){return t.op.toString()+" {"+t.getFilters().map(qd).join(" ,")+"}"})(n):"Filter"}class Uv extends be{constructor(e,t,r){super(e,t,r),this.key=J.fromName(r.referenceValue)}matches(e){const t=J.comparator(e.key,this.key);return this.matchesComparison(t)}}class Bv extends be{constructor(e,t){super(e,"in",t),this.keys=$d("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class jv extends be{constructor(e,t){super(e,"not-in",t),this.keys=$d("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $d(n,e){return(e.arrayValue?.values||[]).map((t=>J.fromName(t.referenceValue)))}class qv extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $a(t)&&as(t.arrayValue,this.value)}}class $v extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&as(this.value.arrayValue,t)}}class zv extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(as(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!as(this.value.arrayValue,t)}}class Wv extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$a(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>as(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function vu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Hv(n,e,t,r,s,i,a)}function za(n){const e=se(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>la(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Li(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ar(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ar(r))).join(",")),e.Te=t}return e.Te}function Wa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Lv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yu(n.startAt,e.startAt)&&yu(n.endAt,e.endAt)}function ua(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Gv(n,e,t,r,s,i,a,c){return new _r(n,e,t,r,s,i,a,c)}function Ha(n){return new _r(n)}function wu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kv(n){return J.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function zd(n){return n.collectionGroup!==null}function Xr(n){const e=se(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Pe(Ne.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new cs(i,r))})),t.has(Ne.keyField().canonicalString())||e.Ie.push(new cs(Ne.keyField(),r))}return e.Ie}function mt(n){const e=se(n);return e.Ee||(e.Ee=Qv(e,Xr(n))),e.Ee}function Qv(n,e){if(n.limitType==="F")return vu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new cs(s.field,i)}));const t=n.endAt?new yi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yi(n.startAt.position,n.startAt.inclusive):null;return vu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ha(n,e){const t=n.filters.concat([e]);return new _r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Yv(n,e){const t=n.explicitOrderBy.concat([e]);return new _r(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function da(n,e,t){return new _r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ui(n,e){return Wa(mt(n),mt(e))&&n.limitType===e.limitType}function Wd(n){return`${za(mt(n))}|lt:${n.limitType}`}function zn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>qd(s))).join(", ")}]`),Li(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ar(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ar(s))).join(",")),`Target(${r})`})(mt(n))}; limitType=${n.limitType})`}function Bi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Xr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const h=_u(a,c,u);return a.inclusive?h<=0:h<0})(r.startAt,Xr(r),s)||r.endAt&&!(function(a,c,u){const h=_u(a,c,u);return a.inclusive?h>=0:h>0})(r.endAt,Xr(r),s))})(n,e)}function Jv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Hd(n){return(e,t)=>{let r=!1;for(const s of Xr(n)){const i=Xv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Xv(n,e,t){const r=n.field.isKeyField()?J.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?or(u,h):Z(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Pd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new ve(J.comparator);function Pt(){return Zv}const Gd=new ve(J.comparator);function Hr(...n){let e=Gd;for(const t of n)e=e.insert(t.key,t);return e}function Kd(n){let e=Gd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function vn(){return Zr()}function Qd(){return Zr()}function Zr(){return new Nn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ew=new ve(J.comparator),tw=new Pe(J.comparator);function le(...n){let e=tw;for(const t of n)e=e.add(t);return e}const nw=new Pe(ce);function rw(){return nw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mi(e)?"-0":e}}function Yd(n){return{integerValue:""+n}}function sw(n,e){return Cv(e)?Yd(e):Ga(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this._=void 0}}function iw(n,e,t){return n instanceof ls?(function(s,i){const a={fields:{[Dd]:{stringValue:Vd},[Nd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qa(i)&&(i=Fi(i)),i&&(a.fields[xd]=i),{mapValue:a}})(t,e):n instanceof us?Xd(n,e):n instanceof hs?Zd(n,e):(function(s,i){const a=Jd(s,i),c=Eu(a)+Eu(s.Ae);return ca(a)&&ca(s.Ae)?Yd(c):Ga(s.serializer,c)})(n,e)}function ow(n,e,t){return n instanceof us?Xd(n,e):n instanceof hs?Zd(n,e):t}function Jd(n,e){return n instanceof vi?(function(r){return ca(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ls extends ji{}class us extends ji{constructor(e){super(),this.elements=e}}function Xd(n,e){const t=ef(e);for(const r of n.elements)t.some((s=>vt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class hs extends ji{constructor(e){super(),this.elements=e}}function Zd(n,e){let t=ef(e);for(const r of n.elements)t=t.filter((s=>!vt(s,r)));return{arrayValue:{values:t}}}class vi extends ji{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Eu(n){return Ee(n.integerValue||n.doubleValue)}function ef(n){return $a(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t){this.field=e,this.transform=t}}function cw(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof us&&s instanceof us||r instanceof hs&&s instanceof hs?ir(r.elements,s.elements,vt):r instanceof vi&&s instanceof vi?vt(r.Ae,s.Ae):r instanceof ls&&s instanceof ls})(n.transform,e.transform)}class lw{constructor(e,t){this.version=e,this.transformResults=t}}class Ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function si(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qi{}function tf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ka(n.key,Ze.none()):new Es(n.key,n.data,Ze.none());{const t=n.data,r=We.empty();let s=new Pe(Ne.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new ln(n.key,r,new Ye(s.toArray()),Ze.none())}}function uw(n,e,t){n instanceof Es?(function(s,i,a){const c=s.value.clone(),u=Iu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof ln?(function(s,i,a){if(!si(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Iu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(nf(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function es(n,e,t,r){return n instanceof Es?(function(i,a,c,u){if(!si(i.precondition,a))return c;const h=i.value.clone(),f=bu(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof ln?(function(i,a,c,u){if(!si(i.precondition,a))return c;const h=bu(i.fieldTransforms,u,a),f=a.data;return f.setAll(nf(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,c){return si(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function hw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Jd(r.transform,s||null);i!=null&&(t===null&&(t=We.empty()),t.set(r.field,i))}return t||null}function Tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ir(r,s,((i,a)=>cw(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Es extends qi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ln extends qi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Iu(n,e,t){const r=new Map;pe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ow(a,c,t[s]))}return r}function bu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,iw(i,a,e))}return r}class Ka extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dw extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&uw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=es(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=es(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Qd();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=tf(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(re.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),le())}isEqual(e){return this.batchId===e.batchId&&ir(this.mutations,e.mutations,((t,r)=>Tu(t,r)))&&ir(this.baseMutations,e.baseMutations,((t,r)=>Tu(t,r)))}}class Qa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return ew})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Qa(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,de;function gw(n){switch(n){case V.OK:return Z(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Z(15467,{code:n})}}function rf(n){if(n===void 0)return Ct("GRPC error has no .code"),V.UNKNOWN;switch(n){case Ie.OK:return V.OK;case Ie.CANCELLED:return V.CANCELLED;case Ie.UNKNOWN:return V.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return V.INTERNAL;case Ie.UNAVAILABLE:return V.UNAVAILABLE;case Ie.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ie.NOT_FOUND:return V.NOT_FOUND;case Ie.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ie.ABORTED:return V.ABORTED;case Ie.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ie.DATA_LOSS:return V.DATA_LOSS;default:return Z(39323,{code:n})}}(de=Ie||(Ie={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new Qt([4294967295,4294967295],0);function Au(n){const e=_w().encode(n),t=new yd;return t.update(e),new Uint8Array(t.digest())}function Ru(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qt([t,r],0),new Qt([s,i],0)]}class Ya{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Gr(`Invalid padding: ${t}`);if(r<0)throw new Gr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Gr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Qt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Qt.fromNumber(r)));return s.compare(yw)===1&&(s=new Qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Au(e),[r,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ya(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Au(e),[r,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.be(a)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ts.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new $i(re.min(),s,new ve(ce),Pt(),le())}}class Ts{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ts(r,t,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class sf{constructor(e,t){this.targetId=e,this.Ce=t}}class of{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Su{constructor(){this.ve=0,this.Fe=Cu(),this.Me=Oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),t=le(),r=le();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}})),new Ts(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Cu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class vw{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pt(),this.He=zs(),this.Je=zs(),this.Ze=new ve(ce)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(ua(i))if(r===0){const a=new J(i.path);this.et(t,a,Ue.newNoDocument(a,re.min()))}else pe(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Zt(r).toUint8Array()}catch(u){if(u instanceof kd)return Sn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ya(a,s,i)}catch(u){return Sn(u instanceof Gr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ua(c.target)){const u=new J(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ue.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}}));let r=le();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new $i(e,t,this.Ze,this.je,r);return this.je=Pt(),this.He=zs(),this.Je=zs(),this.Ze=new ve(ce),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Su,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Pe(ce),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Pe(ce),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Su),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function zs(){return new ve(J.comparator)}function Cu(){return new ve(J.comparator)}const ww={asc:"ASCENDING",desc:"DESCENDING"},Ew={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tw={and:"AND",or:"OR"};class Iw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fa(n,e){return n.useProto3Json||Li(e)?e:{value:e}}function wi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function af(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bw(n,e){return wi(n,e.toTimestamp())}function gt(n){return pe(!!n,49232),re.fromTimestamp((function(t){const r=Xt(t);return new ye(r.seconds,r.nanos)})(n))}function Ja(n,e){return pa(n,e).canonicalString()}function pa(n,e){const t=(function(s){return new ge(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function cf(n){const e=ge.fromString(n);return pe(ff(e),10190,{key:e.toString()}),e}function ma(n,e){return Ja(n.databaseId,e.path)}function Oo(n,e){const t=cf(e);if(t.get(1)!==n.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new J(uf(t))}function lf(n,e){return Ja(n.databaseId,e)}function Aw(n){const e=cf(n);return e.length===4?ge.emptyPath():uf(e)}function ga(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function uf(n){return pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pu(n,e,t){return{name:ma(n,e),fields:t.value.mapValue.fields}}function Rw(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(pe(f===void 0||typeof f=="string",58123),Oe.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Oe.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const f=h.code===void 0?V.UNKNOWN:rf(h.code);return new j(f,h.message||"")})(a);t=new of(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oo(n,r.document.name),i=gt(r.document.updateTime),a=r.document.createTime?gt(r.document.createTime):re.min(),c=new We({mapValue:{fields:r.document.fields}}),u=Ue.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ii(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oo(n,r.document),i=r.readTime?gt(r.readTime):re.min(),a=Ue.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ii([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oo(n,r.document),i=r.removedTargetIds||[];t=new ii([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new mw(s,i),c=r.targetId;t=new sf(c,a)}}return t}function Sw(n,e){let t;if(e instanceof Es)t={update:Pu(n,e.key,e.value)};else if(e instanceof Ka)t={delete:ma(n,e.key)};else if(e instanceof ln)t={update:Pu(n,e.key,e.data),updateMask:Mw(e.fieldMask)};else{if(!(e instanceof dw))return Z(16599,{dt:e.type});t={verify:ma(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof ls)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof us)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof vi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw Z(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:bw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)})(n,e.precondition)),t}function Cw(n,e){return n&&n.length>0?(pe(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?gt(s.updateTime):gt(i);return a.isEqual(re.min())&&(a=gt(i)),new lw(a,s.transformResults||[])})(t,e)))):[]}function Pw(n,e){return{documents:[lf(n,e.path)]}}function kw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=lf(n,s);const i=(function(h){if(h.length!==0)return df(it.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:Wn(m.field),direction:xw(m.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=fa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function Vw(n){let e=Aw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){pe(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(p){const m=hf(p);return m instanceof it&&Bd(m)?m.getFilters():[m]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((m=>(function(R){return new cs(Hn(R.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Li(m)?null:m})(t.limit));let u=null;t.startAt&&(u=(function(p){const m=!!p.before,E=p.values||[];return new yi(E,m)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const m=!p.before,E=p.values||[];return new yi(E,m)})(t.endAt)),Gv(e,s,a,i,c,"F",u,h)}function Dw(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Hn(t.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hn(t.unaryFilter.field);return be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hn(t.unaryFilter.field);return be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Hn(t.unaryFilter.field);return be.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return be.create(Hn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return it.create(t.compositeFilter.filters.map((r=>hf(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}})(t.compositeFilter.op))})(n):Z(30097,{filter:n})}function xw(n){return ww[n]}function Nw(n){return Ew[n]}function Ow(n){return Tw[n]}function Wn(n){return{fieldPath:n.canonicalString()}}function Hn(n){return Ne.fromServerFormat(n.fieldPath)}function df(n){return n instanceof be?(function(t){if(t.op==="=="){if(gu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(mu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(mu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:Nw(t.op),value:t.value}}})(n):n instanceof it?(function(t){const r=t.getFilters().map((s=>df(s)));return r.length===1?r[0]:{compositeFilter:{op:Ow(t.op),filters:r}}})(n):Z(54877,{filter:n})}function Mw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ff(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function pf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t,r,s,i=re.min(),a=re.min(),c=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.yt=e}}function Fw(n){const e=Vw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?da(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.Sn=new Bw}addToCollectionParentIndex(e,t){return this.Sn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Jt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Bw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Pe(ge.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Pe(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mf=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(mf,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new cr(0)}static ar(){return new cr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LruGarbageCollector",jw=1048576;function Du([n,e],[t,r]){const s=ce(n,t);return s===0?ce(e,r):s}class qw{constructor(e){this.Pr=e,this.buffer=new Pe(Du),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Du(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $w{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(Vu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gr(t)?$(Vu,"Ignoring IndexedDB error during garbage collection: ",t):await mr(t)}await this.Ar(3e5)}))}}class zw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Mi.ce);const r=new qw(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(ku)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ku):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),$n()<=ae.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Ww(n,e){return new zw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.changes=new Nn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&es(r.mutation,s,Ye.empty(),ye.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,le()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=le()){const s=vn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Hr();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=vn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,le())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=Pt();const a=Zr(),c=(function(){return Zr()})();return t.forEach(((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ln)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),es(f.mutation,h,f.mutation.getFieldMask(),ye.now())):a.set(h.key,Ye.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>c.set(h,new Gw(f,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Zr();let s=new ve(((a,c)=>a-c)),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Ye.empty();f=c.applyToLocalView(h,f),r.set(u,f);const p=(s.get(c.batchId)||le()).add(u);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,p=Qd();f.forEach((m=>{if(!i.has(m)){const E=tf(t.get(m),r.get(m));E!==null&&p.set(m,E),i=i.add(m)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return Kv(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(vn());let c=ss,u=i;return a.next((h=>D.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{u=u.insert(f,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,le()))).next((f=>({batchId:c,changes:Kd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new J(t)).next((r=>{let s=Hr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Hr();return this.indexManager.getCollectionParents(e,i).next((c=>D.forEach(c,(u=>{const h=(function(p,m){return new _r(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,m)=>{a=a.insert(p,m)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ue.newInvalidDocument(f)))}));let c=Hr();return a.forEach(((u,h)=>{const f=i.get(u);f!==void 0&&es(f.mutation,h,Ye.empty(),ye.now()),Bi(t,h)&&(c=c.insert(u,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return D.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:gt(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:Fw(s.bundledQuery),readTime:gt(s.readTime)}})(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.overlays=new ve(J.comparator),this.Lr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=vn();return D.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.bt(e,t,i)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=vn(),i=t.length+1,a=new J(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ve(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=vn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=vn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return D.resolve(c)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pw(t,r));let i=this.Lr.get(t);i===void 0&&(i=le(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.kr=new Pe(De.Kr),this.qr=new Pe(De.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new De(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new De(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new J(new ge([])),r=new De(t,e),s=new De(t,e+1),i=[];return this.qr.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new J(new ge([])),r=new De(t,e),s=new De(t,e+1);let i=le();return this.qr.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new De(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return J.comparator(e.key,t.key)||ce(e.Hr,t.Hr)}static Ur(e,t){return ce(e.Hr,t.Hr)||J.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Pe(De.Kr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fw(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Jr=this.Jr.add(new De(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?ja:this.Yn-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new De(t,0),s=new De(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(ce);return t.forEach((s=>{const i=new De(s,0),a=new De(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new De(new J(i),0);let c=new Pe(ce);return this.Jr.forEachWhile((u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Hr)),!0)}),a),D.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){pe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return D.forEach(t.mutations,(s=>{const i=new De(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,t){const r=new De(t,0),s=this.Jr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.ti=e,this.docs=(function(){return new ve(J.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(t))}getEntries(e,t){let r=Pt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ue.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Pt();const a=t.path,c=new J(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||bv(Iv(f),r)<=0||(s.has(f.key)||Bi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){Z(9500)}ni(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new eE(this)}getSize(e){return D.resolve(this.size)}}class eE extends Hw{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.persistence=e,this.ri=new Nn((t=>za(t)),Wa),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.ii=0,this.si=new Xa,this.targetCount=0,this.oi=cr._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),D.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new cr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.lr(t),D.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this._i={},this.overlays={},this.ai=new Mi(0),this.ui=!1,this.ui=!0,this.ci=new Jw,this.referenceDelegate=e(this),this.li=new tE(this),this.indexManager=new Uw,this.remoteDocumentCache=(function(s){return new Zw(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new Lw(t),this.Pi=new Qw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new Xw(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const s=new nE(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return D.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class nE extends Rv{constructor(e){super(),this.currentSequenceNumber=e}}class Za{constructor(e){this.persistence=e,this.Ri=new Xa,this.Ai=null}static Vi(e){return new Za(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,(r=>{const s=J.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,re.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ei{constructor(e,t){this.persistence=e,this.fi=new Nn((r=>Pv(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Ww(this,t)}static Vi(e,t){return new Ei(e,t)}Ti(){}Ii(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return D.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?D.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,re.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ni(e.data.value)),t}wr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=le(),s=le();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ec(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return xm()?8:Sv(Be())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new rE;return this.ys(e,t,a).next((c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?($n()<=ae.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",zn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):($n()<=ae.DEBUG&&$("QueryEngine","Query:",zn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?($n()<=ae.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",zn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):D.resolve())}gs(e,t){if(wu(t))return D.resolve(null);let r=mt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=da(t,null,"F"),r=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=le(...i);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.bs(t,c);return this.Ss(t,h,a,u.readTime)?this.gs(e,da(t,null,"F")):this.Ds(e,h,t,u)}))))})))))}ps(e,t,r,s){return wu(t)||s.isEqual(re.min())?D.resolve(null):this.fs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ss(t,a,r,s)?D.resolve(null):($n()<=ae.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zn(t)),this.Ds(e,a,t,Tv(s,ss)).next((c=>c)))}))}bs(e,t){let r=new Pe(Hd(e));return t.forEach(((s,i)=>{Bi(e,i)&&(r=r.add(i))})),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return $n()<=ae.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",zn(t)),this.fs.getDocumentsMatchingQuery(e,t,Jt.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="LocalStore",iE=3e8;class oE{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ve(ce),this.Fs=new Nn((i=>za(i)),Wa),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kw(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function aE(n,e,t,r){return new oE(n,e,t,r)}async function _f(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=le();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next((h=>({Ns:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function cE(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,f){const p=h.batch,m=p.keys();let E=D.resolve();return m.forEach((R=>{E=E.next((()=>f.getEntry(u,R))).next((P=>{const S=h.docVersions.get(R);pe(S!==null,48541),P.version.compareTo(S)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))}))})),E.next((()=>c.mutationQueue.removeMutationBatch(u,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=le();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function yf(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function lE(n,e){const t=se(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,p))));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(Oe.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(p,E),(function(P,S,O){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=iE?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(m,E,f)&&c.push(t.li.updateTargetData(i,E))}));let u=Pt(),h=le();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(uE(i,a,e.documentUpdates).next((f=>{u=f.Bs,h=f.Ls}))),!r.isEqual(re.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return D.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(t.vs=s,i)))}function uE(n,e,t){let r=le(),s=le();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=Pt();return t.forEach(((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):$(tc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{Bs:a,Ls:s}}))}function hE(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ja),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function dE(n,e){const t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):t.li.allocateTargetId(r).next((a=>(s=new Ht(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function _a(n,e,t){const r=se(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!gr(a))throw a;$(tc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function xu(n,e,t){const r=se(n);let s=re.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,f){const p=se(u),m=p.Fs.get(f);return m!==void 0?D.resolve(p.vs.get(m)):p.li.getTargetData(h,f)})(r,a,mt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:le()))).next((c=>(fE(r,Jv(e),c),{documents:c,ks:i})))))}function fE(n,e,t){let r=n.Ms.get(e)||re.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}class Nu{constructor(){this.activeTargetIds=rw()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pE{constructor(){this.vo=new Nu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Nu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="ConnectivityMonitor";class Mu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(Ou,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(Ou,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws=null;function ya(){return Ws===null?Ws=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ws++,"0x"+Ws.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="RestConnection",gE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _E{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===gi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=ya(),c=this.Qo(e,t.toUriEncodedString());$(Mo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(c),f=hr(h);return this.zo(e,c,u,r,f).then((p=>($(Mo,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Sn(Mo,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+pr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=gE[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection",Br=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Zn extends _E{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zn.c_){const e=Td();Br(e,Ed.STAT_EVENT,(t=>{t.stat===ia.PROXY?$(Le,"STAT_EVENT: detected buffering proxy"):t.stat===ia.NOPROXY&&$(Le,"STAT_EVENT: detected no buffering proxy")})),Zn.c_=!0}}zo(e,t,r,s,i){const a=ya();return new Promise(((c,u)=>{const h=new vd;h.setWithCredentials(!0),h.listenOnce(wd.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case ti.NO_ERROR:const p=h.getResponseJson();$(Le,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case ti.TIMEOUT:$(Le,`RPC '${e}' ${a} timed out`),u(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case ti.HTTP_ERROR:const m=h.getStatus();if($(Le,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E?.error;if(R&&R.status&&R.message){const P=(function(O){const F=O.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(F)>=0?F:V.UNKNOWN})(R.status);u(new j(P,R.message))}else u(new j(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new j(V.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(Le,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);$(Le,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)}))}T_(e,t,r){const s=ya(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");$(Le,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=a.createWebChannel(h,c);this.I_(f);let p=!1,m=!1;const E=new yE({Ho:R=>{m?$(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(p||($(Le,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),$(Le,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Jo:()=>f.close()});return Br(f,Wr.EventType.OPEN,(()=>{m||($(Le,`RPC '${e}' stream ${s} transport opened.`),E.i_())})),Br(f,Wr.EventType.CLOSE,(()=>{m||(m=!0,$(Le,`RPC '${e}' stream ${s} transport closed`),E.o_(),this.E_(f))})),Br(f,Wr.EventType.ERROR,(R=>{m||(m=!0,Sn(Le,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),E.o_(new j(V.UNAVAILABLE,"The operation could not be completed")))})),Br(f,Wr.EventType.MESSAGE,(R=>{if(!m){const P=R.data[0];pe(!!P,16349);const S=P,O=S?.error||S[0]?.error;if(O){$(Le,`RPC '${e}' stream ${s} received error:`,O);const F=O.status;let B=(function(M){const w=Ie[M];if(w!==void 0)return rf(w)})(F),q=O.message;F==="NOT_FOUND"&&q.includes("database")&&q.includes("does not exist")&&q.includes(this.databaseId.database)&&Sn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),B===void 0&&(B=V.INTERNAL,q="Unknown error status: "+F+" with message "+O.message),m=!0,E.o_(new j(B,q)),f.close()}else $(Le,`RPC '${e}' stream ${s} received:`,P),E.__(P)}})),Zn.u_(),setTimeout((()=>{E.s_()}),0),E}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Id()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(n){return new Zn(n)}function Lo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n){return new Iw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn.c_=!1;class vf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="PersistentStream";class wf{constructor(e,t,r,s,i,a,c,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Ct(t.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new j(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return $(Lu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():($(Lu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wE extends wf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Rw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?gt(a.readTime):re.min()})(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=ga(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=ua(u)?{documents:Pw(i,u)}:{query:kw(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=af(i,a.resumeToken);const h=fa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(re.min())>0){c.readTime=wi(i,a.snapshotVersion.toTimestamp());const h=fa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=Dw(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=ga(this.serializer),t.removeTarget=e,this.K_(t)}}class EE extends wf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Cw(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ga(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Sw(this.serializer,r)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{}class IE extends TE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,pa(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(V.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,pa(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(V.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function bE(n,e,t,r){return new IE(n,e,t,r)}class AE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ct(t),this.aa=!1):$("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="RemoteStore";class RE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((a=>{r.enqueueAndForget((async()=>{On(this)&&($(Cn,"Restarting streams for network reachability change."),await(async function(u){const h=se(u);h.Ea.add(4),await Is(h),h.Va.set("Unknown"),h.Ea.delete(4),await Wi(h)})(this))}))})),this.Va=new AE(r,s)}}async function Wi(n){if(On(n))for(const e of n.Ra)await e(!0)}async function Is(n){for(const e of n.Ra)await e(!1)}function Ef(n,e){const t=se(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ic(t)?sc(t):yr(t).O_()&&rc(t,e))}function nc(n,e){const t=se(n),r=yr(t);t.Ia.delete(e),r.O_()&&Tf(t,e),t.Ia.size===0&&(r.O_()?r.L_():On(t)&&t.Va.set("Unknown"))}function rc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}yr(n).Z_(e)}function Tf(n,e){n.da.$e(e),yr(n).X_(e)}function sc(n){n.da=new vw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),yr(n).start(),n.Va.ua()}function ic(n){return On(n)&&!yr(n).x_()&&n.Ia.size>0}function On(n){return se(n).Ea.size===0}function If(n){n.da=void 0}async function SE(n){n.Va.set("Online")}async function CE(n){n.Ia.forEach(((e,t)=>{rc(n,e)}))}async function PE(n,e){If(n),ic(n)?(n.Va.ha(e),sc(n)):n.Va.set("Unknown")}async function kE(n,e,t){if(n.Va.set("Online"),e instanceof of&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(r){$(Cn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ti(n,r)}else if(e instanceof ii?n.da.Xe(e):e instanceof sf?n.da.st(e):n.da.tt(e),!t.isEqual(re.min()))try{const r=await yf(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.da.Tt(a);return c.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Oe.EMPTY_BYTE_STRING,f.snapshotVersion)),Tf(i,u);const p=new Ht(f.target,u,h,f.sequenceNumber);rc(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){$(Cn,"Failed to raise snapshot:",r),await Ti(n,r)}}async function Ti(n,e,t){if(!gr(e))throw e;n.Ea.add(1),await Is(n),n.Va.set("Offline"),t||(t=()=>yf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{$(Cn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Wi(n)}))}function bf(n,e){return e().catch((t=>Ti(n,t,e)))}async function Hi(n){const e=se(n),t=tn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ja;for(;VE(e);)try{const s=await hE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,DE(e,s)}catch(s){await Ti(e,s)}Af(e)&&Rf(e)}function VE(n){return On(n)&&n.Ta.length<10}function DE(n,e){n.Ta.push(e);const t=tn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Af(n){return On(n)&&!tn(n).x_()&&n.Ta.length>0}function Rf(n){tn(n).start()}async function xE(n){tn(n).ra()}async function NE(n){const e=tn(n);for(const t of n.Ta)e.ea(t.mutations)}async function OE(n,e,t){const r=n.Ta.shift(),s=Qa.from(r,e,t);await bf(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Hi(n)}async function ME(n,e){e&&tn(n).Y_&&await(async function(r,s){if((function(a){return gw(a)&&a!==V.ABORTED})(s.code)){const i=r.Ta.shift();tn(r).B_(),await bf(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Hi(r)}})(n,e),Af(n)&&Rf(n)}async function Fu(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),$(Cn,"RemoteStore received new credentials");const r=On(t);t.Ea.add(3),await Is(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Wi(t)}async function LE(n,e){const t=se(n);e?(t.Ea.delete(2),await Wi(t)):e||(t.Ea.add(2),await Is(t),t.Va.set("Unknown"))}function yr(n){return n.ma||(n.ma=(function(t,r,s){const i=se(t);return i.sa(),new wE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:SE.bind(null,n),Yo:CE.bind(null,n),t_:PE.bind(null,n),J_:kE.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),ic(n)?sc(n):n.Va.set("Unknown")):(await n.ma.stop(),If(n))}))),n.ma}function tn(n){return n.fa||(n.fa=(function(t,r,s){const i=se(t);return i.sa(),new EE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:xE.bind(null,n),t_:ME.bind(null,n),ta:NE.bind(null,n),na:OE.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Hi(n)):(await n.fa.stop(),n.Ta.length>0&&($(Cn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new oc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ac(n,e){if(Ct("AsyncQueue",`${e}: ${n}`),gr(n))return new j(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{static emptySet(e){return new er(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||J.comparator(t.key,r.key):(t,r)=>J.comparator(t.key,r.key),this.keyedMap=Hr(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof er)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new er;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.ga=new ve(J.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Z(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class lr{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new lr(e,t,er.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ui(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class UE{constructor(){this.queries=Bu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=se(t),i=s.queries;s.queries=Bu(),i.forEach(((a,c)=>{for(const u of c.ba)u.onError(r)}))})(this,new j(V.ABORTED,"Firestore shutting down"))}}function Bu(){return new Nn((n=>Wd(n)),Ui)}async function Sf(n,e){const t=se(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new FE,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ac(a,`Initialization of query '${zn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&cc(t)}async function Cf(n,e){const t=se(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ba.indexOf(e);a>=0&&(i.ba.splice(a,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function BE(n,e){const t=se(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.ba)c.Fa(s)&&(r=!0);a.wa=s}}r&&cc(t)}function jE(n,e,t){const r=se(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function cc(n){n.Ca.forEach((e=>{e.next()}))}var va,ju;(ju=va||(va={})).Ma="default",ju.Cache="cache";class Pf{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new lr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==va.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.key=e}}class Vf{constructor(e){this.key=e}}class qE{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=le(),this.mutatedKeys=le(),this.eu=Hd(e),this.tu=new er(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Uu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),E=Bi(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let S=!1;m&&E?m.data.isEqual(E.data)?R!==P&&(r.track({type:3,doc:E}),S=!0):this.su(m,E)||(r.track({type:2,doc:E}),S=!0,(u&&this.eu(E,u)>0||h&&this.eu(E,h)<0)&&(c=!0)):!m&&E?(r.track({type:0,doc:E}),S=!0):m&&!E&&(r.track({type:1,doc:m}),S=!0,(u||h)&&(c=!0)),S&&(E?(a=a.add(E),i=P?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Ss:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,p)=>(function(E,R){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:S})}};return P(E)-P(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,a.length!==0||h?{snapshot:new lr(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Uu,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=le(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new Vf(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new kf(r))})),t}cu(e){this.Za=e.ks,this.Ya=le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return lr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const lc="SyncEngine";class $E{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zE{constructor(e){this.key=e,this.hu=!1}}class WE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Nn((c=>Wd(c)),Ui),this.Iu=new Map,this.Eu=new Set,this.Ru=new ve(J.comparator),this.Au=new Map,this.Vu=new Xa,this.du={},this.mu=new Map,this.fu=cr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function HE(n,e,t=!0){const r=Lf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Df(r,e,t,!0),s}async function GE(n,e){const t=Lf(n);await Df(t,e,!0,!1)}async function Df(n,e,t,r){const s=await dE(n.localStore,mt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await KE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ef(n.remoteStore,s),c}async function KE(n,e,t,r,s){n.pu=(p,m,E)=>(async function(P,S,O,F){let B=S.view.ru(O);B.Ss&&(B=await xu(P.localStore,S.query,!1).then((({documents:w})=>S.view.ru(w,B))));const q=F&&F.targetChanges.get(S.targetId),Q=F&&F.targetMismatches.get(S.targetId)!=null,M=S.view.applyChanges(B,P.isPrimaryClient,q,Q);return $u(P,S.targetId,M.au),M.snapshot})(n,p,m,E);const i=await xu(n.localStore,e,!0),a=new qE(e,i.ks),c=a.ru(i.documents),u=Ts.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);$u(n,t,h.au);const f=new $E(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function QE(n,e,t){const r=se(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!Ui(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _a(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&nc(r.remoteStore,s.targetId),wa(r,s.targetId)})).catch(mr)):(wa(r,s.targetId),await _a(r.localStore,s.targetId,!0))}async function YE(n,e){const t=se(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),nc(t.remoteStore,r.targetId))}async function JE(n,e,t){const r=sT(n);try{const s=await(function(a,c){const u=se(a),h=ye.now(),f=c.reduce(((E,R)=>E.add(R.key)),le());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let R=Pt(),P=le();return u.xs.getEntries(E,f).next((S=>{R=S,R.forEach(((O,F)=>{F.isValidDocument()||(P=P.add(O))}))})).next((()=>u.localDocuments.getOverlayedDocuments(E,R))).next((S=>{p=S;const O=[];for(const F of c){const B=hw(F,p.get(F.key).overlayedDocument);B!=null&&O.push(new ln(F.key,B,Ld(B.value.mapValue),Ze.exists(!0)))}return u.mutationQueue.addMutationBatch(E,h,O,c)})).next((S=>{m=S;const O=S.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(E,S.batchId,O)}))})).then((()=>({batchId:m.batchId,changes:Kd(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let h=a.du[a.currentUser.toKey()];h||(h=new ve(ce)),h=h.insert(c,u),a.du[a.currentUser.toKey()]=h})(r,s.batchId,t),await bs(r,s.changes),await Hi(r.remoteStore)}catch(s){const i=ac(s,"Failed to persist write");t.reject(i)}}async function xf(n,e){const t=se(n);try{const r=await lE(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?pe(a.hu,14607):s.removedDocuments.size>0&&(pe(a.hu,42227),a.hu=!1))})),await bs(t,r,e)}catch(r){await mr(r)}}function qu(n,e,t){const r=se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=se(a);u.onlineState=c;let h=!1;u.queries.forEach(((f,p)=>{for(const m of p.ba)m.va(c)&&(h=!0)})),h&&cc(u)})(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XE(n,e,t){const r=se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ve(J.comparator);a=a.insert(i,Ue.newNoDocument(i,re.min()));const c=le().add(i),u=new $i(re.min(),new Map,new ve(ce),a,c);await xf(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),uc(r)}else await _a(r.localStore,e,!1).then((()=>wa(r,e,t))).catch(mr)}async function ZE(n,e){const t=se(n),r=e.batch.batchId;try{const s=await cE(t.localStore,e);Of(t,r,null),Nf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await bs(t,s)}catch(s){await mr(s)}}async function eT(n,e,t){const r=se(n);try{const s=await(function(a,c){const u=se(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next((p=>(pe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);Of(r,e,t),Nf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await bs(r,s)}catch(s){await mr(s)}}function Nf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Of(n,e,t){const r=se(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function wa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||Mf(n,r)}))}function Mf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(nc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),uc(n))}function $u(n,e,t){for(const r of t)r instanceof kf?(n.Vu.addReference(r.key,e),tT(n,r)):r instanceof Vf?($(lc,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Mf(n,r.key)):Z(19791,{wu:r})}function tT(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||($(lc,"New document in limbo: "+t),n.Eu.add(r),uc(n))}function uc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new J(ge.fromString(e)),r=n.fu.next();n.Au.set(r,new zE(t)),n.Ru=n.Ru.insert(t,r),Ef(n.remoteStore,new Ht(mt(Ha(t.path)),r,"TargetPurposeLimboResolution",Mi.ce))}}async function bs(n,e,t){const r=se(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{a.push(r.pu(u,e,t).then((h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=ec.Es(u.targetId,h);i.push(f)}})))})),await Promise.all(a),r.Pu.J_(s),await(async function(u,h){const f=se(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>D.forEach(h,(m=>D.forEach(m.Ts,(E=>f.persistence.referenceDelegate.addReference(p,m.targetId,E))).next((()=>D.forEach(m.Is,(E=>f.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))))))}catch(p){if(!gr(p))throw p;$(tc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const E=f.vs.get(m),R=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(m,P)}}})(r.localStore,i))}async function nT(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){$(lc,"User change. New user:",e.toKey());const r=await _f(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((u=>{u.reject(new j(V.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bs(t,r.Ns)}}function rT(n,e){const t=se(n),r=t.Au.get(e);if(r&&r.hu)return le().add(r.key);{let s=le();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Lf(n){const e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XE.bind(null,e),e.Pu.J_=BE.bind(null,e.eventManager),e.Pu.yu=jE.bind(null,e.eventManager),e}function sT(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eT.bind(null,e),e}class Ii{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return aE(this.persistence,new sE,e.initialUser,this.serializer)}Cu(e){return new gf(Za.Vi,this.serializer)}Du(e){return new pE}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ii.provider={build:()=>new Ii};class iT extends Ii{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){pe(this.persistence.referenceDelegate instanceof Ei,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $w(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new gf((r=>Ei.Vi(r,t)),this.serializer)}}class Ea{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nT.bind(null,this.syncEngine),await LE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new UE})()}createDatastore(e){const t=zi(e.databaseInfo.databaseId),r=vE(e.databaseInfo);return bE(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new RE(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>qu(this.syncEngine,t,0)),(function(){return Mu.v()?new Mu:new mE})())}createSyncEngine(e,t){return(function(s,i,a,c,u,h,f){const p=new WE(s,i,a,c,u,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=se(t);$(Cn,"RemoteStore shutting down."),r.Ea.add(5),await Is(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ea.provider={build:()=>new Ea};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="FirestoreClient";class oT{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=Ba.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{$(nn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>($(nn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ac(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Fo(n,e){n.asyncQueue.verifyOperationInProgress(),$(nn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await _f(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function zu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aT(n);$(nn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Fu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Fu(e.remoteStore,s))),n._onlineComponents=e}async function aT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(nn,"Using user provided OfflineComponentProvider");try{await Fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Sn("Error using user provided cache. Falling back to memory cache: "+t),await Fo(n,new Ii)}}else $(nn,"Using default OfflineComponentProvider"),await Fo(n,new iT(void 0));return n._offlineComponents}async function Uf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(nn,"Using user provided OnlineComponentProvider"),await zu(n,n._uninitializedComponentsProvider._online)):($(nn,"Using default OnlineComponentProvider"),await zu(n,new Ea))),n._onlineComponents}function cT(n){return Uf(n).then((e=>e.syncEngine))}async function Bf(n){const e=await Uf(n),t=e.eventManager;return t.onListen=HE.bind(null,e.syncEngine),t.onUnlisten=QE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=YE.bind(null,e.syncEngine),t}function lT(n,e,t={}){const r=new At;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,h){const f=new Ff({next:m=>{f.Nu(),a.enqueueAndForget((()=>Cf(i,p)));const E=m.docs.has(c);!E&&m.fromCache?h.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?h.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Pf(Ha(c.path),f,{includeMetadataChanges:!0,Ka:!0});return Sf(i,p)})(await Bf(n),n.asyncQueue,e,t,r))),r.promise}function uT(n,e,t={}){const r=new At;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,h){const f=new Ff({next:m=>{f.Nu(),a.enqueueAndForget((()=>Cf(i,p))),m.fromCache&&u.source==="server"?h.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Pf(c,f,{includeMetadataChanges:!0,Ka:!0});return Sf(i,p)})(await Bf(n),n.asyncQueue,e,t,r))),r.promise}function hT(n,e){const t=new At;return n.asyncQueue.enqueueAndForget((async()=>JE(await cT(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="ComponentProvider",Wu=new Map;function fT(n,e,t,r,s){return new Dv(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,jf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="firestore.googleapis.com",Hu=!0;class Gu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qf,this.ssl=Hu}else this.host=e.host,this.ssl=e.ssl??Hu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jw)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ev("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new hv;switch(r.type){case"firstParty":return new mv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Wu.get(t);r&&($(dT,"Removing Datastore"),Wu.delete(t),r.terminate())})(this),Promise.resolve()}}function pT(n,e,t,r={}){n=st(n,Gi);const s=hr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Vh(`https://${c}`),Dh("Firestore",!0)),i.host!==qf&&i.host!==c&&Sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Tn(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Fe.MOCK_USER;else{h=bm(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new j(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Fe(p)}n._authCredentials=new dv(new Ad(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class Te{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}toJSON(){return{type:Te._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ws(t,Te._jsonSchema))return new Te(e,r||null,new J(ge.fromString(t.referencePath)))}}Te._jsonSchemaVersion="firestore/documentReference/1.0",Te._jsonSchema={type:Ae("string",Te._jsonSchemaVersion),referencePath:Ae("string")};class Yt extends Mn{constructor(e,t,r){super(e,t,Ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new J(e))}withConverter(e){return new Yt(this.firestore,e,this._path)}}function hA(n,e,...t){if(n=ke(n),Rd("collection","path",e),n instanceof Gi){const r=ge.fromString(e,...t);return ou(r),new Yt(n,null,r)}{if(!(n instanceof Te||n instanceof Yt))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return ou(r),new Yt(n.firestore,null,r)}}function mT(n,e,...t){if(n=ke(n),arguments.length===1&&(e=Ba.newId()),Rd("doc","path",e),n instanceof Gi){const r=ge.fromString(e,...t);return iu(r),new Te(n,null,new J(r))}{if(!(n instanceof Te||n instanceof Yt))throw new j(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return iu(r),new Te(n.firestore,n instanceof Yt?n.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="AsyncQueue";class Qu{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vf(this,"async_queue_retry"),this._c=()=>{const r=Lo();r&&$(Ku,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Lo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Lo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new At;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!gr(e))throw e;$(Ku,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ct("INTERNAL UNHANDLED ERROR: ",Yu(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=oc.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&Z(47125,{Pc:Yu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Yu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ln extends Gi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Qu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qu(e),this._firestoreClient=void 0,await e}}}function dA(n,e){const t=typeof n=="object"?n:Oh(),r=typeof n=="string"?n:gi,s=ka(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Tm("firestore");i&&pT(s,...i)}return s}function hc(n){if(n._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gT(n),n._firestoreClient}function gT(n){const e=n._freezeSettings(),t=fT(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new oT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xe(Oe.fromBase64String(e))}catch(t){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xe(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ws(e,Xe._jsonSchema))return Xe.fromBase64String(e.bytes)}}Xe._jsonSchemaVersion="firestore/bytes/1.0",Xe._jsonSchema={type:Ae("string",Xe._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_t._jsonSchemaVersion}}static fromJSON(e){if(ws(e,_t._jsonSchema))return new _t(e.latitude,e.longitude)}}_t._jsonSchemaVersion="firestore/geoPoint/1.0",_t._jsonSchema={type:Ae("string",_t._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ws(e,nt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new nt(e.vectorValues);throw new j(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nt._jsonSchemaVersion="firestore/vectorValue/1.0",nt._jsonSchema={type:Ae("string",nt._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=/^__.*__$/;class yT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new Es(e,this.data,t,this.fieldTransforms)}}class $f{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ln(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:n})}}class fc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new fc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return bi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(zf(this.dataSource)&&_T.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class vT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zi(e)}createContext(e,t,r,s=!1){return new fc({dataSource:e,methodName:t,targetDoc:r,path:Ne.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qi(n){const e=n._freezeSettings(),t=zi(n._databaseId);return new vT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Wf(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);mc("Data must be an object, but it was:",a,r);const c=Hf(r,a);let u,h;if(i.merge)u=new Ye(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Pn(e,p,t);if(!a.contains(m))throw new j(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Qf(f,m)||f.push(m)}u=new Ye(f),h=a.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,h=a.fieldTransforms;return new yT(new We(c),u,h)}class Yi extends Ki{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yi}}class pc extends Ki{_toFieldTransform(e){return new aw(e.path,new ls)}isEqual(e){return e instanceof pc}}function wT(n,e,t,r){const s=n.createContext(1,e,t);mc("Data must be an object, but it was:",s,r);const i=[],a=We.empty();cn(r,((u,h)=>{const f=Kf(e,u,t);h=ke(h);const p=s.childContextForFieldPath(f);if(h instanceof Yi)i.push(f);else{const m=As(h,p);m!=null&&(i.push(f),a.set(f,m))}}));const c=new Ye(i);return new $f(a,c,s.fieldTransforms)}function ET(n,e,t,r,s,i){const a=n.createContext(1,e,t),c=[Pn(e,r,t)],u=[s];if(i.length%2!=0)throw new j(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Pn(e,i[m])),u.push(i[m+1]);const h=[],f=We.empty();for(let m=c.length-1;m>=0;--m)if(!Qf(h,c[m])){const E=c[m];let R=u[m];R=ke(R);const P=a.childContextForFieldPath(E);if(R instanceof Yi)h.push(E);else{const S=As(R,P);S!=null&&(h.push(E),f.set(E,S))}}const p=new Ye(h);return new $f(f,p,a.fieldTransforms)}function TT(n,e,t,r=!1){return As(t,n.createContext(r?4:3,e))}function As(n,e){if(Gf(n=ke(n)))return mc("Unsupported field value:",e,n),Hf(n,e);if(n instanceof Ki)return(function(r,s){if(!zf(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=As(c,s.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ye.fromDate(r);return{timestampValue:wi(s.serializer,i)}}if(r instanceof ye){const i=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wi(s.serializer,i)}}if(r instanceof _t)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xe)return{bytesValue:af(s.serializer,r._byteString)};if(r instanceof Te){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ja(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof nt)return(function(a,c){const u=a instanceof nt?a.toArray():a;return{mapValue:{fields:{[Od]:{stringValue:Md},[_i]:{arrayValue:{values:u.map((f=>{if(typeof f!="number")throw c.createError("VectorValues must only contain numeric values.");return Ga(c.serializer,f)}))}}}}}})(r,s);if(pf(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Oi(r)}`)})(n,e)}function Hf(n,e){const t={};return Pd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,((r,s)=>{const i=As(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Gf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof _t||n instanceof Xe||n instanceof Te||n instanceof Ki||n instanceof nt||pf(n))}function mc(n,e,t){if(!Gf(t)||!Sd(t)){const r=Oi(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Pn(n,e,t){if((e=ke(e))instanceof dc)return e._internalPath;if(typeof e=="string")return Kf(n,e);throw bi("Field path arguments must be of type string or ",n,!1,void 0,t)}const IT=new RegExp("[~\\*/\\[\\]]");function Kf(n,e,t){if(e.search(IT)>=0)throw bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dc(...e.split("."))._internalPath}catch{throw bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new j(V.INVALID_ARGUMENT,c+n+u)}function Qf(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return cn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){const t=e.fields?.[_i].arrayValue?.values?.map((r=>Ee(r.doubleValue)));return new nt(t)}convertGeoPoint(e){return new _t(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(is(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);pe(ff(r),9688,{name:e});const s=new os(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(t)||Ct(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf extends bT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}}function fA(){return new pc("serverTimestamp")}const Ju="@firebase/firestore",Xu="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Pn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class AT extends Jf{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gc{}class Xf extends gc{}function pA(n,e,...t){let r=[];e instanceof gc&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof _c)).length,c=i.filter((u=>u instanceof Ji)).length;if(a>1||a>0&&c>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Ji extends Xf{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ji(e,t,r)}_apply(e){const t=this._parse(e);return Zf(e._query,t),new Mn(e.firestore,e.converter,ha(e._query,t))}_parse(e){const t=Qi(e.firestore);return(function(i,a,c,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){eh(p,f);const R=[];for(const P of p)R.push(Zu(u,i,P));m={arrayValue:{values:R}}}else m=Zu(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||eh(p,f),m=TT(c,a,p,f==="in"||f==="not-in");return be.create(h,f,m)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function mA(n,e,t){const r=e,s=Pn("where",n);return Ji._create(s,r,t)}class _c extends gc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _c(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:it.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Zf(a,u),a=ha(a,u)})(e._query,t),new Mn(e.firestore,e.converter,ha(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yc extends Xf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new yc(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cs(i,a)})(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,Yv(e._query,t))}}function gA(n,e="asc"){const t=e,r=Pn("orderBy",n);return yc._create(r,t)}function Zu(n,e,t){if(typeof(t=ke(t))=="string"){if(t==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zd(e)&&t.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!J.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pu(n,new J(r))}if(t instanceof Te)return pu(n,t._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oi(t)}.`)}function eh(n,e){if(!Array.isArray(n)||n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zf(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function ep(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Kr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class En extends Jf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=En._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}En._jsonSchemaVersion="firestore/documentSnapshot/1.0",En._jsonSchema={type:Ae("string",En._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class oi extends En{data(e={}){return super.data(e)}}class tr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Kr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new oi(this._firestore,this._userDataWriter,r.key,r,new Kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new oi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new oi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:ST(c.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ba.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ST(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr._jsonSchemaVersion="firestore/querySnapshot/1.0",tr._jsonSchema={type:Ae("string",tr._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){n=st(n,Te);const e=st(n.firestore,Ln),t=hc(e);return lT(t,n._key).then((r=>CT(e,n,r)))}function yA(n){n=st(n,Mn);const e=st(n.firestore,Ln),t=hc(e),r=new Yf(e);return RT(n._query),uT(t,n._query).then((s=>new tr(e,r,n,s)))}function vA(n,e,t){n=st(n,Te);const r=st(n.firestore,Ln),s=ep(n.converter,e,t),i=Qi(r);return Xi(r,[Wf(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ze.none())])}function wA(n,e,t,...r){n=st(n,Te);const s=st(n.firestore,Ln),i=Qi(s);let a;return a=typeof(e=ke(e))=="string"||e instanceof dc?ET(i,"updateDoc",n._key,e,t,r):wT(i,"updateDoc",n._key,e),Xi(s,[a.toMutation(n._key,Ze.exists(!0))])}function EA(n){return Xi(st(n.firestore,Ln),[new Ka(n._key,Ze.none())])}function TA(n,e){const t=st(n.firestore,Ln),r=mT(n),s=ep(n.converter,e),i=Qi(n.firestore);return Xi(t,[Wf(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ze.exists(!1))]).then((()=>r))}function Xi(n,e){const t=hc(n);return hT(t,e)}function CT(n,e,t){const r=t.docs.get(e._key),s=new Yf(n);return new En(n,s,e._key,r,new Kr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){uv(dr),rr(new In("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ln(new fv(r.getProvider("auth-internal")),new gv(a,r.getProvider("app-check-internal")),xv(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),wn(Ju,Xu,e),wn(Ju,Xu,"esm2020")})();function tp(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=tp(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function PT(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=tp(n))&&(r&&(r+=" "),r+=e);return r}const th=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,nh=PT,IA=(n,e)=>t=>{var r;if(e?.variants==null)return nh(n,t?.class,t?.className);const{variants:s,defaultVariants:i}=e,a=Object.keys(s).map(h=>{const f=t?.[h],p=i?.[h];if(f===null)return null;const m=th(f)||th(p);return s[h][m]}),c=t&&Object.entries(t).reduce((h,f)=>{let[p,m]=f;return m===void 0||(h[p]=m),h},{}),u=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((h,f)=>{let{class:p,className:m,...E}=f;return Object.entries(E).every(R=>{let[P,S]=R;return Array.isArray(S)?S.includes({...i,...c}[P]):{...i,...c}[P]===S})?[...h,p,m]:h},[]);return nh(n,a,u,t?.class,t?.className)},kT=(n,e)=>{const t=new Array(n.length+e.length);for(let r=0;r<n.length;r++)t[r]=n[r];for(let r=0;r<e.length;r++)t[n.length+r]=e[r];return t},VT=(n,e)=>({classGroupId:n,validator:e}),np=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),Ai="-",rh=[],DT="arbitrary..",xT=n=>{const e=OT(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return NT(a);const c=a.split(Ai),u=c[0]===""&&c.length>1?1:0;return rp(c,u,e)},getConflictingClassGroupIds:(a,c)=>{if(c){const u=r[a],h=t[a];return u?h?kT(h,u):u:h||rh}return t[a]||rh}}},rp=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const s=n[e],i=t.nextPart.get(s);if(i){const h=rp(n,e+1,i);if(h)return h}const a=t.validators;if(a===null)return;const c=e===0?n.join(Ai):n.slice(e).join(Ai),u=a.length;for(let h=0;h<u;h++){const f=a[h];if(f.validator(c))return f.classGroupId}},NT=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),r=e.slice(0,t);return r?DT+r:void 0})(),OT=n=>{const{theme:e,classGroups:t}=n;return MT(t,e)},MT=(n,e)=>{const t=np();for(const r in n){const s=n[r];vc(s,t,r,e)}return t},vc=(n,e,t,r)=>{const s=n.length;for(let i=0;i<s;i++){const a=n[i];LT(a,e,t,r)}},LT=(n,e,t,r)=>{if(typeof n=="string"){FT(n,e,t);return}if(typeof n=="function"){UT(n,e,t,r);return}BT(n,e,t,r)},FT=(n,e,t)=>{const r=n===""?e:sp(e,n);r.classGroupId=t},UT=(n,e,t,r)=>{if(jT(n)){vc(n(r),e,t,r);return}e.validators===null&&(e.validators=[]),e.validators.push(VT(t,n))},BT=(n,e,t,r)=>{const s=Object.entries(n),i=s.length;for(let a=0;a<i;a++){const[c,u]=s[a];vc(u,sp(e,c),t,r)}},sp=(n,e)=>{let t=n;const r=e.split(Ai),s=r.length;for(let i=0;i<s;i++){const a=r[i];let c=t.nextPart.get(a);c||(c=np(),t.nextPart.set(a,c)),t=c}return t},jT=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,qT=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),r=Object.create(null);const s=(i,a)=>{t[i]=a,e++,e>n&&(e=0,r=t,t=Object.create(null))};return{get(i){let a=t[i];if(a!==void 0)return a;if((a=r[i])!==void 0)return s(i,a),a},set(i,a){i in t?t[i]=a:s(i,a)}}},Ta="!",sh=":",$T=[],ih=(n,e,t,r,s)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:r,isExternal:s}),zT=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=s=>{const i=[];let a=0,c=0,u=0,h;const f=s.length;for(let P=0;P<f;P++){const S=s[P];if(a===0&&c===0){if(S===sh){i.push(s.slice(u,P)),u=P+1;continue}if(S==="/"){h=P;continue}}S==="["?a++:S==="]"?a--:S==="("?c++:S===")"&&c--}const p=i.length===0?s:s.slice(u);let m=p,E=!1;p.endsWith(Ta)?(m=p.slice(0,-1),E=!0):p.startsWith(Ta)&&(m=p.slice(1),E=!0);const R=h&&h>u?h-u:void 0;return ih(i,E,m,R)};if(e){const s=e+sh,i=r;r=a=>a.startsWith(s)?i(a.slice(s.length)):ih($T,!1,a,void 0,!0)}if(t){const s=r;r=i=>t({className:i,parseClassName:s})}return r},WT=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,r)=>{e.set(t,1e6+r)}),t=>{const r=[];let s=[];for(let i=0;i<t.length;i++){const a=t[i],c=a[0]==="[",u=e.has(a);c||u?(s.length>0&&(s.sort(),r.push(...s),s=[]),r.push(a)):s.push(a)}return s.length>0&&(s.sort(),r.push(...s)),r}},HT=n=>({cache:qT(n.cacheSize),parseClassName:zT(n),sortModifiers:WT(n),...xT(n)}),GT=/\s+/,KT=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:i}=e,a=[],c=n.trim().split(GT);let u="";for(let h=c.length-1;h>=0;h-=1){const f=c[h],{isExternal:p,modifiers:m,hasImportantModifier:E,baseClassName:R,maybePostfixModifierPosition:P}=t(f);if(p){u=f+(u.length>0?" "+u:u);continue}let S=!!P,O=r(S?R.substring(0,P):R);if(!O){if(!S){u=f+(u.length>0?" "+u:u);continue}if(O=r(R),!O){u=f+(u.length>0?" "+u:u);continue}S=!1}const F=m.length===0?"":m.length===1?m[0]:i(m).join(":"),B=E?F+Ta:F,q=B+O;if(a.indexOf(q)>-1)continue;a.push(q);const Q=s(O,S);for(let M=0;M<Q.length;++M){const w=Q[M];a.push(B+w)}u=f+(u.length>0?" "+u:u)}return u},QT=(...n)=>{let e=0,t,r,s="";for(;e<n.length;)(t=n[e++])&&(r=ip(t))&&(s&&(s+=" "),s+=r);return s},ip=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=ip(n[r]))&&(t&&(t+=" "),t+=e);return t},YT=(n,...e)=>{let t,r,s,i;const a=u=>{const h=e.reduce((f,p)=>p(f),n());return t=HT(h),r=t.cache.get,s=t.cache.set,i=c,c(u)},c=u=>{const h=r(u);if(h)return h;const f=KT(u,t);return s(u,f),f};return i=a,(...u)=>i(QT(...u))},JT=[],Ce=n=>{const e=t=>t[n]||JT;return e.isThemeGetter=!0,e},op=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ap=/^\((?:(\w[\w-]*):)?(.+)\)$/i,XT=/^\d+\/\d+$/,ZT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,eI=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,tI=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,nI=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,rI=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,jn=n=>XT.test(n),oe=n=>!!n&&!Number.isNaN(Number(n)),jt=n=>!!n&&Number.isInteger(Number(n)),Uo=n=>n.endsWith("%")&&oe(n.slice(0,-1)),Tt=n=>ZT.test(n),sI=()=>!0,iI=n=>eI.test(n)&&!tI.test(n),cp=()=>!1,oI=n=>nI.test(n),aI=n=>rI.test(n),cI=n=>!H(n)&&!G(n),lI=n=>vr(n,hp,cp),H=n=>op.test(n),gn=n=>vr(n,dp,iI),Bo=n=>vr(n,pI,oe),oh=n=>vr(n,lp,cp),uI=n=>vr(n,up,aI),Hs=n=>vr(n,fp,oI),G=n=>ap.test(n),jr=n=>wr(n,dp),hI=n=>wr(n,mI),ah=n=>wr(n,lp),dI=n=>wr(n,hp),fI=n=>wr(n,up),Gs=n=>wr(n,fp,!0),vr=(n,e,t)=>{const r=op.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},wr=(n,e,t=!1)=>{const r=ap.exec(n);return r?r[1]?e(r[1]):t:!1},lp=n=>n==="position"||n==="percentage",up=n=>n==="image"||n==="url",hp=n=>n==="length"||n==="size"||n==="bg-size",dp=n=>n==="length",pI=n=>n==="number",mI=n=>n==="family-name",fp=n=>n==="shadow",gI=()=>{const n=Ce("color"),e=Ce("font"),t=Ce("text"),r=Ce("font-weight"),s=Ce("tracking"),i=Ce("leading"),a=Ce("breakpoint"),c=Ce("container"),u=Ce("spacing"),h=Ce("radius"),f=Ce("shadow"),p=Ce("inset-shadow"),m=Ce("text-shadow"),E=Ce("drop-shadow"),R=Ce("blur"),P=Ce("perspective"),S=Ce("aspect"),O=Ce("ease"),F=Ce("animate"),B=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Q=()=>[...q(),G,H],M=()=>["auto","hidden","clip","visible","scroll"],w=()=>["auto","contain","none"],_=()=>[G,H,u],v=()=>[jn,"full","auto",..._()],I=()=>[jt,"none","subgrid",G,H],T=()=>["auto",{span:["full",jt,G,H]},jt,G,H],b=()=>[jt,"auto",G,H],y=()=>["auto","min","max","fr",G,H],ee=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ue=()=>["start","end","center","stretch","center-safe","end-safe"],x=()=>["auto",..._()],z=()=>[jn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",..._()],k=()=>[n,G,H],te=()=>[...q(),ah,oh,{position:[G,H]}],he=()=>["no-repeat",{repeat:["","x","y","space","round"]}],He=()=>["auto","cover","contain",dI,lI,{size:[G,H]}],N=()=>[Uo,jr,gn],W=()=>["","none","full",h,G,H],Y=()=>["",oe,jr,gn],K=()=>["solid","dashed","dotted","double"],fe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ne=()=>[oe,Uo,ah,oh],Re=()=>["","none",R,G,H],je=()=>["none",oe,G,H],et=()=>["none",oe,G,H],Ir=()=>[oe,G,H],un=()=>[jn,"full",..._()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Tt],breakpoint:[Tt],color:[sI],container:[Tt],"drop-shadow":[Tt],ease:["in","out","in-out"],font:[cI],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Tt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Tt],shadow:[Tt],spacing:["px",oe],text:[Tt],"text-shadow":[Tt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",jn,H,G,S]}],container:["container"],columns:[{columns:[oe,H,G,c]}],"break-after":[{"break-after":B()}],"break-before":[{"break-before":B()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Q()}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:w()}],"overscroll-x":[{"overscroll-x":w()}],"overscroll-y":[{"overscroll-y":w()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:v()}],"inset-x":[{"inset-x":v()}],"inset-y":[{"inset-y":v()}],start:[{start:v()}],end:[{end:v()}],top:[{top:v()}],right:[{right:v()}],bottom:[{bottom:v()}],left:[{left:v()}],visibility:["visible","invisible","collapse"],z:[{z:[jt,"auto",G,H]}],basis:[{basis:[jn,"full","auto",c,..._()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[oe,jn,"auto","initial","none",H]}],grow:[{grow:["",oe,G,H]}],shrink:[{shrink:["",oe,G,H]}],order:[{order:[jt,"first","last","none",G,H]}],"grid-cols":[{"grid-cols":I()}],"col-start-end":[{col:T()}],"col-start":[{"col-start":b()}],"col-end":[{"col-end":b()}],"grid-rows":[{"grid-rows":I()}],"row-start-end":[{row:T()}],"row-start":[{"row-start":b()}],"row-end":[{"row-end":b()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":y()}],"auto-rows":[{"auto-rows":y()}],gap:[{gap:_()}],"gap-x":[{"gap-x":_()}],"gap-y":[{"gap-y":_()}],"justify-content":[{justify:[...ee(),"normal"]}],"justify-items":[{"justify-items":[...ue(),"normal"]}],"justify-self":[{"justify-self":["auto",...ue()]}],"align-content":[{content:["normal",...ee()]}],"align-items":[{items:[...ue(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ue(),{baseline:["","last"]}]}],"place-content":[{"place-content":ee()}],"place-items":[{"place-items":[...ue(),"baseline"]}],"place-self":[{"place-self":["auto",...ue()]}],p:[{p:_()}],px:[{px:_()}],py:[{py:_()}],ps:[{ps:_()}],pe:[{pe:_()}],pt:[{pt:_()}],pr:[{pr:_()}],pb:[{pb:_()}],pl:[{pl:_()}],m:[{m:x()}],mx:[{mx:x()}],my:[{my:x()}],ms:[{ms:x()}],me:[{me:x()}],mt:[{mt:x()}],mr:[{mr:x()}],mb:[{mb:x()}],ml:[{ml:x()}],"space-x":[{"space-x":_()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":_()}],"space-y-reverse":["space-y-reverse"],size:[{size:z()}],w:[{w:[c,"screen",...z()]}],"min-w":[{"min-w":[c,"screen","none",...z()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[a]},...z()]}],h:[{h:["screen","lh",...z()]}],"min-h":[{"min-h":["screen","lh","none",...z()]}],"max-h":[{"max-h":["screen","lh",...z()]}],"font-size":[{text:["base",t,jr,gn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,G,Bo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Uo,H]}],"font-family":[{font:[hI,H,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,G,H]}],"line-clamp":[{"line-clamp":[oe,"none",G,Bo]}],leading:[{leading:[i,..._()]}],"list-image":[{"list-image":["none",G,H]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",G,H]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:[oe,"from-font","auto",G,gn]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[oe,"auto",G,H]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G,H]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G,H]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:te()}],"bg-repeat":[{bg:he()}],"bg-size":[{bg:He()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},jt,G,H],radial:["",G,H],conic:[jt,G,H]},fI,uI]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:N()}],"gradient-via-pos":[{via:N()}],"gradient-to-pos":[{to:N()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:W()}],"rounded-s":[{"rounded-s":W()}],"rounded-e":[{"rounded-e":W()}],"rounded-t":[{"rounded-t":W()}],"rounded-r":[{"rounded-r":W()}],"rounded-b":[{"rounded-b":W()}],"rounded-l":[{"rounded-l":W()}],"rounded-ss":[{"rounded-ss":W()}],"rounded-se":[{"rounded-se":W()}],"rounded-ee":[{"rounded-ee":W()}],"rounded-es":[{"rounded-es":W()}],"rounded-tl":[{"rounded-tl":W()}],"rounded-tr":[{"rounded-tr":W()}],"rounded-br":[{"rounded-br":W()}],"rounded-bl":[{"rounded-bl":W()}],"border-w":[{border:Y()}],"border-w-x":[{"border-x":Y()}],"border-w-y":[{"border-y":Y()}],"border-w-s":[{"border-s":Y()}],"border-w-e":[{"border-e":Y()}],"border-w-t":[{"border-t":Y()}],"border-w-r":[{"border-r":Y()}],"border-w-b":[{"border-b":Y()}],"border-w-l":[{"border-l":Y()}],"divide-x":[{"divide-x":Y()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Y()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...K(),"hidden","none"]}],"divide-style":[{divide:[...K(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...K(),"none","hidden"]}],"outline-offset":[{"outline-offset":[oe,G,H]}],"outline-w":[{outline:["",oe,jr,gn]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",f,Gs,Hs]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",p,Gs,Hs]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[oe,gn]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":Y()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",m,Gs,Hs]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[oe,G,H]}],"mix-blend":[{"mix-blend":[...fe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":fe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[oe]}],"mask-image-linear-from-pos":[{"mask-linear-from":ne()}],"mask-image-linear-to-pos":[{"mask-linear-to":ne()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":ne()}],"mask-image-t-to-pos":[{"mask-t-to":ne()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":ne()}],"mask-image-r-to-pos":[{"mask-r-to":ne()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":ne()}],"mask-image-b-to-pos":[{"mask-b-to":ne()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":ne()}],"mask-image-l-to-pos":[{"mask-l-to":ne()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":ne()}],"mask-image-x-to-pos":[{"mask-x-to":ne()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":ne()}],"mask-image-y-to-pos":[{"mask-y-to":ne()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[G,H]}],"mask-image-radial-from-pos":[{"mask-radial-from":ne()}],"mask-image-radial-to-pos":[{"mask-radial-to":ne()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":q()}],"mask-image-conic-pos":[{"mask-conic":[oe]}],"mask-image-conic-from-pos":[{"mask-conic-from":ne()}],"mask-image-conic-to-pos":[{"mask-conic-to":ne()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:te()}],"mask-repeat":[{mask:he()}],"mask-size":[{mask:He()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",G,H]}],filter:[{filter:["","none",G,H]}],blur:[{blur:Re()}],brightness:[{brightness:[oe,G,H]}],contrast:[{contrast:[oe,G,H]}],"drop-shadow":[{"drop-shadow":["","none",E,Gs,Hs]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",oe,G,H]}],"hue-rotate":[{"hue-rotate":[oe,G,H]}],invert:[{invert:["",oe,G,H]}],saturate:[{saturate:[oe,G,H]}],sepia:[{sepia:["",oe,G,H]}],"backdrop-filter":[{"backdrop-filter":["","none",G,H]}],"backdrop-blur":[{"backdrop-blur":Re()}],"backdrop-brightness":[{"backdrop-brightness":[oe,G,H]}],"backdrop-contrast":[{"backdrop-contrast":[oe,G,H]}],"backdrop-grayscale":[{"backdrop-grayscale":["",oe,G,H]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[oe,G,H]}],"backdrop-invert":[{"backdrop-invert":["",oe,G,H]}],"backdrop-opacity":[{"backdrop-opacity":[oe,G,H]}],"backdrop-saturate":[{"backdrop-saturate":[oe,G,H]}],"backdrop-sepia":[{"backdrop-sepia":["",oe,G,H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":_()}],"border-spacing-x":[{"border-spacing-x":_()}],"border-spacing-y":[{"border-spacing-y":_()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",G,H]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[oe,"initial",G,H]}],ease:[{ease:["linear","initial",O,G,H]}],delay:[{delay:[oe,G,H]}],animate:[{animate:["none",F,G,H]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[P,G,H]}],"perspective-origin":[{"perspective-origin":Q()}],rotate:[{rotate:je()}],"rotate-x":[{"rotate-x":je()}],"rotate-y":[{"rotate-y":je()}],"rotate-z":[{"rotate-z":je()}],scale:[{scale:et()}],"scale-x":[{"scale-x":et()}],"scale-y":[{"scale-y":et()}],"scale-z":[{"scale-z":et()}],"scale-3d":["scale-3d"],skew:[{skew:Ir()}],"skew-x":[{"skew-x":Ir()}],"skew-y":[{"skew-y":Ir()}],transform:[{transform:[G,H,"","none","gpu","cpu"]}],"transform-origin":[{origin:Q()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:un()}],"translate-x":[{"translate-x":un()}],"translate-y":[{"translate-y":un()}],"translate-z":[{"translate-z":un()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G,H]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G,H]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[oe,jr,gn,Bo]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},bA=YT(gI),_I=["top","right","bottom","left"],rn=Math.min,Ke=Math.max,Ri=Math.round,Ks=Math.floor,yt=n=>({x:n,y:n}),yI={left:"right",right:"left",bottom:"top",top:"bottom"},vI={start:"end",end:"start"};function Ia(n,e,t){return Ke(n,rn(e,t))}function kt(n,e){return typeof n=="function"?n(e):n}function Vt(n){return n.split("-")[0]}function Er(n){return n.split("-")[1]}function wc(n){return n==="x"?"y":"x"}function Ec(n){return n==="y"?"height":"width"}const wI=new Set(["top","bottom"]);function ht(n){return wI.has(Vt(n))?"y":"x"}function Tc(n){return wc(ht(n))}function EI(n,e,t){t===void 0&&(t=!1);const r=Er(n),s=Tc(n),i=Ec(s);let a=s==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(a=Si(a)),[a,Si(a)]}function TI(n){const e=Si(n);return[ba(n),e,ba(e)]}function ba(n){return n.replace(/start|end/g,e=>vI[e])}const ch=["left","right"],lh=["right","left"],II=["top","bottom"],bI=["bottom","top"];function AI(n,e,t){switch(n){case"top":case"bottom":return t?e?lh:ch:e?ch:lh;case"left":case"right":return e?II:bI;default:return[]}}function RI(n,e,t,r){const s=Er(n);let i=AI(Vt(n),t==="start",r);return s&&(i=i.map(a=>a+"-"+s),e&&(i=i.concat(i.map(ba)))),i}function Si(n){return n.replace(/left|right|bottom|top/g,e=>yI[e])}function SI(n){return{top:0,right:0,bottom:0,left:0,...n}}function pp(n){return typeof n!="number"?SI(n):{top:n,right:n,bottom:n,left:n}}function Ci(n){const{x:e,y:t,width:r,height:s}=n;return{width:r,height:s,top:t,left:e,right:e+r,bottom:t+s,x:e,y:t}}function uh(n,e,t){let{reference:r,floating:s}=n;const i=ht(e),a=Tc(e),c=Ec(a),u=Vt(e),h=i==="y",f=r.x+r.width/2-s.width/2,p=r.y+r.height/2-s.height/2,m=r[c]/2-s[c]/2;let E;switch(u){case"top":E={x:f,y:r.y-s.height};break;case"bottom":E={x:f,y:r.y+r.height};break;case"right":E={x:r.x+r.width,y:p};break;case"left":E={x:r.x-s.width,y:p};break;default:E={x:r.x,y:r.y}}switch(Er(e)){case"start":E[a]-=m*(t&&h?-1:1);break;case"end":E[a]+=m*(t&&h?-1:1);break}return E}async function CI(n,e){var t;e===void 0&&(e={});const{x:r,y:s,platform:i,rects:a,elements:c,strategy:u}=n,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:m=!1,padding:E=0}=kt(e,n),R=pp(E),S=c[m?p==="floating"?"reference":"floating":p],O=Ci(await i.getClippingRect({element:(t=await(i.isElement==null?void 0:i.isElement(S)))==null||t?S:S.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:h,rootBoundary:f,strategy:u})),F=p==="floating"?{x:r,y:s,width:a.floating.width,height:a.floating.height}:a.reference,B=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),q=await(i.isElement==null?void 0:i.isElement(B))?await(i.getScale==null?void 0:i.getScale(B))||{x:1,y:1}:{x:1,y:1},Q=Ci(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:F,offsetParent:B,strategy:u}):F);return{top:(O.top-Q.top+R.top)/q.y,bottom:(Q.bottom-O.bottom+R.bottom)/q.y,left:(O.left-Q.left+R.left)/q.x,right:(Q.right-O.right+R.right)/q.x}}const PI=async(n,e,t)=>{const{placement:r="bottom",strategy:s="absolute",middleware:i=[],platform:a}=t,c=i.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let h=await a.getElementRects({reference:n,floating:e,strategy:s}),{x:f,y:p}=uh(h,r,u),m=r,E={},R=0;for(let S=0;S<c.length;S++){var P;const{name:O,fn:F}=c[S],{x:B,y:q,data:Q,reset:M}=await F({x:f,y:p,initialPlacement:r,placement:m,strategy:s,middlewareData:E,rects:h,platform:{...a,detectOverflow:(P=a.detectOverflow)!=null?P:CI},elements:{reference:n,floating:e}});f=B??f,p=q??p,E={...E,[O]:{...E[O],...Q}},M&&R<=50&&(R++,typeof M=="object"&&(M.placement&&(m=M.placement),M.rects&&(h=M.rects===!0?await a.getElementRects({reference:n,floating:e,strategy:s}):M.rects),{x:f,y:p}=uh(h,m,u)),S=-1)}return{x:f,y:p,placement:m,strategy:s,middlewareData:E}},kI=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:r,placement:s,rects:i,platform:a,elements:c,middlewareData:u}=e,{element:h,padding:f=0}=kt(n,e)||{};if(h==null)return{};const p=pp(f),m={x:t,y:r},E=Tc(s),R=Ec(E),P=await a.getDimensions(h),S=E==="y",O=S?"top":"left",F=S?"bottom":"right",B=S?"clientHeight":"clientWidth",q=i.reference[R]+i.reference[E]-m[E]-i.floating[R],Q=m[E]-i.reference[E],M=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let w=M?M[B]:0;(!w||!await(a.isElement==null?void 0:a.isElement(M)))&&(w=c.floating[B]||i.floating[R]);const _=q/2-Q/2,v=w/2-P[R]/2-1,I=rn(p[O],v),T=rn(p[F],v),b=I,y=w-P[R]-T,ee=w/2-P[R]/2+_,ue=Ia(b,ee,y),x=!u.arrow&&Er(s)!=null&&ee!==ue&&i.reference[R]/2-(ee<b?I:T)-P[R]/2<0,z=x?ee<b?ee-b:ee-y:0;return{[E]:m[E]+z,data:{[E]:ue,centerOffset:ee-ue-z,...x&&{alignmentOffset:z}},reset:x}}}),VI=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t,r;const{placement:s,middlewareData:i,rects:a,initialPlacement:c,platform:u,elements:h}=e,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:P=!0,...S}=kt(n,e);if((t=i.arrow)!=null&&t.alignmentOffset)return{};const O=Vt(s),F=ht(c),B=Vt(c)===c,q=await(u.isRTL==null?void 0:u.isRTL(h.floating)),Q=m||(B||!P?[Si(c)]:TI(c)),M=R!=="none";!m&&M&&Q.push(...RI(c,P,R,q));const w=[c,...Q],_=await u.detectOverflow(e,S),v=[];let I=((r=i.flip)==null?void 0:r.overflows)||[];if(f&&v.push(_[O]),p){const ee=EI(s,a,q);v.push(_[ee[0]],_[ee[1]])}if(I=[...I,{placement:s,overflows:v}],!v.every(ee=>ee<=0)){var T,b;const ee=(((T=i.flip)==null?void 0:T.index)||0)+1,ue=w[ee];if(ue&&(!(p==="alignment"?F!==ht(ue):!1)||I.every(k=>ht(k.placement)===F?k.overflows[0]>0:!0)))return{data:{index:ee,overflows:I},reset:{placement:ue}};let x=(b=I.filter(z=>z.overflows[0]<=0).sort((z,k)=>z.overflows[1]-k.overflows[1])[0])==null?void 0:b.placement;if(!x)switch(E){case"bestFit":{var y;const z=(y=I.filter(k=>{if(M){const te=ht(k.placement);return te===F||te==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(te=>te>0).reduce((te,he)=>te+he,0)]).sort((k,te)=>k[1]-te[1])[0])==null?void 0:y[0];z&&(x=z);break}case"initialPlacement":x=c;break}if(s!==x)return{reset:{placement:x}}}return{}}}};function hh(n,e){return{top:n.top-e.height,right:n.right-e.width,bottom:n.bottom-e.height,left:n.left-e.width}}function dh(n){return _I.some(e=>n[e]>=0)}const DI=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(e){const{rects:t,platform:r}=e,{strategy:s="referenceHidden",...i}=kt(n,e);switch(s){case"referenceHidden":{const a=await r.detectOverflow(e,{...i,elementContext:"reference"}),c=hh(a,t.reference);return{data:{referenceHiddenOffsets:c,referenceHidden:dh(c)}}}case"escaped":{const a=await r.detectOverflow(e,{...i,altBoundary:!0}),c=hh(a,t.floating);return{data:{escapedOffsets:c,escaped:dh(c)}}}default:return{}}}}},mp=new Set(["left","top"]);async function xI(n,e){const{placement:t,platform:r,elements:s}=n,i=await(r.isRTL==null?void 0:r.isRTL(s.floating)),a=Vt(t),c=Er(t),u=ht(t)==="y",h=mp.has(a)?-1:1,f=i&&u?-1:1,p=kt(e,n);let{mainAxis:m,crossAxis:E,alignmentAxis:R}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&typeof R=="number"&&(E=c==="end"?R*-1:R),u?{x:E*f,y:m*h}:{x:m*h,y:E*f}}const NI=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var t,r;const{x:s,y:i,placement:a,middlewareData:c}=e,u=await xI(e,n);return a===((t=c.offset)==null?void 0:t.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:s+u.x,y:i+u.y,data:{...u,placement:a}}}}},OI=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:r,placement:s,platform:i}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:u={fn:O=>{let{x:F,y:B}=O;return{x:F,y:B}}},...h}=kt(n,e),f={x:t,y:r},p=await i.detectOverflow(e,h),m=ht(Vt(s)),E=wc(m);let R=f[E],P=f[m];if(a){const O=E==="y"?"top":"left",F=E==="y"?"bottom":"right",B=R+p[O],q=R-p[F];R=Ia(B,R,q)}if(c){const O=m==="y"?"top":"left",F=m==="y"?"bottom":"right",B=P+p[O],q=P-p[F];P=Ia(B,P,q)}const S=u.fn({...e,[E]:R,[m]:P});return{...S,data:{x:S.x-t,y:S.y-r,enabled:{[E]:a,[m]:c}}}}}},MI=function(n){return n===void 0&&(n={}),{options:n,fn(e){const{x:t,y:r,placement:s,rects:i,middlewareData:a}=e,{offset:c=0,mainAxis:u=!0,crossAxis:h=!0}=kt(n,e),f={x:t,y:r},p=ht(s),m=wc(p);let E=f[m],R=f[p];const P=kt(c,e),S=typeof P=="number"?{mainAxis:P,crossAxis:0}:{mainAxis:0,crossAxis:0,...P};if(u){const B=m==="y"?"height":"width",q=i.reference[m]-i.floating[B]+S.mainAxis,Q=i.reference[m]+i.reference[B]-S.mainAxis;E<q?E=q:E>Q&&(E=Q)}if(h){var O,F;const B=m==="y"?"width":"height",q=mp.has(Vt(s)),Q=i.reference[p]-i.floating[B]+(q&&((O=a.offset)==null?void 0:O[p])||0)+(q?0:S.crossAxis),M=i.reference[p]+i.reference[B]+(q?0:((F=a.offset)==null?void 0:F[p])||0)-(q?S.crossAxis:0);R<Q?R=Q:R>M&&(R=M)}return{[m]:E,[p]:R}}}},LI=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(e){var t,r;const{placement:s,rects:i,platform:a,elements:c}=e,{apply:u=()=>{},...h}=kt(n,e),f=await a.detectOverflow(e,h),p=Vt(s),m=Er(s),E=ht(s)==="y",{width:R,height:P}=i.floating;let S,O;p==="top"||p==="bottom"?(S=p,O=m===(await(a.isRTL==null?void 0:a.isRTL(c.floating))?"start":"end")?"left":"right"):(O=p,S=m==="end"?"top":"bottom");const F=P-f.top-f.bottom,B=R-f.left-f.right,q=rn(P-f[S],F),Q=rn(R-f[O],B),M=!e.middlewareData.shift;let w=q,_=Q;if((t=e.middlewareData.shift)!=null&&t.enabled.x&&(_=B),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(w=F),M&&!m){const I=Ke(f.left,0),T=Ke(f.right,0),b=Ke(f.top,0),y=Ke(f.bottom,0);E?_=R-2*(I!==0||T!==0?I+T:Ke(f.left,f.right)):w=P-2*(b!==0||y!==0?b+y:Ke(f.top,f.bottom))}await u({...e,availableWidth:_,availableHeight:w});const v=await a.getDimensions(c.floating);return R!==v.width||P!==v.height?{reset:{rects:!0}}:{}}}};function Zi(){return typeof window<"u"}function Tr(n){return gp(n)?(n.nodeName||"").toLowerCase():"#document"}function Je(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Et(n){var e;return(e=(gp(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function gp(n){return Zi()?n instanceof Node||n instanceof Je(n).Node:!1}function ot(n){return Zi()?n instanceof Element||n instanceof Je(n).Element:!1}function wt(n){return Zi()?n instanceof HTMLElement||n instanceof Je(n).HTMLElement:!1}function fh(n){return!Zi()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Je(n).ShadowRoot}const FI=new Set(["inline","contents"]);function Rs(n){const{overflow:e,overflowX:t,overflowY:r,display:s}=at(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+t)&&!FI.has(s)}const UI=new Set(["table","td","th"]);function BI(n){return UI.has(Tr(n))}const jI=[":popover-open",":modal"];function eo(n){return jI.some(e=>{try{return n.matches(e)}catch{return!1}})}const qI=["transform","translate","scale","rotate","perspective"],$I=["transform","translate","scale","rotate","perspective","filter"],zI=["paint","layout","strict","content"];function Ic(n){const e=bc(),t=ot(n)?at(n):n;return qI.some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||$I.some(r=>(t.willChange||"").includes(r))||zI.some(r=>(t.contain||"").includes(r))}function WI(n){let e=sn(n);for(;wt(e)&&!ur(e);){if(Ic(e))return e;if(eo(e))return null;e=sn(e)}return null}function bc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const HI=new Set(["html","body","#document"]);function ur(n){return HI.has(Tr(n))}function at(n){return Je(n).getComputedStyle(n)}function to(n){return ot(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function sn(n){if(Tr(n)==="html")return n;const e=n.assignedSlot||n.parentNode||fh(n)&&n.host||Et(n);return fh(e)?e.host:e}function _p(n){const e=sn(n);return ur(e)?n.ownerDocument?n.ownerDocument.body:n.body:wt(e)&&Rs(e)?e:_p(e)}function ds(n,e,t){var r;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=_p(n),i=s===((r=n.ownerDocument)==null?void 0:r.body),a=Je(s);if(i){const c=Aa(a);return e.concat(a,a.visualViewport||[],Rs(s)?s:[],c&&t?ds(c):[])}return e.concat(s,ds(s,[],t))}function Aa(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function yp(n){const e=at(n);let t=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=wt(n),i=s?n.offsetWidth:t,a=s?n.offsetHeight:r,c=Ri(t)!==i||Ri(r)!==a;return c&&(t=i,r=a),{width:t,height:r,$:c}}function Ac(n){return ot(n)?n:n.contextElement}function nr(n){const e=Ac(n);if(!wt(e))return yt(1);const t=e.getBoundingClientRect(),{width:r,height:s,$:i}=yp(e);let a=(i?Ri(t.width):t.width)/r,c=(i?Ri(t.height):t.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const GI=yt(0);function vp(n){const e=Je(n);return!bc()||!e.visualViewport?GI:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function KI(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==Je(n)?!1:e}function kn(n,e,t,r){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=n.getBoundingClientRect(),i=Ac(n);let a=yt(1);e&&(r?ot(r)&&(a=nr(r)):a=nr(n));const c=KI(i,t,r)?vp(i):yt(0);let u=(s.left+c.x)/a.x,h=(s.top+c.y)/a.y,f=s.width/a.x,p=s.height/a.y;if(i){const m=Je(i),E=r&&ot(r)?Je(r):r;let R=m,P=Aa(R);for(;P&&r&&E!==R;){const S=nr(P),O=P.getBoundingClientRect(),F=at(P),B=O.left+(P.clientLeft+parseFloat(F.paddingLeft))*S.x,q=O.top+(P.clientTop+parseFloat(F.paddingTop))*S.y;u*=S.x,h*=S.y,f*=S.x,p*=S.y,u+=B,h+=q,R=Je(P),P=Aa(R)}}return Ci({width:f,height:p,x:u,y:h})}function no(n,e){const t=to(n).scrollLeft;return e?e.left+t:kn(Et(n)).left+t}function wp(n,e){const t=n.getBoundingClientRect(),r=t.left+e.scrollLeft-no(n,t),s=t.top+e.scrollTop;return{x:r,y:s}}function QI(n){let{elements:e,rect:t,offsetParent:r,strategy:s}=n;const i=s==="fixed",a=Et(r),c=e?eo(e.floating):!1;if(r===a||c&&i)return t;let u={scrollLeft:0,scrollTop:0},h=yt(1);const f=yt(0),p=wt(r);if((p||!p&&!i)&&((Tr(r)!=="body"||Rs(a))&&(u=to(r)),wt(r))){const E=kn(r);h=nr(r),f.x=E.x+r.clientLeft,f.y=E.y+r.clientTop}const m=a&&!p&&!i?wp(a,u):yt(0);return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-u.scrollLeft*h.x+f.x+m.x,y:t.y*h.y-u.scrollTop*h.y+f.y+m.y}}function YI(n){return Array.from(n.getClientRects())}function JI(n){const e=Et(n),t=to(n),r=n.ownerDocument.body,s=Ke(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=Ke(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-t.scrollLeft+no(n);const c=-t.scrollTop;return at(r).direction==="rtl"&&(a+=Ke(e.clientWidth,r.clientWidth)-s),{width:s,height:i,x:a,y:c}}const ph=25;function XI(n,e){const t=Je(n),r=Et(n),s=t.visualViewport;let i=r.clientWidth,a=r.clientHeight,c=0,u=0;if(s){i=s.width,a=s.height;const f=bc();(!f||f&&e==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}const h=no(r);if(h<=0){const f=r.ownerDocument,p=f.body,m=getComputedStyle(p),E=f.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,R=Math.abs(r.clientWidth-p.clientWidth-E);R<=ph&&(i-=R)}else h<=ph&&(i+=h);return{width:i,height:a,x:c,y:u}}const ZI=new Set(["absolute","fixed"]);function eb(n,e){const t=kn(n,!0,e==="fixed"),r=t.top+n.clientTop,s=t.left+n.clientLeft,i=wt(n)?nr(n):yt(1),a=n.clientWidth*i.x,c=n.clientHeight*i.y,u=s*i.x,h=r*i.y;return{width:a,height:c,x:u,y:h}}function mh(n,e,t){let r;if(e==="viewport")r=XI(n,t);else if(e==="document")r=JI(Et(n));else if(ot(e))r=eb(e,t);else{const s=vp(n);r={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return Ci(r)}function Ep(n,e){const t=sn(n);return t===e||!ot(t)||ur(t)?!1:at(t).position==="fixed"||Ep(t,e)}function tb(n,e){const t=e.get(n);if(t)return t;let r=ds(n,[],!1).filter(c=>ot(c)&&Tr(c)!=="body"),s=null;const i=at(n).position==="fixed";let a=i?sn(n):n;for(;ot(a)&&!ur(a);){const c=at(a),u=Ic(a);!u&&c.position==="fixed"&&(s=null),(i?!u&&!s:!u&&c.position==="static"&&!!s&&ZI.has(s.position)||Rs(a)&&!u&&Ep(n,a))?r=r.filter(f=>f!==a):s=c,a=sn(a)}return e.set(n,r),r}function nb(n){let{element:e,boundary:t,rootBoundary:r,strategy:s}=n;const a=[...t==="clippingAncestors"?eo(e)?[]:tb(e,this._c):[].concat(t),r],c=a[0],u=a.reduce((h,f)=>{const p=mh(e,f,s);return h.top=Ke(p.top,h.top),h.right=rn(p.right,h.right),h.bottom=rn(p.bottom,h.bottom),h.left=Ke(p.left,h.left),h},mh(e,c,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function rb(n){const{width:e,height:t}=yp(n);return{width:e,height:t}}function sb(n,e,t){const r=wt(e),s=Et(e),i=t==="fixed",a=kn(n,!0,i,e);let c={scrollLeft:0,scrollTop:0};const u=yt(0);function h(){u.x=no(s)}if(r||!r&&!i)if((Tr(e)!=="body"||Rs(s))&&(c=to(e)),r){const E=kn(e,!0,i,e);u.x=E.x+e.clientLeft,u.y=E.y+e.clientTop}else s&&h();i&&!r&&s&&h();const f=s&&!r&&!i?wp(s,c):yt(0),p=a.left+c.scrollLeft-u.x-f.x,m=a.top+c.scrollTop-u.y-f.y;return{x:p,y:m,width:a.width,height:a.height}}function jo(n){return at(n).position==="static"}function gh(n,e){if(!wt(n)||at(n).position==="fixed")return null;if(e)return e(n);let t=n.offsetParent;return Et(n)===t&&(t=t.ownerDocument.body),t}function Tp(n,e){const t=Je(n);if(eo(n))return t;if(!wt(n)){let s=sn(n);for(;s&&!ur(s);){if(ot(s)&&!jo(s))return s;s=sn(s)}return t}let r=gh(n,e);for(;r&&BI(r)&&jo(r);)r=gh(r,e);return r&&ur(r)&&jo(r)&&!Ic(r)?t:r||WI(n)||t}const ib=async function(n){const e=this.getOffsetParent||Tp,t=this.getDimensions,r=await t(n.floating);return{reference:sb(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ob(n){return at(n).direction==="rtl"}const ab={convertOffsetParentRelativeRectToViewportRelativeRect:QI,getDocumentElement:Et,getClippingRect:nb,getOffsetParent:Tp,getElementRects:ib,getClientRects:YI,getDimensions:rb,getScale:nr,isElement:ot,isRTL:ob};function Ip(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function cb(n,e){let t=null,r;const s=Et(n);function i(){var c;clearTimeout(r),(c=t)==null||c.disconnect(),t=null}function a(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),i();const h=n.getBoundingClientRect(),{left:f,top:p,width:m,height:E}=h;if(c||e(),!m||!E)return;const R=Ks(p),P=Ks(s.clientWidth-(f+m)),S=Ks(s.clientHeight-(p+E)),O=Ks(f),B={rootMargin:-R+"px "+-P+"px "+-S+"px "+-O+"px",threshold:Ke(0,rn(1,u))||1};let q=!0;function Q(M){const w=M[0].intersectionRatio;if(w!==u){if(!q)return a();w?a(!1,w):r=setTimeout(()=>{a(!1,1e-7)},1e3)}w===1&&!Ip(h,n.getBoundingClientRect())&&a(),q=!1}try{t=new IntersectionObserver(Q,{...B,root:s.ownerDocument})}catch{t=new IntersectionObserver(Q,B)}t.observe(n)}return a(!0),i}function AA(n,e,t,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,h=Ac(n),f=s||i?[...h?ds(h):[],...ds(e)]:[];f.forEach(O=>{s&&O.addEventListener("scroll",t,{passive:!0}),i&&O.addEventListener("resize",t)});const p=h&&c?cb(h,t):null;let m=-1,E=null;a&&(E=new ResizeObserver(O=>{let[F]=O;F&&F.target===h&&E&&(E.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var B;(B=E)==null||B.observe(e)})),t()}),h&&!u&&E.observe(h),E.observe(e));let R,P=u?kn(n):null;u&&S();function S(){const O=kn(n);P&&!Ip(P,O)&&t(),P=O,R=requestAnimationFrame(S)}return t(),()=>{var O;f.forEach(F=>{s&&F.removeEventListener("scroll",t),i&&F.removeEventListener("resize",t)}),p?.(),(O=E)==null||O.disconnect(),E=null,u&&cancelAnimationFrame(R)}}const lb=NI,ub=OI,hb=VI,db=LI,fb=DI,_h=kI,pb=MI,mb=(n,e,t)=>{const r=new Map,s={platform:ab,...t},i={...s.platform,_c:r};return PI(n,e,{...s,platform:i})};var gb=typeof document<"u",_b=function(){},ai=gb?U.useLayoutEffect:_b;function Pi(n,e){if(n===e)return!0;if(typeof n!=typeof e)return!1;if(typeof n=="function"&&n.toString()===e.toString())return!0;let t,r,s;if(n&&e&&typeof n=="object"){if(Array.isArray(n)){if(t=n.length,t!==e.length)return!1;for(r=t;r--!==0;)if(!Pi(n[r],e[r]))return!1;return!0}if(s=Object.keys(n),t=s.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(e,s[r]))return!1;for(r=t;r--!==0;){const i=s[r];if(!(i==="_owner"&&n.$$typeof)&&!Pi(n[i],e[i]))return!1}return!0}return n!==n&&e!==e}function bp(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function yh(n,e){const t=bp(n);return Math.round(e*t)/t}function qo(n){const e=U.useRef(n);return ai(()=>{e.current=n}),e}function RA(n){n===void 0&&(n={});const{placement:e="bottom",strategy:t="absolute",middleware:r=[],platform:s,elements:{reference:i,floating:a}={},transform:c=!0,whileElementsMounted:u,open:h}=n,[f,p]=U.useState({x:0,y:0,strategy:t,placement:e,middlewareData:{},isPositioned:!1}),[m,E]=U.useState(r);Pi(m,r)||E(r);const[R,P]=U.useState(null),[S,O]=U.useState(null),F=U.useCallback(k=>{k!==M.current&&(M.current=k,P(k))},[]),B=U.useCallback(k=>{k!==w.current&&(w.current=k,O(k))},[]),q=i||R,Q=a||S,M=U.useRef(null),w=U.useRef(null),_=U.useRef(f),v=u!=null,I=qo(u),T=qo(s),b=qo(h),y=U.useCallback(()=>{if(!M.current||!w.current)return;const k={placement:e,strategy:t,middleware:m};T.current&&(k.platform=T.current),mb(M.current,w.current,k).then(te=>{const he={...te,isPositioned:b.current!==!1};ee.current&&!Pi(_.current,he)&&(_.current=he,am.flushSync(()=>{p(he)}))})},[m,e,t,T,b]);ai(()=>{h===!1&&_.current.isPositioned&&(_.current.isPositioned=!1,p(k=>({...k,isPositioned:!1})))},[h]);const ee=U.useRef(!1);ai(()=>(ee.current=!0,()=>{ee.current=!1}),[]),ai(()=>{if(q&&(M.current=q),Q&&(w.current=Q),q&&Q){if(I.current)return I.current(q,Q,y);y()}},[q,Q,y,I,v]);const ue=U.useMemo(()=>({reference:M,floating:w,setReference:F,setFloating:B}),[F,B]),x=U.useMemo(()=>({reference:q,floating:Q}),[q,Q]),z=U.useMemo(()=>{const k={position:t,left:0,top:0};if(!x.floating)return k;const te=yh(x.floating,f.x),he=yh(x.floating,f.y);return c?{...k,transform:"translate("+te+"px, "+he+"px)",...bp(x.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:te,top:he}},[t,c,x.floating,f.x,f.y]);return U.useMemo(()=>({...f,update:y,refs:ue,elements:x,floatingStyles:z}),[f,y,ue,x,z])}const yb=n=>{function e(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:n,fn(t){const{element:r,padding:s}=typeof n=="function"?n(t):n;return r&&e(r)?r.current!=null?_h({element:r.current,padding:s}).fn(t):{}:r?_h({element:r,padding:s}).fn(t):{}}}},SA=(n,e)=>({...lb(n),options:[n,e]}),CA=(n,e)=>({...ub(n),options:[n,e]}),PA=(n,e)=>({...pb(n),options:[n,e]}),kA=(n,e)=>({...hb(n),options:[n,e]}),VA=(n,e)=>({...db(n),options:[n,e]}),DA=(n,e)=>({...fb(n),options:[n,e]}),xA=(n,e)=>({...yb(n),options:[n,e]});var vb=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},qn=new WeakMap,Qs=new WeakMap,Ys={},$o=0,Ap=function(n){return n&&(n.host||Ap(n.parentNode))},wb=function(n,e){return e.map(function(t){if(n.contains(t))return t;var r=Ap(t);return r&&n.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},Eb=function(n,e,t,r){var s=wb(e,Array.isArray(n)?n:[n]);Ys[t]||(Ys[t]=new WeakMap);var i=Ys[t],a=[],c=new Set,u=new Set(s),h=function(p){!p||c.has(p)||(c.add(p),h(p.parentNode))};s.forEach(h);var f=function(p){!p||u.has(p)||Array.prototype.forEach.call(p.children,function(m){if(c.has(m))f(m);else try{var E=m.getAttribute(r),R=E!==null&&E!=="false",P=(qn.get(m)||0)+1,S=(i.get(m)||0)+1;qn.set(m,P),i.set(m,S),a.push(m),P===1&&R&&Qs.set(m,!0),S===1&&m.setAttribute(t,"true"),R||m.setAttribute(r,"true")}catch(O){console.error("aria-hidden: cannot operate on ",m,O)}})};return f(e),c.clear(),$o++,function(){a.forEach(function(p){var m=qn.get(p)-1,E=i.get(p)-1;qn.set(p,m),i.set(p,E),m||(Qs.has(p)||p.removeAttribute(r),Qs.delete(p)),E||p.removeAttribute(t)}),$o--,$o||(qn=new WeakMap,qn=new WeakMap,Qs=new WeakMap,Ys={})}},NA=function(n,e,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(n)?n:[n]),s=vb(n);return s?(r.push.apply(r,Array.from(s.querySelectorAll("[aria-live], script"))),Eb(r,s,t,"aria-hidden")):function(){return null}},ki=function(){return ki=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ki.apply(this,arguments)};function Tb(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function OA(n,e,t){if(t||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return n.concat(i||Array.prototype.slice.call(e))}function zo(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function Ib(n,e){var t=U.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var s=t.value;s!==r&&(t.value=r,t.callback(r,s))}}}})[0];return t.callback=e,t.facade}var bb=typeof window<"u"?U.useLayoutEffect:U.useEffect,vh=new WeakMap;function MA(n,e){var t=Ib(null,function(r){return n.forEach(function(s){return zo(s,r)})});return bb(function(){var r=vh.get(t);if(r){var s=new Set(r),i=new Set(n),a=t.current;s.forEach(function(c){i.has(c)||zo(c,null)}),i.forEach(function(c){s.has(c)||zo(c,a)})}vh.set(t,n)},[n]),t}function Ab(n){return n}function Rb(n,e){e===void 0&&(e=Ab);var t=[],r=!1,s={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(i){var a=e(i,r);return t.push(a),function(){t=t.filter(function(c){return c!==a})}},assignSyncMedium:function(i){for(r=!0;t.length;){var a=t;t=[],a.forEach(i)}t={push:function(c){return i(c)},filter:function(){return t}}},assignMedium:function(i){r=!0;var a=[];if(t.length){var c=t;t=[],c.forEach(i),a=t}var u=function(){var f=a;a=[],f.forEach(i)},h=function(){return Promise.resolve().then(u)};h(),t={push:function(f){a.push(f),h()},filter:function(f){return a=a.filter(f),t}}}};return s}function LA(n){n===void 0&&(n={});var e=Rb(null);return e.options=ki({async:!0,ssr:!1},n),e}var Rp=function(n){var e=n.sideCar,t=Tb(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return U.createElement(r,ki({},t))};Rp.isSideCarExport=!0;function FA(n,e){return n.useMedium(e),Rp}var UA=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__},wh=1,Sb=.9,Cb=.8,Pb=.17,Wo=.1,Ho=.999,kb=.9999,Vb=.99,Db=/[\\\/_+.#"@\[\(\{&]/,xb=/[\\\/_+.#"@\[\(\{&]/g,Nb=/[\s-]/,Sp=/[\s-]/g;function Ra(n,e,t,r,s,i,a){if(i===e.length)return s===n.length?wh:Vb;var c=`${s},${i}`;if(a[c]!==void 0)return a[c];for(var u=r.charAt(i),h=t.indexOf(u,s),f=0,p,m,E,R;h>=0;)p=Ra(n,e,t,r,h+1,i+1,a),p>f&&(h===s?p*=wh:Db.test(n.charAt(h-1))?(p*=Cb,E=n.slice(s,h-1).match(xb),E&&s>0&&(p*=Math.pow(Ho,E.length))):Nb.test(n.charAt(h-1))?(p*=Sb,R=n.slice(s,h-1).match(Sp),R&&s>0&&(p*=Math.pow(Ho,R.length))):(p*=Pb,s>0&&(p*=Math.pow(Ho,h-s))),n.charAt(h)!==e.charAt(i)&&(p*=kb)),(p<Wo&&t.charAt(h-1)===r.charAt(i+1)||r.charAt(i+1)===r.charAt(i)&&t.charAt(h-1)!==r.charAt(i))&&(m=Ra(n,e,t,r,h+1,i+2,a),m*Wo>p&&(p=m*Wo)),p>f&&(f=p),h=t.indexOf(u,h+1);return a[c]=f,f}function Eh(n){return n.toLowerCase().replace(Sp," ")}function Ob(n,e,t){return n=t&&t.length>0?`${n+" "+t.join(" ")}`:n,Ra(n,e,Eh(n),Eh(e),0,0,{})}var Go={exports:{}},Ko={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function Mb(){if(Th)return Ko;Th=1;var n=cm();function e(p,m){return p===m&&(p!==0||1/p===1/m)||p!==p&&m!==m}var t=typeof Object.is=="function"?Object.is:e,r=n.useState,s=n.useEffect,i=n.useLayoutEffect,a=n.useDebugValue;function c(p,m){var E=m(),R=r({inst:{value:E,getSnapshot:m}}),P=R[0].inst,S=R[1];return i(function(){P.value=E,P.getSnapshot=m,u(P)&&S({inst:P})},[p,E,m]),s(function(){return u(P)&&S({inst:P}),p(function(){u(P)&&S({inst:P})})},[p]),a(E),E}function u(p){var m=p.getSnapshot;p=p.value;try{var E=m();return!t(p,E)}catch{return!0}}function h(p,m){return m()}var f=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:c;return Ko.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:f,Ko}var Ih;function Lb(){return Ih||(Ih=1,Go.exports=Mb()),Go.exports}var Fb=Lb(),qr='[cmdk-group=""]',Qo='[cmdk-group-items=""]',Ub='[cmdk-group-heading=""]',Rc='[cmdk-item=""]',bh=`${Rc}:not([aria-disabled="true"])`,Sa="cmdk-item-select",yn="data-value",Bb=(n,e,t)=>Ob(n,e,t),Cp=U.createContext(void 0),Ss=()=>U.useContext(Cp),Pp=U.createContext(void 0),Sc=()=>U.useContext(Pp),kp=U.createContext(void 0),Vp=U.forwardRef((n,e)=>{let t=Gn(()=>{var N,W;return{search:"",value:(W=(N=n.value)!=null?N:n.defaultValue)!=null?W:"",filtered:{count:0,items:new Map,groups:new Set}}}),r=Gn(()=>new Set),s=Gn(()=>new Map),i=Gn(()=>new Map),a=Gn(()=>new Set),c=Dp(n),{label:u,children:h,value:f,onValueChange:p,filter:m,shouldFilter:E,loop:R,disablePointerSelection:P=!1,vimBindings:S=!0,...O}=n,F=Qn(),B=Qn(),q=Qn(),Q=U.useRef(null),M=Jb();Vn(()=>{if(f!==void 0){let N=f.trim();t.current.value=N,w.emit()}},[f]),Vn(()=>{M(6,y)},[]);let w=U.useMemo(()=>({subscribe:N=>(a.current.add(N),()=>a.current.delete(N)),snapshot:()=>t.current,setState:(N,W,Y)=>{var K,fe,ne;if(!Object.is(t.current[N],W)){if(t.current[N]=W,N==="search")b(),I(),M(1,T);else if(N==="value"&&(Y||M(5,y),((K=c.current)==null?void 0:K.value)!==void 0)){let Re=W??"";(ne=(fe=c.current).onValueChange)==null||ne.call(fe,Re);return}w.emit()}},emit:()=>{a.current.forEach(N=>N())}}),[]),_=U.useMemo(()=>({value:(N,W,Y)=>{var K;W!==((K=i.current.get(N))==null?void 0:K.value)&&(i.current.set(N,{value:W,keywords:Y}),t.current.filtered.items.set(N,v(W,Y)),M(2,()=>{I(),w.emit()}))},item:(N,W)=>(r.current.add(N),W&&(s.current.has(W)?s.current.get(W).add(N):s.current.set(W,new Set([N]))),M(3,()=>{b(),I(),t.current.value||T(),w.emit()}),()=>{i.current.delete(N),r.current.delete(N),t.current.filtered.items.delete(N);let Y=ee();M(4,()=>{b(),Y?.getAttribute("id")===N&&T(),w.emit()})}),group:N=>(s.current.has(N)||s.current.set(N,new Set),()=>{i.current.delete(N),s.current.delete(N)}),filter:()=>c.current.shouldFilter,label:u||n["aria-label"],getDisablePointerSelection:()=>c.current.disablePointerSelection,listId:F,inputId:q,labelId:B,listInnerRef:Q}),[]);function v(N,W){var Y,K;let fe=(K=(Y=c.current)==null?void 0:Y.filter)!=null?K:Bb;return N?fe(N,t.current.search,W):0}function I(){if(!t.current.search||c.current.shouldFilter===!1)return;let N=t.current.filtered.items,W=[];t.current.filtered.groups.forEach(K=>{let fe=s.current.get(K),ne=0;fe.forEach(Re=>{let je=N.get(Re);ne=Math.max(je,ne)}),W.push([K,ne])});let Y=Q.current;ue().sort((K,fe)=>{var ne,Re;let je=K.getAttribute("id"),et=fe.getAttribute("id");return((ne=N.get(et))!=null?ne:0)-((Re=N.get(je))!=null?Re:0)}).forEach(K=>{let fe=K.closest(Qo);fe?fe.appendChild(K.parentElement===fe?K:K.closest(`${Qo} > *`)):Y.appendChild(K.parentElement===Y?K:K.closest(`${Qo} > *`))}),W.sort((K,fe)=>fe[1]-K[1]).forEach(K=>{var fe;let ne=(fe=Q.current)==null?void 0:fe.querySelector(`${qr}[${yn}="${encodeURIComponent(K[0])}"]`);ne?.parentElement.appendChild(ne)})}function T(){let N=ue().find(Y=>Y.getAttribute("aria-disabled")!=="true"),W=N?.getAttribute(yn);w.setState("value",W||void 0)}function b(){var N,W,Y,K;if(!t.current.search||c.current.shouldFilter===!1){t.current.filtered.count=r.current.size;return}t.current.filtered.groups=new Set;let fe=0;for(let ne of r.current){let Re=(W=(N=i.current.get(ne))==null?void 0:N.value)!=null?W:"",je=(K=(Y=i.current.get(ne))==null?void 0:Y.keywords)!=null?K:[],et=v(Re,je);t.current.filtered.items.set(ne,et),et>0&&fe++}for(let[ne,Re]of s.current)for(let je of Re)if(t.current.filtered.items.get(je)>0){t.current.filtered.groups.add(ne);break}t.current.filtered.count=fe}function y(){var N,W,Y;let K=ee();K&&(((N=K.parentElement)==null?void 0:N.firstChild)===K&&((Y=(W=K.closest(qr))==null?void 0:W.querySelector(Ub))==null||Y.scrollIntoView({block:"nearest"})),K.scrollIntoView({block:"nearest"}))}function ee(){var N;return(N=Q.current)==null?void 0:N.querySelector(`${Rc}[aria-selected="true"]`)}function ue(){var N;return Array.from(((N=Q.current)==null?void 0:N.querySelectorAll(bh))||[])}function x(N){let W=ue()[N];W&&w.setState("value",W.getAttribute(yn))}function z(N){var W;let Y=ee(),K=ue(),fe=K.findIndex(Re=>Re===Y),ne=K[fe+N];(W=c.current)!=null&&W.loop&&(ne=fe+N<0?K[K.length-1]:fe+N===K.length?K[0]:K[fe+N]),ne&&w.setState("value",ne.getAttribute(yn))}function k(N){let W=ee(),Y=W?.closest(qr),K;for(;Y&&!K;)Y=N>0?Qb(Y,qr):Yb(Y,qr),K=Y?.querySelector(bh);K?w.setState("value",K.getAttribute(yn)):z(N)}let te=()=>x(ue().length-1),he=N=>{N.preventDefault(),N.metaKey?te():N.altKey?k(1):z(1)},He=N=>{N.preventDefault(),N.metaKey?x(0):N.altKey?k(-1):z(-1)};return U.createElement(on.div,{ref:e,tabIndex:-1,...O,"cmdk-root":"",onKeyDown:N=>{var W;if((W=O.onKeyDown)==null||W.call(O,N),!N.defaultPrevented)switch(N.key){case"n":case"j":{S&&N.ctrlKey&&he(N);break}case"ArrowDown":{he(N);break}case"p":case"k":{S&&N.ctrlKey&&He(N);break}case"ArrowUp":{He(N);break}case"Home":{N.preventDefault(),x(0);break}case"End":{N.preventDefault(),te();break}case"Enter":if(!N.nativeEvent.isComposing&&N.keyCode!==229){N.preventDefault();let Y=ee();if(Y){let K=new Event(Sa);Y.dispatchEvent(K)}}}}},U.createElement("label",{"cmdk-label":"",htmlFor:_.inputId,id:_.labelId,style:Zb},u),ro(n,N=>U.createElement(Pp.Provider,{value:w},U.createElement(Cp.Provider,{value:_},N))))}),jb=U.forwardRef((n,e)=>{var t,r;let s=Qn(),i=U.useRef(null),a=U.useContext(kp),c=Ss(),u=Dp(n),h=(r=(t=u.current)==null?void 0:t.forceMount)!=null?r:a?.forceMount;Vn(()=>{if(!h)return c.item(s,a?.id)},[h]);let f=xp(s,i,[n.value,n.children,i],n.keywords),p=Sc(),m=Dn(M=>M.value&&M.value===f.current),E=Dn(M=>h||c.filter()===!1?!0:M.search?M.filtered.items.get(s)>0:!0);U.useEffect(()=>{let M=i.current;if(!(!M||n.disabled))return M.addEventListener(Sa,R),()=>M.removeEventListener(Sa,R)},[E,n.onSelect,n.disabled]);function R(){var M,w;P(),(w=(M=u.current).onSelect)==null||w.call(M,f.current)}function P(){p.setState("value",f.current,!0)}if(!E)return null;let{disabled:S,value:O,onSelect:F,forceMount:B,keywords:q,...Q}=n;return U.createElement(on.div,{ref:fs([i,e]),...Q,id:s,"cmdk-item":"",role:"option","aria-disabled":!!S,"aria-selected":!!m,"data-disabled":!!S,"data-selected":!!m,onPointerMove:S||c.getDisablePointerSelection()?void 0:P,onClick:S?void 0:R},n.children)}),qb=U.forwardRef((n,e)=>{let{heading:t,children:r,forceMount:s,...i}=n,a=Qn(),c=U.useRef(null),u=U.useRef(null),h=Qn(),f=Ss(),p=Dn(E=>s||f.filter()===!1?!0:E.search?E.filtered.groups.has(a):!0);Vn(()=>f.group(a),[]),xp(a,c,[n.value,n.heading,u]);let m=U.useMemo(()=>({id:a,forceMount:s}),[s]);return U.createElement(on.div,{ref:fs([c,e]),...i,"cmdk-group":"",role:"presentation",hidden:p?void 0:!0},t&&U.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:h},t),ro(n,E=>U.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?h:void 0},U.createElement(kp.Provider,{value:m},E))))}),$b=U.forwardRef((n,e)=>{let{alwaysRender:t,...r}=n,s=U.useRef(null),i=Dn(a=>!a.search);return!t&&!i?null:U.createElement(on.div,{ref:fs([s,e]),...r,"cmdk-separator":"",role:"separator"})}),zb=U.forwardRef((n,e)=>{let{onValueChange:t,...r}=n,s=n.value!=null,i=Sc(),a=Dn(f=>f.search),c=Dn(f=>f.value),u=Ss(),h=U.useMemo(()=>{var f;let p=(f=u.listInnerRef.current)==null?void 0:f.querySelector(`${Rc}[${yn}="${encodeURIComponent(c)}"]`);return p?.getAttribute("id")},[]);return U.useEffect(()=>{n.value!=null&&i.setState("search",n.value)},[n.value]),U.createElement(on.input,{ref:e,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":h,id:u.inputId,type:"text",value:s?n.value:a,onChange:f=>{s||i.setState("search",f.target.value),t?.(f.target.value)}})}),Wb=U.forwardRef((n,e)=>{let{children:t,label:r="Suggestions",...s}=n,i=U.useRef(null),a=U.useRef(null),c=Ss();return U.useEffect(()=>{if(a.current&&i.current){let u=a.current,h=i.current,f,p=new ResizeObserver(()=>{f=requestAnimationFrame(()=>{let m=u.offsetHeight;h.style.setProperty("--cmdk-list-height",m.toFixed(1)+"px")})});return p.observe(u),()=>{cancelAnimationFrame(f),p.unobserve(u)}}},[]),U.createElement(on.div,{ref:fs([i,e]),...s,"cmdk-list":"",role:"listbox","aria-label":r,id:c.listId},ro(n,u=>U.createElement("div",{ref:fs([a,c.listInnerRef]),"cmdk-list-sizer":""},u)))}),Hb=U.forwardRef((n,e)=>{let{open:t,onOpenChange:r,overlayClassName:s,contentClassName:i,container:a,...c}=n;return U.createElement(lm,{open:t,onOpenChange:r},U.createElement(um,{container:a},U.createElement(hm,{"cmdk-overlay":"",className:s}),U.createElement(dm,{"aria-label":n.label,"cmdk-dialog":"",className:i},U.createElement(Vp,{ref:e,...c}))))}),Gb=U.forwardRef((n,e)=>Dn(t=>t.filtered.count===0)?U.createElement(on.div,{ref:e,...n,"cmdk-empty":"",role:"presentation"}):null),Kb=U.forwardRef((n,e)=>{let{progress:t,children:r,label:s="Loading...",...i}=n;return U.createElement(on.div,{ref:e,...i,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":s},ro(n,a=>U.createElement("div",{"aria-hidden":!0},a)))}),BA=Object.assign(Vp,{List:Wb,Item:jb,Input:zb,Group:qb,Separator:$b,Dialog:Hb,Empty:Gb,Loading:Kb});function Qb(n,e){let t=n.nextElementSibling;for(;t;){if(t.matches(e))return t;t=t.nextElementSibling}}function Yb(n,e){let t=n.previousElementSibling;for(;t;){if(t.matches(e))return t;t=t.previousElementSibling}}function Dp(n){let e=U.useRef(n);return Vn(()=>{e.current=n}),e}var Vn=typeof window>"u"?U.useEffect:U.useLayoutEffect;function Gn(n){let e=U.useRef();return e.current===void 0&&(e.current=n()),e}function fs(n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}function Dn(n){let e=Sc(),t=()=>n(e.snapshot());return Fb.useSyncExternalStore(e.subscribe,t,t)}function xp(n,e,t,r=[]){let s=U.useRef(),i=Ss();return Vn(()=>{var a;let c=(()=>{var h;for(let f of t){if(typeof f=="string")return f.trim();if(typeof f=="object"&&"current"in f)return f.current?(h=f.current.textContent)==null?void 0:h.trim():s.current}})(),u=r.map(h=>h.trim());i.value(n,c,u),(a=e.current)==null||a.setAttribute(yn,c),s.current=c}),s}var Jb=()=>{let[n,e]=U.useState(),t=Gn(()=>new Map);return Vn(()=>{t.current.forEach(r=>r()),t.current=new Map},[n]),(r,s)=>{t.current.set(r,s),e({})}};function Xb(n){let e=n.type;return typeof e=="function"?e(n.props):"render"in e?e.render(n.props):n}function ro({asChild:n,children:e},t){return n&&U.isValidElement(e)?U.cloneElement(Xb(e),{ref:e.ref},t(e.props.children)):t(e)}var Zb={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};export{wA as A,pA as B,mA as C,TA as D,gA as E,EA as F,aA as G,cA as H,sA as I,vA as J,fA as K,iA as L,bA as M,PT as N,IA as O,oA as P,BA as V,Tb as _,ki as a,OA as b,LA as c,wn as d,FA as e,RA as f,UA as g,kA as h,VA as i,xA as j,DA as k,AA as l,PA as m,NA as n,SA as o,rA as p,jg as q,nA as r,CA as s,lA as t,MA as u,dA as v,hA as w,mT as x,_A as y,yA as z};
