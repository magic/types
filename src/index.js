const t = {}

t.isArray = e =>
  t.isFunction(Array.isArray)
    ? Array.isArray(e)
    : t.isNumber(e.length)

t.isBoolean = e => typeof e === 'boolean'

t.isDefined = e => typeof e !== 'undefined'

t.isFunction = e => typeof e === 'function'

t.isNumber = e => e === +e

t.isInteger = e => (e === +e && e === (e | 0))

t.isFloat = e => e === +e

t.isObject = e => typeof e === 'object' && e !== null

t.isString = e => typeof e === 'string'

t.isRGBAObject = e =>
  t.isObject(e) &&
  t.isNumber(e.r) &&
  t.isNumber(e.g) &&
  t.isNumber(e.b) &&
  t.isNumber(e.a)

t.isRGBObject = e =>
  t.isObject(e) &&
  t.isNumber(e.r) &&
  t.isNumber(e.g) &&
  t.isNumber(e.b)

t.isHexColor = e =>
  /\#\b([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

t.isHexAlphaColor = e =>
  /\#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

t.isColor = e =>
  t.isRGBAObject(e) ||
  t.isRGBObject(e) ||
  t.isHexColor(e) ||
  t.isHexAlphaColor(e)

t.isDate = e => e instanceof Date

t.isRegExp = e => e instanceof RegExp

t.isTruthy = e => !!e

t.isFalsy = e => !e || t.isEmpty(e)

t.isEmpty = e => {
  if (t.isError(e)) {
    return false
  }

  if (t.isDate(e)) {
    return false
  }

  if (t.isRegExp(e)) {
    return false
  }

  const empty = !e
    || !t.isDefined(e)
    || t.isObject(e) && Object.keys(e).length === 0

  return empty
}

t.isError = e => e instanceof Error

t.isIterable = e => t.isDefined(e) && !t.isNull(e) && t.isFunction(e.forEach)

t.isEmail = e => typeof e === 'string' && e.indexOf('@') > -1

t.isNull = e => e === null

t.isUndefinedOrNull = value => value === null || !t.isDefined(value)

t.isBuffer = x => {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false
  }

  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false
  }

  if (x.length > 0 && typeof x[0] !== 'number') {
    return false
  }

  return true
}

t.isThenable = e => e && t.isFunction(e.then)

t.isArguments = e => Object.prototype.toString.call(e) == '[object Arguments]'

t.test = (e, type, ...addTypes) => (
  t.isString(type) && t.isEmpty(addTypes)
    // only one type arg to check
    ? Object.prototype.toString(e) === t || typeof e === t
    // multiple type args, some loops and tests each single string / subarray
    : addTypes.concat(type).some(tt => t.test(e, tt))
)

t.is = (e, ...types) => t.test(e, types)

t.not = (e, ...types) => !t.test(e, types)

module.exports = t
