<template lang="html">
  <section>
    <div class="container py-10 text-navy">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="featureGrid">

        <div
          v-for="(block, index) in componentLoop"
          :key="index"
          :name=" '' + index "
          class="featureGrid-item relative bg-white p-6"
        >
          <div class="border-grey-lighter border-solid border-2 rounded-sm shadow featureGrid-item-inner relative">
            <h2
              v-if="block.heading"
              class="leading-tight text-3xl mt-1 mb-3">{{ block.heading }}</h2>
            <p
              v-if="block.paragraph"
              class="leading-normal mt-0 mb-6">{{ block.paragraph }}</p>
            <div class="absolute pin-b py-4">
              <button class="bg-purple-light hover:bg-purple text-grey-lightest font-bold py-4 px-4 rounded inline-flex items-center border-b-4 border-purple-dark">
                <span>Read more</span>
                <font-awesome-icon
                  icon="arrow-right"
                  class="ml-2"
                />
              </button>
            </div>
            <div
              v-if="block.icon"
              class="absolute pin-b pin-r">
              <div class="-m-8 relative z-10">
                <font-awesome-icon
                  :icon="block.icon"
                  class="ml-2"
                  size="8x"
                />
              </div>
            </div>
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
    componentLoop: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/mixins';
.featureGrid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  &-item {
    height: 100%;
    width: 100%;
    &-inner {
      min-height: 24rem;
      min-width: 24rem;
      padding: 2rem;
    }
    @include mq(ns) {
      width: calc(100% / 2);
      height: calc(100% / 2);
    }
  }
}
</style>
