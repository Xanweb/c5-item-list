/* global $, xanweb, _ */
export default class XanwebItemList {
    /**
     * Construct XanwebItemList.
     *
     * @param  {Object} $element
     * @param  {Object} options
     */
    constructor ($element, options = {}) {
        const my = this,
            xwDefaults = $.extend({
                i18n: {
                    confirm: 'Are you sure?',
                    maxItemsExceeded: 'Max items exceeded, You can not add any more items.',
                    pageNotFound: 'Page not found'
                },
                editor: {
                    initRichTextEditor: editors => {},
                    destroyRichTextEditor: editor => {}
                }
            }, xanweb || {})

        my.options = $.extend({
            i18n: xwDefaults.i18n,
            items: [],
            maxItemsCount: 100,
            initRichTextEditor: xwDefaults.editor.initRichTextEditor,
            destroyRichTextEditor: xwDefaults.editor.destroyRichTextEditor,
            editBtn: null,
            onSelectPage: ($el, response) => {},
            onSelectFile: ($el, response) => {},
            extraItemLoad: ($newItem, item) => {}
        }, options)

        if (options.onSelectPage !== undefined && $.fn.xanPageSelector === undefined) {
            console.error('onSelectPage requires $.fn.xanPageSelector which is undefined!')
        }

        if (options.onSelectFile !== undefined && $.fn.xanFileSelector === undefined) {
            console.error('onSelectFile requires $.fn.xanFileSelector which is undefined!')
        }

        my.$element = $element.addClass('ccm-block-edit-container')
        my.$container = $element.find('.ccm-item-list')
        my._templateItem = _.template($(`#itemTemplate${options.bID}`).html())
        my.loadItems()
        my.setupItemHeaderAction()
        my.setupDeleteItemAction()
        my.setupAddItemAction()
        my.setupFloatingActionsBar()

        // Setup Items Sort
        my.$container.sortable({
            handle: '.panel-heading',
            update: function(){
                my.doSortCount()
            }
        })

        // Clean Exit
        my.$element.closest('.ui-dialog').on('dialogclose', e => {
            my.destroyRichTextEditors(my.$container)
        })
    }

    getNewItemDefaults (itemsCount) {
        return {
            sortOrder: itemsCount
        }
    }

    loadItems () {
        const my = this
        const items = my.options.items
        if(!items || items.length === 0) {
            return
        }

        items.forEach(item => my.addItem(item))
        my.doSortCount()
    }

    addItem (item) {
        const my = this
        my.$container.append(my._templateItem({item: item}))
        const $newItem = my.$container.find('.ccm-item-entry').last()
        my.initPageSelectors($newItem)
        my.initFileSelectors($newItem)
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

    setupItemHeaderAction () {
        const my = this
        const headerActionOn = my.options.editBtn ?? '.ccm-item-entry > .panel-heading'
        my.$container.on('click', headerActionOn, function () {
            if (my.options.editBtn) {
                $(this).closest('.panel-heading').parent().find('.panel-body').toggle()
            } else {
                $(this).parent().find('.panel-body').toggle()
            }
        })
    }

    setupDeleteItemAction () {
        const my = this
        my.$container.on('click', '.btn-delete-item', function (e) {
            e.preventDefault()
            e.stopPropagation()

            if (confirm(my.options.i18n.confirm)) {
                $(this).closest('.ccm-item-entry').hide('fade', function () {
                    // Properly Destroy Rich Text Editors
                    my.destroyRichTextEditors($(this))
                    $(this).remove()
                    my.doSortCount()
                })
            }
        })
    }

    setupAddItemAction () {
        const my = this
        my.$element.find('.ccm-add-item-entry').click(function () {
            const itemsCount = my.$container.find('.ccm-item-entry').length
            if(my.options.maxItemsCount > 0 && itemsCount >= my.options.maxItemsCount) {
                alert(my.options.i18n.maxItemsExceeded)
                return false
            }

            const defaultItem = (my.options.getNewItemDefaults !== undefined) ?
                my.options.getNewItemDefaults(itemsCount) :
                my.getNewItemDefaults(itemsCount)

            const $newItem = my.addItem(defaultItem)
            $newItem.find('.panel-heading').trigger('click')
            my.doSortCount()
            if(my.$element.closest('.ui-dialog.ui-widget').find('.floating-block-actions').length > 0) {
                let scroll = $newItem.position().top
                if(!my.$container.parent().hasClass('ccm-block-edit-container')) {
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
            if ($.fn.xanPageSelector !== undefined) {
                $(this).xanPageSelector({
                    inputName: $(this).data('name'),
                    cID: parseInt($(this).data('value')),
                    onChange: my.options.onSelectPage
                })
            } else {
                $(this).concretePageSelector({
                    inputName: $(this).data('name'),
                    cID: parseInt($(this).data('value'))
                })
            }
        })
    }

    initFileSelectors ($item) {
        const my = this
        $item.find('div[data-field=file-selector]').each(function () {
            if ($.fn.xanFileSelector !== undefined) {
                $(this).xanFileSelector({
                    inputName: $(this).data('name'),
                    fID: parseInt($(this).data('value')),
                    onChange: my.options.onSelectFile
                })
            } else {
                $(this).concreteFileSelector({
                    inputName: $(this).data('name'),
                    fID: parseInt($(this).data('value'))
                })
            }
        })
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
            if ($checkboxField.val() == "1") {
                $checkboxField.parent().append(`<input type="hidden" name="${$checkboxField.attr('name')}">`)
                $checkboxField.removeAttr('name')
                $checkboxField.change(function (e) {
                    $checkboxField.parent().find('input[type="hidden"]').val($(this).is(':checked') ? 1 : 0)
                }).trigger('change')
            }
        })
    }

    doSortCount () {
        this.$container.find('.ccm-item-entry').each(function (index) {
            $(this).find('.ccm-item-entry-sort').val(index)
        })
    }
}

// jQuery Plugin
$.fn.xwItemList = function (options) {
    return $.each($(this), function (i, obj) {
        new XanwebItemList($(this), options)
    })
}
