import is, { isCase, isLowerCase, isUpperCase } from '../../src/index.mjs'

const up = 'UPPERCASE'
const low = 'lowercase'

export default [
  { fn: isLowerCase(low), expect: true, info: 'isLowerCase is correct for lowercase strings' },
  { fn: isLowerCase(up), expect: false, info: 'isLowerCase is correct for uppercase strings' },

  { fn: isUpperCase(up), expect: true, info: 'isUpperCase is correct for uppercase strings' },
  { fn: isUpperCase(low), expect: false, info: 'isUpperCase is correct for lowercase strings' },

  { fn: isLowerCase(23), expect: false, info: 'isLowerCase numbers return false' },
  { fn: isLowerCase([]), expect: false, info: 'isLowerCase arrays return false' },
  { fn: isLowerCase({}), expect: false, info: 'isLowerCase objects return false' },

  { fn: isUpperCase(23), expect: false, info: 'isUpperCase numbers return false' },
  { fn: isUpperCase([]), expect: false, info: 'isUpperCase arrays return false' },
  { fn: isUpperCase({}), expect: false, info: 'isUpperCase objects return false' },

  { fn: isCase(low, 'low'), expect: true, info: 'is.case is correct for lowercase strings as up' },
  { fn: is.case(low, 'low'), expect: true, info: 'is.case is correct for lowercase strings as up' },
  {
    fn: is.case(up, 'low'),
    expect: false,
    info: 'is.case is correct for uppercase strings as low',
  },
  { fn: is.case(up, 'up'), expect: true, info: 'is.case is correct for uppercase strings as up' },
  { fn: is.case(low, 'up'), expect: false, info: 'is.case is correct for lowercase strings as up' },
  { fn: is.case(up), expect: true, info: 'default checks for uppercase' },
  { fn: is.case(low), expect: false, info: 'default checks for uppercase' },
]
