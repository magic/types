import ava from 'ava'
import { isString } from '../src'
import { bool, arr, str, obj } from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isString(str))
    t.false(isString(bool.f))
  }
)

ava(
  'should return true for strings',
  t => {
    t.true(isString(str))
  }
)

ava(
  'should return false for non strings',
  t => {
    t.false(isString(obj))
    t.false(isString(arr))
  }
)

