const types = require("../src")

const fn = {
  isArray: [
    { fn: () => types.isArray(["test", "test2"]), expect: true },
    { fn: () => types.isArray(["test"]), expect: true },
    { fn: () => types.isArray([]), expect: true },
    { fn: () => types.isArray(1), expect: false },
    { fn: () => types.isArray("string"), expect: false },
    { fn: () => types.isArray(""), expect: false }
  ],
  isBoolean: [
    { fn: () => types.isBoolean(true), expect: true },
    { fn: () => types.isBoolean(false), expect: true },
    { fn: () => types.isBoolean(0), expect: false },
    { fn: () => types.isBoolean(1), expect: false },
    { fn: () => types.isBoolean("true"), expect: false }
  ],
  isDefined: [
    { fn: () => types.isDefined([1, 2, 3]), expect: true },
    { fn: () => types.isDefined(true), expect: true },
    { fn: () => types.isDefined(false), expect: true },
    { fn: () => types.isDefined("true"), expect: true },
    { fn: () => types.isDefined(0), expect: true },
    { fn: () => types.isDefined(""), expect: true },
    { fn: () => types.isDefined({}), expect: true },
    { fn: () => types.isDefined([]), expect: true },
    { fn: () => types.isDefined(() => {}), expect: true },
    { fn: () => types.isDefined(1.1), expect: true },
    { fn: () => types.isDefined(0), expect: true },
    { fn: () => types.isDefined({ t: "t" }), expect: true },
    { fn: () => types.isDefined("string"), expect: true },
    { fn: () => types.isDefined("m@m.m"), expect: true },
    { fn: () => types.isDefined(/test/), expect: true },
    { fn: () => types.isDefined(null), expect: true },
    { fn: () => types.isDefined(new Date()), expect: true },
    { fn: () => types.isDefined(new Error("test")), expect: true }
  ],
  isFunction: [
    { fn: () => types.isFunction(() => {}), expect: true },
    { fn: () => types.isFunction(function() {}), expect: true },
    { fn: () => types.isFunction(0), expect: false },
    { fn: () => types.isFunction(true), expect: false },
    { fn: () => types.isFunction([1, 2, 3]), expect: false },
    { fn: () => types.isFunction({ t: "t" }), expect: false }
  ],
  isNumber: [
    { fn: () => types.isNumber(1), expect: true },
    { fn: () => types.isNumber(1.1), expect: true },
    { fn: () => types.isNumber(Infinity), expect: true },
    { fn: () => types.isNumber([1, 2, 3]), expect: false },
    { fn: () => types.isNumber([]), expect: false },
    { fn: () => types.isNumber({}), expect: false },
    { fn: () => types.isNumber({ t: "t" }), expect: false },
    { fn: () => types.isNumber("test"), expect: false },
    { fn: () => types.isNumber("test"), expect: false }
  ],
  isInteger: [
    { fn: () => types.isInteger(1), expect: true },
    { fn: () => types.isInteger(0), expect: true },
    { fn: () => types.isInteger(1000), expect: true },
    { fn: () => types.isInteger(1000.0), expect: true },
    { fn: () => types.isInteger(1000.1), expect: false },
    { fn: () => types.isInteger(1.1), expect: false },
    { fn: () => types.isInteger(0.0), expect: true }
  ],
  isFloat: [
    { fn: () => types.isFloat(1.1), expect: true },
    { fn: () => types.isFloat(0.0), expect: true },
    { fn: () => types.isFloat(1.0), expect: true },
    { fn: () => types.isFloat(1000.1), expect: true },
    { fn: () => types.isFloat(1), expect: true },
    { fn: () => types.isFloat(0), expect: true },
    { fn: () => types.isFloat("string"), expect: false },
    { fn: () => types.isFloat([]), expect: false },
    { fn: () => types.isFloat([1, 2, 3]), expect: false },
    { fn: () => types.isFloat({}), expect: false },
    { fn: () => types.isFloat({ t: "t" }), expect: false }
  ],
  isObject: [
    { fn: () => types.isObject([1, 2, 3]), expect: true },
    { fn: () => types.isObject([]), expect: true },
    { fn: () => types.isObject({}), expect: true },
    { fn: () => types.isObject({ t: "t" }), expect: true },
    { fn: () => types.isObject(/test/), expect: true },
    { fn: () => types.isObject(new Date()), expect: true },
    { fn: () => types.isObject(new Error("test")), expect: true },
    { fn: () => types.isObject("test"), expect: false },
    { fn: () => types.isObject(0), expect: false },
    { fn: () => types.isObject(new Date().getTime()), expect: false }
  ],
  isString: [
    { fn: () => types.isString("test"), expect: true },
    { fn: () => types.isString(""), expect: true },
    { fn: () => types.isString("true"), expect: true },
    { fn: () => types.isString("m@m.m"), expect: true },
    { fn: () => types.isString(0), expect: false },
    { fn: () => types.isString(1.2), expect: false },
    { fn: () => types.isString([]), expect: false },
    { fn: () => types.isString({}), expect: false },
    { fn: () => types.isString(new Error("test")), expect: false }
  ],
  isNull: [
    { fn: () => types.isNull(null), expect: true },
    { fn: () => types.isNull(false), expect: false },
    { fn: () => types.isNull(undefined), expect: false },
    { fn: () => types.isNull(), expect: false },
    { fn: () => types.isNull([]), expect: false },
    { fn: () => types.isNull({}), expect: false },
    { fn: () => types.isNull(0), expect: false }
  ],
  isUndefinedOrNull: [
    { fn: () => types.isUndefinedOrNull(null), expect: true },
    { fn: () => types.isUndefinedOrNull(undefined), expect: true },
    { fn: () => types.isUndefinedOrNull(), expect: true },
    { fn: () => types.isUndefinedOrNull([]), expect: false }
  ],
  isThenable: [
    { fn: () => types.isThenable({ then: () => {} }), expect: true },
    { fn: () => types.isThenable({}), expect: false },
    { fn: () => types.isThenable("string"), expect: false }
  ],
  isBuffer: [
    { fn: () => types.isBuffer(Buffer.from("test", "utf8")), expect: true },
    { fn: () => types.isBuffer("string"), expect: false },
    { fn: () => types.isBuffer(0), expect: false },
    { fn: () => types.isBuffer(["test"]), expect: false },
    { fn: () => types.isBuffer({ copy: true }), expect: false },
    { fn: () => types.isBuffer({ slice: true }), expect: false },
    {
      fn: () => types.isBuffer({ slice: () => {}, copy: () => {} }),
      expect: false
    }
  ],
  isEmpty: [
    { fn: () => types.isEmpty(""), expect: true },
    { fn: () => types.isEmpty(0), expect: true },
    { fn: () => types.isEmpty([]), expect: true },
    { fn: () => types.isEmpty({}), expect: true },
    { fn: () => types.isEmpty(new Date()), expect: false },
    { fn: () => types.isEmpty(new Error("test")), expect: false },
    { fn: () => types.isEmpty(/test/), expect: false }
  ],
  isArguments: [
    { fn: () => types.isArguments(arguments), expect: true },
    { fn: () => types.isArguments([]), expect: false },
    { fn: () => types.isArguments({}), expect: false }
  ],
  test: [
    { fn: () => types.test(0, "number"), expect: true },
    { fn: () => types.test(0, "string", "array", "number"), expect: true },
    { fn: () => types.test(0, "string"), expect: false },
    { fn: () => types.test(0, "string", "array", "object"), expect: false }
  ],
  is: [
    { fn: () => types.is(0, "number"), expect: true },
    { fn: () => types.is(0, "string", "array", "number"), expect: true },
    { fn: () => types.is(0, "string"), expect: false },
    { fn: () => types.is(0, "string", "array", "object"), expect: false }
  ],
  not: [
    { fn: () => types.not(0, "string", "array", "object"), expect: true },
    { fn: () => types.not(0, "string"), expect: true },
    { fn: () => types.not(0, "string", "array", "number"), expect: false },
    { fn: () => types.not(0, "number"), expect: false }
  ],
  isRGBAObject: [
    { fn: () => types.isRGBAObject({ r: 0, g: 0, b: 0, a: 0 }), expect: true },
    { fn: () => types.isRGBAObject({ r: 0, g: 0, b: 0 }), expect: false },
    { fn: () => types.isRGBAObject({}), expect: false },
    { fn: () => types.isRGBAObject(""), expect: false },
    { fn: () => types.isRGBAObject(), expect: false }
  ],
  isRGBObject: [
    { fn: () => types.isRGBObject({ r: 0, g: 0, b: 0, a: 0 }), expect: true },
    { fn: () => types.isRGBObject({ r: 0, g: 0, b: 0 }), expect: true },
    { fn: () => types.isRGBObject({}), expect: false },
    { fn: () => types.isRGBObject(""), expect: false },
    { fn: () => types.isRGBObject(), expect: false }
  ],
  isHexAlphaColor: [
    { fn: () => types.isHexAlphaColor("#00000000"), expect: true },
    { fn: () => types.isHexAlphaColor("#ffffffff"), expect: true },
    { fn: () => types.isHexAlphaColor("#ffff"), expect: true },
    { fn: () => types.isHexAlphaColor("#ffffff"), expect: false },
    { fn: () => types.isHexAlphaColor(""), expect: false },
    { fn: () => types.isHexAlphaColor("ffffff"), expect: false },
    { fn: () => types.isHexAlphaColor(0), expect: false }
  ],
  isHexColor: [
    { fn: () => types.isHexColor("#ffffffff"), expect: true },
    { fn: () => types.isHexColor("#ffffff"), expect: true },
    { fn: () => types.isHexColor("#ffff"), expect: true },
    { fn: () => types.isHexColor("#fff"), expect: true },
    { fn: () => types.isHexColor(""), expect: false },
    { fn: () => types.isHexColor(0), expect: false },
    { fn: () => types.isHexColor("#fffffff"), expect: false },
    { fn: () => types.isHexColor("#fffff"), expect: false },
    { fn: () => types.isHexColor("fff"), expect: false }
  ],
  isColor: [
    { fn: () => types.isColor("#ffffffff"), expect: true },
    { fn: () => types.isColor("#fffffff"), expect: false },
    { fn: () => types.isColor("#fffff"), expect: false }
  ],
  isTruthy: [
    { fn: () => types.isTruthy("test"), expect: true },
    { fn: () => types.isTruthy(1), expect: true },
    { fn: () => types.isTruthy(["test"]), expect: true },
    { fn: () => types.isTruthy({ t: "t" }), expect: true },
    { fn: () => types.isTruthy("false"), expect: true },
    { fn: () => types.isTruthy(""), expect: false },
    { fn: () => types.isTruthy(0), expect: false },
    { fn: () => types.isTruthy(false), expect: false }
  ],
  isFalsy: [
    { fn: () => types.isFalsy(""), expect: true },
    { fn: () => types.isFalsy(0), expect: true },
    { fn: () => types.isFalsy(false), expect: true },
    { fn: () => types.isFalsy("false"), expect: false },
    { fn: () => types.isFalsy("test"), expect: false },
    { fn: () => types.isFalsy(1), expect: false },
    { fn: () => types.isFalsy(["test"]), expect: false },
    { fn: () => types.isFalsy({ t: "t" }), expect: false }
  ],
  isIterable: [
    { fn: () => types.isIterable({ forEach: () => {} }), expect: true },
    { fn: () => types.isIterable([]), expect: true },
    { fn: () => types.isIterable(Object.keys({})), expect: true },
    { fn: () => types.isIterable({}), expect: false }
  ],
  isEmail: [
    { fn: () => types.isEmail("test@example.com"), expect: true },
    { fn: () => types.isEmail("tes@t@example.com"), expect: true },
    { fn: () => types.isEmail("testmail.com"), expect: false },
    { fn: () => types.isEmail(""), expect: false },
    { fn: () => types.isEmail([]), expect: false },
    { fn: () => types.isEmail({}), expect: false }
  ],
  isUUID: [
    {
      fn: () => types.isUUID("6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
      expect: true
    },
    {
      fn: () => types.isUUID("6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
      expect: true
    },
    {
      fn: () => types.isUUID("6ba7b812-9dad-11d1-80b4-00c04fd430c8"),
      expect: true
    },
    {
      fn: () => types.isUUID("6ba7b814-9dad-11d1-80b4-00c04fd430c8"),
      expect: true
    },
    { fn: () => types.isUUID("6ba7b812-9dad-11d1-80b4"), expect: false },
    {
      fn: () => types.isUUID("6ba7b812-9dad-11d1-80b4-00c04fd430c"),
      expect: false
    },
    {
      fn: () => types.isUUID("zzzzzzzz-9dad-11d1-80b4-00c04fd430c8"),
      expect: false
    },
    { fn: () => types.isUUID("t920tj22t32-tj2f2f223f23"), expect: false },
    { fn: () => types.isUUID(), expect: false },
    { fn: () => types.isUUID(""), expect: false },
    { fn: () => types.isUUID([]), expect: false },
    { fn: () => types.isUUID({}), expect: false },
    { fn: () => types.isUUID(() => {}), expect: false }
  ],
  isError: [
    { fn: () => types.isError(new Error("test")), expect: true },
    { fn: () => types.isError(0), expect: false },
    { fn: () => types.isError("error"), expect: false },
    { fn: () => types.isError("test"), expect: false },
    { fn: () => types.isError({}), expect: false },
    { fn: () => types.isError([]), expect: false }
  ],
  isDate: [
    { fn: () => types.isDate(new Date()), expect: true },
    { fn: () => types.isDate(new Date().getTime()), expect: false },
    { fn: () => types.isDate("test"), expect: false },
    { fn: () => types.isDate(123), expect: false }
  ],
  isRegExp: [
    { fn: () => types.isRegExp(/test/), expect: true },
    { fn: () => types.isRegExp(new RegExp()), expect: true },
    { fn: () => types.isRegExp("test"), expect: false },
    { fn: () => types.isRegExp(0), expect: false },
    { fn: () => types.isRegExp([]), expect: false }
  ]
}

module.exports = fn
