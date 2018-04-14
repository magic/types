const t = {}

t.isArray = e => Array.isArray(e)

t.isBoolean = e => typeof e === 'boolean'

t.isDefined = e => typeof e !== 'undefined'

t.isFunction = e => typeof e === 'function'

t.isNumber = e => e === +e

t.isInteger = e => e === +e && e === (e | 0)

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
  t.isObject(e) && t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b)

t.isHexColor = e =>
  /#\b([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})\b/i.test(e)

t.isHexAlphaColor = e => /#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

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

  if (!e || !t.isDefined(e)) {
    return true
  }

  if (t.isObject(e) && Object.keys(e).length === 0) {
    return true
  }

  return false
}

t.isError = e => e instanceof Error

t.isIterable = e => t.isDefined(e) && !t.isNull(e) && t.isFunction(e.forEach)

t.isEmail = e => typeof e === 'string' && e.indexOf('@') > -1

t.isNull = e => e === null

t.isUndefinedOrNull = e => e === null || !t.isDefined(e)

t.isBuffer = e => {
  if (!e || !t.isObject(e) || t.isEmpty(e)) {
    return false
  }

  if (!t.isFunction(e.copy) || !t.isFunction(e.slice)) {
    return false
  }

  if (!t.isNumber(e[0])) {
    return false
  }

  return true
}

t.isThenable = e => e && t.isFunction(e.then)

t.isArguments = e => Object.prototype.toString.call(e) === '[object Arguments]'

t.isUUID = e => {
  if (!t.isDefined(e)) {
    return false
  }

  if (!t.isString(e)) {
    return false
  }

  const split = e.split('-')
  if (split.length !== 5) {
    return false
  }

  const lengths = [8, 4, 4, 4, 12]
  if (lengths.some((l, i) => split[i].length !== l)) {
    return false
  }

  if (Object.values(e).some(s => s > 'f' || s < 0)) {
    return false
  }

  return true
}

t.testType = (e, type) =>
  Object.prototype.toString(e) === type || typeof e === type

t.test = (e, ...types) => types.some(k => t.testType(e, k))

t.is = (e, ...types) => t.test(e, ...types)

t.not = (e, ...types) => !t.test(e, ...types)

module.exports = t
