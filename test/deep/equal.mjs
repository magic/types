import is from '../../src/index.mjs'

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

const fns = [
  { fn: () => is.deep.equal({}, {}), expect: true },
  { fn: () => is.deep.equal({}, {}), expect: true },
  { fn: () => is.deep.equal(object, object), expect: true },
  { fn: () => is.deep.equal(object, otherObject), expect: true },
  { fn: () => is.deep.equal(1, 1), expect: true },
  { fn: () => is.deep.equal('string', 'string'), expect: true },
  { fn: () => is.deep.equal({}, ''), expect: false },
  { fn: () => is.deep.equal({}, object), expect: false },
  { fn: () => is.deep.equal(0, 0), expect: true },
  { fn: () => is.deep.equal(0, 1), expect: false },
  { fn: () => is.deep.equal('string', 1), expect: false },
  { fn: () => is.deep.equal(otherObject, differentObject), expect: false },
  // functions do not compare as equal if their toString results are different
  { fn: () => is.deep.equal({ t: () => {} }, { t: function () {} }), expect: false },
  { fn: () => is.deep.equal({ t: () => {} }, { t: () => {} }), expect: true },
  { fn: () => is.deep.equal({ t: (a, b) => a + b }, { t: (a, b) => a + b }), expect: true },
  { fn: () => is.deep.equal({ t: (a, b) => [a, b] }, { t: (a, b) => [a, b] }), expect: true },
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
  },
  { fn: () => is.deep.equal(fn, fn), expect: true },
  { fn: () => is.deep.equal('string', ['string']), expect: false },
  { fn: () => is.deep.equal(buff, buff2), expect: false },
  { fn: () => is.deep.equal(buff, buff3), expect: false },
  { fn: () => is.deep.equal(buff, buff), expect: true },
  { fn: () => is.deep.equal(buff, 'string'), expect: false },
  //   { fn: () => is.deep.equal(arguments, arguments), expect: true },
  { fn: () => is.deep.equal(prot1, prot1), expect: true },
  { fn: () => is.deep.equal(prot1, prot2), expect: false },
  { fn: () => is.deep.equal(date, date), expect: true },
  { fn: () => is.deep.equal(date, new Date()), expect: false },
  { fn: () => is.deep.equal(date, ''), expect: false },
  { fn: () => is.deep.equal(null, null), expect: true },
  { fn: () => is.deep.equal(undefined, null), expect: false },
  { fn: () => is.deep.equal(), expect: false },
  { fn: () => is.deep.equal(date, null), expect: false },
  // currying
  { fn: () => is.deep.equal(date), expect: is.function },
  { fn: () => ['test'], expect: is.deep.equal(['test']) },
  { fn: () => ({ t: 't' }), expect: is.deep.equal({ t: 't' }) },
  { fn: () => () => {}, expect: is.deep.equal(() => {}) },
  { fn: () => is.deep.equal(() => {})(a => a), expect: false },
  { fn: () => is.deep.equal([])('test'), expect: false },
  { fn: () => is.deep.equal({ t: 't' })(['test']), expect: false },
]

export default fns
