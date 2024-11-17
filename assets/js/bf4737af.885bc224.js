"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[4239],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(o),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},s),{},{components:o})):n.createElement(m,i({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4584:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:1,custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},i="useClipboard",l={unversionedId:"useClipboard",id:"useClipboard",isDocsHomePage:!1,title:"useClipboard",description:"A custom React hook that allows you to retrieve the content from the user's clipboard.",source:"@site/docs/useClipboard.md",sourceDirName:".",slug:"/useClipboard",permalink:"/zop-hooks-docs/docs/useClipboard",editUrl:"https://github.com/PranuPranav97/zop-hooks-docs",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/zop-hooks-docs/docs/intro"},next:{title:"useCountdownTimer",permalink:"/zop-hooks-docs/docs/useCountDownTimer"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Implement the hook in your functional component:",id:"implement-the-hook-in-your-functional-component",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]}],c={toc:p},s="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useclipboard"},"useClipboard"),(0,r.kt)("p",null,"A custom React hook that allows you to retrieve the content from the user's clipboard."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Import the useClipboard hook into your component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useClipboard } from "zop-hooks";\n')),(0,r.kt)("h3",{id:"implement-the-hook-in-your-functional-component"},"Implement the hook in your functional component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useClipboard } from "zop-hooks";\n\nfunction MyComponent() {\n  const clipboardContent = useClipboard();\n\n  // Use the clipboardContent in your component logic...\n\n  return (\n    // JSX code here...\n  );\n}\n')),(0,r.kt)("p",null,"The clipboardContent variable will contain the text content of the user's clipboard."),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useClipboard")," hook returns the content of the clipboard as a string, or undefined if the clipboard is empty or if the browser does not support the Clipboard API."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's an example of how you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useClipboard")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useState, useEffect } from "react";\n\nfunction useClipboard() {\n  const [clipboardContent, setClipboardContent] = useState<\n    string | undefined\n  >();\n\n  useEffect(() => {\n    async function getClipboardContent() {\n      try {\n        const clipboardContent = await navigator.clipboard.readText();\n        setClipboardContent(clipboardContent);\n      } catch (error) {\n        console.error(error);\n      }\n    }\n\n    if ("clipboard" in navigator) {\n      getClipboardContent();\n    }\n  }, []);\n\n  return clipboardContent;\n}\n\nexport { useClipboard };\n')),(0,r.kt)("p",null,"In the above example, the hook uses the useState and useEffect hooks from React to manage the state of the clipboard content and retrieve it asynchronously. The getClipboardContent function is called only once when the component mounts (empty dependency array []), and it checks if the browser supports the Clipboard API before attempting to read the clipboard's content."),(0,r.kt)("p",null,"Please note that this hook requires the user's explicit permission to access the clipboard. Additionally, it relies on the availability of the Clipboard API, which may not be supported in all browsers or environments."),(0,r.kt)("p",null,"Feel free to modify and adapt this documentation according to your project's needs. Let me know if you need any further assistance!"))}u.isMDXComponent=!0}}]);