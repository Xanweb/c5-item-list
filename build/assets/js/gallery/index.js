/* global $ */
import Gallery from "./gallery"

// jQuery Plugin
$.fn.xwGallery = function (options) {
    return $.each($(this), function (i, obj) {
        new Gallery($(this), options)
    })
}
