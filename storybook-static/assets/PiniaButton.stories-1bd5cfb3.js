import{s as m,v as d,z as f,A as g,B as a,y as n,C as b}from"./vue.esm-bundler-3bd10302.js";import{d as _,s as y}from"./pinia-e7b481fe.js";const B=_("counter",{state:()=>({counter:0}),getters:{doubleCount:t=>t.counter*2},actions:{increment(){this.counter++}}}),i=m({__name:"PiniaButton",props:{label:{default:""}},setup(t){const o=B(),{counter:l}=y(o);return(p,r)=>(d(),f("div",null,[g(a(n(l))+" ",1),b("button",{onClick:r[0]||(r[0]=P=>n(o).increment())},a(p.label),1)]))}});i.__docgenInfo={exportName:"default",displayName:"PiniaButton",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/qiqiqi/quasar2-storybook-template/src/components/UI/PiniaButton.vue"]};const x={title:"UI/PiniaButton",component:i,tags:["autodocs"],argTypes:{label:{control:"text"}}},e={args:{label:"Up"}};var s,c,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Up'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const C=["Primary"];export{e as Primary,C as __namedExportsOrder,x as default};
//# sourceMappingURL=PiniaButton.stories-1bd5cfb3.js.map
