import is, { isPromise, isThenable } from '../../src/index.js'

export default [
  { fn: () => isPromise(new Promise(r => r())), info: 'isThenable with Promise' },
  { fn: () => isPromise({ then: () => {} }), expect: true },
  { fn: () => isThenable({ then: () => {} }), expect: true },
  { fn: () => is.isThenable({ then: () => {} }), expect: true },
  { fn: () => is.thenable({ then: () => {} }), expect: true },
  { fn: () => is.isThenable({}), expect: false },
  { fn: () => is.isThenable('string'), expect: false },
]
