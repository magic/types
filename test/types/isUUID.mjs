import is from '../../src/index.mjs'

export default [
  { fn: () => is.isUUID('6ba7b810-9dad-11d1-80b4-00c04fd430c8') },
  { fn: () => is.uuid('6ba7b810-9dad-11d1-80b4-00c04fd430c8') },
  { fn: () => is.isUUID('6ba7b811-9dad-11d1-80b4-00c04fd430c8') },
  { fn: () => is.isUUID('6ba7b812-9dad-11d1-80b4-00c04fd430c8') },
  { fn: () => is.isUUID('6ba7b814-9dad-11d1-80b4-00c04fd430c8') },
  { fn: () => is.isUUID('6ba7b812-9dad-11d1-80b4'), expect: false },
  { fn: () => is.isUUID('6ba7b812-9dad-11d1-80b4-00c04fd430c'), expect: false },
  { fn: () => is.isUUID('zzzzzzzz-9dad-11d1-80b4-00c04fd430c8'), expect: false },
  { fn: () => is.isUUID('t920tj22t32-tj2f2f223f23'), expect: false },
  { fn: () => is.isUUID(), expect: false },
  { fn: () => is.isUUID(''), expect: false },
  { fn: () => is.isUUID([]), expect: false },
  { fn: () => is.isUUID({}), expect: false },
  { fn: () => is.isUUID(() => {}), expect: false },
]
