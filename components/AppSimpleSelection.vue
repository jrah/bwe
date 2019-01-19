<template lang="html">
  <section :class="'bg-'+componentBackgroundColor">
    <div
      class="container py-10">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="ns:flex flex-wrap justify-between mb-4">

        <a
          v-for="(block, index) in componentLoop"
          :key="index"
          :class="componentFlexItem"
          class="simpleSelection rounded p-4 hover:bg-blue cursor-pointer mx-4 bg-white relative hover:text-white">
          <font-awesome-icon
            icon="arrow-right"
            size="2x"
            class="absolute mr-4 pin-r"
          />
          <h2
            v-if="block.heading"
            class="leading-tight text-2xl my-3 text-black">{{ block.heading }}</h2>
          <p
            v-if="block.paragraph"
            class="leading-normal mt-0 mb-6">{{ block.paragraph }}</p>
        </a>

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

<style lang="scss" scoped>
.simpleSelection {
  &:hover > p {
    @apply text-white;
  }
  &:hover > h2 {
    @apply text-white;
  }
}
</style>
