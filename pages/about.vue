<template>
  <!-- add link to bottom of trusted by -->
  <div>
    <app-main-header
      :component-image="home.image"
      :component-button="false"
      :component-form="false"
      :component-title="'Meet The Head Office Team'"/>
    <app-photo
      :component-loop="about.senior.block"
      :component-size-small="false"
      :component-title="about.senior.title"/>
    <app-photo
      :component-loop="about.management.block"
      :component-title="about.management.title"/>
    <app-splash
      :component-title="about.splash.title"
      :component-paragraph="about.splash.text"/>
  </div>
</template>

<script>
import home from '~/content/home.json'
import about from '~/content/about.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppSplash from '~/components/AppSplash.vue'
import AppPhoto from '~/components/AppPhoto.vue'
import AppFeatureGrid from '~/components/AppFeatureGrid.vue'
import AppTestimonial from '~/components/AppTestimonial.vue'
import AppFeatureBlog from '~/components/AppFeatureBlog.vue'
import AppSimpleSelection from '~/components/AppSimpleSelection.vue'

export default {
  components: {
    AppMainHeader,
    AppSplash,
    AppPhoto,
    AppFeatureGrid,
    AppTestimonial,
    AppFeatureBlog,
    AppSimpleSelection
  },
  data() {
    return {
      home,
      about
    }
  },
  head() {
    return {
      title: 'Bright World - ' + 'Meet The Head Office Team'
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
