import is from '../../src/index.mjs'

export default [
  { fn: is.weakMap(new WeakMap()), expect: true },
  { fn: is.weakMap({}), expect: false },
  { fn: is.weakMap([]), expect: false },
  { fn: is.weakMap(''), expect: false },
  { fn: is.weakMap(new WeakSet()), expect: false },
  { fn: is.weakMap(new Set()), expect: false },
  { fn: is.weakMap(new Map()), expect: false },
]
