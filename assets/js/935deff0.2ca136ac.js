"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),m=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(u.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(n),d=r,h=l["".concat(u,".").concat(d)]||l[d]||c[d]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var m=2;m<i;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8022:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},a="useCountdownTimer",s={unversionedId:"Hooks/useCountDownTimer",id:"Hooks/useCountDownTimer",isDocsHomePage:!1,title:"useCountdownTimer",description:"The useCountdownTimer hook is a custom React hook that creates a countdown timer.",source:"@site/docs/Hooks/useCountDownTimer.md",sourceDirName:"Hooks",slug:"/Hooks/useCountDownTimer",permalink:"/zop-hooks-docs/docs/Hooks/useCountDownTimer",editUrl:"https://github.com/PranuPranav97/zop-hooks-docs",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},sidebar:"tutorialSidebar",previous:{title:"useClipboard",permalink:"/zop-hooks-docs/docs/Hooks/useClipboard"},next:{title:"useTimer",permalink:"/zop-hooks-docs/docs/Hooks/useTimer"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]},{value:"Customization",id:"customization",children:[]}],m={toc:u},p="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usecountdowntimer"},"useCountdownTimer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useCountdownTimer")," hook is a custom React hook that creates a countdown timer."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCountdownTimer")," hook, follow these steps:\nImport the hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useCountdownTimer } from "zop-hooks";\n')),(0,r.kt)("p",null,"Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCountdownTimer")," hook within your functional component, passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"duration")," prop as an object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { remainingTime, formattedTime, restartTimer } = useCountdownTimer({\n  duration: 60,\n});\n")),(0,r.kt)("p",null,"You can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"remainingTime"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"formattedTime")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"restartTimer")," variables returned by the hook:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remainingTime")," (number): The remaining time in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formattedTime"),' (string): The remaining time formatted as "HH:MM:SS".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"restartTimer ")," (function): A function to restart the timer. It resets the remaining time to the initial duration specified.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's an example of how you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCountdownTimer")," hook in a React component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import React from "react";\nimport { useCountdownTimer } from "zop-hooks";\n\nconst CountDownTimer = () => {\n  const { remainingTime, formattedTime, restartTimer } = useCountdownTimer({\n    duration: 60, // Initial duration in seconds\n    dependencies: [], // Optional array of dependencies\n  });\n\n  const handleRestartTimer = () => {\n    restartTimer();\n  };\n\n  return (\n    <div>\n      <div>Remaining Time: {formattedTime}</div>\n      <button onClick={handleRestartTimer}>Restart Timer</button>\n    </div>\n  );\n};\n\nexport default CountDownTimer;\n')),(0,r.kt)("p",null,"In the example above, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CountdownTimer")," component uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCountdownTimer")," hook to create a countdown timer with a duration of 120 seconds. The remaining time and formatted time are displayed in the component."),(0,r.kt)("h3",{id:"customization"},"Customization"),(0,r.kt)("p",null,"You can customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"formatTime")," function within the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCountdownTimer")," hook to modify the time format according to your requirements."),(0,r.kt)("p",null,"Make sure to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCountdownTimer")," hook correctly based on your project structure."),(0,r.kt)("p",null,"I hope this documentation helps! Let me know if you have any further questions."))}l.isMDXComponent=!0}}]);