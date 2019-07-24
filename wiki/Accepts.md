Different clients such as browser might support different features and come from different regions of the world. Clients usually send the _Accept_, _Accept-Charset_, _Accept-Encoding_ and _Accept-Language_ HTTP headers, which are set on the server request object. Read more on [Content-Negotiation on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation).

An instance of _Accepts_ is created with the request object, and is used to check which types, _etc_ the client supports.

The main API consists of 4 main functions:

- types
- encodings
- charsets
- languages

The rest of the methods (e.g., `type`, `lang`) are just aliases to the public functions.

<typedef narrow flatten>../accepts/types/index.xml</typedef>