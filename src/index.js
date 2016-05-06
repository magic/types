const objProto = Object.prototype
const toStr = objProto.toString

export const cleanType =
  t =>
    t === 'array' && '[object Array]' ||
    t.toLowerCase() === 'nodelist' && '[object NodeList]' ||
    t === 'object' && '[object Object]' ||
    t

export const cleanTypes =
  (types = [], ...addTypes) => {
    const allTypes = addTypes.concat(types)
    const newTypes = allTypes.map(t => cleanType(t))

    return newTypes.length === 1 ? newTypes[0] : newTypes
  }

export const test =
  (ele, types = [], ...addTypes) => {
    if (isString(types) && isEmpty(addTypes)) {
      const type = cleanType(types)
      return toStr.call(ele) === type || typeof ele === type
    }

    const allTypes = addTypes.concat(types)
    const tested = allTypes.some(
      t =>
        test(ele, t)
    )
    return tested
  }

export const is =
  (ele, ...types) =>
    test(ele, types)

export const not =
  (ele, ...types) =>
    !test(ele, types)

export const isArray =
  ele =>
    toStr.call(ele) === '[object Array]'

export const isBoolean =
  ele =>
    typeof ele === 'boolean'

export const isDefined =
  ele =>
    typeof ele !== 'undefined'

export const isFunction =
  ele =>
    typeof ele === 'function'

export const isNumber =
  ele =>
    parseFloat(ele, 10) === parseFloat(ele, 10)

export const toInt =
  ele =>
    isNumber(ele) &&
    parseInt(ele, 10)

export const toFloat =
  ele =>
    isNumber(ele) &&
    parseFloat(ele, 10)

export const isObject =
  ele =>
    typeof ele === 'object'

export const isString =
  ele =>
    typeof ele === 'string'

export const toString =
  ele =>
    (isString(ele) && ele) ||
    (ele && isFunction(ele.toString) && ele.toString()) ||
    ele + ''

export const isRGBAObject =
  e =>
    isObject(e) &&
    isNumber(e.r) &&
    isNumber(e.g) &&
    isNumber(e.b) &&
    isNumber(e.a)

export const isRGBObject =
  e =>
    isObject(e) &&
    isNumber(e.r) &&
    isNumber(e.g) &&
    isNumber(e.b)

export const isHexColor =
  c => (
    /^#[0-9A-F]{6}$/i.test(c)
  )

export const isHexAlphaColor =
  c => (
    /^#[0-9A-F]{8}$/i.test(c)
  )

export const isColor =
  e =>
    isRGBAObject(e) ||
    isRGBObject(e) ||
    isHexColor(e) ||
    isHexAlphaColor(e)

export const isDate =
  ele =>
    ele.constructor === Date

export const isTruthy =
  ele =>
    !!ele

export const isFalsy =
  ele =>
    !ele || isEmpty(ele)

export const isEmpty =
  ele =>
    !ele ||
    (isArray(ele) && ele.length === 0) ||
    (isObject(ele) && Object.keys(ele).length === 0) ||
    false

export const isError =
  ele =>
    Object.getPrototypeOf(ele).name === 'Error'

export const isNodeList =
  ele =>
    toStr.call(ele) === '[object NodeList]'

export const isIterable =
  ele =>
    typeof ele === 'object'

export const isEmail =
  ele =>
    typeof ele === 'string' && ele.indexOf('@') > 0
