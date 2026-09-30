import { Test } from '@magic/test'
import { isModule } from '../../src/fns.js'

export default [
  // @ts-expect-error - intentional: no argument for testing
  { fn: isModule(), expect: false, info: 'isModule without argument returns false' },
  { fn: isModule({}), expect: false, info: 'isModule with object argument returns false' },
  { fn: isModule(() => {}), expect: false, info: 'isModule with function argument returns false' },
  {
    fn: async () => {
      const mod = await import('../../src/fns.js')

      return isModule(mod)
    },
    info: 'isModule with mod argument returns true',
  },
] satisfies Test[]
