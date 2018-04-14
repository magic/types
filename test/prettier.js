const prettierConfig = require('../prettier.config.js')

const { isObject } = require('../src')

const hasValue = (key, value) => result => {
  return result[key] === value
}

const fns = [
  { fn: () => prettierConfig, expect: isObject },
  { fn: () => prettierConfig, expect: hasValue('semi', false) },
]

module.exports = fns
