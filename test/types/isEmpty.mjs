import is from '../../src/index.mjs'

export default [
  { fn: () => is.isEmpty(''), expect: true },
  { fn: () => is.isEmpty(null), expect: true },
  { fn: () => is.isEmpty(), expect: true },
  { fn: () => is.isEmpty(new RegExp()), expect: true },
  { fn: () => is.empty(''), expect: true },
  { fn: () => is.empty(0), expect: true },
  { fn: () => is.empty([]), expect: true },
  { fn: () => is.empty({}), expect: true },
  { fn: () => is.empty(new Date()), expect: false },
  { fn: () => is.empty(new Error('test')), expect: false },
  { fn: () => is.empty(/test/), expect: false },
  { fn: () => is.empty(new RegExp()), expect: true },
]
