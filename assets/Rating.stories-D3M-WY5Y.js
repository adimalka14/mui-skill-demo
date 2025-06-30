import{j as e,r as w}from"./iframe-fKP7IthX.js";import{R as s}from"./Rating-C5FMbrua.js";import"./useForkRef-d1CgJ6pJ.js";import"./createSvgIcon-Ki5RK7Z8.js";import"./useSlot-BMr-aSQ4.js";import"./useControlled-BwSdjpI7.js";import"./isFocusVisible-B8k4qzLc.js";const{fn:C}=__STORYBOOK_MODULE_TEST__,q={title:"base-component/Rating",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"number"},precision:{control:"radio",options:[.5,1]},disabled:{control:"boolean"},showLabel:{control:"boolean"},size:{control:"radio",options:["small","medium","large"]}},args:{onChange:C()}},d=r=>e.jsx(s,{...r}),c=d.bind({}),a=()=>{const[r,T]=w.useState(2.5);return e.jsx(s,{value:r,onChange:(M,V)=>T(V)})},i=d.bind({});i.args={showLabel:!1,value:2.5};const o=d.bind({});o.args={disabled:!0,value:2.5};const t=r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontWeight:"bold"},children:"Small"}),e.jsx(s,{...r,value:3,size:"small"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontWeight:"bold"},children:"Medium"}),e.jsx(s,{...r,value:3,size:"medium"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontWeight:"bold"},children:"Large"}),e.jsx(s,{...r,value:3,size:"large"})]})]}),n=r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontWeight:"bold"},children:"0.5"}),e.jsx(s,{...r,value:2.5,precision:.5})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,fontWeight:"bold"},children:"1"}),e.jsx(s,{...r,value:3,precision:1})]})]}),l=d.bind({});l.args={value:0};a.__docgenInfo={description:"",methods:[],displayName:"Interactive"};t.__docgenInfo={description:"",methods:[],displayName:"Sizes"};n.__docgenInfo={description:"",methods:[],displayName:"Precisions"};var m,p,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Rating {...args} />",...(g=(p=c.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,v,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(2.5);
  return <Rating value={value} onChange={(event, newValue) => setValue(newValue)} />;
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,f,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Rating {...args} />",...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,j,R;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Rating {...args} />",...(R=(j=o.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var S,_,W;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
}}>\r
        <div>\r
            <p style={{
      margin: 0,
      fontWeight: 'bold'
    }}>Small</p>\r
            <Rating {...args} value={3} size="small" />\r
        </div>\r
        <div>\r
            <p style={{
      margin: 0,
      fontWeight: 'bold'
    }}>Medium</p>\r
            <Rating {...args} value={3} size="medium" />\r
        </div>\r
        <div>\r
            <p style={{
      margin: 0,
      fontWeight: 'bold'
    }}>Large</p>\r
            <Rating {...args} value={3} size="large" />\r
        </div>\r
    </div>`,...(W=(_=t.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var z,D,E;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
}}>\r
        <div>\r
            <p style={{
      margin: 0,
      fontWeight: 'bold'
    }}>0.5</p>\r
            <Rating {...args} value={2.5} precision={0.5} />\r
        </div>\r
        <div>\r
            <p style={{
      margin: 0,
      fontWeight: 'bold'
    }}>1</p>\r
            <Rating {...args} value={3} precision={1} />\r
        </div>\r
    </div>`,...(E=(D=n.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,I,O;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"args => <Rating {...args} />",...(O=(I=l.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const A=["Default","Interactive","WithoutLabel","Disabled","Sizes","Precisions","Empty"];export{c as Default,o as Disabled,l as Empty,a as Interactive,n as Precisions,t as Sizes,i as WithoutLabel,A as __namedExportsOrder,q as default};
