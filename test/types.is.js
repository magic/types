import test from 'ava'
import { is } from '../src'
import { obj, arr, str } from './_defaultValues'

test(
  'return true for valid comparisons',
  t => {
    t.true(is(obj, 'object'))
    t.true(is(obj, '[object Object]'))
    t.true(is(arr, '[object Object]'))
  }
)

test(
  'return false for falsy comparisons',
  t => {
    t.false(is(str, 'number'))
    t.false(is(obj, '[object Array]'))
  }
)
