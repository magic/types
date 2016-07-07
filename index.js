'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var test = exports.test = function test(ele, types) {
  for (var _len = arguments.length, addTypes = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    addTypes[_key - 2] = arguments[_key];
  }

  if (isString(types) && isEmpty(addTypes)) {
    return Object.prototype.toString(ele) === types || (typeof ele === 'undefined' ? 'undefined' : _typeof(ele)) === types;
  }

  return addTypes.concat(types).some(function (t) {
    return test(ele, t);
  });
};

var is = exports.is = function is(ele) {
  for (var _len2 = arguments.length, types = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    types[_key2 - 1] = arguments[_key2];
  }

  return test(ele, types);
};

var not = exports.not = function not(ele) {
  for (var _len3 = arguments.length, types = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    types[_key3 - 1] = arguments[_key3];
  }

  return !test(ele, types);
};

var isArray = exports.isArray = function isArray(ele) {
  return isTruthy(ele) && isFunction(ele.forEach);
};

var isBoolean = exports.isBoolean = function isBoolean(ele) {
  return typeof ele === 'boolean';
};

var isDefined = exports.isDefined = function isDefined(ele) {
  return typeof ele !== 'undefined';
};

var isFunction = exports.isFunction = function isFunction(ele) {
  return typeof ele === 'function';
};

var isNumber = exports.isNumber = function isNumber(ele) {
  return ele === +ele;
};

var isInteger = exports.isInteger = function isInteger(ele) {
  return ele === +ele && ele === (ele | 0);
};

var isFloat = exports.isFloat = function isFloat(ele) {
  return ele === +ele;
};

var isObject = exports.isObject = function isObject(ele) {
  return (typeof ele === 'undefined' ? 'undefined' : _typeof(ele)) === 'object';
};

var isString = exports.isString = function isString(ele) {
  return typeof ele === 'string';
};

var isRGBAObject = exports.isRGBAObject = function isRGBAObject(e) {
  return isObject(e) && isNumber(e.r) && isNumber(e.g) && isNumber(e.b) && isNumber(e.a);
};

var isRGBObject = exports.isRGBObject = function isRGBObject(e) {
  return isObject(e) && isNumber(e.r) && isNumber(e.g) && isNumber(e.b);
};

var isHexColor = exports.isHexColor = function isHexColor(c) {
  return (/\#\b([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{8})\b/i.test(c)
  );
};

var isHexAlphaColor = exports.isHexAlphaColor = function isHexAlphaColor(c) {
  return (/\#\b([a-f0-9]{4}|[a-f0-9]{8})\b/i.test(c)
  );
};

var isColor = exports.isColor = function isColor(e) {
  return isRGBAObject(e) || isRGBObject(e) || isHexColor(e) || isHexAlphaColor(e);
};

var isDate = exports.isDate = function isDate(ele) {
  return ele.constructor === Date;
};

var isTruthy = exports.isTruthy = function isTruthy(ele) {
  return !!ele;
};

var isFalsy = exports.isFalsy = function isFalsy(ele) {
  return !ele || isEmpty(ele);
};

var isEmpty = exports.isEmpty = function isEmpty(ele) {
  return !ele || isObject(ele) && Object.keys(ele).length === 0 || false;
};

var isError = exports.isError = function isError(ele) {
  return Object.getPrototypeOf(ele).name === 'Error';
};

var isIterable = exports.isIterable = function isIterable(ele) {
  return (typeof ele === 'undefined' ? 'undefined' : _typeof(ele)) === 'object';
};

var isEmail = exports.isEmail = function isEmail(ele) {
  return typeof ele === 'string' && ele.indexOf('@') > 0;
};

var toInt = exports.toInt = function toInt(ele) {
  if (!isNumber(ele)) {
    return 0;
  }

  return ele | 0;
};

var toFloat = exports.toFloat = function toFloat(ele) {
  if (!isNumber(ele)) {
    return 0;
  }

  return parseFloat(ele, 10);
};

var toString = exports.toString = function toString(ele) {
  if (isString(ele)) {
    return ele;
  }

  if (ele && isFunction(ele.toString)) {
    return ele.toString();
  }

  return ele + '';
};

//# sourceMappingURL=index.js.map