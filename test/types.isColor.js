import ava from 'ava'
import { isColor } from '../src'
import {
  rgb, rgba,
  hex3, hex6,
  hexa4, hexa8,
  arr, obj,
} from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isColor(rgb))
    t.false(isColor(obj))
  }
)

ava(
  'should return true for colors',
  t => {
    t.true(isColor(rgb))
    t.true(isColor(rgba))
    t.true(isColor(hex3))
    t.true(isColor(hex6))
    t.true(isColor(hexa4))
    t.true(isColor(hexa8))
  }
)

ava(
  'should return false for non colors',
  t => {
    t.false(isColor(obj))
    t.false(isColor(arr))
  }
)
