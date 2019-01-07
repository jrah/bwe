<template lang="html">
  <section>
    <div class="container py-10">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="flex mx-auto justify-center">
        <badger-accordion ref="myAccordion">
          <badger-accordion-item
            v-for="(block, index) in componentLoop"
            :key="index">
            <h1
              slot="header"
              class="text-xl">{{ block.heading }}</h1>
            <p slot="content">{{ block.paragraph }}</p>
          </badger-accordion-item>
        </badger-accordion>
        <div
          v-if="componentSideActive === true"
          class="px-4 py-2 w-1/4">
          <h2 class="mb-6">Contact</h2>
          <div
            v-for="(block, index) in componentSide"
            :key="index">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fab', block.icon]"
                size="2x"
                class="mr-2"
              />
              <a
                href="#"
                class="text-black no-underline">{{ block.paragraph }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
// console.log(componentSide)
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
    componentSideActive: {
      type: Boolean,
      required: false,
      default: false
    },
    componentSide: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.component-badger-accordion {
  .badger-accordion-item {
    cursor: pointer;
    &:first-child .js-badger-accordion-header {
      @apply rounded-t;
    }
    &:last-child .js-badger-accordion-header {
      @apply rounded-b;
    }
  }
  .badger-toggle-indicator {
    font-size: 3.5rem;
  }
}

.js-badger-accordion-panel-inner {
  cursor: text;
}

.js-badger-accordion-header {
  @apply bg-grey-lightest;
  @apply px-4;
  @apply border-grey-lighter;
  @apply border-solid;
  @apply border-b;
  &:last-child {
    @apply border-none;
  }
  &:hover,
  &.-ba-is-active {
    @apply bg-navy;
    @apply text-white;
  }
}

.js-badger-accordion-panel-inner {
  @apply p-4;
}

.badger-accordion__panel {
  max-height: 75vh !important;
  transition: max-height ease-in-out 0.5s;
  overflow: hidden;

  &.-ba-is-hidden {
    max-height: 0 !important;
  }

  // transition is added via `badger-accordion--initalised` to stop animation on initalition
  .badger-accordion--initalised & {
    transition: max-height ease-in-out 0.2s;
  }
}
</style>
