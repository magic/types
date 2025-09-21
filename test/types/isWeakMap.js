import is, { isWeakMap } from '../../src/index.js'

export default [
  { fn: isWeakMap(new WeakMap()), expect: true },
  { fn: is.isWeakMap(new WeakMap()), expect: true },
  { fn: is.weakMap({}), expect: false },
  { fn: is.weakMap([]), expect: false },
  { fn: is.weakMap(''), expect: false },
  { fn: is.weakMap(new WeakSet()), expect: false },
  { fn: is.weakMap(new Set()), expect: false },
  { fn: is.weakMap(new Map()), expect: false },
]
