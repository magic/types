// @flow

export const test =
  (ele : any, types : Array<string> | string, ...addTypes : Array<string>) : boolean => {
    if (isString(types) && isEmpty(addTypes)) {
      return Object.prototype.toString(ele) === types || typeof ele === types
    }

    return addTypes
      .concat(types)
      .some(
        (t : string) : boolean =>
          test(ele, t)
      )
  }

export const is =
  (ele : any, ...types : Array<string>) : boolean =>
    test(ele, types)

export const not =
  (ele : any, ...types: Array<string>) : boolean =>
    !test(ele, types)

export const isArray =
  (ele : any) : boolean =>
    isTruthy(ele) &&
    isFunction(ele.forEach)

export const isBoolean =
  (ele : any) : boolean =>
    typeof ele === 'boolean'

export const isDefined =
  (ele : any) : boolean =>
    typeof ele !== 'undefined'

export const isFunction =
  (ele : any) : boolean =>
    typeof ele === 'function'

export const isNumber =
  (ele : any) : boolean =>
    ele === +ele

export const isInteger =
  (ele : any) : boolean =>
    ele === +ele &&
    ele === (ele | 0)

export const isFloat =
  (ele : any) : boolean =>
    ele === +ele

export const isObject =
  (ele : any) : boolean =>
    typeof ele === 'object'

export const isString =
  (ele : any) : boolean =>
    typeof ele === 'string'

export const isRGBAObject =
  (e : any) : boolean =>
    isObject(e) &&
    isNumber(e.r) &&
    isNumber(e.g) &&
    isNumber(e.b) &&
    isNumber(e.a)

export const isRGBObject =
  (e : any) : boolean =>
    isObject(e) &&
    isNumber(e.r) &&
    isNumber(e.g) &&
    isNumber(e.b)

export const isHexColor =
  (c : any) : boolean =>
    /\#\b([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{8})\b/i.test(c)

export const isHexAlphaColor =
  (c : any) : boolean =>
    /\#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(c)

export const isColor =
  (e : any) : boolean =>
    isRGBAObject(e) ||
    isRGBObject(e) ||
    isHexColor(e) ||
    isHexAlphaColor(e)

export const isDate =
  (ele : any) : boolean =>
    ele.constructor === Date

export const isRegExp =
  (ele : any) : boolean =>
    ele.constructor === RegExp

export const isTruthy =
  (ele : any) : boolean =>
    !!ele

export const isFalsy =
  (ele : any) : boolean =>
    !ele ||
    isEmpty(ele)

export const isEmpty =
  (ele : any) : boolean =>
    !ele ||
    isObject(ele) && Object.keys(ele).length === 0 ||
    false

export const isError =
  (ele : any) : boolean =>
    Object.getPrototypeOf(ele).name === 'Error'

export const isIterable =
  (ele : any) : boolean =>
    typeof ele === 'object'

export const isEmail =
  (ele : any) : boolean =>
    typeof ele === 'string' &&
    ele.indexOf('@') > 0
