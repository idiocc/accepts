const _Accepts = require('./accepts')

class Accepts extends _Accepts {
  /**
   * Create a new Accepts object for the given request.
   * @param {!http.IncomingMessage} request
   */
  constructor(request) {
    super(request)
  }
  /**
   * Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `false`, in which case you should respond with 406 "Not Acceptable".
   *
   * The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. When no types are given as arguments, returns all types accepted by the client in the preference order.
   *
   * _Examples_:
   *
   * - Accept: text/html
   *
   *     ```js
   *     this.types('html') => "html"
   *     ```
   * - Accept: text/＊, application/json
   *
   *     ```js
   *     this.types('html') => "html"
   *     this.types('text/html') => "text/html"
   *     this.types('json', 'text') => "json"
   *     this.types('application/json') => "application/json"
   *     ```
   * - Accept: text/＊, application/json
   *
   *     ```js
   *     this.types('image/png') => false
   *     this.types('png') => false
   *     ```
   * - Accept: text/＊;q=.5, application/json
   *
   *     ```js
   *     this.types(['html', 'json']) => "json"
   *     this.types('html', 'json') => "json"
   *     ```
   * - Accept: application/＊;q=0.2, image/jpeg;q=0.8, text/html, text/plain
   *
   *     ```js
   *     this.types() => ["text/html", "text/plain",
   *       "image/jpeg", "application/＊"]
   *     ```
   *
   * @param {string|!Array<string>} [types] A single or multiple types, either as an array or variable arguments.
   * @param {...string} args
   * @returns {string|!Array<string>|false}
   */
  types(types, ...args) {
    return super.types(types, ...args)
  }
  /**
   * An alias for `types`.
   */
  get type() {
    return this.types
  }
  /**
   * Return accepted encodings or best fit based on `encodings`.
   *
   * Given `Accept-Encoding: gzip, deflate`
   * an array sorted by quality is returned:
   *
   *     ['gzip', 'deflate']
   *
   * @param {string|!Array<string>} [encodings]
   * @param {...string} args
   * @returns {string|!Array<string>|false}
   */
  encodings(encodings, ...args) {
    return super.encodings(encodings, ...args)
  }
  /**
   * Return accepted encodings or best fit based on `encodings`.
   *
   * Given `Accept-Encoding: gzip, deflate`
   * an array sorted by quality is returned:
   *
   *     ['gzip', 'deflate']
   *
   * @param {string|!Array<string>} [encodings]
   * @param {...string} args
   * @returns {string|!Array<string>|false}
   */
  encoding(encoding, ...args) {
    return super.encoding(encoding, ...args)
  }
  /**
   * Return accepted charsets or best fit based on `charsets`.
   *
   * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
   * an array sorted by quality is returned:
   *
   *     ['utf-8', 'utf-7', 'iso-8859-1']
   *
   * @param {string|!Array<string>} [charsets]
   * @param {...string} args
   * @returns {string|!Array<string>|false}
   */
  charsets(charsets, ...args) {
    return super.charsets(charsets, ...args)
  }
  /**
   * Return accepted charsets or best fit based on `charsets`.
   *
   * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
   * an array sorted by quality is returned:
   *
   *     ['utf-8', 'utf-7', 'iso-8859-1']
   *
   * @param {string|!Array<string>} [charsets]
   * @param {...string} args
   * @returns {string|!Array<string>|false}
   */
  charset(charset, ...args) {
    return super.charset(charset, ...args)
  }
  /**
   * Return accepted languages or best fit based on `langs`.
   *
   * Given `Accept-Language: en;q=0.8, es, pt`
   * an array sorted by quality is returned:
   *
   *     ['es', 'pt', 'en']
   *
   * @param {string|!Array<string>} [languages]
   * @param {...string} args
   * @returns {string|!Array<string>|false}
   */
  languages(languages, ...args) {
    return super.languages(languages, ...args)
  }
  /**
   * Return accepted languages or best fit based on `langs`.
   *
   * Given `Accept-Language: en;q=0.8, es, pt`
   * an array sorted by quality is returned:
   *
   *     ['es', 'pt', 'en']
   *
   * @param {string|!Array<string>} [lang]
   * @param {...string} args
   * @returns {string|!Array<string>|false}
   */
  lang(lang, ...args) {
    return super.lang(lang, ...args)
  }
  /**
   * Return accepted languages or best fit based on `langs`.
   *
   * Given `Accept-Language: en;q=0.8, es, pt`
   * an array sorted by quality is returned:
   *
   *     ['es', 'pt', 'en']
   *
   * @param {string|!Array<string>} [langs]
   * @param {...string} args
   * @returns {string|!Array<string>|false}
   */
  langs(langs, ...args) {
    return super.langs(langs, ...args)
  }
  /**
   * Return accepted languages or best fit based on `langs`.
   *
   * Given `Accept-Language: en;q=0.8, es, pt`
   * an array sorted by quality is returned:
   *
   *     ['es', 'pt', 'en']
   *
   * @param {string|!Array<string>} [language]
   * @param {...string} args
   * @returns {string|!Array<string>|false}
   */
  language(language, ...args) {
    return super.langs(language, ...args)
  }
}

module.exports = Accepts

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('http').IncomingMessage} http.IncomingMessage
 */