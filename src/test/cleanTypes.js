import test from 'ava'
import { cleanTypes } from '../index.js'

test(
  '#cleanTypes() - handle arrays, nodeLists and Objects',
  t => {
    t.deepEqual(
      cleanTypes(['array', 'nodeList', 'object']),
      ['[object Array]', '[object NodeList]', '[object Object]']
    )

    t.deepEqual(
      cleanTypes(['string', 'object', 'number']),
      ['string', '[object Object]', 'number']
    )
  }
)
