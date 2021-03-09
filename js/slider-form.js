/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/item-list/item-list.js":
/*!******************************************!*\
  !*** ./assets/js/item-list/item-list.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemList; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global $, xanweb, _ */
var defaults = {
  i18n: {
    confirm: 'Are you sure?',
    maxItemsExceeded: 'Max items exceeded, you cannot add any more items.',
    pageNotFound: 'Page not found'
  },
  editor: {
    initRichTextEditor: function initRichTextEditor(editors) {},
    destroyRichTextEditor: function destroyRichTextEditor(editor) {}
  },
  //todo: use i18n
  colorPicker: {
    className: 'ccm-widget-colorpicker',
    showInitial: true,
    showInput: true,
    allowEmpty: true,
    cancelText: 'Cancel',
    chooseText: 'Choose',
    togglePaletteMoreText: 'more',
    togglePaletteLessText: 'less',
    noColorSelectedText: 'No Color Selected',
    clearText: 'Clear Color Selection',
    preferredFormat: 'rgba',
    showAlpha: true,
    appendTo: '.ui-dialog',
    showPalette: true,
    palette: [["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"], ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"], ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"], ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"], ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"], ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"], ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"], ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]]
  },
  maxItemsCount: 100,
  classes: {
    wrapper: 'xw-item-list',
    items: 'xw-item-list__items',
    item: 'xw-item-list__item',
    item_expander: 'xw-item-list__item-expander',
    add_item_button: 'xw-item-list__add-item',
    edit_item_button: 'xw-item-list__edit-item',
    remove_item_button: 'xw-item-list__remove-item'
  },
  templateId: 'itemTemplate'
};

var ItemList = /*#__PURE__*/function () {
  /**
   * Construct ItemList.
   *
   * @param  {jQuery} $element
   * @param  {Object} options
   */
  function ItemList($element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ItemList);

    var my = this,
        itemListDefaults = $.extend(defaults, window['xanweb'] || {});
    my.options = $.extend({
      classes: itemListDefaults.classes,
      maxItemsCount: itemListDefaults.maxItemsCount,
      templateId: itemListDefaults.templateId,
      destroyRichTextEditor: itemListDefaults.editor.destroyRichTextEditor,
      initRichTextEditor: itemListDefaults.editor.initRichTextEditor,
      colorPicker: itemListDefaults.colorPicker,
      i18n: itemListDefaults.i18n,
      items: [],
      extraItemLoad: function extraItemLoad($newItem, item) {},
      itemDefaults: function itemDefaults(itemsCount) {
        return {
          sortOrder: itemsCount
        };
      }
    }, options);
    my.$element = $element.addClass(my.options.classes.wrapper);
    my.$container = $element.find(".".concat(my.options.classes.items));
    my._templateItem = _.template($("#".concat(my.options.templateId)).html());
    my.loadItems();
    my.setupItemDetailsExpanderAction();
    my.setupDeleteItemAction();
    my.setupAddItemAction();
    my.setupFloatingActionsBar();
    my.setupSort();
    my.initFiles(); // Make sure to destroy RichTextEditors on dialog close

    my.$element.closest('.ui-dialog').on('dialogclose', function (e) {
      my.destroyRichTextEditors(my.$container);
    });
  }

  _createClass(ItemList, [{
    key: "getNewItemDefaults",
    value: function getNewItemDefaults(itemsCount) {
      return this.options.itemDefaults(itemsCount);
    }
  }, {
    key: "loadItems",
    value: function loadItems() {
      var my = this,
          items = my.options.items;

      if (!items || items.length === 0) {
        return;
      }

      items.forEach(function (item) {
        return my.addItem(item);
      });
      my.doSortCount();
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      var my = this;
      my.$container.append(my._templateItem({
        item: item
      }));
      var $newItem = my.$container.find(".".concat(this.options.classes.item)).last();
      my.initPageSelectors($newItem);
      my.initFileSelectors($newItem);
      my.initColorPickers($newItem);
      my.initRichTextEditors($newItem);
      my.detectCheckboxes($newItem);
      my.setupChoiceToggler($newItem);

      if (my.extraItemLoad) {
        my.extraItemLoad($newItem, item);
      }

      if (my.options.extraItemLoad !== undefined) {
        my.options.extraItemLoad($newItem, item);
      }

      return $newItem;
    }
  }, {
    key: "setupItemDetailsExpanderAction",
    value: function setupItemDetailsExpanderAction() {
      var me = this;
      me.$container.on('click', ".".concat(me.options.classes.item_expander), function () {
        $(this).closest(".".concat(me.options.classes.item)).find($(this).data('target')).toggle();
      });
    }
  }, {
    key: "setupDeleteItemAction",
    value: function setupDeleteItemAction() {
      var my = this;
      my.$container.on('click', ".".concat(my.options.classes.remove_item_button), function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (confirm(my.options.i18n.confirm)) {
          $(this).closest(".".concat(my.options.classes.item)).hide('fade', function () {
            my.destroyRichTextEditors($(this));
            $(this).remove();
            my.doSortCount();
          });
        }
      });
    }
  }, {
    key: "setupAddItemAction",
    value: function setupAddItemAction() {
      var my = this;
      my.$element.find(".".concat(my.options.classes.add_item_button)).click(function () {
        var itemsCount = my.$container.find(".".concat(my.options.classes.item)).length;

        if (my.options.maxItemsCount > 0 && itemsCount >= my.options.maxItemsCount) {
          alert(my.options.i18n.maxItemsExceeded);
          return false;
        }

        var $newItem = my.addItem(my.getNewItemDefaults(itemsCount));
        $newItem.find(".".concat(my.options.classes.item_expander)).trigger('click');
        my.doSortCount();

        if (my.$element.closest('.ui-dialog.ui-widget').find('.floating-block-actions').length > 0) {
          var scroll = $newItem.position().top;

          if (!my.$container.parent().hasClass(my.options.classes.wrapper)) {
            scroll += my.$container.parent().position().top;
          }

          my.$element.closest('.ui-dialog-content.ui-widget-content').animate({
            scrollTop: scroll
          }, 'slow');
        }
      });
    }
  }, {
    key: "setupFloatingActionsBar",
    value: function setupFloatingActionsBar() {
      var my = this;
      var $actionsBar = my.$element.find('.floating-block-actions');

      if ($actionsBar.length > 0) {
        $actionsBar.appendTo(my.$element.closest('.ui-dialog.ui-widget'));
        my.enableFloatingActionsBar();
        var $bFormContainer = $('#ccm-block-form');

        if ($bFormContainer.find('ul.nav-tabs.nav').length > 0) {
          var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              if (mutation.attributeName === "class") {
                $(mutation.target).trigger('classChange');
              }
            });
          });
          $bFormContainer.find('ul.nav-tabs.nav > li').each(function () {
            observer.observe(this, {
              attributes: true
            });
          });
          $bFormContainer.find('ul.nav-tabs.nav > li').on('classChange', function (e) {
            var $widgetContent = my.$element.closest('.ui-dialog-content.ui-widget-content');

            if (my.$element.is(':visible')) {
              $widgetContent.css('padding-bottom', '');
              my.enableFloatingActionsBar();
            } else {
              $widgetContent.css('padding-bottom', '85px');
              my.disableFloatingActionsBar();
            }
          });
        }
      }
    }
  }, {
    key: "enableFloatingActionsBar",
    value: function enableFloatingActionsBar() {
      var $actionsBar = this.$element.closest('.ui-dialog.ui-widget').find('.floating-block-actions');

      if ($actionsBar.length > 0) {
        this.$element.closest('.ui-dialog.ui-widget').addClass('has-floating-block-actions');
      }
    }
  }, {
    key: "disableFloatingActionsBar",
    value: function disableFloatingActionsBar() {
      this.$element.closest('.ui-dialog.ui-widget').removeClass('has-floating-block-actions');
    }
  }, {
    key: "setupChoiceToggler",
    value: function setupChoiceToggler($item) {
      $item.find('[data-choice]').each(function () {
        var group = $(this).data('choice');
        $(this).change(function (e) {
          var $choiceGroup = $item.find("[data-choice-group=\"".concat(group, "\"]"));
          $choiceGroup.hide();
          $choiceGroup.filter("[data-choice-value=\"".concat($(this).val(), "\"]")).show();
        }).trigger('change');
      });
    }
  }, {
    key: "initPageSelectors",
    value: function initPageSelectors($item) {
      var my = this;
      $item.find('div[data-field=page-selector]').each(function () {
        $(this).concretePageSelector({
          inputName: $(this).data('name'),
          cID: parseInt($(this).data('value'))
        });
      });
    }
  }, {
    key: "initFiles",
    value: function initFiles() {
      var my = this;
      my.$container.find('.ccm-pick-item-image').each(function () {
        var fID = $(this).data('value');

        my._getFileDetails(fID, $(this));
      });
    }
  }, {
    key: "initFileSelectors",
    value: function initFileSelectors($item) {
      var my = this;
      $item.find('.ccm-pick-item-image').click(function () {
        var imageContainer = $(this);
        ConcreteFileManager.launchDialog(function (data) {
          my._getFileDetails(data.fID, imageContainer);
        });
      });
    }
  }, {
    key: "_getFileDetails",
    //Todo clean this
    value: function _getFileDetails(id, elem) {
      ConcreteFileManager.getFileDetails(id, function (r) {
        jQuery.fn.dialog.hideLoader();
        var file = r.files[0];
        elem.html(file.resultsThumbnailImg);
        elem.next('.image-fID').val(file.fID);
      });
    }
  }, {
    key: "initColorPickers",
    value: function initColorPickers($item) {
      var $colorPickers = $item.find('.' + this.options.colorPicker.className);
      console.log($colorPickers.length);

      if ($colorPickers.length > 0) {
        var my = this;
        $colorPickers.each(function () {
          $(this).spectrum(my.options.colorPicker);
        });
      }
    }
  }, {
    key: "initRichTextEditors",
    value: function initRichTextEditors($item) {
      var $editors = $item.find('.editor-content');

      if ($editors.length > 0) {
        // Ensure a unique id for all editors
        $editors.each(function () {
          if (!$(this).attr('id')) {
            $(this).attr('id', _.uniqueId('editor'));
          }
        });
        this.options.initRichTextEditor($editors);
      }
    }
  }, {
    key: "destroyRichTextEditors",
    value: function destroyRichTextEditors($container) {
      var my = this;
      $container.find('.editor-content').each(function () {
        my.options.destroyRichTextEditor($(this));
      });
    }
  }, {
    key: "detectCheckboxes",
    value: function detectCheckboxes($item) {
      $item.find('.checkbox').each(function (index) {
        var $checkboxField = $(this).find('[type="checkbox"]');
        $checkboxField.parent().append("<input type=\"hidden\" name=\"".concat($checkboxField.attr('name'), "\">"));
        $checkboxField.removeAttr('name');
        $checkboxField.change(function (e) {
          var defaultValue = $(this).val() === '1' ? 0 : '';
          $checkboxField.parent().find('input[type="hidden"]').val($(this).is(':checked') ? $(this).val() : defaultValue);
        }).trigger('change');
      });
    }
  }, {
    key: "setupSort",
    value: function setupSort() {
      var me = this;
      me.$container.sortable({
        axis: 'y',
        cursor: 'move',
        handle: '.drag-handle',
        placeholder: 'ui-state-highlight',
        update: function update() {
          me.doSortCount();
        }
      });
    }
  }, {
    key: "doSortCount",
    value: function doSortCount() {
      this.$container.find(".".concat(this.options.classes.item)).each(function (index) {
        $(this).find('.xw-item-entry-sort').val(index);
      });
    }
  }]);

  return ItemList;
}();



/***/ }),

/***/ "./assets/js/slider/index.js":
/*!***********************************!*\
  !*** ./assets/js/slider/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./assets/js/slider/slider.js");
/* global $ */
 // jQuery Plugin

$.fn.xwSliderForm = function (options) {
  return $.each($(this), function () {
    new _slider__WEBPACK_IMPORTED_MODULE_0__["default"]($(this), options);
  });
};

/***/ }),

/***/ "./assets/js/slider/slider.js":
/*!************************************!*\
  !*** ./assets/js/slider/slider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _item_list_item_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item-list/item-list */ "./assets/js/item-list/item-list.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* global $, xanweb, _, ConcreteFileManager */


var Slider = /*#__PURE__*/function (_ItemList) {
  _inherits(Slider, _ItemList);

  var _super = _createSuper(Slider);

  /**
   * Construct Slider.
   *
   * @param  {jQuery} $element
   * @param  {Object} options
   */
  function Slider($element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Slider);

    _this = _super.call(this, $element, $.extend({
      fileFieldName: 'fID'
    }, options));

    _this.setupAddFilesButton();

    return _this;
  }

  _createClass(Slider, [{
    key: "setupAddFilesButton",
    value: function setupAddFilesButton() {
      var my = this;
      my.$element.find('.xw-add-images-btn').click(function () {
        ConcreteFileManager.launchDialog(function (data) {
          var $lastItem = null;

          var _iterator = _createForOfIteratorHelper(data.fID),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var fID = _step.value;
              var itemsCount = my.$container.find(".".concat(my.options.classes.item)).length;

              if (my.options.maxItemsCount > 0 && itemsCount >= my.options.maxItemsCount) {
                alert(my.options.i18n.maxItemsExceeded);
                break;
              }

              var item = my.getNewItemDefaults(itemsCount);
              item[my.options.fileFieldName] = fID;
              $lastItem = my.addItem(item);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if ($lastItem !== null) {
            $lastItem.find(".".concat(my.options.classes.item_expander)).trigger('click');
            my.doSortCount();
          }
        }, {
          multipleSelection: true
        });
      });
    }
  }]);

  return Slider;
}(_item_list_item_list__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./assets/js/slider/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\concrete5-v9\concrete\vendor\xanweb\c5-item-list\build\assets\js\slider\index.js */"./assets/js/slider/index.js");


/***/ })

/******/ });