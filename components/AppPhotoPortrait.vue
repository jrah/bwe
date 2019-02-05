<template lang="html">
  <section :class="'bg-'+componentBackgroundColor">
    <div class="pt-10">
      <div class="flex l:flex-row flex-col">
        <div class="l:w-1/2 w-full">
          <img
            :src="componentImage"
            :alt="componentTitle"
            class="w-full ns:h-full object-cover">
        </div>
        <div class="l:w-2/3 w-full py-10 ns:p-10 flex flex-col">
          <h1 class="mb-12 text-4xl">{{ componentTitle }}</h1>
          <p>Su is your Head Office care contact for all administrational matters relating to your guardianship with.</p>
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
