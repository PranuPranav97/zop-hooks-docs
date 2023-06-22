"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=o,g=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7294),o=n(3727),a=n(2263),i=n(3919),s=n(412);const c=(0,r.createContext)({collectLink:()=>{}});var l=n(4996),u=n(8780);const f=function(e){let{isNavLink:t,to:n,href:f,activeClassName:d,isActive:p,"data-noBrokenLinkCheck":g,autoAddBaseUrl:v=!0,...m}=e;var h;const{siteConfig:{trailingSlash:y,baseUrl:b}}=(0,a.Z)(),{withBaseUrl:w}=(0,l.C)(),_=(0,r.useContext)(c),P=n||f,E=(0,i.Z)(P),O=null==P?void 0:P.replace("pathname://","");let D=void 0!==O?(S=O,v&&(e=>e.startsWith("/"))(S)?w(S):S):void 0;var S;D&&E&&(D=(0,u.applyTrailingSlash)(D,{trailingSlash:y,baseUrl:b}));const j=(0,r.useRef)(!1),A=t?o.OL:o.rU,x=s.Z.canUseIntersectionObserver;let C;(0,r.useEffect)((()=>(!x&&E&&null!=D&&window.docusaurus.prefetch(D),()=>{x&&C&&C.disconnect()})),[D,x,E]);const k=null!==(h=null==D?void 0:D.startsWith("#"))&&void 0!==h&&h,T=!D||!E||k;return D&&E&&!k&&!g&&_.collectLink(D),T?r.createElement("a",{href:D,...P&&!E&&{target:"_blank",rel:"noopener noreferrer"},...m}):r.createElement(A,{...m,onMouseEnter:()=>{j.current||null==D||(window.docusaurus.preload(D),j.current=!0)},innerRef:e=>{var t,n;x&&e&&E&&(t=e,n=()=>{null!=D&&window.docusaurus.prefetch(D)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:D||"",...t&&{isActive:p,activeClassName:d}})}},4973:(e,t,n)=>{n.d(t,{Z:()=>f,I:()=>u});var r=n(7294);const o=/{\w+}/g,a="{}";function i(e,t){const n=[],i=e.replace(o,(e=>{const o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){const e=r.isValidElement(i)?i:String(i);return n.push(e),a}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?i.split(a).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(a).reduce(((e,t,o)=>[...e,r.createElement(r.Fragment,{key:o},t,n[o])]),[])}function s(e){let{children:t,values:n}=e;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,n)}var c=n(7529);function l(e){let{id:t,message:n}=e;var r;return null!==(r=c[null!=t?t:n])&&void 0!==r?r:n}function u(e,t){let{message:n,id:r}=e;var o;return i(null!==(o=l({message:n,id:r}))&&void 0!==o?o:n,t)}function f(e){let{children:t,id:n,values:o}=e;var a;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");const i=null!==(a=l({message:t,id:n}))&&void 0!==a?a:t;return r.createElement(s,{values:o},i)}},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{Z:()=>o,b:()=>r})},8143:(e,t,n)=>{n.r(t),n.d(t,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(3727)},4996:(e,t,n)=>{n.d(t,{C:()=>a,Z:()=>i});var r=n(2263),o=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:a=!1,absolute:i=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+s:s}(t,e,n,r)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:n}=a();return n(e,t)}},8084:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a,useAllPluginInstancesData:()=>i,usePluginData:()=>s});var r=n(2263);const o="default";function a(){const{globalData:e}=(0,r.Z)();if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){const t=a()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);return t}function s(e,t){void 0===t&&(t=o);const n=i(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);return n}},2389:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(9913);function a(){return(0,r.useContext)(o._)}},8408:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(8143);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});const o=Object.entries(e).find((e=>{let[n,o]=e;return!!r.matchPath(t,{path:o.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error(`Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return a};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),a=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:a,alternateDocVersions:a?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(a.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(7582),o=n(8143),a=r.__importStar(n(8084)),i=n(8408),s={};t.useAllDocsData=()=>{var e;return null!==(e=a.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:s};t.useDocsData=e=>a.usePluginData("docusaurus-plugin-content-docs",e);t.useActivePlugin=function(e){void 0===e&&(e={});const n=t.useAllDocsData(),{pathname:r}=o.useLocation();return i.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});const n=t.useActivePlugin(e),{pathname:r}=o.useLocation();if(n){return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}}};t.useVersions=e=>t.useDocsData(e).versions;t.useLatestVersion=e=>{const n=t.useDocsData(e);return i.getLatestVersion(n)};t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return i.getActiveVersion(n,r)};t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return i.getActiveDocContext(n,r)};t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return i.getDocVersionSuggestions(n,r)}},1217:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),o=n(9105),a=n(941),i=n(4996);function s(e){let{title:t,description:n,keywords:s,image:c,children:l}=e;const u=(0,a.pe)(t),{withBaseUrl:f}=(0,i.C)(),d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),s&&r.createElement("meta",{name:"keywords",content:Array.isArray(s)?s.join(","):s}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),l)}},907:(e,t,n)=>{n.d(t,{Iw:()=>r.useActiveDocContext,Jo:()=>r.useDocVersionSuggestions,_r:()=>r.useAllDocsData,gA:()=>r.useActivePlugin,gB:()=>r.useVersions,yW:()=>r.useLatestVersion,zh:()=>r.useDocsData,zu:()=>r.useActiveVersion});var r=n(6730)},3783:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),o=n(412);const a={desktop:"desktop",mobile:"mobile",ssr:"ssr"},i=996;function s(){return o.Z.canUseDOM?window.innerWidth>i?a.desktop:a.mobile:a.ssr}const c=function(){const[e,t]=(0,r.useState)((()=>s()));return(0,r.useEffect)((()=>{function e(){t(s())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},941:(e,t,n)=>{n.d(t,{pl:()=>ge,zF:()=>F,HX:()=>v,PO:()=>G,L5:()=>oe,Cv:()=>Q,Cn:()=>X,kM:()=>ce,WA:()=>l,os:()=>m,Mg:()=>b,_f:()=>u,PZ:()=>be,bc:()=>g,MA:()=>ye,l5:()=>d,nT:()=>ve,uR:()=>k,J:()=>se,Rb:()=>we,be:()=>me,SL:()=>A,g8:()=>J,c2:()=>S,D9:()=>j,LU:()=>o,pe:()=>w});var r=n(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}const a="localStorage";function i(e){if(void 0===e&&(e=a),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,s||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),s=!0),null}var t}let s=!1;const c={get:()=>null,set:()=>{},del:()=>{}};const l=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t}}(e);const n=i(null==t?void 0:t.persistence);return null===n?c:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}};function u(e){void 0===e&&(e=a);const t=i(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}var f=n(6550);function d(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:o}}=(0,r.Z)(),{pathname:a}=(0,f.TH)(),i=o===n?e:e.replace(`/${o}/`,"/"),s=a.replace(e,"");return{createUrl:function(e){let{locale:r,fullyQualified:o}=e;return`${o?t:""}${function(e){return e===n?`${i}`:`${i}${e}/`}(r)}${s}`}}}const p=/title=(["'])(.*?)\1/;function g(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(p))||void 0===t?void 0:t[2])&&void 0!==n?n:""}const v="default";function m(e,t){return`docs-${e}-${t}`}var h=n(907);const y=!!h._r,b=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)},w=e=>{const{siteConfig:t}=(0,r.Z)(),{title:n,titleDelimiter:o}=t;return e&&e.trim().length?`${e.trim()} ${o} ${n}`:n};var _=n(7294);const P=["zero","one","two","few","many","other"];function E(e){return P.filter((t=>e.includes(t)))}const O={locale:"en",pluralForms:E(["one","other"]),select:e=>1===e?"one":"other"};function D(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,_.useMemo)((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),O;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:E(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),O}}),[e])}function S(){const e=D();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}}(n,t,e)}}function j(e){const t=(0,_.useRef)();return(0,_.useEffect)((()=>{t.current=e})),t.current}function A(e){const t=(0,f.TH)(),n=j(t),r=(0,_.useRef)(!0);(0,_.useEffect)((()=>{r.current?r.current=!1:e({location:t,previousLocation:n})}),[t])}var x=n(412);const C="ease-in-out";function k(e){let{initialState:t}=e;const[n,r]=(0,_.useState)(null!=t&&t),o=(0,_.useCallback)((()=>{r((e=>!e))}),[]);return{collapsed:n,setCollapsed:r,toggleCollapsed:o}}const T={display:"none",overflow:"hidden",height:"0px"},V={display:"block",overflow:"visible",height:"auto"};function I(e,t){const n=t?T:V;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function L(e){let{collapsibleRef:t,collapsed:n,animation:r}=e;const o=(0,_.useRef)(!1);(0,_.useEffect)((()=>{const e=t.current;function a(){var t,n;const o=e.scrollHeight,a=null!==(t=null==r?void 0:r.duration)&&void 0!==t?t:function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(o);return{transition:`height ${a}ms ${null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:C}`,height:`${o}px`}}function i(){const t=a();e.style.transition=t.transition,e.style.height=t.height}if(!o.current)return I(e,n),void(o.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(i(),requestAnimationFrame((()=>{e.style.height=T.height,e.style.overflow=T.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{i()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,r])}function R(e){if(!x.Z.canUseDOM)return e?T:V}function M(e){let{as:t="div",collapsed:n,children:r,animation:o,onCollapseTransitionEnd:a,className:i,disableSSRStyle:s}=e;const c=(0,_.useRef)(null);return L({collapsibleRef:c,collapsed:n,animation:o}),_.createElement(t,{ref:c,style:s?void 0:R(n),onTransitionEnd:e=>{if("height"!==e.propertyName)return;const t=c.current,r=t.style.height;n||parseInt(r,10)!==t.scrollHeight||(I(t,!1),null==a||a(!1)),r===T.height&&(I(t,!0),null==a||a(!0))},className:i},r)}function $(e){let{collapsed:t,...n}=e;const[r,o]=(0,_.useState)(!t);(0,_.useLayoutEffect)((()=>{t||o(!0)}),[t]);const[a,i]=(0,_.useState)(t);return(0,_.useLayoutEffect)((()=>{r&&i(t)}),[r,t]),r?_.createElement(M,{...n,collapsed:a}):null}function F(e){let{lazy:t,...n}=e;const r=t?$:M;return _.createElement(r,{...n})}var Z=n(2389),N=n(6010);const U="details_Q743",B="isBrowser_rWTL",z="collapsibleContent_K5uX";function W(e){return!!e&&("SUMMARY"===e.tagName||W(e.parentElement))}function H(e,t){return!!e&&(e===t||H(e.parentElement,t))}const G=e=>{let{summary:t,children:n,...r}=e;const o=(0,Z.Z)(),a=(0,_.useRef)(null),{collapsed:i,setCollapsed:s}=k({initialState:!r.open}),[c,l]=(0,_.useState)(r.open);return _.createElement("details",{...r,ref:a,open:c,"data-collapsed":i,className:(0,N.Z)(U,{[B]:o},r.className),onMouseDown:e=>{W(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;W(t)&&H(t,a.current)&&(e.preventDefault(),i?(s(!1),l(!0)):s(!0))}},t,_.createElement(F,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),l(!e)}},_.createElement("div",{className:z},n)))};const q=(0,_.createContext)(null);function X(e){let{children:t}=e;return _.createElement(q.Provider,{value:(0,_.useState)(null)},t)}function K(){const e=(0,_.useContext)(q);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function J(){const[e]=K();if(e){const t=e.component;return function(n){return _.createElement(t,{...e.props,...n})}}return()=>{}}function Q(e){let{component:t,props:n}=e;const[,r]=K(),o=(a=n,(0,_.useMemo)((()=>a),[...Object.keys(a),...Object.values(a)]));var a;return(0,_.useEffect)((()=>{r({component:t,props:o})}),[r,t,o]),(0,_.useEffect)((()=>()=>r(null)),[r]),null}const Y=e=>`docs-preferred-version-${e}`,ee={save:(e,t,n)=>{l(Y(e),{persistence:t}).set(n)},read:(e,t)=>l(Y(e),{persistence:t}).get(),clear:(e,t)=>{l(Y(e),{persistence:t}).del()}};function te(e){let{pluginIds:t,versionPersistence:n,allDocsData:r}=e;const o={};return t.forEach((e=>{o[e]=function(e){const t=ee.read(e,n);return r[e].versions.some((e=>e.name===t))?{preferredVersionName:t}:(ee.clear(e,n),{preferredVersionName:null})}(e)})),o}function ne(){const e=(0,h._r)(),t=o().docs.versionPersistence,n=(0,_.useMemo)((()=>Object.keys(e)),[e]),[r,a]=(0,_.useState)((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));(0,_.useEffect)((()=>{a(te({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,(0,_.useMemo)((()=>({savePreferredVersion:function(e,n){ee.save(e,t,n),a((t=>({...t,[e]:{preferredVersionName:n}})))}})),[a])]}const re=(0,_.createContext)(null);function oe(e){let{children:t}=e;return y?_.createElement(ae,null,t):_.createElement(_.Fragment,null,t)}function ae(e){let{children:t}=e;const n=ne();return _.createElement(re.Provider,{value:n},t)}const ie="default";function se(e){void 0===e&&(e=ie);const t=(0,h.zh)(e),[n,r]=function(){const e=(0,_.useContext)(re);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),{preferredVersionName:o}=n[e];return{preferredVersion:o?t.versions.find((e=>e.name===o)):null,savePreferredVersionName:(0,_.useCallback)((t=>{r.savePreferredVersion(e,t)}),[r])}}const ce={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link"},blog:{}},le=l("docusaurus.announcement.dismiss"),ue=l("docusaurus.announcement.id"),fe=()=>"true"===le.get(),de=e=>le.set(String(e)),pe=(0,_.createContext)(null),ge=e=>{let{children:t}=e;const n=(()=>{const{announcementBar:e}=o(),t=(0,Z.Z)(),[n,r]=(0,_.useState)((()=>!!t&&fe()));(0,_.useEffect)((()=>{r(fe())}),[]);const a=(0,_.useCallback)((()=>{de(!0),r(!0)}),[]);return(0,_.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=ue.get();"annoucement-bar"===n&&(n="announcement-bar");const o=t!==n;ue.set(t),o&&de(!1),!o&&fe()||r(!1)}),[]),(0,_.useMemo)((()=>({isClosed:n,close:a})),[n])})();return _.createElement(pe.Provider,{value:n},t)},ve=()=>{const e=(0,_.useContext)(pe);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function me(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{pathname:t}=(0,f.TH)();return t.replace(e,"/")}var he=n(4973);const ye=()=>(0,he.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function be(e){const t={};return Object.values(e).forEach((e=>{var n;const r=function(e){return e[0].toUpperCase()}(e.name);t[r]=null!==(n=t[r])&&void 0!==n?n:[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[n]=e,[r]=t;return n.localeCompare(r)})).map((e=>{let[t,n]=e;return{letter:t,tags:n.sort(((e,t)=>e.name.localeCompare(t.name)))}}))}function we(e){!function(e){const{block:t}=(0,f.k6)(),n=(0,_.useRef)(e);(0,_.useEffect)((()=>{n.current=e}),[e]),(0,_.useEffect)((()=>t(((e,t)=>n.current(e,t)))),[t,n])}(((t,n)=>{if("POP"===n)return e(t,n)}))}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(o,a)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6010:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},7582:(e,t,n)=>{n.r(t),n.d(t,{__assign:()=>a,__asyncDelegator:()=>D,__asyncGenerator:()=>O,__asyncValues:()=>S,__await:()=>E,__awaiter:()=>g,__classPrivateFieldGet:()=>k,__classPrivateFieldIn:()=>V,__classPrivateFieldSet:()=>T,__createBinding:()=>m,__decorate:()=>s,__esDecorate:()=>l,__exportStar:()=>h,__extends:()=>o,__generator:()=>v,__importDefault:()=>C,__importStar:()=>x,__makeTemplateObject:()=>j,__metadata:()=>p,__param:()=>c,__propKey:()=>f,__read:()=>b,__rest:()=>i,__runInitializers:()=>u,__setFunctionName:()=>d,__spread:()=>w,__spreadArray:()=>P,__spreadArrays:()=>_,__values:()=>y,default:()=>I});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function s(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t,n,r,o,a){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,c=r.kind,l="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?r.static?e:e.prototype:null,f=t||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),d=!1,p=n.length-1;p>=0;p--){var g={};for(var v in r)g[v]="access"===v?{}:r[v];for(var v in r.access)g.access[v]=r.access[v];g.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i(e||null))};var m=(0,n[p])("accessor"===c?{get:f.get,set:f.set}:f[l],g);if("accessor"===c){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(s=i(m.get))&&(f.get=s),(s=i(m.set))&&(f.set=s),(s=i(m.init))&&o.unshift(s)}else(s=i(m))&&("field"===c?o.unshift(s):f[l]=s)}u&&Object.defineProperty(u,r.name,f),d=!0}function u(e,t,n){for(var r=arguments.length>2,o=0;o<t.length;o++)n=r?t[o].call(e,n):t[o].call(e);return r?n:void 0}function f(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function g(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function s(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))}function v(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(c){s=[6,c],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}var m=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function h(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||m(t,e,n)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function _(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)r[o]=a[i];return r}function P(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function E(e){return this instanceof E?(this.v=e,this):new E(e)}function O(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=o[e](t)).value instanceof E?Promise.resolve(n.value.v).then(c,l):u(a[0][2],n)}catch(r){u(a[0][3],r)}var n}function c(e){s("next",e)}function l(e){s("throw",e)}function u(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}}function D(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:E(e[r](t)),done:!1}:o?o(t):t}:o}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=y(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function j(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var A=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&m(t,e,n);return A(t,e),t}function C(e){return e&&e.__esModule?e:{default:e}}function k(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function T(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function V(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}const I={__extends:o,__assign:a,__rest:i,__decorate:s,__param:c,__metadata:p,__awaiter:g,__generator:v,__createBinding:m,__exportStar:h,__values:y,__read:b,__spread:w,__spreadArrays:_,__spreadArray:P,__await:E,__asyncGenerator:O,__asyncDelegator:D,__asyncValues:S,__makeTemplateObject:j,__importStar:x,__importDefault:C,__classPrivateFieldGet:k,__classPrivateFieldSet:T,__classPrivateFieldIn:V}}}]);