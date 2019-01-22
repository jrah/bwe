<template>
  <!-- add link to bottom of trusted by -->
  <div>
    <app-main-header
      :component-image="bsch.image"
      :component-title="bsch.title"/>
    <app-road-map
      :component-title="bsch.roadmap.title"
      :component-loop="bsch.roadmap.block"/>
    <app-splash
      :component-paragraph="home.splash.text"
      :component-title="home.splash.title"/>
    <app-accordion
      :component-level="1"
      :component-side-active="true"
      :component-side="home.contact.block"
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
    <app-testimonial
      :component-loop="home.testimonial"/>
    <app-comparison-table
      :component-title="bsch.comparison.title"
      :component-loop="bsch.comparison.block"/>
    <app-accordion
      :component-level="2"
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
    <app-feature-blog
      :component-title="home.blog.title"
      :component-loop="home.blog.block"/>
  </div>
</template>

<script>
import home from '~/content/home.json'
import bsch from '~/content/boardingschools.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppSplash from '~/components/AppSplash.vue'
import AppFeatureBlock from '~/components/AppFeatureBlock.vue'
import AppFeatureGrid from '~/components/AppFeatureGrid.vue'
import AppTestimonial from '~/components/AppTestimonial.vue'
import AppFeatureBlog from '~/components/AppFeatureBlog.vue'
import AppAccordion from '~/components/AppAccordion.vue'
import AppRoadMap from '~/components/AppRoadMap.vue'
import AppComparisonTable from '~/components/AppComparisonTable.vue'

export default {
  components: {
    AppMainHeader,
    AppSplash,
    AppFeatureBlock,
    AppFeatureGrid,
    AppTestimonial,
    AppFeatureBlog,
    AppAccordion,
    AppRoadMap,
    AppComparisonTable
  },
  data() {
    return {
      home,
      bsch
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
