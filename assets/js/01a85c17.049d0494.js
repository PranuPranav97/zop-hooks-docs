"use strict";(self.webpackChunkzop_hooks_docs=self.webpackChunkzop_hooks_docs||[]).push([[4013],{6165:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),r=n(6010),l=n(6698),s=n(6742);const c={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var i=n(4973);function o(e){let{sidebar:t}=e;return 0===t.items.length?null:a.createElement("nav",{className:(0,r.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:c.sidebarItemList},t.items.map((e=>a.createElement("li",{key:e.permalink,className:c.sidebarItem},a.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title))))))}var m=n(571);const d=function(e){const{sidebar:t,toc:n,children:s,...c}=e,i=t&&t.items.length>0;return a.createElement(l.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},i&&a.createElement("aside",{className:"col col--3"},a.createElement(o,{sidebar:t})),a.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),n&&a.createElement("div",{className:"col col--2"},a.createElement(m.Z,{toc:n})))))}},94:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7294),r=n(6165),l=n(6584),s=n(941);const c=function(e){const{tags:t,sidebar:n}=e,c=(0,s.MA)();return a.createElement(r.Z,{title:c,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,c),a.createElement(l.Z,{tags:Object.values(t)}))}},571:(e,t,n)=>{n.d(t,{r:()=>b,Z:()=>f});var a=n(7294),r=n(6010),l=n(941);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=n.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:n[n.indexOf(a)-1]??null}return n[n.length-1]}function i(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.LU)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const o=function(e){const t=(0,a.useRef)(void 0),n=i();(0,a.useEffect)((()=>{const{linkClassName:a,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=c({anchorTopOffset:n.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current?.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},m="tableOfContents_vrFS",d="table-of-contents__link",u={linkClassName:d,linkActiveClassName:"table-of-contents__link--active"};function b(e){let{toc:t,isChild:n}=e;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(b,{isChild:!0,toc:e.children}))))):null}const f=function(e){let{toc:t}=e;return o(u),a.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},a.createElement(b,{toc:t}))}},7211:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010),l=n(6742);const s="tag_WK-t",c="tagRegular_LXbV",i="tagWithCount_S5Zl";const o=function(e){const{permalink:t,name:n,count:o}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)(s,{[c]:!o,[i]:o})},n,o&&a.createElement("span",null,o))}},6584:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(7211),l=n(941);const s={tag:"tag_7kA+"};function c(e){let{letterEntry:t}=e;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((e=>a.createElement("li",{key:e.permalink,className:s.tag},a.createElement(r.Z,e))))),a.createElement("hr",null))}const i=function(e){let{tags:t}=e;const n=(0,l.PZ)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((e=>a.createElement(c,{key:e.letter,letterEntry:e}))))}}}]);