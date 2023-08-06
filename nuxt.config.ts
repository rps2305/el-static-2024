// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/el-static-2024/',
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    viewer: false,
  },
  devtools: { enabled: true }
})
