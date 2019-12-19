# @goa/accepts

[![npm version](https://badge.fury.io/js/%40goa%2Faccepts.svg)](https://www.npmjs.com/package/@goa/accepts)

`@goa/accepts` is a fork of <kbd>🏛 [Higher-Level Content Negotiation](https://github.com/jshttp/accepts/)</kbd> In ES6 Optimised With [JavaScript Compiler](https://compiler.page).

```sh
yarn add @goa/accepts
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [class Accepts](#class-accepts)
  * [`constructor(req): Accepts`](#constructorreq-httpincomingmessage-accepts)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default class:

```js
import Accepts from '@goa/accepts'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## class Accepts

The instances of this class allow to negotiate languages, charsets, encoding and types and additionally:

- Allow types as an array or arguments list, i.e. `(['text/html', 'application/json'])` as well as `('text/html', 'application/json')`;
- Allow type shorthands such as json;
- Return false when no types match;
- Treat non-existent headers as *.

### <code><ins>constructor</ins>(</code><sub><br/>&nbsp;&nbsp;`req: !http.IncomingMessage,`<br/></sub><code>): <i>Accepts</i></code>

Create a new Accepts object for the given request from a client.

 - <kbd><strong>req*</strong></kbd> <em><code><a href="https://nodejs.org/api/http.html#http_class_http_incomingmessage" title="A readable stream that receives data from the client in chunks. The first argument of the http.Server.on(&quot;request&quot;) event."><img src=".documentary/type-icons/node.png" alt="Node.JS Docs">!http.IncomingMessage</a></code></em>: The request.

```js
import Accepts from '@goa/accepts'
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
```
```
Response: { hello: 'world!' } 	Type: application/json
Response: <b>hello, world!</b> 	Type: text/html
Response: hello, world! 	Type: text/plain
```

<kbd>[🔖 View all instance methods in Wiki](../../wiki/Accepts)</kbd>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

[Original work, documentation and testing](https://github.com/jshttp/accepts) by Jonathan Ong and Douglas Christopher Wilson under MIT license found in [COPYING](COPYING).

---

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img width="100" src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png"
          alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://idio.cc">Idio</a> 2019</th>
    <th>
      <a href="https://idio.cc">
        <img src="https://avatars3.githubusercontent.com/u/40834161?s=100" width="100" alt="Idio">
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img width="100" src="https://raw.githubusercontent.com/idiocc/cookies/master/wiki/arch4.jpg"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>