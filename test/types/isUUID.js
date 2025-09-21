import is, { isUUID } from '../../src/index.js'

export default [
  { fn: isUUID('6ba7b810-9dad-11d1-80b4-00c04fd430c8') },
  { fn: is.isUUID('6ba7b810-9dad-11d1-80b4-00c04fd430c8') },
  { fn: is.uuid('6ba7b810-9dad-11d1-80b4-00c04fd430c8') },
  { fn: is.isUUID('6ba7b811-9dad-11d1-80b4-00c04fd430c8') },
  { fn: is.isUUID('6ba7b812-9dad-11d1-80b4-00c04fd430c8') },
  { fn: is.isUUID('6ba7b814-9dad-11d1-80b4-00c04fd430c8') },
  { fn: is.isUUID('6ba7b812-9dad-11d1-80b4'), expect: false },
  { fn: is.isUUID('6ba7b812-9dad-11d1-80b4-00c04fd430c'), expect: false },
  { fn: is.isUUID('zzzzzzzz-9dad-11d1-80b4-00c04fd430c8'), expect: false },
  { fn: is.isUUID('t920tj22t32-tj2f2f223f23'), expect: false },
  { fn: is.isUUID(), expect: false },
  { fn: is.isUUID(''), expect: false },
  { fn: is.isUUID([]), expect: false },
  { fn: is.isUUID({}), expect: false },
  { fn: is.isUUID(() => {}), expect: false },

  // Additional tests to cover the untested line:
  // Test characters greater than 'f' (like 'g', 'h', 'z')
  { fn: is.isUUID('6ba7b81g-9dad-11d1-80b4-00c04fd430c8'), expect: false },
  { fn: is.isUUID('6ba7b810-9dgh-11d1-80b4-00c04fd430c8'), expect: false },
  { fn: is.isUUID('6ba7b810-9dad-11z1-80b4-00c04fd430c8'), expect: false },
  { fn: is.isUUID('6ba7b810-9dad-11d1-80x4-00c04fd430c8'), expect: false },
  { fn: is.isUUID('6ba7b810-9dad-11d1-80b4-00c04fd430y8'), expect: false },

  // Test with characters that are alphabetically after 'f'
  { fn: is.isUUID('6ba7b810-9dad-11d1-80b4-00c04fd430q8'), expect: false },
  { fn: is.isUUID(-1), expect: false },
]
