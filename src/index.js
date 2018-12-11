const isArray = e => Array.isArray(e)

const isBoolean = e => typeof e === 'boolean'

const isDefined = e => typeof e !== 'undefined'

const isUndefined = e => !isDefined(e)

const isFunction = e => typeof e === 'function'

const isNumber = e => e === +e

const isInteger = e => e === +e && e === (e | 0)

const isFloat = e => e === +e

const isObject = e => typeof e === 'object' && !isNull(e)

const isMergeableObject = e => isObject(e) && !isDate(e) && !isRegExp(e)

const isString = e => typeof e === 'string'

const isRGBValue = e => ![e.r, e.g, e.b].some(n => !isNumber(n))
const isRGBAValue = e => ![e.r, e.g, e.b, e.a].some(n => !isNumber(n))

const isRGBAObject = e => isObject(e) && isRGBAValue(e)

const isRGBObject = e => isObject(e) && isRGBValue(e)

const hexRegex = /#\b([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})\b/i
const isHexColor = e => hexRegex.test(e)

const isHexColor3 = e => /#\b([a-f0-9]{3})\b/i.test(e)

const isHexColor4 = e => /#\b([a-f0-9]{4})\b/i.test(e)

const isHexColor6 = e => /#\b([a-f0-9]{6})\b/i.test(e)

const isHexColor8 = e => /#\b([a-f0-9]{8})\b/i.test(e)

const isHexAlphaColor = e => /#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

const isHexAlphaColor4 = e => /#\b([a-f0-9]{4})\b/i.test(e)

const isHexAlphaColor8 = e => /#\b([a-f0-9]{8})\b/i.test(e)

const isColor = e => isRGBAObject(e) || isRGBObject(e) || isHexColor(e) || isHexAlphaColor(e)

const isDate = e => e instanceof Date

const isRegExp = e => e instanceof RegExp

const isTruthy = e => !!e

const isFalsy = e => !e || isEmpty(e)

const isEmpty = e => {
  if (isError(e)) {
    return false
  } else if (isDate(e)) {
    return false
  } else if (isNull(e)) {
    return true
  } else if (isUndefined(e)) {
    return true
  } else if (isArray(e)) {
    return isLengthSmaller(e, 1)
  } else if (isRegExp(e)) {
    return isLengthSmaller(e, 1)
  } else if (isObject(e)) {
    return isLengthSmaller(e, 1)
  }

  return e === 0 || e === '' || !e
}

const getLength = arg => {
  if (isNumber(arg)) {
    return arg
  } else if (isNumber(arg.length)) {
    // arrays, strings
    return arg.length
  } else if (isNumber(arg.size)) {
    // Set, Map, WeakMap etc
    return arg.size
  } else if (isRegExp(arg)) {
    const str = arg.toString()
    if (str === '/(?:)/') {
      return 0
    } else {
      return str.length > 2
    }
  }

  // objects
  return Object.keys(arg).length
}

const compareCount = (len, e) => getLength(len) === getLength(e)
const isLengthEqual = (a, b) => (isDefined(b) ? compareCount(a, b) : b => compareCount(a, b))

const isLengthGreater = (a, b) =>
  isDefined(b) ? getLength(a) > getLength(b) : c => isLengthGreater(a, c)

const isLengthSmaller = (a, b) =>
  isDefined(b) ? getLength(a) < getLength(b) : c => isLengthSmaller(a, c)

const isError = e => e instanceof Error

const isIterable = e => isDefined(e) && !isNull(e) && isFunction(e.forEach)

const isEmail = e => isString(e) && e.indexOf('@') > -1

const isNull = e => e === null

const isUndefinedOrNull = e => e === null || !isDefined(e)

const isBuffer = e => {
  if (!e) {
    return false
  } else if (isEmpty(e)) {
    return false
  } else if (!isObject(e)) {
    return false
  } else if (!isFunction(e.copy)) {
    return false
  } else if (!isNumber(e[0])) {
    return false
  }

  return true
}

const isPromise = e => e && isFunction(e.then)

const isArguments = e => Object.prototype.toString.call(e) === '[object Arguments]'

const isUUID = e => {
  if (!isDefined(e)) {
    return false
  }

  if (!isString(e)) {
    return false
  }

  const split = e.split('-')
  if (!is.len.equal(split, 5)) {
    return false
  }

  const lengths = [8, 4, 4, 4, 12]
  if (lengths.some((l, i) => split[i].length !== l)) {
    return false
  }

  // hex strings end at 'f'
  if (Object.values(e).some(s => s > 'f' || s < 0)) {
    return false
  }

  return true
}

const isType = (e, type) => typeof e === type || Object.prototype.toString(e) === type

const isTypes = (e, ...types) => types.some(k => isType(e, k))

const isEqual = (e, ...types) => isTypes(e, ...types)

const isNot = (e, ...types) => !isTypes(e, ...types)

const isComparable = a => isBoolean(a) || isString(a) || isNumber(a)

const isDeepEqual = (a = null, b) => {
  // curry
  if (is.undefined(b)) {
    if (is.null(a)) {
      return false
    }

    return c => isDeepEqual(a, c)
  }

  if (is.null(b)) {
    return a === b
  }

  // types must match
  if (typeof a !== typeof b) {
    return false
  }

  // bool, string, number, falsy values
  if (isComparable(a) || isComparable(b)) {
    return a === b
  }

  // identical 'prototype' property.
  if (a.prototype !== b.prototype) {
    return false
  }

  if (isArguments(a)) {
    return isLengthEqual(a, b)
  }

  // real types must match too
  if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
    return false
  }

  // dates
  if (is.date(a)) {
    return a.getTime() === b.getTime()
  }

  // functions
  if (is.function(a)) {
    return a.toString() === b.toString()
  }

  // buffers
  if (is.buffer(a)) {
    if (a.length !== b.length) {
      return false
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false
      }
    }

    return true
  }

  // objects
  const ka = Object.keys(a)
  const kb = Object.keys(b)

  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length) {
    return false
  }
  // the same set of keys (although not necessarily the same order),
  ka.sort()
  kb.sort()
  // ~~~cheap key test
  for (let i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i]) {
      return false
    }
  }

  // equivalent values for every corresponding key, and
  // ~~~possibly expensive deep test
  let key
  for (let i = ka.length - 1; i >= 0; i--) {
    key = ka[i]
    if (!isDeepEqual(a[key], b[key])) {
      return false
    }
  }

  return typeof a === typeof b
}

const isDeepDifferent = (a, b) => {
  if (isUndefined(b)) {
    if (isUndefined(a)) {
      return false
    }

    return c => isDeepDifferent(a, c)
  }

  return !isDeepEqual(a, b)
}

const is = {
  count: getLength,
  length: getLength,
  len: getLength,
  ln: getLength,

  isError,
  error: isError,
  err: isError,

  isIterable,
  isIter: isIterable,
  iterable: isIterable,
  iter: isIterable,

  isEmail,
  isMail: isEmail,
  email: isEmail,
  mail: isEmail,

  isNull,
  isNil: isNull,
  null: isNull,
  nil: isNull,

  isUndefinedOrNull,
  undefinedOrNull: isUndefinedOrNull,

  isBuffer,
  buffer: isBuffer,
  buff: isBuffer,

  isPromise,
  promise: isPromise,
  isThenable: isPromise,
  isThen: isPromise,
  thenable: isPromise,
  then: isPromise,

  isArguments,
  isArgs: isArguments,
  arguments: isArguments,
  args: isArguments,

  isUUID,
  uuid: isUUID,

  isType,
  testType: isType,
  type: isType,

  isTypes,
  test: isTypes,
  types: isTypes,

  isEmpty,
  empty: isEmpty,

  isEqual,
  isEq: isEqual,
  equal: isEqual,
  eq: isEqual,
  is: isEqual,

  isNot,
  not: isNot,
  isNeq: isNot,
  neq: isNot,

  isArray,
  isArr: isArray,
  array: isArray,
  arr: isArray,

  isBoolean,
  isBool: isBoolean,
  boolean: isBoolean,
  bool: isBoolean,

  isDefined,
  isDef: isDefined,
  defined: isDefined,
  def: isDefined,

  isUndefined,
  isUndef: isUndefined,
  undefined: isUndefined,
  undef: isUndefined,

  isFunction,
  isFunc: isFunction,
  isFn: isFunction,
  function: isFunction,
  func: isFunction,
  fn: isFunction,

  isNumber,
  isNum: isNumber,
  number: isNumber,
  num: isNumber,

  isInteger,
  isInt: isInteger,
  integer: isInteger,
  int: isInteger,

  isFloat,
  float: isFloat,

  isObject,
  isObj: isObject,
  object: isObject,
  obj: isObject,

  isMergeableObject,
  mergeableObject: isMergeableObject,
  isMergeable: isMergeableObject,
  mergeable: isMergeableObject,

  isString,
  isStr: isString,
  string: isString,
  str: isString,

  isRGBAObject,
  isRGBA: isRGBAObject,
  rgbaObject: isRGBAObject,
  rgba: isRGBAObject,

  isRGBObject,
  isRGB: isRGBObject,
  rgbObject: isRGBObject,
  rgb: isRGBObject,

  isHexColor,
  isHex: isHexColor,
  hexColor: isHexColor,
  hex: isHexColor,

  isHexColor3,
  isHex3: isHexColor3,
  hexColor3: isHexColor3,
  hex3: isHexColor3,

  isHexColor4,
  isHex4: isHexColor4,
  hexColor4: isHexColor4,
  hex4: isHexColor4,

  isHexColor6,
  isHex6: isHexColor6,
  hexColor6: isHexColor6,
  hex6: isHexColor6,

  isHexColor8,
  isHex8: isHexColor8,
  hexColor8: isHexColor8,
  hex8: isHexColor8,

  isHexAlphaColor,
  isHexa: isHexAlphaColor,
  hexAlphaColor: isHexAlphaColor,
  hexa: isHexAlphaColor,

  isHexAlphaColor4,
  isHexa4: isHexAlphaColor4,
  hexAlphaColor4: isHexAlphaColor4,
  hexa4: isHexAlphaColor4,

  isHexAlphaColor8,
  isHexa8: isHexAlphaColor8,
  hexAlphaColor8: isHexAlphaColor8,
  hexa8: isHexAlphaColor8,

  isColor,
  isCol: isColor,
  color: isColor,
  col: isColor,

  isComparable,
  Comparable: isComparable,
  comparable: isComparable,

  isDate,
  isTime: isDate,
  date: isDate,
  time: isDate,

  isRegExp,
  isRegex: isRegExp,
  regExp: isRegExp,
  regexp: isRegExp,
  regex: isRegExp,

  isTruthy,
  truthy: isTruthy,

  isFalsy,
  falsy: isFalsy,

  isDeepEqual,
  deepEqual: isDeepEqual,
  deepEq: isDeepEqual,

  isDeepDifferent,
  deepDifferent: isDeepDifferent,
  deepDiff: isDeepDifferent,

  deep: isDeepEqual,
}

// assign ln as properties of the getLength function
const ln = {
  eq: isLengthEqual,
  equal: isLengthEqual,
  greater: isLengthGreater,
  gt: isLengthGreater,
  bigger: isLengthGreater,
  lower: isLengthSmaller,
  smaller: isLengthSmaller,
  lt: isLengthSmaller,
}

const lenKeys = ['count', 'length', 'len', 'ln']
Object.entries(ln).forEach(([k, v]) =>
  lenKeys.forEach(key => is[key][k] = v)
)

is.deep.isDifferent = isDeepDifferent
is.deep.different = isDeepDifferent
is.deep.diff = isDeepDifferent

is.deep.isEqual = isDeepEqual
is.deep.equal = isDeepEqual
is.deep.eq = isDeepEqual

module.exports = is
