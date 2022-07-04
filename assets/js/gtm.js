;(function (window, $) {
    window.dataLayer = window.dataLayer || []

    let events = {
        clickLink: ['clickLink', null, '點擊', null],
        submitForm: ['submitForm', '表單填寫', '填寫表單', null]
    }

    let initialLayer = (type, callback) => {
        return {
            event: type[0],
            eventCategory: type[1],
            eventAction: type[2],
            eventTag: type[3],
            eventValue: null,
            eventCallback: callback
        }
    }

    window.pushGTMLayer = {
        /**
         * 點擊基本資料連結。
         *
         * @param category
         * @param label
         * @param callback
         */
        clickLink: (category, label, callback) => {
            let gtmData = initialLayer(events.clickLink, callback)

            gtmData.eventCategory = category
            gtmData.eventTag = label

            dataLayer.push(gtmData)
        },
        /**
         * 表單送出。
         *
         * @param name
         * @param callback
         */
        submitForm: (name, callback) => {
            let gtmData = initialLayer(events.submitForm, callback)

            gtmData.eventTag = name

            window.dataLayer.push(gtmData)
        }
    }

    // 基本資料連結。
    $('.gtut-gtm-links').click(function () {
        window.pushGTMLayer.clickLink($(this).data('category'), $(this).data('label'))
    })
}(window, $))