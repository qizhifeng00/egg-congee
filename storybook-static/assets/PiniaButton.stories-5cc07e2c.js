import{s as m,v as d,z as f,B as g,C as r,y as a,D as _}from"./vue.esm-bundler-aabaaed1.js";import{d as b,s as B}from"./pinia-e32ef922.js";const y=b("counter",{state:()=>({counter:0}),getters:{doubleCount:t=>t.counter*2},actions:{increment(){this.counter++}}}),i=m({__name:"PiniaButton",props:{label:{default:""}},setup(t){const o=y(),{counter:l}=B(o);return(p,n)=>(d(),f("div",null,[g(r(a(l))+" ",1),_("button",{onClick:n[0]||(n[0]=P=>a(o).increment())},r(p.label),1)]))}});i.__docgenInfo={exportName:"default",displayName:"PiniaButton",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["D:/项目/egg-congee/src/components/UI/PiniaButton.vue"]};const C={title:"UI/PiniaButton",component:i,tags:["autodocs"],argTypes:{label:{control:"text"}}},e={args:{label:"Up"}};var s,c,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Up'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const S=["Primary"];export{e as Primary,S as __namedExportsOrder,C as default};
//# sourceMappingURL=PiniaButton.stories-5cc07e2c.js.map
