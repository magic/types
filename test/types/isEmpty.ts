import { Test } from '@magic/test'
import is, { isEmpty } from '../../src/index.js'

export default [
  { fn: () => isEmpty(''), expect: true },
  { fn: () => is.isEmpty(''), expect: true },
  { fn: () => is.isEmpty(null), expect: true },
  // @ts-expect-error - intentional: no argument for testing
  { fn: () => is.isEmpty(), expect: true },
  // @ts-expect-error - intentional: RegExp with no argument for testing
  { fn: () => is.isEmpty(new RegExp()), expect: true },
  { fn: () => is.empty(''), expect: true },
  { fn: () => is.empty(0), expect: true },
  { fn: () => is.empty([]), expect: true },
  { fn: () => is.empty({}), expect: true },
  { fn: () => is.empty(new Date()), expect: false },
  { fn: () => is.empty(new Error('test')), expect: false },
  { fn: () => is.empty(/test/), expect: false },
  // @ts-expect-error - intentional: RegExp with no argument for testing
  { fn: () => is.empty(new RegExp()), expect: true },
] satisfies Test[]
