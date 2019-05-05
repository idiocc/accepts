## API

The package is available by importing its default function:

```js
import Accepts from '@goa/accepts'
```

%~%

## class Accepts

The instances of this class allow to negotiate languages, charsets, encoding and types and additionally:

- Allows types as an array or arguments list, ie (['text/html', 'application/json']) as well as ('text/html', 'application/json');
- Allows type shorthands such as json;
- Returns false when no types match;
- Treats non-existent headers as *.

```### constructor
[
  ["req", "http.IncomingMessage"]
]
```

Create a new _Accepts_ object for the given request from a client.

%EXAMPLE: example, ../src => @goa/accepts%
%FORK example%

%TYPEDEF types/index.xml%

%~%