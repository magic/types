import is from '../../src/index.mjs'

export default [
  { fn: () => is.comparable, expect: is.function },
  { fn: () => is.isComparable, expect: is.function },
  { fn: () => is.Comparable, expect: is.function },
  { fn: () => is.comparable(''), expect: true },
  { fn: () => is.comparable(9), expect: true },
  { fn: () => is.comparable(true), expect: true },
  { fn: () => is.comparable(false), expect: true },
  { fn: () => is.comparable(), expect: false },
  { fn: () => is.comparable(null), expect: false },
  { fn: () => is.comparable({}), expect: false },
  { fn: () => is.comparable([]), expect: false },
]
