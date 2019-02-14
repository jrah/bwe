<template>
  <!-- add link to bottom of trusted by -->
  <div>
    <app-main-header
      :component-image="home.image"
      :component-form="false"
      :component-title="home.title"/>
    <app-feature-block
      :component-flex-item="'flex-1'"
      :component-link="home.services.link"
      :component-title="home.services.title"
      :component-loop="home.services.block"/>
    <app-testimonial
      :component-loop="home.testimonial"/>
    <app-simple-selection
      :component-background-color="'grey-lightest'"
      :component-title="home.options.title"
      :component-flex-item="'ns:flex-1'"
      :component-loop="home.options.block"/>
    <app-feature-block
      :component-link="home.logos.link"
      :component-icon="home.logos.type"
      :component-title="home.logos.title"
      :component-loop="home.logos.block"/>
    <app-feature-blog
      :component-title="home.blog.title"
      :component-loop="home.blog.block"/>
  </div>
</template>

<script>
import home from '~/content/home.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppSplash from '~/components/AppSplash.vue'
import AppFeatureBlock from '~/components/AppFeatureBlock.vue'
import AppFeatureGrid from '~/components/AppFeatureGrid.vue'
import AppTestimonial from '~/components/AppTestimonial.vue'
import AppFeatureBlog from '~/components/AppFeatureBlog.vue'
import AppSimpleSelection from '~/components/AppSimpleSelection.vue'

export default {
  components: {
    AppMainHeader,
    AppSplash,
    AppFeatureBlock,
    AppFeatureGrid,
    AppTestimonial,
    AppFeatureBlog,
    AppSimpleSelection
  },
  data() {
    return {
      home
      // pageTitle: home.title
    }
  },
  head() {
    return {
      title: 'Bright World ' + home.title
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
