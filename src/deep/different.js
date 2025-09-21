import is from '../lib.js'

import equal from './equal.js'

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
export const different = (a, b) => {
  if (is.undefined(b)) {
    if (is.undefined(a)) {
      return false
    }

    return c => different(a, c)
  }

  return !equal(a, b)
}

export default different
