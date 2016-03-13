'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var objProto = Object.prototype;
var toStr = objProto.toString;

var cleanType = exports.cleanType = function cleanType(t) {
  return t === 'array' && '[object Array]' || t.toLowerCase() === 'nodelist' && '[object NodeList]' || t === 'object' && '[object Object]' || t;
};

var cleanTypes = exports.cleanTypes = function cleanTypes() {
  for (var _len = arguments.length, addTypes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    addTypes[_key - 1] = arguments[_key];
  }

  var types = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var allTypes = addTypes.concat(types);
  var newTypes = allTypes.map(function (t) {
    return cleanType(t);
  });

  return newTypes.length === 1 ? newTypes[0] : newTypes;
};

var test = exports.test = function test(ele) {
  for (var _len2 = arguments.length, addTypes = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    addTypes[_key2 - 2] = arguments[_key2];
  }

  var types = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  if (isString(types) && isEmpty(addTypes)) {
    var type = cleanType(types);
    return toStr.call(ele) === type || (typeof ele === 'undefined' ? 'undefined' : _typeof(ele)) === type;
  }

  var allTypes = addTypes.concat(types);
  var tested = allTypes.some(function (t) {
    return test(ele, t);
  });
  return tested;
};

var is = exports.is = function is(ele) {
  for (var _len3 = arguments.length, types = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    types[_key3 - 1] = arguments[_key3];
  }

  return test(ele, types);
};

var not = exports.not = function not(ele) {
  for (var _len4 = arguments.length, types = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    types[_key4 - 1] = arguments[_key4];
  }

  return !test(ele, types);
};

var isArray = exports.isArray = function isArray(ele) {
  return toStr.call(ele) === '[object Array]';
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
  return parseFloat(ele, 10) === parseFloat(ele, 10);
};

var toInt = exports.toInt = function toInt(ele) {
  return isNumber(ele) && parseInt(ele, 10);
};

var toFloat = exports.toFloat = function toFloat(ele) {
  return isNumber(ele) && parseFloat(ele, 10);
};

var isObject = exports.isObject = function isObject(ele) {
  return (typeof ele === 'undefined' ? 'undefined' : _typeof(ele)) === 'object';
};

var isString = exports.isString = function isString(ele) {
  return typeof ele === 'string';
};

var toString = exports.toString = function toString(ele) {
  return isString(ele) && ele || ele && isFunction(ele.toString) && ele.toString() || ele + '';
};

var isRGBAObject = exports.isRGBAObject = function isRGBAObject(e) {
  return isObject(e) && isNumber(e.r) && isNumber(e.g) && isNumber(e.b) && isNumber(e.a);
};

var isRGBObject = exports.isRGBObject = function isRGBObject(e) {
  return isObject(e) && isNumber(e.r) && isNumber(e.g) && isNumber(e.b);
};

var isHexColor = exports.isHexColor = function isHexColor(c) {
  return (/^#[0-9A-F]{6}$/i.test(c)
  );
};

var isHexAlphaColor = exports.isHexAlphaColor = function isHexAlphaColor(c) {
  return (/^#[0-9A-F]{8}$/i.test(c)
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
  return !ele || isArray(ele) && ele.length === 0 || isObject(ele) && Object.keys(ele).length === 0 || false;
};

var isError = exports.isError = function isError(ele) {
  return Object.getPrototypeOf(ele).name === 'Error';
};

var isNodeList = exports.isNodeList = function isNodeList(ele) {
  return toStr.call(ele) === '[object NodeList]';
};
