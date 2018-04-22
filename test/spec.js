const t = require('../src')

const types = [
  ['arr', 'array', 'isArr', 'isArray'],
  ['bool', 'boolean', 'isBool', 'isBoolean'],
  ['def', 'defined', 'isDef', 'isDefined'],
  ['undef', 'undefined', 'isUndef', 'isUndefined'],
  ['fn', 'func', 'function', 'isFn', 'isFunc', 'isFunction'],
  ['num', 'number', 'isNum', 'isNumber'],
  ['int', 'integer', 'isInt', 'isInteger'],
  ['float', 'isFloat'],
  ['count', 'length', 'len'],
  ['obj', 'object', 'isObj', 'isObject'],
  ['str', 'string', 'isStr', 'isString'],
  ['rgba', 'rgbaObject', 'isRGBA', 'isRGBAObject'],
  ['rgb', 'rgbObject', 'isRGB', 'isRGBObject'],
  ['hex', 'hexColor', 'isHex', 'isHexColor'],
  ['hex3', 'hexColor3', 'isHex3', 'isHexColor3'],
  ['hex4', 'hexColor4', 'isHex4', 'isHexColor4'],
  ['hex6', 'hexColor6', 'isHex6', 'isHexColor6'],
  ['hex8', 'hexColor8', 'isHex8', 'isHexColor8'],
  ['hexa', 'hexAlphaColor', 'isHexa', 'isHexAlphaColor'],
  ['hexa4', 'hexAlphaColor4', 'isHexa4', 'isHexAlphaColor4'],
  ['hexa8', 'hexAlphaColor8', 'isHexa8', 'isHexAlphaColor8'],
  ['col', 'color', 'isCol', 'isColor'],
  ['time', 'date', 'isTime', 'isDate'],
  ['regex', 'regexp', 'regExp', 'isRegex', 'isRegExp'],
  ['truthy', 'isTruthy'],
  ['falsy', 'isFalsy'],
  ['empty', 'isEmpty'],
  ['err', 'error', 'isError'],
  ['iter', 'iterable', 'isIter', 'isIterable'],
  ['mail', 'email', 'isMail', 'isEmail'],
  ['nil', 'null', 'isNil', 'isNull'],
  ['undefinedOrNull', 'isUndefinedOrNull'],
  ['buff', 'buffer', 'isBuffer'],
  ['promise', 'isPromise', 'then', 'thenable', 'isThen', 'isThenable'],
  ['args', 'arguments', 'isArgs', 'isArguments'],
  ['uuid', 'isUUID'],
  ['type', 'testType'],
  ['types', 'test', 'is', 'eq', 'isEq', 'isEqual', 'equal'],
  ['neq', 'isNeq', 'not', 'isNot'],
  ['isDeepEqual', 'deepEqual', 'deepEq'],
  ['deep', ['equal', 'eq']],
  ['isDeepDifferent', 'deepDifferent', 'diff', 'different', 'isDifferent'],
  ['mergeable', 'isMergeable', 'mergeableObject', 'isMergeableObject'],
]

// flatten function array
const allFns = types.reduce((glob, t) => glob.concat(t))

// compare two functions for equality
const compare = (a, b) => a.toString() !== b.toString()

// returns a test function that tests if all items in an array are equal
const equal = a => () => a.some(b => compare(a, b))

// test every nested types array for equality with the other array elements
const equalities = types.map(t => ({
  fn: equal(t),
  info: `test function equality: ${t}`,
}))

const fns = [
  {
    fn: () => Object.keys(t).filter(k => allFns.indexOf(k) === -1),
    expect: a => a.length === 0 || console.log('Missing Spec Tests', a),
    info: 'Number of test functions is equal to lib functions',
  },
  {
    fn: () => allFns.some(k => t.function(t[k])),
    info: 'All exposed fields are functions',
  },
  ...equalities,
]

module.exports = fns
