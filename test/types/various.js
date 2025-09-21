// Tests for untested functions in fns.js
// These are the functions most likely causing the 98.57% coverage gap

import * as fns from '../../src/fns.js'

export default [
  // Helper functions that are likely not tested directly
  {
    fn: fns.isRGBValue({ r: 255, g: 0, b: 128 }),
    expect: true,
    info: 'fns.isRGBValue with valid RGB',
  },
  {
    fn: fns.isRGBValue({ r: 255, g: 0 }),
    expect: false,
    info: 'fns.isRGBValue with incomplete RGB',
  },
  {
    fn: fns.isRGBValue({ r: 'red', g: 0, b: 0 }),
    expect: false,
    info: 'fns.isRGBValue with non-numeric value',
  },

  {
    fn: fns.isRGBAValue({ r: 255, g: 0, b: 128, a: 0.5 }),
    expect: true,
    info: 'fns.isRGBAValue with valid RGBA',
  },
  {
    fn: fns.isRGBAValue({ r: 255, g: 0, b: 128 }),
    expect: false,
    info: 'fns.isRGBAValue with incomplete RGBA',
  },
  {
    fn: fns.isRGBAValue({ r: 'red', g: 0, b: 0, a: 1 }),
    expect: false,
    info: 'fns.isRGBAValue with non-numeric value',
  },

  // The compareCount function that's used internally
  {
    fn: fns.compareCount([1, 2, 3], 'abc'),
    expect: true,
    info: 'fns.compareCount with equal lengths',
  },
  {
    fn: fns.compareCount([1, 2], 'abc'),
    expect: false,
    info: 'fns.compareCount with different lengths',
  },

  // The isMergeable alias that might not be tested
  { fn: fns.isMergeable({}), expect: true, info: 'fns.isMergeable with plain object' },
  { fn: fns.isMergeable(new Date()), expect: false, info: 'fns.isMergeable with Date object' },
  { fn: fns.isMergeable(/regex/), expect: false, info: 'fns.isMergeable with RegExp' },

  // The isThenable alias that's identical to isPromise
  { fn: fns.isThenable(new Promise(r => r())), expect: true, info: 'fns.isThenable with Promise' },
  {
    fn: fns.isThenable({ then: () => {} }),
    expect: true,
    info: 'fns.isThenable with thenable object',
  },
  { fn: fns.isThenable({}), expect: false, info: 'fns.isThenable with plain object' },

  // The isArguments function (though it might be commented out in tests)
  { fn: () => typeof fns.isArguments === 'function', expect: true, info: 'fns.isArguments exists' },

  // The isOwnProperty alias
  {
    fn: fns.isOwnProperty({ test: 'value' }, 'test'),
    expect: true,
    info: 'fns.isOwnProperty with own property',
  },
  {
    fn: fns.isOwnProperty({}, 'toString'),
    expect: true,
    info: 'fns.isOwnProperty with inherited property',
  },
  {
    fn: fns.isOwnProperty(null, 'test'),
    expect: false,
    info: 'fns.isOwnProperty with null object',
  },

  // Direct calls to functions that might only be tested through aliases
  { fn: fns.getLength([1, 2, 3]), expect: 3, info: 'fns.getLength with array' },
  { fn: fns.getLength('test'), expect: 4, info: 'fns.getLength with string' },
  { fn: fns.getLength(new Set([1, 2, 3])), expect: 3, info: 'fns.getLength with Set' },
  {
    fn: fns.getLength(
      new Map([
        ['a', 1],
        ['b', 2],
      ]),
    ),
    expect: 2,
    info: 'fns.getLength with Map',
  },
  { fn: fns.getLength(/test/), expect: 4, info: 'fns.getLength with RegExp' },
  { fn: fns.getLength(/(?:)/), expect: 0, info: 'fns.getLength with empty RegExp' },
  { fn: fns.getLength({ a: 1, b: 2 }), expect: 2, info: 'fns.getLength with object' },
  { fn: fns.getLength(5), expect: 5, info: 'fns.getLength with integer' },

  // The hexRegex export (if it's being counted as a function)
  { fn: fns.hexRegex.test('#fff'), expect: true, info: 'fns.hexRegex with valid hex' },
  { fn: fns.hexRegex.test('fff'), expect: false, info: 'fns.hexRegex without hash' },

  // Test the isCase function with different parameters
  { fn: fns.isCase('HELLO'), expect: true, info: 'fns.isCase default (uppercase)' },
  { fn: fns.isCase('hello'), expect: false, info: 'fns.isCase default with lowercase' },
  { fn: fns.isCase('HELLO', 'up'), expect: true, info: 'fns.isCase with up parameter' },
  { fn: fns.isCase('hello', 'down'), expect: true, info: 'fns.isCase with down parameter' },
  {
    fn: fns.isCase('HELLO', 'down'),
    expect: false,
    info: 'fns.isCase uppercase with down parameter',
  },

  // Test the attached properties of isCase
  { fn: fns.isCase.upper('HELLO'), expect: true, info: 'fns.isCase.upper with uppercase' },
  { fn: fns.isCase.upper('hello'), expect: false, info: 'fns.isCase.upper with lowercase' },
  { fn: fns.isCase.lower('hello'), expect: true, info: 'fns.isCase.lower with lowercase' },
  { fn: fns.isCase.lower('HELLO'), expect: false, info: 'fns.isCase.lower with uppercase' },

  // Edge cases for functions that might not be fully covered
  { fn: fns.isInstanceOf([], null), expect: false, info: 'fns.isInstanceOf with null constructor' },
  {
    fn: fns.isInstanceOf([], undefined),
    expect: false,
    info: 'fns.isInstanceOf with undefined constructor',
  },

  // Test isOwnProp with edge cases
  {
    fn: fns.isOwnProp(undefined, 'test'),
    expect: false,
    info: 'fns.isOwnProp with undefined object',
  },
  {
    fn: fns.isOwnProp({ hasOwnProperty: null }, 'test'),
    expect: false,
    info: 'fns.isOwnProp with null hasOwnProperty',
  },
]
