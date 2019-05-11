# @goa/accepts

[![npm version](https://badge.fury.io/js/%40goa%2Faccepts.svg)](https://npmjs.org/package/@goa/accepts)

`@goa/accepts` is a [fork](https://github.com/jshttp/accepts/) of Higher-Level Content Negotiation In ES6 Optimised With JavaScript Compiler. It already includes `mime-types` database and is bundled into a single JS file for faster execution.

The original module has been updated to be used in [`@goa/koa`](https://artdecocode.com/goa/): _Koa_ web server compiled with _Google Closure Compiler_ using [**Depack**](https://artdecocode.com/depack/) into a single file library (0 dependencies).

```sh
yarn add @goa/accepts
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [class Accepts](#class-accepts)
  * [`constructor(req: http.IncomingMessage): Accepts`](#constructorreq-httpincomingmessage-accepts)
    * [`_goa.Accepts`](#type-_goaaccepts)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import Accepts from '@goa/accepts'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## class Accepts

The instances of this class allow to negotiate languages, charsets, encoding and types and additionally:

- Allows types as an array or arguments list, i.e. `(['text/html', 'application/json'])` as well as `('text/html', 'application/json')`;
- Allows type shorthands such as json;
- Returns false when no types match;
- Treats non-existent headers as *.

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

__<a name="type-_goaaccepts">`_goa.Accepts`</a>__: Higher-Level Content Negotiation.

|      Name      |                                                     Type                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __types*__     | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `false`, in which case you should respond with 406 "Not Acceptable".<br/>      The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. When no types are given as arguments, returns all types accepted by the client in the preference order. _Examples_:<li>      [Accept: text/html]</li>      `this.types('html') => "html"`<li>      [Accept: text/＊, application/json]</li>      `this.types('html') => "html"`<br/>      `this.types('text/html') => "text/html"`<br/>      `this.types('json', 'text') => "json"`<br/>      `this.types('application/json') => "application/json"`<li>      [Accept: text/＊, application/json]</li>      `this.types('image/png') => false`<br/>      `this.types('png') => false`<li>      [Accept: text/＊;q=.5, application/json]</li>      `this.types(['html', 'json']) => "json"`<br/>      `this.types('html', 'json') => "json"`<li>      [Accept: application/＊;q=0.2, image/jpeg;q=0.8, text/html, text/plain]</li>      `this.types() => ["text/html", "text/plain", "image/jpeg", "application/＊"]`                                                                                                                                  |
| __type*__      | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `false`, in which case you should respond with 406 "Not Acceptable".<br/>      The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. When no types are given as arguments, returns all types accepted by the client in the preference order. _Examples_:<li>      [Accept: text/html]</li>      `this.types('html') => "html"`<li>      [Accept: text/＊, application/json]</li>      `this.types('html') => "html"`<br/>      `this.types('text/html') => "text/html"`<br/>      `this.types('json', 'text') => "json"`<br/>      `this.types('application/json') => "application/json"`<li>      [Accept: text/＊, application/json]</li>      `this.types('image/png') => false`<br/>      `this.types('png') => false`<li>      [Accept: text/＊;q=.5, application/json]</li>      `this.types(['html', 'json']) => "json"`<br/>      `this.types('html', 'json') => "json"`<br/>      When no types are given as arguments, returns all types accepted by the client in the preference order. _For example_:<li>      [Accept: application/＊;q=0.2, image/jpeg;q=0.8, text/html, text/plain]</li>      `this.types() => ["text/html", "text/plain", "image/jpeg", "application/＊"]` |
| __encodings*__ | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Return accepted encodings or best fit based on `encodings`. Given `Accept-Encoding: gzip, deflate` an array sorted by quality is returned: `['gzip', 'deflate']`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| __encoding*__  | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Return accepted encodings or best fit based on `encodings`. Given `Accept-Encoding: gzip, deflate` an array sorted by quality is returned: `['gzip', 'deflate']`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| __charsets*__  | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Return accepted charsets or best fit based on `charsets`. Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5` an array sorted by quality is returned: `['utf-8', 'utf-7', 'iso-8859-1']`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| __charset*__   | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Return accepted charsets or best fit based on `charsets`. Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5` an array sorted by quality is returned: `['utf-8', 'utf-7', 'iso-8859-1']`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| __languages*__ | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| __langs*__     | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| __lang*__      | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| __language*__  | <em>function((string \| !Array&lt;string&gt;)=, ...string): (string \| !Array&lt;string&gt; \| boolean)</em> | Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

Original work, documentation and testing by [Jonathan Ong and Douglas Christopher Wilson](https://github.com/jshttp/accepts).

---

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://idio.cc">Idio</a> 2019</th>
    <th>
      <a href="https://idio.cc">
        <img src="https://avatars3.githubusercontent.com/u/40834161?s=100" width="100" alt="Idio" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>