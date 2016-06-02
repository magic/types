import test from 'ava'
import { toFloat, isFloat } from '../src'
import { float, int, obj, str, undef } from './_defaultValues'

test(
  'always return correct types or false',
  t => {
    t.true(
      isFloat(toFloat(float)),
      'should convert a float to a float'
    )

    t.false(
      isFloat(toFloat(str)),
      'should not convert an int'
    )
  }
)

test(
  'return a float if passed an int or float',
  t => {
    t.true(isFloat(toFloat(int)))
    t.true(isFloat(toFloat(float)))
  }
)

test(
  'return false if passed a non int or float',
  t => {
    t.false(isFloat(toFloat(obj)))
    t.false(isFloat(toFloat(str)))
    t.false(isFloat(toFloat(undef)))
  }
)
