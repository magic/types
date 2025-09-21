import is, { isArguments } from '../../src/index.js'

export default [
  {
    fn: () =>
      (function () {
        return isArguments(arguments)
      })(),
    info: 'can detect function "arguments" keyword',
  },
  {
    fn: () =>
      (function () {
        return is.arguments(arguments)
      })(),
    info: '"is.arguments" alias works',
  },
  {
    fn: () =>
      (function () {
        return is.args(arguments)
      })(),
    info: 'is.args alias works',
  },
  {
    fn: () =>
      (function () {
        return is.isArgs(arguments)
      })(),
    info: '"isArgs" works',
  },
  {
    fn: () =>
      (function (...args) {
        return isArguments(args)
      })(),
    expect: false,
    info: 'spread arguments are not arguments',
  },
  { fn: isArguments(() => {}), expect: false, info: 'a function is not arguments' },
]
