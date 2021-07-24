import is, { isBuffer } from '../../src/index.mjs'

export default [
  { fn: () => isBuffer(Buffer.from('test', 'utf8')), expect: true },
  { fn: () => is.isBuffer(Buffer.from('test', 'utf8')), expect: true },
  { fn: () => is.buffer(Buffer.from('test', 'utf8')), expect: true },
  { fn: () => is.buff(Buffer.from('test', 'utf8')), expect: true },
  { fn: () => is.buff('string'), expect: false },
  { fn: () => is.buff([]), expect: false },
  { fn: () => is.buff(0), expect: false },
  { fn: () => is.buff(['test']), expect: false },
  { fn: () => is.buff({ copy: true }), expect: false },
  { fn: () => is.buff({ slice: true }), expect: false },
  { fn: () => is.buff({ slice: () => {}, copy: () => {} }), expect: false },
]
