import { equal } from './equal.mjs'
import { different } from './different.mjs'

export const isDeepEqual = equal
export const deepEqual = equal
export const deepEq = equal

export const isDeepDifferent = different
export const deepDifferent = different
export const deepDiff = different

export const deep = {
  isDifferent: different,
  different: different,
  diff: different,

  isEqual: equal,
  equal: equal,
  eq: equal,
}
