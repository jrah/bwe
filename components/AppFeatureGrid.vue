<template lang="html">
  <section :class="'bg-'+componentBackgroundColor">
    <div class="container py-10">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="featureGrid">

        <div
          v-for="(block, index) in componentLoop"
          :key="index"
          :name=" '' + index "
          class="featureGrid-item relative bg-white"
        >
          <div class="border-grey-lighter border-solid border-2 rounded-sm shadow featureGrid-item-inner relative">
            <h2
              v-if="block.heading"
              class="leading-tight text-2xl mb-3">{{ block.heading }}</h2>
            <p
              v-if="block.paragraph"
              class="leading-normal mt-0 mb-6">{{ block.paragraph }}</p>
            <div class="ns:absolute pin-b py-4">
              <button class="bg-navy-light hover:bg-navy text-grey-lightest font-bold py-4 px-4 rounded inline-flex items-center border-b-4 border-navy-dark">
                <span>Call to action</span>
                <font-awesome-icon
                  icon="arrow-right"
                  class="ml-2"
                />
              </button>
            </div>
            <div
              class="absolute pin-b pin-r">
              <div class="ns:-m-8 p-3 relative z-10 text-grey">
                <div v-if="block.icon">
                  <font-awesome-icon
                    :icon="block.icon"
                    class="ml-2 featureGrid-icon fill-current"
                    size="8x"
                  />
                </div>
                <div v-else>
                  <div class="w-48 max-w-xs">
                    <img
                      :src="block.image"
                      :alt="block.icon">
                  </div>
                </div>
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
.featureGrid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  &-item {
    height: 100%;
    width: 100%;
    margin-bottom: 3.5rem;
    &:last-child {
      padding-bottom: 0;
    }
    &-inner {
      @include mq(ns) {
        min-height: 24rem;
      }
      padding: 2rem;
    }
    @include mq(l) {
      width: calc(95% / 2);
      height: calc(100% / 2);
    }
  }
  .featureGrid-icon {
    display: none !important;

    @include mq(ns) {
      display: inline-block !important;
    }
  }
}
</style>
