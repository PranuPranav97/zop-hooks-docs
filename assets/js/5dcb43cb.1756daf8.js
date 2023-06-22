"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[340],{2368:(e,o,t)=>{t.r(o),t.d(o,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const a={sidebar_position:1},i="useClipboard",s={unversionedId:"Hooks/useClipboard",id:"Hooks/useClipboard",isDocsHomePage:!1,title:"useClipboard",description:"A custom React hook that allows you to retrieve the content from the user's clipboard.",source:"@site/docs/Hooks/useClipboard.md",sourceDirName:"Hooks",slug:"/Hooks/useClipboard",permalink:"/zop-hooks-docs/docs/Hooks/useClipboard",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Hooks/useClipboard.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/zop-hooks-docs/docs/intro"},next:{title:"useTimer",permalink:"/zop-hooks-docs/docs/Hooks/useTimer"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Implement the hook in your functional component:",id:"implement-the-hook-in-your-functional-component",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]}],p={toc:l},c="wrapper";function d(e){let{components:o,...t}=e;return(0,r.kt)(c,(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useclipboard"},"useClipboard"),(0,r.kt)("p",null,"A custom React hook that allows you to retrieve the content from the user's clipboard."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Import the useClipboard hook into your component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useClipboard } from "zop-hooks";\n')),(0,r.kt)("h3",{id:"implement-the-hook-in-your-functional-component"},"Implement the hook in your functional component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function MyComponent() {\n  const clipboardContent = useClipboard();\n\n  // Use the clipboardContent in your component logic...\n\n  return (\n    // JSX code here...\n  );\n}\n")),(0,r.kt)("p",null,"The clipboardContent variable will contain the text content of the user's clipboard."),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useClipboard")," hook returns the content of the clipboard as a string, or undefined if the clipboard is empty or if the browser does not support the Clipboard API."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's an example of how you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useClipboard")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useState, useEffect } from "react";\n\nfunction useClipboard() {\n  const [clipboardContent, setClipboardContent] = useState<\n    string | undefined\n  >();\n\n  useEffect(() => {\n    async function getClipboardContent() {\n      try {\n        const clipboardContent = await navigator.clipboard.readText();\n        setClipboardContent(clipboardContent);\n      } catch (error) {\n        console.error(error);\n      }\n    }\n\n    if ("clipboard" in navigator) {\n      getClipboardContent();\n    }\n  }, []);\n\n  return clipboardContent;\n}\n\nexport { useClipboard };\n')),(0,r.kt)("p",null,"In the above example, the hook uses the useState and useEffect hooks from React to manage the state of the clipboard content and retrieve it asynchronously. The getClipboardContent function is called only once when the component mounts (empty dependency array []), and it checks if the browser supports the Clipboard API before attempting to read the clipboard's content."),(0,r.kt)("p",null,"Please note that this hook requires the user's explicit permission to access the clipboard. Additionally, it relies on the availability of the Clipboard API, which may not be supported in all browsers or environments."),(0,r.kt)("p",null,"Feel free to modify and adapt this documentation according to your project's needs. Let me know if you need any further assistance!"))}d.isMDXComponent=!0}}]);