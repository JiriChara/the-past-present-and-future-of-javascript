<template lang="pug">
.eg-theme-agrume
  .eg-slideshow
    slide(enter='bounceInLeft' leave='bounceOutLeft')
     .center.frontpage
        h1 The Past, Present and Future of
        img(src='@/assets/js-logo.png')
</template>

<script>
import { Slideshow } from 'eagle.js';

export default {
  mixins: [Slideshow],
};
</script>
