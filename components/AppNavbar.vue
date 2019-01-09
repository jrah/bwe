<template>
  <div>
    <span
      :class="{ isOpenToggle: isOpen }"
      class="cursor-pointer relative z-50"
      @click="toggleNav()">
      <font-awesome-icon
        icon="bars"
        size="2x"
      />
    </span>
    <nav>
      <!-- <span @click="closeNav(click)" class="pointer z-4">Close</span> -->
      <div
        :class="{ isOpen: isOpen }"
        class="hidden">
        <ul class="container list-reset justify-between pin-important">
          <li class="mb-2">
            <a
              href="#"
              class="text-grey-darkest font-black text-lg no-underline hover:text-grey uppercase">About Bright World</a>
          </li>
          <li class="mb-2">
            <a
              href="#"
              class="text-grey-darkest font-black text-lg no-underline hover:text-grey uppercase">Policies</a>
          </li>
        </ul>
        <ul class="list-reset flex justify-between items-center h-full container">
          <li
            v-for="(item, index) in site.nav"
            :key="index"
            :name=" '' + index "
            class="">
            <h2 class="text-grey-darkest font-black text-lg uppercase mb-4">{{ item.text }}</h2>
            <ul class="list-reset">
              <li
                v-for="(inner, index) in item.content"
                :key="index"
                :name=" '' + index "
                class="mb-1">
                <a
                  :href="inner.href"
                  class="text-grey-darker no-underline hover:text-grey"> {{ inner.text }}</a>
              </li>
            </ul>
          </li>
        </ul>

      </div>
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
      document.querySelector('.site').classList.toggle('position-fixed')

      // document.querySelector('header').classList.toggle('h-screen')
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/mixins';

.isOpen {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 40;
  height: 100vh;
  @apply bg-white;
  &Toggle {
    padding-right: 0.95rem;
  }
}

.position-fixed {
  height: 100%;
  position: relative;
  overflow: hidden;
  @apply bg-white;
}

.pin-important {
  position: absolute;
  top: 1.5em;
}
</style>
