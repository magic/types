import ava from 'ava'
import { isDate } from '../index'
import { bool, arr, date, obj } from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isDate(date))
    t.false(isDate(bool.f))
  }
)

ava(
  'should return true for dates',
  t => {
    t.true(isDate(date))
  }
)

ava(
  'should return false for non dates',
  t => {
    t.false(isDate(obj))
    t.false(isDate(arr))
  }
)
