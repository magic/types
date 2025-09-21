import is from '../src/index.js'

export default {
  test: [
    { fn: () => is.test(0, 'number') },
    { fn: () => is.types(0, 'number') },
    { fn: () => is.test(0, 'string', 'array', 'number') },
    { fn: () => is.test(0, 'string'), expect: false },
    { fn: () => is.test(0, 'string', 'array', 'object'), expect: false },
  ],
  is: [
    { fn: () => is.is(0, 'number') },
    { fn: () => is.isEq(0, 'number') },
    { fn: () => is.eq(0, 'number') },
    { fn: () => is.is(0, 'string', 'array', 'number') },
    { fn: () => is.is(0, 'string'), expect: false },
    { fn: () => is.is(0, 'string', 'array', 'object'), expect: false },
  ],
  not: [
    { fn: () => is.not(0, 'string', 'array', 'object') },
    { fn: () => is.isNeq(0, 'string', 'array', 'object') },
    { fn: () => is.neq(0, 'string', 'array', 'object') },
    { fn: () => is.isNot(0, 'string', 'array', 'object') },
    { fn: () => is.not(0, 'string') },
    { fn: () => is.not(0, 'string', 'array', 'number'), expect: false },
    { fn: () => is.not(0, 'number'), expect: false },
  ],
  testType: [
    { fn: () => is.testType(0, 'number') },
    { fn: () => is.type(0, 'number') },
    {
      fn: () => is.testType(0, 'string', 'number'),
      expect: false,
      info: 'testType will only work with the first 2 arguments',
    },
    { fn: () => is.testType(0, 'array'), expect: false },
    { fn: () => is.testType(NaN, 'number') },
  ],
}
