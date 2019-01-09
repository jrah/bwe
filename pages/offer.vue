<template>
  <!-- add link to bottom of trusted by -->
  <div>
    <app-main-header
      :component-image="home.image"
      :component-paragraph="home.intro"
      :component-title="home.title"/>
    <app-road-map
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
    <app-splash
      :component-paragraph="home.splash.text"
      :component-title="home.splash.title"/>
    <app-accordion
      :component-side-active="true"
      :component-side="home.contact.block"
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
    <app-testimonial
      :component-loop="home.testimonial"/>
    <app-accordion
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
    <app-feature-blog
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
  </div>
</template>

<script>
import home from '~/content/home.json'
import offer from '~/content/offer.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppSplash from '~/components/AppSplash.vue'
import AppFeatureBlock from '~/components/AppFeatureBlock.vue'
import AppFeatureGrid from '~/components/AppFeatureGrid.vue'
import AppTestimonial from '~/components/AppTestimonial.vue'
import AppFeatureBlog from '~/components/AppFeatureBlog.vue'
import AppAccordion from '~/components/AppAccordion.vue'
import AppRoadMap from '~/components/AppRoadMap.vue'

export default {
  components: {
    AppMainHeader,
    AppSplash,
    AppFeatureBlock,
    AppFeatureGrid,
    AppTestimonial,
    AppFeatureBlog,
    AppAccordion,
    AppRoadMap
  },
  data() {
    return {
      home,
      offer
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
