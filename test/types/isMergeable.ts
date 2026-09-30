import { Test } from '@magic/test'
import is, { isMergeableObject } from '../../src/index.js'

export default [
  { fn: () => isMergeableObject({}), expect: true },
  { fn: () => is.isMergeable({}), expect: true },
  { fn: () => is.isMergeableObject({}), expect: true },
  { fn: () => is.mergeableObject({}), expect: true },
  { fn: () => is.mergeable({ t: 't' }), expect: true },
  // @ts-expect-error - intentional: no argument for testing
  { fn: () => is.mergeable(), expect: false },
  { fn: () => is.mergeable(0), expect: false },
  { fn: () => is.mergeable(() => {}), expect: false },
  { fn: () => is.mergeable(''), expect: false },
  { fn: () => is.mergeable(new Date()), expect: false },
  { fn: () => is.mergeable(/regex/), expect: false },
] satisfies Test[]
