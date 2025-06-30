import{r as y,j as a}from"./iframe-fKP7IthX.js";import{D as B}from"./Dialog-BregCbMT.js";import{B as _}from"./Button-CsFq68aK.js";import"./useForkRef-d1CgJ6pJ.js";import"./index-Ce7WrdEJ.js";import"./index-ymetkrM6.js";import"./Portal-BNcOyIMk.js";import"./useTimeout-DgSpJTXF.js";import"./useSlot-BMr-aSQ4.js";import"./Modal-KoiQXbAH.js";import"./createSimplePaletteValueFilter-20B6RqDq.js";import"./isFocusVisible-B8k4qzLc.js";const{useArgs:M}=__STORYBOOK_MODULE_PREVIEW_API__,U={title:"base-component/Dialog",component:B,tags:["autodocs"],parameters:{layout:"centered"},args:{title:"Demo Dialog",children:"This is a dialog content area.",fullWidth:!0,maxWidth:"sm",fullScreen:!1,draggable:!1,dividers:!1,autoContentPadding:!0}},r=v=>{const[W,l]=y.useState(!1),x=()=>l(!1);return a.jsxs(a.Fragment,{children:[a.jsx(_,{onClick:()=>l(!0),children:"Open Dialog"}),a.jsx(B,{...v,open:W,onClose:x})]})},t=r.bind({});t.storyName="📦 Default Dialog";const e=r.bind({});e.args={title:"Dialog With Actions",children:"Are you sure you want to continue?",actions:[{label:"Cancel",onClick:()=>alert("Cancelled")},{label:"Confirm",onClick:()=>alert("Confirmed"),autoFocus:!0,variant:"contained"}]};e.storyName="✅ With Actions";const n=r.bind({});n.args={draggable:!0,title:"Draggable Dialog",children:"Try dragging this dialog by its title."};n.storyName="🖱️ Draggable Dialog";const s=r.bind({});s.args={fullScreen:"sm",title:"Responsive Fullscreen Dialog",children:"Will become fullscreen on small screens."};s.storyName="📱 Responsive FullScreen";const o=r.bind({});o.args={dividers:!0,title:"Dialog With Dividers",children:`Longer text to show how dividers split the content.
Line one.
Line two.
Line three.`};o.storyName="📏 With Dividers";var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  //const [{ open, ...args }, updateArgs] = useArgs();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  //const handleClose = () => updateArgs({ open: false });

  return <>\r
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>\r
            <Dialog {...args} open={open} onClose={handleClose} />\r
        </>;
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  //const [{ open, ...args }, updateArgs] = useArgs();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  //const handleClose = () => updateArgs({ open: false });

  return <>\r
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>\r
            <Dialog {...args} open={open} onClose={handleClose} />\r
        </>;
}`,...(d=(g=e.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var m,h,D;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  //const [{ open, ...args }, updateArgs] = useArgs();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  //const handleClose = () => updateArgs({ open: false });

  return <>\r
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>\r
            <Dialog {...args} open={open} onClose={handleClose} />\r
        </>;
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var C,f,O;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  //const [{ open, ...args }, updateArgs] = useArgs();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  //const handleClose = () => updateArgs({ open: false });

  return <>\r
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>\r
            <Dialog {...args} open={open} onClose={handleClose} />\r
        </>;
}`,...(O=(f=s.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var A,S,b;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  //const [{ open, ...args }, updateArgs] = useArgs();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  //const handleClose = () => updateArgs({ open: false });

  return <>\r
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>\r
            <Dialog {...args} open={open} onClose={handleClose} />\r
        </>;
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const V=["Default","WithActions","DraggableDialog","FullScreenResponsive","WithDividers"];export{t as Default,n as DraggableDialog,s as FullScreenResponsive,e as WithActions,o as WithDividers,V as __namedExportsOrder,U as default};
