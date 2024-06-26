// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/color-mode", '@davestewart/nuxt-scrollbar', 'nuxt-swiper'],
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
});
