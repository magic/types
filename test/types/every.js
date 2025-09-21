import is, { isEvery } from '../../src/index.mjs'

export default [
  { fn: isEvery(['', ''], 'string'), expect: true },
  { fn: is.every(['', ''], 'string'), expect: true },
  { fn: is.every(['', ''], is.str), expect: true },
  { fn: is.every(['', ''], is.num), expect: false },
  { fn: is.every([() => {}, () => {}], is.fn), expect: true },
  { fn: is.every([() => {}, () => {}], is.str), expect: false },
  { fn: is.every('', is.str), expect: true },
  { fn: is.every('', is.num), expect: false },
  { fn: is.every('', 'string'), expect: true },
  { fn: is.every('', 'number'), expect: false },
]
