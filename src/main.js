import Vue from 'vue';
import Eagle from 'eagle.js';

import 'normalize.css';
import 'animate.css/animate.css';
import 'eagle.js/dist/eagle.css';
import 'eagle.js/dist/themes/agrume/agrume.css';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';

import '@/style/main.scss';

Vue.config.productionTip = false;

Vue.use(Eagle);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
