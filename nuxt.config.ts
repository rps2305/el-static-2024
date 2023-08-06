// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  generate:{
    nojekyll: true, //not working on this version
    fallback: '404.html',
  },
  ssr: false, //When false
  target: 'static',
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    viewer: false,
  },
  app: {
    baseURL: "/el-static-2024/"
  },
  devtools: { enabled: true }
})
