const pkg = require('./package')
const site = require('./content/site')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: site.title,
    ['@nuxtjs/google-analytics', {
  id: 'UA-12301-2'
}],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:title', name: 'og:title', content: 'Bright World' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Meta data content'
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://nuxtjs.org' },
      { name: 'og:image', content: 'https://i.imgur.com/gRR2pPe.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/khy8imo.css'
      }
    ],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    bodyAttrs: {
      class: 'site'
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-carousel.js', ssr: false },
    { src: '~/plugins/vue-badger-accordion.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-validate',
    ['@nuxtjs/google-analytics', {
      id: ''
  }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
