'use strict';

require('babel-polyfill');

var _static = require('./Cite/static');

var staticMethods = _interopRequireWildcard(_static);

var _index = require('./get/index');

var get = _interopRequireWildcard(_index);

var _index2 = require('./CSL/index');

var CSL = _interopRequireWildcard(_index2);

var _index3 = require('./parse/index');

var parse = _interopRequireWildcard(_index3);

var _index4 = require('./util/index');

var util = _interopRequireWildcard(_index4);

var _version = require('./version');

var version = _interopRequireWildcard(_version);

var _index5 = require('./async/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./Cite/index');

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

global.logger = new console.Console(process.stderr, process.stderr); /**
                                                                      * @file index.js
                                                                      *
                                                                      * @projectname Citationjs
                                                                      *
                                                                      * @author Lars Willighagen
                                                                      * @version 0.3.1
                                                                      * @license
                                                                      * Copyright (c) 2015-2017 Lars Willighagen
                                                                      *
                                                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                      * of this software and associated documentation files (the "Software"), to deal
                                                                      * in the Software without restriction, including without limitation the rights
                                                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                      * copies of the Software, and to permit persons to whom the Software is
                                                                      * furnished to do so, subject to the following conditions:
                                                                      *
                                                                      * The above copyright notice and this permission notice shall be included in all
                                                                      * copies or substantial portions of the Software.
                                                                      *
                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                      * SOFTWARE.
                                                                      */

Object.assign(_index8.default, staticMethods, {
  async: _index6.default,
  get: get,
  CSL: CSL,
  parse: parse,
  util: util,
  version: version,
  input: parse.input.chain,
  inputAsync: parse.input.async.chain
});

module.exports = _index8.default;