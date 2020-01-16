import is from '../../src/index.mjs'

export default [
  { fn: is.weakSet(new WeakSet()), expect: true },
  { fn: is.weakSet({}), expect: false },
  { fn: is.weakSet([]), expect: false },
  { fn: is.weakSet(''), expect: false },
  { fn: is.weakSet(new WeakMap()), expect: false },
  { fn: is.weakSet(new Set()), expect: false },
  { fn: is.weakSet(new Map()), expect: false },
]
