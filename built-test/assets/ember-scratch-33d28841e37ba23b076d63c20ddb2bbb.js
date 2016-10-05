"use strict";define("ember-scratch/app",["exports","ember","ember-scratch/resolver","ember-load-initializers","ember-scratch/config/environment"],function(e,t,a,r,n){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:a.default}),(0,r.default)(i,n.default.modulePrefix),e.default=i}),define("ember-scratch/components/nav-bar",["exports","ember"],function(e,t){e.default=t.default.Component.extend({actions:{collapse:function(){this.$("#instructions").collapse("toggle")}}})}),define("ember-scratch/helpers/app-version",["exports","ember","ember-scratch/config/environment"],function(e,t,a){function r(){return n}e.appVersion=r;var n=a.default.APP.version;e.default=t.default.Helper.helper(r)}),define("ember-scratch/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("ember-scratch/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("ember-scratch/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-scratch/config/environment"],function(e,t,a){var r=a.default.APP,n=r.name,i=r.version;e.default={name:"App Version",initialize:(0,t.default)(n,i)}}),define("ember-scratch/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-scratch/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("ember-scratch/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("ember-scratch/initializers/export-application-global",["exports","ember","ember-scratch/config/environment"],function(e,t,a){function r(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var r,n=a.default.exportApplicationGlobal;r="string"==typeof n?n:t.default.String.classify(a.default.modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("ember-scratch/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("ember-scratch/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("ember-scratch/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("ember-scratch/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("ember-scratch/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("ember-scratch/router",["exports","ember","ember-scratch/config/environment"],function(e,t,a){var r=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL});r.map(function(){this.route("about"),this.route("contact")}),e.default=r}),define("ember-scratch/routes/about",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("ember-scratch/routes/contact",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("ember-scratch/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-scratch/templates/about",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"ember-scratch/templates/about.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("about\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,a),r},statements:[["content","outlet",["loc",[null,[2,0],[2,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("ember-scratch/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"ember-scratch/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=new Array(2);return r[0]=e.createMorphAt(t,0,0,a),r[1]=e.createMorphAt(e.childAt(t,[2]),1,1),e.insertBoundary(t,0),r},statements:[["content","nav-bar",["loc",[null,[1,0],[1,11]]],0,0,0,0],["content","outlet",["loc",[null,[3,2],[3,12]]],0,0,0,0]],locals:[],templates:[]}}())}),define("ember-scratch/templates/components/nav-bar",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:9,column:6},end:{line:9,column:53}},moduleName:"ember-scratch/templates/components/nav-bar.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Home");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:14,column:12},end:{line:14,column:65}},moduleName:"ember-scratch/templates/components/nav-bar.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("About");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:15,column:12},end:{line:15,column:69}},moduleName:"ember-scratch/templates/components/nav-bar.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Contact");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:33,column:0}},moduleName:"ember-scratch/templates/components/nav-bar.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("nav");e.setAttribute(a,"class","navbar navbar-default");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","container-fluid");var n=e.createTextNode("\n\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","navbar-header");var i=e.createTextNode("\n      ");e.appendChild(n,i);var i=e.createElement("button");e.setAttribute(i,"type","button"),e.setAttribute(i,"class","navbar-toggle collapsed"),e.setAttribute(i,"data-toggle","collapse"),e.setAttribute(i,"data-target","#navbar"),e.setAttribute(i,"aria-expanded","false"),e.setAttribute(i,"aria-controls","navbar");var l=e.createTextNode("\n      ");e.appendChild(i,l),e.appendChild(n,i);var i=e.createTextNode("\n      ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode("\n    ");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"class","collapse navbar-collapse"),e.setAttribute(n,"id","navbar");var i=e.createTextNode("\n      ");e.appendChild(n,i);var i=e.createElement("ul");e.setAttribute(i,"class","nav navbar-nav");var l=e.createTextNode("\n        ");e.appendChild(i,l);var l=e.createElement("li"),d=e.createComment("");e.appendChild(l,d),e.appendChild(i,l);var l=e.createTextNode("\n        ");e.appendChild(i,l);var l=e.createElement("li"),d=e.createComment("");e.appendChild(l,d),e.appendChild(i,l);var l=e.createTextNode("\n      ");e.appendChild(i,l),e.appendChild(n,i);var i=e.createTextNode("\n\n      ");e.appendChild(n,i);var i=e.createElement("button");e.setAttribute(i,"title","Click here to toggle instructions"),e.setAttribute(i,"id","toggle-instructions"),e.setAttribute(i,"type","button"),e.setAttribute(i,"class","btn btn-default pull-right");var l=e.createTextNode("\n        ");e.appendChild(i,l);var l=e.createElement("span");e.setAttribute(l,"class","glyphicon glyphicon-book"),e.setAttribute(l,"aria-hidden","true"),e.appendChild(i,l);var l=e.createTextNode(" Instructions\n      ");e.appendChild(i,l),e.appendChild(n,i);var i=e.createTextNode("\n    ");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n\n    ");e.appendChild(r,n);var n=e.createElement("div");e.setAttribute(n,"id","instructions"),e.setAttribute(n,"class","panel-collapse collapse");var i=e.createTextNode("\n      ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","well");var l=e.createTextNode("\n        ");e.appendChild(i,l);var l=e.createElement("h2"),d=e.createTextNode("Instructions");e.appendChild(l,d),e.appendChild(i,l);var l=e.createTextNode("\n        ");e.appendChild(i,l);var l=e.createElement("p"),d=e.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");e.appendChild(l,d),e.appendChild(i,l);var l=e.createTextNode("\n      ");e.appendChild(i,l),e.appendChild(n,i);var i=e.createTextNode("\n    ");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var r=e.childAt(t,[0,1]),n=e.childAt(r,[3]),i=e.childAt(n,[1]),l=e.childAt(n,[3]),d=new Array(4);return d[0]=e.createMorphAt(e.childAt(r,[1]),3,3),d[1]=e.createMorphAt(e.childAt(i,[1]),0,0),d[2]=e.createMorphAt(e.childAt(i,[3]),0,0),d[3]=e.createElementMorph(l),d},statements:[["block","link-to",["index"],["class","navbar-brand"],0,null,["loc",[null,[9,6],[9,53]]]],["block","link-to",["about"],["class","nav-item nav-link"],1,null,["loc",[null,[14,12],[14,65]]]],["block","link-to",["contact"],["class","nav-item nav-link"],2,null,["loc",[null,[15,12],[15,69]]]],["element","action",["collapse"],[],["loc",[null,[19,82],[19,103]]],0,0]],locals:[],templates:[e,t,a]}}())}),define("ember-scratch/templates/contact",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:15,column:0}},moduleName:"ember-scratch/templates/contact.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h1"),r=e.createTextNode("Contact");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("form"),r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","form-group");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("label");e.setAttribute(n,"for","inputEmail");var i=e.createTextNode("Email address");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("input");e.setAttribute(n,"type","email"),e.setAttribute(n,"class","form-control"),e.setAttribute(n,"id","inputEmail"),e.setAttribute(n,"placeholder","Email"),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","form-group");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("label");e.setAttribute(n,"for","inputComments");var i=e.createTextNode("Comments");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("textarea");e.setAttribute(n,"class","form-control"),e.setAttribute(n,"id","inputComments"),e.setAttribute(n,"placeholder","Comments"),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("button");e.setAttribute(r,"type","submit"),e.setAttribute(r,"class","btn btn-default");var n=e.createTextNode("Submit");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("ember-scratch/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"ember-scratch/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h1"),r=e.createTextNode("Welcome to Zog's ember-scratch");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-6");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("a");e.setAttribute(n,"href","http://emberjs.com/"),e.setAttribute(n,"target","_blank");var i=e.createTextNode("EmberJS");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-6");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("a");e.setAttribute(n,"href","http://getbootstrap.com/"),e.setAttribute(n,"target","_blank");var i=e.createTextNode("Bootstrap");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("ember-scratch/config/environment",["ember"],function(e){var t="ember-scratch";try{var a=t+"/config/environment",r=document.querySelector('meta[name="'+a+'"]').getAttribute("content"),n=JSON.parse(unescape(r)),i={default:n};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("ember-scratch/app").default.create({name:"ember-scratch",version:"0.1.0+12674b6a"});