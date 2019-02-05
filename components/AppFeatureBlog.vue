<template lang="html">
  <section>
    <div class="container py-10">
      <div class="text-center mb-12">
        <h1 class="text-4xl mb-2">{{ componentTitle }}</h1>
        <p class="text-lg">{{ componentParagraph }}</p>
      </div>

      <div class="ns:flex justify-between flex-wrap">

        <div
          v-for="(block, index) in componentLoop"
          :key="index"

          class="w-full m:w-1/2 l:w-1/3 p-6 parent">
          <div class="rounded overflow-hidden shadow-lg relative pb-16 mb-16 ns:mb-0 bg-white blogItem cursor-default">
            <div class="overflow-hidden">
              <img
                :src="block.image"
                class="w-full child"
                alt="Sunset in the mountains">
            </div>
            <div class="px-6 py-4">
              <h1 class="font-bold text-xl mb-2">{{ block.heading }}</h1>
              <p class="text-grey-darker text-base">
                {{ block.paragraph }}
              </p>
            </div>
            <div class="px-6 py-4 absolute pin-b">

              <a
                :href="block.href"
                class="bg-navy-light hover:bg-navy text-grey-lightest font-bold py-2 px-2 rounded inline-flex items-center border-b-4 border-navy-dark no-underline">
                <span
                  v-if="block.type === 'pdf'">View PDF</span>
                <span v-else>Read More</span>
                <font-awesome-icon
                  icon="arrow-right"
                  class="ml-2"
                />
              </a>

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
    componentParagraph: {
      type: String,
      required: false,
      default: ''
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
.blogItem {
  /* min-height: 36rem; */
}

.parent {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover .child,
  &:focus .child {
    transform: scale(1.2);
  }
}

.child {
  height: 100%;
  width: 100%;
  background-size: cover;
  transition: all 0.5s;
}
</style>
