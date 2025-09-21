import is from '../src/index.js'
import { version } from '@magic/test'

const spec = {
  arr: 'fn',
  array: 'fn',
  isArr: 'fn',
  isArray: 'fn',

  bool: 'fn',
  boolean: 'fn',
  isBool: 'fn',
  isBoolean: 'fn',

  def: 'fn',
  defined: 'fn',
  isDef: 'fn',
  isDefined: 'fn',

  undef: 'fn',
  undefined: 'fn',
  isUndef: 'fn',
  isUndefined: 'fn',

  fn: 'fn',
  func: 'fn',
  function: 'fn',
  isFn: 'fn',
  isFunc: 'fn',
  isFunction: 'fn',

  asyncFn: 'fn',
  asyncFunc: 'fn',
  asyncFunction: 'fn',
  isAsyncFn: 'fn',
  isAsyncFunc: 'fn',
  isAsyncFunction: 'fn',

  isGeneratorFunction: 'fn',
  isGeneratorFn: 'fn',
  isGeneratorFunc: 'fn',
  isGeneratorFn: 'fn',
  generator: 'fn',
  isGenerator: 'fn',
  generatorFn: 'fn',
  generatorFunc: 'fn',
  generatorFunction: 'fn',

  num: 'fn',
  number: 'fn',
  isNum: 'fn',
  isNumber: 'fn',

  int: 'fn',
  integer: 'fn',
  isInt: 'fn',
  isInteger: 'fn',

  float: 'fn',
  isFloat: 'fn',

  count: () => true,
  len: () => true,
  ln: () => true,
  length: () => true,

  obj: 'fn',
  object: 'fn',
  isObj: 'fn',
  isObject: 'fn',

  isObjectNative: 'fn',
  objectNative: 'fn',

  str: 'fn',
  string: 'fn',
  isStr: 'fn',
  isString: 'fn',

  rgba: 'fn',
  rgbaObject: 'fn',
  isRGBA: 'fn',
  isRGBAObject: 'fn',

  rgb: 'fn',
  rgbObject: 'fn',
  isRGB: 'fn',
  isRGBObject: 'fn',

  hex: 'fn',
  hexColor: 'fn',
  isHex: 'fn',
  isHexColor: 'fn',

  hex3: 'fn',
  hexColor3: 'fn',
  isHex3: 'fn',
  isHexColor3: 'fn',

  hex4: 'fn',
  hexColor4: 'fn',
  isHex4: 'fn',
  isHexColor4: 'fn',

  hex6: 'fn',
  hexColor6: 'fn',
  isHex6: 'fn',
  isHexColor6: 'fn',

  hex8: 'fn',
  hexColor8: 'fn',
  isHex8: 'fn',
  isHexColor8: 'fn',

  hexa: 'fn',
  hexAlphaColor: 'fn',
  isHexa: 'fn',
  isHexAlphaColor: 'fn',

  hexa4: 'fn',
  hexAlphaColor4: 'fn',
  isHexa4: 'fn',
  isHexAlphaColor4: 'fn',

  hexa8: 'fn',
  hexAlphaColor8: 'fn',
  isHexa8: 'fn',
  isHexAlphaColor8: 'fn',

  col: 'fn',
  color: 'fn',
  isCol: 'fn',
  isColor: 'fn',

  time: 'fn',
  date: 'fn',
  isTime: 'fn',
  isDate: 'fn',

  regex: 'fn',
  regexp: 'fn',
  regExp: 'fn',
  isRegex: 'fn',
  isRegExp: 'fn',

  truthy: 'fn',
  isTruthy: 'fn',

  falsy: 'fn',
  isFalsy: 'fn',

  empty: 'fn',
  isEmpty: 'fn',

  err: 'fn',
  error: 'fn',
  isError: 'fn',

  iter: 'fn',
  iterable: 'fn',
  isIter: 'fn',
  isIterable: 'fn',

  mail: 'fn',
  email: 'fn',
  isMail: 'fn',
  isEmail: 'fn',

  nil: 'fn',
  null: 'fn',
  isNil: 'fn',
  isNull: 'fn',

  undefinedOrNull: 'fn',
  isUndefinedOrNull: 'fn',
  undefinedOrNil: 'fn',
  undefOrNil: 'fn',
  undefOrNull: 'fn',

  buff: 'fn',
  buffer: 'fn',
  isBuffer: 'fn',

  promise: 'fn',
  isPromise: 'fn',
  then: 'fn',
  thenable: 'fn',
  isThen: 'fn',
  isThenable: 'fn',

  // args: 'fn',
  // arguments: 'fn',
  // isArgs: 'fn',
  // isArguments: 'fn',

  uuid: 'fn',
  isUUID: 'fn',

  isType: 'fn',
  type: 'fn',
  testType: 'fn',

  isTypes: 'fn',
  types: 'fn',
  test: 'fn',
  is: 'fn',

  neq: 'fn',
  isNeq: 'fn',
  not: 'fn',
  isNot: 'fn',

  isComparable: 'fn',
  Comparable: 'fn',
  comparable: 'fn',

  deep: [
    'objectNative',
    {
      isDifferent: 'fn',
      different: 'fn',
      diff: 'fn',
      isEqual: 'fn',
      equal: 'fn',
      eq: 'fn',
    },
  ],

  isDeepEqual: 'fn',
  deepEqual: 'fn',
  deepEq: 'fn',

  isDeepDifferent: 'fn',
  deepDifferent: 'fn',
  deepDiff: 'fn',

  mergeable: 'fn',
  isMergeable: 'fn',
  mergeableObject: 'fn',
  isMergeable: 'fn',
  isMergeableObject: 'fn',

  isLengthGreater: 'fn',
  isLengthGreaterOrEqual: 'fn',
  isLengthSmaller: 'fn',
  isLengthSmallerOrEqual: 'fn',
  isLengthEqual: 'fn',

  isMap: 'fn',
  map: 'fn',
  isSet: 'fn',
  set: 'fn',

  isWeakMap: 'fn',
  weakMap: 'fn',
  isWeakSet: 'fn',
  weakSet: 'fn',

  every: 'fn',
  all: 'fn',
  some: 'fn',
  none: 'fn',

  instance: 'fn',
  instanceof: 'fn',
  instanceOf: 'fn',

  isUpperCase: 'fn',
  isLowerCase: 'fn',

  upperCase: 'fn',
  lowerCase: 'fn',

  isCase: [
    'fn',
    {
      upper: 'fn',
      lower: 'fn',
    },
  ],

  case: [
    'fn',
    {
      upper: 'fn',
      lower: 'fn',
    },
  ],

  same: 'fn',
  sameType: 'fn',
  isSame: 'fn',
  isSameType: 'fn',

  ownProp: 'fn',
  prop: 'fn',
  ownProperty: 'fn',
  isOwnProp: 'fn',
  isOwnProperty: 'fn',

  isModule: 'fn',
  module: 'fn',
}

export default version(is, spec)
