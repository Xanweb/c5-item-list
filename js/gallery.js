!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"a",(function(){return l}));var a=function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t),this.options=$.extend({confirmText:"Ok",cancelText:"Cancel"},o),this.stackContext={dir1:"down",dir2:"left",firstpos1:25,context:e,modal:!0},this._centerStack(),$(window).resize((function(){return n._centerStack()}))}var e,n,a;return e=t,(n=[{key:"_centerStack",value:function(){this.stackContext.firstpos2=this.stackContext.context.width()/2-Number(PNotify.prototype.options.width.replace(/\D/g,""))/2}},{key:"confirm",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this;n=$.extend({confirmText:i.options.confirmText,cancelText:i.options.cancelText,okCallback:!1,cancelCallback:!1},n);var o='<div class="ccm-notification-inner-buttons"><div class="btn-toolbar pull-right">';o+='<a href="javascript:void(0)" class="btn btn-xs btn-primary ccm-notification-confirm">'.concat(n.confirmText,"</a>"),o+='<a href="javascript:void(0)" class="btn btn-xs btn-default ccm-notification-cancel">'.concat(n.cancelText,"</a>"),o+="</div></div>",new PNotify({type:"info",icon:"fa fa-check-mark",title:t,text:e+o,addclass:"ccm-ui",hide:!1,stack:i.stackContext,animate:{animate:!0,in_class:"fadeIn",out_class:"fadeOut"},after_open:function(t){i.stackContext.context.on("click",".ccm-notification-confirm",(function(e){e.preventDefault(),"function"==typeof n.okCallback&&n.okCallback(),t.remove()})),i.stackContext.context.on("click",".ccm-notification-cancel",(function(e){e.preventDefault(),"function"==typeof n.cancelCallback&&n.cancelCallback(),t.remove()})),i.stackContext.context.find(".ccm-notification-confirm").focus(),i._centerStack()}})}},{key:"error",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.message(t,e,"exclamation-triangle","error")}},{key:"success",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.message(t,e,"check","success")}},{key:"message",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"exclamation-circle",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"notice",o=this,a='<div class="ccm-notification-inner-buttons"><div class="btn-toolbar text-center">';a+='<a href="javascript:void(0)" class="btn btn-xs btn-primary ccm-notification-confirm">'.concat(o.options.confirmText,"</a>"),a+="</div></div>",new PNotify({type:i,icon:"fa fa-".concat(n),title:t,text:e+a,addclass:"ccm-ui",hide:!1,stack:o.stackContext,animate:{animate:!0,in_class:"fadeIn",out_class:"fadeOut"},after_open:function(t){o.stackContext.context.on("click",".ccm-notification-confirm",(function(e){e.preventDefault(),t.remove()}))}})}}])&&o(e.prototype,n),a&&o(e,a),t}();function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s={i18n:{confirm:"Are you sure?",maxItemsExceeded:"Max items exceeded, You can not add any more items.",pageNotFound:"Page not found"},editor:{initRichTextEditor:function(t){},destroyRichTextEditor:function(t){}},maxItemsCount:100,classes:{wrapper:"xw-item-list",items:"xw-item-list__items",item:"xw-item-list__item",item_expander:"xw-item-list__item-expander",add_item_button:"xw-item-list__add-item",edit_item_button:"xw-item-list__edit-item",remove_item_button:"xw-item-list__remove-item"},templateIdentifierPrefix:"itemTemplate"},l=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,t);var i=this,o=$.extend(s,window.xanweb||{});i.options=$.extend({classes:o.classes,maxItemsCount:o.maxItemsCount,templateIdentifierPrefix:o.templateIdentifierPrefix,destroyRichTextEditor:o.editor.destroyRichTextEditor,initRichTextEditor:o.editor.initRichTextEditor,i18n:o.i18n,items:[],onSelectPage:function(t,e){},onSelectFile:function(t,e){},extraItemLoad:function(t,e){}},n),void 0!==n.onSelectPage&&void 0===$.fn.xanPageSelector&&console.error("onSelectPage requires $.fn.xanPageSelector which is undefined!"),void 0!==n.onSelectFile&&void 0===$.fn.xanFileSelector&&console.error("onSelectFile requires $.fn.xanFileSelector which is undefined!"),i.$element=e.addClass(i.options.classes.wrapper),i.$container=e.find(".".concat(i.options.classes.items)),i._templateItem=_.template($("#".concat(i.options.templateIdentifierPrefix).concat(n.bID)).html()),i.loadItems(),i.setupItemDetailsExpanderAction(),i.setupDeleteItemAction(),i.setupAddItemAction(),i.setupFloatingActionsBar(),i.setupSort(),i.$element.closest(".ui-dialog").on("dialogclose",(function(t){i.destroyRichTextEditors(i.$container)})),this._alert=new a(e)}var e,n,i;return e=t,(n=[{key:"getNewItemDefaults",value:function(t){return{sortOrder:t}}},{key:"loadItems",value:function(){var t=this,e=t.options.items;e&&0!==e.length&&(e.forEach((function(e){return t.addItem(e)})),t.doSortCount())}},{key:"addItem",value:function(t){var e=this;e.$container.append(e._templateItem({item:t}));var n=e.$container.find(".".concat(this.options.classes.item)).last();return e.initPageSelectors(n),e.initFileSelectors(n),e.initRichTextEditors(n),e.detectCheckboxes(n),e.setupChoiceToggler(n),e.extraItemLoad&&e.extraItemLoad(n,t),void 0!==e.options.extraItemLoad&&e.options.extraItemLoad(n,t),n}},{key:"setupItemDetailsExpanderAction",value:function(){var t=this;t.$container.on("click",".".concat(t.options.classes.item_expander),(function(){$(this).closest(".".concat(t.options.classes.item)).find($(this).data("target")).toggle()}))}},{key:"setupDeleteItemAction",value:function(){var t=this;t.$container.on("click",".".concat(t.options.classes.remove_item_button),(function(e){var n=$(this);e.preventDefault(),e.stopPropagation(),t._alert.confirm(t.options.i18n.confirm,"",{okCallback:function(){n.closest(".".concat(t.options.classes.item)).hide("fade",(function(){t.destroyRichTextEditors($(this)),$(this).remove(),t.doSortCount()}))}})}))}},{key:"setupAddItemAction",value:function(){var t=this;t.$element.find(".".concat(t.options.classes.add_item_button)).click((function(){var e=t.$container.find(".".concat(t.options.classes.item)).length;if(t.options.maxItemsCount>0&&e>=t.options.maxItemsCount)return t._alert.message(t.options.i18n.maxItemsExceeded),!1;var n=void 0!==t.options.getNewItemDefaults?t.options.getNewItemDefaults(e):t.getNewItemDefaults(e),i=t.addItem(n);if(i.find(".".concat(t.options.classes.item_expander)).trigger("click"),t.doSortCount(),t.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0){var o=i.position().top;t.$container.parent().hasClass(t.options.classes.wrapper)||(o+=t.$container.parent().position().top),t.$element.closest(".ui-dialog-content.ui-widget-content").animate({scrollTop:o},"slow")}}))}},{key:"setupFloatingActionsBar",value:function(){var t=this,e=t.$element.find(".floating-block-actions");if(e.length>0){e.appendTo(t.$element.closest(".ui-dialog.ui-widget")),t.enableFloatingActionsBar();var n=$("#ccm-block-form");if(n.find("ul.nav-tabs.nav").length>0){var i=new MutationObserver((function(t){t.forEach((function(t){"class"===t.attributeName&&$(t.target).trigger("classChange")}))}));n.find("ul.nav-tabs.nav > li").each((function(){i.observe(this,{attributes:!0})})),n.find("ul.nav-tabs.nav > li").on("classChange",(function(e){var n=t.$element.closest(".ui-dialog-content.ui-widget-content");t.$element.is(":visible")?(n.css("padding-bottom",""),t.enableFloatingActionsBar()):(n.css("padding-bottom","85px"),t.disableFloatingActionsBar())}))}}}},{key:"enableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0&&this.$element.closest(".ui-dialog.ui-widget").addClass("has-floating-block-actions")}},{key:"disableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").removeClass("has-floating-block-actions")}},{key:"setupChoiceToggler",value:function(t){t.find("[data-choice]").each((function(){var e=$(this).data("choice");$(this).change((function(n){var i=t.find('[data-choice-group="'.concat(e,'"]'));i.hide(),i.filter('[data-choice-value="'.concat($(this).val(),'"]')).show()})).trigger("change")}))}},{key:"initPageSelectors",value:function(t){var e=this;t.find("div[data-field=page-selector]").each((function(){void 0!==$.fn.xanPageSelector?$(this).xanPageSelector({inputName:$(this).data("name"),cID:parseInt($(this).data("value")),onChange:e.options.onSelectPage}):$(this).concretePageSelector({inputName:$(this).data("name"),cID:parseInt($(this).data("value"))})}))}},{key:"initFileSelectors",value:function(t){var e=this;t.find("div[data-field=file-selector]").each((function(){void 0!==$.fn.xanFileSelector?$(this).xanFileSelector({inputName:$(this).data("name"),fID:parseInt($(this).data("value")),onChange:e.options.onSelectFile}):$(this).concreteFileSelector({inputName:$(this).data("name"),fID:parseInt($(this).data("value"))})}))}},{key:"initRichTextEditors",value:function(t){var e=t.find(".editor-content");e.length>0&&(e.each((function(){$(this).attr("id")||$(this).attr("id",_.uniqueId("editor"))})),this.options.initRichTextEditor(e))}},{key:"destroyRichTextEditors",value:function(t){var e=this;t.find(".editor-content").each((function(){e.options.destroyRichTextEditor($(this))}))}},{key:"detectCheckboxes",value:function(t){t.find(".checkbox").each((function(t){var e=$(this).find('[type="checkbox"]');"1"===e.val()&&(e.parent().append('<input type="hidden" name="'.concat(e.attr("name"),'">')),e.removeAttr("name"),e.change((function(t){e.parent().find('input[type="hidden"]').val($(this).is(":checked")?1:0)})).trigger("change"))}))}},{key:"setupSort",value:function(){var t=this;t.$container.sortable({axis:"y",cursor:"move",handle:"i.fa-arrows",placeholder:"ui-state-highlight",update:function(){t.doSortCount()}})}},{key:"doSortCount",value:function(){this.$container.find(".".concat(this.options.classes.item)).each((function(t){$(this).find(".ccm-item-entry-sort").val(t)}))}}])&&r(e.prototype,n),i&&r(e,i),t}()},,,function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";n.r(e);var i=n(0);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gallery=e,this._initDropZone()}var e,n,i;return e=t,(n=[{key:"_initDropZone",value:function(){var t=this;new Dropzone(this.gallery.$element.parent().get(0),{method:"POST",url:"".concat(CCM_DISPATCHER_FILENAME,"/ccm/system/file/upload"),previewsContainer:!1,clickable:t.gallery.$element.find(".btn-upload").get(0),sending:function(t,e,n){n.append("responseFormat","dropzone"),n.append("ccm_token",CCM_SECURITY_TOKEN)},success:function(e,n){t._handleResponse(n)},chunksUploaded:function(e,n){e.xhr.response&&t._handleResponse(JSON.parse(e.xhr.response)),n()},error:function(e,n,i){t.gallery._alert.error(n)}})}},{key:"_handleResponse",value:function(t){if(t){var e=this;ConcreteAjaxRequest.validateResponse(t,(function(n){n?t.files&&t.files.length&&console.log(t.files):t.message&&e.gallery._alert.message(t.title,t.message)}))}}}])&&o(e.prototype,n),i&&o(e,i),t}();function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m={classes:{wrapper:"xw-images-form",items:"xw-images-form__images",item:"xw-images-form__image-cell",item_expander:"xw-images-form__image-expander",add_item_button:"xw-images-form__add-image",edit_item_button:"xw-images-form__edit-image",remove_item_button:"xw-images-form__remove-image"},templateIdentifierPrefix:"xwImgCell"},p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(i,t);var e,n=(e=i,function(){var t,n=f(e);if(u()){var i=f(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return s(this,t)});function i(t){var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,i);var c=$.extend(m,o);return(e=n.call(this,t,c)).uploader=new a(l(e)),e}return i}(i.a);$.fn.xwGallery=function(t){return $.each($(this),(function(e,n){new p($(this),t)}))}}]);