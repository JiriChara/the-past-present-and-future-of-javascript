import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slides: [
      {
        name: 'FrontPage',
        path: '',
      },
      {
        name: 'TheDarkPast',
        path: '/the-dark-past',
      },
    ],
  },
});
