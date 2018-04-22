const is = require('../src')

const vals = {
  obj: { t: 't' },
}

const fn = {
  isDefined: [
    { fn: () => is.isDefined([1, 2, 3]), expect: true },
    { fn: () => is.isDef([1, 2, 3]), expect: true },
    { fn: () => is.defined([1, 2, 3]), expect: true },
    { fn: () => is.def([1, 2, 3]), expect: true },
    { fn: () => is.def(true), expect: true },
    { fn: () => is.def(false), expect: true },
    { fn: () => is.def('true'), expect: true },
    { fn: () => is.def(0), expect: true },
    { fn: () => is.def(''), expect: true },
    { fn: () => is.def([]), expect: true },
    { fn: () => is.def(() => {}), expect: true },
    { fn: () => is.def(1.1), expect: true },
    { fn: () => is.def(0), expect: true },
    { fn: () => is.def({ t: 't' }), expect: true },
    { fn: () => is.def('string'), expect: true },
    { fn: () => is.def('m@m.m'), expect: true },
    { fn: () => is.def(/test/), expect: true },
    { fn: () => is.def(null), expect: true },
    { fn: () => is.def(new Date()), expect: true },
    { fn: () => is.def(new Error('test')), expect: true },
    { fn: () => is.def(), expect: false },
    { fn: () => is.def(undefined), expect: false },
  ],
  isUndefined: [
    { fn: () => is.isUndefined(undefined), expect: true },
    { fn: () => is.isUndef(undefined), expect: true },
    { fn: () => is.undefined(undefined), expect: true },
    { fn: () => is.undef(undefined), expect: true },
    { fn: () => is.undef(true), expect: false },
    { fn: () => is.undef(false), expect: false },
    { fn: () => is.undef('true'), expect: false },
    { fn: () => is.undef(0), expect: false },
    { fn: () => is.undef(''), expect: false },
    { fn: () => is.undef([]), expect: false },
    { fn: () => is.undef(() => {}), expect: false },
    { fn: () => is.undef(1.1), expect: false },
    { fn: () => is.undef(0), expect: false },
    { fn: () => is.undef({ t: 't' }), expect: false },
    { fn: () => is.undef('string'), expect: false },
    { fn: () => is.undef('m@m.m'), expect: false },
    { fn: () => is.undef(/test/), expect: false },
    { fn: () => is.undef(null), expect: false },
    { fn: () => is.undef(new Date()), expect: false },
    { fn: () => is.undef(new Error('test')), expect: false },
  ],
  isThenable: [
    { fn: () => is.isThenable({ then: () => {} }), expect: true },
    { fn: () => is.thenable({ then: () => {} }), expect: true },
    { fn: () => is.isThenable({}), expect: false },
    { fn: () => is.isThenable('string'), expect: false },
  ],
  isBuffer: [
    { fn: () => is.isBuffer(Buffer.from('test', 'utf8')), expect: true },
    { fn: () => is.buffer(Buffer.from('test', 'utf8')), expect: true },
    { fn: () => is.buff(Buffer.from('test', 'utf8')), expect: true },
    { fn: () => is.buff('string'), expect: false },
    { fn: () => is.buff(0), expect: false },
    { fn: () => is.buff(['test']), expect: false },
    { fn: () => is.buff({ copy: true }), expect: false },
    { fn: () => is.buff({ slice: true }), expect: false },
    {
      fn: () => is.buff({ slice: () => {}, copy: () => {} }),
      expect: false,
    },
  ],
  isEmpty: [
    { fn: () => is.isEmpty(''), expect: true },
    { fn: () => is.empty(''), expect: true },
    { fn: () => is.empty(0), expect: true },
    { fn: () => is.empty([]), expect: true },
    { fn: () => is.empty({}), expect: true },
    { fn: () => is.empty(new Date()), expect: false },
    { fn: () => is.empty(new Error('test')), expect: false },
    { fn: () => is.empty(/test/), expect: false },
  ],
  isArguments: [
    { fn: () => is.isArguments(arguments), expect: true },
    { fn: () => is.isArgs(arguments), expect: true },
    { fn: () => is.arguments(arguments), expect: true },
    { fn: () => is.args(arguments), expect: true },
    { fn: () => is.isArguments([]), expect: false },
    { fn: () => is.isArguments({}), expect: false },
  ],
  isTruthy: [
    { fn: () => is.isTruthy('test'), expect: true },
    { fn: () => is.truthy('test'), expect: true },
    { fn: () => is.truthy(1), expect: true },
    { fn: () => is.truthy(['test']), expect: true },
    { fn: () => is.truthy({ t: 't' }), expect: true },
    { fn: () => is.truthy('false'), expect: true },
    { fn: () => is.truthy(''), expect: false },
    { fn: () => is.truthy(0), expect: false },
    { fn: () => is.truthy(false), expect: false },
  ],
  isFalsy: [
    { fn: () => is.isFalsy(''), expect: true },
    { fn: () => is.falsy(''), expect: true },
    { fn: () => is.falsy(0), expect: true },
    { fn: () => is.falsy(false), expect: true },
    { fn: () => is.falsy('false'), expect: false },
    { fn: () => is.falsy('test'), expect: false },
    { fn: () => is.falsy(1), expect: false },
    { fn: () => is.falsy(['test']), expect: false },
    { fn: () => is.falsy({ t: 't' }), expect: false },
  ],
  isIterable: [
    { fn: () => is.isIterable({ forEach: () => {} }), expect: true },
    { fn: () => is.isIter({ forEach: () => {} }), expect: true },
    { fn: () => is.iterable({ forEach: () => {} }), expect: true },
    { fn: () => is.iter({ forEach: () => {} }), expect: true },
    { fn: () => is.isIterable([]), expect: true },
    { fn: () => is.isIterable(Object.keys({})), expect: true },
    { fn: () => is.isIterable({}), expect: false },
  ],
  isEmail: [
    { fn: () => is.isEmail('test@example.com'), expect: true },
    { fn: () => is.email('test@example.com'), expect: true },
    { fn: () => is.mail('test@example.com'), expect: true },
    { fn: () => is.isEmail('tes@t@example.com'), expect: true },
    { fn: () => is.isEmail('testmail.com'), expect: false },
    { fn: () => is.isEmail(''), expect: false },
    { fn: () => is.isEmail([]), expect: false },
    { fn: () => is.isEmail({}), expect: false },
  ],
  isUUID: [
    { fn: () => is.isUUID('6ba7b810-9dad-11d1-80b4-00c04fd430c8') },
    { fn: () => is.uuid('6ba7b810-9dad-11d1-80b4-00c04fd430c8') },
    {
      fn: () => is.isUUID('6ba7b811-9dad-11d1-80b4-00c04fd430c8'),
    },
    {
      fn: () => is.isUUID('6ba7b812-9dad-11d1-80b4-00c04fd430c8'),
    },
    {
      fn: () => is.isUUID('6ba7b814-9dad-11d1-80b4-00c04fd430c8'),
    },
    { fn: () => is.isUUID('6ba7b812-9dad-11d1-80b4'), expect: false },
    {
      fn: () => is.isUUID('6ba7b812-9dad-11d1-80b4-00c04fd430c'),
      expect: false,
    },
    {
      fn: () => is.isUUID('zzzzzzzz-9dad-11d1-80b4-00c04fd430c8'),
      expect: false,
    },
    { fn: () => is.isUUID('t920tj22t32-tj2f2f223f23'), expect: false },
    { fn: () => is.isUUID(), expect: false },
    { fn: () => is.isUUID(''), expect: false },
    { fn: () => is.isUUID([]), expect: false },
    { fn: () => is.isUUID({}), expect: false },
    { fn: () => is.isUUID(() => {}), expect: false },
  ],
  lengh: [
    { fn: () => is.length([]), expect: 0, info: 'is.length' },
    { fn: () => is.count([1]), expect: 1, info: 'is.count' },
    { fn: () => is.len([1, 2]), expect: 2, info: 'is.len' },
    { fn: () => is.len(new Map([[1, '1']])), expect: 1, info: 'is.len Map' },
    { fn: () => is.len(new Set([1, 2])), expect: 2, info: 'is.len Set' },
    { fn: () => is.len(new Set('123')), expect: 3, info: 'is.len Set(string)' },
    { fn: () => is.len('123'), expect: 3, info: 'is.len String' },
    { fn: () => is.len({ t: 't' }), expect: 1, info: 'is.len Object' },
  ],
  'length.equal': [
    { fn: () => is.length.equal(3)('123'), info: 'is.length.equal' },
    { fn: () => is.length.eq(3)('123'), info: 'is.length.eq' },
    { fn: () => is.count.equal(5)('12345'), info: 'is.count.equal' },
    { fn: () => is.count.eq(5)('12345'), info: 'is.count.eq' },
    { fn: () => is.len.equal(4)('1234'), info: 'is.len.equal' },
    { fn: () => is.len.eq(4)('1234'), info: 'is.len.eq' },
    {
      fn: () => is.len.equal(3)(new Set([1, 2, 3])),
      info: 'is.count works for sets',
    },
    {
      fn: () => is.len.equal(5)(new Set([1, 2, 3])),
      expect: false,
      info: 'is.count falsifies set length',
    },
    {
      fn: () => is.len.equal([1, 2, 3], new Set([1, 2, 3])),
      info: 'is.count array and Set',
    },
    {
      fn: () => is.len.equal(new Map([['1', 1], ['2', 2]]), new Set([1, 2])),
      info: 'is.count Map and Set',
    },
    {
      fn: () => is.len.equal([1, 2], new Map([['1', 1], ['2', 2]])),
      info: 'is.count array and Map',
    },
    {
      fn: () => is.len.equal(new Map([['1', 1]]), new Map([['1', 1]])),
      info: 'is.count Map and Map',
    },
    {
      fn: () => is.len.equal('123', '123'),
      info: 'compare strings',
    },
    { fn: () => is.len.equal(0)({}), info: 'empty objects' },
    { fn: () => is.len.equal(0)([]), info: 'empty arrays' },
    { fn: () => is.len.equal(0)(''), info: 'empty strings' },
    { fn: () => is.len.equal('')(''), info: 'empty strings' },
    { fn: () => is.len.equal(3)([1, 2, 3]), info: 'compare arrays' },
    { fn: () => is.len.equal(1)({ test: 'true ' }), info: 'compare objects' },
    { fn: () => is.len.equal(1, '1'), info: 'compare uncurried' },
    {
      fn: () => is.len.equal(1, { t: 't' }),
      info: 'compare objects uncurried',
    },
    {
      fn: () => is.len.equal({ t: 1 }, { t: 1 }),
      info: 'compare objects uncurried',
    },
    { fn: () => is.len.equal(3, [1, 2, 3]), info: 'compare  arrays uncurried' },
    { fn: () => is.len.equal('123', '123'), info: 'compare strings' },
    { fn: () => is.len.equal(5, '12345'), info: 'compare strings uncurried' },
    {
      fn: () => is.len.equal(4, 1234),
      expect: false,
      info: 'numbers never count',
    },
  ],
  isMergeable: [
    { fn: () => is.isMergeable({}), expect: true },
    { fn: () => is.isMergeableObject({}), expect: true },
    { fn: () => is.mergeableObject({}), expect: true },
    { fn: () => is.mergeable({ t: 't' }), expect: true },
    { fn: () => is.mergeable(), expect: false },
    { fn: () => is.mergeable(0), expect: false },
    { fn: () => is.mergeable(() => {}), expect: false },
    { fn: () => is.mergeable(''), expect: false },
    { fn: () => is.mergeable(new Date()), expect: false },
    { fn: () => is.mergeable(/regex/), expect: false },
  ],
}

module.exports = fn
