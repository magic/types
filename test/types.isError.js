import ava from 'ava'
import { isError } from '../src'
import { error, bool } from './_defaultValues'

ava(
  'always return booleans',
  t => {
    t.true(isError(error))
    t.false(isError(bool.t))
  }
)

ava(
  'return true for javascript Errors',
  t => {
    t.true(isError(error))
  }
)

ava(
  'return false for non errors',
  t => {
    t.false(isError('false'))
    t.false(isError(0))
    t.false(isError(false))
  }
)
