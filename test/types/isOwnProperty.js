import { isOwnProp, isOwnProperty } from '../../src/fns.js'

export default [
  {
    fn: isOwnProperty(undefined, 'try'),
    expect: false,
    info: 'isOwnProperty without argument returns false',
  },
  {
    fn: isOwnProp({ test: undefined }, 'test'),
    info: 'isOwnProperty returns true for undefined but existing keys',
  },
  { fn: isOwnProp({ test: true }, 'test'), info: 'isOwnProperty returns true for defined keys' },
  {
    fn: isOwnProp({ test: true }, 'test2'),
    expect: false,
    info: 'isOwnProperty with non-existant key returns false',
  },
]
