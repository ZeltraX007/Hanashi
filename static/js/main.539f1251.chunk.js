(this["webpackJsonpecommerce-template"]=this["webpackJsonpecommerce-template"]||[]).push([[0],{40:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),i=n.n(a),s=n(15),l=n(6),o=n(43),u=n(13),d=n(31),b=(n(64),n(44)),m=n.n(b),p=n(3),h="SET_CURRENT_USER",j={currentUser:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload});default:return e}},O={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},f=n(54),v=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(f.a)(e),[Object(p.a)(Object(p.a)({},t),{},{quantity:1})])},x=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e}))},y={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.TOGGLE_CART_HIDDEN:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case O.ADD_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:v(e.cartItems,t.payload)});case O.REMOVE_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:x(e.cartItems,t.payload)});case O.CLEAR_ITEM_FROM_CART:return Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},k={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return t.type,e},E={collections:[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U={key:"root",storage:m.a,whitelist:["cart"]},I=Object(u.c)({user:g,cart:w,directory:N,shop:C}),T=Object(d.a)(U,I);var S=Object(u.d)(T,u.a.apply(void 0,[])),M=Object(d.b)(S),A=(n(67),n(10)),R=n.n(A),B=n(17),P=n(23),D=n(24),_=n(26),G=n(25),L=n(5),H=n(18),q=n(4),W=Object(q.a)([function(e){return e.directory}],(function(e){return e.sections})),V=(n(69),n(1)),J=Object(L.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.history,a=e.linkUrl,i=e.match;return Object(V.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(a))},children:[Object(V.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(V.jsxs)("div",{className:"content",children:[Object(V.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(V.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),z=(n(72),Object(q.b)({sections:W})),F=Object(l.b)(z)((function(e){var t=e.sections;return Object(V.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(H.a)(e,["id"]);return Object(V.jsx)(J,Object(p.a)({},n),t)}))})})),Q=(n(73),function(){return Object(V.jsx)("div",{className:"homepage",children:Object(V.jsx)(F,{})})}),X=Object(q.a)([function(e){return e.shop}],(function(e){return e.collections})),K=(n(74),function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,c=Object(H.a)(e,["children","isGoogleSignIn","inverted"]);return Object(V.jsx)("button",Object(p.a)(Object(p.a)({className:" ".concat(r?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),{},{children:t}))}),Y=function(){return{type:O.TOGGLE_CART_HIDDEN}},Z=function(e){return{type:O.ADD_ITEM,payload:e}},$=(n(75),Object(l.b)(null,(function(e){return{addItem:function(t){return e(Z(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,a=t.imageUrl;return Object(V.jsxs)("div",{className:"collection-item",children:[Object(V.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(V.jsxs)("div",{className:"collection-footer",children:[Object(V.jsxs)("span",{className:"name",children:[" ",r," "]}),Object(V.jsxs)("span",{className:"price",children:[" ",c," "]})]}),Object(V.jsx)(K,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),ee=(n(76),function(e){var t=e.title,n=e.items;return Object(V.jsxs)("div",{className:"collection-preview",children:[Object(V.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(V.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(V.jsx)($,{item:e},e.id)}))})]})}),te=(n(77),Object(q.b)({collections:X})),ne=Object(l.b)(te)((function(e){var t=e.collections;return Object(V.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(H.a)(e,["id"]);return Object(V.jsx)(ee,Object(p.a)({},n),t)}))})})),re=function(e){e.collections;return Object(V.jsx)("div",{className:"shop-page",children:Object(V.jsx)(ne,{})})},ce=function(e){return e.cart},ae=Object(q.a)([ce],(function(e){return e.cartItems})),ie=Object(q.a)([ce],(function(e){return e.hidden})),se=Object(q.a)([ae],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),le=Object(q.a)([ae],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),oe=(n(78),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:O.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(Z(t))},removeItem:function(t){return e(function(e){return{type:O.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,c=e.removeItem,a=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(V.jsxs)("div",{className:"checkout-item",children:[Object(V.jsx)("div",{className:"image-container",children:Object(V.jsx)("img",{src:i,alt:"item"})}),Object(V.jsx)("span",{className:"name",children:a}),Object(V.jsxs)("span",{className:"quantity",children:[Object(V.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276e"}),Object(V.jsx)("span",{className:"value",children:l}),Object(V.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(V.jsx)("span",{className:"price",children:s}),Object(V.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),ue=(n(79),Object(q.b)({cartItems:ae,total:le})),de=Object(l.b)(ue)((function(e){var t=e.cartItems,n=e.total;return Object(V.jsxs)("div",{className:"checkout-page",children:[Object(V.jsxs)("div",{className:"checkout-header",children:[Object(V.jsx)("div",{className:"header-block",children:Object(V.jsx)("span",{children:"Product"})}),Object(V.jsx)("div",{className:"header-block",children:Object(V.jsx)("span",{children:"Description"})}),Object(V.jsx)("div",{className:"header-block",children:Object(V.jsx)("span",{children:"Quantity"})}),Object(V.jsx)("div",{className:"header-block",children:Object(V.jsx)("span",{children:"Price"})}),Object(V.jsx)("div",{className:"header-block",children:Object(V.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(V.jsx)(oe,{cartItem:e},e.id)})),Object(V.jsx)("div",{className:"total",children:Object(V.jsxs)("span",{children:["TOTAL: $",n]})})]})})),be=n(22),me=(n(80),function(e){var t=e.handleChange,n=e.label,r=Object(H.a)(e,["handleChange","label"]);return Object(V.jsxs)("div",{className:"group",children:[Object(V.jsx)("input",Object(p.a)({className:"form-input",onChange:t},r)),n?Object(V.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})}),pe=n(27),he=n.n(pe),je=(n(81),n(85),function(){var e=Object(B.a)(R.a.mark((function e(t,n){var r,c,a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=Oe.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(!1!==e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(p.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());he.a.initializeApp({apiKey:"AIzaSyCZ1veQMvQwwkb1ka0-zVm2nrk7OgiyDmU",authDomain:"react-ecommerce-caf86.firebaseapp.com",databaseURL:"https://react-ecommerce-caf86.firebaseio.com",projectId:"react-ecommerce-caf86",storageBucket:"react-ecommerce-caf86.appspot.com",messagingSenderId:"522930649756",appId:"1:522930649756:web:f062c083dee844c8440b59",measurementId:"G-M8X1HNCPV0"});var ge=he.a.auth(),Oe=he.a.firestore(),fe=new he.a.auth.GoogleAuthProvider;fe.setCustomParameters({prompt:"select_account"});var ve=function(){return ge.signInWithPopup(fe)},xe=(he.a,n(87),function(e){Object(_.a)(n,e);var t=Object(G.a)(n);function n(e){var r;return Object(P.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(B.a)(R.a.mark((function e(t){var n,c,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,c=n.email,a=n.password,e.prev=2,e.next=5,ge.signInWithEmailAndPassword(c,a);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(be.a)({},c,n))},r.state={email:"",password:""},r}return Object(D.a)(n,[{key:"render",value:function(){return Object(V.jsxs)("div",{className:"sign-in",children:[Object(V.jsx)("h2",{children:"I already have an account"}),Object(V.jsx)("span",{children:"Sign in with your email and password"}),Object(V.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(V.jsx)(me,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(V.jsx)(me,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(V.jsxs)("div",{className:"buttons",children:[Object(V.jsx)(K,{type:"submit",children:" Sign In "}),Object(V.jsx)(K,{onClick:ve,isGoogleSignIn:!0,children:" Sign in with Google "})]})]})]})}}]),n}(c.a.Component)),ye=(n(40),function(e){Object(_.a)(n,e);var t=Object(G.a)(n);function n(){var e;return Object(P.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(B.a)(R.a.mark((function t(n){var r,c,a,i,s,l,o;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.displayName,a=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("Passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,ge.createUserWithEmailAndPassword(a,i);case 8:return l=t.sent,o=l.user,t.next=12,je(o,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(be.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(D.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return Object(V.jsxs)("div",{className:"sign-up",children:[Object(V.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(V.jsx)("span",{children:"Sign up with your email and password"}),Object(V.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(V.jsx)(me,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(V.jsx)(me,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(V.jsx)(me,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(V.jsx)(me,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(V.jsx)(K,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(c.a.Component)),we=(n(88),function(){return Object(V.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(V.jsx)(xe,{}),Object(V.jsx)(ye,{})]})}),ke=n(46),Ne=n.n(ke);function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Ue=r.createElement("desc",null,"Created with Sketch."),Ie=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function Te(e,t){var n=e.title,c=e.titleId,a=Ce(e,["title","titleId"]);return r.createElement("svg",Ee({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"Group"):n?r.createElement("title",{id:c},n):null,Ue,Ie)}var Se=r.forwardRef(Te);n.p,n(89);function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var Re=r.createElement("g",null),Be=r.createElement("g",null),Pe=r.createElement("g",null),De=r.createElement("g",null),_e=r.createElement("g",null),Ge=r.createElement("g",null),Le=r.createElement("g",null),He=r.createElement("g",null),qe=r.createElement("g",null),We=r.createElement("g",null),Ve=r.createElement("g",null),Je=r.createElement("g",null),ze=r.createElement("g",null),Fe=r.createElement("g",null),Qe=r.createElement("g",null);function Xe(e,t){var n=e.title,c=e.titleId,a=Ae(e,["title","titleId"]);return r.createElement("svg",Me({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Re,Be,Pe,De,_e,Ge,Le,He,qe,We,Ve,Je,ze,Fe,Qe)}var Ke=r.forwardRef(Xe),Ye=(n.p,Object(q.b)({itemCount:se})),Ze=Object(l.b)(Ye,(function(e){return{toggleCartHidden:function(){return e(Y())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(V.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(V.jsx)(Ke,{className:"shopping-icon"}),Object(V.jsxs)("span",{className:"item-count",children:[" ",n," "]})]})})),$e=(n(90),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(V.jsxs)("div",{className:"cart-item",children:[Object(V.jsx)("img",{src:n,alt:"cart item"}),Object(V.jsxs)("div",{className:"item-details",children:[Object(V.jsx)("span",{className:"name",children:c}),Object(V.jsxs)("span",{className:"price",children:[a," x $",r]})]})]})}),et=(n(91),Object(q.b)({cartItems:ae})),tt=Object(L.g)(Object(l.b)(et)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(V.jsxs)("div",{className:"cart-dropdown",children:[Object(V.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(V.jsx)($e,{item:e},e.id)})):Object(V.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(V.jsx)(K,{onClick:function(){n.push("/checkout"),r(Y())},children:"GO TO CHECKOUT"})]})}))),nt=Object(q.a)([function(e){return e.user}],(function(e){return e.currentUser})),rt=(n(92),Object(q.b)({currentUser:nt,hidden:ie})),ct=Object(l.b)(rt)((function(e){var t=e.currentUser,n=e.hidden;return Object(V.jsxs)("div",{className:"header",children:[Object(V.jsx)(s.b,{className:"logo-container",to:"/",children:Object(V.jsx)(Se,{className:"logo"})}),Object(V.jsxs)("div",{className:"options",children:[Object(V.jsx)(s.b,{className:"option",to:"/shop",children:"SHOP"}),Object(V.jsxs)("div",{class:"dropdown",children:[Object(V.jsx)("button",{class:"dropbtn",children:"Dropdown"}),Object(V.jsxs)("div",{class:"dropdown-content",children:[Object(V.jsx)("a",{href:"/shop",children:"Link 1"}),Object(V.jsx)("a",{href:"#",children:"Link 2"}),Object(V.jsx)("a",{href:"#",children:"Link 3"})]})]}),Object(V.jsx)(s.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(V.jsx)("div",{className:"option",onClick:function(){return ge.signOut()},children:"SIGN OUT"}):Object(V.jsx)(s.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(V.jsx)(Ze,{})]}),n?null:Object(V.jsx)(tt,{}),Object(V.jsxs)("p",{className:"king",children:[" ",Object(V.jsx)(Ne.a,{})," "]})]})})),at=(n(97),function(e){Object(_.a)(n,e);var t=Object(G.a)(n);function n(){var e;Object(P.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ge.onAuthStateChanged(function(){var t=Object(B.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,je(n);case 3:t.sent.onSnapshot((function(t){e(Object(p.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(V.jsxs)("div",{children:[Object(V.jsx)(ct,{}),Object(V.jsxs)(L.d,{children:[Object(V.jsx)(L.b,{exact:!0,path:"/",component:Q}),Object(V.jsx)(L.b,{path:"/shop",component:re}),Object(V.jsx)(L.b,{exact:!0,path:"/checkout",component:de}),Object(V.jsx)(L.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(V.jsx)(L.a,{to:"/"}):Object(V.jsx)(we,{})}})]})]})}}]),n}(c.a.Component)),it=Object(q.b)({currentUser:nt}),st=Object(l.b)(it,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:h,payload:e}}(t))}}}))(at);i.a.render(Object(V.jsx)(l.a,{store:S,children:Object(V.jsx)(s.a,{children:Object(V.jsx)(o.a,{persistor:M,children:Object(V.jsx)(st,{})})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.539f1251.chunk.js.map