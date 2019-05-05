/* alanode example/ */
import accepts from '../src'

(async () => {
  const res = await accepts({
    text: 'example',
  })
  console.log(res)
})()