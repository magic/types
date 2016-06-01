import ava from 'ava'
import { isHexColor } from '../src'
import {
  rgb, rgba,
  hex3, hex6,
  hexa4, hexa8,
  obj, str,
} from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isHexColor(hex3))
    t.false(isHexColor(rgb))
  }
)

ava(
  'should return true for hex strings with 3, 4, 6 and 8 color values',
  t => {
    t.true(isHexColor(hex3))
    t.true(isHexColor(hex6))
    t.true(isHexColor(hexa4))
    t.true(isHexColor(hexa8))
  }
)

ava(
  'should return false for non color objects and other types',
  t => {
    t.false(isHexColor(obj))
    t.false(isHexColor(str))
    t.false(isHexColor(rgb))
    t.false(isHexColor(rgba))
  }
)
