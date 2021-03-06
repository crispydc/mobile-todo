(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
Backbone.LocalStorage = require('backbone.localstorage');
var Todo = require('../models/todo');

//Collection definition
var TodoList = Backbone.Collection.extend({
    model: Todo,
    localStorage: new Store("backbone-todo"),
    completed: function () {
        return this.filter(function (todo) {
            return todo.get('completed');
        });
    },
    remaining: function () {
        return this.without.apply(this, this.completed());
    }
});

module.exports = TodoList;
},{"../models/todo":7,"backbone":15,"backbone.localstorage":14,"jquery":17}],2:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"../models/todo":7,"backbone":15,"backbone.localstorage":14,"dup":1,"jquery":17}],3:[function(require,module,exports){
(function (global){

; jQuery = global.jQuery = require("/Users/cperry/src/otherdev/mobile-todo/node_modules/jquery/dist/jquery.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
!function(a){"use strict";function b(a){function b(){}function e(){return!1}function f(a,b){var c,d;for(c in b)if(b.hasOwnProperty(c)){switch(d=b[c],c){case"height":case"width":case"marginLeft":case"marginTop":d+="px"}a.style[c]=d}return a}function g(a,b){var c;for(c in b)a[c]=b[c];return a}function h(a,b){return function(){return a.apply(b,Array.prototype.slice.call(arguments))}}function i(b,c){var d;return d=a?a(c).find("."+b):Array.prototype.slice.call(c.getElementsByClassName(b))}function j(b,c,d,e,g){var h={};h[c]=d,a?a(b).animate(h,e,g):f(b,h)}function k(a){var b=a.touches,c=b&&b.length?b:a.changedTouches;return{x:p?c[0].pageX:a.pageX,y:p?c[0].pageY:a.pageY}}function l(a,b){var d=g({},o);this.settings=g(d,b),this.container=a,this.pageContainer=c.createElement("div"),this.scrollBorder={x:0,y:0},this.page=0,this.preventScroll=!1,this.pageCssProperties={margin:0},this._onStart=h(this._onStart,this),this._onMove=h(this._onMove,this),this._onEnd=h(this._onEnd,this),this._onKeydown=h(this._onKeydown,this),this._sizePages=h(this._sizePages,this),this._afterScrollTransform=h(this._afterScrollTransform,this),this.pageContainer.innerHTML=a.cloneNode(!0).innerHTML,a.innerHTML="",a.appendChild(this.pageContainer),this._scroll=x?this._scrollWithTransform:this._scrollWithoutTransform,this._animateScroll=x?this._animateScrollWithTransform:this._animateScrollWithoutTransform,f(a,v),setTimeout(h(function(){this.updateInstance(b),this.settings.preventDrag||this._observe(),this.settings.afterInitialize.call(this)},this),10)}function m(b,c,d){a?a(b).on(c,d):b.addEventListener(c,d,!1)}function n(b,c,d){a?a(b).off(c,d):b.removeEventListener(c,d,!1)}var o={pageClass:"dragend-page",direction:"horizontal",minDragDistance:"40",onSwipeStart:b,onSwipeEnd:b,onDragStart:b,onDrag:b,onDragEnd:b,afterInitialize:b,keyboardNavigation:!1,stopPropagation:!1,itemsInPage:1,scribe:0,borderBetweenPages:0,duration:300,preventDrag:!1},p="ontouchstart"in d,q=p?"touchstart":"mousedown",r=p?"touchmove":"mousemove",s=p?"touchend":"mouseup",t={37:"left",38:"up",39:"right",40:"down"},u={pages:"No pages found"},v={overflow:"hidden",padding:0},w=function(){var a=c.createElement("div"),b="Khtml Ms O Moz Webkit".split(" "),d=b.length;return function(c){if(c in a.style)return!0;for(c=c.replace(/^[a-z]/,function(a){return a.toUpperCase()});d--;)if(b[d]+c in a.style)return!0;return!1}}(),x=w("transform");return g(l.prototype,{_checkOverscroll:function(a,b,c){var d={x:b,y:c,overscroll:!0};switch(a){case"right":if(!this.scrollBorder.x)return d.x=Math.round((b-this.scrollBorder.x)/5),d;break;case"left":if((this.pagesCount-1)*this.pageDimentions.width<=this.scrollBorder.x)return d.x=Math.round(-((Math.ceil(this.pagesCount)-1)*(this.pageDimentions.width+this.settings.borderBetweenPages))+b/5),d;break;case"down":if(!this.scrollBorder.y)return d.y=Math.round((c-this.scrollBorder.y)/5),d;break;case"up":if((this.pagesCount-1)*this.pageDimentions.height<=this.scrollBorder.y)return d.y=Math.round(-((Math.ceil(this.pagesCount)-1)*(this.pageDimentions.height+this.settings.borderBetweenPages))+c/5),d}return{x:b-this.scrollBorder.x,y:c-this.scrollBorder.y,overscroll:!1}},_observe:function(){m(this.container,q,this._onStart),this.container.onselectstart=e,this.container.ondragstart=e,this.settings.keyboardNavigation&&m(c.body,"keydown",this._onKeydown),m(d,"resize",this._sizePages)},_onStart:function(a){a=a.originalEvent||a,this.settings.stopPropagation&&a.stopPropagation(),m(c.body,r,this._onMove),m(c.body,s,this._onEnd),this.startCoords=k(a),this.settings.onDragStart.call(this,a)},_onMove:function(a){if(a=a.originalEvent||a,!(a.touches&&a.touches.length>1||a.scale&&1!==a.scale)){a.preventDefault(),this.settings.stopPropagation&&a.stopPropagation();var b=this._parseEvent(a),c=this._checkOverscroll(b.direction,-b.distanceX,-b.distanceY);this.settings.onDrag.call(this,this.activeElement,b,c.overscroll,a),this.preventScroll||this._scroll(c)}},_onEnd:function(a){a=a.originalEvent||a,this.settings.stopPropagation&&a.stopPropagation();var b=this._parseEvent(a);this.startCoords={x:0,y:0},Math.abs(b.distanceX)>this.settings.minDragDistance||Math.abs(b.distanceY)>this.settings.minDragDistance?this.swipe(b.direction):(b.distanceX>0||b.distanceX>0)&&this._scrollToPage(),this.settings.onDragEnd.call(this,this.container,this.activeElement,this.page,a),n(c.body,r,this._onMove),n(c.body,s,this._onEnd)},_parseEvent:function(a){var b=k(a),c=this.startCoords.x-b.x,d=this.startCoords.y-b.y;return this._addDistanceValues(c,d)},_addDistanceValues:function(a,b){var c={distanceX:0,distanceY:0};return"horizontal"===this.settings.direction?(c.distanceX=a,c.direction=a>0?"left":"right"):(c.distanceY=b,c.direction=b>0?"up":"down"),c},_onKeydown:function(a){var b=t[a.keyCode];b&&this._scrollToPage(b)},_setHorizontalContainerCssValues:function(){g(this.pageCssProperties,{cssFloat:"left",overflowY:"auto",overflowX:"hidden",padding:0,display:"block"}),f(this.pageContainer,{overflow:"hidden",width:(this.pageDimentions.width+this.settings.borderBetweenPages)*this.pagesCount,boxSizing:"content-box","-webkit-backface-visibility":"hidden","-webkit-perspective":1e3,margin:0,padding:0})},_setVerticalContainerCssValues:function(){g(this.pageCssProperties,{overflow:"hidden",padding:0,display:"block"}),f(this.pageContainer,{"padding-bottom":this.settings.scribe,boxSizing:"content-box","-webkit-backface-visibility":"hidden","-webkit-perspective":1e3,margin:0})},setContainerCssValues:function(){"horizontal"===this.settings.direction?this._setHorizontalContainerCssValues():this._setVerticalContainerCssValues()},_setPageDimentions:function(){var a=this.container.offsetWidth,b=this.container.offsetHeight;"horizontal"===this.settings.direction?a-=parseInt(this.settings.scribe,10):b-=parseInt(this.settings.scribe,10),this.pageDimentions={width:a,height:b}},_sizePages:function(){var a=this.pages.length;this._setPageDimentions(),this.setContainerCssValues(),"horizontal"===this.settings.direction?g(this.pageCssProperties,{height:this.pageDimentions.height,width:this.pageDimentions.width/this.settings.itemsInPage}):g(this.pageCssProperties,{height:this.pageDimentions.height/this.settings.itemsInPage,width:this.pageDimentions.width});for(var b=0;a>b;b++)f(this.pages[b],this.pageCssProperties);this._jumpToPage("page",this.page)},_calcNewPage:function(a,b){var c=this.settings.borderBetweenPages,d=this.pageDimentions.height,e=this.pageDimentions.width,f=this.page;switch(a){case"up":f<this.pagesCount-1&&(this.scrollBorder.y=this.scrollBorder.y+d+c,this.page++);break;case"down":f>0&&(this.scrollBorder.y=this.scrollBorder.y-d-c,this.page--);break;case"left":f<this.pagesCount-1&&(this.scrollBorder.x=this.scrollBorder.x+e+c,this.page++);break;case"right":f>0&&(this.scrollBorder.x=this.scrollBorder.x-e-c,this.page--);break;case"page":switch(this.settings.direction){case"horizontal":this.scrollBorder.x=(e+c)*b;break;case"vertical":this.scrollBorder.y=(d+c)*b}this.page=b;break;default:this.scrollBorder.y=0,this.scrollBorder.x=0,this.page=0}},_onSwipeEnd:function(){this.preventScroll=!1,this.activeElement=this.pages[this.page*this.settings.itemsInPage],this.settings.onSwipeEnd.call(this,this.container,this.activeElement,this.page)},_jumpToPage:function(a,b){a&&this._calcNewPage(a,b),this._scroll({x:-this.scrollBorder.x,y:-this.scrollBorder.y})},_scrollToPage:function(a,b){this.preventScroll=!0,a&&this._calcNewPage(a,b),this._animateScroll()},_scrollWithTransform:function(a){var b="horizontal"===this.settings.direction?"translateX("+a.x+"px)":"translateY("+a.y+"px)";f(this.pageContainer,{"-webkit-transform":b,"-moz-transform":b,"-ms-transform":b,"-o-transform":b,transform:b})},_animateScrollWithTransform:function(){var a="transform "+this.settings.duration+"ms ease-out",b=(this.container,this._afterScrollTransform);f(this.pageContainer,{"-webkit-transition":"-webkit-"+a,"-moz-transition":"-moz-"+a,"-ms-transition":"-ms-"+a,"-o-transition":"-o-"+a,transition:a}),this._scroll({x:-this.scrollBorder.x,y:-this.scrollBorder.y}),m(this.container,"webkitTransitionEnd",b),m(this.container,"oTransitionEnd",b),m(this.container,"transitionend",b),m(this.container,"transitionEnd",b)},_afterScrollTransform:function(){var a=this.container,b=this._afterScrollTransform;this._onSwipeEnd(),n(a,"webkitTransitionEnd",b),n(a,"oTransitionEnd",b),n(a,"transitionend",b),n(a,"transitionEnd",b),f(this.pageContainer,{"-webkit-transition":"","-moz-transition":"","-ms-transition":"","-o-transition":"",transition:""})},_scrollWithoutTransform:function(a){var b="horizontal"===this.settings.direction?{marginLeft:a.x}:{marginTop:a.y};f(this.pageContainer,b)},_animateScrollWithoutTransform:function(){var a="horizontal"===this.settings.direction?"marginLeft":"marginTop",b="horizontal"===this.settings.direction?-this.scrollBorder.x:-this.scrollBorder.y;j(this.pageContainer,a,b,this.settings.duration,h(this._onSwipeEnd,this))},swipe:function(a){this.settings.onSwipeStart.call(this,this.container,this.activeElement,this.page),this._scrollToPage(a)},updateInstance:function(a){if(a=a||{},"object"==typeof a&&g(this.settings,a),this.pages=i(this.settings.pageClass,this.pageContainer),!this.pages.length)throw new Error(u.pages);this.pagesCount=this.pages.length/this.settings.itemsInPage,this.activeElement=this.pages[this.page*this.settings.itemsInPage],this._sizePages(),this.settings.jumpToPage&&(this.jumpToPage(a.jumpToPage),delete this.settings.jumpToPage),this.settings.scrollToPage&&(this.scrollToPage(this.settings.scrollToPage),delete this.settings.scrollToPage),this.settings.destroy&&(this.destroy(),delete this.settings.destroy)},destroy:function(){var a=this.container;n(a,q),n(a,r),n(a,s),n(c.body,"keydown",this._onKeydown),n(d,"resize",this._sizePages),a.removeAttribute("style");for(var b=0;b<this.pages.length;b++)this.pages[b].removeAttribute("style");a.innerHTML=this.pageContainer.innerHTML},scrollToPage:function(a){this._scrollToPage("page",a-1)},jumpToPage:function(a){this._jumpToPage("page",a-1)}}),a&&(a.fn.dragend=function(b){return b=b||{},this.each(function(){var c=a(this).data("dragend");c?c.updateInstance(b):(c=new l(this,b),a(this).data("dragend",c)),"string"==typeof b&&c.swipe(b)}),this}),l}var c=document,d=a;"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return b(d.jQuery||d.Zepto)}):d.Dragend=b(d.jQuery||d.Zepto)}(window);
; browserify_shim__define__module__export__(typeof Dragend != "undefined" ? Dragend : window.Dragend);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/Users/cperry/src/otherdev/mobile-todo/node_modules/jquery/dist/jquery.min.js":17}],4:[function(require,module,exports){
(function (global){

; jQuery = global.jQuery = require("/Users/cperry/src/otherdev/mobile-todo/node_modules/jquery/dist/jquery.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*! jQuery Mobile 1.4.5 | Git HEADhash: 68e55e7 <> 2014-10-31T17:33:30Z | (c) 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b,c){"function"==typeof define&&define.amd?define(["jquery"],function(d){return c(d,a,b),d.mobile}):c(a.jQuery,a,b)}(this,document,function(a,b,c){!function(a){a.mobile={}}(a),function(a,b){function d(b,c){var d,f,g,h=b.nodeName.toLowerCase();return"area"===h?(d=b.parentNode,f=d.name,b.href&&f&&"map"===d.nodeName.toLowerCase()?(g=a("img[usemap=#"+f+"]")[0],!!g&&e(g)):!1):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&e(b)}function e(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var f=0,g=/^ui-id-\d+$/;a.ui=a.ui||{},a.extend(a.ui,{version:"c0ab71056b936627e8a7821f03c044aec6280a40",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),scrollParent:function(){var b;return b=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(this[0].ownerDocument||c):b},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++f)})},removeUniqueId:function(){return this.each(function(){g.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return d(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var c=a.attr(b,"tabindex"),e=isNaN(c);return(e||c>=0)&&d(b,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function e(b,c,d,e){return a.each(f,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),e&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var f="Width"===d?["Left","Right"]:["Top","Bottom"],g=d.toLowerCase(),h={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?h["inner"+d].call(this):this.each(function(){a(this).css(g,e(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return"number"!=typeof b?h["outer"+d].call(this,b):this.each(function(){a(this).css(g,e(this,b,!0,c)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.support.selectstart="onselectstart"in c.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(d){if(d!==b)return this.css("zIndex",d);if(this.length)for(var e,f,g=a(this[0]);g.length&&g[0]!==c;){if(e=g.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(f=parseInt(g.css("zIndex"),10),!isNaN(f)&&0!==f))return f;g=g.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}}(a),function(a,b){var d=function(b,c){var d=b.parent(),e=[],f=function(){var b=a(this),c=a.mobile.toolbar&&b.data("mobile-toolbar")?b.toolbar("option"):{position:b.attr("data-"+a.mobile.ns+"position"),updatePagePadding:b.attr("data-"+a.mobile.ns+"update-page-padding")!==!1};return!("fixed"===c.position&&c.updatePagePadding===!0)},g=d.children(":jqmData(role='header')").filter(f),h=b.children(":jqmData(role='header')"),i=d.children(":jqmData(role='footer')").filter(f),j=b.children(":jqmData(role='footer')");return 0===h.length&&g.length>0&&(e=e.concat(g.toArray())),0===j.length&&i.length>0&&(e=e.concat(i.toArray())),a.each(e,function(b,d){c-=a(d).outerHeight()}),Math.max(0,c)};a.extend(a.mobile,{window:a(b),document:a(c),keyCode:a.ui.keyCode,behaviors:{},silentScroll:function(c){"number"!==a.type(c)&&(c=a.mobile.defaultHomeScroll),a.event.special.scrollstart.enabled=!1,setTimeout(function(){b.scrollTo(0,c),a.mobile.document.trigger("silentscroll",{x:0,y:c})},20),setTimeout(function(){a.event.special.scrollstart.enabled=!0},150)},getClosestBaseUrl:function(b){var c=a(b).closest(".ui-page").jqmData("url"),d=a.mobile.path.documentBase.hrefNoHash;return a.mobile.dynamicBaseEnabled&&c&&a.mobile.path.isPath(c)||(c=d),a.mobile.path.makeUrlAbsolute(c,d)},removeActiveLinkClass:function(b){!a.mobile.activeClickedLink||a.mobile.activeClickedLink.closest("."+a.mobile.activePageClass).length&&!b||a.mobile.activeClickedLink.removeClass(a.mobile.activeBtnClass),a.mobile.activeClickedLink=null},getInheritedTheme:function(a,b){for(var c,d,e=a[0],f="",g=/ui-(bar|body|overlay)-([a-z])\b/;e&&(c=e.className||"",!(c&&(d=g.exec(c))&&(f=d[2])));)e=e.parentNode;return f||b||"a"},enhanceable:function(a){return this.haveParents(a,"enhance")},hijackable:function(a){return this.haveParents(a,"ajax")},haveParents:function(b,c){if(!a.mobile.ignoreContentEnabled)return b;var d,e,f,g,h,i=b.length,j=a();for(g=0;i>g;g++){for(e=b.eq(g),f=!1,d=b[g];d;){if(h=d.getAttribute?d.getAttribute("data-"+a.mobile.ns+c):"","false"===h){f=!0;break}d=d.parentNode}f||(j=j.add(e))}return j},getScreenHeight:function(){return b.innerHeight||a.mobile.window.height()},resetActivePageHeight:function(b){var c=a("."+a.mobile.activePageClass),e=c.height(),f=c.outerHeight(!0);b=d(c,"number"==typeof b?b:a.mobile.getScreenHeight()),c.css("min-height",""),c.height()<b&&c.css("min-height",b-(f-e))},loading:function(){var b=this.loading._widget||a(a.mobile.loader.prototype.defaultHtml).loader(),c=b.loader.apply(b,arguments);return this.loading._widget=b,c}}),a.addDependents=function(b,c){var d=a(b),e=d.jqmData("dependents")||a();d.jqmData("dependents",a(e).add(c))},a.fn.extend({removeWithDependents:function(){a.removeWithDependents(this)},enhanceWithin:function(){var b,c={},d=a.mobile.page.prototype.keepNativeSelector(),e=this;a.mobile.nojs&&a.mobile.nojs(this),a.mobile.links&&a.mobile.links(this),a.mobile.degradeInputsWithin&&a.mobile.degradeInputsWithin(this),a.fn.buttonMarkup&&this.find(a.fn.buttonMarkup.initSelector).not(d).jqmEnhanceable().buttonMarkup(),a.fn.fieldcontain&&this.find(":jqmData(role='fieldcontain')").not(d).jqmEnhanceable().fieldcontain(),a.each(a.mobile.widgets,function(b,f){if(f.initSelector){var g=a.mobile.enhanceable(e.find(f.initSelector));g.length>0&&(g=g.not(d)),g.length>0&&(c[f.prototype.widgetName]=g)}});for(b in c)c[b][b]();return this},addDependents:function(b){a.addDependents(this,b)},getEncodedText:function(){return a("<a>").text(this.text()).html()},jqmEnhanceable:function(){return a.mobile.enhanceable(this)},jqmHijackable:function(){return a.mobile.hijackable(this)}}),a.removeWithDependents=function(b){var c=a(b);(c.jqmData("dependents")||a()).remove(),c.remove()},a.addDependents=function(b,c){var d=a(b),e=d.jqmData("dependents")||a();d.jqmData("dependents",a(e).add(c))},a.find.matches=function(b,c){return a.find(b,null,null,c)},a.find.matchesSelector=function(b,c){return a.find(c,null,null,[b]).length>0}}(a,this),function(a){a.extend(a.mobile,{version:"1.4.5",subPageUrlKey:"ui-page",hideUrlBar:!0,keepNative:":jqmData(role='none'), :jqmData(role='nojs')",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:0,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"a",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,buttonMarkup:{hoverDelay:200},dynamicBaseEnabled:!0,pageContainer:a(),allowCrossDomainPages:!1,dialogHashKey:"&ui-state=dialog"})}(a,this),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var c,d=0;null!=(c=b[d]);d++)try{a(c).triggerHandler("remove")}catch(f){}e(b)},a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];return b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix||b:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g),g},a.widget.extend=function(c){for(var e,f,g=d.call(arguments,1),h=0,i=g.length;i>h;h++)for(e in g[h])f=g[h][e],g[h].hasOwnProperty(e)&&f!==b&&(c[e]=a.isPlainObject(f)?a.isPlainObject(c[e])?a.widget.extend({},c[e],f):a.widget.extend({},f):f);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName||c;a.fn[c]=function(g){var h="string"==typeof g,i=d.call(arguments,1),j=this;return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,this.each(h?function(){var d,e=a.data(this,f);return"instance"===g?(j=e,!1):e?a.isFunction(e[g])&&"_"!==g.charAt(0)?(d=e[g].apply(e,i),d!==e&&d!==b?(j=d&&d.jquery?j.pushStack(d.get()):d,!1):void 0):a.error("no such method '"+g+"' for "+c+" widget instance"):a.error("cannot call methods on "+c+" prior to initialization; attempted to call method '"+g+"'")}:function(){var b=a.data(this,f);b?b.option(g||{})._init():a.data(this,f,new e(g,this))}),j}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var e,f,g,h=c;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof c)if(h={},e=c.split("."),c=e.shift(),e.length){for(f=h[c]=a.widget.extend({},this.options[c]),g=0;g<e.length-1;g++)f[e[g]]=f[e[g]]||{},f=f[e[g]];if(c=e.pop(),d===b)return f[c]===b?null:f[c];f[c]=d}else{if(d===b)return this.options[c]===b?null:this.options[c];h[c]=d}return this._setOptions(h),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){return b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled")?("string"==typeof g?f[g]:g).apply(f,arguments):void 0}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^(\w+)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}})}(a),function(a,b,c){var d={},e=a.find,f=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,g=/:jqmData\(([^)]*)\)/g;a.extend(a.mobile,{ns:"",getAttribute:function(b,c){var d;b=b.jquery?b[0]:b,b&&b.getAttribute&&(d=b.getAttribute("data-"+a.mobile.ns+c));try{d="true"===d?!0:"false"===d?!1:"null"===d?null:+d+""===d?+d:f.test(d)?JSON.parse(d):d}catch(e){}return d},nsNormalizeDict:d,nsNormalize:function(b){return d[b]||(d[b]=a.camelCase(a.mobile.ns+b))},closestPageData:function(a){return a.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")}}),a.fn.jqmData=function(b,d){var e;return"undefined"!=typeof b&&(b&&(b=a.mobile.nsNormalize(b)),e=arguments.length<2||d===c?this.data(b):this.data(b,d)),e},a.jqmData=function(b,c,d){var e;return"undefined"!=typeof c&&(e=a.data(b,c?a.mobile.nsNormalize(c):c,d)),e},a.fn.jqmRemoveData=function(b){return this.removeData(a.mobile.nsNormalize(b))},a.jqmRemoveData=function(b,c){return a.removeData(b,a.mobile.nsNormalize(c))},a.find=function(b,c,d,f){return b.indexOf(":jqmData")>-1&&(b=b.replace(g,"[data-"+(a.mobile.ns||"")+"$1]")),e.call(this,b,c,d,f)},a.extend(a.find,e)}(a,this),function(a){var b=/[A-Z]/g,c=function(a){return"-"+a.toLowerCase()};a.extend(a.Widget.prototype,{_getCreateOptions:function(){var d,e,f=this.element[0],g={};if(!a.mobile.getAttribute(f,"defaults"))for(d in this.options)e=a.mobile.getAttribute(f,d.replace(b,c)),null!=e&&(g[d]=e);return g}}),a.mobile.widget=a.Widget}(a),function(a){var b="ui-loader",c=a("html");a.widget("mobile.loader",{options:{theme:"a",textVisible:!1,html:"",text:"loading"},defaultHtml:"<div class='"+b+"'><span class='ui-icon-loading'></span><h1></h1></div>",fakeFixLoader:function(){var b=a("."+a.mobile.activeBtnClass).first();this.element.css({top:a.support.scrollTop&&this.window.scrollTop()+this.window.height()/2||b.length&&b.offset().top||100})},checkLoaderPosition:function(){var b=this.element.offset(),c=this.window.scrollTop(),d=a.mobile.getScreenHeight();(b.top<c||b.top-c>d)&&(this.element.addClass("ui-loader-fakefix"),this.fakeFixLoader(),this.window.unbind("scroll",this.checkLoaderPosition).bind("scroll",a.proxy(this.fakeFixLoader,this)))},resetHtml:function(){this.element.html(a(this.defaultHtml).html())},show:function(d,e,f){var g,h,i;this.resetHtml(),"object"===a.type(d)?(i=a.extend({},this.options,d),d=i.theme):(i=this.options,d=d||i.theme),h=e||(i.text===!1?"":i.text),c.addClass("ui-loading"),g=i.textVisible,this.element.attr("class",b+" ui-corner-all ui-body-"+d+" ui-loader-"+(g||e||d.text?"verbose":"default")+(i.textonly||f?" ui-loader-textonly":"")),i.html?this.element.html(i.html):this.element.find("h1").text(h),this.element.appendTo(a(a.mobile.pagecontainer?":mobile-pagecontainer":"body")),this.checkLoaderPosition(),this.window.bind("scroll",a.proxy(this.checkLoaderPosition,this))},hide:function(){c.removeClass("ui-loading"),this.options.text&&this.element.removeClass("ui-loader-fakefix"),this.window.unbind("scroll",this.fakeFixLoader),this.window.unbind("scroll",this.checkLoaderPosition)}})}(a,this),function(a,b,d){"$:nomunge";function e(a){return a=a||location.href,"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}var f,g="hashchange",h=c,i=a.event.special,j=h.documentMode,k="on"+g in b&&(j===d||j>7);a.fn[g]=function(a){return a?this.bind(g,a):this.trigger(g)},a.fn[g].delay=50,i[g]=a.extend(i[g],{setup:function(){return k?!1:void a(f.start)},teardown:function(){return k?!1:void a(f.stop)}}),f=function(){function c(){var d=e(),h=n(j);d!==j?(m(j=d,h),a(b).trigger(g)):h!==j&&(location.href=location.href.replace(/#.*/,"")+h),f=setTimeout(c,a.fn[g].delay)}var f,i={},j=e(),l=function(a){return a},m=l,n=l;return i.start=function(){f||c()},i.stop=function(){f&&clearTimeout(f),f=d},b.attachEvent&&!b.addEventListener&&!k&&function(){var b,d;i.start=function(){b||(d=a.fn[g].src,d=d&&d+e(),b=a('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){d||m(e()),c()}).attr("src",d||"javascript:0").insertAfter("body")[0].contentWindow,h.onpropertychange=function(){try{"title"===event.propertyName&&(b.document.title=h.title)}catch(a){}})},i.stop=l,n=function(){return e(b.location.href)},m=function(c,d){var e=b.document,f=a.fn[g].domain;c!==d&&(e.title=h.title,e.open(),f&&e.write('<script>document.domain="'+f+'"</script>'),e.close(),b.location.hash=c)}}(),i}()}(a,this),function(a){b.matchMedia=b.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(c),a.mobile.media=function(a){return b.matchMedia(a).matches}}(a),function(a){var b={touch:"ontouchend"in c};a.mobile.support=a.mobile.support||{},a.extend(a.support,b),a.extend(a.mobile.support,b)}(a),function(a){a.extend(a.support,{orientation:"orientation"in b&&"onorientationchange"in b})}(a),function(a,d){function e(a){var b,c=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+o.join(c+" ")+c).split(" ");for(b in e)if(n[e[b]]!==d)return!0}function f(){var c=b,d=!(!c.document.createElementNS||!c.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||c.opera&&-1===navigator.userAgent.indexOf("Chrome")),e=function(b){b&&d||a("html").addClass("ui-nosvg")},f=new c.Image;f.onerror=function(){e(!1)},f.onload=function(){e(1===f.width&&1===f.height)},f.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}function g(){var e,f,g,h="transform-3d",i=a.mobile.media("(-"+o.join("-"+h+"),(-")+"-"+h+"),("+h+")");if(i)return!!i;e=c.createElement("div"),f={MozTransform:"-moz-transform",transform:"transform"},m.append(e);for(g in f)e.style[g]!==d&&(e.style[g]="translate3d( 100px, 1px, 1px )",i=b.getComputedStyle(e).getPropertyValue(f[g]));return!!i&&"none"!==i}function h(){var b,c,d=location.protocol+"//"+location.host+location.pathname+"ui-dir/",e=a("head base"),f=null,g="";return e.length?g=e.attr("href"):e=f=a("<base>",{href:d}).appendTo("head"),b=a("<a href='testurl' />").prependTo(m),c=b[0].href,e[0].href=g||location.pathname,f&&f.remove(),0===c.indexOf(d)}function i(){var a,d=c.createElement("x"),e=c.documentElement,f=b.getComputedStyle;return"pointerEvents"in d.style?(d.style.pointerEvents="auto",d.style.pointerEvents="x",e.appendChild(d),a=f&&"auto"===f(d,"").pointerEvents,e.removeChild(d),!!a):!1}function j(){var a=c.createElement("div");return"undefined"!=typeof a.getBoundingClientRect}function k(){var a=b,c=navigator.userAgent,d=navigator.platform,e=c.match(/AppleWebKit\/([0-9]+)/),f=!!e&&e[1],g=c.match(/Fennec\/([0-9]+)/),h=!!g&&g[1],i=c.match(/Opera Mobi\/([0-9]+)/),j=!!i&&i[1];return(d.indexOf("iPhone")>-1||d.indexOf("iPad")>-1||d.indexOf("iPod")>-1)&&f&&534>f||a.operamini&&"[object OperaMini]"==={}.toString.call(a.operamini)||i&&7458>j||c.indexOf("Android")>-1&&f&&533>f||h&&6>h||"palmGetResource"in b&&f&&534>f||c.indexOf("MeeGo")>-1&&c.indexOf("NokiaBrowser/8.5.0")>-1?!1:!0}var l,m=a("<body>").prependTo("html"),n=m[0].style,o=["Webkit","Moz","O"],p="palmGetResource"in b,q=b.operamini&&"[object OperaMini]"==={}.toString.call(b.operamini),r=b.blackberry&&!e("-webkit-transform");a.extend(a.mobile,{browser:{}}),a.mobile.browser.oldIE=function(){var a=3,b=c.createElement("div"),d=b.all||[];do b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->";while(d[0]);return a>4?a:!a}(),a.extend(a.support,{pushState:"pushState"in history&&"replaceState"in history&&!(b.navigator.userAgent.indexOf("Firefox")>=0&&b.top!==b)&&-1===b.navigator.userAgent.search(/CriOS/),mediaquery:a.mobile.media("only all"),cssPseudoElement:!!e("content"),touchOverflow:!!e("overflowScrolling"),cssTransform3d:g(),boxShadow:!!e("boxShadow")&&!r,fixedPosition:k(),scrollTop:("pageXOffset"in b||"scrollTop"in c.documentElement||"scrollTop"in m[0])&&!p&&!q,dynamicBaseTag:h(),cssPointerEvents:i(),boundingRect:j(),inlineSVG:f}),m.remove(),l=function(){var a=b.navigator.userAgent;return a.indexOf("Nokia")>-1&&(a.indexOf("Symbian/3")>-1||a.indexOf("Series60/5")>-1)&&a.indexOf("AppleWebKit")>-1&&a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}(),a.mobile.gradeA=function(){return(a.support.mediaquery&&a.support.cssPseudoElement||a.mobile.browser.oldIE&&a.mobile.browser.oldIE>=8)&&(a.support.boundingRect||null!==a.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))},a.mobile.ajaxBlacklist=b.blackberry&&!b.WebKitPoint||q||l,l&&a(function(){a("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),a.support.boxShadow||a("html").addClass("ui-noboxshadow")}(a),function(a,b){var c,d=a.mobile.window,e=function(){};a.event.special.beforenavigate={setup:function(){d.on("navigate",e)},teardown:function(){d.off("navigate",e)}},a.event.special.navigate=c={bound:!1,pushStateEnabled:!0,originalEventName:b,isPushStateEnabled:function(){return a.support.pushState&&a.mobile.pushStateEnabled===!0&&this.isHashChangeEnabled()},isHashChangeEnabled:function(){return a.mobile.hashListeningEnabled===!0},popstate:function(b){var c=new a.Event("navigate"),e=new a.Event("beforenavigate"),f=b.originalEvent.state||{};e.originalEvent=b,d.trigger(e),e.isDefaultPrevented()||(b.historyState&&a.extend(f,b.historyState),c.originalEvent=b,setTimeout(function(){d.trigger(c,{state:f})},0))},hashchange:function(b){var c=new a.Event("navigate"),e=new a.Event("beforenavigate");e.originalEvent=b,d.trigger(e),e.isDefaultPrevented()||(c.originalEvent=b,d.trigger(c,{state:b.hashchangeState||{}}))},setup:function(){c.bound||(c.bound=!0,c.isPushStateEnabled()?(c.originalEventName="popstate",d.bind("popstate.navigate",c.popstate)):c.isHashChangeEnabled()&&(c.originalEventName="hashchange",d.bind("hashchange.navigate",c.hashchange)))}}}(a),function(a,c){var d,e,f="&ui-state=dialog";a.mobile.path=d={uiStateKey:"&ui-state",urlParseRE:/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,getLocation:function(a){var b=this.parseUrl(a||location.href),c=a?b:location,d=b.hash;return d="#"===d?"":d,c.protocol+b.doubleSlash+c.host+(""!==c.protocol&&"/"!==c.pathname.substring(0,1)?"/":"")+c.pathname+c.search+d},getDocumentUrl:function(b){return b?a.extend({},d.documentUrl):d.documentUrl.href},parseLocation:function(){return this.parseUrl(this.getLocation())},parseUrl:function(b){if("object"===a.type(b))return b;var c=d.urlParseRE.exec(b||"")||[];return{href:c[0]||"",hrefNoHash:c[1]||"",hrefNoSearch:c[2]||"",domain:c[3]||"",protocol:c[4]||"",doubleSlash:c[5]||"",authority:c[6]||"",username:c[8]||"",password:c[9]||"",host:c[10]||"",hostname:c[11]||"",port:c[12]||"",pathname:c[13]||"",directory:c[14]||"",filename:c[15]||"",search:c[16]||"",hash:c[17]||""}},makePathAbsolute:function(a,b){var c,d,e,f;if(a&&"/"===a.charAt(0))return a;for(a=a||"",b=b?b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"",c=b?b.split("/"):[],d=a.split("/"),e=0;e<d.length;e++)switch(f=d[e]){case".":break;case"..":c.length&&c.pop();break;default:c.push(f)}return"/"+c.join("/")},isSameDomain:function(a,b){return d.parseUrl(a).domain.toLowerCase()===d.parseUrl(b).domain.toLowerCase()},isRelativeUrl:function(a){return""===d.parseUrl(a).protocol},isAbsoluteUrl:function(a){return""!==d.parseUrl(a).protocol},makeUrlAbsolute:function(a,b){if(!d.isRelativeUrl(a))return a;b===c&&(b=this.documentBase);var e=d.parseUrl(a),f=d.parseUrl(b),g=e.protocol||f.protocol,h=e.protocol?e.doubleSlash:e.doubleSlash||f.doubleSlash,i=e.authority||f.authority,j=""!==e.pathname,k=d.makePathAbsolute(e.pathname||f.filename,f.pathname),l=e.search||!j&&f.search||"",m=e.hash;return g+h+i+k+l+m},addSearchParams:function(b,c){var e=d.parseUrl(b),f="object"==typeof c?a.param(c):c,g=e.search||"?";return e.hrefNoSearch+g+("?"!==g.charAt(g.length-1)?"&":"")+f+(e.hash||"")},convertUrlToDataUrl:function(a){var c=a,e=d.parseUrl(a);return d.isEmbeddedPage(e)?c=e.hash.split(f)[0].replace(/^#/,"").replace(/\?.*$/,""):d.isSameDomain(e,this.documentBase)&&(c=e.hrefNoHash.replace(this.documentBase.domain,"").split(f)[0]),b.decodeURIComponent(c)},get:function(a){return a===c&&(a=d.parseLocation().hash),d.stripHash(a).replace(/[^\/]*\.[^\/*]+$/,"")},set:function(a){location.hash=a},isPath:function(a){return/\//.test(a)},clean:function(a){return a.replace(this.documentBase.domain,"")},stripHash:function(a){return a.replace(/^#/,"")},stripQueryParams:function(a){return a.replace(/\?.*$/,"")},cleanHash:function(a){return d.stripHash(a.replace(/\?.*$/,"").replace(f,""))},isHashValid:function(a){return/^#[^#]+$/.test(a)},isExternal:function(a){var b=d.parseUrl(a);return!(!b.protocol||b.domain.toLowerCase()===this.documentUrl.domain.toLowerCase())},hasProtocol:function(a){return/^(:?\w+:)/.test(a)},isEmbeddedPage:function(a){var b=d.parseUrl(a);return""!==b.protocol?!this.isPath(b.hash)&&b.hash&&(b.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&b.hrefNoHash===this.documentBase.hrefNoHash):/^#/.test(b.href)},squash:function(a,b){var c,e,f,g,h,i=this.isPath(a),j=this.parseUrl(a),k=j.hash,l="";return b||(i?b=d.getLocation():(h=d.getDocumentUrl(!0),b=d.isPath(h.hash)?d.squash(h.href):h.href)),e=i?d.stripHash(a):a,e=d.isPath(j.hash)?d.stripHash(j.hash):e,g=e.indexOf(this.uiStateKey),g>-1&&(l=e.slice(g),e=e.slice(0,g)),c=d.makeUrlAbsolute(e,b),f=this.parseUrl(c).search,i?((d.isPath(k)||0===k.replace("#","").indexOf(this.uiStateKey))&&(k=""),l&&-1===k.indexOf(this.uiStateKey)&&(k+=l),-1===k.indexOf("#")&&""!==k&&(k="#"+k),c=d.parseUrl(c),c=c.protocol+c.doubleSlash+c.host+c.pathname+f+k):c+=c.indexOf("#")>-1?l:"#"+l,c},isPreservableHash:function(a){return 0===a.replace("#","").indexOf(this.uiStateKey)},hashToSelector:function(a){var b="#"===a.substring(0,1);return b&&(a=a.substring(1)),(b?"#":"")+a.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,"\\$1")},getFilePath:function(a){return a&&a.split(f)[0]},isFirstPageUrl:function(b){var e=d.parseUrl(d.makeUrlAbsolute(b,this.documentBase)),f=e.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&e.hrefNoHash===this.documentBase.hrefNoHash,g=a.mobile.firstPage,h=g&&g[0]?g[0].id:c;return f&&(!e.hash||"#"===e.hash||h&&e.hash.replace(/^#/,"")===h)},isPermittedCrossDomainRequest:function(b,c){return a.mobile.allowCrossDomainPages&&("file:"===b.protocol||"content:"===b.protocol)&&-1!==c.search(/^https?:/)}},d.documentUrl=d.parseLocation(),e=a("head").find("base"),d.documentBase=e.length?d.parseUrl(d.makeUrlAbsolute(e.attr("href"),d.documentUrl.href)):d.documentUrl,d.documentBaseDiffers=d.documentUrl.hrefNoHash!==d.documentBase.hrefNoHash,d.getDocumentBase=function(b){return b?a.extend({},d.documentBase):d.documentBase.href},a.extend(a.mobile,{getDocumentUrl:d.getDocumentUrl,getDocumentBase:d.getDocumentBase})}(a),function(a,b){a.mobile.History=function(a,b){this.stack=a||[],this.activeIndex=b||0},a.extend(a.mobile.History.prototype,{getActive:function(){return this.stack[this.activeIndex]},getLast:function(){return this.stack[this.previousIndex]},getNext:function(){return this.stack[this.activeIndex+1]},getPrev:function(){return this.stack[this.activeIndex-1]},add:function(a,b){b=b||{},this.getNext()&&this.clearForward(),b.hash&&-1===b.hash.indexOf("#")&&(b.hash="#"+b.hash),b.url=a,this.stack.push(b),this.activeIndex=this.stack.length-1},clearForward:function(){this.stack=this.stack.slice(0,this.activeIndex+1)},find:function(a,b,c){b=b||this.stack;var d,e,f,g=b.length;for(e=0;g>e;e++)if(d=b[e],(decodeURIComponent(a)===decodeURIComponent(d.url)||decodeURIComponent(a)===decodeURIComponent(d.hash))&&(f=e,c))return f;return f},closest:function(a){var c,d=this.activeIndex;return c=this.find(a,this.stack.slice(0,d)),c===b&&(c=this.find(a,this.stack.slice(d),!0),c=c===b?c:c+d),c},direct:function(c){var d=this.closest(c.url),e=this.activeIndex;d!==b&&(this.activeIndex=d,this.previousIndex=e),e>d?(c.present||c.back||a.noop)(this.getActive(),"back"):d>e?(c.present||c.forward||a.noop)(this.getActive(),"forward"):d===b&&c.missing&&c.missing(this.getActive())}})}(a),function(a){var d=a.mobile.path,e=location.href;a.mobile.Navigator=function(b){this.history=b,this.ignoreInitialHashChange=!0,a.mobile.window.bind({"popstate.history":a.proxy(this.popstate,this),"hashchange.history":a.proxy(this.hashchange,this)})},a.extend(a.mobile.Navigator.prototype,{squash:function(e,f){var g,h,i=d.isPath(e)?d.stripHash(e):e;return h=d.squash(e),g=a.extend({hash:i,url:h},f),b.history.replaceState(g,g.title||c.title,h),g},hash:function(a,b){var c,e,f,g;return c=d.parseUrl(a),e=d.parseLocation(),e.pathname+e.search===c.pathname+c.search?f=c.hash?c.hash:c.pathname+c.search:d.isPath(a)?(g=d.parseUrl(b),f=g.pathname+g.search+(d.isPreservableHash(g.hash)?g.hash.replace("#",""):"")):f=a,f},go:function(e,f,g){var h,i,j,k,l=a.event.special.navigate.isPushStateEnabled();
i=d.squash(e),j=this.hash(e,i),g&&j!==d.stripHash(d.parseLocation().hash)&&(this.preventNextHashChange=g),this.preventHashAssignPopState=!0,b.location.hash=j,this.preventHashAssignPopState=!1,h=a.extend({url:i,hash:j,title:c.title},f),l&&(k=new a.Event("popstate"),k.originalEvent={type:"popstate",state:null},this.squash(e,h),g||(this.ignorePopState=!0,a.mobile.window.trigger(k))),this.history.add(h.url,h)},popstate:function(b){var c,f;if(a.event.special.navigate.isPushStateEnabled())return this.preventHashAssignPopState?(this.preventHashAssignPopState=!1,void b.stopImmediatePropagation()):this.ignorePopState?void(this.ignorePopState=!1):!b.originalEvent.state&&1===this.history.stack.length&&this.ignoreInitialHashChange&&(this.ignoreInitialHashChange=!1,location.href===e)?void b.preventDefault():(c=d.parseLocation().hash,!b.originalEvent.state&&c?(f=this.squash(c),this.history.add(f.url,f),void(b.historyState=f)):void this.history.direct({url:(b.originalEvent.state||{}).url||c,present:function(c,d){b.historyState=a.extend({},c),b.historyState.direction=d}}))},hashchange:function(b){var e,f;if(a.event.special.navigate.isHashChangeEnabled()&&!a.event.special.navigate.isPushStateEnabled()){if(this.preventNextHashChange)return this.preventNextHashChange=!1,void b.stopImmediatePropagation();e=this.history,f=d.parseLocation().hash,this.history.direct({url:f,present:function(c,d){b.hashchangeState=a.extend({},c),b.hashchangeState.direction=d},missing:function(){e.add(f,{hash:f,title:c.title})}})}}})}(a),function(a){a.mobile.navigate=function(b,c,d){a.mobile.navigate.navigator.go(b,c,d)},a.mobile.navigate.history=new a.mobile.History,a.mobile.navigate.navigator=new a.mobile.Navigator(a.mobile.navigate.history);var b=a.mobile.path.parseLocation();a.mobile.navigate.history.add(b.href,{hash:b.hash})}(a),function(a,b){var d={animation:{},transition:{}},e=c.createElement("a"),f=["","webkit-","moz-","o-"];a.each(["animation","transition"],function(c,g){var h=0===c?g+"-name":g;a.each(f,function(c,f){return e.style[a.camelCase(f+h)]!==b?(d[g].prefix=f,!1):void 0}),d[g].duration=a.camelCase(d[g].prefix+g+"-duration"),d[g].event=a.camelCase(d[g].prefix+g+"-end"),""===d[g].prefix&&(d[g].event=d[g].event.toLowerCase())}),a.support.cssTransitions=d.transition.prefix!==b,a.support.cssAnimations=d.animation.prefix!==b,a(e).remove(),a.fn.animationComplete=function(e,f,g){var h,i,j=this,k=function(){clearTimeout(h),e.apply(this,arguments)},l=f&&"animation"!==f?"transition":"animation";return a.support.cssTransitions&&"transition"===l||a.support.cssAnimations&&"animation"===l?(g===b&&(a(this).context!==c&&(i=3e3*parseFloat(a(this).css(d[l].duration))),(0===i||i===b||isNaN(i))&&(i=a.fn.animationComplete.defaultDuration)),h=setTimeout(function(){a(j).off(d[l].event,k),e.apply(j)},i),a(this).one(d[l].event,k)):(setTimeout(a.proxy(e,this),0),a(this))},a.fn.animationComplete.defaultDuration=1e3}(a),function(a,b,c,d){function e(a){for(;a&&"undefined"!=typeof a.originalEvent;)a=a.originalEvent;return a}function f(b,c){var f,g,h,i,j,k,l,m,n,o=b.type;if(b=a.Event(b),b.type=c,f=b.originalEvent,g=a.event.props,o.search(/^(mouse|click)/)>-1&&(g=E),f)for(l=g.length,i;l;)i=g[--l],b[i]=f[i];if(o.search(/mouse(down|up)|click/)>-1&&!b.which&&(b.which=1),-1!==o.search(/^touch/)&&(h=e(f),o=h.touches,j=h.changedTouches,k=o&&o.length?o[0]:j&&j.length?j[0]:d))for(m=0,n=C.length;n>m;m++)i=C[m],b[i]=k[i];return b}function g(b){for(var c,d,e={};b;){c=a.data(b,z);for(d in c)c[d]&&(e[d]=e.hasVirtualBinding=!0);b=b.parentNode}return e}function h(b,c){for(var d;b;){if(d=a.data(b,z),d&&(!c||d[c]))return b;b=b.parentNode}return null}function i(){M=!1}function j(){M=!0}function k(){Q=0,K.length=0,L=!1,j()}function l(){i()}function m(){n(),G=setTimeout(function(){G=0,k()},a.vmouse.resetTimerDuration)}function n(){G&&(clearTimeout(G),G=0)}function o(b,c,d){var e;return(d&&d[b]||!d&&h(c.target,b))&&(e=f(c,b),a(c.target).trigger(e)),e}function p(b){var c,d=a.data(b.target,A);L||Q&&Q===d||(c=o("v"+b.type,b),c&&(c.isDefaultPrevented()&&b.preventDefault(),c.isPropagationStopped()&&b.stopPropagation(),c.isImmediatePropagationStopped()&&b.stopImmediatePropagation()))}function q(b){var c,d,f,h=e(b).touches;h&&1===h.length&&(c=b.target,d=g(c),d.hasVirtualBinding&&(Q=P++,a.data(c,A,Q),n(),l(),J=!1,f=e(b).touches[0],H=f.pageX,I=f.pageY,o("vmouseover",b,d),o("vmousedown",b,d)))}function r(a){M||(J||o("vmousecancel",a,g(a.target)),J=!0,m())}function s(b){if(!M){var c=e(b).touches[0],d=J,f=a.vmouse.moveDistanceThreshold,h=g(b.target);J=J||Math.abs(c.pageX-H)>f||Math.abs(c.pageY-I)>f,J&&!d&&o("vmousecancel",b,h),o("vmousemove",b,h),m()}}function t(a){if(!M){j();var b,c,d=g(a.target);o("vmouseup",a,d),J||(b=o("vclick",a,d),b&&b.isDefaultPrevented()&&(c=e(a).changedTouches[0],K.push({touchID:Q,x:c.clientX,y:c.clientY}),L=!0)),o("vmouseout",a,d),J=!1,m()}}function u(b){var c,d=a.data(b,z);if(d)for(c in d)if(d[c])return!0;return!1}function v(){}function w(b){var c=b.substr(1);return{setup:function(){u(this)||a.data(this,z,{});var d=a.data(this,z);d[b]=!0,F[b]=(F[b]||0)+1,1===F[b]&&O.bind(c,p),a(this).bind(c,v),N&&(F.touchstart=(F.touchstart||0)+1,1===F.touchstart&&O.bind("touchstart",q).bind("touchend",t).bind("touchmove",s).bind("scroll",r))},teardown:function(){--F[b],F[b]||O.unbind(c,p),N&&(--F.touchstart,F.touchstart||O.unbind("touchstart",q).unbind("touchmove",s).unbind("touchend",t).unbind("scroll",r));var d=a(this),e=a.data(this,z);e&&(e[b]=!1),d.unbind(c,v),u(this)||d.removeData(z)}}}var x,y,z="virtualMouseBindings",A="virtualTouchID",B="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),C="clientX clientY pageX pageY screenX screenY".split(" "),D=a.event.mouseHooks?a.event.mouseHooks.props:[],E=a.event.props.concat(D),F={},G=0,H=0,I=0,J=!1,K=[],L=!1,M=!1,N="addEventListener"in c,O=a(c),P=1,Q=0;for(a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},y=0;y<B.length;y++)a.event.special[B[y]]=w(B[y]);N&&c.addEventListener("click",function(b){var c,d,e,f,g,h,i=K.length,j=b.target;if(i)for(c=b.clientX,d=b.clientY,x=a.vmouse.clickDistanceThreshold,e=j;e;){for(f=0;i>f;f++)if(g=K[f],h=0,e===j&&Math.abs(g.x-c)<x&&Math.abs(g.y-d)<x||a.data(e,A)===g.touchID)return b.preventDefault(),void b.stopPropagation();e=e.parentNode}},!0)}(a,b,c),function(a,b,d){function e(b,c,e,f){var g=e.type;e.type=c,f?a.event.trigger(e,d,b):a.event.dispatch.call(b,e),e.type=g}var f=a(c),g=a.mobile.support.touch,h="touchmove scroll",i=g?"touchstart":"mousedown",j=g?"touchend":"mouseup",k=g?"touchmove":"mousemove";a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)},a.attrFn&&(a.attrFn[c]=!0)}),a.event.special.scrollstart={enabled:!0,setup:function(){function b(a,b){c=b,e(f,c?"scrollstart":"scrollstop",a)}var c,d,f=this,g=a(f);g.bind(h,function(e){a.event.special.scrollstart.enabled&&(c||b(e,!0),clearTimeout(d),d=setTimeout(function(){b(e,!1)},50))})},teardown:function(){a(this).unbind(h)}},a.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var b=this,c=a(b),d=!1;c.bind("vmousedown",function(g){function h(){clearTimeout(k)}function i(){h(),c.unbind("vclick",j).unbind("vmouseup",h),f.unbind("vmousecancel",i)}function j(a){i(),d||l!==a.target?d&&a.preventDefault():e(b,"tap",a)}if(d=!1,g.which&&1!==g.which)return!1;var k,l=g.target;c.bind("vmouseup",h).bind("vclick",j),f.bind("vmousecancel",i),k=setTimeout(function(){a.event.special.tap.emitTapOnTaphold||(d=!0),e(b,"taphold",a.Event("taphold",{target:l}))},a.event.special.tap.tapholdThreshold)})},teardown:function(){a(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),f.unbind("vmousecancel")}},a.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(a){var c=b.pageXOffset,d=b.pageYOffset,e=a.clientX,f=a.clientY;return 0===a.pageY&&Math.floor(f)>Math.floor(a.pageY)||0===a.pageX&&Math.floor(e)>Math.floor(a.pageX)?(e-=c,f-=d):(f<a.pageY-d||e<a.pageX-c)&&(e=a.pageX-c,f=a.pageY-d),{x:e,y:f}},start:function(b){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b,d=a.event.special.swipe.getLocation(c);return{time:(new Date).getTime(),coords:[d.x,d.y],origin:a(b.target)}},stop:function(b){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b,d=a.event.special.swipe.getLocation(c);return{time:(new Date).getTime(),coords:[d.x,d.y]}},handleSwipe:function(b,c,d,f){if(c.time-b.time<a.event.special.swipe.durationThreshold&&Math.abs(b.coords[0]-c.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(b.coords[1]-c.coords[1])<a.event.special.swipe.verticalDistanceThreshold){var g=b.coords[0]>c.coords[0]?"swipeleft":"swiperight";return e(d,"swipe",a.Event("swipe",{target:f,swipestart:b,swipestop:c}),!0),e(d,g,a.Event(g,{target:f,swipestart:b,swipestop:c}),!0),!0}return!1},eventInProgress:!1,setup:function(){var b,c=this,d=a(c),e={};b=a.data(this,"mobile-events"),b||(b={length:0},a.data(this,"mobile-events",b)),b.length++,b.swipe=e,e.start=function(b){if(!a.event.special.swipe.eventInProgress){a.event.special.swipe.eventInProgress=!0;var d,g=a.event.special.swipe.start(b),h=b.target,i=!1;e.move=function(b){g&&!b.isDefaultPrevented()&&(d=a.event.special.swipe.stop(b),i||(i=a.event.special.swipe.handleSwipe(g,d,c,h),i&&(a.event.special.swipe.eventInProgress=!1)),Math.abs(g.coords[0]-d.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault())},e.stop=function(){i=!0,a.event.special.swipe.eventInProgress=!1,f.off(k,e.move),e.move=null},f.on(k,e.move).one(j,e.stop)}},d.on(i,e.start)},teardown:function(){var b,c;b=a.data(this,"mobile-events"),b&&(c=b.swipe,delete b.swipe,b.length--,0===b.length&&a.removeData(this,"mobile-events")),c&&(c.start&&a(this).off(i,c.start),c.move&&f.off(k,c.move),c.stop&&f.off(j,c.stop))}},a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)},teardown:function(){a(this).unbind(c)}}})}(a,this),function(a){a.event.special.throttledresize={setup:function(){a(this).bind("resize",f)},teardown:function(){a(this).unbind("resize",f)}};var b,c,d,e=250,f=function(){c=(new Date).getTime(),d=c-g,d>=e?(g=c,a(this).trigger("throttledresize")):(b&&clearTimeout(b),b=setTimeout(f,e-d))},g=0}(a),function(a,b){function d(){var a=e();a!==f&&(f=a,l.trigger(m))}var e,f,g,h,i,j,k,l=a(b),m="orientationchange",n={0:!0,180:!0};a.support.orientation&&(i=b.innerWidth||l.width(),j=b.innerHeight||l.height(),k=50,g=i>j&&i-j>k,h=n[b.orientation],(g&&h||!g&&!h)&&(n={"-90":!0,90:!0})),a.event.special.orientationchange=a.extend({},a.event.special.orientationchange,{setup:function(){return a.support.orientation&&!a.event.special.orientationchange.disabled?!1:(f=e(),void l.bind("throttledresize",d))},teardown:function(){return a.support.orientation&&!a.event.special.orientationchange.disabled?!1:void l.unbind("throttledresize",d)},add:function(a){var b=a.handler;a.handler=function(a){return a.orientation=e(),b.apply(this,arguments)}}}),a.event.special.orientationchange.orientation=e=function(){var d=!0,e=c.documentElement;return d=a.support.orientation?n[b.orientation]:e&&e.clientWidth/e.clientHeight<1.1,d?"portrait":"landscape"},a.fn[m]=function(a){return a?this.bind(m,a):this.trigger(m)},a.attrFn&&(a.attrFn[m]=!0)}(a,this),function(a){var b=a("head").children("base"),c={element:b.length?b:a("<base>",{href:a.mobile.path.documentBase.hrefNoHash}).prependTo(a("head")),linkSelector:"[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",set:function(b){a.mobile.dynamicBaseEnabled&&a.support.dynamicBaseTag&&c.element.attr("href",a.mobile.path.makeUrlAbsolute(b,a.mobile.path.documentBase))},rewrite:function(b,d){var e=a.mobile.path.get(b);d.find(c.linkSelector).each(function(b,c){var d=a(c).is("[href]")?"href":a(c).is("[src]")?"src":"action",f=a.mobile.path.parseLocation(),g=a(c).attr(d);g=g.replace(f.protocol+f.doubleSlash+f.host+f.pathname,""),/^(\w+:|#|\/)/.test(g)||a(c).attr(d,e+g)})},reset:function(){c.element.attr("href",a.mobile.path.documentBase.hrefNoSearch)}};a.mobile.base=c}(a),function(a,b){a.mobile.widgets={};var c=a.widget,d=a.mobile.keepNative;a.widget=function(c){return function(){var d=c.apply(this,arguments),e=d.prototype.widgetName;return d.initSelector=d.prototype.initSelector!==b?d.prototype.initSelector:":jqmData(role='"+e+"')",a.mobile.widgets[e]=d,d}}(a.widget),a.extend(a.widget,c),a.mobile.document.on("create",function(b){a(b.target).enhanceWithin()}),a.widget("mobile.page",{options:{theme:"a",domCache:!1,keepNativeDefault:a.mobile.keepNative,contentTheme:null,enhanced:!1},_createWidget:function(){a.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_create:function(){return this._trigger("beforecreate")===!1?!1:(this.options.enhanced||this._enhance(),this._on(this.element,{pagebeforehide:"removeContainerBackground",pagebeforeshow:"_handlePageBeforeShow"}),this.element.enhanceWithin(),void("dialog"===a.mobile.getAttribute(this.element[0],"role")&&a.mobile.dialog&&this.element.dialog()))},_enhance:function(){var c="data-"+a.mobile.ns,d=this;this.options.role&&this.element.attr("data-"+a.mobile.ns+"role",this.options.role),this.element.attr("tabindex","0").addClass("ui-page ui-page-theme-"+this.options.theme),this.element.find("["+c+"role='content']").each(function(){var e=a(this),f=this.getAttribute(c+"theme")||b;d.options.contentTheme=f||d.options.contentTheme||d.options.dialog&&d.options.theme||"dialog"===d.element.jqmData("role")&&d.options.theme,e.addClass("ui-content"),d.options.contentTheme&&e.addClass("ui-body-"+d.options.contentTheme),e.attr("role","main").addClass("ui-content")})},bindRemove:function(b){var c=this.element;!c.data("mobile-page").options.domCache&&c.is(":jqmData(external-page='true')")&&c.bind("pagehide.remove",b||function(b,c){if(!c.samePage){var d=a(this),e=new a.Event("pageremove");d.trigger(e),e.isDefaultPrevented()||d.removeWithDependents()}})},_setOptions:function(c){c.theme!==b&&this.element.removeClass("ui-page-theme-"+this.options.theme).addClass("ui-page-theme-"+c.theme),c.contentTheme!==b&&this.element.find("[data-"+a.mobile.ns+"='content']").removeClass("ui-body-"+this.options.contentTheme).addClass("ui-body-"+c.contentTheme)},_handlePageBeforeShow:function(){this.setContainerBackground()},removeContainerBackground:function(){this.element.closest(":mobile-pagecontainer").pagecontainer({theme:"none"})},setContainerBackground:function(a){this.element.parent().pagecontainer({theme:a||this.options.theme})},keepNativeSelector:function(){var b=this.options,c=a.trim(b.keepNative||""),e=a.trim(a.mobile.keepNative),f=a.trim(b.keepNativeDefault),g=d===e?"":e,h=""===g?f:"";return(c?[c]:[]).concat(g?[g]:[]).concat(h?[h]:[]).join(", ")}})}(a),function(a,d){a.widget("mobile.pagecontainer",{options:{theme:"a"},initSelector:!1,_create:function(){this._trigger("beforecreate"),this.setLastScrollEnabled=!0,this._on(this.window,{navigate:"_disableRecordScroll",scrollstop:"_delayedRecordScroll"}),this._on(this.window,{navigate:"_filterNavigateEvents"}),this._on({pagechange:"_afterContentChange"}),this.window.one("navigate",a.proxy(function(){this.setLastScrollEnabled=!0},this))},_setOptions:function(a){a.theme!==d&&"none"!==a.theme?this.element.removeClass("ui-overlay-"+this.options.theme).addClass("ui-overlay-"+a.theme):a.theme!==d&&this.element.removeClass("ui-overlay-"+this.options.theme),this._super(a)},_disableRecordScroll:function(){this.setLastScrollEnabled=!1},_enableRecordScroll:function(){this.setLastScrollEnabled=!0},_afterContentChange:function(){this.setLastScrollEnabled=!0,this._off(this.window,"scrollstop"),this._on(this.window,{scrollstop:"_delayedRecordScroll"})},_recordScroll:function(){if(this.setLastScrollEnabled){var a,b,c,d=this._getActiveHistory();d&&(a=this._getScroll(),b=this._getMinScroll(),c=this._getDefaultScroll(),d.lastScroll=b>a?c:a)}},_delayedRecordScroll:function(){setTimeout(a.proxy(this,"_recordScroll"),100)},_getScroll:function(){return this.window.scrollTop()},_getMinScroll:function(){return a.mobile.minScrollBack},_getDefaultScroll:function(){return a.mobile.defaultHomeScroll},_filterNavigateEvents:function(b,c){var d;b.originalEvent&&b.originalEvent.isDefaultPrevented()||(d=b.originalEvent.type.indexOf("hashchange")>-1?c.state.hash:c.state.url,d||(d=this._getHash()),d&&"#"!==d&&0!==d.indexOf("#"+a.mobile.path.uiStateKey)||(d=location.href),this._handleNavigate(d,c.state))},_getHash:function(){return a.mobile.path.parseLocation().hash},getActivePage:function(){return this.activePage},_getInitialContent:function(){return a.mobile.firstPage},_getHistory:function(){return a.mobile.navigate.history},_getActiveHistory:function(){return this._getHistory().getActive()},_getDocumentBase:function(){return a.mobile.path.documentBase},back:function(){this.go(-1)},forward:function(){this.go(1)},go:function(c){if(a.mobile.hashListeningEnabled)b.history.go(c);else{var d=a.mobile.navigate.history.activeIndex,e=d+parseInt(c,10),f=a.mobile.navigate.history.stack[e].url,g=c>=1?"forward":"back";a.mobile.navigate.history.activeIndex=e,a.mobile.navigate.history.previousIndex=d,this.change(f,{direction:g,changeHash:!1,fromHashChange:!0})}},_handleDestination:function(b){var c;return"string"===a.type(b)&&(b=a.mobile.path.stripHash(b)),b&&(c=this._getHistory(),b=a.mobile.path.isPath(b)?b:a.mobile.path.makeUrlAbsolute("#"+b,this._getDocumentBase())),b||this._getInitialContent()},_transitionFromHistory:function(a,b){var c=this._getHistory(),d="back"===a?c.getLast():c.getActive();return d&&d.transition||b},_handleDialog:function(b,c){var d,e,f=this.getActivePage();return f&&!f.data("mobile-dialog")?("back"===c.direction?this.back():this.forward(),!1):(d=c.pageUrl,e=this._getActiveHistory(),a.extend(b,{role:e.role,transition:this._transitionFromHistory(c.direction,b.transition),reverse:"back"===c.direction}),d)},_handleNavigate:function(b,c){var d=a.mobile.path.stripHash(b),e=this._getHistory(),f=0===e.stack.length?"none":this._transitionFromHistory(c.direction),g={changeHash:!1,fromHashChange:!0,reverse:"back"===c.direction};a.extend(g,c,{transition:f}),e.activeIndex>0&&d.indexOf(a.mobile.dialogHashKey)>-1&&(d=this._handleDialog(g,c),d===!1)||this._changeContent(this._handleDestination(d),g)},_changeContent:function(b,c){a.mobile.changePage(b,c)},_getBase:function(){return a.mobile.base},_getNs:function(){return a.mobile.ns},_enhance:function(a,b){return a.page({role:b})},_include:function(a,b){a.appendTo(this.element),this._enhance(a,b.role),a.page("bindRemove")},_find:function(b){var c,d=this._createFileUrl(b),e=this._createDataUrl(b),f=this._getInitialContent();return c=this.element.children("[data-"+this._getNs()+"url='"+a.mobile.path.hashToSelector(e)+"']"),0===c.length&&e&&!a.mobile.path.isPath(e)&&(c=this.element.children(a.mobile.path.hashToSelector("#"+e)).attr("data-"+this._getNs()+"url",e).jqmData("url",e)),0===c.length&&a.mobile.path.isFirstPageUrl(d)&&f&&f.parent().length&&(c=a(f)),c},_getLoader:function(){return a.mobile.loading()},_showLoading:function(b,c,d,e){this._loadMsg||(this._loadMsg=setTimeout(a.proxy(function(){this._getLoader().loader("show",c,d,e),this._loadMsg=0},this),b))},_hideLoading:function(){clearTimeout(this._loadMsg),this._loadMsg=0,this._getLoader().loader("hide")},_showError:function(){this._hideLoading(),this._showLoading(0,a.mobile.pageLoadErrorMessageTheme,a.mobile.pageLoadErrorMessage,!0),setTimeout(a.proxy(this,"_hideLoading"),1500)},_parse:function(b,c){var d,e=a("<div></div>");return e.get(0).innerHTML=b,d=e.find(":jqmData(role='page'), :jqmData(role='dialog')").first(),d.length||(d=a("<div data-"+this._getNs()+"role='page'>"+(b.split(/<\/?body[^>]*>/gim)[1]||"")+"</div>")),d.attr("data-"+this._getNs()+"url",this._createDataUrl(c)).attr("data-"+this._getNs()+"external-page",!0),d},_setLoadedTitle:function(b,c){var d=c.match(/<title[^>]*>([^<]*)/)&&RegExp.$1;d&&!b.jqmData("title")&&(d=a("<div>"+d+"</div>").text(),b.jqmData("title",d))},_isRewritableBaseTag:function(){return a.mobile.dynamicBaseEnabled&&!a.support.dynamicBaseTag},_createDataUrl:function(b){return a.mobile.path.convertUrlToDataUrl(b)},_createFileUrl:function(b){return a.mobile.path.getFilePath(b)},_triggerWithDeprecated:function(b,c,d){var e=a.Event("page"+b),f=a.Event(this.widgetName+b);return(d||this.element).trigger(e,c),this._trigger(b,f,c),{deprecatedEvent:e,event:f}},_loadSuccess:function(b,c,e,f){var g=this._createFileUrl(b);return a.proxy(function(h,i,j){var k,l=new RegExp("(<[^>]+\\bdata-"+this._getNs()+"role=[\"']?page[\"']?[^>]*>)"),m=new RegExp("\\bdata-"+this._getNs()+"url=[\"']?([^\"'>]*)[\"']?");l.test(h)&&RegExp.$1&&m.test(RegExp.$1)&&RegExp.$1&&(g=a.mobile.path.getFilePath(a("<div>"+RegExp.$1+"</div>").text()),g=this.window[0].encodeURIComponent(g)),e.prefetch===d&&this._getBase().set(g),k=this._parse(h,g),this._setLoadedTitle(k,h),c.xhr=j,c.textStatus=i,c.page=k,c.content=k,c.toPage=k,this._triggerWithDeprecated("load",c).event.isDefaultPrevented()||(this._isRewritableBaseTag()&&k&&this._getBase().rewrite(g,k),this._include(k,e),e.showLoadMsg&&this._hideLoading(),f.resolve(b,e,k))},this)},_loadDefaults:{type:"get",data:d,reloadPage:!1,reload:!1,role:d,showLoadMsg:!1,loadMsgDelay:50},load:function(b,c){var e,f,g,h,i=c&&c.deferred||a.Deferred(),j=c&&c.reload===d&&c.reloadPage!==d?{reload:c.reloadPage}:{},k=a.extend({},this._loadDefaults,c,j),l=null,m=a.mobile.path.makeUrlAbsolute(b,this._findBaseWithDefault());return k.data&&"get"===k.type&&(m=a.mobile.path.addSearchParams(m,k.data),k.data=d),k.data&&"post"===k.type&&(k.reload=!0),e=this._createFileUrl(m),f=this._createDataUrl(m),l=this._find(m),0===l.length&&a.mobile.path.isEmbeddedPage(e)&&!a.mobile.path.isFirstPageUrl(e)?(i.reject(m,k),i.promise()):(this._getBase().reset(),l.length&&!k.reload?(this._enhance(l,k.role),i.resolve(m,k,l),k.prefetch||this._getBase().set(b),i.promise()):(h={url:b,absUrl:m,toPage:b,prevPage:c?c.fromPage:d,dataUrl:f,deferred:i,options:k},g=this._triggerWithDeprecated("beforeload",h),g.deprecatedEvent.isDefaultPrevented()||g.event.isDefaultPrevented()?i.promise():(k.showLoadMsg&&this._showLoading(k.loadMsgDelay),k.prefetch===d&&this._getBase().reset(),a.mobile.allowCrossDomainPages||a.mobile.path.isSameDomain(a.mobile.path.documentUrl,m)?(a.ajax({url:e,type:k.type,data:k.data,contentType:k.contentType,dataType:"html",success:this._loadSuccess(m,h,k,i),error:this._loadError(m,h,k,i)}),i.promise()):(i.reject(m,k),i.promise()))))},_loadError:function(b,c,d,e){return a.proxy(function(f,g,h){this._getBase().set(a.mobile.path.get()),c.xhr=f,c.textStatus=g,c.errorThrown=h;var i=this._triggerWithDeprecated("loadfailed",c);i.deprecatedEvent.isDefaultPrevented()||i.event.isDefaultPrevented()||(d.showLoadMsg&&this._showError(),e.reject(b,d))},this)},_getTransitionHandler:function(b){return b=a.mobile._maybeDegradeTransition(b),a.mobile.transitionHandlers[b]||a.mobile.defaultTransitionHandler},_triggerCssTransitionEvents:function(b,c,d){var e=!1;d=d||"",c&&(b[0]===c[0]&&(e=!0),this._triggerWithDeprecated(d+"hide",{nextPage:b,toPage:b,prevPage:c,samePage:e},c)),this._triggerWithDeprecated(d+"show",{prevPage:c||a(""),toPage:b},b)},_cssTransition:function(b,c,d){var e,f,g=d.transition,h=d.reverse,i=d.deferred;this._triggerCssTransitionEvents(b,c,"before"),this._hideLoading(),e=this._getTransitionHandler(g),f=new e(g,h,b,c).transition(),f.done(a.proxy(function(){this._triggerCssTransitionEvents(b,c)},this)),f.done(function(){i.resolve.apply(i,arguments)})},_releaseTransitionLock:function(){f=!1,e.length>0&&a.mobile.changePage.apply(null,e.pop())},_removeActiveLinkClass:function(b){a.mobile.removeActiveLinkClass(b)},_loadUrl:function(b,c,d){d.target=b,d.deferred=a.Deferred(),this.load(b,d),d.deferred.done(a.proxy(function(a,b,d){f=!1,b.absUrl=c.absUrl,this.transition(d,c,b)},this)),d.deferred.fail(a.proxy(function(){this._removeActiveLinkClass(!0),this._releaseTransitionLock(),this._triggerWithDeprecated("changefailed",c)},this))},_triggerPageBeforeChange:function(b,c,d){var e;return c.prevPage=this.activePage,a.extend(c,{toPage:b,options:d}),c.absUrl="string"===a.type(b)?a.mobile.path.makeUrlAbsolute(b,this._findBaseWithDefault()):d.absUrl,e=this._triggerWithDeprecated("beforechange",c),e.event.isDefaultPrevented()||e.deprecatedEvent.isDefaultPrevented()?!1:!0},change:function(b,c){if(f)return void e.unshift(arguments);var d=a.extend({},a.mobile.changePage.defaults,c),g={};d.fromPage=d.fromPage||this.activePage,this._triggerPageBeforeChange(b,g,d)&&(b=g.toPage,"string"===a.type(b)?(f=!0,this._loadUrl(b,g,d)):this.transition(b,g,d))},transition:function(b,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v;if(f)return void e.unshift([b,h]);if(this._triggerPageBeforeChange(b,g,h)&&(g.prevPage=h.fromPage,v=this._triggerWithDeprecated("beforetransition",g),!v.deprecatedEvent.isDefaultPrevented()&&!v.event.isDefaultPrevented())){if(f=!0,b[0]!==a.mobile.firstPage[0]||h.dataUrl||(h.dataUrl=a.mobile.path.documentUrl.hrefNoHash),i=h.fromPage,j=h.dataUrl&&a.mobile.path.convertUrlToDataUrl(h.dataUrl)||b.jqmData("url"),k=j,l=a.mobile.path.getFilePath(j),m=a.mobile.navigate.history.getActive(),n=0===a.mobile.navigate.history.activeIndex,o=0,p=c.title,q=("dialog"===h.role||"dialog"===b.jqmData("role"))&&b.jqmData("dialog")!==!0,i&&i[0]===b[0]&&!h.allowSamePageTransition)return f=!1,this._triggerWithDeprecated("transition",g),this._triggerWithDeprecated("change",g),void(h.fromHashChange&&a.mobile.navigate.history.direct({url:j}));b.page({role:h.role}),h.fromHashChange&&(o="back"===h.direction?-1:1);try{c.activeElement&&"body"!==c.activeElement.nodeName.toLowerCase()?a(c.activeElement).blur():a("input:focus, textarea:focus, select:focus").blur()}catch(w){}r=!1,q&&m&&(m.url&&m.url.indexOf(a.mobile.dialogHashKey)>-1&&this.activePage&&!this.activePage.hasClass("ui-dialog")&&a.mobile.navigate.history.activeIndex>0&&(h.changeHash=!1,r=!0),j=m.url||"",j+=!r&&j.indexOf("#")>-1?a.mobile.dialogHashKey:"#"+a.mobile.dialogHashKey),s=m?b.jqmData("title")||b.children(":jqmData(role='header')").find(".ui-title").text():p,s&&p===c.title&&(p=s),b.jqmData("title")||b.jqmData("title",p),h.transition=h.transition||(o&&!n?m.transition:d)||(q?a.mobile.defaultDialogTransition:a.mobile.defaultPageTransition),!o&&r&&(a.mobile.navigate.history.getActive().pageUrl=k),j&&!h.fromHashChange&&(!a.mobile.path.isPath(j)&&j.indexOf("#")<0&&(j="#"+j),t={transition:h.transition,title:p,pageUrl:k,role:h.role},h.changeHash!==!1&&a.mobile.hashListeningEnabled?a.mobile.navigate(this.window[0].encodeURI(j),t,!0):b[0]!==a.mobile.firstPage[0]&&a.mobile.navigate.history.add(j,t)),c.title=p,a.mobile.activePage=b,this.activePage=b,h.reverse=h.reverse||0>o,u=a.Deferred(),this._cssTransition(b,i,{transition:h.transition,reverse:h.reverse,deferred:u}),u.done(a.proxy(function(c,d,e,f,i){a.mobile.removeActiveLinkClass(),h.duplicateCachedPage&&h.duplicateCachedPage.remove(),i||a.mobile.focusPage(b),this._releaseTransitionLock(),this._triggerWithDeprecated("transition",g),this._triggerWithDeprecated("change",g)},this))}},_findBaseWithDefault:function(){var b=this.activePage&&a.mobile.getClosestBaseUrl(this.activePage);return b||a.mobile.path.documentBase.hrefNoHash}}),a.mobile.navreadyDeferred=a.Deferred();var e=[],f=!1}(a),function(a,d){function e(a){for(;a&&("string"!=typeof a.nodeName||"a"!==a.nodeName.toLowerCase());)a=a.parentNode;return a}var f=a.Deferred(),g=a.Deferred(),h=function(){g.resolve(),g=null},i=a.mobile.path.documentUrl,j=null;a.mobile.loadPage=function(b,c){var d;return c=c||{},d=c.pageContainer||a.mobile.pageContainer,c.deferred=a.Deferred(),d.pagecontainer("load",b,c),c.deferred.promise()},a.mobile.back=function(){var c=b.navigator;this.phonegapNavigationEnabled&&c&&c.app&&c.app.backHistory?c.app.backHistory():a.mobile.pageContainer.pagecontainer("back")},a.mobile.focusPage=function(a){var b=a.find("[autofocus]"),c=a.find(".ui-title:eq(0)");return b.length?void b.focus():void(c.length?c.focus():a.focus())},a.mobile._maybeDegradeTransition=a.mobile._maybeDegradeTransition||function(a){return a},a.mobile.changePage=function(b,c){a.mobile.pageContainer.pagecontainer("change",b,c)},a.mobile.changePage.defaults={transition:d,reverse:!1,changeHash:!0,fromHashChange:!1,role:d,duplicateCachedPage:d,pageContainer:d,showLoadMsg:!0,dataUrl:d,fromPage:d,allowSamePageTransition:!1},a.mobile._registerInternalEvents=function(){var c=function(b,c){var d,e,f,g,h=!0;return!a.mobile.ajaxEnabled||b.is(":jqmData(ajax='false')")||!b.jqmHijackable().length||b.attr("target")?!1:(d=j&&j.attr("formaction")||b.attr("action"),g=(b.attr("method")||"get").toLowerCase(),d||(d=a.mobile.getClosestBaseUrl(b),"get"===g&&(d=a.mobile.path.parseUrl(d).hrefNoSearch),d===a.mobile.path.documentBase.hrefNoHash&&(d=i.hrefNoSearch)),d=a.mobile.path.makeUrlAbsolute(d,a.mobile.getClosestBaseUrl(b)),a.mobile.path.isExternal(d)&&!a.mobile.path.isPermittedCrossDomainRequest(i,d)?!1:(c||(e=b.serializeArray(),j&&j[0].form===b[0]&&(f=j.attr("name"),f&&(a.each(e,function(a,b){return b.name===f?(f="",!1):void 0}),f&&e.push({name:f,value:j.attr("value")}))),h={url:d,options:{type:g,data:a.param(e),transition:b.jqmData("transition"),reverse:"reverse"===b.jqmData("direction"),reloadPage:!0}}),h))};a.mobile.document.delegate("form","submit",function(b){var d;b.isDefaultPrevented()||(d=c(a(this)),d&&(a.mobile.changePage(d.url,d.options),b.preventDefault()))}),a.mobile.document.bind("vclick",function(b){var d,f,g=b.target,h=!1;if(!(b.which>1)&&a.mobile.linkBindingEnabled){if(j=a(g),a.data(g,"mobile-button")){if(!c(a(g).closest("form"),!0))return;g.parentNode&&(g=g.parentNode)}else{if(g=e(g),!g||"#"===a.mobile.path.parseUrl(g.getAttribute("href")||"#").hash)return;if(!a(g).jqmHijackable().length)return}~g.className.indexOf("ui-link-inherit")?g.parentNode&&(f=a.data(g.parentNode,"buttonElements")):f=a.data(g,"buttonElements"),f?g=f.outer:h=!0,d=a(g),h&&(d=d.closest(".ui-btn")),d.length>0&&!d.hasClass("ui-state-disabled")&&(a.mobile.removeActiveLinkClass(!0),a.mobile.activeClickedLink=d,a.mobile.activeClickedLink.addClass(a.mobile.activeBtnClass))}}),a.mobile.document.bind("click",function(c){if(a.mobile.linkBindingEnabled&&!c.isDefaultPrevented()){var f,g,h,j,k,l,m,n=e(c.target),o=a(n),p=function(){b.setTimeout(function(){a.mobile.removeActiveLinkClass(!0)},200)};if(a.mobile.activeClickedLink&&a.mobile.activeClickedLink[0]===c.target.parentNode&&p(),n&&!(c.which>1)&&o.jqmHijackable().length){if(o.is(":jqmData(rel='back')"))return a.mobile.back(),!1;if(f=a.mobile.getClosestBaseUrl(o),g=a.mobile.path.makeUrlAbsolute(o.attr("href")||"#",f),!a.mobile.ajaxEnabled&&!a.mobile.path.isEmbeddedPage(g))return void p();if(!(-1===g.search("#")||a.mobile.path.isExternal(g)&&a.mobile.path.isAbsoluteUrl(g))){if(g=g.replace(/[^#]*#/,""),!g)return void c.preventDefault();g=a.mobile.path.isPath(g)?a.mobile.path.makeUrlAbsolute(g,f):a.mobile.path.makeUrlAbsolute("#"+g,i.hrefNoHash)}if(h=o.is("[rel='external']")||o.is(":jqmData(ajax='false')")||o.is("[target]"),j=h||a.mobile.path.isExternal(g)&&!a.mobile.path.isPermittedCrossDomainRequest(i,g))return void p();k=o.jqmData("transition"),l="reverse"===o.jqmData("direction")||o.jqmData("back"),m=o.attr("data-"+a.mobile.ns+"rel")||d,a.mobile.changePage(g,{transition:k,reverse:l,role:m,link:o}),c.preventDefault()}}}),a.mobile.document.delegate(".ui-page","pageshow.prefetch",function(){var b=[];a(this).find("a:jqmData(prefetch)").each(function(){var c=a(this),d=c.attr("href");d&&-1===a.inArray(d,b)&&(b.push(d),a.mobile.loadPage(d,{role:c.attr("data-"+a.mobile.ns+"rel"),prefetch:!0}))})}),a.mobile.pageContainer.pagecontainer(),a.mobile.document.bind("pageshow",function(){g?g.done(a.mobile.resetActivePageHeight):a.mobile.resetActivePageHeight()
}),a.mobile.window.bind("throttledresize",a.mobile.resetActivePageHeight)},a(function(){f.resolve()}),"complete"===c.readyState?h():a.mobile.window.load(h),a.when(f,a.mobile.navreadyDeferred).done(function(){a.mobile._registerInternalEvents()})}(a),function(a,b){a.mobile.Transition=function(){this.init.apply(this,arguments)},a.extend(a.mobile.Transition.prototype,{toPreClass:" ui-page-pre-in",init:function(b,c,d,e){a.extend(this,{name:b,reverse:c,$to:d,$from:e,deferred:new a.Deferred})},cleanFrom:function(){this.$from.removeClass(a.mobile.activePageClass+" out in reverse "+this.name).height("")},beforeDoneIn:function(){},beforeDoneOut:function(){},beforeStartOut:function(){},doneIn:function(){this.beforeDoneIn(),this.$to.removeClass("out in reverse "+this.name).height(""),this.toggleViewportClass(),a.mobile.window.scrollTop()!==this.toScroll&&this.scrollPage(),this.sequential||this.$to.addClass(a.mobile.activePageClass),this.deferred.resolve(this.name,this.reverse,this.$to,this.$from,!0)},doneOut:function(a,b,c,d){this.beforeDoneOut(),this.startIn(a,b,c,d)},hideIn:function(a){this.$to.css("z-index",-10),a.call(this),this.$to.css("z-index","")},scrollPage:function(){a.event.special.scrollstart.enabled=!1,(a.mobile.hideUrlBar||this.toScroll!==a.mobile.defaultHomeScroll)&&b.scrollTo(0,this.toScroll),setTimeout(function(){a.event.special.scrollstart.enabled=!0},150)},startIn:function(b,c,d,e){this.hideIn(function(){this.$to.addClass(a.mobile.activePageClass+this.toPreClass),e||a.mobile.focusPage(this.$to),this.$to.height(b+this.toScroll),d||this.scrollPage()}),this.$to.removeClass(this.toPreClass).addClass(this.name+" in "+c),d?this.doneIn():this.$to.animationComplete(a.proxy(function(){this.doneIn()},this))},startOut:function(b,c,d){this.beforeStartOut(b,c,d),this.$from.height(b+a.mobile.window.scrollTop()).addClass(this.name+" out"+c)},toggleViewportClass:function(){a.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-"+this.name)},transition:function(){var b,c=this.reverse?" reverse":"",d=a.mobile.getScreenHeight(),e=a.mobile.maxTransitionWidth!==!1&&a.mobile.window.width()>a.mobile.maxTransitionWidth;return this.toScroll=a.mobile.navigate.history.getActive().lastScroll||a.mobile.defaultHomeScroll,b=!a.support.cssTransitions||!a.support.cssAnimations||e||!this.name||"none"===this.name||Math.max(a.mobile.window.scrollTop(),this.toScroll)>a.mobile.getMaxScrollForTransition(),this.toggleViewportClass(),this.$from&&!b?this.startOut(d,c,b):this.doneOut(d,c,b,!0),this.deferred.promise()}})}(a,this),function(a){a.mobile.SerialTransition=function(){this.init.apply(this,arguments)},a.extend(a.mobile.SerialTransition.prototype,a.mobile.Transition.prototype,{sequential:!0,beforeDoneOut:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(b,c,d){this.$from.animationComplete(a.proxy(function(){this.doneOut(b,c,d)},this))}})}(a),function(a){a.mobile.ConcurrentTransition=function(){this.init.apply(this,arguments)},a.extend(a.mobile.ConcurrentTransition.prototype,a.mobile.Transition.prototype,{sequential:!1,beforeDoneIn:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(a,b,c){this.doneOut(a,b,c)}})}(a),function(a){var b=function(){return 3*a.mobile.getScreenHeight()};a.mobile.transitionHandlers={sequential:a.mobile.SerialTransition,simultaneous:a.mobile.ConcurrentTransition},a.mobile.defaultTransitionHandler=a.mobile.transitionHandlers.sequential,a.mobile.transitionFallbacks={},a.mobile._maybeDegradeTransition=function(b){return b&&!a.support.cssTransform3d&&a.mobile.transitionFallbacks[b]&&(b=a.mobile.transitionFallbacks[b]),b},a.mobile.getMaxScrollForTransition=a.mobile.getMaxScrollForTransition||b}(a),function(a){a.mobile.transitionFallbacks.flip="fade"}(a,this),function(a){a.mobile.transitionFallbacks.flow="fade"}(a,this),function(a){a.mobile.transitionFallbacks.pop="fade"}(a,this),function(a){a.mobile.transitionHandlers.slide=a.mobile.transitionHandlers.simultaneous,a.mobile.transitionFallbacks.slide="fade"}(a,this),function(a){a.mobile.transitionFallbacks.slidedown="fade"}(a,this),function(a){a.mobile.transitionFallbacks.slidefade="fade"}(a,this),function(a){a.mobile.transitionFallbacks.slideup="fade"}(a,this),function(a){a.mobile.transitionFallbacks.turn="fade"}(a,this),function(a){a.mobile.degradeInputs={color:!1,date:!1,datetime:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:"text",tel:!1,time:!1,url:!1,week:!1},a.mobile.page.prototype.options.degradeInputs=a.mobile.degradeInputs,a.mobile.degradeInputsWithin=function(b){b=a(b),b.find("input").not(a.mobile.page.prototype.keepNativeSelector()).each(function(){var b,c,d,e,f=a(this),g=this.getAttribute("type"),h=a.mobile.degradeInputs[g]||"text";a.mobile.degradeInputs[g]&&(b=a("<div>").html(f.clone()).html(),c=b.indexOf(" type=")>-1,d=c?/\s+type=["']?\w+['"]?/:/\/?>/,e=' type="'+h+'" data-'+a.mobile.ns+'type="'+g+'"'+(c?"":">"),f.replaceWith(b.replace(d,e)))})}}(a),function(a,b,c){a.widget("mobile.page",a.mobile.page,{options:{closeBtn:"left",closeBtnText:"Close",overlayTheme:"a",corners:!0,dialog:!1},_create:function(){this._super(),this.options.dialog&&(a.extend(this,{_inner:this.element.children(),_headerCloseButton:null}),this.options.enhanced||this._setCloseBtn(this.options.closeBtn))},_enhance:function(){this._super(),this.options.dialog&&this.element.addClass("ui-dialog").wrapInner(a("<div/>",{role:"dialog","class":"ui-dialog-contain ui-overlay-shadow"+(this.options.corners?" ui-corner-all":"")}))},_setOptions:function(b){var d,e,f=this.options;b.corners!==c&&this._inner.toggleClass("ui-corner-all",!!b.corners),b.overlayTheme!==c&&a.mobile.activePage[0]===this.element[0]&&(f.overlayTheme=b.overlayTheme,this._handlePageBeforeShow()),b.closeBtnText!==c&&(d=f.closeBtn,e=b.closeBtnText),b.closeBtn!==c&&(d=b.closeBtn),d&&this._setCloseBtn(d,e),this._super(b)},_handlePageBeforeShow:function(){this.options.overlayTheme&&this.options.dialog?(this.removeContainerBackground(),this.setContainerBackground(this.options.overlayTheme)):this._super()},_setCloseBtn:function(b,c){var d,e=this._headerCloseButton;b="left"===b?"left":"right"===b?"right":"none","none"===b?e&&(e.remove(),e=null):e?(e.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-"+b),c&&e.text(c)):(d=this._inner.find(":jqmData(role='header')").first(),e=a("<a></a>",{href:"#","class":"ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-"+b}).attr("data-"+a.mobile.ns+"rel","back").text(c||this.options.closeBtnText||"").prependTo(d)),this._headerCloseButton=e}})}(a,this),function(a,b,c){a.widget("mobile.dialog",{options:{closeBtn:"left",closeBtnText:"Close",overlayTheme:"a",corners:!0},_handlePageBeforeShow:function(){this._isCloseable=!0,this.options.overlayTheme&&this.element.page("removeContainerBackground").page("setContainerBackground",this.options.overlayTheme)},_handlePageBeforeHide:function(){this._isCloseable=!1},_handleVClickSubmit:function(b){var c,d=a(b.target).closest("vclick"===b.type?"a":"form");d.length&&!d.jqmData("transition")&&(c={},c["data-"+a.mobile.ns+"transition"]=(a.mobile.navigate.history.getActive()||{}).transition||a.mobile.defaultDialogTransition,c["data-"+a.mobile.ns+"direction"]="reverse",d.attr(c))},_create:function(){var b=this.element,c=this.options;b.addClass("ui-dialog").wrapInner(a("<div/>",{role:"dialog","class":"ui-dialog-contain ui-overlay-shadow"+(c.corners?" ui-corner-all":"")})),a.extend(this,{_isCloseable:!1,_inner:b.children(),_headerCloseButton:null}),this._on(b,{vclick:"_handleVClickSubmit",submit:"_handleVClickSubmit",pagebeforeshow:"_handlePageBeforeShow",pagebeforehide:"_handlePageBeforeHide"}),this._setCloseBtn(c.closeBtn)},_setOptions:function(b){var d,e,f=this.options;b.corners!==c&&this._inner.toggleClass("ui-corner-all",!!b.corners),b.overlayTheme!==c&&a.mobile.activePage[0]===this.element[0]&&(f.overlayTheme=b.overlayTheme,this._handlePageBeforeShow()),b.closeBtnText!==c&&(d=f.closeBtn,e=b.closeBtnText),b.closeBtn!==c&&(d=b.closeBtn),d&&this._setCloseBtn(d,e),this._super(b)},_setCloseBtn:function(b,c){var d,e=this._headerCloseButton;b="left"===b?"left":"right"===b?"right":"none","none"===b?e&&(e.remove(),e=null):e?(e.removeClass("ui-btn-left ui-btn-right").addClass("ui-btn-"+b),c&&e.text(c)):(d=this._inner.find(":jqmData(role='header')").first(),e=a("<a></a>",{role:"button",href:"#","class":"ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext ui-btn-"+b}).text(c||this.options.closeBtnText||"").prependTo(d),this._on(e,{click:"close"})),this._headerCloseButton=e},close:function(){var b=a.mobile.navigate.history;this._isCloseable&&(this._isCloseable=!1,a.mobile.hashListeningEnabled&&b.activeIndex>0?a.mobile.back():a.mobile.pageContainer.pagecontainer("back"))}})}(a,this),function(a,b){var c=/([A-Z])/g,d=function(a){return"ui-btn-icon-"+(null===a?"left":a)};a.widget("mobile.collapsible",{options:{enhanced:!1,expandCueText:null,collapseCueText:null,collapsed:!0,heading:"h1,h2,h3,h4,h5,h6,legend",collapsedIcon:null,expandedIcon:null,iconpos:null,theme:null,contentTheme:null,inset:null,corners:null,mini:null},_create:function(){var b=this.element,c={accordion:b.closest(":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')"+(a.mobile.collapsibleset?", :mobile-collapsibleset":"")).addClass("ui-collapsible-set")};this._ui=c,this._renderedOptions=this._getOptions(this.options),this.options.enhanced?(c.heading=this.element.children(".ui-collapsible-heading"),c.content=c.heading.next(),c.anchor=c.heading.children(),c.status=c.anchor.children(".ui-collapsible-heading-status")):this._enhance(b,c),this._on(c.heading,{tap:function(){c.heading.find("a").first().addClass(a.mobile.activeBtnClass)},click:function(a){this._handleExpandCollapse(!c.heading.hasClass("ui-collapsible-heading-collapsed")),a.preventDefault(),a.stopPropagation()}})},_getOptions:function(b){var d,e=this._ui.accordion,f=this._ui.accordionWidget;b=a.extend({},b),e.length&&!f&&(this._ui.accordionWidget=f=e.data("mobile-collapsibleset"));for(d in b)b[d]=null!=b[d]?b[d]:f?f.options[d]:e.length?a.mobile.getAttribute(e[0],d.replace(c,"-$1").toLowerCase()):null,null==b[d]&&(b[d]=a.mobile.collapsible.defaults[d]);return b},_themeClassFromOption:function(a,b){return b?"none"===b?"":a+b:""},_enhance:function(b,c){var e,f=this._renderedOptions,g=this._themeClassFromOption("ui-body-",f.contentTheme);return b.addClass("ui-collapsible "+(f.inset?"ui-collapsible-inset ":"")+(f.inset&&f.corners?"ui-corner-all ":"")+(g?"ui-collapsible-themed-content ":"")),c.originalHeading=b.children(this.options.heading).first(),c.content=b.wrapInner("<div class='ui-collapsible-content "+g+"'></div>").children(".ui-collapsible-content"),c.heading=c.originalHeading,c.heading.is("legend")&&(c.heading=a("<div role='heading'>"+c.heading.html()+"</div>"),c.placeholder=a("<div><!-- placeholder for legend --></div>").insertBefore(c.originalHeading),c.originalHeading.remove()),e=f.collapsed?f.collapsedIcon?"ui-icon-"+f.collapsedIcon:"":f.expandedIcon?"ui-icon-"+f.expandedIcon:"",c.status=a("<span class='ui-collapsible-heading-status'></span>"),c.anchor=c.heading.detach().addClass("ui-collapsible-heading").append(c.status).wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().addClass("ui-btn "+(e?e+" ":"")+(e?d(f.iconpos)+" ":"")+this._themeClassFromOption("ui-btn-",f.theme)+" "+(f.mini?"ui-mini ":"")),c.heading.insertBefore(c.content),this._handleExpandCollapse(this.options.collapsed),c},refresh:function(){this._applyOptions(this.options),this._renderedOptions=this._getOptions(this.options)},_applyOptions:function(a){var c,e,f,g,h,i=this.element,j=this._renderedOptions,k=this._ui,l=k.anchor,m=k.status,n=this._getOptions(a);a.collapsed!==b&&this._handleExpandCollapse(a.collapsed),c=i.hasClass("ui-collapsible-collapsed"),c?n.expandCueText!==b&&m.text(n.expandCueText):n.collapseCueText!==b&&m.text(n.collapseCueText),h=n.collapsedIcon!==b?n.collapsedIcon!==!1:j.collapsedIcon!==!1,(n.iconpos!==b||n.collapsedIcon!==b||n.expandedIcon!==b)&&(l.removeClass([d(j.iconpos)].concat(j.expandedIcon?["ui-icon-"+j.expandedIcon]:[]).concat(j.collapsedIcon?["ui-icon-"+j.collapsedIcon]:[]).join(" ")),h&&l.addClass([d(n.iconpos!==b?n.iconpos:j.iconpos)].concat(c?["ui-icon-"+(n.collapsedIcon!==b?n.collapsedIcon:j.collapsedIcon)]:["ui-icon-"+(n.expandedIcon!==b?n.expandedIcon:j.expandedIcon)]).join(" "))),n.theme!==b&&(f=this._themeClassFromOption("ui-btn-",j.theme),e=this._themeClassFromOption("ui-btn-",n.theme),l.removeClass(f).addClass(e)),n.contentTheme!==b&&(f=this._themeClassFromOption("ui-body-",j.contentTheme),e=this._themeClassFromOption("ui-body-",n.contentTheme),k.content.removeClass(f).addClass(e)),n.inset!==b&&(i.toggleClass("ui-collapsible-inset",n.inset),g=!(!n.inset||!n.corners&&!j.corners)),n.corners!==b&&(g=!(!n.corners||!n.inset&&!j.inset)),g!==b&&i.toggleClass("ui-corner-all",g),n.mini!==b&&l.toggleClass("ui-mini",n.mini)},_setOptions:function(a){this._applyOptions(a),this._super(a),this._renderedOptions=this._getOptions(this.options)},_handleExpandCollapse:function(b){var c=this._renderedOptions,d=this._ui;d.status.text(b?c.expandCueText:c.collapseCueText),d.heading.toggleClass("ui-collapsible-heading-collapsed",b).find("a").first().toggleClass("ui-icon-"+c.expandedIcon,!b).toggleClass("ui-icon-"+c.collapsedIcon,b||c.expandedIcon===c.collapsedIcon).removeClass(a.mobile.activeBtnClass),this.element.toggleClass("ui-collapsible-collapsed",b),d.content.toggleClass("ui-collapsible-content-collapsed",b).attr("aria-hidden",b).trigger("updatelayout"),this.options.collapsed=b,this._trigger(b?"collapse":"expand")},expand:function(){this._handleExpandCollapse(!1)},collapse:function(){this._handleExpandCollapse(!0)},_destroy:function(){var a=this._ui,b=this.options;b.enhanced||(a.placeholder?(a.originalHeading.insertBefore(a.placeholder),a.placeholder.remove(),a.heading.remove()):(a.status.remove(),a.heading.removeClass("ui-collapsible-heading ui-collapsible-heading-collapsed").children().contents().unwrap()),a.anchor.contents().unwrap(),a.content.contents().unwrap(),this.element.removeClass("ui-collapsible ui-collapsible-collapsed ui-collapsible-themed-content ui-collapsible-inset ui-corner-all"))}}),a.mobile.collapsible.defaults={expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsedIcon:"plus",contentTheme:"inherit",expandedIcon:"minus",iconpos:"left",inset:!0,corners:!0,theme:"inherit",mini:!1}}(a),function(a){function b(b){var d,e=b.length,f=[];for(d=0;e>d;d++)b[d].className.match(c)||f.push(b[d]);return a(f)}var c=/\bui-screen-hidden\b/;a.mobile.behaviors.addFirstLastClasses={_getVisibles:function(a,c){var d;return c?d=b(a):(d=a.filter(":visible"),0===d.length&&(d=b(a))),d},_addFirstLastClasses:function(a,b,c){a.removeClass("ui-first-child ui-last-child"),b.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"),c||this.element.trigger("updatelayout")},_removeFirstLastClasses:function(a){a.removeClass("ui-first-child ui-last-child")}}}(a),function(a,b){var c=":mobile-collapsible, "+a.mobile.collapsible.initSelector;a.widget("mobile.collapsibleset",a.extend({initSelector:":jqmData(role='collapsible-set'),:jqmData(role='collapsibleset')",options:a.extend({enhanced:!1},a.mobile.collapsible.defaults),_handleCollapsibleExpand:function(b){var c=a(b.target).closest(".ui-collapsible");c.parent().is(":mobile-collapsibleset, :jqmData(role='collapsible-set')")&&c.siblings(".ui-collapsible:not(.ui-collapsible-collapsed)").collapsible("collapse")},_create:function(){var b=this.element,c=this.options;a.extend(this,{_classes:""}),c.enhanced||(b.addClass("ui-collapsible-set "+this._themeClassFromOption("ui-group-theme-",c.theme)+" "+(c.corners&&c.inset?"ui-corner-all ":"")),this.element.find(a.mobile.collapsible.initSelector).collapsible()),this._on(b,{collapsibleexpand:"_handleCollapsibleExpand"})},_themeClassFromOption:function(a,b){return b?"none"===b?"":a+b:""},_init:function(){this._refresh(!0),this.element.children(c).filter(":jqmData(collapsed='false')").collapsible("expand")},_setOptions:function(a){var c,d,e=this.element,f=this._themeClassFromOption("ui-group-theme-",a.theme);return f&&e.removeClass(this._themeClassFromOption("ui-group-theme-",this.options.theme)).addClass(f),a.inset!==b&&(d=!(!a.inset||!a.corners&&!this.options.corners)),a.corners!==b&&(d=!(!a.corners||!a.inset&&!this.options.inset)),d!==b&&e.toggleClass("ui-corner-all",d),c=this._super(a),this.element.children(":mobile-collapsible").collapsible("refresh"),c},_destroy:function(){var a=this.element;this._removeFirstLastClasses(a.children(c)),a.removeClass("ui-collapsible-set ui-corner-all "+this._themeClassFromOption("ui-group-theme-",this.options.theme)).children(":mobile-collapsible").collapsible("destroy")},_refresh:function(b){var d=this.element.children(c);this.element.find(a.mobile.collapsible.initSelector).not(".ui-collapsible").collapsible(),this._addFirstLastClasses(d,this._getVisibles(d,b),b)},refresh:function(){this._refresh(!1)}},a.mobile.behaviors.addFirstLastClasses))}(a),function(a){a.fn.fieldcontain=function(){return this.addClass("ui-field-contain")}}(a),function(a){a.fn.grid=function(b){return this.each(function(){var c,d,e=a(this),f=a.extend({grid:null},b),g=e.children(),h={solo:1,a:2,b:3,c:4,d:5},i=f.grid;if(!i)if(g.length<=5)for(d in h)h[d]===g.length&&(i=d);else i="a",e.addClass("ui-grid-duo");c=h[i],e.addClass("ui-grid-"+i),g.filter(":nth-child("+c+"n+1)").addClass("ui-block-a"),c>1&&g.filter(":nth-child("+c+"n+2)").addClass("ui-block-b"),c>2&&g.filter(":nth-child("+c+"n+3)").addClass("ui-block-c"),c>3&&g.filter(":nth-child("+c+"n+4)").addClass("ui-block-d"),c>4&&g.filter(":nth-child("+c+"n+5)").addClass("ui-block-e")})}}(a),function(a,b){a.widget("mobile.navbar",{options:{iconpos:"top",grid:null},_create:function(){var d=this.element,e=d.find("a, button"),f=e.filter(":jqmData(icon)").length?this.options.iconpos:b;d.addClass("ui-navbar").attr("role","navigation").find("ul").jqmEnhanceable().grid({grid:this.options.grid}),e.each(function(){var b=a.mobile.getAttribute(this,"icon"),c=a.mobile.getAttribute(this,"theme"),d="ui-btn";c&&(d+=" ui-btn-"+c),b&&(d+=" ui-icon-"+b+" ui-btn-icon-"+f),a(this).addClass(d)}),d.delegate("a","vclick",function(){var b=a(this);b.hasClass("ui-state-disabled")||b.hasClass("ui-disabled")||b.hasClass(a.mobile.activeBtnClass)||(e.removeClass(a.mobile.activeBtnClass),b.addClass(a.mobile.activeBtnClass),a(c).one("pagehide",function(){b.removeClass(a.mobile.activeBtnClass)}))}),d.closest(".ui-page").bind("pagebeforeshow",function(){e.filter(".ui-state-persist").addClass(a.mobile.activeBtnClass)})}})}(a),function(a){var b=a.mobile.getAttribute;a.widget("mobile.listview",a.extend({options:{theme:null,countTheme:null,dividerTheme:null,icon:"carat-r",splitIcon:"carat-r",splitTheme:null,corners:!0,shadow:!0,inset:!1},_create:function(){var a=this,b="";b+=a.options.inset?" ui-listview-inset":"",a.options.inset&&(b+=a.options.corners?" ui-corner-all":"",b+=a.options.shadow?" ui-shadow":""),a.element.addClass(" ui-listview"+b),a.refresh(!0)},_findFirstElementByTagName:function(a,b,c,d){var e={};for(e[c]=e[d]=!0;a;){if(e[a.nodeName])return a;a=a[b]}return null},_addThumbClasses:function(b){var c,d,e=b.length;for(c=0;e>c;c++)d=a(this._findFirstElementByTagName(b[c].firstChild,"nextSibling","img","IMG")),d.length&&a(this._findFirstElementByTagName(d[0].parentNode,"parentNode","li","LI")).addClass(d.hasClass("ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb")},_getChildrenByTagName:function(b,c,d){var e=[],f={};for(f[c]=f[d]=!0,b=b.firstChild;b;)f[b.nodeName]&&e.push(b),b=b.nextSibling;return a(e)},_beforeListviewRefresh:a.noop,_afterListviewRefresh:a.noop,refresh:function(c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x=this.options,y=this.element,z=!!a.nodeName(y[0],"ol"),A=y.attr("start"),B={},C=y.find(".ui-li-count"),D=b(y[0],"counttheme")||this.options.countTheme,E=D?"ui-body-"+D:"ui-body-inherit";for(x.theme&&y.addClass("ui-group-theme-"+x.theme),z&&(A||0===A)&&(n=parseInt(A,10)-1,y.css("counter-reset","listnumbering "+n)),this._beforeListviewRefresh(),w=this._getChildrenByTagName(y[0],"li","LI"),e=0,f=w.length;f>e;e++)g=w.eq(e),h="",(c||g[0].className.search(/\bui-li-static\b|\bui-li-divider\b/)<0)&&(l=this._getChildrenByTagName(g[0],"a","A"),m="list-divider"===b(g[0],"role"),p=g.attr("value"),i=b(g[0],"theme"),l.length&&l[0].className.search(/\bui-btn\b/)<0&&!m?(j=b(g[0],"icon"),k=j===!1?!1:j||x.icon,l.removeClass("ui-link"),d="ui-btn",i&&(d+=" ui-btn-"+i),l.length>1?(h="ui-li-has-alt",q=l.last(),r=b(q[0],"theme")||x.splitTheme||b(g[0],"theme",!0),s=r?" ui-btn-"+r:"",t=b(q[0],"icon")||b(g[0],"icon")||x.splitIcon,u="ui-btn ui-btn-icon-notext ui-icon-"+t+s,q.attr("title",a.trim(q.getEncodedText())).addClass(u).empty(),l=l.first()):k&&(d+=" ui-btn-icon-right ui-icon-"+k),l.addClass(d)):m?(v=b(g[0],"theme")||x.dividerTheme||x.theme,h="ui-li-divider ui-bar-"+(v?v:"inherit"),g.attr("role","heading")):l.length<=0&&(h="ui-li-static ui-body-"+(i?i:"inherit")),z&&p&&(o=parseInt(p,10)-1,g.css("counter-reset","listnumbering "+o))),B[h]||(B[h]=[]),B[h].push(g[0]);for(h in B)a(B[h]).addClass(h);C.each(function(){a(this).closest("li").addClass("ui-li-has-count")}),E&&C.not("[class*='ui-body-']").addClass(E),this._addThumbClasses(w),this._addThumbClasses(w.find(".ui-btn")),this._afterListviewRefresh(),this._addFirstLastClasses(w,this._getVisibles(w,c),c)}},a.mobile.behaviors.addFirstLastClasses))}(a),function(a){function b(b){var c=a.trim(b.text())||null;return c?c=c.slice(0,1).toUpperCase():null}a.widget("mobile.listview",a.mobile.listview,{options:{autodividers:!1,autodividersSelector:b},_beforeListviewRefresh:function(){this.options.autodividers&&(this._replaceDividers(),this._superApply(arguments))},_replaceDividers:function(){var b,d,e,f,g,h=null,i=this.element;for(i.children("li:jqmData(role='list-divider')").remove(),d=i.children("li"),b=0;b<d.length;b++)e=d[b],f=this.options.autodividersSelector(a(e)),f&&h!==f&&(g=c.createElement("li"),g.appendChild(c.createTextNode(f)),g.setAttribute("data-"+a.mobile.ns+"role","list-divider"),e.parentNode.insertBefore(g,e)),h=f}})}(a),function(a){var b=/(^|\s)ui-li-divider($|\s)/,c=/(^|\s)ui-screen-hidden($|\s)/;a.widget("mobile.listview",a.mobile.listview,{options:{hideDividers:!1},_afterListviewRefresh:function(){var a,d,e,f=!0;if(this._superApply(arguments),this.options.hideDividers)for(a=this._getChildrenByTagName(this.element[0],"li","LI"),d=a.length-1;d>-1;d--)e=a[d],e.className.match(b)?(f&&(e.className=e.className+" ui-screen-hidden"),f=!0):e.className.match(c)||(f=!1)}})}(a),function(a){a.mobile.nojs=function(b){a(":jqmData(role='nojs')",b).addClass("ui-nojs")}}(a),function(a){a.mobile.behaviors.formReset={_handleFormReset:function(){this._on(this.element.closest("form"),{reset:function(){this._delay("_reset")}})}}}(a),function(a,b){var c=a.mobile.path.hashToSelector;a.widget("mobile.checkboxradio",a.extend({initSelector:"input:not( :jqmData(role='flipswitch' ) )[type='checkbox'],input[type='radio']:not( :jqmData(role='flipswitch' ))",options:{theme:"inherit",mini:!1,wrapperClass:null,enhanced:!1,iconpos:"left"},_create:function(){var b=this.element,c=this.options,d=function(a,b){return a.jqmData(b)||a.closest("form, fieldset").jqmData(b)},e=this.options.enhanced?{element:this.element.siblings("label"),isParent:!1}:this._findLabel(),f=b[0].type,g="ui-"+f+"-on",h="ui-"+f+"-off";("checkbox"===f||"radio"===f)&&(this.element[0].disabled&&(this.options.disabled=!0),c.iconpos=d(b,"iconpos")||e.element.attr("data-"+a.mobile.ns+"iconpos")||c.iconpos,c.mini=d(b,"mini")||c.mini,a.extend(this,{input:b,label:e.element,labelIsParent:e.isParent,inputtype:f,checkedClass:g,uncheckedClass:h}),this.options.enhanced||this._enhance(),this._on(e.element,{vmouseover:"_handleLabelVMouseOver",vclick:"_handleLabelVClick"}),this._on(b,{vmousedown:"_cacheVals",vclick:"_handleInputVClick",focus:"_handleInputFocus",blur:"_handleInputBlur"}),this._handleFormReset(),this.refresh())},_findLabel:function(){var b,d,e,f=this.element,g=f[0].labels;return g&&g.length>0?(d=a(g[0]),e=a.contains(d[0],f[0])):(b=f.closest("label"),e=b.length>0,d=e?b:a(this.document[0].getElementsByTagName("label")).filter("[for='"+c(f[0].id)+"']").first()),{element:d,isParent:e}},_enhance:function(){this.label.addClass("ui-btn ui-corner-all"),this.labelIsParent?this.input.add(this.label).wrapAll(this._wrapper()):(this.element.wrap(this._wrapper()),this.element.parent().prepend(this.label)),this._setOptions({theme:this.options.theme,iconpos:this.options.iconpos,mini:this.options.mini})},_wrapper:function(){return a("<div class='"+(this.options.wrapperClass?this.options.wrapperClass:"")+" ui-"+this.inputtype+(this.options.disabled?" ui-state-disabled":"")+"' ></div>")},_handleInputFocus:function(){this.label.addClass(a.mobile.focusClass)},_handleInputBlur:function(){this.label.removeClass(a.mobile.focusClass)},_handleInputVClick:function(){this.element.prop("checked",this.element.is(":checked")),this._getInputSet().not(this.element).prop("checked",!1),this._updateAll(!0)},_handleLabelVMouseOver:function(a){this.label.parent().hasClass("ui-state-disabled")&&a.stopPropagation()},_handleLabelVClick:function(a){var b=this.element;return b.is(":disabled")?void a.preventDefault():(this._cacheVals(),b.prop("checked","radio"===this.inputtype&&!0||!b.prop("checked")),b.triggerHandler("click"),this._getInputSet().not(b).prop("checked",!1),this._updateAll(),!1)},_cacheVals:function(){this._getInputSet().each(function(){a(this).attr("data-"+a.mobile.ns+"cacheVal",this.checked)})},_getInputSet:function(){var b,d,e=this.element[0],f=e.name,g=e.form,h=this.element.parents().last().get(0),i=this.element;return f&&"radio"===this.inputtype&&h&&(b="input[type='radio'][name='"+c(f)+"']",g?(d=g.getAttribute("id"),d&&(i=a(b+"[form='"+c(d)+"']",h)),i=a(g).find(b).filter(function(){return this.form===g}).add(i)):i=a(b,h).filter(function(){return!this.form})),i},_updateAll:function(b){var c=this;this._getInputSet().each(function(){var d=a(this);!this.checked&&"checkbox"!==c.inputtype||b||d.trigger("change")}).checkboxradio("refresh")},_reset:function(){this.refresh()},_hasIcon:function(){var b,c,d=a.mobile.controlgroup;return d&&(b=this.element.closest(":mobile-controlgroup,"+d.prototype.initSelector),b.length>0)?(c=a.data(b[0],"mobile-controlgroup"),"horizontal"!==(c?c.options.type:b.attr("data-"+a.mobile.ns+"type"))):!0},refresh:function(){var b=this.element[0].checked,c=a.mobile.activeBtnClass,d="ui-btn-icon-"+this.options.iconpos,e=[],f=[];this._hasIcon()?(f.push(c),e.push(d)):(f.push(d),(b?e:f).push(c)),b?(e.push(this.checkedClass),f.push(this.uncheckedClass)):(e.push(this.uncheckedClass),f.push(this.checkedClass)),this.widget().toggleClass("ui-state-disabled",this.element.prop("disabled")),this.label.addClass(e.join(" ")).removeClass(f.join(" "))},widget:function(){return this.label.parent()},_setOptions:function(a){var c=this.label,d=this.options,e=this.widget(),f=this._hasIcon();a.disabled!==b&&(this.input.prop("disabled",!!a.disabled),e.toggleClass("ui-state-disabled",!!a.disabled)),a.mini!==b&&e.toggleClass("ui-mini",!!a.mini),a.theme!==b&&c.removeClass("ui-btn-"+d.theme).addClass("ui-btn-"+a.theme),a.wrapperClass!==b&&e.removeClass(d.wrapperClass).addClass(a.wrapperClass),a.iconpos!==b&&f?c.removeClass("ui-btn-icon-"+d.iconpos).addClass("ui-btn-icon-"+a.iconpos):f||c.removeClass("ui-btn-icon-"+d.iconpos),this._super(a)}},a.mobile.behaviors.formReset))}(a),function(a,b){a.widget("mobile.button",{initSelector:"input[type='button'], input[type='submit'], input[type='reset']",options:{theme:null,icon:null,iconpos:"left",iconshadow:!1,corners:!0,shadow:!0,inline:null,mini:null,wrapperClass:null,enhanced:!1},_create:function(){this.element.is(":disabled")&&(this.options.disabled=!0),this.options.enhanced||this._enhance(),a.extend(this,{wrapper:this.element.parent()}),this._on({focus:function(){this.widget().addClass(a.mobile.focusClass)},blur:function(){this.widget().removeClass(a.mobile.focusClass)}}),this.refresh(!0)},_enhance:function(){this.element.wrap(this._button())},_button:function(){var b=this.options,c=this._getIconClasses(this.options);return a("<div class='ui-btn ui-input-btn"+(b.wrapperClass?" "+b.wrapperClass:"")+(b.theme?" ui-btn-"+b.theme:"")+(b.corners?" ui-corner-all":"")+(b.shadow?" ui-shadow":"")+(b.inline?" ui-btn-inline":"")+(b.mini?" ui-mini":"")+(b.disabled?" ui-state-disabled":"")+(c?" "+c:"")+"' >"+this.element.val()+"</div>")},widget:function(){return this.wrapper},_destroy:function(){this.element.insertBefore(this.wrapper),this.wrapper.remove()},_getIconClasses:function(a){return a.icon?"ui-icon-"+a.icon+(a.iconshadow?" ui-shadow-icon":"")+" ui-btn-icon-"+a.iconpos:""},_setOptions:function(c){var d=this.widget();c.theme!==b&&d.removeClass(this.options.theme).addClass("ui-btn-"+c.theme),c.corners!==b&&d.toggleClass("ui-corner-all",c.corners),c.shadow!==b&&d.toggleClass("ui-shadow",c.shadow),c.inline!==b&&d.toggleClass("ui-btn-inline",c.inline),c.mini!==b&&d.toggleClass("ui-mini",c.mini),c.disabled!==b&&(this.element.prop("disabled",c.disabled),d.toggleClass("ui-state-disabled",c.disabled)),(c.icon!==b||c.iconshadow!==b||c.iconpos!==b)&&d.removeClass(this._getIconClasses(this.options)).addClass(this._getIconClasses(a.extend({},this.options,c))),this._super(c)},refresh:function(b){var c,d=this.element.prop("disabled");this.options.icon&&"notext"===this.options.iconpos&&this.element.attr("title")&&this.element.attr("title",this.element.val()),b||(c=this.element.detach(),a(this.wrapper).text(this.element.val()).append(c)),this.options.disabled!==d&&this._setOptions({disabled:d})}})}(a),function(a){var b=a("meta[name=viewport]"),c=b.attr("content"),d=c+",maximum-scale=1, user-scalable=no",e=c+",maximum-scale=10, user-scalable=yes",f=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(c);a.mobile.zoom=a.extend({},{enabled:!f,locked:!1,disable:function(c){f||a.mobile.zoom.locked||(b.attr("content",d),a.mobile.zoom.enabled=!1,a.mobile.zoom.locked=c||!1)},enable:function(c){f||a.mobile.zoom.locked&&c!==!0||(b.attr("content",e),a.mobile.zoom.enabled=!0,a.mobile.zoom.locked=!1)},restore:function(){f||(b.attr("content",c),a.mobile.zoom.enabled=!0)}})}(a),function(a,b){a.widget("mobile.textinput",{initSelector:"input[type='text'],input[type='search'],:jqmData(type='search'),input[type='number'],:jqmData(type='number'),input[type='password'],input[type='email'],input[type='url'],input[type='tel'],textarea,input[type='time'],input[type='date'],input[type='month'],input[type='week'],input[type='datetime'],input[type='datetime-local'],input[type='color'],input:not([type]),input[type='file']",options:{theme:null,corners:!0,mini:!1,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,wrapperClass:"",enhanced:!1},_create:function(){var b=this.options,c=this.element.is("[type='search'], :jqmData(type='search')"),d="TEXTAREA"===this.element[0].tagName,e=this.element.is("[data-"+(a.mobile.ns||"")+"type='range']"),f=(this.element.is("input")||this.element.is("[data-"+(a.mobile.ns||"")+"type='search']"))&&!e;this.element.prop("disabled")&&(b.disabled=!0),a.extend(this,{classes:this._classesFromOptions(),isSearch:c,isTextarea:d,isRange:e,inputNeedsWrap:f}),this._autoCorrect(),b.enhanced||this._enhance(),this._on({focus:"_handleFocus",blur:"_handleBlur"})},refresh:function(){this.setOptions({disabled:this.element.is(":disabled")})},_enhance:function(){var a=[];this.isTextarea&&a.push("ui-input-text"),(this.isTextarea||this.isRange)&&a.push("ui-shadow-inset"),this.inputNeedsWrap?this.element.wrap(this._wrap()):a=a.concat(this.classes),this.element.addClass(a.join(" "))},widget:function(){return this.inputNeedsWrap?this.element.parent():this.element},_classesFromOptions:function(){var a=this.options,b=[];return b.push("ui-body-"+(null===a.theme?"inherit":a.theme)),a.corners&&b.push("ui-corner-all"),a.mini&&b.push("ui-mini"),a.disabled&&b.push("ui-state-disabled"),a.wrapperClass&&b.push(a.wrapperClass),b
},_wrap:function(){return a("<div class='"+(this.isSearch?"ui-input-search ":"ui-input-text ")+this.classes.join(" ")+" ui-shadow-inset'></div>")},_autoCorrect:function(){"undefined"==typeof this.element[0].autocorrect||a.support.touchOverflow||(this.element[0].setAttribute("autocorrect","off"),this.element[0].setAttribute("autocomplete","off"))},_handleBlur:function(){this.widget().removeClass(a.mobile.focusClass),this.options.preventFocusZoom&&a.mobile.zoom.enable(!0)},_handleFocus:function(){this.options.preventFocusZoom&&a.mobile.zoom.disable(!0),this.widget().addClass(a.mobile.focusClass)},_setOptions:function(a){var c=this.widget();this._super(a),(a.disabled!==b||a.mini!==b||a.corners!==b||a.theme!==b||a.wrapperClass!==b)&&(c.removeClass(this.classes.join(" ")),this.classes=this._classesFromOptions(),c.addClass(this.classes.join(" "))),a.disabled!==b&&this.element.prop("disabled",!!a.disabled)},_destroy:function(){this.options.enhanced||(this.inputNeedsWrap&&this.element.unwrap(),this.element.removeClass("ui-input-text "+this.classes.join(" ")))}})}(a),function(a,d){a.widget("mobile.slider",a.extend({initSelector:"input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",widgetEventPrefix:"slide",options:{theme:null,trackTheme:null,corners:!0,mini:!1,highlight:!1},_create:function(){var e,f,g,h,i,j,k,l,m,n,o=this,p=this.element,q=this.options.trackTheme||a.mobile.getAttribute(p[0],"theme"),r=q?" ui-bar-"+q:" ui-bar-inherit",s=this.options.corners||p.jqmData("corners")?" ui-corner-all":"",t=this.options.mini||p.jqmData("mini")?" ui-mini":"",u=p[0].nodeName.toLowerCase(),v="select"===u,w=p.parent().is(":jqmData(role='rangeslider')"),x=v?"ui-slider-switch":"",y=p.attr("id"),z=a("[for='"+y+"']"),A=z.attr("id")||y+"-label",B=v?0:parseFloat(p.attr("min")),C=v?p.find("option").length-1:parseFloat(p.attr("max")),D=b.parseFloat(p.attr("step")||1),E=c.createElement("a"),F=a(E),G=c.createElement("div"),H=a(G),I=this.options.highlight&&!v?function(){var b=c.createElement("div");return b.className="ui-slider-bg "+a.mobile.activeBtnClass,a(b).prependTo(H)}():!1;if(z.attr("id",A),this.isToggleSwitch=v,E.setAttribute("href","#"),G.setAttribute("role","application"),G.className=[this.isToggleSwitch?"ui-slider ui-slider-track ui-shadow-inset ":"ui-slider-track ui-shadow-inset ",x,r,s,t].join(""),E.className="ui-slider-handle",G.appendChild(E),F.attr({role:"slider","aria-valuemin":B,"aria-valuemax":C,"aria-valuenow":this._value(),"aria-valuetext":this._value(),title:this._value(),"aria-labelledby":A}),a.extend(this,{slider:H,handle:F,control:p,type:u,step:D,max:C,min:B,valuebg:I,isRangeslider:w,dragging:!1,beforeStart:null,userModified:!1,mouseMoved:!1}),v){for(k=p.attr("tabindex"),k&&F.attr("tabindex",k),p.attr("tabindex","-1").focus(function(){a(this).blur(),F.focus()}),f=c.createElement("div"),f.className="ui-slider-inneroffset",g=0,h=G.childNodes.length;h>g;g++)f.appendChild(G.childNodes[g]);for(G.appendChild(f),F.addClass("ui-slider-handle-snapping"),e=p.find("option"),i=0,j=e.length;j>i;i++)l=i?"a":"b",m=i?" "+a.mobile.activeBtnClass:"",n=c.createElement("span"),n.className=["ui-slider-label ui-slider-label-",l,m].join(""),n.setAttribute("role","img"),n.appendChild(c.createTextNode(e[i].innerHTML)),a(n).prependTo(H);o._labels=a(".ui-slider-label",H)}p.addClass(v?"ui-slider-switch":"ui-slider-input"),this._on(p,{change:"_controlChange",keyup:"_controlKeyup",blur:"_controlBlur",vmouseup:"_controlVMouseUp"}),H.bind("vmousedown",a.proxy(this._sliderVMouseDown,this)).bind("vclick",!1),this._on(c,{vmousemove:"_preventDocumentDrag"}),this._on(H.add(c),{vmouseup:"_sliderVMouseUp"}),H.insertAfter(p),v||w||(f=this.options.mini?"<div class='ui-slider ui-mini'>":"<div class='ui-slider'>",p.add(H).wrapAll(f)),this._on(this.handle,{vmousedown:"_handleVMouseDown",keydown:"_handleKeydown",keyup:"_handleKeyup"}),this.handle.bind("vclick",!1),this._handleFormReset(),this.refresh(d,d,!0)},_setOptions:function(a){a.theme!==d&&this._setTheme(a.theme),a.trackTheme!==d&&this._setTrackTheme(a.trackTheme),a.corners!==d&&this._setCorners(a.corners),a.mini!==d&&this._setMini(a.mini),a.highlight!==d&&this._setHighlight(a.highlight),a.disabled!==d&&this._setDisabled(a.disabled),this._super(a)},_controlChange:function(a){return this._trigger("controlchange",a)===!1?!1:void(this.mouseMoved||this.refresh(this._value(),!0))},_controlKeyup:function(){this.refresh(this._value(),!0,!0)},_controlBlur:function(){this.refresh(this._value(),!0)},_controlVMouseUp:function(){this._checkedRefresh()},_handleVMouseDown:function(){this.handle.focus()},_handleKeydown:function(b){var c=this._value();if(!this.options.disabled){switch(b.keyCode){case a.mobile.keyCode.HOME:case a.mobile.keyCode.END:case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:b.preventDefault(),this._keySliding||(this._keySliding=!0,this.handle.addClass("ui-state-active"))}switch(b.keyCode){case a.mobile.keyCode.HOME:this.refresh(this.min);break;case a.mobile.keyCode.END:this.refresh(this.max);break;case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:this.refresh(c+this.step);break;case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:this.refresh(c-this.step)}}},_handleKeyup:function(){this._keySliding&&(this._keySliding=!1,this.handle.removeClass("ui-state-active"))},_sliderVMouseDown:function(a){return this.options.disabled||1!==a.which&&0!==a.which&&a.which!==d?!1:this._trigger("beforestart",a)===!1?!1:(this.dragging=!0,this.userModified=!1,this.mouseMoved=!1,this.isToggleSwitch&&(this.beforeStart=this.element[0].selectedIndex),this.refresh(a),this._trigger("start"),!1)},_sliderVMouseUp:function(){return this.dragging?(this.dragging=!1,this.isToggleSwitch&&(this.handle.addClass("ui-slider-handle-snapping"),this.refresh(this.mouseMoved?this.userModified?0===this.beforeStart?1:0:this.beforeStart:0===this.beforeStart?1:0)),this.mouseMoved=!1,this._trigger("stop"),!1):void 0},_preventDocumentDrag:function(a){return this._trigger("drag",a)===!1?!1:this.dragging&&!this.options.disabled?(this.mouseMoved=!0,this.isToggleSwitch&&this.handle.removeClass("ui-slider-handle-snapping"),this.refresh(a),this.userModified=this.beforeStart!==this.element[0].selectedIndex,!1):void 0},_checkedRefresh:function(){this.value!==this._value()&&this.refresh(this._value())},_value:function(){return this.isToggleSwitch?this.element[0].selectedIndex:parseFloat(this.element.val())},_reset:function(){this.refresh(d,!1,!0)},refresh:function(b,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z=this,A=a.mobile.getAttribute(this.element[0],"theme"),B=this.options.theme||A,C=B?" ui-btn-"+B:"",D=this.options.trackTheme||A,E=D?" ui-bar-"+D:" ui-bar-inherit",F=this.options.corners?" ui-corner-all":"",G=this.options.mini?" ui-mini":"";if(z.slider[0].className=[this.isToggleSwitch?"ui-slider ui-slider-switch ui-slider-track ui-shadow-inset":"ui-slider-track ui-shadow-inset",E,F,G].join(""),(this.options.disabled||this.element.prop("disabled"))&&this.disable(),this.value=this._value(),this.options.highlight&&!this.isToggleSwitch&&0===this.slider.find(".ui-slider-bg").length&&(this.valuebg=function(){var b=c.createElement("div");return b.className="ui-slider-bg "+a.mobile.activeBtnClass,a(b).prependTo(z.slider)}()),this.handle.addClass("ui-btn"+C+" ui-shadow"),l=this.element,m=!this.isToggleSwitch,n=m?[]:l.find("option"),o=m?parseFloat(l.attr("min")):0,p=m?parseFloat(l.attr("max")):n.length-1,q=m&&parseFloat(l.attr("step"))>0?parseFloat(l.attr("step")):1,"object"==typeof b){if(h=b,i=8,f=this.slider.offset().left,g=this.slider.width(),j=g/((p-o)/q),!this.dragging||h.pageX<f-i||h.pageX>f+g+i)return;k=j>1?(h.pageX-f)/g*100:Math.round((h.pageX-f)/g*100)}else null==b&&(b=m?parseFloat(l.val()||0):l[0].selectedIndex),k=(parseFloat(b)-o)/(p-o)*100;if(!isNaN(k)&&(r=k/100*(p-o)+o,s=(r-o)%q,t=r-s,2*Math.abs(s)>=q&&(t+=s>0?q:-q),u=100/((p-o)/q),r=parseFloat(t.toFixed(5)),"undefined"==typeof j&&(j=g/((p-o)/q)),j>1&&m&&(k=(r-o)*u*(1/q)),0>k&&(k=0),k>100&&(k=100),o>r&&(r=o),r>p&&(r=p),this.handle.css("left",k+"%"),this.handle[0].setAttribute("aria-valuenow",m?r:n.eq(r).attr("value")),this.handle[0].setAttribute("aria-valuetext",m?r:n.eq(r).getEncodedText()),this.handle[0].setAttribute("title",m?r:n.eq(r).getEncodedText()),this.valuebg&&this.valuebg.css("width",k+"%"),this._labels&&(v=this.handle.width()/this.slider.width()*100,w=k&&v+(100-v)*k/100,x=100===k?0:Math.min(v+100-w,100),this._labels.each(function(){var b=a(this).hasClass("ui-slider-label-a");a(this).width((b?w:x)+"%")})),!e)){if(y=!1,m?(y=parseFloat(l.val())!==r,l.val(r)):(y=l[0].selectedIndex!==r,l[0].selectedIndex=r),this._trigger("beforechange",b)===!1)return!1;!d&&y&&l.trigger("change")}},_setHighlight:function(a){a=!!a,a?(this.options.highlight=!!a,this.refresh()):this.valuebg&&(this.valuebg.remove(),this.valuebg=!1)},_setTheme:function(a){this.handle.removeClass("ui-btn-"+this.options.theme).addClass("ui-btn-"+a);var b=this.options.theme?this.options.theme:"inherit",c=a?a:"inherit";this.control.removeClass("ui-body-"+b).addClass("ui-body-"+c)},_setTrackTheme:function(a){var b=this.options.trackTheme?this.options.trackTheme:"inherit",c=a?a:"inherit";this.slider.removeClass("ui-body-"+b).addClass("ui-body-"+c)},_setMini:function(a){a=!!a,this.isToggleSwitch||this.isRangeslider||(this.slider.parent().toggleClass("ui-mini",a),this.element.toggleClass("ui-mini",a)),this.slider.toggleClass("ui-mini",a)},_setCorners:function(a){this.slider.toggleClass("ui-corner-all",a),this.isToggleSwitch||this.control.toggleClass("ui-corner-all",a)},_setDisabled:function(a){a=!!a,this.element.prop("disabled",a),this.slider.toggleClass("ui-state-disabled",a).attr("aria-disabled",a),this.element.toggleClass("ui-state-disabled",a)}},a.mobile.behaviors.formReset))}(a),function(a){function b(){return c||(c=a("<div></div>",{"class":"ui-slider-popup ui-shadow ui-corner-all"})),c.clone()}var c;a.widget("mobile.slider",a.mobile.slider,{options:{popupEnabled:!1,showValue:!1},_create:function(){this._super(),a.extend(this,{_currentValue:null,_popup:null,_popupVisible:!1}),this._setOption("popupEnabled",this.options.popupEnabled),this._on(this.handle,{vmousedown:"_showPopup"}),this._on(this.slider.add(this.document),{vmouseup:"_hidePopup"}),this._refresh()},_positionPopup:function(){var a=this.handle.offset();this._popup.offset({left:a.left+(this.handle.width()-this._popup.width())/2,top:a.top-this._popup.outerHeight()-5})},_setOption:function(a,c){this._super(a,c),"showValue"===a?this.handle.html(c&&!this.options.mini?this._value():""):"popupEnabled"===a&&c&&!this._popup&&(this._popup=b().addClass("ui-body-"+(this.options.theme||"a")).hide().insertBefore(this.element))},refresh:function(){this._super.apply(this,arguments),this._refresh()},_refresh:function(){var a,b=this.options;b.popupEnabled&&this.handle.removeAttr("title"),a=this._value(),a!==this._currentValue&&(this._currentValue=a,b.popupEnabled&&this._popup&&(this._positionPopup(),this._popup.html(a)),b.showValue&&!this.options.mini&&this.handle.html(a))},_showPopup:function(){this.options.popupEnabled&&!this._popupVisible&&(this.handle.html(""),this._popup.show(),this._positionPopup(),this._popupVisible=!0)},_hidePopup:function(){var a=this.options;a.popupEnabled&&this._popupVisible&&(a.showValue&&!a.mini&&this.handle.html(this._value()),this._popup.hide(),this._popupVisible=!1)}})}(a),function(a,b){a.widget("mobile.flipswitch",a.extend({options:{onText:"On",offText:"Off",theme:null,enhanced:!1,wrapperClass:null,corners:!0,mini:!1},_create:function(){this.options.enhanced?a.extend(this,{flipswitch:this.element.parent(),on:this.element.find(".ui-flipswitch-on").eq(0),off:this.element.find(".ui-flipswitch-off").eq(0),type:this.element.get(0).tagName}):this._enhance(),this._handleFormReset(),this._originalTabIndex=this.element.attr("tabindex"),null!=this._originalTabIndex&&this.on.attr("tabindex",this._originalTabIndex),this.element.attr("tabindex","-1"),this._on({focus:"_handleInputFocus"}),this.element.is(":disabled")&&this._setOptions({disabled:!0}),this._on(this.flipswitch,{click:"_toggle",swipeleft:"_left",swiperight:"_right"}),this._on(this.on,{keydown:"_keydown"}),this._on({change:"refresh"})},_handleInputFocus:function(){this.on.focus()},widget:function(){return this.flipswitch},_left:function(){this.flipswitch.removeClass("ui-flipswitch-active"),"SELECT"===this.type?this.element.get(0).selectedIndex=0:this.element.prop("checked",!1),this.element.trigger("change")},_right:function(){this.flipswitch.addClass("ui-flipswitch-active"),"SELECT"===this.type?this.element.get(0).selectedIndex=1:this.element.prop("checked",!0),this.element.trigger("change")},_enhance:function(){var b=a("<div>"),c=this.options,d=this.element,e=c.theme?c.theme:"inherit",f=a("<a></a>",{href:"#"}),g=a("<span></span>"),h=d.get(0).tagName,i="INPUT"===h?c.onText:d.find("option").eq(1).text(),j="INPUT"===h?c.offText:d.find("option").eq(0).text();f.addClass("ui-flipswitch-on ui-btn ui-shadow ui-btn-inherit").text(i),g.addClass("ui-flipswitch-off").text(j),b.addClass("ui-flipswitch ui-shadow-inset ui-bar-"+e+" "+(c.wrapperClass?c.wrapperClass:"")+" "+(d.is(":checked")||d.find("option").eq(1).is(":selected")?"ui-flipswitch-active":"")+(d.is(":disabled")?" ui-state-disabled":"")+(c.corners?" ui-corner-all":"")+(c.mini?" ui-mini":"")).append(f,g),d.addClass("ui-flipswitch-input").after(b).appendTo(b),a.extend(this,{flipswitch:b,on:f,off:g,type:h})},_reset:function(){this.refresh()},refresh:function(){var a,b=this.flipswitch.hasClass("ui-flipswitch-active")?"_right":"_left";a="SELECT"===this.type?this.element.get(0).selectedIndex>0?"_right":"_left":this.element.prop("checked")?"_right":"_left",a!==b&&this[a]()},_toggle:function(){var a=this.flipswitch.hasClass("ui-flipswitch-active")?"_left":"_right";this[a]()},_keydown:function(b){b.which===a.mobile.keyCode.LEFT?this._left():b.which===a.mobile.keyCode.RIGHT?this._right():b.which===a.mobile.keyCode.SPACE&&(this._toggle(),b.preventDefault())},_setOptions:function(a){if(a.theme!==b){var c=a.theme?a.theme:"inherit",d=a.theme?a.theme:"inherit";this.widget().removeClass("ui-bar-"+c).addClass("ui-bar-"+d)}a.onText!==b&&this.on.text(a.onText),a.offText!==b&&this.off.text(a.offText),a.disabled!==b&&this.widget().toggleClass("ui-state-disabled",a.disabled),a.mini!==b&&this.widget().toggleClass("ui-mini",a.mini),a.corners!==b&&this.widget().toggleClass("ui-corner-all",a.corners),this._super(a)},_destroy:function(){this.options.enhanced||(null!=this._originalTabIndex?this.element.attr("tabindex",this._originalTabIndex):this.element.removeAttr("tabindex"),this.on.remove(),this.off.remove(),this.element.unwrap(),this.flipswitch.remove(),this.removeClass("ui-flipswitch-input"))}},a.mobile.behaviors.formReset))}(a),function(a,b){a.widget("mobile.rangeslider",a.extend({options:{theme:null,trackTheme:null,corners:!0,mini:!1,highlight:!0},_create:function(){var b=this.element,c=this.options.mini?"ui-rangeslider ui-mini":"ui-rangeslider",d=b.find("input").first(),e=b.find("input").last(),f=b.find("label").first(),g=a.data(d.get(0),"mobile-slider")||a.data(d.slider().get(0),"mobile-slider"),h=a.data(e.get(0),"mobile-slider")||a.data(e.slider().get(0),"mobile-slider"),i=g.slider,j=h.slider,k=g.handle,l=a("<div class='ui-rangeslider-sliders' />").appendTo(b);d.addClass("ui-rangeslider-first"),e.addClass("ui-rangeslider-last"),b.addClass(c),i.appendTo(l),j.appendTo(l),f.insertBefore(b),k.prependTo(j),a.extend(this,{_inputFirst:d,_inputLast:e,_sliderFirst:i,_sliderLast:j,_label:f,_targetVal:null,_sliderTarget:!1,_sliders:l,_proxy:!1}),this.refresh(),this._on(this.element.find("input.ui-slider-input"),{slidebeforestart:"_slidebeforestart",slidestop:"_slidestop",slidedrag:"_slidedrag",slidebeforechange:"_change",blur:"_change",keyup:"_change"}),this._on({mousedown:"_change"}),this._on(this.element.closest("form"),{reset:"_handleReset"}),this._on(k,{vmousedown:"_dragFirstHandle"})},_handleReset:function(){var a=this;setTimeout(function(){a._updateHighlight()},0)},_dragFirstHandle:function(b){return a.data(this._inputFirst.get(0),"mobile-slider").dragging=!0,a.data(this._inputFirst.get(0),"mobile-slider").refresh(b),a.data(this._inputFirst.get(0),"mobile-slider")._trigger("start"),!1},_slidedrag:function(b){var c=a(b.target).is(this._inputFirst),d=c?this._inputLast:this._inputFirst;return this._sliderTarget=!1,"first"===this._proxy&&c||"last"===this._proxy&&!c?(a.data(d.get(0),"mobile-slider").dragging=!0,a.data(d.get(0),"mobile-slider").refresh(b),!1):void 0},_slidestop:function(b){var c=a(b.target).is(this._inputFirst);this._proxy=!1,this.element.find("input").trigger("vmouseup"),this._sliderFirst.css("z-index",c?1:"")},_slidebeforestart:function(b){this._sliderTarget=!1,a(b.originalEvent.target).hasClass("ui-slider-track")&&(this._sliderTarget=!0,this._targetVal=a(b.target).val())},_setOptions:function(a){a.theme!==b&&this._setTheme(a.theme),a.trackTheme!==b&&this._setTrackTheme(a.trackTheme),a.mini!==b&&this._setMini(a.mini),a.highlight!==b&&this._setHighlight(a.highlight),a.disabled!==b&&this._setDisabled(a.disabled),this._super(a),this.refresh()},refresh:function(){var a=this.element,b=this.options;(this._inputFirst.is(":disabled")||this._inputLast.is(":disabled"))&&(this.options.disabled=!0),a.find("input").slider({theme:b.theme,trackTheme:b.trackTheme,disabled:b.disabled,corners:b.corners,mini:b.mini,highlight:b.highlight}).slider("refresh"),this._updateHighlight()},_change:function(b){if("keyup"===b.type)return this._updateHighlight(),!1;var c=this,d=parseFloat(this._inputFirst.val(),10),e=parseFloat(this._inputLast.val(),10),f=a(b.target).hasClass("ui-rangeslider-first"),g=f?this._inputFirst:this._inputLast,h=f?this._inputLast:this._inputFirst;if(this._inputFirst.val()>this._inputLast.val()&&"mousedown"===b.type&&!a(b.target).hasClass("ui-slider-handle"))g.blur();else if("mousedown"===b.type)return;return d>e&&!this._sliderTarget?(g.val(f?e:d).slider("refresh"),this._trigger("normalize")):d>e&&(g.val(this._targetVal).slider("refresh"),setTimeout(function(){h.val(f?d:e).slider("refresh"),a.data(h.get(0),"mobile-slider").handle.focus(),c._sliderFirst.css("z-index",f?"":1),c._trigger("normalize")},0),this._proxy=f?"first":"last"),d===e?(a.data(g.get(0),"mobile-slider").handle.css("z-index",1),a.data(h.get(0),"mobile-slider").handle.css("z-index",0)):(a.data(h.get(0),"mobile-slider").handle.css("z-index",""),a.data(g.get(0),"mobile-slider").handle.css("z-index","")),this._updateHighlight(),d>=e?!1:void 0},_updateHighlight:function(){var b=parseInt(a.data(this._inputFirst.get(0),"mobile-slider").handle.get(0).style.left,10),c=parseInt(a.data(this._inputLast.get(0),"mobile-slider").handle.get(0).style.left,10),d=c-b;this.element.find(".ui-slider-bg").css({"margin-left":b+"%",width:d+"%"})},_setTheme:function(a){this._inputFirst.slider("option","theme",a),this._inputLast.slider("option","theme",a)},_setTrackTheme:function(a){this._inputFirst.slider("option","trackTheme",a),this._inputLast.slider("option","trackTheme",a)},_setMini:function(a){this._inputFirst.slider("option","mini",a),this._inputLast.slider("option","mini",a),this.element.toggleClass("ui-mini",!!a)},_setHighlight:function(a){this._inputFirst.slider("option","highlight",a),this._inputLast.slider("option","highlight",a)},_setDisabled:function(a){this._inputFirst.prop("disabled",a),this._inputLast.prop("disabled",a)},_destroy:function(){this._label.prependTo(this.element),this.element.removeClass("ui-rangeslider ui-mini"),this._inputFirst.after(this._sliderFirst),this._inputLast.after(this._sliderLast),this._sliders.remove(),this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")}},a.mobile.behaviors.formReset))}(a),function(a,b){a.widget("mobile.textinput",a.mobile.textinput,{options:{clearBtn:!1,clearBtnText:"Clear text"},_create:function(){this._super(),this.isSearch&&(this.options.clearBtn=!0),this.options.clearBtn&&this.inputNeedsWrap&&this._addClearBtn()},clearButton:function(){return a("<a href='#' tabindex='-1' aria-hidden='true' class='ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all'></a>").attr("title",this.options.clearBtnText).text(this.options.clearBtnText)},_clearBtnClick:function(a){this.element.val("").focus().trigger("change"),this._clearBtn.addClass("ui-input-clear-hidden"),a.preventDefault()},_addClearBtn:function(){this.options.enhanced||this._enhanceClear(),a.extend(this,{_clearBtn:this.widget().find("a.ui-input-clear")}),this._bindClearEvents(),this._toggleClear()},_enhanceClear:function(){this.clearButton().appendTo(this.widget()),this.widget().addClass("ui-input-has-clear")},_bindClearEvents:function(){this._on(this._clearBtn,{click:"_clearBtnClick"}),this._on({keyup:"_toggleClear",change:"_toggleClear",input:"_toggleClear",focus:"_toggleClear",blur:"_toggleClear",cut:"_toggleClear",paste:"_toggleClear"})},_unbindClear:function(){this._off(this._clearBtn,"click"),this._off(this.element,"keyup change input focus blur cut paste")},_setOptions:function(a){this._super(a),a.clearBtn===b||this.element.is("textarea, :jqmData(type='range')")||(a.clearBtn?this._addClearBtn():this._destroyClear()),a.clearBtnText!==b&&this._clearBtn!==b&&this._clearBtn.text(a.clearBtnText).attr("title",a.clearBtnText)},_toggleClear:function(){this._delay("_toggleClearClass",0)},_toggleClearClass:function(){this._clearBtn.toggleClass("ui-input-clear-hidden",!this.element.val())},_destroyClear:function(){this.widget().removeClass("ui-input-has-clear"),this._unbindClear(),this._clearBtn.remove()},_destroy:function(){this._super(),this.options.clearBtn&&this._destroyClear()}})}(a),function(a,b){a.widget("mobile.textinput",a.mobile.textinput,{options:{autogrow:!0,keyupTimeoutBuffer:100},_create:function(){this._super(),this.options.autogrow&&this.isTextarea&&this._autogrow()},_autogrow:function(){this.element.addClass("ui-textinput-autogrow"),this._on({keyup:"_timeout",change:"_timeout",input:"_timeout",paste:"_timeout"}),this._on(!0,this.document,{pageshow:"_handleShow",popupbeforeposition:"_handleShow",updatelayout:"_handleShow",panelopen:"_handleShow"})},_handleShow:function(b){a.contains(b.target,this.element[0])&&this.element.is(":visible")&&("popupbeforeposition"!==b.type&&this.element.addClass("ui-textinput-autogrow-resize").animationComplete(a.proxy(function(){this.element.removeClass("ui-textinput-autogrow-resize")},this),"transition"),this._prepareHeightUpdate())},_unbindAutogrow:function(){this.element.removeClass("ui-textinput-autogrow"),this._off(this.element,"keyup change input paste"),this._off(this.document,"pageshow popupbeforeposition updatelayout panelopen")},keyupTimeout:null,_prepareHeightUpdate:function(a){this.keyupTimeout&&clearTimeout(this.keyupTimeout),a===b?this._updateHeight():this.keyupTimeout=this._delay("_updateHeight",a)},_timeout:function(){this._prepareHeightUpdate(this.options.keyupTimeoutBuffer)},_updateHeight:function(){var a,b,c,d,e,f,g,h,i,j=this.window.scrollTop();this.keyupTimeout=0,"onpage"in this.element[0]||this.element.css({height:0,"min-height":0,"max-height":0}),d=this.element[0].scrollHeight,e=this.element[0].clientHeight,f=parseFloat(this.element.css("border-top-width")),g=parseFloat(this.element.css("border-bottom-width")),h=f+g,i=d+h+15,0===e&&(a=parseFloat(this.element.css("padding-top")),b=parseFloat(this.element.css("padding-bottom")),c=a+b,i+=c),this.element.css({height:i,"min-height":"","max-height":""}),this.window.scrollTop(j)},refresh:function(){this.options.autogrow&&this.isTextarea&&this._updateHeight()},_setOptions:function(a){this._super(a),a.autogrow!==b&&this.isTextarea&&(a.autogrow?this._autogrow():this._unbindAutogrow())}})}(a),function(a){a.widget("mobile.selectmenu",a.extend({initSelector:"select:not( :jqmData(role='slider')):not( :jqmData(role='flipswitch') )",options:{theme:null,icon:"carat-d",iconpos:"right",inline:!1,corners:!0,shadow:!0,iconshadow:!1,overlayTheme:null,dividerTheme:null,hidePlaceholderMenuItems:!0,closeText:"Close",nativeMenu:!0,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,mini:!1},_button:function(){return a("<div/>")},_setDisabled:function(a){return this.element.attr("disabled",a),this.button.attr("aria-disabled",a),this._setOption("disabled",a)},_focusButton:function(){var a=this;setTimeout(function(){a.button.focus()},40)},_selectOptions:function(){return this.select.find("option")},_preExtension:function(){var b=this.options.inline||this.element.jqmData("inline"),c=this.options.mini||this.element.jqmData("mini"),d="";~this.element[0].className.indexOf("ui-btn-left")&&(d=" ui-btn-left"),~this.element[0].className.indexOf("ui-btn-right")&&(d=" ui-btn-right"),b&&(d+=" ui-btn-inline"),c&&(d+=" ui-mini"),this.select=this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select"+d+"'>"),this.selectId=this.select.attr("id")||"select-"+this.uuid,this.buttonId=this.selectId+"-button",this.label=a("label[for='"+this.selectId+"']"),this.isMultiple=this.select[0].multiple},_destroy:function(){var a=this.element.parents(".ui-select");a.length>0&&(a.is(".ui-btn-left, .ui-btn-right")&&this.element.addClass(a.hasClass("ui-btn-left")?"ui-btn-left":"ui-btn-right"),this.element.insertAfter(a),a.remove())},_create:function(){this._preExtension(),this.button=this._button();var c=this,d=this.options,e=d.icon?d.iconpos||this.select.jqmData("iconpos"):!1,f=this.button.insertBefore(this.select).attr("id",this.buttonId).addClass("ui-btn"+(d.icon?" ui-icon-"+d.icon+" ui-btn-icon-"+e+(d.iconshadow?" ui-shadow-icon":""):"")+(d.theme?" ui-btn-"+d.theme:"")+(d.corners?" ui-corner-all":"")+(d.shadow?" ui-shadow":""));this.setButtonText(),d.nativeMenu&&b.opera&&b.opera.version&&f.addClass("ui-select-nativeonly"),this.isMultiple&&(this.buttonCount=a("<span>").addClass("ui-li-count ui-body-inherit").hide().appendTo(f.addClass("ui-li-has-count"))),(d.disabled||this.element.attr("disabled"))&&this.disable(),this.select.change(function(){c.refresh(),d.nativeMenu&&c._delay(function(){c.select.blur()})}),this._handleFormReset(),this._on(this.button,{keydown:"_handleKeydown"}),this.build()},build:function(){var b=this;this.select.appendTo(b.button).bind("vmousedown",function(){b.button.addClass(a.mobile.activeBtnClass)}).bind("focus",function(){b.button.addClass(a.mobile.focusClass)}).bind("blur",function(){b.button.removeClass(a.mobile.focusClass)}).bind("focus vmouseover",function(){b.button.trigger("vmouseover")}).bind("vmousemove",function(){b.button.removeClass(a.mobile.activeBtnClass)}).bind("change blur vmouseout",function(){b.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)}),b.button.bind("vmousedown",function(){b.options.preventFocusZoom&&a.mobile.zoom.disable(!0)}),b.label.bind("click focus",function(){b.options.preventFocusZoom&&a.mobile.zoom.disable(!0)}),b.select.bind("focus",function(){b.options.preventFocusZoom&&a.mobile.zoom.disable(!0)}),b.button.bind("mouseup",function(){b.options.preventFocusZoom&&setTimeout(function(){a.mobile.zoom.enable(!0)},0)}),b.select.bind("blur",function(){b.options.preventFocusZoom&&a.mobile.zoom.enable(!0)})},selected:function(){return this._selectOptions().filter(":selected")},selectedIndices:function(){var a=this;return this.selected().map(function(){return a._selectOptions().index(this)}).get()},setButtonText:function(){var b=this,d=this.selected(),e=this.placeholder,f=a(c.createElement("span"));this.button.children("span").not(".ui-li-count").remove().end().end().prepend(function(){return e=d.length?d.map(function(){return a(this).text()}).get().join(", "):b.placeholder,e?f.text(e):f.html("&#160;"),f.addClass(b.select.attr("class")).addClass(d.attr("class")).removeClass("ui-screen-hidden")}())},setButtonCount:function(){var a=this.selected();this.isMultiple&&this.buttonCount[a.length>1?"show":"hide"]().text(a.length)},_handleKeydown:function(){this._delay("_refreshButton")},_reset:function(){this.refresh()},_refreshButton:function(){this.setButtonText(),this.setButtonCount()},refresh:function(){this._refreshButton()},open:a.noop,close:a.noop,disable:function(){this._setDisabled(!0),this.button.addClass("ui-state-disabled")},enable:function(){this._setDisabled(!1),this.button.removeClass("ui-state-disabled")}},a.mobile.behaviors.formReset))}(a),function(a){a.mobile.links=function(b){a(b).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function(){var a=this,b=a.getAttribute("href").substring(1);b&&(a.setAttribute("aria-haspopup",!0),a.setAttribute("aria-owns",b),a.setAttribute("aria-expanded",!1))}).end().not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")}}(a),function(a,c){function d(a,b,c,d){var e=d;return e=b>a?c+(a-b)/2:Math.min(Math.max(c,d-b/2),c+a-b)}function e(a){return{x:a.scrollLeft(),y:a.scrollTop(),cx:a[0].innerWidth||a.width(),cy:a[0].innerHeight||a.height()}}a.widget("mobile.popup",{options:{wrapperClass:null,theme:null,overlayTheme:null,shadow:!0,corners:!0,transition:"none",positionTo:"origin",tolerance:null,closeLinkSelector:"a:jqmData(rel='back')",closeLinkEvents:"click.popup",navigateEvents:"navigate.popup",closeEvents:"navigate.popup pagebeforechange.popup",dismissible:!0,enhanced:!1,history:!a.mobile.browser.oldIE},_handleDocumentVmousedown:function(b){this._isOpen&&a.contains(this._ui.container[0],b.target)&&this._ignoreResizeEvents()},_create:function(){var b=this.element,c=b.attr("id"),d=this.options;d.history=d.history&&a.mobile.ajaxEnabled&&a.mobile.hashListeningEnabled,this._on(this.document,{vmousedown:"_handleDocumentVmousedown"}),a.extend(this,{_scrollTop:0,_page:b.closest(".ui-page"),_ui:null,_fallbackTransition:"",_currentTransition:!1,_prerequisites:null,_isOpen:!1,_tolerance:null,_resizeData:null,_ignoreResizeTo:0,_orientationchangeInProgress:!1}),0===this._page.length&&(this._page=a("body")),d.enhanced?this._ui={container:b.parent(),screen:b.parent().prev(),placeholder:a(this.document[0].getElementById(c+"-placeholder"))}:(this._ui=this._enhance(b,c),this._applyTransition(d.transition)),this._setTolerance(d.tolerance)._ui.focusElement=this._ui.container,this._on(this._ui.screen,{vclick:"_eatEventAndClose"}),this._on(this.window,{orientationchange:a.proxy(this,"_handleWindowOrientationchange"),resize:a.proxy(this,"_handleWindowResize"),keyup:a.proxy(this,"_handleWindowKeyUp")}),this._on(this.document,{focusin:"_handleDocumentFocusIn"})},_enhance:function(b,c){var d=this.options,e=d.wrapperClass,f={screen:a("<div class='ui-screen-hidden ui-popup-screen "+this._themeClassFromOption("ui-overlay-",d.overlayTheme)+"'></div>"),placeholder:a("<div style='display: none;'><!-- placeholder --></div>"),container:a("<div class='ui-popup-container ui-popup-hidden ui-popup-truncate"+(e?" "+e:"")+"'></div>")},g=this.document[0].createDocumentFragment();return g.appendChild(f.screen[0]),g.appendChild(f.container[0]),c&&(f.screen.attr("id",c+"-screen"),f.container.attr("id",c+"-popup"),f.placeholder.attr("id",c+"-placeholder").html("<!-- placeholder for "+c+" -->")),this._page[0].appendChild(g),f.placeholder.insertAfter(b),b.detach().addClass("ui-popup "+this._themeClassFromOption("ui-body-",d.theme)+" "+(d.shadow?"ui-overlay-shadow ":"")+(d.corners?"ui-corner-all ":"")).appendTo(f.container),f},_eatEventAndClose:function(a){return a.preventDefault(),a.stopImmediatePropagation(),this.options.dismissible&&this.close(),!1},_resizeScreen:function(){var a=this._ui.screen,b=this._ui.container.outerHeight(!0),c=a.removeAttr("style").height(),d=this.document.height()-1;d>c?a.height(d):b>c&&a.height(b)},_handleWindowKeyUp:function(b){return this._isOpen&&b.keyCode===a.mobile.keyCode.ESCAPE?this._eatEventAndClose(b):void 0},_expectResizeEvent:function(){var a=e(this.window);
if(this._resizeData){if(a.x===this._resizeData.windowCoordinates.x&&a.y===this._resizeData.windowCoordinates.y&&a.cx===this._resizeData.windowCoordinates.cx&&a.cy===this._resizeData.windowCoordinates.cy)return!1;clearTimeout(this._resizeData.timeoutId)}return this._resizeData={timeoutId:this._delay("_resizeTimeout",200),windowCoordinates:a},!0},_resizeTimeout:function(){this._isOpen?this._expectResizeEvent()||(this._ui.container.hasClass("ui-popup-hidden")&&(this._ui.container.removeClass("ui-popup-hidden ui-popup-truncate"),this.reposition({positionTo:"window"}),this._ignoreResizeEvents()),this._resizeScreen(),this._resizeData=null,this._orientationchangeInProgress=!1):(this._resizeData=null,this._orientationchangeInProgress=!1)},_stopIgnoringResizeEvents:function(){this._ignoreResizeTo=0},_ignoreResizeEvents:function(){this._ignoreResizeTo&&clearTimeout(this._ignoreResizeTo),this._ignoreResizeTo=this._delay("_stopIgnoringResizeEvents",1e3)},_handleWindowResize:function(){this._isOpen&&0===this._ignoreResizeTo&&(!this._expectResizeEvent()&&!this._orientationchangeInProgress||this._ui.container.hasClass("ui-popup-hidden")||this._ui.container.addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style"))},_handleWindowOrientationchange:function(){!this._orientationchangeInProgress&&this._isOpen&&0===this._ignoreResizeTo&&(this._expectResizeEvent(),this._orientationchangeInProgress=!0)},_handleDocumentFocusIn:function(b){var c,d=b.target,e=this._ui;if(this._isOpen){if(d!==e.container[0]){if(c=a(d),!a.contains(e.container[0],d))return a(this.document[0].activeElement).one("focus",a.proxy(function(){this._safelyBlur(d)},this)),e.focusElement.focus(),b.preventDefault(),b.stopImmediatePropagation(),!1;e.focusElement[0]===e.container[0]&&(e.focusElement=c)}this._ignoreResizeEvents()}},_themeClassFromOption:function(a,b){return b?"none"===b?"":a+b:a+"inherit"},_applyTransition:function(b){return b&&(this._ui.container.removeClass(this._fallbackTransition),"none"!==b&&(this._fallbackTransition=a.mobile._maybeDegradeTransition(b),"none"===this._fallbackTransition&&(this._fallbackTransition=""),this._ui.container.addClass(this._fallbackTransition))),this},_setOptions:function(a){var b=this.options,d=this.element,e=this._ui.screen;return a.wrapperClass!==c&&this._ui.container.removeClass(b.wrapperClass).addClass(a.wrapperClass),a.theme!==c&&d.removeClass(this._themeClassFromOption("ui-body-",b.theme)).addClass(this._themeClassFromOption("ui-body-",a.theme)),a.overlayTheme!==c&&(e.removeClass(this._themeClassFromOption("ui-overlay-",b.overlayTheme)).addClass(this._themeClassFromOption("ui-overlay-",a.overlayTheme)),this._isOpen&&e.addClass("in")),a.shadow!==c&&d.toggleClass("ui-overlay-shadow",a.shadow),a.corners!==c&&d.toggleClass("ui-corner-all",a.corners),a.transition!==c&&(this._currentTransition||this._applyTransition(a.transition)),a.tolerance!==c&&this._setTolerance(a.tolerance),a.disabled!==c&&a.disabled&&this.close(),this._super(a)},_setTolerance:function(b){var d,e={t:30,r:15,b:30,l:15};if(b!==c)switch(d=String(b).split(","),a.each(d,function(a,b){d[a]=parseInt(b,10)}),d.length){case 1:isNaN(d[0])||(e.t=e.r=e.b=e.l=d[0]);break;case 2:isNaN(d[0])||(e.t=e.b=d[0]),isNaN(d[1])||(e.l=e.r=d[1]);break;case 4:isNaN(d[0])||(e.t=d[0]),isNaN(d[1])||(e.r=d[1]),isNaN(d[2])||(e.b=d[2]),isNaN(d[3])||(e.l=d[3])}return this._tolerance=e,this},_clampPopupWidth:function(a){var b,c=e(this.window),d={x:this._tolerance.l,y:c.y+this._tolerance.t,cx:c.cx-this._tolerance.l-this._tolerance.r,cy:c.cy-this._tolerance.t-this._tolerance.b};return a||this._ui.container.css("max-width",d.cx),b={cx:this._ui.container.outerWidth(!0),cy:this._ui.container.outerHeight(!0)},{rc:d,menuSize:b}},_calculateFinalLocation:function(a,b){var c,e=b.rc,f=b.menuSize;return c={left:d(e.cx,f.cx,e.x,a.x),top:d(e.cy,f.cy,e.y,a.y)},c.top=Math.max(0,c.top),c.top-=Math.min(c.top,Math.max(0,c.top+f.cy-this.document.height())),c},_placementCoords:function(a){return this._calculateFinalLocation(a,this._clampPopupWidth())},_createPrerequisites:function(b,c,d){var e,f=this;e={screen:a.Deferred(),container:a.Deferred()},e.screen.then(function(){e===f._prerequisites&&b()}),e.container.then(function(){e===f._prerequisites&&c()}),a.when(e.screen,e.container).done(function(){e===f._prerequisites&&(f._prerequisites=null,d())}),f._prerequisites=e},_animate:function(b){return this._ui.screen.removeClass(b.classToRemove).addClass(b.screenClassToAdd),b.prerequisites.screen.resolve(),b.transition&&"none"!==b.transition&&(b.applyTransition&&this._applyTransition(b.transition),this._fallbackTransition)?void this._ui.container.addClass(b.containerClassToAdd).removeClass(b.classToRemove).animationComplete(a.proxy(b.prerequisites.container,"resolve")):(this._ui.container.removeClass(b.classToRemove),void b.prerequisites.container.resolve())},_desiredCoords:function(b){var c,d=null,f=e(this.window),g=b.x,h=b.y,i=b.positionTo;if(i&&"origin"!==i)if("window"===i)g=f.cx/2+f.x,h=f.cy/2+f.y;else{try{d=a(i)}catch(j){d=null}d&&(d.filter(":visible"),0===d.length&&(d=null))}return d&&(c=d.offset(),g=c.left+d.outerWidth()/2,h=c.top+d.outerHeight()/2),("number"!==a.type(g)||isNaN(g))&&(g=f.cx/2+f.x),("number"!==a.type(h)||isNaN(h))&&(h=f.cy/2+f.y),{x:g,y:h}},_reposition:function(a){a={x:a.x,y:a.y,positionTo:a.positionTo},this._trigger("beforeposition",c,a),this._ui.container.offset(this._placementCoords(this._desiredCoords(a)))},reposition:function(a){this._isOpen&&this._reposition(a)},_safelyBlur:function(b){b!==this.window[0]&&"body"!==b.nodeName.toLowerCase()&&a(b).blur()},_openPrerequisitesComplete:function(){var b=this.element.attr("id"),c=this._ui.container.find(":focusable").first();this._ui.container.addClass("ui-popup-active"),this._isOpen=!0,this._resizeScreen(),a.contains(this._ui.container[0],this.document[0].activeElement)||this._safelyBlur(this.document[0].activeElement),c.length>0&&(this._ui.focusElement=c),this._ignoreResizeEvents(),b&&this.document.find("[aria-haspopup='true'][aria-owns='"+b+"']").attr("aria-expanded",!0),this._trigger("afteropen")},_open:function(b){var c=a.extend({},this.options,b),d=function(){var a=navigator.userAgent,b=a.match(/AppleWebKit\/([0-9\.]+)/),c=!!b&&b[1],d=a.match(/Android (\d+(?:\.\d+))/),e=!!d&&d[1],f=a.indexOf("Chrome")>-1;return null!==d&&"4.0"===e&&c&&c>534.13&&!f?!0:!1}();this._createPrerequisites(a.noop,a.noop,a.proxy(this,"_openPrerequisitesComplete")),this._currentTransition=c.transition,this._applyTransition(c.transition),this._ui.screen.removeClass("ui-screen-hidden"),this._ui.container.removeClass("ui-popup-truncate"),this._reposition(c),this._ui.container.removeClass("ui-popup-hidden"),this.options.overlayTheme&&d&&this.element.closest(".ui-page").addClass("ui-popup-open"),this._animate({additionalCondition:!0,transition:c.transition,classToRemove:"",screenClassToAdd:"in",containerClassToAdd:"in",applyTransition:!1,prerequisites:this._prerequisites})},_closePrerequisiteScreen:function(){this._ui.screen.removeClass("out").addClass("ui-screen-hidden")},_closePrerequisiteContainer:function(){this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden ui-popup-truncate").removeAttr("style")},_closePrerequisitesDone:function(){var b=this._ui.container,d=this.element.attr("id");a.mobile.popup.active=c,a(":focus",b[0]).add(b[0]).blur(),d&&this.document.find("[aria-haspopup='true'][aria-owns='"+d+"']").attr("aria-expanded",!1),this._trigger("afterclose")},_close:function(b){this._ui.container.removeClass("ui-popup-active"),this._page.removeClass("ui-popup-open"),this._isOpen=!1,this._createPrerequisites(a.proxy(this,"_closePrerequisiteScreen"),a.proxy(this,"_closePrerequisiteContainer"),a.proxy(this,"_closePrerequisitesDone")),this._animate({additionalCondition:this._ui.screen.hasClass("in"),transition:b?"none":this._currentTransition,classToRemove:"in",screenClassToAdd:"out",containerClassToAdd:"reverse out",applyTransition:!0,prerequisites:this._prerequisites})},_unenhance:function(){this.options.enhanced||(this._setOptions({theme:a.mobile.popup.prototype.options.theme}),this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all ui-body-inherit"),this._ui.screen.remove(),this._ui.container.remove(),this._ui.placeholder.remove())},_destroy:function(){return a.mobile.popup.active===this?(this.element.one("popupafterclose",a.proxy(this,"_unenhance")),this.close()):this._unenhance(),this},_closePopup:function(c,d){var e,f,g=this.options,h=!1;c&&c.isDefaultPrevented()||a.mobile.popup.active!==this||(b.scrollTo(0,this._scrollTop),c&&"pagebeforechange"===c.type&&d&&(e="string"==typeof d.toPage?d.toPage:d.toPage.jqmData("url"),e=a.mobile.path.parseUrl(e),f=e.pathname+e.search+e.hash,this._myUrl!==a.mobile.path.makeUrlAbsolute(f)?h=!0:c.preventDefault()),this.window.off(g.closeEvents),this.element.undelegate(g.closeLinkSelector,g.closeLinkEvents),this._close(h))},_bindContainerClose:function(){this.window.on(this.options.closeEvents,a.proxy(this,"_closePopup"))},widget:function(){return this._ui.container},open:function(b){var c,d,e,f,g,h,i=this,j=this.options;return a.mobile.popup.active||j.disabled?this:(a.mobile.popup.active=this,this._scrollTop=this.window.scrollTop(),j.history?(h=a.mobile.navigate.history,d=a.mobile.dialogHashKey,e=a.mobile.activePage,f=e?e.hasClass("ui-dialog"):!1,this._myUrl=c=h.getActive().url,(g=c.indexOf(d)>-1&&!f&&h.activeIndex>0)?(i._open(b),i._bindContainerClose(),this):(-1!==c.indexOf(d)||f?c=a.mobile.path.parseLocation().hash+d:c+=c.indexOf("#")>-1?d:"#"+d,this.window.one("beforenavigate",function(a){a.preventDefault(),i._open(b),i._bindContainerClose()}),this.urlAltered=!0,a.mobile.navigate(c,{role:"dialog"}),this)):(i._open(b),i._bindContainerClose(),i.element.delegate(j.closeLinkSelector,j.closeLinkEvents,function(a){i.close(),a.preventDefault()}),this))},close:function(){return a.mobile.popup.active!==this?this:(this._scrollTop=this.window.scrollTop(),this.options.history&&this.urlAltered?(a.mobile.back(),this.urlAltered=!1):this._closePopup(),this)}}),a.mobile.popup.handleLink=function(b){var c,d=a.mobile.path,e=a(d.hashToSelector(d.parseUrl(b.attr("href")).hash)).first();e.length>0&&e.data("mobile-popup")&&(c=b.offset(),e.popup("open",{x:c.left+b.outerWidth()/2,y:c.top+b.outerHeight()/2,transition:b.jqmData("transition"),positionTo:b.jqmData("position-to")})),setTimeout(function(){b.removeClass(a.mobile.activeBtnClass)},300)},a.mobile.document.on("pagebeforechange",function(b,c){"popup"===c.options.role&&(a.mobile.popup.handleLink(c.options.link),b.preventDefault())})}(a),function(a,b){var d=".ui-disabled,.ui-state-disabled,.ui-li-divider,.ui-screen-hidden,:jqmData(role='placeholder')",e=function(a,b,c){var e=a[c+"All"]().not(d).first();e.length&&(b.blur().attr("tabindex","-1"),e.find("a").first().focus())};a.widget("mobile.selectmenu",a.mobile.selectmenu,{_create:function(){var a=this.options;return a.nativeMenu=a.nativeMenu||this.element.parents(":jqmData(role='popup'),:mobile-popup").length>0,this._super()},_handleSelectFocus:function(){this.element.blur(),this.button.focus()},_handleKeydown:function(a){this._super(a),this._handleButtonVclickKeydown(a)},_handleButtonVclickKeydown:function(b){this.options.disabled||this.isOpen||this.options.nativeMenu||("vclick"===b.type||b.keyCode&&(b.keyCode===a.mobile.keyCode.ENTER||b.keyCode===a.mobile.keyCode.SPACE))&&(this._decideFormat(),"overlay"===this.menuType?this.button.attr("href","#"+this.popupId).attr("data-"+(a.mobile.ns||"")+"rel","popup"):this.button.attr("href","#"+this.dialogId).attr("data-"+(a.mobile.ns||"")+"rel","dialog"),this.isOpen=!0)},_handleListFocus:function(b){var c="focusin"===b.type?{tabindex:"0",event:"vmouseover"}:{tabindex:"-1",event:"vmouseout"};a(b.target).attr("tabindex",c.tabindex).trigger(c.event)},_handleListKeydown:function(b){var c=a(b.target),d=c.closest("li");switch(b.keyCode){case 38:return e(d,c,"prev"),!1;case 40:return e(d,c,"next"),!1;case 13:case 32:return c.trigger("click"),!1}},_handleMenuPageHide:function(){this._delayedTrigger(),this.thisPage.page("bindRemove")},_handleHeaderCloseClick:function(){return"overlay"===this.menuType?(this.close(),!1):void 0},_handleListItemClick:function(b){var c=a(b.target).closest("li"),d=this.select[0].selectedIndex,e=a.mobile.getAttribute(c,"option-index"),f=this._selectOptions().eq(e)[0];f.selected=this.isMultiple?!f.selected:!0,this.isMultiple&&c.find("a").toggleClass("ui-checkbox-on",f.selected).toggleClass("ui-checkbox-off",!f.selected),this.isMultiple||d===e||(this._triggerChange=!0),this.isMultiple?(this.select.trigger("change"),this.list.find("li:not(.ui-li-divider)").eq(e).find("a").first().focus()):this.close(),b.preventDefault()},build:function(){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this.options;return v.nativeMenu?this._super():(c=this.selectId,d=c+"-listbox",e=c+"-dialog",f=this.label,g=this.element.closest(".ui-page"),h=this.element[0].multiple,i=c+"-menu",j=v.theme?" data-"+a.mobile.ns+"theme='"+v.theme+"'":"",k=v.overlayTheme||v.theme||null,l=k?" data-"+a.mobile.ns+"overlay-theme='"+k+"'":"",m=v.dividerTheme&&h?" data-"+a.mobile.ns+"divider-theme='"+v.dividerTheme+"'":"",n=a("<div data-"+a.mobile.ns+"role='dialog' class='ui-selectmenu' id='"+e+"'"+j+l+"><div data-"+a.mobile.ns+"role='header'><div class='ui-title'></div></div><div data-"+a.mobile.ns+"role='content'></div></div>"),o=a("<div"+j+l+" id='"+d+"' class='ui-selectmenu'></div>").insertAfter(this.select).popup(),p=a("<ul class='ui-selectmenu-list' id='"+i+"' role='listbox' aria-labelledby='"+this.buttonId+"'"+j+m+"></ul>").appendTo(o),q=a("<div class='ui-header ui-bar-"+(v.theme?v.theme:"inherit")+"'></div>").prependTo(o),r=a("<h1 class='ui-title'></h1>").appendTo(q),this.isMultiple&&(u=a("<a>",{role:"button",text:v.closeText,href:"#","class":"ui-btn ui-corner-all ui-btn-left ui-btn-icon-notext ui-icon-delete"}).appendTo(q)),a.extend(this,{selectId:c,menuId:i,popupId:d,dialogId:e,thisPage:g,menuPage:n,label:f,isMultiple:h,theme:v.theme,listbox:o,list:p,header:q,headerTitle:r,headerClose:u,menuPageContent:s,menuPageClose:t,placeholder:""}),this.refresh(),this._origTabIndex===b&&(this._origTabIndex=null===this.select[0].getAttribute("tabindex")?!1:this.select.attr("tabindex")),this.select.attr("tabindex","-1"),this._on(this.select,{focus:"_handleSelectFocus"}),this._on(this.button,{vclick:"_handleButtonVclickKeydown"}),this.list.attr("role","listbox"),this._on(this.list,{focusin:"_handleListFocus",focusout:"_handleListFocus",keydown:"_handleListKeydown","click li:not(.ui-disabled,.ui-state-disabled,.ui-li-divider)":"_handleListItemClick"}),this._on(this.menuPage,{pagehide:"_handleMenuPageHide"}),this._on(this.listbox,{popupafterclose:"_popupClosed"}),this.isMultiple&&this._on(this.headerClose,{click:"_handleHeaderCloseClick"}),this)},_popupClosed:function(){this.close(),this._delayedTrigger()},_delayedTrigger:function(){this._triggerChange&&this.element.trigger("change"),this._triggerChange=!1},_isRebuildRequired:function(){var a=this.list.find("li"),b=this._selectOptions().not(".ui-screen-hidden");return b.text()!==a.text()},selected:function(){return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")},refresh:function(b){var c,d;return this.options.nativeMenu?this._super(b):(c=this,(b||this._isRebuildRequired())&&c._buildList(),d=this.selectedIndices(),c.setButtonText(),c.setButtonCount(),void c.list.find("li:not(.ui-li-divider)").find("a").removeClass(a.mobile.activeBtnClass).end().attr("aria-selected",!1).each(function(b){var e=a(this);a.inArray(b,d)>-1?(e.attr("aria-selected",!0),c.isMultiple?e.find("a").removeClass("ui-checkbox-off").addClass("ui-checkbox-on"):e.hasClass("ui-screen-hidden")?e.next().find("a").addClass(a.mobile.activeBtnClass):e.find("a").addClass(a.mobile.activeBtnClass)):c.isMultiple&&e.find("a").removeClass("ui-checkbox-on").addClass("ui-checkbox-off")}))},close:function(){if(!this.options.disabled&&this.isOpen){var a=this;"page"===a.menuType?(a.menuPage.dialog("close"),a.list.appendTo(a.listbox)):a.listbox.popup("close"),a._focusButton(),a.isOpen=!1}},open:function(){this.button.click()},_focusMenuItem:function(){var b=this.list.find("a."+a.mobile.activeBtnClass);0===b.length&&(b=this.list.find("li:not("+d+") a.ui-btn")),b.first().focus()},_decideFormat:function(){var b=this,c=this.window,d=b.list.parent(),e=d.outerHeight(),f=c.scrollTop(),g=b.button.offset().top,h=c.height();e>h-80||!a.support.scrollTop?(b.menuPage.appendTo(a.mobile.pageContainer).page(),b.menuPageContent=b.menuPage.find(".ui-content"),b.menuPageClose=b.menuPage.find(".ui-header a"),b.thisPage.unbind("pagehide.remove"),0===f&&g>h&&b.thisPage.one("pagehide",function(){a(this).jqmData("lastScroll",g)}),b.menuPage.one({pageshow:a.proxy(this,"_focusMenuItem"),pagehide:a.proxy(this,"close")}),b.menuType="page",b.menuPageContent.append(b.list),b.menuPage.find("div .ui-title").text(b.label.getEncodedText()||b.placeholder)):(b.menuType="overlay",b.listbox.one({popupafteropen:a.proxy(this,"_focusMenuItem")}))},_buildList:function(){var b,d,e,f,g,h,i,j,k,l,m,n,o,p,q=this,r=this.options,s=this.placeholder,t=!0,u="false",v="data-"+a.mobile.ns,w=v+"option-index",x=v+"icon",y=v+"role",z=v+"placeholder",A=c.createDocumentFragment(),B=!1;for(q.list.empty().filter(".ui-listview").listview("destroy"),b=this._selectOptions(),d=b.length,e=this.select[0],g=0;d>g;g++,B=!1)h=b[g],i=a(h),i.hasClass("ui-screen-hidden")||(j=h.parentNode,m=[],k=i.text(),l=c.createElement("a"),l.setAttribute("href","#"),l.appendChild(c.createTextNode(k)),j!==e&&"optgroup"===j.nodeName.toLowerCase()&&(n=j.getAttribute("label"),n!==f&&(o=c.createElement("li"),o.setAttribute(y,"list-divider"),o.setAttribute("role","option"),o.setAttribute("tabindex","-1"),o.appendChild(c.createTextNode(n)),A.appendChild(o),f=n)),!t||h.getAttribute("value")&&0!==k.length&&!i.jqmData("placeholder")||(t=!1,B=!0,null===h.getAttribute(z)&&(this._removePlaceholderAttr=!0),h.setAttribute(z,!0),r.hidePlaceholderMenuItems&&m.push("ui-screen-hidden"),s!==k&&(s=q.placeholder=k)),p=c.createElement("li"),h.disabled&&(m.push("ui-state-disabled"),p.setAttribute("aria-disabled",!0)),p.setAttribute(w,g),p.setAttribute(x,u),B&&p.setAttribute(z,!0),p.className=m.join(" "),p.setAttribute("role","option"),l.setAttribute("tabindex","-1"),this.isMultiple&&a(l).addClass("ui-btn ui-checkbox-off ui-btn-icon-right"),p.appendChild(l),A.appendChild(p));q.list[0].appendChild(A),this.isMultiple||s.length?this.headerTitle.text(this.placeholder):this.header.addClass("ui-screen-hidden"),q.list.listview()},_button:function(){return this.options.nativeMenu?this._super():a("<a>",{href:"#",role:"button",id:this.buttonId,"aria-haspopup":"true","aria-owns":this.menuId})},_destroy:function(){this.options.nativeMenu||(this.close(),this._origTabIndex!==b&&(this._origTabIndex!==!1?this.select.attr("tabindex",this._origTabIndex):this.select.removeAttr("tabindex")),this._removePlaceholderAttr&&this._selectOptions().removeAttr("data-"+a.mobile.ns+"placeholder"),this.listbox.remove(),this.menuPage.remove()),this._super()}})}(a),function(a,b){function c(a,b){var c=b?b:[];return c.push("ui-btn"),a.theme&&c.push("ui-btn-"+a.theme),a.icon&&(c=c.concat(["ui-icon-"+a.icon,"ui-btn-icon-"+a.iconpos]),a.iconshadow&&c.push("ui-shadow-icon")),a.inline&&c.push("ui-btn-inline"),a.shadow&&c.push("ui-shadow"),a.corners&&c.push("ui-corner-all"),a.mini&&c.push("ui-mini"),c}function d(a){var c,d,e,g=!1,h=!0,i={icon:"",inline:!1,shadow:!1,corners:!1,iconshadow:!1,mini:!1},j=[];for(a=a.split(" "),c=0;c<a.length;c++)e=!0,d=f[a[c]],d!==b?(e=!1,i[d]=!0):0===a[c].indexOf("ui-btn-icon-")?(e=!1,h=!1,i.iconpos=a[c].substring(12)):0===a[c].indexOf("ui-icon-")?(e=!1,i.icon=a[c].substring(8)):0===a[c].indexOf("ui-btn-")&&8===a[c].length?(e=!1,i.theme=a[c].substring(7)):"ui-btn"===a[c]&&(e=!1,g=!0),e&&j.push(a[c]);return h&&(i.icon=""),{options:i,unknownClasses:j,alreadyEnhanced:g}}function e(a){return"-"+a.toLowerCase()}var f={"ui-shadow":"shadow","ui-corner-all":"corners","ui-btn-inline":"inline","ui-shadow-icon":"iconshadow","ui-mini":"mini"},g=function(){var c=a.mobile.getAttribute.apply(this,arguments);return null==c?b:c},h=/[A-Z]/g;a.fn.buttonMarkup=function(f,i){var j,k,l,m,n,o=a.fn.buttonMarkup.defaults;for(j=0;j<this.length;j++){if(l=this[j],k=i?{alreadyEnhanced:!1,unknownClasses:[]}:d(l.className),m=a.extend({},k.alreadyEnhanced?k.options:{},f),!k.alreadyEnhanced)for(n in o)m[n]===b&&(m[n]=g(l,n.replace(h,e)));l.className=c(a.extend({},o,m),k.unknownClasses).join(" "),"button"!==l.tagName.toLowerCase()&&l.setAttribute("role","button")}return this},a.fn.buttonMarkup.defaults={icon:"",iconpos:"left",theme:null,inline:!1,shadow:!0,corners:!0,iconshadow:!1,mini:!1},a.extend(a.fn.buttonMarkup,{initSelector:"a:jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a, button:not(:jqmData(role='navbar') button)"})}(a),function(a,b){a.widget("mobile.controlgroup",a.extend({options:{enhanced:!1,theme:null,shadow:!1,corners:!0,excludeInvisible:!0,type:"vertical",mini:!1},_create:function(){var b=this.element,c=this.options,d=a.mobile.page.prototype.keepNativeSelector();a.fn.buttonMarkup&&this.element.find(a.fn.buttonMarkup.initSelector).not(d).buttonMarkup(),a.each(this._childWidgets,a.proxy(function(b,c){a.mobile[c]&&this.element.find(a.mobile[c].initSelector).not(d)[c]()},this)),a.extend(this,{_ui:null,_initialRefresh:!0}),this._ui=c.enhanced?{groupLegend:b.children(".ui-controlgroup-label").children(),childWrapper:b.children(".ui-controlgroup-controls")}:this._enhance()},_childWidgets:["checkboxradio","selectmenu","button"],_themeClassFromOption:function(a){return a?"none"===a?"":"ui-group-theme-"+a:""},_enhance:function(){var b=this.element,c=this.options,d={groupLegend:b.children("legend"),childWrapper:b.addClass("ui-controlgroup ui-controlgroup-"+("horizontal"===c.type?"horizontal":"vertical")+" "+this._themeClassFromOption(c.theme)+" "+(c.corners?"ui-corner-all ":"")+(c.mini?"ui-mini ":"")).wrapInner("<div class='ui-controlgroup-controls "+(c.shadow===!0?"ui-shadow":"")+"'></div>").children()};return d.groupLegend.length>0&&a("<div role='heading' class='ui-controlgroup-label'></div>").append(d.groupLegend).prependTo(b),d},_init:function(){this.refresh()},_setOptions:function(a){var c,d,e=this.element;return a.type!==b&&(e.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-"+("horizontal"===a.type?"horizontal":"vertical")),c=!0),a.theme!==b&&e.removeClass(this._themeClassFromOption(this.options.theme)).addClass(this._themeClassFromOption(a.theme)),a.corners!==b&&e.toggleClass("ui-corner-all",a.corners),a.mini!==b&&e.toggleClass("ui-mini",a.mini),a.shadow!==b&&this._ui.childWrapper.toggleClass("ui-shadow",a.shadow),a.excludeInvisible!==b&&(this.options.excludeInvisible=a.excludeInvisible,c=!0),d=this._super(a),c&&this.refresh(),d},container:function(){return this._ui.childWrapper},refresh:function(){var b=this.container(),c=b.find(".ui-btn").not(".ui-slider-handle"),d=this._initialRefresh;a.mobile.checkboxradio&&b.find(":mobile-checkboxradio").checkboxradio("refresh"),this._addFirstLastClasses(c,this.options.excludeInvisible?this._getVisibles(c,d):c,d),this._initialRefresh=!1},_destroy:function(){var a,b,c=this.options;return c.enhanced?this:(a=this._ui,b=this.element.removeClass("ui-controlgroup ui-controlgroup-horizontal ui-controlgroup-vertical ui-corner-all ui-mini "+this._themeClassFromOption(c.theme)).find(".ui-btn").not(".ui-slider-handle"),this._removeFirstLastClasses(b),a.groupLegend.unwrap(),void a.childWrapper.children().unwrap())}},a.mobile.behaviors.addFirstLastClasses))}(a),function(a,b){a.widget("mobile.toolbar",{initSelector:":jqmData(role='footer'), :jqmData(role='header')",options:{theme:null,addBackBtn:!1,backBtnTheme:null,backBtnText:"Back"},_create:function(){var b,c,d=this.element.is(":jqmData(role='header')")?"header":"footer",e=this.element.closest(".ui-page");0===e.length&&(e=!1,this._on(this.document,{pageshow:"refresh"})),a.extend(this,{role:d,page:e,leftbtn:b,rightbtn:c}),this.element.attr("role","header"===d?"banner":"contentinfo").addClass("ui-"+d),this.refresh(),this._setOptions(this.options)},_setOptions:function(a){if(a.addBackBtn!==b&&this._updateBackButton(),null!=a.backBtnTheme&&this.element.find(".ui-toolbar-back-btn").addClass("ui-btn ui-btn-"+a.backBtnTheme),a.backBtnText!==b&&this.element.find(".ui-toolbar-back-btn .ui-btn-text").text(a.backBtnText),a.theme!==b){var c=this.options.theme?this.options.theme:"inherit",d=a.theme?a.theme:"inherit";this.element.removeClass("ui-bar-"+c).addClass("ui-bar-"+d)}this._super(a)},refresh:function(){"header"===this.role&&this._addHeaderButtonClasses(),this.page||(this._setRelative(),"footer"===this.role?this.element.appendTo("body"):"header"===this.role&&this._updateBackButton()),this._addHeadingClasses(),this._btnMarkup()},_setRelative:function(){a("[data-"+a.mobile.ns+"role='page']").css({position:"relative"})},_btnMarkup:function(){this.element.children("a").filter(":not([data-"+a.mobile.ns+"role='none'])").attr("data-"+a.mobile.ns+"role","button"),this.element.trigger("create")},_addHeaderButtonClasses:function(){var a=this.element.children("a, button");this.leftbtn=a.hasClass("ui-btn-left")&&!a.hasClass("ui-toolbar-back-btn"),this.rightbtn=a.hasClass("ui-btn-right"),this.leftbtn=this.leftbtn||a.eq(0).not(".ui-btn-right,.ui-toolbar-back-btn").addClass("ui-btn-left").length,this.rightbtn=this.rightbtn||a.eq(1).addClass("ui-btn-right").length},_updateBackButton:function(){var b,c=this.options,d=c.backBtnTheme||c.theme;b=this._backButton=this._backButton||{},this.options.addBackBtn&&"header"===this.role&&a(".ui-page").length>1&&(this.page?this.page[0].getAttribute("data-"+a.mobile.ns+"url")!==a.mobile.path.stripHash(location.hash):a.mobile.navigate&&a.mobile.navigate.history&&a.mobile.navigate.history.activeIndex>0)&&!this.leftbtn?b.attached||(this.backButton=b.element=(b.element||a("<a role='button' href='javascript:void(0);' class='ui-btn ui-corner-all ui-shadow ui-btn-left "+(d?"ui-btn-"+d+" ":"")+"ui-toolbar-back-btn ui-icon-carat-l ui-btn-icon-left' data-"+a.mobile.ns+"rel='back'>"+c.backBtnText+"</a>")).prependTo(this.element),b.attached=!0):b.element&&(b.element.detach(),b.attached=!1)},_addHeadingClasses:function(){this.element.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({role:"heading","aria-level":"1"})},_destroy:function(){var a;this.element.children("h1, h2, h3, h4, h5, h6").removeClass("ui-title").removeAttr("role").removeAttr("aria-level"),"header"===this.role&&(this.element.children("a, button").removeClass("ui-btn-left ui-btn-right ui-btn ui-shadow ui-corner-all"),this.backButton&&this.backButton.remove()),a=this.options.theme?this.options.theme:"inherit",this.element.removeClass("ui-bar-"+a),this.element.removeClass("ui-"+this.role).removeAttr("role")}})}(a),function(a,b){a.widget("mobile.toolbar",a.mobile.toolbar,{options:{position:null,visibleOnPageShow:!0,disablePageZoom:!0,transition:"slide",fullscreen:!1,tapToggle:!0,tapToggleBlacklist:"a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-flipswitch, .ui-popup, .ui-panel, .ui-panel-dismiss-open",hideDuringFocus:"input, textarea, select",updatePagePadding:!0,trackPersistentToolbars:!0,supportBlacklist:function(){return!a.support.fixedPosition}},_create:function(){this._super(),this.pagecontainer=a(":mobile-pagecontainer"),"fixed"!==this.options.position||this.options.supportBlacklist()||this._makeFixed()},_makeFixed:function(){this.element.addClass("ui-"+this.role+"-fixed"),this.updatePagePadding(),this._addTransitionClass(),this._bindPageEvents(),this._bindToggleHandlers()},_setOptions:function(c){if("fixed"===c.position&&"fixed"!==this.options.position&&this._makeFixed(),"fixed"===this.options.position&&!this.options.supportBlacklist()){var d=this.page?this.page:a(".ui-page-active").length>0?a(".ui-page-active"):a(".ui-page").eq(0);c.fullscreen!==b&&(c.fullscreen?(this.element.addClass("ui-"+this.role+"-fullscreen"),d.addClass("ui-page-"+this.role+"-fullscreen")):(this.element.removeClass("ui-"+this.role+"-fullscreen"),d.removeClass("ui-page-"+this.role+"-fullscreen").addClass("ui-page-"+this.role+"-fixed")))}this._super(c)},_addTransitionClass:function(){var a=this.options.transition;a&&"none"!==a&&("slide"===a&&(a=this.element.hasClass("ui-header")?"slidedown":"slideup"),this.element.addClass(a))},_bindPageEvents:function(){var a=this.page?this.element.closest(".ui-page"):this.document;this._on(a,{pagebeforeshow:"_handlePageBeforeShow",webkitAnimationStart:"_handleAnimationStart",animationstart:"_handleAnimationStart",updatelayout:"_handleAnimationStart",pageshow:"_handlePageShow",pagebeforehide:"_handlePageBeforeHide"})},_handlePageBeforeShow:function(){var b=this.options;b.disablePageZoom&&a.mobile.zoom.disable(!0),b.visibleOnPageShow||this.hide(!0)},_handleAnimationStart:function(){this.options.updatePagePadding&&this.updatePagePadding(this.page?this.page:".ui-page-active")},_handlePageShow:function(){this.updatePagePadding(this.page?this.page:".ui-page-active"),this.options.updatePagePadding&&this._on(this.window,{throttledresize:"updatePagePadding"})},_handlePageBeforeHide:function(b,c){var d,e,f,g,h=this.options;h.disablePageZoom&&a.mobile.zoom.enable(!0),h.updatePagePadding&&this._off(this.window,"throttledresize"),h.trackPersistentToolbars&&(d=a(".ui-footer-fixed:jqmData(id)",this.page),e=a(".ui-header-fixed:jqmData(id)",this.page),f=d.length&&c.nextPage&&a(".ui-footer-fixed:jqmData(id='"+d.jqmData("id")+"')",c.nextPage)||a(),g=e.length&&c.nextPage&&a(".ui-header-fixed:jqmData(id='"+e.jqmData("id")+"')",c.nextPage)||a(),(f.length||g.length)&&(f.add(g).appendTo(a.mobile.pageContainer),c.nextPage.one("pageshow",function(){g.prependTo(this),f.appendTo(this)})))},_visible:!0,updatePagePadding:function(c){var d=this.element,e="header"===this.role,f=parseFloat(d.css(e?"top":"bottom"));this.options.fullscreen||(c=c&&c.type===b&&c||this.page||d.closest(".ui-page"),c=this.page?this.page:".ui-page-active",a(c).css("padding-"+(e?"top":"bottom"),d.outerHeight()+f))},_useTransition:function(b){var c=this.window,d=this.element,e=c.scrollTop(),f=d.height(),g=this.page?d.closest(".ui-page").height():a(".ui-page-active").height(),h=a.mobile.getScreenHeight();return!b&&(this.options.transition&&"none"!==this.options.transition&&("header"===this.role&&!this.options.fullscreen&&e>f||"footer"===this.role&&!this.options.fullscreen&&g-f>e+h)||this.options.fullscreen)},show:function(a){var b="ui-fixed-hidden",c=this.element;this._useTransition(a)?c.removeClass("out "+b).addClass("in").animationComplete(function(){c.removeClass("in")}):c.removeClass(b),this._visible=!0},hide:function(a){var b="ui-fixed-hidden",c=this.element,d="out"+("slide"===this.options.transition?" reverse":"");this._useTransition(a)?c.addClass(d).removeClass("in").animationComplete(function(){c.addClass(b).removeClass(d)}):c.addClass(b).removeClass(d),this._visible=!1},toggle:function(){this[this._visible?"hide":"show"]()},_bindToggleHandlers:function(){var b,c,d=this,e=d.options,f=!0,g=this.page?this.page:a(".ui-page");g.bind("vclick",function(b){e.tapToggle&&!a(b.target).closest(e.tapToggleBlacklist).length&&d.toggle()}).bind("focusin focusout",function(g){screen.width<1025&&a(g.target).is(e.hideDuringFocus)&&!a(g.target).closest(".ui-header-fixed, .ui-footer-fixed").length&&("focusout"!==g.type||f?"focusin"===g.type&&f&&(clearTimeout(b),f=!1,c=setTimeout(function(){d.hide()},0)):(f=!0,clearTimeout(c),b=setTimeout(function(){d.show()},0)))})},_setRelative:function(){"fixed"!==this.options.position&&a("[data-"+a.mobile.ns+"role='page']").css({position:"relative"})},_destroy:function(){var b,c,d,e,f,g=this.pagecontainer.pagecontainer("getActivePage");this._super(),"fixed"===this.options.position&&(d=a("body>.ui-"+this.role+"-fixed").add(g.find(".ui-"+this.options.role+"-fixed")).not(this.element).length>0,f=a("body>.ui-"+this.role+"-fixed").add(g.find(".ui-"+this.options.role+"-fullscreen")).not(this.element).length>0,c="ui-header-fixed ui-footer-fixed ui-header-fullscreen in out ui-footer-fullscreen fade slidedown slideup ui-fixed-hidden",this.element.removeClass(c),f||(b="ui-page-"+this.role+"-fullscreen"),d||(e="header"===this.role,b+=" ui-page-"+this.role+"-fixed",g.css("padding-"+(e?"top":"bottom"),"")),g.removeClass(b))
}})}(a),function(a){a.widget("mobile.toolbar",a.mobile.toolbar,{_makeFixed:function(){this._super(),this._workarounds()},_workarounds:function(){var a=navigator.userAgent,b=navigator.platform,c=a.match(/AppleWebKit\/([0-9]+)/),d=!!c&&c[1],e=null,f=this;if(b.indexOf("iPhone")>-1||b.indexOf("iPad")>-1||b.indexOf("iPod")>-1)e="ios";else{if(!(a.indexOf("Android")>-1))return;e="android"}if("ios"===e)f._bindScrollWorkaround();else{if(!("android"===e&&d&&534>d))return;f._bindScrollWorkaround(),f._bindListThumbWorkaround()}},_viewportOffset:function(){var a=this.element,b=a.hasClass("ui-header"),c=Math.abs(a.offset().top-this.window.scrollTop());return b||(c=Math.round(c-this.window.height()+a.outerHeight())-60),c},_bindScrollWorkaround:function(){var a=this;this._on(this.window,{scrollstop:function(){var b=a._viewportOffset();b>2&&a._visible&&a._triggerRedraw()}})},_bindListThumbWorkaround:function(){this.element.closest(".ui-page").addClass("ui-android-2x-fixed")},_triggerRedraw:function(){var b=parseFloat(a(".ui-page-active").css("padding-bottom"));a(".ui-page-active").css("padding-bottom",b+1+"px"),setTimeout(function(){a(".ui-page-active").css("padding-bottom",b+"px")},0)},destroy:function(){this._super(),this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")}})}(a),function(a,b){function c(){var a=e.clone(),b=a.eq(0),c=a.eq(1),d=c.children();return{arEls:c.add(b),gd:b,ct:c,ar:d}}var d=a.mobile.browser.oldIE&&a.mobile.browser.oldIE<=8,e=a("<div class='ui-popup-arrow-guide'></div><div class='ui-popup-arrow-container"+(d?" ie":"")+"'><div class='ui-popup-arrow'></div></div>");a.widget("mobile.popup",a.mobile.popup,{options:{arrow:""},_create:function(){var a,b=this._super();return this.options.arrow&&(this._ui.arrow=a=this._addArrow()),b},_addArrow:function(){var a,b=this.options,d=c();return a=this._themeClassFromOption("ui-body-",b.theme),d.ar.addClass(a+(b.shadow?" ui-overlay-shadow":"")),d.arEls.hide().appendTo(this.element),d},_unenhance:function(){var a=this._ui.arrow;return a&&a.arEls.remove(),this._super()},_tryAnArrow:function(a,b,c,d,e){var f,g,h,i={},j={};return d.arFull[a.dimKey]>d.guideDims[a.dimKey]?e:(i[a.fst]=c[a.fst]+(d.arHalf[a.oDimKey]+d.menuHalf[a.oDimKey])*a.offsetFactor-d.contentBox[a.fst]+(d.clampInfo.menuSize[a.oDimKey]-d.contentBox[a.oDimKey])*a.arrowOffsetFactor,i[a.snd]=c[a.snd],f=d.result||this._calculateFinalLocation(i,d.clampInfo),g={x:f.left,y:f.top},j[a.fst]=g[a.fst]+d.contentBox[a.fst]+a.tipOffset,j[a.snd]=Math.max(f[a.prop]+d.guideOffset[a.prop]+d.arHalf[a.dimKey],Math.min(f[a.prop]+d.guideOffset[a.prop]+d.guideDims[a.dimKey]-d.arHalf[a.dimKey],c[a.snd])),h=Math.abs(c.x-j.x)+Math.abs(c.y-j.y),(!e||h<e.diff)&&(j[a.snd]-=d.arHalf[a.dimKey]+f[a.prop]+d.contentBox[a.snd],e={dir:b,diff:h,result:f,posProp:a.prop,posVal:j[a.snd]}),e)},_getPlacementState:function(a){var b,c,d=this._ui.arrow,e={clampInfo:this._clampPopupWidth(!a),arFull:{cx:d.ct.width(),cy:d.ct.height()},guideDims:{cx:d.gd.width(),cy:d.gd.height()},guideOffset:d.gd.offset()};return b=this.element.offset(),d.gd.css({left:0,top:0,right:0,bottom:0}),c=d.gd.offset(),e.contentBox={x:c.left-b.left,y:c.top-b.top,cx:d.gd.width(),cy:d.gd.height()},d.gd.removeAttr("style"),e.guideOffset={left:e.guideOffset.left-b.left,top:e.guideOffset.top-b.top},e.arHalf={cx:e.arFull.cx/2,cy:e.arFull.cy/2},e.menuHalf={cx:e.clampInfo.menuSize.cx/2,cy:e.clampInfo.menuSize.cy/2},e},_placementCoords:function(b){var c,e,f,g,h,i=this.options.arrow,j=this._ui.arrow;return j?(j.arEls.show(),h={},c=this._getPlacementState(!0),f={l:{fst:"x",snd:"y",prop:"top",dimKey:"cy",oDimKey:"cx",offsetFactor:1,tipOffset:-c.arHalf.cx,arrowOffsetFactor:0},r:{fst:"x",snd:"y",prop:"top",dimKey:"cy",oDimKey:"cx",offsetFactor:-1,tipOffset:c.arHalf.cx+c.contentBox.cx,arrowOffsetFactor:1},b:{fst:"y",snd:"x",prop:"left",dimKey:"cx",oDimKey:"cy",offsetFactor:-1,tipOffset:c.arHalf.cy+c.contentBox.cy,arrowOffsetFactor:1},t:{fst:"y",snd:"x",prop:"left",dimKey:"cx",oDimKey:"cy",offsetFactor:1,tipOffset:-c.arHalf.cy,arrowOffsetFactor:0}},a.each((i===!0?"l,t,r,b":i).split(","),a.proxy(function(a,d){e=this._tryAnArrow(f[d],d,b,c,e)},this)),e?(j.ct.removeClass("ui-popup-arrow-l ui-popup-arrow-t ui-popup-arrow-r ui-popup-arrow-b").addClass("ui-popup-arrow-"+e.dir).removeAttr("style").css(e.posProp,e.posVal).show(),d||(g=this.element.offset(),h[f[e.dir].fst]=j.ct.offset(),h[f[e.dir].snd]={left:g.left+c.contentBox.x,top:g.top+c.contentBox.y}),e.result):(j.arEls.hide(),this._super(b))):this._super(b)},_setOptions:function(a){var c,d=this.options.theme,e=this._ui.arrow,f=this._super(a);if(a.arrow!==b){if(!e&&a.arrow)return void(this._ui.arrow=this._addArrow());e&&!a.arrow&&(e.arEls.remove(),this._ui.arrow=null)}return e=this._ui.arrow,e&&(a.theme!==b&&(d=this._themeClassFromOption("ui-body-",d),c=this._themeClassFromOption("ui-body-",a.theme),e.ar.removeClass(d).addClass(c)),a.shadow!==b&&e.ar.toggleClass("ui-overlay-shadow",a.shadow)),f},_destroy:function(){var a=this._ui.arrow;return a&&a.arEls.remove(),this._super()}})}(a),function(a,c){a.widget("mobile.panel",{options:{classes:{panel:"ui-panel",panelOpen:"ui-panel-open",panelClosed:"ui-panel-closed",panelFixed:"ui-panel-fixed",panelInner:"ui-panel-inner",modal:"ui-panel-dismiss",modalOpen:"ui-panel-dismiss-open",pageContainer:"ui-panel-page-container",pageWrapper:"ui-panel-wrapper",pageFixedToolbar:"ui-panel-fixed-toolbar",pageContentPrefix:"ui-panel-page-content",animate:"ui-panel-animate"},animate:!0,theme:null,position:"left",dismissible:!0,display:"reveal",swipeClose:!0,positionFixed:!1},_closeLink:null,_parentPage:null,_page:null,_modal:null,_panelInner:null,_wrapper:null,_fixedToolbars:null,_create:function(){var b=this.element,c=b.closest(".ui-page, :jqmData(role='page')");a.extend(this,{_closeLink:b.find(":jqmData(rel='close')"),_parentPage:c.length>0?c:!1,_openedPage:null,_page:this._getPage,_panelInner:this._getPanelInner(),_fixedToolbars:this._getFixedToolbars}),"overlay"!==this.options.display&&this._getWrapper(),this._addPanelClasses(),a.support.cssTransform3d&&this.options.animate&&this.element.addClass(this.options.classes.animate),this._bindUpdateLayout(),this._bindCloseEvents(),this._bindLinkListeners(),this._bindPageEvents(),this.options.dismissible&&this._createModal(),this._bindSwipeEvents()},_getPanelInner:function(){var a=this.element.find("."+this.options.classes.panelInner);return 0===a.length&&(a=this.element.children().wrapAll("<div class='"+this.options.classes.panelInner+"' />").parent()),a},_createModal:function(){var b=this,c=b._parentPage?b._parentPage.parent():b.element.parent();b._modal=a("<div class='"+b.options.classes.modal+"'></div>").on("mousedown",function(){b.close()}).appendTo(c)},_getPage:function(){var b=this._openedPage||this._parentPage||a("."+a.mobile.activePageClass);return b},_getWrapper:function(){var a=this._page().find("."+this.options.classes.pageWrapper);0===a.length&&(a=this._page().children(".ui-header:not(.ui-header-fixed), .ui-content:not(.ui-popup), .ui-footer:not(.ui-footer-fixed)").wrapAll("<div class='"+this.options.classes.pageWrapper+"'></div>").parent()),this._wrapper=a},_getFixedToolbars:function(){var b=a("body").children(".ui-header-fixed, .ui-footer-fixed"),c=this._page().find(".ui-header-fixed, .ui-footer-fixed"),d=b.add(c).addClass(this.options.classes.pageFixedToolbar);return d},_getPosDisplayClasses:function(a){return a+"-position-"+this.options.position+" "+a+"-display-"+this.options.display},_getPanelClasses:function(){var a=this.options.classes.panel+" "+this._getPosDisplayClasses(this.options.classes.panel)+" "+this.options.classes.panelClosed+" ui-body-"+(this.options.theme?this.options.theme:"inherit");return this.options.positionFixed&&(a+=" "+this.options.classes.panelFixed),a},_addPanelClasses:function(){this.element.addClass(this._getPanelClasses())},_handleCloseClick:function(a){a.isDefaultPrevented()||this.close()},_bindCloseEvents:function(){this._on(this._closeLink,{click:"_handleCloseClick"}),this._on({"click a:jqmData(ajax='false')":"_handleCloseClick"})},_positionPanel:function(b){var c=this,d=c._panelInner.outerHeight(),e=d>a.mobile.getScreenHeight();e||!c.options.positionFixed?(e&&(c._unfixPanel(),a.mobile.resetActivePageHeight(d)),b&&this.window[0].scrollTo(0,a.mobile.defaultHomeScroll)):c._fixPanel()},_bindFixListener:function(){this._on(a(b),{throttledresize:"_positionPanel"})},_unbindFixListener:function(){this._off(a(b),"throttledresize")},_unfixPanel:function(){this.options.positionFixed&&a.support.fixedPosition&&this.element.removeClass(this.options.classes.panelFixed)},_fixPanel:function(){this.options.positionFixed&&a.support.fixedPosition&&this.element.addClass(this.options.classes.panelFixed)},_bindUpdateLayout:function(){var a=this;a.element.on("updatelayout",function(){a._open&&a._positionPanel()})},_bindLinkListeners:function(){this._on("body",{"click a":"_handleClick"})},_handleClick:function(b){var d,e=this.element.attr("id");b.currentTarget.href.split("#")[1]===e&&e!==c&&(b.preventDefault(),d=a(b.target),d.hasClass("ui-btn")&&(d.addClass(a.mobile.activeBtnClass),this.element.one("panelopen panelclose",function(){d.removeClass(a.mobile.activeBtnClass)})),this.toggle())},_bindSwipeEvents:function(){var a=this,b=a._modal?a.element.add(a._modal):a.element;a.options.swipeClose&&("left"===a.options.position?b.on("swipeleft.panel",function(){a.close()}):b.on("swiperight.panel",function(){a.close()}))},_bindPageEvents:function(){var a=this;this.document.on("panelbeforeopen",function(b){a._open&&b.target!==a.element[0]&&a.close()}).on("keyup.panel",function(b){27===b.keyCode&&a._open&&a.close()}),this._parentPage||"overlay"===this.options.display||this._on(this.document,{pageshow:function(){this._openedPage=null,this._getWrapper()}}),a._parentPage?this.document.on("pagehide",":jqmData(role='page')",function(){a._open&&a.close(!0)}):this.document.on("pagebeforehide",function(){a._open&&a.close(!0)})},_open:!1,_pageContentOpenClasses:null,_modalOpenClasses:null,open:function(b){if(!this._open){var c=this,d=c.options,e=function(){c._off(c.document,"panelclose"),c._page().jqmData("panel","open"),a.support.cssTransform3d&&d.animate&&"overlay"!==d.display&&(c._wrapper.addClass(d.classes.animate),c._fixedToolbars().addClass(d.classes.animate)),!b&&a.support.cssTransform3d&&d.animate?(c._wrapper||c.element).animationComplete(f,"transition"):setTimeout(f,0),d.theme&&"overlay"!==d.display&&c._page().parent().addClass(d.classes.pageContainer+"-themed "+d.classes.pageContainer+"-"+d.theme),c.element.removeClass(d.classes.panelClosed).addClass(d.classes.panelOpen),c._positionPanel(!0),c._pageContentOpenClasses=c._getPosDisplayClasses(d.classes.pageContentPrefix),"overlay"!==d.display&&(c._page().parent().addClass(d.classes.pageContainer),c._wrapper.addClass(c._pageContentOpenClasses),c._fixedToolbars().addClass(c._pageContentOpenClasses)),c._modalOpenClasses=c._getPosDisplayClasses(d.classes.modal)+" "+d.classes.modalOpen,c._modal&&c._modal.addClass(c._modalOpenClasses).height(Math.max(c._modal.height(),c.document.height()))},f=function(){c._open&&("overlay"!==d.display&&(c._wrapper.addClass(d.classes.pageContentPrefix+"-open"),c._fixedToolbars().addClass(d.classes.pageContentPrefix+"-open")),c._bindFixListener(),c._trigger("open"),c._openedPage=c._page())};c._trigger("beforeopen"),"open"===c._page().jqmData("panel")?c._on(c.document,{panelclose:e}):e(),c._open=!0}},close:function(b){if(this._open){var c=this,d=this.options,e=function(){c.element.removeClass(d.classes.panelOpen),"overlay"!==d.display&&(c._wrapper.removeClass(c._pageContentOpenClasses),c._fixedToolbars().removeClass(c._pageContentOpenClasses)),!b&&a.support.cssTransform3d&&d.animate?(c._wrapper||c.element).animationComplete(f,"transition"):setTimeout(f,0),c._modal&&c._modal.removeClass(c._modalOpenClasses).height("")},f=function(){d.theme&&"overlay"!==d.display&&c._page().parent().removeClass(d.classes.pageContainer+"-themed "+d.classes.pageContainer+"-"+d.theme),c.element.addClass(d.classes.panelClosed),"overlay"!==d.display&&(c._page().parent().removeClass(d.classes.pageContainer),c._wrapper.removeClass(d.classes.pageContentPrefix+"-open"),c._fixedToolbars().removeClass(d.classes.pageContentPrefix+"-open")),a.support.cssTransform3d&&d.animate&&"overlay"!==d.display&&(c._wrapper.removeClass(d.classes.animate),c._fixedToolbars().removeClass(d.classes.animate)),c._fixPanel(),c._unbindFixListener(),a.mobile.resetActivePageHeight(),c._page().jqmRemoveData("panel"),c._trigger("close"),c._openedPage=null};c._trigger("beforeclose"),e(),c._open=!1}},toggle:function(){this[this._open?"close":"open"]()},_destroy:function(){var b,c=this.options,d=a("body > :mobile-panel").length+a.mobile.activePage.find(":mobile-panel").length>1;"overlay"!==c.display&&(b=a("body > :mobile-panel").add(a.mobile.activePage.find(":mobile-panel")),0===b.not(".ui-panel-display-overlay").not(this.element).length&&this._wrapper.children().unwrap(),this._open&&(this._fixedToolbars().removeClass(c.classes.pageContentPrefix+"-open"),a.support.cssTransform3d&&c.animate&&this._fixedToolbars().removeClass(c.classes.animate),this._page().parent().removeClass(c.classes.pageContainer),c.theme&&this._page().parent().removeClass(c.classes.pageContainer+"-themed "+c.classes.pageContainer+"-"+c.theme))),d||this.document.off("panelopen panelclose"),this._open&&this._page().jqmRemoveData("panel"),this._panelInner.children().unwrap(),this.element.removeClass([this._getPanelClasses(),c.classes.panelOpen,c.classes.animate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"),this._modal&&this._modal.remove()}})}(a),function(a,b){a.widget("mobile.table",{options:{classes:{table:"ui-table"},enhanced:!1},_create:function(){this.options.enhanced||this.element.addClass(this.options.classes.table),a.extend(this,{headers:b,allHeaders:b}),this._refresh(!0)},_setHeaders:function(){var a=this.element.find("thead tr");this.headers=this.element.find("tr:eq(0)").children(),this.allHeaders=this.headers.add(a.children())},refresh:function(){this._refresh()},rebuild:a.noop,_refresh:function(){var b=this.element,c=b.find("thead tr");this._setHeaders(),c.each(function(){var d=0;a(this).children().each(function(){var e,f=parseInt(this.getAttribute("colspan"),10),g=":nth-child("+(d+1)+")";if(this.setAttribute("data-"+a.mobile.ns+"colstart",d+1),f)for(e=0;f-1>e;e++)d++,g+=", :nth-child("+(d+1)+")";a(this).jqmData("cells",b.find("tr").not(c.eq(0)).not(this).children(g)),d++})})}})}(a),function(a){a.widget("mobile.table",a.mobile.table,{options:{mode:"columntoggle",columnBtnTheme:null,columnPopupTheme:null,columnBtnText:"Columns...",classes:a.extend(a.mobile.table.prototype.options.classes,{popup:"ui-table-columntoggle-popup",columnBtn:"ui-table-columntoggle-btn",priorityPrefix:"ui-table-priority-",columnToggleTable:"ui-table-columntoggle"})},_create:function(){this._super(),"columntoggle"===this.options.mode&&(a.extend(this,{_menu:null}),this.options.enhanced?(this._menu=a(this.document[0].getElementById(this._id()+"-popup")).children().first(),this._addToggles(this._menu,!0)):(this._menu=this._enhanceColToggle(),this.element.addClass(this.options.classes.columnToggleTable)),this._setupEvents(),this._setToggleState())},_id:function(){return this.element.attr("id")||this.widgetName+this.uuid},_setupEvents:function(){this._on(this.window,{throttledresize:"_setToggleState"}),this._on(this._menu,{"change input":"_menuInputChange"})},_addToggles:function(b,c){var d,e=0,f=this.options,g=b.controlgroup("container");c?d=b.find("input"):g.empty(),this.headers.not("td").each(function(){var b,h,i=a(this),j=a.mobile.getAttribute(this,"priority");j&&(h=i.add(i.jqmData("cells")),h.addClass(f.classes.priorityPrefix+j),b=(c?d.eq(e++):a("<label><input type='checkbox' checked />"+(i.children("abbr").first().attr("title")||i.text())+"</label>").appendTo(g).children(0).checkboxradio({theme:f.columnPopupTheme})).jqmData("header",i).jqmData("cells",h),i.jqmData("input",b))}),c||b.controlgroup("refresh")},_menuInputChange:function(b){var c=a(b.target),d=c[0].checked;c.jqmData("cells").toggleClass("ui-table-cell-hidden",!d).toggleClass("ui-table-cell-visible",d)},_unlockCells:function(a){a.removeClass("ui-table-cell-hidden ui-table-cell-visible")},_enhanceColToggle:function(){var b,c,d,e,f=this.element,g=this.options,h=a.mobile.ns,i=this.document[0].createDocumentFragment();return b=this._id()+"-popup",c=a("<a href='#"+b+"' class='"+g.classes.columnBtn+" ui-btn ui-btn-"+(g.columnBtnTheme||"a")+" ui-corner-all ui-shadow ui-mini' data-"+h+"rel='popup'>"+g.columnBtnText+"</a>"),d=a("<div class='"+g.classes.popup+"' id='"+b+"'></div>"),e=a("<fieldset></fieldset>").controlgroup(),this._addToggles(e,!1),e.appendTo(d),i.appendChild(d[0]),i.appendChild(c[0]),f.before(i),d.popup(),e},rebuild:function(){this._super(),"columntoggle"===this.options.mode&&this._refresh(!1)},_refresh:function(b){var c,d,e;if(this._super(b),!b&&"columntoggle"===this.options.mode)for(c=this.headers,d=[],this._menu.find("input").each(function(){var b=a(this),e=b.jqmData("header"),f=c.index(e[0]);f>-1&&!b.prop("checked")&&d.push(f)}),this._unlockCells(this.element.find(".ui-table-cell-hidden, .ui-table-cell-visible")),this._addToggles(this._menu,b),e=d.length-1;e>-1;e--)c.eq(d[e]).jqmData("input").prop("checked",!1).checkboxradio("refresh").trigger("change")},_setToggleState:function(){this._menu.find("input").each(function(){var b=a(this);this.checked="table-cell"===b.jqmData("cells").eq(0).css("display"),b.checkboxradio("refresh")})},_destroy:function(){this._super()}})}(a),function(a){a.widget("mobile.table",a.mobile.table,{options:{mode:"reflow",classes:a.extend(a.mobile.table.prototype.options.classes,{reflowTable:"ui-table-reflow",cellLabels:"ui-table-cell-label"})},_create:function(){this._super(),"reflow"===this.options.mode&&(this.options.enhanced||(this.element.addClass(this.options.classes.reflowTable),this._updateReflow()))},rebuild:function(){this._super(),"reflow"===this.options.mode&&this._refresh(!1)},_refresh:function(a){this._super(a),a||"reflow"!==this.options.mode||this._updateReflow()},_updateReflow:function(){var b=this,c=this.options;a(b.allHeaders.get().reverse()).each(function(){var d,e,f=a(this).jqmData("cells"),g=a.mobile.getAttribute(this,"colstart"),h=f.not(this).filter("thead th").length&&" ui-table-cell-label-top",i=a(this).clone().contents();i.length>0&&(h?(d=parseInt(this.getAttribute("colspan"),10),e="",d&&(e="td:nth-child("+d+"n + "+g+")"),b._addLabels(f.filter(e),c.classes.cellLabels+h,i)):b._addLabels(f,c.classes.cellLabels,i))})},_addLabels:function(b,c,d){1===d.length&&"abbr"===d[0].nodeName.toLowerCase()&&(d=d.eq(0).attr("title")),b.not(":has(b."+c+")").prepend(a("<b class='"+c+"'></b>").append(d))}})}(a),function(a,c){var d=function(b,c){return-1===(""+(a.mobile.getAttribute(this,"filtertext")||a(this).text())).toLowerCase().indexOf(c)};a.widget("mobile.filterable",{initSelector:":jqmData(filter='true')",options:{filterReveal:!1,filterCallback:d,enhanced:!1,input:null,children:"> li, > option, > optgroup option, > tbody tr, > .ui-controlgroup-controls > .ui-btn, > .ui-controlgroup-controls > .ui-checkbox, > .ui-controlgroup-controls > .ui-radio"},_create:function(){var b=this.options;a.extend(this,{_search:null,_timer:0}),this._setInput(b.input),b.enhanced||this._filterItems((this._search&&this._search.val()||"").toLowerCase())},_onKeyUp:function(){var c,d,e=this._search;if(e){if(c=e.val().toLowerCase(),d=a.mobile.getAttribute(e[0],"lastval")+"",d&&d===c)return;this._timer&&(b.clearTimeout(this._timer),this._timer=0),this._timer=this._delay(function(){return this._trigger("beforefilter",null,{input:e})===!1?!1:(e[0].setAttribute("data-"+a.mobile.ns+"lastval",c),this._filterItems(c),void(this._timer=0))},250)}},_getFilterableItems:function(){var b=this.element,c=this.options.children,d=c?a.isFunction(c)?c():c.nodeName?a(c):c.jquery?c:this.element.find(c):{length:0};return 0===d.length&&(d=b.children()),d},_filterItems:function(b){var c,e,f,g,h=[],i=[],j=this.options,k=this._getFilterableItems();if(null!=b)for(e=j.filterCallback||d,f=k.length,c=0;f>c;c++)g=e.call(k[c],c,b)?i:h,g.push(k[c]);0===i.length?k[j.filterReveal&&0===b.length?"addClass":"removeClass"]("ui-screen-hidden"):(a(i).addClass("ui-screen-hidden"),a(h).removeClass("ui-screen-hidden")),this._refreshChildWidget(),this._trigger("filter",null,{items:k})},_refreshChildWidget:function(){var b,c,d=["collapsibleset","selectmenu","controlgroup","listview"];for(c=d.length-1;c>-1;c--)b=d[c],a.mobile[b]&&(b=this.element.data("mobile-"+b),b&&a.isFunction(b.refresh)&&b.refresh())},_setInput:function(c){var d=this._search;this._timer&&(b.clearTimeout(this._timer),this._timer=0),d&&(this._off(d,"keyup change input"),d=null),c&&(d=c.jquery?c:c.nodeName?a(c):this.document.find(c),this._on(d,{keydown:"_onKeyDown",keypress:"_onKeyPress",keyup:"_onKeyUp",change:"_onKeyUp",input:"_onKeyUp"})),this._search=d},_onKeyDown:function(b){b.keyCode===a.ui.keyCode.ENTER&&(b.preventDefault(),this._preventKeyPress=!0)},_onKeyPress:function(a){this._preventKeyPress&&(a.preventDefault(),this._preventKeyPress=!1)},_setOptions:function(a){var b=!(a.filterReveal===c&&a.filterCallback===c&&a.children===c);this._super(a),a.input!==c&&(this._setInput(a.input),b=!0),b&&this.refresh()},_destroy:function(){var a=this.options,b=this._getFilterableItems();a.enhanced?b.toggleClass("ui-screen-hidden",a.filterReveal):b.removeClass("ui-screen-hidden")},refresh:function(){this._timer&&(b.clearTimeout(this._timer),this._timer=0),this._filterItems((this._search&&this._search.val()||"").toLowerCase())}})}(a),function(a,b){var c=function(a,b){return function(c){b.call(this,c),a._syncTextInputOptions(c)}},d=/(^|\s)ui-li-divider(\s|$)/,e=a.mobile.filterable.prototype.options.filterCallback;a.mobile.filterable.prototype.options.filterCallback=function(a,b){return!this.className.match(d)&&e.call(this,a,b)},a.widget("mobile.filterable",a.mobile.filterable,{options:{filterPlaceholder:"Filter items...",filterTheme:null},_create:function(){var b,c,d=this.element,e=["collapsibleset","selectmenu","controlgroup","listview"],f={};for(this._super(),a.extend(this,{_widget:null}),b=e.length-1;b>-1;b--)if(c=e[b],a.mobile[c]){if(this._setWidget(d.data("mobile-"+c)))break;f[c+"create"]="_handleCreate"}this._widget||this._on(d,f)},_handleCreate:function(a){this._setWidget(this.element.data("mobile-"+a.type.substring(0,a.type.length-6)))},_trigger:function(a,b,c){return this._widget&&"mobile-listview"===this._widget.widgetFullName&&"beforefilter"===a&&this._widget._trigger("beforefilter",b,c),this._super(a,b,c)},_setWidget:function(a){return!this._widget&&a&&(this._widget=a,this._widget._setOptions=c(this,this._widget._setOptions)),this._widget&&(this._syncTextInputOptions(this._widget.options),"listview"===this._widget.widgetName&&(this._widget.options.hideDividers=!0,this._widget.element.listview("refresh"))),!!this._widget},_isSearchInternal:function(){return this._search&&this._search.jqmData("ui-filterable-"+this.uuid+"-internal")},_setInput:function(b){var c=this.options,d=!0,e={};if(!b){if(this._isSearchInternal())return;d=!1,b=a("<input data-"+a.mobile.ns+"type='search' placeholder='"+c.filterPlaceholder+"'></input>").jqmData("ui-filterable-"+this.uuid+"-internal",!0),a("<form class='ui-filterable'></form>").append(b).submit(function(a){a.preventDefault(),b.blur()}).insertBefore(this.element),a.mobile.textinput&&(null!=this.options.filterTheme&&(e.theme=c.filterTheme),b.textinput(e))}this._super(b),this._isSearchInternal()&&d&&this._search.attr("placeholder",this.options.filterPlaceholder)},_setOptions:function(c){var d=this._super(c);return c.filterPlaceholder!==b&&this._isSearchInternal()&&this._search.attr("placeholder",c.filterPlaceholder),c.filterTheme!==b&&this._search&&a.mobile.textinput&&this._search.textinput("option","theme",c.filterTheme),d},_refreshChildWidget:function(){this._refreshingChildWidget=!0,this._superApply(arguments),this._refreshingChildWidget=!1},refresh:function(){this._refreshingChildWidget||this._superApply(arguments)},_destroy:function(){this._isSearchInternal()&&this._search.remove(),this._super()},_syncTextInputOptions:function(c){var d,e={};if(this._isSearchInternal()&&a.mobile.textinput){for(d in a.mobile.textinput.prototype.options)c[d]!==b&&(e[d]="theme"===d&&null!=this.options.filterTheme?this.options.filterTheme:c[d]);this._search.textinput("option",e)}}}),a.widget("mobile.listview",a.mobile.listview,{options:{filter:!1},_create:function(){return this.options.filter!==!0||this.element.data("mobile-filterable")||this.element.filterable(),this._super()},refresh:function(){var a;this._superApply(arguments),this.options.filter===!0&&(a=this.element.data("mobile-filterable"),a&&a.refresh())}})}(a),function(a,b){function c(){return++e}function d(a){return a.hash.length>1&&decodeURIComponent(a.href.replace(f,""))===decodeURIComponent(location.href.replace(f,""))}var e=0,f=/#.*$/;a.widget("ui.tabs",{version:"fadf2b312a05040436451c64bbfaf4814bc62c56",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),c.active=this._initialActive(),a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(c.active):a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);return null===b&&(d&&this.tabs.each(function(c,e){return a(e).attr("aria-controls")===d?(b=c,!1):void 0}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===b||-1===b)&&(b=this.tabs.length?0:!1)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),-1===b&&(b=c?!1:0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d===this.options.active?!1:d);default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function d(){return b>e&&(b=0),0>b&&(b=e),b}for(var e=this.tabs.length-1;-1!==a.inArray(d(),this.options.disabled);)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+c()},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,e){var f,g,h,i=a(e).uniqueId().attr("id"),j=a(e).closest("li"),k=j.attr("aria-controls");d(e)?(f=e.hash,g=b.element.find(b._sanitizeSelector(f))):(h=b._tabId(j),f="#"+h,g=b.element.find(f),g.length||(g=b._createPanel(h),g.insertAfter(b.panels[c-1]||b.tablist)),g.attr("aria-live","polite")),g.length&&(b.panels=b.panels.add(g)),k&&j.data("ui-tabs-aria-controls",k),j.attr({"aria-controls":f.substring(1),"aria-labelledby":i}),g.attr("aria-labelledby",i)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var c,d=0;c=this.tabs[d];d++)b===!0||-1!==a.inArray(d,b)?a(c).addClass("ui-state-disabled").attr("aria-disabled","true"):a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={click:function(a){a.preventDefault()}};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)
}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1||(c.active=h?!1:this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},_toggle:function(b,c){function d(){f.running=!1,f._trigger("activate",b,c)}function e(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),g.length&&f.options.show?f._show(g,f.options.show,d):(g.show(),d())}var f=this,g=c.newPanel,h=c.oldPanel;this.running=!0,h.length&&this.options.hide?this._hide(h,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h.hide(),e()),h.attr({"aria-expanded":"false","aria-hidden":"true"}),c.oldTab.attr("aria-selected","false"),g.length&&h.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr({"aria-expanded":"true","aria-hidden":"false"}),c.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(c){var d=this.options.disabled;d!==!1&&(c===b?d=!1:(c=this._getIndex(c),d=a.isArray(d)?a.map(d,function(a){return a!==c?a:null}):a.map(this.tabs,function(a,b){return b!==c?b:null})),this._setupDisabled(d))},disable:function(c){var d=this.options.disabled;if(d!==!0){if(c===b)d=!0;else{if(c=this._getIndex(c),-1!==a.inArray(c,d))return;d=a.isArray(d)?a.merge([c],d).sort():[c]}this._setupDisabled(d)}},load:function(b,c){b=this._getIndex(b);var e=this,f=this.tabs.eq(b),g=f.find(".ui-tabs-anchor"),h=this._getPanelForTab(f),i={tab:f,panel:h};d(g[0])||(this.xhr=a.ajax(this._ajaxSettings(g,c,i)),this.xhr&&"canceled"!==this.xhr.statusText&&(f.addClass("ui-tabs-loading"),h.attr("aria-busy","true"),this.xhr.success(function(a){setTimeout(function(){h.html(a),e._trigger("load",c,i)},1)}).complete(function(a,b){setTimeout(function(){"abort"===b&&e.panels.stop(!1,!0),f.removeClass("ui-tabs-loading"),h.removeAttr("aria-busy"),a===e.xhr&&delete e.xhr},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}})}(a),function(){}(a),function(a,b){function c(a){e=a.originalEvent,i=e.accelerationIncludingGravity,f=Math.abs(i.x),g=Math.abs(i.y),h=Math.abs(i.z),!b.orientation&&(f>7||(h>6&&8>g||8>h&&g>6)&&f>5)?d.enabled&&d.disable():d.enabled||d.enable()}a.mobile.iosorientationfixEnabled=!0;var d,e,f,g,h,i,j=navigator.userAgent;return/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(j)&&j.indexOf("AppleWebKit")>-1?(d=a.mobile.zoom,void a.mobile.document.on("mobileinit",function(){a.mobile.iosorientationfixEnabled&&a.mobile.window.bind("orientationchange.iosorientationfix",d.enable).bind("devicemotion.iosorientationfix",c)})):void(a.mobile.iosorientationfixEnabled=!1)}(a,this),function(a,b,d){function e(){f.removeClass("ui-mobile-rendering")}var f=a("html"),g=a.mobile.window;a(b.document).trigger("mobileinit"),a.mobile.gradeA()&&(a.mobile.ajaxBlacklist&&(a.mobile.ajaxEnabled=!1),f.addClass("ui-mobile ui-mobile-rendering"),setTimeout(e,5e3),a.extend(a.mobile,{initializePage:function(){var b=a.mobile.path,f=a(":jqmData(role='page'), :jqmData(role='dialog')"),h=b.stripHash(b.stripQueryParams(b.parseLocation().hash)),i=a.mobile.path.parseLocation(),j=h?c.getElementById(h):d;f.length||(f=a("body").wrapInner("<div data-"+a.mobile.ns+"role='page'></div>").children(0)),f.each(function(){var c=a(this);c[0].getAttribute("data-"+a.mobile.ns+"url")||c.attr("data-"+a.mobile.ns+"url",c.attr("id")||b.convertUrlToDataUrl(i.pathname+i.search))}),a.mobile.firstPage=f.first(),a.mobile.pageContainer=a.mobile.firstPage.parent().addClass("ui-mobile-viewport").pagecontainer(),a.mobile.navreadyDeferred.resolve(),g.trigger("pagecontainercreate"),a.mobile.loading("show"),e(),a.mobile.hashListeningEnabled&&a.mobile.path.isHashValid(location.hash)&&(a(j).is(":jqmData(role='page')")||a.mobile.path.isPath(h)||h===a.mobile.dialogHashKey)?a.event.special.navigate.isPushStateEnabled()?(a.mobile.navigate.history.stack=[],a.mobile.navigate(a.mobile.path.isPath(location.hash)?location.hash:location.href)):g.trigger("hashchange",[!0]):(a.event.special.navigate.isPushStateEnabled()&&a.mobile.navigate.navigator.squash(b.parseLocation().href),a.mobile.changePage(a.mobile.firstPage,{transition:"none",reverse:!0,changeHash:!1,fromHashChange:!0}))}}),a(function(){a.support.inlineSVG(),a.mobile.hideUrlBar&&b.scrollTo(0,1),a.mobile.defaultHomeScroll=a.support.scrollTop&&1!==a.mobile.window.scrollTop()?1:0,a.mobile.autoInitializePage&&a.mobile.initializePage(),a.mobile.hideUrlBar&&g.load(a.mobile.silentScroll),a.support.cssPointerEvents||a.mobile.document.delegate(".ui-state-disabled,.ui-disabled","vclick",function(a){a.preventDefault(),a.stopImmediatePropagation()})}))}(a,this)});
//# sourceMappingURL=jquery.mobile-1.4.5.min.map
; browserify_shim__define__module__export__(typeof jQuery.mobile != "undefined" ? jQuery.mobile : window.jQuery.mobile);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/Users/cperry/src/otherdev/mobile-todo/node_modules/jquery/dist/jquery.min.js":17}],5:[function(require,module,exports){
/************
Main application script
*************/

//Initialize Frameworks
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

//Setup JQM
$(document).on("mobileinit", function () {
    // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
    $.mobile.linkBindingEnabled = false;

    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;
});
$.mobile = require('jquery-mobile');

//Setup Cordova
$(document).on('deviceready', function() {
    $('#cdvmsg').show();
});

//Initialize routers
var MenuRouter = require('./routes/menuRouter');
var menuRouter = new MenuRouter();

//start Backbone history
Backbone.history.start();
},{"./routes/menuRouter":8,"backbone":15,"jquery":17,"jquery-mobile":4}],6:[function(require,module,exports){
//Dependencies
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

//Model definition
var Geo = Backbone.Model.extend({
    defaults: {
        lat: '',
        lng: '',
        alt: '',
        acc: '',
        altAcc: '',
        head: '',
        speed: '',
        time: ''
    }
});

module.exports = Geo;
},{"backbone":15,"jquery":17}],7:[function(require,module,exports){
//Dependencies
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

//Model definition
var Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    toggle: function() {
        this.save({ completed: !this.get('completed')});
    }
});

module.exports = Todo;
},{"backbone":15,"jquery":17}],8:[function(require,module,exports){
//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var TodoAppView = require('../views/todoAppView');
var TodoRouter = require('./todoRouter');
var TodoCollection = require('../collections/todoList');
var DragView = require('../views/dragView');
var Geo = require('../models/geo');
var GeoView = require('../views/geoView');

var MenuRouter = Backbone.Router.extend({
    routes: {
        'todo': 'changeTodo',
        '': 'home',
        'drag': 'changeToDrag',
        'geo': 'changeToGeo'
    },
    initialize: function(options) {
        //nothing to do here
    },
    home: function() {
        //change back to menu page
        $.mobile.changePage('#menu', {changeHash: false, reverse: false});
    },
    changeTodo: function () {
        
        //setup todo router
        if(!this.todoRouter) {
            this.todoRouter = new TodoRouter();
        }
        var todoRouter = this.todoRouter;
        
        //load external page
        $( ":mobile-pagecontainer" ).pagecontainer('load', 'todos.html').done(function() {
            //setup the view objects
            var todoList = new TodoCollection();
            var todoAppView = new TodoAppView({collection: todoList});
            
            //update the todoRouter with the objects
            todoRouter.appView = todoAppView;
            todoRouter.todoList = todoList;
            
            //finally change to the new page
            $.mobile.changePage('#todoapp', {changeHash: false, reverse: false});
        });
    },
    
    changeToDrag: function() {
        
        //load external page
        $.mobile.pageContainer.pagecontainer('load', 'drag.html').done(function() {
            
            //init view
            this.dragView = new DragView();
            
            //change to new page
            $.mobile.changePage('#dragdemo', {changeHash: false, reverse: false});
        });
    },
    
    changeToGeo: function() {
        
        //load external page
        $.mobile.pageContainer.pagecontainer('load', 'geo.html').done(function() {
            
            //init view
            this.geoView = new GeoView({model: new Geo()});
            
            //change to new page
            $.mobile.changePage('#geo', {changeHash: false, reverse: false});
        });
    }
});

module.exports = MenuRouter;
},{"../collections/todoList":2,"../models/geo":6,"../views/dragView":10,"../views/geoView":11,"../views/todoAppView":12,"./todoRouter":9,"backbone":15,"jquery":17}],9:[function(require,module,exports){
//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var TodoRouter = Backbone.Router.extend({
    routes: {
        'todo/*filter': 'setFilter'
    },
    initialize: function(options) {
        //nothing to do here
    },
    setFilter: function (params) {
        this.appView.filter = params ? params.trim() : '';
        this.todoList.trigger('reset');
    }
});

module.exports = TodoRouter;
},{"backbone":15,"jquery":17}],10:[function(require,module,exports){
//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Dragend = require('dragend');

var DragView = Backbone.View.extend({
    el: '#drag',
    initialize: function () {
        //add event listener to trigger once page has been displayed to init dragend view
        //Dragend reads height/width of dragend-page objects so they must be visible prior to init
        $(document).one('pagechange', this, function (e) {
            //var container = document.getElementById("drag");
            var dragView = e.data;
            dragView.dragend = new Dragend(dragView.$el.get(0), {
                
                afterInitialize: function () {
                    //show dragable area once ready
                    dragView.$el.css('visibility', 'visible');
                }
            });
        });
    }
});

module.exports = DragView;
},{"backbone":15,"dragend":3,"jquery":17}],11:[function(require,module,exports){
//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');
var Geo = require('../models/geo');

var GeoView = Backbone.View.extend({
    el: '#geoStats',
    model: Geo,
    initialize: function () {

        //setup template
        this.template = _.template($('#geo-template').html());

        //setup event handler for pagechange event to capture location
        $(document).one('pagechange', this, function (e) {
            var view = e.data;
            
            //gather positioning data
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    view.locSuccess(position);
            }, function (error) {
                    view.locError(error);
            }, {enableHighAccuracy: true});
        });
    },

    locSuccess: function (position) {

        //fill model values
        this.model.set({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            alt: position.coords.altitude,
            acc: position.coords.accuracy,
            altAcc: position.coords.alititudeAccuracy,
            head: position.coords.heading,
            speed: position.coords.speed,
            time: position.timestamp
        });

        //fill in the template
        this.$el.html(this.template(this.model.toJSON()));

        //show the listview and hide the loading message
        $('#loadMsg').hide();
        this.$el.listview('refresh').removeClass('ui-screen-hidden');
    },

    locError: function (error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
});

module.exports = GeoView;
},{"../models/geo":6,"backbone":15,"jquery":17,"underscore":18}],12:[function(require,module,exports){
//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');
var TodoList = require('../collections/TodoList');
var TodoView = require('./todoView');

// renders the full list of todo items calling TodoView for each one.
var TodoAppView = Backbone.View.extend({
    el: '#todoapp',
    collection: TodoList,
    initialize: function () {
        this.input = this.$('#new-todo');
        
        // when new elements are added to the collection render then with addOne
        this.collection.on('add', this.addOne, this);
        this.collection.on('reset', this.addAll, this);
        this.collection.fetch(); // Loads list from local storage
    },

    events: {
        'keypress #new-todo': 'createTodoOnEnter'
    },

    createTodoOnEnter: function (e) {
        if (e.which !== 13 || !this.input.val().trim()) { // ENTER_KEY = 13
            return;
        }
        this.collection.create(this.newAttributes());
        this.input.val(''); // clean input box
        this.$('.ui-listview').listview('refresh'); //refresh list
    },

    addOne: function (todo) {
        var view = new TodoView({
            model: todo
        });
        $('#todo-list').append(view.render().el).listview('refresh');
    },

    addAll: function () {
        this.$('#todo-list').html(''); // clean the todo list
        
        // filter todo item list
        switch (this.filter) {
            case 'pending':
                _.each(this.collection.remaining(), this.addOne);
                break;
            case 'completed':
                _.each(this.collection.completed(), this.addOne);
                break;
            default:
                this.collection.each(this.addOne, this);
                break;
        }
    },

    newAttributes: function () {
        return {
            title: this.input.val().trim(),
            completed: false
        };
    }
});

module.exports = TodoAppView;
},{"../collections/TodoList":1,"./todoView":13,"backbone":15,"jquery":17,"underscore":18}],13:[function(require,module,exports){
//Dependencies
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var _ = require('underscore');
var Todo = require('../collections/todoList');

// renders individual todo items list (li)
var TodoView = Backbone.View.extend({
    tagName: 'li',
    attributes: {
        'data-role': 'field-contain'
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON())).enhanceWithin();
        this.$('.toggle').prop('checked', this.model.get('completed'));
        this.input = this.$('.edit');
        return this; // enable chained calls
    },
    initialize: function () {
        //setup template
        this.template = _.template($('#item-template').html());
        
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this); // remove: Convenience Backbone's function for removing the view from the DOM.
    },
    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close',
        'click .toggle': 'toggleCompleted',
        'click .destroy': 'destroy'
    },
    edit: function () {
        this.$('.hider').removeClass('ui-screen-hidden');
        this.input.focus();
    },
    close: function () {
        var value = this.input.val().trim();
        if (value) {
            this.model.save({
                title: value
            });
        }
        this.$('.hider').addClass('ui-screen-hidden');
    },
    updateOnEnter: function (e) {
        if (e.which == 13) {
            this.close();
        }
    },
    toggleCompleted: function () {
        this.model.toggle();
    },
    destroy: function(){
        this.model.destroy();
    }
});

module.exports = TodoView;
},{"../collections/todoList":2,"backbone":15,"jquery":17,"underscore":18}],14:[function(require,module,exports){
/**
 * Backbone localStorage Adapter
 * Version 1.1.16
 *
 * https://github.com/jeromegn/Backbone.localStorage
 */
(function (root, factory) {
  if (typeof exports === 'object' && typeof require === 'function') {
    module.exports = factory(require("backbone"));
  } else if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["backbone"], function(Backbone) {
      // Use global variables if the locals are undefined.
      return factory(Backbone || root.Backbone);
    });
  } else {
    factory(Backbone);
  }
}(this, function(Backbone) {
// A simple module to replace `Backbone.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.

// Generate four random hex digits.
function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};

// Generate a pseudo-GUID by concatenating random hexadecimal.
function guid() {
   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};

function isObject(item) {
  return item === Object(item);
}

function contains(array, item) {
  var i = array.length;
  while (i--) if (array[i] === item) return true;
  return false;
}

function extend(obj, props) {
  for (var key in props) obj[key] = props[key]
  return obj;
}

function result(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return (typeof value === 'function') ? object[property]() : value;
}

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use Backbone.LocalStorage instead
Backbone.LocalStorage = window.Store = function(name, serializer) {
  if( !this.localStorage ) {
    throw "Backbone.localStorage: Environment does not support localStorage."
  }
  this.name = name;
  this.serializer = serializer || {
    serialize: function(item) {
      return isObject(item) ? JSON.stringify(item) : item;
    },
    // fix for "illegal access" error on Android when JSON.parse is passed null
    deserialize: function (data) {
      return data && JSON.parse(data);
    }
  };
  var store = this.localStorage().getItem(this.name);
  this.records = (store && store.split(",")) || [];
};

extend(Backbone.LocalStorage.prototype, {

  // Save the current state of the **Store** to *localStorage*.
  save: function() {
    this.localStorage().setItem(this.name, this.records.join(","));
  },

  // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
  // have an id of it's own.
  create: function(model) {
    if (!model.id && model.id !== 0) {
      model.id = guid();
      model.set(model.idAttribute, model.id);
    }
    this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
    this.records.push(model.id.toString());
    this.save();
    return this.find(model);
  },

  // Update a model by replacing its copy in `this.data`.
  update: function(model) {
    this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
    var modelId = model.id.toString();
    if (!contains(this.records, modelId)) {
      this.records.push(modelId);
      this.save();
    }
    return this.find(model);
  },

  // Retrieve a model from `this.data` by id.
  find: function(model) {
    return this.serializer.deserialize(this.localStorage().getItem(this._itemName(model.id)));
  },

  // Return the array of all models currently in storage.
  findAll: function() {
    var result = [];
    for (var i = 0, id, data; i < this.records.length; i++) {
      id = this.records[i];
      data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
      if (data != null) result.push(data);
    }
    return result;
  },

  // Delete a model from `this.data`, returning it.
  destroy: function(model) {
    this.localStorage().removeItem(this._itemName(model.id));
    var modelId = model.id.toString();
    for (var i = 0, id; i < this.records.length; i++) {
      if (this.records[i] === modelId) {
        this.records.splice(i, 1);
      }
    }
    this.save();
    return model;
  },

  localStorage: function() {
    return localStorage;
  },

  // Clear localStorage for specific collection.
  _clear: function() {
    var local = this.localStorage(),
      itemRe = new RegExp("^" + this.name + "-");

    // Remove id-tracking item (e.g., "foo").
    local.removeItem(this.name);

    // Match all data items (e.g., "foo-ID") and remove.
    for (var k in local) {
      if (itemRe.test(k)) {
        local.removeItem(k);
      }
    }

    this.records.length = 0;
  },

  // Size of localStorage.
  _storageSize: function() {
    return this.localStorage().length;
  },

  _itemName: function(id) {
    return this.name+"-"+id;
  }

});

// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and Backbone.localSync is deprecated, use Backbone.LocalStorage.sync instead
Backbone.LocalStorage.sync = window.Store.sync = Backbone.localSync = function(method, model, options) {
  var store = result(model, 'localStorage') || result(model.collection, 'localStorage');

  var resp, errorMessage;
  //If $ is having Deferred - use it.
  var syncDfd = Backbone.$ ?
    (Backbone.$.Deferred && Backbone.$.Deferred()) :
    (Backbone.Deferred && Backbone.Deferred());

  try {

    switch (method) {
      case "read":
        resp = model.id != undefined ? store.find(model) : store.findAll();
        break;
      case "create":
        resp = store.create(model);
        break;
      case "update":
        resp = store.update(model);
        break;
      case "delete":
        resp = store.destroy(model);
        break;
    }

  } catch(error) {
    if (error.code === 22 && store._storageSize() === 0)
      errorMessage = "Private browsing is unsupported";
    else
      errorMessage = error.message;
  }

  if (resp) {
    if (options && options.success) {
      if (Backbone.VERSION === "0.9.10") {
        options.success(model, resp, options);
      } else {
        options.success(resp);
      }
    }
    if (syncDfd) {
      syncDfd.resolve(resp);
    }

  } else {
    errorMessage = errorMessage ? errorMessage
                                : "Record Not Found";

    if (options && options.error)
      if (Backbone.VERSION === "0.9.10") {
        options.error(model, errorMessage, options);
      } else {
        options.error(errorMessage);
      }

    if (syncDfd)
      syncDfd.reject(errorMessage);
  }

  // add compatibility with $.ajax
  // always execute callback for success and error
  if (options && options.complete) options.complete(resp);

  return syncDfd && syncDfd.promise();
};

Backbone.ajaxSync = Backbone.sync;

Backbone.getSyncMethod = function(model, options) {
  var forceAjaxSync = options && options.ajaxSync;

  if(!forceAjaxSync && (result(model, 'localStorage') || result(model.collection, 'localStorage'))) {
    return Backbone.localSync;
  }

  return Backbone.ajaxSync;
};

// Override 'Backbone.sync' to default to localSync,
// the original 'Backbone.sync' is still available in 'Backbone.ajaxSync'
Backbone.sync = function(method, model, options) {
  return Backbone.getSyncMethod(model, options).apply(this, [method, model, options]);
};

return Backbone.LocalStorage;
}));

},{"backbone":15}],15:[function(require,module,exports){
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

},{"underscore":16}],16:[function(require,module,exports){
//     Underscore.js 1.8.2
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.2';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var isArrayLike = function(collection) {
    var length = collection && collection.length;
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, target, fromIndex) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    return _.indexOf(obj, target, typeof fromIndex == 'number' && fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = input && input.length; i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, 'length').length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = list && list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    var i = 0, length = array && array.length;
    if (typeof isSorted == 'number') {
      i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
    } else if (isSorted && length) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    if (item !== item) {
      return _.findIndex(slice.call(array, i), _.isNaN);
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    var idx = array ? array.length : 0;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    if (item !== item) {
      return _.findLastIndex(slice.call(array, 0, idx), _.isNaN);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = array != null && array.length;
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createIndexFinder(1);

  _.findLastIndex = createIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of 
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
  
  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],17:[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
; browserify_shim__define__module__export__(typeof jQuery != "undefined" ? jQuery : window.jQuery);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],18:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}]},{},[5]);
