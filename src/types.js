var objProto = Object.prototype
  , getOwnPropertyNames = Object.getOwnPropertyNames
  , toStr = objProto.toString
;

export function cleanType(t) {
  if ( t === 'array' ) {
    t = '[object Array]';
  } else if ( t === 'nodeList' || t === 'nodelist' ) {
    t = '[object NodeList]';
  } else if ( t === 'object' ) {
    t = '[object Object]';
  }
  return t;
}

export function cleanTypes(types) {
  if ( isS(types) ) {
    return cleanType(t);
  }
  if ( isA(types) ) {
    for ( var i = 0; i < types.length; i++ ) {
      if ( isA(types[i]) ) {
        types[i] = cleanTypes(types[i]);
      } else if ( isS(types[i]) ) {
        types[i] = cleanType(types[i]);
      }
    }
  }
  return types;
}

export function test(ele, types) {
  if ( isS(types) ) {
    types = cleanType(types);
    return ( toStr.call(ele) === types || typeof ele === types );
  }
  var res = false;
  if ( isA(types) ) {
    types.forEach( (t) => {
      if ( ! res ) {
        res = test(ele, t);
      }
    });
  }
  return res;
}

export function is(ele, ...types) {
  return test(ele, types);
}

export function not(ele, ...types) {
  return ! test(ele, types);
}

export function isA(ele) { return toStr.call(ele) === '[object Array]'; }
export function isB(ele) { return typeof ele === 'boolean'; }
export function isD(ele) { return typeof ele !== 'undefined'; }
export function isF(ele) { return typeof ele === 'function'; }
export function isN(ele) { return typeof ele === 'number'; }
export function isO(ele) { return toStr.call(ele) === '[object Object]'; }
export function isS(ele) { return typeof ele === 'string'; }

export function isDate(ele) { return ele.constructor === Date; }

export function isTruthy(ele) { return !! ele; }
export function isFalsy(ele) { return ! ele || isEmpty(ele); }

export function isEmpty(ele) {
  if ( ! ele ) { return true; }
  if ( isA(ele) && ele.length === 0 ) { return true };
  if ( isO(ele) && getOwnPropertyNames(ele).length === 0 ) { return true }
  return false;
}

//browser only
export function isNL(ele){ return toStr.call(ele) === '[object NodeList]'; }
