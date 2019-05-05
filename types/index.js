/* typal types/index.xml closure noSuppress */
/**
 * @typedef {_goa.Accepts} Accepts `@interface` Higher-Level Content Negotiation.
 */
/**
 * @typedef {Object} _goa.Accepts `@interface` Higher-Level Content Negotiation.
 * @prop {function((string|!Array<string>), ...string)} types Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `undefined`, in which case you should respond with 406 "Not Acceptable".
      The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. _Examples_:
      - [Accept: text/html]
      `this.types('html') => "html"`
      - [Accept: text/*, application/json]
      `this.types('html') => "html"`
      `this.types('text/html') => "text/html"`
      `this.types('json', 'text') => "json"`
      `this.types('application/json') => "application/json"`
      - [Accept: text/*, application/json]
      `this.types('image/png') => undefined`
      `this.types('png') => undefined`
      - [Accept: text/*;q=.5, application/json]
      `this.types(['html', 'json']) => "json"`
      `this.types('html', 'json') => "json"`
 * @prop {function((string|!Array<string>), ...string): string|!Array<string>|boolean} type Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `undefined`, in which case you should respond with 406 "Not Acceptable".
      The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. _Examples_:
      - [Accept: text/html]
      `this.types('html') => "html"`
      - [Accept: text/*, application/json]
      `this.types('html') => "html"`
      `this.types('text/html') => "text/html"`
      `this.types('json', 'text') => "json"`
      `this.types('application/json') => "application/json"`
      - [Accept: text/*, application/json]
      `this.types('image/png') => undefined`
      `this.types('png') => undefined`
      - [Accept: text/*;q=.5, application/json]
      `this.types(['html', 'json']) => "json"`
      `this.types('html', 'json') => "json"`
 * @prop {function((string|!Array<string>), ...string)} encodings Return accepted encodings or best fit based on `encodings`. Given `Accept-Encoding: gzip, deflate` an array sorted by quality is returned: `['gzip', 'deflate']`.
 * @prop {function((string|!Array<string>), ...string): string|!Array<string>|boolean} encoding Return accepted encodings or best fit based on `encodings`. Given `Accept-Encoding: gzip, deflate` an array sorted by quality is returned: `['gzip', 'deflate']`.
 * @prop {function((string|!Array<string>), ...string): string|!Array<string>|boolean} charsets Return accepted charsets or best fit based on `charsets`. Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5` an array sorted by quality is returned: `['utf-8', 'utf-7', 'iso-8859-1']`.
 * @prop {function((string|!Array<string>), ...string): string|!Array<string>|boolean} charset Return accepted charsets or best fit based on `charsets`. Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5` an array sorted by quality is returned: `['utf-8', 'utf-7', 'iso-8859-1']`.
 * @prop {function((string|!Array<string>), ...string): string|!Array<string>|boolean} languages Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.
 * @prop {function((string|!Array<string>), ...string): string|!Array<string>|boolean} langs Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.
 * @prop {function((string|!Array<string>), ...string): string|!Array<string>|boolean} lang Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.
 * @prop {function((string|!Array<string>), ...string): string|!Array<string>|boolean} language Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.
 */
