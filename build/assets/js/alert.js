/* global $, xanweb, _, PNotify */
export default class Alert {

    /**
     * Construct Notification.
     *
     * @param {Object} $container
     * @param {Object} defaults
     */
    constructor ($container, defaults = {}) {
        this.options = $.extend({
            confirmText: 'Ok',
            cancelText: 'Cancel'
        }, defaults)

        this.overlay = $("<div />", {"class": "ui-pnotify-modal-overlay", "style": "display: none;"}).prependTo($container)
        this.stackContext = {dir1: 'down', dir2: 'left', firstpos1: 0, firstpos2: 0, spacing2: 0, context: $container, animation: false}
    }

    _beforeInit(options) {
        PNotify.removeStack(options.stack)

        this.overlay.show()

        return true
    }

    _afterClose(notice) {
        this.overlay.hide()
    }

    /**
     * Confirm Popup
     *
     * @param  {String} title
     * @param  {String} text
     * @param  {Object} buttons {confirmText: 'Ok', cancelText: 'Cancel', okCallback: function () {}, cancelCallback: function () {}}
     */
    confirm(title, text= '', buttons = {}) {
        const me = this
        buttons = $.extend({
            confirmText: me.options.confirmText,
            cancelText: me.options.cancelText,
            okCallback: false,
            cancelCallback: false
        }, buttons)

        let buttonsHTML = '<div class="ccm-notification-inner-buttons clearfix"><div class="btn-toolbar pull-right">'
        buttonsHTML += `<a href="javascript:void(0)" class="btn btn-xs btn-primary ccm-notification-confirm">${buttons.confirmText}</a>`
        buttonsHTML += `<a href="javascript:void(0)" class="btn btn-xs btn-default ccm-notification-cancel">${buttons.cancelText}</a>`
        buttonsHTML += '</div></div>'

        const pNotify = new PNotify({
            type: 'info',
            icon: 'fa fa-question-circle',
            title: title,
            text: text + buttonsHTML,
            addclass: 'ccm-ui',
            hide: false,
            remove: true,
            destroy: true,
            animate: false,
            animation: 'none',
            animate_speed: 1,
            stack: me.stackContext,
            before_init: options => me._beforeInit(options),
            after_open: notice => {
                me.stackContext.context.find('.ccm-notification-confirm').click(function (e) {
                    e.preventDefault()

                    if (typeof buttons.okCallback === 'function') {
                        buttons.okCallback()
                    }

                    notice.remove(false)
                }).focus()

                me.stackContext.context.find('.ccm-notification-cancel').click(function (e) {
                    e.preventDefault()

                    if (typeof buttons.cancelCallback === 'function') {
                        buttons.cancelCallback()
                    }

                    notice.remove(false)
                })
            },
            after_close: notice => me._afterClose(notice)
        })
    }

    /**
     * Show Error Message
     *
     * @param {String} title
     * @param {String} text
     */
    error(title, text= '') {
        this.message(title, text, 'exclamation-triangle', 'error')
    }

    /**
     * Show Error Message
     *
     * @param {String} title
     * @param {String} text
     */
    success(title, text= '') {
        this.message(title, text, 'check', 'success')
    }

    /**
     * Show Message
     *
     * @param {String} title
     * @param {String} text
     * @param {String} icon
     * @param {String} type
     */
    message(title, text= '', icon = 'exclamation-circle', type = 'notice') {
        const me = this
        let buttonsHTML = '<div class="ccm-notification-inner-buttons clearfix"><div class="btn-toolbar pull-right">'
        buttonsHTML += `<a href="javascript:void(0)" class="btn btn-xs btn-primary ccm-notification-confirm">${me.options.confirmText}</a>`
        buttonsHTML += '</div></div>'

        const pNotify = new PNotify({
            type: type,
            icon: `fa fa-${icon}`,
            title: title,
            text: text + buttonsHTML,
            addclass: 'ccm-ui',
            hide: false,
            remove: true,
            destroy: true,
            animate: false,
            animation: 'none',
            animate_speed: 1,
            stack: me.stackContext,
            before_init: options => me._beforeInit(options),
            after_open: notice => {
                me.stackContext.context.find('.ccm-notification-confirm').click(function (e) {
                    e.preventDefault()

                    notice.remove(false)
                })
            },
            after_close: notice => me._afterClose(notice)
        })
    }
}
