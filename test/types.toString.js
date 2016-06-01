import ava from 'ava'
import { toString, isString } from '../src'
import { str, undef, int, float } from './_defaultValues'

ava(
  'always return string values or null',
  t => {
    t.true(isString(toString(str)))
    t.falsy(
      toString(undef),
      'elements that have no toString function should return falsy values')
  }
)

ava(
  'should return strings for strings and values with a toString function',
  t => {
    t.true(isString(toString(str)))
    t.true(isString(toString(int)))
    t.true(isString(toString(float)))
  }
)

