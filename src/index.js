import def from './lib.js'

import * as deep from './deep/index.js'

export * from './fns.js'

export const is = {
  ...deep,
  ...def,
}

export default is
