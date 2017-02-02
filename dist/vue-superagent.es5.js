"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _superagent = require("superagent");

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

  /**
   * Install plugin
   * @param Vue
   * @param superagent
   */

  function plugin(Vue) {

    if (plugin.installed) {
      return;
    }

    Vue.superagent = _superagent2.default;

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
  }

  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object") {
    module.exports = plugin;
  } else if (typeof define == "function" && define.amd) {
    define([], function () {
      return plugin;
    });
  } else if (window.Vue && window.superagent) {
    Vue.use(plugin, window.superagent);
  }
})();