import is, { isEmail } from '../../src/index.js'

export default [
  { fn: () => isEmail('test@example.com'), expect: true },
  { fn: () => is.isEmail('test@example.com'), expect: true },
  { fn: () => is.email('test@example.com'), expect: true },
  { fn: () => is.mail('test@example.com'), expect: true },
  { fn: () => is.isEmail('tes@t@example.com'), expect: true },
  { fn: () => is.isEmail('testmail.com'), expect: false },
  { fn: () => is.isEmail(''), expect: false },
  { fn: () => is.isEmail([]), expect: false },
  { fn: () => is.isEmail({}), expect: false },
]
