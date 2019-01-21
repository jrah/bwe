<template lang="html">
  <div class="fixed pin-b pin-x max-w-sm mx-auto z-50">
    <div class="text-center py-4 lg:px-4 flex">
      <div
        class="p-2 rounded bg-indigo-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex"
        role="alert">
        <span class="flex rounded-full bg-indigo uppercase px-2 py-1 text-xs font-bold mr-3">Prototype Pages</span>
        <div class="div">
          <nuxt-link
            class="mx-2 text-left text-white no-underline"
            to="/">Home</nuxt-link>
          <span class="inline">/</span>
          <nuxt-link
            class="mx-2 text-left text-white no-underline"
            to="/offer">Offer</nuxt-link>
          <span class="inline">/</span>
          <nuxt-link
            class="mx-2 text-left text-white no-underline"
            to="/contact">Contact</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
