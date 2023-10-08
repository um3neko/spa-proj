export default {
  head: {
    title: 'SPA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-bootstrap-icons',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: true
        }
      }
    ]
  ],
  css: ['~/assets/styles/main.scss']
};
