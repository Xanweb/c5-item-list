!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=1)}([function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n={i18n:{confirm:"Are you sure?",maxItemsExceeded:"Max items exceeded, you cannot add any more items.",pageNotFound:"Page not found"},editor:{initRichTextEditor:function(e){},destroyRichTextEditor:function(e){}},colorPicker:{className:"ccm-widget-colorpicker",showInitial:!0,showInput:!0,allowEmpty:!0,cancelText:"Cancel",chooseText:"Choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",noColorSelectedText:"No Color Selected",clearText:"Clear Color Selection",preferredFormat:"rgb",showAlpha:!0,appendTo:".ui-dialog",showPalette:!0,palette:[["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]]},maxItemsCount:100,classes:{wrapper:"xw-item-list",items:"xw-item-list__items",item:"xw-item-list__item",item_expander:"xw-item-list__item-expander",add_item_button:"xw-item-list__add-item",edit_item_button:"xw-item-list__edit-item",remove_item_button:"xw-item-list__remove-item",image_selector:"xw-item-list__img-selector"},templateId:"itemTemplate"};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e);var a=this,c=$.extend(n,window.xanweb||{});a.options=$.extend({classes:c.classes,maxItemsCount:c.maxItemsCount,templateId:c.templateId,destroyRichTextEditor:c.editor.destroyRichTextEditor,initRichTextEditor:c.editor.initRichTextEditor,colorPicker:c.colorPicker,i18n:c.i18n,items:[],extraItemLoad:function(e,t){},itemDefaults:function(e){return{sortOrder:e}}},i),a.$element=t.addClass(a.options.classes.wrapper),a.$container=t.find(".".concat(a.options.classes.items)),a._templateItem=_.template($("#".concat(a.options.templateId)).html()),a.loadItems(),a.setupItemDetailsExpanderAction(),a.setupDeleteItemAction(),a.setupAddItemAction(),a.setupFloatingActionsBar(),a.setupSort(),a.$element.closest(".ui-dialog").on("dialogclose",(function(e){a.destroyRichTextEditors(a.$container)}))}var t,i,c;return t=e,(i=[{key:"getNewItemDefaults",value:function(e){return this.options.itemDefaults(e)}},{key:"loadItems",value:function(){var e=this,t=e.options.items;t&&0!==t.length&&(t.forEach((function(t){return e.addItem(t)})),e.doSortCount())}},{key:"addItem",value:function(e){var t=this;t.$container.append(t._templateItem({item:e}));var i=t.$container.find(".".concat(this.options.classes.item)).last();return t.initPageSelectors(i),t.initFileSelectors(i),t.initColorPickers(i),t.initRichTextEditors(i),t.detectCheckboxes(i),t.setupChoiceToggler(i),t.extraItemLoad&&t.extraItemLoad(i,e),void 0!==t.options.extraItemLoad&&t.options.extraItemLoad(i,e),i}},{key:"setupItemDetailsExpanderAction",value:function(){var e=this;e.$container.on("click",".".concat(e.options.classes.item_expander),(function(){$(this).closest(".".concat(e.options.classes.item)).find($(this).data("target")).toggle()}))}},{key:"setupDeleteItemAction",value:function(){var e=this;e.$container.on("click",".".concat(e.options.classes.remove_item_button),(function(t){t.preventDefault(),t.stopPropagation(),confirm(e.options.i18n.confirm)&&$(this).closest(".".concat(e.options.classes.item)).hide("fade",(function(){e.destroyRichTextEditors($(this)),$(this).remove(),e.doSortCount()}))}))}},{key:"setupAddItemAction",value:function(){var e=this;e.$element.find(".".concat(e.options.classes.add_item_button)).click((function(){var t=e.$container.find(".".concat(e.options.classes.item)).length;if(e.options.maxItemsCount>0&&t>=e.options.maxItemsCount)return alert(e.options.i18n.maxItemsExceeded),!1;var i=e.addItem(e.getNewItemDefaults(t));if(i.find(".".concat(e.options.classes.item_expander)).trigger("click"),e.doSortCount(),e.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0){var n=i.position().top;e.$container.parent().hasClass(e.options.classes.wrapper)||(n+=e.$container.parent().position().top),e.$element.closest(".ui-dialog-content.ui-widget-content").animate({scrollTop:n},"slow")}}))}},{key:"setupFloatingActionsBar",value:function(){var e=this,t=e.$element.find(".floating-block-actions");if(t.length>0){t.appendTo(e.$element.closest(".ui-dialog.ui-widget")),e.enableFloatingActionsBar();var i=$("#ccm-block-form");if(i.find("ul.nav-tabs.nav").length>0){var n=new MutationObserver((function(e){e.forEach((function(e){"class"===e.attributeName&&$(e.target).trigger("classChange")}))}));i.find("ul.nav-tabs.nav > li").each((function(){n.observe(this,{attributes:!0})})),i.find("ul.nav-tabs.nav > li").on("classChange",(function(t){var i=e.$element.closest(".ui-dialog-content.ui-widget-content");e.$element.is(":visible")?(i.css("padding-bottom",""),e.enableFloatingActionsBar()):(i.css("padding-bottom","85px"),e.disableFloatingActionsBar())}))}}}},{key:"enableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").find(".floating-block-actions").length>0&&this.$element.closest(".ui-dialog.ui-widget").addClass("has-floating-block-actions")}},{key:"disableFloatingActionsBar",value:function(){this.$element.closest(".ui-dialog.ui-widget").removeClass("has-floating-block-actions")}},{key:"setupChoiceToggler",value:function(e){e.find("[data-choice]").each((function(){var t=$(this).data("choice");$(this).change((function(i){var n=e.find('[data-choice-group="'.concat(t,'"]'));n.hide(),n.filter('[data-choice-value="'.concat($(this).val(),'"]')).show()})).trigger("change")}))}},{key:"initPageSelectors",value:function(e){e.find("div[data-field=page-selector]").each((function(){$(this).concretePageSelector({inputName:$(this).data("name"),cID:parseInt($(this).data("value"))})}))}},{key:"initFileSelectors",value:function(e){var t=this,i=".".concat(t.options.classes.image_selector);e.find(i).each((function(){var e=$(this).data("value");e&&t._getFileDetails(e,$(this))})),e.find(i).click((function(){var e=$(this);ConcreteFileManager.launchDialog((function(i){t._getFileDetails(i.fID,e)}))}))}},{key:"_getFileDetails",value:function(e,t){ConcreteFileManager.getFileDetails(e,(function(e){jQuery.fn.dialog.hideLoader();var i=e.files[0];t.html(i.resultsThumbnailImg),t.next(".image-fID").val(i.fID)}))}},{key:"initColorPickers",value:function(e){var t=e.find("."+this.options.colorPicker.className);if(t.length>0){var i=this;t.each((function(){$(this).spectrum(i.options.colorPicker)}))}}},{key:"initRichTextEditors",value:function(e){var t=e.find(".editor-content");t.length>0&&(t.each((function(){$(this).attr("id")||$(this).attr("id",_.uniqueId("editor"))})),this.options.initRichTextEditor(t))}},{key:"destroyRichTextEditors",value:function(e){var t=this;e.find(".editor-content").each((function(){t.options.destroyRichTextEditor($(this))}))}},{key:"detectCheckboxes",value:function(e){e.find(".checkbox").each((function(e){var t=$(this).find('[type="checkbox"]');t.parent().append('<input type="hidden" name="'.concat(t.attr("name"),'">')),t.removeAttr("name"),t.change((function(e){var i="1"===$(this).val()?0:"";t.parent().find('input[type="hidden"]').val($(this).is(":checked")?$(this).val():i)})).trigger("change")}))}},{key:"setupSort",value:function(){var e=this;e.$container.sortable({axis:"y",cursor:"move",handle:".drag-handle",placeholder:"ui-state-highlight",update:function(){e.doSortCount()}})}},{key:"doSortCount",value:function(){this.$container.find(".".concat(this.options.classes.item)).each((function(e){$(this).find(".xw-item-entry-sort").val(e)}))}}])&&a(t.prototype,i),c&&a(t,c),e}()},function(e,t,i){i(2),e.exports=i(5)},function(e,t,i){"use strict";i.r(t);var n=i(0);$.fn.xwItemList=function(e){return $.each($(this),(function(t,i){new n.a($(this),e)}))}},,,function(e,t){}]);