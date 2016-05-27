import ava from 'ava'
import { isIterable } from '../index'
import { arr, bool, obj } from './_defaultValues'

ava(
  'always return booleans',
  t => {
    t.true(isIterable(obj))
    t.false(isIterable(bool.t))
  }
)

ava(
  'return true for Objects and Arrays',
  t => {
    t.true(isIterable(obj))
    t.true(isIterable(arr))
  }
)

ava(
  'return false for non Objects',
  t => {
    t.false(isIterable('false'))
    t.false(isIterable(0))
    t.false(isIterable(false))
  }
)
