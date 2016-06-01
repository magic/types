import ava from 'ava'
import { isRGBObject } from '../src'
import { rgb, obj, arr, str } from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isRGBObject(rgb))
    t.false(isRGBObject(str))
  }
)

ava(
  'should return true for rgb color objects',
  t => {
    t.true(isRGBObject(rgb))
  }
)

ava(
  'should return false for non color objects and other types',
  t => {
    t.false(isRGBObject(obj))
    t.false(isRGBObject(arr))
  }
)
