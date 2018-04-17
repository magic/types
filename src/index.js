const t = {}

t.isArray = t.isArr = t.array = t.arr = e => Array.isArray(e)

t.isBoolean = t.isBool = t.boolean = t.bool = e => typeof e === 'boolean'

t.isDefined = t.isDef = t.defined = t.def = e => typeof e !== 'undefined'

t.isUndefined = t.isUndef = t.undefined = t.undef = e => !t.def(e)

t.isFunction = t.isFunc = t.isFn = t.function = t.func = t.fn = e =>
  typeof e === 'function'

t.isNumber = t.isNum = t.number = t.num = e => e === +e

t.isInteger = t.isInt = t.integer = t.int = e => e === +e && e === (e | 0)

t.isFloat = t.float = e => e === +e

t.isObject = t.isObj = t.object = t.obj = e =>
  typeof e === 'object' && !t.nil(e)

t.isString = t.isStr = t.string = t.str = e => typeof e === 'string'

t.isRGBAObject = t.isRGBA = t.rgbaObject = t.rgba = e =>
  t.obj(e) &&
  t.num(e.r) &&
  t.num(e.g) &&
  t.num(e.b) &&
  t.num(e.a)

t.isRGBObject = t.isRGB = t.rgbObject = t.rgb = e =>
  t.obj(e) && t.num(e.r) && t.num(e.g) && t.num(e.b)

t.isHexColor = t.isHex = t.hexColor = t.hex = e =>
  /#\b([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})\b/i.test(e)

t.isHexColor3 = t.isHex3 = t.hexColor3 = t.hex3 = e =>
  /#\b([a-f0-9]{3})\b/i.test(e)

t.isHexColor4 = t.isHex4 = t.hexColor4 = t.hex4 = e =>
  /#\b([a-f0-9]{4})\b/i.test(e)

t.isHexColor6 = t.isHex6 = t.hexColor6 = t.hex6 = e =>
  /#\b([a-f0-9]{6})\b/i.test(e)

t.isHexColor8 = t.isHex8 = t.hexColor8 = t.hex8 = e =>
  /#\b([a-f0-9]{8})\b/i.test(e)

t.isHexAlphaColor = t.isHexa = t.hexAlphaColor = t.hexa = e =>
  /#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

t.isHexAlphaColor4 = t.isHexa4 = t.hexAlphaColor4 = t.hexa4 = e =>
  /#\b([a-f0-9]{4})\b/i.test(e)
t.isHexAlphaColor8 = t.isHexa8 = t.hexAlphaColor8 = t.hexa8 = e =>
  /#\b([a-f0-9]{8})\b/i.test(e)

t.isColor = t.isCol = t.color = t.col = e =>
  t.rgba(e) ||
  t.rgb(e) ||
  t.hex(e) ||
  t.hexa(e)

t.isDate = t.isTime = t.date = t.time = e => e instanceof Date

t.isRegExp = t.isRegex = t.regExp = t.regexp = t.regex = e =>
  e instanceof RegExp

t.isTruthy = t.truthy = e => !!e

t.isFalsy = t.falsy = e => !e || t.empty(e)

t.isEmpty = t.empty = e => {
  if (t.error(e)) {
    return false
  }

  if (t.date(e)) {
    return false
  }

  if (t.regex(e)) {
    return false
  }

  if (!e || !t.def(e)) {
    return true
  }

  if (t.obj(e) && Object.keys(e).length === 0) {
    return true
  }

  return false
}

t.isError = t.error = t.err = e => e instanceof Error

t.isIterable = t.isIter = t.iterable = t.iter = e =>
  t.def(e) && !t.nil(e) && t.fn(e.forEach)

t.isEmail = t.isMail = t.email = t.mail = e => t.str(e) && e.indexOf('@') > -1

t.isNull = t.isNil = t.null = t.nil = e => e === null

t.isUndefinedOrNull = t.undefinedOrNull = e => e === null || !t.def(e)

t.isBuffer = t.buffer = t.buff = e => {
  if (!e || !t.obj(e) || t.empty(e)) {
    return false
  }

  if (!t.fn(e.copy) || !t.fn(e.slice)) {
    return false
  }

  if (!t.number(e[0])) {
    return false
  }

  return true
}

t.isPromise = t.promise = e => e && t.fn(e.then)
t.isThenable = t.isThen = t.thenable = t.then = t.promise

t.isArguments = t.isArgs = t.arguments = t.args = e =>
  Object.prototype.toString.call(e) === '[object Arguments]'

t.isUUID = t.uuid = e => {
  if (!t.def(e)) {
    return false
  }

  if (!t.str(e)) {
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
  typeof e === type || Object.prototype.toString(e) === type

t.test = t.types = (e, ...types) => types.some(k => t.testType(e, k))

t.isEq = t.eq = t.is = (e, ...types) => t.test(e, ...types)

t.isNot = t.not = t.isNeq = t.neq = (e, ...types) => !t.test(e, ...types)

module.exports = t
