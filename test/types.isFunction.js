import ava from 'ava'
import { isFunction } from '../src'
import { func, arr, bool } from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isFunction(func))
    t.false(isFunction(arr))
  }
)

ava(
  'should return true for functions',
  t => {
    t.true(isFunction(func))
  }
)

ava(
  'should return false for non functions',
  t => {
    t.false(isFunction(bool.f))
    t.false(isFunction(bool.t))
    t.false(isFunction(arr))
  }
)
