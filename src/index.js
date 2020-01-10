// import './js/common';
// import './style/main.scss';

window.Vue = require('vue');

// Vue.component('Example', require('./components/Example.vue').default);

import Example from './components/Example.vue';

const app = new Vue({
  // el: '#app',
  render: h => h(Example),
}).$mount('#app');
