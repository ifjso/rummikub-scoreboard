(this["webpackJsonprummikub-scoreboard"]=this["webpackJsonprummikub-scoreboard"]||[]).push([[0],{154:function(e,n,t){e.exports=t(308)},159:function(e,n,t){},307:function(e,n,t){},308:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(122),i=t.n(c),o=t(26),u=(t(159),t(27)),l=t(34),s=t(312),f=t(313),m=Object(u.e)((function(e){var n=e.location.pathname,t=Object(r.useState)(n),c=Object(l.a)(t,2),i=c[0],u=c[1],m=Object(r.useCallback)((function(e,n){var t=n.to;return u(t)}),[]);return a.a.createElement(s.a,{fixed:"top",size:"massive",icon:!0,borderless:!0,inverted:!0},a.a.createElement(s.a.Item,{as:o.b,to:"/",active:"/"===i,onClick:m},a.a.createElement("img",{src:"logo192.png",alt:"\ud648",style:{fontSize:"0.8rem"}})),a.a.createElement(s.a.Item,{as:o.b,to:"/histories",active:"/histories"===i,onClick:m},a.a.createElement(f.a,{name:"history"})))})),v=t(28),d=t.n(v),b=t(83),h=t(45),p=t(1),g=t(2),j=t(311),w=t(57);function E(){var e=Object(p.a)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 80vw;\n  margin: 0 auto;\n  display: flex;\n"]);return E=function(){return e},e}var O=g.b.div(E()),y=function(e){var n=e.children,t=Object(w.a)(e,["children"]);return a.a.createElement(O,t,n)};function x(){var e=Object(p.a)(["\n  ","\n"]);return x=function(){return e},e}function k(){var e=Object(p.a)(["\n  ","\n"]);return k=function(){return e},e}function z(){var e=Object(p.a)(["\n  width: 50%;\n  border: none;\n  outline: none;\n  font-size: 10vw;\n  padding: 1.5vw;\n  line-height: 7vw;\n  background: #121212;\n  cursor: pointer;\n"]);return z=function(){return e},e}var C=Object(g.a)(z()),P=Object(g.b)(o.b)(k(),C),S=g.b.button(x(),C),L=function(e){var n=e.to,t=Object(w.a)(e,["to"]);return n?a.a.createElement(P,Object.assign({to:n},t)):a.a.createElement(S,t)};function N(){var e=Object(p.a)(["\n  margin: 0 auto;\n  padding: 1vw;\n  font-size: 6vw;\n  line-height: 2em;\n"]);return N=function(){return e},e}function T(){var e=Object(p.a)(["\n  width: 28%;\n"]);return T=function(){return e},e}function I(){var e=Object(p.a)(["\n      flex-direction: row-reverse;\n    "]);return I=function(){return e},e}function R(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n\n  ","\n"]);return R=function(){return e},e}function B(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: wrap;\n  padding-bottom: 5vh;\n"]);return B=function(){return e},e}function J(){var e=Object(p.a)(["\n  width: 26vw;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n\n  h1 {\n    margin: 0;\n    text-align: center;\n    font-size: 28vw;\n    line-height: 24vw;\n  }\n"]);return J=function(){return e},e}var M=g.b.div(J()),W=g.b.div(B()),A=g.b.div(R(),(function(e){return e.reversed&&Object(g.a)(I())})),F=g.b.div(T()),U=g.b.span(N()),$=function(e){var n=e.reversed,t=e.user,r=t.name,c=t.picture;return a.a.createElement(A,{reversed:n},a.a.createElement(F,{reversed:n,picture:c}),a.a.createElement(U,null,r))},_=a.a.memo((function(e){var n=e.reversed,t=void 0!==n&&n,r=e.user,c=e.onClick,i=void 0===c?function(e){return e}:c;return a.a.createElement(M,null,a.a.createElement(L,{onClick:function(){return i(r,1)}},a.a.createElement(f.a,{name:"plus",size:"small",color:"grey"})),a.a.createElement(W,null,a.a.createElement($,{reversed:t,user:r}),a.a.createElement("h1",null,r.score)),a.a.createElement(L,{onClick:function(){return i(r,-1)}},a.a.createElement(f.a,{name:"minus",size:"small",color:"grey"})))})),q=t(137),D=t.n(q).a.create();D.defaults.baseURL="https://rummikub-scoreboard.herokuapp.com";var G=D,H=function(e){return G.get("/api/users/".concat(e))},K=function(e){var n=e.owner,t=e.score,r=e.emojiType,a=e.memo;return G.patch("/api/users/".concat(n),{score:t,emojiType:r,memo:a})},Q=t(82),V=t.n(Q),X=["\ud83c\udf1d","\ud83c\udf89","\ud83c\udf88","\ud83c\udf61","\ud83c\udf1f"],Y=X.concat(["\ud83c\udf2a","\ud83d\ude27","\u26c8","\ud83d\udc7b","\ud83d\udca9"]),Z=function(e){return e>0?V()(X.length-1):V()(X.length,Y.length-1)};function ee(){var e=Object(p.a)(["\n  padding-top: 3vw;\n  font-weight: bold;\n  color: white;\n"]);return ee=function(){return e},e}function ne(){var e=Object(p.a)(["\n  width: 86vw;\n  height: 90vw;\n  padding: 2vw;\n  align-items: center;\n  justify-content: space-between;\n  > span {\n    margin: 0;\n    font-size: 12vw;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(p.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return te=function(){return e},e}var re=g.b.div(te()),ae=Object(g.b)(y)(ne()),ce=g.b.span(ee()),ie=a.a.memo((function(){var e=Object(r.useRef)(!1),n=Object(r.useState)({isLoaded:!1,users:[]}),t=Object(l.a)(n,2),c=t[0],i=t[1];Object(r.useEffect)((function(){return function(){var n=Object(h.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([H(1),H(2)]);case 2:t=n.sent,e.current||i((function(e){return Object(b.a)({},e,{isLoaded:!0,users:[t[0].data,t[1].data]})}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){e.current=!0}}),[]);var o=Object(r.useCallback)(function(){var n=Object(h.a)(d.a.mark((function n(t,r){var a,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K({owner:t.owner,score:t.score+r,emojiType:Z(r)});case 2:a=n.sent,c=a.data,e.current||i((function(e){return Object(b.a)({},e,{users:e.users.map((function(e){return c.owner===e.owner?c:e}))})}));case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),[]);return c.isLoaded?a.a.createElement(re,null,a.a.createElement(ae,null,a.a.createElement(_,{reversed:!1,user:c.users[0],onClick:o}),a.a.createElement(ce,null,":"),a.a.createElement(_,{reversed:!0,user:c.users[1],onClick:o}))):a.a.createElement(j.a,{size:"huge",active:!0,inverted:!0})})),oe=function(){return a.a.createElement(ie,null)},ue=function(){return a.a.createElement(oe,null)},le=t(138),se=t.n(le),fe=t(139),me=t.n(fe),ve=function(e){var n=e.page,t=e.perPage,r=me.a.stringify({page:n,perPage:t});return G.get("/api/histories?".concat(r))},de=t(140),be=t.n(de),he=t(141),pe=t.n(he),ge=t(142);function je(){var e=Object(p.a)(["\n  display: flex;\n  align-items: flex-end;\n  flex: 3;\n  flex-flow: column;\n  color: grey;\n"]);return je=function(){return e},e}function we(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  flex: 1;\n"]);return we=function(){return e},e}function Ee(){var e=Object(p.a)(["\n  flex: 1;\n  line-height: 1.5em;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(p.a)(["\n  color: grey;\n"]);return ye=function(){return e},e}function xe(){var e=Object(p.a)(["\n  margin-bottom: 2vh;\n  font-size: 1.1em;\n"]);return xe=function(){return e},e}var ke=t.n(ge)()(pe.a),ze=g.b.div(xe()),Ce=g.b.div(ye()),Pe=g.b.div(Oe()),Se=g.b.span(Ee(),(function(e){var n=e.size;return"".concat(void 0===n?1:n,"em")}),(function(e){return e.bold?"bold":"normal"}),(function(e){var n=e.color;return n?" ".concat(n):""})),Le=Object(g.b)(Se)(we()),Ne=g.b.div(je()),Te=a.a.memo((function(e){var n,t=e.history;return a.a.createElement(ze,{value:t.value},a.a.createElement(Ce,null,a.a.createElement(Se,{size:"1.3",bold:!0},t.name)),a.a.createElement(Pe,null,a.a.createElement(Se,{size:"3.5",bold:!0,color:t.value>0?"#5aff5d":"#ff3834"},t.value>0?"+".concat(t.value):t.value),a.a.createElement(Le,{role:"img","aria-label":"",size:"2.8"},(n=t.emojiType,Y[n])),a.a.createElement(Ne,null,a.a.createElement(Se,{size:"0.85",bold:!0},t.memo),a.a.createElement(Se,{size:"0.85"},a.a.createElement(be.a,{date:t.createdAt,formatter:ke})))))}));function Ie(){var e=Object(p.a)(["\n  width: 100vw;\n"]);return Ie=function(){return e},e}function Re(){var e=Object(p.a)(["\n  width: 100vw;\n  padding: 5rem 2rem;\n"]);return Re=function(){return e},e}var Be=Object(g.b)(y)(Re()),Je=Object(g.b)(se.a)(Ie()),Me=a.a.memo((function(){var e=Object(r.useState)({histories:[],hasNextPage:!0}),n=Object(l.a)(e,2),t=n[0],c=n[1],i=t.histories,o=t.hasNextPage,u=Object(r.useRef)(!1);Object(r.useEffect)((function(){return function(){u.current=!0}}),[]);var s=function(){var e=Object(h.a)(d.a.mark((function e(n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve({page:n});case 2:r=e.sent,a=r.data,u.current||c({histories:t.histories.concat(a.histories),hasNextPage:a.hasNextPage});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(Be,null,a.a.createElement(Je,{pageStart:0,loadMore:s,hasMore:o,loader:a.a.createElement(j.a,{key:"1",active:!0,inline:"centered",size:"small"})},i.map((function(e){return a.a.createElement(Te,{key:e._id,history:e})}))))})),We=function(){return a.a.createElement(Me,null)},Ae=function(){return a.a.createElement(We,null)},Fe=(t(307),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement(u.a,{component:ue,path:"/",exact:!0}),a.a.createElement(u.a,{component:Ae,path:"/histories"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(o.a,{basename:"/rummikub-scoreboard"},a.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[154,1,2]]]);
//# sourceMappingURL=main.58f09878.chunk.js.map