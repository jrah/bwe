<template lang="html">
  <div class="fixed pin-b pin-x max-w-lg mx-auto z-50">
    <div class="text-center py-4 lg:px-4 flex justify-center">
      <div
        class="p-2 rounded bg-indigo-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex"
        role="alert">
        <span class="flex rounded-full bg-indigo uppercase px-2 py-1 text-xs font-bold mr-3">Prototype Pages</span>
        <nuxt-link
          class="mx-2 text-left text-white no-underline"
          to="/">Home</nuxt-link>
        <span class="inline">/</span>
        <nuxt-link
          class="mx-2 text-left text-white no-underline"
          to="/boardingschools">Boarding Schools</nuxt-link>
        <span class="inline">/</span>
        <nuxt-link
          class="mx-2 text-left text-white no-underline"
          to="/contact">Contact</nuxt-link>
        <span class="inline">/</span>
        <nuxt-link
          class="mx-2 text-left text-white no-underline"
          to="/blog/post">Blog Post</nuxt-link>
        <span class="inline">/</span>
        <nuxt-link
          class="mx-2 text-left text-white no-underline"
          to="/blog">Blog</nuxt-link>
        <span class="inline">/</span>
        <nuxt-link
          class="mx-2 text-left text-white no-underline"
          to="/about">About</nuxt-link>
        <span class="inline">/</span>
        <nuxt-link
          class="mx-2 text-left text-white no-underline"
          to="/profile">Profile</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
