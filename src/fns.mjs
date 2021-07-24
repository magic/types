export const isArray = e => Array.isArray(e)

export const isBoolean = e => typeof e === 'boolean'

export const isDefined = e => typeof e !== 'undefined'

export const isUndefined = e => !isDefined(e)

export const isFunction = e => typeof e === 'function'

export const isAsyncFunction = e => Object.prototype.toString.call(e) === '[object AsyncFunction]'

export const isGeneratorFunction = e =>
  Object.prototype.toString.call(e) === '[object GeneratorFunction]'

export const isNumber = e => typeof e !== 'object' && e === +e

export const isInteger = e => e === +e && e === (e | 0)

export const isFloat = e => e === +e

export const isObject = e => typeof e === 'object' && !isNull(e)

export const isObjectNative = e => Object.prototype.toString.call(e) === '[object Object]'

export const isMergeableObject = e => isObject(e) && !isDate(e) && !isRegExp(e)
export const isMergeable = isMergeableObject

export const isString = e => typeof e === 'string'

export const isRGBValue = e => ![e.r, e.g, e.b].some(n => !isNumber(n))
export const isRGBAValue = e => ![e.r, e.g, e.b, e.a].some(n => !isNumber(n))

export const isRGBAObject = e => isObject(e) && isRGBAValue(e)

export const isRGBObject = e => isObject(e) && isRGBValue(e)

export const hexRegex = /#\b([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})\b/i
export const isHexColor = e => hexRegex.test(e)

export const isHexColor3 = e => /#\b([a-f0-9]{3})\b/i.test(e)

export const isHexColor4 = e => /#\b([a-f0-9]{4})\b/i.test(e)

export const isHexColor6 = e => /#\b([a-f0-9]{6})\b/i.test(e)

export const isHexColor8 = e => /#\b([a-f0-9]{8})\b/i.test(e)

export const isHexAlphaColor = e => /#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

export const isHexAlphaColor4 = e => /#\b([a-f0-9]{4})\b/i.test(e)

export const isHexAlphaColor8 = e => /#\b([a-f0-9]{8})\b/i.test(e)

export const isColor = e => isRGBAObject(e) || isRGBObject(e) || isHexColor(e) || isHexAlphaColor(e)

export const isTruthy = e => !!e

export const isFalsy = e => !e || isEmpty(e)

export const isEmpty = e => {
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

export const getLength = arg => {
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

export const compareCount = (len, e) => getLength(len) === getLength(e)
export const isLengthEqual = (a, b) => (isDefined(b) ? compareCount(a, b) : b => compareCount(a, b))

export const isLengthGreater = (a, b) =>
  isDefined(b) ? getLength(a) > getLength(b) : c => isLengthGreater(a, c)

export const isLengthGreaterOrEqual = (a, b) =>
  isDefined(b) ? getLength(a) >= getLength(b) : c => isLengthGreaterOrEqual(a, c)

export const isLengthSmaller = (a, b) =>
  isDefined(b) ? getLength(a) < getLength(b) : c => isLengthSmaller(a, c)

export const isLengthSmallerOrEqual = (a, b) =>
  isDefined(b) ? getLength(a) <= getLength(b) : c => isLengthSmallerOrEqual(a, c)

export const isIterable = e => isDefined(e) && !isNull(e) && isFunction(e.forEach)

export const isEmail = e => isString(e) && e.indexOf('@') > -1

export const isNull = e => e === null

export const isUndefinedOrNull = e => e === null || !isDefined(e)

export const isBuffer = e => {
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

export const isPromise = e => e && isFunction(e.then)
export const isThenable = isPromise

export const isArguments = e => Object.prototype.toString.call(e) === '[object Arguments]'

export const isUUID = e => {
  if (!isDefined(e)) {
    return false
  }

  if (!isString(e)) {
    return false
  }

  const split = e.split('-')
  if (!isLengthEqual(split, 5)) {
    return false
  }

  const lengths = [8, 4, 4, 4, 12]
  if (lengths.some((l, i) => split[i].length !== l)) {
    return false
  }

  // hex strings end with 'f'
  if (Object.values(e).some(s => s > 'f' || s < 0)) {
    return false
  }

  return true
}

export const isType = (e, type) => typeof e === type || Object.prototype.toString(e) === type

export const isTypes = (e, ...types) => types.some(k => isType(e, k))

export const isEqual = (e, ...types) => isTypes(e, ...types)

export const isNot = (e, ...types) => !isTypes(e, ...types)

export const isComparable = a => isBoolean(a) || isString(a) || isNumber(a)

const isElementCheck = (e, t) => (isFunction(t) ? t(e) : typeof e === t)

export const isEvery = (arr, t) =>
  !isArray(arr) ? isElementCheck(arr, t) : arr.every(e => isElementCheck(e, t))

export const isSome = (arr, t) =>
  !isArray(arr) ? isElementCheck(arr, t) : arr.some(e => isElementCheck(e, t))

export const isNone = (arr, t) => !isSome(arr, t)

export const isInstanceOf = (e, t) => e instanceof t

export const isError = e => isInstanceOf(e, Error)
export const isDate = e => isInstanceOf(e, Date)
export const isRegExp = e => isInstanceOf(e, RegExp)
export const isMap = a => isInstanceOf(a, Map)
export const isSet = a => isInstanceOf(a, Set)
export const isWeakMap = a => isInstanceOf(a, WeakMap)
export const isWeakSet = a => isInstanceOf(a, WeakSet)

export const isUpperCase = s => (isString(s) ? s === s.toUpperCase() : false)
export const isLowerCase = s => (isString(s) ? s === s.toLowerCase() : false)

export const isCase = (s, c = 'up') => (c === 'up' ? isUpperCase(s) : isLowerCase(s))

isCase.upper = isUpperCase
isCase.lower = isLowerCase
