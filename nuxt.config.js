import shrinkRay from 'shrink-ray-current'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'André Van Dal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'LoL' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'pt-br'
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/scss/custom.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/vue-lazyload'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: false }],

    // ['@nuxtjs/google-tag-manager', { id: 'GTM-TK36KWH' }],
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [
      '@reallifedigital/nuxt-image-loader-module',
      {
        imagesBaseDir: 'content',
        imageStyles: {
          thumbnail: {
            actions: [
              'gravity|Center',
              'resize|320|180^',
              'extent|320|180|+0|+90'
            ]
          },
          small: { macros: ['scaleAndCrop|160|90'] },
          medium: { macros: ['scaleAndCrop|320|180'] },
          large: { macros: ['scaleAndCrop|640|360'] }
        },
        // Optional responsive style profiles:
        responsiveStyles: {
          thumb: {
            srcset: 'small 160w, medium 320w, large 640w',
            sizes: '(min-width: 1280px) 100vw, 50vw'
          }
        }
      }
    ]
  ],

  /*
  ** Manifest - PWA
  */
  manifest: {
    name: `BitHeat`,
    short_name: `BitHeat`,
    lang: 'pt-br',
    theme_color: '#000',
    background_color: '#000',
    description: 'BitHeat',
    display: 'standalone'
  },

  /*
  ** Sitemap
  */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://bitheap.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: process.env.NODE_ENV === 'production'
  },

  /*
  ** Render Options
  */
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    },
    compressor: shrinkRay()
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Babel configuration
  */
  babel: {
    presets: [
      [
        'vue-app',
        {
          targets: {
            browsers: ['>0.25%', 'not ie 11', 'not op_mini all', 'not dead']
          },
          loose: true,
          useBuiltIns: true
        }
      ]
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    parallel: false,
    terser: {
      extractComments: false
    },
    optimizeCSS: true,
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeOptionalTags: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true
      }
    },

    postcss: {
      plugins: {
        // 'postcss-cachebuster': {},
        'postcss-hexrgba': {},
        cssnano: { preset: 'default' }
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
