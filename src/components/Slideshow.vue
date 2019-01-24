<template lang="pug">
#app
  .eg-theme-agrume
    .eg-slideshow
      div(v-for="slide in availableSlides")
        slide(
          enter='bounceInRight'
          leave='bounceOutLeft'
          :class='`slide-${slide.name}`'
        )
          router-view
</template>

<script>
import { Slideshow } from 'eagle.js';
import { mapState } from 'vuex';

export default {
  mixins: [Slideshow],

  computed: {
    ...mapState({
      availableSlides: 'slides',
    }),
  },

  watch: {
    currentSlideIndex: 'updateUrl',

    step: 'updateUrl',

    $route: 'updateSlides',
  },

  methods: {
    updateUrl(step) {
      const { name } = this.availableSlides[step - 1];

      if (name) {
        this.$router.push({
          name,
        });
      }
    },

    updateSlides(route) {
      const index = this.availableSlides
        .findIndex(slide => slide.name === route.name) + 1;

      this.currentSlideIndex = index;

      this.$nextTick(() => {
        this.step = index;
      });
    },
  },
};
</script>
