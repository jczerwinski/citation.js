'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = require('./log');

var log = _interopRequireWildcard(_log);

var _options = require('./options');

var options = _interopRequireWildcard(_options);

var _set = require('./set');

var set = _interopRequireWildcard(_set);

var _sort = require('./sort');

var sort = _interopRequireWildcard(_sort);

var _get = require('./get');

var get = _interopRequireWildcard(_get);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @constructor Cite
 *
 * @description Create a `Cite` object with almost any kind of data, and manipulate it with its default methods.
 *
 * @param {String|CSL|Object|String[]|CSL[]|Object[]} data - Input data. If no data is passed, an empty object is returned
 * @param {Object} options - The options for the output
 * @param {String} [options.format="real"] - The outputted datatype. Real representation (`"real"`, e.g. DOM Object for HTML, JavaScript Object for JSON) or String representation ( `"string"` )
 * @param {String} [options.type="json"] - The format of the output. `"string"`, `"html"` or `"json"`
 * @param {String} [options.style="csl"] - The style of the output. See [Output](./#output)
 * @param {String} [options.lang="en-US"] - The language of the output. [RFC 5646](https://tools.ietf.org/html/rfc5646) codes
 */
function Cite(data, options) {
  // Making it Scope-Safe
  if (!(this instanceof Cite)) {
    return new Cite(data, options);
  }

  /**
   * The default options for the output
   *
   * @property format {String} The outputted datatype. Real representation (`"real"`, e.g. DOM Object for HTML, JavaScript Object for JSON) or String representation ( `"string"` )
   * @property type {String} The format of the output. `"string"`, `"html"` or `"json"`
   * @property style {String} The style of the output. See [Output](../#output)
   * @property lang {String} The language of the output. [RFC 5646](https://tools.ietf.org/html/rfc5646) codes
   *
   * @access protected
   * @type Object
   * @default {}
   */
  this._options = options || {};

  /**
   * The log, containing all logged data, consisting of copies of the Cite object at different moments in time.
   *
   * The `.reset()` function **does not** reset on the log. This way, you can still undo all changes.
   *
   * <br /><br />
   * `.currentVersion()` and similar function **are not** logged, because this would be influenced by function using other functions.
   *
   * @access protected
   * @type Object[]
   *
   * @property {Cite} 0 - The first image.
   */
  this.log = [];

  /**
   * The data formatted to JSON
   *
   * @access protected
   * @type Object
   * @default []
   */
  this.data = [];

  this.set(data);
  this.options(options);
  this.save();

  return this;
}

Object.assign(Cite.prototype, log, options, set, sort, get);

exports.default = Cite;