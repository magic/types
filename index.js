"use strict";

exports.cleanType = cleanType;
exports.cleanTypes = cleanTypes;
exports.test = test;
exports.is = is;
exports.not = not;
exports.isA = isA;
exports.isB = isB;
exports.isD = isD;
exports.isF = isF;
exports.isN = isN;
exports.isO = isO;
exports.isS = isS;
exports.isDate = isDate;
exports.isTruthy = isTruthy;
exports.isFalsy = isFalsy;
exports.isEmpty = isEmpty;

//browser only
exports.isNL = isNL;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var objProto = Object.prototype,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    toStr = objProto.toString;

function cleanType(t) {
  if (t === "array") {
    t = "[object Array]";
  } else if (t === "nodeList" || t === "nodelist") {
    t = "[object NodeList]";
  } else if (t === "object") {
    t = "[object Object]";
  }
  return t;
}

function cleanTypes(types) {
  if (isS(types)) {
    return cleanType(t);
  }
  if (isA(types)) {
    for (var i = 0; i < types.length; i++) {
      if (isA(types[i])) {
        types[i] = cleanTypes(types[i]);
      } else if (isS(types[i])) {
        types[i] = cleanType(types[i]);
      }
    }
  }
  return types;
}

function test(ele, types) {
  if (isS(types)) {
    types = cleanType(types);
    return toStr.call(ele) === types || typeof ele === types;
  }
  var res = false;
  if (isA(types)) {
    types.forEach(function (t) {
      if (!res) {
        res = test(ele, t);
      }
    });
  }
  return res;
}

function is(ele) {
  for (var _len = arguments.length, types = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    types[_key - 1] = arguments[_key];
  }

  return test(ele, types);
}

function not(ele) {
  for (var _len = arguments.length, types = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    types[_key - 1] = arguments[_key];
  }

  return !test(ele, types);
}

function isA(ele) {
  return toStr.call(ele) === "[object Array]";
}

function isB(ele) {
  return typeof ele === "boolean";
}

function isD(ele) {
  return typeof ele !== "undefined";
}

function isF(ele) {
  return typeof ele === "function";
}

function isN(ele) {
  return typeof ele === "number";
}

function isO(ele) {
  return toStr.call(ele) === "[object Object]";
}

function isS(ele) {
  return typeof ele === "string";
}

function isDate(ele) {
  return ele.constructor === Date;
}

function isTruthy(ele) {
  return !!ele;
}

function isFalsy(ele) {
  return !ele || isEmpty(ele);
}

function isEmpty(ele) {
  if (!ele) {
    return true;
  }
  if (isA(ele) && ele.length === 0) {
    return true;
  };
  if (isO(ele) && getOwnPropertyNames(ele).length === 0) {
    return true;
  }
  return false;
}

function isNL(ele) {
  return toStr.call(ele) === "[object NodeList]";
}

//longExplicitNames
var isArray = isA,
    isBoolean = isB,
    isDefined = isD,
    isFunction = isF,
    isNumber = isN,
    isObject = isO,
    isString = isS,
    isNodeList = isNL
//short
,
    isArr = isA,
    isBool = isB,
    isDef = isD,
    isFn = isF,
    isNum = isN,
    isObj = isO,
    isStr = isS
//s
,
    arr = isA,
    bool = isB,
    def = isD,
    fn = isF,
    num = isN,
    obj = isO,
    str = isS,
    nl = isNL
//special types
,
    date = isDate,
    falsy = isFalsy,
    truthy = isFalsy;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isDefined = isDefined;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
exports.isNodeList = isNodeList;
exports.isArr = isArr;
exports.isBool = isBool;
exports.isDef = isDef;
exports.isFn = isFn;
exports.isNum = isNum;
exports.isObj = isObj;
exports.isStr = isStr;
exports.arr = arr;
exports.bool = bool;
exports.def = def;
exports.fn = fn;
exports.num = num;
exports.obj = obj;
exports.str = str;
exports.nl = nl;
exports.date = date;
exports.falsy = falsy;
exports.truthy = truthy;
