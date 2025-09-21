import is, { isObjectNative } from '../../src/index.mjs'

export default [
  { fn: () => isObjectNative({}), expect: true },
  { fn: () => is.isObjectNative({}), expect: true },
  { fn: () => is.isObjectNative({ key: true }), expect: true },
  { fn: () => is.isObjectNative([1, 2, 3]), expect: false },
  { fn: () => is.isObjectNative([]), expect: false },
  { fn: () => is.isObjectNative(/test/), expect: false },
  { fn: () => is.isObjectNative(new Date()), expect: false },
  { fn: () => is.isObjectNative(new Error('test')), expect: false },
  { fn: () => is.isObjectNative('test'), expect: false },
  { fn: () => is.isObjectNative(0), expect: false },
  { fn: () => is.isObjectNative(new Date().getTime()), expect: false },
]
