import is from '../../src/index.mjs'

export default [
  { fn: () => is.isFalsy(''), expect: true },
  { fn: () => is.falsy(''), expect: true },
  { fn: () => is.falsy(0), expect: true },
  { fn: () => is.falsy(false), expect: true },
  { fn: () => is.falsy('false'), expect: false },
  { fn: () => is.falsy('test'), expect: false },
  { fn: () => is.falsy(1), expect: false },
  { fn: () => is.falsy(['test']), expect: false },
  { fn: () => is.falsy({ t: 't' }), expect: false },
]
