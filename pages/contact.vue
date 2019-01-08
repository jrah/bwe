<template>
  <!-- add link to bottom of trusted by -->
  <div>
    <div class="relative bg-white py-12 flex container">
      <app-form class="w-3/4"/>

      <div class="w-1/4 p-6">
        <span class="text-grey-darkest text-lg font-bold">{{ site.title }}</span>
        <ul class="list-reset flex justify-between pb-5">
          <li
            v-for="(item, index) in site.contact_information"
            :key="index"
            :name=" '' + index ">

            <span>{{ item.postal }}</span>
            <span>{{ item.phone }}</span>

          </li>
        </ul>
        <div class="list-reset flex">
          <a
            v-for="(icon, index) in site.social"
            :key="index"
            :href="icon.href"
            :name=" '' + index ">
            <font-awesome-icon
              :icon="['fab', icon.type]"
              :style="{color: 'black'}"
              class="mr-4 hover:blue pointer"
              size="2x"
            />
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import home from '~/content/home.json'
import site from '~/content/site.json'

import AppMainHeader from '~/components/AppMainHeader.vue'
import AppForm from '~/components/AppForm.vue'

export default {
  components: {
    AppMainHeader,
    AppForm
  },
  data() {
    return {
      home,
      site: site,
      icons: site.social
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
