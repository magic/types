import is, { isSet } from '../../src/index.mjs'

export default [
  { fn: isSet(new Set()), expect: true },
  { fn: is.set(new Set()), expect: true },
  { fn: is.set({}), expect: false },
  { fn: is.set([]), expect: false },
  { fn: is.set(''), expect: false },
  { fn: is.set(new Map()), expect: false },
  { fn: is.set(new WeakSet()), expect: false },
  { fn: is.set(new WeakMap()), expect: false },
]
