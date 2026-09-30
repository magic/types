import { Test } from '@magic/test'
import is, { isInstanceOf } from '../../src/index.js'

export default [
  { fn: isInstanceOf(new Date(), Date), expect: true, info: 'is.instance returns true for Date' },
  { fn: is.instance(new Date(), Date), expect: true, info: 'is.instance returns true for Date' },
  {
    fn: is.instance(new Date(), RegExp),
    expect: false,
    info: 'is.instance returns false for new Date() compared to RegExp',
  },
  {
    // @ts-expect-error - intentional: testing undefined constructor
    fn: is.instance(true, undefined),
    expect: false,
    info: 'is.instance returns false for undefined instance',
  },
] satisfies Test[]
