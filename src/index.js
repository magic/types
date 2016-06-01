export const test =
  (ele, types = [], ...addTypes) => {
    if (isString(types) && isEmpty(addTypes)) {
      const type = types
      return Object.prototype.toString(ele) === type || typeof ele === type
    }

    const tested = addTypes
      .concat(types)
      .some(
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
    isTruthy(ele) && isFunction(ele.forEach)

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
    ele === +ele

export const isInteger =
  ele =>
    ele === +ele && ele === (ele | 0)

export const isFloat =
  (n) =>
    n === +n && n !== (n | 0)

export const toInt =
  ele =>
    isNumber(ele) &&
    ele | 0

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
    /^#[0-9A-F]{3}|[0-9A-F]{6}$/i.test(c)
  )

export const isHexAlphaColor =
  c => (
    /^#[0-9A-F]{4}|[0-9A-F]{8}$/i.test(c)
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
    isObject(ele) && Object.keys(ele).length === 0 ||
    false

export const isError =
  ele =>
    Object.getPrototypeOf(ele).name === 'Error'

export const isIterable =
  ele =>
    typeof ele === 'object'

export const isEmail =
  ele =>
    typeof ele === 'string' && ele.indexOf('@') > 0
