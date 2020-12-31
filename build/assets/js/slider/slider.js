/* global $, xanweb, _, ConcreteFileManager */
import ItemList from '../item-list/item-list'

export default class Slider extends ItemList {
    /**
     * Construct Slider.
     *
     * @param  {jQuery} $element
     * @param  {Object} options
     */
    constructor ($element, options = {}) {
        super($element, $.extend({fileFieldName: 'fID'}, options))

        this.setupAddFilesButton()
    }

    setupAddFilesButton() {
        const my = this
        my.$element.find('.xw-add-images-btn').click(function () {
            ConcreteFileManager.launchDialog(
                function(data) {
                    let $lastItem = null
                    for (let fID of data.fID) {
                        const itemsCount = my.$container.find(`.${my.options.classes.item}`).length
                        if (my.options.maxItemsCount > 0 && itemsCount >= my.options.maxItemsCount) {
                            alert(my.options.i18n.maxItemsExceeded)
                            break
                        }

                        let item = my.getNewItemDefaults(itemsCount)
                        item[my.options.fileFieldName] = fID

                        $lastItem = my.addItem(item)
                    }

                    if ($lastItem !== null) {
                        $lastItem.find(`.${my.options.classes.item_expander}`).trigger('click')
                        my.doSortCount()
                    }
                },
                { multipleSelection: true }
            )
        })
    }
}