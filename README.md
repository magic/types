# magic-types
minimal typechecking utilities

usage:
```js
  var isStr = require('magic-types').isStr;
  var str = 'magic';
  if ( isStr(str) ) {
    console.log('str is a string: ' + str); //yay
  }
  if ( is(str, 'string') ) {
    console.log('str is string: ' + str); //yay
  }
  if ( not(str, 'object') ) {
    console.log('str is not an object: ' + str); //yay
  }

  //aliases
  isArray    = isArr  = arr  = isA;
  isBoolean  = isBool = bool = isB;
  isDefined  = isDef  = def  = isD;
  isFunction = isFn   = fn   = isF;
  isNumber   = isNum  = num  = isN;
  isObject   = isObj  = obj  = isO;
  isString   = isStr  = str  = isS;
  isDate                     = date;
  isEmpty                    = empty;
  isTruthy                   = truthy;
  isFalsy                    = falsy;
  isNodeList = isNL          = nl;
```
