<template lang="html">
  <section :class="'bg-'+componentBackgroundColor">
    <div class="container pt-10">
      <h1 class="text-center text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="flex l:flex-row flex-col">
        <div class="l:w-1/2 w-full">
          <img
            :src="componentImage"
            :alt="componentTitle"
            class="w-full ns:h-full object-cover">
        </div>
        <div class="l:w-2/3 w-full py-10 ns:p-10 flex flex-col">
          <p class="mb-3">Brighton College is a Co-educational UK Boarding School in West Sussex.</p>
          <p class="mb-3">Only two minutes walk from the sea, Brighton College is an outstanding centre of academic, cultural and sporting excellence in the heart of Brighton, one of England’s most famous and popular seaside towns.</p>
          <p class="mb-3">Bright World can help you to gain access to the school for year 9, GCSE and A level programmes.</p>
          <p
            class="mb-3 font-bold">Bright World's placement service is FREE. If you would like more information on Brighton College, or would like to apply, please contact us or phone direct on +44 (0)1273 835745.</p>
          <a
            :href="componentButtonHref"
            class="no-underline bg-navy hover:bg-navy-dark text-white font-bold py-2 px-4 rounded self-end">{{ componentButtonText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    componentTitle: {
      type: String,
      required: true
    },
    componentImage: {
      type: String,
      required: false,
      default: ''
    },
    componentButtonText: {
      type: String,
      required: false,
      default: ''
    },
    componentButtonHref: {
      type: String,
      required: false,
      default: ''
    },
    componentBackgroundColor: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/mixins';
</style>
