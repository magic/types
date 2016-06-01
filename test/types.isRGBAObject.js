import ava from 'ava'
import { isRGBAObject } from '../src'
import { rgba, rgb, obj, arr } from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isRGBAObject(rgba))
    t.false(isRGBAObject(rgb))
  }
)

ava(
  'should return true for rgba color objects',
  t => {
    t.true(isRGBAObject(rgba))
  }
)

ava(
  'should return false for non color objects, other types and rgb colors',
  t => {
    t.false(isRGBAObject(obj))
    t.false(isRGBAObject(arr))
    t.false(isRGBAObject(rgb))
  }
)
