/* typal types/index.xml externs */
/** @const */
var _goa = {}
/**
 * Higher-Level Content Negotiation.
 * @interface
 */
_goa.Accepts
/**
 * Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `false`, in which case you should respond with 406 "Not Acceptable".
      The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. _Examples_:
      - [Accept: text/html]
      `this.types('html') => "html"`
      - [Accept: text/*, application/json]
      `this.types('html') => "html"`
      `this.types('text/html') => "text/html"`
      `this.types('json', 'text') => "json"`
      `this.types('application/json') => "application/json"`
      - [Accept: text/*, application/json]
      `this.types('image/png') => false`
      `this.types('png') => false`
      - [Accept: text/*;q=.5, application/json]
      `this.types(['html', 'json']) => "json"`
      `this.types('html', 'json') => "json"`
      When no types are given as arguments, returns all types accepted by the client in the preference order. _For example_:
      - [Accept: application/*;q=0.2, image/jpeg;q=0.8, text/html, text/plain]
      `this.types() => [text/html, text/plain, image/jpeg, application/*]`
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.types
/**
 * Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `false`, in which case you should respond with 406 "Not Acceptable".
      The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. _Examples_:
      - [Accept: text/html]
      `this.types('html') => "html"`
      - [Accept: text/*, application/json]
      `this.types('html') => "html"`
      `this.types('text/html') => "text/html"`
      `this.types('json', 'text') => "json"`
      `this.types('application/json') => "application/json"`
      - [Accept: text/*, application/json]
      `this.types('image/png') => false`
      `this.types('png') => false`
      - [Accept: text/*;q=.5, application/json]
      `this.types(['html', 'json']) => "json"`
      `this.types('html', 'json') => "json"`
      When no types are given as arguments, returns all types accepted by the client in the preference order. _For example_:
      - [Accept: application/*;q=0.2, image/jpeg;q=0.8, text/html, text/plain]
      `[text/html, text/plain, image/jpeg, application/*]`
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.type
/**
 * Return accepted encodings or best fit based on `encodings`. Given `Accept-Encoding: gzip, deflate` an array sorted by quality is returned: `['gzip', 'deflate']`.
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.encodings
/**
 * Return accepted encodings or best fit based on `encodings`. Given `Accept-Encoding: gzip, deflate` an array sorted by quality is returned: `['gzip', 'deflate']`.
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.encoding
/**
 * Return accepted charsets or best fit based on `charsets`. Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5` an array sorted by quality is returned: `['utf-8', 'utf-7', 'iso-8859-1']`.
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.charsets
/**
 * Return accepted charsets or best fit based on `charsets`. Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5` an array sorted by quality is returned: `['utf-8', 'utf-7', 'iso-8859-1']`.
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.charset
/**
 * Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.languages
/**
 * Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.langs
/**
 * Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.lang
/**
 * Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.
 * @type {function((string|!Array<string>)=, ...string): (string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.language
