# magic-types

typechecking utilities


##### import single function
```js
// single function import
const { isArray } = require('types')

isArray([]) // true
```

##### import all functions
```javascript
const is = require('types')

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
// alias is.array

isBoolean(true) // true
// alias is.boolean

isDefined(undefined) //false
// alias is.defined

isFunction(() => {}) // true
// alias is.function

isNumber(1) // true
// alias is.number

isInteger(1) // true
// alias is.integer

isFloat(1.1) // true
// alias is.float

isObject({}) // true
// alias is.object

isString('') // true
// alias is.string

isRGBAObject({ r: 1, g: 1, b: 1, a: 1 }) // true
// alias is.rgbaObject, is.rgba

isRGBObject
// alias is.rgbObject, is.rgb

isHexColor('#333') // true
// alias is.hex, is.hexColor

isHexAlphaColor('#3333') // true
// alias is.hexa, is.hexAlphaColor

isColor('#444') // true
// alias is.color

isDate(new Date()) // true
// alias is.date

isRegExp(/regexp/) // true
// alias is.regexp, is.regExp

isTruthy('true') // true
// alias is.truthy

isFalsy(0) // true
// alias is.falsy

isEmpty('') // true
// alias is.empty

isError(new Error('')) // true
// alias is.error

isIterable([]) // true
// alias is.iterable

isEmail('a@b.c') // true
// alias is.email, is.mail

isNull(null) // true
// alias is.nil, is.null

isUndefinedOrNull(undefined || null) // true
// alias is.undefined, is.undefinedOrNull

isBuffer(new Buffer('test')) // true
// alias is.buffer

isThenable(new Promise()) // true
// alias is.thenable

isArguments(() => return arguments) // true
// alias is.arguments

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
