<template>
  <footer>

    <div class="container p-8">
      <div class="flex py-5">
        <ul class="list-reset flex justify-between ns:pr-24 ns:w-4/5">
          <li
            v-for="(item, index) in site.nav"
            :key="index"
            :name=" '' + index "
            class="">
            <h2 class="text-grey-darkest font-black text-lg uppercase mb-2">{{ item.text }}</h2>
            <ul class="list-reset">
              <li
                v-for="(inner, index) in item.content"
                :key="index"
                :name=" '' + index ">
                <a
                  :href="inner.href"
                  class="text-grey-darker no-underline hover:text-grey"> {{ inner.text }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="ns:w-1/5">
          <span class="text-grey-darkest text-lg font-bold">{{ site.title }}</span>
          <ul class="list-reset flex justify-between">
            <li
              v-for="(item, index) in site.contact_information"
              :key="index"
              :name=" '' + index ">

              <span>{{ item.postal }}</span>
              <span>{{ item.phone }}</span>

            </li>
          </ul>
        </div>
      </div>
      <div class="list-reset flex justify-end">
        <a
          v-for="(icon, index) in site.social"
          :key="index"
          :href="icon.href"
          :name=" '' + index ">
          <font-awesome-icon
            :icon="['fab', icon.type]"
            :style="{color: 'black'}"
            class="m-2 hover:blue pointer"
            size="2x"
          />
        </a>
      </div>
    </div>
  </footer>

</template>

<script>
import site from '~/content/site.json'

export default {
  data() {
    return {
      site: site,
      icons: site.social
    }
  }
}
</script>

<style lang="scss">
</style>
