import ava from 'ava'
import { isObject } from '../src'
import { obj, bool, str } from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isObject(obj))
    t.false(isObject(bool.f))
  }
)

ava(
  'should return true for objects',
  t => {
    t.true(isObject(obj))
  }
)

ava(
  'should return false for non objects',
  t => {
    t.false(isObject(str))
  }
)

