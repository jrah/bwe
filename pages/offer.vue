<template>
  <!-- add link to bottom of trusted by -->
  <div>
    <app-main-header/>
    <app-testimonial
      :component-loop="home.testimonial"/>
  </div>
</template>

<script>
import home from '~/content/home.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppTestimonial from '~/components/AppTestimonial.vue'

export default {
  components: {
    AppMainHeader,
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
