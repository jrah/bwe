<template lang="html">
  <section :class="'bg-'+componentBackgroundColor">
    <div class="container py-10">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <p class="text-center mb-12 text-4xl">{{ componentParagraph }}</p>

      <div class="fileIndex">

        <a
          v-for="(block, index) in componentLoop"
          :key="index"
          :href="block.href"
          :class="'bg-'+block.color"
          class="relative no-underline fileIndex-item">
          <span class="text-sm transparent absolute pin-t uppercase mt-2 p-1 font-bold z-50">{{ block.type }}</span>
          <h2
            v-if="block.heading"
            class="leading-tight text-base text-white">{{ block.heading }}</h2>
        </a>

      </div>
      <div class="flex justify-center">
        <ul class="flex list-reset border border-grey-light rounded w-auto max-w-sm">
          <li><a
            class="pointer-events-none block no-underline hover:text-white hover:bg-blue text-grey border-r border-grey-light px-3 py-2"
            href="#">Previous</a></li>
          <li><a
            class="block no-underline text-white bg-blue border-r border-blue px-3 py-2"
            href="#">1</a></li>
          <li><a
            class="pointer-events-none block text-grey no-underline hover:text-white hover:bg-blue px-3 py-2"
            href="#">Next</a></li>
        </ul>
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
    componentParagraph: {
      type: String,
      required: false,
      default: ''
    },
    componentLoop: {
      type: Array,
      required: true
    },
    componentBackgroundColor: {
      type: String,
      required: false,
      default: ''
    },
    componentImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/mixins';
.fileIndex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &-item {
    width: 100%;
    min-height: 12rem;
    @include mq(ns) {
      width: 32%;
    }
    margin-bottom: 1.5rem;
    &Content {
      min-height: 300px;
    }
  }
}
</style>
