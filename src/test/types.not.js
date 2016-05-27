import ava from 'ava'
import { not } from '../index'
import { str, obj, arr } from './_defaultValues'

ava(
  'return true for falsy comparisons',
  t => {
    t.true(not(str, 'object'))
    t.true(not(obj, 'string'))
    t.true(not(arr, '[object Object]'))
  }
)

ava(
  'return false for valid comparisons',
  t => {
    t.false(not(arr, 'array'))
    t.false(not(obj, 'object'))
    t.false(not(arr, '[object Array]'))
  }
)
