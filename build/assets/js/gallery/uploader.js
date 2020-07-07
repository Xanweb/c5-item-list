/* global $, xanweb, _, Dropzone, ConcreteAjaxRequest, CCM_DISPATCHER_FILENAME, CCM_SECURITY_TOKEN */
export default class Uploader {
    /**
     * Construct Uploader.
     *
     * @param  {Gallery} gallery
     */
    constructor(gallery) {
        this.gallery = gallery
        this._initDropZone()
    }

    _initDropZone() {
        const me = this
        new Dropzone(this.gallery.$element.parent().get(0), {
            method: 'POST',
            url: `${CCM_DISPATCHER_FILENAME}/ccm/system/file/upload`,
            previewsContainer: false,
            clickable: me.gallery.$element.find('.btn-upload').get(0),
            sending: function(file, xhr, formData) {
                formData.append('responseFormat', 'dropzone')
                formData.append('ccm_token', CCM_SECURITY_TOKEN)
            },
            success: function(data, r) {
                me._handleResponse(r)
            },
            chunksUploaded: function (file, done) {
                if (file.xhr.response) {
                    me._handleResponse(JSON.parse(file.xhr.response))
                }
                
                done()
            },
            error: function(files, message, xhr) {
                me.gallery._alert.error(message)
            }
        })
    }

    _handleResponse(response) {
        if (!response) {
            return;
        }

        const me = this
        ConcreteAjaxRequest.validateResponse(response, function(good) {
            if (!good) {
                if (response.message) {
                    me.gallery._alert.message(response.title, response.message)
                }
            } else if (response.files && response.files.length) {
                console.log(response.files);
            }
        })
    }
}