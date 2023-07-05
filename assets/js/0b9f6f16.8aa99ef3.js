"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[4628],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),a=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},p=function(e){var o=a(e.components);return n.createElement(c.Provider,{value:o},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},h=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=a(t),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return t?n.createElement(m,l(l({ref:o},p),{},{components:t})):n.createElement(m,l({ref:o},p))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=h;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var a=2;a<i;a++)l[a]=t[a];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6581:(e,o,t)=>{t.r(o),t.d(o,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const i={custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},l=void 0,s={unversionedId:"Hooks/useScrollPosition",id:"Hooks/useScrollPosition",isDocsHomePage:!1,title:"useScrollPosition",description:"useScrollPosition",source:"@site/docs/Hooks/useScrollPosition.md",sourceDirName:"Hooks",slug:"/Hooks/useScrollPosition",permalink:"/zop-hooks-docs/docs/Hooks/useScrollPosition",editUrl:"https://github.com/PranuPranav97/zop-hooks-docs",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},sidebar:"tutorialSidebar",previous:{title:"useScreenSize",permalink:"/zop-hooks-docs/docs/Hooks/useScreenSize"},next:{title:"useWindowScroll",permalink:"/zop-hooks-docs/docs/Hooks/useWindowScroll"}},c=[{value:"useScrollPosition",id:"usescrollposition",children:[{value:"Usage",id:"usage",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]},{value:"Notes",id:"notes",children:[]}]}],a={toc:c},p="wrapper";function u(e){let{components:o,...t}=e;return(0,r.kt)(p,(0,n.Z)({},a,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usescrollposition"},"useScrollPosition"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useScrollPosition")," hook is a custom React hook that allows you to get the current scroll position of the window. It provides the x and y coordinates of the scroll position and updates them whenever the window is scrolled."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Import the hook and any other necessary dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useScrollPosition } from "zop-hooks";\n')),(0,r.kt)("p",null,"Invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"useScrollPosition")," hook within a functional component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function MyComponent() {\n  const scrollPosition = useScrollPosition();\n\n  // Access the scroll position values\n  const scrollX = scrollPosition.x;\n  const scrollY = scrollPosition.y;\n\n  // Rest of your component code\n  // ...\n}\n")),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useScrollPosition")," hook returns an object containing the current scroll position:"),(0,r.kt)("p",null,"-",(0,r.kt)("inlineCode",{parentName:"p"},"x")," (number): The current horizontal scroll position in pixels."),(0,r.kt)("p",null,"-",(0,r.kt)("inlineCode",{parentName:"p"},"y")," (number): The current vertical scroll position in pixels."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's an example of how you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useScrollPosition")," hook in a functional component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useScrollPosition } from "zop-hooks";\n\nfunction MyComponent() {\n  const scrollPosition = useScrollPosition();\n\n  // Access the scroll position values\n  const scrollX = scrollPosition.x;\n  const scrollY = scrollPosition.y;\n\n  return (\n    <div>\n      <p>Scroll X: {scrollX}px</p>\n      <p>Scroll Y: {scrollY}px</p>\n    </div>\n  );\n}\n')),(0,r.kt)("p",null,"In this example, the component displays the current horizontal and vertical scroll positions in pixels."),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"useScrollPosition")," hook uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"useState")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect")," hooks from React to manage state and perform side effects respectively."),(0,r.kt)("li",{parentName:"ul"},"The initial scroll position is obtained when the hook is first invoked, but subsequent updates are triggered only when the window is scrolled. This optimization helps reduce unnecessary re-renders."),(0,r.kt)("li",{parentName:"ul"},"The event listener for window scroll is added and removed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"useEffect")," hook's cleanup function to ensure proper handling of the event.")),(0,r.kt)("p",null,"Remember to include the necessary import statements and adjust the file paths accordingly when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useScrollPosition")," hook in your project."),(0,r.kt)("p",null,"That's it! You can now utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"useScrollPosition")," hook to get the current scroll position in your React components."))}u.isMDXComponent=!0}}]);