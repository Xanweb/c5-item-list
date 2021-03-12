export default {
    i18n: {
        confirm: 'Are you sure?',
        maxItemsExceeded: 'Max items exceeded, you cannot add any more items.',
        pageNotFound: 'Page not found',
        colorPicker: {
            cancelText: 'Cancel',
            chooseText: 'Choose',
            togglePaletteMoreText: 'more',
            togglePaletteLessText: 'less',
            noColorSelectedText: 'No Color Selected',
            clearText: 'Clear Color Selection'
        }
    },
    editor: {
        initRichTextEditor: editors => {},
        destroyRichTextEditor: editor => {}
    },
    colorPicker: {
        className: 'ccm-widget-colorpicker',
        showInitial: true,
        showInput: true,
        allowEmpty: true,
        preferredFormat: 'rgb',
        showAlpha: false,
        appendTo: '.ui-dialog',
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
}