<template>
  <div class="site-canvas">
    <div
      id="header"
      class="relative py-3 flex justify-between items-center container">
      <app-logo/>
      <app-navbar/>
    </div>
    <nuxt/>
    <app-footer/>
    <div class="fixed pin-b pin-x max-w-sm mx-auto z-50">
      <div class="text-center py-4 lg:px-4 flex">
        <div
          class="p-2 rounded bg-indigo-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex"
          role="alert">
          <span class="flex rounded-full bg-indigo uppercase px-2 py-1 text-xs font-bold mr-3">Prototype Pages</span>
          <div class="div">
            <nuxt-link
              class="mx-2 text-left text-white no-underline"
              to="/">Home</nuxt-link>
            <span class="inline">/</span>
            <nuxt-link
              class="mx-2 text-left text-white no-underline"
              to="/offer">Offer</nuxt-link>
            <span class="inline">/</span>
            <nuxt-link
              class="mx-2 text-left text-white no-underline"
              to="/contact">Contact</nuxt-link>
          </div>
        </div>
      </div>
    </div>
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
</style>
