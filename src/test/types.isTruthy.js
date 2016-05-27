import ava from 'ava'
import { isTruthy } from '../index'
import { bool, str, obj } from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isTruthy(bool.t))
    t.false(isTruthy(bool.f))
  }
)

ava(
  'should return true for truthy values, including "false"',
  t => {
    t.true(isTruthy('false'))
    t.true(isTruthy(str))
    t.true(isTruthy(obj))
  }
)

ava(
  'should return false for falsy values',
  t => {
    t.false(isTruthy(''))
    t.false(isTruthy(0))
    t.false(isTruthy(false))
  }
)
