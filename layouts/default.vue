<template>
  <div class="site-canvas">
    <div class="container relative py-3">
      <app-logo/>
      <app-navbar/>
    </div>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import appNavbar from '~/components/AppNavbar.vue'
import appFooter from '~/components/AppFooter.vue'
import appLogo from '~/components/AppLogo.vue'

export default {
  components: {
    appFooter,
    appNavbar,
    appLogo
  }
}
</script>

<style lang="scss">
@import '~assets/scss/mixins';
html {
  @apply font-sans font-normal text-black leading-normal;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-raleway;
}

p,
blockquote,
nav,
button,
a {
  @apply font-roboto;
}

.container {
  @apply px-8;
  @include mq(ns) {
    @apply px-16;
  }
  @extend %mwc;
}
</style>
