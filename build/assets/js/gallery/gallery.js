import ItemList from "../item-list/item-list"
import Uploader from "./uploader"

const defaults = {
    classes: {
        wrapper: 'xw-images-form',
        items: 'xw-images-form__images',
        item: 'xw-images-form__image-cell',
        item_expander: 'xw-images-form__image-expander',
        add_item_button: 'xw-images-form__add-image',
        edit_item_button: 'xw-images-form__edit-image',
        remove_item_button: 'xw-images-form__remove-image'
    },
    templateIdentifierPrefix: 'xwImgCell'
}

export default class Gallery extends ItemList {
    /**
     * Construct Gallery.
     *
     * @param  {Object} $element
     * @param  {Object} options
     */
    constructor ($element, options = {}) {
        const extOptions = $.extend(defaults, options)
        super($element, extOptions)

        this.uploader = new Uploader(this)
    }
}