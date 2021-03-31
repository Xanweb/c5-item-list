/* global _, xanweb */
import defaults from './defaults'

export default class Translator {
    constructor() {
        const xanweb = window['xanweb'] || {'i18n': {}}
        this.i18n = $.extend(true, defaults, xanweb.i18n)
    }

    /**
     * Translate String
     *
     * @param  {String} key
     */
    translate(key) {
        let texts = {...this.i18n}
        for (let segment of key.split('.')) {
            if (!_.isObject(texts) || !texts.hasOwnProperty(segment)) {
                return null
            }

            texts = texts[segment]
        }

        return _.isObject(texts) ? null : texts
    }

    static instance() {
        return Translator._instance || (Translator._instance = new Translator())
    }
}