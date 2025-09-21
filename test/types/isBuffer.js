import is, { isBuffer } from '../../src/index.js'

export default [
  {
    fn: () => isBuffer(Buffer.from('test', 'utf8')),
    info: 'isBuffer should handle Buffer.from("string")',
    expect: true,
  },
  {
    fn: () => is.isBuffer(Buffer.from('test', 'utf8')),
    info: 'is.isBuffer should handle Buffer.from("string")',
    expect: true,
  },
  {
    fn: () => is.buffer(Buffer.from('test', 'utf8')),
    info: 'is.buffer should handle Buffer.from("string")',
    expect: true,
  },
  {
    fn: () => is.buff(Buffer.from('test', 'utf8')),
    info: 'is.buff should handle Buffer.from("string")',
    expect: true,
  },
  { fn: () => is.buff('string'), info: 'isBuffer should return false for strings', expect: false },
  { fn: () => is.buff([]), info: 'isBuffer should return false for empty arrays', expect: false },
  { fn: () => is.buff(0), info: 'isBuffer should return false for numbers', expect: false },
  { fn: () => is.buff(['test']), info: 'isBuffer should return false for arrays', expect: false },
  {
    fn: () => is.buff({ copy: true }),
    info: 'isBuffer should return false for objects with copy prop',
    expect: false,
  },
  {
    fn: () => is.buff({ slice: true }),
    info: 'isBuffer should return false for objects with slice prop',
    expect: false,
  },
  {
    fn: () => is.buff({ slice: () => {}, copy: () => {} }),
    info: 'isBuffer should return false for objects with slice and copy functions',
    expect: false,
  },
]
