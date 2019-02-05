<template>
  <div class="site-canvas">
    <div
      id="header"
      class="absolute w-full">
      <div
        class="py-3 flex justify-between items-center container">
        <app-logo/>
        <app-navbar/>
      </div>
    </div>
    <nuxt/>
    <app-footer/>
    <app-switcher/>
  </div>
</template>

<script>
import appNavbar from '~/components/AppNavbar.vue'
import appFooter from '~/components/AppFooter.vue'
import appLogo from '~/components/AppLogo.vue'
import appSwitcher from '~/components/AppSwitcher.vue'

export default {
  components: {
    appFooter,
    appNavbar,
    appLogo,
    appSwitcher
  }
}
</script>

<style lang="scss">
@import '~assets/scss/mixins';
html {
  @apply font-copy font-normal text-black leading-normal;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-heading;
}

p,
blockquote,
nav,
button,
a {
  @apply font-copy;
  @apply text-grey-darker;
  @apply text-base;
}

.container {
  @apply px-8;
  @include mq(ns) {
    @apply px-16;
  }
  @extend %mwc;
}

.object-cover {
  object-fit: cover;
}
</style>
