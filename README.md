# @magic/types

typechecking utilities

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/types.svg
[npm-url]: https://www.npmjs.com/package/@magic/types
[travis-image]: https://img.shields.io/travis/com/magic/types/master
[travis-url]: https://travis-ci.com/magic/types
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/types/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/types/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/types/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/types
[greenkeeper-image]: https://badges.greenkeeper.io/magic/types.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/types.svg
[snyk-image]: https://snyk.io/test/github/magic/types/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/types

##### install

```javascript
npm install @magic/types
```

##### import single function

```js
// single function import
import { isArray } from '@magic/types'

isArray([]) // true
```

##### import all functions

```javascript
import is from '@magic/types'

is.array([]) // true
```

##### import deep

```javascript
import { deep } from '@magic/types'

deep.isDeepEqual([1, 2, 3], [1, 2, 3]) // true
// also: deep.deepEqual, deep.deepEq, is.isDeepEqual
deep.isDeepDifferent([1, 2, 3], [1, 2, 3]) // false
// also: deep.deepDifferent, deep.deepDiff, is.isDeepDifferent
deep.isEqual([1, 2, 3], [1, 2, 3]) // true
// also: is.deep.isEqual, is.deep.equal, is.deep.eq
```

##### functions

```javascript

// comparisons

// test a value for multiple types
is.is(ele, ...types)
// alias is.type, is.testType, is.types, test

// test if a value is not of a type
not(ele, ...types)
// alias is.neq, isNeq, isNot

// not (and is.not) is also a namespace with negated versions of every check:
is.not.array([]) // false
is.not.len.eq('abc', 'def') // false
is.not.case.upper('lowercase') // true
is.not.deep.eq([1], [1]) // false
is.not.ip.v4('192.168.1.1') // false

isSameType('string', 'string')
// alias isSame, is.same, is.sameType


// type comparisons:

isArray([]) // true
// alias isArr, is.array, is.arr

isBoolean(true) // true
// alias isBool, is.boolean, is.bool

isDefined(undefined) //false
// alias isDef, is.defined, is.def

isUndefined(undefined) //true
// alias isUndef, is.undefined, is.undef

isFunction(() => {}) // true
// alias isFunc, isFn, is.function, is.func, is.fn

isAsyncFunction(async () => {}) // true
// alias isAsyncFunc, isAsyncFn, is.asyncFunction, is.asyncFunc, is.asyncFn

isGeneratorFunction(* () => {}) // true
// alias isGeneratorFunc, isGeneratorFn, isGenerator, is.generatorFunction, is.generatorFunc, is.generatorFn, generator, generatorFn, generatorFunc, generatorFunction

isNumber(1) // true
// alias isNum, is.number, is.num

isInteger(1) // true
// alias isInt, is.integer, is.int

isFloat(1.1) // true
// alias is.float

isObject({}) // true
// alias isObj, is.object, is.obj

isObjectNative({}) // true
isObjectNative([]) // false
// alias is.objectNative

isString('') // true
// alias isStr, is.string, is.str

isRGBAObject({ r: 1, g: 1, b: 1, a: 1 }) // true
// alias isRGBA, is.rgbaObject, is.rgba

isRGBObject({ r: 1, g: 1, b: 1 }) // true
// alias isRGB, is.rgbObject, is.rgb

isRGBValue({ r: 1, g: 1, b: 1 }) // true
// alias isRGBObject, is.rgbValue

isRGBAValue({ r: 1, g: 1, b: 1, a: 1 }) // true
// alias isRGBAObject, is.rgbaValue

isHexColor('#333') // true
// alias isHex, is.hex, is.hexColor

isHexColor3('#333') // true
isHexColor4('#3333') // true
isHexColor6('#333333') // true
isHexColor8('#33333333') // true
// aliases is.hex3, is.hexColor3, is.hex4, is.hexColor4, is.hex6, is.hexColor6, is.hex8, is.hexColor8

isHexAlphaColor('#3333') // true
// alias isHexa, is.hexa, is.hexAlphaColor

isHexAlphaColor4('#3333') // true
isHexAlphaColor8('#33333333') // true
// aliases is.hexa4, is.hexAlphaColor4, is.hexa8, is.hexAlphaColor8

isColor('#444') // true
// alias isCol, is.color, is.col

isDate(new Date()) // true
// alias isTime, is.date, is.time

isRegExp(/regexp/) // true
// alias isRegex, is.regexp, is.regExp, is.regex

isTruthy('true') // true
// alias is.truthy

isFalsy(0) // true
// alias is.falsy

isEmpty('') // true
// alias is.empty

isError(new Error('')) // true
// alias isErr, is.error, is.err

isIterable([]) // true
// alias is.iterable, is.iter, isIter

isEmail('a@b.c') // true
// alias isMail, is.email, is.mail

isIP('192.168.1.1') // true
isIP('::1') // true
// alias ip, is.ip, isIp, isIP

isIp('192.168.1.1') // true
isIp('::1') // true
// alias ip, is.ip

isIp.v4('192.168.1.1') // true
isIp.v6('::1') // true

isIPv4('192.168.1.1') // true
// aliases ipV4, is.ipV4, is.ipv4, is.v4

isIPv6('::1') // true
// aliases ipV6, is.ipV6, is.ipv6, is.v6

isMap(new Map()) // true
// alias is.map, is.map, map

isSet(new Set()) // true
// alias is.set, is.set, set

isWeakMap(new WeakMap()) // true
// alias is.weakMap, is.weakMap, weakMap

isWeakSet(new WeakSet()) // true
// alias is.weakSet, is.weakSet, weakSet

isNull(null) // true
// alias isNil, is.nil, is.null

isUndefinedOrNull(undefined || null) // true
// alias is.undefinedOrNull, is.undefinedOrNil, is.undefOrNull, is.undefOrNil

isBuffer(Buffer.from('test')) // true
// alias isBuff, is.buffer, is.buff

isPromise(new Promise(r => r())) // true
// alias is.promise, isThenable, isThen, is.thenable, is.then

// (call with a function's arguments object)
(function () {
  isArguments(arguments) // true
})()
// alias isArgs, is.arguments, is.args

isUUID(uuid) // true
// alias is.uuid

isType(42, 'number') // true
// alias is.type, is.testType, isType

is.test(42, ['string', 'object']) // false
// alias is.types

is.eq('abc', 'def') // true
// alias is.eq
// is.eq compares lengths, see "length" section below

isNot = isNeq = is.not(42, 'string') // true
// alias is.neq

deep.isDeepEqual([1, 2, 3], [1, 2, 3]) // true
// alias is.deep.eq, is.deep.equal
// also deep.deepEqual, deep.deepEq, is.isDeepEqual
deep.isDeepDifferent([1, 2, 3], [1, 2, 3]) // false
// alias is.deep.diff, is.deep.different
// also deep.deepDifferent, deep.deepDiff, is.isDeepDifferent

deep.isDifferent([1, 2, 3], [1, 2, 3]) // false
// alias is.deep.isDifferent, is.deep.different, is.deep.diff

deep.isDeepEqual([1, 2, 3], [3, 2, 1]) // true
deep.isDeepEqual([1, 2, 3], [3, 2, 1], { strict: true }) // false

deep.isDeepEqual({a: 1, b: 2, c: 3 }, { c: 3, b: 2, a: 1 }) // true
deep.isDeepEqual({a: 1, b: 2, c: 3 }, { c: 3, b: 2, a: 1 }, { strict: true }) // false

isEvery([1, 2, 3], 'number') // true
isEvery([1, 2, 3], is.number) // true
// alias is.every, is.all

isSome([1, 'str', {}], 'number') // true
isSome([1, 'str', {}], is.number) // true
// alias is.some

isSymbol(Symbol('testing')) // true
// alias is.symbol, is.sym

isNone([1, 2, 3], 'string') // true
isNone([1, 2, 3], is.number) // false
// alias is.none

isInstanceOf(new Date(), Date) // true
// alias is.instance, is.instanceof, is.instanceOf

isCase('UPPERCASE', 'up') // true
isCase('lowercase', 'low') // true
// alias is.case

isUpperCase('UPPERCASE') // true
// alias is.case.upper, isCase.upper

isLowerCase('lowercase') // true
// alias is.case.lower, isCase.lower

isMergeableObject({}) // true
// alias is.mergeable, is.mergeableObject, isMergeable

const mod = await import('path/to/file')
isModule(mod) // true
// alias is.module

isComparable(1) // true
isComparable('str') // true
isComparable(true) // true
isComparable({}) // false
// aliases is.comparable, is.Comparable

isOwnProp({ test: undefined }, 'test') // true
// alias isOwnProperty, is.ownProperty, is.ownProp, is.prop

// length

// get the length of a string, array, map, set, regexp, or object
// numbers return themselves
getLength('test') // 4
getLength([1, 2, 3]) // 3
getLength(new Set([1, 2])) // 2
getLength(123) // 123
// aliases is.len, is.count, is.length, is.ln

// compare lengths, both arguments can be anything with a length
// these can also be curried: is.gt('abcd')('ab') // true
is.eq('abc', 'def') // true
is.gt('abcd', 'ab') // true
is.gte('abc', 'ab') // true
is.lt('ab', 'abc') // true
is.lte('abc', 'abc') // true
// aliases is.equal, is.greater, is.bigger, is.greaterequal, is.biggerequal,
// is.gteq, is.lower, is.smaller, is.lowerequal, is.smallerequal, is.lteq

isLengthEqual('abc', 3) // true
isLengthGreater('abc', 2) // true
isLengthGreaterOrEqual('ab', 2) // true
isLengthSmaller('ab', 3) // true
isLengthSmallerOrEqual('abc', 3) // true
// aliases is.isLengthEqual, is.isLengthGreater, is.isLengthGreaterOrEqual,
// is.isLengthSmaller, is.isLengthSmallerOrEqual

compareCount('abc', 3) // true

// the length functions also exist as methods on the length checks:
is.len.eq('abc', 'def') // true
```

#### Changelog

##### 0.0.5

added Map, WeakMap, Set and WeakSet

##### 0.1.0

use es6 modules

##### 0.1.1

FIX: add module field to package.json

##### 0.1.2

FIX: is.number no longer errors on node es6 modules and other weird objects

##### 0.1.3

use @magic/deep for is.deep.equal and is.deep.different

##### 0.1.4

is.deep uses @magic/deep now.

this means that is.deep.equal(null, undefined) is returning a function now,
because it expects currying.

##### 0.1.5

minimum node version is 13.5.0

##### 0.1.6

remove @magic/deep dependency

##### 0.1.7

fix erroneous '@magic/types' import in src/deep/equal.mjs

##### 0.1.8

add

- is.every
- is.some
- is.none

##### 0.1.9

add is.instanceOf

##### 0.1.10

add isCase, isUpperCase, isLowerCase

##### 0.1.11

add isObjectNative

##### 0.1.12

bump required node version to 14.2.0

##### 0.1.13

- add isAsyncFunction
- add isGeneratorFunction

##### 0.1.14

- bump required node version to 14.15.4
- update dependencies

##### 0.1.15

deep.equal now does return true for objects that have undefined property values

##### 0.1.16

- remove circular dependencies

##### 0.1.17

- add isSameType, isSame, same, sameType
- update dev dependencies

##### 0.1.18

- add isModule and isOwnProperty
- update dependencies

##### 0.1.19

update dependencies

##### 0.1.20

update dependencies

##### 0.1.21

- isBuffer uses Buffer.isBuffer.
- update dependencies
- getLength does not use .length or .size property for unknown types. instead we test for is.array, is.string, is.map etc.

##### 0.1.22

- update getLength to correctly return the length of buffers (regressed in 0.1.21).
- add a test case for buffer length

##### 0.1.23

- update dev dependencies
- update docs

##### 0.1.24

- update dependencies

##### 0.1.25

- add typescript types
- coverage is 100%
- update dependencies

##### 0.1.26

- fix typescript d.ts files

##### 0.1.27

- @types/node is a dependency, not devDependency
- update dependencies

##### 0.1.28

- options.strict makes the tests include sort order of objects and array, [1, 2] is [2, 1] if options.strict = true
- update dependencies

##### 0.1.29

- change types of is.ln, is.len, is.length and is.count to reflect their type as function with subfunctions

##### 0.1.30

- fix deep.equal and deep.different implementations and tests
- update dependencies

##### 0.1.31

- update dependencies

##### 0.1.32

- add is.symbol, is.sym and isSymbol functions

##### 0.1.33

- is.instance now typeguards
- update dependencies

##### 0.1.34

- add gt, gte, lt, lte and all other numerical value comparators into root, is.gt, is.lt etc.
- update dependencies

##### 0.1.35

- update types for 0.1.34

##### 0.1.36

- update dependencies

##### 0.1.37

- update @magic/test

##### 0.1.38

- remove recursive dependencies
- update dependencies

##### 0.1.39

- add isIp and variants to allow ip v4 and v6 checks
- update dependencies

##### 0.1.40 - unreleased

...
