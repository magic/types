import is, { isNone } from '../../src/index.mjs'

export default [
  { fn: isNone(['', ''], 'number'), expect: true },
  { fn: is.none(['', ''], 'number'), expect: true },
  { fn: is.none(['', ''], 'string'), expect: false },
  { fn: is.none(['', ''], is.str), expect: false },
  { fn: is.none(['', ''], is.num), expect: true },
  { fn: is.none([5, ''], is.num), expect: false },
  { fn: is.none([() => {}, () => {}], is.fn), expect: false },
  { fn: is.none('', is.str), expect: false },
  { fn: is.none('', 'string'), expect: false },
]
