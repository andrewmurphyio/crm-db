(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-912bee28"],{"11e9":function(t,e,a){var n=a("52a7"),r=a("4630"),o=a("6821"),i=a("6a99"),s=a("69a8"),c=a("c69a"),u=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?u:function(t,e){if(t=o(t),e=i(e,!0),c)try{return u(t,e)}catch(a){}if(s(t,e))return r(!n.f.call(t,e),t[e])}},"47fe":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit-company"},[a("CompanyEdit",{attrs:{company:t.company},on:{updated:t.saveDetails}})],1)},r=[],o=(a("c5f6"),a("7514"),a("d4ec")),i=a("bee2"),s=a("99de"),c=a("7e84"),u=a("262e"),p=(a("cadf"),a("551c"),a("097d"),a("9ab4")),l=a("60a3"),f=a("4bb5"),d=a("798a"),m=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"saveDetails",value:function(t){this.updateCompany(t),this.$router.push("/")}},{key:"company",get:function(){var t=this;return this.companies.find(function(e){return e.id===t.id})}}]),e}(l["c"]);p["a"]([Object(l["b"])(Number)],m.prototype,"id",void 0),p["a"]([f["a"]],m.prototype,"companies",void 0),p["a"]([f["b"]],m.prototype,"updateCompany",void 0),m=p["a"]([Object(l["a"])({components:{CompanyEdit:d["a"]}})],m);var v=m,b=v,y=a("2877"),h=Object(y["a"])(b,n,r,!1,null,null,null);h.options.__file="EditCompany.vue";e["default"]=h.exports},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,a){var n=a("d3f4"),r=a("8b97").set;t.exports=function(t,e,a){var o,i=e.constructor;return i!==a&&"function"==typeof i&&(o=i.prototype)!==a.prototype&&n(o)&&r&&r(t,o),t}},"798a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-edit-company"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[t._v("Address")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",attrs:{id:"address",placeholder:"Enter address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"logo"}},[t._v("Logo")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.logo,expression:"logo"}],staticClass:"form-control",attrs:{type:"text",id:"logo",placeholder:"Enter logo"},domProps:{value:t.logo},on:{input:function(e){e.target.composing||(t.logo=e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.saveDetails}},[t._v("Save")])])},r=[],o=(a("7f7f"),a("d4ec")),i=a("bee2"),s=a("99de"),c=a("7e84"),u=a("262e"),p=a("9ab4"),l=a("60a3"),f=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.name="",t.address="",t.logo="",t}return Object(u["a"])(e,t),Object(i["a"])(e,[{key:"mounted",value:function(){void 0!==this.company&&(this.id=this.company.id,this.name=this.company.name,this.address=this.company.address,this.logo=this.company.logo)}},{key:"saveDetails",value:function(){this.$emit("updated",{id:this.id,name:this.name,address:this.address,logo:this.logo})}}]),e}(l["c"]);p["a"]([Object(l["b"])()],f.prototype,"company",void 0),f=p["a"]([Object(l["a"])({})],f);var d=f,m=d,v=a("2877"),b=Object(v["a"])(m,n,r,!1,null,null,null);b.options.__file="CompanyEdit.vue";e["a"]=b.exports},"8b97":function(t,e,a){var n=a("d3f4"),r=a("cb7c"),o=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return o(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:o}},9093:function(t,e,a){var n=a("ce10"),r=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},aa77:function(t,e,a){var n=a("5ca1"),r=a("be13"),o=a("79e5"),i=a("fdef"),s="["+i+"]",c="​",u=RegExp("^"+s+s+"*"),p=RegExp(s+s+"*$"),l=function(t,e,a){var r={},s=o(function(){return!!i[t]()||c[t]()!=c}),u=r[t]=s?e(f):i[t];a&&(r[a]=u),n(n.P+n.F*s,"String",r)},f=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(p,"")),t};t.exports=l},bee2:function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}a.d(e,"a",function(){return r})},c5f6:function(t,e,a){"use strict";var n=a("7726"),r=a("69a8"),o=a("2d95"),i=a("5dbc"),s=a("6a99"),c=a("79e5"),u=a("9093").f,p=a("11e9").f,l=a("86cc").f,f=a("aa77").trim,d="Number",m=n[d],v=m,b=m.prototype,y=o(a("2aeb")(b))==d,h="trim"in String.prototype,g=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():f(e,3);var a,n,r,o=e.charCodeAt(0);if(43===o||45===o){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var i,c=e.slice(2),u=0,p=c.length;u<p;u++)if(i=c.charCodeAt(u),i<48||i>r)return NaN;return parseInt(c,n)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(y?c(function(){b.valueOf.call(a)}):o(a)!=d)?i(new v(g(e)),a,m):g(e)};for(var _,O=a("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;O.length>E;E++)r(v,_=O[E])&&!r(m,_)&&l(m,_,p(v,_));m.prototype=b,b.constructor=m,a("2aba")(n,d,m)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-912bee28.2cd877ae.js.map