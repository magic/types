import ava from 'ava'
import { isFloat } from '../index'
import { bool, str, int, float } from './_defaultValues'

ava(
  'always return booleans',
  t => {
    t.true(isFloat(float))
    t.false(isFloat(int))
  }
)

ava(
  'return true for floats',
  t => {
    t.true(isFloat(float))
  }
)

ava(
  'return false for non numbers and integers',
  t => {
    t.false(isFloat(str))
    t.false(isFloat(bool))
    t.false(isFloat(int))
  }
)
