import ava from 'ava'
import { isFloat } from '../src'
import { bool, str, int, float, obj } from './_defaultValues'

ava(
  'always return booleans',
  t => {
    t.true(isFloat(float))
    t.false(isFloat(str))
  }
)

ava(
  'return true for floats and ints',
  t => {
    t.true(isFloat(float))
    t.true(isFloat(int))
  }
)

ava(
  'return false for non numbers',
  t => {
    t.false(isFloat(str))
    t.false(isFloat(bool))
    t.false(isFloat(obj))
  }
)
