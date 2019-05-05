const _Accepts = require('./depack')

class Accepts extends _Accepts {
  /**
   * Create a new Accepts object for the given req.
   * @param {!http.IncomingMessage} req
   */
  constructor(request) {
    super(request)
  }
}

module.exports = Accepts

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('http').IncomingMessage} http.IncomingMessage
 */