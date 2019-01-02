<template>
  <!-- add link to bottom of trusted by -->
  <div>
    <app-main-header/>
    <app-feature-block
      :component-link="home.logos.link"
      :component-icon="home.logos.type"
      :component-title="home.logos.title"
      :component-loop="home.logos.block"/>
    <app-splash
      :component-paragraph="home.splash.text"
      :component-title="home.splash.title"/>
    <app-feature-block
      :component-flex-item="'flex-1'"
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
    <app-feature-grid
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
    <app-testimonial
      :component-loop="home.testimonial"/>
  </div>
</template>

<script>
import home from '~/content/home.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppSplash from '~/components/AppSplash.vue'
import AppFeatureBlock from '~/components/AppFeatureBlock.vue'
import AppFeatureGrid from '~/components/AppFeatureGrid.vue'
import AppTestimonial from '~/components/AppTestimonial.vue'

export default {
  components: {
    AppMainHeader,
    AppSplash,
    AppFeatureBlock,
    AppFeatureGrid,
    AppTestimonial
  },
  data() {
    return {
      home
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
