import ava from 'ava'
import { isFalsy } from '../src'
import { bool, str, int } from './_defaultValues'

ava(
  'always return booleans',
  t => {
    t.true(isFalsy(bool.f))
    t.false(isFalsy(bool.t))
  }
)

ava(
  'return true for falsy values, including empty arrays and objects',
  t => {
    t.true(isFalsy(''))
    t.true(isFalsy(bool.f))
    t.true(isFalsy(0))
    t.true(isFalsy({}))
    t.true(isFalsy([]))
  }
)

ava(
  'return false for truthy values, including "false"',
  t => {
    t.false(isFalsy('false'))
    t.false(isFalsy(int))
    t.false(isFalsy(str))
  }
)
