import is from '../../src/index.mjs'

export default [
  { fn: () => is.isUndefined(undefined), expect: true },
  { fn: () => is.isUndef(undefined), expect: true },
  { fn: () => is.undefined(undefined), expect: true },
  { fn: () => is.undef(undefined), expect: true },
  { fn: () => is.undef(true), expect: false },
  { fn: () => is.undef(false), expect: false },
  { fn: () => is.undef('true'), expect: false },
  { fn: () => is.undef(0), expect: false },
  { fn: () => is.undef(''), expect: false },
  { fn: () => is.undef([]), expect: false },
  { fn: () => is.undef(() => {}), expect: false },
  { fn: () => is.undef(1.1), expect: false },
  { fn: () => is.undef(0), expect: false },
  { fn: () => is.undef({ t: 't' }), expect: false },
  { fn: () => is.undef('string'), expect: false },
  { fn: () => is.undef('m@m.m'), expect: false },
  { fn: () => is.undef(/test/), expect: false },
  { fn: () => is.undef(null), expect: false },
  { fn: () => is.undef(new Date()), expect: false },
  { fn: () => is.undef(new Error('test')), expect: false },
]
