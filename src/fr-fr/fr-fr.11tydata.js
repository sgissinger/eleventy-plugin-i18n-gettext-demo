'use strict'

const i18n = require('eleventy-plugin-i18n-gettext')

module.exports = () => {
    const customData = {
        eatSnails: true
    }

    return i18n.enhance11tydata(customData, 'fr-fr')
}