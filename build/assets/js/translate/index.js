import Translator from './translator'

/**
 * Translate String
 *
 * @param {String} key
 */
export function t(key) {
    return Translator.instance().translate(key)
}
