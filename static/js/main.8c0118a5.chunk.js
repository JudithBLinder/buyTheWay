(this.webpackJsonpbuytheway=this.webpackJsonpbuytheway||[]).push([[0],{177:function(e,a,t){},189:function(e,a,t){e.exports=t(419)},194:function(e,a,t){},195:function(e,a,t){},199:function(e,a,t){},217:function(e,a,t){},218:function(e,a,t){},414:function(e,a,t){},415:function(e,a,t){},416:function(e,a,t){},419:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(34),o=t.n(l),c=(t(194),t(6)),s=t(7),i=t(9),u=t(8),m=t(10),d=(t(195),t(426)),p=t(427),h=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{bg:"dark",variant:"dark"},r.a.createElement(d.a.Brand,{href:"/"},"Home"),r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"/map"},"Look Around"),r.a.createElement(p.a.Link,{href:"/profilePage"},"profile"),r.a.createElement(p.a.Link,{href:"/OrderPage"},"order"))))}}]),t}(n.Component),v=t(41),E=t(425),f=t(421),g=t(185),b=(t(199),t(57)),y=t.n(b),j=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={username:{value:""},email:{value:""},password:{value:""}},e.orderHandler=function(a){a.preventDefault();var t=!1,n={userName:e.state.username.value,mail:e.state.email.value,password:e.state.password.value};y.a.get("https://buy-the-way-a829f.firebaseio.com/users.json").then((function(e){var a=[];for(var r in e.data)a.push(e.data[r].userName);for(var l in a)a[l]===n.userName&&(t=!0);t?alert("User already exist"):(console.log(n),y.a.post("https://buy-the-way-a829f.firebaseio.com/users.json",n).then((function(e){})).catch((function(e){console.log(e)})))}))},e.usernameChangedHandler=function(a){var t=Object(v.a)({},e.state.username);t.value=a.target.value,e.setState({username:t})},e.emailChangedHandler=function(a){var t=Object(v.a)({},e.state.id);t.value=a.target.value,e.setState({email:t})},e.passwordChangedHandler=function(a){var t=Object(v.a)({},e.state.id);t.value=a.target.value,e.setState({password:t})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"RegisterForm1"},r.a.createElement("div",{className:"Headline"},"Register"),r.a.createElement(E.a,null,r.a.createElement(E.a.Group,{controlId:"formBasicUsername"},r.a.createElement(E.a.Label,null,"username"),r.a.createElement(E.a.Control,{type:"text",placeholder:"Enter username",value:this.state.username.value,onChange:function(a){return e.usernameChangedHandler(a)}})),r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Label,null,"Email address"),r.a.createElement(E.a.Control,{type:"email",placeholder:"Enter email",value:this.state.email.value,onChange:function(a){return e.emailChangedHandler(a)}})),r.a.createElement(E.a.Group,{controlId:"formBasicPassword"},r.a.createElement(E.a.Label,null,"Password"),r.a.createElement(E.a.Control,{type:"password",placeholder:"Password",value:this.state.password.value,onChange:function(a){return e.passwordChangedHandler(a)}})),r.a.createElement(E.a.Row,null,r.a.createElement("div",{className:"Buttonss"},r.a.createElement(f.a,{variant:"primary",type:"submit",onClick:this.orderHandler},"Submit")),r.a.createElement("p",null,"already a member?"),r.a.createElement(g.a,null,r.a.createElement("div",{className:"Buttonss"},r.a.createElement(f.a,{variant:"primary",type:"submit",onClick:this.props.goToLogin},"Login"))))))}}]),t}(n.Component),w=(t(217),t(218),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={username:{value:""},password:{value:""}},e.orderHandler=function(a){a.preventDefault();var t=!1,n=e.state.username.value,r=e.state.password.value;y.a.get("https://buy-the-way-a829f.firebaseio.com/users.json").then((function(e){var a=[];for(var l in e.data)a.push([e.data[l].userName,e.data[l].password]);for(var o=0;o<a.length;)a[o][0]===n&&a[o][1]===r&&(t=!0),o++;t?console.log("confirmed"):alert("invalid details")}))},e.usernameChangedHandler=function(a){var t=Object(v.a)({},e.state.username);t.value=a.target.value,e.setState({username:t})},e.passwordChangedHandler=function(a){var t=Object(v.a)({},e.state.id);t.value=a.target.value,e.setState({password:t})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},r.a.createElement("div",{className:"Headline"},"Login"),r.a.createElement(E.a,null,r.a.createElement(E.a.Group,{controlId:"formBasicUsername"},r.a.createElement(E.a.Label,null,"username"),r.a.createElement(E.a.Control,{type:"text",placeholder:"Enter username",value:this.state.username.value,onChange:function(a){return e.usernameChangedHandler(a)}})),r.a.createElement(E.a.Group,{controlId:"formBasicPassword"},r.a.createElement(E.a.Label,null,"Password"),r.a.createElement(E.a.Control,{type:"password",placeholder:"Password",value:this.state.password.value,onChange:function(a){return e.passwordChangedHandler(a)}})),r.a.createElement(f.a,{variant:"primary",type:"submit",onClick:this.orderHandler},"Login")))}}]),t}(n.Component)),O=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).goToLogin=function(a){e.props.history.push("/auth/login")},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginForm"},r.a.createElement(w,null))}}]),t}(n.Component),C=t(51),k=(t(414),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={markers:[{lat:31.24387,lng:34.793991}],initLat:null,initLng:null,selectedMark:null},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition((function(e){console.log("Latitude is :",e.coords.latitude),console.log("Longitude is :",e.coords.longitude)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C.GoogleMap,{defaultZoom:15,defaultCenter:{lat:31.24387,lng:34.793991}},this.state.markers.map((function(a,t){return r.a.createElement(C.Marker,{key:t,position:{lat:a.lat,lng:a.lng},onClick:function(){e.setState({selectedMark:a})}})})),this.state.selectedMark&&r.a.createElement(C.InfoWindow,{onCloseClick:function(){e.setState({selectedMark:null})},position:{lat:this.state.selectedMark.lat,lng:this.state.selectedMark.lng}},r.a.createElement("div",null,r.a.createElement("p",null,"hello"),r.a.createElement("h2",null,"Reason: ",this.state.selectedMark.reason),r.a.createElement("h3",null,"Phone:",this.state.selectedMark.phoneNumber),r.a.createElement("h3",null,"where: ",this.state.selectedMark.where),r.a.createElement("a",null,"full request")))))}}]),t}(n.Component)),L=Object(C.withScriptjs)(Object(C.withGoogleMap)(k));function N(){return r.a.createElement("div",{style:{width:"100vw",height:"90vh"}},r.a.createElement(L,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyCz75H6TUotNy-TcGON0wmw5pjOM2quK6s"),loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))}t(415);var H=t(422),I=t(423),M=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).goToLogin=function(a){e.props.history.push("/auth/login")},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H.a,{className:"justify-content-md-center"},r.a.createElement(g.a,{xs:!0,lg:"2"}),r.a.createElement(g.a,{md:"auto"},r.a.createElement("h1",null,"on the way")),r.a.createElement(g.a,{xs:!0,lg:"2"})),r.a.createElement(I.a,{fluid:!0},r.a.createElement(H.a,null,r.a.createElement(g.a,null,"this web site is for people that cant get out of there house...")),r.a.createElement(H.a,null,r.a.createElement(j,{goToLogin:this.goToLogin}))))}}]),t}(n.Component),x=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={hasRequest:!1},e}return Object(s.a)(t,[{key:"render",value:function(){if(this.state.hasRequest)f.a;else f.a;return r.a.createElement("div",null,null)}}]),t}(n.Component),B=t(424),P=t(184),S=(t(177),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={firstName:"",lastName:"",PhoneNumber:"",Reason:"",items:[""]},e.addItem=function(){console.log("sdasd");var a=e.state.items;a.push(""),e.setState({items:a}),console.log(e.state.items)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Label,null,"First name"),r.a.createElement(E.a.Control,{type:"text",placeholder:"Enter name"})),r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Label,null,"Last name"),r.a.createElement(E.a.Control,{type:"text",placeholder:"Enter last name"})),r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Label,null,"Phone number"),r.a.createElement(E.a.Control,{type:"text",placeholder:"Enter phone number"})),r.a.createElement(E.a.Group,{controlId:"exampleForm.SelectCustom"},r.a.createElement(E.a.Label,null,"Reason"),r.a.createElement(E.a.Control,{as:"select",custom:!0},r.a.createElement("option",null,"In isolation"),r.a.createElement("option",null,"In risk group"),r.a.createElement("option",null,"other"))),r.a.createElement(E.a.Group,null,r.a.createElement(E.a.Label,null,"groceries"),this.state.items.map((function(a,t){return r.a.createElement("div",{key:t},r.a.createElement(E.a.Row,null,r.a.createElement(B.a,null,r.a.createElement(P.a,{placeholder:"Item","aria-label":"Item","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"orderButton"},r.a.createElement(B.a.Append,null,r.a.createElement(f.a,{variant:"outline-secondary",onClick:e.addItem},"Add"),r.a.createElement(f.a,{variant:"outline-secondary"},"Remove"))))))}))),r.a.createElement(f.a,{variant:"primary",type:"submit"},"Submit")))}}]),t}(n.Component)),G=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"OrderForm"},r.a.createElement(S,null))}}]),t}(n.Component),A=function(e){return e.children},R=(t(416),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement(h,null),r.a.createElement("main",{className:"Content"},this.props.children))}}]),t}(n.Component)),T=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exect:!0,path:"/OrderPage",component:G}),r.a.createElement(m.a,{exect:!0,path:"/profilePage",component:x}),r.a.createElement(m.a,{exect:!0,path:"/auth/login",component:O}),r.a.createElement(m.a,{path:"/map",exect:!0,component:N}),r.a.createElement(m.a,{path:"/",component:M}),r.a.createElement(m.a,{path:"/auth/register",component:j}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=t(109);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F.a,null,r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[189,1,2]]]);
//# sourceMappingURL=main.8c0118a5.chunk.js.map