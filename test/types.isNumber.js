import ava from 'ava'
import { isNumber } from '../src'
import { bool, int, float, str } from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isNumber(int))
    t.false(isNumber(bool.f))
  }
)

ava(
  'should return true for ints and floats',
  t => {
    t.true(isNumber(int))
    t.true(isNumber(float))
  }
)

ava(
  'should return false for non numbers',
  t => {
    t.false(isNumber(str))
    t.false(isNumber(bool.t))
  }
)

