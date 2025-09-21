import is, { isComparable } from '../../src/index.js'

export default [
  { fn: () => isComparable(''), expect: true },
  { fn: () => is.comparable(''), expect: true },
  { fn: () => is.comparable(9), expect: true },
  { fn: () => is.comparable(true), expect: true },
  { fn: () => is.comparable(false), expect: true },
  { fn: () => is.comparable(), expect: false },
  { fn: () => is.comparable(null), expect: false },
  { fn: () => is.comparable({}), expect: false },
  { fn: () => is.comparable([]), expect: false },
]
