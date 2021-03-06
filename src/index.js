import Negotiator from '@goa/negotiator'
import { lookup } from '@goa/mime-types'

/**
 * @implements {_goa.Accepts}
 */
export default class Accepts {
  /**
   * Create a new Accepts object for the given req.
   * @param {!http.IncomingMessage} req
   */
  constructor(req) {
    this.headers = /** @type {!Object} */ (req.headers)
    this.negotiator = new Negotiator(req)
  }
  /**
   * Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `false`, in which case you should respond with 406 "Not Acceptable".
   *
   * The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. When no types are given as arguments, returns all types accepted by the client in the preference order.
   *
   * @param {string|!Array<string>} [types] A single or multiple types, either as an array or variable arguments.
   * @param {...string} args
   */
  types(types, ...args) {
    // support flattened arguments
    if (types && !Array.isArray(types)) {
      types = [types, ...args]
    }

    // no types, return all requested types
    if (!types || types.length == 0) {
      return this.negotiator.mediaTypes()
    }

    // no accept header, return first given type
    if (!this.headers['accept']) {
      return types[0]
    }

    const mimes = types.map(extToMime)
    const accepts = this.negotiator.mediaTypes(mimes.filter(validMime))
    const [first] = accepts

    return first
      ? types[mimes.indexOf(first)]
      : false
  }
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
   */
  encodings(encodings, ...args) {
    // support flattened arguments
    if (encodings && !Array.isArray(encodings)) {
      encodings = [encodings, ...args]
    }

    // no encodings, return all requested encodings
    if (!encodings || encodings.length == 0) {
      return this.negotiator.encodings()
    }

    return this.negotiator.encodings( /** @type {!Array<string>} */
      (encodings))[0] || false
  }
  get encoding() {
    return this.encodings
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
   */
  charsets(charsets, ...args) {
    // support flattened arguments
    if (charsets && !Array.isArray(charsets)) {
      charsets = [charsets, ...args]
    }

    // no charsets, return all requested charsets
    if (!charsets || charsets.length == 0) {
      return this.negotiator.charsets()
    }

    return this.negotiator.charsets( /** @type {!Array<string>} */
      (charsets))[0] || false
  }
  get charset() {
    return this.charsets
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
   */
  languages(languages, ...args) {
    // support flattened arguments
    if (languages && !Array.isArray(languages)) {
      languages = [languages, ...args]
    }

    // no languages, return all requested languages
    if (!languages || languages.length == 0) {
      return this.negotiator.languages()
    }

    return this.negotiator.languages(
      /** @type {!Array<string>} */ (languages))[0] || false
  }
  get lang() {
    return this.languages
  }
  get langs() {
    return this.languages
  }
  get language() {
    return this.languages
  }
}

/**
 * Convert extnames to mime.
 * @param {string} type
 * @private
 */
function extToMime(type) {
  return type.indexOf('/') == -1
    ? lookup(type)
    : type
}

/**
 * Check if mime is valid.
 * @param {string} type
 * @private
 */
function validMime(type) {
  return typeof type == 'string'
}

/**
 * @license MIT
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * https://npmjs.org/accepts
 */

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('http').IncomingMessage} http.IncomingMessage
 */