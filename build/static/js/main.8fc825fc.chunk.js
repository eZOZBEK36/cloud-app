(this.webpackJsonpcl=this.webpackJsonpcl||[]).push([[0],{25:function(e,t,a){e.exports={_select:"Select__select__1ZdgS",_options:"Select__options__3pV8v",_select_title:"Select__select_title__3RC6t"}},36:function(e,t,a){e.exports={lds_roller:"Loader_lds_roller__3vBdJ",loader_scale:"Loader_loader_scale__HPyvZ"}},37:function(e,t,a){e.exports={_input:"Input__input__xHBZS"}},39:function(e,t,a){e.exports={_container:"Container__container__3yXBJ"}},45:function(e,t,a){},46:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(36),r=a.n(n),s=a(0),i=function(e){return Object(s.jsx)("div",{className:"_loader",children:Object(s.jsxs)("div",{className:r.a.lds_roller,children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})},l=a(11),o=a(6),d=(a(45),a(46),a(37)),u=a.n(d),j=function(e){var t=e.id,a=e.type,c=e.placeholder,n=e.value,r=e.setValue,i=e.callback;setTimeout((function(){var e=document.getElementById(t);e&&(e.addEventListener("focusin",(function(e){e.target.nextElementSibling.style="bottom: 30px; left: 0px; font-size: 16px;"})),e.addEventListener("focusout",(function(t){0===e.value.length&&(t.target.nextElementSibling.style="bottom: 5px; left: 5px; font-size: 18px;")})))}),0);return Object(s.jsxs)("div",{className:u.a._input,children:[Object(s.jsx)("input",{value:n,onChange:function(e){return function(e){r(e.target.value),i&&i(e.target.value)}(e)},type:a,id:t}),Object(s.jsx)("label",{htmlFor:a,children:c})]})},p=a(4),b=a(2),O={files:[],view:"list",dirStack:[],currentDir:null,popupDisplay:!1},f="ADDFILE",h="SETFILES",v="CHANGEVIEW",m="DELETEFILE",x="PUSHTOSTACK",_="SETCURRENTDIR",g="SETPOPUPDISPLAY",y=function(){return{type:g}},N=function(e){return{type:f,payload:e}},k=function(e){return{type:h,payload:e}},w=function(e){return{type:_,payload:e}},S=function(e){return{type:v,payload:e}},D=a(5),E=a.n(D),C=a(10),A=a(13),I=a.n(A),L="http://localhost:8000",U={loading:!1},z="SHOWLOADER",B="HIDELOADER",F=function(){return{type:z}},P=function(){return{type:B}},R={isVisible:!1,files:[]},T="SHOWUPLOADER",V="HIDEUPLOADER",H="ADDUPLOADFILE",M="REMOVEUPLOADFILE",G="CHANGEUPLOADFILE",q=function(e){return{type:H,payload:e}},J=I.a.get,W=I.a.post,X=function(e,t){return function(){var a=Object(C.a)(E.a.mark((function a(c){var n;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c(F()),a.next=4,J(L+"/api/files",{params:{parent:e,sort:t},headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:n=a.sent,c(k(n.data)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),alert(a.t0);case 11:return a.prev=11,c(P()),a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[0,8,11,14]])})));return function(e){return a.apply(this,arguments)}}()},Z=function(e,t){return function(){var a=Object(C.a)(E.a.mark((function a(c){var n,r,s;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(n=new FormData).append("file",e),t&&n.append("parent",t),r={name:e.name,progress:0,id:Date.now()},c({type:T}),c(q(r)),a.next=9,W(L+"/api/files/upload",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},onUploadProgress:function(e){var t=e.lengthComputable?e.total:e.target.getResponseHeader("content-length")||e.target.getResponseHeader("x-decompressed-content-length");t&&(r.progress=Math.round(100*e.loaded/t),c({type:G,payload:r}))}});case 9:s=a.sent,c(N(s.data)),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(0),alert(a.t0),console.log(a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()},K=function(){var e=Object(C.a)(E.a.mark((function e(t){var a,c,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(L+"/api/files/download?id=".concat(t._id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:if(200!==(a=e.sent).status){e.next=15;break}return e.next=7,a.blob();case 7:c=e.sent,n=window.URL.createObjectURL(c),(r=document.createElement("a")).href=n,r.download=t.name,document.body.appendChild(r),r.click(),r.remove();case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(p.b)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1],i=Object(p.c)((function(e){return e.files.currentDir})),l=Object(p.c)((function(e){return e.files.popupDisplay}));return Object(s.jsx)("div",{onClick:function(t){var a,c;(t.target.matches("._popup")||t.target.matches("._popup__close"))&&e(y()),t.target.matches("._popup__create_btn")&&(r(""),e((a=i,c=n,function(){var e=Object(C.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(L+"/api/files",{name:c,type:"dir",parent:a},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:n=e.sent,t(N(n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),e(y()))},className:l?"_popup _open":"_popup",children:Object(s.jsx)("div",{className:"_popup__wrapper",children:Object(s.jsxs)("div",{className:"_popup__content",children:[Object(s.jsxs)("div",{className:"_popup__header",children:[Object(s.jsx)("div",{className:"_popup__title",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043f\u0430\u043f\u043a\u0443"}),Object(s.jsxs)("div",{className:"_popup__close",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})]}),Object(s.jsx)("div",{className:"_popup__form",children:Object(s.jsx)(j,{id:"_popup_inp",value:n,setValue:r,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438..."})}),Object(s.jsx)("div",{className:"_popup__create",children:Object(s.jsx)("button",{className:"_popup__create_btn",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0430\u043f\u043a\u0443"})})]})})})},Q=a.p+"static/media/sort.2e48b020.svg",$=a.p+"static/media/goback.b730b809.svg",ee=(a(74),a(75),a.p+"static/media/trash.e5e08131.svg"),te=a.p+"static/media/file.8e976cc0.svg",ae=a.p+"static/media/folder.7c83d7f2.svg",ce=a.p+"static/media/save.6254e66a.svg",ne=function(e){var t,a=e.file,c=Object(p.b)(),n=Object(p.c)((function(e){return e.files.view})),r=Object(p.c)((function(e){return e.files.currentDir})),i=function(){"dir"===a.type&&(c({type:x,payload:r}),c(w(a._id)))},l=function(e){e.stopPropagation(),K(a)},o=function(e){var t;e.stopPropagation(),c((t=a._id,function(){var e=Object(C.a)(E.a.mark((function e(a){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(F()),e.next=4,I.a.delete(L+"/api/files",{params:{id:t},headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:c=e.sent,a({type:m,payload:t}),alert(c.data.message),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 13:return e.prev=13,a(P()),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t){return e.apply(this,arguments)}}()))};return"bigplate"===n||"plate"===n?Object(s.jsxs)("div",{onClick:i,className:"dir"!==a.type?"file _".concat(n):"file _dir _".concat(n),children:[Object(s.jsxs)("div",{className:"file__header",children:[Object(s.jsx)("div",{className:"file__img",children:Object(s.jsx)("img",{src:"dir"===a.type?ae:te,alt:""})}),Object(s.jsxs)("div",{className:"file__actions",children:["dir"!==a.type&&Object(s.jsx)("div",{className:"file__download",children:Object(s.jsx)("button",{onClick:function(e){return l(e)},children:Object(s.jsx)("img",{src:ce,alt:""})})}),Object(s.jsx)("div",{className:"file__delete",children:Object(s.jsx)("button",{onClick:function(e){return o(e)},children:Object(s.jsx)("img",{src:ee,alt:""})})})]})]}),Object(s.jsxs)("div",{className:"file__name",children:[Object(s.jsx)("div",{children:"dir"===a.type?a.name:a.name.slice(0,-a.type.length)}),Object(s.jsx)("div",{children:"dir"!==a.type&&a.name.slice(-a.type.length)})]})]}):Object(s.jsxs)("div",{onClick:i,className:"dir"!==a.type?"filelist":"filelist _dir",children:[Object(s.jsx)("div",{className:"filelist__img",children:Object(s.jsx)("img",{src:"dir"===a.type?ae:te,alt:""})}),Object(s.jsx)("div",{className:"filelist__name",children:a.name}),Object(s.jsx)("div",{className:"filelist__date",children:a.date.slice(0,10).replaceAll("-","/")}),Object(s.jsx)("div",{className:"filelist__size",children:(t=a.size,t>Math.pow(1024,3)?(t/Math.pow(1024,3)).toFixed(1)+"GB":t>Math.pow(1024,2)?(t/Math.pow(1024,2)).toFixed(1)+"MB":t>1024?(t/1024).toFixed(1)+"KB":t+"B")}),"dir"!==a.type&&Object(s.jsx)("div",{className:"filelist__download",children:Object(s.jsx)("button",{onClick:function(e){return l(e)},children:Object(s.jsx)("img",{src:ce,alt:""})})}),Object(s.jsx)("div",{className:"filelist__delete",children:Object(s.jsx)("button",{onClick:function(e){return o(e)},children:Object(s.jsx)("img",{src:ee,alt:""})})})]})},re=a(85),se=a(84),ie=function(){var e=Object(p.c)((function(e){return e.files.files})),t=Object(p.c)((function(e){return e.files.view}));return"bigplate"===t||"plate"===t?Object(s.jsx)("div",{className:"list-disk _".concat(t),children:e.length?e.map((function(e){return Object(s.jsx)(ne,{file:e},e._id)})):Object(s.jsx)("div",{className:"list-disk__notfound",children:"\u0424\u0430\u0439\u043b\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})}):Object(s.jsxs)("div",{className:"list-disk _list",children:[Object(s.jsxs)("div",{className:"list-disk__header",children:[Object(s.jsx)("div",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(s.jsx)("div",{children:"\u0414\u0430\u0442\u0430"}),Object(s.jsx)("div",{children:"\u0420\u0430\u0437\u043c\u0435\u0440"})]}),e.length?Object(s.jsx)(re.a,{className:"list-disk__body",children:e.map((function(e){return Object(s.jsx)(se.a,{timeout:300,classNames:"files",children:Object(s.jsx)(ne,{file:e})},e._id)}))}):Object(s.jsx)("div",{className:"list-disk__notfound",children:"\u0424\u0430\u0439\u043b\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})]})},le=a.p+"static/media/grid-2x2.c5c5f764.svg",oe=(a(76),function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.upload.files})),a=Object(p.c)((function(e){return e.upload.isVisible}));return Object(s.jsx)("div",{style:a?{transform:"translate(0, 0)"}:{transform:"translate(0, 100%)"},className:"uploader",children:Object(s.jsxs)("div",{className:"uploader__wrapper",children:[Object(s.jsxs)("div",{className:"uploader__header",children:[Object(s.jsx)("div",{className:"uploader__title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),Object(s.jsx)("button",{onClick:function(){return e({type:V})},className:"uploader__close",children:"X"})]}),Object(s.jsx)("div",{className:"uploader__body",children:t.map((function(t){return Object(s.jsxs)("div",{className:"upload-file",children:[Object(s.jsxs)("div",{className:"upload-file__header",children:[Object(s.jsx)("div",{className:"upload-file__name",children:t.name}),Object(s.jsx)("div",{onClick:function(){return e((a=t.id,{type:M,payload:a}));var a},className:"upload-file__remove",children:"X"})]}),Object(s.jsxs)("div",{className:"upload-file__progress",children:[Object(s.jsx)("div",{style:{width:t.progress+"%"},className:"upload-file__bar"}),Object(s.jsxs)("div",{className:"upload-file__percent",children:[t.progress,"%"]})]})]},t.id)}))})]})})}),de=a.p+"static/media/arrow-down.3e608f46.svg",ue=a(25),je=a.n(ue),pe=function(e){var t=e.options,a=e.sortOption,n=Object(c.useState)(t[0].name),r=Object(o.a)(n,2),i=r[0],l=r[1],d=Object(c.useState)(!1),u=Object(o.a)(d,2),j=u[0],p=u[1];return Object(s.jsxs)("div",{className:je.a._select,onClick:function(){return p(!j)},children:[Object(s.jsxs)("div",{className:je.a._select_title,children:[i,Object(s.jsx)("img",{style:j?{transform:"rotate(-180deg)"}:{transform:"rotate(0)"},src:de,alt:""})]}),Object(s.jsx)("div",{style:j?{visibility:"visible",opacity:1}:{visibility:"hidden",opacity:0},className:je.a._options,children:t.map((function(e,t){return Object(s.jsx)("div",{onClick:function(){var t;t=e.name,l(t),a(e.value)},children:e.name},t)}))})]})},be=a.p+"static/media/grid-2x3.dd06d089.svg",Oe=a.p+"static/media/grid-3x3.4635325e.svg",fe=a(39),he=a.n(fe),ve=function(e){var t=e.children,a=e.parent;return Object(s.jsx)("div",{className:"".concat(a,"__container ").concat(he.a._container),children:t})},me=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)("type"),i=Object(o.a)(r,2),d=i[0],u=i[1],b=Object(c.useState)(!1),O=Object(o.a)(b,2),f=O[0],h=O[1],v=Object(c.useState)(""),m=Object(o.a)(v,2),x=m[0],_=m[1],g=Object(p.b)(),N=(Object(p.c)((function(e){return e.files.files})),Object(p.c)((function(e){return e.files.dirStack}))),D=Object(p.c)((function(e){return e.files.currentDir})),A=function(e){e.preventDefault(),e.stopPropagation(),n(!0)},I=function(e){e.preventDefault(),e.stopPropagation(),n(!1)};return Object(c.useEffect)((function(){g(X(D,d))}),[D,d]),a?Object(s.jsx)("div",{className:"_drag",onDrop:function(e){return function(e){e.preventDefault(),e.stopPropagation(),n(!1),Object(l.a)(e.dataTransfer.files).forEach((function(e){return g(Z(e,D))}))}(e)},onDragEnter:function(e){return A(e)},onDragLeave:function(e){return I(e)},onDragOver:function(e){return A(e)},children:Object(s.jsx)("div",{children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u044e\u0434\u0430"})}):Object(s.jsx)("div",{className:"disk",onDragEnter:function(e){return A(e)},onDragLeave:function(e){return I(e)},onDragOver:function(e){return A(e)},children:Object(s.jsx)("div",{className:"disk__wrapper",children:Object(s.jsxs)(ve,{parent:"disk",children:[Object(s.jsx)("div",{className:"disk__title",children:"Files"}),Object(s.jsxs)("div",{className:"disk__actions actions-disk",children:[Object(s.jsx)("div",{className:"actions-disk__back",children:Object(s.jsx)("button",{onClick:function(){var e=N.pop();g(w(e))},type:"button",children:Object(s.jsx)("img",{src:$,alt:""})})}),Object(s.jsx)("div",{className:"actions-disk__search",children:Object(s.jsx)(j,{type:"text",id:"search-input",placeholder:"\u041f\u043e\u0438\u0441\u043a...",callback:function(e){f&&clearTimeout(f),g(F()),""!==e?h(setTimeout((function(e){return g((t=e,function(){var e=Object(C.a)(E.a.mark((function e(a){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J(L+"/api/files/search",{params:{search:t},headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:c=e.sent,a(k(c.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert(e.t0);case 11:return e.prev=11,a(P()),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(t){return e.apply(this,arguments)}}()));var t}),300,e)):g(X(D))},value:x,setValue:_})}),Object(s.jsxs)("div",{className:"actions-disk__sort disk-sort",children:[Object(s.jsx)("div",{className:"disk-sort__btn",children:Object(s.jsx)("img",{src:Q,alt:""})}),Object(s.jsx)("div",{className:"disk-sort__select",children:Object(s.jsx)(pe,{options:[{name:"\u041f\u043e \u0438\u043c\u0435\u043d\u0438",value:"name"},{name:"\u041f\u043e \u0442\u0438\u043f\u0443",value:"type"},{name:"\u041f\u043e \u0434\u0430\u0442\u0435",value:"date"}],sortOption:u})}),Object(s.jsxs)("div",{className:"disk-sort__view view-sort",children:[Object(s.jsx)("div",{className:"view-sort__bigbadges",children:Object(s.jsx)("img",{src:le,alt:"",onClick:function(){return g(S("bigplate"))}})}),Object(s.jsx)("div",{className:"view-sort__smallbadges",children:Object(s.jsx)("img",{src:Oe,alt:"",onClick:function(){return g(S("plate"))}})}),Object(s.jsx)("div",{className:"view-sort__linebadges",children:Object(s.jsx)("img",{src:be,alt:"",onClick:function(){return g(S("list"))}})})]})]})]}),Object(s.jsxs)("div",{className:"disk__creators",children:[Object(s.jsx)("button",{className:"disk__createDir",onClick:function(){g(y())},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043f\u0430\u043f\u043a\u0443"}),Object(s.jsxs)("div",{className:"disk__uploadfile",children:[Object(s.jsx)("label",{htmlFor:"disk__uploadfile",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c..."}),Object(s.jsx)("input",{multiple:!0,onChange:function(e){return function(e){Object(l.a)(e.target.files).forEach((function(e){return g(Z(e,D))}))}(e)},type:"file",name:"file",id:"disk__uploadfile"})]}),Object(s.jsx)(Y,{}),Object(s.jsx)(oe,{})]}),Object(s.jsx)(ie,{})]})})})},xe=(a(77),a.p+"static/media/header-logo.387e90ee.svg"),_e=a.p+"static/media/avatar.1af8adc2.svg",ge=a(3),ye=a(14),Ne={currentUser:{},isAuth:!1},ke="SETUSER",we="LOGOUT",Se=function(e){return{type:ke,payload:e}},De=function(){var e=Object(p.b)(),t=Object(ge.f)().pathname,a=Object(p.c)((function(e){return e.user.isAuth})),c=Object(p.c)((function(e){return e.user.currentUser})),n=c.avatar?"".concat(L,"/static/").concat(c.id||c._id,"/").concat(c.avatar):_e;return Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("div",{className:"header__wrapper",children:Object(s.jsxs)(ve,{parent:"header",children:[Object(s.jsxs)("div",{className:"header__logo",children:[Object(s.jsx)("img",{src:xe,alt:"LOGO"}),"MERN CLOUD"]}),Object(s.jsx)("nav",{className:"header__nav",children:Object(s.jsx)("ul",{className:"header__list",children:a?Object(s.jsxs)(s.Fragment,{children:["/profile"===t?Object(s.jsx)("li",{className:"header__listitem",children:Object(s.jsx)(ye.b,{to:"/",children:"\u041d\u0430\u0437\u0430\u0434"})}):Object(s.jsx)("li",{onClick:function(){return e({type:we})},className:"header__listitem",children:"\u0412\u044b\u0445\u043e\u0434"}),Object(s.jsx)("li",{className:"header__avatar",children:Object(s.jsx)(ye.b,{to:"/profile",children:Object(s.jsx)("img",{src:n,alt:"Avatar"})})})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("li",{className:"header__listitem",children:Object(s.jsx)(ye.b,{className:"header__link",to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(s.jsx)("li",{className:"header__listitem",children:Object(s.jsx)(ye.b,{className:"header__link",to:"/registration",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})})})]})})})},Ee=(a(78),I.a.get),Ce=I.a.post,Ae=function(){var e=Object(C.a)(E.a.mark((function e(t,a){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ce(L+"/api/auth/registration",{email:t,password:a});case 3:c=e.sent,alert(c.data.message),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.request.response.message),console.log(e.t0.request.response.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.user.currentUser})),a=t.avatar?"".concat(L,"/static/").concat(t.id||t._id,"/").concat(t.avatar):_e,c=function(t){e(function(e){return function(){var t=Object(C.a)(E.a.mark((function t(a){var c,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(F()),(c=new FormData).append("file",e),t.next=6,Ce("".concat(L,"/api/files/avatar"),c,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 6:n=t.sent,a(Se(n.data)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:return t.prev=13,a(P()),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(s.jsx)("div",{className:"profile",children:Object(s.jsx)("div",{className:"profile__wrapper",children:Object(s.jsx)(ve,{parent:"profile",children:Object(s.jsxs)("div",{className:"profile__actions",children:[Object(s.jsxs)("div",{className:"profile__img",children:[Object(s.jsx)("img",{src:a,alt:"Avatar"}),t.avatar&&Object(s.jsxs)("div",{onClick:function(){return e(function(){var e=Object(C.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,I.a.delete("".concat(L,"/api/files/avatar"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:a=e.sent,t(Se(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,t(P()),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())},className:"profile__delete",children:[Object(s.jsx)("span",{}),Object(s.jsx)("span",{})]})]}),Object(s.jsxs)("div",{className:"profile__form",children:[Object(s.jsx)("input",{accept:"image/*",onChange:function(e){return c(e.target.files[0])},type:"file",name:"avatarinput",id:"avatarinput"}),Object(s.jsx)("label",{htmlFor:"avatarinput",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c..."})]})]})})})})},Le=(a(79),function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),d=l[0],u=l[1];return Object(s.jsxs)("div",{className:"registration",children:[Object(s.jsx)("div",{className:"registration__header",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(s.jsxs)("form",{className:"registration__form",children:[Object(s.jsxs)("div",{className:"registration__inps",children:[Object(s.jsx)(j,{value:n,setValue:r,id:"email",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b..."}),Object(s.jsx)(j,{value:d,setValue:u,id:"password",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c..."})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"button",onClick:function(){return Ae(n,d)},className:"registration__btn",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})}),Ue=(a(80),function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),d=l[0],u=l[1],b=Object(p.b)();return Object(s.jsxs)("div",{className:"authorization",children:[Object(s.jsx)("div",{className:"authorization__header",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(s.jsxs)("form",{className:"authorization__form",children:[Object(s.jsxs)("div",{className:"authorization__inps",children:[Object(s.jsx)(j,{value:n,setValue:r,id:"email",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b..."}),Object(s.jsx)(j,{value:d,setValue:u,id:"password",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c..."})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:function(){return b(function(e,t){return function(){var a=Object(C.a)(E.a.mark((function a(c){var n,r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c(F()),a.next=4,Ce(L+"/api/auth/login",{email:e,password:t});case 4:n=a.sent,c(Se(n.data.user)),localStorage.setItem("token",n.data.token),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),alert(null===a.t0||void 0===a.t0||null===(r=a.t0.request)||void 0===r?void 0:r.response);case 12:return a.prev=12,c(P()),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})));return function(e){return a.apply(this,arguments)}}()}(n,d))},type:"button",className:"authorization__btn",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})}),ze=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.user.isAuth})),a=Object(p.c)((function(e){return e.app.loading}));return Object(c.useEffect)((function(){e(function(){var e=Object(C.a)(E.a.mark((function e(t){var a,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,Ee(L+"/api/auth/auth",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:a=e.sent,t(Se(a.data.user)),localStorage.setItem("token",a.data.token),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert(null===e.t0||void 0===e.t0||null===(c=e.t0.request)||void 0===c?void 0:c.response),localStorage.removeItem("token");case 13:return e.prev=13,t(P()),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(s.jsxs)(ye.a,{children:[Object(s.jsx)(De,{}),a&&Object(s.jsx)(i,{}),t?Object(s.jsxs)(ge.d,{children:[Object(s.jsx)(ge.b,{path:"/",element:Object(s.jsx)(me,{})}),Object(s.jsx)(ge.b,{path:"/profile",element:Object(s.jsx)(Ie,{})}),Object(s.jsx)(ge.b,{path:"/*",element:Object(s.jsx)(ge.a,{replace:!0,to:"/"})})]}):Object(s.jsx)("div",{className:"forms",children:Object(s.jsxs)(ge.d,{children:[Object(s.jsx)(ge.b,{path:"/registration",element:Object(s.jsx)(Le,{})}),Object(s.jsx)(ge.b,{path:"/login",element:Object(s.jsx)(Ue,{})}),Object(s.jsx)(ge.b,{path:"/*",element:Object(s.jsx)(ge.a,{replace:!0,to:"/login"})})]})})]})},Be=(a(81),a(12)),Fe=a.n(Be),Pe=a(41),Re=a(40),Te=a(20),Ve=Object(Te.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case B:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(b.a)(Object(b.a)({},e),{},{currentUser:t.payload,isAuth:!0});case we:return localStorage.removeItem("token"),Object(b.a)(Object(b.a)({},e),{},{currentUser:{},isAuth:!1});default:return e}},files:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(b.a)(Object(b.a)({},e),{},{view:t.payload});case h:return Object(b.a)(Object(b.a)({},e),{},{files:t.payload});case _:return Object(b.a)(Object(b.a)({},e),{},{currentDir:t.payload});case f:return Object(b.a)(Object(b.a)({},e),{},{files:[].concat(Object(l.a)(e.files),[t.payload])});case g:return Object(b.a)(Object(b.a)({},e),{},{popupDisplay:!e.popupDisplay});case x:return Object(b.a)(Object(b.a)({},e),{},{dirStack:[].concat(Object(l.a)(e.dirStack),[t.payload])});case m:return Object(b.a)(Object(b.a)({},e),{},{files:Object(l.a)(e.files.filter((function(e){return e._id!==t.payload})))});default:return e}},upload:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(b.a)(Object(b.a)({},e),{},{isVisible:!0});case V:return Object(b.a)(Object(b.a)({},e),{},{isVisible:!1});case H:return Object(b.a)(Object(b.a)({},e),{},{files:[].concat(Object(l.a)(e.files),[t.payload])});case M:return Object(b.a)(Object(b.a)({},e),{},{files:Object(l.a)(e.files.filter((function(e){return e.id!==t.payload})))});case G:return Object(b.a)(Object(b.a)({},e),{},{files:Object(l.a)(e.files.map((function(e){return e.id==t.payload.id?Object(b.a)(Object(b.a)({},e),{},{progress:t.payload.progress}):Object(b.a)({},e)})))});default:return e}}}),He=Object(Te.createStore)(Ve,Object(Re.composeWithDevTools)(Object(Te.applyMiddleware)(Pe.a)));Fe.a.render(Object(s.jsx)(p.a,{store:He,children:Object(s.jsx)(ze,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.8fc825fc.chunk.js.map