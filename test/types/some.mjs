import is from '../../src/index.mjs'

export default [
  { fn: is.some(['', ''], 'number'), expect: false },
  { fn: is.some(['', 6], 'string'), expect: true },
  { fn: is.some(['', 6], is.str), expect: true },
  { fn: is.some(['', 6], 'number'), expect: true },
  { fn: is.some(['', 6], is.num), expect: true },
  { fn: is.some(['', ''], 'string'), expect: true },
  { fn: is.some(['', ''], is.str), expect: true },
  { fn: is.some([() => {}, () => {}], is.fn), expect: true },
  { fn: is.some('', is.str), expect: true },
  { fn: is.some('', 'string'), expect: true },
]
