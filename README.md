# @goa/accepts

[![npm version](https://badge.fury.io/js/%40goa%2Faccepts.svg)](https://npmjs.org/package/@goa/accepts)

`@goa/accepts` is a fork of <kbd>🏛 [Higher-Level Content Negotiation](https://github.com/jshttp/accepts/)</kbd> In ES6 Optimised With [JavaScript Compiler](https://compiler.page).

<table><tr><td>

The original module was edited with annotations and other changes required for it to be used in [`@goa/koa`](https://artdecocode.com/goa/): _Koa_ web server [compiled](https://compiler.page) with _Closure Compiler_ using [**Depack**](https://artdecocode.com/depack/) into a single file library (with 1 dependency such as mime-db).

<details><summary>Read more about the compilation.</summary>

All dependencies are specified as dev dependencies because they are flattened into a single JS file by the compiler, unless the special `require(/* depack ok */ 'modulejs')` was called, which will require the package at run-time, for instance this is how mime-db is required by Goa.

The package specifies the following entry points:

- <kbd>[commonjs/main](/compile/index.js)</kbd>: the _require_ entry optimised with compiler. Used for individual consumption of the package's API.
    ```m
    compile
    ├── accepts.js
    ├── accepts.js.map
    └── index.js
    ```
- <kbd>[es6/module](/src/index.js)</kbd>: the source code that can be used in compilation of other packages, e.g., `@goa/goa`.
    ```m
    src
    ├── depack.js
    └── index.js
    ```

</details></td><td>

The tests were rewritten using [context testing](https://contexttesting.com). The [Http Context](https://npmjs.org/@contexts/http), in particular the Cookie Tester was used to assert on presence of entries, and their attributes.

<details><summary>Show the tests.</summary>

```js
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
```
</details></td></tr></table>

```sh
yarn add @goa/accepts
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [class Accepts](#class-accepts)
  * [`constructor(req: http.IncomingMessage): Accepts`](#constructorreq-httpincomingmessage-accepts)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import Accepts from '@goa/accepts'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## class Accepts

The instances of this class allow to negotiate languages, charsets, encoding and types and additionally:

- Allow types as an array or arguments list, i.e. `(['text/html', 'application/json'])` as well as `('text/html', 'application/json')`;
- Allow type shorthands such as json;
- Return false when no types match;
- Treat non-existent headers as *.

### `constructor(`<br/>&nbsp;&nbsp;`req: http.IncomingMessage,`<br/>`): Accepts`

Create a new _Accepts_ object for the given request from a client.

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

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

Original work, documentation and testing by [Jonathan Ong and Douglas Christopher Wilson](https://github.com/jshttp/accepts).

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

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>