import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    slides: [
      {
        name: 'FrontPage',
        path: '',
      },
      {
        name: 'TheDarkPast',
        path: '/the-dark-past',
      },
      {
        name: 'History',
        path: '/history',
      },
      {
        name: 'ECMAScript',
        path: '/ecmascript',
      },
      {
        name: 'NotPerfect',
        path: '/not-perfect',
      },
      {
        name: 'NotPopular',
        path: '/not-popular',
      },
      {
        name: 'AJAX',
        path: '/ajax',
      },
      {
        name: 'NodeJS',
        path: '/node-js',
      },
      {
        name: 'Frameworks',
        path: '/frameorks',
      },
      {
        name: 'ThePresent',
        path: '/the-present',
      },
      {
        name: 'Present',
        path: '/present',
      },
      {
        name: 'Babel',
        path: '/babel',
      },
      {
        name: 'TypeScript',
        path: '/type-script',
      },
      {
        name: 'Promise',
        path: '/promise',
      },
      {
        name: 'AsyncAwait',
        path: '/async-await',
      },
      {
        name: 'Spread',
        path: '/spread',
      },
      {
        name: 'Destructuring',
        path: '/destructuring',
      },
      {
        name: 'Proxies',
        path: '/proxies',
      },
      {
        name: 'Generators',
        path: '/generators',
      },
      {
        name: 'AndManyMoreFeatures',
        path: '/and-many-more-features',
      },
      {
        name: 'PWA',
        path: '/pwa',
      },
      {
        name: 'APIs',
        path: '/apis',
      },
      {
        name: 'TheBrightFuture',
        path: '/the-bright-future',
      },
      {
        name: 'Future',
        path: '/future',
      },
    ],
  },

  /* eslint-disable no-param-reassign */
  mutations: {
    setCurrent(state, index) {
      state.currentIndex = index;
    },
  },
  /* eslint-enable no-param-reassign */
});
