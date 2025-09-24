/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
export function different(a: unknown, b: unknown): boolean
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
export function different(a: unknown): (c: unknown) => boolean
export default different
