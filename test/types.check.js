import ava from 'ava'
import { test } from '../src'
import { str, obj, int } from './_defaultValues'

ava(
  'test always return a boolean true/false',
  t => {
    t.true(test(str, 'string'))
    t.false(test(str, 'number'))
  }
)

ava(
  'return true for valid comparisons',
  t => {
    t.true(test(obj, 'object'))
    t.true(test(str, 'string'))
  }
)

ava(
  'return false for invalid comparisons',
  t => {
    t.false(test(obj, 'string'))
    t.false(test(str, 'object'))
  }
)

ava(
  'return true if one type in array matches',
  t => {
    t.true(test(str, ['object', 'string']))
  }
)

ava(
  'return false if none of the items in array match',
  t => {
    t.false(test(obj, ['number', 'string']))
  }
)

ava(
  'return true if at least one argument after the first typematches',
  t => {
    t.true(test(str, ['number'], 'string'))
    t.true(test(str, 'object', 'string'))
  }
)

ava(
  'return false if no argument after the first typematches',
  t => {
    t.false(test(int, ['object'], 'string'))
    t.false(test(int, 'object', 'string'))
  }
)
