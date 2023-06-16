// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxthq/ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', ["@storyblok/nuxt", { accessToken: "fboeP6ELK2hIY98eF0Sr4Att" }]],
  devtools: { enabled: true }
})
