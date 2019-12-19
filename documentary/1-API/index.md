## API

The package is available by importing its default class:

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

<method level="3" noArgTypesInToc name="Accepts.constructor">types/index.xml</method>

%EXAMPLE: example, ../src => @goa/accepts%
%FORK example%

<kbd>[🔖 View all instance methods in Wiki](../../wiki/Accepts)</kbd>

%~%