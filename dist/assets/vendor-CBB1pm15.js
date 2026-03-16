import{r as xe,a as vw,b as bw}from"./react-DQYPPb5b.js";var su={exports:{}},ou={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function Aw(){return ef||(ef=1,(function(n){function e(F,J){var N=F.length;F.push(J);e:for(;0<N;){var ee=N-1>>>1,le=F[ee];if(0<i(le,J))F[ee]=J,F[N]=le,N=ee;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var J=F[0],N=F.pop();if(N!==J){F[0]=N;e:for(var ee=0,le=F.length,Pt=le>>>1;ee<Pt;){var Tt=2*(ee+1)-1,Ce=F[Tt],ye=Tt+1,lt=F[ye];if(0>i(Ce,N))ye<le&&0>i(lt,Ce)?(F[ee]=lt,F[ye]=N,ee=ye):(F[ee]=Ce,F[Tt]=N,ee=Tt);else if(ye<le&&0>i(lt,N))F[ee]=lt,F[ye]=N,ee=ye;else break e}}return J}function i(F,J){var N=F.sortIndex-J.sortIndex;return N!==0?N:F.id-J.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();n.unstable_now=function(){return o.now()-c}}var u=[],l=[],d=1,f=null,p=3,y=!1,b=!1,A=!1,S=!1,V=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function B(F){for(var J=t(l);J!==null;){if(J.callback===null)r(l);else if(J.startTime<=F)r(l),J.sortIndex=J.expirationTime,e(u,J);else break;J=t(l)}}function W(F){if(A=!1,B(F),!b)if(t(u)!==null)b=!0,G||(G=!0,R());else{var J=t(l);J!==null&&he(W,J.startTime-F)}}var G=!1,E=-1,_=5,w=-1;function v(){return S?!0:!(n.unstable_now()-w<_)}function T(){if(S=!1,G){var F=n.unstable_now();w=F;var J=!0;try{e:{b=!1,A&&(A=!1,L(E),E=-1),y=!0;var N=p;try{t:{for(B(F),f=t(u);f!==null&&!(f.expirationTime>F&&v());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,p=f.priorityLevel;var le=ee(f.expirationTime<=F);if(F=n.unstable_now(),typeof le=="function"){f.callback=le,B(F),J=!0;break t}f===t(u)&&r(u),B(F)}else r(u);f=t(u)}if(f!==null)J=!0;else{var Pt=t(l);Pt!==null&&he(W,Pt.startTime-F),J=!1}}break e}finally{f=null,p=N,y=!1}J=void 0}}finally{J?R():G=!1}}}var R;if(typeof M=="function")R=function(){M(T)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,ne=I.port2;I.port1.onmessage=T,R=function(){ne.postMessage(null)}}else R=function(){V(T,0)};function he(F,J){E=V(function(){F(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_next=function(F){switch(p){case 1:case 2:case 3:var J=3;break;default:J=p}var N=p;p=J;try{return F()}finally{p=N}},n.unstable_requestPaint=function(){S=!0},n.unstable_runWithPriority=function(F,J){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var N=p;p=F;try{return J()}finally{p=N}},n.unstable_scheduleCallback=function(F,J,N){var ee=n.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?ee+N:ee):N=ee,F){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=N+le,F={id:d++,callback:J,priorityLevel:F,startTime:N,expirationTime:le,sortIndex:-1},N>ee?(F.sortIndex=N,e(l,F),t(u)===null&&F===t(l)&&(A?(L(E),E=-1):A=!0,he(W,N-ee))):(F.sortIndex=le,e(u,F),b||y||(b=!0,G||(G=!0,R()))),F},n.unstable_shouldYield=v,n.unstable_wrapCallback=function(F){var J=p;return function(){var N=p;p=J;try{return F.apply(this,arguments)}finally{p=N}}}})(ou)),ou}var tf;function rD(){return tf||(tf=1,su.exports=Aw()),su.exports}function Cp(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=Cp(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Rw(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=Cp(n))&&(r&&(r+=" "),r+=e);return r}const nf=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,rf=Rw,iD=(n,e)=>t=>{var r;if(e?.variants==null)return rf(n,t?.class,t?.className);const{variants:i,defaultVariants:s}=e,o=Object.keys(i).map(l=>{const d=t?.[l],f=s?.[l];if(d===null)return null;const p=nf(d)||nf(f);return i[l][p]}),c=t&&Object.entries(t).reduce((l,d)=>{let[f,p]=d;return p===void 0||(l[f]=p),l},{}),u=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((l,d)=>{let{class:f,className:p,...y}=d;return Object.entries(y).every(b=>{let[A,S]=b;return Array.isArray(S)?S.includes({...s,...c}[A]):{...s,...c}[A]===S})?[...l,f,p]:l},[]);return rf(n,o,u,t?.class,t?.className)},Sw=(n,e)=>{const t=new Array(n.length+e.length);for(let r=0;r<n.length;r++)t[r]=n[r];for(let r=0;r<e.length;r++)t[n.length+r]=e[r];return t},Pw=(n,e)=>({classGroupId:n,validator:e}),kp=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),Ra="-",sf=[],Cw="arbitrary..",kw=n=>{const e=Vw(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return Dw(o);const c=o.split(Ra),u=c[0]===""&&c.length>1?1:0;return Dp(c,u,e)},getConflictingClassGroupIds:(o,c)=>{if(c){const u=r[o],l=t[o];return u?l?Sw(l,u):u:l||sf}return t[o]||sf}}},Dp=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const i=n[e],s=t.nextPart.get(i);if(s){const l=Dp(n,e+1,s);if(l)return l}const o=t.validators;if(o===null)return;const c=e===0?n.join(Ra):n.slice(e).join(Ra),u=o.length;for(let l=0;l<u;l++){const d=o[l];if(d.validator(c))return d.classGroupId}},Dw=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),r=e.slice(0,t);return r?Cw+r:void 0})(),Vw=n=>{const{theme:e,classGroups:t}=n;return Nw(t,e)},Nw=(n,e)=>{const t=kp();for(const r in n){const i=n[r];El(i,t,r,e)}return t},El=(n,e,t,r)=>{const i=n.length;for(let s=0;s<i;s++){const o=n[s];xw(o,e,t,r)}},xw=(n,e,t,r)=>{if(typeof n=="string"){Ow(n,e,t);return}if(typeof n=="function"){Mw(n,e,t,r);return}Lw(n,e,t,r)},Ow=(n,e,t)=>{const r=n===""?e:Vp(e,n);r.classGroupId=t},Mw=(n,e,t,r)=>{if(Fw(n)){El(n(r),e,t,r);return}e.validators===null&&(e.validators=[]),e.validators.push(Pw(t,n))},Lw=(n,e,t,r)=>{const i=Object.entries(n),s=i.length;for(let o=0;o<s;o++){const[c,u]=i[o];El(u,Vp(e,c),t,r)}},Vp=(n,e)=>{let t=n;const r=e.split(Ra),i=r.length;for(let s=0;s<i;s++){const o=r[s];let c=t.nextPart.get(o);c||(c=kp(),t.nextPart.set(o,c)),t=c}return t},Fw=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,Uw=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),r=Object.create(null);const i=(s,o)=>{t[s]=o,e++,e>n&&(e=0,r=t,t=Object.create(null))};return{get(s){let o=t[s];if(o!==void 0)return o;if((o=r[s])!==void 0)return i(s,o),o},set(s,o){s in t?t[s]=o:i(s,o)}}},Mu="!",of=":",Bw=[],af=(n,e,t,r,i)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:r,isExternal:i}),qw=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=i=>{const s=[];let o=0,c=0,u=0,l;const d=i.length;for(let A=0;A<d;A++){const S=i[A];if(o===0&&c===0){if(S===of){s.push(i.slice(u,A)),u=A+1;continue}if(S==="/"){l=A;continue}}S==="["?o++:S==="]"?o--:S==="("?c++:S===")"&&c--}const f=s.length===0?i:i.slice(u);let p=f,y=!1;f.endsWith(Mu)?(p=f.slice(0,-1),y=!0):f.startsWith(Mu)&&(p=f.slice(1),y=!0);const b=l&&l>u?l-u:void 0;return af(s,y,p,b)};if(e){const i=e+of,s=r;r=o=>o.startsWith(i)?s(o.slice(i.length)):af(Bw,!1,o,void 0,!0)}if(t){const i=r;r=s=>t({className:s,parseClassName:i})}return r},zw=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,r)=>{e.set(t,1e6+r)}),t=>{const r=[];let i=[];for(let s=0;s<t.length;s++){const o=t[s],c=o[0]==="[",u=e.has(o);c||u?(i.length>0&&(i.sort(),r.push(...i),i=[]),r.push(o)):i.push(o)}return i.length>0&&(i.sort(),r.push(...i)),r}},jw=n=>({cache:Uw(n.cacheSize),parseClassName:qw(n),sortModifiers:zw(n),...kw(n)}),Gw=/\s+/,$w=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:s}=e,o=[],c=n.trim().split(Gw);let u="";for(let l=c.length-1;l>=0;l-=1){const d=c[l],{isExternal:f,modifiers:p,hasImportantModifier:y,baseClassName:b,maybePostfixModifierPosition:A}=t(d);if(f){u=d+(u.length>0?" "+u:u);continue}let S=!!A,V=r(S?b.substring(0,A):b);if(!V){if(!S){u=d+(u.length>0?" "+u:u);continue}if(V=r(b),!V){u=d+(u.length>0?" "+u:u);continue}S=!1}const L=p.length===0?"":p.length===1?p[0]:s(p).join(":"),M=y?L+Mu:L,B=M+V;if(o.indexOf(B)>-1)continue;o.push(B);const W=i(V,S);for(let G=0;G<W.length;++G){const E=W[G];o.push(M+E)}u=d+(u.length>0?" "+u:u)}return u},Ww=(...n)=>{let e=0,t,r,i="";for(;e<n.length;)(t=n[e++])&&(r=Np(t))&&(i&&(i+=" "),i+=r);return i},Np=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=Np(n[r]))&&(t&&(t+=" "),t+=e);return t},Hw=(n,...e)=>{let t,r,i,s;const o=u=>{const l=e.reduce((d,f)=>f(d),n());return t=jw(l),r=t.cache.get,i=t.cache.set,s=c,c(u)},c=u=>{const l=r(u);if(l)return l;const d=$w(u,t);return i(u,d),d};return s=o,(...u)=>s(Ww(...u))},Kw=[],qe=n=>{const e=t=>t[n]||Kw;return e.isThemeGetter=!0,e},xp=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Op=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Qw=/^\d+\/\d+$/,Jw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Yw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Xw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Zw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,eE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Kr=n=>Qw.test(n),ie=n=>!!n&&!Number.isNaN(Number(n)),In=n=>!!n&&Number.isInteger(Number(n)),au=n=>n.endsWith("%")&&ie(n.slice(0,-1)),$t=n=>Jw.test(n),tE=()=>!0,nE=n=>Yw.test(n)&&!Xw.test(n),Mp=()=>!1,rE=n=>Zw.test(n),iE=n=>eE.test(n),sE=n=>!H(n)&&!K(n),oE=n=>Mi(n,Up,Mp),H=n=>xp.test(n),or=n=>Mi(n,Bp,nE),cu=n=>Mi(n,hE,ie),cf=n=>Mi(n,Lp,Mp),aE=n=>Mi(n,Fp,iE),Ko=n=>Mi(n,qp,rE),K=n=>Op.test(n),ys=n=>Li(n,Bp),cE=n=>Li(n,dE),uf=n=>Li(n,Lp),uE=n=>Li(n,Up),lE=n=>Li(n,Fp),Qo=n=>Li(n,qp,!0),Mi=(n,e,t)=>{const r=xp.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},Li=(n,e,t=!1)=>{const r=Op.exec(n);return r?r[1]?e(r[1]):t:!1},Lp=n=>n==="position"||n==="percentage",Fp=n=>n==="image"||n==="url",Up=n=>n==="length"||n==="size"||n==="bg-size",Bp=n=>n==="length",hE=n=>n==="number",dE=n=>n==="family-name",qp=n=>n==="shadow",fE=()=>{const n=qe("color"),e=qe("font"),t=qe("text"),r=qe("font-weight"),i=qe("tracking"),s=qe("leading"),o=qe("breakpoint"),c=qe("container"),u=qe("spacing"),l=qe("radius"),d=qe("shadow"),f=qe("inset-shadow"),p=qe("text-shadow"),y=qe("drop-shadow"),b=qe("blur"),A=qe("perspective"),S=qe("aspect"),V=qe("ease"),L=qe("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],B=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],W=()=>[...B(),K,H],G=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto","contain","none"],_=()=>[K,H,u],w=()=>[Kr,"full","auto",..._()],v=()=>[In,"none","subgrid",K,H],T=()=>["auto",{span:["full",In,K,H]},In,K,H],R=()=>[In,"auto",K,H],I=()=>["auto","min","max","fr",K,H],ne=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],he=()=>["start","end","center","stretch","center-safe","end-safe"],F=()=>["auto",..._()],J=()=>[Kr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",..._()],N=()=>[n,K,H],ee=()=>[...B(),uf,cf,{position:[K,H]}],le=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Pt=()=>["auto","cover","contain",uE,oE,{size:[K,H]}],Tt=()=>[au,ys,or],Ce=()=>["","none","full",l,K,H],ye=()=>["",ie,ys,or],lt=()=>["solid","dashed","dotted","double"],zr=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ke=()=>[ie,au,uf,cf],jr=()=>["","none",b,K,H],Zn=()=>["none",ie,K,H],Gr=()=>["none",ie,K,H],ts=()=>[ie,K,H],er=()=>[Kr,"full",..._()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[$t],breakpoint:[$t],color:[tE],container:[$t],"drop-shadow":[$t],ease:["in","out","in-out"],font:[sE],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[$t],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[$t],shadow:[$t],spacing:["px",ie],text:[$t],"text-shadow":[$t],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Kr,H,K,S]}],container:["container"],columns:[{columns:[ie,H,K,c]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:W()}],overflow:[{overflow:G()}],"overflow-x":[{"overflow-x":G()}],"overflow-y":[{"overflow-y":G()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:w()}],"inset-x":[{"inset-x":w()}],"inset-y":[{"inset-y":w()}],start:[{start:w()}],end:[{end:w()}],top:[{top:w()}],right:[{right:w()}],bottom:[{bottom:w()}],left:[{left:w()}],visibility:["visible","invisible","collapse"],z:[{z:[In,"auto",K,H]}],basis:[{basis:[Kr,"full","auto",c,..._()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ie,Kr,"auto","initial","none",H]}],grow:[{grow:["",ie,K,H]}],shrink:[{shrink:["",ie,K,H]}],order:[{order:[In,"first","last","none",K,H]}],"grid-cols":[{"grid-cols":v()}],"col-start-end":[{col:T()}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":v()}],"row-start-end":[{row:T()}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":I()}],"auto-rows":[{"auto-rows":I()}],gap:[{gap:_()}],"gap-x":[{"gap-x":_()}],"gap-y":[{"gap-y":_()}],"justify-content":[{justify:[...ne(),"normal"]}],"justify-items":[{"justify-items":[...he(),"normal"]}],"justify-self":[{"justify-self":["auto",...he()]}],"align-content":[{content:["normal",...ne()]}],"align-items":[{items:[...he(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...he(),{baseline:["","last"]}]}],"place-content":[{"place-content":ne()}],"place-items":[{"place-items":[...he(),"baseline"]}],"place-self":[{"place-self":["auto",...he()]}],p:[{p:_()}],px:[{px:_()}],py:[{py:_()}],ps:[{ps:_()}],pe:[{pe:_()}],pt:[{pt:_()}],pr:[{pr:_()}],pb:[{pb:_()}],pl:[{pl:_()}],m:[{m:F()}],mx:[{mx:F()}],my:[{my:F()}],ms:[{ms:F()}],me:[{me:F()}],mt:[{mt:F()}],mr:[{mr:F()}],mb:[{mb:F()}],ml:[{ml:F()}],"space-x":[{"space-x":_()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":_()}],"space-y-reverse":["space-y-reverse"],size:[{size:J()}],w:[{w:[c,"screen",...J()]}],"min-w":[{"min-w":[c,"screen","none",...J()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[o]},...J()]}],h:[{h:["screen","lh",...J()]}],"min-h":[{"min-h":["screen","lh","none",...J()]}],"max-h":[{"max-h":["screen","lh",...J()]}],"font-size":[{text:["base",t,ys,or]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,K,cu]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",au,H]}],"font-family":[{font:[cE,H,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,K,H]}],"line-clamp":[{"line-clamp":[ie,"none",K,cu]}],leading:[{leading:[s,..._()]}],"list-image":[{"list-image":["none",K,H]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",K,H]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:N()}],"text-color":[{text:N()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...lt(),"wavy"]}],"text-decoration-thickness":[{decoration:[ie,"from-font","auto",K,or]}],"text-decoration-color":[{decoration:N()}],"underline-offset":[{"underline-offset":[ie,"auto",K,H]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:_()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K,H]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K,H]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ee()}],"bg-repeat":[{bg:le()}],"bg-size":[{bg:Pt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},In,K,H],radial:["",K,H],conic:[In,K,H]},lE,aE]}],"bg-color":[{bg:N()}],"gradient-from-pos":[{from:Tt()}],"gradient-via-pos":[{via:Tt()}],"gradient-to-pos":[{to:Tt()}],"gradient-from":[{from:N()}],"gradient-via":[{via:N()}],"gradient-to":[{to:N()}],rounded:[{rounded:Ce()}],"rounded-s":[{"rounded-s":Ce()}],"rounded-e":[{"rounded-e":Ce()}],"rounded-t":[{"rounded-t":Ce()}],"rounded-r":[{"rounded-r":Ce()}],"rounded-b":[{"rounded-b":Ce()}],"rounded-l":[{"rounded-l":Ce()}],"rounded-ss":[{"rounded-ss":Ce()}],"rounded-se":[{"rounded-se":Ce()}],"rounded-ee":[{"rounded-ee":Ce()}],"rounded-es":[{"rounded-es":Ce()}],"rounded-tl":[{"rounded-tl":Ce()}],"rounded-tr":[{"rounded-tr":Ce()}],"rounded-br":[{"rounded-br":Ce()}],"rounded-bl":[{"rounded-bl":Ce()}],"border-w":[{border:ye()}],"border-w-x":[{"border-x":ye()}],"border-w-y":[{"border-y":ye()}],"border-w-s":[{"border-s":ye()}],"border-w-e":[{"border-e":ye()}],"border-w-t":[{"border-t":ye()}],"border-w-r":[{"border-r":ye()}],"border-w-b":[{"border-b":ye()}],"border-w-l":[{"border-l":ye()}],"divide-x":[{"divide-x":ye()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ye()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...lt(),"hidden","none"]}],"divide-style":[{divide:[...lt(),"hidden","none"]}],"border-color":[{border:N()}],"border-color-x":[{"border-x":N()}],"border-color-y":[{"border-y":N()}],"border-color-s":[{"border-s":N()}],"border-color-e":[{"border-e":N()}],"border-color-t":[{"border-t":N()}],"border-color-r":[{"border-r":N()}],"border-color-b":[{"border-b":N()}],"border-color-l":[{"border-l":N()}],"divide-color":[{divide:N()}],"outline-style":[{outline:[...lt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ie,K,H]}],"outline-w":[{outline:["",ie,ys,or]}],"outline-color":[{outline:N()}],shadow:[{shadow:["","none",d,Qo,Ko]}],"shadow-color":[{shadow:N()}],"inset-shadow":[{"inset-shadow":["none",f,Qo,Ko]}],"inset-shadow-color":[{"inset-shadow":N()}],"ring-w":[{ring:ye()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:N()}],"ring-offset-w":[{"ring-offset":[ie,or]}],"ring-offset-color":[{"ring-offset":N()}],"inset-ring-w":[{"inset-ring":ye()}],"inset-ring-color":[{"inset-ring":N()}],"text-shadow":[{"text-shadow":["none",p,Qo,Ko]}],"text-shadow-color":[{"text-shadow":N()}],opacity:[{opacity:[ie,K,H]}],"mix-blend":[{"mix-blend":[...zr(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":zr()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ie]}],"mask-image-linear-from-pos":[{"mask-linear-from":ke()}],"mask-image-linear-to-pos":[{"mask-linear-to":ke()}],"mask-image-linear-from-color":[{"mask-linear-from":N()}],"mask-image-linear-to-color":[{"mask-linear-to":N()}],"mask-image-t-from-pos":[{"mask-t-from":ke()}],"mask-image-t-to-pos":[{"mask-t-to":ke()}],"mask-image-t-from-color":[{"mask-t-from":N()}],"mask-image-t-to-color":[{"mask-t-to":N()}],"mask-image-r-from-pos":[{"mask-r-from":ke()}],"mask-image-r-to-pos":[{"mask-r-to":ke()}],"mask-image-r-from-color":[{"mask-r-from":N()}],"mask-image-r-to-color":[{"mask-r-to":N()}],"mask-image-b-from-pos":[{"mask-b-from":ke()}],"mask-image-b-to-pos":[{"mask-b-to":ke()}],"mask-image-b-from-color":[{"mask-b-from":N()}],"mask-image-b-to-color":[{"mask-b-to":N()}],"mask-image-l-from-pos":[{"mask-l-from":ke()}],"mask-image-l-to-pos":[{"mask-l-to":ke()}],"mask-image-l-from-color":[{"mask-l-from":N()}],"mask-image-l-to-color":[{"mask-l-to":N()}],"mask-image-x-from-pos":[{"mask-x-from":ke()}],"mask-image-x-to-pos":[{"mask-x-to":ke()}],"mask-image-x-from-color":[{"mask-x-from":N()}],"mask-image-x-to-color":[{"mask-x-to":N()}],"mask-image-y-from-pos":[{"mask-y-from":ke()}],"mask-image-y-to-pos":[{"mask-y-to":ke()}],"mask-image-y-from-color":[{"mask-y-from":N()}],"mask-image-y-to-color":[{"mask-y-to":N()}],"mask-image-radial":[{"mask-radial":[K,H]}],"mask-image-radial-from-pos":[{"mask-radial-from":ke()}],"mask-image-radial-to-pos":[{"mask-radial-to":ke()}],"mask-image-radial-from-color":[{"mask-radial-from":N()}],"mask-image-radial-to-color":[{"mask-radial-to":N()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":B()}],"mask-image-conic-pos":[{"mask-conic":[ie]}],"mask-image-conic-from-pos":[{"mask-conic-from":ke()}],"mask-image-conic-to-pos":[{"mask-conic-to":ke()}],"mask-image-conic-from-color":[{"mask-conic-from":N()}],"mask-image-conic-to-color":[{"mask-conic-to":N()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ee()}],"mask-repeat":[{mask:le()}],"mask-size":[{mask:Pt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",K,H]}],filter:[{filter:["","none",K,H]}],blur:[{blur:jr()}],brightness:[{brightness:[ie,K,H]}],contrast:[{contrast:[ie,K,H]}],"drop-shadow":[{"drop-shadow":["","none",y,Qo,Ko]}],"drop-shadow-color":[{"drop-shadow":N()}],grayscale:[{grayscale:["",ie,K,H]}],"hue-rotate":[{"hue-rotate":[ie,K,H]}],invert:[{invert:["",ie,K,H]}],saturate:[{saturate:[ie,K,H]}],sepia:[{sepia:["",ie,K,H]}],"backdrop-filter":[{"backdrop-filter":["","none",K,H]}],"backdrop-blur":[{"backdrop-blur":jr()}],"backdrop-brightness":[{"backdrop-brightness":[ie,K,H]}],"backdrop-contrast":[{"backdrop-contrast":[ie,K,H]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ie,K,H]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ie,K,H]}],"backdrop-invert":[{"backdrop-invert":["",ie,K,H]}],"backdrop-opacity":[{"backdrop-opacity":[ie,K,H]}],"backdrop-saturate":[{"backdrop-saturate":[ie,K,H]}],"backdrop-sepia":[{"backdrop-sepia":["",ie,K,H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":_()}],"border-spacing-x":[{"border-spacing-x":_()}],"border-spacing-y":[{"border-spacing-y":_()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",K,H]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ie,"initial",K,H]}],ease:[{ease:["linear","initial",V,K,H]}],delay:[{delay:[ie,K,H]}],animate:[{animate:["none",L,K,H]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,K,H]}],"perspective-origin":[{"perspective-origin":W()}],rotate:[{rotate:Zn()}],"rotate-x":[{"rotate-x":Zn()}],"rotate-y":[{"rotate-y":Zn()}],"rotate-z":[{"rotate-z":Zn()}],scale:[{scale:Gr()}],"scale-x":[{"scale-x":Gr()}],"scale-y":[{"scale-y":Gr()}],"scale-z":[{"scale-z":Gr()}],"scale-3d":["scale-3d"],skew:[{skew:ts()}],"skew-x":[{"skew-x":ts()}],"skew-y":[{"skew-y":ts()}],transform:[{transform:[K,H,"","none","gpu","cpu"]}],"transform-origin":[{origin:W()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:er()}],"translate-x":[{"translate-x":er()}],"translate-y":[{"translate-y":er()}],"translate-z":[{"translate-z":er()}],"translate-none":["translate-none"],accent:[{accent:N()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:N()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K,H]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":_()}],"scroll-mx":[{"scroll-mx":_()}],"scroll-my":[{"scroll-my":_()}],"scroll-ms":[{"scroll-ms":_()}],"scroll-me":[{"scroll-me":_()}],"scroll-mt":[{"scroll-mt":_()}],"scroll-mr":[{"scroll-mr":_()}],"scroll-mb":[{"scroll-mb":_()}],"scroll-ml":[{"scroll-ml":_()}],"scroll-p":[{"scroll-p":_()}],"scroll-px":[{"scroll-px":_()}],"scroll-py":[{"scroll-py":_()}],"scroll-ps":[{"scroll-ps":_()}],"scroll-pe":[{"scroll-pe":_()}],"scroll-pt":[{"scroll-pt":_()}],"scroll-pr":[{"scroll-pr":_()}],"scroll-pb":[{"scroll-pb":_()}],"scroll-pl":[{"scroll-pl":_()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K,H]}],fill:[{fill:["none",...N()]}],"stroke-w":[{stroke:[ie,ys,or,cu]}],stroke:[{stroke:["none",...N()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},sD=Hw(fE),mE=()=>{};var lf={};/**
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
 */const zp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},pE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,l=u?n[i+2]:0,d=s>>2,f=(s&3)<<4|c>>4;let p=(c&15)<<2|l>>6,y=l&63;u||(y=64,o||(p=64)),r.push(t[d],t[f],t[p],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||l==null||f==null)throw new gE;const p=s<<2|c>>4;if(r.push(p),l!==64){const y=c<<4&240|l>>2;if(r.push(y),f!==64){const b=l<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _E=function(n){const e=zp(n);return jp.encodeByteArray(e,!0)},Sa=function(n){return _E(n).replace(/\./g,"")},Gp=function(n){try{return jp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $p(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yE=()=>$p().__FIREBASE_DEFAULTS__,IE=()=>{if(typeof process>"u"||typeof lf>"u")return;const n=lf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gp(n[1]);return e&&JSON.parse(e)},ec=()=>{try{return mE()||yE()||IE()||wE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wp=n=>ec()?.emulatorHosts?.[n],EE=n=>{const e=Wp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Hp=()=>ec()?.config,Kp=n=>ec()?.[`_${n}`];/**
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
 */class TE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function xr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function vE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Sa(JSON.stringify(t)),Sa(JSON.stringify(o)),""].join(".")}const Ns={};function bE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ns))Ns[e]?n.emulator.push(e):n.prod.push(e);return n}function AE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let hf=!1;function Qp(n,e){if(typeof window>"u"||typeof document>"u"||!xr(window.location.host)||Ns[n]===e||Ns[n]||hf)return;Ns[n]=e;function t(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=bE().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function c(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,y){p.setAttribute("width","24"),p.setAttribute("id",y),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function l(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{hf=!0,o()},p}function d(p,y){p.setAttribute("id",y),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=AE(r),y=t("text"),b=document.getElementById(y)||document.createElement("span"),A=t("learnmore"),S=document.getElementById(A)||document.createElement("a"),V=t("preprendIcon"),L=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const M=p.element;c(M),d(S,A);const B=l();u(L,V),M.append(L,b,S,B),document.body.appendChild(M)}s?(b.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Jp(){const n=ec()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function CE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kE(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Yp(){return!Jp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xp(){return!Jp()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Zp(){try{return typeof indexedDB=="object"}catch{return!1}}function DE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const VE="FirebaseError";class on extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=VE,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NE(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new on(i,c,r)}}function NE(n,e){return n.replace(xE,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xE=/\{\$([^}]+)}/g;function OE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function At(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(df(s)&&df(o)){if(!At(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function df(n){return n!==null&&typeof n=="object"}/**
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
 */function Fi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ss(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ME(n,e){const t=new LE(n,e);return t.subscribe.bind(t)}class LE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");FE(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=uu),i.error===void 0&&(i.error=uu),i.complete===void 0&&(i.complete=uu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function uu(){}/**
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
 */function Y(n){return n&&n._delegate?n._delegate:n}class Tr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cr="[DEFAULT]";/**
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
 */class UE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new TE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qE(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BE(n){return n===cr?void 0:n}function qE(n){return n.instantiationMode==="EAGER"}/**
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
 */class zE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new UE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const jE={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},GE=ae.INFO,$E={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},WE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=$E[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=GE,this._logHandler=WE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const HE=(n,e)=>e.some(t=>n instanceof t);let ff,mf;function KE(){return ff||(ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QE(){return mf||(mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eg=new WeakMap,Lu=new WeakMap,tg=new WeakMap,lu=new WeakMap,bl=new WeakMap;function JE(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Nn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&eg.set(t,n)}).catch(()=>{}),bl.set(e,n),e}function YE(n){if(Lu.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Lu.set(n,e)}let Fu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Lu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function XE(n){Fu=n(Fu)}function ZE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hu(this),e,...t);return tg.set(r,e.sort?e.sort():[e]),Nn(r)}:QE().includes(n)?function(...e){return n.apply(hu(this),e),Nn(eg.get(this))}:function(...e){return Nn(n.apply(hu(this),e))}}function eT(n){return typeof n=="function"?ZE(n):(n instanceof IDBTransaction&&YE(n),HE(n,KE())?new Proxy(n,Fu):n)}function Nn(n){if(n instanceof IDBRequest)return JE(n);if(lu.has(n))return lu.get(n);const e=eT(n);return e!==n&&(lu.set(n,e),bl.set(e,n)),e}const hu=n=>bl.get(n);function tT(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=Nn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Nn(o.result),u.oldVersion,u.newVersion,Nn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const nT=["get","getKey","getAll","getAllKeys","count"],rT=["put","add","delete","clear"],du=new Map;function pf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(du.get(e))return du.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=rT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nT.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),i&&u.done]))[0]};return du.set(e,s),s}XE(n=>({...n,get:(e,t,r)=>pf(e,t)||n.get(e,t,r),has:(e,t)=>!!pf(e,t)||n.has(e,t)}));/**
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
 */class iT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sT(n){return n.getComponent()?.type==="VERSION"}const Uu="@firebase/app",gf="0.14.8";/**
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
 */const Jt=new vl("@firebase/app"),oT="@firebase/app-compat",aT="@firebase/analytics-compat",cT="@firebase/analytics",uT="@firebase/app-check-compat",lT="@firebase/app-check",hT="@firebase/auth",dT="@firebase/auth-compat",fT="@firebase/database",mT="@firebase/data-connect",pT="@firebase/database-compat",gT="@firebase/functions",_T="@firebase/functions-compat",yT="@firebase/installations",IT="@firebase/installations-compat",wT="@firebase/messaging",ET="@firebase/messaging-compat",TT="@firebase/performance",vT="@firebase/performance-compat",bT="@firebase/remote-config",AT="@firebase/remote-config-compat",RT="@firebase/storage",ST="@firebase/storage-compat",PT="@firebase/firestore",CT="@firebase/ai",kT="@firebase/firestore-compat",DT="firebase",VT="12.9.0";/**
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
 */const Pa="[DEFAULT]",NT={[Uu]:"fire-core",[oT]:"fire-core-compat",[cT]:"fire-analytics",[aT]:"fire-analytics-compat",[lT]:"fire-app-check",[uT]:"fire-app-check-compat",[hT]:"fire-auth",[dT]:"fire-auth-compat",[fT]:"fire-rtdb",[mT]:"fire-data-connect",[pT]:"fire-rtdb-compat",[gT]:"fire-fn",[_T]:"fire-fn-compat",[yT]:"fire-iid",[IT]:"fire-iid-compat",[wT]:"fire-fcm",[ET]:"fire-fcm-compat",[TT]:"fire-perf",[vT]:"fire-perf-compat",[bT]:"fire-rc",[AT]:"fire-rc-compat",[RT]:"fire-gcs",[ST]:"fire-gcs-compat",[PT]:"fire-fst",[kT]:"fire-fst-compat",[CT]:"fire-vertex","fire-js":"fire-js",[DT]:"fire-js-all"};/**
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
 */const $s=new Map,xT=new Map,Bu=new Map;function _f(n,e){try{n.container.addComponent(e)}catch(t){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mi(n){const e=n.name;if(Bu.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Bu.set(e,n);for(const t of $s.values())_f(t,n);for(const t of xT.values())_f(t,n);return!0}function mo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function OT(n,e,t=Pa){mo(n,e).clearInstance(t)}function Se(n){return n==null?!1:n.settings!==void 0}/**
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
 */const MT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xn=new fo("app","Firebase",MT);/**
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
 */class LT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ui=VT;function FT(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Pa,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw xn.create("bad-app-name",{appName:String(i)});if(t||(t=Hp()),!t)throw xn.create("no-options");const s=$s.get(i);if(s){if(At(t,s.options)&&At(r,s.config))return s;throw xn.create("duplicate-app",{appName:i})}const o=new zE(i);for(const u of Bu.values())o.addComponent(u);const c=new LT(t,r,o);return $s.set(i,c),c}function ng(n=Pa){const e=$s.get(n);if(!e&&n===Pa&&Hp())return FT();if(!e)throw xn.create("no-app",{appName:n});return e}function oD(){return Array.from($s.values())}function _r(n,e,t){let r=NT[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(o.join(" "));return}mi(new Tr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const UT="firebase-heartbeat-database",BT=1,Ws="firebase-heartbeat-store";let fu=null;function rg(){return fu||(fu=tT(UT,BT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ws)}catch(t){console.warn(t)}}}}).catch(n=>{throw xn.create("idb-open",{originalErrorMessage:n.message})})),fu}async function qT(n){try{const t=(await rg()).transaction(Ws),r=await t.objectStore(Ws).get(ig(n));return await t.done,r}catch(e){if(e instanceof on)Jt.warn(e.message);else{const t=xn.create("idb-get",{originalErrorMessage:e?.message});Jt.warn(t.message)}}}async function yf(n,e){try{const r=(await rg()).transaction(Ws,"readwrite");await r.objectStore(Ws).put(e,ig(n)),await r.done}catch(t){if(t instanceof on)Jt.warn(t.message);else{const r=xn.create("idb-set",{originalErrorMessage:t?.message});Jt.warn(r.message)}}}function ig(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zT=1024,jT=30;class GT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new WT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=If();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>jT){const i=HT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Jt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=If(),{heartbeatsToSend:t,unsentEntries:r}=$T(this._heartbeatsCache.heartbeats),i=Sa(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Jt.warn(e),""}}}function If(){return new Date().toISOString().substring(0,10)}function $T(n,e=zT){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wf(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),wf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class WT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zp()?DE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wf(n){return Sa(JSON.stringify({version:2,heartbeats:n})).length}function HT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function KT(n){mi(new Tr("platform-logger",e=>new iT(e),"PRIVATE")),mi(new Tr("heartbeat",e=>new GT(e),"PRIVATE")),_r(Uu,gf,n),_r(Uu,gf,"esm2020"),_r("fire-js","")}KT("");/**
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
 */const aD={PHONE:"phone",TOTP:"totp"},cD={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},uD={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},lD={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},hD={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function QT(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dD=QT,JT=sg,og=new fo("auth","Firebase",sg()),fD={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
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
 */const Ca=new vl("@firebase/auth");function YT(n,...e){Ca.logLevel<=ae.WARN&&Ca.warn(`Auth (${Ui}): ${n}`,...e)}function ua(n,...e){Ca.logLevel<=ae.ERROR&&Ca.error(`Auth (${Ui}): ${n}`,...e)}/**
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
 */function ut(n,...e){throw Rl(n,...e)}function st(n,...e){return Rl(n,...e)}function Al(n,e,t){const r={...JT(),[e]:t};return new fo("auth","Firebase",r).create(e,{appName:n.name})}function Ke(n){return Al(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bi(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ut(n,"argument-error"),Al(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return og.create(n,...e)}function U(n,e,...t){if(!n)throw Rl(e,...t)}function Nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ua(e),new Error(e)}function Yt(n,e){n||Nt(e)}/**
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
 */function Hs(){return typeof self<"u"&&self.location?.href||""}function Sl(){return Ef()==="http:"||Ef()==="https:"}function Ef(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function XT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sl()||PE()||"connection"in navigator)?navigator.onLine:!0}function ZT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class po{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yt(t>e,"Short delay should be less than long delay!"),this.isMobile=RE()||CE()}get(){return XT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pl(n,e){Yt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ag{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ev={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nv=new po(3e4,6e4);function Te(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ve(n,e,t,r,i={}){return cg(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=Fi({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:u,...s};return SE()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&xr(n.emulatorConfig.host)&&(l.credentials="include"),ag.fetch()(await ug(n,n.config.apiHost,t,c),l)})}async function cg(n,e,t){n._canInitEmulator=!1;const r={...ev,...e};try{const i=new iv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ps(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,l]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ps(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ps(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ps(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Al(n,d,l);ut(n,d)}}catch(i){if(i instanceof on)throw i;ut(n,"network-request-failed",{message:String(i)})}}async function an(n,e,t,r,i={}){const s=await ve(n,e,t,r,i);return"mfaPendingCredential"in s&&ut(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function ug(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Pl(n.config,i):`${n.config.apiScheme}://${i}`;return tv.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function rv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),nv.get())})}}function Ps(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=st(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */function Tf(n){return n!==void 0&&n.getResponse!==void 0}function vf(n){return n!==void 0&&n.enterprise!==void 0}class lg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return rv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function sv(n){return(await ve(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function hg(n,e){return ve(n,"GET","/v2/recaptchaConfig",Te(n,e))}/**
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
 */async function ov(n,e){return ve(n,"POST","/v1/accounts:delete",e)}async function av(n,e){return ve(n,"POST","/v1/accounts:update",e)}async function ka(n,e){return ve(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function xs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function mD(n,e=!1){return Y(n).getIdToken(e)}async function cv(n,e=!1){const t=Y(n),r=await t.getIdToken(e),i=tc(r);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:xs(mu(i.auth_time)),issuedAtTime:xs(mu(i.iat)),expirationTime:xs(mu(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function mu(n){return Number(n)*1e3}function tc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gp(t);return i?JSON.parse(i):(ua("Failed to decode base64 JWT payload"),null)}catch(i){return ua("Caught error parsing JWT payload as JSON",i?.toString()),null}}function bf(n){const e=tc(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof on&&uv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class lv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ks(n){const e=n.auth,t=await n.getIdToken(),r=await Xt(n,ka(e,{idToken:t}));U(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=i.providerUserInfo?.length?dg(i.providerUserInfo):[],o=dv(n.providerData,s),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!o?.length,l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,d)}async function hv(n){const e=Y(n);await Ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function fv(n,e){const t=await cg(n,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await ug(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&xr(n.emulatorConfig.host)&&(u.credentials="include"),ag.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mv(n,e){return ve(n,"POST","/v2/accounts:revokeToken",Te(n,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=bf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await fv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new oi;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
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
 */function wn(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Xt(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cv(this,e)}reload(){return hv(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ks(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Se(this.auth.app))return Promise.reject(Ke(this.auth));const e=await this.getIdToken();return await Xt(this,ov(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,l=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:y,providerData:b,stsTokenManager:A}=t;U(f&&A,e,"internal-error");const S=oi.fromJSON(this.name,A);U(typeof f=="string",e,"internal-error"),wn(r,e.name),wn(i,e.name),U(typeof p=="boolean",e,"internal-error"),U(typeof y=="boolean",e,"internal-error"),wn(s,e.name),wn(o,e.name),wn(c,e.name),wn(u,e.name),wn(l,e.name),wn(d,e.name);const V=new bt({uid:f,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:S,createdAt:l,lastLoginAt:d});return b&&Array.isArray(b)&&(V.providerData=b.map(L=>({...L}))),u&&(V._redirectEventId=u),V}static async _fromIdTokenResponse(e,t,r=!1){const i=new oi;i.updateFromServerResponse(t);const s=new bt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ks(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?dg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,c=new oi;c.updateFromIdToken(r);const u=new bt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,l),u}}/**
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
 */const Af=new Map;function Wt(n){Yt(n instanceof Function,"Expected a class definition");let e=Af.get(n);return e?(Yt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Af.set(n,e),e)}/**
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
 */class fg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fg.type="NONE";const Rf=fg;/**
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
 */function la(n,e,t){return`firebase:${n}:${e}:${t}`}class ai{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=la(this.userKey,i.apiKey,s),this.fullPersistenceKey=la("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ka(this.auth,{idToken:e}).catch(()=>{});return t?bt._fromGetAccountInfoResponse(this.auth,t,e):null}return bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ai(Wt(Rf),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Wt(Rf);const o=la(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const d=await l._get(o);if(d){let f;if(typeof d=="string"){const p=await ka(e,{idToken:d}).catch(()=>{});if(!p)break;f=await bt._fromGetAccountInfoResponse(e,p,d)}else f=bt._fromJSON(e,d);l!==s&&(c=f),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ai(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ai(s,e,r))}}/**
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
 */function Sf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_g(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ig(e))return"Blackberry";if(wg(e))return"Webos";if(pg(e))return"Safari";if((e.includes("chrome/")||gg(e))&&!e.includes("edge/"))return"Chrome";if(yg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function mg(n=ze()){return/firefox\//i.test(n)}function pg(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gg(n=ze()){return/crios\//i.test(n)}function _g(n=ze()){return/iemobile/i.test(n)}function yg(n=ze()){return/android/i.test(n)}function Ig(n=ze()){return/blackberry/i.test(n)}function wg(n=ze()){return/webos/i.test(n)}function Cl(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pv(n=ze()){return Cl(n)&&!!window.navigator?.standalone}function gv(){return kE()&&document.documentMode===10}function Eg(n=ze()){return Cl(n)||yg(n)||wg(n)||Ig(n)||/windows phone/i.test(n)||_g(n)}/**
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
 */function Tg(n,e=[]){let t;switch(n){case"Browser":t=Sf(ze());break;case"Worker":t=`${Sf(ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ui}/${r}`}/**
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
 */class _v{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function yv(n,e={}){return ve(n,"GET","/v2/passwordPolicy",Te(n,e))}/**
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
 */const Iv=6;class wv{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Iv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ev{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new _v(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ka(this,{idToken:e}),r=await bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Se(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===o)&&c?.user&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ks(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Se(this.app))return Promise.reject(Ke(this));const t=e?Y(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Se(this.app)?Promise.reject(Ke(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Se(this.app)?Promise.reject(Ke(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yv(this),t=new wv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await mv(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[Wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Se(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&YT(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ne(n){return Y(n)}class Pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=ME(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tv(n){go=n}function kl(n){return go.loadJS(n)}function vv(){return go.recaptchaV2Script}function bv(){return go.recaptchaEnterpriseScript}function Av(){return go.gapiScript}function vg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const Rv=500,Sv=6e4,Jo=1e12;class Pv{constructor(e){this.auth=e,this.counter=Jo,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Dv(e,this.auth.name,t||{})),this.counter++,r}reset(e){const t=e||Jo;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Jo;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||Jo;return this._widgets.get(t)?.execute(),""}}class Cv{constructor(){this.enterprise=new kv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class kv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Dv{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;U(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Vv(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Sv)},Rv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Vv(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const Nv="recaptcha-enterprise",Os="NO_RECAPTCHA";class bg{constructor(e){this.type=Nv,this.auth=Ne(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{hg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new lg(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;vf(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Os)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Cv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&vf(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=bv();u.length!==0&&(u+=c),kl(u).then(()=>{i(c,s,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Is(n,e,t,r=!1,i=!1){const s=new bg(n);let o;if(i)o=Os;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function On(n,e,t,r,i){if(i==="EMAIL_PASSWORD_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Is(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Is(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)});else if(i==="PHONE_PROVIDER")if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await Is(n,e,t);return r(n,s).catch(async o=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const c=await Is(n,e,t,!1,!0);return r(n,c)}return Promise.reject(o)})}else{const s=await Is(n,e,t,!1,!0);return r(n,s)}else return Promise.reject(i+" provider is not supported.")}async function Ag(n){const e=Ne(n),t=await hg(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new lg(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new bg(e).verify()}/**
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
 */function xv(n,e){const t=mo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(At(s,e??{}))return i;ut(i,"already-initialized")}return t.initialize({options:e})}function Ov(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Wt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Mv(n,e,t){const r=Ne(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!t?.disableWarnings,s=Rg(e),{host:o,port:c}=Lv(e),u=c===null?"":`:${c}`,l={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(At(l,r.config.emulator)&&At(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,xr(o)?(Tl(`${s}//${o}${u}`),Qp("Auth",!0)):i||Fv()}function Rg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Lv(n){const e=Rg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cf(o)}}}function Cf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class _o{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,t){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}/**
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
 */async function Sg(n,e){return ve(n,"POST","/v1/accounts:resetPassword",Te(n,e))}async function Uv(n,e){return ve(n,"POST","/v1/accounts:update",e)}async function Bv(n,e){return ve(n,"POST","/v1/accounts:signUp",e)}async function qv(n,e){return ve(n,"POST","/v1/accounts:update",Te(n,e))}/**
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
 */async function zv(n,e){return an(n,"POST","/v1/accounts:signInWithPassword",Te(n,e))}async function nc(n,e){return ve(n,"POST","/v1/accounts:sendOobCode",Te(n,e))}async function jv(n,e){return nc(n,e)}async function Gv(n,e){return nc(n,e)}async function $v(n,e){return nc(n,e)}async function Wv(n,e){return nc(n,e)}/**
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
 */async function Hv(n,e){return an(n,"POST","/v1/accounts:signInWithEmailLink",Te(n,e))}async function Kv(n,e){return an(n,"POST","/v1/accounts:signInWithEmailLink",Te(n,e))}/**
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
 */class Qs extends _o{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Qs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Qs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return On(e,t,"signInWithPassword",zv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Hv(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return On(e,r,"signUpPassword",Bv,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Kv(e,{idToken:t,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qt(n,e){return an(n,"POST","/v1/accounts:signInWithIdp",Te(n,e))}/**
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
 */const Qv="http://localhost";class Zt extends _o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ut("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const o=new Zt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qt(e,t)}buildRequest(){const e={requestUri:Qv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fi(t)}return e}}/**
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
 */async function kf(n,e){return ve(n,"POST","/v1/accounts:sendVerificationCode",Te(n,e))}async function Jv(n,e){return an(n,"POST","/v1/accounts:signInWithPhoneNumber",Te(n,e))}async function Yv(n,e){const t=await an(n,"POST","/v1/accounts:signInWithPhoneNumber",Te(n,e));if(t.temporaryProof)throw Ps(n,"account-exists-with-different-credential",t);return t}const Xv={USER_NOT_FOUND:"user-not-found"};async function Zv(n,e){const t={...e,operation:"REAUTH"};return an(n,"POST","/v1/accounts:signInWithPhoneNumber",Te(n,t),Xv)}/**
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
 */class yr extends _o{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new yr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new yr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Jv(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Yv(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Zv(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new yr({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function eb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tb(n){const e=Rs(Ss(n)).link,t=e?Rs(Ss(e)).deep_link_id:null,r=Rs(Ss(n)).deep_link_id;return(r?Rs(Ss(r)).link:null)||r||t||e||n}class yo{constructor(e){const t=Rs(Ss(e)),r=t.apiKey??null,i=t.oobCode??null,s=eb(t.mode??null);U(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=tb(e);try{return new yo(t)}catch{return null}}}function pD(n){return yo.parseLink(n)}/**
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
 */class Or{constructor(){this.providerId=Or.PROVIDER_ID}static credential(e,t){return Qs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=yo.parseLink(t);return U(r,"argument-error"),Qs._fromEmailAndCode(e,r.code,r.tenantId)}}Or.PROVIDER_ID="password";Or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class cn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qi extends cn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ha extends qi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return U("providerId"in t&&"signInMethod"in t,"argument-error"),Zt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),Zt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ha.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ha.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!r&&!i&&!t&&!s||!c)return null;try{return new ha(c)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class bn extends qi{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class An extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zt._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return An.credential(t,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
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
 */class Rn extends qi{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
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
 */const nb="http://localhost";class Js extends _o{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Qt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Js(r,s)}static _create(e,t){return new Js(e,t)}buildRequest(){return{requestUri:nb,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const rb="saml.";class zu extends cn{constructor(e){U(e.startsWith(rb),"argument-error"),super(e)}static credentialFromResult(e){return zu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return zu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Js.fromJSON(e);return U(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Js._create(r,t)}catch{return null}}}/**
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
 */class Sn extends qi{constructor(){super("twitter.com")}static credential(e,t){return Zt._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Sn.credential(t,r)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
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
 */async function Pg(n,e){return an(n,"POST","/v1/accounts:signUp",Te(n,e))}/**
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
 */class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await bt._fromIdTokenResponse(e,r,i),o=Df(r);return new Et({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Df(r);return new Et({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Df(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function gD(n){if(Se(n.app))return Promise.reject(Ke(n));const e=Ne(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Et({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Pg(e,{returnSecureToken:!0}),r=await Et._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class Da extends on{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Da(e,t,r,i)}}function Cg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */function kg(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function _D(n,e){const t=Y(n);await rc(!0,t,e);const{providerUserInfo:r}=await av(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=kg(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Dl(n,e,t=!1){const r=await Xt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Et._forOperation(n,"link",r)}async function rc(n,e,t){await Ks(e);const r=kg(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";U(r.has(t)===n,e.auth,i)}/**
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
 */async function Dg(n,e,t=!1){const{auth:r}=n;if(Se(r.app))return Promise.reject(Ke(r));const i="reauthenticate";try{const s=await Xt(n,Cg(r,i,e,n),t);U(s.idToken,r,"internal-error");const o=tc(s.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(n.uid===c,r,"user-mismatch"),Et._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
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
 */async function Vg(n,e,t=!1){if(Se(n.app))return Promise.reject(Ke(n));const r="signIn",i=await Cg(n,r,e),s=await Et._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Vl(n,e){return Vg(Ne(n),e)}async function ib(n,e){const t=Y(n);return await rc(!1,t,e.providerId),Dl(t,e)}async function sb(n,e){return Dg(Y(n),e)}/**
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
 */async function ob(n,e){return an(n,"POST","/v1/accounts:signInWithCustomToken",Te(n,e))}/**
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
 */async function yD(n,e){if(Se(n.app))return Promise.reject(Ke(n));const t=Ne(n),r=await ob(t,{token:e,returnSecureToken:!0}),i=await Et._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
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
 */class Io{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Nl._fromServerResponse(e,t):"totpInfo"in t?xl._fromServerResponse(e,t):ut(e,"internal-error")}}class Nl extends Io{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Nl(t)}}class xl extends Io{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new xl(t)}}/**
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
 */function ic(n,e,t){U(t.url?.length>0,n,"invalid-continue-uri"),U(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),U(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(U(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(U(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Ol(n){const e=Ne(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ID(n,e,t){const r=Ne(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&ic(r,i,t),await On(r,i,"getOobCode",Gv,"EMAIL_PASSWORD_PROVIDER")}async function wD(n,e,t){await Sg(Y(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ol(n),r})}async function ED(n,e){await qv(Y(n),{oobCode:e})}async function ab(n,e){const t=Y(n),r=await Sg(t,{oobCode:e}),i=r.requestType;switch(U(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(r.mfaInfo,t,"internal-error");default:U(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Io._fromServerResponse(Ne(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function TD(n,e){const{data:t}=await ab(Y(n),e);return t.email}async function vD(n,e,t){if(Se(n.app))return Promise.reject(Ke(n));const r=Ne(n),o=await On(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pg,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ol(n),u}),c=await Et._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function bD(n,e,t){return Se(n.app)?Promise.reject(Ke(n)):Vl(Y(n),Or.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ol(n),r})}/**
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
 */async function AD(n,e,t){const r=Ne(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){U(c.handleCodeInApp,r,"argument-error"),c&&ic(r,o,c)}s(i,t),await On(r,i,"getOobCode",$v,"EMAIL_PASSWORD_PROVIDER")}function RD(n,e){return yo.parseLink(e)?.operation==="EMAIL_SIGNIN"}async function SD(n,e,t){if(Se(n.app))return Promise.reject(Ke(n));const r=Y(n),i=Or.credentialWithLink(e,t||Hs());return U(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Vl(r,i)}/**
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
 */async function cb(n,e){return ve(n,"POST","/v1/accounts:createAuthUri",Te(n,e))}/**
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
 */async function PD(n,e){const t=Sl()?Hs():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await cb(Y(n),r);return i||[]}async function CD(n,e){const t=Y(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&ic(t.auth,i,e);const{email:s}=await jv(t.auth,i);s!==n.email&&await n.reload()}async function kD(n,e,t){const r=Y(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&ic(r.auth,s,t);const{email:o}=await Wv(r.auth,s);o!==n.email&&await n.reload()}/**
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
 */async function ub(n,e){return ve(n,"POST","/v1/accounts:update",e)}/**
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
 */async function DD(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Y(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Xt(r,ub(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function VD(n,e){const t=Y(n);return Se(t.auth.app)?Promise.reject(Ke(t.auth)):Ng(t,e,null)}function ND(n,e){return Ng(Y(n),null,e)}async function Ng(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Xt(n,Uv(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function lb(n){if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&n?.idToken){const i=tc(n.idToken)?.firebase?.sign_in_provider;if(i){const s=i!=="anonymous"&&i!=="custom"?i:null;return new ci(r,s)}}if(!e)return null;switch(e){case"facebook.com":return new hb(r,t);case"github.com":return new db(r,t);case"google.com":return new fb(r,t);case"twitter.com":return new mb(r,t,n.screenName||null);case"custom":case"anonymous":return new ci(r,null);default:return new ci(r,e,t)}}class ci{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class xg extends ci{constructor(e,t,r,i){super(e,t,r),this.username=i}}class hb extends ci{constructor(e,t){super(e,"facebook.com",t)}}class db extends xg{constructor(e,t){super(e,"github.com",t,typeof t?.login=="string"?t?.login:null)}}class fb extends ci{constructor(e,t){super(e,"google.com",t)}}class mb extends xg{constructor(e,t,r){super(e,"twitter.com",t,r)}}function xD(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:lb(t)}/**
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
 */function OD(n,e){return Y(n).setPersistence(e)}function MD(n){return Ag(n)}async function LD(n,e){return Ne(n).validatePassword(e)}function pb(n,e,t,r){return Y(n).onIdTokenChanged(e,t,r)}function gb(n,e,t){return Y(n).beforeAuthStateChanged(e,t)}function FD(n,e,t,r){return Y(n).onAuthStateChanged(e,t,r)}function UD(n){Y(n).useDeviceLanguage()}function BD(n,e){return Y(n).updateCurrentUser(e)}function qD(n){return Y(n).signOut()}function zD(n,e){return Ne(n).revokeAccessToken(e)}async function jD(n){return Y(n).delete()}/**
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
 */class pr{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new pr("enroll",e,t)}static _fromMfaPendingCredential(e){return new pr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){if(e?.multiFactorSession){if(e.multiFactorSession?.pendingCredential)return pr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(e.multiFactorSession?.idToken)return pr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Ml{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Ne(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(c=>Io._fromServerResponse(r,c));U(i.mfaPendingCredential,r,"internal-error");const o=pr._fromMfaPendingCredential(i.mfaPendingCredential);return new Ml(o,s,async c=>{const u=await c._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l={...i,idToken:u.idToken,refreshToken:u.refreshToken};switch(t.operationType){case"signIn":const d=await Et._fromIdTokenResponse(r,t.operationType,l);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return U(t.user,r,"internal-error"),Et._forOperation(t.user,t.operationType,l);default:ut(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function GD(n,e){const t=Y(n),r=e;return U(e.customData.operationType,t,"argument-error"),U(r.customData._serverResponse?.mfaPendingCredential,t,"argument-error"),Ml._fromError(t,r)}/**
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
 */function Vf(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:start",Te(n,e))}function _b(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:finalize",Te(n,e))}function yb(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:start",Te(n,e))}function Ib(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:finalize",Te(n,e))}function wb(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Te(n,e))}class Ll{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Io._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Ll(e)}async getSession(){return pr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await Xt(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Xt(this.user,wb(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const pu=new WeakMap;function $D(n){const e=Y(n);return pu.has(e)||pu.set(e,Ll._fromUser(e)),pu.get(e)}const Va="__sak";/**
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
 */class Og{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Va,"1"),this.storage.removeItem(Va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Eb=1e3,Tb=10;class Mg extends Og{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Tb):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mg.type="LOCAL";const vb=Mg;/**
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
 */const bb=1e3;function gu(n){const e=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return document.cookie.match(t)?.[1]??null}function _u(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}class Lg{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=_u(e);return window.cookieStore?(await window.cookieStore.get(t))?.value:gu(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const r=_u(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const r=_u(e);if(window.cookieStore){const c=(l=>{const d=l.changed.find(p=>p.name===r);d&&t(d.value),l.deleted.find(p=>p.name===r)&&t(null)}),u=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,u),window.cookieStore.addEventListener("change",c)}let i=gu(r);const s=setInterval(()=>{const c=gu(r);c!==i&&(t(c),i=c)},bb),o=()=>clearInterval(s);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}}Lg.type="COOKIE";const WD=Lg;/**
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
 */class Fg extends Og{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fg.type="SESSION";const Ug=Fg;/**
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
 */function Ab(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async l=>l(t.origin,s)),u=await Ab(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
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
 */function oc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Rb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const l=oc("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Fe(){return window}function Sb(n){Fe().location.href=n}/**
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
 */function Fl(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function Pb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cb(){return navigator?.serviceWorker?.controller||null}function kb(){return Fl()?self:null}/**
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
 */const Bg="firebaseLocalStorageDb",Db=1,Na="firebaseLocalStorage",qg="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ac(n,e){return n.transaction([Na],e?"readwrite":"readonly").objectStore(Na)}function Vb(){const n=indexedDB.deleteDatabase(Bg);return new wo(n).toPromise()}function ju(){const n=indexedDB.open(Bg,Db);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Na,{keyPath:qg})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Na)?e(r):(r.close(),await Vb(),e(await ju()))})})}async function Nf(n,e,t){const r=ac(n,!0).put({[qg]:e,value:t});return new wo(r).toPromise()}async function Nb(n,e){const t=ac(n,!1).get(e),r=await new wo(t).toPromise();return r===void 0?null:r.value}function xf(n,e){const t=ac(n,!0).delete(e);return new wo(t).toPromise()}const xb=800,Ob=3;class zg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ju(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(kb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Pb(),!this.activeServiceWorker)return;this.sender=new Rb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ju();return await Nf(e,Va,"1"),await xf(e,Va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Nb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ac(i,!1).getAll();return new wo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zg.type="LOCAL";const Mb=zg;/**
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
 */function Of(n,e){return ve(n,"POST","/v2/accounts/mfaSignIn:start",Te(n,e))}function Lb(n,e){return ve(n,"POST","/v2/accounts/mfaSignIn:finalize",Te(n,e))}function Fb(n,e){return ve(n,"POST","/v2/accounts/mfaSignIn:finalize",Te(n,e))}/**
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
 */const yu=vg("rcb"),Ub=new po(3e4,6e4);class Bb{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Fe().grecaptcha?.render}load(e,t=""){return U(qb(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Tf(Fe().grecaptcha)?Promise.resolve(Fe().grecaptcha):new Promise((r,i)=>{const s=Fe().setTimeout(()=>{i(st(e,"network-request-failed"))},Ub.get());Fe()[yu]=()=>{Fe().clearTimeout(s),delete Fe()[yu];const c=Fe().grecaptcha;if(!c||!Tf(c)){i(st(e,"internal-error"));return}const u=c.render;c.render=(l,d)=>{const f=u(l,d);return this.counter++,f},this.hostLanguage=t,r(c)};const o=`${vv()}?${Fi({onload:yu,render:"explicit",hl:t})}`;kl(o).catch(()=>{clearTimeout(s),i(st(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Fe().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function qb(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class zb{async load(e){return new Pv(e)}clearedOneInstance(){}}/**
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
 */const Ms="recaptcha",jb={theme:"light",type:"image"};class HD{constructor(e,t,r={...jb}){this.parameters=r,this.type=Ms,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(e),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;U(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new zb:new Bb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Fe()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){U(Sl()&&!Fl(),this.auth,"internal-error"),await Gb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await sv(this.auth);U(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Gb(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Ul{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=yr._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function KD(n,e,t){if(Se(n.app))return Promise.reject(Ke(n));const r=Ne(n),i=await cc(r,e,Y(t));return new Ul(i,s=>Vl(r,s))}async function QD(n,e,t){const r=Y(n);await rc(!1,r,"phone");const i=await cc(r.auth,e,Y(t));return new Ul(i,s=>ib(r,s))}async function JD(n,e,t){const r=Y(n);if(Se(r.auth.app))return Promise.reject(Ke(r.auth));const i=await cc(r.auth,e,Y(t));return new Ul(i,s=>sb(r,s))}async function cc(n,e,t){if(!n._getRecaptchaConfig())try{await Ag(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const i=r.session;if("phoneNumber"in r){U(i.type==="enroll",n,"internal-error");const s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await On(n,s,"mfaSmsEnrollment",async(l,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Os){U(t?.type===Ms,l,"argument-error");const f=await Iu(l,d,t);return Vf(l,f)}return Vf(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).phoneSessionInfo.sessionInfo}else{U(i.type==="signin",n,"internal-error");const s=r.multiFactorHint?.uid||r.multiFactorUid;U(s,n,"missing-multi-factor-info");const o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await On(n,o,"mfaSmsSignIn",async(d,f)=>{if(f.phoneSignInInfo.captchaResponse===Os){U(t?.type===Ms,d,"argument-error");const p=await Iu(d,f,t);return Of(d,p)}return Of(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await On(n,i,"sendVerificationCode",async(u,l)=>{if(l.captchaResponse===Os){U(t?.type===Ms,u,"argument-error");const d=await Iu(u,l,t);return kf(u,d)}return kf(u,l)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{t?._reset()}}async function YD(n,e){const t=Y(n);if(Se(t.auth.app))return Promise.reject(Ke(t.auth));await Dl(t,e)}async function Iu(n,e,t){U(t.type===Ms,n,"argument-error");const r=await t.verify();U(typeof r=="string",n,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */class ui{constructor(e){this.providerId=ui.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return cc(this.auth,e,Y(t))}static credential(e,t){return yr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ui.credentialFromTaggedObject(t)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?yr._fromTokenResponse(t,r):null}}ui.PROVIDER_ID="phone";ui.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Mr(n,e){return e?Wt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Bl extends _o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $b(n){return Vg(n.auth,new Bl(n),n.bypassAuthState)}function Wb(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Dg(t,new Bl(n),n.bypassAuthState)}async function Hb(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Dl(t,new Bl(n),n.bypassAuthState)}/**
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
 */class jg{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $b;case"linkViaPopup":case"linkViaRedirect":return Hb;case"reauthViaPopup":case"reauthViaRedirect":return Wb;default:ut(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kb=new po(2e3,1e4);async function XD(n,e,t){if(Se(n.app))return Promise.reject(st(n,"operation-not-supported-in-this-environment"));const r=Ne(n);Bi(n,e,cn);const i=Mr(r,t);return new Ht(r,"signInViaPopup",e,i).executeNotNull()}async function ZD(n,e,t){const r=Y(n);if(Se(r.auth.app))return Promise.reject(st(r.auth,"operation-not-supported-in-this-environment"));Bi(r.auth,e,cn);const i=Mr(r.auth,t);return new Ht(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function eV(n,e,t){const r=Y(n);Bi(r.auth,e,cn);const i=Mr(r.auth,t);return new Ht(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ht extends jg{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kb.get())};e()}}Ht.currentPopupAction=null;/**
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
 */const Qb="pendingRedirect",da=new Map;class Jb extends jg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=da.get(this.auth._key());if(!e){try{const r=await Yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}da.set(this.auth._key(),e)}return this.bypassAuthState||da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yb(n,e){const t=$g(e),r=Gg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function ql(n,e){return Gg(n)._set($g(e),"true")}function Xb(n,e){da.set(n._key(),e)}function Gg(n){return Wt(n._redirectPersistence)}function $g(n){return la(Qb,n.config.apiKey,n.name)}/**
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
 */function tV(n,e,t){return Zb(n,e,t)}async function Zb(n,e,t){if(Se(n.app))return Promise.reject(Ke(n));const r=Ne(n);Bi(n,e,cn),await r._initializationPromise;const i=Mr(r,t);return await ql(i,r),i._openRedirect(r,e,"signInViaRedirect")}function nV(n,e,t){return eA(n,e,t)}async function eA(n,e,t){const r=Y(n);if(Bi(r.auth,e,cn),Se(r.auth.app))return Promise.reject(Ke(r.auth));await r.auth._initializationPromise;const i=Mr(r.auth,t);await ql(i,r.auth);const s=await Hg(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function rV(n,e,t){return tA(n,e,t)}async function tA(n,e,t){const r=Y(n);Bi(r.auth,e,cn),await r.auth._initializationPromise;const i=Mr(r.auth,t);await rc(!1,r,e.providerId),await ql(i,r.auth);const s=await Hg(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function iV(n,e){return await Ne(n)._initializationPromise,Wg(n,e,!1)}async function Wg(n,e,t=!1){if(Se(n.app))return Promise.reject(Ke(n));const r=Ne(n),i=Mr(r,e),o=await new Jb(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Hg(n){const e=oc(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const nA=600*1e3;class rA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Kg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(st(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mf(e))}saveEventToCache(e){this.cachedEventUids.add(Mf(e)),this.lastProcessedEventTime=Date.now()}}function Mf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Kg({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function iA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kg(n);default:return!1}}/**
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
 */async function sA(n,e={}){return ve(n,"GET","/v1/projects",e)}/**
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
 */const oA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aA=/^https?/;async function cA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sA(n);for(const t of e)try{if(uA(t))return}catch{}ut(n,"unauthorized-domain")}function uA(n){const e=Hs(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!aA.test(t))return!1;if(oA.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lA=new po(3e4,6e4);function Lf(){const n=Fe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function hA(n){return new Promise((e,t)=>{function r(){Lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lf(),t(st(n,"network-request-failed"))},timeout:lA.get()})}if(Fe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Fe().gapi?.load)r();else{const i=vg("iframefcb");return Fe()[i]=()=>{gapi.load?r():t(st(n,"network-request-failed"))},kl(`${Av()}?onload=${i}`).catch(s=>t(s))}}).catch(e=>{throw fa=null,e})}let fa=null;function dA(n){return fa=fa||hA(n),fa}/**
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
 */const fA=new po(5e3,15e3),mA="__/auth/iframe",pA="emulator/auth/iframe",gA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_A=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yA(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pl(e,pA):`https://${n.config.authDomain}/${mA}`,r={apiKey:e.apiKey,appName:n.name,v:Ui},i=_A.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Fi(r).slice(1)}`}async function IA(n){const e=await dA(n),t=Fe().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:yA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=st(n,"network-request-failed"),c=Fe().setTimeout(()=>{s(o)},fA.get());function u(){Fe().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const wA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EA=500,TA=600,vA="_blank",bA="http://localhost";class Ff{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AA(n,e,t,r=EA,i=TA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...wA,width:r.toString(),height:i.toString(),top:s,left:o},l=ze().toLowerCase();t&&(c=gg(l)?vA:t),mg(l)&&(e=e||bA,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[y,b])=>`${p}${y}=${b},`,"");if(pv(l)&&c!=="_self")return RA(e||"",c),new Ff(null);const f=window.open(e||"",c,d);U(f,n,"popup-blocked");try{f.focus()}catch{}return new Ff(f)}function RA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const SA="__/auth/handler",PA="emulator/auth/handler",CA=encodeURIComponent("fac");async function Uf(n,e,t,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ui,eventId:i};if(e instanceof cn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",OE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof qi){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await n._getAppCheckToken(),l=u?`#${CA}=${encodeURIComponent(u)}`:"";return`${kA(n)}?${Fi(c).slice(1)}${l}`}function kA({config:n}){return n.emulator?Pl(n,PA):`https://${n.authDomain}/${SA}`}/**
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
 */const wu="webStorageSupport";class DA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ug,this._completeRedirectFn=Wg,this._overrideRedirectResult=Xb}async _openPopup(e,t,r,i){Yt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Uf(e,t,r,Hs(),i);return AA(e,s,oc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Uf(e,t,r,Hs(),i);return Sb(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await IA(e),r=new rA(e);return t.register("authEvent",i=>(U(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wu,{type:wu},i=>{const s=i?.[0]?.[wu];s!==void 0&&t(!!s),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Eg()||pg()||Cl()}}const VA=DA;class Qg{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Nt("unexpected MultiFactorSessionType")}}}class zl extends Qg{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zl(e)}_finalizeEnroll(e,t,r){return _b(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Lb(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class NA{constructor(){}static assertion(e){return zl._fromCredential(e)}}NA.FACTOR_ID="phone";class xA{static assertionForEnrollment(e,t){return Ys._fromSecret(e,t)}static assertionForSignIn(e,t){return Ys._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;U(typeof t.user?.auth<"u","internal-error");const r=await yb(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return jl._fromStartTotpMfaEnrollmentResponse(r,t.user.auth)}}xA.FACTOR_ID="totp";class Ys extends Qg{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new Ys(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ys(t,e)}async _finalizeEnroll(e,t,r){return U(typeof this.secret<"u",e,"argument-error"),Ib(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){U(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return Fb(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class jl{constructor(e,t,r,i,s,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new jl(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let r=!1;return(Yo(e)||Yo(t))&&(r=!0),r&&(Yo(e)&&(e=this.auth.currentUser?.email||"unknownuser"),Yo(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Yo(n){return typeof n>"u"||n?.length===0}var Bf="@firebase/auth",qf="1.12.0";/**
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
 */class OA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LA(n){mi(new Tr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tg(n)},l=new Ev(r,i,s,u);return Ov(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),mi(new Tr("auth-internal",e=>{const t=Ne(e.getProvider("auth").getImmediate());return(r=>new OA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(Bf,qf,MA(n)),_r(Bf,qf,"esm2020")}/**
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
 */const FA=300,UA=Kp("authIdTokenMaxAge")||FA;let zf=null;const BA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>UA)return;const i=t?.token;zf!==i&&(zf=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sV(n=ng()){const e=mo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xv(n,{popupRedirectResolver:VA,persistence:[Mb,vb,Ug]}),r=Kp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=BA(s.toString());gb(t,o,()=>o(t.currentUser)),pb(t,c=>o(c))}}const i=Wp("auth");return i&&Mv(t,`http://${i}`),t}function qA(){return document.getElementsByTagName("head")?.[0]??document}Tv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=st("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",qA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LA("Browser");var jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mn,Jg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function w(){}w.prototype=_.prototype,E.F=_.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(v,T,R){for(var I=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)I[ne-2]=arguments[ne];return _.prototype[T].apply(v,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,w){w||(w=0);const v=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)v[T]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(T=0;T<16;++T)v[T]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=E.g[0],w=E.g[1],T=E.g[2];let R=E.g[3],I;I=_+(R^w&(T^R))+v[0]+3614090360&4294967295,_=w+(I<<7&4294967295|I>>>25),I=R+(T^_&(w^T))+v[1]+3905402710&4294967295,R=_+(I<<12&4294967295|I>>>20),I=T+(w^R&(_^w))+v[2]+606105819&4294967295,T=R+(I<<17&4294967295|I>>>15),I=w+(_^T&(R^_))+v[3]+3250441966&4294967295,w=T+(I<<22&4294967295|I>>>10),I=_+(R^w&(T^R))+v[4]+4118548399&4294967295,_=w+(I<<7&4294967295|I>>>25),I=R+(T^_&(w^T))+v[5]+1200080426&4294967295,R=_+(I<<12&4294967295|I>>>20),I=T+(w^R&(_^w))+v[6]+2821735955&4294967295,T=R+(I<<17&4294967295|I>>>15),I=w+(_^T&(R^_))+v[7]+4249261313&4294967295,w=T+(I<<22&4294967295|I>>>10),I=_+(R^w&(T^R))+v[8]+1770035416&4294967295,_=w+(I<<7&4294967295|I>>>25),I=R+(T^_&(w^T))+v[9]+2336552879&4294967295,R=_+(I<<12&4294967295|I>>>20),I=T+(w^R&(_^w))+v[10]+4294925233&4294967295,T=R+(I<<17&4294967295|I>>>15),I=w+(_^T&(R^_))+v[11]+2304563134&4294967295,w=T+(I<<22&4294967295|I>>>10),I=_+(R^w&(T^R))+v[12]+1804603682&4294967295,_=w+(I<<7&4294967295|I>>>25),I=R+(T^_&(w^T))+v[13]+4254626195&4294967295,R=_+(I<<12&4294967295|I>>>20),I=T+(w^R&(_^w))+v[14]+2792965006&4294967295,T=R+(I<<17&4294967295|I>>>15),I=w+(_^T&(R^_))+v[15]+1236535329&4294967295,w=T+(I<<22&4294967295|I>>>10),I=_+(T^R&(w^T))+v[1]+4129170786&4294967295,_=w+(I<<5&4294967295|I>>>27),I=R+(w^T&(_^w))+v[6]+3225465664&4294967295,R=_+(I<<9&4294967295|I>>>23),I=T+(_^w&(R^_))+v[11]+643717713&4294967295,T=R+(I<<14&4294967295|I>>>18),I=w+(R^_&(T^R))+v[0]+3921069994&4294967295,w=T+(I<<20&4294967295|I>>>12),I=_+(T^R&(w^T))+v[5]+3593408605&4294967295,_=w+(I<<5&4294967295|I>>>27),I=R+(w^T&(_^w))+v[10]+38016083&4294967295,R=_+(I<<9&4294967295|I>>>23),I=T+(_^w&(R^_))+v[15]+3634488961&4294967295,T=R+(I<<14&4294967295|I>>>18),I=w+(R^_&(T^R))+v[4]+3889429448&4294967295,w=T+(I<<20&4294967295|I>>>12),I=_+(T^R&(w^T))+v[9]+568446438&4294967295,_=w+(I<<5&4294967295|I>>>27),I=R+(w^T&(_^w))+v[14]+3275163606&4294967295,R=_+(I<<9&4294967295|I>>>23),I=T+(_^w&(R^_))+v[3]+4107603335&4294967295,T=R+(I<<14&4294967295|I>>>18),I=w+(R^_&(T^R))+v[8]+1163531501&4294967295,w=T+(I<<20&4294967295|I>>>12),I=_+(T^R&(w^T))+v[13]+2850285829&4294967295,_=w+(I<<5&4294967295|I>>>27),I=R+(w^T&(_^w))+v[2]+4243563512&4294967295,R=_+(I<<9&4294967295|I>>>23),I=T+(_^w&(R^_))+v[7]+1735328473&4294967295,T=R+(I<<14&4294967295|I>>>18),I=w+(R^_&(T^R))+v[12]+2368359562&4294967295,w=T+(I<<20&4294967295|I>>>12),I=_+(w^T^R)+v[5]+4294588738&4294967295,_=w+(I<<4&4294967295|I>>>28),I=R+(_^w^T)+v[8]+2272392833&4294967295,R=_+(I<<11&4294967295|I>>>21),I=T+(R^_^w)+v[11]+1839030562&4294967295,T=R+(I<<16&4294967295|I>>>16),I=w+(T^R^_)+v[14]+4259657740&4294967295,w=T+(I<<23&4294967295|I>>>9),I=_+(w^T^R)+v[1]+2763975236&4294967295,_=w+(I<<4&4294967295|I>>>28),I=R+(_^w^T)+v[4]+1272893353&4294967295,R=_+(I<<11&4294967295|I>>>21),I=T+(R^_^w)+v[7]+4139469664&4294967295,T=R+(I<<16&4294967295|I>>>16),I=w+(T^R^_)+v[10]+3200236656&4294967295,w=T+(I<<23&4294967295|I>>>9),I=_+(w^T^R)+v[13]+681279174&4294967295,_=w+(I<<4&4294967295|I>>>28),I=R+(_^w^T)+v[0]+3936430074&4294967295,R=_+(I<<11&4294967295|I>>>21),I=T+(R^_^w)+v[3]+3572445317&4294967295,T=R+(I<<16&4294967295|I>>>16),I=w+(T^R^_)+v[6]+76029189&4294967295,w=T+(I<<23&4294967295|I>>>9),I=_+(w^T^R)+v[9]+3654602809&4294967295,_=w+(I<<4&4294967295|I>>>28),I=R+(_^w^T)+v[12]+3873151461&4294967295,R=_+(I<<11&4294967295|I>>>21),I=T+(R^_^w)+v[15]+530742520&4294967295,T=R+(I<<16&4294967295|I>>>16),I=w+(T^R^_)+v[2]+3299628645&4294967295,w=T+(I<<23&4294967295|I>>>9),I=_+(T^(w|~R))+v[0]+4096336452&4294967295,_=w+(I<<6&4294967295|I>>>26),I=R+(w^(_|~T))+v[7]+1126891415&4294967295,R=_+(I<<10&4294967295|I>>>22),I=T+(_^(R|~w))+v[14]+2878612391&4294967295,T=R+(I<<15&4294967295|I>>>17),I=w+(R^(T|~_))+v[5]+4237533241&4294967295,w=T+(I<<21&4294967295|I>>>11),I=_+(T^(w|~R))+v[12]+1700485571&4294967295,_=w+(I<<6&4294967295|I>>>26),I=R+(w^(_|~T))+v[3]+2399980690&4294967295,R=_+(I<<10&4294967295|I>>>22),I=T+(_^(R|~w))+v[10]+4293915773&4294967295,T=R+(I<<15&4294967295|I>>>17),I=w+(R^(T|~_))+v[1]+2240044497&4294967295,w=T+(I<<21&4294967295|I>>>11),I=_+(T^(w|~R))+v[8]+1873313359&4294967295,_=w+(I<<6&4294967295|I>>>26),I=R+(w^(_|~T))+v[15]+4264355552&4294967295,R=_+(I<<10&4294967295|I>>>22),I=T+(_^(R|~w))+v[6]+2734768916&4294967295,T=R+(I<<15&4294967295|I>>>17),I=w+(R^(T|~_))+v[13]+1309151649&4294967295,w=T+(I<<21&4294967295|I>>>11),I=_+(T^(w|~R))+v[4]+4149444226&4294967295,_=w+(I<<6&4294967295|I>>>26),I=R+(w^(_|~T))+v[11]+3174756917&4294967295,R=_+(I<<10&4294967295|I>>>22),I=T+(_^(R|~w))+v[2]+718787259&4294967295,T=R+(I<<15&4294967295|I>>>17),I=w+(R^(T|~_))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(T+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const w=_-this.blockSize,v=this.C;let T=this.h,R=0;for(;R<_;){if(T==0)for(;R<=w;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<_;)if(v[T++]=E.charCodeAt(R++),T==this.blockSize){i(this,v),T=0;break}}else for(;R<_;)if(v[T++]=E[R++],T==this.blockSize){i(this,v),T=0;break}}this.h=T,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,w=0;w<4;++w)for(let v=0;v<32;v+=8)E[_++]=this.g[w]>>>v&255;return E};function s(E,_){var w=c;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=_(E)}function o(E,_){this.h=_;const w=[];let v=!0;for(let T=E.length-1;T>=0;T--){const R=E[T]|0;v&&R==_||(w[T]=R,v=!1)}this.g=w}var c={};function u(E){return-128<=E&&E<128?s(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function l(E){if(isNaN(E)||!isFinite(E))return f;if(E<0)return S(l(-E));const _=[];let w=1;for(let v=0;E>=w;v++)_[v]=E/w|0,w*=4294967296;return new o(_,0)}function d(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return S(d(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=l(Math.pow(_,8));let v=f;for(let R=0;R<E.length;R+=8){var T=Math.min(8,E.length-R);const I=parseInt(E.substring(R,R+T),_);T<8?(T=l(Math.pow(_,T)),v=v.j(T).add(l(I))):(v=v.j(w),v=v.add(l(I)))}return v}var f=u(0),p=u(1),y=u(16777216);n=o.prototype,n.m=function(){if(A(this))return-S(this).m();let E=0,_=1;for(let w=0;w<this.g.length;w++){const v=this.i(w);E+=(v>=0?v:4294967296+v)*_,_*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(b(this))return"0";if(A(this))return"-"+S(this).toString(E);const _=l(Math.pow(E,6));var w=this;let v="";for(;;){const T=B(w,_).g;w=V(w,T.j(_));let R=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=T,b(w))return R+v;for(;R.length<6;)R="0"+R;v=R+v}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function b(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function A(E){return E.h==-1}n.l=function(E){return E=V(this,E),A(E)?-1:b(E)?0:1};function S(E){const _=E.g.length,w=[];for(let v=0;v<_;v++)w[v]=~E.g[v];return new o(w,~E.h).add(p)}n.abs=function(){return A(this)?S(this):this},n.add=function(E){const _=Math.max(this.g.length,E.g.length),w=[];let v=0;for(let T=0;T<=_;T++){let R=v+(this.i(T)&65535)+(E.i(T)&65535),I=(R>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);v=I>>>16,R&=65535,I&=65535,w[T]=I<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function V(E,_){return E.add(S(_))}n.j=function(E){if(b(this)||b(E))return f;if(A(this))return A(E)?S(this).j(S(E)):S(S(this).j(E));if(A(E))return S(this.j(S(E)));if(this.l(y)<0&&E.l(y)<0)return l(this.m()*E.m());const _=this.g.length+E.g.length,w=[];for(var v=0;v<2*_;v++)w[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<E.g.length;T++){const R=this.i(v)>>>16,I=this.i(v)&65535,ne=E.i(T)>>>16,he=E.i(T)&65535;w[2*v+2*T]+=I*he,L(w,2*v+2*T),w[2*v+2*T+1]+=R*he,L(w,2*v+2*T+1),w[2*v+2*T+1]+=I*ne,L(w,2*v+2*T+1),w[2*v+2*T+2]+=R*ne,L(w,2*v+2*T+2)}for(E=0;E<_;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=_;E<2*_;E++)w[E]=0;return new o(w,0)};function L(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function M(E,_){this.g=E,this.h=_}function B(E,_){if(b(_))throw Error("division by zero");if(b(E))return new M(f,f);if(A(E))return _=B(S(E),_),new M(S(_.g),S(_.h));if(A(_))return _=B(E,S(_)),new M(S(_.g),_.h);if(E.g.length>30){if(A(E)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var w=p,v=_;v.l(E)<=0;)w=W(w),v=W(v);var T=G(w,1),R=G(v,1);for(v=G(v,2),w=G(w,2);!b(v);){var I=R.add(v);I.l(E)<=0&&(T=T.add(w),R=I),v=G(v,1),w=G(w,1)}return _=V(E,T.j(_)),new M(T,_)}for(T=f;E.l(_)>=0;){for(w=Math.max(1,Math.floor(E.m()/_.m())),v=Math.ceil(Math.log(w)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),R=l(w),I=R.j(_);A(I)||I.l(E)>0;)w-=v,R=l(w),I=R.j(_);b(R)&&(R=p),T=T.add(R),E=V(E,I)}return new M(T,E)}n.B=function(E){return B(this,E).h},n.and=function(E){const _=Math.max(this.g.length,E.g.length),w=[];for(let v=0;v<_;v++)w[v]=this.i(v)&E.i(v);return new o(w,this.h&E.h)},n.or=function(E){const _=Math.max(this.g.length,E.g.length),w=[];for(let v=0;v<_;v++)w[v]=this.i(v)|E.i(v);return new o(w,this.h|E.h)},n.xor=function(E){const _=Math.max(this.g.length,E.g.length),w=[];for(let v=0;v<_;v++)w[v]=this.i(v)^E.i(v);return new o(w,this.h^E.h)};function W(E){const _=E.g.length+1,w=[];for(let v=0;v<_;v++)w[v]=E.i(v)<<1|E.i(v-1)>>>31;return new o(w,E.h)}function G(E,_){const w=_>>5;_%=32;const v=E.g.length-w,T=[];for(let R=0;R<v;R++)T[R]=_>0?E.i(R+w)>>>_|E.i(R+w+1)<<32-_:E.i(R+w);return new o(T,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Jg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Mn=o}).apply(typeof jf<"u"?jf:typeof self<"u"?self:typeof window<"u"?window:{});var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yg,Cs,Xg,ma,Gu,Zg,e_,t_;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xo=="object"&&Xo];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in m))break e;m=m[C]}a=a[a.length-1],g=m[a],h=h(g),h!=g&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var m=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&m.push([g,h[g]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,m){return a.call.apply(a.bind,arguments)}function l(a,h,m){return l=u,l.apply(null,arguments)}function d(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var g=m.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function f(a,h){function m(){}m.prototype=h.prototype,a.Z=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(g,C,D){for(var j=Array(arguments.length-2),re=2;re<arguments.length;re++)j[re-2]=arguments[re];return h.prototype[C].apply(g,j)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const m=Array(h);for(let g=0;g<h;g++)m[g]=a[g];return m}return[]}function b(a,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];var m=typeof C;if(m=m!="object"?m:C?Array.isArray(C)?"array":m:"null",m=="array"||m=="object"&&typeof C.length=="number"){m=a.length||0;const D=C.length||0;a.length=m+D;for(let j=0;j<D;j++)a[m+j]=C[j]}else a.push(C)}}class A{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function S(a){o.setTimeout(()=>{throw a},0)}function V(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class L{constructor(){this.h=this.g=null}add(h,m){const g=M.get();g.set(h,m),this.h?this.h.next=g:this.g=g,this.h=g}}var M=new A(()=>new B,a=>a.reset());class B{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let W,G=!1,E=new L,_=()=>{const a=Promise.resolve(void 0);W=()=>{a.then(w)}};function w(){for(var a;a=V();){try{a.h.call(a.g)}catch(m){S(m)}var h=M;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}G=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};o.addEventListener("test",m,h),o.removeEventListener("test",m,h)}catch{}return a})();function I(a){return/^[\s\xa0]*$/.test(a)}function ne(a,h){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(ne,T),ne.prototype.init=function(a,h){const m=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var he="closure_listenable_"+(Math.random()*1e6|0),F=0;function J(a,h,m,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!g,this.ha=C,this.key=++F,this.da=this.fa=!1}function N(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ee(a,h,m){for(const g in a)h.call(m,a[g],g,a)}function le(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function Pt(a){const h={};for(const m in a)h[m]=a[m];return h}const Tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ce(a,h){let m,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(m in g)a[m]=g[m];for(let D=0;D<Tt.length;D++)m=Tt[D],Object.prototype.hasOwnProperty.call(g,m)&&(a[m]=g[m])}}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,h,m,g,C){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const j=zr(a,h,g,C);return j>-1?(h=a[j],m||(h.fa=!1)):(h=new J(h,this.src,D,!!g,C),h.fa=m,a.push(h)),h};function lt(a,h){const m=h.type;if(m in a.g){var g=a.g[m],C=Array.prototype.indexOf.call(g,h,void 0),D;(D=C>=0)&&Array.prototype.splice.call(g,C,1),D&&(N(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function zr(a,h,m,g){for(let C=0;C<a.length;++C){const D=a[C];if(!D.da&&D.listener==h&&D.capture==!!m&&D.ha==g)return C}return-1}var ke="closure_lm_"+(Math.random()*1e6|0),jr={};function Zn(a,h,m,g,C){if(Array.isArray(h)){for(let D=0;D<h.length;D++)Zn(a,h[D],m,g,C);return null}return m=sd(m),a&&a[he]?a.J(h,m,c(g)?!!g.capture:!1,C):Gr(a,h,m,!1,g,C)}function Gr(a,h,m,g,C,D){if(!h)throw Error("Invalid event type");const j=c(C)?!!C.capture:!!C;let re=Bc(a);if(re||(a[ke]=re=new ye(a)),m=re.add(h,m,g,j,D),m.proxy)return m;if(g=ts(),m.proxy=g,g.src=a,g.listener=m,a.addEventListener)R||(C=j),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(id(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ts(){function a(m){return h.call(a.src,a.listener,m)}const h=JI;return a}function er(a,h,m,g,C){if(Array.isArray(h))for(var D=0;D<h.length;D++)er(a,h[D],m,g,C);else g=c(g)?!!g.capture:!!g,m=sd(m),a&&a[he]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],m=zr(h,m,g,C),m>-1&&(N(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Bc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=zr(h,m,g,C)),(m=a>-1?h[a]:null)&&Uc(m))}function Uc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[he])lt(h.i,a);else{var m=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(m,g,a.capture):h.detachEvent?h.detachEvent(id(m),g):h.addListener&&h.removeListener&&h.removeListener(g),(m=Bc(h))?(lt(m,a),m.h==0&&(m.src=null,h[ke]=null)):N(a)}}}function id(a){return a in jr?jr[a]:jr[a]="on"+a}function JI(a,h){if(a.da)a=!0;else{h=new ne(h,this);const m=a.listener,g=a.ha||a.src;a.fa&&Uc(a),a=m.call(g,h)}return a}function Bc(a){return a=a[ke],a instanceof ye?a:null}var qc="__closure_events_fn_"+(Math.random()*1e9>>>0);function sd(a){return typeof a=="function"?a:(a[qc]||(a[qc]=function(h){return a.handleEvent(h)}),a[qc])}function Xe(){v.call(this),this.i=new ye(this),this.M=this,this.G=null}f(Xe,v),Xe.prototype[he]=!0,Xe.prototype.removeEventListener=function(a,h,m,g){er(this,a,h,m,g)};function rt(a,h){var m,g=a.G;if(g)for(m=[];g;g=g.G)m.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new T(h,a);else if(h instanceof T)h.target=h.target||a;else{var C=h;h=new T(g,a),Ce(h,C)}C=!0;let D,j;if(m)for(j=m.length-1;j>=0;j--)D=h.g=m[j],C=Mo(D,g,!0,h)&&C;if(D=h.g=a,C=Mo(D,g,!0,h)&&C,C=Mo(D,g,!1,h)&&C,m)for(j=0;j<m.length;j++)D=h.g=m[j],C=Mo(D,g,!1,h)&&C}Xe.prototype.N=function(){if(Xe.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const m=a.g[h];for(let g=0;g<m.length;g++)N(m[g]);delete a.g[h],a.h--}}this.G=null},Xe.prototype.J=function(a,h,m,g){return this.i.add(String(a),h,!1,m,g)},Xe.prototype.K=function(a,h,m,g){return this.i.add(String(a),h,!0,m,g)};function Mo(a,h,m,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let D=0;D<h.length;++D){const j=h[D];if(j&&!j.da&&j.capture==m){const re=j.listener,Be=j.ha||j.src;j.fa&&lt(a.i,j),C=re.call(Be,g)!==!1&&C}}return C&&!g.defaultPrevented}function YI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function od(a){a.g=YI(()=>{a.g=null,a.i&&(a.i=!1,od(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class XI extends v{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:od(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(a){v.call(this),this.h=a,this.g={}}f(ns,v);var ad=[];function cd(a){ee(a.g,function(h,m){this.g.hasOwnProperty(m)&&Uc(h)},a),a.g={}}ns.prototype.N=function(){ns.Z.N.call(this),cd(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zc=o.JSON.stringify,ZI=o.JSON.parse,ew=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ud(){}function ld(){}var rs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function jc(){T.call(this,"d")}f(jc,T);function Gc(){T.call(this,"c")}f(Gc,T);var tr={},hd=null;function Lo(){return hd=hd||new Xe}tr.Ia="serverreachability";function dd(a){T.call(this,tr.Ia,a)}f(dd,T);function is(a){const h=Lo();rt(h,new dd(h))}tr.STAT_EVENT="statevent";function fd(a,h){T.call(this,tr.STAT_EVENT,a),this.stat=h}f(fd,T);function it(a){const h=Lo();rt(h,new fd(h,a))}tr.Ja="timingevent";function md(a,h){T.call(this,tr.Ja,a),this.size=h}f(md,T);function ss(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function os(){this.g=!0}os.prototype.ua=function(){this.g=!1};function tw(a,h,m,g,C,D){a.info(function(){if(a.g)if(D){var j="",re=D.split("&");for(let ge=0;ge<re.length;ge++){var Be=re[ge].split("=");if(Be.length>1){const Ge=Be[0];Be=Be[1];const kt=Ge.split("_");j=kt.length>=2&&kt[1]=="type"?j+(Ge+"="+Be+"&"):j+(Ge+"=redacted&")}}}else j=null;else j=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+m+`
`+j})}function nw(a,h,m,g,C,D,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+m+`
`+D+" "+j})}function $r(a,h,m,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+iw(a,m)+(g?" "+g:"")})}function rw(a,h){a.info(function(){return"TIMEOUT: "+h})}os.prototype.info=function(){};function iw(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var m=D[a];if(!(m.length<2)){var g=m[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return zc(D)}catch{return h}}var Fo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},pd={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},gd;function $c(){}f($c,ud),$c.prototype.g=function(){return new XMLHttpRequest},gd=new $c;function as(a){return encodeURIComponent(String(a))}function sw(a){var h=1;a=a.split(":");const m=[];for(;h>0&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function fn(a,h,m,g){this.j=a,this.i=h,this.l=m,this.S=g||1,this.V=new ns(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _d}function _d(){this.i=null,this.g="",this.h=!1}var yd={},Wc={};function Hc(a,h,m){a.M=1,a.A=Bo(Ct(h)),a.u=m,a.R=!0,Id(a,null)}function Id(a,h){a.F=Date.now(),Uo(a),a.B=Ct(a.A);var m=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Vd(m.i,"t",g),a.C=0,m=a.j.L,a.h=new _d,a.g=Jd(a.j,m?h:null,!a.u),a.P>0&&(a.O=new XI(l(a.Y,a,a.g),a.P)),h=a.V,m=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(ad[0]=C.toString()),C=ad);for(let D=0;D<C.length;D++){const j=Zn(m,C[D],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.J?Pt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),is(),tw(a.i,a.v,a.B,a.l,a.S,a.u)}fn.prototype.ba=function(a){a=a.target;const h=this.O;h&&gn(a)==3?h.j():this.Y(a)},fn.prototype.Y=function(a){try{if(a==this.g)e:{const re=gn(this.g),Be=this.g.ya(),ge=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Ud(this.g)))){this.K||re!=4||Be==7||(Be==8||ge<=0?is(3):is(2)),Kc(this);var h=this.g.ca();this.X=h;var m=ow(this);if(this.o=h==200,nw(this.i,this.v,this.B,this.l,this.S,re,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var D=g;break t}}D=null}if(a=D)$r(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qc(this,a);else{this.o=!1,this.m=3,it(12),nr(this),cs(this);break e}}if(this.R){a=!0;let Ge;for(;!this.K&&this.C<m.length;)if(Ge=aw(this,m),Ge==Wc){re==4&&(this.m=4,it(14),a=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==yd){this.m=4,it(15),$r(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else $r(this.i,this.l,Ge,null),Qc(this,Ge);if(wd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||m.length!=0||this.h.h||(this.m=1,it(16),a=!1),this.o=this.o&&a,!a)$r(this.i,this.l,m,"[Invalid Chunked Response]"),nr(this),cs(this);else if(m.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),ru(j),j.P=!0,it(11))}}else $r(this.i,this.l,m,null),Qc(this,m);re==4&&nr(this),this.o&&!this.K&&(re==4?Wd(this.j,this):(this.o=!1,Uo(this)))}else Ew(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),nr(this),cs(this)}}}catch{}finally{}};function ow(a){if(!wd(a))return a.g.la();const h=Ud(a.g);if(h==="")return"";let m="";const g=h.length,C=gn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return nr(a),cs(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,m+=a.h.i.decode(h[D],{stream:!(C&&D==g-1)});return h.length=0,a.h.g+=m,a.C=0,a.h.g}function wd(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function aw(a,h){var m=a.C,g=h.indexOf(`
`,m);return g==-1?Wc:(m=Number(h.substring(m,g)),isNaN(m)?yd:(g+=1,g+m>h.length?Wc:(h=h.slice(g,g+m),a.C=g+m,h)))}fn.prototype.cancel=function(){this.K=!0,nr(this)};function Uo(a){a.T=Date.now()+a.H,Ed(a,a.H)}function Ed(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ss(l(a.aa,a),h)}function Kc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}fn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(rw(this.i,this.B),this.M!=2&&(is(),it(17)),nr(this),this.m=2,cs(this)):Ed(this,this.T-a)};function cs(a){a.j.I==0||a.K||Wd(a.j,a)}function nr(a){Kc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,cd(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Qc(a,h){try{var m=a.j;if(m.I!=0&&(m.g==a||Jc(m.h,a))){if(!a.L&&Jc(m.h,a)&&m.I==3){try{var g=m.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)$o(m),jo(m);else break e;nu(m),it(18)}}else m.xa=C[1],0<m.xa-m.K&&C[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=ss(l(m.Va,m),6e3));bd(m.h)<=1&&m.ta&&(m.ta=void 0)}else ir(m,11)}else if((a.L||m.g==a)&&$o(m),!I(h))for(C=m.Ba.g.parse(h),h=0;h<C.length;h++){let ge=C[h];const Ge=ge[0];if(!(Ge<=m.K))if(m.K=Ge,ge=ge[1],m.I==2)if(ge[0]=="c"){m.M=ge[1],m.ba=ge[2];const kt=ge[3];kt!=null&&(m.ka=kt,m.j.info("VER="+m.ka));const sr=ge[4];sr!=null&&(m.za=sr,m.j.info("SVER="+m.za));const _n=ge[5];_n!=null&&typeof _n=="number"&&_n>0&&(g=1.5*_n,m.O=g,m.j.info("backChannelRequestTimeoutMs_="+g)),g=m;const yn=a.g;if(yn){const Ho=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ho){var D=g.h;D.g||Ho.indexOf("spdy")==-1&&Ho.indexOf("quic")==-1&&Ho.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Yc(D,D.h),D.h=null))}if(g.G){const iu=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;iu&&(g.wa=iu,we(g.J,g.G,iu))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),g=m;var j=a;if(g.na=Qd(g,g.L?g.ba:null,g.W),j.L){Ad(g.h,j);var re=j,Be=g.O;Be&&(re.H=Be),re.D&&(Kc(re),Uo(re)),g.g=j}else Gd(g);m.i.length>0&&Go(m)}else ge[0]!="stop"&&ge[0]!="close"||ir(m,7);else m.I==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?ir(m,7):tu(m):ge[0]!="noop"&&m.l&&m.l.qa(ge),m.A=0)}}is(4)}catch{}}var cw=class{constructor(a,h){this.g=a,this.map=h}};function Td(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bd(a){return a.h?1:a.g?a.g.size:0}function Jc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Yc(a,h){a.g?a.g.add(h):a.h=h}function Ad(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Td.prototype.cancel=function(){if(this.i=Rd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.G);return h}return y(a.i)}var Sd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uw(a,h){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const g=a[m].indexOf("=");let C,D=null;g>=0?(C=a[m].substring(0,g),D=a[m].substring(g+1)):C=a[m],h(C,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof mn?(this.l=a.l,us(this,a.j),this.o=a.o,this.g=a.g,ls(this,a.u),this.h=a.h,Xc(this,Nd(a.i)),this.m=a.m):a&&(h=String(a).match(Sd))?(this.l=!1,us(this,h[1]||"",!0),this.o=hs(h[2]||""),this.g=hs(h[3]||"",!0),ls(this,h[4]),this.h=hs(h[5]||"",!0),Xc(this,h[6]||"",!0),this.m=hs(h[7]||"")):(this.l=!1,this.i=new fs(null,this.l))}mn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ds(h,Pd,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ds(h,Pd,!0),"@"),a.push(as(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(ds(m,m.charAt(0)=="/"?dw:hw,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",ds(m,mw)),a.join("")},mn.prototype.resolve=function(a){const h=Ct(this);let m=!!a.j;m?us(h,a.j):m=!!a.o,m?h.o=a.o:m=!!a.g,m?h.g=a.g:m=a.u!=null;var g=a.h;if(m)ls(h,a.u);else if(m=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=h.h.lastIndexOf("/");C!=-1&&(g=h.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const D=[];for(let j=0;j<C.length;){const re=C[j++];re=="."?g&&j==C.length&&D.push(""):re==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&j==C.length&&D.push("")):(D.push(re),g=!0)}g=D.join("/")}else g=C}return m?h.h=g:m=a.i.toString()!=="",m?Xc(h,Nd(a.i)):m=!!a.m,m&&(h.m=a.m),h};function Ct(a){return new mn(a)}function us(a,h,m){a.j=m?hs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ls(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Xc(a,h,m){h instanceof fs?(a.i=h,pw(a.i,a.l)):(m||(h=ds(h,fw)),a.i=new fs(h,a.l))}function we(a,h,m){a.i.set(h,m)}function Bo(a){return we(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function hs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ds(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,lw),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function lw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Pd=/[#\/\?@]/g,hw=/[#\?:]/g,dw=/[#\?]/g,fw=/[#\?@]/g,mw=/#/g;function fs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function rr(a){a.g||(a.g=new Map,a.h=0,a.i&&uw(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}n=fs.prototype,n.add=function(a,h){rr(this),this.i=null,a=Wr(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Cd(a,h){rr(a),h=Wr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function kd(a,h){return rr(a),h=Wr(a,h),a.g.has(h)}n.forEach=function(a,h){rr(this),this.g.forEach(function(m,g){m.forEach(function(C){a.call(h,C,g,this)},this)},this)};function Dd(a,h){rr(a);let m=[];if(typeof h=="string")kd(a,h)&&(m=m.concat(a.g.get(Wr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)m=m.concat(a[h]);return m}n.set=function(a,h){return rr(this),this.i=null,a=Wr(this,a),kd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=Dd(this,a),a.length>0?String(a[0]):h):h};function Vd(a,h,m){Cd(a,h),m.length>0&&(a.i=null,a.g.set(Wr(a,h),y(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var m=h[g];const C=as(m);m=Dd(this,m);for(let D=0;D<m.length;D++){let j=C;m[D]!==""&&(j+="="+as(m[D])),a.push(j)}}return this.i=a.join("&")};function Nd(a){const h=new fs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Wr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function pw(a,h){h&&!a.j&&(rr(a),a.i=null,a.g.forEach(function(m,g){const C=g.toLowerCase();g!=C&&(Cd(this,g),Vd(this,C,m))},a)),a.j=h}function gw(a,h){const m=new os;if(o.Image){const g=new Image;g.onload=d(pn,m,"TestLoadImage: loaded",!0,h,g),g.onerror=d(pn,m,"TestLoadImage: error",!1,h,g),g.onabort=d(pn,m,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(pn,m,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function _w(a,h){const m=new os,g=new AbortController,C=setTimeout(()=>{g.abort(),pn(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?pn(m,"TestPingServer: ok",!0,h):pn(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),pn(m,"TestPingServer: error",!1,h)})}function pn(a,h,m,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(m)}catch{}}function yw(){this.g=new ew}function Zc(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Zc,ud),Zc.prototype.g=function(){return new qo(this.i,this.h)};function qo(a,h){Xe.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(qo,Xe),n=qo.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ps(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ms(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;xd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function xd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ms(this):ps(this),this.readyState==3&&xd(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ms(this))},n.Na=function(a){this.g&&(this.response=a,ms(this))},n.ga=function(){this.g&&ms(this)};function ms(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ps(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Od(a){let h="";return ee(a,function(m,g){h+=g,h+=":",h+=m,h+=`\r
`}),h}function eu(a,h,m){e:{for(g in m){var g=!1;break e}g=!0}g||(m=Od(m),typeof a=="string"?m!=null&&as(m):we(a,h,m))}function De(a){Xe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(De,Xe);var Iw=/^https?$/i,ww=["POST","PUT"];n=De.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,m,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gd.g(),this.g.onreadystatechange=p(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Md(this,D);return}if(a=m||"",m=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)m.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())m.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(m.keys()).find(D=>D.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ww,h,void 0)>=0)||g||C||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,j]of m)this.g.setRequestHeader(D,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){Md(this,D)}};function Md(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Ld(a),zo(a)}function Ld(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),zo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zo(this,!0)),De.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Fd(this):this.Xa())},n.Xa=function(){Fd(this)};function Fd(a){if(a.h&&typeof s<"u"){if(a.v&&gn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),gn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var g;if(g=D===0){let j=String(a.D).match(Sd)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),g=!Iw.test(j?j.toLowerCase():"")}m=g}if(m)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var C=gn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Ld(a)}}finally{zo(a)}}}}function zo(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,h||rt(a,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return gn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ZI(h)}};function Ud(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ew(a){const h={};a=(a.g&&gn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var m=sw(a[g]);const C=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const D=h[C]||[];h[C]=D,D.push(m)}le(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function Bd(a){this.za=0,this.i=[],this.j=new os,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gs("baseRetryDelayMs",5e3,a),this.Za=gs("retryDelaySeedMs",1e4,a),this.Ta=gs("forwardChannelMaxRetries",2,a),this.va=gs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Td(a&&a.concurrentRequestLimit),this.Ba=new yw,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Bd.prototype,n.ka=8,n.I=1,n.connect=function(a,h,m,g){it(0),this.W=a,this.H=h||{},m&&g!==void 0&&(this.H.OSID=m,this.H.OAID=g),this.F=this.X,this.J=Qd(this,null,this.W),Go(this)};function tu(a){if(qd(a),a.I==3){var h=a.V++,m=Ct(a.J);if(we(m,"SID",a.M),we(m,"RID",h),we(m,"TYPE","terminate"),_s(a,m),h=new fn(a,a.j,h),h.M=2,h.A=Bo(Ct(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=h.A,m=!0),m||(h.g=Jd(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Uo(h)}Kd(a)}function jo(a){a.g&&(ru(a),a.g.cancel(),a.g=null)}function qd(a){jo(a),a.v&&(o.clearTimeout(a.v),a.v=null),$o(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Go(a){if(!vd(a.h)&&!a.m){a.m=!0;var h=a.Ea;W||_(),G||(W(),G=!0),E.add(h,a),a.D=0}}function Tw(a,h){return bd(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ss(l(a.Ea,a,h),Hd(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new fn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=Pt(D),Ce(D,this.U)):D=this.U),this.u!==null||this.R||(C.J=D,D=null),this.S)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var g=this.i[m];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=jd(this,C,h),m=Ct(this.J),we(m,"RID",a),we(m,"CVER",22),this.G&&we(m,"X-HTTP-Session-Id",this.G),_s(this,m),D&&(this.R?h="headers="+as(Od(D))+"&"+h:this.u&&eu(m,this.u,D)),Yc(this.h,C),this.Ra&&we(m,"TYPE","init"),this.S?(we(m,"$req",h),we(m,"SID","null"),C.U=!0,Hc(C,m,null)):Hc(C,m,h),this.I=2}}else this.I==3&&(a?zd(this,a):this.i.length==0||vd(this.h)||zd(this))};function zd(a,h){var m;h?m=h.l:m=a.V++;const g=Ct(a.J);we(g,"SID",a.M),we(g,"RID",m),we(g,"AID",a.K),_s(a,g),a.u&&a.o&&eu(g,a.u,a.o),m=new fn(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),h&&(a.i=h.G.concat(a.i)),h=jd(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Yc(a.h,m),Hc(m,g,h)}function _s(a,h){a.H&&ee(a.H,function(m,g){we(h,g,m)}),a.l&&ee({},function(m,g){we(h,g,m)})}function jd(a,h,m){m=Math.min(a.i.length,m);const g=a.l?l(a.l.Ka,a.l,a):null;e:{var C=a.i;let re=-1;for(;;){const Be=["count="+m];re==-1?m>0?(re=C[0].g,Be.push("ofs="+re)):re=0:Be.push("ofs="+re);let ge=!0;for(let Ge=0;Ge<m;Ge++){var D=C[Ge].g;const kt=C[Ge].map;if(D-=re,D<0)re=Math.max(0,C[Ge].g-100),ge=!1;else try{D="req"+D+"_"||"";try{var j=kt instanceof Map?kt:Object.entries(kt);for(const[sr,_n]of j){let yn=_n;c(_n)&&(yn=zc(_n)),Be.push(D+sr+"="+encodeURIComponent(yn))}}catch(sr){throw Be.push(D+"type="+encodeURIComponent("_badmap")),sr}}catch{g&&g(kt)}}if(ge){j=Be.join("&");break e}}j=void 0}return a=a.i.splice(0,m),h.G=a,j}function Gd(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;W||_(),G||(W(),G=!0),E.add(h,a),a.A=0}}function nu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ss(l(a.Da,a),Hd(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,$d(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ss(l(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),jo(this),$d(this))};function ru(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function $d(a){a.g=new fn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Ct(a.na);we(h,"RID","rpc"),we(h,"SID",a.M),we(h,"AID",a.K),we(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&we(h,"TO",a.ia),we(h,"TYPE","xmlhttp"),_s(a,h),a.u&&a.o&&eu(h,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=Bo(Ct(h)),m.u=null,m.R=!0,Id(m,a)}n.Va=function(){this.C!=null&&(this.C=null,jo(this),nu(this),it(19))};function $o(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Wd(a,h){var m=null;if(a.g==h){$o(a),ru(a),a.g=null;var g=2}else if(Jc(a.h,h))m=h.G,Ad(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;g=Lo(),rt(g,new md(g,m)),Go(a)}else Gd(a);else if(C=h.m,C==3||C==0&&h.X>0||!(g==1&&Tw(a,h)||g==2&&nu(a)))switch(m&&m.length>0&&(h=a.h,h.i=h.i.concat(m)),C){case 1:ir(a,5);break;case 4:ir(a,10);break;case 3:ir(a,6);break;default:ir(a,2)}}}function Hd(a,h){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*h}function ir(a,h){if(a.j.info("Error code "+h),h==2){var m=l(a.bb,a),g=a.Ua;const C=!g;g=new mn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||us(g,"https"),Bo(g),C?gw(g.toString(),m):_w(g.toString(),m)}else it(2);a.I=0,a.l&&a.l.pa(h),Kd(a),qd(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Kd(a){if(a.I=0,a.ja=[],a.l){const h=Rd(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ja,h),b(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function Qd(a,h,m){var g=m instanceof mn?Ct(m):new mn(m);if(g.g!="")h&&(g.g=h+"."+g.g),ls(g,g.u);else{var C=o.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const D=new mn(null);g&&us(D,g),h&&(D.g=h),C&&ls(D,C),m&&(D.h=m),g=D}return m=a.G,h=a.wa,m&&h&&we(g,m,h),we(g,"VER",a.ka),_s(a,g),g}function Jd(a,h,m){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new De(new Zc({ab:m})):new De(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yd(){}n=Yd.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Wo(){}Wo.prototype.g=function(a,h){return new ht(a,h)};function ht(a,h){Xe.call(this),this.g=new Bd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Hr(this)}f(ht,Xe),ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){tu(this.g)},ht.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=zc(a),a=m);h.i.push(new cw(h.Ya++,a)),h.I==3&&Go(h)},ht.prototype.N=function(){this.g.l=null,delete this.j,tu(this.g),delete this.g,ht.Z.N.call(this)};function Xd(a){jc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(Xd,jc);function Zd(){Gc.call(this),this.status=1}f(Zd,Gc);function Hr(a){this.g=a}f(Hr,Yd),Hr.prototype.ra=function(){rt(this.g,"a")},Hr.prototype.qa=function(a){rt(this.g,new Xd(a))},Hr.prototype.pa=function(a){rt(this.g,new Zd)},Hr.prototype.oa=function(){rt(this.g,"b")},Wo.prototype.createWebChannel=Wo.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,t_=function(){return new Wo},e_=function(){return Lo()},Zg=tr,Gu={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,ma=Fo,pd.COMPLETE="complete",Xg=pd,ld.EventType=rs,rs.OPEN="a",rs.CLOSE="b",rs.ERROR="c",rs.MESSAGE="d",Xe.prototype.listen=Xe.prototype.J,Cs=ld,De.prototype.listenOnce=De.prototype.K,De.prototype.getLastError=De.prototype.Ha,De.prototype.getLastErrorCode=De.prototype.ya,De.prototype.getStatus=De.prototype.ca,De.prototype.getResponseJson=De.prototype.La,De.prototype.getResponseText=De.prototype.la,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Fa,Yg=De}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
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
 */let zi="12.9.0";function zA(n){zi=n}/**
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
 */const Fn=new vl("@firebase/firestore");function ni(){return Fn.logLevel}function oV(n){Fn.setLogLevel(n)}function O(n,...e){if(Fn.logLevel<=ae.DEBUG){const t=e.map(Gl);Fn.debug(`Firestore (${zi}): ${n}`,...t)}}function Oe(n,...e){if(Fn.logLevel<=ae.ERROR){const t=e.map(Gl);Fn.error(`Firestore (${zi}): ${n}`,...t)}}function yt(n,...e){if(Fn.logLevel<=ae.WARN){const t=e.map(Gl);Fn.warn(`Firestore (${zi}): ${n}`,...t)}}function Gl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,n_(n,r,t)}function n_(n,e,t){let r=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Oe(r),new Error(r)}function Q(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||n_(e,i,r)}function aV(n,e){n||$(57014,e)}function z(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends on{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qe{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class r_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(We.UNAUTHENTICATED)))}shutdown(){}}class GA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class $A{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Qe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qe,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const u=s;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qe)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new r_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class WA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class HA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new WA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(We.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $u{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Se(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $u(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $u(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class cV{getToken(){return Promise.resolve(new $u(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function QA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class $l{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=QA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function Wu(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Eu(i)===Eu(s)?Z(i,s):Eu(i)?1:-1}return Z(n.length,e.length)}const JA=55296,YA=57343;function Eu(n){const e=n.charCodeAt(0);return e>=JA&&e<=YA}function pi(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}function i_(n){return n+"\0"}/**
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
 */const Hu="__name__";class Dt{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Dt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Dt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Dt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Z(e.length,t.length)}static compareSegments(e,t){const r=Dt.isNumericId(e),i=Dt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Dt.extractNumericId(e).compare(Dt.extractNumericId(t)):Wu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mn.fromString(e.substring(4,e.length-2))}}class se extends Dt{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new se(t)}static emptyPath(){return new se([])}}const XA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends Dt{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return XA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hu}static keyField(){return new Ae([Hu])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new x(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new x(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new x(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(se.fromString(e))}static fromName(e){return new q(se.fromString(e).popFirst(5))}static empty(){return new q(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new se(e.slice()))}}/**
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
 */function Wl(n,e,t){if(!t)throw new x(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ZA(n,e,t,r){if(e===!0&&r===!0)throw new x(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gf(n){if(!q.isDocumentKey(n))throw new x(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $f(n){if(q.isDocumentKey(n))throw new x(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function s_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function uc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function oe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uc(n);throw new x(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function o_(n,e){if(e<=0)throw new x(k.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function Lr(n,e){if(!s_(n))throw new x(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new x(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const Wf=-62135596800,Hf=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Hf);return new de(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wf)throw new x(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hf}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lr(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:Ue("string",de._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
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
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new de(0,0))}static max(){return new X(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const gi=-1;class _i{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Ku(n){return n.fields.find((e=>e.kind===2))}function ur(n){return n.fields.filter((e=>e.kind!==2))}function eR(n,e){let t=Z(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=tR(n.fields[r],e.fields[r]),t!==0)return t;return Z(n.fields.length,e.fields.length)}_i.UNKNOWN_ID=-1;class Ir{constructor(e,t){this.fieldPath=e,this.kind=t}}function tR(n,e){const t=Ae.comparator(n.fieldPath,e.fieldPath);return t!==0?t:Z(n.kind,e.kind)}class yi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new yi(0,It.min())}}function a_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new It(i,q.empty(),e)}function c_(n){return new It(n.readTime,n.key,gi)}class It{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new It(X.min(),q.empty(),gi)}static max(){return new It(X.max(),q.empty(),gi)}}function Hl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
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
 */const u_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Hn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==u_)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,r)=>{t(e)}))}static reject(e){return new P(((t,r)=>{r(e)}))}static waitFor(e){return new P(((t,r)=>{let i=0,s=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++s,o&&s===i&&t()}),(u=>r(u)))})),o=!0,s===i&&t()}))}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next((i=>i?P.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new P(((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const l=u;t(e[l]).next((d=>{o[l]=d,++c,c===s&&r(o)}),(d=>i(d)))}}))}static doWhile(e,t){return new P(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}/**
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
 */const dt="SimpleDb";class lc{static open(e,t,r,i){try{return new lc(t,e.transaction(i,r))}catch(s){throw new Ls(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Qe,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Ls(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=Kl(r.target.error);this.S.reject(new Ls(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(O(dt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new rR(t)}}class Lt{static delete(e){return O(dt,"Removing database:",e),hr($p().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Zp())return!1;if(Lt.F())return!0;const e=ze(),t=Lt.M(e),r=0<t&&t<10,i=h_(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,Lt.M(ze())===12.2&&Oe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(O(dt,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Ls(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new x(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new x(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ls(e,o))},i.onupgradeneeded=s=>{O(dt,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next((()=>{O(dt,"Database upgrade to version "+this.version+" complete")}))}}))),this.K&&(this.db.onversionchange=t=>this.K(t)),this.db}q(e){this.K=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=lc.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next((l=>(c.C(),l))).catch((l=>(c.abort(l),P.reject(l)))).toPromise();return u.catch((()=>{})),await c.D,u}catch(c){const u=c,l=u.name!=="FirebaseError"&&o<3;if(O(dt,"Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function h_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class nR{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return hr(this.U.delete())}}class Ls extends x{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Kn(n){return n.name==="IndexedDbTransactionError"}class rR{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(O(dt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(O(dt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hr(r)}add(e){return O(dt,"ADD",this.store.name,e,e),hr(this.store.add(e))}get(e){return hr(this.store.get(e)).next((t=>(t===void 0&&(t=null),O(dt,"GET",this.store.name,e,t),t)))}delete(e){return O(dt,"DELETE",this.store.name,e),hr(this.store.delete(e))}count(){return O(dt,"COUNT",this.store.name),hr(this.store.count())}H(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new P(((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}}))}{const s=this.cursor(r),o=[];return this.J(s,((c,u)=>{o.push(u)})).next((()=>o))}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new P(((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}}))}X(e,t){O(dt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.J(i,((s,o,c)=>c.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.J(i,t)}te(e){const t=this.cursor({});return new P(((r,i)=>{t.onerror=s=>{const o=Kl(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():r()})):r()}}))}J(e,t){const r=[];return new P(((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new nR(c),l=t(c.primaryKey,c.value,u);if(l instanceof P){const d=l.catch((f=>(u.done(),P.reject(f))));r.push(d)}u.isDone?i():u.G===null?c.continue():c.continue(u.G)}})).next((()=>P.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function hr(n){return new P(((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Kl(r.target.error);t(i)}}))}let Kf=!1;function Kl(n){const e=Lt.M(ze());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Kf||(Kf=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Fs="IndexBackfiller";class iR{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){O(Fs,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();O(Fs,`Documents written: ${t}`)}catch(t){Kn(t)?O(Fs,"Ignoring IndexedDB error during index backfill: ",t):await Hn(t)}await this.re(6e4)}))}}class sR{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const r=new Set;let i=t,s=!0;return P.doWhile((()=>s===!0&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return O(Fs,`Processing collection: ${o}`),this.oe(e,o,i).next((c=>{i-=c,r.add(o)}));s=!1})))).next((()=>t-i))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next((s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(i,s))).next((c=>(O(Fs,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((i,s)=>{const o=c_(s);Hl(o,r)>0&&(r=o)})),new It(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class ot{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ot.ce=-1;/**
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
 */const Ln=-1;function Eo(n){return n==null}function Xs(n){return n===0&&1/n==-1/0}function d_(n){return typeof n=="number"&&Number.isInteger(n)&&!Xs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const xa="";function tt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qf(e)),e=oR(n.get(t),e);return Qf(e)}function oR(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case xa:t+="";break;default:t+=s}}return t}function Qf(n){return n+xa+""}function xt(n){const e=n.length;if(Q(e>=2,64408,{path:n}),e===2)return Q(n.charAt(0)===xa&&n.charAt(1)==="",56145,{path:n}),se.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(xa,s);switch((o<0||o>t)&&$(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:$(61167,{path:n})}s=o+2}return new se(r)}/**
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
 */const lr="remoteDocuments",To="owner",Qr="owner",Zs="mutationQueues",aR="userId",vt="mutations",Jf="batchId",gr="userMutationsIndex",Yf=["userId","batchId"];/**
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
 */function pa(n,e){return[n,tt(e)]}function f_(n,e,t){return[n,tt(e),t]}const cR={},Ii="documentMutations",Oa="remoteDocumentsV14",uR=["prefixPath","collectionGroup","readTime","documentId"],ga="documentKeyIndex",lR=["prefixPath","collectionGroup","documentId"],m_="collectionGroupIndex",hR=["collectionGroup","readTime","prefixPath","documentId"],eo="remoteDocumentGlobal",Qu="remoteDocumentGlobalKey",wi="targets",p_="queryTargetsIndex",dR=["canonicalId","targetId"],Ei="targetDocuments",fR=["targetId","path"],Ql="documentTargetsIndex",mR=["path","targetId"],Ma="targetGlobalKey",wr="targetGlobal",to="collectionParents",pR=["collectionId","parent"],Ti="clientMetadata",gR="clientId",hc="bundles",_R="bundleId",dc="namedQueries",yR="name",Jl="indexConfiguration",IR="indexId",Ju="collectionGroupIndex",wR="collectionGroup",Us="indexState",ER=["indexId","uid"],g_="sequenceNumberIndex",TR=["uid","sequenceNumber"],Bs="indexEntries",vR=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],__="documentKeyIndex",bR=["indexId","uid","orderedDocumentKey"],fc="documentOverlays",AR=["userId","collectionPath","documentId"],Yu="collectionPathOverlayIndex",RR=["userId","collectionPath","largestBatchId"],y_="collectionGroupOverlayIndex",SR=["userId","collectionGroup","largestBatchId"],Yl="globals",PR="name",I_=[Zs,vt,Ii,lr,wi,To,wr,Ei,Ti,eo,to,hc,dc],CR=[...I_,fc],w_=[Zs,vt,Ii,Oa,wi,To,wr,Ei,Ti,eo,to,hc,dc,fc],E_=w_,Xl=[...E_,Jl,Us,Bs],kR=Xl,T_=[...Xl,Yl],DR=T_;/**
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
 */class Xu extends l_{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function je(n,e){const t=z(n);return Lt.O(t.le,e)}/**
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
 */function Xf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function v_(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function b_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ie{constructor(e,t){this.comparator=e,this.root=t||Ye.EMPTY}insert(e,t){return new Ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zo(this.root,e,this.comparator,!0)}}class Zo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ye(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zf(this.data.getIterator())}getIteratorFrom(e){return new Zf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class Zf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Jr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class at{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new at([])}unionWith(e){let t=new me(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new at(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class A_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function lV(){return typeof atob<"u"}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new A_("Invalid base64 string: "+s):s}})(e);return new Ve(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const VR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=VR.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(n.seconds),nanos:be(n.nanos)}}function be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tn(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
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
 */const R_="server_timestamp",S_="__type__",P_="__previous_value__",C_="__local_write_time__";function mc(n){return(n?.mapValue?.fields||{})[S_]?.stringValue===R_}function pc(n){const e=n.mapValue.fields[P_];return mc(e)?pc(e):e}function no(n){const e=en(n.mapValue.fields[C_].timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class NR{constructor(e,t,r,i,s,o,c,u,l,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=d,this.apiKey=f}}const ro="(default)";class vr{constructor(e,t){this.projectId=e,this.database=t||ro}static empty(){return new vr("","")}get isDefaultDatabase(){return this.database===ro}isEqual(e){return e instanceof vr&&e.projectId===this.projectId&&e.database===this.database}}function xR(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new x(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vr(n.options.projectId,e)}/**
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
 */const Zl="__type__",k_="__max__",kn={mapValue:{fields:{__type__:{stringValue:k_}}}},eh="__vector__",vi="value",_a={nullValue:"NULL_VALUE"};function Un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mc(n)?4:D_(n)?9007199254740991:gc(n)?10:11:$(28295,{value:n})}function zt(n,e){if(n===e)return!0;const t=Un(n);if(t!==Un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return no(n).isEqual(no(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=en(i.timestampValue),c=en(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return tn(i.bytesValue).isEqual(tn(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),c=be(s.doubleValue);return o===c?Xs(o)===Xs(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return pi(n.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Xf(o)!==Xf(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!zt(o[u],c[u])))return!1;return!0})(n,e);default:return $(52216,{left:n})}}function io(n,e){return(n.values||[]).find((t=>zt(t,e)))!==void 0}function Bn(n,e){if(n===e)return 0;const t=Un(n),r=Un(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(s,o){const c=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return em(n.timestampValue,e.timestampValue);case 4:return em(no(n),no(e));case 5:return Wu(n.stringValue,e.stringValue);case 6:return(function(s,o){const c=tn(s),u=tn(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(s,o){const c=s.split("/"),u=o.split("/");for(let l=0;l<c.length&&l<u.length;l++){const d=Z(c[l],u[l]);if(d!==0)return d}return Z(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,o){const c=Z(be(s.latitude),be(o.latitude));return c!==0?c:Z(be(s.longitude),be(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return tm(n.arrayValue,e.arrayValue);case 10:return(function(s,o){const c=s.fields||{},u=o.fields||{},l=c[vi]?.arrayValue,d=u[vi]?.arrayValue,f=Z(l?.values?.length||0,d?.values?.length||0);return f!==0?f:tm(l,d)})(n.mapValue,e.mapValue);case 11:return(function(s,o){if(s===kn.mapValue&&o===kn.mapValue)return 0;if(s===kn.mapValue)return 1;if(o===kn.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),l=o.fields||{},d=Object.keys(l);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=Wu(u[f],d[f]);if(p!==0)return p;const y=Bn(c[u[f]],l[d[f]]);if(y!==0)return y}return Z(u.length,d.length)})(n.mapValue,e.mapValue);default:throw $(23264,{he:t})}}function em(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=en(n),r=en(e),i=Z(t.seconds,r.seconds);return i!==0?i:Z(t.nanos,r.nanos)}function tm(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Bn(t[i],r[i]);if(s)return s}return Z(t.length,r.length)}function bi(n){return Zu(n)}function Zu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=en(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return tn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return q.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Zu(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zu(t.fields[o])}`;return i+"}"})(n.mapValue):$(61005,{value:n})}function ya(n){switch(Un(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(n);return e?16+ya(e):16;case 5:return 2*n.stringValue.length;case 6:return tn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+ya(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Qn(r.fields,((s,o)=>{i+=s.length+ya(o)})),i})(n.mapValue);default:throw $(13486,{value:n})}}function br(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function el(n){return!!n&&"integerValue"in n}function so(n){return!!n&&"arrayValue"in n}function nm(n){return!!n&&"nullValue"in n}function rm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ia(n){return!!n&&"mapValue"in n}function gc(n){return(n?.mapValue?.fields||{})[Zl]?.stringValue===eh}function qs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Qn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=qs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qs(n.arrayValue.values[t]);return e}return{...n}}function D_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===k_}const V_={mapValue:{fields:{[Zl]:{stringValue:eh},[vi]:{arrayValue:{}}}}};function OR(n){return"nullValue"in n?_a:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?br(vr.empty(),q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?gc(n)?V_:{mapValue:{}}:$(35942,{value:n})}function MR(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?br(vr.empty(),q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?V_:"mapValue"in n?gc(n)?{mapValue:{}}:kn:$(61959,{value:n})}function im(n,e){const t=Bn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function sm(n,e){const t=Bn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ia(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(t)}setAll(e){let t=Ae.emptyPath(),r={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=qs(o):i.push(c.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ia(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ia(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Qn(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new He(qs(this.value))}}function N_(n){const e=[];return Qn(n.fields,((t,r)=>{const i=new Ae([t]);if(Ia(r)){const s=N_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new at(e)}/**
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
 */class Ee{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ee(e,0,X.min(),X.min(),X.min(),He.empty(),0)}static newFoundDocument(e,t,r,i){return new Ee(e,1,t,X.min(),r,i,0)}static newNoDocument(e,t){return new Ee(e,2,t,X.min(),X.min(),He.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,X.min(),X.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qn{constructor(e,t){this.position=e,this.inclusive=t}}function om(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),t.key):r=Bn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function am(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class oo{constructor(e,t="asc"){this.field=e,this.dir=t}}function LR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class x_{}class ce extends x_{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new FR(e,t,r):t==="array-contains"?new qR(e,r):t==="in"?new B_(e,r):t==="not-in"?new zR(e,r):t==="array-contains-any"?new jR(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new UR(e,r):new BR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bn(t,this.value)):t!==null&&Un(this.value)===Un(t)&&this.matchesComparison(Bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fe extends x_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new fe(e,t)}matches(e){return Ai(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ai(n){return n.op==="and"}function tl(n){return n.op==="or"}function th(n){return O_(n)&&Ai(n)}function O_(n){for(const e of n.filters)if(e instanceof fe)return!1;return!0}function nl(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+bi(n.value);if(th(n))return n.filters.map((e=>nl(e))).join(",");{const e=n.filters.map((t=>nl(t))).join(",");return`${n.op}(${e})`}}function M_(n,e){return n instanceof ce?(function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&zt(r.value,i.value)})(n,e):n instanceof fe?(function(r,i){return i instanceof fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,o,c)=>s&&M_(o,i.filters[c])),!0):!1})(n,e):void $(19439)}function L_(n,e){const t=n.filters.concat(e);return fe.create(t,n.op)}function F_(n){return n instanceof ce?(function(t){return`${t.field.canonicalString()} ${t.op} ${bi(t.value)}`})(n):n instanceof fe?(function(t){return t.op.toString()+" {"+t.getFilters().map(F_).join(" ,")+"}"})(n):"Filter"}class FR extends ce{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class UR extends ce{constructor(e,t){super(e,"in",t),this.keys=U_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class BR extends ce{constructor(e,t){super(e,"not-in",t),this.keys=U_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function U_(n,e){return(e.arrayValue?.values||[]).map((t=>q.fromName(t.referenceValue)))}class qR extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return so(t)&&io(t.arrayValue,this.value)}}class B_ extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&io(this.value.arrayValue,t)}}class zR extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!io(this.value.arrayValue,t)}}class jR extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!so(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>io(this.value.arrayValue,r)))}}/**
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
 */class GR{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Te=null}}function rl(n,e=null,t=[],r=[],i=null,s=null,o=null){return new GR(n,e,t,r,i,s,o)}function Ar(n){const e=z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>nl(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Eo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>bi(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>bi(r))).join(",")),e.Te=t}return e.Te}function vo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!LR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!M_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!am(n.startAt,e.startAt)&&am(n.endAt,e.endAt)}function La(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Fa(n,e){return n.filters.filter((t=>t instanceof ce&&t.field.isEqual(e)))}function cm(n,e,t){let r=_a,i=!0;for(const s of Fa(n,e)){let o=_a,c=!0;switch(s.op){case"<":case"<=":o=OR(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=_a}im({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];im({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function um(n,e,t){let r=kn,i=!0;for(const s of Fa(n,e)){let o=kn,c=!0;switch(s.op){case">=":case">":o=MR(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=kn}sm({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];sm({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class un{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function q_(n,e,t,r,i,s,o,c){return new un(n,e,t,r,i,s,o,c)}function ji(n){return new un(n)}function lm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $R(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function nh(n){return n.collectionGroup!==null}function li(n){const e=z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new me(Ae.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((l=>{l.isInequality()&&(c=c.add(l.field))}))})),c})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new oo(s,r))})),t.has(Ae.keyField().canonicalString())||e.Ie.push(new oo(Ae.keyField(),r))}return e.Ie}function nt(n){const e=z(n);return e.Ee||(e.Ee=j_(e,li(n))),e.Ee}function z_(n){const e=z(n);return e.Re||(e.Re=j_(e,n.explicitOrderBy)),e.Re}function j_(n,e){if(n.limitType==="F")return rl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new oo(i.field,s)}));const t=n.endAt?new qn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new qn(n.startAt.position,n.startAt.inclusive):null;return rl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function il(n,e){const t=n.filters.concat([e]);return new un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function WR(n,e){const t=n.explicitOrderBy.concat([e]);return new un(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Ua(n,e,t){return new un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function HR(n,e){return new un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,e,n.endAt)}function KR(n,e){return new un(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,e)}function bo(n,e){return vo(nt(n),nt(e))&&n.limitType===e.limitType}function G_(n){return`${Ar(nt(n))}|lt:${n.limitType}`}function ri(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>F_(i))).join(", ")}]`),Eo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>bi(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>bi(i))).join(",")),`Target(${r})`})(nt(n))}; limitType=${n.limitType})`}function Ao(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of li(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(o,c,u){const l=om(o,c,u);return o.inclusive?l<=0:l<0})(r.startAt,li(r),i)||r.endAt&&!(function(o,c,u){const l=om(o,c,u);return o.inclusive?l>=0:l>0})(r.endAt,li(r),i))})(n,e)}function $_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function W_(n){return(e,t)=>{let r=!1;for(const i of li(n)){const s=QR(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function QR(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):(function(s,o,c){const u=o.data.field(s),l=c.data.field(s);return u!==null&&l!==null?Bn(u,l):$(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
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
 */class ln{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qn(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return b_(this.inner)}size(){return this.innerSize}}/**
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
 */const JR=new Ie(q.comparator);function ct(){return JR}const H_=new Ie(q.comparator);function ks(...n){let e=H_;for(const t of n)e=e.insert(t.key,t);return e}function K_(n){let e=H_;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Ot(){return zs()}function Q_(){return zs()}function zs(){return new ln((n=>n.toString()),((n,e)=>n.isEqual(e)))}const YR=new Ie(q.comparator),XR=new me(q.comparator);function te(...n){let e=XR;for(const t of n)e=e.add(t);return e}const ZR=new me(Z);function rh(){return ZR}/**
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
 */function ih(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xs(e)?"-0":e}}function J_(n){return{integerValue:""+n}}function Y_(n,e){return d_(e)?J_(e):ih(n,e)}/**
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
 */class _c{constructor(){this._=void 0}}function eS(n,e,t){return n instanceof Ri?(function(i,s){const o={fields:{[S_]:{stringValue:R_},[C_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mc(s)&&(s=pc(s)),s&&(o.fields[P_]=s),{mapValue:o}})(t,e):n instanceof Rr?Z_(n,e):n instanceof Sr?ey(n,e):(function(i,s){const o=X_(i,s),c=hm(o)+hm(i.Ae);return el(o)&&el(i.Ae)?J_(c):ih(i.serializer,c)})(n,e)}function tS(n,e,t){return n instanceof Rr?Z_(n,e):n instanceof Sr?ey(n,e):t}function X_(n,e){return n instanceof Si?(function(r){return el(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class Ri extends _c{}class Rr extends _c{constructor(e){super(),this.elements=e}}function Z_(n,e){const t=ty(e);for(const r of n.elements)t.some((i=>zt(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Sr extends _c{constructor(e){super(),this.elements=e}}function ey(n,e){let t=ty(e);for(const r of n.elements)t=t.filter((i=>!zt(i,r)));return{arrayValue:{values:t}}}class Si extends _c{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function hm(n){return be(n.integerValue||n.doubleValue)}function ty(n){return so(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ro{constructor(e,t){this.field=e,this.transform=t}}function nS(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Rr&&i instanceof Rr||r instanceof Sr&&i instanceof Sr?pi(r.elements,i.elements,zt):r instanceof Si&&i instanceof Si?zt(r.Ae,i.Ae):r instanceof Ri&&i instanceof Ri})(n.transform,e.transform)}class rS{constructor(e,t){this.version=e,this.transformResults=t}}class Re{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yc{}function ny(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new $i(n.key,Re.none()):new Gi(n.key,n.data,Re.none());{const t=n.data,r=He.empty();let i=new me(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hn(n.key,r,new at(i.toArray()),Re.none())}}function iS(n,e,t){n instanceof Gi?(function(i,s,o){const c=i.value.clone(),u=fm(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof hn?(function(i,s,o){if(!wa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=fm(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ry(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function js(n,e,t,r){return n instanceof Gi?(function(s,o,c,u){if(!wa(s.precondition,o))return c;const l=s.value.clone(),d=mm(s.fieldTransforms,u,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,e,t,r):n instanceof hn?(function(s,o,c,u){if(!wa(s.precondition,o))return c;const l=mm(s.fieldTransforms,u,o),d=o.data;return d.setAll(ry(s)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((f=>f.field)))})(n,e,t,r):(function(s,o,c){return wa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function sS(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=X_(r.transform,i||null);s!=null&&(t===null&&(t=He.empty()),t.set(r.field,s))}return t||null}function dm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pi(r,i,((s,o)=>nS(s,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gi extends yc{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hn extends yc{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ry(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function fm(n,e,t){const r=new Map;Q(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,tS(o,c,t[i]))}return r}function mm(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,eS(s,o,e))}return r}class $i extends yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sh extends yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oh{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&iS(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=js(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=js(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Q_();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=ny(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),te())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,((t,r)=>dm(t,r)))&&pi(this.baseMutations,e.baseMutations,((t,r)=>dm(t,r)))}}class ah{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return YR})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ah(e,t,r,i)}}/**
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
 */class ch{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class iy{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
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
 */class oS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Le,ue;function sy(n){switch(n){case k.OK:return $(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function oy(n){if(n===void 0)return Oe("GRPC error has no .code"),k.UNKNOWN;switch(n){case Le.OK:return k.OK;case Le.CANCELLED:return k.CANCELLED;case Le.UNKNOWN:return k.UNKNOWN;case Le.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Le.INTERNAL:return k.INTERNAL;case Le.UNAVAILABLE:return k.UNAVAILABLE;case Le.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Le.NOT_FOUND:return k.NOT_FOUND;case Le.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Le.ABORTED:return k.ABORTED;case Le.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Le.DATA_LOSS:return k.DATA_LOSS;default:return $(39323,{code:n})}}(ue=Le||(Le={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let sl=null;function aS(n){if(sl)throw new Error("a TestingHooksSpi instance is already set");sl=n}/**
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
 */function ay(){return new TextEncoder}/**
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
 */const cS=new Mn([4294967295,4294967295],0);function pm(n){const e=ay().encode(n),t=new Jg;return t.update(e),new Uint8Array(t.digest())}function gm(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mn([t,r],0),new Mn([i,s],0)]}class uh{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ds(`Invalid padding: ${t}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Mn.fromNumber(r)));return i.compare(cS)===1&&(i=new Mn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=pm(e),[r,i]=gm(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new uh(s,i,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=pm(e),[r,i]=gm(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class So{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new So(X.min(),i,new Ie(Z),ct(),te())}}class Po{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Po(r,t,te(),te(),te())}}/**
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
 */class Ea{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=i}}class cy{constructor(e,t){this.targetId=e,this.Ce=t}}class uy{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class _m{constructor(){this.ve=0,this.Fe=ym(),this.Me=Ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),t=te(),r=te();return this.Fe.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:$(38017,{changeType:s})}})),new Po(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=ym()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class uS{constructor(e){this.Ge=e,this.ze=new Map,this.je=ct(),this.He=ea(),this.Je=ea(),this.Ze=new Ie(Z)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:$(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(La(s))if(r===0){const o=new q(s.path);this.et(t,o,Ee.newNoDocument(o,X.min()))}else Q(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,l)}sl?.lt((function(d,f,p,y,b){const A={localCacheCount:d,existenceFilterCount:f.count,databaseId:p.database,projectId:p.projectId},S=f.unchangedNames;return S&&(A.bloomFilter={applied:b===0,hashCount:S?.hashCount??0,bitmapLength:S?.bits?.bitmap?.length??0,padding:S?.bits?.padding??0,mightContain:V=>y?.mightContain(V)??!1}),A})(o,e.Ce,this.Ge.ht(),c,u))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=tn(r).toUint8Array()}catch(u){if(u instanceof A_)return yt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new uh(o,i,s)}catch(u){return yt(u instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.et(t,s,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((s,o)=>{const c=this.ot(o);if(c){if(s.current&&La(c.target)){const u=new q(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ee.newNoDocument(u,e))}s.Be&&(t.set(o,s.ke()),s.Ke())}}));let r=te();this.Je.forEach(((s,o)=>{let c=!0;o.forEachWhile((u=>{const l=this.ot(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(s))})),this.je.forEach(((s,o)=>o.setReadTime(e)));const i=new So(e,t,this.Ze,this.je,r);return this.je=ct(),this.He=ea(),this.Je=ea(),this.Ze=new Ie(Z),i}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.qe(t,1):i.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new _m,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new me(Z),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new me(Z),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _m),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ea(){return new Ie(q.comparator)}function ym(){return new Ie(q.comparator)}const lS={asc:"ASCENDING",desc:"DESCENDING"},hS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dS={and:"AND",or:"OR"};class fS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ol(n,e){return n.useProto3Json||Eo(e)?e:{value:e}}function Pi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ly(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mS(n,e){return Pi(n,e.toTimestamp())}function Me(n){return Q(!!n,49232),X.fromTimestamp((function(t){const r=en(t);return new de(r.seconds,r.nanos)})(n))}function lh(n,e){return al(n,e).canonicalString()}function al(n,e){const t=(function(i){return new se(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function hy(n){const e=se.fromString(n);return Q(wy(e),10190,{key:e.toString()}),e}function ao(n,e){return lh(n.databaseId,e.path)}function Ft(n,e){const t=hy(e);if(t.get(1)!==n.databaseId.projectId)throw new x(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(my(t))}function dy(n,e){return lh(n.databaseId,e)}function fy(n){const e=hy(n);return e.length===4?se.emptyPath():my(e)}function cl(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function my(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Im(n,e,t){return{name:ao(n,e),fields:t.value.mapValue.fields}}function Ic(n,e,t){const r=Ft(n,e.name),i=Me(e.updateTime),s=e.createTime?Me(e.createTime):X.min(),o=new He({mapValue:{fields:e.fields}}),c=Ee.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function pS(n,e){return"found"in e?(function(r,i){Q(!!i.found,43571),i.found.name,i.found.updateTime;const s=Ft(r,i.found.name),o=Me(i.found.updateTime),c=i.found.createTime?Me(i.found.createTime):X.min(),u=new He({mapValue:{fields:i.found.fields}});return Ee.newFoundDocument(s,o,c,u)})(n,e):"missing"in e?(function(r,i){Q(!!i.missing,3894),Q(!!i.readTime,22933);const s=Ft(r,i.missing),o=Me(i.readTime);return Ee.newNoDocument(s,o)})(n,e):$(7234,{result:e})}function gS(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$(39313,{state:l})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(l,d){return l.useProto3Json?(Q(d===void 0||typeof d=="string",58123),Ve.fromBase64String(d||"")):(Q(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ve.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(l){const d=l.code===void 0?k.UNKNOWN:oy(l.code);return new x(d,l.message||"")})(o);t=new uy(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ft(n,r.document.name),s=Me(r.document.updateTime),o=r.document.createTime?Me(r.document.createTime):X.min(),c=new He({mapValue:{fields:r.document.fields}}),u=Ee.newFoundDocument(i,s,o,c),l=r.targetIds||[],d=r.removedTargetIds||[];t=new Ea(l,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ft(n,r.document),s=r.readTime?Me(r.readTime):X.min(),o=Ee.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Ea([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ft(n,r.document),s=r.removedTargetIds||[];t=new Ea([],s,i,null)}else{if(!("filter"in e))return $(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new oS(i,s),c=r.targetId;t=new cy(c,o)}}return t}function co(n,e){let t;if(e instanceof Gi)t={update:Im(n,e.key,e.value)};else if(e instanceof $i)t={delete:ao(n,e.key)};else if(e instanceof hn)t={update:Im(n,e.key,e.data),updateMask:TS(e.fieldMask)};else{if(!(e instanceof sh))return $(16599,{dt:e.type});t={verify:ao(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,o){const c=o.transform;if(c instanceof Ri)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Rr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Sr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Si)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw $(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:mS(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$(27497)})(n,e.precondition)),t}function ul(n,e){const t=e.currentDocument?(function(s){return s.updateTime!==void 0?Re.updateTime(Me(s.updateTime)):s.exists!==void 0?Re.exists(s.exists):Re.none()})(e.currentDocument):Re.none(),r=e.updateTransforms?e.updateTransforms.map((i=>(function(o,c){let u=null;if("setToServerValue"in c)Q(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new Ri;else if("appendMissingElements"in c){const d=c.appendMissingElements.values||[];u=new Rr(d)}else if("removeAllFromArray"in c){const d=c.removeAllFromArray.values||[];u=new Sr(d)}else"increment"in c?u=new Si(o,c.increment):$(16584,{proto:c});const l=Ae.fromServerFormat(c.fieldPath);return new Ro(l,u)})(n,i))):[];if(e.update){e.update.name;const i=Ft(n,e.update.name),s=new He({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const l=u.fieldPaths||[];return new at(l.map((d=>Ae.fromServerFormat(d))))})(e.updateMask);return new hn(i,s,o,t,r)}return new Gi(i,s,t,r)}if(e.delete){const i=Ft(n,e.delete);return new $i(i,t)}if(e.verify){const i=Ft(n,e.verify);return new sh(i,t)}return $(1463,{proto:e})}function _S(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map((t=>(function(i,s){let o=i.updateTime?Me(i.updateTime):Me(s);return o.isEqual(X.min())&&(o=Me(s)),new rS(o,i.transformResults||[])})(t,e)))):[]}function py(n,e){return{documents:[dy(n,e.path)]}}function wc(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=dy(n,i);const s=(function(l){if(l.length!==0)return Iy(fe.create(l,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(l){if(l.length!==0)return l.map((d=>(function(p){return{field:Pn(p.field),direction:IS(p.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ol(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(e.endAt)),{ft:t,parent:i}}function gy(n,e,t,r){const{ft:i,parent:s}=wc(n,e),o={},c=[];let u=0;return t.forEach((l=>{const d=r?l.alias:"aggregate_"+u++;o[d]=l.alias,l.aggregateType==="count"?c.push({alias:d,count:{}}):l.aggregateType==="avg"?c.push({alias:d,avg:{field:Pn(l.fieldPath)}}):l.aggregateType==="sum"&&c.push({alias:d,sum:{field:Pn(l.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function _y(n){let e=fy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Q(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=(function(f){const p=yy(f);return p instanceof fe&&th(p)?p.getFilters():[p]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((p=>(function(b){return new oo(ii(b.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(b.direction))})(p)))})(t.orderBy));let c=null;t.limit&&(c=(function(f){let p;return p=typeof f=="object"?f.value:f,Eo(p)?null:p})(t.limit));let u=null;t.startAt&&(u=(function(f){const p=!!f.before,y=f.values||[];return new qn(y,p)})(t.startAt));let l=null;return t.endAt&&(l=(function(f){const p=!f.before,y=f.values||[];return new qn(y,p)})(t.endAt)),q_(e,i,o,s,c,"F",u,l)}function yS(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yy(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ii(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ii(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(t.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(t.unaryFilter.field);return ce.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ce.create(ii(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return fe.create(t.compositeFilter.filters.map((r=>yy(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $(1026)}})(t.compositeFilter.op))})(n):$(30097,{filter:n})}function IS(n){return lS[n]}function wS(n){return hS[n]}function ES(n){return dS[n]}function Pn(n){return{fieldPath:n.canonicalString()}}function ii(n){return Ae.fromServerFormat(n.fieldPath)}function Iy(n){return n instanceof ce?(function(t){if(t.op==="=="){if(rm(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NAN"}};if(nm(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rm(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NAN"}};if(nm(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pn(t.field),op:wS(t.op),value:t.value}}})(n):n instanceof fe?(function(t){const r=t.getFilters().map((i=>Iy(i)));return r.length===1?r[0]:{compositeFilter:{op:ES(t.op),filters:r}}})(n):$(54877,{filter:n})}function TS(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function wy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ey(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Kt{constructor(e,t,r,i,s=X.min(),o=X.min(),c=Ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ty{constructor(e){this.yt=e}}function vS(n,e){let t;if(e.document)t=Ic(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),i=Cr(e.noDocument.readTime);t=Ee.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return $(56709);{const r=q.fromSegments(e.unknownDocument.path),i=Cr(e.unknownDocument.version);t=Ee.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime((function(i){const s=new de(i[0],i[1]);return X.fromTimestamp(s)})(e.readTime)),t}function wm(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ba(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(s,o){return{name:ao(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Pi(s,o.version.toTimestamp()),createTime:Pi(s,o.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Pr(e.version)};else{if(!e.isUnknownDocument())return $(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Pr(e.version)}}return r}function Ba(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Pr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Cr(n){const e=new de(n.seconds,n.nanoseconds);return X.fromTimestamp(e)}function dr(n,e){const t=(e.baseMutations||[]).map((s=>ul(n.yt,s)));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map((s=>ul(n.yt,s))),i=de.fromMillis(e.localWriteTimeMs);return new oh(e.batchId,i,t,r)}function Vs(n){const e=Cr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Cr(n.lastLimboFreeSnapshotVersion):X.min();let r;return r=(function(s){return s.documents!==void 0})(n.query)?(function(s){const o=s.documents.length;return Q(o===1,1966,{count:o}),nt(ji(fy(s.documents[0])))})(n.query):(function(s){return nt(_y(s))})(n.query),new Kt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ve.fromBase64String(n.resumeToken))}function vy(n,e){const t=Pr(e.snapshotVersion),r=Pr(e.lastLimboFreeSnapshotVersion);let i;i=La(e.target)?py(n.yt,e.target):wc(n.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ar(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ec(n){const e=_y({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ua(e,e.limit,"L"):e}function Tu(n,e){return new ch(e.largestBatchId,ul(n.yt,e.overlayMutation))}function Em(n,e){const t=e.path.lastSegment();return[n,tt(e.path.popLast()),t]}function Tm(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Pr(r.readTime),documentKey:tt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class bS{getBundleMetadata(e,t){return vm(e).get(t).next((r=>{if(r)return(function(s){return{id:s.bundleId,createTime:Cr(s.createTime),version:s.version}})(r)}))}saveBundleMetadata(e,t){return vm(e).put((function(i){return{bundleId:i.id,createTime:Pr(Me(i.createTime)),version:i.version}})(t))}getNamedQuery(e,t){return bm(e).get(t).next((r=>{if(r)return(function(s){return{name:s.name,query:Ec(s.bundledQuery),readTime:Cr(s.readTime)}})(r)}))}saveNamedQuery(e,t){return bm(e).put((function(i){return{name:i.name,readTime:Pr(Me(i.readTime)),bundledQuery:i.bundledQuery}})(t))}}function vm(n){return je(n,hc)}function bm(n){return je(n,dc)}/**
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
 */class Tc{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new Tc(e,r)}getOverlay(e,t){return ws(e).get(Em(this.userId,t)).next((r=>r?Tu(this.serializer,r):null))}getOverlays(e,t){const r=Ot();return P.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){const i=[];return r.forEach(((s,o)=>{const c=new ch(t,o);i.push(this.bt(e,c))})),P.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach((o=>i.add(tt(o.getCollectionPath()))));const s=[];return i.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ws(e).X(Yu,c))})),P.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Ot(),s=tt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ws(e).H(Yu,o).next((c=>{for(const u of c){const l=Tu(this.serializer,u);i.set(l.getKey(),l)}return i}))}getOverlaysForCollectionGroup(e,t,r,i){const s=Ot();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ws(e).ee({index:y_,range:c},((u,l,d)=>{const f=Tu(this.serializer,l);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()})).next((()=>s))}bt(e,t){return ws(e).put((function(i,s,o){const[c,u,l]=Em(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:co(i.yt,o.mutation)}})(this.serializer,this.userId,t))}}function ws(n){return je(n,fc)}/**
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
 */class AS{St(e){return je(e,Yl)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const r=t?.value;return r?Ve.fromUint8Array(r):Ve.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class fr{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(be(e.integerValue));else if("doubleValue"in e){const r=be(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Xs(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=en(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(tn(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?D_(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):gc(e)?this.kt(e.mapValue,t):(this.Kt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Nt(t)):$(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}Kt(e,t){const r=e.fields||{};this.Ft(t,55);for(const i of Object.keys(r))this.Ot(i,t),this.Ct(r[i],t)}kt(e,t){const r=e.fields||{};this.Ft(t,53);const i=vi,s=r[i].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(be(s)),this.Ot(i,t),this.Ct(r[i],t)}qt(e,t){const r=e.values||[];this.Ft(t,50);for(const i of r)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),q.fromName(e).path.forEach((r=>{this.Ft(t,60),this.$t(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}fr.Wt=new fr;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=255;function RS(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Am(n){const e=64-(function(r){let i=0;for(let s=0;s<8;++s){const o=RS(255&r[s]);if(i+=o,o!==8)break}return i})(n);return Math.ceil(e/8)}class SS{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ht(r.value),r=t.next();this.Jt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ht(r);else if(r<2048)this.Ht(960|r>>>6),this.Ht(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ht(480|r>>>12),this.Ht(128|63&r>>>6),this.Ht(128|63&r);else{const i=t.codePointAt(0);this.Ht(240|i>>>18),this.Ht(128|63&i>>>12),this.Ht(128|63&i>>>6),this.Ht(128|63&i)}}this.Jt()}Yt(e){const t=this.en(e),r=Am(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),r=Am(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(Yr),this.sn(255)}_n(){this.an(Yr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===Yr?(this.sn(Yr),this.sn(0)):this.sn(t)}Ht(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===Yr?(this.an(Yr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Jt(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class PS{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class CS{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Es{constructor(){this.cn=new SS,this.ascending=new PS(this.cn),this.descending=new CS(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class mr{constructor(e,t,r,i){this.hn=e,this.Pn=t,this.Tn=r,this.In=i}En(){const e=this.In.length,t=e===0||this.In[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.In,0),t!==e?r.set([0],this.In.length):++r[r.length-1],new mr(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:Ta(this.Tn),directionalValue:Ta(this.In),orderedDocumentKey:Ta(t),documentKey:r.path.toArray()}}An(e,t,r){const i=this.Rn(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function En(n,e){let t=n.hn-e.hn;return t!==0?t:(t=Rm(n.Tn,e.Tn),t!==0?t:(t=Rm(n.In,e.In),t!==0?t:q.comparator(n.Pn,e.Pn)))}function Rm(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Ta(n){return Xp()?(function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r})(n):n}function Sm(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(n)}class Pm{constructor(e){this.Vn=new me(((t,r)=>Ae.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(Q(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=Ku(e);if(t!==void 0&&!this.pn(t))return!1;const r=ur(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.pn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=r[s];if(!this.yn(c,u)||!this.wn(this.dn[o++],u))return!1}++s}for(;s<r.length;++s){const c=r[s];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}bn(){if(this.fn)return null;let e=new me(Ae.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Ir(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Ir(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Ir(r.field,r.dir==="asc"?0:1)));return new _i(_i.UNKNOWN_ID,this.collectionId,t,yi.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function by(n){if(Q(n instanceof ce||n instanceof fe,20012),n instanceof ce){if(n instanceof B_){const t=n.value.arrayValue?.values?.map((r=>ce.create(n.field,"==",r)))||[];return fe.create(t,"or")}return n}const e=n.filters.map((t=>by(t)));return fe.create(e,n.op)}function kS(n){if(n.getFilters().length===0)return[];const e=dl(by(n));return Q(Ay(e),7391),ll(e)||hl(e)?[e]:e.getFilters()}function ll(n){return n instanceof ce}function hl(n){return n instanceof fe&&th(n)}function Ay(n){return ll(n)||hl(n)||(function(t){if(t instanceof fe&&tl(t)){for(const r of t.getFilters())if(!ll(r)&&!hl(r))return!1;return!0}return!1})(n)}function dl(n){if(Q(n instanceof ce||n instanceof fe,34018),n instanceof ce)return n;if(n.filters.length===1)return dl(n.filters[0]);const e=n.filters.map((r=>dl(r)));let t=fe.create(e,n.op);return t=qa(t),Ay(t)?t:(Q(t instanceof fe,64498),Q(Ai(t),40251),Q(t.filters.length>1,57927),t.filters.reduce(((r,i)=>hh(r,i))))}function hh(n,e){let t;return Q(n instanceof ce||n instanceof fe,38388),Q(e instanceof ce||e instanceof fe,25473),t=n instanceof ce?e instanceof ce?(function(i,s){return fe.create([i,s],"and")})(n,e):Cm(n,e):e instanceof ce?Cm(e,n):(function(i,s){if(Q(i.filters.length>0&&s.filters.length>0,48005),Ai(i)&&Ai(s))return L_(i,s.getFilters());const o=tl(i)?i:s,c=tl(i)?s:i,u=o.filters.map((l=>hh(l,c)));return fe.create(u,"or")})(n,e),qa(t)}function Cm(n,e){if(Ai(e))return L_(e,n.getFilters());{const t=e.filters.map((r=>hh(n,r)));return fe.create(t,"or")}}function qa(n){if(Q(n instanceof ce||n instanceof fe,11850),n instanceof ce)return n;const e=n.getFilters();if(e.length===1)return qa(e[0]);if(O_(n))return n;const t=e.map((i=>qa(i))),r=[];return t.forEach((i=>{i instanceof ce?r.push(i):i instanceof fe&&(i.op===n.op?r.push(...i.filters):r.push(i))})),r.length===1?r[0]:fe.create(r,n.op)}/**
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
 */class DS{constructor(){this.Sn=new dh}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(It.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(It.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class dh{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new me(se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new me(se.comparator)).toArray()}}/**
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
 */const km="IndexedDbIndexManager",ta=new Uint8Array(0);class VS{constructor(e,t){this.databaseId=t,this.Dn=new dh,this.Cn=new ln((r=>Ar(r)),((r,i)=>vo(r,i))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.Dn.add(t)}));const s={collectionId:r,parent:tt(i)};return Dm(e).put(s)}return P.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[i_(t),""],!1,!0);return Dm(e).H(i).next((s=>{for(const o of s){if(o.collectionId!==t)break;r.push(xt(o.parent))}return r}))}addFieldIndex(e,t){const r=Ts(e),i=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Zr(e);return s.next((c=>{o.put(Tm(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const r=Ts(e),i=Zr(e),s=Xr(e);return r.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Ts(e),r=Xr(e),i=Zr(e);return t.X().next((()=>r.X())).next((()=>i.X()))}createTargetIndexes(e,t){return P.forEach(this.vn(t),(r=>this.getIndexType(e,r).next((i=>{if(i===0||i===1){const s=new Pm(r).bn();if(s!=null)return this.addFieldIndex(e,s)}}))))}getDocumentsMatchingTarget(e,t){const r=Xr(e);let i=!0;const s=new Map;return P.forEach(this.vn(t),(o=>this.Fn(e,o).next((c=>{i&&(i=!!c),s.set(o,c)})))).next((()=>{if(i){let o=te();const c=[];return P.forEach(s,((u,l)=>{O(km,`Using index ${(function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map((B=>`${B.fieldPath}:${B.kind}`)).join(",")}`})(u)} to execute ${Ar(t)}`);const d=(function(M,B){const W=Ku(B);if(W===void 0)return null;for(const G of Fa(M,W.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null})(l,u),f=(function(M,B){const W=new Map;for(const G of ur(B))for(const E of Fa(M,G.fieldPath))switch(E.op){case"==":case"in":W.set(G.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return W.set(G.fieldPath.canonicalString(),E.value),Array.from(W.values())}return null})(l,u),p=(function(M,B){const W=[];let G=!0;for(const E of ur(B)){const _=E.kind===0?cm(M,E.fieldPath,M.startAt):um(M,E.fieldPath,M.startAt);W.push(_.value),G&&(G=_.inclusive)}return new qn(W,G)})(l,u),y=(function(M,B){const W=[];let G=!0;for(const E of ur(B)){const _=E.kind===0?um(M,E.fieldPath,M.endAt):cm(M,E.fieldPath,M.endAt);W.push(_.value),G&&(G=_.inclusive)}return new qn(W,G)})(l,u),b=this.Mn(u,l,p),A=this.Mn(u,l,y),S=this.xn(u,l,f),V=this.On(u.indexId,d,b,p.inclusive,A,y.inclusive,S);return P.forEach(V,(L=>r.Z(L,t.limit).next((M=>{M.forEach((B=>{const W=q.fromSegments(B.documentKey);o.has(W)||(o=o.add(W),c.push(W))}))}))))})).next((()=>c))}return P.resolve(null)}))}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=kS(fe.create(e.filters,"and")).map((r=>rl(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}On(e,t,r,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),l=u/(t!=null?t.length:1),d=[];for(let f=0;f<u;++f){const p=t?this.Nn(t[f/l]):ta,y=this.Bn(e,p,r[f%l],i),b=this.Ln(e,p,s[f%l],o),A=c.map((S=>this.Bn(e,p,S,!0)));d.push(...this.createRange(y,b,A))}return d}Bn(e,t,r,i){const s=new mr(e,q.empty(),t,r);return i?s:s.En()}Ln(e,t,r,i){const s=new mr(e,q.empty(),t,r);return i?s.En():s}Fn(e,t){const r=new Pm(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((s=>{let o=null;for(const c of s)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let r=2;const i=this.vn(t);return P.forEach(i,(s=>this.Fn(e,s).next((o=>{o?r!==0&&o.fields.length<(function(u){let l=new me(Ae.comparator),d=!1;for(const f of u.filters)for(const p of f.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?d=!0:l=l.add(p.field));for(const f of u.orderBy)f.field.isKeyField()||(l=l.add(f.field));return l.size+(d?1:0)})(s)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&i.length>1&&r===2?1:r))}kn(e,t){const r=new Es;for(const i of ur(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.ln(i.kind);fr.Wt.Dt(s,o)}return r.un()}Nn(e){const t=new Es;return fr.Wt.Dt(e,t.ln(0)),t.un()}Kn(e,t){const r=new Es;return fr.Wt.Dt(br(this.databaseId,t),r.ln((function(s){const o=ur(s);return o.length===0?0:o[o.length-1].kind})(e))),r.un()}xn(e,t,r){if(r===null)return[];let i=[];i.push(new Es);let s=0;for(const o of ur(e)){const c=r[s++];for(const u of i)if(this.qn(t,o.fieldPath)&&so(c))i=this.Un(i,o,c);else{const l=u.ln(o.kind);fr.Wt.Dt(c,l)}}return this.$n(i)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const c of i){const u=new Es;u.seed(c.un()),fr.Wt.Dt(o,u.ln(t.kind)),s.push(u)}return s}qn(e,t){return!!e.filters.find((r=>r instanceof ce&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=Ts(e),i=Zr(e);return(t?r.H(Ju,IDBKeyRange.bound(t,t)):r.H()).next((s=>{const o=[];return P.forEach(s,(c=>i.get([c.indexId,this.uid]).next((u=>{o.push((function(d,f){const p=f?new yi(f.sequenceNumber,new It(Cr(f.readTime),new q(xt(f.documentKey)),f.largestBatchId)):yi.empty(),y=d.fields.map((([b,A])=>new Ir(Ae.fromServerFormat(b),A)));return new _i(d.indexId,d.collectionGroup,y,p)})(c,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const i=Ts(e),s=Zr(e);return this.Wn(e).next((o=>i.H(Ju,IDBKeyRange.bound(t,t)).next((c=>P.forEach(c,(u=>s.put(Tm(u.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return P.forEach(t,((i,s)=>{const o=r.get(i.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next((c=>(r.set(i.collectionGroup,c),P.forEach(c,(u=>this.Qn(e,i,u).next((l=>{const d=this.Gn(s,u);return l.isEqual(d)?P.resolve():this.zn(e,s,u,l,d)})))))))}))}jn(e,t,r,i){return Xr(e).put(i.Rn(this.uid,this.Kn(r,t.key),t.key))}Hn(e,t,r,i){return Xr(e).delete(i.An(this.uid,this.Kn(r,t.key),t.key))}Qn(e,t,r){const i=Xr(e);let s=new me(En);return i.ee({index:__,range:IDBKeyRange.only([r.indexId,this.uid,Ta(this.Kn(r,t))])},((o,c)=>{s=s.add(new mr(r.indexId,t,Sm(c.arrayValue),Sm(c.directionalValue)))})).next((()=>s))}Gn(e,t){let r=new me(En);const i=this.kn(t,e);if(i==null)return r;const s=Ku(t);if(s!=null){const o=e.data.field(s.fieldPath);if(so(o))for(const c of o.arrayValue.values||[])r=r.add(new mr(t.indexId,e.key,this.Nn(c),i))}else r=r.add(new mr(t.indexId,e.key,ta,i));return r}zn(e,t,r,i,s){O(km,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,l,d,f,p){const y=u.getIterator(),b=l.getIterator();let A=Jr(y),S=Jr(b);for(;A||S;){let V=!1,L=!1;if(A&&S){const M=d(A,S);M<0?L=!0:M>0&&(V=!0)}else A!=null?L=!0:V=!0;V?(f(S),S=Jr(b)):L?(p(A),A=Jr(y)):(A=Jr(y),S=Jr(b))}})(i,s,En,(c=>{o.push(this.jn(e,t,r,c))}),(c=>{o.push(this.Hn(e,t,r,c))})),P.waitFor(o)}Wn(e){let t=1;return Zr(e).ee({index:g_,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,i,s)=>{s.done(),t=i.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,c)=>En(o,c))).filter(((o,c,u)=>!c||En(o,u[c-1])!==0));const i=[];i.push(e);for(const o of r){const c=En(o,e),u=En(o,t);if(c===0)i[0]=e.En();else if(c>0&&u<0)i.push(o),i.push(o.En());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Jn(i[o],i[o+1]))return[];const c=i[o].An(this.uid,ta,q.empty()),u=i[o+1].An(this.uid,ta,q.empty());s.push(IDBKeyRange.bound(c,u))}return s}Jn(e,t){return En(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Vm)}getMinOffset(e,t){return P.mapArray(this.vn(t),(r=>this.Fn(e,r).next((i=>i||$(44426))))).next(Vm)}}function Dm(n){return je(n,to)}function Xr(n){return je(n,Bs)}function Ts(n){return je(n,Jl)}function Zr(n){return je(n,Us)}function Vm(n){Q(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Hl(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new It(e.readTime,e.documentKey,t)}/**
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
 */const Nm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ry=41943040;class et{static withCacheSize(e){return new et(e,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function Sy(n,e,t){const r=n.store(vt),i=n.store(Ii),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.ee({range:o},((d,f,p)=>(c++,p.delete())));s.push(u.next((()=>{Q(c===1,47070,{batchId:t.batchId})})));const l=[];for(const d of t.mutations){const f=f_(e,d.key.path,t.batchId);s.push(i.delete(f)),l.push(d.key)}return P.waitFor(s).next((()=>l))}function za(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw $(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */et.DEFAULT_COLLECTION_PERCENTILE=10,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,et.DEFAULT=new et(Ry,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),et.DISABLED=new et(-1,0,0);class vc{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static wt(e,t,r,i){Q(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new vc(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tn(e).ee({index:gr,range:r},((i,s,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,i){const s=si(e),o=Tn(e);return o.add({}).next((c=>{Q(typeof c=="number",49019);const u=new oh(c,t,r,i),l=(function(y,b,A){const S=A.baseMutations.map((L=>co(y.yt,L))),V=A.mutations.map((L=>co(y.yt,L)));return{userId:b,batchId:A.batchId,localWriteTimeMs:A.localWriteTime.toMillis(),baseMutations:S,mutations:V}})(this.serializer,this.userId,u),d=[];let f=new me(((p,y)=>Z(p.canonicalString(),y.canonicalString())));for(const p of i){const y=f_(this.userId,p.key.path,c);f=f.add(p.key.path.popLast()),d.push(o.put(l)),d.push(s.put(y,cR))}return f.forEach((p=>{d.push(this.indexManager.addToCollectionParentIndex(e,p))})),e.addOnCommittedListener((()=>{this.Zn[c]=u.keys()})),P.waitFor(d).next((()=>u))}))}lookupMutationBatch(e,t){return Tn(e).get(t).next((r=>r?(Q(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),dr(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?P.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const i=r.keys();return this.Zn[t]=i,i}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Tn(e).ee({index:gr,range:i},((o,c,u)=>{c.userId===this.userId&&(Q(c.batchId>=r,47524,{Yn:r}),s=dr(this.serializer,c)),u.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Ln;return Tn(e).ee({index:gr,range:t,reverse:!0},((i,s,o)=>{r=s.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ln],[this.userId,Number.POSITIVE_INFINITY]);return Tn(e).H(gr,t).next((r=>r.map((i=>dr(this.serializer,i)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=pa(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return si(e).ee({range:i},((o,c,u)=>{const[l,d,f]=o,p=xt(d);if(l===this.userId&&t.path.isEqual(p))return Tn(e).get(f).next((y=>{if(!y)throw $(61480,{er:o,batchId:f});Q(y.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:y.userId,batchId:f}),s.push(dr(this.serializer,y))}));u.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(Z);const i=[];return t.forEach((s=>{const o=pa(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=si(e).ee({range:c},((l,d,f)=>{const[p,y,b]=l,A=xt(y);p===this.userId&&s.path.isEqual(A)?r=r.add(b):f.done()}));i.push(u)})),P.waitFor(i).next((()=>this.tr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=pa(this.userId,r),o=IDBKeyRange.lowerBound(s);let c=new me(Z);return si(e).ee({range:o},((u,l,d)=>{const[f,p,y]=u,b=xt(p);f===this.userId&&r.isPrefixOf(b)?b.length===i&&(c=c.add(y)):d.done()})).next((()=>this.tr(e,c)))}tr(e,t){const r=[],i=[];return t.forEach((s=>{i.push(Tn(e).get(s).next((o=>{if(o===null)throw $(35274,{batchId:s});Q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(dr(this.serializer,o))})))})),P.waitFor(i).next((()=>r))}removeMutationBatch(e,t){return Sy(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.nr(t.batchId)})),P.forEach(r,(i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return P.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),i=[];return si(e).ee({range:r},((s,o,c)=>{if(s[0]===this.userId){const u=xt(s[1]);i.push(u)}else c.done()})).next((()=>{Q(i.length===0,56720,{rr:i.map((s=>s.canonicalString()))})}))}))}containsKey(e,t){return Py(e,this.userId,t)}ir(e){return Cy(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ln,lastStreamToken:""}))}}function Py(n,e,t){const r=pa(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return si(n).ee({range:s,Y:!0},((c,u,l)=>{const[d,f,p]=c;d===e&&f===i&&(o=!0),l.done()})).next((()=>o))}function Tn(n){return je(n,vt)}function si(n){return je(n,Ii)}function Cy(n){return je(n,Zs)}/**
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
 */class kr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new kr(0)}static ar(){return new kr(-1)}}/**
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
 */class NS{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next((t=>{const r=new kr(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ur(e).next((t=>X.fromTimestamp(new de(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ur(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.ur(e).next((i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.cr(e,i))))}addTargetData(e,t){return this.lr(e,t).next((()=>this.ur(e).next((r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>ei(e).delete(t.targetId))).next((()=>this.ur(e))).next((r=>(Q(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r))))}removeTargets(e,t,r){let i=0;const s=[];return ei(e).ee(((o,c)=>{const u=Vs(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))})).next((()=>P.waitFor(s))).next((()=>i))}forEachTarget(e,t){return ei(e).ee(((r,i)=>{const s=Vs(i);t(s)}))}ur(e){return xm(e).get(Ma).next((t=>(Q(t!==null,2888),t)))}cr(e,t){return xm(e).put(Ma,t)}lr(e,t){return ei(e).put(vy(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Ar(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ei(e).ee({range:i,index:p_},((o,c,u)=>{const l=Vs(c);vo(t,l.target)&&(s=l,u.done())})).next((()=>s))}addMatchingKeys(e,t,r){const i=[],s=Cn(e);return t.forEach((o=>{const c=tt(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))})),P.waitFor(i)}removeMatchingKeys(e,t,r){const i=Cn(e);return P.forEach(t,(s=>{const o=tt(s.path);return P.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])}))}removeMatchingKeysForTargetId(e,t){const r=Cn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Cn(e);let s=te();return i.ee({range:r,Y:!0},((o,c,u)=>{const l=xt(o[1]),d=new q(l);s=s.add(d)})).next((()=>s))}containsKey(e,t){const r=tt(t.path),i=IDBKeyRange.bound([r],[i_(r)],!1,!0);let s=0;return Cn(e).ee({index:Ql,Y:!0,range:i},(([o,c],u,l)=>{o!==0&&(s++,l.done())})).next((()=>s>0))}At(e,t){return ei(e).get(t).next((r=>r?Vs(r):null))}}function ei(n){return je(n,wi)}function xm(n){return je(n,wr)}function Cn(n){return je(n,Ei)}/**
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
 */const Om="LruGarbageCollector",ky=1048576;function Mm([n,e],[t,r]){const i=Z(n,t);return i===0?Z(e,r):i}class xS{constructor(e){this.Pr=e,this.buffer=new me(Mm),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Mm(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Dy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){O(Om,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Kn(t)?O(Om,"Ignoring IndexedDB error during garbage collection: ",t):await Hn(t)}await this.Ar(3e5)}))}}class OS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(ot.ce);const r=new xS(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Nm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nm):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,s,o,c,u,l;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i)))).next((f=>(r=f,c=Date.now(),this.removeTargets(e,r,t)))).next((f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((f=>(l=Date.now(),ni()<=ae.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${f} documents in `+(l-u)+`ms
Total Duration: ${l-d}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f}))))}}function Vy(n,e){return new OS(n,e)}/**
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
 */class MS{constructor(e,t){this.db=e,this.garbageCollector=Vy(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,((r,i)=>t(i)))}addReference(e,t,r){return na(e,r)}removeReference(e,t,r){return na(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return na(e,t)}wr(e,t){return(function(i,s){let o=!1;return Cy(i).te((c=>Py(i,c,s).next((u=>(u&&(o=!0),P.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.yr(e,((o,c)=>{if(c<=t){const u=this.wr(e,o).next((l=>{if(!l)return s++,r.getEntry(e,o).next((()=>(r.removeEntry(o,X.min()),Cn(e).delete((function(f){return[0,tt(f.path)]})(o)))))}));i.push(u)}})).next((()=>P.waitFor(i))).next((()=>r.apply(e))).next((()=>s))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return na(e,t)}yr(e,t){const r=Cn(e);let i,s=ot.ce;return r.ee({index:Ql},(([o,c],{path:u,sequenceNumber:l})=>{o===0?(s!==ot.ce&&t(new q(xt(i)),s),s=l,i=u):s=ot.ce})).next((()=>{s!==ot.ce&&t(new q(xt(i)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function na(n,e){return Cn(n).put((function(r,i){return{targetId:0,path:tt(r.path),sequenceNumber:i}})(e,n.currentSequenceNumber))}/**
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
 */class Ny{constructor(){this.changes=new ln((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class LS{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ar(e).put(r)}removeEntry(e,t,r){return ar(e).delete((function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ba(o),c[c.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.br(e,r))))}getEntry(e,t){let r=Ee.newInvalidDocument(t);return ar(e).ee({index:ga,range:IDBKeyRange.only(vs(t))},((i,s)=>{r=this.Sr(t,s)})).next((()=>r))}Dr(e,t){let r={size:0,document:Ee.newInvalidDocument(t)};return ar(e).ee({index:ga,range:IDBKeyRange.only(vs(t))},((i,s)=>{r={document:this.Sr(t,s),size:za(s)}})).next((()=>r))}getEntries(e,t){let r=ct();return this.Cr(e,t,((i,s)=>{const o=this.Sr(i,s);r=r.insert(i,o)})).next((()=>r))}vr(e,t){let r=ct(),i=new Ie(q.comparator);return this.Cr(e,t,((s,o)=>{const c=this.Sr(s,o);r=r.insert(s,c),i=i.insert(s,za(o))})).next((()=>({documents:r,Fr:i})))}Cr(e,t,r){if(t.isEmpty())return P.resolve();let i=new me(Um);t.forEach((u=>i=i.add(u)));const s=IDBKeyRange.bound(vs(i.first()),vs(i.last())),o=i.getIterator();let c=o.getNext();return ar(e).ee({index:ga,range:s},((u,l,d)=>{const f=q.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;c&&Um(c,f)<0;)r(c,null),c=o.getNext();c&&c.isEqual(f)&&(r(c,l),c=o.hasNext()?o.getNext():null),c?d.j(vs(c)):d.done()})).next((()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Ba(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ar(e).H(IDBKeyRange.bound(c,u,!0)).next((l=>{s?.incrementDocumentReadCount(l.length);let d=ct();for(const f of l){const p=this.Sr(q.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);p.isFoundDocument()&&(Ao(t,p)||i.has(p.key))&&(d=d.insert(p.key,p))}return d}))}getAllFromCollectionGroup(e,t,r,i){let s=ct();const o=Fm(t,r),c=Fm(t,It.max());return ar(e).ee({index:m_,range:IDBKeyRange.bound(o,c,!0)},((u,l,d)=>{const f=this.Sr(q.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(f.key,f),s.size===i&&d.done()})).next((()=>s))}newChangeBuffer(e){return new FS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Lm(e).get(Qu).next((t=>(Q(!!t,20021),t)))}br(e,t){return Lm(e).put(Qu,t)}Sr(e,t){if(t){const r=vS(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Ee.newInvalidDocument(e)}}function xy(n){return new LS(n)}class FS extends Ny{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new ln((r=>r.toString()),((r,i)=>r.isEqual(i)))}applyChanges(e){const t=[];let r=0,i=new me(((s,o)=>Z(s.canonicalString(),o.canonicalString())));return this.changes.forEach(((s,o)=>{const c=this.Or.get(s);if(t.push(this.Mr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=wm(this.Mr.serializer,o);i=i.add(s.path.popLast());const l=za(u);r+=l-c.size,t.push(this.Mr.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){const u=wm(this.Mr.serializer,o.convertToNoDocument(X.min()));t.push(this.Mr.addEntry(e,s,u))}})),i.forEach((s=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,s))})),t.push(this.Mr.updateMetadata(e,r)),P.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next((r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Mr.vr(e,t).next((({documents:r,Fr:i})=>(i.forEach(((s,o)=>{this.Or.set(s,{size:o,readTime:r.get(s).readTime})})),r)))}}function Lm(n){return je(n,eo)}function ar(n){return je(n,Oa)}function vs(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Fm(n,e){const t=e.documentKey.path.toArray();return[n,Ba(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Um(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=Z(t[s],r[s]),i)return i;return i=Z(t.length,r.length),i||(i=Z(t[t.length-2],r[r.length-2]),i||Z(t[t.length-1],r[r.length-1]))}/**
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
 */class US{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Oy{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&js(r.mutation,i,at.empty(),de.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,te()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=te()){const i=Ot();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let o=ks();return s.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Ot();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,te())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,i){let s=ct();const o=zs(),c=(function(){return zs()})();return t.forEach(((u,l)=>{const d=r.get(l.key);i.has(l.key)&&(d===void 0||d.mutation instanceof hn)?s=s.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),js(d.mutation,l,d.mutation.getFieldMask(),de.now())):o.set(l.key,at.empty())})),this.recalculateAndSaveOverlays(e,s).next((u=>(u.forEach(((l,d)=>o.set(l,d))),t.forEach(((l,d)=>c.set(l,new US(d,o.get(l)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=zs();let i=new Ie(((o,c)=>o-c)),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const l=t.get(u);if(l===null)return;let d=r.get(u)||at.empty();d=c.applyToLocalView(l,d),r.set(u,d);const f=(i.get(c.batchId)||te()).add(u);i=i.insert(c.batchId,f)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),l=u.key,d=u.value,f=Q_();d.forEach((p=>{if(!s.has(p)){const y=ny(t.get(p),r.get(p));y!==null&&f.set(p,y),s=s.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return P.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return $R(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):P.resolve(Ot());let c=gi,u=s;return o.next((l=>P.forEach(l,((d,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),s.get(d)?P.resolve():this.remoteDocumentCache.getEntry(e,d).next((p=>{u=u.insert(d,p)}))))).next((()=>this.populateOverlays(e,l,s))).next((()=>this.computeViews(e,u,l,te()))).next((d=>({batchId:c,changes:K_(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next((r=>{let i=ks();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ks();return this.indexManager.getCollectionParents(e,s).next((c=>P.forEach(c,(u=>{const l=(function(f,p){return new un(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next((d=>{d.forEach(((f,p)=>{o=o.insert(f,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((o=>{s.forEach(((u,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,Ee.newInvalidDocument(d)))}));let c=ks();return o.forEach(((u,l)=>{const d=s.get(u);d!==void 0&&js(d.mutation,l,at.empty(),de.now()),Ao(t,l)&&(c=c.insert(u,l))})),c}))}}/**
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
 */class BS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Me(i.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:Ec(i.bundledQuery),readTime:Me(i.readTime)}})(t)),P.resolve()}}/**
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
 */class qS{constructor(){this.overlays=new Ie(q.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ot();return P.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.bt(e,t,s)})),P.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.Lr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const i=Ot(),s=t.length+1,o=new q(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ie(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let d=s.get(l.largestBatchId);d===null&&(d=Ot(),s=s.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const c=Ot(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((l,d)=>c.set(l,d))),!(c.size()>=i)););return P.resolve(c)}bt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ch(t,r));let s=this.Lr.get(t);s===void 0&&(s=te(),this.Lr.set(t,s)),this.Lr.set(t,s.add(r.key))}}/**
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
 */class zS{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class fh{constructor(){this.kr=new me($e.Kr),this.qr=new me($e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new $e(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new $e(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new q(new se([])),r=new $e(t,e),i=new $e(t,e+1),s=[];return this.qr.forEachInRange([r,i],(o=>{this.Wr(o),s.push(o.key)})),s}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new q(new se([])),r=new $e(t,e),i=new $e(t,e+1);let s=te();return this.qr.forEachInRange([r,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new $e(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return q.comparator(e.key,t.key)||Z(e.Hr,t.Hr)}static Ur(e,t){return Z(e.Hr,t.Hr)||q.comparator(e.key,t.key)}}/**
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
 */class jS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new me($e.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oh(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Jr=this.Jr.add(new $e(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ln:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),i=new $e(t,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],(o=>{const c=this.Zr(o.Hr);s.push(c)})),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(Z);return t.forEach((i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],(c=>{r=r.add(c.Hr)}))})),P.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new $e(new q(s),0);let c=new me(Z);return this.Jr.forEachWhile((u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(c=c.add(u.Hr)),!0)}),o),P.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Q(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return P.forEach(t.mutations,(i=>{const s=new $e(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,t){const r=new $e(t,0),i=this.Jr.firstAfterOrEqual(r);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class GS{constructor(e){this.ti=e,this.docs=(function(){return new Ie(q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))})),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ct();const o=t.path,c=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:l,value:{document:d}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Hl(c_(d),r)<=0||(i.has(d.key)||Ao(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,t,r,i){$(9500)}ni(e,t){return P.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new $S(this)}getSize(e){return P.resolve(this.size)}}class $S extends Ny{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)})),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class WS{constructor(e){this.persistence=e,this.ri=new ln((t=>Ar(t)),vo),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new fh,this.targetCount=0,this.oi=kr._r()}forEachTarget(e,t){return this.ri.forEach(((r,i)=>t(i))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new kr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),P.waitFor(s).next((()=>i))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),P.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class mh{constructor(e,t){this._i={},this.overlays={},this.ai=new ot(0),this.ui=!1,this.ui=!0,this.ci=new zS,this.referenceDelegate=e(this),this.li=new WS(this),this.indexManager=new DS,this.remoteDocumentCache=(function(i){return new GS(i)})((r=>this.referenceDelegate.hi(r))),this.serializer=new Ty(t),this.Pi=new BS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new jS(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const i=new HS(this.ai.next());return this.referenceDelegate.Ti(),r(i).next((s=>this.referenceDelegate.Ii(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return P.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class HS extends l_{constructor(e){super(),this.currentSequenceNumber=e}}class bc{constructor(e){this.persistence=e,this.Ri=new fh,this.Ai=null}static Vi(e){return new bc(e)}get di(){if(this.Ai)return this.Ai;throw $(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.di.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(r=>{const i=q.fromPath(r);return this.mi(e,i).next((s=>{s||t.removeEntry(i,X.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ja{constructor(e,t){this.persistence=e,this.fi=new ln((r=>tt(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Vy(this,t)}static Vi(e,t){return new ja(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return P.forEach(this.fi,((r,i)=>this.wr(e,r,i).next((s=>s?P.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,s.removeEntry(o,X.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ya(e.data.value)),t}wr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return P.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class KS{constructor(e){this.serializer=e}k(e,t,r,i){const s=new lc("createOrUpgrade",t);r<1&&i>=1&&((function(u){u.createObjectStore(To)})(e),(function(u){u.createObjectStore(Zs,{keyPath:aR}),u.createObjectStore(vt,{keyPath:Jf,autoIncrement:!0}).createIndex(gr,Yf,{unique:!0}),u.createObjectStore(Ii)})(e),Bm(e),(function(u){u.createObjectStore(lr)})(e));let o=P.resolve();return r<3&&i>=3&&(r!==0&&((function(u){u.deleteObjectStore(Ei),u.deleteObjectStore(wi),u.deleteObjectStore(wr)})(e),Bm(e)),o=o.next((()=>(function(u){const l=u.store(wr),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return l.put(Ma,d)})(s)))),r<4&&i>=4&&(r!==0&&(o=o.next((()=>(function(u,l){return l.store(vt).H().next((f=>{u.deleteObjectStore(vt),u.createObjectStore(vt,{keyPath:Jf,autoIncrement:!0}).createIndex(gr,Yf,{unique:!0});const p=l.store(vt),y=f.map((b=>p.put(b)));return P.waitFor(y)}))})(e,s)))),o=o.next((()=>{(function(u){u.createObjectStore(Ti,{keyPath:gR})})(e)}))),r<5&&i>=5&&(o=o.next((()=>this.gi(s)))),r<6&&i>=6&&(o=o.next((()=>((function(u){u.createObjectStore(eo)})(e),this.pi(s))))),r<7&&i>=7&&(o=o.next((()=>this.yi(s)))),r<8&&i>=8&&(o=o.next((()=>this.wi(e,s)))),r<9&&i>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&i>=10&&(o=o.next((()=>this.bi(s)))),r<11&&i>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(hc,{keyPath:_R})})(e),(function(u){u.createObjectStore(dc,{keyPath:yR})})(e)}))),r<12&&i>=12&&(o=o.next((()=>{(function(u){const l=u.createObjectStore(fc,{keyPath:AR});l.createIndex(Yu,RR,{unique:!1}),l.createIndex(y_,SR,{unique:!1})})(e)}))),r<13&&i>=13&&(o=o.next((()=>(function(u){const l=u.createObjectStore(Oa,{keyPath:uR});l.createIndex(ga,lR),l.createIndex(m_,hR)})(e))).next((()=>this.Si(e,s))).next((()=>e.deleteObjectStore(lr)))),r<14&&i>=14&&(o=o.next((()=>this.Di(e,s)))),r<15&&i>=15&&(o=o.next((()=>(function(u){u.createObjectStore(Jl,{keyPath:IR,autoIncrement:!0}).createIndex(Ju,wR,{unique:!1}),u.createObjectStore(Us,{keyPath:ER}).createIndex(g_,TR,{unique:!1}),u.createObjectStore(Bs,{keyPath:vR}).createIndex(__,bR,{unique:!1})})(e)))),r<16&&i>=16&&(o=o.next((()=>{t.objectStore(Us).clear()})).next((()=>{t.objectStore(Bs).clear()}))),r<17&&i>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(Yl,{keyPath:PR})})(e)}))),r<18&&i>=18&&Xp()&&(o=o.next((()=>{t.objectStore(Us).clear()})).next((()=>{t.objectStore(Bs).clear()}))),o}pi(e){let t=0;return e.store(lr).ee(((r,i)=>{t+=za(i)})).next((()=>{const r={byteSize:t};return e.store(eo).put(Qu,r)}))}gi(e){const t=e.store(Zs),r=e.store(vt);return t.H().next((i=>P.forEach(i,(s=>{const o=IDBKeyRange.bound([s.userId,Ln],[s.userId,s.lastAcknowledgedBatchId]);return r.H(gr,o).next((c=>P.forEach(c,(u=>{Q(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const l=dr(this.serializer,u);return Sy(e,s.userId,l).next((()=>{}))}))))}))))}yi(e){const t=e.store(Ei),r=e.store(lr);return e.store(wr).get(Ma).next((i=>{const s=[];return r.ee(((o,c)=>{const u=new se(o),l=(function(f){return[0,tt(f)]})(u);s.push(t.get(l).next((d=>d?P.resolve():(f=>t.put({targetId:0,path:tt(f),sequenceNumber:i.highestListenSequenceNumber}))(u))))})).next((()=>P.waitFor(s)))}))}wi(e,t){e.createObjectStore(to,{keyPath:pR});const r=t.store(to),i=new dh,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:tt(u)})}};return t.store(lr).ee({Y:!0},((o,c)=>{const u=new se(o);return s(u.popLast())})).next((()=>t.store(Ii).ee({Y:!0},(([o,c,u],l)=>{const d=xt(c);return s(d.popLast())}))))}bi(e){const t=e.store(wi);return t.ee(((r,i)=>{const s=Vs(i),o=vy(this.serializer,s);return t.put(o)}))}Si(e,t){const r=t.store(lr),i=[];return r.ee(((s,o)=>{const c=t.store(Oa),u=(function(f){return f.document?new q(se.fromString(f.document.name).popFirst(5)):f.noDocument?q.fromSegments(f.noDocument.path):f.unknownDocument?q.fromSegments(f.unknownDocument.path):$(36783)})(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(l))})).next((()=>P.waitFor(i)))}Di(e,t){const r=t.store(vt),i=xy(this.serializer),s=new mh(bc.Vi,this.serializer.yt);return r.H().next((o=>{const c=new Map;return o.forEach((u=>{let l=c.get(u.userId)??te();dr(this.serializer,u).keys().forEach((d=>l=l.add(d))),c.set(u.userId,l)})),P.forEach(c,((u,l)=>{const d=new We(l),f=Tc.wt(this.serializer,d),p=s.getIndexManager(d),y=vc.wt(d,this.serializer,p,s.referenceDelegate);return new Oy(i,y,f,p).recalculateAndSaveOverlaysForDocumentKeys(new Xu(t,ot.ce),u).next()}))}))}}function Bm(n){n.createObjectStore(Ei,{keyPath:fR}).createIndex(Ql,mR,{unique:!0}),n.createObjectStore(wi,{keyPath:"targetId"}).createIndex(p_,dR,{unique:!0}),n.createObjectStore(wr)}const vn="IndexedDbPersistence",vu=18e5,bu=5e3,Au="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",My="main";class ph{constructor(e,t,r,i,s,o,c,u,l,d,f=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=s,this.window=o,this.document=c,this.Fi=l,this.Mi=d,this.xi=f,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=p=>Promise.resolve(),!ph.v())throw new x(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new MS(this,i),this.Ki=t+My,this.serializer=new Ty(u),this.qi=new Lt(this.Ki,this.xi,new KS(this.serializer)),this.ci=new AS,this.li=new NS(this.referenceDelegate,this.serializer),this.remoteDocumentCache=xy(this.serializer),this.Pi=new bS,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,d===!1&&Oe(vn,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(k.FAILED_PRECONDITION,Au);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.li.getHighestSequenceNumber(e)))})).then((e=>{this.ai=new ot(e,this.Fi)})).then((()=>{this.ui=!0})).catch((e=>(this.qi&&this.qi.close(),Promise.reject(e))))}zi(e){return this.ki=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.q((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget((async()=>{this.started&&await this.$i()})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ra(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ji(e).next((t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Ji(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(Kn(e))return O(vn,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return O(vn,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable((()=>this.ki(e))),this.isPrimary=e}))}ji(e){return bs(e).get(Qr).next((t=>P.resolve(this.Xi(t))))}Yi(e){return ra(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,vu)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=je(t,Ti);return r.H().next((i=>{const s=this.ns(i,vu),o=i.filter((c=>s.indexOf(c)===-1));return P.forEach(o,(c=>r.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.$i().then((()=>this.es())).then((()=>this.Gi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.Mi?P.resolve(!0):bs(e).get(Qr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,bu)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new x(k.FAILED_PRECONDITION,Au);return!1}}return!(!this.networkEnabled||!this.inForeground)||ra(e).H().next((r=>this.ns(r,bu).find((i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&O(vn,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.qi.runTransaction("shutdown","readwrite",[To,Ti],(e=>{const t=new Xu(e,ot.ce);return this.Ji(t).next((()=>this.Yi(t)))})),this.qi.close(),this.ls()}ns(e,t){return e.filter((r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId)))}hs(){return this.runTransaction("getActiveClients","readonly",(e=>ra(e).H().next((t=>this.ns(t,vu).map((r=>r.clientId))))))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return vc.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new VS(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Tc.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){O(vn,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(function(u){return u===18?DR:u===17?T_:u===16?kR:u===15?Xl:u===14?E_:u===13?w_:u===12?CR:u===11?I_:void $(60245)})(this.xi);let o;return this.qi.runTransaction(e,i,s,(c=>(o=new Xu(c,this.ai?this.ai.next():ot.ce),t==="readwrite-primary"?this.ji(o).next((u=>!!u||this.Hi(o))).next((u=>{if(!u)throw Oe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))),new x(k.FAILED_PRECONDITION,u_);return r(o)})).next((u=>this.Zi(o).next((()=>u)))):this.Ps(o).next((()=>r(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Ps(e){return bs(e).get(Qr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,bu)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new x(k.FAILED_PRECONDITION,Au)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return bs(e).put(Qr,t)}static v(){return Lt.v()}Ji(e){const t=bs(e);return t.get(Qr).next((r=>this.Xi(r)?(O(vn,"Releasing primary lease."),t.delete(Qr)):P.resolve()))}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Oe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.$i())))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){typeof this.window?.addEventListener=="function"&&(this.Oi=()=>{this._s();const e=/(?:Version|Mobile)\/1[456]/;Yp()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){try{const t=this.Ui?.getItem(this.rs(e))!==null;return O(vn,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return Oe(vn,"Failed to get zombied client id.",t),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){Oe("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function bs(n){return je(n,To)}function ra(n){return je(n,Ti)}function gh(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class _h{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=i}static Es(e,t){let r=te(),i=te();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _h(e,t.fromCache,r,i)}}/**
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
 */class QS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ly{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Yp()?8:h_(ze())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.gs(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ps(e,t,i,r).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new QS;return this.ys(e,t,o).next((c=>{if(s.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>s.result))}ws(e,t,r,i){return r.documentReadCount<this.Vs?(ni()<=ae.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",ri(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(ni()<=ae.DEBUG&&O("QueryEngine","Query:",ri(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ni()<=ae.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",ri(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):P.resolve())}gs(e,t){if(lm(t))return P.resolve(null);let r=nt(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Ua(t,null,"F"),r=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const o=te(...s);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const l=this.bs(t,c);return this.Ss(t,l,o,u.readTime)?this.gs(e,Ua(t,null,"F")):this.Ds(e,l,t,u)}))))})))))}ps(e,t,r,i){return lm(t)||i.isEqual(X.min())?P.resolve(null):this.fs.getDocuments(e,r).next((s=>{const o=this.bs(t,s);return this.Ss(t,o,r,i)?P.resolve(null):(ni()<=ae.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ri(t)),this.Ds(e,o,t,a_(i,gi)).next((c=>c)))}))}bs(e,t){let r=new me(W_(e));return t.forEach(((i,s)=>{Ao(e,s)&&(r=r.add(s))})),r}Ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,t,r){return ni()<=ae.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",ri(t)),this.fs.getDocumentsMatchingQuery(e,t,It.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
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
 */const yh="LocalStore",JS=3e8;class YS{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new Ie(Z),this.Fs=new ln((s=>Ar(s)),vo),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Oy(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Fy(n,e,t,r){return new YS(n,e,t,r)}async function Uy(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const o=[],c=[];let u=te();for(const l of i){o.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}for(const l of s){c.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next((l=>({Ns:l,removedBatchIds:o,addedBatchIds:c})))}))}))}function XS(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),s=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,u,l,d){const f=l.batch,p=f.keys();let y=P.resolve();return p.forEach((b=>{y=y.next((()=>d.getEntry(u,b))).next((A=>{const S=l.docVersions.get(b);Q(S!==null,48541),A.version.compareTo(S)<0&&(f.applyToRemoteDocument(A,l),A.isValidDocument()&&(A.setReadTime(l.commitVersion),d.addEntry(A)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(u,f)))})(t,r,e,s).next((()=>s.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=te();for(let l=0;l<c.mutationResults.length;++l)c.mutationResults[l].transformResults.length>0&&(u=u.add(c.batch.mutations[l].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function By(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function ZS(n,e){const t=z(n),r=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach(((d,f)=>{const p=i.get(f);if(!p)return;c.push(t.li.removeMatchingKeys(s,d.removedDocuments,f).next((()=>t.li.addMatchingKeys(s,d.addedDocuments,f))));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Ve.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),(function(A,S,V){return A.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=JS?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(p,y,d)&&c.push(t.li.updateTargetData(s,y))}));let u=ct(),l=te();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))})),c.push(qy(s,o,e.documentUpdates).next((d=>{u=d.Bs,l=d.Ls}))),!r.isEqual(X.min())){const d=t.li.getLastRemoteSnapshotVersion(s).next((f=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,r)));c.push(d)}return P.waitFor(c).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,u,l))).next((()=>u))})).then((s=>(t.vs=i,s)))}function qy(n,e,t){let r=te(),i=te();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let o=ct();return t.forEach(((c,u)=>{const l=s.get(c);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):O(yh,"Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)})),{Bs:o,Ls:i}}))}function eP(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ln),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Ci(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.li.getTargetData(r,e).next((s=>s?(i=s,P.resolve(i)):t.li.allocateTargetId(r).next((o=>(i=new Kt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function ki(n,e,t){const r=z(n),i=r.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Kn(o))throw o;O(yh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Ga(n,e,t){const r=z(n);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,l,d){const f=z(u),p=f.Fs.get(d);return p!==void 0?P.resolve(f.vs.get(p)):f.li.getTargetData(l,d)})(r,o,nt(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((u=>{s=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:X.min(),t?s:te()))).next((c=>(Gy(r,$_(e),c),{documents:c,ks:s})))))}function zy(n,e){const t=z(n),r=z(t.li),i=t.vs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",(s=>r.At(s,e).next((o=>o?o.target:null))))}function jy(n,e){const t=z(n),r=t.Ms.get(e)||X.min();return t.persistence.runTransaction("Get new document changes","readonly",(i=>t.xs.getAllFromCollectionGroup(i,e,a_(r,gi),Number.MAX_SAFE_INTEGER))).then((i=>(Gy(t,e,i),i)))}function Gy(n,e,t){let r=n.Ms.get(e)||X.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.Ms.set(e,r)}async function tP(n,e,t,r){const i=z(n);let s=te(),o=ct();for(const l of t){const d=e.Ks(l.metadata.name);l.document&&(s=s.add(d));const f=e.qs(l);f.setReadTime(e.Us(l.metadata.readTime)),o=o.insert(d,f)}const c=i.xs.newChangeBuffer({trackRemovals:!0}),u=await Ci(i,(function(d){return nt(ji(se.fromString(`__bundle__/docs/${d}`)))})(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(l=>qy(l,c,o).next((d=>(c.apply(l),d))).next((d=>i.li.removeMatchingKeysForTargetId(l,u.targetId).next((()=>i.li.addMatchingKeys(l,s,u.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(l,d.Bs,d.Ls))).next((()=>d.Bs))))))}async function nP(n,e,t=te()){const r=await Ci(n,nt(Ec(e.bundledQuery))),i=z(n);return i.persistence.runTransaction("Save named query","readwrite",(s=>{const o=Me(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Pi.saveNamedQuery(s,e);const c=r.withResumeToken(Ve.EMPTY_BYTE_STRING,o);return i.vs=i.vs.insert(c.targetId,c),i.li.updateTargetData(s,c).next((()=>i.li.removeMatchingKeysForTargetId(s,r.targetId))).next((()=>i.li.addMatchingKeys(s,t,r.targetId))).next((()=>i.Pi.saveNamedQuery(s,e)))}))}/**
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
 */const $y="firestore_clients";function qm(n,e){return`${$y}_${n}_${e}`}const Wy="firestore_mutations";function zm(n,e,t){let r=`${Wy}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const Hy="firestore_targets";function Ru(n,e){return`${Hy}_${n}_${e}`}/**
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
 */const Vt="SharedClientState";class $a{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static $s(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new x(i.error.code,i.error.message))),o?new $a(e,t,i.state,s):(Oe(Vt,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Gs{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static $s(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new x(r.error.code,r.error.message))),s?new Gs(e,r.state,i):(Oe(Vt,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wa{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=rh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=d_(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Wa(e,s):(Oe(Vt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ih{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ih(t.clientId,t.onlineState):(Oe(Vt,`Failed to parse online state: ${e}`),null)}}class fl{constructor(){this.activeTargetIds=rh()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Su{constructor(e,t,r,i,s){this.window=e,this.Ci=t,this.persistenceKey=r,this.zs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Hs.bind(this),this.Js=new Ie(Z),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=qm(this.persistenceKey,this.zs),this.Ys=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.Js=this.Js.insert(this.zs,new fl),this.eo=new RegExp(`^${$y}_${o}_([^_]*)$`),this.no=new RegExp(`^${Wy}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${Hy}_${o}_(\\d+)$`),this.io=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.so=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.hs();for(const r of e){if(r===this.zs)continue;const i=this.getItem(qm(this.persistenceKey,r));if(i){const s=Wa.$s(r,i);s&&(this.Js=this.Js.insert(s.clientId,s))}}this.oo();const t=this.storage.getItem(this.io);if(t){const r=this._o(t);r&&this.ao(r)}for(const r of this.Zs)this.Hs(r);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Js)}isActiveQueryTarget(e){let t=!1;return this.Js.forEach(((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,t,r){this.co(e,t,r),this.lo(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Ru(this.persistenceKey,e));if(i){const s=Gs.$s(e,i);s&&(r=s.state)}}return t&&this.ho.Qs(e),this.oo(),r}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ru(this.persistenceKey,e))}updateQueryState(e,t,r){this.Po(e,t,r)}handleUserChange(e,t,r){t.forEach((i=>{this.lo(i)})),this.currentUser=e,r.forEach((i=>{this.addPendingMutation(i)}))}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Io(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return O(Vt,"READ",e,t),t}setItem(e,t){O(Vt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){O(Vt,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(O(Vt,"EVENT",t.key,t.newValue),t.key===this.Xs)return void Oe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.eo.test(t.key)){if(t.newValue==null){const r=this.Eo(t.key);return this.Ro(r,null)}{const r=this.Ao(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.no.test(t.key)){if(t.newValue!==null){const r=this.Vo(t.key,t.newValue);if(r)return this.mo(r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.fo(t.key,t.newValue);if(r)return this.po(r)}}else if(t.key===this.io){if(t.newValue!==null){const r=this._o(t.newValue);if(r)return this.ao(r)}}else if(t.key===this.Ys){const r=(function(s){let o=ot.ce;if(s!=null)try{const c=JSON.parse(s);Q(typeof c=="number",30636,{yo:s}),o=c}catch(c){Oe(Vt,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);r!==ot.ce&&this.sequenceNumberHandler(r)}else if(t.key===this.so){const r=this.wo(t.newValue);await Promise.all(r.map((i=>this.syncEngine.bo(i))))}}}else this.Zs.push(t)}))}}get ho(){return this.Js.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,t,r){const i=new $a(this.currentUser,e,t,r),s=zm(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}lo(e){const t=zm(this.persistenceKey,this.currentUser,e);this.removeItem(t)}To(e){const t={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(t))}Po(e,t,r){const i=Ru(this.persistenceKey,e),s=new Gs(e,t,r);this.setItem(i,s.Ws())}Io(e){const t=JSON.stringify(Array.from(e));this.setItem(this.so,t)}Eo(e){const t=this.eo.exec(e);return t?t[1]:null}Ao(e,t){const r=this.Eo(e);return Wa.$s(r,t)}Vo(e,t){const r=this.no.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return $a.$s(new We(s),i,t)}fo(e,t){const r=this.ro.exec(e),i=Number(r[1]);return Gs.$s(i,t)}_o(e){return Ih.$s(e)}wo(e){return JSON.parse(e)}async mo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.So(e.batchId,e.state,e.error);O(Vt,`Ignoring mutation for non-active user ${e.user.uid}`)}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Js.insert(e,t):this.Js.remove(e),i=this.uo(this.Js),s=this.uo(r),o=[],c=[];return s.forEach((u=>{i.has(u)||o.push(u)})),i.forEach((u=>{s.has(u)||c.push(u)})),this.syncEngine.Co(o,c).then((()=>{this.Js=r}))}ao(e){this.Js.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let t=rh();return e.forEach(((r,i)=>{t=t.unionWith(i.activeTargetIds)})),t}}class Ky{constructor(){this.vo=new fl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new fl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rP{Mo(e){}shutdown(){}}/**
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
 */const jm="ConnectivityMonitor";class Gm{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){O(jm,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){O(jm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ia=null;function ml(){return ia===null?ia=(function(){return 268435456+Math.round(2147483648*Math.random())})():ia++,"0x"+ia.toString(16)}/**
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
 */const Pu="RestConnection",iP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class sP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===ro?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=ml(),c=this.Qo(e,t.toUriEncodedString());O(Pu,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:l}=new URL(c),d=xr(l);return this.zo(e,c,u,r,d).then((f=>(O(Pu,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw yt(Pu,`RPC '${e}' ${o} failed with error: `,f,"url: ",c,"request:",r),f}))}jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Qo(e,t){const r=iP[e];let i=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class oP{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ze="WebChannelConnection",As=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(i){setTimeout((()=>{throw i}),0)}}))};class hi extends sP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!hi.c_){const e=e_();As(e,Zg.STAT_EVENT,(t=>{t.stat===Gu.PROXY?O(Ze,"STAT_EVENT: detected buffering proxy"):t.stat===Gu.NOPROXY&&O(Ze,"STAT_EVENT: detected no buffering proxy")})),hi.c_=!0}}zo(e,t,r,i,s){const o=ml();return new Promise(((c,u)=>{const l=new Yg;l.setWithCredentials(!0),l.listenOnce(Xg.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case ma.NO_ERROR:const f=l.getResponseJson();O(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),c(f);break;case ma.TIMEOUT:O(Ze,`RPC '${e}' ${o} timed out`),u(new x(k.DEADLINE_EXCEEDED,"Request time out"));break;case ma.HTTP_ERROR:const p=l.getStatus();if(O(Ze,`RPC '${e}' ${o} failed with status:`,p,"response text:",l.getResponseText()),p>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const b=y?.error;if(b&&b.status&&b.message){const A=(function(V){const L=V.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(L)>=0?L:k.UNKNOWN})(b.status);u(new x(A,b.message))}else u(new x(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new x(k.UNAVAILABLE,"Connection failed."));break;default:$(9055,{l_:e,streamId:o,h_:l.getLastErrorCode(),P_:l.getLastError()})}}finally{O(Ze,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(i);O(Ze,`RPC '${e}' ${o} sending request:`,i),l.send(t,"POST",d,r,15)}))}T_(e,t,r){const i=ml(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");O(Ze,`Creating RPC '${e}' stream ${i}: ${l}`,c);const d=o.createWebChannel(l,c);this.I_(d);let f=!1,p=!1;const y=new oP({Ho:b=>{p?O(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(f||(O(Ze,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),O(Ze,`RPC '${e}' stream ${i} sending:`,b),d.send(b))},Jo:()=>d.close()});return As(d,Cs.EventType.OPEN,(()=>{p||(O(Ze,`RPC '${e}' stream ${i} transport opened.`),y.i_())})),As(d,Cs.EventType.CLOSE,(()=>{p||(p=!0,O(Ze,`RPC '${e}' stream ${i} transport closed`),y.o_(),this.E_(d))})),As(d,Cs.EventType.ERROR,(b=>{p||(p=!0,yt(Ze,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),y.o_(new x(k.UNAVAILABLE,"The operation could not be completed")))})),As(d,Cs.EventType.MESSAGE,(b=>{if(!p){const A=b.data[0];Q(!!A,16349);const S=A,V=S?.error||S[0]?.error;if(V){O(Ze,`RPC '${e}' stream ${i} received error:`,V);const L=V.status;let M=(function(G){const E=Le[G];if(E!==void 0)return oy(E)})(L),B=V.message;L==="NOT_FOUND"&&B.includes("database")&&B.includes("does not exist")&&B.includes(this.databaseId.database)&&yt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=k.INTERNAL,B="Unknown error status: "+L+" with message "+V.message),p=!0,y.o_(new x(M,B)),d.close()}else O(Ze,`RPC '${e}' stream ${i} received:`,A),y.__(A)}})),hi.u_(),setTimeout((()=>{y.s_()}),0),y}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return t_()}}/**
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
 */function aP(n){return new hi(n)}/**
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
 */function Qy(){return typeof window<"u"?window:null}function va(){return typeof document<"u"?document:null}/**
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
 */function Fr(n){return new fS(n,!0)}/**
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
 */hi.c_=!1;class wh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const $m="PersistentStream";class Jy{constructor(e,t,r,i,s,o,c,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Oe(t.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new x(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return O($m,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(O($m,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cP extends Jy{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=gS(this.serializer,e),r=(function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Me(o.readTime):X.min()})(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=cl(this.serializer),t.addTarget=(function(s,o){let c;const u=o.target;if(c=La(u)?{documents:py(s,u)}:{query:wc(s,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ly(s,o.resumeToken);const l=ol(s,o.expectedCount);l!==null&&(c.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){c.readTime=Pi(s,o.snapshotVersion.toTimestamp());const l=ol(s,o.expectedCount);l!==null&&(c.expectedCount=l)}return c})(this.serializer,e);const r=yS(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=cl(this.serializer),t.removeTarget=e,this.K_(t)}}class uP extends Jy{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=_S(e.writeResults,e.commitTime),r=Me(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=cl(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>co(this.serializer,r)))};this.K_(t)}}/**
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
 */class lP{}class hP extends lP{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new x(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,al(t,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(k.UNKNOWN,s.toString())}))}jo(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,al(t,r),i,o,c,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(k.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function dP(n,e,t,r){return new hP(n,e,t,r)}class fP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Oe(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Dr="RemoteStore";class mP{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{Jn(this)&&(O(Dr,"Restarting streams for network reachability change."),await(async function(u){const l=z(u);l.Ea.add(4),await Wi(l),l.Va.set("Unknown"),l.Ea.delete(4),await Co(l)})(this))}))})),this.Va=new fP(r,i)}}async function Co(n){if(Jn(n))for(const e of n.Ra)await e(!0)}async function Wi(n){for(const e of n.Ra)await e(!1)}function Ac(n,e){const t=z(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),vh(t)?Th(t):Ki(t).O_()&&Eh(t,e))}function Di(n,e){const t=z(n),r=Ki(t);t.Ia.delete(e),r.O_()&&Yy(t,e),t.Ia.size===0&&(r.O_()?r.L_():Jn(t)&&t.Va.set("Unknown"))}function Eh(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ki(n).Z_(e)}function Yy(n,e){n.da.$e(e),Ki(n).X_(e)}function Th(n){n.da=new uS({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ki(n).start(),n.Va.ua()}function vh(n){return Jn(n)&&!Ki(n).x_()&&n.Ia.size>0}function Jn(n){return z(n).Ea.size===0}function Xy(n){n.da=void 0}async function pP(n){n.Va.set("Online")}async function gP(n){n.Ia.forEach(((e,t)=>{Eh(n,e)}))}async function _P(n,e){Xy(n),vh(n)?(n.Va.ha(e),Th(n)):n.Va.set("Unknown")}async function yP(n,e,t){if(n.Va.set("Online"),e instanceof uy&&e.state===2&&e.cause)try{await(async function(i,s){const o=s.cause;for(const c of s.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ia.delete(c),i.da.removeTarget(c))})(n,e)}catch(r){O(Dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ha(n,r)}else if(e instanceof Ea?n.da.Xe(e):e instanceof cy?n.da.st(e):n.da.tt(e),!t.isEqual(X.min()))try{const r=await By(n.localStore);t.compareTo(r)>=0&&await(function(s,o){const c=s.da.Tt(o);return c.targetChanges.forEach(((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(l);d&&s.Ia.set(l,d.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,l)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(Ve.EMPTY_BYTE_STRING,d.snapshotVersion)),Yy(s,u);const f=new Kt(d.target,u,l,d.sequenceNumber);Eh(s,f)})),s.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){O(Dr,"Failed to raise snapshot:",r),await Ha(n,r)}}async function Ha(n,e,t){if(!Kn(e))throw e;n.Ea.add(1),await Wi(n),n.Va.set("Offline"),t||(t=()=>By(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(Dr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Co(n)}))}function Zy(n,e){return e().catch((t=>Ha(n,t,e)))}async function Hi(n){const e=z(n),t=zn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ln;for(;IP(e);)try{const i=await eP(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,wP(e,i)}catch(i){await Ha(e,i)}eI(e)&&tI(e)}function IP(n){return Jn(n)&&n.Ta.length<10}function wP(n,e){n.Ta.push(e);const t=zn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function eI(n){return Jn(n)&&!zn(n).x_()&&n.Ta.length>0}function tI(n){zn(n).start()}async function EP(n){zn(n).ra()}async function TP(n){const e=zn(n);for(const t of n.Ta)e.ea(t.mutations)}async function vP(n,e,t){const r=n.Ta.shift(),i=ah.from(r,e,t);await Zy(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Hi(n)}async function bP(n,e){e&&zn(n).Y_&&await(async function(r,i){if((function(o){return sy(o)&&o!==k.ABORTED})(i.code)){const s=r.Ta.shift();zn(r).B_(),await Zy(r,(()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i))),await Hi(r)}})(n,e),eI(n)&&tI(n)}async function Wm(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),O(Dr,"RemoteStore received new credentials");const r=Jn(t);t.Ea.add(3),await Wi(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Co(t)}async function pl(n,e){const t=z(n);e?(t.Ea.delete(2),await Co(t)):e||(t.Ea.add(2),await Wi(t),t.Va.set("Unknown"))}function Ki(n){return n.ma||(n.ma=(function(t,r,i){const s=z(t);return s.sa(),new cP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:pP.bind(null,n),Yo:gP.bind(null,n),t_:_P.bind(null,n),J_:yP.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),vh(n)?Th(n):n.Va.set("Unknown")):(await n.ma.stop(),Xy(n))}))),n.ma}function zn(n){return n.fa||(n.fa=(function(t,r,i){const s=z(t);return s.sa(),new uP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:EP.bind(null,n),t_:bP.bind(null,n),ta:TP.bind(null,n),na:vP.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Hi(n)):(await n.fa.stop(),n.Ta.length>0&&(O(Dr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class bh{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new bh(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qi(n,e){if(Oe("AsyncQueue",`${e}: ${n}`),Kn(n))return new x(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Er{static emptySet(e){return new Er(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=ks(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Er)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Er;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Hm{constructor(){this.ga=new Ie(q.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):$(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Vr{constructor(e,t,r,i,s,o,c,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Vr(e,t,Er.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class AP{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class RP{constructor(){this.queries=Km(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=z(t),s=i.queries;i.queries=Km(),s.forEach(((o,c)=>{for(const u of c.ba)u.onError(r)}))})(this,new x(k.ABORTED,"Firestore shutting down"))}}function Km(){return new ln((n=>G_(n)),bo)}async function Ah(n,e){const t=z(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new AP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Qi(o,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.ba.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Sh(t)}async function Rh(n,e){const t=z(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function SP(n,e){const t=z(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.ba)c.Fa(i)&&(r=!0);o.wa=i}}r&&Sh(t)}function PP(n,e,t){const r=z(n),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(t);r.queries.delete(e)}function Sh(n){n.Ca.forEach((e=>{e.next()}))}var gl,Qm;(Qm=gl||(gl={})).Ma="default",Qm.Cache="cache";class Ph{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gl.Cache}}/**
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
 */class nI{constructor(e,t){this.qa=e,this.byteLength=t}Ua(){return"metadata"in this.qa}}/**
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
 */class Jm{constructor(e){this.serializer=e}Ks(e){return Ft(this.serializer,e)}qs(e){return e.metadata.exists?Ic(this.serializer,e.document,!1):Ee.newNoDocument(this.Ks(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return Me(e)}}class Ch{constructor(e,t){this.$a=e,this.serializer=t,this.Wa=[],this.Qa=[],this.collectionGroups=new Set,this.progress=rI(e)}get queries(){return this.Wa}get documents(){return this.Qa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.qa.namedQuery)this.Wa.push(e.qa.namedQuery);else if(e.qa.documentMetadata){this.Qa.push({metadata:e.qa.documentMetadata}),e.qa.documentMetadata.exists||++t;const r=se.fromString(e.qa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.qa.document&&(this.Qa[this.Qa.length-1].document=e.qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,r=new Jm(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ks(i.metadata.name);for(const o of i.metadata.queries){const c=(t.get(o)||te()).add(s);t.set(o,c)}}return t}async ja(e){const t=await tP(e,new Jm(this.serializer),this.Qa,this.$a.id),r=this.za(this.documents);for(const i of this.Wa)await nP(e,i,r.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Ha:this.collectionGroups,Ja:t}}}function rI(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class iI{constructor(e){this.key=e}}class sI{constructor(e){this.key=e}}class oI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=te(),this.mutatedKeys=te(),this.eu=W_(e),this.tu=new Er(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Hm,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((d,f)=>{const p=i.get(d),y=Ao(this.query,f)?f:null,b=!!p&&this.mutatedKeys.has(p.key),A=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let S=!1;p&&y?p.data.isEqual(y.data)?b!==A&&(r.track({type:3,doc:y}),S=!0):this.su(p,y)||(r.track({type:2,doc:y}),S=!0,(u&&this.eu(y,u)>0||l&&this.eu(y,l)<0)&&(c=!0)):!p&&y?(r.track({type:0,doc:y}),S=!0):p&&!y&&(r.track({type:1,doc:p}),S=!0,(u||l)&&(c=!0)),S&&(y?(o=o.add(y),s=A?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:c,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,f)=>(function(y,b){const A=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{Vt:S})}};return A(y)-A(b)})(d.type,f.type)||this.eu(d.doc,f.doc))),this.ou(r),i=i??!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,l=u!==this.Xa;return this.Xa=u,o.length!==0||l?{snapshot:new Vr(this.query,e.tu,s,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hm,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=te(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new sI(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new iI(r))})),t}cu(e){this.Za=e.ks,this.Ya=te();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Vr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Yn="SyncEngine";class CP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class kP{constructor(e){this.key=e,this.hu=!1}}class DP{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ln((c=>G_(c)),bo),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ie(q.comparator),this.Au=new Map,this.Vu=new fh,this.du={},this.mu=new Map,this.fu=kr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function VP(n,e,t=!0){const r=Rc(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await aI(r,e,t,!0),i}async function NP(n,e){const t=Rc(n);await aI(t,e,!0,!1)}async function aI(n,e,t,r){const i=await Ci(n.localStore,nt(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await kh(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ac(n.remoteStore,i),c}async function kh(n,e,t,r,i){n.pu=(f,p,y)=>(async function(A,S,V,L){let M=S.view.ru(V);M.Ss&&(M=await Ga(A.localStore,S.query,!1).then((({documents:E})=>S.view.ru(E,M))));const B=L&&L.targetChanges.get(S.targetId),W=L&&L.targetMismatches.get(S.targetId)!=null,G=S.view.applyChanges(M,A.isPrimaryClient,B,W);return _l(A,S.targetId,G.au),G.snapshot})(n,f,p,y);const s=await Ga(n.localStore,e,!0),o=new oI(e,s.ks),c=o.ru(s.documents),u=Po.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),l=o.applyChanges(c,n.isPrimaryClient,u);_l(n,t,l.au);const d=new CP(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),l.snapshot}async function xP(n,e,t){const r=z(n),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter((o=>!bo(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ki(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Di(r.remoteStore,i.targetId),Vi(r,i.targetId)})).catch(Hn)):(Vi(r,i.targetId),await ki(r.localStore,i.targetId,!0))}async function OP(n,e){const t=z(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Di(t.remoteStore,r.targetId))}async function MP(n,e,t){const r=xh(n);try{const i=await(function(o,c){const u=z(o),l=de.now(),d=c.reduce(((y,b)=>y.add(b.key)),te());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let b=ct(),A=te();return u.xs.getEntries(y,d).next((S=>{b=S,b.forEach(((V,L)=>{L.isValidDocument()||(A=A.add(V))}))})).next((()=>u.localDocuments.getOverlayedDocuments(y,b))).next((S=>{f=S;const V=[];for(const L of c){const M=sS(L,f.get(L.key).overlayedDocument);M!=null&&V.push(new hn(L.key,M,N_(M.value.mapValue),Re.exists(!0)))}return u.mutationQueue.addMutationBatch(y,l,V,c)})).next((S=>{p=S;const V=S.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(y,S.batchId,V)}))})).then((()=>({batchId:p.batchId,changes:K_(f)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(o,c,u){let l=o.du[o.currentUser.toKey()];l||(l=new Ie(Z)),l=l.insert(c,u),o.du[o.currentUser.toKey()]=l})(r,i.batchId,t),await dn(r,i.changes),await Hi(r.remoteStore)}catch(i){const s=Qi(i,"Failed to persist write");t.reject(s)}}async function cI(n,e){const t=z(n);try{const r=await ZS(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Au.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Q(o.hu,14607):i.removedDocuments.size>0&&(Q(o.hu,42227),o.hu=!1))})),await dn(t,r,e)}catch(r){await Hn(r)}}function Ym(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const u=z(o);u.onlineState=c;let l=!1;u.queries.forEach(((d,f)=>{for(const p of f.ba)p.va(c)&&(l=!0)})),l&&Sh(u)})(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LP(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ie(q.comparator);o=o.insert(s,Ee.newNoDocument(s,X.min()));const c=te().add(s),u=new So(X.min(),new Map,new Ie(Z),o,c);await cI(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Nh(r)}else await ki(r.localStore,e,!1).then((()=>Vi(r,e,t))).catch(Hn)}async function FP(n,e){const t=z(n),r=e.batch.batchId;try{const i=await XS(t.localStore,e);Vh(t,r,null),Dh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await dn(t,i)}catch(i){await Hn(i)}}async function UP(n,e,t){const r=z(n);try{const i=await(function(o,c){const u=z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return u.mutationQueue.lookupMutationBatch(l,c).next((f=>(Q(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(l,f)))).next((()=>u.mutationQueue.performConsistencyCheck(l))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(l,d,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>u.localDocuments.getDocuments(l,d)))}))})(r.localStore,e);Vh(r,e,t),Dh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await dn(r,i)}catch(i){await Hn(i)}}async function BP(n,e){const t=z(n);Jn(t.remoteStore)||O(Yn,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await(function(o){const c=z(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u)))})(t.localStore);if(r===Ln)return void e.resolve();const i=t.mu.get(r)||[];i.push(e),t.mu.set(r,i)}catch(r){const i=Qi(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Dh(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Vh(n,e,t){const r=z(n);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Vi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||uI(n,r)}))}function uI(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Di(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Nh(n))}function _l(n,e,t){for(const r of t)r instanceof iI?(n.Vu.addReference(r.key,e),qP(n,r)):r instanceof sI?(O(Yn,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||uI(n,r.key)):$(19791,{wu:r})}function qP(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(O(Yn,"New document in limbo: "+t),n.Eu.add(r),Nh(n))}function Nh(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(se.fromString(e)),r=n.fu.next();n.Au.set(r,new kP(t)),n.Ru=n.Ru.insert(t,r),Ac(n.remoteStore,new Kt(nt(ji(t.path)),r,"TargetPurposeLimboResolution",ot.ce))}}async function dn(n,e,t){const r=z(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{o.push(r.pu(u,e,t).then((l=>{if((l||t)&&r.isPrimaryClient){const d=l?!l.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(l){i.push(l);const d=_h.Es(u.targetId,l);s.push(d)}})))})),await Promise.all(o),r.Pu.J_(i),await(async function(u,l){const d=z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>P.forEach(l,(p=>P.forEach(p.Ts,(y=>d.persistence.referenceDelegate.addReference(f,p.targetId,y))).next((()=>P.forEach(p.Is,(y=>d.persistence.referenceDelegate.removeReference(f,p.targetId,y)))))))))}catch(f){if(!Kn(f))throw f;O(yh,"Failed to update sequence numbers: "+f)}for(const f of l){const p=f.targetId;if(!f.fromCache){const y=d.vs.get(p),b=y.snapshotVersion,A=y.withLastLimboFreeSnapshotVersion(b);d.vs=d.vs.insert(p,A)}}})(r.localStore,s))}async function zP(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){O(Yn,"User change. New user:",e.toKey());const r=await Uy(t.localStore,e);t.currentUser=e,(function(s,o){s.mu.forEach((c=>{c.forEach((u=>{u.reject(new x(k.CANCELLED,o))}))})),s.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dn(t,r.Ns)}}function jP(n,e){const t=z(n),r=t.Au.get(e);if(r&&r.hu)return te().add(r.key);{let i=te();const s=t.Iu.get(e);if(!s)return i;for(const o of s){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}async function GP(n,e){const t=z(n),r=await Ga(t.localStore,e.query,!0),i=e.view.cu(r);return t.isPrimaryClient&&_l(t,e.targetId,i.au),i}async function $P(n,e){const t=z(n);return jy(t.localStore,e).then((r=>dn(t,r)))}async function WP(n,e,t,r){const i=z(n),s=await(function(c,u){const l=z(c),d=z(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",(f=>d.Xn(f,u).next((p=>p?l.localDocuments.getDocuments(f,p):P.resolve(null)))))})(i.localStore,e);s!==null?(t==="pending"?await Hi(i.remoteStore):t==="acknowledged"||t==="rejected"?(Vh(i,e,r||null),Dh(i,e),(function(c,u){z(z(c).mutationQueue).nr(u)})(i.localStore,e)):$(6720,"Unknown batchState",{bu:t}),await dn(i,s)):O(Yn,"Cannot apply mutation batch with id: "+e)}async function HP(n,e){const t=z(n);if(Rc(t),xh(t),e===!0&&t.gu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Xm(t,r.toArray());t.gu=!0,await pl(t.remoteStore,!0);for(const s of i)Ac(t.remoteStore,s)}else if(e===!1&&t.gu!==!1){const r=[];let i=Promise.resolve();t.Iu.forEach(((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then((()=>(Vi(t,o),ki(t.localStore,o,!0)))),Di(t.remoteStore,o)})),await i,await Xm(t,r),(function(o){const c=z(o);c.Au.forEach(((u,l)=>{Di(c.remoteStore,l)})),c.Vu.zr(),c.Au=new Map,c.Ru=new Ie(q.comparator)})(t),t.gu=!1,await pl(t.remoteStore,!1)}}async function Xm(n,e,t){const r=z(n),i=[],s=[];for(const o of e){let c;const u=r.Iu.get(o);if(u&&u.length!==0){c=await Ci(r.localStore,nt(u[0]));for(const l of u){const d=r.Tu.get(l),f=await GP(r,d);f.snapshot&&s.push(f.snapshot)}}else{const l=await zy(r.localStore,o);c=await Ci(r.localStore,l),await kh(r,lI(l),o,!1,c.resumeToken)}i.push(c)}return r.Pu.J_(s),i}function lI(n){return q_(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function KP(n){return(function(t){return z(z(t).persistence).hs()})(z(n).localStore)}async function QP(n,e,t,r){const i=z(n);if(i.gu)return void O(Yn,"Ignoring unexpected query state notification.");const s=i.Iu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await jy(i.localStore,$_(s[0])),c=So.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ve.EMPTY_BYTE_STRING);await dn(i,o,c);break}case"rejected":await ki(i.localStore,e,!0),Vi(i,e,r);break;default:$(64155,t)}}async function JP(n,e,t){const r=Rc(n);if(r.gu){for(const i of e){if(r.Iu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){O(Yn,"Adding an already active target "+i);continue}const s=await zy(r.localStore,i),o=await Ci(r.localStore,s);await kh(r,lI(s),o.targetId,!1,o.resumeToken),Ac(r.remoteStore,o)}for(const i of t)r.Iu.has(i)&&await ki(r.localStore,i,!1).then((()=>{Di(r.remoteStore,i),Vi(r,i)})).catch(Hn)}}function Rc(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=cI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LP.bind(null,e),e.Pu.J_=SP.bind(null,e.eventManager),e.Pu.yu=PP.bind(null,e.eventManager),e}function xh(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UP.bind(null,e),e}function YP(n,e,t){const r=z(n);(async function(s,o,c){try{const u=await o.getMetadata();if(await(function(y,b){const A=z(y),S=Me(b.createTime);return A.persistence.runTransaction("hasNewerBundle","readonly",(V=>A.Pi.getBundleMetadata(V,b.id))).then((V=>!!V&&V.createTime.compareTo(S)>=0))})(s.localStore,u))return await o.close(),c._completeWith((function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}})(u)),Promise.resolve(new Set);c._updateProgress(rI(u));const l=new Ch(u,o.serializer);let d=await o.Su();for(;d;){const p=await l.Ga(d);p&&c._updateProgress(p),d=await o.Su()}const f=await l.ja(s.localStore);return await dn(s,f.Ja,void 0),await(function(y,b){const A=z(y);return A.persistence.runTransaction("Save bundle","readwrite",(S=>A.Pi.saveBundleMetadata(S,b)))})(s.localStore,u),c._completeWith(f.progress),Promise.resolve(f.Ha)}catch(u){return yt(Yn,`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(r,e,t).then((i=>{r.sharedClientState.notifyBundleLoaded(i)}))}class Ni{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Fy(this.persistence,new Ly,e.initialUser,this.serializer)}Cu(e){return new mh(bc.Vi,this.serializer)}Du(e){return new Ky}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ni.provider={build:()=>new Ni};class Oh extends Ni{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Q(this.persistence.referenceDelegate instanceof ja,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Dy(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?et.withCacheSize(this.cacheSizeBytes):et.DEFAULT;return new mh((r=>ja.Vi(r,t)),this.serializer)}}class Mh extends Ni{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await xh(this.xu.syncEngine),await Hi(this.xu.remoteStore),await this.persistence.zi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Fy(this.persistence,new Ly,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Dy(r,e.asyncQueue,t)}Mu(e,t){const r=new sR(t,this.persistence);return new iR(e.asyncQueue,r)}Cu(e){const t=gh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?et.withCacheSize(this.cacheSizeBytes):et.DEFAULT;return new ph(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Qy(),va(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Ky}}class hI extends Mh{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof Su&&(this.sharedClientState.syncEngine={So:WP.bind(null,t),Do:QP.bind(null,t),Co:JP.bind(null,t),hs:KP.bind(null,t),bo:$P.bind(null,t)},await this.sharedClientState.start()),await this.persistence.zi((async r=>{await HP(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())}))}Du(e){const t=Qy();if(!Su.v(t))throw new x(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=gh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Su(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class jn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ym(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zP.bind(null,this.syncEngine),await pl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new RP})()}createDatastore(e){const t=Fr(e.databaseInfo.databaseId),r=aP(e.databaseInfo);return dP(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,o,c){return new mP(r,i,s,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ym(this.syncEngine,t,0)),(function(){return Gm.v()?new Gm:new rP})())}createSyncEngine(e,t){return(function(i,s,o,c,u,l,d){const f=new DP(i,s,o,c,u,l);return d&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=z(t);O(Dr,"RemoteStore shutting down."),r.Ea.add(5),await Wi(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}jn.provider={build:()=>new jn};function Zm(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Sc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Oe("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */class XP{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new Qe,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((r=>{r&&r.Ua()?this.metadata.resolve(r.qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r?.qa)}`))}),(r=>this.metadata.reject(r)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async Su(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.Ku();if(e===null)return null;const t=this.Lu.decode(e),r=Number(t);isNaN(r)&&this.qu(`length string (${t}) is not valid number`);const i=await this.Uu(r);return new nI(JSON.parse(i),e.length+r)}$u(){return this.buffer.findIndex((e=>e===123))}async Ku(){for(;this.$u()<0&&!await this.Wu(););if(this.buffer.length===0)return null;const e=this.$u();e<0&&this.qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Uu(e){for(;this.buffer.length<e;)await this.Wu()&&this.qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Wu(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class ZP{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let r=this.Su();if(!r||!r.Ua())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(r?.qa)}`);this.metadata=r;do r=this.Su(),r!==null&&this.elements.push(r);while(r!==null)}getMetadata(){return this.metadata}Qu(){return this.elements}Su(){if(this.cursor===this.bundleData.length)return null;const e=this.Ku(),t=this.Uu(e);return new nI(JSON.parse(t),e)}Uu(e){if(this.cursor+e>this.bundleData.length)throw new x(k.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}Ku(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
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
 */let eC=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(i,s){const o=z(i),c={documents:s.map((f=>ao(o.serializer,f)))},u=await o.jo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),c,s.length),l=new Map;u.forEach((f=>{const p=pS(o.serializer,f);l.set(p.key.toString(),p)}));const d=[];return s.forEach((f=>{const p=l.get(f.toString());Q(!!p,55234,{key:f}),d.push(p)})),d})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new $i(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const i=q.fromPath(r);this.mutations.push(new sh(i,this.precondition(i)))})),await(async function(r,i){const s=z(r),o={writes:i.map((c=>co(s.serializer,c)))};await s.Wo("Commit",s.serializer.databaseId,se.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw $(50498,{Gu:e.constructor.name});t=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new x(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(X.min())?Re.exists(!1):Re.updateTime(t):Re.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(X.min()))throw new x(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Re.updateTime(t)}return Re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */class tC{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new wh(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Hu()}Hu(){this.M_.p_((async()=>{const e=new eC(this.datastore),t=this.Ju(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((i=>{this.Zu(i)}))))})).catch((r=>{this.Zu(r)}))}))}Ju(e){try{const t=this.updateFunction(e);return!Eo(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Hu(),Promise.resolve())))):this.deferred.reject(e)}Xu(e){if(e?.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!sy(t)}return!1}}/**
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
 */const Gn="FirestoreClient";class nC{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=We.UNAUTHENTICATED,this.clientId=$l.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async o=>{O(Gn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(O(Gn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Qi(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Cu(n,e){n.asyncQueue.verifyOperationInProgress(),O(Gn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Uy(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ep(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Lh(n);O(Gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Wm(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Wm(e.remoteStore,i))),n._onlineComponents=e}async function Lh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Gn,"Using user provided OfflineComponentProvider");try{await Cu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;yt("Error using user provided cache. Falling back to memory cache: "+t),await Cu(n,new Ni)}}else O(Gn,"Using default OfflineComponentProvider"),await Cu(n,new Oh(void 0));return n._offlineComponents}async function Pc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Gn,"Using user provided OnlineComponentProvider"),await ep(n,n._uninitializedComponentsProvider._online)):(O(Gn,"Using default OnlineComponentProvider"),await ep(n,new jn))),n._onlineComponents}function dI(n){return Lh(n).then((e=>e.persistence))}function Ji(n){return Lh(n).then((e=>e.localStore))}function fI(n){return Pc(n).then((e=>e.remoteStore))}function Fh(n){return Pc(n).then((e=>e.syncEngine))}function mI(n){return Pc(n).then((e=>e.datastore))}async function xi(n){const e=await Pc(n),t=e.eventManager;return t.onListen=VP.bind(null,e.syncEngine),t.onUnlisten=xP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OP.bind(null,e.syncEngine),t}function rC(n){return n.asyncQueue.enqueue((async()=>{const e=await dI(n),t=await fI(n);return e.setNetworkEnabled(!0),(function(i){const s=z(i);return s.Ea.delete(0),Co(s)})(t)}))}function iC(n){return n.asyncQueue.enqueue((async()=>{const e=await dI(n),t=await fI(n);return e.setNetworkEnabled(!1),(async function(i){const s=z(i);s.Ea.add(0),await Wi(s),s.Va.set("Offline")})(t)}))}function sC(n,e,t,r){const i=new Sc(r),s=new Ph(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>Ah(await xi(n),s))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>Rh(await xi(n),s)))}}function oC(n,e){const t=new Qe;return n.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await(function(l,d){const f=z(l);return f.persistence.runTransaction("read document","readonly",(p=>f.localDocuments.getDocument(p,d)))})(i,s);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new x(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=Qi(c,`Failed to get document '${s} from cache`);o.reject(u)}})(await Ji(n),e,t))),t.promise}function pI(n,e,t={}){const r=new Qe;return n.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,l){const d=new Sc({next:p=>{d.Nu(),o.enqueueAndForget((()=>Rh(s,f)));const y=p.docs.has(c);!y&&p.fromCache?l.reject(new x(k.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&u&&u.source==="server"?l.reject(new x(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),f=new Ph(ji(c.path),d,{includeMetadataChanges:!0,Ka:!0});return Ah(s,f)})(await xi(n),n.asyncQueue,e,t,r))),r.promise}function aC(n,e){const t=new Qe;return n.asyncQueue.enqueueAndForget((async()=>(async function(i,s,o){try{const c=await Ga(i,s,!0),u=new oI(s,c.ks),l=u.ru(c.documents),d=u.applyChanges(l,!1);o.resolve(d.snapshot)}catch(c){const u=Qi(c,`Failed to execute query '${s} against cache`);o.reject(u)}})(await Ji(n),e,t))),t.promise}function gI(n,e,t={}){const r=new Qe;return n.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,u,l){const d=new Sc({next:p=>{d.Nu(),o.enqueueAndForget((()=>Rh(s,f))),p.fromCache&&u.source==="server"?l.reject(new x(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),f=new Ph(c,d,{includeMetadataChanges:!0,Ka:!0});return Ah(s,f)})(await xi(n),n.asyncQueue,e,t,r))),r.promise}function cC(n,e,t){const r=new Qe;return n.asyncQueue.enqueueAndForget((async()=>{try{const i=await mI(n);r.resolve((async function(o,c,u){const l=z(o),{request:d,gt:f,parent:p}=gy(l.serializer,z_(c),u);l.connection.Ko||delete d.parent;const y=(await l.jo("RunAggregationQuery",l.serializer.databaseId,p,d,1)).filter((A=>!!A.result));Q(y.length===1,64727);const b=y[0].result?.aggregateFields;return Object.keys(b).reduce(((A,S)=>(A[f[S]]=b[S],A)),{})})(i,e,t))}catch(i){r.reject(i)}})),r.promise}function uC(n,e){const t=new Qe;return n.asyncQueue.enqueueAndForget((async()=>MP(await Fh(n),e,t))),t.promise}function lC(n,e){const t=new Sc(e);return n.asyncQueue.enqueueAndForget((async()=>(function(i,s){z(i).Ca.add(s),s.next()})(await xi(n),t))),()=>{t.Nu(),n.asyncQueue.enqueueAndForget((async()=>(function(i,s){z(i).Ca.delete(s)})(await xi(n),t)))}}function hC(n,e,t){const r=new Qe;return n.asyncQueue.enqueueAndForget((async()=>{const i=await mI(n);new tC(n.asyncQueue,i,t,e,r).ju()})),r.promise}function dC(n,e,t,r){const i=(function(o,c){let u;return u=typeof o=="string"?ay().encode(o):o,(function(d,f){return new XP(d,f)})((function(d,f){if(d instanceof Uint8Array)return Zm(d,f);if(d instanceof ArrayBuffer)return Zm(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(u),c)})(t,Fr(e));n.asyncQueue.enqueueAndForget((async()=>{YP(await Fh(n),i,r)}))}function fC(n,e){return n.asyncQueue.enqueue((async()=>(function(r,i){const s=z(r);return s.persistence.runTransaction("Get named query","readonly",(o=>s.Pi.getNamedQuery(o,i)))})(await Ji(n),e)))}function _I(n,e){return(function(r,i){return new ZP(r,i)})(n,e)}function mC(n,e){return n.asyncQueue.enqueue((async()=>(async function(r,i){const s=z(r),o=s.indexManager,c=[];return s.persistence.runTransaction("Configure indexes","readwrite",(u=>o.getFieldIndexes(u).next((l=>(function(f,p,y,b,A){f=[...f],p=[...p],f.sort(y),p.sort(y);const S=f.length,V=p.length;let L=0,M=0;for(;L<V&&M<S;){const B=y(f[M],p[L]);B<0?A(f[M++]):B>0?b(p[L++]):(L++,M++)}for(;L<V;)b(p[L++]);for(;M<S;)A(f[M++])})(l,i,eR,(d=>{c.push(o.addFieldIndex(u,d))}),(d=>{c.push(o.deleteFieldIndex(u,d))})))).next((()=>P.waitFor(c)))))})(await Ji(n),e)))}function pC(n,e){return n.asyncQueue.enqueue((async()=>(function(r,i){z(r).Cs.As=i})(await Ji(n),e)))}function gC(n){return n.asyncQueue.enqueue((async()=>(function(t){const r=z(t),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",(s=>i.deleteAllFieldIndexes(s)))})(await Ji(n))))}/**
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
 */function yI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const _C="ComponentProvider",tp=new Map;function yC(n,e,t,r,i){return new NR(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,yI(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const II="firestore.googleapis.com",np=!0;class rp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new x(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=II,this.ssl=np}else this.host=e.host,this.ssl=e.ssl??np;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ry;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ky)throw new x(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yI(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ko{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new jA;switch(r.type){case"firstParty":return new HA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=tp.get(t);r&&(O(_C,"Removing Datastore"),tp.delete(t),r.terminate())})(this),Promise.resolve()}}function IC(n,e,t,r={}){n=oe(n,ko);const i=xr(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&(Tl(`https://${c}`),Qp("Firestore",!0)),s.host!==II&&s.host!==c&&yt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:c,ssl:i,emulatorOptions:r};if(!At(u,o)&&(n._setSettings(u),r.mockUserToken)){let l,d;if(typeof r.mockUserToken=="string")l=r.mockUserToken,d=We.MOCK_USER;else{l=vE(r.mockUserToken,n._app?.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new x(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new We(f)}n._authCredentials=new GA(new r_(l,d))}}/**
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
 */class Je{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Je(this.firestore,e,this._query)}}class pe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}toJSON(){return{type:pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Lr(t,pe._jsonSchema))return new pe(e,r||null,new q(se.fromString(t.referencePath)))}}pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:Ue("string",pe._jsonSchemaVersion),referencePath:Ue("string")};class Ut extends Je{constructor(e,t,r){super(e,t,ji(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new q(e))}withConverter(e){return new Ut(this.firestore,e,this._path)}}function dV(n,e,...t){if(n=Y(n),Wl("collection","path",e),n instanceof ko){const r=se.fromString(e,...t);return $f(r),new Ut(n,null,r)}{if(!(n instanceof pe||n instanceof Ut))throw new x(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return $f(r),new Ut(n.firestore,null,r)}}function fV(n,e){if(n=oe(n,ko),Wl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(k.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Je(n,null,(function(r){return new un(se.emptyPath(),r)})(e))}function wC(n,e,...t){if(n=Y(n),arguments.length===1&&(e=$l.newId()),Wl("doc","path",e),n instanceof ko){const r=se.fromString(e,...t);return Gf(r),new pe(n,null,new q(r))}{if(!(n instanceof pe||n instanceof Ut))throw new x(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return Gf(r),new pe(n.firestore,n instanceof Ut?n.converter:null,new q(r))}}function mV(n,e){return n=Y(n),e=Y(e),(n instanceof pe||n instanceof Ut)&&(e instanceof pe||e instanceof Ut)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function wI(n,e){return n=Y(n),e=Y(e),n instanceof Je&&e instanceof Je&&n.firestore===e.firestore&&bo(n._query,e._query)&&n.converter===e.converter}/**
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
 */const ip="AsyncQueue";class sp{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new wh(this,"async_queue_retry"),this._c=()=>{const r=va();r&&O(ip,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=va();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=va();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Qe;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Kn(e))throw e;O(ip,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Oe("INTERNAL UNHANDLED ERROR: ",op(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=bh.createAndSchedule(this,e,t,r,(s=>this.hc(s)));return this.tc.push(i),i}uc(){this.nc&&$(47125,{Pc:op(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function op(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */class EC{constructor(){this._progressObserver={},this._taskCompletionResolver=new Qe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const pV=-1;class _e extends ko{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new sp,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sp(e),this._firestoreClient=void 0,await e}}}function gV(n,e,t){t||(t=ro);const r=mo(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(At(s,e))return i;throw new x(k.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new x(k.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ky)throw new x(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&xr(e.host)&&Tl(e.host),r.initialize({options:e,instanceIdentifier:t})}function _V(n,e){const t=typeof n=="object"?n:ng(),r=typeof n=="string"?n:e||ro,i=mo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=EE("firestore");s&&IC(i,...s)}return i}function Pe(n){if(n._terminated)throw new x(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||EI(n),n._firestoreClient}function EI(n){const e=n._freezeSettings(),t=yC(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new nC(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const s=i?._online.build();return{_offline:i?._offline.build(s),_online:s}})(n._componentsProvider))}function yV(n,e){yt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return TI(n,jn.provider,{build:r=>new Mh(r,t.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}async function IV(n){yt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();TI(n,jn.provider,{build:t=>new hI(t,e.cacheSizeBytes)})}function TI(n,e,t){if((n=oe(n,_e))._firestoreClient||n._terminated)throw new x(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new x(k.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},EI(n)}function wV(n){if(n._initialized&&!n._terminated)throw new x(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Qe;return n._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(r){if(!Lt.v())return Promise.resolve();const i=r+My;await Lt.delete(i)})(gh(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function EV(n){return(function(t){const r=new Qe;return t.asyncQueue.enqueueAndForget((async()=>BP(await Fh(t),r))),r.promise})(Pe(n=oe(n,_e)))}function TV(n){return rC(Pe(n=oe(n,_e)))}function vV(n){return iC(Pe(n=oe(n,_e)))}function bV(n){return OT(n.app,"firestore",n._databaseId.database),n._delete()}function ap(n,e){const t=Pe(n=oe(n,_e)),r=new EC;return dC(t,n._databaseId,e,r),r}function TC(n,e){return fC(Pe(n=oe(n,_e)),e).then((t=>t?new Je(n,null,t.query):null))}/**
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
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(Ve.fromBase64String(e))}catch(t){throw new x(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mt(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lr(e,mt._jsonSchema))return mt.fromBase64String(e.bytes)}}mt._jsonSchemaVersion="firestore/bytes/1.0",mt._jsonSchema={type:Ue("string",mt._jsonSchemaVersion),bytes:Ue("string")};/**
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
 */class Yi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function AV(){return new Yi(Hu)}/**
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
 */class Ur{constructor(e){this._methodName=e}}/**
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
 */class Bt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bt._jsonSchemaVersion}}static fromJSON(e){if(Lr(e,Bt._jsonSchema))return new Bt(e.latitude,e.longitude)}}Bt._jsonSchemaVersion="firestore/geoPoint/1.0",Bt._jsonSchema={type:Ue("string",Bt._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
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
 */class wt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lr(e,wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new wt(e.vectorValues);throw new x(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wt._jsonSchemaVersion="firestore/vectorValue/1.0",wt._jsonSchema={type:Ue("string",wt._jsonSchemaVersion),vectorValues:Ue("object")};/**
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
 */const vC=/^__.*__$/;class bC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gi(e,this.data,t,this.fieldTransforms)}}class vI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new hn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function bI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{dataSource:n})}}class Cc{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Cc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ka(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(bI(this.dataSource)&&vC.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class AC{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fr(e)}createContext(e,t,r,i=!1){return new Cc({dataSource:e,methodName:t,targetDoc:r,path:Ae.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Br(n){const e=n._freezeSettings(),t=Fr(n._databaseId);return new AC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function kc(n,e,t,r,i,s={}){const o=n.createContext(s.merge||s.mergeFields?2:0,e,t,i);$h("Data must be an object, but it was:",o,r);const c=SI(r,o);let u,l;if(s.merge)u=new at(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=nn(e,f,t);if(!o.contains(p))throw new x(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);CI(d,p)||d.push(p)}u=new at(d),l=o.fieldTransforms.filter((f=>u.covers(f.field)))}else u=null,l=o.fieldTransforms;return new bC(new He(c),u,l)}class Do extends Ur{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Do}}function AI(n,e,t){return new Cc({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Uh extends Ur{_toFieldTransform(e){return new Ro(e.path,new Ri)}isEqual(e){return e instanceof Uh}}class Bh extends Ur{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=AI(this,e,!0),r=this.Ac.map((s=>qr(s,t))),i=new Rr(r);return new Ro(e.path,i)}isEqual(e){return e instanceof Bh&&At(this.Ac,e.Ac)}}class qh extends Ur{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=AI(this,e,!0),r=this.Ac.map((s=>qr(s,t))),i=new Sr(r);return new Ro(e.path,i)}isEqual(e){return e instanceof qh&&At(this.Ac,e.Ac)}}class zh extends Ur{constructor(e,t){super(e),this.Vc=t}_toFieldTransform(e){const t=new Si(e.serializer,Y_(e.serializer,this.Vc));return new Ro(e.path,t)}isEqual(e){return e instanceof zh&&this.Vc===e.Vc}}function jh(n,e,t,r){const i=n.createContext(1,e,t);$h("Data must be an object, but it was:",i,r);const s=[],o=He.empty();Qn(r,((u,l)=>{const d=Wh(e,u,t);l=Y(l);const f=i.childContextForFieldPath(d);if(l instanceof Do)s.push(d);else{const p=qr(l,f);p!=null&&(s.push(d),o.set(d,p))}}));const c=new at(s);return new vI(o,c,i.fieldTransforms)}function Gh(n,e,t,r,i,s){const o=n.createContext(1,e,t),c=[nn(e,r,t)],u=[i];if(s.length%2!=0)throw new x(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)c.push(nn(e,s[p])),u.push(s[p+1]);const l=[],d=He.empty();for(let p=c.length-1;p>=0;--p)if(!CI(l,c[p])){const y=c[p];let b=u[p];b=Y(b);const A=o.childContextForFieldPath(y);if(b instanceof Do)l.push(y);else{const S=qr(b,A);S!=null&&(l.push(y),d.set(y,S))}}const f=new at(l);return new vI(d,f,o.fieldTransforms)}function RI(n,e,t,r=!1){return qr(t,n.createContext(r?4:3,e))}function qr(n,e){if(PI(n=Y(n)))return $h("Unsupported field value:",e,n),SI(n,e);if(n instanceof Ur)return(function(r,i){if(!bI(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const s=[];let o=0;for(const c of r){let u=qr(c,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Y_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=de.fromDate(r);return{timestampValue:Pi(i.serializer,s)}}if(r instanceof de){const s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pi(i.serializer,s)}}if(r instanceof Bt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mt)return{bytesValue:ly(i.serializer,r._byteString)};if(r instanceof pe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lh(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof wt)return(function(o,c){const u=o instanceof wt?o.toArray():o;return{mapValue:{fields:{[Zl]:{stringValue:eh},[vi]:{arrayValue:{values:u.map((d=>{if(typeof d!="number")throw c.createError("VectorValues must only contain numeric values.");return ih(c.serializer,d)}))}}}}}})(r,i);if(Ey(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${uc(r)}`)})(n,e)}function SI(n,e){const t={};return b_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qn(n,((r,i)=>{const s=qr(i,e.childContextForField(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function PI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof Bt||n instanceof mt||n instanceof pe||n instanceof Ur||n instanceof wt||Ey(n))}function $h(n,e,t){if(!PI(t)||!s_(t)){const r=uc(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function nn(n,e,t){if((e=Y(e))instanceof Yi)return e._internalPath;if(typeof e=="string")return Wh(n,e);throw Ka("Field path arguments must be of type string or ",n,!1,void 0,t)}const RC=new RegExp("[~\\*/\\[\\]]");function Wh(n,e,t){if(e.search(RC)>=0)throw Ka(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yi(...e.split("."))._internalPath}catch{throw Ka(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ka(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new x(k.INVALID_ARGUMENT,c+n+u)}function CI(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class kI{convertValue(e,t="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Qn(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){const t=e.fields?.[vi].arrayValue?.values?.map((r=>be(r.doubleValue)));return new wt(t)}convertGeoPoint(e){return new Bt(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=pc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const t=en(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);Q(wy(r),9688,{name:e});const i=new vr(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(t)||Oe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class Xn extends kI{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}/**
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
 */function RV(){return new Do("deleteField")}function SV(){return new Uh("serverTimestamp")}function PV(...n){return new Bh("arrayUnion",n)}function CV(...n){return new qh("arrayRemove",n)}function kV(n){return new zh("increment",n)}function DV(n){return new wt(n)}/**
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
 */function VV(n){const e=Pe(oe(n.firestore,_e)),t=e._onlineComponents?.datastore.serializer;return t===void 0?null:wc(t,nt(n._query)).ft}function NV(n,e){const t=v_(e,((s,o)=>new iy(o,s.aggregateType,s._internalFieldPath))),r=Pe(oe(n.firestore,_e)),i=r._onlineComponents?.datastore.serializer;return i===void 0?null:gy(i,z_(n._query),t,!0).request}const cp="@firebase/firestore",up="4.11.0";/**
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
 */function di(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class uo{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class SC{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new He({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
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
 */class lo{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(nn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class PC extends lo{data(){return super.data()}}/**
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
 */function DI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hh{}class Vo extends Hh{}function xV(n,e,...t){let r=[];e instanceof Hh&&r.push(e),r=r.concat(t),(function(s){const o=s.filter((u=>u instanceof Xi)).length,c=s.filter((u=>u instanceof No)).length;if(o>1||o>0&&c>0)throw new x(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class No extends Vo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new No(e,t,r)}_apply(e){const t=this._parse(e);return NI(e._query,t),new Je(e.firestore,e.converter,il(e._query,t))}_parse(e){const t=Br(e.firestore);return(function(s,o,c,u,l,d,f){let p;if(l.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new x(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){hp(f,d);const b=[];for(const A of f)b.push(lp(u,s,A));p={arrayValue:{values:b}}}else p=lp(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||hp(f,d),p=RI(c,o,f,d==="in"||d==="not-in");return ce.create(l,d,p)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function OV(n,e,t){const r=e,i=nn("where",n);return No._create(i,r,t)}class Xi extends Hh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xi(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:fe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)NI(o,u),o=il(o,u)})(e._query,t),new Je(e.firestore,e.converter,il(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function MV(...n){return n.forEach((e=>xI("or",e))),Xi._create("or",n)}function LV(...n){return n.forEach((e=>xI("and",e))),Xi._create("and",n)}class Kh extends Vo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Kh(e,t)}_apply(e){const t=(function(i,s,o){if(i.startAt!==null)throw new x(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oo(s,o)})(e._query,this._field,this._direction);return new Je(e.firestore,e.converter,WR(e._query,t))}}function FV(n,e="asc"){const t=e,r=nn("orderBy",n);return Kh._create(r,t)}class Dc extends Vo{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Dc(e,t,r)}_apply(e){return new Je(e.firestore,e.converter,Ua(e._query,this._limit,this._limitType))}}function UV(n){return o_("limit",n),Dc._create("limit",n,"F")}function BV(n){return o_("limitToLast",n),Dc._create("limitToLast",n,"L")}class Vc extends Vo{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Vc(e,t,r)}_apply(e){const t=VI(e,this.type,this._docOrFields,this._inclusive);return new Je(e.firestore,e.converter,HR(e._query,t))}}function qV(...n){return Vc._create("startAt",n,!0)}function zV(...n){return Vc._create("startAfter",n,!1)}class Nc extends Vo{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Nc(e,t,r)}_apply(e){const t=VI(e,this.type,this._docOrFields,this._inclusive);return new Je(e.firestore,e.converter,KR(e._query,t))}}function jV(...n){return Nc._create("endBefore",n,!1)}function GV(...n){return Nc._create("endAt",n,!0)}function VI(n,e,t,r){if(t[0]=Y(t[0]),t[0]instanceof lo)return(function(s,o,c,u,l){if(!u)throw new x(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const d=[];for(const f of li(s))if(f.field.isKeyField())d.push(br(o,u.key));else{const p=u.data.field(f.field);if(mc(p))throw new x(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const y=f.field.canonicalString();throw new x(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(p)}return new qn(d,l)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Br(n.firestore);return(function(o,c,u,l,d,f){const p=o.explicitOrderBy;if(d.length>p.length)throw new x(k.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let b=0;b<d.length;b++){const A=d[b];if(p[b].field.isKeyField()){if(typeof A!="string")throw new x(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof A}`);if(!nh(o)&&A.indexOf("/")!==-1)throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${A}' contains a slash.`);const S=o.path.child(se.fromString(A));if(!q.isDocumentKey(S))throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const V=new q(S);y.push(br(c,V))}else{const S=RI(u,l,A);y.push(S)}}return new qn(y,f)})(n._query,n.firestore._databaseId,i,e,t,r)}}function lp(n,e,t){if(typeof(t=Y(t))=="string"){if(t==="")throw new x(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nh(e)&&t.indexOf("/")!==-1)throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!q.isDocumentKey(r))throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return br(n,new q(r))}if(t instanceof pe)return br(n,t._key);throw new x(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(t)}.`)}function hp(n,e){if(!Array.isArray(n)||n.length===0)throw new x(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NI(n,e){const t=(function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new x(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function xI(n,e){if(!(e instanceof No||e instanceof Xi))throw new x(k.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function xc(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Qh extends kI{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}/**
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
 */function $V(n){return new uo("sum",nn("sum",n))}function WV(n){return new uo("avg",nn("average",n))}function CC(){return new uo("count")}function HV(n,e){return n instanceof uo&&e instanceof uo&&n.aggregateType===e.aggregateType&&n._internalFieldPath?.canonicalString()===e._internalFieldPath?.canonicalString()}function KV(n,e){return wI(n.query,e.query)&&At(n.data(),e.data())}/**
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
 */function QV(n){return kC(n,{count:CC()})}function kC(n,e){const t=oe(n.firestore,_e),r=Pe(t),i=v_(e,((s,o)=>new iy(o,s.aggregateType,s._internalFieldPath)));return cC(r,n._query,i).then((s=>(function(c,u,l){const d=new Xn(c);return new SC(u,d,l)})(t,n,s)))}class DC{constructor(e){this.kind="memory",this._onlineComponentProvider=jn.provider,this._offlineComponentProvider=e?.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new Oh(void 0)}}toJSON(){return{kind:this.kind}}}class VC{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=LC(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class NC{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Ni.provider}toJSON(){return{kind:this.kind}}}class xC{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Oh(e)}}toJSON(){return{kind:this.kind}}}function JV(){return new NC}function YV(n){return new xC(n?.cacheSizeBytes)}function XV(n){return new DC(n)}function ZV(n){return new VC(n)}class OC{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=jn.provider,this._offlineComponentProvider={build:t=>new Mh(t,e?.cacheSizeBytes,this.forceOwnership)}}}class MC{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=jn.provider,this._offlineComponentProvider={build:t=>new hI(t,e?.cacheSizeBytes)}}}function LC(n){return new OC(n?.forceOwnership)}function e0(){return new MC}/**
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
 *//**
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
 */const OI="NOT SUPPORTED";class Dn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pt extends lo{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(nn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=pt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function t0(n,e,t){if(Lr(e,pt._jsonSchema)){if(e.bundle===OI)throw new x(k.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Fr(n._databaseId),i=_I(e.bundle,r),s=i.t(),o=new Ch(i.getMetadata(),r);for(const d of s)o.o(d);const c=o.documents;if(c.length!==1)throw new x(k.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${c.length} documents.`);const u=Ic(r,c[0].document),l=new q(se.fromString(e.bundleName));return new pt(n,new Qh(n),l,u,new Dn(!1,!1),t||null)}}pt._jsonSchemaVersion="firestore/documentSnapshot/1.0",pt._jsonSchema={type:Ue("string",pt._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class ba extends pt{data(e={}){return super.data(e)}}class gt{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ba(this._firestore,this._userDataWriter,r.key,r,new Dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const u=new ba(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Dn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>s||c.type!==3)).map((c=>{const u=new ba(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Dn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,d=-1;return c.type!==0&&(l=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:FC(c.type),doc:u,oldIndex:l,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=gt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$l.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function n0(n,e,t){if(Lr(e,gt._jsonSchema)){if(e.bundle===OI)throw new x(k.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Fr(n._databaseId),i=_I(e.bundle,r),s=i.t(),o=new Ch(i.getMetadata(),r);for(const p of s)o.o(p);if(o.queries.length!==1)throw new x(k.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const c=Ec(o.queries[0].bundledQuery),u=o.documents;let l=new Er;u.map((p=>{const y=Ic(r,p.document);l=l.add(y)}));const d=Vr.fromInitialDocuments(c,l,te(),!1,!1),f=new Je(n,t||null,c);return new gt(n,new Qh(n),f,d)}}function FC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}function r0(n,e){return n instanceof pt&&e instanceof pt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof gt&&e instanceof gt&&n._firestore===e._firestore&&wI(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */gt._jsonSchemaVersion="firestore/querySnapshot/1.0",gt._jsonSchema={type:Ue("string",gt._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};const UC={maxAttempts:5};/**
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
 */class BC{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Br(e)}set(e,t,r){this._verifyNotCommitted();const i=Vn(e,this._firestore),s=xc(i.converter,t,r),o=kc(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Re.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Vn(e,this._firestore);let o;return o=typeof(t=Y(t))=="string"||t instanceof Yi?Gh(this._dataReader,"WriteBatch.update",s._key,t,r,i):jh(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Re.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Vn(e,this._firestore);return this._mutations=this._mutations.concat(new $i(t._key,Re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vn(n,e){if((n=Y(n)).firestore!==e)throw new x(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class qC{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Br(e)}get(e){const t=Vn(e,this._firestore),r=new Qh(this._firestore);return this._transaction.lookup([t._key]).then((i=>{if(!i||i.length!==1)return $(24041);const s=i[0];if(s.isFoundDocument())return new lo(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new lo(this._firestore,r,t._key,null,t.converter);throw $(18433,{doc:s})}))}set(e,t,r){const i=Vn(e,this._firestore),s=xc(i.converter,t,r),o=kc(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Vn(e,this._firestore);let o;return o=typeof(t=Y(t))=="string"||t instanceof Yi?Gh(this._dataReader,"Transaction.update",s._key,t,r,i):jh(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Vn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */class zC extends qC{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Vn(e,this._firestore),r=new Xn(this._firestore);return super.get(e).then((i=>new pt(this._firestore,r,t._key,i._document,new Dn(!1,!1),t.converter)))}}function i0(n,e,t){n=oe(n,_e);const r={...UC,...t};(function(o){if(o.maxAttempts<1)throw new x(k.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const i=Pe(n);return hC(i,(s=>e(new zC(n,s))),r)}/**
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
 */function s0(n){n=oe(n,pe);const e=oe(n.firestore,_e),t=Pe(e);return pI(t,n._key).then((r=>Jh(e,n,r)))}function o0(n){n=oe(n,pe);const e=oe(n.firestore,_e),t=Pe(e),r=new Xn(e);return oC(t,n._key).then((i=>new pt(e,r,n._key,i,new Dn(i!==null&&i.hasLocalMutations,!0),n.converter)))}function a0(n){n=oe(n,pe);const e=oe(n.firestore,_e),t=Pe(e);return pI(t,n._key,{source:"server"}).then((r=>Jh(e,n,r)))}function c0(n){n=oe(n,Je);const e=oe(n.firestore,_e),t=Pe(e),r=new Xn(e);return DI(n._query),gI(t,n._query).then((i=>new gt(e,r,n,i)))}function u0(n){n=oe(n,Je);const e=oe(n.firestore,_e),t=Pe(e),r=new Xn(e);return aC(t,n._query).then((i=>new gt(e,r,n,i)))}function l0(n){n=oe(n,Je);const e=oe(n.firestore,_e),t=Pe(e),r=new Xn(e);return gI(t,n._query,{source:"server"}).then((i=>new gt(e,r,n,i)))}function h0(n,e,t){n=oe(n,pe);const r=oe(n.firestore,_e),i=xc(n.converter,e,t),s=Br(r);return xo(r,[kc(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Re.none())])}function d0(n,e,t,...r){n=oe(n,pe);const i=oe(n.firestore,_e),s=Br(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof Yi?Gh(s,"updateDoc",n._key,e,t,r):jh(s,"updateDoc",n._key,e),xo(i,[o.toMutation(n._key,Re.exists(!0))])}function f0(n){return xo(oe(n.firestore,_e),[new $i(n._key,Re.none())])}function m0(n,e){const t=oe(n.firestore,_e),r=wC(n),i=xc(n.converter,e),s=Br(n.firestore);return xo(t,[kc(s,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Re.exists(!1))]).then((()=>r))}function dp(n,...e){n=Y(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||di(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(di(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let s,o,c;if(n instanceof pe)o=oe(n.firestore,_e),c=ji(n._key.path),s={next:l=>{e[r]&&e[r](Jh(o,n,l))},error:e[r+1],complete:e[r+2]};else{const l=oe(n,Je);o=oe(l.firestore,_e),c=l._query;const d=new Xn(o);s={next:f=>{e[r]&&e[r](new gt(o,d,l,f))},error:e[r+1],complete:e[r+2]},DI(n._query)}const u=Pe(o);return sC(u,c,i,s)}function p0(n,e,...t){const r=Y(n),i=(function(u){const l={bundle:"",bundleName:"",bundleSource:""},d=["bundle","bundleName","bundleSource"];for(const f of d){if(!(f in u)){l.error=`snapshotJson missing required field: ${f}`;break}const p=u[f];if(typeof p!="string"){l.error=`snapshotJson field '${f}' must be a string.`;break}if(p.length===0){l.error=`snapshotJson field '${f}' cannot be an empty string.`;break}f==="bundle"?l.bundle=p:f==="bundleName"?l.bundleName=p:f==="bundleSource"&&(l.bundleSource=p)}return l})(e);if(i.error)throw new x(k.INVALID_ARGUMENT,i.error);let s,o=0;if(typeof t[o]!="object"||di(t[o])||(s=t[o++]),i.bundleSource==="QuerySnapshot"){let c=null;if(typeof t[o]=="object"&&di(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,d,f,p,y){let b,A=!1;return ap(l,d.bundle).then((()=>TC(l,d.bundleName))).then((V=>{V&&!A&&(y&&V.withConverter(y),b=dp(V,f||{},p))})).catch((V=>(p.error&&p.error(V),()=>{}))),()=>{A||(A=!0,b&&b())}})(r,i,s,c,t[o])}if(i.bundleSource==="DocumentSnapshot"){let c=null;if(typeof t[o]=="object"&&di(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,d,f,p,y){let b,A=!1;return ap(l,d.bundle).then((()=>{if(!A){const V=new pe(l,y||null,q.fromPath(d.bundleName));b=dp(V,f||{},p)}})).catch((V=>(p.error&&p.error(V),()=>{}))),()=>{A||(A=!0,b&&b())}})(r,i,s,c,t[o])}throw new x(k.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)}function g0(n,e){n=oe(n,_e);const t=Pe(n),r=di(e)?e:{next:e};return lC(t,r)}function xo(n,e){const t=Pe(n);return uC(t,e)}function Jh(n,e,t){const r=t.docs.get(e._key),i=new Xn(n);return new pt(n,i,e._key,r,new Dn(t.hasPendingWrites,t.fromCache),e.converter)}function _0(n){return n=oe(n,_e),Pe(n),new BC(n,(e=>xo(n,e)))}/**
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
 */function y0(n,e){n=oe(n,_e);const t=Pe(n);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return yt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=(function(s){const o=typeof s=="string"?(function(l){try{return JSON.parse(l)}catch(d){throw new x(k.INVALID_ARGUMENT,"Failed to parse JSON: "+d?.message)}})(s):s,c=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const l=fp(u,"collectionGroup"),d=[];if(Array.isArray(u.fields))for(const f of u.fields){const p=fp(f,"fieldPath"),y=Wh("setIndexConfiguration",p);f.arrayConfig==="CONTAINS"?d.push(new Ir(y,2)):f.order==="ASCENDING"?d.push(new Ir(y,0)):f.order==="DESCENDING"&&d.push(new Ir(y,1))}c.push(new _i(_i.UNKNOWN_ID,l,d,yi.empty()))}return c})(e);return mC(t,r)}function fp(n,e){if(typeof n[e]!="string")throw new x(k.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}/**
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
 */class jC{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function I0(n){n=oe(n,_e);const e=mp.get(n);if(e)return e;if(Pe(n)._uninitializedComponentsProvider?._offline.kind!=="persistent")return null;const r=new jC(n);return mp.set(n,r),r}function w0(n){MI(n,!0)}function E0(n){MI(n,!1)}function T0(n){const e=Pe(n._firestore);gC(e).then((t=>O("deleting all persistent cache indexes succeeded"))).catch((t=>yt("deleting all persistent cache indexes failed",t)))}function MI(n,e){const t=Pe(n._firestore);pC(t,e).then((r=>O(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((r=>yt(`setting persistent cache index auto creation isEnabled=${e} failed`,r)))}const mp=new WeakMap;/**
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
 */class v0{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Yh.instance.onExistenceFilterMismatch(e)}}class Yh{constructor(){this.i=new Map}static get instance(){return sa||(sa=new Yh,aS(sa)),sa}u(e){this.i.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),r=this.i;return r.set(t,e),()=>r.delete(t)}}let sa=null;(function(e,t=!0){zA(Ui),mi(new Tr("firestore",((r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new _e(new $A(r.getProvider("auth-internal")),new KA(o,r.getProvider("app-check-internal")),xR(o,i),o);return s={useFetchStreams:t,...s},c._setSettings(s),c}),"PUBLIC").setMultipleInstances(!0)),_r(cp,up,e),_r(cp,up,"esm2020")})();const GC=["top","right","bottom","left"],$n=Math.min,ft=Math.max,Qa=Math.round,oa=Math.floor,qt=n=>({x:n,y:n}),$C={left:"right",right:"left",bottom:"top",top:"bottom"},WC={start:"end",end:"start"};function yl(n,e,t){return ft(n,$n(e,t))}function rn(n,e){return typeof n=="function"?n(e):n}function sn(n){return n.split("-")[0]}function Zi(n){return n.split("-")[1]}function Xh(n){return n==="x"?"y":"x"}function Zh(n){return n==="y"?"height":"width"}const HC=new Set(["top","bottom"]);function Mt(n){return HC.has(sn(n))?"y":"x"}function ed(n){return Xh(Mt(n))}function KC(n,e,t){t===void 0&&(t=!1);const r=Zi(n),i=ed(n),s=Zh(i);let o=i==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=Ja(o)),[o,Ja(o)]}function QC(n){const e=Ja(n);return[Il(n),e,Il(e)]}function Il(n){return n.replace(/start|end/g,e=>WC[e])}const pp=["left","right"],gp=["right","left"],JC=["top","bottom"],YC=["bottom","top"];function XC(n,e,t){switch(n){case"top":case"bottom":return t?e?gp:pp:e?pp:gp;case"left":case"right":return e?JC:YC;default:return[]}}function ZC(n,e,t,r){const i=Zi(n);let s=XC(sn(n),t==="start",r);return i&&(s=s.map(o=>o+"-"+i),e&&(s=s.concat(s.map(Il)))),s}function Ja(n){return n.replace(/left|right|bottom|top/g,e=>$C[e])}function ek(n){return{top:0,right:0,bottom:0,left:0,...n}}function LI(n){return typeof n!="number"?ek(n):{top:n,right:n,bottom:n,left:n}}function Ya(n){const{x:e,y:t,width:r,height:i}=n;return{width:r,height:i,top:t,left:e,right:e+r,bottom:t+i,x:e,y:t}}function _p(n,e,t){let{reference:r,floating:i}=n;const s=Mt(e),o=ed(e),c=Zh(o),u=sn(e),l=s==="y",d=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2,p=r[c]/2-i[c]/2;let y;switch(u){case"top":y={x:d,y:r.y-i.height};break;case"bottom":y={x:d,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:f};break;case"left":y={x:r.x-i.width,y:f};break;default:y={x:r.x,y:r.y}}switch(Zi(e)){case"start":y[o]-=p*(t&&l?-1:1);break;case"end":y[o]+=p*(t&&l?-1:1);break}return y}async function tk(n,e){var t;e===void 0&&(e={});const{x:r,y:i,platform:s,rects:o,elements:c,strategy:u}=n,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:y=0}=rn(e,n),b=LI(y),S=c[p?f==="floating"?"reference":"floating":f],V=Ya(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(S)))==null||t?S:S.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:l,rootBoundary:d,strategy:u})),L=f==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,M=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),B=await(s.isElement==null?void 0:s.isElement(M))?await(s.getScale==null?void 0:s.getScale(M))||{x:1,y:1}:{x:1,y:1},W=Ya(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:L,offsetParent:M,strategy:u}):L);return{top:(V.top-W.top+b.top)/B.y,bottom:(W.bottom-V.bottom+b.bottom)/B.y,left:(V.left-W.left+b.left)/B.x,right:(W.right-V.right+b.right)/B.x}}const nk=async(n,e,t)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=t,c=s.filter(Boolean),u=await(o.isRTL==null?void 0:o.isRTL(e));let l=await o.getElementRects({reference:n,floating:e,strategy:i}),{x:d,y:f}=_p(l,r,u),p=r,y={},b=0;for(let S=0;S<c.length;S++){var A;const{name:V,fn:L}=c[S],{x:M,y:B,data:W,reset:G}=await L({x:d,y:f,initialPlacement:r,placement:p,strategy:i,middlewareData:y,rects:l,platform:{...o,detectOverflow:(A=o.detectOverflow)!=null?A:tk},elements:{reference:n,floating:e}});d=M??d,f=B??f,y={...y,[V]:{...y[V],...W}},G&&b<=50&&(b++,typeof G=="object"&&(G.placement&&(p=G.placement),G.rects&&(l=G.rects===!0?await o.getElementRects({reference:n,floating:e,strategy:i}):G.rects),{x:d,y:f}=_p(l,p,u)),S=-1)}return{x:d,y:f,placement:p,strategy:i,middlewareData:y}},rk=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:r,placement:i,rects:s,platform:o,elements:c,middlewareData:u}=e,{element:l,padding:d=0}=rn(n,e)||{};if(l==null)return{};const f=LI(d),p={x:t,y:r},y=ed(i),b=Zh(y),A=await o.getDimensions(l),S=y==="y",V=S?"top":"left",L=S?"bottom":"right",M=S?"clientHeight":"clientWidth",B=s.reference[b]+s.reference[y]-p[y]-s.floating[b],W=p[y]-s.reference[y],G=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l));let E=G?G[M]:0;(!E||!await(o.isElement==null?void 0:o.isElement(G)))&&(E=c.floating[M]||s.floating[b]);const _=B/2-W/2,w=E/2-A[b]/2-1,v=$n(f[V],w),T=$n(f[L],w),R=v,I=E-A[b]-T,ne=E/2-A[b]/2+_,he=yl(R,ne,I),F=!u.arrow&&Zi(i)!=null&&ne!==he&&s.reference[b]/2-(ne<R?v:T)-A[b]/2<0,J=F?ne<R?ne-R:ne-I:0;return{[y]:p[y]+J,data:{[y]:he,centerOffset:ne-he-J,...F&&{alignmentOffset:J}},reset:F}}}),ik=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t,r;const{placement:i,middlewareData:s,rects:o,initialPlacement:c,platform:u,elements:l}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:A=!0,...S}=rn(n,e);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const V=sn(i),L=Mt(c),M=sn(c)===c,B=await(u.isRTL==null?void 0:u.isRTL(l.floating)),W=p||(M||!A?[Ja(c)]:QC(c)),G=b!=="none";!p&&G&&W.push(...ZC(c,A,b,B));const E=[c,...W],_=await u.detectOverflow(e,S),w=[];let v=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&w.push(_[V]),f){const ne=KC(i,o,B);w.push(_[ne[0]],_[ne[1]])}if(v=[...v,{placement:i,overflows:w}],!w.every(ne=>ne<=0)){var T,R;const ne=(((T=s.flip)==null?void 0:T.index)||0)+1,he=E[ne];if(he&&(!(f==="alignment"?L!==Mt(he):!1)||v.every(N=>Mt(N.placement)===L?N.overflows[0]>0:!0)))return{data:{index:ne,overflows:v},reset:{placement:he}};let F=(R=v.filter(J=>J.overflows[0]<=0).sort((J,N)=>J.overflows[1]-N.overflows[1])[0])==null?void 0:R.placement;if(!F)switch(y){case"bestFit":{var I;const J=(I=v.filter(N=>{if(G){const ee=Mt(N.placement);return ee===L||ee==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(ee=>ee>0).reduce((ee,le)=>ee+le,0)]).sort((N,ee)=>N[1]-ee[1])[0])==null?void 0:I[0];J&&(F=J);break}case"initialPlacement":F=c;break}if(i!==F)return{reset:{placement:F}}}return{}}}};function yp(n,e){return{top:n.top-e.height,right:n.right-e.width,bottom:n.bottom-e.height,left:n.left-e.width}}function Ip(n){return GC.some(e=>n[e]>=0)}const sk=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(e){const{rects:t,platform:r}=e,{strategy:i="referenceHidden",...s}=rn(n,e);switch(i){case"referenceHidden":{const o=await r.detectOverflow(e,{...s,elementContext:"reference"}),c=yp(o,t.reference);return{data:{referenceHiddenOffsets:c,referenceHidden:Ip(c)}}}case"escaped":{const o=await r.detectOverflow(e,{...s,altBoundary:!0}),c=yp(o,t.floating);return{data:{escapedOffsets:c,escaped:Ip(c)}}}default:return{}}}}},FI=new Set(["left","top"]);async function ok(n,e){const{placement:t,platform:r,elements:i}=n,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=sn(t),c=Zi(t),u=Mt(t)==="y",l=FI.has(o)?-1:1,d=s&&u?-1:1,f=rn(e,n);let{mainAxis:p,crossAxis:y,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&typeof b=="number"&&(y=c==="end"?b*-1:b),u?{x:y*d,y:p*l}:{x:p*l,y:y*d}}const ak=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){var t,r;const{x:i,y:s,placement:o,middlewareData:c}=e,u=await ok(e,n);return o===((t=c.offset)==null?void 0:t.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+u.x,y:s+u.y,data:{...u,placement:o}}}}},ck=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:r,placement:i,platform:s}=e,{mainAxis:o=!0,crossAxis:c=!1,limiter:u={fn:V=>{let{x:L,y:M}=V;return{x:L,y:M}}},...l}=rn(n,e),d={x:t,y:r},f=await s.detectOverflow(e,l),p=Mt(sn(i)),y=Xh(p);let b=d[y],A=d[p];if(o){const V=y==="y"?"top":"left",L=y==="y"?"bottom":"right",M=b+f[V],B=b-f[L];b=yl(M,b,B)}if(c){const V=p==="y"?"top":"left",L=p==="y"?"bottom":"right",M=A+f[V],B=A-f[L];A=yl(M,A,B)}const S=u.fn({...e,[y]:b,[p]:A});return{...S,data:{x:S.x-t,y:S.y-r,enabled:{[y]:o,[p]:c}}}}}},uk=function(n){return n===void 0&&(n={}),{options:n,fn(e){const{x:t,y:r,placement:i,rects:s,middlewareData:o}=e,{offset:c=0,mainAxis:u=!0,crossAxis:l=!0}=rn(n,e),d={x:t,y:r},f=Mt(i),p=Xh(f);let y=d[p],b=d[f];const A=rn(c,e),S=typeof A=="number"?{mainAxis:A,crossAxis:0}:{mainAxis:0,crossAxis:0,...A};if(u){const M=p==="y"?"height":"width",B=s.reference[p]-s.floating[M]+S.mainAxis,W=s.reference[p]+s.reference[M]-S.mainAxis;y<B?y=B:y>W&&(y=W)}if(l){var V,L;const M=p==="y"?"width":"height",B=FI.has(sn(i)),W=s.reference[f]-s.floating[M]+(B&&((V=o.offset)==null?void 0:V[f])||0)+(B?0:S.crossAxis),G=s.reference[f]+s.reference[M]+(B?0:((L=o.offset)==null?void 0:L[f])||0)-(B?S.crossAxis:0);b<W?b=W:b>G&&(b=G)}return{[p]:y,[f]:b}}}},lk=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(e){var t,r;const{placement:i,rects:s,platform:o,elements:c}=e,{apply:u=()=>{},...l}=rn(n,e),d=await o.detectOverflow(e,l),f=sn(i),p=Zi(i),y=Mt(i)==="y",{width:b,height:A}=s.floating;let S,V;f==="top"||f==="bottom"?(S=f,V=p===(await(o.isRTL==null?void 0:o.isRTL(c.floating))?"start":"end")?"left":"right"):(V=f,S=p==="end"?"top":"bottom");const L=A-d.top-d.bottom,M=b-d.left-d.right,B=$n(A-d[S],L),W=$n(b-d[V],M),G=!e.middlewareData.shift;let E=B,_=W;if((t=e.middlewareData.shift)!=null&&t.enabled.x&&(_=M),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(E=L),G&&!p){const v=ft(d.left,0),T=ft(d.right,0),R=ft(d.top,0),I=ft(d.bottom,0);y?_=b-2*(v!==0||T!==0?v+T:ft(d.left,d.right)):E=A-2*(R!==0||I!==0?R+I:ft(d.top,d.bottom))}await u({...e,availableWidth:_,availableHeight:E});const w=await o.getDimensions(c.floating);return b!==w.width||A!==w.height?{reset:{rects:!0}}:{}}}};function Oc(){return typeof window<"u"}function es(n){return UI(n)?(n.nodeName||"").toLowerCase():"#document"}function _t(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Gt(n){var e;return(e=(UI(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function UI(n){return Oc()?n instanceof Node||n instanceof _t(n).Node:!1}function Rt(n){return Oc()?n instanceof Element||n instanceof _t(n).Element:!1}function jt(n){return Oc()?n instanceof HTMLElement||n instanceof _t(n).HTMLElement:!1}function wp(n){return!Oc()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof _t(n).ShadowRoot}const hk=new Set(["inline","contents"]);function Oo(n){const{overflow:e,overflowX:t,overflowY:r,display:i}=St(n);return/auto|scroll|overlay|hidden|clip/.test(e+r+t)&&!hk.has(i)}const dk=new Set(["table","td","th"]);function fk(n){return dk.has(es(n))}const mk=[":popover-open",":modal"];function Mc(n){return mk.some(e=>{try{return n.matches(e)}catch{return!1}})}const pk=["transform","translate","scale","rotate","perspective"],gk=["transform","translate","scale","rotate","perspective","filter"],_k=["paint","layout","strict","content"];function td(n){const e=nd(),t=Rt(n)?St(n):n;return pk.some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||gk.some(r=>(t.willChange||"").includes(r))||_k.some(r=>(t.contain||"").includes(r))}function yk(n){let e=Wn(n);for(;jt(e)&&!Oi(e);){if(td(e))return e;if(Mc(e))return null;e=Wn(e)}return null}function nd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ik=new Set(["html","body","#document"]);function Oi(n){return Ik.has(es(n))}function St(n){return _t(n).getComputedStyle(n)}function Lc(n){return Rt(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Wn(n){if(es(n)==="html")return n;const e=n.assignedSlot||n.parentNode||wp(n)&&n.host||Gt(n);return wp(e)?e.host:e}function BI(n){const e=Wn(n);return Oi(e)?n.ownerDocument?n.ownerDocument.body:n.body:jt(e)&&Oo(e)?e:BI(e)}function ho(n,e,t){var r;e===void 0&&(e=[]),t===void 0&&(t=!0);const i=BI(n),s=i===((r=n.ownerDocument)==null?void 0:r.body),o=_t(i);if(s){const c=wl(o);return e.concat(o,o.visualViewport||[],Oo(i)?i:[],c&&t?ho(c):[])}return e.concat(i,ho(i,[],t))}function wl(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function qI(n){const e=St(n);let t=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=jt(n),s=i?n.offsetWidth:t,o=i?n.offsetHeight:r,c=Qa(t)!==s||Qa(r)!==o;return c&&(t=s,r=o),{width:t,height:r,$:c}}function rd(n){return Rt(n)?n:n.contextElement}function fi(n){const e=rd(n);if(!jt(e))return qt(1);const t=e.getBoundingClientRect(),{width:r,height:i,$:s}=qI(e);let o=(s?Qa(t.width):t.width)/r,c=(s?Qa(t.height):t.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!c||!Number.isFinite(c))&&(c=1),{x:o,y:c}}const wk=qt(0);function zI(n){const e=_t(n);return!nd()||!e.visualViewport?wk:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ek(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==_t(n)?!1:e}function Nr(n,e,t,r){e===void 0&&(e=!1),t===void 0&&(t=!1);const i=n.getBoundingClientRect(),s=rd(n);let o=qt(1);e&&(r?Rt(r)&&(o=fi(r)):o=fi(n));const c=Ek(s,t,r)?zI(s):qt(0);let u=(i.left+c.x)/o.x,l=(i.top+c.y)/o.y,d=i.width/o.x,f=i.height/o.y;if(s){const p=_t(s),y=r&&Rt(r)?_t(r):r;let b=p,A=wl(b);for(;A&&r&&y!==b;){const S=fi(A),V=A.getBoundingClientRect(),L=St(A),M=V.left+(A.clientLeft+parseFloat(L.paddingLeft))*S.x,B=V.top+(A.clientTop+parseFloat(L.paddingTop))*S.y;u*=S.x,l*=S.y,d*=S.x,f*=S.y,u+=M,l+=B,b=_t(A),A=wl(b)}}return Ya({width:d,height:f,x:u,y:l})}function Fc(n,e){const t=Lc(n).scrollLeft;return e?e.left+t:Nr(Gt(n)).left+t}function jI(n,e){const t=n.getBoundingClientRect(),r=t.left+e.scrollLeft-Fc(n,t),i=t.top+e.scrollTop;return{x:r,y:i}}function Tk(n){let{elements:e,rect:t,offsetParent:r,strategy:i}=n;const s=i==="fixed",o=Gt(r),c=e?Mc(e.floating):!1;if(r===o||c&&s)return t;let u={scrollLeft:0,scrollTop:0},l=qt(1);const d=qt(0),f=jt(r);if((f||!f&&!s)&&((es(r)!=="body"||Oo(o))&&(u=Lc(r)),jt(r))){const y=Nr(r);l=fi(r),d.x=y.x+r.clientLeft,d.y=y.y+r.clientTop}const p=o&&!f&&!s?jI(o,u):qt(0);return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-u.scrollLeft*l.x+d.x+p.x,y:t.y*l.y-u.scrollTop*l.y+d.y+p.y}}function vk(n){return Array.from(n.getClientRects())}function bk(n){const e=Gt(n),t=Lc(n),r=n.ownerDocument.body,i=ft(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=ft(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-t.scrollLeft+Fc(n);const c=-t.scrollTop;return St(r).direction==="rtl"&&(o+=ft(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:c}}const Ep=25;function Ak(n,e){const t=_t(n),r=Gt(n),i=t.visualViewport;let s=r.clientWidth,o=r.clientHeight,c=0,u=0;if(i){s=i.width,o=i.height;const d=nd();(!d||d&&e==="fixed")&&(c=i.offsetLeft,u=i.offsetTop)}const l=Fc(r);if(l<=0){const d=r.ownerDocument,f=d.body,p=getComputedStyle(f),y=d.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,b=Math.abs(r.clientWidth-f.clientWidth-y);b<=Ep&&(s-=b)}else l<=Ep&&(s+=l);return{width:s,height:o,x:c,y:u}}const Rk=new Set(["absolute","fixed"]);function Sk(n,e){const t=Nr(n,!0,e==="fixed"),r=t.top+n.clientTop,i=t.left+n.clientLeft,s=jt(n)?fi(n):qt(1),o=n.clientWidth*s.x,c=n.clientHeight*s.y,u=i*s.x,l=r*s.y;return{width:o,height:c,x:u,y:l}}function Tp(n,e,t){let r;if(e==="viewport")r=Ak(n,t);else if(e==="document")r=bk(Gt(n));else if(Rt(e))r=Sk(e,t);else{const i=zI(n);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Ya(r)}function GI(n,e){const t=Wn(n);return t===e||!Rt(t)||Oi(t)?!1:St(t).position==="fixed"||GI(t,e)}function Pk(n,e){const t=e.get(n);if(t)return t;let r=ho(n,[],!1).filter(c=>Rt(c)&&es(c)!=="body"),i=null;const s=St(n).position==="fixed";let o=s?Wn(n):n;for(;Rt(o)&&!Oi(o);){const c=St(o),u=td(o);!u&&c.position==="fixed"&&(i=null),(s?!u&&!i:!u&&c.position==="static"&&!!i&&Rk.has(i.position)||Oo(o)&&!u&&GI(n,o))?r=r.filter(d=>d!==o):i=c,o=Wn(o)}return e.set(n,r),r}function Ck(n){let{element:e,boundary:t,rootBoundary:r,strategy:i}=n;const o=[...t==="clippingAncestors"?Mc(e)?[]:Pk(e,this._c):[].concat(t),r],c=o[0],u=o.reduce((l,d)=>{const f=Tp(e,d,i);return l.top=ft(f.top,l.top),l.right=$n(f.right,l.right),l.bottom=$n(f.bottom,l.bottom),l.left=ft(f.left,l.left),l},Tp(e,c,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function kk(n){const{width:e,height:t}=qI(n);return{width:e,height:t}}function Dk(n,e,t){const r=jt(e),i=Gt(e),s=t==="fixed",o=Nr(n,!0,s,e);let c={scrollLeft:0,scrollTop:0};const u=qt(0);function l(){u.x=Fc(i)}if(r||!r&&!s)if((es(e)!=="body"||Oo(i))&&(c=Lc(e)),r){const y=Nr(e,!0,s,e);u.x=y.x+e.clientLeft,u.y=y.y+e.clientTop}else i&&l();s&&!r&&i&&l();const d=i&&!r&&!s?jI(i,c):qt(0),f=o.left+c.scrollLeft-u.x-d.x,p=o.top+c.scrollTop-u.y-d.y;return{x:f,y:p,width:o.width,height:o.height}}function ku(n){return St(n).position==="static"}function vp(n,e){if(!jt(n)||St(n).position==="fixed")return null;if(e)return e(n);let t=n.offsetParent;return Gt(n)===t&&(t=t.ownerDocument.body),t}function $I(n,e){const t=_t(n);if(Mc(n))return t;if(!jt(n)){let i=Wn(n);for(;i&&!Oi(i);){if(Rt(i)&&!ku(i))return i;i=Wn(i)}return t}let r=vp(n,e);for(;r&&fk(r)&&ku(r);)r=vp(r,e);return r&&Oi(r)&&ku(r)&&!td(r)?t:r||yk(n)||t}const Vk=async function(n){const e=this.getOffsetParent||$I,t=this.getDimensions,r=await t(n.floating);return{reference:Dk(n.reference,await e(n.floating),n.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Nk(n){return St(n).direction==="rtl"}const xk={convertOffsetParentRelativeRectToViewportRelativeRect:Tk,getDocumentElement:Gt,getClippingRect:Ck,getOffsetParent:$I,getElementRects:Vk,getClientRects:vk,getDimensions:kk,getScale:fi,isElement:Rt,isRTL:Nk};function WI(n,e){return n.x===e.x&&n.y===e.y&&n.width===e.width&&n.height===e.height}function Ok(n,e){let t=null,r;const i=Gt(n);function s(){var c;clearTimeout(r),(c=t)==null||c.disconnect(),t=null}function o(c,u){c===void 0&&(c=!1),u===void 0&&(u=1),s();const l=n.getBoundingClientRect(),{left:d,top:f,width:p,height:y}=l;if(c||e(),!p||!y)return;const b=oa(f),A=oa(i.clientWidth-(d+p)),S=oa(i.clientHeight-(f+y)),V=oa(d),M={rootMargin:-b+"px "+-A+"px "+-S+"px "+-V+"px",threshold:ft(0,$n(1,u))||1};let B=!0;function W(G){const E=G[0].intersectionRatio;if(E!==u){if(!B)return o();E?o(!1,E):r=setTimeout(()=>{o(!1,1e-7)},1e3)}E===1&&!WI(l,n.getBoundingClientRect())&&o(),B=!1}try{t=new IntersectionObserver(W,{...M,root:i.ownerDocument})}catch{t=new IntersectionObserver(W,M)}t.observe(n)}return o(!0),s}function b0(n,e,t,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,l=rd(n),d=i||s?[...l?ho(l):[],...ho(e)]:[];d.forEach(V=>{i&&V.addEventListener("scroll",t,{passive:!0}),s&&V.addEventListener("resize",t)});const f=l&&c?Ok(l,t):null;let p=-1,y=null;o&&(y=new ResizeObserver(V=>{let[L]=V;L&&L.target===l&&y&&(y.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var M;(M=y)==null||M.observe(e)})),t()}),l&&!u&&y.observe(l),y.observe(e));let b,A=u?Nr(n):null;u&&S();function S(){const V=Nr(n);A&&!WI(A,V)&&t(),A=V,b=requestAnimationFrame(S)}return t(),()=>{var V;d.forEach(L=>{i&&L.removeEventListener("scroll",t),s&&L.removeEventListener("resize",t)}),f?.(),(V=y)==null||V.disconnect(),y=null,u&&cancelAnimationFrame(b)}}const Mk=ak,Lk=ck,Fk=ik,Uk=lk,Bk=sk,bp=rk,qk=uk,zk=(n,e,t)=>{const r=new Map,i={platform:xk,...t},s={...i.platform,_c:r};return nk(n,e,{...i,platform:s})};var jk=typeof document<"u",Gk=function(){},Aa=jk?xe.useLayoutEffect:Gk;function Xa(n,e){if(n===e)return!0;if(typeof n!=typeof e)return!1;if(typeof n=="function"&&n.toString()===e.toString())return!0;let t,r,i;if(n&&e&&typeof n=="object"){if(Array.isArray(n)){if(t=n.length,t!==e.length)return!1;for(r=t;r--!==0;)if(!Xa(n[r],e[r]))return!1;return!0}if(i=Object.keys(n),t=i.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(e,i[r]))return!1;for(r=t;r--!==0;){const s=i[r];if(!(s==="_owner"&&n.$$typeof)&&!Xa(n[s],e[s]))return!1}return!0}return n!==n&&e!==e}function HI(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function Ap(n,e){const t=HI(n);return Math.round(e*t)/t}function Du(n){const e=xe.useRef(n);return Aa(()=>{e.current=n}),e}function A0(n){n===void 0&&(n={});const{placement:e="bottom",strategy:t="absolute",middleware:r=[],platform:i,elements:{reference:s,floating:o}={},transform:c=!0,whileElementsMounted:u,open:l}=n,[d,f]=xe.useState({x:0,y:0,strategy:t,placement:e,middlewareData:{},isPositioned:!1}),[p,y]=xe.useState(r);Xa(p,r)||y(r);const[b,A]=xe.useState(null),[S,V]=xe.useState(null),L=xe.useCallback(N=>{N!==G.current&&(G.current=N,A(N))},[]),M=xe.useCallback(N=>{N!==E.current&&(E.current=N,V(N))},[]),B=s||b,W=o||S,G=xe.useRef(null),E=xe.useRef(null),_=xe.useRef(d),w=u!=null,v=Du(u),T=Du(i),R=Du(l),I=xe.useCallback(()=>{if(!G.current||!E.current)return;const N={placement:e,strategy:t,middleware:p};T.current&&(N.platform=T.current),zk(G.current,E.current,N).then(ee=>{const le={...ee,isPositioned:R.current!==!1};ne.current&&!Xa(_.current,le)&&(_.current=le,vw.flushSync(()=>{f(le)}))})},[p,e,t,T,R]);Aa(()=>{l===!1&&_.current.isPositioned&&(_.current.isPositioned=!1,f(N=>({...N,isPositioned:!1})))},[l]);const ne=xe.useRef(!1);Aa(()=>(ne.current=!0,()=>{ne.current=!1}),[]),Aa(()=>{if(B&&(G.current=B),W&&(E.current=W),B&&W){if(v.current)return v.current(B,W,I);I()}},[B,W,I,v,w]);const he=xe.useMemo(()=>({reference:G,floating:E,setReference:L,setFloating:M}),[L,M]),F=xe.useMemo(()=>({reference:B,floating:W}),[B,W]),J=xe.useMemo(()=>{const N={position:t,left:0,top:0};if(!F.floating)return N;const ee=Ap(F.floating,d.x),le=Ap(F.floating,d.y);return c?{...N,transform:"translate("+ee+"px, "+le+"px)",...HI(F.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:ee,top:le}},[t,c,F.floating,d.x,d.y]);return xe.useMemo(()=>({...d,update:I,refs:he,elements:F,floatingStyles:J}),[d,I,he,F,J])}const $k=n=>{function e(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:n,fn(t){const{element:r,padding:i}=typeof n=="function"?n(t):n;return r&&e(r)?r.current!=null?bp({element:r.current,padding:i}).fn(t):{}:r?bp({element:r,padding:i}).fn(t):{}}}},R0=(n,e)=>({...Mk(n),options:[n,e]}),S0=(n,e)=>({...Lk(n),options:[n,e]}),P0=(n,e)=>({...qk(n),options:[n,e]}),C0=(n,e)=>({...Fk(n),options:[n,e]}),k0=(n,e)=>({...Uk(n),options:[n,e]}),D0=(n,e)=>({...Bk(n),options:[n,e]}),V0=(n,e)=>({...$k(n),options:[n,e]});var Wk=function(n){if(typeof document>"u")return null;var e=Array.isArray(n)?n[0]:n;return e.ownerDocument.body},ti=new WeakMap,aa=new WeakMap,ca={},Vu=0,KI=function(n){return n&&(n.host||KI(n.parentNode))},Hk=function(n,e){return e.map(function(t){if(n.contains(t))return t;var r=KI(t);return r&&n.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",n,". Doing nothing"),null)}).filter(function(t){return!!t})},Kk=function(n,e,t,r){var i=Hk(e,Array.isArray(n)?n:[n]);ca[t]||(ca[t]=new WeakMap);var s=ca[t],o=[],c=new Set,u=new Set(i),l=function(f){!f||c.has(f)||(c.add(f),l(f.parentNode))};i.forEach(l);var d=function(f){!f||u.has(f)||Array.prototype.forEach.call(f.children,function(p){if(c.has(p))d(p);else try{var y=p.getAttribute(r),b=y!==null&&y!=="false",A=(ti.get(p)||0)+1,S=(s.get(p)||0)+1;ti.set(p,A),s.set(p,S),o.push(p),A===1&&b&&aa.set(p,!0),S===1&&p.setAttribute(t,"true"),b||p.setAttribute(r,"true")}catch(V){console.error("aria-hidden: cannot operate on ",p,V)}})};return d(e),c.clear(),Vu++,function(){o.forEach(function(f){var p=ti.get(f)-1,y=s.get(f)-1;ti.set(f,p),s.set(f,y),p||(aa.has(f)||f.removeAttribute(r),aa.delete(f)),y||f.removeAttribute(t)}),Vu--,Vu||(ti=new WeakMap,ti=new WeakMap,aa=new WeakMap,ca={})}},N0=function(n,e,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(n)?n:[n]),i=Wk(n);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live], script"))),Kk(r,i,t,"aria-hidden")):function(){return null}},Za=function(){return Za=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Za.apply(this,arguments)};function Qk(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function x0(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))}function Nu(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function Jk(n,e){var t=xe.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var i=t.value;i!==r&&(t.value=r,t.callback(r,i))}}}})[0];return t.callback=e,t.facade}var Yk=typeof window<"u"?xe.useLayoutEffect:xe.useEffect,Rp=new WeakMap;function O0(n,e){var t=Jk(null,function(r){return n.forEach(function(i){return Nu(i,r)})});return Yk(function(){var r=Rp.get(t);if(r){var i=new Set(r),s=new Set(n),o=t.current;i.forEach(function(c){s.has(c)||Nu(c,null)}),s.forEach(function(c){i.has(c)||Nu(c,o)})}Rp.set(t,n)},[n]),t}function Xk(n){return n}function Zk(n,e){e===void 0&&(e=Xk);var t=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(s){var o=e(s,r);return t.push(o),function(){t=t.filter(function(c){return c!==o})}},assignSyncMedium:function(s){for(r=!0;t.length;){var o=t;t=[],o.forEach(s)}t={push:function(c){return s(c)},filter:function(){return t}}},assignMedium:function(s){r=!0;var o=[];if(t.length){var c=t;t=[],c.forEach(s),o=t}var u=function(){var d=o;o=[],d.forEach(s)},l=function(){return Promise.resolve().then(u)};l(),t={push:function(d){o.push(d),l()},filter:function(d){return o=o.filter(d),t}}}};return i}function M0(n){n===void 0&&(n={});var e=Zk(null);return e.options=Za({async:!0,ssr:!1},n),e}var QI=function(n){var e=n.sideCar,t=Qk(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return xe.createElement(r,Za({},t))};QI.isSideCarExport=!0;function L0(n,e){return n.useMedium(e),QI}var F0=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__},xu={exports:{}},Ou={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function eD(){if(Sp)return Ou;Sp=1;var n=bw();function e(f,p){return f===p&&(f!==0||1/f===1/p)||f!==f&&p!==p}var t=typeof Object.is=="function"?Object.is:e,r=n.useState,i=n.useEffect,s=n.useLayoutEffect,o=n.useDebugValue;function c(f,p){var y=p(),b=r({inst:{value:y,getSnapshot:p}}),A=b[0].inst,S=b[1];return s(function(){A.value=y,A.getSnapshot=p,u(A)&&S({inst:A})},[f,y,p]),i(function(){return u(A)&&S({inst:A}),f(function(){u(A)&&S({inst:A})})},[f]),o(y),y}function u(f){var p=f.getSnapshot;f=f.value;try{var y=p();return!t(f,y)}catch{return!0}}function l(f,p){return p()}var d=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?l:c;return Ou.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:d,Ou}var Pp;function tD(){return Pp||(Pp=1,xu.exports=eD()),xu.exports}var U0=tD();export{PD as $,hD as A,NA as B,cD as C,uD as D,Qs as E,bn as F,Rn as G,jl as H,Sn as I,ED as J,gb as K,WD as L,vb as M,VA as N,Zt as O,yr as P,Ug as Q,HD as R,zu as S,xA as T,ab as U,wD as V,Mv as W,vD as X,dD as Y,jD as Z,Qk as _,Za as a,jC as a$,xD as a0,sV as a1,mD as a2,cv as a3,GD as a4,iV as a5,Rf as a6,Mb as a7,xv as a8,MD as a9,XD as aA,tV as aB,qD as aC,_D as aD,BD as aE,VD as aF,ND as aG,YD as aH,DD as aI,UD as aJ,LD as aK,kD as aL,TD as aM,kI as aN,uo as aO,SC as aP,mt as aQ,pV as aR,Ut as aS,pe as aT,pt as aU,Yi as aV,Ur as aW,_e as aX,x as aY,Bt as aZ,EC as a_,RD as aa,ib as ab,QD as ac,eV as ad,rV as ae,$D as af,FD as ag,pb as ah,pD as ai,JT as aj,sb as ak,JD as al,ZD as am,nV as an,hv as ao,zD as ap,CD as aq,ID as ar,AD as as,OD as at,gD as au,Vl as av,yD as aw,bD as ax,SD as ay,KD as az,x0 as b,c0 as b$,Je as b0,Xi as b1,Vo as b2,ba as b3,Nc as b4,No as b5,Dc as b6,Kh as b7,gt as b8,Vc as b9,WV as bA,wV as bB,dV as bC,fV as bD,IC as bE,CC as bF,T0 as bG,f0 as bH,RV as bI,vV as bJ,E0 as bK,wC as bL,AV as bM,t0 as bN,yV as bO,IV as bP,TV as bQ,w0 as bR,GV as bS,jV as bT,Pe as bU,xo as bV,kC as bW,QV as bX,s0 as bY,o0 as bZ,a0 as b_,Dn as ba,de as bb,zC as bc,wt as bd,BC as be,$l as bf,Ve as bg,vr as bh,q as bi,cV as bj,jA as bk,Ae as bl,v0 as bm,oe as bn,aV as bo,NV as bp,VV as bq,lV as br,yt as bs,ZA as bt,m0 as bu,HV as bv,KV as bw,LV as bx,CV as by,PV as bz,M0 as c,u0 as c0,l0 as c1,_V as c2,I0 as c3,kV as c4,gV as c5,UV as c6,BV as c7,ap as c8,JV as c9,DV as cA,EV as cB,OV as cC,_0 as cD,_r as cE,U0 as cF,iD as cG,oD as cH,FT as cI,sD as cJ,Rw as cK,XV as ca,YV as cb,TC as cc,dp as cd,p0 as ce,g0 as cf,MV as cg,FV as ch,ZV as ci,e0 as cj,LC as ck,xV as cl,wI as cm,n0 as cn,mV as co,i0 as cp,SV as cq,h0 as cr,y0 as cs,oV as ct,r0 as cu,zV as cv,qV as cw,$V as cx,bV as cy,d0 as cz,A0 as d,L0 as e,C0 as f,F0 as g,k0 as h,V0 as i,D0 as j,b0 as k,P0 as l,N0 as m,yo as n,R0 as o,_o as p,fD as q,rD as r,S0 as s,Or as t,O0 as u,aD as v,An as w,ha as x,lD as y,ui as z};
