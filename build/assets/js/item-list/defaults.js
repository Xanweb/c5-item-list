export default {
    i18n: {
        confirm: 'Are you sure?',
        maxItemsExceeded: 'Max items exceeded, you cannot add any more items.',
        pageNotFound: 'Page not found'
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
        remove_item_button: 'xw-item-list__remove-item'
    },
    templateId: 'itemTemplate'
}