# magic-types

typechecking utilities

```js

cleanType(typeString)
converts array, nodelist and object to [object Array], [object NodeList], [object Object]

cleanTypes(value, types = [String])
converts an array of types and arguments using cleanType

test(value, types = [String]);
test a value

is(ele, ...types);
test a value

not(ele, ...types)
test if a value is not of a type

type comparisons:
isArray
isBoolean
isFunction
isNumber
isObject
isString
isRGBAObject
isRGBObject
isHexColor
isHexAlphaColor
isColor
isDate
isError
isNodeList
isRegExp

value comparisons:
isDefined
isTruthy
isEmpty
isFalsy

conversion helpers:
toString
toInt
toFloat
```
