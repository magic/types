module.exports = {
  state: {
    logotext: '@magic/types',
    title: '@magic/types',
  },
  View: () => [
    h2('@magic/types'),
    p('comprehensive and thoroughly tested type comparison library'),

    GitBadges({
      project: 'magic/types',
      appveyor: 'jaeh/types',
    }),

    h3({ id: 'install' }, ' install'),
    Pre.View('npm install @magic/types'),

    h3({ id: 'import-single-function' }, ' import single function'),
    Pre.View(`
// single function import
const { isArray } = require('@magic/types')

isArray([]) // true`),

    h3({ id: 'import-all-functions' }, ' import all functions'),
    Pre.View(`
const is = require('@magic/types')

is.array([]) // true`),

    h3({ id: 'functions' }, 'functions'),
    p('@magic/types exports an object of functions to typecheck.'),

    h4({ id: 'functions-is' }, 'is'),
    p('test a value for multiple types'),
    Pre.View(`
is(ele, ...types)

is('astring', 'string', 'object') // true
is(42, 'string', 'object') // false
`),
    p({ class: 'alias' }, 'alias is.eq, isEq, test'),

    h4({ id: 'functions-not' }, 'not'),
    p('test if a value is not of a type'),
    Pre.View(`
not(ele, ...types)

not('astring', 'string', 'object') // false
not(42, 'string', 'object') // true`),
    p({ class: 'alias' }, 'alias is.neq, isNeq, isNot'),

    h4({ id: 'functions-testtype' }, 'testType'),
    Pre.View("testType(42, 'number') // true"),
    p({ class: 'alias' }, 'alias is.type'),

    h4({ id: 'functions-test' }, 'test'),
    p('test if a value is one of the provided types'),
    Pre.View(`
test(42, ['string', 'object']) // false
test('42', ['string', 'object']) // true`),
    p({ class: 'alias' }, 'alias is.types'),

    h4({ id: 'functions-array' }, 'type comparisons'),
    Pre.View('isArray([]) // true'),
    p('alias isArr, is.array, is.arr'),

    h4({ id: 'functions-boolean' }, 'isBoolean'),
    Pre.View('isBoolean(true) // true'),
    p({ class: 'alias' }, 'alias isBool, is.boolean, is.bool'),

    h3({ id: 'functions-defined' }, 'isDefined'),
    Pre.View('isDefined(undefined) //false'),
    p({ class: 'alias' }, 'alias isDef, is.defined, is.def'),

    h3({ id: 'functions-undefined' }, 'isUndefined'),
    Pre.View('isUndefined(undefined) //false'),
    p({ class: 'alias' }, 'alias isUndef, is.undefined, is.undef'),

    h3({ id: 'functions-function' }, 'isFunction'),
    Pre.View('isFunction(() => {}) // true'),
    p({ class: 'alias' }, 'alias isFunc, isFn, is.function, is.func, is.fn'),

    h3({ id: 'functions-number' }, 'isNumber'),
    Pre.View('isNumber(1) // true'),
    p({ class: 'alias' }, 'alias isNum, is.number, is.num'),

    h3({ id: 'functions-integer' }, 'isInteger'),
    Pre.View('isInteger(1) // true'),
    p({ class: 'alias' }, 'alias isInt, is.integer, is.int'),

    h3({ id: 'functions-float' }, 'isFloat'),
    Pre.View('isFloat(1.1) // true'),
    p({ class: 'alias' }, 'alias is.float'),

    h3({ id: 'functions-object' }, 'isObject'),
    Pre.View('isObject({}) // true'),
    p({ class: 'alias' }, 'alias isObj, is.object, is.obj'),

    h3({ id: 'functions-string' }, 'isString'),
    Pre.View("isString('') // true"),
    p({ class: 'alias' }, 'alias isStr, is.string, is.str'),

    h3({ id: 'functions-rgbaobject' }, 'isRGBAObject'),
    Pre.View('isRGBAObject({ r: 1, g: 1, b: 1, a: 1 }) // true'),
    p({ class: 'alias' }, 'alias isRGBA, is.rgbaObject, is.rgba'),

    h3({ id: 'functions-rgbobject' }, 'isRGBObject'),
    Pre.View('isRGBObject({ r: 1, g: 1, b: 1 }) // true'),
    p({ class: 'alias' }, 'alias isRGB, is.rgbObject, is.rgb'),

    h3({ id: 'functions-hexcolor' }, 'isHexColor'),
    Pre.View("isHexColor('#333') // true"),
    p({ class: 'alias' }, 'alias isHex, is.hex, is.hexColor'),

    h3({ id: 'functions-hexalphacolor' }, 'isHexAlphaColor'),
    Pre.View("isHexAlphaColor('#3333') // true"),
    p({ class: 'alias' }, 'alias isHexa, is.hexa, is.hexAlphaColor'),

    h3({ id: 'functions-color' }, 'isColor'),
    Pre.View("isColor('#444') // true"),
    p({ class: 'alias' }, 'alias isCol, is.color, is.col'),

    h3({ id: 'functions-date' }, 'isDate'),
    Pre.View('isDate(new Date()) // true'),
    p({ class: 'alias' }, 'alias isTime, is.date, is.time'),

    h3({ id: 'functions-regexp' }, 'isRegExp'),
    Pre.View('isRegExp(/regexp/) // true'),
    p({ class: 'alias' }, 'alias isRegex, is.regexp, is.regExp, is.regex'),

    h3({ id: 'functions-truthy' }, 'isTruthy'),
    Pre.View("isTruthy('true') // true"),
    p({ class: 'alias' }, 'alias is.truthy'),

    h3({ id: 'functions-falsy' }, 'isFalsy'),
    Pre.View('isFalsy(0) // true'),
    p({ class: 'alias' }, 'alias is.falsy'),

    h3({ id: 'functions-empty' }, 'isEmpty'),
    Pre.View("isEmpty('') // true"),
    p({ class: 'alias' }, 'alias is.empty'),

    h3({ id: 'functions-error' }, 'isError'),
    Pre.View("isError(new Error('')) // true"),
    p({ class: 'alias' }, 'alias isErr, is.error, is.err'),

    h3({ id: 'functions-iterable' }, 'isIterable'),
    Pre.View('isIterable([]) // true'),
    p({ class: 'alias' }, 'alias is.iterable'),

    h3({ id: 'functions-email' }, 'isEmail'),
    Pre.View("isEmail('a@b.c') // true"),
    p({ class: 'alias' }, 'alias isMail, is.email, is.mail'),

    h3({ id: 'functions-null' }, 'isNull'),
    Pre.View('isNull(null) // true'),
    p({ class: 'alias' }, 'alias isNil, is.nil, is.null'),

    h3({ id: 'functions-undefinedornull' }, 'isUndefinedOrNull'),
    Pre.View('isUndefinedOrNull(undefined || null) // true'),
    p(
      { class: 'alias' },
      'alias is.undefinedOrNull, is.undefinedOrNil, is.undefOrNull, is.undefOrNil',
    ),

    h3({ id: 'functions-buffer' }, 'isBuffer'),
    Pre.View("isBuffer(new Buffer('test')) // true"),
    p({ class: 'alias' }, 'alias isBuff, is.buffer, is.buff'),

    h3({ id: 'functions-promise' }, 'isPromise'),
    Pre.View('isPromise(new Promise()) // true'),
    p({ class: 'alias' }, 'alias is.promise, isThenable, isThen, is.thenable, is.then'),

    h3({ id: 'functions-arguments' }, 'isArguments'),
    Pre.View('isArguments(() => return arguments) // true'),
    p({ class: 'alias' }, 'alias isArgs, is.arguments, is.args'),

    h3({ id: 'functions-uuid' }, 'isUUID'),
    Pre.View('isUUID(uuid) // true'),
    p({ class: 'alias' }, 'alias is.uuid'),

    h3({ id: 'functions-eq' }, 'isEq'),
    Pre.View("isEq(42, 'number') // true"),
    p({ class: 'alias' }, 'alias isEqual isEq is.equal is.eq is.is'),

    h3({ id: 'functions-not' }, 'isNot'),
    Pre.View("isNot(42, 'number') // true"),
    p({ class: 'alias' }, 'alias is.neq, isNeq, is.not'),

    h3({ id: 'functions-deepequal' }, 'isDeepEqual'),
    Pre.View('isDeepEqual([1, 2, 3], [1, 2, 3]) // true'),
    p({ class: 'alias' }, 'alias is.deep.eq, is.deep.equal'),

    h3({ id: 'functions-deepdifferent' }, 'isDeepDifferent'),
    Pre.View('isDeepDifferent([1, 2, 3], [1, 2, 3]) // false'),
    p({ class: 'alias' }, 'alias is.deep.diff, is.deep.different'),
  ],
}
