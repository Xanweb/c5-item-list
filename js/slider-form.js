!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,"a",(function(){return r}));var a={i18n:{confirm:"Are you sure?",maxItemsExceeded:"Max items exceeded, you cannot add any more items.",pageNotFound:"Page not found"},editor:{initRichTextEditor:function(t){},destroyRichTextEditor:function(t){}},colorPicker:{className:"ccm-widget-colorpicker",showInitial:!0,showInput:!0,allowEmpty:!0,cancelText:"Cancel",chooseText:"Choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",noColorSelectedText:"No Color Selected",clearText:"Clear Color Selection",preferredFormat:"rgb",showAlpha:!0,appendTo:".ui-dialog",showPalette:!0,palette:[["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]]},maxItemsCount:100,classes:{wrapper:"xw-item-list",items:"xw-item-list__items",item:"xw-item-list__item",item_expander:"xw-item-list__item-expander",add_item_button:"xw-item-list__add-item",edit_item_button:"xw-item-list__edit-item",remove_item_button:"xw-item-list__remove-item",image_selector:"xw-item-list__img-selector"},templateId:"itemTemplate"},r=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t);var i=this,r=$.extend(a,window.xanweb||{});i.options=$.extend({classes:r.classes,maxItemsCount:r.maxItemsCount,templateId:r.templateId,destroyRichTextEditor:r.editor.destroyRichTextEditor,initRichTextEditor:r.editor.initRichTextEditor,colorPicker:r.colorPicker,i18n:r.i18n,items:[],extraItemLoad:function(t,e){},itemDefaults:function(t){return{sortOrder:t}}},n),i.$element=e.addClass(i.options.classes.wrapper),i.$container=e.find(".".concat(i.options.classes.items)),i._templateItem=_.template($("#".concat(i.options.templateId)).html()),i.loadItems(),i.setupItemDetailsExpanderAction(),i.setupDeleteItemAction(),i.setupAddItemAction(),i.setupFloatingActionsBar(),i.setupSort(),i.$element.closest(".ui-dialog").on("dialogclose",(function(t){i.destroyRichTextEditors(i.$container)}))}var e,n,r;return e=t,(n=[{key:"getNewItemDefaults",value:function(t){return this.options.itemDefaults(t)}},{key:"loadItems",value:function(){var t=this,e=t.options.items;e&&0!==e.length&&(e.forEach((function(e){return t.addItem(e)})),t.doSortCount())}},{key:"addItem",value:function(t){var e=this;e.$container.append(e._templateItem({item:t}));var n=e.$container.find(".".concat(this.options.classes.item)).last();return e.initPageSelectors(n),e.initFileSelectors(n),e.initColorPickers(n),e.initRichTextEditors(n),e.detectCheckboxes(n),e.setupChoiceToggler(n),e.extraItemLoad&&e.extraItemLoad(n,t),void 0!==e.options.extraItemLoad&&e.options.extraItemLoad(n,t),n}},{key:"setupItemDetailsExpanderAction",value:function(){var t=this;t.$container.on("click",".".concat(t.options.classes.item_expander),(function(){$(this).closest(".".concat(t.options.classes.item)).find($(this).data("target")).toggle()}))}},{key:"setupDeleteItemAction",value:function(){var t=this;t.$container.on("click",".".concat(t.options.classes.remove_item_button),(function(e){e.preventDefault(),e.stopPropagation(),confirm(t.options.i18n.confirm)&&$(this).closest(".".concat(t.options.classes.item)).hide("fade",(function(){t.destroyRichTextEditors($(this)),$(this).remove(),t.doSortCount()}))}))}},{key:"setupAddItemAction",value:function(){var t=this;t.$element.find(".".concat(t.options.classes.add_item_button)).click((function(){var e=t.$container.find(".".concat(t.options.classes.item)).length;if(t.options.maxItemsCount>0&&e>=t.options.maxItemsCount)return alert(t.options.i18n.maxItemsExceeded),!1;var n=t.addItem(t.getNewItemDefaults(e));if(n.find(".".concat(t.options.classes.item_expander)).trigger("click"),t.doSortCount(),t.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0){var o=n.position().top;t.$container.parent().hasClass(t.options.classes.wrapper)||(o+=t.$container.parent().position().top),t.$element.closest(".ui-dialog-content.ui-widget-content").animate({scrollTop:o},"slow")}}))}},{key:"setupFloatingActionsBar",value:function(){var t=this,e=t.$element.find(".floating-block-actions");if(e.length>0){e.appendTo(t.$element.closest(".ui-dialog.ui-widget")),t.enableFloatingActionsBar();var n=$("#ccm-block-form");if(n.find("ul.nav-tabs.nav").length>0){var o=new MutationObserver((function(t){t.forEach((function(t){"class"===t.attributeName&&$(t.target).trigger("classChange")}))}));n.find("ul.nav-tabs.nav > li").each((function(){o.observe(this,{attributes:!0})})),n.find("ul.nav-tabs.nav > li").on("classChange",(function(e){var n=t.$element.closest(".ui-dialog-content.ui-widget-content");t.$element.is(":visible")?(n.css("padding-bottom",""),t.enableFloatingActionsBar()):(n.css("padding-bottom","85px"),t.disableFloatingActionsBar())}))}}}},{key:"enableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0&&this.$element.closest(".ui-dialog.ui-widget").addClass("has-floating-block-actions")}},{key:"disableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").removeClass("has-floating-block-actions")}},{key:"setupChoiceToggler",value:function(t){t.find("[data-choice]").each((function(){var e=$(this).data("choice");$(this).change((function(n){var o=t.find('[data-choice-group="'.concat(e,'"]'));o.hide(),o.filter('[data-choice-value="'.concat($(this).val(),'"]')).show()})).trigger("change")}))}},{key:"initPageSelectors",value:function(t){t.find("div[data-field=page-selector]").each((function(){$(this).concretePageSelector({inputName:$(this).data("name"),cID:parseInt($(this).data("value"))})}))}},{key:"initFileSelectors",value:function(t){var e=this,n=".".concat(e.options.classes.image_selector);t.find(n).each((function(){var t=$(this).data("value");t&&e._getFileDetails(t,$(this))})),t.find(n).click((function(){var t=$(this);ConcreteFileManager.launchDialog((function(n){e._getFileDetails(n.fID,t)}))}))}},{key:"_getFileDetails",value:function(t,e){ConcreteFileManager.getFileDetails(t,(function(t){jQuery.fn.dialog.hideLoader();var n=t.files[0];e.html(n.resultsThumbnailImg),e.next(".image-fID").val(n.fID)}))}},{key:"initColorPickers",value:function(t){var e=t.find("."+this.options.colorPicker.className);if(console.log(e.length),e.length>0){var n=this;e.each((function(){$(this).spectrum(n.options.colorPicker)}))}}},{key:"initRichTextEditors",value:function(t){var e=t.find(".editor-content");e.length>0&&(e.each((function(){$(this).attr("id")||$(this).attr("id",_.uniqueId("editor"))})),this.options.initRichTextEditor(e))}},{key:"destroyRichTextEditors",value:function(t){var e=this;t.find(".editor-content").each((function(){e.options.destroyRichTextEditor($(this))}))}},{key:"detectCheckboxes",value:function(t){t.find(".checkbox").each((function(t){var e=$(this).find('[type="checkbox"]');e.parent().append('<input type="hidden" name="'.concat(e.attr("name"),'">')),e.removeAttr("name"),e.change((function(t){var n="1"===$(this).val()?0:"";e.parent().find('input[type="hidden"]').val($(this).is(":checked")?$(this).val():n)})).trigger("change")}))}},{key:"setupSort",value:function(){var t=this;t.$container.sortable({axis:"y",cursor:"move",handle:".drag-handle",placeholder:"ui-state-highlight",update:function(){t.doSortCount()}})}},{key:"doSortCount",value:function(){this.$container.find(".".concat(this.options.classes.item)).each((function(t){$(this).find(".xw-item-entry-sort").val(t)}))}}])&&i(e.prototype,n),r&&i(e,r),t}()},,,function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,r=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return r=t.done,t},e:function(t){c=!0,i=t},f:function(){try{r||null==o.return||o.return()}finally{if(c)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.r(e);var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,o,a,d=(e=m,function(){var t,n=u(e);if(l()){var o=u(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return s(this,t)});function m(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r(this,m),(e=d.call(this,t,$.extend({fileFieldName:"fID"},n))).setupAddFilesButton(),e}return n=m,(o=[{key:"setupAddFilesButton",value:function(){var t=this;t.$element.find(".xw-add-images-btn").click((function(){ConcreteFileManager.launchDialog((function(e){var n,o=null,a=i(e.fID);try{for(a.s();!(n=a.n()).done;){var r=n.value,c=t.$container.find(".".concat(t.options.classes.item)).length;if(t.options.maxItemsCount>0&&c>=t.options.maxItemsCount){alert(t.options.i18n.maxItemsExceeded);break}var s=t.getNewItemDefaults(c);s[t.options.fileFieldName]=r,o=t.addItem(s)}}catch(t){a.e(t)}finally{a.f()}null!==o&&(o.find(".".concat(t.options.classes.item_expander)).trigger("click"),t.doSortCount())}),{multipleSelection:!0})}))}}])&&c(n.prototype,o),a&&c(n,a),m}(n(0).a);$.fn.xwSliderForm=function(t){return $.each($(this),(function(){new d($(this),t)}))}}]);