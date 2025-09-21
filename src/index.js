import def from './lib.mjs'

import * as deep from './deep/index.mjs'

export * from './fns.mjs'

export const is = {
  ...deep,
  ...def,
}

export default is
