<template lang="html">
  <section :class="'bg-'+componentBackgroundColor">
    <div class="container py-10">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>

      <div
        v-if="componentSizeSmall === false"
        class="flex justify-between flex-wrap photoLg">
        <div
          v-for="(block, index) in componentLoop"
          :key="index"
          class="photoLg-item">
          <figure class="rounded-lg">
            <img
              :src="block.image"
              :alt="block.heading"
              class="align-top">
          </figure>
          <figcaption class="text-center mt-8">
            <h2
              v-if="block.heading"
              class="leading-tight text-base text-2xl text-center">{{ block.heading }}</h2>
            <p>{{ block.role }}</p>
            <p>{{ block.paragraph }}</p>
          </figcaption>
        </div>
      </div>

      <div
        v-else
        class="flex flex-wrap l:justify-start justify-center photoSm photoSm">
        <div
          v-for="(block, index) in componentLoop"
          :key="index"
          class="photoSm-item">
          <figure class="rounded-lg">
            <img
              :src="block.image"
              :alt="block.heading"
              class="align-top">
          </figure>
          <figcaption class="text-center mt-8">
            <h2
              v-if="block.heading"
              class="leading-tight text-base text-2xl text-center">{{ block.heading }}</h2>
            <p>{{ block.role }}</p>
            <!-- <ul class="list-reset">
              <li>
                <font-awesome-icon
                  :style="{color: 'black'}"
                  icon="envelope"
                  class="mr-4 hover:blue pointer"
                  size="2x"
                />
              </li>
            </ul> -->
          </figcaption>
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
    },
    componentSizeSmall: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/mixins';

.photoLg {
  &-item {
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 2rem;
    > * {
      transition: all 0.25s ease-in-out 0s;
    }
    &:hover figure {
      @include mq(ns) {
        transform: scale(1.15);
        box-shadow: 0 2px 7px rgba(black, 0.2);
      }
    }
    figure {
      overflow: hidden;
      margin-left: auto;
      margin-right: auto;
    }
    @include mq(ns) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @include mq(l) {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
  }
}
.photoSm {
  margin-bottom: 2rem;
  &-item {
    padding: 0 1rem;
    margin-bottom: 2rem;
    @include mq(ns) {
      flex: 0 0 40%;
      max-width: 40%;
    }
    @include mq(l) {
      flex: 0 0 20%;
      max-width: 20%;
    }
  }
}
</style>
