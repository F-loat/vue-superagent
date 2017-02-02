# vue-superagent
> reference [vue-axios](https://github.com/imcvampire/vue-axios)

A small wrapper for integrating superagent to Vuejs

[![NPM](https://nodei.co/npm/vue-superagent.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-superagent/)

## How to install:
### CommonJS:
```
npm install --save vue-superagent
```

And in your entry file:
```
import Vue from 'vue'
import VueSuperagent from 'vue-superagent'

Vue.use(VueSuperagent)
```

### Script:
Just add 2 scripts in order: `vue` and `vue-superagent` to your `document`.

## Usage:
This wrapper bind `superagent` to `Vue` or `this` if you're using single file component.

You can `superagent` like this:
```
Vue.superagent.get(api).then((response) => {
  console.log(response.body)
})

this.$superagent.get(api).then((response) => {
  console.log(response.body)
})

this.$http.get(api).then((response) => {
  console.log(response.body)
})
```
