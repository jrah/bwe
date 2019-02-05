<template lang="html">
  <div>
    <app-main-header
      :component-image="grid.image"
      :component-button="false"
      :component-form="false"/>
    <!-- <app-file-index
      :component-background-color="'grey-lightest'"
      :component-title="grid.title"
      :component-loop="grid.block"/> -->
    <app-feature-blog
      :component-title="grid.title"
      :component-paragraph="'This acts as a dual example. You can click on PDFs using the default view behaviour in Chrome'"
      :component-loop="grid.block"/>
  </div>
</template>

<script>
import grid from '~/content/indexgrid.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppIndexGrid from '~/components/AppIndexGrid.vue'
import AppFileIndex from '~/components/AppFileIndex.vue'
import AppFeatureBlog from '~/components/AppFeatureBlog.vue'

export default {
  components: {
    AppMainHeader,
    AppIndexGrid,
    AppFileIndex,
    AppFeatureBlog
  },
  data() {
    return {
      grid
    }
  }
}
</script>

<style lang="css">
</style>
