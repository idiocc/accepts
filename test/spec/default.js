import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import accepts from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof accepts, 'function')
  },
  async 'calls package without error'() {
    await accepts()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await accepts({
      text,
    })
    ok(res, text)
  },
}

export default T