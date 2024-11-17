"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[708],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var n=o(7294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var u=n.createContext({}),p=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=p(o),d=s,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return o?n.createElement(h,r(r({ref:t},l),{},{components:o})):n.createElement(h,r({ref:t},l))}));function h(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=o.length,r=new Array(i);r[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:s,r[1]=a;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1755:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=o(7462),s=(o(7294),o(3905));const i={custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},r=void 0,a={unversionedId:"useMousePosition",id:"useMousePosition",isDocsHomePage:!1,title:"useMousePosition",description:"useMousePosition",source:"@site/docs/useMousePosition.md",sourceDirName:".",slug:"/useMousePosition",permalink:"/zop-hooks-docs/docs/useMousePosition",editUrl:"https://github.com/PranuPranav97/zop-hooks-docs",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},sidebar:"tutorialSidebar",previous:{title:"useKeyPress",permalink:"/zop-hooks-docs/docs/useKeyPress"},next:{title:"useOnlineStatus",permalink:"/zop-hooks-docs/docs/useOnlineStatus"}},u=[{value:"useMousePosition",id:"usemouseposition",children:[{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]},{value:"Implementation Details",id:"implementation-details",children:[]}]}],p={toc:u},l="wrapper";function c(e){let{components:t,...o}=e;return(0,s.kt)(l,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"usemouseposition"},"useMousePosition"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"useMousePosition")," hook is a custom React hook that allows you to track the current position of the mouse cursor on the screen."),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("p",null,"To use the ",(0,s.kt)("inlineCode",{parentName:"p"},"useMousePosition")," hook, follow these steps:"),(0,s.kt)("p",null,"Import the hook into your React component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useMousePosition } from "zop-hooks";\n')),(0,s.kt)("p",null,"Invoke the hook in your functional component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"const mousePosition = useMousePosition();\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"mousePosition")," object will contain the current coordinates of the mouse cursor."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"Here's an example of how you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"useMousePosition")," hook in a React component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import React from "react";\nimport { useMousePosition } from "zop-hooks";\n\nfunction MousePositionComponent() {\n  const mousePosition = useMousePosition();\n\n  return (\n    <div>\n      <p>Mouse X: {mousePosition.x}</p>\n      <p>Mouse Y: {mousePosition.y}</p>\n    </div>\n  );\n}\n\nexport default MousePositionComponent;\n')),(0,s.kt)("p",null,"In the above example, the MousePositionComponent component uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"useMousePosition")," hook to track the mouse position and display it on the screen."),(0,s.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"useMousePosition")," hook internally uses React's useState and ",(0,s.kt)("inlineCode",{parentName:"p"},"useEffect")," hooks. It initializes the ",(0,s.kt)("inlineCode",{parentName:"p"},"mousePosition")," state to { x: 0, y: 0 } and updates it whenever the mouse moves."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"useEffect")," hook is used to add an event listener to the mousemove event on the window object. The event listener updates the ",(0,s.kt)("inlineCode",{parentName:"p"},"mousePosition")," state with the current mouse coordinates (e.clientX and e.clientY)."),(0,s.kt)("p",null,"To clean up the event listener when the component unmounts or the hook dependencies change, the ",(0,s.kt)("inlineCode",{parentName:"p"},"useEffect")," hook returns a cleanup function that removes the event listener."),(0,s.kt)("p",null,"Please note that this documentation assumes you have a basic understanding of React and React hooks. If you're new to React or hooks, it's recommended to read the official React documentation for more information."))}c.isMDXComponent=!0}}]);