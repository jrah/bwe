<template lang="html">
  <section class="py-12 bg-grey-lightest text-navy">
    <div class="container">
      <div class="max-w-md m-auto text-center">
        <h1 class="mt-0 mb-2 font-bold text-4xl leading-tight">{{ componentTitle }}</h1>
        <p class="leading-normal mt-0">{{ componentParagraph }}</p>
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
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
