<template lang="pug">
slideshow(
  :on-end-exit='onEndExit'
  :mouse-navigation='false'
  back-by-slide
)
</template>

<script>
import Slideshow from '@/components/Slideshow.vue';

export default {
  components: {
    Slideshow,
  },

  methods: {
    onEndExit() {},
  },
};
</script>
