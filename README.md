# @goa/accepts

[![npm version](https://badge.fury.io/js/@goa/accepts.svg)](https://npmjs.org/package/@goa/accepts)

`@goa/accepts` is [fork] Higher-Level Content Negotiation In ES6 Optimised With Google Closure Compiler.

```sh
yarn add @goa/accepts
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`accepts(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@goa/accepts.Config`](#type-_@goa/acceptsconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import accepts from '@goa/accepts'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `accepts(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@goa/acceptsconfig">`_@goa/accepts.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import accepts from '@goa/accepts'

(async () => {
  const res = await accepts({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2019

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>