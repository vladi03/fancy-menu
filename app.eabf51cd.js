(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,n,t){e.exports=t(73)},63:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);t(63);var a=t(0),o=t.n(a),i=t(6),r=t(45),s=t(35),l=t.n(s),u=t(4),c=t(113),m=t(114),d=t(112),h=t(110),p=t(111),f=function(e){return{menuSecond:{minWidth:225,marginLeft:225},userLabel:{marginTop:-20,marginBottom:10,marginLeft:"auto",marginRight:"auto"},menuBase:{backgroundColor:"#626166",color:"#fdfbff",minWidth:63,overflow:"hidden"},closeButton:{color:"#cfcdd1",margin:0,position:"absolute",right:0},menuCollapse:{width:63,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuExpand:{width:225,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},divider:{backgroundColor:"#919095",marginBottom:30},avatar:{margin:10},avatarMain:{marginTop:30,marginBottom:30,marginLeft:"auto",marginRight:"auto",border:"1px solid white"},bigAvatar:{margin:10,width:60,height:60},menuButtonExpandMobile:{position:"fixed",top:0,zIndex:999},menuButtonLabel:{marginLeft:5,width:"100%"},menuButtonShape:{minWidth:0,width:"92%",paddingRight:0,borderTopRightRadius:25,borderBottomRightRadius:25,borderTopLeftRadius:0,borderBottomLeftRadius:0,textAlign:"left"},menuButton:{color:"#cfcdd1",marginBottom:7,marginTop:7,"&:hover":{backgroundColor:"#838285"}},menuButtonActive:{color:"#6ea625",backgroundColor:"#fdfbff","&:hover":{backgroundColor:"#fdfbff"},marginBottom:12,marginTop:12},littleRightBorder:{width:150,height:"calc(100% - 10px)",position:"absolute"}}},b=t(48),M=t.n(b),g=t(47),v=t.n(g),E=t(49),C=t.n(E),k=t(103),w=t(106),y=Object(w.a)(f),L=function(e){var n,t=e.config,a=e.showLabel,i=e.onClick,r=e.selected,s=e.onMouseOver,u=y();return o.a.createElement(k.a,{onClick:r?null:function(){return i()},onMouseOver:function(){return s()},style:{paddingLeft:a?20:0},href:t.link,className:l()(u.menuButtonShape,(n={},n[u.menuButton]=!r,n[u.menuButtonActive]=r,n))},o.a.createElement(t.icon,null)," ",a&&o.a.createElement("span",{className:u.menuButtonLabel},t.label))},O=t(107),B=t(108),x=t(109),S=t(115),I=Object(w.a)(f),R=function(e){var n=e.show,t=e.menuParent,a=e.menuList,i=e.onClose,r=I();return o.a.createElement(c.a,{classes:{paper:r.menuSecond},variant:"persistent",open:n},o.a.createElement(m.a,{className:r.avatarMain},o.a.createElement(t.icon,null)),o.a.createElement("p",{className:r.userLabel},t.label),o.a.createElement(O.a,null,a.map((function(e,n){return o.a.createElement(B.a,{component:"a",onClick:function(){return i()},href:e.link,key:n,button:!0},o.a.createElement(x.a,null,o.a.createElement(e.icon,null)),o.a.createElement(S.a,{primary:e.label}))}))))},T=null,N=o.a.createElement(v.a,{fontSize:"small"}),A=o.a.createElement(M.a,null),z=o.a.createElement(C.a,null),j=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={selectedInternal:{area:"byConfig",index:-1},isMobile:!1,hideMenu:!1,disableMouseOver:!1,expandMenuInternal:!1,secondaryMenuOptions:[],secondaryMenuParent:null},t}Object(r.a)(n,e);var t=n.prototype;return t.onClickMenu=function(e,n,t){var a=this,o=this.props.onClick;if(t&&t.onClick&&"function"==typeof o)o(t);else{var i={area:e,index:n};this.handleCloseMenu({selectedInternal:i,disableMouseOver:!0}),T=setTimeout((function(){return a.setState({disableMouseOver:!1})}),1e3)}},t.handleCloseMenu=function(e){var n=this.state.isMobile,t=this.props.onMenuClose;t&&t(),this.setState(Object.assign({},e,{expandMenuInternal:!1,hideMenu:n}))},t.componentDidMount=function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()},t.resize=function(){var e=void 0!==this.props.expandMenu&&window.innerWidth<=760;this.setState({isMobile:e,hideMenu:e})},t.componentWillUnmount=function(){clearTimeout(T),window.removeEventListener("resize",this.resize)},t.onCloseSecondaryMenu=function(){this.handleCloseMenu({secondaryMenuOptions:[]})},t.onMouseOverMenu=function(e,n){var t=n&&Array.isArray(n.subMenu)?n.subMenu:[];this.setState({secondaryMenuOptions:t,secondaryMenuParent:n})},t.onMouseOver=function(){!1===this.state.disableMouseOver&&this.setState({expandMenuInternal:!0})},t.render=function(){var e,n=this,t=this.props,a=t.classes,i=t.mainLinks,r=t.bottomLinks,s=t.expandMenu,u=t.userLabel,f=t.imageUrl,b=t.avatarInitials,M=t.hideAvatar,g=this.state,v=g.expandMenuInternal,E=g.secondaryMenuOptions,C=g.secondaryMenuParent,k=g.hideMenu,w=s||v,y=w&&E.length>0,O=!0!==M;return o.a.createElement(h.a,{onClickAway:function(){return n.handleCloseMenu()}},o.a.createElement("div",{className:v&&a.littleRightBorder||"",onMouseLeave:function(){return n.handleCloseMenu()}},C&&o.a.createElement(R,{show:y,menuParent:C,onClose:function(){return n.onCloseSecondaryMenu()},menuList:E||[]}),(!k||w)&&o.a.createElement(c.a,{classes:{paper:l()(a.menuBase,(e={},e[a.menuExpand]=w,e[a.menuCollapse]=!w,e))},variant:"permanent",open:!0},w&&o.a.createElement(p.a,{variant:"outlined",onClick:function(){return n.handleCloseMenu()},"aria-label":"Close",className:a.closeButton},N),O&&o.a.createElement(m.a,{src:f,className:a.avatarMain,onMouseOver:function(){return n.onMouseOver()}},b||A),w&&o.a.createElement("p",{className:a.userLabel},u),o.a.createElement(d.a,{className:a.divider}),o.a.createElement("div",{onMouseOver:function(){return n.onMouseOver()},style:{minHeight:450}},i.map((function(e,t){return o.a.createElement(L,{key:t,config:e,showLabel:w,selected:e.selected&&"byConfig"===n.state.selectedInternal.area||"main"===n.state.selectedInternal.area&&n.state.selectedInternal.index===t,onClick:function(){return n.onClickMenu("main",t,e)},onMouseOver:function(t){return n.onMouseOverMenu(t,e)}})})),o.a.createElement("div",{style:{bottom:0,position:"absolute",width:"100%"}},r.map((function(e,t){return o.a.createElement(L,{key:t,config:e,showLabel:w,selected:e.selected&&"byConfig"===n.state.selectedInternal.area||"bottom"===n.state.selectedInternal.area&&n.state.selectedInternal.index===t,onClick:function(){return n.onClickMenu("bottom",t,e)},onMouseOver:function(){return n.onMouseOverMenu(e)}})}))))),k&&!w&&o.a.createElement(p.a,{className:a.menuButtonExpandMobile,onClick:function(){n.onMouseOver()}},z)))},n}(o.a.Component),P=Object(u.a)(f,{withTheme:!0})(j),W=t(50),D=t.n(W),H=t(51),J=t.n(H),U=t(52),q=t.n(U),F=t(55),V=t.n(F),G=t(56),K=t.n(G),Q=t(57),X=t.n(Q),Y=t(53),Z=t.n(Y),$=t(54),_=t.n($),ee=[{label:"Home",icon:D.a,selected:!0,link:"#home"},{label:"Purchase Options",icon:J.a,link:"#report"},{label:"Admin",icon:q.a,subMenu:[{label:"My Dashboard",icon:Z.a,link:"#mydashboard"},{label:"Data Discovery",icon:_.a,link:"#datausage"}]}],ne=[{label:"Messages",icon:V.a},{label:"Settings",icon:K.a},{label:"Logout",icon:X.a,link:"#logout"}],te=o.a.createElement(P,{mainLinks:ee,bottomLinks:ne,expandMenu:!1,userLabel:"Jane Smith",avatarInitials:"VM",imageUrl:"https://material-ui.com/static/images/avatar/7.jpg"}),ae=function(){return o.a.createElement(a.Fragment,null,te,o.a.createElement("div",{style:{marginLeft:86,marginTop:20}},"Hello World ! This is a working example os fancy menu."))};Object(i.render)(o.a.createElement(ae,null),document.querySelector("#app"))}},[[62,1,2]]]);
//# sourceMappingURL=app.eabf51cd.js.map