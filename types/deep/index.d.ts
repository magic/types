export const isDeepEqual: {
  /**
   * @overload
   * @param {unknown} a
   * @param {unknown} b
   * @returns {boolean}
   */
  (a: unknown, b: unknown): boolean
  /**
   * @overload
   * @param {unknown} a
   * @returns {(c: unknown) => boolean}
   */
  (a: unknown): (c: unknown) => boolean
}
export const deepEqual: {
  /**
   * @overload
   * @param {unknown} a
   * @param {unknown} b
   * @returns {boolean}
   */
  (a: unknown, b: unknown): boolean
  /**
   * @overload
   * @param {unknown} a
   * @returns {(c: unknown) => boolean}
   */
  (a: unknown): (c: unknown) => boolean
}
export const deepEq: {
  /**
   * @overload
   * @param {unknown} a
   * @param {unknown} b
   * @returns {boolean}
   */
  (a: unknown, b: unknown): boolean
  /**
   * @overload
   * @param {unknown} a
   * @returns {(c: unknown) => boolean}
   */
  (a: unknown): (c: unknown) => boolean
}
export const isDeepDifferent: {
  /**
   * @overload
   * @param {unknown} a
   * @param {unknown} b
   * @returns {boolean}
   */
  (a: unknown, b: unknown): boolean
  /**
   * @overload
   * @param {unknown} a
   * @returns {(c: unknown) => boolean}
   */
  (a: unknown): (c: unknown) => boolean
}
export const deepDifferent: {
  /**
   * @overload
   * @param {unknown} a
   * @param {unknown} b
   * @returns {boolean}
   */
  (a: unknown, b: unknown): boolean
  /**
   * @overload
   * @param {unknown} a
   * @returns {(c: unknown) => boolean}
   */
  (a: unknown): (c: unknown) => boolean
}
export const deepDiff: {
  /**
   * @overload
   * @param {unknown} a
   * @param {unknown} b
   * @returns {boolean}
   */
  (a: unknown, b: unknown): boolean
  /**
   * @overload
   * @param {unknown} a
   * @returns {(c: unknown) => boolean}
   */
  (a: unknown): (c: unknown) => boolean
}
export namespace deep {
  export { different as isDifferent }
  export { different }
  export { different as diff }
  export { equal as isEqual }
  export { equal }
  export { equal as eq }
}
import { different } from './different.js'
import { equal } from './equal.js'
