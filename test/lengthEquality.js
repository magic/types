const is = require('../src')

module.exports = [
  { fn: is.length.equal(0, []), expect: true, info: 'empty arrays have length 0' },
  { fn: is.length.bigger(0, []), expect: false, info: 'length of empty array is not bigger than 0' },
  { fn: is.length.smaller(0, []), expect: false, info: 'length of empty array is not smaller than 0' },
  { fn: is.length.lte(0, []), expect: true, info: 'length of empty array is lte 0' },
  { fn: is.length.lteq(1, []), expect: false, info: 'length of empty array is not lteq 1' },
  { fn: is.length.lowerequal(-1, []), expect: true, info: 'length of empty array is lte -1' },
  { fn: is.length.gte(0, []), expect: true, info: 'length of empty array is gte 0' },
  { fn: is.length.gte([], 1), expect: false, info: 'length of empty array is not gte 1' },
  { fn: is.length.gte([], -1), expect: true, info: 'length of empty array is not gte -1' },

  { fn: is.length.gte([])(-1), expect: true, info: 'is.ln.gte can be curried' },
  { fn: is.length.lte([])(1), expect: true, info: 'is.ln.lte can be curried' },

  { fn: () => is.length, expect: is.deep.equal(is.ln), info: 'is.length === is.ln' },
  { fn: () => is.length, expect: is.deep.equal(is.count), info: 'is.length === is.count' },
  { fn: () => is.length, expect: is.deep.equal(is.len), info: 'is.length === is.len' },

  { fn: is.ln.eq.toString(), expect: is.isLengthEqual.toString(), info: 'is.ln.eq === is.isLengthEqual' },
  { fn: is.ln.equal.toString(), expect: is.isLengthEqual.toString(), info: 'is.ln.equal === is.isLengthEqual' },

  { fn: is.ln.greater.toString(), expect: is.isLengthGreater.toString(), info: 'is.ln.greater === is.isLengthGreater' },
  { fn: is.ln.gt.toString(), expect: is.isLengthGreater.toString(), info: 'is.ln.gt === is.isLengthGreater' },
  { fn: is.ln.bigger.toString(), expect: is.isLengthGreater.toString(), info: 'is.ln.bigger === is.isLengthGreater' },

  { fn: is.ln.biggerequal.toString(), expect: is.isLengthGreaterOrEqual.toString(), info: 'is.ln.biggerequal === is.isLengthGreaterOrEqual' },
  { fn: is.ln.greaterequal.toString(), expect: is.isLengthGreaterOrEqual.toString(), info: 'is.ln.greaterequal === is.isLengthGreaterOrEqual' },
  { fn: is.ln.gte.toString(), expect: is.isLengthGreaterOrEqual.toString(), info: 'is.ln.gte === is.isLengthGreaterOrEqual' },
  { fn: is.ln.gteq.toString(), expect: is.isLengthGreaterOrEqual.toString(), info: 'is.ln.gteq === is.isLengthGreaterOrEqual' },

  { fn: is.ln.smaller.toString(), expect: is.isLengthSmaller.toString(), info: 'is.ln.smaller === is.isLengthSmaller' },
  { fn: is.ln.lt.toString(), expect: is.isLengthSmaller.toString(), info: 'is.ln.lt === is.isLengthSmaller' },
  { fn: is.ln.lower.toString(), expect: is.isLengthSmaller.toString(), info: 'is.ln.lower === is.isLengthSmaller' },

  { fn: is.ln.lowerequal.toString(), expect: is.isLengthSmallerOrEqual.toString(), info: 'is.ln.lowerequal === is.isLengthSmallerOrEqual' },
  { fn: is.ln.smallerequal.toString(), expect: is.isLengthSmallerOrEqual.toString(), info: 'is.ln.smallerequal === is.isLengthSmallerOrEqual' },
  { fn: is.ln.lte.toString(), expect: is.isLengthSmallerOrEqual.toString(), info: 'is.ln.lte === is.isLengthSmallerOrEqual' },
  { fn: is.ln.lteq.toString(), expect: is.isLengthSmallerOrEqual.toString(), info: 'is.ln.lteq === is.isLengthSmallerOrEqual' },
]