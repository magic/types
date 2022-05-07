import is, { isFalsy } from '../../src/index.mjs'

export default [
  { fn: () => isFalsy(''), expect: true },
  { fn: () => is.isFalsy(''), expect: true },
  { fn: () => is.falsy(''), expect: true },
  { fn: () => is.falsy(0), expect: true },
  { fn: () => is.falsy({}), expect: true, },
  { fn: () => is.falsy([]), expect: true, },
  { fn: () => is.falsy(false), expect: true },
  { fn: () => is.falsy('false'), expect: false },
  { fn: () => is.falsy('test'), expect: false },
  { fn: () => is.falsy(1), expect: false },
  { fn: () => is.falsy(['test']), expect: false },
  { fn: () => is.falsy({ t: 't' }), expect: false },
  { fn: () => is.falsy({ slug: true, t: { tt: { ttt: 't' }}}), expect: false },
]
