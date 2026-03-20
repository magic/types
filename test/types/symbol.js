import is, { isSymbol } from '../../src/index.js'

export default [
  { fn: isSymbol(Symbol('testing')), info: 'isSymbol returns true for symbols' },
  { fn: is.symbol(Symbol('testing')), info: 'is.symbol returns true for symbols' },
  { fn: is.sym(Symbol('testing')), info: 'is.sym returns true for symbols' },
  { fn: isSymbol('testing'), expect: false, info: 'isSymbol returns false for strings' },
  { fn: isSymbol(true), expect: false, info: 'isSymbol returns false for booleans' },
  { fn: isSymbol([]), expect: false, info: 'isSymbol returns false for arrays' },
  { fn: isSymbol(23), expect: false, info: 'isSymbol returns false for numbers' },
]
