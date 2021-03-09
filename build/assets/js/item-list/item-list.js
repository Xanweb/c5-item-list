/* global $, xanweb, _ */

const defaults = {
    i18n: {
        confirm: 'Are you sure?',
        maxItemsExceeded: 'Max items exceeded, you cannot add any more items.',
        pageNotFound: 'Page not found'
    },
    editor: {
        initRichTextEditor: editors => {},
        destroyRichTextEditor: editor => {}
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
        preferredFormat: 'rgb',
        showAlpha: true,
        appendTo: '.ui-dialog',
        showPalette: true,
        palette: [
            ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
            ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
            ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
            ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
            ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
            ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
            ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
            ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
        ]
    },
    maxItemsCount: 100,
    classes: {
       wrapper: 'xw-item-list',
       items: 'xw-item-list__items',
       item: 'xw-item-list__item',
       item_expander: 'xw-item-list__item-expander',
       add_item_button: 'xw-item-list__add-item',
       edit_item_button: 'xw-item-list__edit-item',
       remove_item_button: 'xw-item-list__remove-item',
       image_selector: 'xw-item-list__img-selector'
    },
    templateId: 'itemTemplate'
}

export default class ItemList {
    /**
     * Construct ItemList.
     *
     * @param  {jQuery} $element
     * @param  {Object} options
     */
    constructor ($element, options = {}) {
        const my = this, itemListDefaults = $.extend(defaults, window['xanweb'] || {})
        my.options = $.extend({
            classes: itemListDefaults.classes,
            maxItemsCount: itemListDefaults.maxItemsCount,
            templateId: itemListDefaults.templateId,
            destroyRichTextEditor: itemListDefaults.editor.destroyRichTextEditor,
            initRichTextEditor: itemListDefaults.editor.initRichTextEditor,
            colorPicker: itemListDefaults.colorPicker,
            i18n: itemListDefaults.i18n,
            items: [],
            extraItemLoad: ($newItem, item) => {},
            itemDefaults: itemsCount => ({
                sortOrder: itemsCount
            })
        }, options)

        my.$element = $element.addClass(my.options.classes.wrapper)
        my.$container = $element.find(`.${my.options.classes.items}`)
        my._templateItem = _.template($(`#${my.options.templateId}`).html())
        my.loadItems()
        my.setupItemDetailsExpanderAction()
        my.setupDeleteItemAction()
        my.setupAddItemAction()
        my.setupFloatingActionsBar()
        my.setupSort()

        // Make sure to destroy RichTextEditors on dialog close
        my.$element.closest('.ui-dialog').on('dialogclose', e => {
            my.destroyRichTextEditors(my.$container)
        })
    }

    getNewItemDefaults (itemsCount) {
        return this.options.itemDefaults(itemsCount)
    }

    loadItems () {
        const my = this, items = my.options.items
        if (!items || items.length === 0) {
            return
        }

        items.forEach(item => my.addItem(item))
        my.doSortCount()
    }

    addItem (item) {
        const my = this
        my.$container.append(my._templateItem({item: item}))
        const $newItem = my.$container.find(`.${this.options.classes.item}`).last()
        my.initPageSelectors($newItem)
        my.initFileSelectors($newItem)
        my.initColorPickers($newItem)
        my.initRichTextEditors($newItem)
        my.detectCheckboxes($newItem)
        my.setupChoiceToggler($newItem)

        if (my.extraItemLoad) {
            my.extraItemLoad($newItem, item)
        }

        if (my.options.extraItemLoad !== undefined) {
            my.options.extraItemLoad($newItem, item)
        }

        return $newItem
    }

    setupItemDetailsExpanderAction () {
        const me = this
        me.$container.on('click', `.${me.options.classes.item_expander}`, function () {
            $(this).closest(`.${me.options.classes.item}`).find($(this).data('target')).toggle()
        })
    }

    setupDeleteItemAction () {
        const my = this
        my.$container.on('click', `.${my.options.classes.remove_item_button}`, function (e) {
            e.preventDefault()
            e.stopPropagation()
            if (confirm(my.options.i18n.confirm)) {
                $(this).closest(`.${my.options.classes.item}`).hide('fade', function () {
                    my.destroyRichTextEditors($(this))
                    $(this).remove()
                    my.doSortCount()
                })
            }
        })
    }

    setupAddItemAction () {
        const my = this
        my.$element.find(`.${my.options.classes.add_item_button}`).click(function () {
            const itemsCount = my.$container.find(`.${my.options.classes.item}`).length
            if (my.options.maxItemsCount > 0 && itemsCount >= my.options.maxItemsCount) {
                alert(my.options.i18n.maxItemsExceeded)
                return false
            }

            const $newItem = my.addItem(my.getNewItemDefaults(itemsCount))
            $newItem.find(`.${my.options.classes.item_expander}`).trigger('click')
            my.doSortCount()
            if (my.$element.closest('.ui-dialog.ui-widget').find('.floating-block-actions').length > 0) {
                let scroll = $newItem.position().top
                if (!my.$container.parent().hasClass(my.options.classes.wrapper)) {
                    scroll += my.$container.parent().position().top
                }

                my.$element.closest('.ui-dialog-content.ui-widget-content').animate({
                    scrollTop: scroll
                }, 'slow')
            }
        })
    }

    setupFloatingActionsBar () {
        const my = this
        const $actionsBar = my.$element.find('.floating-block-actions')
        if ($actionsBar.length > 0) {
            $actionsBar.appendTo(my.$element.closest('.ui-dialog.ui-widget'))
            my.enableFloatingActionsBar()

            const $bFormContainer = $('#ccm-block-form')
            if ($bFormContainer.find('ul.nav-tabs.nav').length > 0) {
                const observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        if (mutation.attributeName === "class") {
                            $(mutation.target).trigger('classChange')
                        }
                    })
                })

                $bFormContainer.find('ul.nav-tabs.nav > li').each(function () {
                    observer.observe(this, {
                        attributes: true
                    })
                })

                $bFormContainer.find('ul.nav-tabs.nav > li').on('classChange', function (e) {
                    const $widgetContent = my.$element.closest('.ui-dialog-content.ui-widget-content')
                    if (my.$element.is(':visible')) {
                        $widgetContent.css('padding-bottom', '')
                        my.enableFloatingActionsBar()
                    } else {
                        $widgetContent.css('padding-bottom', '85px')
                        my.disableFloatingActionsBar()
                    }
                })
            }
        }
    }

    enableFloatingActionsBar () {
        const $actionsBar = this.$element.closest('.ui-dialog.ui-widget').find('.floating-block-actions')
        if ($actionsBar.length > 0) {
            this.$element.closest('.ui-dialog.ui-widget').addClass('has-floating-block-actions')
        }
    }

    disableFloatingActionsBar () {
        this.$element.closest('.ui-dialog.ui-widget').removeClass('has-floating-block-actions')
    }

    setupChoiceToggler ($item) {
        $item.find('[data-choice]').each(function () {
            const group = $(this).data('choice')
            $(this).change(function (e) {
                const $choiceGroup = $item.find(`[data-choice-group="${group}"]`)
                $choiceGroup.hide()
                $choiceGroup.filter(`[data-choice-value="${$(this).val()}"]`).show()
            }).trigger('change')
        })
    }

    initPageSelectors ($item) {
        const my = this
        $item.find('div[data-field=page-selector]').each(function () {
            $(this).concretePageSelector({
                inputName: $(this).data('name'),
                cID: parseInt($(this).data('value'))
            })
        })
    }

    initFileSelectors($item) {
        const my = this
        const imageSelector = `.${my.options.classes.image_selector}`

        $item.find(imageSelector).each(function () {
            let fID = $(this).data('value')
            if(fID) { // To prevent file not found error
                my._getFileDetails(fID, $(this))
            }
        })

        $item.find(imageSelector).click(function () {
            let imageContainer = $(this)
            ConcreteFileManager.launchDialog(function (data) {
                my._getFileDetails(data.fID, imageContainer)
            })
        })
    }

    //Todo: Check a better solution
    _getFileDetails(id, $elem) {
        ConcreteFileManager.getFileDetails(id, function (r) {
            jQuery.fn.dialog.hideLoader()
            let file = r.files[0]
            $elem.html(file.resultsThumbnailImg)
            $elem.next('.image-fID').val(file.fID)
        })
    }

    initColorPickers ($item) {
        const $colorPickers = $item.find('.'+this.options.colorPicker.className)
        console.log($colorPickers.length)
        if ($colorPickers.length > 0) {
            const my = this
            $colorPickers.each(function() {
                $(this).spectrum(my.options.colorPicker)
            })
        }
    }

    initRichTextEditors ($item) {
        const $editors = $item.find('.editor-content')
        if ($editors.length > 0) {
            // Ensure a unique id for all editors
            $editors.each(function() {
                if (!$(this).attr('id')) {
                    $(this).attr('id', _.uniqueId('editor'))
                }
            })

            this.options.initRichTextEditor($editors)
        }
    }

    destroyRichTextEditors ($container) {
        const my = this
        $container.find('.editor-content').each(function () {
            my.options.destroyRichTextEditor($(this))
        })
    }

    detectCheckboxes ($item) {
        $item.find('.checkbox').each(function (index) {
            const $checkboxField = $(this).find('[type="checkbox"]')
            $checkboxField.parent().append(`<input type="hidden" name="${$checkboxField.attr('name')}">`)
            $checkboxField.removeAttr('name')
            $checkboxField.change(function (e) {
                const defaultValue = ($(this).val() === '1') ? 0 : ''
                $checkboxField.parent().find('input[type="hidden"]').val(
                    $(this).is(':checked') ? $(this).val() : defaultValue
                )
            }).trigger('change')
        })
    }

    setupSort() {
        const me = this
        me.$container.sortable({
            axis: 'y',
            cursor: 'move',
            handle: '.drag-handle',
            placeholder: 'ui-state-highlight',
            update: function() {
                me.doSortCount()
            }
        })
    }

    doSortCount () {
        this.$container.find(`.${this.options.classes.item}`).each(function (index) {
            $(this).find('.xw-item-entry-sort').val(index)
        })
    }
}
