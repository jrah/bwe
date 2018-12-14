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
          <font-awesome-icon
            :icon="block.icon"
            class="ml-2"
            size="4x"
          />
          <h2
            v-if="block.heading"
            class="leading-tight text-lg mt-1 mb-1">{{ block.heading }}</h2>
          <p
            v-if="block.paragraph"
            class="leading-normal mt-0 mb-6">{{ block.paragraph }}</p>
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

<style lang="css">
</style>
