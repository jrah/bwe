<template>
  <div>
    <app-main-header/>
    <app-splash
      :component-paragraph="home.splash.text"
      :component-title="home.splash.title"/>
    <app-feature-block
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
    <app-feature-grid
      :component-title="home.features.title"
      :component-loop="home.features.block"/>
  </div>
</template>

<script>
import home from '~/content/home.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppSplash from '~/components/AppSplash.vue'
import AppFeatureBlock from '~/components/AppFeatureBlock.vue'
import AppFeatureGrid from '~/components/AppFeatureGrid.vue'

export default {
  components: {
    AppMainHeader,
    AppSplash,
    AppFeatureBlock,
    AppFeatureGrid
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
