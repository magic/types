import test from 'ava'
import { cleanType } from '../'

test(
  'replace "String"s of array, object and nodeList with [object "String"]',
  (t) => {
    t.is(
      cleanType('object'),
      '[object Object]',
      'should replace object with [object Object]'
    )

    t.is(
      cleanType('nodeList'),
      '[object NodeList]',
      'replace nodeList with [object NodeList]'
    )

    t.is(
      cleanType('NodeList'),
      '[object NodeList]',
      'replace NodeList with [object NodeList]'
    )

    t.is(
      cleanType('nodelist'),
      '[object NodeList]',
      'replace nodelist with [object NodeList]'
    )

    t.is(
      cleanType('array'),
      '[object Array]',
      'should replace array with [object Array]'
    )

    t.is(
      cleanType('string'),
      'string',
      'should return "string" unchanged'
    )

    t.is(
      cleanType('anystring'),
      'anystring',
      'should return "anystring" unchanged'
    )
  }
)
