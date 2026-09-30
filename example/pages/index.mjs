export const View = state => [
  h1(state.title),
  p(state.description),

  GitBadges('@magic/types'),

  h2({ id: 'install' }, ' install'),
  Pre('npm install @magic/types'),

  h2({ id: 'import' }, 'import'),

  h3({ id: 'import-single-function' }, ' import single function'),
  Pre(`
// single function import
import { isArray } from '@magic/types'

isArray([]) // true`),

  h3({ id: 'import-all-functions' }, ' import all functions'),
  Pre(`
import is from '@magic/types'

is.array([]) // true`),

  h3({ id: 'functions' }, 'functions'),
  p('@magic/types exports an object of functions to typecheck.'),

  h3({ id: 'functions-is' }, 'is'),
  p('test a value for multiple types'),
  Pre(`
is.is(ele, ...types)

is.is('astring', 'string', 'object') // true
is.is(42, 'string', 'object') // false
`),

  h3({ id: 'functions-not' }, 'not'),
  p('test if a value is not of a type'),
  Pre(`
not(ele, ...types)

not('astring', 'string', 'object') // false
not(42, 'string', 'object') // true`),
  p({ class: 'alias' }, 'alias is.neq, isNeq, isNot'),
  p('not (and is.not) is also a namespace with negated versions of every check:'),
  Pre(`
is.not.array([]) // false
is.not.len.eq('abc', 'def') // false
is.not.case.upper('lowercase') // true
is.not.deep.eq([1], [1]) // false
is.not.ip.v4('192.168.1.1') // false`),

  h3({ id: 'functions-istype' }, 'isType'),
  Pre("isType(42, 'number') // true"),
  p({ class: 'alias' }, 'alias is.type, is.testType'),

  h3({ id: 'functions-test' }, 'test'),
  p('test if a value is one of the provided types'),
  Pre(`
is.test(42, ['string', 'object']) // false
is.test('42', 'string', 'object') // true`),
  p({ class: 'alias' }, 'alias is.types'),

  h3({ id: 'functions-issametype' }, 'isSameType'),
  p('compare the types of two values.'),
  Pre(`
isSameType(42, 'string') // false
isSameType(42, 23) // true`),
  p({ class: 'alias' }, 'alias isSame, is.sameType, is.same'),

  h3({ id: 'functions-array' }, 'isArray'),
  Pre('isArray([]) // true'),
  p('alias isArr, is.array, is.arr'),

  h3({ id: 'functions-boolean' }, 'isBoolean'),
  Pre('isBoolean(true) // true'),
  p({ class: 'alias' }, 'alias isBool, is.boolean, is.bool'),

  h3({ id: 'functions-defined' }, 'isDefined'),
  Pre('isDefined(undefined) //false'),
  p({ class: 'alias' }, 'alias isDef, is.defined, is.def'),

  h3({ id: 'functions-undefined' }, 'isUndefined'),
  Pre('isUndefined(undefined) //true'),
  p({ class: 'alias' }, 'alias isUndef, is.undefined, is.undef'),

  h3({ id: 'functions-function' }, 'isFunction'),
  Pre('isFunction(() => {}) // true'),
  p({ class: 'alias' }, 'alias isFunc, isFn, is.function, is.func, is.fn'),

  h3({ id: 'functions-asyncfunction' }, 'isAsyncFunction'),
  Pre('isAsyncFunction(async () => {}) // true'),
  p({ class: 'alias' }, 'alias isAsyncFunc, isAsyncFn, is.asyncFunction, is.asyncFunc, is.asyncFn'),

  h3({ id: 'functions-generatorfunction' }, 'isGeneratorFunction'),
  Pre('isGeneratorFunction(function * () {}) // true'),
  p(
    { class: 'alias' },
    'alias isGeneratorFunc, isGeneratorFn, is.generatorFunction, is.generator, is.generatorFunc, is.generatorFn',
  ),

  h3({ id: 'functions-number' }, 'isNumber'),
  Pre('isNumber(1) // true'),
  p({ class: 'alias' }, 'alias isNum, is.number, is.num'),

  h3({ id: 'functions-integer' }, 'isInteger'),
  Pre('isInteger(1) // true'),
  p({ class: 'alias' }, 'alias isInt, is.integer, is.int'),

  h3({ id: 'functions-float' }, 'isFloat'),
  Pre('isFloat(1.1) // true'),
  p({ class: 'alias' }, 'alias is.float'),

  h3({ id: 'functions-object' }, 'isObject'),
  Pre('isObject({}) // true'),
  p({ class: 'alias' }, 'alias isObj, is.object, is.obj'),

  h3({ id: 'functions-isobjectnative' }, 'isObjectNative'),
  Pre(`
isObjectNative({}) // true
isObjectNative([]) // false
`),
  p({ class: 'alias' }, 'alias is.objectNative'),

  h3({ id: 'functions-string' }, 'isString'),
  Pre("isString('') // true"),
  p({ class: 'alias' }, 'alias isStr, is.string, is.str'),

  h3({ id: 'functions-rgbaobject' }, 'isRGBAObject'),
  Pre('isRGBAObject({ r: 1, g: 1, b: 1, a: 1 }) // true'),
  p({ class: 'alias' }, 'alias isRGBA, is.rgbaObject, is.rgba'),

  h3({ id: 'functions-rgbobject' }, 'isRGBObject'),
  Pre(`
isRGBObject({ r: 1, g: 1, b: 1 }) // true
isRGBValue({ r: 1, g: 1, b: 1 }) // true
isRGBAValue({ r: 1, g: 1, b: 1, a: 1 }) // true`),
  p({ class: 'alias' }, 'alias isRGB, is.rgbObject, is.rgb, isRGBValue, isRGBAValue'),

  h3({ id: 'functions-hexcolor' }, 'isHexColor'),
  Pre(`
isHexColor('#333') // true
isHexColor3('#333') // true
isHexColor4('#3333') // true
isHexColor6('#333333') // true
isHexColor8('#33333333') // true`),
  p({ class: 'alias' }, 'alias isHex, is.hex, is.hexColor, is.hex3, is.hex4, is.hex6, is.hex8'),

  h3({ id: 'functions-hexalphacolor' }, 'isHexAlphaColor'),
  Pre(`
isHexAlphaColor('#3333') // true
isHexAlphaColor4('#3333') // true
isHexAlphaColor8('#33333333') // true`),
  p({ class: 'alias' }, 'alias isHexa, is.hexa, is.hexAlphaColor, is.hexa4, is.hexa8'),

  h3({ id: 'functions-color' }, 'isColor'),
  Pre("isColor('#444') // true"),
  p({ class: 'alias' }, 'alias isCol, is.color, is.col'),

  h3({ id: 'functions-date' }, 'isDate'),
  Pre('isDate(new Date()) // true'),
  p({ class: 'alias' }, 'alias isTime, is.date, is.time'),

  h3({ id: 'functions-regexp' }, 'isRegExp'),
  Pre('isRegExp(/regexp/) // true'),
  p({ class: 'alias' }, 'alias isRegex, is.regexp, is.regExp, is.regex'),

  h3({ id: 'functions-truthy' }, 'isTruthy'),
  Pre("isTruthy('true') // true"),
  p({ class: 'alias' }, 'alias is.truthy'),

  h3({ id: 'functions-falsy' }, 'isFalsy'),
  Pre('isFalsy(0) // true'),
  p({ class: 'alias' }, 'alias is.falsy'),

  h3({ id: 'functions-empty' }, 'isEmpty'),
  Pre("isEmpty('') // true"),
  p({ class: 'alias' }, 'alias is.empty'),

  h3({ id: 'functions-error' }, 'isError'),
  Pre("isError(new Error('')) // true"),
  p({ class: 'alias' }, 'alias isErr, is.error, is.err'),

  h3({ id: 'functions-iterable' }, 'isIterable'),
  Pre('isIterable([]) // true'),
  p({ class: 'alias' }, 'alias is.iterable'),

  h3({ id: 'functions-email' }, 'isEmail'),
  Pre("isEmail('a@b.c') // true"),
  p({ class: 'alias' }, 'alias isMail, is.email, is.mail'),

  h3({ id: 'functions-null' }, 'isNull'),
  Pre('isNull(null) // true'),
  p({ class: 'alias' }, 'alias isNil, is.nil, is.null'),

  h3({ id: 'functions-undefinedornull' }, 'isUndefinedOrNull'),
  Pre('isUndefinedOrNull(undefined || null) // true'),
  p({ class: 'alias' }, [
    'alias is.undefinedOrNull,',
    ' is.undefinedOrNil, is.undefOrNull, is.undefOrNil',
  ]),

  h3({ id: 'functions-buffer' }, 'isBuffer'),
  Pre("isBuffer(Buffer.from('test')) // true"),
  p({ class: 'alias' }, 'alias isBuff, is.buffer, is.buff'),

  h3({ id: 'functions-promise' }, 'isPromise'),
  Pre('isPromise(new Promise(r => r())) // true'),
  p({ class: 'alias' }, 'alias is.promise, isThenable, isThen, is.thenable, is.then'),

  h3({ id: 'functions-arguments' }, 'isArguments'),
  Pre(`
(function () {
  isArguments(arguments) // true
})()`),
  p({ class: 'alias' }, 'alias isArgs, is.arguments, is.args'),

  h3({ id: 'functions-uuid' }, 'isUUID'),
  Pre('isUUID(uuid) // true'),
  p({ class: 'alias' }, 'alias is.uuid'),

  h3({ id: 'functions-eq' }, 'isEq'),
  Pre("is.eq('abc', 'def') // true"),
  p({ class: 'alias' }, 'alias is.is'),
  p('is.eq compares lengths, see the "length" section'),

  h3({ id: 'functions-not' }, 'isNot'),
  Pre("isNot(42, 'string') // true"),
  p({ class: 'alias' }, 'alias is.neq, isNeq, is.not'),

  h3({ id: 'functions-deepequal' }, 'isDeepEqual'),
  Pre('deep.isDeepEqual([1, 2, 3], [1, 2, 3]) // true'),
  p(
    { class: 'alias' },
    'alias is.deep.eq, is.deep.equal, deep.deepEqual, deep.deepEq, is.isDeepEqual',
  ),

  h3({ id: 'functions-deepdifferent' }, 'isDeepDifferent'),
  Pre('deep.isDeepDifferent([1, 2, 3], [1, 2, 3]) // false'),
  p(
    { class: 'alias' },
    'alias is.deep.diff, is.deep.different, deep.deepDifferent, deep.deepDiff, is.isDeepDifferent',
  ),

  h3({ id: 'functions-ismap' }, 'isMap'),
  Pre('isMap(new Map()) //true'),
  p({ class: 'alias' }, 'alias is.map'),

  h3({ id: 'functions-isset' }, 'isSet'),
  Pre('isSet(new Set()) //true'),
  p({ class: 'alias' }, 'alias is.set'),

  h3({ id: 'functions-isweakmap' }, 'isWeakMap'),
  Pre('isWeakMap(new WeakMap()) //true'),
  p({ class: 'alias' }, 'alias is.weakMap'),

  h3({ id: 'functions-isweakset' }, 'isWeakSet'),
  Pre('isWeakSet(new WeakSet()) //true'),
  p({ class: 'alias' }, 'alias is.weakSet'),

  h3({ id: 'functions-isevery' }, 'isEvery'),
  Pre(`
isEvery([1, 2, 3], 'number') // true
isEvery([1, 2, 3], is.number) // true
  `),
  p({ class: 'alias' }, 'alias is.every, is.all'),

  h3({ id: 'functions-issome' }, 'isSome'),
  Pre(`
isSome([1, 'str', {}], 'number') // true
isSome([1, 'str', {}], is.number) // true
  `),
  p({ class: 'alias' }, 'alias is.some'),

  h3({ id: 'functions-isnone' }, 'isNone'),
  Pre(`
isNone([1, 2, 3], 'string') // true
isNone([1, 2, 3], is.number) // false
  `),
  p({ class: 'alias' }, 'alias is.none'),

  h3({ id: 'functions-iscase' }, 'isCase'),
  Pre(`
isCase('UPPERCASE', 'up') // true
isCase('lowercase', 'low') // true
  `),
  p({ class: 'alias' }, 'alias is.case'),

  h3({ id: 'functions-isuppercase' }, 'isUpperCase'),
  Pre(`
isUpperCase('UPPERCASE') // true
isUpperCase(23) // false
`),
  p({ class: 'alias' }, 'alias is.case.upper, isCase.upper'),

  h3({ id: 'functions-islowercase' }, 'isLowerCase'),
  Pre(`
isLowerCase('lowercase') // true
isLowerCase(23) // false
`),
  p({ class: 'alias' }, 'alias is.case.lower, isCase.lower'),

  h3({ id: 'functions-symbol' }, 'isSymbol'),
  Pre(`
isSymbol(Symbol('testing')) // true
isSymbol(23) // false
`),
  p({ class: 'alias' }, 'alias is.symbol, is.sym'),

  h3({ id: 'functions-ismergeableobject' }, 'isMergeableObject'),
  Pre(`
isMergeableObject({}) // true
isMergeableObject(23) // false
`),
  p({ class: 'alias' }, 'alias is.mergeable, isMergeable, is.isMergeable, is.mergeableObject'),

  h3({ id: 'functions-isownprop' }, 'isOwnProp'),
  Pre(`
isOwnProp({ test: false }, 'test') // true
isOwnProp({ test: false }, 'different') // false
isOwnProp(undefined, 'test') // false
`),
  p({ class: 'alias' }, 'alias isOwnProperty, is.ownProperty, is.ownProp, is.prop'),

  h3({ id: 'functions-ismodule' }, 'isModule'),
  Pre(`
const imported = await import(file)
isModule(imported) // true
isModule({ ... anything else }) // false
`),
  p({ class: 'alias' }, 'alias is.module'),

  h3({ id: 'functions-iscomparable' }, 'isComparable'),
  p('test if a value is a boolean, string, or number'),
  Pre(`
isComparable(1) // true
isComparable('str') // true
isComparable(true) // true
isComparable({}) // false
`),
  p({ class: 'alias' }, 'alias is.comparable, is.Comparable'),

  h3({ id: 'functions-isip' }, 'isIp'),
  p('test if a value is an IPv4 or IPv6 address'),
  Pre(`
isIp('192.168.1.1') // true
isIp('::1') // true
isIp.v4('192.168.1.1') // true
isIp.v6('::1') // true
`),
  p({ class: 'alias' }, 'alias is.ip'),

  h3({ id: 'functions-ipv4' }, 'isIPv4'),
  Pre("isIPv4('192.168.1.1') // true"),
  p({ class: 'alias' }, 'alias ipV4, is.ipV4, is.ipv4, is.v4'),

  h3({ id: 'functions-ipv6' }, 'isIPv6'),
  Pre("isIPv6('::1') // true"),
  p({ class: 'alias' }, 'alias ipV6, is.ipV6, is.ipv6, is.v6'),

  h3({ id: 'functions-getlength' }, 'getLength'),
  p('get the length of a string, array, map, set, regexp, or object. numbers return themselves.'),
  Pre(`
getLength('test') // 4
getLength([1, 2, 3]) // 3
getLength(new Set([1, 2])) // 2
getLength(123) // 123
`),
  p({ class: 'alias' }, 'alias is.len, is.count, is.length, is.ln'),

  h3({ id: 'functions-length' }, 'length'),
  p('compare the lengths of two values. all of these can also be curried.'),
  Pre(`
is.eq('abc', 'def') // true
is.gt('abcd', 'ab') // true
is.gt('abcd')('ab') // true
is.gte('abc', 'ab') // true
is.lt('ab', 'abc') // true
is.lte('abc', 'abc') // true
`),
  p({ class: 'alias' }, [
    'aliases is.equal, is.greater, is.bigger, is.greaterequal, is.biggerequal,',
    ' is.gteq, is.lower, is.smaller, is.lowerequal, is.smallerequal, is.lteq',
  ]),
  p(
    'also exported: isLengthEqual, isLengthGreater, isLengthGreaterOrEqual, isLengthSmaller, isLengthSmallerOrEqual, compareCount',
  ),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic/types/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
