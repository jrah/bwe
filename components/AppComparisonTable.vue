<template lang="html">
  <section>
    <div class="container py-10">
      <h1 class="text-center mb-12 text-4xl">{{ componentTitle }}</h1>
      <div class="comparisonTables container">
        <div
          v-for="(block, index) in componentLoop"
          :key="index"
          class="comparisonTablesItem rounded">
          <div class="p-4 border-b table-title">
            <h2 class="text-base text-center uppercase tracking-wide">{{ block.title }}</h2>
          </div>
          <div class="p-4 text-center">
            <p class="table-paragraph"> {{ block.meta }} </p>
            <ul class="list-reset px-2 py-4">
              <li
                v-for="(item, index) in block.loop"
                :key="index"
                class="py-2">
                <div class="flex items-center flex-auto">
                  <font-awesome-icon
                    :icon="item.icon"
                    :mask="['far', 'circle']"
                    class="mr-2 p-2 rounded-full text-navy-dark bg-navy-lighter"
                    size="2x"
                  />
                  <p class="table-paragraph">{{ item.paragraph }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="table-anchor bg-grey-lighter rounded-b w-full p-4 flex justify-center hover:bg-grey-light cursor-pointer">
            <a
              href="#"
              class="no-underline">{{ block.link }}
              <font-awesome-icon
                icon="arrow-right"
                class="ml-2"
                size="1x"
            /></a>
          </div>
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

<style lang="scss" scoped>
.comparisonTables {
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  flex-direction: normal;
  justify-content: center;
  align-items: center;
  &Item {
    flex-basis: 50%;
    max-width: 50%;
    @apply p-4;
    &:nth-child(odd) {
      @apply bg-navy;
      @apply text-grey-lighter;
      @apply p-0;
      .table-paragraph {
        @apply text-grey-lighter;
      }
      .table-title {
        @apply border-grey;
      }
      .table-anchor {
        @apply bg-navy-lighter;
        @apply text-grey-lighter;
        &:hover {
          @apply bg-grey-lighter;
          transition: background-color ease-in-out 0.2s;
          > a {
            @apply text-navy;
          }
        }
        > a {
          @apply text-grey-lighter;
        }
      }
    }
  }
}
</style>
