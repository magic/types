/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
export function equal(a: unknown, b: unknown): boolean
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
export function equal(a: unknown): (c: unknown) => boolean
export default equal
