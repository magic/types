import is, { isMap } from '../../src/index.mjs'

export default [
  { fn: isMap(new Map()), expect: true },
  { fn: is.map(new Map()), expect: true },
  { fn: is.map({}), expect: false },
  { fn: is.map([]), expect: false },
  { fn: is.map(''), expect: false },
  { fn: is.map(new Set()), expect: false },
  { fn: is.map(new WeakSet()), expect: false },
  { fn: is.map(new WeakMap()), expect: false },
]
