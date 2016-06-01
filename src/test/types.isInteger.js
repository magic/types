import ava from 'ava'
import { isInteger } from '../index'
import { bool, str, int, float } from './_defaultValues'

ava(
  'always return booleans',
  t => {
    t.true(isInteger(int))
    t.false(isInteger(float))
  }
)

ava(
  'return true for integers',
  t => {
    t.true(isInteger(int))
  }
)

ava(
  'return false for non numbers and floats',
  t => {
    t.false(isInteger(str))
    t.false(isInteger(bool))
    t.false(isInteger(float))
  }
)
