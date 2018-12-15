<template lang="html">
  <section>
    <div class="container py-10 text-navy">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="m:flex l:flex justify-around">

        <div
          v-for="(block, index) in componentLoop"
          :key="index"
          :name=" '' + index "
          class="text-center ns:w-1/4">
          <div
            v-if="componentIcon == 'Font Awesome'"
          >
            <font-awesome-icon
              :icon="block.icon"
              class="ml-2"
              size="4x"
            />

          </div>
          <div v-else>
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
          class="no-underline bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded">{{ i.text }}</a>
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
