<template>
  <div>
    <nav class="flex items-center justify-end">
      <!-- <span @click="closeNav(click)" class="pointer z-4">Close</span> -->
      <div
        :class="{ isOpen: isOpen }"
        class="">
        <ul class="list-reset flex justify-between items-center z-20 relative">
          <li
            v-for="(item, index) in site.nav"
            :key="index"
            :name=" '' + index "
            class="dib mr-6">
            <a
              :href="item.href"
              class="text-white hover:text-blue no-underline text-lg mb-4">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      <span
        :class="{ isOpenToggle: isOpen }"
        class="cursor-pointer relative z-20"
        @click="toggleNav()">
        <font-awesome-icon
          icon="bars"
          size="2x"
          color="white"
        />
      </span>
    </nav>
  </div>

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
  mounted() {
    // alert('mounted')
    console.log(document.querySelector('.site'))
  },
  methods: {
    closeNav() {},
    toggleNav() {
      this.isOpen = !this.isOpen
      const header = document.querySelector('#header')
      document.querySelector('.site').classList.toggle('position-fixed')
      // if (header.classList.contains('container')) {
      //   document.querySelector('#header').classList.remove('container')
      // } else {
      //   document.querySelector('#header').classList.add('container')
      // }
      document.querySelector('header').classList.toggle('h-screen')
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/mixins';

// .isOpen {
//   display: block;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   z-index: 40;
//   height: 100vh;
//   @apply bg-white;
//   &Toggle {
//     padding-right: 4rem;
//     max-width: 72em;
//   }
// }

.position-fixed {
  height: 100%;
  position: relative;
  overflow: hidden;
  @apply bg-white;
}

// .pin-important {
//   position: absolute;
//   top: 1.5em;
// }
</style>
