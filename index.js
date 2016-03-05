'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var objProto = Object.prototype;
var toStr = objProto.toString;

var cleanType = function cleanType(t) {
  return t === 'array' && '[object Array]' || t.toLowerCase() === 'nodelist' && '[object NodeList]' || t === 'object' && '[object Object]' || t;
};

exports.cleanType = cleanType;
var cleanTypes = function cleanTypes() {
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

exports.cleanTypes = cleanTypes;
var test = function test(ele) {
  for (var _len2 = arguments.length, addTypes = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    addTypes[_key2 - 2] = arguments[_key2];
  }

  var types = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  if (isString(types) && isEmpty(addTypes)) {
    var type = cleanType(types);
    return toStr.call(ele) === type || typeof ele === type;
  }

  var allTypes = addTypes.concat(types);
  var tested = allTypes.some(function (t) {
    return test(ele, t);
  });
  return tested;
};

exports.test = test;
var is = function is(ele) {
  for (var _len3 = arguments.length, types = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    types[_key3 - 1] = arguments[_key3];
  }

  return test(ele, types);
};

exports.is = is;
var not = function not(ele) {
  for (var _len4 = arguments.length, types = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    types[_key4 - 1] = arguments[_key4];
  }

  return !test(ele, types);
};

exports.not = not;
var isArray = function isArray(ele) {
  return toStr.call(ele) === '[object Array]';
};

exports.isArray = isArray;
var isBoolean = function isBoolean(ele) {
  return typeof ele === 'boolean';
};

exports.isBoolean = isBoolean;
var isDefined = function isDefined(ele) {
  return typeof ele !== 'undefined';
};

exports.isDefined = isDefined;
var isFunction = function isFunction(ele) {
  return typeof ele === 'function';
};

exports.isFunction = isFunction;
var isNumber = function isNumber(ele) {
  return parseFloat(ele, 10) === parseFloat(ele, 10);
};

exports.isNumber = isNumber;
var toInt = function toInt(ele) {
  return isNumber(ele) && parseInt(ele, 10);
};

exports.toInt = toInt;
var toFloat = function toFloat(ele) {
  return isNumber(ele) && parseFloat(ele, 10);
};

exports.toFloat = toFloat;
var isObject = function isObject(ele) {
  return typeof ele === 'object';
};

exports.isObject = isObject;
var isString = function isString(ele) {
  return typeof ele === 'string';
};

exports.isString = isString;
var toString = function toString(ele) {
  return isString(ele) && ele || ele && isFunction(ele.toString) && ele.toString() || ele + '';
};

exports.toString = toString;
var isRGBAObject = function isRGBAObject(e) {
  return isObject(e) && isNumber(e.r) && isNumber(e.g) && isNumber(e.b) && isNumber(e.a);
};

exports.isRGBAObject = isRGBAObject;
var isRGBObject = function isRGBObject(e) {
  return isObject(e) && isNumber(e.r) && isNumber(e.g) && isNumber(e.b);
};

exports.isRGBObject = isRGBObject;
var isHexColor = function isHexColor(c) {
  return (/^#[0-9A-F]{6}$/i.test(c)
  );
};

exports.isHexColor = isHexColor;
var isHexAlphaColor = function isHexAlphaColor(c) {
  return (/^#[0-9A-F]{8}$/i.test(c)
  );
};

exports.isHexAlphaColor = isHexAlphaColor;
var isColor = function isColor(e) {
  return isRGBAObject(e) || isRGBObject(e) || isHexColor(e) || isHexAlphaColor(e);
};

exports.isColor = isColor;
var isDate = function isDate(ele) {
  return ele.constructor === Date;
};

exports.isDate = isDate;
var isTruthy = function isTruthy(ele) {
  return !!ele;
};

exports.isTruthy = isTruthy;
var isFalsy = function isFalsy(ele) {
  return !ele || isEmpty(ele);
};

exports.isFalsy = isFalsy;
var isEmpty = function isEmpty(ele) {
  return !ele || isArray(ele) && ele.length === 0 || isObject(ele) && Object.keys(ele).length === 0 || false;
};

exports.isEmpty = isEmpty;
var isError = function isError(ele) {
  return Object.getPrototypeOf(ele).name === 'Error';
};

exports.isError = isError;
var isNodeList = function isNodeList(ele) {
  return toStr.call(ele) === '[object NodeList]';
};

exports.isNodeList = isNodeList;
var isHexString = function isHexString(ele) {
  return isString(ele) && ele[0] === '#';
};
exports.isHexString = isHexString;
