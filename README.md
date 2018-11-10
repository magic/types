# @magic/types

typechecking utilities


##### install
```javascript
  # note that there is no @.
  npm install magic/types

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

```

TODO:
curry most functions with multiple arguments
