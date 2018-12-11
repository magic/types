# @magic/types

typechecking utilities

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/magic/types.svg)](https://greenkeeper.io/)

##### install
```javascript
  npm install @magic/types
```

##### import single function
```js
// single function import
const { isArray } = require('@magic/types')

isArray([]) // true
```

##### import all functions
```javascript
const is = require('@magic/types')

is.array([]) // true
```

##### functions
```javascript

// test a value for multiple types
is(ele, ...types)
// alias is.eq, isEq, test

// test if a value is not of a type
not(ele, ...types)
// alias is.neq, isNeq, isNot

type comparisons:
isArray([]) // true
// alias isArr, is.array, is.arr

isBoolean(true) // true
// alias isBool, is.boolean, is.bool

isDefined(undefined) //false
// alias isDef, is.defined, is.def

isUndefined(undefined) //false
// alias isUndef, is.undefined, is.undef

isFunction(() => {}) // true
// alias isFunc, isFn, is.function, is.func, is.fn

isNumber(1) // true
// alias isNum, is.number, is.num

isInteger(1) // true
// alias isInt, is.integer, is.int

isFloat(1.1) // true
// alias is.float

isObject({}) // true
// alias isObj, is.object, is.obj

isString('') // true
// alias isStr, is.string, is.str

isRGBAObject({ r: 1, g: 1, b: 1, a: 1 }) // true
// alias isRGBA, is.rgbaObject, is.rgba

isRGBObject
// alias isRGB, is.rgbObject, is.rgb

isHexColor('#333') // true
// alias isHex, is.hex, is.hexColor

isHexAlphaColor('#3333') // true
// alias isHexa, is.hexa, is.hexAlphaColor

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
// alias is.iterable

isEmail('a@b.c') // true
// alias isMail, is.email, is.mail

isNull(null) // true
// alias isNil, is.nil, is.null

isUndefinedOrNull(undefined || null) // true
// alias is.undefinedOrNull

isBuffer(new Buffer('test')) // true
// alias isBuff, is.buffer, is.buff

isPromise(new Promise()) // true
// alias is.promise, isThenable, isThen, is.thenable, is.then

isArguments(() => return arguments) // true
// alias isArgs, is.arguments, is.args

isUUID(uuid) // true
// alias is.uuid

testType(42, 'number') // true
// alias is.type

test(42, ['string', 'object']) // false
// alias is.types

isEq(42, 'number') // true
// alias is.eq

isNot = isNeq = is.not(42, 'number') // true
// alias is.neq

isDeepEqual([1, 2, 3], [1, 2, 3]) // true
// alias is.deep.eq, is.deep.equal
isDeepDifferent([1, 2, 3], [1, 2, 3]) // false
// alias is.deep.diff, is.deep.different
```

TODO:
curry most functions with multiple arguments

[npm-image]: https://img.shields.io/npm/v/@magic/types.svg
[npm-url]: https://www.npmjs.com/package/@magic/types
[travis-image]: https://travis-ci.com/magic/types.svg?branch=master
[travis-url]: https://travis-ci.org/magic/types
[appveyor-image]: https://ci.appveyor.com/api/projects/status/fjlaoi06hye3p6p3/branch/master
[appveyor-url]: https://ci.appveyor.com/project/jaeh/types/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/types/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/types
