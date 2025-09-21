import is, { isWeakSet } from '../../src/index.js'

export default [
  { fn: isWeakSet(new WeakSet()), expect: true },
  { fn: is.weakSet(new WeakSet()), expect: true },
  { fn: is.weakSet({}), expect: false },
  { fn: is.weakSet([]), expect: false },
  { fn: is.weakSet(''), expect: false },
  { fn: is.weakSet(new WeakMap()), expect: false },
  { fn: is.weakSet(new Set()), expect: false },
  { fn: is.weakSet(new Map()), expect: false },
]
