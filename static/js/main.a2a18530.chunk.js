(this["webpackJsonprummikub-scoreboard"]=this["webpackJsonprummikub-scoreboard"]||[]).push([[0],{149:function(e,n,t){e.exports=t(301)},154:function(e,n,t){},300:function(e,n,t){},301:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(119),i=t.n(c),o=t(26),u=(t(154),t(27)),l=t(1),s=t(2),f=t(306),m=t(305);function d(){var e=Object(l.a)(["\n  && {\n    border: none;\n    box-shadow: none;\n  }\n"]);return d=function(){return e},e}var v=Object(s.b)(f.a)(d()),b=function(){return a.a.createElement(v,{borderless:!0,fixed:"top"},a.a.createElement(m.a,{text:!0},a.a.createElement(f.a.Item,{as:o.b,to:"/",name:"\uc810\uc218\ud310"}),a.a.createElement(f.a.Item,{as:o.b,to:"/histories",name:"\ud788\uc2a4\ud1a0\ub9ac"})))},p=t(57);function h(){var e=Object(l.a)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 80vw;\n  margin: 0 auto;\n  display: flex;\n"]);return h=function(){return e},e}var w=s.b.div(h()),g=function(e){var n=e.children,t=Object(p.a)(e,["children"]);return a.a.createElement(w,t,n)},j=t(28),E=t.n(j),O=t(45),k=t(35);function x(){var e=Object(l.a)(["\n  ","\n"]);return x=function(){return e},e}function y(){var e=Object(l.a)(["\n  ","\n"]);return y=function(){return e},e}function S(){var e=Object(l.a)(["\n  width: 50%;\n  border: none;\n  outline: none;\n  font-size: 10vw;\n  padding: 1.5vw;\n  line-height: 7vw;\n  cursor: pointer;\n\n  background: white;\n  &:hover {\n    background: #f1f1f1;\n  }\n  &:active {\n    background: #cccccc;\n    color: #555555;\n  }\n"]);return S=function(){return e},e}var z=Object(s.a)(S()),M=Object(s.b)(o.b)(y(),z),Y=s.b.button(x(),z),B=function(e){var n=e.to,t=Object(p.a)(e,["to"]);return n?a.a.createElement(M,Object.assign({to:n},t)):a.a.createElement(Y,t)},C=t(134),I=t.n(C).a.create();I.defaults.baseURL="https://rummikub-scoreboard.herokuapp.com";var D=I,H=function(e){return D.get("/api/scores/".concat(e))},J=function(e){var n=e.owner,t=e.score;return D.patch("/api/scores/".concat(n),{score:t})};function R(){var e=Object(l.a)(["\n  margin: 0 auto;\n  padding: 1vw;\n  font-size: 6vw;\n  line-height: 1em;\n"]);return R=function(){return e},e}function W(){var e=Object(l.a)(["\n  width: 28%;\n"]);return W=function(){return e},e}function A(){var e=Object(l.a)(["\n      flex-direction: row-reverse;\n    "]);return A=function(){return e},e}function F(){var e=Object(l.a)(["\n  width: 100%;\n  height: 24%;\n  display: flex;\n\n  ","\n"]);return F=function(){return e},e}function L(){var e=Object(l.a)(["\n  width: 34vw;\n  height: 36vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n\n  h1 {\n    margin: 0;\n    height: 50%;\n    width: 100%;\n    text-align: center;\n    font-size: 18vw;\n    line-height: 19vw;\n  }\n"]);return L=function(){return e},e}var U=s.b.div(L()),$=s.b.div(F(),(function(e){return e.reversed&&Object(s.a)(A())})),_=s.b.div(W()),q=s.b.span(R()),G=function(e){var n=e.reversed,t=e.user,r=t.name,c=t.picture;return a.a.createElement($,{reversed:n},a.a.createElement(_,{reversed:n,picture:c}),a.a.createElement(q,null,r))},K=function(e){var n=e.reversed,t=void 0!==n&&n,c=e.owner,i=Object(r.useState)(0),o=Object(k.a)(i,2),u=o[0],l=o[1],s=Object(r.useState)({}),f=Object(k.a)(s,2),m=f[0],d=f[1],v=Object(r.useRef)(!1);Object(r.useEffect)((function(){return function(){var e=Object(O.a)(E.a.mark((function e(){var n,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(c);case 2:n=e.sent,t=n.data,v.current||(d(t.user),l(t.score));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){v.current=!0}}),[c]);var b=Object(r.useCallback)(function(){var e=Object(O.a)(E.a.mark((function e(n){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u+n,e.next=3,J({owner:c,score:t});case 3:v.current||l(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[c,u]);return a.a.createElement(U,null,a.a.createElement(G,{reversed:t,user:m}),a.a.createElement("h1",null,u),a.a.createElement(B,{onClick:function(){return b(-1)}},"-"),a.a.createElement(B,{onClick:function(){return b(1)}},"+"))};function N(){var e=Object(l.a)(["\n  width: 86vw;\n  height: 40vw;\n  padding: 2vw;\n  align-items: center;\n  justify-content: space-between;\n  > span {\n    margin: 0;\n    font-size: 12vw;\n  }\n"]);return N=function(){return e},e}function P(){var e=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return P=function(){return e},e}var Q=s.b.div(P()),T=Object(s.b)(g)(N()),V=function(){return a.a.createElement(Q,null,a.a.createElement(T,null,a.a.createElement(K,{reversed:!1,owner:1}),a.a.createElement("span",null,a.a.createElement("b",null,":")),a.a.createElement(K,{reversed:!0,owner:2})))},X=function(){return a.a.createElement(V,null)},Z=function(){return a.a.createElement(X,null)},ee=t(135),ne=t.n(ee),te=t(136),re=t.n(te),ae=t(137),ce=t.n(ae),ie=function(e){var n=e.from,t=e.to,r=e.skip,a=e.limit,c=ce.a.stringify({from:n,to:t,skip:r,limit:a});return D.get("/api/histories?".concat(c))};function oe(){var e=Object(l.a)(["\n  display: flex;\n  width: 100vw;\n  padding: 4rem;\n  align-content: center;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  @media (max-width: 768px) {\n    padding: 2.2em 0 0 0;\n  }\n"]);return oe=function(){return e},e}var ue=Object(s.b)(g)(oe()),le=function(){var e=Object(r.useState)([]),n=Object(k.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(0),o=Object(k.a)(i,2),u=o[0],l=o[1],s=function(){var e=Object(O.a)(E.a.mark((function e(){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie({from:1,skip:u,limit:20});case 2:n=e.sent,r=n.data,c(t.concat(r)),l(u+20);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(ue,null,a.a.createElement(ne.a,{pageStart:0,loadMore:s,hasMore:!0,loader:a.a.createElement("h4",{key:0},"loading...")},t.map((function(e){return a.a.createElement("div",{key:e._id,style:{marginBottom:"5vh"}},re()(e.createdAt).format("YYYY-MM-DD HH:mm:ss.SSS")," ",e.name," ",e.value)}))))},se=function(){return a.a.createElement(le,null)},fe=function(){return a.a.createElement(se,null)},me=(t(300),function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),a.a.createElement(u.a,{component:Z,path:"/",exact:!0}),a.a.createElement(u.a,{component:fe,path:"/histories"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(o.a,{basename:"/rummikub-scoreboard"},a.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[149,1,2]]]);
//# sourceMappingURL=main.a2a18530.chunk.js.map