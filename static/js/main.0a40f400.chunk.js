(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,a){e.exports={footer:"Footer_footer__vMYuC",counter:"Footer_counter__1J5z6",button:"Footer_button__3Lwwo",filter__button:"Footer_filter__button__3Onig",delete__button:"Footer_delete__button__3PsQ2"}},14:function(e,t,a){e.exports={wrap:"Contacts_wrap__1MHea",title:"Contacts_title__2abH_",letter:"Contacts_letter__3FU8L",nav:"Contacts_nav__MuAaz",link:"Contacts_link__39MAr",link__text:"Contacts_link__text__Z3uMm",icon:"Contacts_icon__2IcUX",email__icon:"Contacts_email__icon__1J6v9"}},22:function(e,t,a){e.exports={wrap:"App_wrap__1dW_1",menu:"App_menu__1W4nW",menu__item:"App_menu__item__3svG3",logo:"App_logo__3Q7gD",letter:"App_letter__1fe2e",container:"App_container__2lHNk"}},3:function(e,t,a){e.exports={wrap:"About_wrap__12o-2",loading:"About_loading__Njk2Q",title:"About_title__JA833",letter:"About_letter__r5W44",error__text:"About_error__text__NC0AN",user:"About_user__2aq7z",login:"About_login__dYjPt",name:"About_name__32yHs",repo__title:"About_repo__title__czS0B",bio:"About_bio__2AIWd",avatar:"About_avatar__3oWus",user__link:"About_user__link__96bz9",repo:"About_repo__1C9X9",repo__message:"About_repo__message__38oR6",list:"About_list__2txOq",repo__item:"About_repo__item__3rtp2",repo__info:"About_repo__info__2Xr5s",language:"About_language__2gHYZ",icon:"About_icon__3KHlp",repolanguage_null:"About_repolanguage_null__3ogBv",repolanguage_html:"About_repolanguage_html__UZaJU",repolanguage_css:"About_repolanguage_css__1gYUv",repolanguage_javascript:"About_repolanguage_javascript__2OBaH",repolangage_typescript:"About_repolangage_typescript__35uSw",repo__link:"About_repo__link__1aUph",stargazers:"About_stargazers__F4dFf",forks:"About_forks__1CCLf",star:"About_star__2ky0o",forks_icon:"About_forks_icon__14lao",updated:"About_updated__2eIlE",button__container:"About_button__container__2RIe7",button:"About_button__ibAlY"}},30:function(e,t,a){e.exports={wrap:"InputItem_wrap__3jOCr",input:"InputItem_input__2z07O",input__error:"InputItem_input__error__12oqf",label:"InputItem_label__2hJNZ",label__error:"InputItem_label__error__2WQAW",bar:"InputItem_bar__3YWQd",button:"InputItem_button__2n5bM",button__text:"InputItem_button__text__33R_3"}},33:function(e,t,a){e.exports={item:"Item_item__1HwsH",done:"Item_done__1A0-L",task:"Item_task__3LyIB",root:"Item_root__1of2S",checked:"Item_checked__2VjG6",label:"Item_label__1_iNd"}},39:function(e,t,a){e.exports={wrap:"Todo_wrap__2uK8C",title:"Todo_title__1rsLz",letter:"Todo_letter__lIc3e"}},59:function(e,t,a){e.exports={list:"ItemList_list__2Vn9x"}},88:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(34),c=a.n(r),o=a(45),i=a(6),l=a(64),_=a(58),u=a(16),b=a(5),j=a(7),d=a(19),p=a(8),m=a(9),h=a(27),O=a.n(h),x=a(30),f=a.n(x),g=a(1),N=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={inputValue:"",isError:0,errorText:""},e.onButtonClick=function(){e.setState({inputValue:""});""===e.state.inputValue?e.setState({isError:1,errorText:"Please, enter your task."}):e.props.items.some((function(t){return t.value===e.state.inputValue}))?e.setState({isError:1,errorText:"Task already exists. Please, change it."}):(e.setState({inputValue:"",isError:0,errorText:""}),e.props.onClickAdd(e.state.inputValue))},e}return Object(d.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props;a.items,a.onClickAdd;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:f.a.wrap,children:[Object(g.jsx)("input",{type:"text",value:this.state.inputValue,err:this.state.isError,message:this.state.errorText,onChange:function(e){return t.setState({inputValue:e.target.value,isError:0,errorText:""})},className:O()((e={},Object(b.a)(e,f.a.input__error,1===this.state.isError),Object(b.a)(e,f.a.input,0===this.state.isError),e))}),Object(g.jsx)("span",{className:f.a.bar}),this.state.isError?Object(g.jsx)("label",{className:f.a.label__error,children:this.state.errorText}):Object(g.jsx)("label",{className:f.a.label,children:"What needs to be done?"})]}),Object(g.jsx)("button",{className:f.a.button,onClick:this.onButtonClick,children:Object(g.jsx)("span",{className:f.a.button__text,children:"Add task"})})]})}}]),a}(n.a.Component),v=a(106),k=a(107),A=a(54),C=a.n(A),I=a(33),w=a.n(I),y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.value,s=t.isDone,n=t.id,r=t.onClickDone,c=t.onClickDelete;return Object(g.jsxs)("span",{className:O()((e={},Object(b.a)(e,w.a.item,!0),Object(b.a)(e,w.a.done,s),e)),children:[Object(g.jsxs)("span",{className:w.a.task,children:[Object(g.jsx)(v.a,{checked:s,color:"default",className:O()(w.a.root,w.a.checked),onClick:function(){return r(n)}}),a]}),Object(g.jsx)(k.a,{"aria-label":"delete",onClick:function(){return c(n)},children:Object(g.jsx)(C.a,{fontSize:"small",className:w.a.label})})]})}}]),a}(n.a.Component);y.defaultProps={isDone:!1};var S=y,D=a(59),E=a.n(D),L=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.items,a=(e.id,e.onClickDone),s=e.onClickDelete;return Object(g.jsx)("ul",{className:E.a.list,children:t.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(S,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:a,onClickDelete:s})},e.id)}))})}}]),a}(n.a.Component),R=a(13),T=a.n(R),U=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e,t,a,s=this.props,n=s.count,r=s.filter,c=s.onClickFilter,o=s.onClickDeleteAll;return Object(g.jsxs)("div",{className:T.a.footer,children:[Object(g.jsxs)("span",{className:T.a.counter,children:[n," ITEMS LEFT"]}),Object(g.jsxs)("div",{className:T.a.filter,children:[Object(g.jsx)("button",{className:O()((e={},Object(b.a)(e,T.a.selected,"all"===r),Object(b.a)(e,T.a.button,!0),Object(b.a)(e,T.a.filter__button,!0),e)),onClick:function(){return c("all")},children:"All"}),Object(g.jsx)("button",{className:O()((t={},Object(b.a)(t,T.a.selected,"active"===r),Object(b.a)(t,T.a.button,!0),Object(b.a)(t,T.a.filter__button,!0),t)),onClick:function(){return c("active")},children:"Active"}),Object(g.jsx)("button",{className:O()((a={},Object(b.a)(a,T.a.selected,"finished"===r),Object(b.a)(a,T.a.button,!0),Object(b.a)(a,T.a.filter__button,!0),a)),onClick:function(){return c("finished")},children:"Completed"})]}),Object(g.jsx)("button",{className:O()(T.a.button,T.a.delete__button),onClick:function(){return o()},children:"Delete All"})]})}}]),a}(n.a.Component);U.defaultProps={count:0};var z=U,F=a(39),W=a.n(F),B=function(){var e={items:JSON.parse(localStorage.getItem("items"))||[],count:0,filter:"all",filteredItems:[]},t=Object(s.useState)(e.items),a=Object(u.a)(t,2),n=a[0],r=a[1],c=Object(s.useState)(e.count),o=Object(u.a)(c,2),i=o[0],b=o[1],j=Object(s.useState)(e.filteredItems),d=Object(u.a)(j,2),p=d[0],m=d[1],h=Object(s.useState)(e.filter),O=Object(u.a)(h,2),x=O[0],f=O[1];Object(s.useEffect)((function(){localStorage.setItem("items",JSON.stringify(n))})),Object(s.useEffect)((function(){m(n)}),[]),Object(s.useEffect)((function(){v(x)}),[n]);var v=function(e){var t=[];switch(e){case"all":t=n;break;case"active":t=n.filter((function(e){return!e.isDone}));break;case"finished":t=n.filter((function(e){return e.isDone}));break;default:t=n}m(t),f(e)};return Object(g.jsxs)("div",{className:W.a.wrap,children:[Object(g.jsxs)("h1",{className:W.a.title,children:["Y",Object(g.jsx)("span",{className:W.a.letter,children:"O"}),"UR T",Object(g.jsx)("span",{className:W.a.letter,children:"O"}),"D",Object(g.jsx)("span",{className:W.a.letter,children:"O"}),"S"]}),Object(g.jsx)(N,{onClickAdd:function(e){var t=[].concat(Object(l.a)(n),[{value:e,isDone:!1,id:i+1}]);r(t),b((function(e){return e+1}))},items:p}),Object(g.jsx)(L,{items:p,onClickDone:function(e){var t=n.map((function(t){var a=Object(_.a)({},t);return t.id===e&&(a.isDone=!t.isDone),a}));r(t)},onClickDelete:function(e){var t=n.filter((function(t){return t.id!==e}));r(t),b((function(e){return e-1}))}}),Object(g.jsx)(z,{count:n.filter((function(e){return!e.isDone})).length,onClickFilter:v,onClickDeleteAll:function(){r([]),b((function(e){return 0}))}})]})};B.defaultProps={isDone:!1,count:0};var H=B,V=a(63),J=a(3),M=a.n(J),P=a.p+"static/media/Star.66a6657c.svg",Y=a.p+"static/media/Union.a232545d.svg",Q=new V.a,Z=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,isError:!1,error:"",repoList:[],userName:"ananastya77",User:[],firstRepo:0,lastRepo:2},e.onClickNext=function(){e.setState({firstRepo:e.state.firstRepo+2,lastRepo:e.state.lastRepo+2})},e.onClickBack=function(){e.setState({firstRepo:e.state.firstRepo-2,lastRepo:e.state.lastRepo-2})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;Q.repos.listForUser({username:this.state.userName}).then((function(t){var a=t.data;e.setState({repoList:a,isLoading:!1})})).catch((function(t){return e.setState({hasError:!0,error:t,isLoading:!1})})),Q.users.getByUsername({username:this.state.userName}).then((function(t){var a=t.data;e.setState({User:a,isLoading:!1})})).catch((function(t){e.setState({hasError:!0,error:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,s=(t.hasError,t.error,t.repoList),n=t.User,r=t.firstRepo,c=t.lastRepo;return this.state.hasError?Object(g.jsxs)("div",{className:M.a.wrap,children:[Object(g.jsx)("h1",{className:M.a.title,children:this.state.error.name}),Object(g.jsx)("p",{className:M.a.error__text,children:"Something went wrong:"}),Object(g.jsx)("p",{className:M.a.error__text,children:this.state.error.message})]}):Object(g.jsx)("div",{className:M.a.wrap,children:a?Object(g.jsxs)("h1",{className:M.a.loading,children:["l",Object(g.jsx)("span",{className:M.a.letter,children:"o"}),"ading"]}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{className:M.a.title,children:["ab",Object(g.jsx)("span",{className:M.a.letter,children:"o"}),"ut"]}),Object(g.jsxs)("div",{className:M.a.user,children:[Object(g.jsx)("img",{src:n.avatar_url,className:M.a.avatar}),Object(g.jsxs)("div",{className:M.a.user__info,children:[Object(g.jsx)("h3",{className:M.a.name,children:n.name}),Object(g.jsxs)("h3",{className:M.a.login,children:["l",Object(g.jsx)("span",{className:M.a.letter,children:"o"}),"gin:",Object(g.jsx)("a",{href:n.html_url,className:M.a.user__link,children:n.login})]}),Object(g.jsx)("p",{className:M.a.bio,children:n.bio})]})]}),Object(g.jsxs)("div",{className:M.a.repo,children:[Object(g.jsxs)("h3",{className:M.a.repo__title,children:["rep",Object(g.jsx)("span",{className:M.a.letter,children:"o"}),"s"]}),0===s.length&&Object(g.jsx)("p",{className:M.a.repo__message,children:"There is no repositories yet."}),s.length>0&&Object(g.jsx)("ul",{className:M.a.list,children:s.slice(r,c).map((function(e){return Object(g.jsxs)("li",{className:M.a.repo__item,children:[Object(g.jsx)("a",{href:e.html_url,className:M.a.repo__link,children:e.name}),Object(g.jsxs)("div",{className:M.a.repo__info,children:[Object(g.jsxs)("div",{className:M.a.language,children:[Object(g.jsx)("span",{className:M.a["repoLanguage_".concat(e.language).toLowerCase()]+" "+M.a.icon}),null===e.language?"unknown":e.language]}),Object(g.jsxs)("div",{className:M.a.stargazers,children:[Object(g.jsx)("img",{src:P,className:M.a.star}),Object(g.jsx)("span",{children:e.stargazers_count})]}),Object(g.jsxs)("div",{className:M.a.forks,children:[Object(g.jsx)("img",{src:Y,className:M.a.forks_icon}),Object(g.jsx)("span",{children:e.forks})]}),Object(g.jsxs)("span",{className:M.a.updated,children:["Updated at ",new Date(e.updated_at).toLocaleString("eng",{day:"numeric",month:"long",year:"numeric"})]})]})]},e.id)}))}),Object(g.jsxs)("div",{className:M.a.button__container,children:[Object(g.jsx)("button",{className:M.a.button,disabled:0===r,onClick:function(){return e.onClickBack()},children:"Prev"}),Object(g.jsx)("button",{className:M.a.button,disabled:s.length-c<=0,onClick:function(){return e.onClickNext()},children:"Next"})]})]})]})})}}]),a}(n.a.Component),q=a(14),X=a.n(q),G=a.p+"static/media/email.12d18ecd.svg",K=a.p+"static/media/instagram.b0c484b3.svg",$=a.p+"static/media/vk.1f593b87.svg",ee=a.p+"static/media/github.4337c0ed.svg",te=function(){return Object(g.jsxs)("div",{className:X.a.wrap,children:[Object(g.jsxs)("h1",{className:X.a.title,children:["C",Object(g.jsx)("span",{className:X.a.letter,children:"o"}),"ntacts"]}),Object(g.jsxs)("nav",{className:X.a.nav,children:[Object(g.jsxs)("a",{href:"mailto:atolokonnikova7@gmail.com",className:X.a.link,children:[Object(g.jsx)("img",{src:G,className:X.a.email__icon}),Object(g.jsx)("span",{className:X.a.link__text,children:"atolokonnikova7@gmail.com"})]}),Object(g.jsxs)("div",{className:X.a.socials,children:[Object(g.jsx)("a",{href:"https://github.com/ananastya77/",className:X.a.socials__link,children:Object(g.jsx)("img",{src:ee,className:X.a.icon})}),Object(g.jsx)("a",{href:"https://vk.com/flamingspread/",className:X.a.socials__link,children:Object(g.jsx)("img",{src:$,className:X.a.icon})}),Object(g.jsx)("a",{href:"https://www.instagram.com/ananastya_77/",className:X.a.socials__link,children:Object(g.jsx)("img",{src:K,className:X.a.icon})})]})]})]})},ae=a.p+"static/media/WHSlogo.ddd00c5b.svg",se=a(22),ne=a.n(se),re=function(){return Object(g.jsx)(o.a,{children:Object(g.jsxs)("div",{className:ne.a.wrap,children:[Object(g.jsxs)("nav",{className:ne.a.menu,children:[Object(g.jsx)(o.b,{to:"/",children:Object(g.jsxs)("button",{className:ne.a.menu__item,children:["Ab",Object(g.jsx)("span",{className:ne.a.letter,children:"o"}),"ut"]})}),Object(g.jsx)(o.b,{to:"/todo",children:Object(g.jsxs)("button",{className:ne.a.menu__item,children:["T",Object(g.jsx)("span",{className:ne.a.letter,children:"o"}),"d",Object(g.jsx)("span",{className:ne.a.letter,children:"o"})]})}),Object(g.jsx)(o.b,{to:"/contacts",children:Object(g.jsxs)("button",{className:ne.a.menu__item,children:["C",Object(g.jsx)("span",{className:ne.a.letter,children:"o"}),"ntacts"]})}),Object(g.jsx)("img",{src:ae,className:ne.a.logo})]}),Object(g.jsxs)("div",{className:ne.a.container,children:[Object(g.jsx)(i.a,{path:"/",exact:!0,component:Z}),Object(g.jsx)(i.a,{path:"/todo",component:H}),Object(g.jsx)(i.a,{path:"/contacts",component:te})]})]})})};c.a.render(Object(g.jsx)(re,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.0a40f400.chunk.js.map