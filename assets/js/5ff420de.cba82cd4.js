"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[6144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={id:"plugin-options",title:"Options",sidebar_label:"Options"},r="Options for Reanimated Babel Plugin",l={unversionedId:"reanimated-babel-plugin/plugin-options",id:"reanimated-babel-plugin/plugin-options",title:"Options",description:"Our plugin offers several optional functionalities that you may need to employ advanced APIs:",source:"@site/docs/reanimated-babel-plugin/options.md",sourceDirName:"reanimated-babel-plugin",slug:"/reanimated-babel-plugin/plugin-options",permalink:"/react-native-reanimated/docs/reanimated-babel-plugin/plugin-options",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/docs/reanimated-babel-plugin/options.md",tags:[],version:"current",frontMatter:{id:"plugin-options",title:"Options",sidebar_label:"Options"},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/react-native-reanimated/docs/reanimated-babel-plugin/about"},next:{title:"Animations",permalink:"/react-native-reanimated/docs/category/animations"}},s={},u=[{value:"How to use",id:"how-to-use",level:2},{value:"Options",id:"options",level:2},{value:"relativeSourceLocation",id:"relativesourcelocation",level:3},{value:"disableInlineStylesWarning",id:"disableinlinestyleswarning",level:3},{value:"processNestedWorklets",id:"processnestedworklets",level:3},{value:"omitNativeOnlyData",id:"omitnativeonlydata",level:3},{value:"globals",id:"globals",level:3},{value:"substituteWebPlatformChecks",id:"substitutewebplatformchecks",level:3},{value:"disableSourceMaps",id:"disablesourcemaps",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"options-for-reanimated-babel-plugin"},"Options for Reanimated Babel Plugin"),(0,i.kt)("p",null,"Our plugin offers several optional functionalities that you may need to employ advanced APIs:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ReanimatedPluginOptions {\n  relativeSourceLocation?: boolean;\n  disableInlineStylesWarning?: boolean;\n  processNestedWorklets?: boolean;\n  omitNativeOnlyData?: boolean;\n  globals?: string[];\n  substituteWebPlatformChecks?: boolean;\n  disableSourceMaps?: boolean;\n}\n"))),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"Using this is straightforward for Babel plugins; you just need to pass an object containing the options to the plugin in your ",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js")," file."),(0,i.kt)("p",null,"Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{7}","{7}":!0},"module.exports = {\n  ...\n  plugins: [\n    ...\n    [\n      'react-native-reanimated/plugin',\n      {\n        relativeSourceLocation: true,\n        disableInlineStylesWarning: true,\n        processNestedWorklets: true,\n        omitNativeOnlyData: true,\n        globals: ['myObjectOnUI'],\n        substituteWebPlatformChecks: true,\n      },\n    ],\n  ],\n};\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"relativesourcelocation"},"relativeSourceLocation"),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"This option dictates the passed file location for a worklet's source map. If you enable this option, the file paths will be relative to ",(0,i.kt)("inlineCode",{parentName:"p"},"process.cwd")," (the current directory where Babel executes). This can be handy for Jest test snapshots to ensure consistent results across machines."),(0,i.kt)("h3",{id:"disableinlinestyleswarning"},"disableInlineStylesWarning"),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Turning on this option suppresses a helpful warning when you use ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animations-in-inline-styling"},"inline shared values")," and might unintentionally write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import Animated, {useSharedValue} from 'react-native-reanimated';\n\nfunction MyView(){\n  const width = useSharedValue(100);\n  return <Animated.View style={width: width.value}>; // Loss of reactivity when using `width.value` instead of `width`!\n}\n")),(0,i.kt)("p",null,"You'll receive a warning about accessing ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," in an inline prop and the potential loss of reactivity that it causes. However, because there's no fail-safe mechanism that checks if the accessed property ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," comes from a Shared Value during Babel transpilation, it might cause problems:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { View } from 'react-native';\n\ninterface MyProps {\n  taggedWidth: {\n    tag: string;\n    value: number;\n  };\n}\n\nfunction MyView({ taggedWidth }) {\n  return <View style={{ width: taggedWidth.value }} />; // This triggers a false warning.\n}\n")),(0,i.kt)("p",null,"Enable this option to silence such false warnings."),(0,i.kt)("h3",{id:"processnestedworklets"},"processNestedWorklets"),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"This experimental feature supports multithreading. Consider this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function outerWorklet() {\n  'worklet';\n  function innerWorklet() {\n    'worklet';\n  }\n  runOnSomeOtherThread(innerWorklet)();\n}\n\nrunOnUI(outerWorklet)();\n")),(0,i.kt)("p",null,"This example will result in an error. Let's quickly describe why:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Upon creating the functions and resolving their worklet factories, the ",(0,i.kt)("inlineCode",{parentName:"p"},"runOnUI")," function is called. This function first takes the worklet's data, loads it into the UI thread after converting it, and then schedules an execution asynchronously.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"During execution, the worklet scheduled for execution calls ",(0,i.kt)("inlineCode",{parentName:"p"},"runOnSomeOtherThread"),". This action mirrors what ",(0,i.kt)("inlineCode",{parentName:"p"},"runOnUI")," does, but targets SomeOtherThread.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This process fails because the injection of ",(0,i.kt)("inlineCode",{parentName:"p"},"outerWorklet")," into the UI thread occurred without the ",(0,i.kt)("inlineCode",{parentName:"p"},"innerWorklet")," worklet data, therefore it's not available for SomeOtherThread."))),(0,i.kt)("p",null,"If you enable this option, the system will workletize functions depth-first, avoiding the above-mentioned scenario and ensuring things operate correctly. Keep in mind that nesting worklets like in the provided example is only useful in threading."),(0,i.kt)("h3",{id:"omitnativeonlydata"},"omitNativeOnlyData"),(0,i.kt)("p",null,"Defaults to false."),(0,i.kt)("p",null,"This option comes in handy for Web apps. Because Babel ordinarily doesn't get information about the target platform, it includes worklet data in the bundle that only Native apps find relevant. If you enable this option, your bundle size will be smaller."),(0,i.kt)("h3",{id:"globals"},"globals"),(0,i.kt)("p",null,"This is a list of identifiers (objects) that will not be copied to the UI thread if a worklet requires them. For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const someReference = 5;\nfunction foo() {\n  'worklet';\n  return someReference + 1;\n}\n")),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"someReference")," is not accessible on the UI thread. Consequently, we must copy it there, ensuring correct scoping, to keep the worklet from failing. But, consider this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function bar() {\n  'worklet';\n  return null;\n}\n")),(0,i.kt)("p",null,"Here, the identifier ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," is already accessible on the UI thread. Therefore, we don't need to copy it and use a copied value there. While it might not immediately seem particularly useful to avoid copying the value, consider the following case:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function setOnJS() {\n  global.something = 'JS THREAD';\n}\n\nfunction setOnUI() {\n  'worklet';\n  global.something = 'UI THREAD';\n}\n\nfunction readFromJS() {\n  console.log(global.something);\n}\n\nfunction readFromUI() {\n  'worklet';\n  console.log(global.something);\n}\n\nfunction run() {\n  setOnJS();\n  runOnUI(setOnUI)();\n  readFromJS();\n  runOnUI(readFromUI)();\n}\n")),(0,i.kt)("p",null,"Without ",(0,i.kt)("inlineCode",{parentName:"p"},"global")," as a whitelisted identifier in this case, you'd only get:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"JS THREAD\nJS THREAD\n")),(0,i.kt)("p",null,"This output occurs because the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"global")," object (!) would be copied to the UI thread for it to be assigned by ",(0,i.kt)("inlineCode",{parentName:"p"},"setOnUI"),". Then, ",(0,i.kt)("inlineCode",{parentName:"p"},"readOnUI")," would again copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"global")," object and read from this copy."),(0,i.kt)("p",null,"There is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/main/plugin/src/globals.ts"},"huge list of identifiers whitelisted by default"),"."),(0,i.kt)("h3",{id:"substitutewebplatformchecks"},"substituteWebPlatformChecks"),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"This option can also be useful for Web apps. In Reanimated, we have numerous checks to determine the right function implementation for a specific target platform. Enabling this option changes all the checks that identify if the target is a Web app to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". This alteration can aid in tree-shaking and contribute to reducing the bundle size."),(0,i.kt)("h3",{id:"disablesourcemaps"},"disableSourceMaps"),(0,i.kt)("p",null,"Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"This option turns off the source map generation for worklets. Mostly used for testing purposes."))}d.isMDXComponent=!0}}]);