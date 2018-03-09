const types = require('../src')

const assert = require('test/assert')

const fn = () => assert({
  true: [
    { fn: () => true, expect: true },
    { fn: () => false, expect: false },
  ],
})

module.exports = fn
