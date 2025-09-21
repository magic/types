import { isModule } from '../../src/fns.mjs'

export default [
  { fn: isModule(), expect: false, info: 'isModule without argument returns false' },
  { fn: isModule({}), expect: false, info: 'isModule with object argument returns false' },
  { fn: isModule(() => {}), expect: false, info: 'isModule with function argument returns false' },
  {
    fn: async () => {
      const mod = await import('../../src/fns.mjs')

      return isModule(mod)
    },
    info: 'isModule with mod argument returns true',
  },
]
