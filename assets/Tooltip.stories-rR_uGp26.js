import{j as e}from"./iframe-fKP7IthX.js";import{T as D,a as o}from"./Tooltip-CN1UWufH.js";import"./useForkRef-d1CgJ6pJ.js";import"./Portal-BNcOyIMk.js";import"./useTimeout-DgSpJTXF.js";import"./index-Ce7WrdEJ.js";import"./index-ymetkrM6.js";import"./useSlot-BMr-aSQ4.js";import"./useControlled-BwSdjpI7.js";import"./Grow-BxsUiHOr.js";import"./isFocusVisible-B8k4qzLc.js";const R={title:"base-component/Tooltip",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{arrow:{control:"boolean"},placement:{control:"select",options:D}},args:{title:"Tooltip"}},d=({text:t="Element",height:r="100px"})=>e.jsx("div",{style:{height:r,width:"100px",backgroundColor:"#97e6ff",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid #000000",borderRadius:"4px"},children:t}),E=t=>e.jsx(o,{title:"Default Tooltip",...t,children:e.jsx(d,{text:t.title||"Default"})}),p=E.bind({}),i=t=>e.jsx(o,{...t,title:"Default Tooltip"}),l=t=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"3rem"},children:[e.jsx("div",{children:e.jsx(o,{...t,title:"With Arrow",children:e.jsx(d,{text:"With Arrow"})})}),e.jsx("div",{children:e.jsx(o,{...t,title:"Without Arrow",arrow:!1,children:e.jsx(d,{text:"Without Arrow"})})})]}),n=t=>{const r={top:["top-start","top","top-end"],right:["right-start","right","right-end"],bottom:["bottom-start","bottom","bottom-end"],left:["left-start","left","left-end"]},s=({placements:P,direction:c="row",align:A="center"})=>e.jsx("div",{style:{display:"flex",flexDirection:c,gap:"1rem",alignItems:A,justifyContent:c==="row"?"center":void 0},children:P.map(a=>e.jsx(o,{placement:a,title:a,arrow:!0,children:e.jsx("span",{style:{display:"inline-block"},children:e.jsx(d,{text:a,height:"50px"})})},a))});return e.jsxs("div",{style:{width:"600px",margin:"auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem",padding:"2rem"},children:[e.jsx("p",{style:{fontWeight:"bold",fontSize:"2rem"},children:"ALL PLACEMENTS"}),s({placements:r.top}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[s({placements:r.left,direction:"column",align:"flex-start"}),s({placements:r.right,direction:"column",align:"flex-end"})]}),s({placements:r.bottom})]})};i.__docgenInfo={description:"",methods:[],displayName:"WithoutChildren"};l.__docgenInfo={description:"",methods:[],displayName:"ArrowProp"};n.__docgenInfo={description:"",methods:[],displayName:"AllPlacements"};var m,u,g;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Tooltip title={'Default Tooltip'} {...args}>\r
        <DivElement text={args.title || 'Default'} />\r
    </Tooltip>`,...(g=(u=p.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,x,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"args => <Tooltip {...args} title={'Default Tooltip'} />",...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,w,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexDirection: 'row',
  gap: '3rem'
}}>\r
        <div>\r
            <Tooltip {...args} title={\`With Arrow\`}>\r
                <DivElement text={'With Arrow'} />\r
            </Tooltip>\r
        </div>\r
        <div>\r
            <Tooltip {...args} title={\`Without Arrow\`} arrow={false}>\r
                <DivElement text={'Without Arrow'} />\r
            </Tooltip>\r
        </div>\r
    </div>`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var j,v,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const groupedPlacements = {
    top: ['top-start', 'top', 'top-end'],
    right: ['right-start', 'right', 'right-end'],
    bottom: ['bottom-start', 'bottom', 'bottom-end'],
    left: ['left-start', 'left', 'left-end']
  };
  const renderPlacementGroup = ({
    placements,
    direction = 'row',
    align = 'center'
  }) => <div style={{
    display: 'flex',
    flexDirection: direction,
    gap: '1rem',
    alignItems: align,
    justifyContent: direction === 'row' ? 'center' : undefined
  }}>\r
            {placements.map(placement => <Tooltip key={placement} placement={placement} title={placement} arrow>\r
                    <span style={{
        display: 'inline-block'
      }}>\r
                        <DivElement text={placement} height="50px" />\r
                    </span>\r
                </Tooltip>)}\r
        </div>;
  return <div style={{
    width: '600px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    padding: '2rem'
  }}>\r
            <p style={{
      fontWeight: 'bold',
      fontSize: '2rem'
    }}>\r
                ALL PLACEMENTS\r
            </p>\r
\r
            {/* Top */}\r
            {renderPlacementGroup({
      placements: groupedPlacements.top
    })}\r
\r
            {/* Middle: Left & Right */}\r
            <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }}>\r
                {renderPlacementGroup({
        placements: groupedPlacements.left,
        direction: 'column',
        align: 'flex-start'
      })}\r
                {renderPlacementGroup({
        placements: groupedPlacements.right,
        direction: 'column',
        align: 'flex-end'
      })}\r
            </div>\r
\r
            {/* Bottom */}\r
            {renderPlacementGroup({
      placements: groupedPlacements.bottom
    })}\r
        </div>;
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const z=["Default","WithoutChildren","ArrowProp","AllPlacements"];export{n as AllPlacements,l as ArrowProp,p as Default,i as WithoutChildren,z as __namedExportsOrder,R as default};
