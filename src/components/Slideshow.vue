<template lang="pug">
#app
  .eg-theme-agrume
    .eg-slideshow
      div(v-for="slide in availableSlides")
        slide(
          enter='bounceInRight'
          leave='bounceOutLeft'
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
    currentSlideIndex: {
      handler: 'updateUrl',
      immediate: true,
    },

    step: {
      handler: 'updateUrl',
      immediate: true,
    },
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
  },
};
</script>
