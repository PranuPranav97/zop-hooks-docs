"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[3600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(u,".").concat(d)]||p[d]||l[d]||i;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5114:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2,custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},a="useTimer",s={unversionedId:"useTimer",id:"useTimer",isDocsHomePage:!1,title:"useTimer",description:"useTimer Hook",source:"@site/docs/useTimer.md",sourceDirName:".",slug:"/useTimer",permalink:"/zop-hooks-docs/docs/useTimer",editUrl:"https://github.com/PranuPranav97/zop-hooks-docs",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},sidebar:"tutorialSidebar",previous:{title:"useCountdownTimer",permalink:"/zop-hooks-docs/docs/useCountDownTimer"},next:{title:"useDeviceType",permalink:"/zop-hooks-docs/docs/useDeviceType"}},u=[{value:"1.Import the Hook",id:"1import-the-hook",children:[]},{value:"2.Initialize the timer by calling the useTimer hook:",id:"2initialize-the-timer-by-calling-the-usetimer-hook",children:[]},{value:"3.Use the timer properties and methods in your component:",id:"3use-the-timer-properties-and-methods-in-your-component",children:[]},{value:"4.Render the timer and buttons in your component&#39;s JSX:",id:"4render-the-timer-and-buttons-in-your-components-jsx",children:[]},{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usetimer"},"useTimer"),(0,o.kt)("p",null,"useTimer Hook\nThe useTimer hook is a custom React hook that provides a timer functionality. It allows you to start, pause, reset, and retrieve the current state and time of the timer."),(0,o.kt)("h3",{id:"1import-the-hook"},"1.Import the Hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useTimer } from "zop-hooks";\n')),(0,o.kt)("h3",{id:"2initialize-the-timer-by-calling-the-usetimer-hook"},"2.Initialize the timer by calling the useTimer hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const timer = useTimer();\n")),(0,o.kt)("h3",{id:"3use-the-timer-properties-and-methods-in-your-component"},"3.Use the timer properties and methods in your component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Access the current time and state of the timer\nconst currentTime = timer.time;\nconst currentTimerState = timer.state;\n\n// Start the timer\nconst handleStart = () => {\n  timer.start();\n};\n\n// Pause the timer\nconst handlePause = () => {\n  timer.pause();\n};\n\n// Reset the timer\nconst handleReset = () => {\n  timer.reset();\n};\n")),(0,o.kt)("h3",{id:"4render-the-timer-and-buttons-in-your-components-jsx"},"4.Render the timer and buttons in your component's JSX:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"return (\n  <div>\n    <p>Time: {currentTime}</p>\n    <p>State: {currentTimerState}</p>\n    <button onClick={handleStart}>Start</button>\n    <button onClick={handlePause}>Pause</button>\n    <button onClick={handleReset}>Reset</button>\n  </div>\n);\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"The useTimer hook returns an object with the following properties and methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"time: number - The current time of the timer."),(0,o.kt)("li",{parentName:"ul"},'state: TimerState - The current state of the timer. Possible values are "idle", "running", or "paused".'),(0,o.kt)("li",{parentName:"ul"},"start: () => void - A function to start the timer."),(0,o.kt)("li",{parentName:"ul"},"pause: () => void - A function to pause the timer."),(0,o.kt)("li",{parentName:"ul"},"reset: () => void - A function to reset the timer.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here's a complete example of using the useTimer hook in a React component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import React from "react";\nimport useTimer from "zop-hooks";\n\nconst TimerComponent = () => {\n  const timer = useTimer();\n\n  const currentTime = timer.time;\n  const currentTimerState = timer.state;\n\n  const handleStart = () => {\n    timer.start();\n  };\n\n  const handlePause = () => {\n    timer.pause();\n  };\n\n  const handleReset = () => {\n    timer.reset();\n  };\n\n  return (\n    <div>\n      <p>Time: {currentTime}</p>\n      <p>State: {currentTimerState}</p>\n      <button onClick={handleStart}>Start</button>\n      <button onClick={handlePause}>Pause</button>\n      <button onClick={handleReset}>Reset</button>\n    </div>\n  );\n};\n\nexport default TimerComponent;\n')),(0,o.kt)("p",null,"That's it! You can now use the useTimer hook in your project to add timer functionality to your components."))}p.isMDXComponent=!0}}]);