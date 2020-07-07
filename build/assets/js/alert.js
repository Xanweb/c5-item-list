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

        this.stackContext = {dir1: 'down', dir2: 'left', firstpos1: 25, context: $container, modal: true}
        this._centerStack()

        $(window).resize(() => this._centerStack())
    }

    _centerStack() {
        this.stackContext.firstpos2 = (this.stackContext.context.width() / 2) - (Number(PNotify.prototype.options.width.replace(/\D/g, '')) / 2)
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

        let buttonsHTML = '<div class="ccm-notification-inner-buttons"><div class="btn-toolbar pull-right">'
        buttonsHTML += `<a href="javascript:void(0)" class="btn btn-xs btn-primary ccm-notification-confirm">${buttons.confirmText}</a>`
        buttonsHTML += `<a href="javascript:void(0)" class="btn btn-xs btn-default ccm-notification-cancel">${buttons.cancelText}</a>`
        buttonsHTML += '</div></div>'

        const pNotify = new PNotify({
            type: 'info',
            icon: 'fa fa-check-mark',
            title: title,
            text: text + buttonsHTML,
            addclass: 'ccm-ui',
            hide: false,
            stack: me.stackContext,
            animate: {
                animate: true,
                in_class: 'fadeIn',
                out_class: 'fadeOut'
            },
            after_open: function (notice) {
                me.stackContext.context.on('click', '.ccm-notification-confirm', function (e) {
                    e.preventDefault()

                    if (typeof buttons.okCallback === 'function') {
                        buttons.okCallback()
                    }

                    notice.remove()
                })

                me.stackContext.context.on('click', '.ccm-notification-cancel', function (e) {
                    e.preventDefault()

                    if (typeof buttons.cancelCallback === 'function') {
                        buttons.cancelCallback()
                    }

                    notice.remove()
                })

                me.stackContext.context.find('.ccm-notification-confirm').focus()
                me._centerStack()
            }
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
        let buttonsHTML = '<div class="ccm-notification-inner-buttons"><div class="btn-toolbar text-center">'
        buttonsHTML += `<a href="javascript:void(0)" class="btn btn-xs btn-primary ccm-notification-confirm">${me.options.confirmText}</a>`
        buttonsHTML += '</div></div>'

        const pNotify = new PNotify({
            type: type,
            icon: `fa fa-${icon}`,
            title: title,
            text: text + buttonsHTML,
            addclass: 'ccm-ui',
            hide: false,
            stack: me.stackContext,
            animate: {
                animate: true,
                in_class: 'fadeIn',
                out_class: 'fadeOut'
            },
            after_open: function (notice) {
                me.stackContext.context.on('click', '.ccm-notification-confirm', function (e) {
                    e.preventDefault()

                    notice.remove()
                })
            }
        })
    }
}
