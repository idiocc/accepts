## API

The package is available by importing its default function:

```js
import Accepts from '@goa/accepts'
```

%~%

## class Accepts

The instances of this class allow to negotiate languages, charsets, encoding and types and additionally:

- Allow types as an array or arguments list, i.e. `(['text/html', 'application/json'])` as well as `('text/html', 'application/json')`;
- Allow type shorthands such as json;
- Return false when no types match;
- Treat non-existent headers as *.

```### constructor => Accepts
[
  ["req", "http.IncomingMessage"]
]
```

Create a new _Accepts_ object for the given request from a client.

%EXAMPLE: example, ../src => @goa/accepts%
%FORK example%

<kbd>[🔖 View all instance methods in Wiki](../../wiki/Accepts)</kbd>

%~%