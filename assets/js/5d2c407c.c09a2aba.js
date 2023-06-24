"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[818],{4847:(e,n,o)=>{o.r(n),o.d(n,{contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var t=o(7462),s=(o(7294),o(3905));const r={custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},a=void 0,i={unversionedId:"Hooks/useKeyPress",id:"Hooks/useKeyPress",isDocsHomePage:!1,title:"useKeyPress",description:"useKeyPress",source:"@site/docs/Hooks/useKeyPress.md",sourceDirName:"Hooks",slug:"/Hooks/useKeyPress",permalink:"/zop-hooks-docs/docs/Hooks/useKeyPress",editUrl:"https://github.com/PranuPranav97/zop-hooks-docs",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/PranuPranav97/zop-hooks-docs"},sidebar:"tutorialSidebar",previous:{title:"useGeolocation",permalink:"/zop-hooks-docs/docs/Hooks/useGeolocation"},next:{title:"useMousePosition",permalink:"/zop-hooks-docs/docs/Hooks/useMousePosition"}},u=[{value:"useKeyPress",id:"usekeypress",children:[{value:"Usage",id:"usage",children:[]},{value:"Return Value",id:"return-value",children:[]}]}],p={toc:u},c="wrapper";function l(e){let{components:n,...o}=e;return(0,s.kt)(c,(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"usekeypress"},"useKeyPress"),(0,s.kt)("p",null,"A custom React hook that allows you to detect if a specific key is currently pressed."),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Import the ",(0,s.kt)("inlineCode",{parentName:"p"},"useKeyPress")," hook and ",(0,s.kt)("inlineCode",{parentName:"p"},"KeyboardCharacter")," enum into your component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useKeyPress, KeyboardCharacter } from "zop-hooks";\n')),(0,s.kt)("p",null,"Implement the hook in your functional component:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useKeyPress,KeyboardCharacter } from "zop-hooks";\nfunction MyComponent() {\n  const isKeyPressed = useKeyPress(KeyboardCharacter.TargetKey);\n\n  // Use the isKeyPressed value in your component logic...\n\n  return (\n    // JSX code here...\n  );\n}\n\n')),(0,s.kt)("p",null,"Replace ",(0,s.kt)("inlineCode",{parentName:"p"},"KeyboardCharacter.TargetKey")," with the specific keyboard key you want to detect. You can use the values defined in the ",(0,s.kt)("inlineCode",{parentName:"p"},"KeyboardCharacter")," enum."),(0,s.kt)("p",null,"You can access the ",(0,s.kt)("inlineCode",{parentName:"p"},"isKeyPressed")," value in your component logic and use it to conditionally render components, trigger actions, or perform any other desired functionality based on the key press state."),(0,s.kt)("p",null,"Make sure to provide the correct ",(0,s.kt)("inlineCode",{parentName:"p"},"KeyboardCharacter")," value as the targetKey when using the ",(0,s.kt)("inlineCode",{parentName:"p"},"useKeyPress")," hook."),(0,s.kt)("p",null,"You can use the enum provided by the ",(0,s.kt)("inlineCode",{parentName:"p"},"zop-hooks")," to specify the keys.\nThe enum declaration is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'enum KeyboardCharacter {\n  A = "a",\n  B = "b",\n  C = "c",\n  D = "d",\n  E = "e",\n  F = "f",\n  G = "g",\n  H = "h",\n  I = "i",\n  J = "j",\n  K = "k",\n  L = "l",\n  M = "m",\n  N = "n",\n  O = "o",\n  P = "p",\n  Q = "q",\n  R = "r",\n  S = "s",\n  T = "t",\n  U = "u",\n  V = "v",\n  W = "w",\n  X = "x",\n  Y = "y",\n  Z = "z",\n  Zero = "0",\n  One = "1",\n  Two = "2",\n  Three = "3",\n  Four = "4",\n  Five = "5",\n  Six = "6",\n  Seven = "7",\n  Eight = "8",\n  Nine = "9",\n  Space = " ",\n  Enter = "Enter",\n  Tab = "Tab",\n  Escape = "Escape",\n  Backspace = "Backspace",\n  ArrowUp = "ArrowUp",\n  ArrowDown = "ArrowDown",\n  ArrowLeft = "ArrowLeft",\n  ArrowRight = "ArrowRight",\n  Shift = "Shift",\n  Control = "Control",\n  Alt = "Alt",\n  Meta = "Meta",\n  CapsLock = "CapsLock",\n  F1 = "F1",\n  F2 = "F2",\n  F3 = "F3",\n  F4 = "F4",\n  F5 = "F5",\n  F6 = "F6",\n  F7 = "F7",\n  F8 = "F8",\n  F9 = "F9",\n  F10 = "F10",\n  F11 = "F11",\n  F12 = "F12",\n}\n')),(0,s.kt)("h3",{id:"return-value"},"Return Value"),(0,s.kt)("p",null,"The useKeyPress hook returns a boolean value indicating whether the specified key is currently pressed (",(0,s.kt)("inlineCode",{parentName:"p"},"true"),") or not pressed (",(0,s.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,s.kt)("p",null,"Feel free to modify and adapt this documentation according to your project's needs. Let me know if you need any further assistance!"))}l.isMDXComponent=!0}}]);