import ava from 'ava'
import { isDefined } from '../index'
import { bool, undef, str, int } from './_defaultValues'

ava(
  'always return boolean values',
  t => {
    t.true(isDefined(bool.t))
    t.false(isDefined(undef))
  }
)

ava(
  'should return true for defined values',
  t => {
    t.true(isDefined(str))
    t.true(isDefined(int))
    t.true(isDefined(bool.f))
  }
)

ava(
  'should return false for undefined values',
  t => {
    t.false(isDefined(undef))
  }
)
