(this.webpackJsonpuniv_fitnesstrackr_react_starter=this.webpackJsonpuniv_fitnesstrackr_react_starter||[]).push([[0],{68:function(e,t,r){},69:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){},80:function(e,t,r){},81:function(e,t,r){"use strict";r.r(t);var n=r(7),c=r(1),a=r(0),s=r.n(a),i=r(18),o=r.n(i),u=r(5),l=r.n(u),j=r(8),b=r(17),h=r.n(b),d="http://localhost:4000/api";function p(e,t){return O.apply(this,arguments)}function O(){return(O=Object(j.a)(l.a.mark((function e(t,r){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(d,"/users/register"),{username:t,password:r});case 3:return n=e.sent,c=n.data,localStorage.setItem("data.token",c.token),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function x(e,t){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(l.a.mark((function e(t,r){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(d,"/users/login"),{username:t,password:r});case 3:return n=e.sent,c=n.data,console.log("data",c),localStorage.setItem("data.token",c.token),e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=Object(j.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(d,"/users/me"),{headers:{Authorization:"Bearer ".concat(t)}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}r(39);var g=r(16),y=r(9),k=(r(68),function(e){e.currentUser,e.setCurrentUser;var t=e.userToken,r=e.setUserToken;return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"Fitness Trackr"}),t?Object(c.jsx)("button",{id:"logout-btn",onClick:function(e){e.preventDefault(),localStorage.removeItem("token"),r("")},children:"Logout"}):null]})}),T=r(85),w=r(83),S=r(84),C=(r(69),function(e){var t=e.userToken,r=e.setUserToken,s=Object(a.useState)(""),i=Object(n.a)(s,2),o=i[0],u=i[1],b=Object(a.useState)(""),h=Object(n.a)(b,2),d=h[0],p=h[1],O=Object(a.useState)(""),v=Object(n.a)(O,2),f=v[0],m=v[1],g=Object(a.useState)(!0),k=Object(n.a)(g,2),C=k[0],N=k[1];return Object(a.useEffect)((function(){N(!0)}),[t]),t?C?Object(c.jsxs)(S.a,{variant:"success",onClose:function(){return N(!1)},dismissible:!0,children:[Object(c.jsx)(S.a.Heading,{children:"Success!"}),Object(c.jsx)("p",{children:"Successful Login Congratulations!"})]}):Object(c.jsx)(y.a,{to:"/home"}):Object(c.jsxs)(T.a,{className:"login",onSubmit:function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(""),p(""),e.prev=3,o&&d){e.next=7;break}return m("Incorrect Username or Password"),e.abrupt("return");case 7:return e.next=9,x(o,d);case 9:n=e.sent,console.log("data",n),n.token?(localStorage.setItem("token",n.token),r(n.token)):n.message?m(n.message):m("Incorrect Username or Password"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0),m(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(c.jsxs)(T.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(T.a.Label,{children:"Username: "}),Object(c.jsx)(T.a.Control,{value:o,type:"username",placeholder:"Username",onChange:function(e){var t=e.target.value;u(t)}}),f?Object(c.jsx)("div",{children:f}):null]}),Object(c.jsxs)(T.a.Group,{controlId:"formBasicPassword",children:[Object(c.jsx)(T.a.Label,{children:"Password: "}),Object(c.jsx)(T.a.Control,{value:d,type:"password",placeholder:"Password",onChange:function(e){var t=e.target.value;p(t)}})]}),Object(c.jsx)(T.a.Group,{controlId:"formBasicCheckbox",children:Object(c.jsx)(w.a,{variant:"primary",type:"submit",children:"Login"})})]})}),N=(r(76),function(e){var t=e.userToken;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{id:"navbar",children:[Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/home",activeClassName:"current",children:"HOME"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/routines",activeClassName:"current",children:"ROUTINES"})}),t&&Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/myRoutines",activeClassName:"current",children:"MY ROUTINES"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/activities",activeClassName:"current",children:"ACTIVITIES"})}),!t&&Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/login",activeClassName:"current",children:"LOGIN"})}),!t&&Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/register",activeClassName:"current",children:"REGISTER"})})]})})})}),I=(r(77),function(e){var t=e.handleUserRegister,r=e.userToken,s=e.setUserToken,i=Object(a.useState)(""),o=Object(n.a)(i,2),u=o[0],b=o[1],h=Object(a.useState)(""),d=Object(n.a)(h,2),O=d[0],x=d[1],v=Object(a.useState)(""),f=Object(n.a)(v,2),m=f[0],g=f[1],k=Object(a.useState)(!0),C=Object(n.a)(k,2),N=C[0],I=C[1];return Object(a.useEffect)((function(){I(!0)}),[r]),r?N?Object(c.jsxs)(S.a,{variant:"success",onClose:function(){return I(!1)},dismissible:!0,children:[Object(c.jsx)(S.a.Heading,{children:"Success!"}),Object(c.jsx)("p",{children:"Successful Registration, Congratulations!"})]}):Object(c.jsx)(y.a,{to:"/home"}):Object(c.jsxs)(T.a,{className:"register",onSubmit:function(){var e=Object(j.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(""),x(""),e.prev=3,g(""),e.next=7,p(u,O);case 7:r=e.sent,console.log("data",r),r.token?s(r.token):g(r.message),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),children:[m?Object(c.jsx)("div",{children:m}):null,Object(c.jsxs)(T.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)("div",{id:"register-instructions",children:"Username must be 6 or more characters and password should have a minimum of 8 characters"}),Object(c.jsx)(T.a.Label,{children:"Username: "}),Object(c.jsx)(T.a.Control,{value:u,type:"username",placeholder:"Username",onChange:function(e){var t=e.target.value;b(t)}})]}),Object(c.jsxs)(T.a.Group,{controlId:"formBasicPassword",children:[Object(c.jsx)(T.a.Label,{children:"Password: "}),Object(c.jsx)(T.a.Control,{value:O,type:"password",placeholder:"Password",onChange:function(e){var t=e.target.value;x(t)}})]}),Object(c.jsx)(T.a.Group,{controlId:"formBasicCheckbox",children:Object(c.jsx)(w.a,{onClick:t,variant:"primary",type:"submit",children:"Register"})})]})}),A=function(e){e.userToken;return Object(c.jsx)("div",{id:"home-page",children:Object(c.jsx)("h1",{children:"Welcome To Fitness Tracker!"})})},R=r(17),U="http://localhost:4000/api";function E(){return(E=Object(j.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.get("".concat(U,"/routines"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function G(){return(G=Object(j.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.get("".concat(U,"/users/routines"),{headers:{Authorization:"Bearer ".concat(t)}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function B(e,t,r,n){return D.apply(this,arguments)}function D(){return(D=Object(j.a)(l.a.mark((function e(t,r,n,c){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.post("".concat(U,"/routines"),{name:t,goal:r,isPublic:n},{headers:{Authorization:"Bearer ".concat(c)}});case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var L=r(86),F=(r(78),function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),r=t[0],i=t[1];return Object(a.useEffect)((function(){(function(){return E.apply(this,arguments)})().then((function(e){i(e)})).catch((function(e){console.error(e)}))}),[]),console.log("routines",r),Object(c.jsxs)("div",{className:"public-routines",children:[Object(c.jsx)("h2",{id:"routine-title",children:"Routines"}),r.map((function(e){return Object(c.jsx)(L.a,{id:"routine-card",style:{width:"23rem"},children:Object(c.jsxs)(L.a.Body,{children:[Object(c.jsx)("h2",{id:"routine-card-title",children:"Routines"}),Object(c.jsxs)(L.a.Title,{id:"creator-name",children:["Creator Name: ",e.creatorName]}),Object(c.jsxs)(L.a.Text,{children:["Routine Name: ",e.name]}),Object(c.jsxs)(L.a.Text,{children:["Goal:",e.goal]}),Object(c.jsx)("h4",{id:"activity-routine-title",children:"Activities For Routines"}),e.activities.map((function(e,t){return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsxs)(L.a.Title,{id:"activity-name",children:["Activity Name: ",e.name]}),Object(c.jsxs)(L.a.Text,{children:["Activity Duration: ",e.duration]}),Object(c.jsxs)(L.a.Text,{children:["Activity Count: ",e.count]})]},t)}))]})},e.id)}))]})}),P=r(23),_="http://localhost:4000/api";function z(){return(z=Object(j.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(_,"/activities"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function M(e,t,r){return H.apply(this,arguments)}function H(){return(H=Object(j.a)(l.a.mark((function e(t,r,n){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(_,"/activities"),{name:t,description:r},{headers:{Authorization:"Bearer ".concat(n)}});case 3:return c=e.sent,a=c.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}r(79);var J=function(e){var t=e.userToken,r=Object(a.useState)([]),s=Object(n.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)(""),b=Object(n.a)(u,2),h=b[0],d=b[1],p=Object(a.useState)(""),O=Object(n.a)(p,2),x=O[0],v=O[1],f=Object(a.useState)(""),m=Object(n.a)(f,2),g=m[0],y=m[1],k=Object(a.useState)(!0),S=Object(n.a)(k,2);S[0],S[1];return Object(a.useEffect)((function(){(function(){return z.apply(this,arguments)})().then((function(e){o(e)})).catch((function(e){console.error(e)}))}),[t]),Object(c.jsxs)(T.a,{onSubmit:function(){var e=Object(j.a)(l.a.mark((function e(r){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),d(""),v(""),e.prev=3,e.next=6,M(h,x,t);case 6:if(n=e.sent,console.log("data",n),"error"!==n.name){e.next=11;break}return y("Activitiy Already Exists!"),e.abrupt("return");case 11:o([].concat(Object(P.a)(i),[n])),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0),y(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),className:"activities",children:[Object(c.jsx)("h2",{id:"activities-title",children:"Activities"}),t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(T.a.Group,{controlId:"activityName",children:[Object(c.jsx)(T.a.Label,{children:"Activity Name: "}),Object(c.jsx)(T.a.Control,{value:h,type:"Name",placeholder:"Activity Name",onChange:function(e){var t=e.target.value;d(t)}}),g?Object(c.jsx)("div",{children:g}):null]}),Object(c.jsxs)(T.a.Group,{controlId:"activityDescription",children:[Object(c.jsx)(T.a.Label,{children:"Description"}),Object(c.jsx)(T.a.Control,{value:x,type:"Description",placeholder:"Description",onChange:function(e){var t=e.target.value;v(t)}}),Object(c.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]})]}):null,i.map((function(e){return Object(c.jsx)(L.a,{id:"activity-card",style:{width:"23rem"},children:Object(c.jsxs)(L.a.Body,{children:[Object(c.jsx)(L.a.Title,{id:"activity-name",children:Object(c.jsx)("h3",{children:"Activity: "})}),Object(c.jsxs)(L.a.Text,{children:["Activity Name: ",e.name]}),Object(c.jsxs)(L.a.Text,{children:["Description: ",e.description]})]})},e.id)}))]})},V=(r(80),function(e){var t=e.userToken,r=e.user,i=Object(a.useState)([]),o=Object(n.a)(i,2),u=o[0],b=o[1],h=Object(a.useState)(""),d=Object(n.a)(h,2),p=d[0],O=d[1],x=Object(a.useState)(""),v=Object(n.a)(x,2),f=v[0],m=v[1],g=Object(a.useState)(!1),y=Object(n.a)(g,2),k=y[0];y[1];return Object(a.useEffect)((function(){t&&function(e){return G.apply(this,arguments)}(t).then((function(e){console.log("routines",e),b(e)})).catch((function(e){console.error(e)}))}),[t]),Object(c.jsxs)(T.a,{onSubmit:function(){var e=Object(j.a)(l.a.mark((function e(r){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),O(""),m(""),e.prev=3,e.next=6,B(p,f,k,t);case 6:n=e.sent,console.log("updateActivity",n),b([].concat(Object(P.a)(u),[n])),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),className:"my-routines",children:[t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(T.a.Group,{controlId:"routineName",children:[Object(c.jsx)(T.a.Label,{children:"Routine Name: "}),Object(c.jsx)(T.a.Control,{value:p,type:"Name",placeholder:"Routine Name",onChange:function(e){var t=e.target.value;O(t)}})]}),Object(c.jsxs)(T.a.Group,{controlId:"routineGoal",children:[Object(c.jsx)(T.a.Label,{children:"Goal"}),Object(c.jsx)(T.a.Control,{value:f,type:"Description",placeholder:"Description",onChange:function(e){var t=e.target.value;m(t)}}),Object(c.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]})]}):null,u.map((function(e){if(r.id===e.creatorId)return Object(c.jsx)(L.a,{id:"my-routine-card",style:{width:"23rem"},children:Object(c.jsxs)(L.a.Body,{children:[Object(c.jsx)(L.a.Title,{id:"rout-name",children:Object(c.jsx)("h3",{children:"My Routines: "})}),Object(c.jsxs)(L.a.Text,{children:["Routine Name: ",e.name]}),Object(c.jsxs)(L.a.Text,{children:["Routine Goal: ",e.goal]}),Object(c.jsxs)(L.a.Text,{children:["Creator Name: ",e.creatorName]}),Object(c.jsx)("h3",{id:"activities-title",children:"Activities For Routines"}),e.activities&&e.activities.map((function(e,t){return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsxs)(L.a.Title,{id:"activity-name",children:["Activity Name: ",e.name]}),Object(c.jsxs)(L.a.Text,{children:["Activity Duration: ",e.duration]}),Object(c.jsxs)(L.a.Text,{children:["Activity Count: ",e.count]})]},t)}))]})},e.id)}))]})}),W=function(){var e=Object(a.useState)({}),t=Object(n.a)(e,2),r=t[0],s=t[1],i=Object(a.useState)(""),o=Object(n.a)(i,2),u=o[0],l=o[1],j=Object(a.useState)([]),b=Object(n.a)(j,2),h=b[0],d=b[1],p=Object(a.useState)([]),O=Object(n.a)(p,2),x=O[0],v=O[1],m=Object(a.useState)([]),T=Object(n.a)(m,2),w=T[0],S=T[1];return Object(a.useEffect)((function(){localStorage.getItem("token")&&(l(localStorage.getItem("token")),f(localStorage.getItem("token")).then((function(e){console.log("users",e),s(e)})).catch((function(e){console.error(e)})))}),[]),Object(a.useEffect)((function(){u&&f(u).then((function(e){console.log("users",e),s(e)})).catch((function(e){console.error(e)}))}),[u]),Object(c.jsxs)(g.a,{children:[Object(c.jsxs)("div",{id:"App",children:[Object(c.jsx)(k,{userToken:u,setUserToken:l}),Object(c.jsx)(N,{userToken:u,setUserToken:l})]}),Object(c.jsx)(y.b,{path:"/login",children:Object(c.jsx)(C,{user:r,setUser:s,userToken:u,setUserToken:l})}),Object(c.jsx)(y.b,{path:"/register",children:Object(c.jsx)(I,{userToken:u,setUserToken:l})}),Object(c.jsx)(y.b,{path:"/home",children:Object(c.jsx)(A,{userToken:u,setUserToken:l})}),Object(c.jsx)(y.b,{path:"/routines",children:Object(c.jsx)(F,{allRoutines:h,setAllRoutines:d})}),Object(c.jsx)(y.b,{path:"/activities",children:Object(c.jsx)(J,{userToken:u,allActivities:x,setAllActivites:v})}),Object(c.jsx)(y.b,{path:"/myRoutines",children:Object(c.jsx)(V,{user:r,userToken:u,myRoutines:w,setMyRoutines:S})})]})};o.a.render(Object(c.jsx)(W,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.6ef3b469.chunk.js.map