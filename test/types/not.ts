import { Test } from '@magic/test'
import is from '../../src/index.js'

export default [
  // is.not.array / is.not.arr
  { fn: () => is.not.array([]), expect: false },
  { fn: () => is.not.arr([]), expect: false },
  { fn: () => is.not.array([1, 2]), expect: false },
  { fn: () => is.not.arr([1, 2]), expect: false },
  { fn: () => is.not.array('test'), expect: true },
  { fn: () => is.not.arr('test'), expect: true },
  { fn: () => is.not.array(123), expect: true },
  { fn: () => is.not.arr(123), expect: true },
  { fn: () => is.not.array(null), expect: true },
  { fn: () => is.not.arr(null), expect: true },
  { fn: () => is.not.array(undefined), expect: true },
  { fn: () => is.not.arr(undefined), expect: true },

  // is.not.boolean / is.not.bool
  { fn: () => is.not.boolean(true), expect: false },
  { fn: () => is.not.bool(true), expect: false },
  { fn: () => is.not.boolean(false), expect: false },
  { fn: () => is.not.bool(false), expect: false },
  { fn: () => is.not.boolean('true'), expect: true },
  { fn: () => is.not.bool('true'), expect: true },
  { fn: () => is.not.boolean(0), expect: true },
  { fn: () => is.not.bool(0), expect: true },
  { fn: () => is.not.boolean([]), expect: true },
  { fn: () => is.not.bool([]), expect: true },

  // is.not.defined / is.not.def
  { fn: () => is.not.defined(undefined), expect: true },
  { fn: () => is.not.def(undefined), expect: true },
  { fn: () => is.not.defined(null), expect: false },
  { fn: () => is.not.def(null), expect: false },
  { fn: () => is.not.defined('test'), expect: false },
  { fn: () => is.not.def('test'), expect: false },
  { fn: () => is.not.defined(0), expect: false },
  { fn: () => is.not.def(0), expect: false },
  { fn: () => is.not.defined(false), expect: false },
  { fn: () => is.not.def(false), expect: false },

  // is.not.undefined / is.not.undef
  { fn: () => is.not.undefined(undefined), expect: false },
  { fn: () => is.not.undef(undefined), expect: false },
  { fn: () => is.not.undefined(null), expect: true },
  { fn: () => is.not.undef(null), expect: true },
  { fn: () => is.not.undefined('test'), expect: true },
  { fn: () => is.not.undef('test'), expect: true },
  { fn: () => is.not.undefined(0), expect: true },
  { fn: () => is.not.undef(0), expect: true },

  // is.not.function / is.not.func / is.not.fn
  { fn: () => is.not.function(() => {}), expect: false },
  { fn: () => is.not.func(() => {}), expect: false },
  { fn: () => is.not.fn(() => {}), expect: false },
  { fn: () => is.not.function(function () {}), expect: false },
  { fn: () => is.not.func(function () {}), expect: false },
  { fn: () => is.not.fn(function () {}), expect: false },
  { fn: () => is.not.function('test'), expect: true },
  { fn: () => is.not.func('test'), expect: true },
  { fn: () => is.not.fn('test'), expect: true },
  { fn: () => is.not.function(123), expect: true },
  { fn: () => is.not.func(123), expect: true },
  { fn: () => is.not.fn(123), expect: true },

  // is.not.asyncFunction / is.not.asyncFunc / is.not.asyncFn
  { fn: () => is.not.asyncFunction(async () => {}), expect: false },
  { fn: () => is.not.asyncFn(async () => {}), expect: false },
  { fn: () => is.not.asyncFunction(function () {}), expect: true },
  { fn: () => is.not.asyncFn(function () {}), expect: true },

  // is.not.generatorFunction / is.not.generatorFn / is.not.generatorFunc
  { fn: () => is.not.generatorFunction(function* () {}), expect: false },
  { fn: () => is.not.generatorFn(function* () {}), expect: false },
  { fn: () => is.not.generatorFunction(function () {}), expect: true },
  { fn: () => is.not.generatorFn(function () {}), expect: true },

  // is.not.number / is.not.num
  { fn: () => is.not.number(1), expect: false },
  { fn: () => is.not.num(1), expect: false },
  { fn: () => is.not.number(1.5), expect: false },
  { fn: () => is.not.num(1.5), expect: false },
  { fn: () => is.not.number(Infinity), expect: false },
  { fn: () => is.not.num(Infinity), expect: false },
  { fn: () => is.not.number(NaN), expect: true },
  { fn: () => is.not.num(NaN), expect: true },
  { fn: () => is.not.number('123'), expect: true },
  { fn: () => is.not.num('123'), expect: true },
  { fn: () => is.not.number([]), expect: true },
  { fn: () => is.not.num([]), expect: true },

  // is.not.integer / is.not.int
  { fn: () => is.not.integer(1), expect: false },
  { fn: () => is.not.int(1), expect: false },
  { fn: () => is.not.integer(1.0), expect: false },
  { fn: () => is.not.int(1.0), expect: false },
  { fn: () => is.not.integer(1.5), expect: true },
  { fn: () => is.not.int(1.5), expect: true },
  { fn: () => is.not.integer('123'), expect: true },
  { fn: () => is.not.int('123'), expect: true },

  // is.not.float
  { fn: () => is.not.float(1.5), expect: false },
  { fn: () => is.not.float(1.0), expect: false },
  { fn: () => is.not.float(1), expect: false },
  { fn: () => is.not.float('1.5'), expect: true },
  { fn: () => is.not.float([]), expect: true },

  // is.not.object / is.not.obj
  { fn: () => is.not.object({}), expect: false },
  { fn: () => is.not.obj({}), expect: false },
  { fn: () => is.not.object([]), expect: false },
  { fn: () => is.not.obj([]), expect: false },
  { fn: () => is.not.object(/test/), expect: false },
  { fn: () => is.not.obj(/test/), expect: false },
  { fn: () => is.not.object(new Date()), expect: false },
  { fn: () => is.not.obj(new Date()), expect: false },
  { fn: () => is.not.object('test'), expect: true },
  { fn: () => is.not.obj('test'), expect: true },
  { fn: () => is.not.object(123), expect: true },
  { fn: () => is.not.obj(123), expect: true },

  // is.not.string / is.not.str
  { fn: () => is.not.string('test'), expect: false },
  { fn: () => is.not.str('test'), expect: false },
  { fn: () => is.not.string(''), expect: false },
  { fn: () => is.not.str(''), expect: false },
  { fn: () => is.not.string(123), expect: true },
  { fn: () => is.not.str(123), expect: true },
  { fn: () => is.not.string([]), expect: true },
  { fn: () => is.not.str([]), expect: true },

  // is.not.null / is.not.nil
  { fn: () => is.not.null(null), expect: false },
  { fn: () => is.not.nil(null), expect: false },
  { fn: () => is.not.null(undefined), expect: true },
  { fn: () => is.not.nil(undefined), expect: true },
  { fn: () => is.not.null('test'), expect: true },
  { fn: () => is.not.nil('test'), expect: true },
  { fn: () => is.not.null(123), expect: true },
  { fn: () => is.not.nil(123), expect: true },

  // is.not.undefinedOrNull
  { fn: () => is.not.undefinedOrNull(undefined), expect: false },
  { fn: () => is.not.undefinedOrNull(null), expect: false },
  { fn: () => is.not.undefinedOrNull('test'), expect: true },
  { fn: () => is.not.undefinedOrNull(123), expect: true },
  { fn: () => is.not.undefinedOrNull([]), expect: true },

  // is.not.error
  { fn: () => is.not.error(new Error('test')), expect: false },
  { fn: () => is.not.error('test'), expect: true },
  { fn: () => is.not.error(123), expect: true },
  { fn: () => is.not.error([]), expect: true },

  // is.not.date
  { fn: () => is.not.date(new Date()), expect: false },
  { fn: () => is.not.date('test'), expect: true },
  { fn: () => is.not.date(123), expect: true },

  // is.not.regExp / is.not.regexp / is.not.regex
  { fn: () => is.not.regExp(/test/), expect: false },
  { fn: () => is.not.regexp(/test/), expect: false },
  { fn: () => is.not.regex(/test/), expect: false },
  { fn: () => is.not.regExp('test'), expect: true },
  { fn: () => is.not.regexp('test'), expect: true },
  { fn: () => is.not.regex('test'), expect: true },
  { fn: () => is.not.regExp(123), expect: true },
  { fn: () => is.not.regexp(123), expect: true },

  // is.not.truthy
  { fn: () => is.not.truthy(true), expect: false },
  { fn: () => is.not.truthy(1), expect: false },
  { fn: () => is.not.truthy('test'), expect: false },
  { fn: () => is.not.truthy([]), expect: false },
  { fn: () => is.not.truthy([1]), expect: false },
  { fn: () => is.not.truthy(false), expect: true },
  { fn: () => is.not.truthy(0), expect: true },
  { fn: () => is.not.truthy(''), expect: true },
  { fn: () => is.not.truthy(null), expect: true },
  { fn: () => is.not.truthy(undefined), expect: true },

  // is.not.falsy
  { fn: () => is.not.falsy(false), expect: false },
  { fn: () => is.not.falsy(0), expect: false },
  { fn: () => is.not.falsy(''), expect: false },
  { fn: () => is.not.falsy(null), expect: false },
  { fn: () => is.not.falsy(undefined), expect: false },
  { fn: () => is.not.falsy([]), expect: false },
  { fn: () => is.not.falsy([1, 2]), expect: true },
  { fn: () => is.not.falsy(true), expect: true },
  { fn: () => is.not.falsy(1), expect: true },
  { fn: () => is.not.falsy('test'), expect: true },

  // is.not.empty
  { fn: () => is.not.empty([]), expect: false },
  { fn: () => is.not.empty([1]), expect: true },
  { fn: () => is.not.empty({}), expect: false },
  { fn: () => is.not.empty({ a: 1 }), expect: true },
  { fn: () => is.not.empty(''), expect: false },
  { fn: () => is.not.empty('a'), expect: true },
  { fn: () => is.not.empty(0), expect: false },
  { fn: () => is.not.empty(null), expect: false },
  { fn: () => is.not.empty(undefined), expect: false },

  // is.not.iterable / is.not.iter
  { fn: () => is.not.iterable([]), expect: false },
  { fn: () => is.not.iter([]), expect: false },
  { fn: () => is.not.iterable([1, 2]), expect: false },
  { fn: () => is.not.iter([1, 2]), expect: false },
  { fn: () => is.not.iterable('test'), expect: true },
  { fn: () => is.not.iter('test'), expect: true },
  { fn: () => is.not.iterable(new Map()), expect: false },
  { fn: () => is.not.iter(new Map()), expect: false },
  { fn: () => is.not.iterable(new Set()), expect: false },
  { fn: () => is.not.iter(new Set()), expect: false },
  { fn: () => is.not.iterable(123), expect: true },
  { fn: () => is.not.iter(123), expect: true },

  // is.not.email / is.not.mail
  { fn: () => is.not.email('test@test.com'), expect: false },
  { fn: () => is.not.mail('test@test.com'), expect: false },
  { fn: () => is.not.email('test.com'), expect: true },
  { fn: () => is.not.mail('test.com'), expect: true },

  // is.not.symbol / is.not.sym
  { fn: () => is.not.symbol(Symbol('test')), expect: false },
  { fn: () => is.not.sym(Symbol('test')), expect: false },
  { fn: () => is.not.symbol('test'), expect: true },
  { fn: () => is.not.sym('test'), expect: true },

  // is.not.type / is.not.testType / is.not.isTypes / is.not.types / is.not.test / is.not.is
  { fn: () => is.not.type(123, 'number'), expect: false },
  { fn: () => is.not.testType(123, 'number'), expect: false },
  { fn: () => is.not.types(123, 'number'), expect: false },
  { fn: () => is.not.test(123, 'number'), expect: false },
  { fn: () => is.not.is(123, 'number'), expect: false },
  { fn: () => is.not.type('test', 'number'), expect: true },
  { fn: () => is.not.testType('test', 'number'), expect: true },
  { fn: () => is.not.types('test', 'number'), expect: true },
  { fn: () => is.not.test('test', 'number'), expect: true },
  { fn: () => is.not.is('test', 'number'), expect: true },

  // is.not.instanceOf / is.not.instance / is.not.instanceof
  {
    fn: () => {
      class TestClass {}
      return is.not.instanceOf(new TestClass(), TestClass)
    },
    expect: false,
  },
  {
    fn: () => {
      class TestClass {}
      return is.not.instance(new TestClass(), TestClass)
    },
    expect: false,
  },
  {
    fn: () => {
      class TestClass {}
      return is.not.instanceof(new TestClass(), TestClass)
    },
    expect: false,
  },
  {
    fn: () => {
      class TestClass {}
      return is.not.instanceOf('test', TestClass)
    },
    expect: true,
  },
  {
    fn: () => {
      class TestClass {}
      return is.not.instance('test', TestClass)
    },
    expect: true,
  },
  {
    fn: () => {
      class TestClass {}
      return is.not.instanceof('test', TestClass)
    },
    expect: true,
  },

  // is.not.upperCase / is.not.lowerCase
  { fn: () => is.not.upperCase('TEST'), expect: false },
  { fn: () => is.not.lowerCase('test'), expect: false },
  { fn: () => is.not.upperCase('test'), expect: true },
  { fn: () => is.not.lowerCase('TEST'), expect: true },

  // is.not.case
  { fn: () => is.not.case('TEST', 'up'), expect: false },
  { fn: () => is.not.case('test', 'down'), expect: false },
  { fn: () => is.not.case('test', 'up'), expect: true },
  { fn: () => is.not.case('TEST', 'down'), expect: true },

  // is.not.same / is.not.sameType / is.not.isSame / is.not.isSameType
  { fn: () => is.not.same(123, 456), expect: false },
  { fn: () => is.not.sameType(123, 456), expect: false },
  { fn: () => is.not.isSame(123, 456), expect: false },
  { fn: () => is.not.isSameType(123, 456), expect: false },
  { fn: () => is.not.same(123, '123'), expect: true },
  { fn: () => is.not.sameType(123, '123'), expect: true },
  { fn: () => is.not.isSame(123, '123'), expect: true },
  { fn: () => is.not.isSameType(123, '123'), expect: true },

  // is.not.ownProp / is.not.prop / is.not.ownProperty
  { fn: () => is.not.ownProp({ a: 1 }, 'a'), expect: false },
  { fn: () => is.not.prop({ a: 1 }, 'a'), expect: false },
  { fn: () => is.not.ownProperty({ a: 1 }, 'a'), expect: false },
  { fn: () => is.not.ownProp({ a: 1 }, 'b'), expect: true },
  { fn: () => is.not.prop({ a: 1 }, 'b'), expect: true },
  { fn: () => is.not.ownProperty({ a: 1 }, 'b'), expect: true },

  // is.not.module
  { fn: () => is.not.module({}), expect: true },

  // is.not.ip / is.not.ipv4 / is.not.v4 / is.not.ipv6 / is.not.v6
  { fn: () => is.not.ip('192.168.1.1'), expect: false },
  { fn: () => is.not.ipv4('192.168.1.1'), expect: false },
  { fn: () => is.not.v4('192.168.1.1'), expect: false },
  { fn: () => is.not.ip('not-an-ip'), expect: true },
  { fn: () => is.not.ipv4('not-an-ip'), expect: true },
  { fn: () => is.not.v4('not-an-ip'), expect: true },

  { fn: () => is.not.ipv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'), expect: false },
  { fn: () => is.not.v6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'), expect: false },
  { fn: () => is.not.ipv6('not-an-ipv6'), expect: true },
  { fn: () => is.not.v6('not-an-ipv6'), expect: true },

  // Length comparison functions
  { fn: () => is.not.len.eq(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.eq(3, [1, 2]), expect: true },
  { fn: () => is.not.len.equal(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.equal(3, [1, 2]), expect: true },

  { fn: () => is.not.len.gt(2, [1, 2, 3]), expect: true },
  { fn: () => is.not.len.gt(2, [1, 2]), expect: true },
  { fn: () => is.not.len.gt(2, [1]), expect: false },
  { fn: () => is.not.len.gt(3, [1, 2, 3]), expect: true },

  { fn: () => is.not.len.gte(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.gte(3, [1, 2]), expect: false },
  { fn: () => is.not.len.gte(3, [1]), expect: false },
  { fn: () => is.not.len.gte(3, [1, 2, 3, 4]), expect: true },

  { fn: () => is.not.len.lt(4, [1, 2, 3]), expect: true },
  { fn: () => is.not.len.lt(4, [1, 2, 3, 4]), expect: true },
  { fn: () => is.not.len.lt(4, [1, 2, 3, 4, 5]), expect: false },
  { fn: () => is.not.len.lt(3, [1, 2, 3]), expect: true },

  { fn: () => is.not.len.lte(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.lte(3, [1, 2, 3, 4]), expect: false },
  { fn: () => is.not.len.lte(3, [1, 2, 3, 4, 5]), expect: false },
  { fn: () => is.not.len.lte(2, [1, 2, 3]), expect: false },

  { fn: () => is.not.len.lteq(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.lteq(3, [1, 2, 3, 4]), expect: false },
  { fn: () => is.not.len.lteq(3, [1, 2, 3, 4, 5]), expect: false },

  { fn: () => is.not.len.lowerequal(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.lowerequal(3, [1, 2, 3, 4]), expect: false },
  { fn: () => is.not.len.lowerequal(3, [1, 2, 3, 4, 5]), expect: false },

  { fn: () => is.not.len.smallerequal(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.smallerequal(3, [1, 2, 3, 4]), expect: false },
  { fn: () => is.not.len.smallerequal(3, [1, 2, 3, 4, 5]), expect: false },

  { fn: () => is.not.len.smaller(4, [1, 2, 3]), expect: true },
  { fn: () => is.not.len.smaller(4, [1, 2, 3, 4]), expect: true },
  { fn: () => is.not.len.smaller(4, [1, 2, 3, 4, 5]), expect: false },

  { fn: () => is.not.len.lower(4, [1, 2, 3]), expect: true },
  { fn: () => is.not.len.lower(4, [1, 2, 3, 4]), expect: true },
  { fn: () => is.not.len.lower(4, [1, 2, 3, 4, 5]), expect: false },

  { fn: () => is.not.len.bigger(2, [1, 2, 3]), expect: true },
  { fn: () => is.not.len.bigger(2, [1, 2]), expect: true },
  { fn: () => is.not.len.bigger(2, [1]), expect: false },

  { fn: () => is.not.len.greater(2, [1, 2, 3]), expect: true },
  { fn: () => is.not.len.greater(2, [1, 2]), expect: true },
  { fn: () => is.not.len.greater(2, [1]), expect: false },

  { fn: () => is.not.len.biggerequal(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.biggerequal(3, [1, 2]), expect: false },
  { fn: () => is.not.len.biggerequal(3, [1]), expect: false },
  { fn: () => is.not.len.biggerequal(2, [1, 2, 3]), expect: true },

  { fn: () => is.not.len.greaterequal(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.greaterequal(3, [1, 2]), expect: false },
  { fn: () => is.not.len.greaterequal(3, [1]), expect: false },
  { fn: () => is.not.len.greaterequal(2, [1, 2, 3]), expect: true },

  { fn: () => is.not.len.gteq(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.gteq(3, [1, 2]), expect: false },
  { fn: () => is.not.len.gteq(3, [1]), expect: false },

  { fn: () => is.not.len.gte(3, [1, 2, 3]), expect: false },
  { fn: () => is.not.len.gte(3, [1, 2]), expect: false },
  { fn: () => is.not.len.gte(3, [1]), expect: false },

  // is.not.deep namespace
  { fn: () => is.not.deep.isEqual([1, 2], [1, 2]), expect: false },
  { fn: () => is.not.deep.equal([1, 2], [1, 2]), expect: false },
  { fn: () => is.not.deep.eq([1, 2], [1, 2]), expect: false },
  { fn: () => is.not.deep.isEqual([1, 2], [1, 3]), expect: true },
  { fn: () => is.not.deep.equal([1, 2], [1, 3]), expect: true },
  { fn: () => is.not.deep.eq([1, 2], [1, 3]), expect: true },

  { fn: () => is.not.deep.isDifferent([1, 2], [1, 3]), expect: false },
  { fn: () => is.not.deep.different([1, 2], [1, 3]), expect: false },
  { fn: () => is.not.deep.diff([1, 2], [1, 3]), expect: false },
  { fn: () => is.not.deep.isDifferent([1, 2], [1, 2]), expect: true },
  { fn: () => is.not.deep.different([1, 2], [1, 2]), expect: true },
  { fn: () => is.not.deep.diff([1, 2], [1, 2]), expect: true },

  { fn: () => is.not.deepEqual([1, 2], [1, 2]), expect: false },
  { fn: () => is.not.deepEqual([1, 2], [1, 3]), expect: true },
  { fn: () => is.not.deepDifferent([1, 2], [1, 2]), expect: true },
  { fn: () => is.not.deepDifferent([1, 2], [1, 3]), expect: false },
] satisfies Test[]
