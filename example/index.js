import Accepts from '../src'
import { createServer } from 'http'
import aqt from '@rqt/aqt'

function app(req, res) {
  const accept = new Accepts(req)

  // the order of this list is significant; should be server preferred order
  switch (accept.type(['json', 'html'])) {
  case 'json':
    res.setHeader('Content-Type', 'application/json')
    res.write('{"hello":"world!"}')
    break
  case 'html':
    res.setHeader('Content-Type', 'text/html')
    res.write('<b>hello, world!</b>')
    break
  default:
    // the fallback is text/plain, so no need to specify it above
    res.setHeader('Content-Type', 'text/plain')
    res.write('hello, world!')
    break
  }

  res.end()
}

const server = createServer(app)
server.listen(0, async () => {
  const url = `http://localhost:${server.address().port}`
  let { body, headers } = await aqt(url, {
    headers: { 'accept': 'application/json' },
  })
  console.log('Response:', body, '\tType:', headers['content-type'])
  ;({ body, headers } = await aqt(url, {
    headers: { 'accept': 'text/html' },
  }))
  console.log('Response:', body, '\tType:', headers['content-type'])
  ;({ body, headers } = await aqt(url, {
    headers: { 'accept': 'text/plain' },
  }))
  console.log('Response:', body, '\tType:', headers['content-type'])
  server.close()
})