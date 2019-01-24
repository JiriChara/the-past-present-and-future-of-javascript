<template lang="pug">
#app
  .eg-theme-agrume
    .eg-slideshow
      div(v-for="slide in availableSlides")
        slide(
          enterNext='bounceInRight'
          leaveNext='bounceOutLeft'
          enterPrev='bounceInLeft'
          leavePrev='bounceOutRight'
          :class='`slide-${slide.name}`'
        )
          router-view
</template>

<script>
import { Slideshow } from 'eagle.js';
import { mapState, mapMutations } from 'vuex';

export default {
  mixins: [Slideshow],

  computed: {
    ...mapState({
      availableSlides: 'slides',
    }),
  },

  watch: {
    currentSlideIndex: 'updateUrl',

    $route: 'updateSlides',
  },

  methods: {
    ...mapMutations({
      setCurrentIndex: 'setCurrent',
    }),

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

      this.setCurrentIndex(index);
      this.currentSlideIndex = index;
    },
  },
};
</script>
