import test from 'ava'
import { isNull } from '../src'
import { arr, str, nil } from './_defaultValues'

test(
  'return true for valid comparisons',
  t => {
    t.true(isNull(nil))
  }
)

test(
  'return false for falsy comparisons',
  t => {
    t.false(isNull(str))
    t.false(isNull(arr))
  }
)
