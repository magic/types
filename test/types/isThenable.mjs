import is from '../../src/index.mjs'

export default [
  { fn: () => is.isThenable({ then: () => {} }), expect: true },
  { fn: () => is.thenable({ then: () => {} }), expect: true },
  { fn: () => is.isThenable({}), expect: false },
  { fn: () => is.isThenable('string'), expect: false },
]
