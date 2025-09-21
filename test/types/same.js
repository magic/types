import is, { isSameType } from '../../src/index.js'

export default [
  { fn: isSameType('', ''), info: 'isSame can compare two strings' },
  { fn: isSameType(23, 1), info: 'isSame can compare two numbers' },
  { fn: isSameType(true, false), info: 'isSame can compare two booleans' },
  {
    fn: isSameType(
      () => {},
      function () {},
    ),
    info: 'isSame can compare two functions',
  },
  { fn: isSameType(new Date(), new Date()), info: 'isSame can compare two Dates' },
  { fn: isSameType(`temp 1`, `temp 2`), info: 'isSame can compare two templatestrings' },
  { fn: is.same(23, ''), expect: false, info: 'isSame can compare a number and a string' },
  { fn: is.same('', 23), expect: false, info: 'isSame can compare a string and a number' },
  {
    fn: is.sameType('', true),
    expect: false,
    info: 'isSame can compare a string and a boolean true',
  },
  {
    fn: is.sameType('', false),
    expect: false,
    info: 'isSame can compare a string and a boolean false',
  },
  {
    fn: is.isSameType(() => {}, false),
    expect: false,
    info: 'isSame can compare a function and a boolean false',
  },
  {
    fn: is.isSame(23, false),
    expect: false,
    info: 'isSame can compare a number and a boolean false',
  },
]
