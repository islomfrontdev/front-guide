// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxtjs/i18n", "nuxt-icon"],
  i18n: {
    vueI18n: "./i18.js", // if you are using custom path, default
  },
  colorMode: {
    preference: "light",
  },
});
