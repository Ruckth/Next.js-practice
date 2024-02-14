// https://nuxt.com/docs/api/configuration/nuxt-config
//set up alias
import{resolve} from"path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  // Global page headers: https://go.nuxtjs.dev/config-head
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  //set up alias
  alias: {
    '@': resolve(__dirname, 'src')
  },
  //make main.scss as a root style sheet of the project (main.scss is in testLearn/assets)
  css: ['~/assets/main.scss'],
})
