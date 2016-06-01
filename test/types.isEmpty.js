import ava from 'ava'
import { isEmpty } from '../src'
import { obj, int } from './_defaultValues'

ava(
  'always return booleans',
  t => {
    t.true(isEmpty(''))
    t.false(isEmpty('false'))
  }
)

ava(
  'return true for 0, empty strings, arrays and objects',
  t => {
    t.true(isEmpty(0))
    t.true(isEmpty(''))
    t.true(isEmpty({}))
    t.true(isEmpty([]))
  }
)

ava(
  'return false for non empty strings, including "false"',
  t => {
    t.false(isEmpty('false'))
  }
)

ava(
  'return false for non-zero numbers',
  t => {
    t.false(isEmpty(int))
  }
)

ava(
  'return false for non empty objects',
  t => {
    t.false(isEmpty(obj))
  }
)
