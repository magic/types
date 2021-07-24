import is, { isIterable } from '../../src/index.mjs'

export default [
  { fn: () => isIterable({ forEach: () => {} }), expect: true },
  { fn: () => is.isIterable({ forEach: () => {} }), expect: true },
  { fn: () => is.isIter({ forEach: () => {} }), expect: true },
  { fn: () => is.iterable({ forEach: () => {} }), expect: true },
  { fn: () => is.iter({ forEach: () => {} }), expect: true },
  { fn: () => is.isIterable([]), expect: true },
  { fn: () => is.isIterable(Object.keys({})), expect: true },
  { fn: () => is.isIterable({}), expect: false },
]
