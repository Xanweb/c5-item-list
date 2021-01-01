!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"a",(function(){return a}));var r={i18n:{confirm:"Are you sure?",maxItemsExceeded:"Max items exceeded, you cannot add any more items.",pageNotFound:"Page not found"},editor:{initRichTextEditor:function(t){},destroyRichTextEditor:function(t){}},maxItemsCount:100,classes:{wrapper:"xw-item-list",items:"xw-item-list__items",item:"xw-item-list__item",item_expander:"xw-item-list__item-expander",add_item_button:"xw-item-list__add-item",edit_item_button:"xw-item-list__edit-item",remove_item_button:"xw-item-list__remove-item"},templateId:"itemTemplate"},a=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t);var o=this,a=$.extend(r,window.xanweb||{});o.options=$.extend({classes:a.classes,maxItemsCount:a.maxItemsCount,templateId:a.templateId,destroyRichTextEditor:a.editor.destroyRichTextEditor,initRichTextEditor:a.editor.initRichTextEditor,i18n:a.i18n,items:[],extraItemLoad:function(t,e){},itemDefaults:function(t){return{sortOrder:t}}},n),o.$element=e.addClass(o.options.classes.wrapper),o.$container=e.find(".".concat(o.options.classes.items)),o._templateItem=_.template($("#".concat(o.options.templateId)).html()),o.loadItems(),o.setupItemDetailsExpanderAction(),o.setupDeleteItemAction(),o.setupAddItemAction(),o.setupFloatingActionsBar(),o.setupSort(),o.$element.closest(".ui-dialog").on("dialogclose",(function(t){o.destroyRichTextEditors(o.$container)}))}var e,n,a;return e=t,(n=[{key:"getNewItemDefaults",value:function(t){return this.options.itemDefaults(t)}},{key:"loadItems",value:function(){var t=this,e=t.options.items;e&&0!==e.length&&(e.forEach((function(e){return t.addItem(e)})),t.doSortCount())}},{key:"addItem",value:function(t){var e=this;e.$container.append(e._templateItem({item:t}));var n=e.$container.find(".".concat(this.options.classes.item)).last();return e.initPageSelectors(n),e.initFileSelectors(n),e.initRichTextEditors(n),e.detectCheckboxes(n),e.setupChoiceToggler(n),e.extraItemLoad&&e.extraItemLoad(n,t),void 0!==e.options.extraItemLoad&&e.options.extraItemLoad(n,t),n}},{key:"setupItemDetailsExpanderAction",value:function(){var t=this;t.$container.on("click",".".concat(t.options.classes.item_expander),(function(){$(this).closest(".".concat(t.options.classes.item)).find($(this).data("target")).toggle()}))}},{key:"setupDeleteItemAction",value:function(){var t=this;t.$container.on("click",".".concat(t.options.classes.remove_item_button),(function(e){e.preventDefault(),e.stopPropagation(),confirm(t.options.i18n.confirm)&&$(this).closest(".".concat(t.options.classes.item)).hide("fade",(function(){t.destroyRichTextEditors($(this)),$(this).remove(),t.doSortCount()}))}))}},{key:"setupAddItemAction",value:function(){var t=this;t.$element.find(".".concat(t.options.classes.add_item_button)).click((function(){var e=t.$container.find(".".concat(t.options.classes.item)).length;if(t.options.maxItemsCount>0&&e>=t.options.maxItemsCount)return alert(t.options.i18n.maxItemsExceeded),!1;var n=t.addItem(t.getNewItemDefaults(e));if(n.find(".".concat(t.options.classes.item_expander)).trigger("click"),t.doSortCount(),t.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0){var i=n.position().top;t.$container.parent().hasClass(t.options.classes.wrapper)||(i+=t.$container.parent().position().top),t.$element.closest(".ui-dialog-content.ui-widget-content").animate({scrollTop:i},"slow")}}))}},{key:"setupFloatingActionsBar",value:function(){var t=this,e=t.$element.find(".floating-block-actions");if(e.length>0){e.appendTo(t.$element.closest(".ui-dialog.ui-widget")),t.enableFloatingActionsBar();var n=$("#ccm-block-form");if(n.find("ul.nav-tabs.nav").length>0){var i=new MutationObserver((function(t){t.forEach((function(t){"class"===t.attributeName&&$(t.target).trigger("classChange")}))}));n.find("ul.nav-tabs.nav > li").each((function(){i.observe(this,{attributes:!0})})),n.find("ul.nav-tabs.nav > li").on("classChange",(function(e){var n=t.$element.closest(".ui-dialog-content.ui-widget-content");t.$element.is(":visible")?(n.css("padding-bottom",""),t.enableFloatingActionsBar()):(n.css("padding-bottom","85px"),t.disableFloatingActionsBar())}))}}}},{key:"enableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0&&this.$element.closest(".ui-dialog.ui-widget").addClass("has-floating-block-actions")}},{key:"disableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").removeClass("has-floating-block-actions")}},{key:"setupChoiceToggler",value:function(t){t.find("[data-choice]").each((function(){var e=$(this).data("choice");$(this).change((function(n){var i=t.find('[data-choice-group="'.concat(e,'"]'));i.hide(),i.filter('[data-choice-value="'.concat($(this).val(),'"]')).show()})).trigger("change")}))}},{key:"initPageSelectors",value:function(t){t.find("div[data-field=page-selector]").each((function(){$(this).concretePageSelector({inputName:$(this).data("name"),cID:parseInt($(this).data("value"))})}))}},{key:"initFileSelectors",value:function(t){t.find("div[data-field=file-selector]").each((function(){$(this).concreteFileSelector({inputName:$(this).data("name"),fID:parseInt($(this).data("value"))})}))}},{key:"initRichTextEditors",value:function(t){var e=t.find(".editor-content");e.length>0&&(e.each((function(){$(this).attr("id")||$(this).attr("id",_.uniqueId("editor"))})),this.options.initRichTextEditor(e))}},{key:"destroyRichTextEditors",value:function(t){var e=this;t.find(".editor-content").each((function(){e.options.destroyRichTextEditor($(this))}))}},{key:"detectCheckboxes",value:function(t){t.find(".checkbox").each((function(t){var e=$(this).find('[type="checkbox"]');e.parent().append('<input type="hidden" name="'.concat(e.attr("name"),'">')),e.removeAttr("name"),e.change((function(t){var n="1"===$(this).val()?0:"";e.parent().find('input[type="hidden"]').val($(this).is(":checked")?$(this).val():n)})).trigger("change")}))}},{key:"setupSort",value:function(){var t=this;t.$container.sortable({axis:"y",cursor:"move",handle:".drag-handle",placeholder:"ui-state-highlight",update:function(){t.doSortCount()}})}},{key:"doSortCount",value:function(){this.$container.find(".".concat(this.options.classes.item)).each((function(t){$(this).find(".xw-item-entry-sort").val(t)}))}}])&&o(e.prototype,n),a&&o(e,a),t}()},,,function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,a=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==i.return||i.return()}finally{if(c)throw o}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.r(e);var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,i,r,d=(e=m,function(){var t,n=u(e);if(l()){var i=u(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return s(this,t)});function m(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a(this,m),(e=d.call(this,t,$.extend({fileFieldName:"fID"},n))).setupAddFilesButton(),e}return n=m,(i=[{key:"setupAddFilesButton",value:function(){var t=this;t.$element.find(".xw-add-images-btn").click((function(){ConcreteFileManager.launchDialog((function(e){var n,i=null,r=o(e.fID);try{for(r.s();!(n=r.n()).done;){var a=n.value,c=t.$container.find(".".concat(t.options.classes.item)).length;if(t.options.maxItemsCount>0&&c>=t.options.maxItemsCount){alert(t.options.i18n.maxItemsExceeded);break}var s=t.getNewItemDefaults(c);s[t.options.fileFieldName]=a,i=t.addItem(s)}}catch(t){r.e(t)}finally{r.f()}null!==i&&(i.find(".".concat(t.options.classes.item_expander)).trigger("click"),t.doSortCount())}),{multipleSelection:!0})}))}}])&&c(n.prototype,i),r&&c(n,r),m}(n(0).a);$.fn.xwSliderForm=function(t){return $.each($(this),(function(){new d($(this),t)}))}}]);