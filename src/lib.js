import * as fns from './fns.js'
import * as deep from './deep/index.js'

// count, length, len and ln are functions that return the length,
// but they also have comparison methods attached as properties.
// This creates enhanced length functions with comparison capabilities.

/**
 * @typedef {typeof fns.isLengthEqual} LengthComparison
 */

/**
 * @typedef {typeof fns.getLength & {
 *   eq: LengthComparison,
 *   equal: LengthComparison,
 *   gt: LengthComparison,
 *   bigger: LengthComparison,
 *   biggerequal: LengthComparison,
 *   greater: LengthComparison,
 *   greaterequal: LengthComparison,
 *   gte: LengthComparison,
 *   gteq: LengthComparison,
 *   lower: LengthComparison,
 *   smaller: LengthComparison,
 *   lt: LengthComparison,
 *   lowerequal: LengthComparison,
 *   smallerequal: LengthComparison,
 *   lte: LengthComparison,
 *   lteq: LengthComparison
 * }} EnhancedLengthFunction
 */

/**
 * The `is.not` namespace: the original `isNot` check function, extended at
 * runtime (by `addNotFunctions`) with a negated version of every `is.*` check
 * and their nested sub-checks (e.g. `.upper`, `.eq`, `.v4`, `deep`). Each
 * added property is either a negated check function or an object of them.
 * @typedef {((e: unknown, ...types: string[]) => boolean) & {
 *   [key: string]: any
 * }} NotNamespace
 */

// Create enhanced length functions with comparison methods
const lengthFunctions = {
  eq: fns.isLengthEqual,
  equal: fns.isLengthEqual,
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

// Replace the original length functions with enhanced versions
const ln = /** @type {EnhancedLengthFunction} */ (fns.getLength)
Object.assign(ln, lengthFunctions)

const length = ln
const len = ln
const count = ln

export const is = /** @type {const} */ {
  ...lengthFunctions,

  count,
  length,
  len,
  ln,

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

  sym: fns.isSymbol,
  symbol: fns.isSymbol,

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

  isArguments: fns.isArguments,
  isArgs: fns.isArguments,
  arguments: fns.isArguments,
  args: fns.isArguments,

  isUUID: fns.isUUID,
  uuid: fns.isUUID,

  isType: fns.isType,
  testType: fns.isType,
  type: fns.isType,

  isTypes: fns.isTypes,
  test: fns.isTypes,
  types: fns.isTypes,
  is: fns.isTypes,

  isEmpty: fns.isEmpty,
  empty: fns.isEmpty,

  isNot: fns.isNot,
  not: /** @type {NotNamespace} */ (fns.isNot),
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

  isIp: fns.isIp,
  ip: fns.isIp,
  isIPv4: fns.isIPv4,
  ipv4: fns.isIPv4,
  v4: fns.isIPv4,
  isIPv6: fns.isIPv6,
  ipv6: fns.isIPv6,
  v6: fns.isIPv6,

  ipV4: fns.ipV4,
  ipV6: fns.ipV6,

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
  ...deep,
}

/**
 * Negation helper: creates a function that returns the logical NOT of fn
 * @param {any} fn - function to negate
 * @returns {(...args: any[]) => boolean} - negated function
 */
const negate =
  fn =>
  (...args) =>
    !fn(...args)

/**
 * Add negated functions to the existing is.not namespace
 * @param {any} obj - source object (the is namespace)
 * @param {any} target - target object (the is.not namespace)
 */
const addNotFunctions = (obj, target) => {
  // Skip certain properties that shouldn't be copied
  const skipKeys = new Set(['length', 'name', 'prototype', 'caller', 'callee', 'arguments'])

  for (const [key, value] of Object.entries(obj)) {
    if (key === 'not' || skipKeys.has(key)) continue
    if (fns.isFunction(value)) {
      target[key] = negate(value)
      // Handle function sub-properties (e.g., isCase.upper, isIp.v4)
      if (value.upper) {
        target[key].upper = negate(value.upper)
      }
      if (value.lower) {
        target[key].lower = negate(value.lower)
      }
      if (value.v4) {
        target[key].v4 = negate(value.v4)
      }
      if (value.v6) {
        target[key].v6 = negate(value.v6)
      }
      // Handle all length comparison functions
      if (value.eq) {
        target[key].eq = negate(value.eq)
      }
      if (value.equal) {
        target[key].equal = negate(value.equal)
      }
      if (value.gt) {
        target[key].gt = negate(value.gt)
      }
      if (value.bigger) {
        target[key].bigger = negate(value.bigger)
      }
      if (value.biggerequal) {
        target[key].biggerequal = negate(value.biggerequal)
      }
      if (value.greater) {
        target[key].greater = negate(value.greater)
      }
      if (value.greaterequal) {
        target[key].greaterequal = negate(value.greaterequal)
      }
      if (value.gte) {
        target[key].gte = negate(value.gte)
      }
      if (value.gteq) {
        target[key].gteq = negate(value.gteq)
      }
      if (value.lower) {
        target[key].lower = negate(value.lower)
      }
      if (value.smaller) {
        target[key].smaller = negate(value.smaller)
      }
      if (value.lt) {
        target[key].lt = negate(value.lt)
      }
      if (value.lowerequal) {
        target[key].lowerequal = negate(value.lowerequal)
      }
      if (value.smallerequal) {
        target[key].smallerequal = negate(value.smallerequal)
      }
      if (value.lte) {
        target[key].lte = negate(value.lte)
      }
      if (value.lteq) {
        target[key].lteq = negate(value.lteq)
      }
    } else if (fns.isObjectNative(value)) {
      target[key] = {}
      addNotFunctions(value, target[key])
    }
  }
}

addNotFunctions(is, is.not)

export default is
