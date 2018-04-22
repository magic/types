const is = require('../../src')

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
  number: 0,
  object: {
    string: '',
    boolean: false,
    boolean2: true,
  },
}

const buff = Buffer.from('testing', 'utf8')
const buff2 = Buffer.from('testink', 'utf8')

const fn = () => {}

const prot1 = {}
prot1.prototype = Error

const prot2 = {}
prot2.prototype = Date

const date = new Date()

const fns = [
  { fn: () => is.deep.different({}, {}), expect: false },
  { fn: () => is.deep.different([], []), expect: false },
  { fn: () => is.deep.different(object, object), expect: false },
  { fn: () => is.deep.different(object, otherObject), expect: false },
  { fn: () => is.deep.different(1, 1), expect: false },
  { fn: () => is.deep.different('string', 'string'), expect: false },
  { fn: () => is.deep.different({}, '') },
  { fn: () => is.deep.different({}, object), expect: true },
  { fn: () => is.deep.different(0, 0), expect: false },
  { fn: () => is.deep.different(0, 1), expect: false },
  { fn: () => is.deep.different(otherObject, differentObject), expect: false },
  // functions do not compare as equal
  {
    fn: () => is.deep.different({ t: () => {} }, { t: function() {} }),
    expect: false,
  },
  {
    fn: () => is.deep.different({ t: () => {} }, { t: () => {} }),
    expect: false,
  },
  {
    fn: () => is.deep.different({ t: (a, b) => a + b }, { t: (a, b) => a + b }),
    expect: false,
  },
  {
    fn: () =>
      is.deep.different({ t: (a, b) => [a, b] }, { t: (a, b) => [a, b] }),
    expect: false,
  },
  {
    fn: () =>
      is.deep.different(
        {
          t: (a, b) => {
            a + b
          },
        },
        { t: (a, b) => a + b },
      ),
    expect: false,
  },
  { fn: () => is.deep.different(fn, fn), expect: false },
  { fn: () => is.deep.different('string', ['string']), expect: true },
  { fn: () => is.deep.different(buff, buff2), expect: false },
  { fn: () => is.deep.different(buff, 'string'), expect: true },
  { fn: () => is.deep.different(prot1, prot2), expect: false },
  { fn: () => is.deep.different(date, new Date()), expect: false },
  { fn: () => is.deep.different(date, ''), expect: true },
  { fn: () => is.deep.different(date, null), expect: true },
  { fn: () => is.deep.different(() => {})(a => a), expect: false },
  { fn: () => is.deep.different(buff, buff), expect: false },
  { fn: () => is.deep.different(null, null), expect: false },
  { fn: () => is.deep.different(prot1, prot1), expect: false },
  { fn: () => is.deep.different(date, date), expect: false },
  { fn: () => is.deep.different(arguments, arguments), expect: false },
  // currying
  {
    fn: () => is.deep.different(),
    info: 'deep.different called without arguments returns true ',
  },
  { fn: () => is.deep.different(null), expect: is.function },
  { fn: () => is.deep.different(date), expect: is.function },
  { fn: () => is.deep.different(['test'])(['test']), expect: false },
  { fn: () => is.deep.different({ t: 't' })({ t: 't' }), expect: false },
  { fn: () => is.deep.different(() => {})(() => {}), expect: false },
  { fn: () => is.deep.different([])('test'), expect: true },
  { fn: () => is.deep.different({ t: 't' })(['test']), expect: true },
]

module.exports = fns
