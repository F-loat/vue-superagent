/**
 * Install plugin
 * @param Vue
 * @param superagent
 * @param superagent-use
 * @param superagent-prefix
 */

import superagent from 'superagent';
import use from 'superagent-use';
import prefix from 'superagent-prefix';

function plugin(Vue, options) {
  const baseUrl = options && options.baseUrl;

  if (plugin.installed) {
    return;
  }

  if (baseUrl) {
    const agent = use(superagent);
    agent.use(prefix(baseUrl));
    Vue.superagent = agent;
  } else {
    Vue.superagent = superagent;
  }

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

export default plugin;
