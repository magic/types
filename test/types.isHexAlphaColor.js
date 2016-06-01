import ava from 'ava'
import { isHexAlphaColor } from '../src'
import {
  rgb, rgba,
  hex3, hex6,
  hexa4, hexa8,
  obj, str,
} from './_defaultValues'

ava(
  'should always return booleans',
  t => {
    t.true(isHexAlphaColor(hexa4))
    t.false(isHexAlphaColor(rgb))
  }
)

ava(
  'should return true for hex strings with 4 and 8 color values',
  t => {
    t.true(isHexAlphaColor(hexa4))
    t.true(isHexAlphaColor(hexa8))
  }
)

ava(
  'should return false for non color objects and other types',
  t => {
    t.false(isHexAlphaColor(hex3))
    t.false(isHexAlphaColor(hex6))
    t.false(isHexAlphaColor(obj))
    t.false(isHexAlphaColor(str))
    t.false(isHexAlphaColor(rgb))
    t.false(isHexAlphaColor(rgba))
  }
)
