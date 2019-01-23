import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

const routes = store.state.slides.map((slide) => {
  const { name, path } = slide;
  const component = () => import(`@/views/${slide.name}.vue`);

  return {
    name,
    path,
    component,
  };
});

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
