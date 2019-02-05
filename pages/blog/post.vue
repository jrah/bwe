<template lang="html">
  <div>
    <app-main-header
      :component-image="sample.image"
      :component-button="false"
      :component-form="false"/>
    <app-blog-content/>
  </div>
</template>

<script>
import sample from '~/content/blog/sample.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppBlogContent from '~/components/AppBlogContent.vue'
export default {
  components: {
    AppMainHeader,
    AppBlogContent
  },
  data() {
    return {
      sample
      // pageTitle: home.title
    }
  }
}
</script>

<style lang="css">
</style>
