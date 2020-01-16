import is from '../../src/index.mjs'

export default [
  { fn: () => is.isMergeable({}), expect: true },
  { fn: () => is.isMergeableObject({}), expect: true },
  { fn: () => is.mergeableObject({}), expect: true },
  { fn: () => is.mergeable({ t: 't' }), expect: true },
  { fn: () => is.mergeable(), expect: false },
  { fn: () => is.mergeable(0), expect: false },
  { fn: () => is.mergeable(() => {}), expect: false },
  { fn: () => is.mergeable(''), expect: false },
  { fn: () => is.mergeable(new Date()), expect: false },
  { fn: () => is.mergeable(/regex/), expect: false },
]
