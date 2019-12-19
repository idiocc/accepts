/**
 * @fileoverview Accepts externs for Closure Compiler.
 * @externs
 */
/* typal types/index.xml externs */
/** @const */
var _goa = {}
/**
 * Higher-Level Content Negotiation.
 * Create a new Accepts object for the given request from a client.
 * @param {!http.IncomingMessage} req The request.
 * @interface
 */
_goa.Accepts = function(req) {}
/**
 * Check if the given `type(s)` is acceptable, returning the best match when true, otherwise `false`, in which case you should respond with 406 "Not Acceptable".
 *
 * The `type` value may be a single mime type string such as "application/json", the extension name such as "json" or an array `["json", "html", "text/plain"]`. When a list or array is given the _best_ match, if any is returned. When no types are given as arguments, returns all types accepted by the client in the preference order.
 * @param {(!Array<string>|string)=} [type] The type to check as a parameter, or multiple types as an array.
 * @param {...string} types Types to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.types = function(type, ...types) {}
/**
 * An alias for `types`.
 * @param {(!Array<string>|string)=} [type] The type to check as a parameter, or multiple types as an array.
 * @param {...string} types Types to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.type = function(type, ...types) {}
/**
 * Return accepted encodings or best fit based on `encodings`. Given `Accept-Encoding: gzip, deflate` an array sorted by quality is returned: `['gzip', 'deflate']`.
 * @param {(!Array<string>|string)=} [encoding] The encoding to check as a parameter, or multiple encodings as an array.
 * @param {...string} encodings Encodings to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.encoding = function(encoding, ...encodings) {}
/**
 * An alias for `encoding`.
 * @param {(!Array<string>|string)=} [encoding] The encoding to check as a parameter, or multiple encodings as an array.
 * @param {...string} encodings Encodings to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.encodings = function(encoding, ...encodings) {}
/**
 * Return accepted charsets or best fit based on `charsets`. Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5` an array sorted by quality is returned: `['utf-8', 'utf-7', 'iso-8859-1']`.
 * @param {(!Array<string>|string)=} [charset] The charset to check as a parameter, or multiple charsets as an array.
 * @param {...string} charsets Charsets to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.charset = function(charset, ...charsets) {}
/**
 * An alias for `charset`.
 * @param {(!Array<string>|string)=} [charset] The charset to check as a parameter, or multiple charsets as an array.
 * @param {...string} charsets Charsets to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.charsets = function(charset, ...charsets) {}
/**
 * Return accepted languages or best fit based on `langs`. Given `Accept-Language: en;q=0.8, es, pt` an array sorted by quality is returned: `['es', 'pt', 'en']`.
 * @param {(!Array<string>|string)=} [language] The language to check as a parameter, or multiple languages as an array.
 * @param {...string} languages Languages to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.language = function(language, ...languages) {}
/**
 * An alias for `language`.
 * @param {(!Array<string>|string)=} [language] The language to check as a parameter, or multiple languages as an array.
 * @param {...string} languages Languages to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.languages = function(language, ...languages) {}
/**
 * An alias for `language`.
 * @param {(!Array<string>|string)=} [language] The language to check as a parameter, or multiple languages as an array.
 * @param {...string} languages Languages to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.langs = function(language, ...languages) {}
/**
 * An alias for `language`.
 * @param {(!Array<string>|string)=} [language] The language to check as a parameter, or multiple languages as an array.
 * @param {...string} languages Languages to check as parameters.
 * @return {(string|!Array<string>|boolean)}
 */
_goa.Accepts.prototype.lang = function(language, ...languages) {}
