"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[8279],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},77137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={id:"measure",title:"measure",sidebar_label:"measure"},o=void 0,s={unversionedId:"api/nativeMethods/measure",id:"version-2.x/api/nativeMethods/measure",title:"measure",description:"Determines the location on screen, width, and height in the viewport of the given view synchronously and returns an object with measured dimensions or null if the view cannot be measured.",source:"@site/versioned_docs/version-2.x/api/nativeMethods/measure.md",sourceDirName:"api/nativeMethods",slug:"/api/nativeMethods/measure",permalink:"/react-native-reanimated/docs/2.x/api/nativeMethods/measure",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/versioned_docs/version-2.x/api/nativeMethods/measure.md",tags:[],version:"2.x",frontMatter:{id:"measure",title:"measure",sidebar_label:"measure"},sidebar:"docs",previous:{title:"Layout Transitions",permalink:"/react-native-reanimated/docs/2.x/api/LayoutAnimations/layoutTransitions"},next:{title:"scrollTo",permalink:"/react-native-reanimated/docs/2.x/api/nativeMethods/scrollTo"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"animatedRef",id:"animatedref",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}],m={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Determines the location on screen, width, and height in the viewport of the given view synchronously and returns an object with measured dimensions or ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if the view cannot be measured."),(0,r.yg)("p",null,"If you need the measurements as soon as possible and you don't need ",(0,r.yg)("inlineCode",{parentName:"p"},"pageX")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"pageY"),", consider using the ",(0,r.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#onlayout"},(0,r.yg)("inlineCode",{parentName:"a"},"onLayout"))," property instead."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"You can use ",(0,r.yg)("inlineCode",{parentName:"p"},"measure()")," only on rendered components. For example, calling ",(0,r.yg)("inlineCode",{parentName:"p"},"measure()")," on an offscreen ",(0,r.yg)("inlineCode",{parentName:"p"},"FlatList")," item will return ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),". It is therefore a good practice to perform a ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"-check before using the response.")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you call ",(0,r.yg)("inlineCode",{parentName:"p"},"measure")," inside ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.x/api/hooks/useAnimatedStyle"},(0,r.yg)("inlineCode",{parentName:"a"},"useAnimatedStyle")),", you may get the following warning:"),(0,r.yg)("blockquote",{parentName:"admonition"},(0,r.yg)("p",{parentName:"blockquote"},"[Reanimated]"," measure() was called from the main JS context. Measure is only available\nin the UI runtime. (...)")),(0,r.yg)("p",{parentName:"admonition"},"That's because in React Native apps, ",(0,r.yg)("inlineCode",{parentName:"p"},"useAnimatedStyle")," worklet is first evaluated on the JS context during the first render, thus before rendering has been completed in native. This is safe to ignore, but if you don't want this warning to appear then wrap the call like this:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-js"},"if (_WORKLET || isWeb) {\n  const measured = measure(animatedRef);\n  if (measured !== null) {\n    // ...\n  }\n}\n"))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"measure")," is not available when Chrome Developer Tools (remote JS debugger) is attached. However, the recommended tool for debugging React Native apps is Flipper (Chrome DevTools) which supports ",(0,r.yg)("inlineCode",{parentName:"p"},"measure"),". Check out more details ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.x/guide/debugging"},"here"),".")),(0,r.yg)("h3",{id:"arguments"},"Arguments"),(0,r.yg)("h4",{id:"animatedref"},"animatedRef"),(0,r.yg)("p",null,"The product of ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.x/api/hooks/useAnimatedRef"},(0,r.yg)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is Reanimated's extension of a standard React ref (delivers the view tag on the UI thread)."),(0,r.yg)("h3",{id:"returns"},"Returns"),(0,r.yg)("p",null,"An object of type ",(0,r.yg)("inlineCode",{parentName:"p"},"MeasuredDimensions"),", which contains these fields:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"x")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"y")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"width")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"height")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"pageX")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"pageY"))),(0,r.yg)("p",null,"If the measurement could not be performed, returns ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n\n  useDerivedValue(() => {\n    const measured = measure(aref);\n    if (measured !== null) {\n      const { x, y, width, height, pageX, pageY } = measured;\n      console.log({ x, y, width, height, pageX, pageY });\n    } else {\n      console.warn('measure: could not measure view');\n    }\n  });\n\n  return <View ref={aref} />;\n};\n")))}u.isMDXComponent=!0}}]);