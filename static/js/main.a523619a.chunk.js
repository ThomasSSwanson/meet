(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(7),i=n.n(c),r=(n(12),n(13),n(2)),o=n(3),l=n(5),u=n(4),h=n(0),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={showHideDetails:!1},e.handleShowHideButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(h.jsxs)("div",{className:"event-container",children:[Object(h.jsx)("h1",{children:t.summary}),Object(h.jsx)("p",{children:t.start.dateTime}),Object(h.jsx)("p",{className:"locations",children:t.location}),this.state.showHideDetails&&Object(h.jsxs)("div",{className:"event-details",children:[Object(h.jsx)("h2",{children:"About event:"}),Object(h.jsx)("a",{href:t.htmlLink,children:"See Details on Google Calendar"}),Object(h.jsx)("p",{children:t.description})]}),Object(h.jsx)("button",{className:"show-hide-btn",onClick:function(){return e.handleShowHideButton()},children:this.state.showHideDetails?"hide-details":"show details"})]})}}]),n}(a.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),Object(h.jsxs)("ul",{className:"suggestions",children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),";",Object(h.jsx)("li",{children:Object(h.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={eventValue:32},e.handleEventInputChanged=function(t){var n=t.target.value;e.setState({eventValue:n})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"event-number",children:[Object(h.jsx)("label",{htmlFor:"numberOfEvent"}),Object(h.jsx)("input",{type:"number",name:"numberOfEvent",className:"event-number-input",placeholder:"Enter Number of Events",value:this.state.eventValue,onChange:this.handleEventInputChanged})]})}}]),n}(a.Component);var O=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsx)(j,{}),Object(h.jsx)(v,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.a523619a.chunk.js.map