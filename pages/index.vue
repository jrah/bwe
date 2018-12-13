<template>
  <div>
    <app-main-header/>
    <app-splash
      :component-paragraph="home.splash.text"
      :component-title="home.splash.title"/>
    <app-feature-block
      :component-heading="home.features.heading"
      :component-paragraph="home.features.paragraph" 
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
  </div>
</template>

<script>
import home from '~/content/home.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppSplash from '~/components/AppSplash.vue'
import AppFeatureBlock from '~/components/AppFeatureBlock.vue'

export default {
  components: {
    AppMainHeader,
    AppSplash,
    AppFeatureBlock
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
