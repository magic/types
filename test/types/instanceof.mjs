import is from '../../src/index.mjs'

export default [
  { fn: is.instance(new Date(), Date), expect: true, info: 'is.instance returns true for Date' },
  {
    fn: is.instance(new Date(), RegExp),
    expect: false,
    info: 'is.instance returns false for new Date() compared to RegExp',
  },
]
