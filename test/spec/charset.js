import { deepEqual } from '@zoroaster/assert'
import { strictEqual } from 'assert'
import Accepts from '../../src'
import * as context from '../context'

export default {
  context,
  'with no arguments': {
    'when Accept-Charset is populated': {
      'returns accepted types'({ createRequest }) {
        const req = createRequest('utf-8, iso-8859-1;q=0.2, utf-7;q=0.5', 'charset', 'charset')
        const accept = new Accepts(req)
        deepEqual(accept.charsets(), ['utf-8', 'utf-7', 'iso-8859-1'])
        deepEqual(accept.charset(), ['utf-8', 'utf-7', 'iso-8859-1'])
      },
    },
    'when Accept-Charset is not in request': {
      'returns *'({ createRequest }) {
        const req = createRequest(undefined, 'charset')
        const accept = new Accepts(req)
        deepEqual(accept.charsets(), ['*'])
        deepEqual(accept.charset(), ['*'])
      },
    },
    'when Accept-Charset is empty': {
      'returns an empty array'({ createRequest }) {
        const req = createRequest('', 'charset')
        const accept = new Accepts(req)
        deepEqual(accept.charsets(), [])
        deepEqual(accept.charset(), [])
      },
    },
  },
  'with multiple arguments': {
    'when Accept-Charset is populated': {
      'if any types match': {
        'returns the best fit'({ createRequest }) {
          const req = createRequest('utf-8, iso-8859-1;q=0.2, utf-7;q=0.5', 'charset')
          const accept = new Accepts(req)
          strictEqual(accept.charsets('utf-7', 'utf-8'), 'utf-8')
          strictEqual(accept.charset('utf-7', 'utf-8'), 'utf-8')
        },
      },
      'if no types match': {
        'returns false'({ createRequest }) {
          const req = createRequest('utf-8, iso-8859-1;q=0.2, utf-7;q=0.5', 'charset')
          const accept = new Accepts(req)
          strictEqual(accept.charsets('utf-16'), false)
          strictEqual(accept.charset('utf-16'), false)
        },
      },
    },
    'when Accept-Charset is not populated': {
      'returns the first type'({ createRequest }) {
        const req = createRequest(undefined, 'charset')
        const accept = new Accepts(req)
        strictEqual(accept.charsets('utf-7', 'utf-8'), 'utf-7')
        strictEqual(accept.charset('utf-7', 'utf-8'), 'utf-7')
      },
    },
  },
  'with an array': {
    'returns the best fit'({ createRequest }) {
      const req = createRequest('utf-8, iso-8859-1;q=0.2, utf-7;q=0.5', 'charset')
      const accept = new Accepts(req)
      strictEqual(accept.charsets(['utf-7', 'utf-8']), 'utf-8')
      strictEqual(accept.charset(['utf-7', 'utf-8']), 'utf-8')
    },
  },
}