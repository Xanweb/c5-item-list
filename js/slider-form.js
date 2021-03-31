!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var o={editor:{initRichTextEditor:function(t){},destroyRichTextEditor:function(t){}},colorPicker:{className:"ccm-widget-colorpicker",showInitial:!0,showInput:!0,allowEmpty:!0,preferredFormat:"rgb",showAlpha:!1,appendTo:".ui-dialog"},maxItemsCount:100,classes:{wrapper:"xw-item-list",items:"xw-item-list__items",item:"xw-item-list__item",item_expander:"xw-item-list__item-expander",add_item_button:"xw-item-list__add-item",edit_item_button:"xw-item-list__edit-item",remove_item_button:"xw-item-list__remove-item"},templateId:"itemTemplate"},r={confirm:"Are you sure?",maxItemsExceeded:"Max items exceeded, you cannot add any more items.",colorPicker:{cancelText:"Cancel",chooseText:"Choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",noColorSelectedText:"No Color Selected",clearText:"Clear Color Selection"}};function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=window.xanweb||{i18n:{}};this.i18n=$.extend(!0,r,e.i18n)}var e,n,o;return e=t,o=[{key:"instance",value:function(){return t._instance||(t._instance=new t)}}],(n=[{key:"translate",value:function(t){var e,n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.i18n),o=i(t.split("."));try{for(o.s();!(e=o.n()).done;){var r=e.value;if(!_.isObject(n)||!n.hasOwnProperty(r))return null;n=n[r]}}catch(t){o.e(t)}finally{o.f()}return _.isObject(n)?null:n}}])&&s(e.prototype,n),o&&s(e,o),t}();function f(t){return u.instance().translate(t)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var y=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};m(this,t);var r=this,i=$.extend({},o,window.xanweb||{});r.options=$.extend({classes:i.classes,maxItemsCount:i.maxItemsCount,templateId:i.templateId,destroyRichTextEditor:i.editor.destroyRichTextEditor,initRichTextEditor:i.editor.initRichTextEditor,items:[],extraItemLoad:function(t,e){},itemDefaults:function(t){return{sortOrder:t}}},n),r.$element=e.addClass(r.options.classes.wrapper),r.$container=e.find(".".concat(r.options.classes.items)),r._templateItem=_.template($("#".concat(r.options.templateId)).html()),r.loadItems(),r.setupItemDetailsExpanderAction(),r.setupDeleteItemAction(),r.setupAddItemAction(),r.setupFloatingActionsBar(),r.setupSort(),r.$element.closest(".ui-dialog").on("dialogclose",(function(t){r.destroyRichTextEditors(r.$container)}))}var e,n,r;return e=t,(n=[{key:"getNewItemDefaults",value:function(t){return this.options.itemDefaults(t)}},{key:"loadItems",value:function(){var t=this,e=t.options.items;e&&0!==e.length&&(e.forEach((function(e){return t.addItem(e)})),t.doSortCount())}},{key:"addItem",value:function(t){var e=this;e.$container.append(e._templateItem({item:t}));var n=e.$container.find(".".concat(this.options.classes.item)).last();return e.initPageSelectors(n),e.initFileSelectors(n),e.initColorPickers(n),e.initRichTextEditors(n),e.detectCheckboxes(n),e.setupChoiceToggler(n),e.extraItemLoad&&e.extraItemLoad(n,t),void 0!==e.options.extraItemLoad&&e.options.extraItemLoad(n,t),n}},{key:"setupItemDetailsExpanderAction",value:function(){var t=this;t.$container.on("click",".".concat(t.options.classes.item_expander),(function(){$(this).closest(".".concat(t.options.classes.item)).find($(this).data("target")).toggle()}))}},{key:"setupDeleteItemAction",value:function(){var t=this;t.$container.on("click",".".concat(t.options.classes.remove_item_button),(function(e){e.preventDefault(),e.stopPropagation(),confirm(f("confirm"))&&$(this).closest(".".concat(t.options.classes.item)).hide("fade",(function(){t.destroyRichTextEditors($(this)),$(this).remove(),t.doSortCount()}))}))}},{key:"setupAddItemAction",value:function(){var t=this;t.$element.find(".".concat(t.options.classes.add_item_button)).click((function(){var e=t.$container.find(".".concat(t.options.classes.item)).length;if(t.options.maxItemsCount>0&&e>=t.options.maxItemsCount)return alert(f("maxItemsExceeded")),!1;var n=t.addItem(t.getNewItemDefaults(e));if(n.find(".".concat(t.options.classes.item_expander)).trigger("click"),t.doSortCount(),t.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0){var o=n.position().top;t.$container.parent().hasClass(t.options.classes.wrapper)||(o+=t.$container.parent().position().top),t.$element.closest(".ui-dialog-content.ui-widget-content").animate({scrollTop:o},"slow")}}))}},{key:"setupFloatingActionsBar",value:function(){var t=this,e=t.$element.find(".floating-block-actions");if(e.length>0){e.appendTo(t.$element.closest(".ui-dialog.ui-widget")),t.enableFloatingActionsBar();var n=$("#ccm-block-form");if(n.find("ul.nav-tabs.nav").length>0){var o=new MutationObserver((function(t){t.forEach((function(t){"class"===t.attributeName&&$(t.target).trigger("classChange")}))}));n.find("ul.nav-tabs.nav > li").each((function(){o.observe(this,{attributes:!0})})),n.find("ul.nav-tabs.nav > li").on("classChange",(function(e){var n=t.$element.closest(".ui-dialog-content.ui-widget-content");t.$element.is(":visible")?(n.css("padding-bottom",""),t.enableFloatingActionsBar()):(n.css("padding-bottom","85px"),t.disableFloatingActionsBar())}))}}}},{key:"enableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0&&this.$element.closest(".ui-dialog.ui-widget").addClass("has-floating-block-actions")}},{key:"disableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").removeClass("has-floating-block-actions")}},{key:"setupChoiceToggler",value:function(t){t.find("[data-choice]").each((function(){var e=$(this).data("choice");$(this).change((function(n){var o=t.find('[data-choice-group="'.concat(e,'"]'));o.hide(),o.filter('[data-choice-value="'.concat($(this).val(),'"]')).show()})).trigger("change")}))}},{key:"initPageSelectors",value:function(t){t.find("div[data-field=page-selector]").each((function(){$(this).concretePageSelector({inputName:$(this).data("name"),cID:parseInt($(this).data("value"))})}))}},{key:"initFileSelectors",value:function(t){t.find("div[data-field=file-selector]").each((function(){$(this).concreteFileSelector({inputName:$(this).data("name"),fID:parseInt($(this).data("value"))})}))}},{key:"initColorPickers",value:function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({cancelText:f("colorPicker.cancelText"),chooseText:f("colorPicker.chooseText"),togglePaletteMoreText:f("colorPicker.togglePaletteMoreText"),togglePaletteLessText:f("colorPicker.togglePaletteLessText"),noColorSelectedText:f("colorPicker.noColorSelectedText"),clearText:f("colorPicker.clearText")},this.options.colorPicker);t.find("input.".concat(e.className)).each((function(){var t=$(this),n=e;t.data("options")&&$.extend(!0,n,t.data("options")),t.spectrum(n)}))}},{key:"initRichTextEditors",value:function(t){var e=t.find(".editor-content");e.length>0&&(e.each((function(){$(this).attr("id")||$(this).attr("id",_.uniqueId("editor"))})),this.options.initRichTextEditor(e))}},{key:"destroyRichTextEditors",value:function(t){var e=this;t.find(".editor-content").each((function(){e.options.destroyRichTextEditor($(this))}))}},{key:"detectCheckboxes",value:function(t){t.find(".checkbox").each((function(t){var e=$(this).find('[type="checkbox"]');e.parent().append('<input type="hidden" name="'.concat(e.attr("name"),'">')),e.removeAttr("name"),e.change((function(t){var n="1"===$(this).val()?0:"";e.parent().find('input[type="hidden"]').val($(this).is(":checked")?$(this).val():n)})).trigger("change")}))}},{key:"setupSort",value:function(){var t=this;t.$container.sortable({axis:"y",cursor:"move",handle:".drag-handle",placeholder:"ui-state-highlight",update:function(){t.doSortCount()}})}},{key:"doSortCount",value:function(){this.$container.find(".".concat(this.options.classes.item)).each((function(t){$(this).find(".xw-item-entry-sort").val(t)}))}}])&&h(e.prototype,n),r&&h(e,r),t}()},,,function(t,e,n){t.exports=n(4)},function(e,n,o){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}o.r(n);var p=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(f,e);var n,o,r,a=u(f);function f(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,f),(e=a.call(this,t,$.extend({fileFieldName:"fID"},n))).setupAddFilesButton(),e}return n=f,(o=[{key:"setupAddFilesButton",value:function(){var e=this;e.$element.find(".xw-add-images-btn").click((function(){ConcreteFileManager.launchDialog((function(n){var o,r=null,a=i(n.fID);try{for(a.s();!(o=a.n()).done;){var c=o.value,l=e.$container.find(".".concat(e.options.classes.item)).length;if(e.options.maxItemsCount>0&&l>=e.options.maxItemsCount){alert(t("maxItemsExceeded"));break}var s=e.getNewItemDefaults(l);s[e.options.fileFieldName]=c,r=e.addItem(s)}}catch(t){a.e(t)}finally{a.f()}null!==r&&(r.find(".".concat(e.options.classes.item_expander)).trigger("click"),e.doSortCount())}),{multipleSelection:!0})}))}}])&&l(n.prototype,o),r&&l(n,r),f}(o(0).a);$.fn.xwSliderForm=function(t){return $.each($(this),(function(){new p($(this),t)}))}}]);