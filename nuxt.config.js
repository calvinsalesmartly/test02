// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],
  ui: {
    fonts: false
  },
  runtimeConfig: {
    public: {
      SITE_URL: process.env.SITE_URL || 'vn',
      DEF_LANG: process.env.DEF_LANG || 'vi'
    }
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  i18n: {
    locales: [
      // { code: 'en', name: 'English', language: 'en' },
      { code: 'vi', name: 'Tiếng Việt', language: 'vi' },
      { code: 'id', name: 'Indonesia', language: 'id' }
    ],
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: false, // 不用 cookie
      redirectOn: 'root', // 只在根路径时重定向
      alwaysRedirect: false,
      fallbackLocale: 'vi' // 如果没匹配上，强制回退到 vi
    },
    defaultLocale: 'vi'
  }
})
