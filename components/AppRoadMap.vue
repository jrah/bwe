<template lang="html">
  <section>
    <div class="container py-10">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="ns:flex flex-wrap">

        <div
          v-for="(block, index) in componentLoop"
          :key="index"
          class="flex-1">
          <div
            class="px-4 py-3 relative flex flex-col ns:flex-row items-center">
            <div class="text">
              <h2 class="font-bold">{{ block.heading }}</h2>
              <p class="block sm:inline">{{ block.paragraph }}</p>
            </div>

            <span
              v-if="index !== componentLoop.length - 1"
              class="px-4 py-3">
              <font-awesome-icon
                icon="arrow-right"
                size="2x"
                color="grey"
                class="roadMapArrow"
              />
            </span>

          </div>

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
    componentLoop: {
      type: Array,
      required: true
    },
    componentLink: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/mixins';
.roadMapArrow {
  transform: rotate(90deg);
  @include mq(ns) {
    transform: rotate(360deg);
  }
}
</style>
