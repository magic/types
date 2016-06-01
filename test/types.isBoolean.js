import test from 'ava'
import { isBoolean } from '../src'
import { bool, str, int, undef } from './_defaultValues'

test(
  'always return boolean values',
  t => {
    // test type of returned value
    t.true(isBoolean(bool.t))
    t.false(isBoolean(str))
  }
)

test(
  'return true if passed a boolean true/false',
  t => {
    t.true(isBoolean(bool.t))
    t.true(isBoolean(bool.f))
  }
)

test(
  'return false if passed "true" or "false"',
  t => {
    t.false(isBoolean('true'))
    t.false(isBoolean('false'))
  }
)

test(
  'return false if passed strings, numbers or undefined',
  t => {
    t.false(isBoolean(str))
    t.false(isBoolean(int))
    t.false(isBoolean(undef))
  }
)
