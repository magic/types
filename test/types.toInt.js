import test from 'ava'
import { toInt, isInteger } from '../src'
import { float, int, obj, str, undef } from './_defaultValues'

test(
  'always return correct types or false',
  t => {
    t.true(isInteger(toInt(float)))
    t.true(isInteger(toInt(int)))
  }
)

test(
  'return true if passed an int or float',
  t => {
    t.true(isInteger(toInt(int)))
    t.true(isInteger(toInt(float)))
  }
)

test(
  'return false if passed a non int or float',
  t => {
    t.false(isInteger(toInt(obj)))
    t.false(isInteger(toInt(str)))
    t.false(isInteger(toInt(undef)))
  }
)
