(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(25)},23:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),c=t(9),o=t.n(c),u=t(3),i=t(27),l="/api/persons",m=function(){return i.a.get(l).then(function(e){return e.data})},d=function(e){return i.a.post(l,e).then(function(e){return e.data})},s=function(e,n){return i.a.put("".concat(l,"/").concat(e),n).then(function(e){return e.data})},f=function(e){return i.a.delete("".concat(l,"/").concat(e)).then(function(e){return e.data})},b=(t(23),function(e){return r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",null,"filter show with: ",r.a.createElement("input",{onChange:e.handleChange})))}),p=function(e){return r.a.createElement("p",null,e.person.name," ",e.person.number," ",r.a.createElement("button",{onClick:function(){window.confirm("Delete ".concat(e.person.name,"?"))&&e.onerase(e.person)}},"delete"))},h=function(e){return r.a.createElement("div",null,e.persons.map(function(n){return r.a.createElement(p,{key:n.id,person:n,onerase:e.onerase})}))},E=function(e){return r.a.createElement("form",{onSubmit:e.onPersonAdded},r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:e.onNameChanged})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:e.onNumberChanged})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},v=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},g=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),l=i[0],p=i[1],g=Object(a.useState)(""),w=Object(u.a)(g,2),j=w[0],O=w[1],C=Object(a.useState)(""),y=Object(u.a)(C,2),S=y[0],k=y[1],N=Object(a.useState)(null),A=Object(u.a)(N,2),D=A[0],P=A[1],I=Object(a.useState)(!1),J=Object(u.a)(I,2),R=J[0],x=J[1],B=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;x(n),P(e),setTimeout(function(){return P(null)},t)};Object(a.useEffect)(function(){m().then(function(e){c(e)})},[]);var T=""===S?t:t.filter(function(e){return e.name.includes(S)||e.number.includes(S)});return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:D,type:R}),r.a.createElement(b,{handleChange:function(e){return k(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(E,{onNameChanged:function(e){return p(e.target.value)},onNumberChanged:function(e){return O(e.target.value)},onPersonAdded:function(e){var n=t.find(function(e){return e.name===l});void 0===n?""!==j?d({name:l,number:j}).then(function(e){c(t.concat(e)),B("Added ".concat(l),"success")}):alert("Empty number"):j!==n.number?window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&s(n.id,{name:l,number:j}).then(function(e){c(t.map(function(t){return t.id!==n.id?t:e})),B("Updated ".concat(l),"success")}):alert("".concat(l," is already added to phonebook")),e.preventDefault()}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(h,{persons:T,onerase:function(e){f(e.id).then(function(){c(t.filter(function(n){return n.id!==e.id})),B("Removed ".concat(e.name),"success")}).catch(function(n){B("Information of ".concat(e.name," was already been removed from server"),"error")})}}))};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(g,null))}},[[10,2,1]]]);
//# sourceMappingURL=main.a372faa5.chunk.js.map