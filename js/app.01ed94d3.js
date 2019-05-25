(function(t){function e(e){for(var a,c,i=e[0],s=e[1],u=e[2],p=0,d=[];p<i.length;p++)c=i[p],r[c]&&d.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-phonebookapp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"37f1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"small-container",attrs:{id:"app"}},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("h1",[t._v("Welcome to Your Vue.js Phone Book App")]),a("contacts-table",{attrs:{contacts:t.contacts},on:{"delete:contact":t.deleteContact,"edit:contact":t.updateContact}}),a("contact-form",{on:{"add:contact":t.addContact}})],1)},o=[],c=n("75fc"),i=(n("96cf"),n("3b8d")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contacts-table"}},[t.contacts.length<1?n("p",{staticClass:"empty-table"},[t._v("No contacts")]):n("table",[t._m(0),n("tbody",t._l(t.contacts,function(e){return n("tr",{key:e.id},[t.editing===e.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"contact.name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}})]):n("td",[t._v(t._s(e.name))]),t.editing===e.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"contact.email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(n){n.target.composing||t.$set(e,"email",n.target.value)}}})]):n("td",[t._v(t._s(e.email))]),t.editing===e.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"contact.phone"}],attrs:{type:"tel",size:"20",minlength:"10",maxlength:"10"},domProps:{value:e.phone},on:{input:function(n){n.target.composing||t.$set(e,"phone",n.target.value)}}})]):n("td",[t._v(t._s(e.phone))]),t.editing===e.id?n("td",[n("button",{on:{click:function(n){return t.editContact(e)}}},[t._v("Save")]),n("button",{staticClass:"muted-button",on:{click:function(e){t.editing=null}}},[t._v("Cancel")])]):n("td",[n("button",{on:{click:function(n){return t.editMode(e.id)}}},[t._v("Edit")]),n("button",{on:{click:function(n){return t.$emit("delete:contact",e.id)}}},[t._v("Delete")])])])}),0)])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Contact Name")]),n("th",[t._v("Contact Email")]),n("th",[t._v("Contact Number")]),n("th",[t._v("Actions")])])])}],l=(n("7f7f"),{name:"contacts-table",props:{contacts:Array},data:function(){return{editing:null}},methods:{editMode:function(t){this.editing=t},editContact:function(t){""!==this.name&&""!==this.email&&""!==this.phone&&(this.$emit("edit:contact",t.id,t),this.editing=null)}}}),p=l,d=(n("c780"),n("2877")),m=Object(d["a"])(p,s,u,!1,null,"7fdf9a43",null),f=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contact-form"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onsubmit(e)}}},[n("label",[t._v("Contact name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],ref:"first",class:{"has-error":t.submitting&&t.invalidName},attrs:{type:"text"},domProps:{value:t.contact.name},on:{focus:t.clearStatus,keypress:t.clearStatus,input:function(e){e.target.composing||t.$set(t.contact,"name",e.target.value)}}}),n("label",[t._v("Contact Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"}],class:{"has-error":t.submitting&&t.invalidEmail},attrs:{type:"text"},domProps:{value:t.contact.email},on:{focus:t.clearStatus,input:function(e){e.target.composing||t.$set(t.contact,"email",e.target.value)}}}),n("label",[t._v("Contact Number")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.phone,expression:"contact.phone"}],class:{"has-error":t.submitting&&t.invalidNumber},attrs:{type:"tel",minlength:"10",maxlength:"10",pattern:"[0-9]{10}"},domProps:{value:t.contact.phone},on:{focus:t.clearStatus,input:function(e){e.target.composing||t.$set(t.contact,"phone",e.target.value)}}}),t.error&&t.submitting?n("p",{staticClass:"error-message"},[t._v("❗Please fill out all required fields")]):t._e(),t.success?n("p",{staticClass:"success-message"},[t._v("✅ Contact successfully added")]):t._e(),n("button",[t._v("Add Contact")])])])},v=[],g={name:"contact-form",data:function(){return{submitting:!1,error:!1,success:!1,contact:{name:"",email:"",phone:""}}},methods:{onsubmit:function(){this.clearStatus(),this.submitting=!0,this.invalidName||this.invalidEmail||this.invalidNumber?this.error=!0:(this.$emit("add:contact",this.contact),this.contact={name:"",email:"",phone:""},this.error=!1,this.success=!0,this.submitting=!1,this.$refs.first.focus())},clearStatus:function(){this.success=!1,this.error=!1}},computed:{invalidName:function(){return""===this.contact.name},invalidEmail:function(){return""===this.contact.email},invalidNumber:function(){return""===this.contact.phone}}},b=g,y=(n("eb3c"),Object(d["a"])(b,h,v,!1,null,"721556e6",null)),_=y.exports,x={name:"app",components:{ContactsTable:f,ContactForm:_},data:function(){return{contacts:[]}},mounted:function(){this.getContacts()},methods:{getContacts:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users?length=5");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,this.contacts=n,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(){return t.apply(this,arguments)}return e}(),addContact:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,this.contacts=[].concat(Object(c["a"])(this.contacts),[a]),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(e){return t.apply(this,arguments)}return e}(),deleteContact:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e),{method:"DELETE"});case 3:this.contacts=this.contacts.filter(function(t){return t.id!==e}),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(e){return t.apply(this,arguments)}return e}(),updateContact:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e),{method:"PUT",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,this.contacts=this.contacts.map(function(t){return t.id===e?r:t}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,10]])}));function e(e,n){return t.apply(this,arguments)}return e}()}},w=x,C=(n("034f"),Object(d["a"])(w,r,o,!1,null,null,null)),j=C.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(j)}}).$mount("#app")},"64a9":function(t,e,n){},"780e":function(t,e,n){},c780:function(t,e,n){"use strict";var a=n("37f1"),r=n.n(a);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},eb3c:function(t,e,n){"use strict";var a=n("780e"),r=n.n(a);r.a}});
//# sourceMappingURL=app.01ed94d3.js.map