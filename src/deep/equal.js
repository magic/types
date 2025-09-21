// Written by Substack <3

import is from '../lib.js'

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
 * @returns {boolean | ((c: unknown) => boolean)}
 */
export const equal = (a, b) => {
  // curry
  if (is.undefined(b)) {
    if (is.undefined(a)) {
      return true
    }

    return c => equal(a, c)
  }

  if (is.null(b)) {
    return a === b
  }

  // types must match
  if (typeof a !== typeof b) {
    return false
  }

  // bool, string, number, falsy values
  if (is.comparable(a) || is.comparable(b)) {
    return a === b
  }

  // if (is.arguments(a)) {
  //  return is.length.eq(a, b)
  // }

  // Check if both are objects before accessing prototype
  if (!is.object(a) || !is.object(b)) {
    return a === b
  }

  // identical 'prototype' property.
  if ('prototype' in a && 'prototype' in b) {
    return a.prototype === b.prototype
  }

  // real types must match too
  // if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
  //   return false
  // }

  // dates
  if (is.date(a)) {
    return a === b
  }

  /* functions are handled by prototype comparison above */
  // if (is.function(a)) {
  //   if (!is.function(b)) {
  //     return false
  //   }

  //   return a.toString() === b.toString()
  // }

  // buffers
  if (is.buffer(a)) {
    if (!is.buffer(b)) {
      return false
    }

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

  if (is.objectNative(a) || is.array(a)) {
    if (is.array(a)) {
      if (!is.array(b)) {
        return false
      }

      return !a.some((v, i) => v !== b[i])
    }

    if (!is.objectNative(b)) {
      return false
    }

    const aObj = a
    const bObj = b

    const ka = Object.keys(aObj)
    const kb = Object.keys(bObj)

    // having the same number of owned properties (keys incorporates hasOwnProperty)
    if (ka.length !== kb.length) {
      return false
    }

    ka.sort()
    kb.sort()

    // ~~~cheap key test
    for (let i = 0; i < ka.length; i++) {
      if (ka[i] !== kb[i]) {
        return false
      }
    }

    // equivalent values for every corresponding key, and
    // ~~~possibly expensive deep test
    let key
    for (let i = ka.length - 1; i >= 0; i--) {
      key = ka[i]

      if (!equal(aObj[key], bObj[key])) {
        return false
      }
    }
  }

  return typeof a === typeof b
}

export default equal
