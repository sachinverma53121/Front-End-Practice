(this["webpackJsonpreact-app-demo"]=this["webpackJsonpreact-app-demo"]||[]).push([[0],{106:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),c=(t(103),t(104),t(105),t(106),t(22)),o=t(23),m=t(25),i=t(24),u=t(7),d=t(156),E=t(157),h=t(158),f=t(159),p=t(160),g=t(161),b=function(){return r.a.createElement("div",{className:"col-12 mt-5 mb-5"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-4x fa-fw text-primary"}),r.a.createElement("span",{className:"text-secondary display-4"},"Loading..."))},N="http://localhost:3001/";function v(e){var a=e.dish;e.onClick;return r.a.createElement(d.a,null,r.a.createElement(u.b,{to:"/menu/".concat(a.id)},r.a.createElement(E.a,{width:"100%",src:N+a.image,alt:a.name}),r.a.createElement(h.a,{body:!0,className:"ml-5"},r.a.createElement(f.a,{heading:!0},a.name))))}var y=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(v,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errMessage?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMessage))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu")," ",r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},O=t(21),w=t(162),M=t(183),L=t(163),k=t(164),j=t(165),S=t(166),C=t(167),D=t(168),x=t(169),F=t(8),A=t(30),I=function(e){return e&&e.length},T=function(e){return function(a){return!a||a.length<=e}},R=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(w.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-sm"})," Submit Comment"),r.a.createElement(M.a,{isOpen:this.state.isModalOpen},r.a.createElement(L.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(k.a,null,r.a.createElement(F.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"rating",xs:12},"Raiting"),r.a.createElement(C.a,{xs:12},r.a.createElement(F.Control.select,{model:".rating",name:"rating",className:"form-control",value:1},[1,2,3,4,5].map((function(e,a){return r.a.createElement("option",{value:e},e)}))))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"author",xs:12},"Your Name"),r.a.createElement(C.a,{xs:12},r.a.createElement(F.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{required:I,minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:T(15)}}),r.a.createElement(F.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters ",maxLength:"Must be 15 characters or less "}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"comment",xs:12},"Comment"),r.a.createElement(C.a,{xs:12},r.a.createElement(F.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{xs:6},r.a.createElement(w.a,{type:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component);function _(e){var a=e.dish;return null!=a?r.a.createElement("div",{className:""},r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{top:!0,src:N+a.image,alt:a.name}),r.a.createElement(D.a,null,r.a.createElement(f.a,null,a.name),r.a.createElement(x.a,null,a.description))))):r.a.createElement("div",null)}function q(e){var a=e.comments;e.postComment,e.dishId;if(null==a)return r.a.createElement("div",null);var t=a.map((function(e){return r.a.createElement(A.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,",",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))}));return r.a.createElement("div",null,r.a.createElement("h4",null," Comments "),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(A.Stagger,{in:!0},t)))}var P=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMessage))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement(g.a,null,r.a.createElement(u.b,{to:"/menu"},"Menu")),r.a.createElement(g.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(_,{dish:e.dish})),r.a.createElement("div",{className:"col-12 col-md-5 m-1 text-justify"},r.a.createElement(q,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}),r.a.createElement(R,{dish:e.dish,postComment:e.postComment,dishId:e.dish.id})))):r.a.createElement("div",null)},H=t(170),G=t(171),W=t(172),Y=t(173),B=t(174),U=t(175),K=t(176),z=t(177),J=t(178),Z=t(179),$=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(O.a)(n)),n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleLogin=n.handleLogin.bind(Object(O.a)(n)),n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(G.a,{onClick:this.toggleNav}),r.a.createElement(W.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(Y.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(B.a,{navbar:!0},r.a.createElement(U.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(U.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(U.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(U.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(B.a,{className:"ml-auto"},r.a.createElement(U.a,null,r.a.createElement(w.a,{className:"btn btn-outline-light",outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"}," "),"\u2002 Login")))))),r.a.createElement(K.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante Con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(M.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(L.a,{toggle:this.toggleModal},"Login"),r.a.createElement(k.a,null,r.a.createElement(z.a,{onSubmit:this.handleLogin},r.a.createElement(J.a,null,r.a.createElement(S.a,{htmlFor:"username"},"Username: "),r.a.createElement(Z.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(J.a,null,r.a.createElement(S.a,{htmlFor:"password"},"Password: "),r.a.createElement(Z.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(J.a,{check:!0},r.a.createElement(S.a,{check:!0},r.a.createElement(Z.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember Me")),r.a.createElement(J.a,null,r.a.createElement(w.a,{type:"submit",value:"Submit",color:"primary "},"Login"))))))}}]),t}(n.Component);var Q=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},V=t(180);function X(e){var a=e.item,t=e.errMess;return e.isLoading?r.a.createElement(b,null):t?r.a.createElement("h4",null,t):r.a.createElement("div",null,r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{src:N+a.image,alt:a.name}),r.a.createElement(D.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(V.a,null,a.designation):null,r.a.createElement(x.a,null,a.description)))))}var ee=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(X,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(X,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(X,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess})))))},ae=function(e){return e&&e.length},te=function(e){return function(a){return!a||a.length<=e}},ne=function(e){return function(a){return a&&a.length>=e}},re=function(e){return!isNaN(Number(e))},le=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},se=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"Contact us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),":"," ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(F.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(C.a,{md:10},r.a.createElement(F.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ae,maxLength:te(10),minLength:ne(3)}}),r.a.createElement(F.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(C.a,{md:10},r.a.createElement(F.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ae,maxLength:te(10),minLength:ne(3)}}),r.a.createElement(F.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"telnum",md:2},"telephone no."),r.a.createElement(C.a,{md:10},r.a.createElement(F.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"telephone no.",className:"form-control",validators:{required:ae,maxLength:te(10),minLength:ne(3),isNumber:re}}),r.a.createElement(F.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less",isNumber:"not a number"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"email",md:2},"email"),r.a.createElement(C.a,{md:10},r.a.createElement(F.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ae,validEmail:le}}),r.a.createElement(F.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"not a email"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(S.a,{check:!0},r.a.createElement(F.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"}),r.a.createElement("strong",null,"May we contact you")))),r.a.createElement(C.a,{md:{size:3,offset:1}},r.a.createElement(F.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"message",md:2},"Your feedback"),r.a.createElement(C.a,{md:10},r.a.createElement(F.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{md:{size:10,offset:2}},r.a.createElement(w.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),ce=t(181),oe=t(182);function me(e){return e.leadersLoading?r.a.createElement("div",null,r.a.createElement(b,null)):e.leadersErrMess?r.a.createElement("div",null,r.a.createElement("h4",null,e.leadersErrMess)):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{key:e.leader.id,className:"col-12"},r.a.createElement(A.Fade,{in:!0},r.a.createElement(ce.a,{tag:"li"},r.a.createElement(ce.a,{left:!0,middle:!0},r.a.createElement(ce.a,{object:!0,src:N+e.leader.image,alt:e.leader.name})),r.a.createElement(ce.a,{body:!0,className:"ml-5"},r.a.createElement(ce.a,{heading:!0},e.leader.name),r.a.createElement("h6",null,e.leader.designation),r.a.createElement("p",null,e.leader.description)))))))}var ie=function(e){var a=e.leaders.leaders.map((function(a){return r.a.createElement("div",{key:a.id},r.a.createElement(me,{leader:a,leadersLoading:e.leaders.leadersLoading,leadersErrMess:e.leaders.leadersErrMess}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12 "},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to"," ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.a,null,r.a.createElement(oe.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(D.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.a,null,r.a.createElement(D.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 "},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12 m-1"},r.a.createElement(ce.a,{list:!0},r.a.createElement(A.Stagger,{in:!0},a)))))},ue=t(35),de=t(28),Ee=function(){return{type:"DISHES_LOADING"}},he=function(e){return{type:"DISHES_FAILED",payload:e}},fe=function(e){return{type:"ADD_DISHES",payload:e}},pe=function(){return{type:"PROMOS_LOADING"}},ge=function(e){return{type:"PROMOS_FAILED",payload:e}},be=function(e){return{type:"ADD_PROMOS",payload:e}},Ne=function(e){return{type:"COMMENTS_FAILED",payload:e}},ve=function(e){return{type:"ADD_COMMENTS",payload:e}},ye=function(){return{type:"LEADERS_LOADING"}},Oe=function(e){return{type:"LEADERS_FAILED",payload:e}},we=function(e){return{type:"ADD_LEADERS",payload:e}},Me=t(59),Le=t(91),ke=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchPromos(),this.props.fetchComments(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement($,null),r.a.createElement(Me.a,null,r.a.createElement(Le.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ue.d,{location:this.props.location},r.a.createElement(ue.b,{path:"/home",component:function(){return r.a.createElement(ee,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess})}}),r.a.createElement(ue.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes})}}),r.a.createElement(ue.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(P,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),postComment:e.props.postComment,commentErrMess:e.props.comments.errMess})}}),r.a.createElement(ue.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(se,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(ue.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(ie,{leaders:e.props.leaders})}}),r.a.createElement(ue.a,{to:"/home"})))),r.a.createElement(Q,null))}}]),t}(n.Component),je=Object(ue.g)(Object(de.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=a,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){return e((function(e){return e(Ee(!0)),fetch(N+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(fe(a))})).catch((function(a){return e(he(a.message))}))}))},fetchComments:function(){return e((function(e){return fetch(N+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ve(a))})).catch((function(a){return e(Ne(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(pe()),fetch(N+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(be(a))})).catch((function(a){return e(ge(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(ye(!0)),fetch(N+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(we(a))})).catch((function(a){return e(Oe(a.message))}))}))},postFeedback:function(a,t,n,r,l,s,c){return e(function(e,a,t,n,r,l,s){return function(c){var o={firstname:e,lastname:a,telnum:t,email:n,agree:r,contactType:l,message:s};return o.date=(new Date).toISOString(),fetch(N+"feedback",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=a,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){alert("Current State is: "+JSON.stringify(e))})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(a,t,n,r,l,s,c))},resetFeedbackForm:function(){e(F.actions.reset("feedback"))}}}))(ke)),Se=(t(154),t(6)),Ce=t(29),De=t(95),xe=t(96),Fe=t.n(xe),Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMessage:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMessage:null,dishes:a.payload});case"DISHES_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0,errMessage:null,dishes:[]});case"DISHES_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMessage:a.payload,dishes:[]});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMessage:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMessage:a.payload,comments:[]});case"ADD_COMMENT":var t=a.payload;return Object(Se.a)(Object(Se.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LEADERS_LOADING":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:a.payload});case"ADD_LEADERS":return Object(Se.a)(Object(Se.a)({},e),{},{isLoading:!1,errMess:null,leaders:a.payload});default:return e}},_e={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},qe=Object(Ce.createStore)(Object(Ce.combineReducers)(Object(Se.a)({dishes:Ae,comments:Ie,promotions:Te,leaders:Re},Object(F.createForms)({feedback:_e}))),Object(Ce.applyMiddleware)(De.a,Fe.a)),Pe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(de.Provider,{store:qe},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(je,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,a,t){e.exports=t(155)}},[[98,1,2]]]);
//# sourceMappingURL=main.698d04a5.chunk.js.map