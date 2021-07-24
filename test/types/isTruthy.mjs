import is, { isTruthy } from '../../src/index.mjs'

export default [
  { fn: () => isTruthy('test'), expect: true },
  { fn: () => is.isTruthy('test'), expect: true },
  { fn: () => is.truthy('test'), expect: true },
  { fn: () => is.truthy(1), expect: true },
  { fn: () => is.truthy(['test']), expect: true },
  { fn: () => is.truthy({ t: 't' }), expect: true },
  { fn: () => is.truthy('false'), expect: true },
  { fn: () => is.truthy(''), expect: false },
  { fn: () => is.truthy(0), expect: false },
  { fn: () => is.truthy(false), expect: false },
]
