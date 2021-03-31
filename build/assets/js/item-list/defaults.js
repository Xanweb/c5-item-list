export default {
    editor: {
        initRichTextEditor: editors => {},
        destroyRichTextEditor: editors => {}
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