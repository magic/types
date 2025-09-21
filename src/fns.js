/** @type {(e: unknown) => e is unknown[]} */
export const isArray = e => Array.isArray(e)

/** @type {(e: unknown) => e is boolean} */
export const isBoolean = e => typeof e === 'boolean'

/** @type {(e: unknown) => e is NonNullable<unknown>} */
export const isDefined = e => typeof e !== 'undefined'

/** @type {(e: unknown) => e is undefined} */
export const isUndefined = e => !isDefined(e)

/** @type {(e: unknown) => e is Function} */
export const isFunction = e => typeof e === 'function'

/** @type {(e: unknown) => e is (...args: unknown[]) => Promise<unknown>} */
export const isAsyncFunction = e => Object.prototype.toString.call(e) === '[object AsyncFunction]'

/** @type {(e: unknown) => e is GeneratorFunction} */
export const isGeneratorFunction = e =>
  Object.prototype.toString.call(e) === '[object GeneratorFunction]'

/** @type {(e: unknown) => e is number} */
export const isNumber = e => !isObject(e) && !isNull(e) && !isUndefined(e) && e === +e

/** @type {(e: unknown) => e is number} */
export const isInteger = e => isNumber(e) && e === (e | 0)

/** @type {(e: unknown) => e is number} */
export const isFloat = e => isNumber(e)

/** @type {(e: unknown) => e is object} */
export const isObject = e => typeof e === 'object' && !isNull(e)

/** @type {(e: unknown) => e is Record<string, unknown>} */
export const isObjectNative = e => Object.prototype.toString.call(e) === '[object Object]'

/** @type {(e: unknown) => e is Record<string, unknown>} */
export const isMergeableObject = e => isObject(e) && !isDate(e) && !isRegExp(e)
/** @type {(e: unknown) => e is Record<string, unknown>} */
export const isMergeable = isMergeableObject

/** @type {(e: unknown) => e is string} */
export const isString = e => typeof e === 'string'

/** @type {(e: unknown) => boolean} */
export const isRGBValue = e => isObjectNative(e) && [e.r, e.g, e.b].every(n => isNumber(n))

/** @type {(e: unknown) => boolean} */
export const isRGBAValue = e => isObjectNative(e) && [e.r, e.g, e.b, e.a].every(n => isNumber(n))

/** @type {(e: unknown) => boolean} */
export const isRGBAObject = e => isObject(e) && isRGBAValue(e)

/** @type {(e: unknown) => boolean} */
export const isRGBObject = e => isObject(e) && isRGBValue(e)

export const hexRegex = /#\b([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})\b/i

/** @type {(e: unknown) => boolean} */
export const isHexColor = e => isString(e) && hexRegex.test(e)
/** @type {(e: unknown) => boolean} */
export const isHexColor3 = e => isString(e) && /#\b([a-f0-9]{3})\b/i.test(e)
/** @type {(e: unknown) => boolean} */
export const isHexColor4 = e => isString(e) && /#\b([a-f0-9]{4})\b/i.test(e)
/** @type {(e: unknown) => boolean} */
export const isHexColor6 = e => isString(e) && /#\b([a-f0-9]{6})\b/i.test(e)
/** @type {(e: unknown) => boolean} */
export const isHexColor8 = e => isString(e) && /#\b([a-f0-9]{8})\b/i.test(e)
/** @type {(e: unknown) => boolean} */
export const isHexAlphaColor = e => isString(e) && /#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)
/** @type {(e: unknown) => boolean} */
export const isHexAlphaColor4 = e => isString(e) && /#\b([a-f0-9]{4})\b/i.test(e)
/** @type {(e: unknown) => boolean} */
export const isHexAlphaColor8 = e => isString(e) && /#\b([a-f0-9]{8})\b/i.test(e)

/** @type {(e: unknown) => boolean} */
export const isColor = e => isRGBAObject(e) || isRGBObject(e) || isHexColor(e) || isHexAlphaColor(e)

/** @type {(e: unknown) => boolean} */
export const isTruthy = e => !!e

/** @type {(e: unknown) => boolean} */
export const isFalsy = e => !e || isEmpty(e)

/**
 * Get the length/size of a value
 * @param {unknown} arg
 * @returns {number} - length, size, integer value, or -1 if unknown
 */
export const getLength = arg => {
  if (Array.isArray(arg) || typeof arg === 'string' || isBuffer(arg)) {
    return arg.length
  }
  if (isInteger(arg)) {
    return arg
  }
  if (arg instanceof Map || arg instanceof Set) {
    return arg.size
  }
  if (arg instanceof RegExp) {
    const str = arg.toString()
    return str === '/(?:)/' ? 0 : str.length - 2 // length of pattern without slashes
  }
  if (isObjectNative(arg)) {
    return Object.keys(arg).length
  }
  return -1
}

/**
 * Check if length of `a` is smaller or equal to `b`, or return a curried function
 * @param {unknown} len
 * @param {unknown} e
 * @returns {boolean}
 */
export const compareCount = (len, e) => getLength(len) === getLength(e)

/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
/**
 * Check if length of `a` is smaller or equal to `b`, or return a curried function
 * @param {unknown} a
 * @param {unknown} [b]
 * @returns {boolean | ((c: unknown) => boolean)}
 */
export const isLengthEqual = (a, b) => (isDefined(b) ? compareCount(a, b) : b => compareCount(a, b))

/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
/**
 * Check if length of `a` is smaller or equal to `b`, or return a curried function
 * @param {unknown} a
 * @param {unknown} [b]
 * @returns {boolean | ((c: unknown) => boolean)}
 */
export const isLengthGreater = (a, b) =>
  isDefined(b) ? getLength(a) > getLength(b) : c => getLength(a) > getLength(c)

/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
/**
 * Check if length of `a` is smaller or equal to `b`, or return a curried function
 * @param {unknown} a
 * @param {unknown} [b]
 * @returns {boolean | ((c: unknown) => boolean)}
 */
export const isLengthGreaterOrEqual = (a, b) =>
  isDefined(b) ? getLength(a) >= getLength(b) : c => getLength(a) >= getLength(c)

/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
/**
 * Check if length of `a` is smaller or equal to `b`, or return a curried function
 * @param {unknown} a
 * @param {unknown} [b]
 * @returns {boolean | ((c: unknown) => boolean)}
 */
export const isLengthSmaller = (a, b) =>
  isDefined(b) ? getLength(a) < getLength(b) : c => getLength(a) < getLength(c)

/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
/**
 * Check if length of `a` is smaller or equal to `b`, or return a curried function
 * @param {unknown} a
 * @param {unknown} [b]
 * @returns {boolean | ((c: unknown) => boolean)}
 */
export const isLengthSmallerOrEqual = (a, b) =>
  isDefined(b) ? getLength(a) <= getLength(b) : c => getLength(a) <= getLength(c)

/** @type {(e: unknown) => boolean} */
export const isEmpty = e => {
  if (isError(e) || isDate(e)) {
    return false
  }
  if (isNull(e) || isUndefined(e)) {
    return true
  }
  if (isArray(e)) {
    return isLengthSmaller(e, 1)
  }
  if (isRegExp(e)) {
    return isLengthSmaller(e, 1)
  }
  if (isObject(e)) {
    return isLengthSmaller(e, 1)
  }

  return e === 0 || e === '' || !e
}

/**
 * Check if a value is iterable (Array-like with forEach or implements Symbol.iterator)
 * @param {unknown} e
 * @returns {e is Iterable<unknown>}
 */
export const isIterable = e =>
  isDefined(e) &&
  // array-like objects with forEach
  ((isObject(e) && e !== null && isFunction(/** @type {{ forEach?: unknown }} */ (e).forEach)) ||
    // general iterables
    (isObject(e) &&
      !isNull(e) &&
      isFunction(/** @type {{ [Symbol.iterator]?: unknown }} */ (e)[Symbol.iterator])))

/** @type {(e: unknown) => e is string} */
export const isEmail = e => isString(e) && e.indexOf('@') > -1

/** @type {(e: unknown) => e is null} */
export const isNull = e => e === null

/** @type {(e: unknown) => boolean} */
export const isUndefinedOrNull = e => isNull(e) || !isDefined(e)

/** @type {(e: unknown) => e is Buffer} */
export const isBuffer = e => Buffer.isBuffer(e)

/**
 * @param {unknown} e
 * @returns {e is Promise<unknown>}
 */
export const isPromise = e =>
  Object.prototype.toString.call(e) === '[object Promise]' ||
  (isObjectNative(e) && isFunction(e?.then))

/** @type {(e: unknown) => e is Promise<unknown>} */
export const isThenable = isPromise

/** @type {(e: unknown) => boolean} */
export const isArguments = e => Object.prototype.toString.call(e) === '[object Arguments]'

/** @type {(e: unknown) => boolean} */
export const isUUID = e => {
  if (!isDefined(e)) return false
  if (!isString(e)) return false

  const split = e.split('-')
  if (!isLengthEqual(split, 5)) return false

  const lengths = [8, 4, 4, 4, 12]
  if (lengths.some((l, i) => split[i].length !== l)) return false

  if (Object.values(e).some(s => s > 'f')) return false

  return true
}

/** @type {(e: unknown, type: string) => boolean} */
export const isType = (e, type) => typeof e === type || Object.prototype.toString.call(e) === type

/** @type {(e: unknown, ...types: string[]) => boolean} */
export const isTypes = (e, ...types) => types.some(k => isType(e, k))

/** @type {(e: unknown, ...types: string[]) => boolean} */
export const isEqual = (e, ...types) => isTypes(e, ...types)

/** @type {(e: unknown, ...types: string[]) => boolean} */
export const isNot = (e, ...types) => !isTypes(e, ...types)

/** @type {(a: unknown) => boolean} */
export const isComparable = a => isBoolean(a) || isString(a) || isNumber(a)

/** @type {(a: unknown, b: unknown) => boolean} */
export const isSameType = (a, b) => typeof a === typeof b

/**
 * Check if a value matches a type or passes a function check
 * @template T
 * @param {unknown} e - value to check
 * @param {((v: unknown) => boolean) | T} t - function to validate value or a typeof string
 * @returns {e is T}
 */
const isElementCheck = (e, t) => (isFunction(t) ? t(e) : typeof e === t)

/** @type {<T>(arr: T | T[], t: ((v: T) => boolean) | string) => boolean} */
export const isEvery = (arr, t) =>
  !isArray(arr) ? isElementCheck(arr, t) : arr.every(e => isElementCheck(e, t))

/** @type {<T>(arr: T | T[], t: ((v: T) => boolean) | string) => boolean} */
export const isSome = (arr, t) =>
  !isArray(arr) ? isElementCheck(arr, t) : arr.some(e => isElementCheck(e, t))

/** @type {<T>(arr: T | T[], t: ((v: T) => boolean) | string) => boolean} */
export const isNone = (arr, t) => !isSome(arr, t)

/** @type {(e: unknown, t: new (...args: any[]) => any) => boolean} */
export const isInstanceOf = (e, t) => (!t ? false : e instanceof t)

/** @type {(e: unknown) => e is Error} */
export const isError = e => isInstanceOf(e, Error)
/** @type {(e: unknown) => e is Date} */
export const isDate = e => isInstanceOf(e, Date)
/** @type {(e: unknown) => e is RegExp} */
export const isRegExp = e => isInstanceOf(e, RegExp)
/** @type {(a: unknown) => a is Map<unknown, unknown>} */
export const isMap = a => isInstanceOf(a, Map)
/** @type {(a: unknown) => a is Set<unknown>} */
export const isSet = a => isInstanceOf(a, Set)
/** @type {(a: unknown) => a is WeakMap<any, unknown>} */
export const isWeakMap = a => isInstanceOf(a, WeakMap)
/** @type {(a: unknown) => a is WeakSet<any>} */
export const isWeakSet = a => isInstanceOf(a, WeakSet)

/** @type {(s: unknown) => boolean} */
export const isUpperCase = s => (isString(s) ? s === s.toUpperCase() : false)
/** @type {(s: unknown) => boolean} */
export const isLowerCase = s => (isString(s) ? s === s.toLowerCase() : false)

/** @type {(o: unknown, k: string) => boolean} */
export const isOwnProp = (o, k) => isObjectNative(o) && k in o

/** @type {(o: unknown, k: string) => boolean} */
export const isOwnProperty = isOwnProp

/** @type {(s: unknown) => boolean} */
export const isModule = s => Object.prototype.toString.call(s) === '[object Module]'

/**
 * @type {((s: unknown, c?: 'up' | 'down') => boolean) & {
 *   upper: (s: unknown) => boolean,
 *   lower: (s: unknown) => boolean
 * }}
 */
export const isCase = (s, c = 'up') => (c === 'up' ? isUpperCase(s) : isLowerCase(s))
isCase.upper = isUpperCase
isCase.lower = isLowerCase
