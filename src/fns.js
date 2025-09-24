/**
 * Check if a value is an Array
 * @param {unknown} e - value to test
 * @returns {e is unknown[]} - true if value is an array
 */
export const isArray = e => Array.isArray(e)

/**
 * Check if a value is a boolean
 * @param {unknown} e - value to test
 * @returns {e is boolean}
 */
export const isBoolean = e => typeof e === 'boolean'

/**
 * Check if a value is defined (not undefined)
 * @param {unknown} e - value to test
 * @returns {e is NonNullable<unknown>}
 */
export const isDefined = e => typeof e !== 'undefined'

/**
 * Check if a value is undefined
 * @param {unknown} e - value to test
 * @returns {e is undefined}
 */
export const isUndefined = e => !isDefined(e)

/**
 * Check if a value is a function
 * @param {unknown} e - value to test
 * @returns {e is Function}
 */
export const isFunction = e => typeof e === 'function'

/**
 * Check if a value is an async function
 * @param {unknown} e - value to test
 * @returns {e is (...args: unknown[]) => Promise<unknown>}
 */
export const isAsyncFunction = e => Object.prototype.toString.call(e) === '[object AsyncFunction]'

/**
 * Check if a value is a generator function
 * @param {unknown} e - value to test
 * @returns {e is GeneratorFunction}
 */
export const isGeneratorFunction = e =>
  Object.prototype.toString.call(e) === '[object GeneratorFunction]'

/**
 * Check if a value is a number
 * @param {unknown} e - value to test
 * @returns {e is number}
 */
export const isNumber = e => !isObject(e) && !isNull(e) && !isUndefined(e) && e === +e

/**
 * Check if a value is an integer
 * @param {unknown} e - value to test
 * @returns {e is number}
 */
export const isInteger = e => isNumber(e) && e === (e | 0)

/**
 * Check if a value is a float (any number)
 * @param {unknown} e - value to test
 * @returns {e is number}
 */
export const isFloat = e => isNumber(e)

/**
 * Check if a value is an object (but not null)
 * @param {unknown} e - value to test
 * @returns {e is object}
 */
export const isObject = e => typeof e === 'object' && !isNull(e)

/**
 * Check if a value is a plain object (`{}`)
 * @param {unknown} e - value to test
 * @returns {e is Record<string, unknown>}
 */
export const isObjectNative = e => Object.prototype.toString.call(e) === '[object Object]'

/**
 * Check if a value is mergeable (plain object, not Date or RegExp)
 * @param {unknown} e - value to test
 * @returns {e is Record<string, unknown>}
 */
export const isMergeableObject = e => isObject(e) && !isDate(e) && !isRegExp(e)

/**
 * Alias for isMergeableObject
 * @type {(e: unknown) => e is Record<string, unknown>}
 */
export const isMergeable = isMergeableObject

/**
 * Check if a value is a string
 * @param {unknown} e - value to test
 * @returns {e is string}
 */
export const isString = e => typeof e === 'string'

/**
 * Check if a value is an RGB object {r,g,b}
 * @param {unknown} e - value to test
 * @returns {e is { r: number, g: number, b: number }}
 */
export const isRGBValue = e => isObjectNative(e) && [e.r, e.g, e.b].every(n => isNumber(n))
export const isRGBObject = isRGBValue

/**
 * Check if a value is an RGBA object {r,g,b,a}
 * @param {unknown} e - value to test
 * @returns {e is { r: number, g: number, b: number, a: number }}
 */
export const isRGBAValue = e => isObjectNative(e) && [e.r, e.g, e.b, e.a].every(n => isNumber(n))
export const isRGBAObject = isRGBAValue

export const hexRegex = /#\b([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})\b/i

/**
 * Check if a string is a valid hex color (#rgb, #rgba, #rrggbb, #rrggbbaa)
 * @param {unknown} e - value to test
 * @returns {boolean}
 */
export const isHexColor = e => isString(e) && hexRegex.test(e)

/**
 * Check if a string is a 3-digit hex color
 * @param {unknown} e
 * @returns {boolean}
 */
export const isHexColor3 = e => isString(e) && /#\b([a-f0-9]{3})\b/i.test(e)

/**
 * Check if a string is a 4-digit hex color (#rgba)
 * @param {unknown} e
 * @returns {boolean}
 */
export const isHexColor4 = e => isString(e) && /#\b([a-f0-9]{4})\b/i.test(e)

/**
 * Check if a string is a 6-digit hex color (#rrggbb)
 * @param {unknown} e
 * @returns {boolean}
 */
export const isHexColor6 = e => isString(e) && /#\b([a-f0-9]{6})\b/i.test(e)

/**
 * Check if a string is an 8-digit hex color (#rrggbbaa)
 * @param {unknown} e
 * @returns {boolean}
 */
export const isHexColor8 = e => isString(e) && /#\b([a-f0-9]{8})\b/i.test(e)

/**
 * Check if a string is an alpha hex color (#rgba or #rrggbbaa)
 * @param {unknown} e
 * @returns {boolean}
 */
export const isHexAlphaColor = e => isString(e) && /#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

/**
 * Check if a string is a 4-digit alpha hex color (#rgba)
 * @param {unknown} e
 * @returns {boolean}
 */
export const isHexAlphaColor4 = e => isString(e) && /#\b([a-f0-9]{4})\b/i.test(e)

/**
 * Check if a string is an 8-digit alpha hex color (#rrggbbaa)
 * @param {unknown} e
 * @returns {boolean}
 */
export const isHexAlphaColor8 = e => isString(e) && /#\b([a-f0-9]{8})\b/i.test(e)

/**
 * Check if a value is a color (RGB, RGBA, or hex)
 * @param {unknown} e
 * @returns {boolean}
 */
export const isColor = e => isRGBAObject(e) || isRGBObject(e) || isHexColor(e) || isHexAlphaColor(e)

/**
 * Check if a value is truthy
 * @param {unknown} e
 * @returns {boolean}
 */
export const isTruthy = e => !!e

/**
 * Check if a value is falsy or empty
 * @param {unknown} e
 * @returns {boolean}
 */
export const isFalsy = e => !e || isEmpty(e)

/**
 * Get the length/size of a value
 * - Arrays, strings, buffers → `.length`
 * - Numbers → numeric value
 * - Maps, Sets → `.size`
 * - RegExp → pattern length
 * - Objects → number of keys
 * @param {unknown} arg
 * @returns {number} - length/size or -1 if unknown
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
 * Compare two values by their length/size
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
 * Check if length of `a` equals `b` (or return curried fn)
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
 * Check if length of `a` > `b` (or return curried fn)
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
 * Check if length of `a` >= `b` (or return curried fn)
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
 * Check if length of `a` < `b` (or return curried fn)
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
 * Check if length of `a` <= `b` (or return curried fn)
 * @param {unknown} a
 * @param {unknown} [b]
 * @returns {boolean | ((c: unknown) => boolean)}
 */
export const isLengthSmallerOrEqual = (a, b) =>
  isDefined(b) ? getLength(a) <= getLength(b) : c => getLength(a) <= getLength(c)

/**
 * Check if a value is empty
 * - null/undefined → true
 * - arrays, objects, regex → empty if size < 1
 * - errors/dates → never empty
 * - numbers, strings → falsy or 0/""
 * @param {unknown} e
 * @returns {boolean}
 */
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
  ((isObject(e) && e !== null && isFunction(/** @type {{ forEach?: unknown }} */ (e).forEach)) ||
    (isObject(e) &&
      !isNull(e) &&
      isFunction(/** @type {{ [Symbol.iterator]?: unknown }} */ (e)[Symbol.iterator])))

/**
 * Check if a string contains an `@` (naive email test)
 * @param {unknown} e
 * @returns {e is string}
 */
export const isEmail = e => isString(e) && e.indexOf('@') > -1

/**
 * Check if a value is null
 * @param {unknown} e
 * @returns {e is null}
 */
export const isNull = e => e === null

/**
 * Check if a value is undefined or null
 * @param {unknown} e
 * @returns {e is null | undefined}
 */
export const isUndefinedOrNull = e => isNull(e) || !isDefined(e)

/**
 * Check if a value is a Node.js Buffer
 * @param {unknown} e
 * @returns {e is Buffer}
 */
export const isBuffer = e => Buffer.isBuffer(e)

/**
 * Check if a value is a Promise
 * @param {unknown} e
 * @returns {e is Promise<unknown>}
 */
export const isPromise = e =>
  Object.prototype.toString.call(e) === '[object Promise]' ||
  (isObjectNative(e) && isFunction(e?.then))

/**
 * Alias for isPromise
 * @type {(e: unknown) => e is Promise<unknown>}
 */
export const isThenable = isPromise

/**
 * Check if a value is the special `arguments` object
 * @param {unknown} e
 * @returns {e is IArguments}
 */
export const isArguments = e => Object.prototype.toString.call(e) === '[object Arguments]'

/**
 * Check if a string looks like a UUID v4 (basic structural test)
 * @param {unknown} e
 * @returns {boolean}
 */
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

/**
 * Check if a value matches one of the given JS types
 * @param {unknown} e
 * @param {...string} types - typeof strings (e.g. "string", "number")
 * @returns {boolean}
 */
export const isType = (e, ...types) =>
  types.some(type => typeof e === type || Object.prototype.toString.call(e) === type)

export const isTypes = isType

/**
 * Negation of isTypes
 * @param {unknown} e
 * @param {...string} types
 * @returns {boolean}
 */
export const isNot = (e, ...types) => !isType(e, ...types)

/**
 * Check if two values have the same type
 * @param {unknown} a - first value to compare
 * @param {unknown} b - second value to compare
 * @returns {boolean} - true if both values are of the same type
 */
export const isSameType = (a, b) => typeof a === typeof b

/**
 * Check if a value matches a type or passes a function check
 * @template T
 * @param {unknown} e - value to check
 * @param {((v: unknown) => boolean) | T} t - function to validate value or a typeof string
 * @returns {e is T} - true if value matches the type or passes the function check
 */
const isElementCheck = (e, t) => (isFunction(t) ? t(e) : typeof e === t)

/**
 * Check if a value is a string, number or a boolean
 * @param {unknown} a
 * @returns {a is string | number | boolean}
 */
export const isComparable = a => isBoolean(a) || isString(a) || isNumber(a)

/**
 * Check if every element of an array matches a predicate
 * @template T
 * @param {T | T[]} arr - value or array of values to check
 * @param {((v: T) => boolean) | string} t - function or typeof string to validate elements
 * @returns {boolean} - true if all elements match the predicate
 */
export const isEvery = (arr, t) =>
  !isArray(arr) ? isElementCheck(arr, t) : arr.every(e => isElementCheck(e, t))

/**
 * Check if some elements of an array match a predicate
 * @template T
 * @param {T | T[]} arr - value or array of values to check
 * @param {((v: T) => boolean) | string} t - function or typeof string to validate elements
 * @returns {boolean} - true if at least one element matches the predicate
 */
export const isSome = (arr, t) =>
  !isArray(arr) ? isElementCheck(arr, t) : arr.some(e => isElementCheck(e, t))

/**
 * Check if no elements of an array match a predicate
 * @template T
 * @param {T | T[]} arr - value or array of values to check
 * @param {((v: T) => boolean) | string} t - function or typeof string to validate elements
 * @returns {boolean} - true if no elements match the predicate
 */
export const isNone = (arr, t) => !isSome(arr, t)

/**
 * Check if a value is an instance of a given constructor
 * @param {unknown} e - value to check
 * @param {new (...args: any[]) => any} t - constructor function
 * @returns {boolean} - true if value is an instance of constructor
 */
export const isInstanceOf = (e, t) => (!t ? false : e instanceof t)

/**
 * Check if a value is an Error
 * @param {unknown} e - value to check
 * @returns {e is Error} - true if value is an Error
 */
export const isError = e => isInstanceOf(e, Error)

/**
 * Check if a value is a Date
 * @param {unknown} e - value to check
 * @returns {e is Date} - true if value is a Date
 */
export const isDate = e => isInstanceOf(e, Date)

/**
 * Check if a value is a RegExp
 * @param {unknown} e - value to check
 * @returns {e is RegExp} - true if value is a RegExp
 */
export const isRegExp = e => isInstanceOf(e, RegExp)

/**
 * Check if a value is a Map
 * @param {unknown} a - value to check
 * @returns {a is Map<unknown, unknown>} - true if value is a Map
 */
export const isMap = a => isInstanceOf(a, Map)

/**
 * Check if a value is a Set
 * @param {unknown} a - value to check
 * @returns {a is Set<unknown>} - true if value is a Set
 */
export const isSet = a => isInstanceOf(a, Set)

/**
 * Check if a value is a WeakMap
 * @param {unknown} a - value to check
 * @returns {a is WeakMap<any, unknown>} - true if value is a WeakMap
 */
export const isWeakMap = a => isInstanceOf(a, WeakMap)

/**
 * Check if a value is a WeakSet
 * @param {unknown} a - value to check
 * @returns {a is WeakSet<any>} - true if value is a WeakSet
 */
export const isWeakSet = a => isInstanceOf(a, WeakSet)

/**
 * Check if a string is upper case
 * @param {unknown} s - value to check
 * @returns {s is string} - true if string is all upper case
 */
export const isUpperCase = s => (isString(s) ? s === s.toUpperCase() : false)

/**
 * Check if a string is lower case
 * @param {unknown} s - value to check
 * @returns {s is string} - true if string is all lower case
 */
export const isLowerCase = s => (isString(s) ? s === s.toLowerCase() : false)

/**
 * Check if an object has an own property key
 * @template {string | number | symbol} K
 * @param {unknown} o - object to check
 * @param {K} k - key to check
 * @returns {o is Record<K, unknown>} - true if object has own property key
 */
export const isOwnProp = (o, k) => isObjectNative(o) && k in o

/**
 * Check if an object has an own property key (alias of isOwnProp)
 * @param {unknown} o - object to check
 * @param {string} k - key to check
 * @returns {boolean} - true if object has own property key
 */
export const isOwnProperty = isOwnProp

/**
 * Check if a value is a Module-like object
 * @param {unknown} s - value to check
 * @returns {s is object & { [Symbol.toStringTag]: 'Module' }} - true if value is a Module-like object
 */
export const isModule = s => Object.prototype.toString.call(s) === '[object Module]'

/**
 * Check if a string is upper or lower case depending on mode
 * @type {((s: unknown, c?: 'up' | 'down') => boolean) & {
 *   upper: (s: unknown) => boolean,
 *   lower: (s: unknown) => boolean
 * }}
 */
export const isCase = (s, c = 'up') => (c === 'up' ? isUpperCase(s) : isLowerCase(s))
isCase.upper = isUpperCase
isCase.lower = isLowerCase
