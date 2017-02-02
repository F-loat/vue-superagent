import superagent from 'superagent';

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

  Vue.superagent = superagent;

  Object.defineProperties(Vue.prototype, {

    $http: {
      get() {
        return Vue.superagent;
      },
    },

    $superagent: {
      get() {
        return Vue.superagent;
      },
    },

  });
}

if (typeof exports == "object") {
  module.exports = plugin;
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return plugin });
} else if (window.Vue && window.superagent) {
  Vue.use(plugin, window.superagent);
}

})();
