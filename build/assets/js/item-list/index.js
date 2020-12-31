/* global $ */
import ItemList from './item-list'

// jQuery Plugin
$.fn.xwItemList = function (options) {
    return $.each($(this), function (i, obj) {
        new ItemList($(this), options)
    })
}
