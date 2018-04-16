const t = {}

t.isArray = t.array = e => Array.isArray(e)

t.isBoolean = t.boolean = e => typeof e === 'boolean'

t.isDefined = t.defined = e => typeof e !== 'undefined'

t.isFunction = t.function = e => typeof e === 'function'

t.isNumber = t.number = e => e === +e

t.isInteger = t.integer = e => e === +e && e === (e | 0)

t.isFloat = t.float = e => e === +e

t.isObject = t.object = e => typeof e === 'object' && e !== null

t.isString = t.string = e => typeof e === 'string'

t.isRGBAObject = t.rgbaObject = e =>
  t.isObject(e) &&
  t.isNumber(e.r) &&
  t.isNumber(e.g) &&
  t.isNumber(e.b) &&
  t.isNumber(e.a)

t.isRGBObject = t.rgbObject = e =>
  t.isObject(e) && t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b)

t.isHexColor = t.hexColor = e =>
  /#\b([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})\b/i.test(e)

t.isHexAlphaColor = t.hexAlphaColor = e =>
  /#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

t.isColor = t.color = e =>
  t.isRGBAObject(e) ||
  t.isRGBObject(e) ||
  t.isHexColor(e) ||
  t.isHexAlphaColor(e)

t.isDate = t.date = e => e instanceof Date

t.isRegExp = t.RegExp = e => e instanceof RegExp

t.isTruthy = t.truthy = e => !!e

t.isFalsy = t.falsy = e => !e || t.isEmpty(e)

t.isEmpty = t.empty = e => {
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

t.isError = t.error = e => e instanceof Error

t.isIterable = t.iterable = e =>
  t.isDefined(e) && !t.isNull(e) && t.isFunction(e.forEach)

t.isEmail = t.email = e => typeof e === 'string' && e.indexOf('@') > -1

t.isNull = t.null = e => e === null

t.isUndefinedOrNull = t.undefinedOrNull = e => e === null || !t.isDefined(e)

t.isBuffer = t.buffer = e => {
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

t.isThenable = t.thenable = e => e && t.isFunction(e.then)

t.isArguments = t.arguments = e =>
  Object.prototype.toString.call(e) === '[object Arguments]'

t.isUUID = t.uuid = e => {
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

t.testType = t.type = (e, type) =>
  Object.prototype.toString(e) === type || typeof e === type

t.test = t.types = (e, ...types) => types.some(k => t.testType(e, k))

t.isEq = t.eq = t.is = (e, ...types) => t.test(e, ...types)

t.isNot = t.not = t.isNeq = t.neq = (e, ...types) => !t.test(e, ...types)

module.exports = t
