<template lang="html">
  <section>
    <div class="container py-10">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="flex mx-auto justify-center flex-col ns:flex-row">
        <no-ssr>
          <div
            slot="placeholder"
            class="justify-center items-center flex">
            <font-awesome-icon
              icon="spinner"
              spin
              size="5x"
            />
          </div>
          <badger-accordion
            ref="myAccordion"
            :icons="false">
            <badger-accordion-item
              v-for="(block, index) in componentLoop"
              :key="index">
              <h2
                slot="header"
                class="text-lg select-none">{{ block.heading }}</h2>
              <div
                slot="content">
                <p
                  v-if="componentInner !== true"
                  class="p-4">{{ block.paragraph }}</p>
                <div v-else>
                  <div
                    v-for="(inner, index) in block.inner_block"
                    :key="index">
                    <a
                      href="#"
                      class="no-underline text-lg p-4 block hover:bg-grey-light">{{ inner.heading }}</a>
                  </div>
                </div>
              </div>
            </badger-accordion-item>
          </badger-accordion>
          <div
            v-if="componentSideActive === true"
            class="ns:ml-4 mt-4 ns:mt-0 px-4 py-2 ns:w-1/4 bg-grey-lighter">
            <span class="ns:mb-6 text-lg">Cant find your school?</span>
            <div
              v-for="(block, index) in componentSide"
              :key="index">
              <div class="flex items-center">
                <a
                  :href="block.href"
                  class="no-underline inline-block shadow bg-navy hover:bg-navy-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer my-3">{{ block.text }}</a>
              </div>
            </div>
          </div>
        </no-ssr>
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
    },
    componentInner: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss">
.component-badger-accordion {
  min-width: 30rem;
  max-width: 42rem;
  .badger-accordion-item {
    cursor: pointer;
    @apply pb-4;
    &:last-child {
      padding: 0;
    }
    .js-badger-accordion-header {
      @apply rounded-t;
    }
  }
  .badger-toggle-indicator {
    font-size: 3.5rem;
  }
}

.badger-accordion-toggle {
  @apply px-6;
  @apply py-3;
}

.js-badger-accordion-header {
  @apply bg-grey-lighter;
  @apply border-grey-darkest;
  @apply border-solid;
  @apply border-b-2;
  &:hover,
  &.-ba-is-active {
    @apply border-grey-light;
    @apply border-solid;
    @apply border-b-2;
    transition: border-color ease-in-out 0.1s;
  }
}

.js-badger-accordion-panel-inner {
  // @apply p-4;
  cursor: text;
  @apply bg-grey-lightest;
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
