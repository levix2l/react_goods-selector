(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),o=c(7),r=c(4),i=c(5),l=c(9),a=c(8),u=c(1),d=c.n(u),j=c(6),b=c.n(j),h=(c(14),c(15),c(0)),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(l.a)(c,e);var t=Object(a.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={selected:[]},e.selectItem=function(t){e.setState((function(e){return{selected:[].concat(Object(o.a)(e.selected),[t])}}))},e.removeItem=function(t){e.setState((function(e){return{selected:e.selected.filter((function(e){return e!==t}))}}))},e.removeItems=function(){e.setState({selected:[]})},e.getItems=function(){var t=e.state.selected;return 1===t.length?"".concat(t.join(", ")," is selected"):"".concat(t.join(", ")," are selected")},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selected;return Object(h.jsxs)("div",{className:"box",children:[Object(h.jsxs)("h1",{className:"title",children:[0!==t.length?this.getItems():"No goods selected"," ",0!==t.length&&Object(h.jsx)("button",{type:"button",className:"button is-danger",onClick:this.removeItems,children:"X"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"content",children:m.map((function(c){return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"block",children:[Object(h.jsx)("span",{className:b()({"tag is-success is-light":t.includes(c)}),children:c})," ",t.includes(c)?Object(h.jsx)("button",{type:"button",onClick:function(){e.removeItem(c)},children:"Remove"}):Object(h.jsx)("button",{type:"button",onClick:function(){e.selectItem(c)},children:"Select"})]})},c)}))})})]})}}]),c}(d.a.Component),g=f;s.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.560805fe.chunk.js.map