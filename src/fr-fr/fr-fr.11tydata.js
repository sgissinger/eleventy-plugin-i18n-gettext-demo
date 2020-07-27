'use strict'

const i18n = require('eleventy-plugin-i18n-gettext/i18n')

module.exports = () => {
    return i18n.enhance11tydata({}, 'fr-fr')
}