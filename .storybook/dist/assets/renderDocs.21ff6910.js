import{R as e}from"./vendor.a3c9b879.js";import{R as t}from"./index.616fd296.js";var n={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},r={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},o={textAlign:"center"},a=function(){return e.createElement("div",{style:n,className:"sb-nodocs sb-wrapper"},e.createElement("div",{style:r},e.createElement("h1",{style:o},"No Docs"),e.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",e.createElement("code",null,"docs")," parameter. If you think this is an error:"),e.createElement("ul",null,e.createElement("li",null,"Please check the story definition."),e.createElement("li",null,"Please check the Storybook config."),e.createElement("li",null,"Try reloading the page.")),e.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};function c(e,t,n,r,o,a,c){try{var l=e[a](c),i=l.value}catch(s){return void n(s)}l.done?t(i):Promise.resolve(i).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function l(e){c(a,r,o,l,i,"next",e)}function i(e){c(a,r,o,l,i,"throw",e)}l(void 0)}))}}function i(e,t,n,r){return function(e,t,n){return s.apply(this,arguments)}(e,t,n).then(r)}function s(){return(s=l(regeneratorRuntime.mark((function n(r,o,c){var l,i,s,u,d,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null!=(s=r.parameters.docs)&&s.getPage||null!=s&&s.page)||(null!=s&&s.getContainer||null!=s&&s.container)){n.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(n.t1=s.container,n.t1){n.next=8;break}return n.next=7,null===(l=s.getContainer)||void 0===l?void 0:l.call(s);case 7:n.t1=n.sent;case 8:if(n.t0=n.t1,n.t0){n.next=11;break}n.t0=function(t){var n=t.children;return e.createElement(e.Fragment,null,n)};case 11:if(u=n.t0,n.t3=s.page,n.t3){n.next=17;break}return n.next=16,null===(i=s.getPage)||void 0===i?void 0:i.call(s);case 16:n.t3=n.sent;case 17:if(n.t2=n.t3,n.t2){n.next=20;break}n.t2=a;case 20:return d=n.t2,m=e.createElement(u,{key:r.componentId,context:o},e.createElement(d,null)),n.next=24,new Promise((function(e){t.render(m,c,e)}));case 24:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(e){t.unmountComponentAtNode(e)}a.displayName="NoDocs";export{i as renderDocs,u as unmountDocs};
//# sourceMappingURL=renderDocs.21ff6910.js.map
