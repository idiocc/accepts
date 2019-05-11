import { deepEqual } from '@zoroaster/assert'
import { strictEqual } from 'assert'
import Accepts from '../../src'
import * as context from '../context'

export default {
  context,
  'with no arguments': {
    'when Accept is populated': {
      'returns all accepted types'({ createRequest }) {
        const req = createRequest('application/*;q=0.2, image/jpeg;q=0.8, text/html, text/plain')
        const accept = new Accepts(req)
        deepEqual(accept.types(), ['text/html', 'text/plain', 'image/jpeg', 'application/*'])
        // one time is enough
        deepEqual(accept.type(), ['text/html', 'text/plain', 'image/jpeg', 'application/*'])
      },
    },
    'when Accept not in request': {
      'returns */*'({ createRequest }) {
        const req = createRequest()
        const accept = new Accepts(req)
        deepEqual(accept.types(), ['*/*'])
      },
    },
    'when Accept is empty': {
      'returns []'({ createRequest }) {
        const req = createRequest('')
        const accept = new Accepts(req)
        deepEqual(accept.types(), [])
      },
    },
  },
  'with no valid types': {
    'when Accept is populated': {
      'returns false'({ createRequest }) {
        const req = createRequest('application/*;q=0.2, image/jpeg;q=0.8, text/html, text/plain')
        const accept = new Accepts(req)
        strictEqual(accept.types('image/png', 'image/tiff'), false)
      },
    },
    'when Accept is not populated': {
      'returns the first type'({ createRequest }) {
        const req = createRequest()
        const accept = new Accepts(req)
        strictEqual(accept.types('text/html', 'text/plain', 'image/jpeg', 'application/*'), 'text/html')
      },
    },
  },
  'when extensions are given': {
    'converts to mime types'({ createRequest }) {
      const req = createRequest('text/plain, text/html')
      const accept = new Accepts(req)
      strictEqual(accept.types('html'), 'html')
      strictEqual(accept.types('.html'), '.html')
      strictEqual(accept.types('txt'), 'txt')
      strictEqual(accept.types('.txt'), '.txt')
      strictEqual(accept.types('png'), false)
      strictEqual(accept.types('bogus'), false)
    },
  },
  'when an array is given': {
    'returns the first match'({ createRequest }) {
      const req = createRequest('text/plain, text/html')
      const accept = new Accepts(req)
      strictEqual(accept.types(['png', 'text', 'html']), 'text')
      strictEqual(accept.types(['png', 'html']), 'html')
      strictEqual(accept.types(['bogus', 'html']), 'html')
    },
  },
  'when multiple arguments are given': {
    'returns the first match'({ createRequest }) {
      const req = createRequest('text/plain, text/html')
      const accept = new Accepts(req)
      strictEqual(accept.types('png', 'text', 'html'), 'text')
      strictEqual(accept.types('png', 'html'), 'html')
      strictEqual(accept.types('bogus', 'html'), 'html')
    },
  },
  'when present in Accept as an exact match': {
    'returns the type'({ createRequest }) {
      const req = createRequest('text/plain, text/html')
      const accept = new Accepts(req)
      strictEqual(accept.types('text/html'), 'text/html')
      strictEqual(accept.types('text/plain'), 'text/plain')
    },
  },
  'when present in Accept as a type match': {
    'returns the type'({ createRequest }) {
      const req = createRequest('application/json, */*')
      const accept = new Accepts(req)
      strictEqual(accept.types('text/html'), 'text/html')
      strictEqual(accept.types('text/plain'), 'text/plain')
      strictEqual(accept.types('image/png'), 'image/png')
    },
  },
  'when present in Accept as a subtype match': {
    'returns the type'({ createRequest }) {
      const req = createRequest('application/json, text/*')
      const accept = new Accepts(req)
      strictEqual(accept.types('text/html'), 'text/html')
      strictEqual(accept.types('text/plain'), 'text/plain')
      strictEqual(accept.types('image/png'), false)
    },
  },
}