/* global $, xanweb, _ */
import defaults from './defaults'

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
        const fileSelector = `.${my.options.classes.file_selector}`
        $item.find(fileSelector).each(function () {
            const componentScript =
            `<script type="text/javascript">
                $(function() {
                    Concrete.Vue.activateContext('cms', function (Vue, config) {
                        new Vue({
                            el: 'div[data-concrete-file-input="${$(this).data('concrete-file-input')}"]',
                            components: config.components
                        })
                    })
                })
            </script>`
            $(this).after(componentScript)
        })
    }

    initColorPickers ($item) {
        const $colorPickers = $item.find('.'+this.options.colorPicker.className)
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
