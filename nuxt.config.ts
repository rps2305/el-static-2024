// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  ssr:false,
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    viewer: true,
  },
  devtools: { enabled: true }
})
