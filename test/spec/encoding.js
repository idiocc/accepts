import { deepEqual } from '@zoroaster/assert'
import { strictEqual } from 'assert'
import Accepts from '../../src'
import * as context from '../context'

export default {
  context: {
    createRequest(data) {
      return context.createRequest(data, 'encoding')
    },
  },
  'with no arguments': {
    'when Accept-Encoding is populated': {
      'returns accepted types'({ createRequest }) {
        const req = createRequest('gzip, compress;q=0.2')
        const accept = new Accepts(req)
        deepEqual(accept.encodings(), ['gzip', 'compress', 'identity'])
        strictEqual(accept.encodings('gzip', 'compress'), 'gzip')
      },
    },
    'when Accept-Encoding is not in request': {
      'returns identity'({ createRequest }) {
        const req = createRequest()
        const accept = new Accepts(req)
        deepEqual(accept.encodings(), ['identity'])
        strictEqual(accept.encodings('gzip', 'deflate', 'identity'), 'identity')
      },
      'when identity is not included': {
        'returns false'({ createRequest }) {
          const req = createRequest()
          const accept = new Accepts(req)
          strictEqual(accept.encodings('gzip', 'deflate'), false)
        },
      },
    },
    'when Accept-Encoding is empty': {
      'returns identity'({ createRequest }) {
        const req = createRequest('')
        const accept = new Accepts(req)
        deepEqual(accept.encodings(), ['identity'])
        strictEqual(accept.encodings('gzip', 'deflate', 'identity'), 'identity')
      },
      'when identity is not included': {
        'returns false'({ createRequest }) {
          const req = createRequest('')
          const accept = new Accepts(req)
          strictEqual(accept.encodings('gzip', 'deflate'), false)
        },
      },
    },
  },
  'with multiple arguments': {
    'returns the best fit'({ createRequest }) {
      const req = createRequest('gzip, compress;q=0.2')
      const accept = new Accepts(req)
      strictEqual(accept.encodings('compress', 'gzip'), 'gzip')
      strictEqual(accept.encodings('gzip', 'compress'), 'gzip')
    },
  },
  'with an array': {
    'returns the best fit'({ createRequest }) {
      const req = createRequest('gzip, compress;q=0.2')
      const accept = new Accepts(req)
      strictEqual(accept.encodings(['compress', 'gzip']), 'gzip')
    },
  },
}