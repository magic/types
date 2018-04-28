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

const otherObject = Object.assign({}, object)

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
  { fn: () => is.deep.equal({}, {}) },
  { fn: () => is.deep.eq({}, {}) },
  { fn: () => is.deepEqual({}, {}) },
  { fn: () => is.isDeepEqual({}, {}) },

  { fn: () => is.deep.equal({}, {}) },
  { fn: () => is.deep.equal(object, object) },
  { fn: () => is.deep.equal(object, otherObject) },
  { fn: () => is.deep.equal(1, 1) },
  { fn: () => is.deep.equal({ t: () => {} }, { t: function() {} }) },
  { fn: () => is.deep.equal({ t: () => {} }, { t: () => {} }) },
  { fn: () => is.deep.equal({ t: (a, b) => a + b }, { t: (a, b) => a + b }) },
  { fn: () => is.deep.equal({ t: (a, b) => [a, b] }, { t: (a, b) => [a, b] }) },
  { fn: () => is.deep.equal(0, 1) },
  { fn: () => is.deep.equal(date, new Date()) },
  {
    fn: () =>
      is.deep.eq(
        {
          t: (a, b) => {
            a + b
          },
        },
        { t: (a, b) => a + b },
      ),
  },
  { fn: () => is.deep.equal('string', 'string') },
  { fn: () => is.deep.equal(0, 0) },
  { fn: () => is.deep.equal(fn, fn) },
  { fn: () => is.deep.equal(buff, buff) },
  { fn: () => is.deep.equal(buff, buff2) },
  { fn: () => is.deep.equal(arguments, arguments) },
  { fn: () => is.deep.equal(date, date) },
  { fn: () => is.deep.equal(prot1, prot1) },
  { fn: () => is.deep.equal(null, null) },
  { fn: () => is.deep.equal(prot1, prot2) },
  { fn: () => is.deep.equal(otherObject, differentObject) },
  { fn: () => is.deep.equal() },

  { fn: () => is.deep.equal({}, ''), expect: false },
  { fn: () => is.deep.equal({}, object), expect: false },
  { fn: () => is.deep.equal('string', ['string']), expect: false },
  { fn: () => is.deep.equal(buff, 'string'), expect: false },
  { fn: () => is.deep.equal(date, ''), expect: false },
  { fn: () => is.deep.equal(date, null), expect: false },
  { fn: () => is.deep.equal([], {}), expect: false },
  { fn: () => is.deep.equal([], ''), expect: false },
  // currying
  { fn: () => is.deep.equal(null), expect: is.function },
  { fn: () => is.deep.equal(date), expect: is.function },
  { fn: () => ['test'], expect: is.deep.equal(['test']) },
  { fn: () => ({ t: 't' }), expect: is.deep.equal({ t: 't' }) },
  { fn: () => () => {}, expect: is.deep.equal(() => {}) },
  { fn: () => is.deep.equal(() => {})(a => a) },
  { fn: () => is.deep.equal([])('test'), expect: false },
  { fn: () => is.deep.equal({ t: 't' })(['test']), expect: false },
]

module.exports = fns
