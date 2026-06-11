// Written by Substack <3

import {
  isArray,
  isBuffer,
  isDate,
  isFunction,
  isNull,
  isObject,
  isObjectNative,
  isUndefined,
} from '../fns.js'

/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
/**
 * @param {unknown} a
 * @param {unknown} [b]
 * @param {object} [options]
 * @param {boolean} [options.strict=false]
 * @param {boolean} [options.arrayOrderStrict=true]
 * @returns {boolean | ((c: unknown) => boolean)}
 */
export const equal = (a, b, options = {}) => {
  const { strict = false, arrayOrderStrict = false } = options

  // curry
  if (isUndefined(b)) {
    if (isUndefined(a)) {
      return true
    }

    return c => equal(a, c)
  }

  if (isNull(b)) {
    return a === b
  }

  // types must match
  if (typeof a !== typeof b) {
    return false
  }

  /* functions are handled by their toString value */
  if (isFunction(a) && isFunction(b)) {
    return a.toString() === b.toString()
  }

  if (!isObject(a) || !isObject(b)) {
    return a === b
  }

  // identical 'prototype' property.
  if ('prototype' in a && 'prototype' in b) {
    return a.prototype === b.prototype
  }

  // real types must match too
  if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
    return false
  }

  // dates
  if (isDate(a)) {
    return a.toString() === b.toString()
  }

  // buffers
  if (isBuffer(a) && isBuffer(b)) {
    if (a.length !== b.length) {
      return false
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false
      }
    }

    return true
  }

  if (isArray(a) && isArray(b)) {
    if (!strict && !arrayOrderStrict) {
      a.sort()
      b.sort()
    }

    const allEqual = !a.some((v, i) => !equal(v, b[i]))
    return allEqual
  }

  if (isObjectNative(a) && isObjectNative(b)) {
    const aObj = a
    const bObj = b

    const ka = Object.keys(aObj)
    const kb = Object.keys(bObj)

    // having the same number of owned properties (keys incorporates hasOwnProperty)
    if (ka.length !== kb.length) {
      return false
    }

    if (!strict) {
      ka.sort()
      kb.sort()
    }

    // ~~~cheap key test
    for (let i = 0; i < ka.length; i++) {
      if (ka[i] !== kb[i]) {
        return false
      }
    }

    // equivalent values for every corresponding key, and
    // ~~~ possibly expensive deep test
    return !ka.some(key => !equal(aObj[key], bObj[key]))
  }

  return typeof a === typeof b
}

export default equal
