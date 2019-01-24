const is = require('../src')
const { version } = require('@magic/test')

const spec = {
  arr: is.fn,
  array: is.fn,
  isArr: is.fn,
  isArray: is.fn,

  bool: is.fn,
  boolean: is.fn,
  isBool: is.fn,
  isBoolean: is.fn,

  def: is.fn,
  defined: is.fn,
  isDef: is.fn,
  isDefined: is.fn,

  undef: is.fn,
  undefined: is.fn,
  isUndef: is.fn,
  isUndefined: is.fn,

  fn: is.fn,
  func: is.fn,
  function: is.fn,
  isFn: is.fn,
  isFunc: is.fn,
  isFunction: is.fn,

  num: is.fn,
  number: is.fn,
  isNum: is.fn,
  isNumber: is.fn,

  int: is.fn,
  integer: is.fn,
  isInt: is.fn,
  isInteger: is.fn,

  float: is.fn,
  isFloat: is.fn,

  count: () => true,
  len: () => true,
  ln: () => true,
  length: () => true,

  obj: is.fn,
  object: is.fn,
  isObj: is.fn,
  isObject: is.fn,

  str: is.fn,
  string: is.fn,
  isStr: is.fn,
  isString: is.fn,

  rgba: is.fn,
  rgbaObject: is.fn,
  isRGBA: is.fn,
  isRGBAObject: is.fn,

  rgb: is.fn,
  rgbObject: is.fn,
  isRGB: is.fn,
  isRGBObject: is.fn,

  hex: is.fn,
  hexColor: is.fn,
  isHex: is.fn,
  isHexColor: is.fn,

  hex3: is.fn,
  hexColor3: is.fn,
  isHex3: is.fn,
  isHexColor3: is.fn,

  hex4: is.fn,
  hexColor4: is.fn,
  isHex4: is.fn,
  isHexColor4: is.fn,

  hex6: is.fn,
  hexColor6: is.fn,
  isHex6: is.fn,
  isHexColor6: is.fn,

  hex8: is.fn,
  hexColor8: is.fn,
  isHex8: is.fn,
  isHexColor8: is.fn,

  hexa: is.fn,
  hexAlphaColor: is.fn,
  isHexa: is.fn,
  isHexAlphaColor: is.fn,

  hexa4: is.fn,
  hexAlphaColor4: is.fn,
  isHexa4: is.fn,
  isHexAlphaColor4: is.fn,

  hexa8: is.fn,
  hexAlphaColor8: is.fn,
  isHexa8: is.fn,
  isHexAlphaColor8: is.fn,

  col: is.fn,
  color: is.fn,
  isCol: is.fn,
  isColor: is.fn,

  time: is.fn,
  date: is.fn,
  isTime: is.fn,
  isDate: is.fn,

  regex: is.fn,
  regexp: is.fn,
  regExp: is.fn,
  isRegex: is.fn,
  isRegExp: is.fn,

  truthy: is.fn,
  isTruthy: is.fn,

  falsy: is.fn,
  isFalsy: is.fn,

  empty: is.fn,
  isEmpty: is.fn,

  err: is.fn,
  error: is.fn,
  isError: is.fn,

  iter: is.fn,
  iterable: is.fn,
  isIter: is.fn,
  isIterable: is.fn,

  mail: is.fn,
  email: is.fn,
  isMail: is.fn,
  isEmail: is.fn,

  nil: is.fn,
  null: is.fn,
  isNil: is.fn,
  isNull: is.fn,

  undefinedOrNull: is.fn,
  isUndefinedOrNull: is.fn,

  buff: is.fn,
  buffer: is.fn,
  isBuffer: is.fn,

  promise: is.fn,
  isPromise: is.fn,
  then: is.fn,
  thenable: is.fn,
  isThen: is.fn,
  isThenable: is.fn,

  args: is.fn,
  arguments: is.fn,
  isArgs: is.fn,
  isArguments: is.fn,

  uuid: is.fn,
  isUUID: is.fn,

  isType: is.fn,
  type: is.fn,
  testType: is.fn,

  isTypes: is.fn,
  types: is.fn,
  test: is.fn,
  is: is.fn,
  eq: is.fn,
  isEq: is.fn,
  isEqual: is.fn,
  equal: is.fn,

  neq: is.fn,
  isNeq: is.fn,
  not: is.fn,
  isNot: is.fn,

  isComparable: is.fn,
  Comparable: is.fn,
  comparable: is.fn,

  deep: [
    is.fn,
    {
      isDifferent: is.fn,
      different: is.fn,
      diff: is.fn,
      isEqual: is.fn,
      equal: is.fn,
      eq: is.fn,
    },
  ],

  isDeepEqual: is.fn,
  deepEqual: is.fn,
  deepEq: is.fn,

  isDeepDifferent: is.fn,
  deepDifferent: is.fn,
  deepDiff: is.fn,

  mergeable: is.fn,
  isMergeable: is.fn,
  mergeableObject: is.fn,
  isMergeableObject: is.fn,

  isLengthGreater: is.fn,
  isLengthGreaterOrEqual: is.fn,
  isLengthSmaller: is.fn,
  isLengthSmallerOrEqual: is.fn,
  isLengthEqual: is.fn,
}

const fns = [
  { fn: () => version.lib(is, spec), expect: is.len.eq(0) },
  { fn: () => version.spec(spec, is), expect: is.len.eq(0) },
]

module.exports = fns
