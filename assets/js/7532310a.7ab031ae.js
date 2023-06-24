"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[505],{4232:(e,o,t)=>{t.r(o),t.d(o,{contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const a={sidebar_position:4,custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},s=void 0,r={unversionedId:"Hooks/useGeolocation",id:"Hooks/useGeolocation",isDocsHomePage:!1,title:"useGeolocation",description:"useGeolocation Hook",source:"@site/docs/Hooks/useGeolocation.md",sourceDirName:"Hooks",slug:"/Hooks/useGeolocation",permalink:"/zop-hooks-docs/docs/Hooks/useGeolocation",editUrl:"https://github.com/PranuPranav97/zop-hooks-docs",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},sidebar:"tutorialSidebar",previous:{title:"useDeviceType",permalink:"/zop-hooks-docs/docs/Hooks/useDeviceType"},next:{title:"useKeyPress",permalink:"/zop-hooks-docs/docs/Hooks/useKeyPress"}},l=[{value:"useGeolocation Hook",id:"usegeolocation-hook",children:[]},{value:"Return Type",id:"return-type",children:[{value:"Usage:",id:"usage",children:[]}]}],c={toc:l},u="wrapper";function p(e){let{components:o,...t}=e;return(0,i.kt)(u,(0,n.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usegeolocation-hook"},"useGeolocation Hook"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useGeolocation")," hook is a custom React hook that allows you to retrieve the current geolocation of the user. It utilizes the browser's ",(0,i.kt)("inlineCode",{parentName:"p"},"Geolocation")," API to fetch the latitude, longitude, accuracy, and timestamp of the user's location."),(0,i.kt)("h2",{id:"return-type"},"Return Type"),(0,i.kt)("p",null,"The hook returns a geolocation object of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Geolocation")," if the geolocation data is available. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Geolocation")," interface defines the structure of the geolocation object, including the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"latitude"),": The latitude coordinate of the user's location."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"longitude"),": The longitude coordinate of the user's location."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accuracy"),": The accuracy level, in meters, of the geolocation coordinates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp"),": The timestamp indicating when the geolocation data was retrieved.")),(0,i.kt)("p",null,"If the geolocation API is not supported by the user's browser or the user denies the permission to access their location, the hook returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h3",{id:"usage"},"Usage:"),(0,i.kt)("p",null,"To use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useGeolocation")," hook, import it from the appropriate module, along with the Geolocation interface. Then, call the hook within your React component to obtain the geolocation data. You can use the retrieved geolocation object to display the user's location or perform any other necessary operations in your component."),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"useGeolocation")," hook and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Geolocation")," interface from the module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useGeolocation, Geolocation } from "zop-hooks";\n')),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useGeolocation")," hook in your component to access the geolocation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useGeolocation, Geolocation } from "zop-hooks";\n\nfunction MyComponent() {\n  // Call the useGeolocation hook to get the current geolocation\n  const geolocation: Geolocation | undefined = useGeolocation();\n\n  // Use the geolocation data in your component\n  // ...\n\n  return (\n    // JSX for your component\n  );\n}\n\n')),(0,i.kt)("p",null,"It's important to consider the potential privacy concerns and browser compatibility issues when using the geolocation feature. Ensure that you handle cases where the geolocation data is unavailable or when the user denies permission to access their location."),(0,i.kt)("p",null,"Feel free to modify and adapt this documentation according to your project's needs. Let me know if you need any further assistance!"))}p.isMDXComponent=!0}}]);