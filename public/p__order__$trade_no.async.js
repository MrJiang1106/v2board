(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{Bl7J:function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s),i=a("3a4m"),l=a.n(i),r=a("/MKj"),c=a("20nU"),m=a("yWgo");class o extends n.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u6211\u7684\u5de5\u5355",type:"item",href:"/ticket",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u6d41\u91cf\u660e\u7ec6",type:"item",href:"/traffic",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bar-chart"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],t=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u4eea\u8868\u76d8",type:"item",href:"/admin/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speech"})},{title:"\u5de5\u5355\u7ba1\u7406",type:"item",href:"/admin/ticket",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-support"})}];Object(m["c"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:t}):this.setState({nav:e})}renderMenu(e,t,a,s){switch(e){case"heading":return n.a.createElement("li",{className:"nav-main-heading"},t);case"item":return n.a.createElement("li",{className:"nav-main-item"},n.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===a&&"active"),onClick:()=>{l.a.push(a),this.props.dispatch({type:"header/showNav"})}},s&&s,n.a.createElement("span",{className:"nav-main-link-name"},t)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return n.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},n.a.createElement("div",{className:"smini-visible-block"},n.a.createElement("div",{className:"content-header bg-black-10"},n.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},n.a.createElement("span",{className:"text-white-75"},"X"),n.a.createElement("span",{className:"text-white"},"H")))),n.a.createElement("div",{className:"smini-hidden ".concat(1===c["a"].theme?"":"bg-header-dark")},n.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},n.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},n.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),n.a.createElement("div",{className:"d-lg-none"},n.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},n.a.createElement("i",{className:"fa fa-times-circle"}))))),n.a.createElement("div",{className:"content-side content-side-full"},n.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(r["c"])(e=>{var t=e.header;return{header:t}})(o),h=a("t3Un");class p extends n.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(t){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{l.a.push("/login")})}render(){return n.a.createElement("header",{id:"page-header"},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},n.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},n.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&n.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},n.a.createElement("i",{className:"fa fa-fw fa-search"})," ",n.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),n.a.createElement("div",null),n.a.createElement("div",null,this.state.loading?n.a.createElement("div",{className:"spinner-grow text-primary"}):n.a.createElement("div",{className:"dropdown d-inline-block"},n.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},n.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),n.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),n.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},n.a.createElement("div",{className:"p-2"},n.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",n.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&n.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},n.a.createElement("div",{className:"content-header bg-dark"},n.a.createElement("div",{className:"w-100"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},n.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),n.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)}))))))}}var u=Object(r["c"])(e=>{var t=e.header;return{header:t}})(p);class E extends n.a.Component{render(){return n.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},n.a.createElement("div",{className:"content py-0"},n.a.createElement("div",{className:"row font-size-sm"},n.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},n.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),n.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},n.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.2"),n.a.createElement("span",{"data-toggle":"year-copy"})))))}}class b extends n.a.Component{render(){return n.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===c["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},n.a.createElement(d,this.props),n.a.createElement(u,{search:this.props.search}),this.props.loading?n.a.createElement("main",{id:"main-container"},n.a.createElement("div",{className:"content content-full"},n.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,n.a.createElement(E,null))}}t["a"]=Object(r["c"])(e=>{var t=e.header;return{header:t}})(b)},GPI8:function(e,t,a){"use strict";a.r(t);var s=a("jehZ"),n=a.n(s),i=(a("2qtc"),a("kLXV")),l=(a("7Kak"),a("9yH6")),r=(a("Pwec"),a("CtXQ")),c=(a("miYZ"),a("tsqr")),m=a("p0pE"),o=a.n(m),d=a("q1tI"),h=a.n(d),p=a("Bl7J"),u=a("/MKj"),E=a("t3Un"),b=a("LbTH"),v=a("yWgo");class g extends h.a.Component{constructor(){super(...arguments),this.state={loading:!1,plan:{ext_data:{}},layout_login:!0,method:0,modalVisible:!1,paymentMethod:[]}}componentDidMount(){this.fetchData(),this.getPaymentMethod(),this.props.dispatch({type:"header/getUserInfo",complete:()=>{}})}fetchData(){Object(E["a"])("/user/order/details",{trade_no:this.props.match.params.trade_no}).then(e=>{200===e.code&&(this.setState(o()({},e.data,{layout_login:!1})),0===e.data.status&&this.check())})}getPaymentMethod(){Object(E["a"])("/user/order/getPaymentMethod").then(e=>{200===e.code&&this.setState({paymentMethod:e.data})})}submit(){if(void 0===this.state.method)return c["a"].error("\u8bf7\u9009\u62e9\u652f\u4ed8\u65b9\u5f0f");this.setState({loading:!0},()=>{Object(E["b"])("/user/order/checkout",{trade_no:this.props.match.params.trade_no,method:this.state.method}).then(e=>{if(200!==e.code)return this.setState({loading:!1});this.setState({payUrl:e.data,payType:e.type},()=>{this.setState({loading:!1}),1===this.state.payType&&(window.location.href=this.state.payUrl,c["a"].info("\u6b63\u5728\u524d\u5f80\u6536\u94f6\u53f0")),0===this.state.payType&&this.setState({modalVisible:!0})})})})}check(){setTimeout(()=>{Object(E["a"])("/user/order/check?trade_no="+this.props.match.params.trade_no).then(e=>{if(200===e.code)return 1===e.data?(this.setState({modalVisible:!1}),void this.fetchData()):void this.check()})},3e3)}render(){return console.log(this.props.header),h.a.createElement(p["a"],n()({},this.props,{loading:this.state.layout_login}),h.a.createElement("main",{id:"main-container"},h.a.createElement("div",{className:"content content-full"},h.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u8ba2\u5355\u8be6\u60c5"),h.a.createElement("div",{className:"row",id:"cashier"},h.a.createElement("div",{className:0===this.state.status?"col-md-8 col-sm-12":"col-12"},h.a.createElement("div",{className:"block block-fx-shadow block-rounded"},h.a.createElement("div",{className:"block-header block-header-default"},h.a.createElement("h3",{className:"block-title"},"# ",this.state.trade_no)),h.a.createElement("div",{className:"block-content"},h.a.createElement("div",{className:""},h.a.createElement("div",{className:"table-responsive push"},h.a.createElement("table",{className:"table table-bordered"},h.a.createElement("thead",{className:"bg-body"},h.a.createElement("tr",null,h.a.createElement("th",null,"\u4ea7\u54c1"),h.a.createElement("th",{className:"text-center",style:{width:120}},"\u7c7b\u578b/\u5468\u671f"),h.a.createElement("th",{className:"text-right",style:{width:120}},"\u91d1\u989d"))),h.a.createElement("tbody",null,h.a.createElement("tr",null,h.a.createElement("td",null,h.a.createElement("p",{className:"font-w600 mb-1"},this.state.plan.name),h.a.createElement("div",{className:"text-muted"},"- \u6d41\u91cf\uff1a",this.state.plan.transfer_enable," GB")),h.a.createElement("td",{className:"text-center"},h.a.createElement("span",{className:"badge badge-pill badge-primary"},b["a"].cycleText[this.state.cycle])),h.a.createElement("td",{className:"text-right"},(this.state.plan[this.state.cycle]/100).toFixed(2))),3===this.state.type?h.a.createElement("tr",null,h.a.createElement("td",null,h.a.createElement("p",{className:"font-w600 mb-1"},"\u66f4\u6539\u8ba2\u9605\u624b\u7eed\u8d39"),h.a.createElement("div",{className:"text-muted"},"- ",Object(v["e"])(this.props.header.userInfo.expired_at)," * ",this.state.update_fee)),h.a.createElement("td",{className:"text-center"},h.a.createElement("span",{className:"badge badge-pill badge-primary"},"\u4e00\u6b21\u6027")),h.a.createElement("td",{className:"text-right"},(Object(v["e"])(this.props.header.userInfo.expired_at)*this.state.update_fee).toFixed(2))):""))),h.a.createElement("p",{className:"text-muted text-center my-5"},"Thank you for doing business with us.")))),0===this.state.status&&h.a.createElement("h3",{className:"font-w300 mt-4 mb-3"},"\u652f\u4ed8\u65b9\u5f0f"),0===this.state.status&&h.a.createElement("div",{className:"mb-4"},h.a.createElement(l["a"].Group,{onChange:e=>this.setState({method:e.target.value}),size:"large",defaultValue:this.state.method},this.state.paymentMethod.map(e=>{return h.a.createElement(l["a"].Button,{value:e.method},h.a.createElement(r["a"],{type:e.icon,style:{fontSize:27,color:"alipay"===e.icon?"#419FE3":"#4FA938",verticalAlign:"-0.1em"}})," ",e.name)})))),0===this.state.status&&h.a.createElement("div",{className:"col-md-4 col-sm-12"},h.a.createElement("div",{className:"block block-link-pop block-rounded block-bordered px-3 py-3 text-light",style:{background:"#35383D"}},h.a.createElement("h5",{className:"text-light mb-3"},"\u8ba2\u5355\u603b\u989d"),h.a.createElement("div",{className:"row no-gutters pb-3",style:{borderBottom:"1px solid #646669"}},h.a.createElement("div",{className:"col-8"},this.state.plan.name," x ",b["a"].cycleText[this.state.cycle]),h.a.createElement("div",{className:"col-4 text-right"},"\xa5",(this.state.plan[this.state.cycle]/100).toFixed(2))),3===this.state.type?h.a.createElement("div",{className:"row no-gutters py-3",style:{borderBottom:"1px solid #646669"}},h.a.createElement("div",{className:"col-8"},"\u66f4\u6539\u8ba2\u9605\u624b\u7eed\u8d39"),h.a.createElement("div",{className:"col-4 text-right"},"\xa5",(Object(v["e"])(this.props.header.userInfo.expired_at)*this.state.update_fee).toFixed(2))):"",h.a.createElement("div",{className:"pt-3",style:{color:"#646669"}},"\u603b\u8ba1"),h.a.createElement("h1",{className:"text-light mt-3 mb-3"},"\xa5 ",(this.state.total_amount/100).toFixed(2)," CNY"),h.a.createElement("button",{type:"button",className:"btn btn-block btn-primary",disabled:this.state.loading,onClick:()=>this.submit()},this.state.loading?h.a.createElement(r["a"],{type:"loading"}):h.a.createElement("span",null,h.a.createElement("i",{className:"far fa-check-circle"})," \u7ed3\u8d26"))))))),h.a.createElement(i["a"],{maskClosable:!0,closable:!1,centered:!0,onCancel:()=>this.setState({modalVisible:!1,payType:void 0,payUrl:void 0}),width:300,visible:this.state.modalVisible,footer:h.a.createElement("div",{style:{textAlign:"center"}},"\u7b49\u5f85\u652f\u4ed8\u4e2d")},h.a.createElement("img",{width:"100%",src:"https://www.zhihu.com/qrcode?url="+this.state.payUrl})))}}t["default"]=Object(u["c"])(e=>{var t=e.header;return{header:t}})(g)},LbTH:function(e,t,a){"use strict";t["a"]={cycleText:{month_price:"\u6708\u4ed8",quarter_price:"\u5b63\u4ed8",half_year_price:"\u534a\u5e74\u4ed8",year_price:"\u5e74\u4ed8"},orderStatusText:["\u5f85\u652f\u4ed8","\u5f00\u901a\u4e2d","\u5df2\u53d6\u6d88","\u5df2\u5b8c\u6210"],commissionStatusText:["\u786e\u8ba4\u4e2d","\u5df2\u786e\u8ba4","\u5df2\u5b8c\u6210"],ticketStatusText:["\u5f00\u542f","\u5f85\u56de\u590d","\u5f85\u7b54\u590d","\u5173\u95ed"]}}}]);