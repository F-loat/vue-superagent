# vue-superagent
[![npm package](https://img.shields.io/npm/v/vue-superagent.svg)](https://npmjs.org/package/vue-superagent)
[![npm downloads](http://img.shields.io/npm/dm/vue-superagent.svg)](https://npmjs.org/package/vue-superagent)

> A small wrapper for integrating [superagent](https://github.com/visionmedia/superagent) to Vuejs
 (reference [vue-axios](https://github.com/imcvampire/vue-axios))

## How to install:
### es6 module:
``` bash
npm install --save vue-superagent
// or
yarn add vue-superagent
```

And in your entry file:
``` javascript
import Vue from 'vue'
import VueSuperagent from 'vue-superagent'

Vue.use(VueSuperagent)
```

``` javascript
// use baseUrl
Vue.use(VueSuperagent, {
  baseUrl: 'https://api.douban.com/v2'
})

// *.vue
this.$http
  .get('/book/1220562') // => https://api.douban.com/v2/book/1220562
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

## Usage:
This wrapper bind `superagent` to `Vue` or `this` if you're using single file component.

You can `superagent` like this:
``` javascript
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
