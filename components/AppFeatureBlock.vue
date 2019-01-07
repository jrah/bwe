<template lang="html">
  <section>
    <div class="container py-10 text-navy">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="m:flex l:flex flex-wrap justify-around">

        <div
          v-for="(block, index) in componentLoop"
          :key="index"
          :name=" '' + index "
          :class="componentFlexItem"
          class="text-center px-4">
          <div
            v-if="componentIcon == 'Font Awesome'"
            class="mb-4"
          >
            <font-awesome-icon
              :icon="block.icon"
              size="4x"
            />

          </div>
          <div
            v-else
            class="p-4">
            <img
              :src="require(`~/assets/images/placeholder/${block.icon}.svg`)"
              :alt="block.icon">
          </div>

          <h2
            v-if="block.heading"
            class="leading-tight text-lg mt-1 mb-1">{{ block.heading }}</h2>
          <p
            v-if="block.paragraph"
            class="leading-normal mt-0 mb-6">{{ block.paragraph }}</p>
        </div>

      </div>

      <div
        v-for="(i, index) in componentLink"
        :key="index"
        class="mt-10 flex justify-center"
      >
        <a
          :href="i.href"
          class="no-underline bg-navy hover:bg-navy-dark text-white font-bold py-2 px-4 rounded">{{ i.text }}</a>
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

<style lang="css">
</style>
