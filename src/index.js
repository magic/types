// @flow

type Test = (ele: any, types: string | Array<string>, ...addTypes: Array<string>) => boolean
type TestWithTypes = (ele : any, ...types : Array<string>) => boolean
type TestWithoutTypes = (ele : any) => boolean
type ToNumber = (ele : any) => number

type ArrayOfStringsOrString = Array<string> | string

export const test : Test =
  (ele : any, types : ArrayOfStringsOrString, ...addTypes : Array<string>) : boolean => {
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

export const is : TestWithTypes =
  (ele : any, ...types : Array<string>) : boolean =>
    test(ele, types)

export const not : TestWithTypes =
  (ele : any, ...types: Array<string>) : boolean =>
    !test(ele, types)

export const isArray : TestWithoutTypes =
  (ele : any) : boolean =>
    isTruthy(ele) &&
    isFunction(ele.forEach)

export const isBoolean : TestWithoutTypes =
  (ele : any) : boolean =>
    typeof ele === 'boolean'

export const isDefined : TestWithoutTypes =
  (ele : any) : boolean =>
    typeof ele !== 'undefined'

export const isFunction : TestWithoutTypes =
  (ele : any) : boolean =>
    typeof ele === 'function'

export const isNumber : TestWithoutTypes =
  (ele : any) : boolean =>
    ele === +ele

export const isInteger : TestWithoutTypes =
  (ele : any) : boolean =>
    ele === +ele &&
    ele === (ele | 0)

export const isFloat : TestWithoutTypes =
  (ele : any) : boolean =>
    ele === +ele

export const isObject : TestWithoutTypes =
  (ele : any) : boolean =>
    typeof ele === 'object'

export const isString : TestWithoutTypes =
  (ele : any) : boolean =>
    typeof ele === 'string'

export const isRGBAObject : TestWithoutTypes =
  (e : any) : boolean =>
    isObject(e) &&
    isNumber(e.r) &&
    isNumber(e.g) &&
    isNumber(e.b) &&
    isNumber(e.a)

export const isRGBObject : TestWithoutTypes =
  (e : any) : boolean =>
    isObject(e) &&
    isNumber(e.r) &&
    isNumber(e.g) &&
    isNumber(e.b)

export const isHexColor : TestWithoutTypes =
  (c : any) : boolean =>
    /\#\b([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{8})\b/i.test(c)

export const isHexAlphaColor : TestWithoutTypes =
  (c : any) : boolean =>
    /\#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(c)

export const isColor : TestWithoutTypes =
  (e : any) : boolean =>
    isRGBAObject(e) ||
    isRGBObject(e) ||
    isHexColor(e) ||
    isHexAlphaColor(e)

export const isDate : TestWithoutTypes =
  (ele : any) : boolean =>
    ele.constructor === Date

export const isTruthy : TestWithoutTypes =
  (ele : any) : boolean =>
    !!ele

export const isFalsy : TestWithoutTypes =
  (ele : any) : boolean =>
    !ele ||
    isEmpty(ele)

export const isEmpty : TestWithoutTypes =
  (ele : any) : boolean =>
    !ele ||
    isObject(ele) && Object.keys(ele).length === 0 ||
    false

export const isError : TestWithoutTypes =
  (ele : any) : boolean =>
    Object.getPrototypeOf(ele).name === 'Error'

export const isIterable : TestWithoutTypes =
  (ele : any) : boolean =>
    typeof ele === 'object'

export const isEmail : TestWithoutTypes =
  (ele : any) : boolean =>
    typeof ele === 'string' &&
    ele.indexOf('@') > 0

export const toInt : ToNumber =
  (ele : any) : number => {
    if (!isNumber(ele)) {
      return 0
    }

    return ele | 0
  }

export const toFloat : ToNumber =
  (ele : any) : number => {
    if (!isNumber(ele)) {
      return 0
    }

    return parseFloat(ele, 10)
  }

export const toString : (ele : any) => string =
  (ele : any) : string => {
    if (isString(ele)) {
      return ele
    }

    if (ele && isFunction(ele.toString)) {
      return ele.toString()
    }

    return ele + ''
  }
