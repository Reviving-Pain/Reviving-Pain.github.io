webpackJsonp([1],{"5W1q":function(t,e){},"66r/":function(t,e,s){t.exports=s.p+"static/img/loadingBlock.60505bd.gif"},"6iNZ":function(t,e){},"7tvO":function(t,e){},Aaos:function(t,e,s){t.exports=s.p+"static/img/persona.546c662.png"},BjRz:function(t,e){},Cgum:function(t,e){},G0w0:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=new a.a,i={data:function(){return{baseUserInfo:[],mobilSidebarOrder:!0,showAvatarMenu:!1,showMenuMask:!1,isLogin:!1}},methods:{mobilSidebarBtn:function(){n.$emit("show-mobil-sidebar",this.mobilSidebarOrder),!0===this.mobilSidebarOrder?this.mobilSidebarOrder=!1:!1===this.mobilSidebarOrder&&(this.mobilSidebarOrder=!0),n.$emit("displayContentMask",!this.mobilSidebarOrder)},showMenu:function(){this.showAvatarMenu=!this.showAvatarMenu,this.showMenuMask=!0},hidemenu:function(){this.showAvatarMenu=!1,this.showMenuMask=!1},avataMenuMethod:function(t){switch(this.hidemenu(),t.target.id){case"login":console.log("执行登录程序"),n.$emit("openLoginCard",!0);break;case"userCenter":console.log("通过url跳转到个人中心"),this.$router.push({path:"/cnodeCommunity/profile"});break;case"logout":!0===confirm("确认要注销登录吗？")?(console.log("执行注销登陆"),sessionStorage.accesstoken="",sessionStorage.loginUsername="",sessionStorage.loginId="",location.reload(),this.$router.push({path:"/cnodeCommunity/cnodejsTopic"})):console.log("注销登陆操作已取消")}}},created:function(){var t=this;n.$on("resetMobilsideBtn",function(e){t.mobilSidebarOrder=e}),n.$on("userBasicInfo",function(e){t.baseUserInfo=e,t.isLogin=t.baseUserInfo.success})}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenuMask,expression:"showMenuMask"}],staticClass:"avataMenuMask",on:{click:t.hidemenu}}),t._v(" "),a("span",{staticClass:"fa fa-th-list",on:{click:t.mobilSidebarBtn}}),t._v(" "),a("div",{staticClass:"userAvatar",on:{click:t.showMenu}},[t.isLogin?t._e():a("img",{attrs:{src:s("puzX"),title:"点击登录"}}),t._v(" "),t.isLogin?a("img",{attrs:{src:this.baseUserInfo.avatar_url,title:this.baseUserInfo.loginname}}):t._e()]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showAvatarMenu,expression:"showAvatarMenu"}],staticClass:"avatarMenu"},[a("div",{staticClass:"menuHead"}),t._v(" "),a("div",{staticClass:"menuBody"},[a("ul",{on:{click:t.avataMenuMethod}},[t.isLogin?t._e():a("li",{staticClass:"fa fa-user",attrs:{id:"login"}},[t._v(" 登 录")]),t._v(" "),t.isLogin?a("li",{staticClass:"fa fa-home",attrs:{id:"userCenter"}},[t._v(" 个人中心")]):t._e(),t._v(" "),t.isLogin?a("li",{staticClass:"fa fa-sign-out",attrs:{id:"logout"}},[t._v(" 退出登录")]):t._e()])])])])},staticRenderFns:[]};var r=s("VU/8")(i,o,!1,function(t){s("pUzS")},"data-v-4571f987",null).exports,c=[{menu:"重写Cnode社区",path:"/cnodeCommunity",subTabs:[{subMenu:"cnode主页",path:"/cnodejsTopic"},{subMenu:"在cnode发布话题",path:"/createTopic"},{subMenu:"cnode个人中心",path:"/profile"}]},{menu:"Mock数据测试",path:"/animation",subTabs:[{subMenu:"css3动画",path:"/css3Animation"}]},{menu:"数据验证",path:"/dataVerify",subTabs:[{subMenu:"一般输入验证 ",path:"/inputVerify"},{subMenu:"表单验证 ",path:"/formVerify"}]},{menu:"添加与移除标签",path:"/modifyTags",subTabs:[{subMenu:"添加标签",path:"/addTag"},{subMenu:"移除标签",path:"/delTag"}]},{menu:"轮播图",path:"/silder"}],l={data:function(){return{mobilSidebarOrder:!1,pcSidebar:!0,navHeadBtnMsg:null,selectedTabNum:0,tabs:c,selectedSubTabName:"vue-reviving"}},methods:{selectTabItem:function(t,e){this.selectedTabNum!==t&&e.subTabs?this.selectedTabNum=t:this.selectedTabNum===t&&e.subTabs?this.selectedTabNum=0:(this.$router.push({path:e.path}),this.selectedTabNum=t),e.subTabs||(document.title=e.menu)},selectSubtabItem:function(t,e){this.selectedSubTabName=e.subMenu,document.title=e.subMenu},urlVerify:function(t){var e,s="";e="/"+(s=t.path?t.path:t.$route.path).split("/")[1];for(var a=0;a<c.length;a++)if(c[a].path===e)if(0===t.selectedTabNum)if(t.selectedTabNum=a+1,t.tabs[a].path.substr(1)===s.split("/").pop())document.title=t.tabs[a].menu;else for(var n=0;n<t.tabs[a].subTabs.length;n++)t.tabs[a].subTabs[n].path.substr(1)===s.split("/").pop()&&(document.title=t.tabs[a].subTabs[n].subMenu);else this.selectedTabNum=a+1}},mounted:function(){var t=this;n.$on("show-mobil-sidebar",function(e){t.navHeadBtnMsg=e}),n.$on("hide-mobil-sidebar",function(e){t.navHeadBtnMsg=!e,n.$emit("resetMobilsideBtn",e)}),t.$options.methods.urlVerify(t)},watch:{navHeadBtnMsg:function(){this.mobilSidebarOrder=this.navHeadBtnMsg,this.pcSidebar=!this.navHeadBtnMsg},$route:"urlVerify"}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["nav-side-wrp",{"nav-side-pc":t.pcSidebar,"show-mobil-sidebar":t.mobilSidebarOrder,"hide-mobil-sidebar":t.pcSidebar}]},[s("transition-group",{staticClass:"tabs",attrs:{name:"tabs",tag:"ul"}},t._l(t.tabs,function(e,a){return s("li",{key:a,staticClass:"tabs-item",on:{click:function(s){t.selectTabItem(a+1,e)}}},[t._v("\n      "+t._s(e.menu)),e.subTabs?s("i",{class:["fa","fa-chevron-right",{"chevron-right-rotate":a+1===t.selectedTabNum}]}):t._e(),t._v(" "),e.subTabs?s("ul",{directives:[{name:"show",rawName:"v-show",value:a+1===t.selectedTabNum,expression:"index+1 === selectedTabNum"}],staticClass:"subTabs"},t._l(e.subTabs,function(a,n){return s("router-link",{key:n,staticClass:"subTabs-item",attrs:{tag:"li",to:{path:e.path+a.path}},nativeOn:{click:function(s){s.stopPropagation(),t.selectSubtabItem(e,a)}}},[t._v("\n          "+t._s(a.subMenu)+"\n        ")])})):t._e()])}))],1)},staticRenderFns:[]};var d=s("VU/8")(l,u,!1,function(t){s("rGsz")},"data-v-79b01f53",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loadingWrp"},[e("div",{staticClass:"loadingBox"},[e("span",{staticClass:"fa fa-spinner fa-pulse"})])])}]};var v=s("VU/8")(null,p,!1,function(t){s("G0w0")},"data-v-028ff1b3",null).exports,m={components:{loading:v},data:function(){return{hideBarOrder:!0,displayContentMask:!1,isRouterAlive:!0,loading:!0,pageShouldLogin:["createTopic","profile"],loginStatus:!1}},methods:{hideMobilSidebar:function(){n.$emit("hide-mobil-sidebar",this.hideBarOrder),n.$emit("resetMobilsideBtn",this.hideBarOrder),this.displayContentMask=!1},reload:function(){var t=this;this.isRouterAlive=!1,this.$nextTick(function(){t.isRouterAlive=!0})},manageView:function(){if(!this.loginStatus){var t=this.$route.path.split("/").pop();this.pageShouldLogin.indexOf(t)+1?(this.loading=!0,alert("您尚未登录，请先登录"),n.$emit("openLoginCard",!0)):this.loading=!1}}},watch:{$route:function(){this.manageView()}},mounted:function(){var t=this;n.$on("displayContentMask",function(e){t.displayContentMask=e}),n.$on("loginStatus",function(e){t.loginStatus=e,t.loading=!t.loginStatus,t.manageView()}),"cnodejsTopic"===this.$route.path.split("/").pop()&&(this.loading=!1)}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-wrap"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.displayContentMask,expression:"displayContentMask"}],staticClass:"content-mask",on:{click:t.hideMobilSidebar}},[t._v("我是content遮罩层")]),t._v(" "),s("router-view",{attrs:{name:"defaultContent"}}),t._v(" "),s("keep-alive",[s("router-view",{attrs:{name:"cnodejsTopic"}})],1),t._v(" "),s("router-view",{attrs:{name:"user"}}),t._v(" "),t.isRouterAlive?s("router-view",{attrs:{name:"article",loginStatus:t.loginStatus}}):t._e(),t._v(" "),t.loginStatus?s("div",[t.isRouterAlive?s("router-view",{attrs:{name:"createTopic"}}):t._e(),t._v(" "),s("router-view",{attrs:{name:"cnodeProfile"}})],1):t._e(),t._v(" "),s("router-view",{attrs:{name:"css3Animation"}}),t._v(" "),s("router-view",{attrs:{name:"notFoundComponent"}}),t._v(" "),s("loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},staticRenderFns:[]};var f=s("VU/8")(m,h,!1,function(t){s("gJ/f")},"data-v-298b2e20",null).exports,g=s("mtWM"),_=s.n(g);_.a.defaults.headers={"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},_.a.defaults.transformRequest=[function(t){var e="";for(var s in t)e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s])+"&";return e}],_.a.defaults.baseURL="https://cnodejs.org/api/v1";var b=function(t,e,s,a,n,i){_()({url:t,method:e,params:s,data:a}).then(n).catch(i)},C=function(t,e,s){b("/accesstoken","post",{},t,e,s)},T=function(t,e,s){b("user/"+t,"get",{},{},e,s)},k=function(t,e,s){b("/topic_collect/"+t,"get",{},{},e,s)},w=function(t,e,s,a){b("/reply/"+t+"/ups","post",{},e,s,a)},S=function(t,e,s){b("/topic_collect/collect","post",{},t,e,s)},y=function(t,e,s){b("/topic_collect/de_collect","post",{},t,e,s)},$=function(t,e,s,a){b("/topic/"+t+"/replies","post",{},e,s,a)},B=function(t,e,s){b("topics","post",{},t,e,s)},M=function(t,e,s){b("topic/"+t,"get",{},{},e,s)},I=function(t,e,s){b("/topics","get",t,{},e,s)},A={data:function(){return{showLoginCard:!1,loginTabActive:!0,registerTabActive:!1,accesstoken:""}},methods:{loginTab:function(){this.registerTabActive=!1,this.loginTabActive=!0},loginTips:function(){alert("1.搜索引擎搜索CNode社区\n2.使用自己的github账号登入该社区\n3.打开右上角设置\n4.在页面最下方找到自己的token")},registerTab:function(){this.loginTabActive=!1,this.registerTabActive=!0},closeLoginCard:function(){this.showLoginCard=!1},verifyIdentifyInfo:function(){var t=this;""===this.accesstoken?alert("请先填入认证码"):C({accesstoken:this.accesstoken},function(e){sessionStorage.accesstoken=t.accesstoken,t.showLoginCard=!1,alert("认证成功，欢迎"+e.data.loginname),location.reload()},function(t){console.log("返回信息为："+t.response.data.error_msg),alert("认证失败")})}},mounted:function(){var t=this;sessionStorage.accesstoken||(this.showLoginCard=!0),n.$on("openLoginCard",function(e){t.showLoginCard=e})}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoginCard,expression:"showLoginCard"}],staticClass:"loginWrp"},[s("div",{staticClass:"loginCardMask",on:{click:t.closeLoginCard}}),t._v(" "),s("div",{staticClass:"loginCard"},[s("div",{staticClass:"close",on:{click:t.closeLoginCard}},[t._v("×")]),t._v(" "),s("div",{staticClass:"loginCardTitle"},[s("div",{class:["titleCell",{titleCellActive:t.loginTabActive}],on:{click:t.loginTab}},[t._v("登录")]),t._v(" "),s("b",{staticClass:"titlePoint"},[t._v("·")]),t._v(" "),s("div",{class:["titleCell",{titleCellActive:t.registerTabActive}],on:{click:t.registerTab}},[t._v("注册")])]),t._v(" "),s("div",{staticClass:"loginCardBody"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.loginTabActive,expression:"loginTabActive"}]},[t._v("\n        请输入认证码"),s("br"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.accesstoken,expression:"accesstoken",modifiers:{trim:!0}}],staticClass:"identityInfo",attrs:{placeholder:"cnode社区token",type:"password"},domProps:{value:t.accesstoken},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.verifyIdentifyInfo(e):null},input:function(e){e.target.composing||(t.accesstoken=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("div",{staticClass:"loginTips",on:{click:t.loginTips}},[t._v("如何获取token？")]),t._v(" "),s("button",{staticClass:"submitIdentifyInfo",on:{click:t.verifyIdentifyInfo}},[t._v("检测认证信息")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.registerTabActive,expression:"registerTabActive"}]},[s("span",[t._v("使用第三方CNode社区服务")]),s("br"),s("br"),t._v(" "),s("span",[t._v("点击下方链接注册，需要github账号")]),s("br"),s("br"),t._v(" "),s("a",{attrs:{href:"https://cnodejs.org/",target:"_blank"}},[t._v("https://cnodejs.org/")])])])])])},staticRenderFns:[]};var U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("span")])}]};var N={components:{"nav-head":r,"nav-side":d,"content-wrap":f,"cnode-login":s("VU/8")(A,x,!1,function(t){s("6iNZ")},"data-v-a134800e",null).exports,"footer-wrap":s("VU/8")({data:function(){return{}}},U,!1,function(t){s("Slpm")},"data-v-5704b841",null).exports,loading:v},data:function(){return{defaultHeight:document.documentElement.clientHeight,currentHeight:document.documentElement.clientHeight,showFooter:!0,loading:!1,loginStatus:!1}},methods:{resizeMethod:function(){navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)&&(this.currentHeight=document.body.clientHeight,this.defaultHeight-this.currentHeight>100?this.showFooter=!1:this.showFooter=!0)}},created:function(){var t=this;sessionStorage.accesstoken?(this.loading=!0,C({accesstoken:sessionStorage.accesstoken},function(e){sessionStorage.loginUsername=e.data.loginname,sessionStorage.loginId=e.data.id,t.loading=!1,t.loginStatus=e.data.success,n.$emit("userBasicInfo",e.data),n.$emit("loginStatus",t.loginStatus)},function(e){console.log(e.response),sessionStorage.accesstoken="",sessionStorage.loginUsername="",sessionStorage.loginId="",t.loginStatus=!1,console.log("token不正确，可能需要更新token"),n.$emit("loginStatus",t.loginStatus)})):console.log("尚未登录，请先登录")},mounted:function(){window.addEventListener("resize",this.resizeMethod,!0)}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.loading?a("loading",{staticClass:"loading"}):t._e(),t._v(" "),a("div",{staticClass:"header"},[a("nav-head")],1),t._v(" "),a("div",{staticClass:"wrapper"},[a("nav-side"),t._v(" "),a("content-wrap")],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showFooter,expression:"showFooter"}],staticClass:"footer-wrap"},[a("footer-wrap")],1),t._v(" "),a("cnode-login"),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:t.showFooter,expression:"showFooter"}],attrs:{href:"https://github.com/Reviving-Pain/reviving-pain.github.io",target:"_blank"}},[a("img",{staticClass:"fork-on-github",attrs:{src:s("z/90"),alt:"Fork me on GitHub"}})])],1)},staticRenderFns:[]};var E=s("VU/8")(N,R,!1,function(t){s("VxQB")},null,null).exports,L=s("/ocq"),W=sessionStorage.scrollPosition;window.onbeforeunload=function(){};var V={components:{loading:v},name:"MainSection",data:function(){return{content:[],tabs:[{type:"all",name:"全部"},{type:"good",name:"精华"},{type:"share",name:"分享"},{type:"ask",name:"问答"},{type:"job",name:"招聘"},{type:"dev",name:"测试"}],currentTab:"all",limit:10,loading:!1,loadingBlock:!1,backToTopBtn:!1,showTabbar:!0,scrollTopBefore:0}},methods:{scrollMethod:function(){var t=this.$refs.cnodeTopics.offsetHeight,e=this.$refs.cnodeTopics.scrollTop,s=this.$refs.cnodeTopics.scrollHeight;sessionStorage.scrollPosition=this.$refs.cnodeTopics.scrollTop,sessionStorage.refreshApplyCount=this.limit,this.scrollTopBefore<e?this.showTabbar=!0:this.showTabbar=0===e,this.scrollTopBefore=e,t+e>=s&&0!==t&&(this.loadingBlock=!0,this.getData(this.currentTab)),this.backToTopBtn=e>1e3},getData:function(t){var e=this;this.limit+=3,I({page:1,limit:this.limit,mdrender:"false",tab:t},function(t){e.content=t.data.data,e.loading=!1,e.loadingBlock=!1},function(t){console.log(t.response.data.success)})},backToTop:function(){this.$refs.cnodeTopics.scrollTop=0},selectTab:function(t){this.currentTab!==t.target.id?(this.$refs.cnodeTopics.scrollTop=0,this.loading=!0,this.limit=10,this.currentTab=t.target.id,sessionStorage.currentTab=this.currentTab,this.getData(this.currentTab)):console.log("为什么要反复点呢？")}},created:function(){this.loading=!0,sessionStorage.currentTab?this.currentTab=sessionStorage.currentTab:sessionStorage.currentTab=this.currentTab,this.getData(this.currentTab)},mounted:function(){window.addEventListener("scroll",this.scrollMethod,!0)},beforeRouteLeave:function(t,e,s){W=this.$refs.cnodeTopics.scrollTop,s()},beforeRouteEnter:function(t,e,s){s(function(t){t.$refs.cnodeTopics.scrollTop=W})}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("loading"):t._e(),t._v(" "),a("div",{ref:"cnodeTopics",staticClass:"cnodeTopicsWrp"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showTabbar,expression:"showTabbar"}],staticClass:"topicTabWrp"},[a("div",{staticClass:"tabBar",on:{click:t.selectTab}},t._l(t.tabs,function(e,s){return a("span",{key:s,class:{tabBarActive:e.type===t.currentTab},attrs:{id:e.type}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.backToTopBtn,expression:"backToTopBtn"}],staticClass:"backToTopBtn",on:{click:t.backToTop}},[t._v("回到顶部")]),t._v(" "),a("div",{staticClass:"cnodeTopicsContent"},[t._l(t.content,function(e){return a("div",{key:e.id,staticClass:"topicItem"},[a("router-link",{attrs:{to:{name:"UserRoute",params:{name:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url,title:e.author.loginname}})]),t._v(" "),a("div",{staticClass:"articleTextInfo"},[a("router-link",{attrs:{to:{name:"ArticleRoute",params:{id:e.id}}}},[e.top?a("div",{staticClass:"topTag"},[t._v("置顶")]):t._e(),t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),a("div",{staticClass:"articleSubInfo"},[a("span",[t._v("回复："+t._s(e.reply_count))]),t._v(" "),a("span",[t._v("创建于："+t._s(String(e.create_at).slice(0,10)))]),t._v(" "),a("span")])],1)],1)}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingBlock,expression:"loadingBlock"}],staticClass:"loadingBlock"},[a("img",{attrs:{src:s("66r/")}})])],2)])],1)},staticRenderFns:[]};var F=s("VU/8")(V,H,!1,function(t){s("Cgum")},"data-v-3b42effe",null).exports,O={components:{loading:v},data:function(){return{userInfo:{create_at:""},userCollect:{},loading:!0}},created:function(){var t=this,e=this.$route.path.split("/")[3];T(e,function(e){t.userInfo=e.data.data,t.loading=!1},function(t){console.log("请求个人信息出错了，错误信息是："+t)}),k(e,function(e){t.userCollect=e.data.data},function(t){console.log("无法获取用户收藏，错误信息是："+t)})}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userBackground"},[t.loading?s("loading"):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"userProfile"},[s("div",{staticClass:"basicProfile commonBlockWrp"},[s("img",{attrs:{src:t.userInfo.avatar_url,title:t.userInfo.loginname}}),t._v(" "),s("div",{staticClass:"basicProfileText"},[s("span",{staticClass:"fa fa-user"},[t._v(" 用户名："+t._s(t.userInfo.loginname))]),s("br"),t._v(" "),s("span",{staticClass:"fa fa-gg-circle"}),t._v(" "),s("span",[t._v("积分："+t._s(t.userInfo.score))]),s("br"),t._v(" "),s("span",{staticClass:"fa fa-github"}),t._v(" "),s("span",[t._v("GitHub：")]),t._v(" "),s("a",{attrs:{href:"https://github.com/"+t.userInfo.githubUsername,target:"_blank",title:"点击进入ta的github"}},[t._v(t._s(t.userInfo.githubUsername))]),s("br"),t._v(" "),s("span",{staticClass:"fa fa-clock-o"}),t._v(" "),s("span",[t._v("注册时间："+t._s(t.userInfo.create_at.slice(0,10)+" "+t.userInfo.create_at.slice(11,20)))])])]),t._v(" "),s("div",{staticClass:"relatedTopics commonBlockWrp"},[s("h2",[t._v("最近发布的话题")]),t._v(" "),t._l(t.userInfo.recent_topics,function(e,a){return s("div",{key:a,staticClass:"topicItem"},[s("img",{attrs:{src:e.author.avatar_url,title:e.author.loginname}}),t._v(" "),s("router-link",{attrs:{to:{name:"ArticleRoute",params:{id:e.id}}}},[s("span",[t._v(t._s(e.title))])])],1)})],2),t._v(" "),s("div",{staticClass:"relatedTopics commonBlockWrp"},[s("h2",[t._v("最近参与的话题")]),t._v(" "),t._l(t.userInfo.recent_replies,function(e,a){return s("div",{key:a,staticClass:"topicItem"},[s("img",{attrs:{src:e.author.avatar_url,title:e.author.loginname}}),t._v(" "),s("router-link",{attrs:{to:{name:"ArticleRoute",params:{id:e.id}}}},[s("span",[t._v(t._s(e.title))])])],1)})],2),t._v(" "),s("div",{staticClass:"relatedTopics commonBlockWrp"},[s("h2",[t._v("收藏的话题")]),t._v(" "),t._l(t.userCollect,function(e,a){return s("div",{key:a,staticClass:"topicItem"},[s("img",{attrs:{src:e.author.avatar_url}}),t._v(" "),s("router-link",{attrs:{to:{name:"ArticleRoute",params:{id:e.id}}}},[s("span",[t._v(t._s(e.title))])])],1)})],2)])],1)},staticRenderFns:[]};var P=s("VU/8")(O,D,!1,function(t){s("ZORX")},"data-v-499107d7",null).exports,j={props:["loginStatus"],components:{loading:v},data:function(){return{article:{title:"",author:{loginname:"temp"},visit_count:"",tab:"",content:"",create_at:"",replies:""},tab:{share:"分享",good:"精华",ask:"问答",job:"招聘",dev:"客户端测试"},collect:"收藏",collectBtnActive:!1,commentContent:"",loginName:"",loginId:"",loading:!0}},methods:{likeController:function(t){var e=this,s=this.article.replies[t].id;this.loginStatus?sessionStorage.loginUsername===this.article.replies[t].author.loginname?alert("呵呵，不能给自己点赞"):w(s,{accesstoken:sessionStorage.accesstoken},function(s){"up"===s.data.action?e.article.replies[t].ups.push(sessionStorage.loginId):e.article.replies[t].ups.pop()},function(t){console.log(t.response.data.error_msg)}):alert("需要登录")},collectController:function(){var t=this,e=this.$route.path.split("/")[3];sessionStorage.loginUsername?this.collectBtnActive?y({accesstoken:sessionStorage.accesstoken,topic_id:e},function(e){console.log(e.data),t.collect="收藏",t.collectBtnActive=!1},function(t){console.log(t.response.data.error_msg)}):S({accesstoken:sessionStorage.accesstoken,topic_id:e},function(e){console.log(e.data),t.collect="取消收藏",t.collectBtnActive=!0},function(t){console.log(t.response.data.error_msg)}):(alert("要添加收藏请先登录"),this.openLoginWindow())},publishComment:function(t){var e=this;if("Enter"===t.code&&!0===t.ctrlKey||!t.code)if(""===this.commentContent)alert("评论不能为空！");else{var s=this.$route.path.split("/").pop();$(s,{accesstoken:sessionStorage.accesstoken,content:this.commentContent},function(t){alert("评论发布成功"),console.log(t.data),e.$parent.reload()},function(t){console.log(t.response.data.error_msg)})}},openEditWindow:function(){alert("准备打开编辑弹窗")},openLoginWindow:function(){n.$emit("openLoginCard",!0)}},watch:{loginStatus:function(){this.loginStatus&&(console.log("已在登录状态，重新获取文章状态"),this.$parent.reload())}},created:function(){var t=this,e=this.$route.path.split("/")[3];M(e,function(e){t.article=e.data.data,t.loading=!1},function(t){console.log("文章被删除了,错误信息是："+t)}),this.loginName=sessionStorage.loginUsername,this.loginStatus?(this.loginId=sessionStorage.loginId,k(this.loginName,function(s){for(var a=0;a<s.data.data.length;a++){s.data.data[a].id===e&&(t.collect="取消收藏",t.collectBtnActive=!0)}},function(t){console.log(t.response)})):console.log("尚未登录，无法发表评论，无法获取文章收藏与点赞状态，也无法判断是否可编辑")}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"articleBackground"},[t.loading?s("loading"):t._e(),t._v(" "),s("div",{staticClass:"articleWrp"},[s("div",{staticClass:"articleHead commonBlockWrp"},[s("h3",[t._v(t._s(t.article.title))]),t._v(" "),t.article.author.loginname===t.loginName&&t.loginStatus?s("div",{staticClass:"editBtn",attrs:{title:"点击编辑"},on:{click:t.openEditWindow}},[s("span",{staticClass:"fa fa-edit"})]):t._e(),t._v(" "),s("div",{class:["collectBtn",{collectBtnActive:t.collectBtnActive}],attrs:{title:t.collect},on:{click:t.collectController}},[t._v("\n        "+t._s(t.collect)+"\n      ")]),t._v(" "),s("router-link",{attrs:{to:{name:"UserRoute",params:{name:t.article.author.loginname}}}},[s("img",{staticClass:"authorAvatar",attrs:{src:t.article.author.avatar_url,title:t.article.author.loginname}}),t._v(" "),s("span",{staticClass:"authorName"},[t._v(t._s(t.article.author.loginname))])]),s("br",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]}),t._v(" "),s("span",[t._v("发布于："+t._s(t.article.create_at.slice(0,10)))]),s("br"),t._v(" "),s("span",{staticClass:"fa fa-eye"},[t._v(" "+t._s(t.article.visit_count))]),t._v(" "),s("span",{staticClass:"fa fa-tags"},[t._v(" "+t._s(t.article.tab))]),t._v(" "),s("span",{staticClass:"fa fa-commenting"},[t._v(" "+t._s(t.article.reply_count))])],1),t._v(" "),s("div",{staticClass:"articleContent commonBlockWrp",domProps:{innerHTML:t._s(t.article.content)}}),t._v(" "),s("div",{staticClass:"articleComments commonBlockWrp"},[s("div",{staticClass:"publishCommnetWrp"},[t.loginStatus?t._e():s("div",{staticClass:"unLogin"},[s("span",{staticClass:"tipText"},[t._v("发表评论需先")]),t._v(" "),s("div",{staticClass:"commentBtn",attrs:{title:"点此登录"},on:{click:t.openLoginWindow}},[t._v("登录")])]),t._v(" "),t.loginStatus?s("div",[s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.commentContent,expression:"commentContent",modifiers:{trim:!0}}],staticClass:"commentArea",attrs:{placeholder:"写下你的评论…(请不要在非测试话题里发表测试评论，后果自负)"},domProps:{value:t.commentContent},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.publishComment(e):null},input:function(e){e.target.composing||(t.commentContent=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("span",{staticClass:"tipText"},[t._v("Ctr+Enter 发表")]),t._v(" "),s("div",{staticClass:"commentBtn",attrs:{title:"点此发送"},on:{click:t.publishComment}},[t._v("发表评论")])]):t._e()]),t._v(" "),s("h2",[t._v(t._s(t.article.reply_count)+" 条评论")]),t._v(" "),t._l(t.article.replies,function(e,a){return s("div",{key:a,staticClass:"commentCell"},[s("router-link",{staticClass:"commentAvatar",attrs:{to:{name:"UserRoute",params:{name:e.author.loginname}}}},[s("img",{attrs:{src:e.author.avatar_url}})]),t._v(" "),s("div",{staticClass:"commentContent"},[s("router-link",{attrs:{to:{name:"UserRoute",params:{name:e.author.loginname}}}},[s("span",{staticClass:"commentUsername"},[t._v(t._s(e.author.loginname))])]),t._v(" "),s("p",{staticClass:"userComment",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),s("span",{staticClass:"commentDate"},[t._v(t._s(e.create_at.slice(0,10)+" "+e.create_at.slice(11,20)))]),t._v(" "),s("span",{class:["fa","fa-thumbs-o-up","like",{likeActive:e.ups.indexOf(t.loginId)+1,"fa-thumbs-up":e.ups.indexOf(t.loginId)+1}],on:{click:function(e){t.likeController(a)}}},[t._v("\n            "+t._s(e.ups.length)+"\n          ")])],1)],1)})],2)])],1)},staticRenderFns:[]};var G=s("VU/8")(j,z,!1,function(t){s("oAUH")},"data-v-0cbcba29",null).exports,X={components:{loading:v},data:function(){return{loading:!1,publishData:{topicTab:"default_select",topicTitle:"",topicContent:""}}},methods:{publishTopic:function(){var t=this;"default_select"!==this.publishData.topicTab?this.publishData.topicTitle?new RegExp("^.{10,50}$").test(this.publishData.topicTitle)?(console.log("正则验证通过"),this.publishData.topicContent?(this.loading=!0,B({accesstoken:sessionStorage.accesstoken,title:this.publishData.topicTitle,tab:this.publishData.topicTab,content:this.publishData.topicContent},function(e){t.loading=!1,confirm("发布成功，需要查看刚发布的文章吗？")?t.$router.push({path:"/cnodeCommunity/cnodejsTopic/"+e.data.topic_id}):t.$parent.reload()},function(t){alert(t.response.data.error_msg)})):alert("内容不能为空")):alert("标题太短或太长"):alert("标题不能为空"):alert("请选择分类")}}},Z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"publishBackground"},[t.loading?s("loading"):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"publishWrp"},[s("div",{staticClass:"selectHead"},[s("span",[t._v("选择板块：")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.publishData.topicTab,expression:"publishData.topicTab"}],attrs:{name:"topicTab"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.publishData,"topicTab",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"default_select"}},[t._v("请选择")]),t._v(" "),s("option",{attrs:{value:"share"}},[t._v("分享")]),t._v(" "),s("option",{attrs:{value:"ask"}},[t._v("问答")]),t._v(" "),s("option",{attrs:{value:"job"}},[t._v("招聘")]),t._v(" "),s("option",{attrs:{value:"dev"}},[t._v("客户端测试")])])]),t._v(" "),s("div",{staticClass:"topicTitle"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.publishData.topicTitle,expression:"publishData.topicTitle",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"标题字数10字以上"},domProps:{value:t.publishData.topicTitle},on:{input:function(e){e.target.composing||t.$set(t.publishData,"topicTitle",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"topicContent"},[s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.publishData.topicContent,expression:"publishData.topicContent",modifiers:{trim:!0}}],attrs:{cols:"30",rows:"10",placeholder:"测试帖请选择“客户端测试”板块！"},domProps:{value:t.publishData.topicContent},on:{input:function(e){e.target.composing||t.$set(t.publishData,"topicContent",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"publishBtn",on:{click:t.publishTopic}},[t._v("提交")])])],1)},staticRenderFns:[]};var q=s("VU/8")(X,Z,!1,function(t){s("WTX0")},"data-v-3bc9910e",null).exports,J={components:{loading:v},data:function(){return{userInfo:{create_at:""},userCollect:{},loading:!0}},created:function(){var t=this,e=sessionStorage.loginUsername;T(e,function(e){t.userInfo=e.data.data,t.loading=!1},function(t){console.log("请求个人信息出错了，错误信息是："+t)}),k(e,function(e){t.userCollect=e.data.data},function(t){console.log("无法获取用户收藏，错误信息是："+t)})}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userBackground"},[t.loading?s("loading"):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"userProfile"},[s("div",{staticClass:"basicProfile commonBlockWrp"},[s("img",{attrs:{src:t.userInfo.avatar_url,title:t.userInfo.loginname}}),t._v(" "),s("div",{staticClass:"basicProfileText"},[s("span",{staticClass:"fa fa-user"},[t._v(" 用户名："+t._s(t.userInfo.loginname))]),s("br"),t._v(" "),s("span",{staticClass:"fa fa-gg-circle"}),t._v(" "),s("span",[t._v("积分："+t._s(t.userInfo.score))]),s("br"),t._v(" "),s("span",{staticClass:"fa fa-github"}),t._v(" "),s("span",[t._v("GitHub：")]),t._v(" "),s("a",{attrs:{href:"https://github.com/"+t.userInfo.githubUsername,target:"_blank",title:"进入我的github"}},[t._v(t._s(t.userInfo.githubUsername))]),s("br"),t._v(" "),s("span",{staticClass:"fa fa-clock-o"}),t._v(" "),s("span",[t._v("注册时间："+t._s(t.userInfo.create_at.slice(0,10)+" "+t.userInfo.create_at.slice(11,20)))])])]),t._v(" "),s("div",{staticClass:"relatedTopics commonBlockWrp"},[s("h2",[t._v("最近发布的话题")]),t._v(" "),t._l(t.userInfo.recent_topics,function(e,a){return s("div",{key:a,staticClass:"topicItem"},[s("img",{attrs:{src:e.author.avatar_url,title:e.author.loginname}}),t._v(" "),s("router-link",{attrs:{to:{name:"ArticleRoute",params:{id:e.id}}}},[s("span",[t._v(t._s(e.title))])])],1)})],2),t._v(" "),s("div",{staticClass:"relatedTopics commonBlockWrp"},[s("h2",[t._v("最近参与的话题")]),t._v(" "),t._l(t.userInfo.recent_replies,function(e,a){return s("div",{key:a,staticClass:"topicItem"},[s("img",{attrs:{src:e.author.avatar_url,title:e.author.loginname}}),t._v(" "),s("router-link",{attrs:{to:{name:"ArticleRoute",params:{id:e.id}}}},[s("span",[t._v(t._s(e.title))])])],1)})],2),t._v(" "),s("div",{staticClass:"relatedTopics commonBlockWrp"},[s("h2",[t._v("收藏的话题")]),t._v(" "),t._l(t.userCollect,function(e,a){return s("div",{key:a,staticClass:"topicItem"},[s("img",{attrs:{src:e.author.avatar_url}}),t._v(" "),s("router-link",{attrs:{to:{name:"ArticleRoute",params:{id:e.id}}}},[s("span",[t._v(t._s(e.title))])])],1)})],2)])],1)},staticRenderFns:[]};var K=s("VU/8")(J,Q,!1,function(t){s("V/gB")},"data-v-47b9ebb4",null).exports,Y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"father"},[e("span",[this._v("CSS3动画")]),this._v(" "),e("img",{staticClass:"persona",attrs:{src:s("Aaos"),alt:"女神异闻录"}})])}]};var tt=s("VU/8")(null,Y,!1,function(t){s("VZ+w")},"data-v-a8c7b7b0",null).exports,et={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"defautlContentWrp"},[e("span",{staticClass:"temptext"},[this._v("H")])])}]};var st=s("VU/8")({},et,!1,function(t){s("7tvO")},"data-v-626687fe",null).exports,at={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("页面走丢了")])])}]};var nt=s("VU/8")({data:function(){return{}},methods:{},created:function(){"user"===this.$route.path.split("/")[1]&&this.$router.push({path:"/cnodeCommunity"+this.$route.path})}},at,!1,function(t){s("BjRz")},"data-v-0a4a3edf",null).exports;a.a.use(L.a);var it=new L.a({routes:[{path:"/",components:{defaultContent:st}},{path:"*",components:{notFoundComponent:nt}},{path:"/cnodeCommunity/cnodejsTopic",components:{cnodejsTopic:F}},{path:"/cnodeCommunity/user/:name",name:"UserRoute",components:{user:P}},{path:"/cnodeCommunity/cnodejsTopic/:id",name:"ArticleRoute",components:{article:G}},{path:"/cnodeCommunity/createTopic",components:{createTopic:q}},{path:"/cnodeCommunity/profile",components:{cnodeProfile:K}},{path:"/animation/css3Animation",components:{css3Animation:tt}}]});s("5W1q");a.a.config.productionTip=!1,new a.a({el:"#app",router:it,components:{App:E},template:"<App></App>"})},Slpm:function(t,e){},"V/gB":function(t,e){},"VZ+w":function(t,e){},VxQB:function(t,e){},WTX0:function(t,e){},ZORX:function(t,e){},"gJ/f":function(t,e){},oAUH:function(t,e){},pUzS:function(t,e){},puzX:function(t,e,s){t.exports=s.p+"static/img/default_avatar.9a94ce6.png"},rGsz:function(t,e){},"z/90":function(t,e,s){t.exports=s.p+"static/img/fork_on_github.717d76b.png"}},["NHnr"]);
//# sourceMappingURL=app.f173e732385f317f26f8.js.map