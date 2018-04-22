const t = {}

const isArray = e => Array.isArray(e)

const isBoolean = e => typeof e === 'boolean'

const isDefined = e => typeof e !== 'undefined'

const isUndefined = e => !isDefined(e)

const isFunction = e => typeof e === 'function'

const isNumber = e => e === +e

const isInteger = e => e === +e && e === (e | 0)

const isFloat = e => e === +e

const isObject = e => typeof e === 'object' && !t.nil(e)

const isMergableObject = e => t.obj(e) && !t.date(e) && !t.regexp(e)

const isString = e => typeof e === 'string'

const isRGBAObject = e => t.obj(e) && [e.r, e.g, e.b, e.a].every(t.num)

const isRGBObject = e => t.obj(e) && t.num(e.r) && t.num(e.g) && t.num(e.b)

const hexRegex = /#\b([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})\b/i
const isHexColor = e => hexRegex.test(e)

const isHexColor3 = e => /#\b([a-f0-9]{3})\b/i.test(e)

const isHexColor4 = e => /#\b([a-f0-9]{4})\b/i.test(e)

const isHexColor6 = e => /#\b([a-f0-9]{6})\b/i.test(e)

const isHexColor8 = e => /#\b([a-f0-9]{8})\b/i.test(e)

const isHexAlphaColor = e => /#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(e)

const isHexAlphaColor4 = e => /#\b([a-f0-9]{4})\b/i.test(e)

const isHexAlphaColor8 = e => /#\b([a-f0-9]{8})\b/i.test(e)

const isColor = e => t.rgba(e) || t.rgb(e) || t.hex(e) || t.hexa(e)

const isDate = e => e instanceof Date

const isRegExp = e => e instanceof RegExp

const isTruthy = e => !!e

const isFalsy = e => !e || t.empty(e)

const isEmpty = e => {
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
t.isEmpty = t.empty = isEmpty

const getLength = arg => {
  if (t.num(arg)) {
    return arg
  } else if (t.num(arg.length)) {
    // arrays, strings
    return arg.length
  } else if (t.num(arg.size)) {
    // Set, Map, WeakMap etc
    return arg.size
  }

  // objects
  return Object.keys(arg).length
}

// curried or not curried, depending on number of arguments
const count = (len, e) => getLength(len) === getLength(e)

const compareCount = (len, e) => getLength(len) === getLength(e)
const isLengthEqual = (a, b) =>
  t.def(b) ? compareCount(a, b) : b => compareCount(a, b)

const e = 'equal'

const isError = e => e instanceof Error

const isIterable = e => t.def(e) && !t.nil(e) && t.fn(e.forEach)

const isEmail = e => t.str(e) && e.indexOf('@') > -1

const isNull = e => e === null

const isUndefinedOrNull = e => e === null || !t.def(e)

const isBuffer = e => {
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

const isPromise = e => e && t.fn(e.then)

const isArguments = e =>
  Object.prototype.toString.call(e) === '[object Arguments]'

const isUUID = e => {
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

const testType = (e, type) =>
  typeof e === type || Object.prototype.toString(e) === type

const test = (e, ...types) => types.some(k => t.testType(e, k))

const isEqual = (e, ...types) => t.test(e, ...types)

const isNot = (e, ...types) => !t.test(e, ...types)

const isComparable = a => t.boolean(a) || t.string(a) || t.number(a)

const isDeepEqual = (a, b) => {
  // curry
  if (isUndefined(b)) {
    if (!isUndefined(a)) {
      return c => isDeepEqual(a, c)
    }
    return true
  }

  // types must match
  if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
    return false
  }

  const comp = (_, i) => !isDeepEqual(a[i], b[i])

  if (isArray(a)) {
    if (!isArray(b)) {
      return false
    }

    const eq = !a.some(comp)
    return eq
  }

  if (isMergableObject(a)) {
    if (!isMergableObject(b)) {
      return false
    }
    const ka = Object.keys(a)
    const kb = Object.keys(b)

    const eq = ka.length === kb.length && !ka.some(comp)
    return eq
  }

  return typeof a === typeof b
}

const isDeepDifferent = (a, b) => {
  if (isUndefined(b)) {
    if (isUndefined(a)) {
      return true
    }

    return c => isDeepDifferent(a, c)
  }

  return !isDeepEqual(a, b)
}

t.count = t.length = t.len = getLength
t.count.equal = t.length.equal = t.len.equal = t.count.eq = t.length.eq = t.len.eq = isLengthEqual
t.isError = t.error = t.err = isError
t.isIterable = t.isIter = t.iterable = t.iter = isIterable
t.isEmail = t.isMail = t.email = t.mail = isEmail
t.isNull = t.isNil = t.null = t.nil = isNull
t.isUndefinedOrNull = t.undefinedOrNull = isUndefinedOrNull
t.isBuffer = t.buffer = t.buff = isBuffer
t.isPromise = t.promise = t.isThenable = t.isThen = t.thenable = t.then = isPromise
t.isArguments = t.isArgs = t.arguments = t.args = isArguments
t.isUUID = t.uuid = isUUID
t.testType = t.type = testType
t.test = t.types = test
t.isEqual = t.isEq = t.equal = t.eq = t.is = isEqual
t.isNot = t.not = t.isNeq = t.neq = isNot
t.isArray = t.isArr = t.array = t.arr = isArray
t.isBoolean = t.isBool = t.boolean = t.bool = isBoolean
t.isDefined = t.isDef = t.defined = t.def = isDefined
t.isUndefined = t.isUndef = t.undefined = t.undef = isUndefined
t.isFunction = t.isFunc = t.isFn = t.function = t.func = t.fn = isFunction
t.isNumber = t.isNum = t.number = t.num = isNumber
t.isInteger = t.isInt = t.integer = t.int = isInteger
t.isFloat = t.float = isFloat
t.isObject = t.isObj = t.object = t.obj = isObject
t.isMergeableObject = t.mergeableObject = t.isMergeable = t.mergeable = isMergableObject
t.isString = t.isStr = t.string = t.str = isString
t.isRGBAObject = t.isRGBA = t.rgbaObject = t.rgba = isRGBAObject
t.isRGBObject = t.isRGB = t.rgbObject = t.rgb = isRGBObject
t.isHexColor = t.isHex = t.hexColor = t.hex = isHexColor
t.isHexColor3 = t.isHex3 = t.hexColor3 = t.hex3 = isHexColor3
t.isHexColor4 = t.isHex4 = t.hexColor4 = t.hex4 = isHexColor4
t.isHexColor6 = t.isHex6 = t.hexColor6 = t.hex6 = isHexColor6
t.isHexColor8 = t.isHex8 = t.hexColor8 = t.hex8 = isHexColor8
t.isHexAlphaColor = t.isHexa = t.hexAlphaColor = t.hexa = isHexAlphaColor
t.isHexAlphaColor4 = t.isHexa4 = t.hexAlphaColor4 = t.hexa4 = isHexAlphaColor4
t.isHexAlphaColor8 = t.isHexa8 = t.hexAlphaColor8 = t.hexa8 = isHexAlphaColor8
t.isColor = t.isCol = t.color = t.col = isColor
t.isDate = t.isTime = t.date = t.time = isDate
t.isRegExp = t.isRegex = t.regExp = t.regexp = t.regex = isRegExp
t.isTruthy = t.truthy = isTruthy
t.isFalsy = t.falsy = isFalsy
t.isDeepEqual = t.deepEqual = t.deepEq = isDeepEqual
t.isDeepDifferent = t.deepDifferent = t.isDifferent = t.different = t.diff = isDeepDifferent

t.deep = {
  equal: isDeepEqual,
  eq: isDeepEqual,
  different: isDeepDifferent,
  diff: isDeepDifferent,
}

module.exports = t
