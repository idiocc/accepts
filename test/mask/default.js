import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import accepts from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await accepts({
      text: this.input,
    })
    return res
  },
  context: Context,
})