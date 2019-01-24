import Vue from 'vue';
import Eagle, { Options } from 'eagle.js';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

import 'normalize.css';
import 'animate.css/animate.css';
import 'eagle.js/dist/eagle.css';
import 'eagle.js/dist/themes/agrume/agrume.css';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';

import '@/style/main.scss';

hljs.registerLanguage('js', javascript);
Options.hljs = hljs;

Vue.config.productionTip = false;

Vue.use(Eagle);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
