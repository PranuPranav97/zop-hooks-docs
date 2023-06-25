"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4851:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},i=void 0,s={unversionedId:"Hooks/useOnlineStatus",id:"Hooks/useOnlineStatus",isDocsHomePage:!1,title:"useOnlineStatus",description:"useOnlineStatus",source:"@site/docs/Hooks/useOnlineStatus.md",sourceDirName:"Hooks",slug:"/Hooks/useOnlineStatus",permalink:"/zop-hooks-docs/docs/Hooks/useOnlineStatus",editUrl:"https://github.com/PranuPranav97/zop-hooks-docs",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},sidebar:"tutorialSidebar",previous:{title:"useMousePosition",permalink:"/zop-hooks-docs/docs/Hooks/useMousePosition"},next:{title:"usePageTimer",permalink:"/zop-hooks-docs/docs/Hooks/usePageTimer"}},l=[{value:"useOnlineStatus",id:"useonlinestatus",children:[{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]},{value:"Implementation Details",id:"implementation-details",children:[]}]}],u={toc:l},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"useonlinestatus"},"useOnlineStatus"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useOnlineStatus")," hook is a custom React hook that allows you to track the online status of the user's browser."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useOnlineStatus")," hook, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Import the hook into your React component:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useOnlineStatus } from "zop-hooks";\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Invoke the hook in your functional component:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const isOnline = useOnlineStatus();\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"isOnline")," variable will be a boolean value indicating whether the user's browser is currently online (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),") or offline (",(0,a.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Here's an example of how you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useOnlineStatus")," hook in a React component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import React from "react";\nimport { useOnlineStatus } from "./path/to/useOnlineStatus";\n\nfunction OnlineStatusComponent() {\n  const isOnline = useOnlineStatus();\n\n  return (\n    <div>\n      <p>Online Status: {isOnline ? "Online" : "Offline"}</p>\n    </div>\n  );\n}\n\nexport default OnlineStatusComponent;\n')),(0,a.kt)("p",null,"In the above example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"OnlineStatusComponent")," component uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"useOnlineStatus")," hook to track the online status of the user's browser and display it on the screen."),(0,a.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useOnlineStatus")," hook internally uses React's useState and ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hooks. It initializes the isOnline state to the initial value of ",(0,a.kt)("inlineCode",{parentName:"p"},"navigator.onLine"),", which represents the current online status of the browser."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook is used to add event listeners for the ",(0,a.kt)("inlineCode",{parentName:"p"},"online")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"offline")," events on the window object. When the browser goes online, the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleOnline")," function is called, updating the isOnline state to true. Conversely, when the browser goes ",(0,a.kt)("inlineCode",{parentName:"p"},"offline"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleOffline")," function is called, updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"isOnline")," state to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"To clean up the event listeners when the component unmounts or the hook dependencies change, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," hook returns a cleanup function that removes the event listeners."),(0,a.kt)("p",null,"Please note that this documentation assumes you have a basic understanding of React and React hooks. If you're new to React or hooks, it's recommended to read the official React documentation for more information."))}c.isMDXComponent=!0}}]);