(this.webpackJsonppetbook=this.webpackJsonppetbook||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var s=a(1),o=a(2),r=a.n(o),l=a(25),c=a.n(l),n=(a(120),a(121),a(28)),i=a(17),d=a(18),m=a(20),j=a(19),h=a(13),b=a(31),p=a(10),u=a(26),x=a(63),f=a.n(x),O=a(192),g=a(193),N=a(194),v=a(195),I=a(196),y=a(197),C=a(198),w=a(215),S=a(216),P=a(199),k=a(200),M=a(214),F=a(110),E=a(217),T=a(201),L=a(202),q=a(203),D=a(204),U=a(205),A=a(206),_=a(207),R=(a(85),a(5)),B=a.n(R),W=a(8),z=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleClose=function(){s.setState({isPetIdModalOpen:!1})},s.toggleNav=s.toggleNav.bind(Object(p.a)(s)),s.state={collapsed:!0,isNavOpen:!1,isModalOpen:!1,isPetIdModalOpen:!1,activeTab:"1"},s.toggleNav=s.toggleNav.bind(Object(p.a)(s)),s.toggleModal=s.toggleModal.bind(Object(p.a)(s)),s.handleLogin=s.handleLogin.bind(Object(p.a)(s)),s.handleRegister=s.handleRegister.bind(Object(p.a)(s)),s.toggleTab=s.toggleTab.bind(Object(p.a)(s)),s.generateId=s.generateId.bind(Object(p.a)(s)),s.toggleModalPetId=s.toggleModalPetId.bind(Object(p.a)(s)),s.handleClose=s.handleClose.bind(Object(p.a)(s)),s}return Object(d.a)(a,[{key:"handleLogin",value:function(e){e.email?alert("Logged In"):alert("Please Register First"),this.toggleModal()}},{key:"handleRegister",value:function(e){this.props.addUserInfo(this.props.uniqueId.uniqueId,"localImageUrl",e,!0),this.toggleModal(),this.toggleModalPetId(),this.generateId()}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"generateId",value:function(){this.props.addUniqueId(f()())}},{key:"toggleModalPetId",value:function(){var e=this;this.setState({isPetIdModalOpen:!0},(function(){setTimeout(e.handleClose,3e3)}))}},{key:"toggleNav",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsxs)(O.a,{id:"navbar",className:"site-header ",expand:"lg",style:{boxShadow:"0 4px 4px 0 rgba(0, 0, 0, 0.5)"},light:!0,children:[Object(s.jsx)(g.a,{to:"/home",className:"mr-auto",style:{color:"white"},children:Object(s.jsx)("h3",{children:"PetBook"})}),Object(s.jsx)(N.a,{onClick:this.toggleNav,className:"mr-2"}),Object(s.jsx)(v.a,{isOpen:!this.state.collapsed,navbar:!0,children:Object(s.jsxs)(I.a,{navbar:!0,className:"mx-auto",children:[Object(s.jsx)(y.a,{className:"m-2 ",children:Object(s.jsx)(C.a,{tag:u.c,style:{fontWeight:"bold",color:"white"},to:"/LostPets",onClick:this.state.collapsed?"":this.toggleNav,activeStyle:{fontWeight:"bold",color:"white",textDecoration:"underline"},children:Object(s.jsx)("h5",{children:"LostPets"})})}),Object(s.jsx)(y.a,{className:"m-2 ",children:this.props.userInfo.userInfo.profileInfo?Object(s.jsx)(C.a,{tag:u.c,onClick:this.state.collapsed?"":this.toggleNav,to:"/Feed",style:{fontWeight:"bold",color:"white"},activeStyle:{fontWeight:"bold",color:"white",textDecoration:"underline"},children:Object(s.jsx)("h5",{children:"Feed"})}):Object(s.jsx)(C.a,{tag:u.c,onClick:this.state.collapsed?"":this.toggleNav,to:"/LostPets",activeStyle:{fontWeight:"bold",color:"white"},children:Object(s.jsx)("h5",{children:"Feed"})})})]})}),Object(s.jsxs)(w.a,{inNavbar:!0,children:[Object(s.jsx)(S.a,{nav:!0,caret:!0,style:{color:"white"},children:Object(s.jsx)("img",{id:"proPic",className:"profileImg rounded-circle",src:"petbook/assets/default.png",alt:"",style:{width:"40px"}})}),Object(s.jsxs)(P.a,{right:!0,children:[Object(s.jsx)(y.a,{className:"",children:this.props.userInfo.userInfo.profileInfo?Object(s.jsxs)(u.b,{style:{color:"black"},to:"/PetProfile",children:[Object(s.jsxs)(k.a,{id:"profileSettings",children:[Object(s.jsx)("img",{id:"music",className:"profileImg rounded-circle",src:"petbook/assets/default.png",alt:"",style:{width:"40px"}}),"Your Profile"]}),Object(s.jsx)(M.a,{placement:"left",target:"profileSettings",children:"Profile and Settings"})]}):Object(s.jsxs)(u.b,{style:{color:"black"},to:"/",children:[Object(s.jsxs)(k.a,{id:"profileSettings",children:[Object(s.jsx)("img",{id:"music",className:"profileImg rounded-circle",src:"./assets/Hugo2.png",alt:"",style:{width:"40px"}}),"Your Profile"]}),Object(s.jsx)(M.a,{placement:"left",target:"profileSettings",children:"Profile and Settings"})]})}),Object(s.jsx)(k.a,{divider:!0}),Object(s.jsx)(k.a,{children:"Settings"}),Object(s.jsx)(k.a,{children:"Help"}),Object(s.jsx)(k.a,{children:Object(s.jsx)("span",{className:"navbar-text ml-2",children:Object(s.jsxs)(F.a,{color:"primary",onClick:this.toggleModal,children:[Object(s.jsx)("i",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})]}),Object(s.jsxs)(E.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(s.jsx)(T.a,{toggle:this.toggleModal,children:"Login"}),Object(s.jsxs)(L.a,{children:[Object(s.jsxs)(I.a,{tabs:!0,children:[Object(s.jsx)(y.a,{children:Object(s.jsx)(C.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")},href:"#",children:"Log In"})}),Object(s.jsx)(y.a,{children:Object(s.jsx)(C.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")},href:"#",children:"Register"})})]}),Object(s.jsxs)(q.a,{activeTab:this.state.activeTab,children:[Object(s.jsx)(D.a,{tabId:"1",children:Object(s.jsxs)(W.Form,{model:"profileForm",onSubmit:function(t){return e.handleLogin(t)},className:"mt-2",children:[Object(s.jsx)(U.a,{className:"form-group ",children:Object(s.jsxs)(A.a,{children:[Object(s.jsx)(_.a,{htmlFor:"email",className:"ml-3",children:"Email:"}),Object(s.jsx)(A.a,{md:10,children:Object(s.jsx)(W.Control.text,{model:".email",id:"email",name:"email",placeholder:"email",className:"form-control"})})]})}),Object(s.jsx)(U.a,{className:"form-group ",children:Object(s.jsxs)(A.a,{children:[Object(s.jsx)(_.a,{htmlFor:"password",className:"ml-3",children:"Password:"}),Object(s.jsx)(A.a,{md:10,children:Object(s.jsx)(W.Control.text,{model:".password",id:"password",name:"password",placeholder:"password",className:"form-control"})})]})}),Object(s.jsx)(F.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})}),Object(s.jsx)(D.a,{tabId:"2",children:Object(s.jsxs)(W.Form,{model:"profileForm",onSubmit:function(t){return e.handleRegister(t)},className:"mt-2",children:[Object(s.jsx)(U.a,{className:"form-group ",children:Object(s.jsxs)(A.a,{children:[Object(s.jsx)(_.a,{htmlFor:"profileName",className:"ml-3",children:"Profile Name:"}),Object(s.jsx)(A.a,{md:10,children:Object(s.jsx)(W.Control.text,{model:".profileName",id:"profileName",name:"profileName",placeholder:"profileName",className:"form-control"})})]})}),Object(s.jsx)(U.a,{className:"form-group ",children:Object(s.jsxs)(A.a,{children:[Object(s.jsx)(_.a,{htmlFor:"email",className:"ml-3",children:"Email:"}),Object(s.jsx)(A.a,{md:10,children:Object(s.jsx)(W.Control.text,{model:".email",id:"email",name:"email",placeholder:"email",className:"form-control"})})]})}),Object(s.jsx)(U.a,{className:"form-group ",children:Object(s.jsxs)(A.a,{children:[Object(s.jsx)(_.a,{htmlFor:"password",className:"ml-3",children:"Password:"}),Object(s.jsx)(A.a,{md:10,children:Object(s.jsx)(W.Control.text,{model:".password",id:"password",name:"password",placeholder:"password",className:"form-control"})})]})}),Object(s.jsx)(F.a,{type:"submit",value:"submit",color:"primary",children:"Register"})]})})]})]})]}),Object(s.jsxs)(E.a,{isOpen:this.state.isPetIdModalOpen,toggle:this.toggleModalPetId,children:[Object(s.jsx)(T.a,{toggle:this.toggleModalPetId,children:"Owner Id"}),Object(s.jsx)(L.a,{children:this.props.uniqueId.uniqueId})]})]})}}]),a}(o.Component),H=a(208);function Y(e){return e.text.text.map((function(t,a){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row row-content",children:Object(s.jsx)("div",{className:"col-12 mx-auto p-2",children:Object(s.jsx)("div",{className:"flip-cardfeed ",children:Object(s.jsx)("div",{className:"flip-card-frontfeed rounded-lg",style:{backgroundColor:"white"},children:Object(s.jsxs)("h3",{className:"projectreason ",children:[Object(s.jsxs)("div",{style:{fontSize:"12px"},children:[Object(s.jsx)("img",{id:"music",className:"profileImg mr-2",src:"petbook/assets/default.png",alt:"",style:{width:"40px"}}),e.userInfo.userInfo.profileInfo.profileName?e.userInfo.userInfo.profileInfo.profileName:"Not Logged In"]}),Object(s.jsx)("div",{className:"text-center text-break text-wrap",style:{fontSize:"calc(1em + 1vw)",height:"auto!important"},children:t.text})]})})})})})},a)}))}var J=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={isModalOpen:!1,touched:{author:!1}},s.toggleModal=s.toggleModal.bind(Object(p.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(p.a)(s)),s}return Object(d.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(e.text)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"m-2",children:[Object(s.jsxs)(F.a,{type:"submit",color:"primary",outline:!0,className:"fa-lg",onClick:this.toggleModal,children:[Object(s.jsx)("i",{className:"fa fa-pencil"})," Post"]}),Object(s.jsx)("div",{className:"rectangle rounded",onClick:this.toggleModal}),Object(s.jsxs)(E.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(s.jsx)(T.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(s.jsx)(L.a,{children:Object(s.jsxs)(W.LocalForm,{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"text",children:"Comment"}),Object(s.jsx)(W.Control.textarea,{model:".text",id:"text",name:"text",rows:"6",className:"form-control",defaultValue:""})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)(H.a,{children:Object(s.jsx)(W.Control.file,{model:".file",id:"file",name:"file",placeholder:"Image",className:"form-control"})}),Object(s.jsx)(F.a,{type:"submit",value:"submit",color:"primary",children:"Submit"})]})]})})]})]})}}]),a}(o.Component),K=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={mainProfileName:"Keith",postText:"",postImage:""},s.handleInputChange=s.handleInputChange.bind(Object(p.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(p.a)(s)),s}return Object(d.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,s="checkbox"===t.type?t.checked:t.value;this.setState(Object(n.a)({},a,s))}},{key:"handleSubmit",value:function(e){e.preventDefault(),alert("Current state is: "+JSON.stringify(this.state)),this.setState({postText:"",postImage:""})}},{key:"render",value:function(){var e=this.props.feed.feed.map((function(e){return Object(s.jsx)("div",{className:" d-flex flex-column p-2 ",children:Object(s.jsx)("div",{className:"flip-cardfeed ",children:Object(s.jsx)("div",{className:"flip-card-frontfeed rounded-lg border feed",style:{backgroundColor:"white"},children:Object(s.jsxs)("h3",{className:"projectreason text-nowrap ",children:[Object(s.jsxs)("div",{style:{fontSize:"12px"},children:[Object(s.jsx)("img",{id:"profile",className:"profileImg mr-2",src:"petbook/assets/default.png",alt:e.profileImg,style:{width:"40px"}}),e.profileName]}),Object(s.jsx)("div",{className:"text-center text-break text-wrap",style:{fontSize:"calc(1em + 1vw)"},children:e.text})]})})})},e.id)}));return Object(s.jsxs)("div",{className:"container ",children:[Object(s.jsx)("div",{id:"postHead",className:"row row-content",style:{position:"relative"},children:Object(s.jsx)("div",{className:"col-12 mx-auto p-2 ",children:Object(s.jsx)("div",{className:"flip-cardfeed ",children:Object(s.jsx)("div",{className:"flip-card-frontfeed rounded-lg",style:{backgroundColor:"white"},children:Object(s.jsx)("h3",{className:"projectreason text-nowrap",children:Object(s.jsxs)("div",{style:{fontSize:"12px"},children:[Object(s.jsx)("img",{id:"music",className:"profileImg mr-2",src:"petbook/assets/default.png",alt:"",style:{width:"40px"}}),this.props.userInfo.userInfo.profileInfo.profileName?this.props.userInfo.userInfo.profileInfo.profileName:"Not Logged In",Object(s.jsx)("div",{className:"border",children:Object(s.jsx)(J,{postComment:this.props.postComment})})]})})})})})}),Object(s.jsxs)("div",{className:"border",children:[Object(s.jsx)(Y,{text:this.props.text,userInfo:this.props.userInfo}),e]})]})}}]),a}(o.Component),V=a(209),Z=a(210),X=a(211);function G(e){return e.uniqueId.uniqueId?Object(s.jsx)("div",{children:e.uniqueId.uniqueId}):Object(s.jsx)("div",{children:"Failed"})}function Q(e){return e.petcard.petcard.map((function(e){return Object(s.jsx)("div",{className:" container-container col col-lg-6 ",children:Object(s.jsx)("div",{className:"flip-card-container mx-auto pr-3 pr-md-0 mb-5",children:Object(s.jsxs)("div",{className:"flip-card ",children:[Object(s.jsxs)("div",{className:"flip-card-front rounded-lg text-center",style:{color:"black"},children:[Object(s.jsx)("div",{children:e.petcard.name}),Object(s.jsx)("img",{id:"profile",className:"profileImg ",src:"./assets/Hugo2.png",alt:"",style:{width:"70%"}})]}),Object(s.jsx)("div",{className:"flip-card-back rounded-lg ",children:Object(s.jsxs)(V.a,{style:{height:"100%",width:"100%"},className:"d-flex flex-column ",children:[Object(s.jsx)(Z.a,{style:{border:"1px solid #1b8eb1",backgroundColor:"#1b8eb1",color:"white"},children:Object(s.jsx)("h5",{children:"Pet Info"})}),Object(s.jsxs)(X.a,{children:[Object(s.jsxs)("div",{className:"d-flex flex-column  justify-content-around ",children:[Object(s.jsxs)(U.a,{className:" ",style:{backgroundColor:"white",border:"1px solid #1b8eb1"},children:[Object(s.jsx)(A.a,{md:4,className:"text-left d-flex align-items-center",style:{border:"1px solid #1b8eb1",backgroundColor:"#1b8eb1",color:"white"},children:"Type:"}),Object(s.jsx)(A.a,{className:"",children:e.petcard.animalType})]}),Object(s.jsxs)(U.a,{className:" ",style:{backgroundColor:"white",border:"1px solid #1b8eb1"},children:[Object(s.jsx)(A.a,{md:4,className:"text-left d-flex align-items-center",style:{border:"1px solid #1b8eb1",backgroundColor:"#1b8eb1",color:"white"},children:"Breed:"}),Object(s.jsx)(A.a,{className:"",children:e.petcard.breed})]}),Object(s.jsxs)(U.a,{className:" ",style:{backgroundColor:"white",border:"1px solid #1b8eb1"},children:[Object(s.jsx)(A.a,{md:4,className:"text-left d-flex align-items-center",style:{border:"1px solid #1b8eb1",backgroundColor:"#1b8eb1",color:"white"},children:"Main Color:"}),Object(s.jsx)(A.a,{className:"",children:e.petcard.mainColor})]}),Object(s.jsxs)(U.a,{className:" ",style:{backgroundColor:"white",border:"1px solid #1b8eb1"},children:[Object(s.jsx)(A.a,{md:4,className:"text-left d-flex align-items-center",style:{border:"1px solid #1b8eb1",backgroundColor:"#1b8eb1",color:"white"},children:"Secondary Color:"}),Object(s.jsx)(A.a,{className:"",children:e.petcard.secondaryColor})]}),Object(s.jsxs)(U.a,{className:" ",style:{backgroundColor:"white",border:"1px solid #1b8eb1"},children:[Object(s.jsx)(A.a,{md:4,className:"text-left d-flex align-items-center",style:{border:"1px solid #1b8eb1",backgroundColor:"#1b8eb1",color:"white"},children:"Animals Id: "}),Object(s.jsx)(A.a,{className:"",children:e.petId})]})]}),Object(s.jsx)("div",{className:"d-flex flex-column  justify-content-around ",children:Object(s.jsx)(U.a,{className:" d-flex flex-column align-items-stretch ",style:{border:"1px solid #1b8eb1",backgroundColor:"#1b8eb1",color:"white"},children:"About:"})}),Object(s.jsx)(U.a,{className:"d-flex flex-column align-items-stretch ",style:{height:"50%",width:"106.5%"},children:Object(s.jsx)(A.a,{className:"d-flex flex-column  align-items-stretch align-self-stretch",style:{backgroundColor:"white",border:"1px solid #1b8eb1"},children:e.petcard.animalType})})]})]})})]})})})}))}var $=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={isModalOpen:!1,touched:{author:!1}},s.toggleModal=s.toggleModal.bind(Object(p.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(p.a)(s)),s}return Object(d.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.addPetCard(f()(),e)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("i",{className:"fa fa-plus-circle fa-2x d-flex align-items-center",style:{color:"black",cursor:"pointer"},onClick:this.toggleModal}),Object(s.jsxs)(E.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(s.jsx)(T.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(s.jsx)(L.a,{children:Object(s.jsxs)(W.Form,{model:"petForm",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"name",md:2,children:"Name"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.text,{model:".name",id:"name",name:"name",placeholder:"Name",className:"form-control"}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".name",show:"touched",component:"div"})]})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"animalType",md:2,children:"Animal Type"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.text,{model:".animalType",id:"animalType",name:"animalType",placeholder:"Animal Type",className:"form-control"}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".animalType",show:"touched",component:"div"})]})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"breed",md:2,children:"Breed"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.text,{model:".breed",id:"breed",name:"breed",placeholder:"Breed",className:"form-control"}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".breed",show:"touched",component:"div"})]})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"mainColor",md:2,children:"Main Color"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.text,{model:".mainColor",id:"mainColor",name:"mainColor",placeholder:"Main Color",className:"form-control"}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".mainColor",show:"touched",component:"div"})]})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"secondaryColor",md:2,children:"Secondary Color"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.text,{model:".secondaryColor",id:"secondaryColor",name:"secondaryColor",placeholder:"Secondary Color",className:"form-control"}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".secondaryColor",show:"touched",component:"div"})]})]}),Object(s.jsx)(F.a,{type:"submit",value:"submit",color:"primary",children:"Submit"})]})})]})]})}}]),a}(o.Component),ee=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={profileImage:"",profileName:"",firstName:"",lastName:"",email:"",animalType:"",breed:"",mainColor:"",secondaryColor:""},s.handleInputChange=s.handleInputChange.bind(Object(p.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(p.a)(s)),s.handleChangeForImage=s.handleChangeForImage.bind(Object(p.a)(s)),s}return Object(d.a)(a,[{key:"handleSubmit",value:function(e){window.URL.createObjectURL(e.profileImage[0]);this.props.addUserInfo(this.props.uniqueId.uniqueId,"localImageUrl",e)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,s="checkbox"===t.type?t.checked:t.value;this.setState(Object(n.a)({},a,s))}},{key:"handleChangeForImage",value:function(e){var t=this,a=new FileReader,s=e.target.files[0];a.onloadend=function(){t.setState({profileImage:s,imagePreviewUrl:a.result})},a.readAsDataURL(s)}},{key:"render",value:function(){var e=this;return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("h5",{className:"col-2 ml-4 mt-2",children:this.props.userInfo.userInfo.profileInfo?Object(s.jsx)(u.b,{to:"/PublicProfile",style:{textDecoration:"none"},children:"View Public Profile"}):""})}),Object(s.jsxs)(W.Form,{model:"profileForm",onSubmit:function(t){return e.handleSubmit(t)},className:"ml-4",children:[Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"profileImage",md:2,children:"Owners Id:"}),Object(s.jsx)(A.a,{md:10,children:Object(s.jsx)(G,{uniqueId:this.props.uniqueId})})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"profileImage",md:2,children:"Profile Image"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.file,{model:".profileImage",id:"profileImage",name:"profileImage",placeholder:"Profile Image",className:"form-control"}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".profileImage",show:"touched",component:"div"})]})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"profileName",md:2,children:"Profile Name"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.text,{model:".profileName",id:"profileName",name:"profileName",placeholder:this.props.userInfo.userInfo.profileInfo?this.props.userInfo.userInfo.profileInfo.profileName:"",className:"form-control"}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".profileName",show:"touched",component:"div"})]})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"firstName",md:2,children:"First Name"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control"}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div"})]})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"LastName",md:2,children:"Last Name"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control"}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div"})]})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"email",md:2,children:"Email"}),Object(s.jsxs)(A.a,{md:10,children:[Object(s.jsx)(W.Control.text,{model:".email",id:"email",name:"email",placeholder:this.props.userInfo.userInfo.profileInfo?this.props.userInfo.userInfo.profileInfo.email:"",className:"form-control",disabled:!0}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".email",show:"touched",component:"div"})]})]}),Object(s.jsx)(U.a,{className:"form-group",children:Object(s.jsx)(A.a,{md:{size:10,offset:2},children:Object(s.jsx)(F.a,{type:"submit",value:"submit",color:"primary",children:"Save"})})}),Object(s.jsxs)(U.a,{className:"form-group mx-auto align-items-center",children:[Object(s.jsx)("h2",{className:"mr-2",style:{cursor:"default"},children:"Pets"}),Object(s.jsx)($,{addPetCard:this.props.addPetCard}),Object(s.jsx)(A.a,{className:"mx-auto "})]})]}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row row-content justify-content-around",style:{color:"black"},children:Object(s.jsx)(Q,{petcard:this.props.petcard,uniqueId:this.props.uniqueId})})})]})}}]),a}(o.Component);function te(e){var t=e.userInfo.userInfo.profileInfo.profileName;return e.text.text.map((function(e){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row row-content",children:Object(s.jsx)("div",{className:"col-12 mx-auto p-2",children:Object(s.jsx)("div",{className:"flip-cardfeed ",children:Object(s.jsx)("div",{className:"flip-card-frontfeed rounded-lg",style:{backgroundColor:"white"},children:Object(s.jsxs)("h3",{className:"projectreason text-nowrap",children:[Object(s.jsxs)("div",{style:{fontSize:"12px"},children:[Object(s.jsx)("img",{id:"music",className:"profileImg",src:"./assets/Hugo2.png",alt:"",style:{width:"40px"}}),t||"Not Logged In"]}),Object(s.jsx)("div",{className:"text-center",children:e.text})]})})})})})})}))}var ae=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={mainProfileName:"Keith",postText:"",postImage:""},s.handleInputChange=s.handleInputChange.bind(Object(p.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(p.a)(s)),s}return Object(d.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,s="checkbox"===t.type?t.checked:t.value;this.setState(Object(n.a)({},a,s))}},{key:"handleSubmit",value:function(e){e.preventDefault(),alert("Current state is: "+JSON.stringify(this.state)),this.setState({postText:"",postImage:""})}},{key:"render",value:function(){console.log(this.props.userInfo.userInfo.profileInfo.profileName);var e=this.props.petcard.petcard.map((function(e){return Object(s.jsx)("div",{className:" container-container col col-lg-6 ",children:Object(s.jsx)("div",{className:"flip-card-container mx-auto pr-3 pr-md-0 mb-5",children:Object(s.jsxs)("div",{className:"flip-card ",children:[Object(s.jsxs)("div",{className:"flip-card-front rounded-lg text-center",style:{color:"black"},children:[Object(s.jsx)("div",{children:e.petcard.name}),Object(s.jsx)("img",{id:"profile",className:"profileImg ",src:"./assets/Hugo2.png",alt:"",style:{width:"70%"}})]}),Object(s.jsx)("div",{className:"flip-card-back rounded-lg",children:Object(s.jsxs)("div",{style:{color:"black"},className:"d-flex flex-column justify-content-center ",children:[Object(s.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(s.jsxs)("span",{children:["Type:",e.petcard.animalType]})}),Object(s.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:["Breed: ",e.petcard.breed]}),Object(s.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:["Main Color: ",e.petcard.mainColor]}),Object(s.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:["Secondary Color: ",e.petcard.secondaryColor]}),Object(s.jsxs)("div",{className:"d-flex align-items-end justify-content-center",children:["Animals Id: ",e.petId]})]})})]})})})}));this.props.feed.feed.map((function(e){return Object(s.jsx)("div",{className:" d-flex flex-column p-2 ",children:Object(s.jsx)("div",{className:"flip-cardfeed ",children:Object(s.jsx)("div",{className:"flip-card-frontfeed rounded-lg border",style:{backgroundColor:"white"},children:Object(s.jsxs)("h3",{className:"projectreason text-nowrap",children:[Object(s.jsxs)("div",{style:{fontSize:"12px",backgroundColor:"white"},children:[Object(s.jsx)("img",{id:"profile",className:"profileImg",src:e.profileImg,alt:e.profileImg,style:{width:"40px"}}),e.profileName]}),Object(s.jsx)("div",{className:"text-center",children:e.text})]})})})},e.id)}));return Object(s.jsxs)("div",{className:"container ",children:[Object(s.jsx)("div",{className:"row row-content-noborder row-content-topbord",children:Object(s.jsxs)("div",{className:"col-md-18 mx-auto",children:[Object(s.jsx)("h3",{className:" text-nowrap text-center m-3","data-aos":"fade-up","data-aos-duration":"1000",style:{color:"black"},children:"Hello I am"}),Object(s.jsx)("img",{className:"rounded-circle me mx-auto d-block","data-aos":"fade-up","data-aos-duration":"1000",src:"petbook/assets/default.png",alt:"",id:"profile",style:{width:"300px",height:"300px"}}),Object(s.jsx)("h1",{className:"name text-nowrap  text-center mb-5","data-aos":"fade-up","data-aos-duration":"1000",style:{color:"black"},children:this.props.userInfo.userInfo.profileInfo.profileName}),Object(s.jsx)("p",{className:"intro text-no-wroap text-center","data-aos":"fade-up","data-aos-duration":"1000",children:"And I am a web developer who creates user friendly functional websites."})]})}),Object(s.jsxs)("div",{className:" row border justify-content-center",children:[e,Object(s.jsx)(te,{text:this.props.text,userInfo:this.props.userInfo})]})]})}}]),a}(o.Component),se=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row row-content",children:Object(s.jsx)("div",{className:"col-12 mx-auto mt-5 text-center",children:Object(s.jsx)("h1",{children:"Please Register First"})})})})}}]),a}(o.Component),oe=a(212),re=a(213),le=a(113),ce=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).handleClose=function(){s.setState({isEmailSentModalOpen:!1})},s.handleClose2=function(){s.setState({isEmailNotSentModalOpen:!1})},s.state={isEmailSentModalOpen:!1},s.toggleModalEmailSent=s.toggleModalEmailSent.bind(Object(p.a)(s)),s.handleClose=s.handleClose.bind(Object(p.a)(s)),s.toggleModalEmailNotSent=s.toggleModalEmailNotSent.bind(Object(p.a)(s)),s.handleClose2=s.handleClose2.bind(Object(p.a)(s)),s}return Object(d.a)(a,[{key:"handleSubmit",value:function(e){if(this.props.petcard.petcard[0].petId+this.props.userInfo.userInfo.userId===e.petId){le.send("service_6u1iluk","template_h94ookz",{from_name:"PetProfile",to_name:"keithandkaylee@gmail.com",subject:"PetFound",message_html:"Your Pet Was Found"},"user_HqDyxgYEp2AfHpa0ga1B3"),this.toggleModalEmailSent()}else this.toggleModalEmailNotSent();this.props.resetLostPetForm()}},{key:"toggleModalEmailSent",value:function(){var e=this;this.setState({isEmailSentModalOpen:!0},(function(){setTimeout(e.handleClose,3e3)}))}},{key:"toggleModalEmailNotSent",value:function(){var e=this;this.setState({isEmailNotSentModalOpen:!0},(function(){setTimeout(e.handleClose2,3e3)}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"text-center m-3",children:"Lost Pet Submission"}),Object(s.jsxs)(oe.a,{children:[Object(s.jsx)(U.a,{children:Object(s.jsx)(A.a,{children:Object(s.jsxs)(W.Form,{model:"lostPetForm",onSubmit:function(t){return e.handleSubmit(t)},className:"mx-auto",children:[Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"petId",md:2,children:"Enter Lost Pet ID:"}),Object(s.jsxs)(A.a,{md:8,children:[Object(s.jsx)(W.Control.text,{model:".petId",id:"petId",name:"petId",placeholder:"Enter Lost Pet ID",className:"form-control",validators:{}}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".petId",show:"touched",component:"div",messages:{}})]})]}),Object(s.jsxs)(U.a,{className:"form-group",children:[Object(s.jsx)(_.a,{htmlFor:"phoneNumber",md:2,children:"Phone Number:"}),Object(s.jsxs)(A.a,{md:8,children:[Object(s.jsx)(W.Control.text,{model:".phoneNumber",id:"phoneNumber",name:"phoneNumber",placeholder:"Phone Number",className:"form-control",validators:{}}),Object(s.jsx)(W.Errors,{className:"text-danger",model:".phoneNumber",show:"touched",component:"div"})]})]}),Object(s.jsx)(U.a,{className:"form-group",children:Object(s.jsx)(A.a,{md:{size:10,offset:2},children:Object(s.jsx)(F.a,{type:"submit",value:"submit",color:"primary",children:"Submit Lost Pet"})})})]})})}),Object(s.jsx)(U.a,{children:Object(s.jsx)(A.a,{children:Object(s.jsx)(V.a,{className:"m-2 lostPetCard",children:Object(s.jsxs)(X.a,{children:[Object(s.jsx)(Z.a,{children:"What Happens When Your Pet Is Lost?"}),Object(s.jsx)(re.a,{children:"When you register you get a unique owners ID. When you sign your pet up they will have one as well. Your identity chip will have both. When someone submits a lost ID the ID will be matched to your profile and an email will be sent out to you with the persons phone number who found your pet."})]})})})})]}),Object(s.jsxs)(E.a,{isOpen:this.state.isEmailSentModalOpen,toggle:this.toggleModalEmailSent,children:[Object(s.jsx)(T.a,{toggle:this.toggleModalEmailSent,children:"Notification"}),Object(s.jsx)(L.a,{children:"Email was sent to the owner."})]}),Object(s.jsxs)(E.a,{isOpen:this.state.isEmailNotSentModalOpen,toggle:this.toggleModalEmailNotSent,children:[Object(s.jsx)(T.a,{toggle:this.toggleModalEmailNotSent,children:"Notification"}),Object(s.jsx)(L.a,{children:"Pet Id does not match!"})]})]})}}]),a}(o.Component),ne="ADD_UNIQUEID",ie="ADD_FEED",de="ADD_POST",me="ADD_USERINFO",je="ADD_PETCARD",he={addUniqueId:function(e){return function(e){return{type:ne,payload:e}}(e)},addFeed:function(e,t,a,s){return{type:ie,payload:e}},postComment:function(e){return function(e,t){return{type:de,payload:{text:e,username:t}}}(e)},addUserInfo:function(e,t,a,s,o,r,l,c,n){return{type:me,payload:{userId:e,userPick:t,profileInfo:a,isRegistered:s}}},addPetCard:function(e,t){return function(e,t){return{type:je,payload:{petId:e,petcard:t}}}(e,t)},resetLostPetForm:function(){return W.actions.reset("lostPetForm")}},be=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={feed:K},s}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)(z,{addUniqueId:this.props.addUniqueId,uniqueId:this.props.uniqueId,addUserInfo:this.props.addUserInfo,userInfo:this.props.userInfo}),Object(s.jsxs)(h.d,{children:[Object(s.jsx)(h.b,{exact:!0,path:"/",render:function(){return e.props.userInfo.userInfo.profileName?Object(s.jsx)(h.a,{to:"/PetProfile"}):Object(s.jsx)(h.a,{to:"/"})}}),Object(s.jsx)(h.b,{path:"/PetProfile",render:function(){return Object(s.jsx)(ee,{postComment:e.props.postComment,feed:e.props.feed,petcard:e.props.petcard,uniqueId:e.props.uniqueId,addPetCard:e.props.addPetCard,addUserInfo:e.props.addUserInfo,userInfo:e.props.userInfo})}}),Object(s.jsx)(h.b,{path:"/PublicProfile",render:function(){return Object(s.jsx)(ae,{text:e.props.text,uniqueId:e.props.uniqueId,addUserInfo:e.props.addUserInfo,resetProfileForm:e.props.resetProfileForm,petcard:e.props.petcard,addPetCard:e.props.addPetCard,userInfo:e.props.userInfo,feed:e.props.feed})}}),Object(s.jsx)(h.b,{path:"/Shelters",children:Object(s.jsx)(se,{})}),Object(s.jsx)(h.b,{path:"/LostPets",render:function(){return Object(s.jsx)(ce,Object(n.a)({resetLostPetForm:e.props.resetLostPetForm,petcard:e.props.petcard,uniqueId:e.props.uniqueId,userInfo:e.props.userInfo},"petcard",e.props.petcard))}}),Object(s.jsx)(h.b,{path:"/Feed",render:function(){return Object(s.jsx)(K,{postComment:e.props.postComment,text:e.props.text,feed:e.props.feed,userInfo:e.props.userInfo})}}),Object(s.jsx)(h.a,{to:"/LostPets"})]})]})}}]),a}(o.Component),pe=Object(h.g)(Object(b.connect)((function(e){return{uniqueId:e.uniqueId,feed:e.feed,text:e.text,userInfo:e.userInfo,petcard:e.petcard}}),he)(be)),ue=a(15),xe=a(29),fe=a(114),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{uniqueId:"I am default"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(ue.a)(Object(ue.a)({},e),{},{uniqueId:t.payload});default:return e}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{text:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(ue.a)(Object(ue.a)({},e),{},{text:e.text.concat(t.payload).reverse()});default:return e}},Ne=[{id:0,profileImg:"./assets/Piper2.png",profileName:"Keith",text:"What a magnificent view!"},{id:1,profileImg:"./assets/Piper2.png",profileName:"Marley ",text:"Go Out On a Limb"},{id:2,profileImg:"./assets/Piper2.png",profileName:"Darrel",text:"Cut To The Chase"},{id:3,profileImg:"./assets/Piper2.png",profileName:"Evanth",text:"On the Same Page"},{id:4,profileImg:"./assets/Piper2.png",profileName:"Lily ",text:"Mountain Out of a Molehill"},{id:5,profileImg:"./assets/Piper2.png",profileName:"Celine ",text:"Short End of the Stick"},{id:6,profileImg:"./assets/Piper2.png",profileName:"Jayson ",text:"Burst Your Bubble"},{id:7,profileImg:"./assets/Piper2.png",profileName:"Zain ",text:"Foaming At The Mouth"},{id:8,profileImg:"./assets/Piper2.png",profileName:"Jayson ",text:"Burst Your Bubble"},{id:9,profileImg:"./assets/Piper2.png",profileName:"Zain ",text:"Foaming At The Mouth"},{id:10,profileImg:"./assets/Piper2.png",profileName:"Jayson ",text:"Burst Your Bubble"},{id:11,profileImg:"./assets/Piper2.png",profileName:"Zain ",text:"Foaming At The Mouth"}],ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{feed:Ne},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:t.payload;return Object(ue.a)(Object(ue.a)({},e),{},{feed:t.payload});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userInfo:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(ue.a)(Object(ue.a)({},e),{},{userInfo:t.payload});default:return e}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{petcard:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(ue.a)(Object(ue.a)({},e),{},{petcard:e.petcard.concat(t.payload)});default:return e}},Ce={profileImage:"",profileName:"",firstName:"",lastName:"",email:""},we={petId:"",phoneNumber:""},Se={name:"",animalType:"",breed:"",mainColor:"",secondaryColor:""},Pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.compose,ke=Object(xe.createStore)(Object(xe.combineReducers)(Object(ue.a)({uniqueId:Oe,text:ge,feed:ve,userInfo:Ie,petcard:ye},Object(W.createForms)({profileForm:Ce,lostPetForm:we,petForm:Se}))),Pe(Object(xe.applyMiddleware)(fe.a)));var Me=function(){return Object(s.jsx)(b.Provider,{store:ke,children:Object(s.jsx)(u.a,{children:Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(pe,{})})})})},Fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,218)).then((function(t){var a=t.getCLS,s=t.getFID,o=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),s(e),o(e),r(e),l(e)}))};a(188),a(189);c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(Me,{})}),document.getElementById("root")),Fe()}},[[190,1,2]]]);
//# sourceMappingURL=main.8d6ad95f.chunk.js.map