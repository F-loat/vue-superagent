'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _superagentUse = require('superagent-use');

var _superagentUse2 = _interopRequireDefault(_superagentUse);

var _superagentPrefix = require('superagent-prefix');

var _superagentPrefix2 = _interopRequireDefault(_superagentPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue, options) {
  var baseUrl = options && options.baseUrl;

  if (plugin.installed) {
    return;
  }

  if (baseUrl) {
    var agent = (0, _superagentUse2.default)(_superagent2.default);
    agent.use((0, _superagentPrefix2.default)(baseUrl));
    Vue.superagent = agent;
  } else {
    Vue.superagent = _superagent2.default;
  }

  Object.defineProperties(Vue.prototype, {

    $http: {
      get: function get() {
        return Vue.superagent;
      }
    },

    $superagent: {
      get: function get() {
        return Vue.superagent;
      }
    }

  });
} /**
   * Install plugin
   * @param Vue
   * @param superagent
   * @param superagent-use
   * @param superagent-prefix
   */

exports.default = plugin;