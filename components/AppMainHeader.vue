<template>
  <div>

    <div
      :style="{'background-image' : 'url('+home.image+')'}"
      class="bg-cover bg-center py-6 relative bg-navy">
      <div class="container py-32 relative z-10">
        <div class="text-white m:w-3/5 l:w-2/5">
          <h1
            v-if="home.title"
            class="mt-0 f1 mb-6 font-bold text-4xl leading-tight">{{ home.title }}</h1>
          <p
            v-if="home.intro"
            class="mb-6 leading-normal">{{ home.intro }}</p>
          <form
            id="signup"
            class="bg-grey-light h-16 flex justify-stretch my-4 p-2 rounded">
            <input
              class="bg-grey-lighter mr-4 appearance-none flex-grow border-2 h-full border-grey-lighter rounded py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-navy"
              placeholder="Enter your email"
              type="email"
              required="">
            <button class="bg-navy-light hover:bg-navy text-grey-lightest font-bold py-4 px-4 rounded inline-flex items-center border-b-4 border-navy-dark">Get Started</button>
          </form>
        </div>
      </div>
      <div
        class="overlay"
        style="background-image: linear-gradient(205deg,rgba(37, 37, 37, 0.23), rgba(10, 10, 10, 0.72));"/>
    </div>

  </div>
</template>

<script>
import home from '~/content/home.json'

export default {
  data() {
    return {
      home
    }
  }
}
</script>

<style lang="scss">
.overlay {
  position: absolute;
  @apply pin;
  z-index: 1;
  display: block;
}
</style>
