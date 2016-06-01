import ava from 'ava'
import { isEmail } from '../src'
import { email, str, int, bool } from './_defaultValues'

ava(
  'always return booleans',
  t => {
    t.true(isEmail(email))
    t.false(isEmail(str))
  }
)

ava(
  'return true for strings that contain a @',
  t => {
    t.true(isEmail(email))
  }
)

ava(
  'return false for non strings',
  t => {
    t.false(isEmail(int))
    t.false(isEmail(bool.f))
  }
)

ava(
  'return false for strings starting with @',
  t => {
    t.false(isEmail('@types.t'))
  }
)
