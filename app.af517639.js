(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,n,t){e.exports=t(73)},63:function(e,n,t){},73:function(e,n,t){"use strict";t.r(n);t(63);var a=t(0),o=t.n(a),i=t(6),r=t(46),l=t(36),s=t.n(l),u=t(4),c=t(113),d=t(114),m=t(112),h=t(110),p=t(111),b=function(e){return{menuSecond:{minWidth:225,marginLeft:225},userLabel:{marginTop:-20,marginBottom:10,marginLeft:"auto",marginRight:"auto"},menuBase:{backgroundColor:"#626166",color:"#fdfbff",minWidth:63,overflow:"hidden"},closeButton:{color:"#cfcdd1",margin:0,position:"absolute",right:0},menuCollapse:{width:63,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuExpand:{width:225,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},divider:{backgroundColor:"#919095",marginBottom:30},avatar:{margin:10},avatarMain:{marginTop:30,marginBottom:30,marginLeft:"auto",marginRight:"auto",border:"1px solid white"},bigAvatar:{margin:10,width:60,height:60},menuButtonExpandMobile:{position:"fixed",top:0,zIndex:999},menuButtonLabel:{marginLeft:5,width:"100%"},menuButtonShape:{minWidth:0,width:"92%",paddingRight:0,borderTopRightRadius:25,borderBottomRightRadius:25,borderTopLeftRadius:0,borderBottomLeftRadius:0,textAlign:"left"},menuButton:{color:"#cfcdd1",marginBottom:7,marginTop:7,"&:hover":{backgroundColor:"#838285"}},menuButtonActive:{color:"#6ea625",backgroundColor:"#fdfbff","&:hover":{backgroundColor:"#fdfbff"},marginBottom:12,marginTop:12},menuButtonTitle:{color:"#d7e5c5",marginBottom:12,marginTop:12,borderTopLeftRadius:120,backgroundColor:"#8b878e",cursor:"default"},littleRightBorder:{width:150,height:"calc(100% - 10px)",position:"absolute"}}},f=t(49),g=t.n(f),M=t(48),v=t.n(M),k=t(50),E=t.n(k),C=t(103),w=t(106),y=Object(w.a)(b),O=function(e){var n,t,a,i=e.config,r=e.showLabel,l=e.onClick,u=e.selected,c=e.onMouseOver,d=y(),m=(null===(n=i.link)||void 0===n?void 0:n.length)>0||(null===(t=i.subMenu)||void 0===t?void 0:t.length)>0;return o.a.createElement(C.a,{onClick:u?null:function(){return l()},onMouseOver:function(){return c()},style:{paddingLeft:r?20:0},href:i.link,className:s()(d.menuButtonShape,(a={},a[d.menuButton]=!u&&m,a[d.menuButtonActive]=u&&m,a[d.menuButtonTitle]=!m,a))},m&&o.a.createElement(i.icon,null)," ",r&&o.a.createElement("span",{className:d.menuButtonLabel},i.label))},L=t(107),B=t(108),x=t(109),S=t(115),I=Object(w.a)(b),T=function(e){var n=e.show,t=e.menuParent,a=e.menuList,i=e.onClose,r=I();return o.a.createElement(c.a,{classes:{paper:r.menuSecond},variant:"persistent",open:n},o.a.createElement(d.a,{className:r.avatarMain},o.a.createElement(t.icon,null)),o.a.createElement("p",{className:r.userLabel},t.label),o.a.createElement(L.a,null,a.map((function(e,n){return o.a.createElement(B.a,{component:"a",onClick:function(){return i()},href:e.link,key:n,button:!0},o.a.createElement(x.a,null,o.a.createElement(e.icon,null)),o.a.createElement(S.a,{primary:e.label}))}))))},R=null,A=o.a.createElement(v.a,{fontSize:"small"}),N=o.a.createElement(g.a,null),z=o.a.createElement(E.a,null),j=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={selectedInternal:{area:"byConfig",index:-1},isMobile:!1,hideMenu:!1,disableMouseOver:!1,expandMenuInternal:!1,secondaryMenuOptions:[],secondaryMenuParent:null},t}Object(r.a)(n,e);var t=n.prototype;return t.onClickMenu=function(e,n,t){var a=this,o=this.props.onClick;if(t&&t.onClick&&"function"==typeof o)o(t);else{var i={area:e,index:n};this.handleCloseMenu({selectedInternal:i,disableMouseOver:!0}),R=setTimeout((function(){return a.setState({disableMouseOver:!1})}),1e3)}},t.handleCloseMenu=function(e){var n=this.state.isMobile,t=this.props.onMenuClose;t&&t(),this.setState(Object.assign({},e,{expandMenuInternal:!1,hideMenu:n}))},t.componentDidMount=function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()},t.resize=function(){var e=void 0!==this.props.expandMenu&&window.innerWidth<=760;this.setState({isMobile:e,hideMenu:e})},t.componentWillUnmount=function(){clearTimeout(R),window.removeEventListener("resize",this.resize)},t.onCloseSecondaryMenu=function(){this.handleCloseMenu({secondaryMenuOptions:[]})},t.onMouseOverMenu=function(e,n){var t=n&&Array.isArray(n.subMenu)?n.subMenu:[];this.setState({secondaryMenuOptions:t,secondaryMenuParent:n})},t.onMouseOver=function(){!1===this.state.disableMouseOver&&this.setState({expandMenuInternal:!0})},t.render=function(){var e,n=this,t=this.props,a=t.classes,i=t.mainLinks,r=t.bottomLinks,l=t.expandMenu,u=t.userLabel,b=t.imageUrl,f=t.avatarInitials,g=t.hideAvatar,M=this.state,v=M.expandMenuInternal,k=M.secondaryMenuOptions,E=M.secondaryMenuParent,C=M.hideMenu,w=l||v,y=w&&k.length>0,L=!0!==g;return o.a.createElement(h.a,{onClickAway:function(){return n.handleCloseMenu()}},o.a.createElement("div",{className:v&&a.littleRightBorder||"",onMouseLeave:function(){return n.handleCloseMenu()}},E&&o.a.createElement(T,{show:y,menuParent:E,onClose:function(){return n.onCloseSecondaryMenu()},menuList:k||[]}),(!C||w)&&o.a.createElement(c.a,{classes:{paper:s()(a.menuBase,(e={},e[a.menuExpand]=w,e[a.menuCollapse]=!w,e))},variant:"permanent",open:!0},w&&o.a.createElement(p.a,{variant:"outlined",onClick:function(){return n.handleCloseMenu()},"aria-label":"Close",className:a.closeButton},A),L&&o.a.createElement(d.a,{src:b,className:a.avatarMain,onMouseOver:function(){return n.onMouseOver()}},f||N),w&&o.a.createElement("p",{className:a.userLabel},u),o.a.createElement(m.a,{className:a.divider}),o.a.createElement("div",{onMouseOver:function(){return n.onMouseOver()},style:{minHeight:450}},i.map((function(e,t){return o.a.createElement(O,{key:t,config:e,showLabel:w,selected:e.selected&&"byConfig"===n.state.selectedInternal.area||"main"===n.state.selectedInternal.area&&n.state.selectedInternal.index===t,onClick:function(){return n.onClickMenu("main",t,e)},onMouseOver:function(t){return n.onMouseOverMenu(t,e)}})})),o.a.createElement("div",{style:{bottom:0,position:"absolute",width:"100%"}},r.map((function(e,t){return o.a.createElement(O,{key:t,config:e,showLabel:w,selected:e.selected&&"byConfig"===n.state.selectedInternal.area||"bottom"===n.state.selectedInternal.area&&n.state.selectedInternal.index===t,onClick:function(){return n.onClickMenu("bottom",t,e)},onMouseOver:function(){return n.onMouseOverMenu(e)}})}))))),C&&!w&&o.a.createElement(p.a,{className:a.menuButtonExpandMobile,onClick:function(){n.onMouseOver()}},z)))},n}(o.a.Component),P=Object(u.a)(b,{withTheme:!0})(j),W=t(51),D=t.n(W),H=t(30),J=t.n(H),U=t(52),q=t.n(U),F=t(55),V=t.n(F),G=t(56),K=t.n(G),Q=t(57),X=t.n(Q),Y=t(53),Z=t.n(Y),$=t(54),_=t.n($),ee=[{label:"Main",icon:J.a},{label:"Home",icon:D.a,selected:!0,link:"#home"},{label:"Admin",icon:q.a,subMenu:[{label:"My Dashboard",icon:Z.a,link:"#mydashboard"},{label:"Data Discovery",icon:_.a,link:"#datausage"}]},{label:"Purchase Options",icon:J.a},{label:"Blimp Options",icon:J.a,link:"#report"},{label:"Acme Options",icon:J.a,link:"#report"}],ne=[{label:"Messages",icon:V.a},{label:"Settings",icon:K.a},{label:"Logout",icon:X.a,link:"#logout"}],te=o.a.createElement(P,{mainLinks:ee,bottomLinks:ne,expandMenu:!1,userLabel:"Jane Smith",avatarInitials:"VM",imageUrl:"https://material-ui.com/static/images/avatar/7.jpg"}),ae=function(){return o.a.createElement(a.Fragment,null,te,o.a.createElement("div",{style:{marginLeft:86,marginTop:20}},"Hello World ! This is a working example os fancy menu."))};Object(i.render)(o.a.createElement(ae,null),document.querySelector("#app"))}},[[62,1,2]]]);
//# sourceMappingURL=app.af517639.js.map