export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
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
  css: ['~/assets/styles/main.scss'],
  devtools: { enabled: false }
});
