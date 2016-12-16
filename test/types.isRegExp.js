import ava from 'ava'
import { isRegExp } from '../src'
import { bool, arr, obj, regexp } from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isRegExp(regexp))
    t.false(isRegExp(bool.f))
  }
)

ava(
  'should return true for regexes',
  t => {
    t.true(isRegExp(regexp))
  }
)

ava(
  'should return false for non regexes',
  t => {
    t.false(isRegExp(obj))
    t.false(isRegExp(arr))
  }
)
