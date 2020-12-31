/* global $ */
import Slider from './slider'

// jQuery Plugin
$.fn.xwSliderForm = function (options) {
    return $.each($(this), function () {
        new Slider($(this), options)
    })
}
