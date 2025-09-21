import * as fns from './fns.mjs'

export const is = {
  count: fns.getLength,
  length: fns.getLength,
  len: fns.getLength,
  ln: fns.getLength,

  isError: fns.isError,
  error: fns.isError,
  err: fns.isError,

  isIterable: fns.isIterable,
  isIter: fns.isIterable,
  iterable: fns.isIterable,
  iter: fns.isIterable,

  isEmail: fns.isEmail,
  isMail: fns.isEmail,
  email: fns.isEmail,
  mail: fns.isEmail,

  isNull: fns.isNull,
  isNil: fns.isNull,
  null: fns.isNull,
  nil: fns.isNull,

  isUndefinedOrNull: fns.isUndefinedOrNull,
  undefinedOrNull: fns.isUndefinedOrNull,
  undefinedOrNil: fns.isUndefinedOrNull,
  undefOrNull: fns.isUndefinedOrNull,
  undefOrNil: fns.isUndefinedOrNull,

  isBuffer: fns.isBuffer,
  buffer: fns.isBuffer,
  buff: fns.isBuffer,

  isPromise: fns.isPromise,
  promise: fns.isPromise,
  isThenable: fns.isPromise,
  isThen: fns.isPromise,
  thenable: fns.isPromise,
  then: fns.isPromise,

  // isArguments: fns.isArguments,
  // isArgs: fns.isArguments,
  // arguments: fns.isArguments,
  // args: fns.isArguments,

  isUUID: fns.isUUID,
  uuid: fns.isUUID,

  isType: fns.isType,
  testType: fns.isType,
  type: fns.isType,

  isTypes: fns.isTypes,
  test: fns.isTypes,
  types: fns.isTypes,

  isEmpty: fns.isEmpty,
  empty: fns.isEmpty,

  isEqual: fns.isEqual,
  isEq: fns.isEqual,
  equal: fns.isEqual,
  eq: fns.isEqual,
  is: fns.isEqual,

  isNot: fns.isNot,
  not: fns.isNot,
  isNeq: fns.isNot,
  neq: fns.isNot,

  isArray: fns.isArray,
  isArr: fns.isArray,
  array: fns.isArray,
  arr: fns.isArray,

  isBoolean: fns.isBoolean,
  isBool: fns.isBoolean,
  boolean: fns.isBoolean,
  bool: fns.isBoolean,

  isDefined: fns.isDefined,
  isDef: fns.isDefined,
  defined: fns.isDefined,
  def: fns.isDefined,

  isUndefined: fns.isUndefined,
  isUndef: fns.isUndefined,
  undefined: fns.isUndefined,
  undef: fns.isUndefined,

  isFunction: fns.isFunction,
  isFunc: fns.isFunction,
  isFn: fns.isFunction,
  function: fns.isFunction,
  func: fns.isFunction,
  fn: fns.isFunction,

  isAsyncFunction: fns.isAsyncFunction,
  isAsyncFunc: fns.isAsyncFunction,
  isAsyncFn: fns.isAsyncFunction,
  asyncFunction: fns.isAsyncFunction,
  asyncFunc: fns.isAsyncFunction,
  asyncFn: fns.isAsyncFunction,

  isGeneratorFunction: fns.isGeneratorFunction,
  isGeneratorFn: fns.isGeneratorFunction,
  isGeneratorFunc: fns.isGeneratorFunction,
  isGeneratorFn: fns.isGeneratorFunction,
  generator: fns.isGeneratorFunction,
  isGenerator: fns.isGeneratorFunction,
  generatorFn: fns.isGeneratorFunction,
  generatorFunc: fns.isGeneratorFunction,
  generatorFunction: fns.isGeneratorFunction,

  isNumber: fns.isNumber,
  isNum: fns.isNumber,
  number: fns.isNumber,
  num: fns.isNumber,

  isInteger: fns.isInteger,
  isInt: fns.isInteger,
  integer: fns.isInteger,
  int: fns.isInteger,

  isFloat: fns.isFloat,
  float: fns.isFloat,

  isObject: fns.isObject,
  isObj: fns.isObject,
  object: fns.isObject,
  obj: fns.isObject,

  isObjectNative: fns.isObjectNative,
  objectNative: fns.isObjectNative,

  isMergeableObject: fns.isMergeableObject,
  mergeableObject: fns.isMergeableObject,
  isMergeable: fns.isMergeableObject,
  mergeable: fns.isMergeableObject,

  isString: fns.isString,
  isStr: fns.isString,
  string: fns.isString,
  str: fns.isString,

  isRGBAObject: fns.isRGBAObject,
  isRGBA: fns.isRGBAObject,
  rgbaObject: fns.isRGBAObject,
  rgba: fns.isRGBAObject,

  isRGBObject: fns.isRGBObject,
  isRGB: fns.isRGBObject,
  rgbObject: fns.isRGBObject,
  rgb: fns.isRGBObject,

  isHexColor: fns.isHexColor,
  isHex: fns.isHexColor,
  hexColor: fns.isHexColor,
  hex: fns.isHexColor,

  isHexColor3: fns.isHexColor3,
  isHex3: fns.isHexColor3,
  hexColor3: fns.isHexColor3,
  hex3: fns.isHexColor3,

  isHexColor4: fns.isHexColor4,
  isHex4: fns.isHexColor4,
  hexColor4: fns.isHexColor4,
  hex4: fns.isHexColor4,

  isHexColor6: fns.isHexColor6,
  isHex6: fns.isHexColor6,
  hexColor6: fns.isHexColor6,
  hex6: fns.isHexColor6,

  isHexColor8: fns.isHexColor8,
  isHex8: fns.isHexColor8,
  hexColor8: fns.isHexColor8,
  hex8: fns.isHexColor8,

  isHexAlphaColor: fns.isHexAlphaColor,
  isHexa: fns.isHexAlphaColor,
  hexAlphaColor: fns.isHexAlphaColor,
  hexa: fns.isHexAlphaColor,

  isHexAlphaColor4: fns.isHexAlphaColor4,
  isHexa4: fns.isHexAlphaColor4,
  hexAlphaColor4: fns.isHexAlphaColor4,
  hexa4: fns.isHexAlphaColor4,

  isHexAlphaColor8: fns.isHexAlphaColor8,
  isHexa8: fns.isHexAlphaColor8,
  hexAlphaColor8: fns.isHexAlphaColor8,
  hexa8: fns.isHexAlphaColor8,

  isColor: fns.isColor,
  isCol: fns.isColor,
  color: fns.isColor,
  col: fns.isColor,

  isComparable: fns.isComparable,
  Comparable: fns.isComparable,
  comparable: fns.isComparable,

  isDate: fns.isDate,
  isTime: fns.isDate,
  date: fns.isDate,
  time: fns.isDate,

  isRegExp: fns.isRegExp,
  isRegex: fns.isRegExp,
  regExp: fns.isRegExp,
  regexp: fns.isRegExp,
  regex: fns.isRegExp,

  isTruthy: fns.isTruthy,
  truthy: fns.isTruthy,

  isFalsy: fns.isFalsy,
  falsy: fns.isFalsy,

  isLengthGreater: fns.isLengthGreater,
  isLengthGreaterOrEqual: fns.isLengthGreaterOrEqual,
  isLengthSmaller: fns.isLengthSmaller,
  isLengthSmallerOrEqual: fns.isLengthSmallerOrEqual,
  isLengthEqual: fns.isLengthEqual,

  isMap: fns.isMap,
  map: fns.isMap,

  isSet: fns.isSet,
  set: fns.isSet,

  isWeakMap: fns.isWeakMap,
  weakMap: fns.isWeakMap,

  isWeakSet: fns.isWeakSet,
  weakSet: fns.isWeakSet,

  every: fns.isEvery,
  all: fns.isEvery,
  some: fns.isSome,
  none: fns.isNone,

  instance: fns.isInstanceOf,
  instanceof: fns.isInstanceOf,
  instanceOf: fns.isInstanceOf,

  isCase: fns.isCase,
  case: fns.isCase,

  isUpperCase: fns.isUpperCase,
  upperCase: fns.isUpperCase,
  isLowerCase: fns.isLowerCase,
  lowerCase: fns.isLowerCase,

  same: fns.isSameType,
  sameType: fns.isSameType,
  isSameType: fns.isSameType,
  isSame: fns.isSameType,

  ownProp: fns.isOwnProp,
  prop: fns.isOwnProp,
  ownProperty: fns.isOwnProp,
  isOwnProp: fns.isOwnProp,
  isOwnProperty: fns.isOwnProp,

  isModule: fns.isModule,
  module: fns.isModule,
}

// assign ln as properties of the getLength function
const ln = {
  eq: fns.isLengthEqual,
  equal: fns.isLengthEqual,
  greater: fns.isLengthGreater,
  gt: fns.isLengthGreater,
  bigger: fns.isLengthGreater,
  biggerequal: fns.isLengthGreaterOrEqual,
  greater: fns.isLengthGreater,
  greaterequal: fns.isLengthGreaterOrEqual,
  gte: fns.isLengthGreaterOrEqual,
  gteq: fns.isLengthGreaterOrEqual,

  lower: fns.isLengthSmaller,
  smaller: fns.isLengthSmaller,
  lt: fns.isLengthSmaller,
  lowerequal: fns.isLengthSmallerOrEqual,
  smallerequal: fns.isLengthSmallerOrEqual,
  lte: fns.isLengthSmallerOrEqual,
  lteq: fns.isLengthSmallerOrEqual,
}

// count, length, len and ln are functions, returning the length.
// the code below assigns all keys in the ln object to each of those functions,
// allowing users of this library to call is.length.equal and other subfunctions.

const applyLenKey = (k, fn) => key => (is[key][k] = fn)

const applyLenKeys = ([k, fn]) => ['count', 'length', 'len', 'ln'].forEach(applyLenKey(k, fn))

Object.entries(ln).forEach(applyLenKeys)

export default is
