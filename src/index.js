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

t.isRGBAObject = t.rgbaObject = t.rgba = e =>
  t.isObject(e) &&
  t.isNumber(e.r) &&
  t.isNumber(e.g) &&
  t.isNumber(e.b) &&
  t.isNumber(e.a)

t.isRGBObject = t.rgbObject = t.rgb = e =>
  t.isObject(e) && t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b)

t.isHexColor = t.hexColor = t.hex = e =>
  /#\b([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})\b/i.test(e)

t.isHexColor3 = t.isHex3 = t.hexColor3 = t.hex3 = e =>
  /#\b([a-f0-9]{3})\b/i.test(e)
t.isHexColor4 = t.isHex4 = t.hexColor4 = t.hex4 = e =>
  /#\b([a-f0-9]{4})\b/i.test(e)

t.isHexColor6 = t.isHex6 = t.hexColor6 = t.hex6 = e =>
  /#\b([a-f0-9]{6})\b/i.test(e)
t.isHexColor8 = t.isHex8 = t.hexColor8 = t.hex8 = e =>
  /#\b([a-f0-9]{8})\b/i.test(e)

t.isHexAlphaColor = t.hexAlphaColor = t.hexa = e =>
  /#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

t.isHexAlphaColor4 = t.isHexa4 = t.hexa4 = e => /#\b([a-f0-9]{4})\b/i.test(e)
t.isHexAlphaColor8 = t.isHexa8 = t.hexa8 = e => /#\b([a-f0-9]{8})\b/i.test(e)

t.isColor = t.color = e =>
  t.isRGBAObject(e) ||
  t.isRGBObject(e) ||
  t.isHexColor(e) ||
  t.isHexAlphaColor(e)

t.isDate = t.date = e => e instanceof Date

t.isRegExp = t.regExp = t.regexp = e => e instanceof RegExp

t.isTruthy = t.truthy = e => !!e

t.isFalsy = t.falsy = e => !e || t.isEmpty(e)

t.isEmpty = t.empty = e => {
  if (t.error(e)) {
    return false
  }

  if (t.date(e)) {
    return false
  }

  if (t.regexp(e)) {
    return false
  }

  if (!e || !t.defined(e)) {
    return true
  }

  if (t.object(e) && Object.keys(e).length === 0) {
    return true
  }

  return false
}

t.isError = t.error = e => e instanceof Error

t.isIterable = t.iterable = e =>
  t.defined(e) && !t.null(e) && t.function(e.forEach)

t.isEmail = t.email = t.mail = e => typeof e === 'string' && e.indexOf('@') > -1

t.isNull = t.null = t.nil = e => e === null

t.isUndefinedOrNull = t.undefinedOrNull = t.undefined = e =>
  e === null || !t.defined(e)

t.isBuffer = t.buffer = e => {
  if (!e || !t.object(e) || t.empty(e)) {
    return false
  }

  if (!t.function(e.copy) || !t.function(e.slice)) {
    return false
  }

  if (!t.number(e[0])) {
    return false
  }

  return true
}

t.isThenable = t.thenable = e => e && t.function(e.then)

t.isArguments = t.arguments = e =>
  Object.prototype.toString.call(e) === '[object Arguments]'

t.isUUID = t.uuid = e => {
  if (!t.defined(e)) {
    return false
  }

  if (!t.string(e)) {
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

t.test = t.types = (e, ...types) => types.some(k => t.testType(e, k))

t.isEq = t.eq = t.is = (e, ...types) => t.test(e, ...types)

t.isNot = t.not = t.isNeq = t.neq = (e, ...types) => !t.test(e, ...types)

module.exports = t
