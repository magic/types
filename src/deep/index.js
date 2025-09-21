import { equal } from './equal.js'
import { different } from './different.js'

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
