export function isArray(e: unknown): e is unknown[]
export function isBoolean(e: unknown): e is boolean
export function isDefined(e: unknown): e is NonNullable<unknown>
export function isUndefined(e: unknown): e is undefined
export function isFunction(e: unknown): e is Function
export function isAsyncFunction(e: unknown): e is (...args: unknown[]) => Promise<unknown>
export function isGeneratorFunction(e: unknown): e is GeneratorFunction
export function isNumber(e: unknown): e is number
export function isInteger(e: unknown): e is number
export function isFloat(e: unknown): e is number
export function isObject(e: unknown): e is object
export function isObjectNative(e: unknown): e is Record<string, unknown>
export function isMergeableObject(e: unknown): e is Record<string, unknown>
/**
 * Alias for isMergeableObject
 * @type {(e: unknown) => e is Record<string, unknown>}
 */
export const isMergeable: (e: unknown) => e is Record<string, unknown>
export function isString(e: unknown): e is string
export function isRGBValue(e: unknown): e is {
  r: number
  g: number
  b: number
}
export function isRGBObject(e: unknown): e is {
  r: number
  g: number
  b: number
}
export function isRGBAValue(e: unknown): e is {
  r: number
  g: number
  b: number
  a: number
}
export function isRGBAObject(e: unknown): e is {
  r: number
  g: number
  b: number
  a: number
}
export const hexRegex: RegExp
export function isHexColor(e: unknown): boolean
export function isHexColor3(e: unknown): boolean
export function isHexColor4(e: unknown): boolean
export function isHexColor6(e: unknown): boolean
export function isHexColor8(e: unknown): boolean
export function isHexAlphaColor(e: unknown): boolean
export function isHexAlphaColor4(e: unknown): boolean
export function isHexAlphaColor8(e: unknown): boolean
export function isColor(e: unknown): boolean
export function isTruthy(e: unknown): boolean
export function isFalsy(e: unknown): boolean
export function getLength(arg: unknown): number
export function compareCount(len: unknown, e: unknown): boolean
/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
export function isLengthEqual(a: unknown, b: unknown): boolean
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
export function isLengthEqual(a: unknown): (c: unknown) => boolean
/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
export function isLengthGreater(a: unknown, b: unknown): boolean
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
export function isLengthGreater(a: unknown): (c: unknown) => boolean
/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
export function isLengthGreaterOrEqual(a: unknown, b: unknown): boolean
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
export function isLengthGreaterOrEqual(a: unknown): (c: unknown) => boolean
/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
export function isLengthSmaller(a: unknown, b: unknown): boolean
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
export function isLengthSmaller(a: unknown): (c: unknown) => boolean
/**
 * @overload
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
export function isLengthSmallerOrEqual(a: unknown, b: unknown): boolean
/**
 * @overload
 * @param {unknown} a
 * @returns {(c: unknown) => boolean}
 */
export function isLengthSmallerOrEqual(a: unknown): (c: unknown) => boolean
export function isEmpty(e: unknown): boolean
export function isIterable(e: unknown): e is Iterable<unknown>
export function isEmail(e: unknown): e is string
export function isNull(e: unknown): e is null
export function isUndefinedOrNull(e: unknown): e is null | undefined
export function isBuffer(e: unknown): e is Buffer
export function isPromise(e: unknown): e is Promise<unknown>
/**
 * Alias for isPromise
 * @type {(e: unknown) => e is Promise<unknown>}
 */
export const isThenable: (e: unknown) => e is Promise<unknown>
export function isArguments(e: unknown): e is IArguments
export function isUUID(e: unknown): boolean
export function isType(e: unknown, ...types: string[]): boolean
export function isTypes(e: unknown, ...types: string[]): boolean
export function isNot(e: unknown, ...types: string[]): boolean
export function isSameType(a: unknown, b: unknown): boolean
export function isComparable(a: unknown): a is string | number | boolean
export function isEvery<T>(arr: T | T[], t: ((v: T) => boolean) | string): boolean
export function isSome<T>(arr: T | T[], t: ((v: T) => boolean) | string): boolean
export function isNone<T>(arr: T | T[], t: ((v: T) => boolean) | string): boolean
export function isInstanceOf(e: unknown, t: new (...args: any[]) => any): boolean
export function isError(e: unknown): e is Error
export function isDate(e: unknown): e is Date
export function isRegExp(e: unknown): e is RegExp
export function isMap(a: unknown): a is Map<unknown, unknown>
export function isSet(a: unknown): a is Set<unknown>
export function isWeakMap(a: unknown): a is WeakMap<any, unknown>
export function isWeakSet(a: unknown): a is WeakSet<any>
export function isUpperCase(s: unknown): s is string
export function isLowerCase(s: unknown): s is string
export function isOwnProp<K extends string | number | symbol>(
  o: unknown,
  k: K,
): o is Record<K, unknown>
export function isOwnProperty<K extends string | number | symbol>(
  o: unknown,
  k: K,
): o is Record<K, unknown>
export function isModule(s: unknown): s is object & {
  [Symbol.toStringTag]: 'Module'
}
/**
 * Check if a string is upper or lower case depending on mode
 * @type {((s: unknown, c?: 'up' | 'down') => boolean) & {
 *   upper: (s: unknown) => boolean,
 *   lower: (s: unknown) => boolean
 * }}
 */
export const isCase: ((s: unknown, c?: 'up' | 'down') => boolean) & {
  upper: (s: unknown) => boolean
  lower: (s: unknown) => boolean
}
