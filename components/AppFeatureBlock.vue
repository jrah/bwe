<template lang="html">
  <section :class="'bg-'+componentBackgroundColor">
    <div
      class="container py-10">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="m:flex l:flex flex-wrap justify-between">

        <div
          v-for="(block, index) in componentLoop"
          :key="index"
          :name=" '' + index "
          :class="componentFlexItem"
          class="text-center px-4">
          drgryhdx
          <h2
            v-if="block.heading"
            class="leading-tight text-lg my-3">{{ block.heading }}</h2>
          <p
            v-if="block.paragraph"
            class="leading-normal mt-0 mb-6">{{ block.paragraph }}</p>
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
    componentFlexItem: {
      type: String,
      required: false,
      default: 'flex-auto'
    },
    componentIcon: {
      type: String,
      required: false,
      default: 'Font Awesome'
    },
    componentBackgroundColor: {
      type: String,
      required: false,
      default: ''
    },
    componentLoop: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
