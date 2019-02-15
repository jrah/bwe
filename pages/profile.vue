<template>
  <!-- add link to bottom of trusted by -->
  <div>
    <app-main-header
      :component-image="'https://source.unsplash.com/featured/?students'"
      :component-button="false"
      :component-form="false"/>
    <app-feature-block
      :component-flex-item="'flex-1'"
      :component-title="profile.services.title"
      :component-loop="profile.services.block"/>
    <app-simple-selection
      :component-background-color="'grey-lightest'"
      :component-title="profile.options.title"
      :component-flex-item="'ns:flex-1'"
      :component-loop="profile.options.block"/>
    <app-testimonial
      :component-loop="profile.testimonial"/>
    <app-image-splash-half
      :component-background-color="'grey-lightest'"
      :component-title="profile.infocta.title"
      :component-image="profile.infocta.image"
      :component-button-text="profile.infocta.button_text"
      :component-button-href="profile.infocta.button_href"/>
      <!-- <app-image-splash-half
      :component-background-color="'grey-lightest'"
      :component-title="'Your Guardianship care Manager'"
      :component-image="'https://www.brightworld.co.uk/content/Carol-mtt.jpg'"
      :component-button-text="profile.infocta.button_text"
      :component-button-href="profile.infocta.button_href"/> -->
  </div>
</template>

<script>
import home from '~/content/home.json'
import profile from '~/content/profile.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppSplash from '~/components/AppSplash.vue'
import AppPhoto from '~/components/AppPhoto.vue'
import AppFeatureGrid from '~/components/AppFeatureGrid.vue'
import AppTestimonial from '~/components/AppTestimonial.vue'
import AppFeatureBlock from '~/components/AppFeatureBlock.vue'
import AppSimpleSelection from '~/components/AppSimpleSelection.vue'
import AppImageSplashHalf from '~/components/AppImageSplashHalf.vue'
import AppPhotoPortrait from '~/components/AppPhotoPortrait.vue'

export default {
  components: {
    AppMainHeader,
    AppSplash,
    AppPhoto,
    AppFeatureGrid,
    AppTestimonial,
    AppFeatureBlock,
    AppSimpleSelection,
    AppImageSplashHalf,
    AppPhotoPortrait
  },
  data() {
    return {
      home,
      profile
    }
  },
  head() {
    return {
      title: 'Bright World - ' + 'Bright World at Brighton College'
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
