<template>
  <footer class="footer">

    <!-- <hr class="border-grey-light border-solid border-2"> -->

    <div class="container p-8">
      <div class="l:flex justify-between pb-5">
        <ul class="list-reset flex flex-wrap justify-between l:w-3/5 pb-5">
          <li
            v-for="(item, index) in site.nav"
            :key="index"
            :name=" '' + index "
            class="pb-5 pr-4">
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
        <div class="l:w-1/5">
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
              :name=" '' + index "
              target="_blank">
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
.footer {
  &-overflow {
    background: transparent;
    overflow: hidden;
    padding-top: 20%;
    margin-top: -20%;
  }
  @apply bg-grey-light;
}
</style>
