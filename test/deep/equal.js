import is from '../../src/index.js'

const object = {
  string: 'string',
  number: 0,
  object: {
    string: '',
    boolean: false,
    boolean2: true,
  },
}

const otherObject = {
  string: 'string',
  number: 0,
  object: {
    string: '',
    boolean: false,
    boolean2: true,
  },
}

const differentObject = {
  string: 'string2',
  number2: 0,
  object: {
    string: '',
    boolean: false,
    boolean2: true,
  },
}

const buff = Buffer.from('testing', 'utf8')
const buff2 = Buffer.from('testink', 'utf8')
const buff3 = Buffer.from('testinggg', 'utf8')

const fn = () => {}

const prot1 = {}
prot1.prototype = Error

const prot2 = {}
prot2.prototype = Date

const date = new Date()

const arrowFn = () => {}
const arrowFnWithArguments = (a, b) => a + b
const arrowFnReturningArray = (a, b) => [a, b]

const fns = [
  { fn: () => is.deep.equal({}, {}), expect: true, info: 'empty objects are equal' },
  { fn: () => is.deep.equal(object, object), expect: true, info: 'same object reference is equal' },
  {
    fn: () => is.deep.equal(object, otherObject),
    expect: true,
    info: 'objects with same structure and values are equal',
  },
  { fn: () => is.deep.equal(1, 1), expect: true, info: 'same numbers are equal' },
  { fn: () => is.deep.equal('string', 'string'), expect: true, info: 'same strings are equal' },
  { fn: () => is.deep.equal({}, ''), expect: false, info: 'object and string are not equal' },
  {
    fn: () => is.deep.equal({}, object),
    expect: false,
    info: 'empty object and populated object are not equal',
  },
  { fn: () => is.deep.equal(0, 0), expect: true, info: 'same zero values are equal' },
  { fn: () => is.deep.equal(0, 1), expect: false, info: 'different numbers are not equal' },
  { fn: () => is.deep.equal('string', 1), expect: false, info: 'string and number are not equal' },
  {
    fn: () => is.deep.equal(otherObject, differentObject),
    expect: false,
    info: 'objects with different values are not equal',
  },

  {
    fn: () => is.deep.equal([1,2,3], [3,2,1]),
    expect: true,
    info: 'Arrays with different value order but same values are equal',
  },

  {
    fn: () => is.deep.equal({ t: arrowFn }, { t: function () {} }),
    expect: false,
    info: 'arrow function and regular function are not equal',
  },
  {
    fn: () => is.deep.equal({ t: arrowFn }, { t: arrowFn }),
    expect: true,
    info: 'identical arrow functions are equal',
  },
  {
    fn: () => is.deep.equal({ t: arrowFnWithArguments }, { t: arrowFnWithArguments }),
    expect: true,
    info: 'identical function expressions are equal',
  },
  {
    fn: () => is.deep.equal({ t: arrowFnReturningArray }, { t: arrowFnReturningArray }),
    expect: true,
    info: 'identical functions returning arrays are equal',
  },
  {
    fn: () =>
      is.deep.equal(
        {
          t: (a, b) => {
            a + b
          },
        },
        { t: (a, b) => a + b },
      ),
    expect: false,
    info: 'functions with different body formatting are not equal',
  },
  { fn: () => is.deep.equal(fn, fn), expect: true, info: 'same function reference is equal' },
  {
    fn: () => is.deep.equal('string', ['string']),
    expect: false,
    info: 'string and array containing string are not equal',
  },
  {
    fn: () => is.deep.equal(buff, buff2),
    expect: false,
    info: 'buffers with different content are not equal',
  },
  {
    fn: () => is.deep.equal(buff, buff3),
    expect: false,
    info: 'buffers with different lengths are not equal',
  },
  { fn: () => is.deep.equal(buff, buff), expect: true, info: 'same buffer reference is equal' },
  {
    fn: () => is.deep.equal(buff, 'string'),
    expect: false,
    info: 'buffer and string are not equal',
  },
  //   { fn: () => is.deep.equal(arguments, arguments), expect: true },
  {
    fn: () => is.deep.equal(prot1, prot1),
    expect: true,
    info: 'same object with prototype reference is equal',
  },
  {
    fn: () => is.deep.equal(prot1, prot2),
    expect: false,
    info: 'objects with different prototypes are not equal',
  },
  { fn: () => is.deep.equal(date, date), expect: true, info: 'same date reference is equal' },
  {
    fn: () => is.deep.equal(date, new Date()),
    expect: false,
    info: 'different date instances are not equal',
  },
  { fn: () => is.deep.equal(date, ''), expect: false, info: 'date and empty string are not equal' },
  { fn: () => is.deep.equal(null, null), expect: true, info: 'null values are equal' },
  {
    fn: () => is.deep.equal(undefined, null),
    expect: false,
    info: 'undefined and null are not equal',
  },
  {
    fn: () => is.deep.equal(),
    expect: true,
    info: 'calling without arguments returns true (both undefined)',
  },
  { fn: () => is.deep.equal(date, null), expect: false, info: 'date and null are not equal' },
  // currying
  {
    fn: () => is.deep.equal(date),
    expect: is.function,
    info: 'calling with one argument returns a function (currying)',
  },
  {
    fn: () => ['test'],
    expect: is.deep.equal(['test']),
    info: 'curried function with matching array returns true',
  },
  {
    fn: () => ({ t: 't' }),
    expect: is.deep.equal({ t: 't' }),
    info: 'curried function with matching object returns true',
  },
  {
    fn: () => arrowFn,
    expect: is.deep.equal(arrowFn),
    info: 'curried function with matching function returns true',
  },
  {
    fn: () => is.deep.equal(arrowFn)(a => a),
    expect: false,
    info: 'curried function with different function returns false',
  },
  {
    fn: () => is.deep.equal([])('test'),
    expect: false,
    info: 'curried empty array compared with string returns false',
  },
  {
    fn: () => is.deep.equal({ t: 't' })(['test']),
    expect: false,
    info: 'curried object compared with array returns false',
  },
  {
    fn: () => is.deep.equal({ a: undefined }, { a: undefined }),
    expect: true,
    info: 'objects with undefined properties are equal',
  },
  {
    fn: () => is.deep.equal(arrowFn, arrowFn),
    expect: true,
    info: 'two identical empty functions are equal',
  },

  // Additional tests to cover missing branches and edge cases
  // Test the case where both values are not objects (lines 72-73)
  { fn: () => is.deep.equal('test', 'test'), expect: true, info: 'non-object primitives equal' },
  { fn: () => is.deep.equal(123, 123), expect: true, info: 'same numbers are equal (primitives)' },
  { fn: () => is.deep.equal(true, true), expect: true, info: 'same booleans are equal' },

  // Test edge cases for better coverage
  { fn: () => is.deep.equal([], []), expect: true, info: 'empty arrays are equal' },
  {
    fn: () => is.deep.equal([1, 2], [1, 2]),
    expect: true,
    info: 'arrays with same elements in same order are equal',
  },
  {
    fn: () => is.deep.equal([1, 2], [2, 1]),
    expect: true,
    info: 'arrays with same elements in different order are also equal',
  },

  // Test objects with different prototypes
  {
    fn: () => is.deep.equal(Object.create(null), Object.create(null)),
    expect: true,
    info: 'objects with null prototype are equal',
  },

  {
    fn: () => is.deep.equal({ a: { b: 1 } }, { a: { b: 1 } }),
    expect: true,
    info: 'nested objects with same structure are equal',
  },
  {
    fn: () => is.deep.equal({ a: { b: 1 } }, { a: { b: 2 } }),
    expect: false,
    info: 'nested objects with different values are not equal',
  },

  {
    fn: () => is.deep.equal('1', 1),
    expect: false,
    info: 'string and number with same value are not equal',
  },

  {
    fn: () => is.deep.equal(Buffer.from(''), Buffer.from('')),
    expect: true,
    info: 'empty buffers are equal',
  },
  {
    fn: () => is.deep.equal(Buffer.from('a'), Buffer.from('b')),
    expect: false,
    info: 'single character buffers with different content are not equal',
  },
  {
    fn: () => is.deep.equal([1, 2], { 0: 1, 1: 2, length: 2 }),
    expect: false,
    info: 'array vs object with numeric properties are not equal',
  },
  {
    fn: () => is.deep.equal(Buffer.from('test'), 'test'),
    expect: false,
    info: 'buffer vs string are not equal',
  },
  {
    fn: () => is.deep.equal(Buffer.from('test'), { 0: 116, 1: 101, 2: 115, 3: 116 }),
    expect: false,
    info: 'buffer vs object with numeric properties are not equal',
  },

  { fn: () => is.deep.equal({}, []), expect: false, info: 'plain object vs array are not equal' },
  {
    fn: () => is.deep.equal({}, new Date()),
    expect: false,
    info: 'plain object vs Date are not equal',
  },
  {
    fn: () => is.deep.equal({}, /regex/),
    expect: false,
    info: 'plain object vs RegExp are not equal',
  },

  {
    fn: () => is.deep.equal({ a: 1 }, { a: 1 }),
    expect: true,
    info: 'objects without prototype property are equal',
  },

  {
    fn: () => is.deep.equal({ a: 1, b: 2 }, { b: 2, a: 1 }),
    expect: true,
    info: 'objects with same keys in different order are equal',
  },

  {
    fn: () => is.deep.equal({ a: 1, b: 2 }, { a: 1 }),
    expect: false,
    info: 'objects with different number of keys are not equal',
  },

  {
    fn: () => is.deep.equal({ a: undefined }, { b: undefined }),
    expect: false,
    info: 'objects with different undefined properties are not equal',
  },

  {
    fn: () => is.deep.equal([1, 2, 3], [1, 2, 3]),
    expect: true,
    info: 'arrays with identical elements are equal',
  },
  {
    fn: () => is.deep.equal([1, 2, 3], [1, 2, 4]),
    expect: false,
    info: 'arrays with different elements are not equal',
  },
  {
    fn: () => is.deep.equal([undefined], [undefined]),
    expect: true,
    info: 'arrays with undefined elements are equal',
  },
]

export default fns
