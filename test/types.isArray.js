import test from 'ava'
import { isArray } from '../src'
import { arr, str, obj, undef } from './_defaultValues'

test(
  'always return boolean values',
  t => {
    t.true(isArray(arr))
    t.false(isArray(str))
  }
)

test(
  'return true if passed an array',
  t => {
    t.true(isArray(arr))
  }
)

test(
  'return false if passed a string or object',
  t => {
    t.false(isArray(obj))
    t.false(isArray(str))
    t.false(isArray(undef))
  }
)
