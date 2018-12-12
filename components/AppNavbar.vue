<template>

  <nav
    :class="{ isOpen: isOpen }">
    <span
      class="cursor-pointer"
      @click="toggleNav()">
      <font-awesome-icon
        icon="bars"
        size="2x"
      />
    </span>
    <!-- <span @click="closeNav(click)" class="pointer z-4">Close</span> -->
    <a
      v-for="(item, index) in site.nav"
      :v-if="item !== null"
      :key="`nav-${index}`"
      :href="item.href"
      class="hidden">
      <span class="inline">{{ item.text }}</span>
    </a>
  </nav>

</template>

<script>
import site from '~/content/site.json'
export default {
  data() {
    return {
      site,
      isOpen: false
    }
  },
  methods: {
    closeNav() {},
    toggleNav() {
      this.isOpen = !this.isOpen
      console.log('toggle nav')
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/mixins';

.block-important {
  display: block !important;
}
</style>
