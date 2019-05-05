import { deepEqual } from '@zoroaster/assert'
import Accepts from '../../src'
import * as context from '../context'
import { strictEqual } from 'assert'

export default {
  context: {
    createRequest(data) {
      return context.createRequest(data, 'language')
    },
  },
  'with no arguments': {
    'when Accept-Language is populated': {
      'returns accepted types'({ createRequest }) {
        const req = createRequest('en;q=0.8, es, pt')
        const accept = new Accepts(req)
        deepEqual(accept.languages(), ['es', 'pt', 'en'])
        deepEqual(accept.language(), ['es', 'pt', 'en'])
        deepEqual(accept.lang(), ['es', 'pt', 'en'])
        deepEqual(accept.langs(), ['es', 'pt', 'en'])
      },
    },
    'when Accept-Language is not in request': {
      'returns *'({ createRequest }) {
        const req = createRequest()
        const accept = new Accepts(req)
        deepEqual(accept.languages(), ['*'])
      },
    },
    'when Accept-Language is empty': {
      'returns an empty array'({ createRequest }) {
        const req = createRequest('')
        const accept = new Accepts(req)
        deepEqual(accept.languages(), [])
      },
    },
  },
  'with multiple arguments': {
    'when Accept-Language is populated': {
      'if any types types match': {
        'returns the best fit'({ createRequest }) {
          const req = createRequest('en;q=0.8, es, pt')
          const accept = new Accepts(req)
          strictEqual(accept.languages('es', 'en'), 'es')
        },
      },
      'if no types match': {
        'returns false'({ createRequest }) {
          const req = createRequest('en;q=0.8, es, pt')
          const accept = new Accepts(req)
          strictEqual(accept.languages('fr', 'au'), false)
        },
      },
    },
    'when Accept-Language is not populated': {
      'returns the first type'({ createRequest }) {
        const req = createRequest()
        const accept = new Accepts(req)
        strictEqual(accept.languages('es', 'en'), 'es')
      },
    },
  },
  'with an array': {
    'returns the best fit'({ createRequest }) {
      const req = createRequest('en;q=0.8, es, pt')
      const accept = new Accepts(req)
      strictEqual(accept.languages(['es', 'en']), 'es')
    },
  },
}