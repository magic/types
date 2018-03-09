# magic-types

typechecking utilities

```js

const { test } = require('types')

import { is, not } from 'types'

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
