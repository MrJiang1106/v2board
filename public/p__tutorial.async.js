(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),s=t("3a4m"),c=t.n(s),i=t("/MKj"),r=t("20nU"),m=t("yWgo");class o extends l.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u6211\u7684\u5de5\u5355",type:"item",href:"/ticket",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u6d41\u91cf\u660e\u7ec6",type:"item",href:"/traffic",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-bar-chart"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],a=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u4eea\u8868\u76d8",type:"item",href:"/admin/dashboard",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-speech"})},{title:"\u5de5\u5355\u7ba1\u7406",type:"item",href:"/admin/ticket",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-support"})}];Object(m["c"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:l.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:a}):this.setState({nav:e})}renderMenu(e,a,t,n){switch(e){case"heading":return l.a.createElement("li",{className:"nav-main-heading"},a);case"item":return l.a.createElement("li",{className:"nav-main-item"},l.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===t&&"active"),onClick:()=>{c.a.push(t),this.props.dispatch({type:"header/showNav"})}},n&&n,l.a.createElement("span",{className:"nav-main-link-name"},a)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return l.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},l.a.createElement("div",{className:"smini-visible-block"},l.a.createElement("div",{className:"content-header bg-black-10"},l.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},l.a.createElement("span",{className:"text-white-75"},"X"),l.a.createElement("span",{className:"text-white"},"H")))),l.a.createElement("div",{className:"smini-hidden ".concat(1===r["a"].theme?"":"bg-header-dark")},l.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},l.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},l.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),l.a.createElement("div",{className:"d-lg-none"},l.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},l.a.createElement("i",{className:"fa fa-times-circle"}))))),l.a.createElement("div",{className:"content-side content-side-full"},l.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(i["c"])(e=>{var a=e.header;return{header:a}})(o),p=t("t3Un");class h extends l.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(a){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(p["a"])("/user/logout").then(e=>{c.a.push("/login")})}render(){return l.a.createElement("header",{id:"page-header"},l.a.createElement("div",{className:"content-header"},l.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},l.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},l.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&l.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},l.a.createElement("i",{className:"fa fa-fw fa-search"})," ",l.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),l.a.createElement("div",null),l.a.createElement("div",null,this.state.loading?l.a.createElement("div",{className:"spinner-grow text-primary"}):l.a.createElement("div",{className:"dropdown d-inline-block"},l.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},l.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),l.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),l.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},l.a.createElement("div",{className:"p-2"},l.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",l.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&l.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},l.a.createElement("div",{className:"content-header bg-dark"},l.a.createElement("div",{className:"w-100"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},l.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),l.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)}))))))}}var E=Object(i["c"])(e=>{var a=e.header;return{header:a}})(h);class u extends l.a.Component{render(){return l.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},l.a.createElement("div",{className:"content py-0"},l.a.createElement("div",{className:"row font-size-sm"},l.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},l.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),l.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},l.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.2"),l.a.createElement("span",{"data-toggle":"year-copy"})))))}}class N extends l.a.Component{render(){return l.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===r["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},l.a.createElement(d,this.props),l.a.createElement(E,{search:this.props.search}),this.props.loading?l.a.createElement("main",{id:"main-container"},l.a.createElement("div",{className:"content content-full"},l.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,l.a.createElement(u,null))}}a["a"]=Object(i["c"])(e=>{var a=e.header;return{header:a}})(N)},MCmo:function(e,a,t){e.exports={row:"row___10Wq0",col:"col___ooUQl",col_img:"col_img___2YHHz",img:"img___2dDCv",step:"step___2Fqd-",action_area:"action_area___ZjErh"}},rUea:function(e,a,t){"use strict";t.r(a);t("bbsP");var n=t("/wGt"),l=t("q1tI"),s=t.n(l),c=t("Bl7J"),i=(t("miYZ"),t("tsqr")),r=(t("14J3"),t("BMrR")),m=(t("jCWc"),t("kPKH")),o=t("p0pE"),d=t.n(o),p=t("MCmo"),h=t.n(p),E=t("t3Un"),u=t("+QRC"),N=t.n(u);class v extends s.a.Component{constructor(){super(...arguments),this.state={}}componentDidMount(){Object(E["a"])("/user/tutorial/getSubscribeUrl").then(e=>{200===e.code&&this.setState(d()({},e.data))})}render(){return s.a.createElement("div",null,s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"1"),s.a.createElement("div",null,"\u4e0b\u8f7d ClashX \u5ba2\u6237\u7aef\uff0c\u5b89\u88c5\u540e\u8fd0\u884c\u3002"),s.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3 mt-3",onClick:()=>window.location.href="".concat(window.location.origin,"/downloads/ClashX.zip")},"\u70b9\u51fb\u4e0b\u8f7d")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/20/uNGrjl2noCL1f5B.jpg"}))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"2"),s.a.createElement("div",null,"\u70b9\u51fb\u901a\u77e5\u680f ClashX \u56fe\u6807\u4fdd\u6301\u9009\u4e2d\u72b6\u6001\uff0c\u6309\u5feb\u6377\u952e \u2318+M(\u8ba2\u9605\u5feb\u6377\u952e)\uff0c\u5728\u5f39\u51fa\u7684\u7a97\u53e3\u70b9\u51fb\u6dfb\u52a0\u8f93\u5165\u4e0b\u65b9\u4fe1\u606f"),s.a.createElement("div",{className:h.a.action_area},s.a.createElement("div",null,"Url\uff1a",s.a.createElement("code",{onClick:()=>{N()(this.state.subscribe_url),i["a"].success("\u590d\u5236\u6210\u529f")}},this.state.subscribe_url)),s.a.createElement("div",null,"Config Name\uff1a",s.a.createElement("code",{onClick:()=>{N()(document.title),i["a"].success("\u590d\u5236\u6210\u529f")}},document.title))),s.a.createElement("div",{className:"mt-3"},"\u4ea6\u6216\u8005\u6253\u5f00 ClashX \u540e\u70b9\u51fb\u4e0b\u65b9\u6309\u94ae\u4e00\u952e\u914d\u7f6e"),s.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3 mt-3",onClick:()=>window.location.href="clash://install-config?url=".concat(this.state.subscribe_url,"&name=").concat(document.title)},"\u4e00\u952e\u914d\u7f6e")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/20/8eB13mRbFuszwxg.jpg"}))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"3"),s.a.createElement("div",null,"\u70b9\u51fb\u901a\u77e5\u680f ClashX \u56fe\u6807\u4fdd\u6301\u9009\u4e2d\u72b6\u6001\uff0c\u6309\u5feb\u6377\u952e \u2318+S(\u8bbe\u7f6e\u4e3a\u7cfb\u7edf\u4ee3\u7406\u5feb\u6377\u952e)\uff0c\u5373\u8fde\u63a5\u5b8c\u6210"))))}}class b extends s.a.Component{constructor(){super(...arguments),this.state={}}componentDidMount(){Object(E["a"])("/user/tutorial/getSubscribeUrl").then(e=>{200===e.code&&this.setState(d()({},e.data))})}render(){return s.a.createElement("div",null,s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"1"),s.a.createElement("div",null,"\u4e0b\u8f7d V2rayN \u5ba2\u6237\u7aef\u3002"),s.a.createElement("div",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\u89e3\u538b\uff0c\u89e3\u538b\u5b8c\u6210\u540e\u8fd0\u884cV2rayN"),s.a.createElement("div",null,"\u8fd0\u884c\u65f6\u8bf7\u53f3\u952e\uff0c\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c"),s.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3 mt-3",onClick:()=>window.location.href="".concat(window.location.origin,"/downloads/V2rayN.zip")},"\u70b9\u51fb\u4e0b\u8f7d"))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"2"),s.a.createElement("div",null,"\u70b9\u51fb\u8ba2\u9605\u6309\u94ae\uff0c\u9009\u62e9\u8ba2\u9605\u8bbe\u7f6e\u70b9\u51fb\u6dfb\u52a0\uff0c\u8f93\u5165\u5982\u4e0b\u5185\u5bb9\u540e\u70b9\u51fb\u786e\u5b9a\u4fdd\u5b58"),s.a.createElement("div",{className:h.a.action_area},s.a.createElement("div",null,"\u5907\u6ce8\uff1a",s.a.createElement("code",{onClick:()=>{N()(document.title),i["a"].success("\u590d\u5236\u6210\u529f")}},document.title)),s.a.createElement("div",null,"\u5730\u5740(url)\uff1a",s.a.createElement("code",{onClick:()=>{N()(this.state.subscribe_url),i["a"].success("\u590d\u5236\u6210\u529f")}},this.state.subscribe_url)))),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/UkcHNtERTnjLVS8.jpg"}))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"3"),s.a.createElement("div",null,"\u70b9\u51fb\u8ba2\u9605\u540e\uff0c\u4ece\u670d\u52a1\u5668\u5217\u8868\u9009\u62e9\u670d\u52a1\u5668")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/BgPGFQ3kCSuIRjJ.jpg"}))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"4"),s.a.createElement("div",null,"\u70b9\u51fb\u53c2\u6570\u8bbe\u7f6e\uff0c\u627e\u5230Http\u4ee3\u7406\uff0c\u9009\u62e9PAC\u6a21\u5f0f\u540e\u6309\u786e\u5b9a\u4fdd\u5b58\u5373\u542f\u52a8\u4ee3\u7406\u3002")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/vnVykKEFT8Lzo3f.jpg"}))))}}class g extends s.a.Component{constructor(){super(...arguments),this.state={}}componentDidMount(){Object(E["a"])("/user/tutorial/getAppleID").then(e=>{200===e.code&&this.setState(d()({},e.data))}),Object(E["a"])("/user/tutorial/getSubscribeUrl").then(e=>{200===e.code&&this.setState(d()({},e.data))})}render(){return s.a.createElement("div",null,s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"1"),s.a.createElement("div",null,"iOS\u4e0a\u4f7f\u7528\u8bf7\u5728iOS\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u672c\u9875"))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"2"),s.a.createElement("div",null,"\u5728 App Store \u767b\u5f55\u672c\u7ad9\u63d0\u4f9b\u7684\u7f8e\u533a Apple ID \u4e0b\u8f7d\u5ba2\u6237\u7aef\u3002"),s.a.createElement("div",null,"\u4e3a\u4e86\u4fdd\u62a4\u60a8\u7684\u9690\u79c1\uff0c\u8bf7\u52ff\u5728\u624b\u673a\u8bbe\u7f6e\u91cc\u76f4\u63a5\u767b\u5f55\uff0c\u4ec5\u5728 App Store \u767b\u5f55\u5373\u53ef\u3002"),s.a.createElement("div",null,"\u767b\u9646\u5b8c\u6210\u540e\u70b9\u51fb\u4e0b\u65b9\u4e0b\u8f7d\u4f1a\u81ea\u52a8\u5524\u8d77\u4e0b\u8f7d\u3002"),this.state.apple_id?s.a.createElement("div",{className:h.a.action_area},s.a.createElement("div",null,"Apple ID\uff1a",s.a.createElement("code",{onClick:()=>{N()(this.state.apple_id),i["a"].success("\u590d\u5236\u6210\u529f")}},this.state.apple_id)),s.a.createElement("div",null,"\u5bc6\u7801\uff1a",s.a.createElement("code",{onClick:()=>{N()(this.state.apple_id_password),i["a"].success("\u590d\u5236\u6210\u529f")}},"\u70b9\u51fb\u590d\u5236\u5bc6\u7801"))):s.a.createElement("div",{className:h.a.action_area},"\u8d26\u53f7\u8fc7\u671f\u6216\u672a\u8ba2\u9605\uff0c\u6216\u7ba1\u7406\u5458\u65e0\u6cd5\u4e3a\u4f60\u63d0\u4f9bApple ID"),s.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3 mt-3",onClick:()=>window.location.href="https://apps.apple.com/us/app/shadowrocket/id932747118"},"\u6253\u5f00Apple Store\u4e0b\u8f7d")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/5idkjJ61stWgREV.jpg"}))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"3"),s.a.createElement("div",null,"\u5f85\u5ba2\u6237\u7aef\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u70b9\u51fb\u4e0b\u65b9\u4e00\u952e\u8ba2\u9605\u6309\u94ae\u4f1a\u81ea\u52a8\u5524\u8d77\u5e76\u8fdb\u884c\u8ba2\u9605"),s.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3 mt-3",onClick:()=>window.location.href="shadowrocket://add/sub://"+window.btoa(this.state.subscribe_url).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")+"?remark="+window.v2board.title},"\u4e00\u952e\u8ba2\u9605")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/ZcqlNMb3eg5Uhxd.jpg"}))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"4"),s.a.createElement("div",null,"\u9009\u62e9\u8282\u70b9\u8fdb\u884c\u94fe\u63a5\uff0c\u9996\u6b21\u94fe\u63a5\u8fc7\u7a0b\u6388\u6743\u7a97\u53e3\u8bf7\u4e00\u8def\u5141\u8bb8\u3002")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/9Zdxksr7Ey6hjlm.jpg"}))))}}class f extends s.a.Component{constructor(){super(...arguments),this.state={}}componentDidMount(){Object(E["a"])("/user/tutorial/getSubscribeUrl").then(e=>{200===e.code&&this.setState(d()({},e.data))})}render(){return s.a.createElement("div",null,s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"1"),s.a.createElement("div",null,"\u4e0b\u8f7d V2rayNG \u5ba2\u6237\u7aef\u3002"),s.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3 mt-3",onClick:()=>window.location.href="".concat(window.location.origin,"/downloads/V2rayNG.apk")},"\u70b9\u51fb\u4e0b\u8f7d"))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"2"),s.a.createElement("div",null,"\u6253\u5f00 V2rayNG \u70b9\u51fb\u5de6\u4e0a\u89d2\u7684\u83dc\u5355\u56fe\u6807\u6253\u5f00\u4fa7\u8fb9\u680f\uff0c\u968f\u540e\u70b9\u51fb \u8ba2\u9605\u8bbe\u7f6e\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u2795\u6309\u94ae\u65b0\u589e\u8ba2\u9605\u3002"),s.a.createElement("div",null,"\u6309\u7167\u4e0b\u65b9\u5185\u5bb9\u8fdb\u884c\u586b\u5199\uff0c\u586b\u5199\u5b8c\u6bd5\u540e\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u2611\ufe0f\u6309\u94ae\u3002"),s.a.createElement("div",{className:h.a.action_area},s.a.createElement("div",null,"\u5907\u6ce8\uff1a",s.a.createElement("code",{onClick:()=>{N()(document.title),i["a"].success("\u590d\u5236\u6210\u529f")}},document.title)),s.a.createElement("div",null,"\u5730\u5740(url)\uff1a",s.a.createElement("code",{onClick:()=>{N()(this.state.subscribe_url),i["a"].success("\u590d\u5236\u6210\u529f")}},this.state.subscribe_url)))),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/ghuVkTe6LBqRxSO.jpg"}))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"3"),s.a.createElement("div",null,"\u518d\u6b21\u4ece\u4fa7\u8fb9\u680f\u8fdb\u5165 \u8bbe\u7f6e \u9875\u9762\uff0c\u70b9\u51fb \u8def\u7531\u6a21\u5f0f \u5c06\u5176\u66f4\u6539\u4e3a \b\u7ed5\u8fc7\u5c40\u57df\u7f51\u53ca\u5927\u9646\u5730\u5740\u3002")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/Tf1AGoXZuhJrwOq.jpg"}))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"4"),s.a.createElement("div",null,"\u968f\u540e\u4ece\u4fa7\u8fb9\u680f\u56de\u5230 \u914d\u7f6e\u6587\u4ef6 \u9875\u9762\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u7701\u7565\u53f7\u56fe\u6807\u9009\u62e9\u66f4\u65b0\u8ba2\u9605\u3002")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/UtfPShQXupRmB4L.jpg"}))),s.a.createElement(r["a"],{className:h.a.row},s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col},s.a.createElement("div",{className:h.a.step},"5"),s.a.createElement("div",null,"\u70b9\u51fb\u9009\u62e9\u60a8\u9700\u8981\u7684\u8282\u70b9\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684V\u5b57\u6309\u94ae\u5373\u53ef\u8fde\u63a5\u3002")),s.a.createElement(m["a"],{xs:24,md:12,lg:12,className:h.a.col_img},s.a.createElement("img",{className:h.a.img,src:"https://i.loli.net/2019/11/21/ZkbNsSrAg3m5Dny.jpg"}))))}}t.d(a,"default",function(){return w});class w extends s.a.Component{constructor(){super(...arguments),this.state={visible:!1,platform:void 0}}componentDidMount(){}onShow(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.setState({visible:!this.state.visible,platform:e})}tutorialTemplate(){switch(this.state.platform){case"macos":return s.a.createElement(v,null);case"windows":return s.a.createElement(b,null);case"ios":return s.a.createElement(g,null);case"android":return s.a.createElement(f,null)}}render(){return s.a.createElement(c["a"],this.props,s.a.createElement("main",{id:"main-container"},s.a.createElement("div",{className:"content content-full"},s.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u4f7f\u7528\u6559\u7a0b"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 col-xl-6"},s.a.createElement("a",{className:"block block-rounded block-link-shadow",href:"javascript:void(0)",onClick:()=>this.onShow("windows")},s.a.createElement("div",{className:"block-content block-content-full d-flex align-items-center justify-content-between"},s.a.createElement("div",{className:"item"},s.a.createElement("i",{className:"fab fa-2x fa-windows text-primary"})),s.a.createElement("div",{className:"ml-3 text-right"},s.a.createElement("p",{className:"font-size-lg font-w600 mb-0"},"Windows"),s.a.createElement("p",{className:"text-muted mb-0"},"\u517c\u5bb9 Windows 7 \u4ee5\u4e0a\u7684\u7248\u672c"))))),s.a.createElement("div",{className:"col-md-6 col-xl-6"},s.a.createElement("a",{className:"block block-rounded block-link-shadow",href:"javascript:void(0)",onClick:()=>this.onShow("android")},s.a.createElement("div",{className:"block-content block-content-full d-flex align-items-center justify-content-between"},s.a.createElement("div",{className:"item"},s.a.createElement("i",{className:"fab fa-2x fa-android text-primary"})),s.a.createElement("div",{className:"ml-3 text-right"},s.a.createElement("p",{className:"font-size-lg font-w600 mb-0"},"Android"),s.a.createElement("p",{className:"text-muted mb-0"},"\u517c\u5bb9 Android 6 \u4ee5\u4e0a\u7684\u7248\u672c"))))),s.a.createElement("div",{className:"col-md-6 col-xl-6"},s.a.createElement("a",{className:"block block-rounded block-link-shadow",href:"javascript:void(0)",onClick:()=>this.onShow("macos")},s.a.createElement("div",{className:"block-content block-content-full d-flex align-items-center justify-content-between"},s.a.createElement("div",{className:"item"},s.a.createElement("i",{className:"fab fa-2x fa-apple text-primary"})),s.a.createElement("div",{className:"ml-3 text-right"},s.a.createElement("p",{className:"font-size-lg font-w600 mb-0"},"macOS"),s.a.createElement("p",{className:"text-muted mb-0"},"\u517c\u5bb9 Yosemite \u4ee5\u4e0a\u7684\u7248\u672c"))))),s.a.createElement("div",{className:"col-md-6 col-xl-6"},s.a.createElement("a",{className:"block block-rounded block-link-shadow",href:"javascript:void(0)",onClick:()=>this.onShow("ios")},s.a.createElement("div",{className:"block-content block-content-full d-flex align-items-center justify-content-between"},s.a.createElement("div",{className:"item"},s.a.createElement("i",{className:"fab fa-2x fa-apple text-primary"})),s.a.createElement("div",{className:"ml-3 text-right"},s.a.createElement("p",{className:"font-size-lg font-w600 mb-0"},"iOS"),s.a.createElement("p",{className:"text-muted mb-0"},"\u517c\u5bb9 iOS 9 \u4ee5\u4e0a\u7684\u7248\u672c")))))))),s.a.createElement(n["a"],{placement:"right",closable:!1,onClose:()=>this.onShow(),visible:this.state.visible,width:"80%"},this.tutorialTemplate()))}}}}]);