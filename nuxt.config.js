module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Royal Sky Aviation Center (RSAC)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Thailand Aviation Academy Center' },
      { hid: 'keyword', name: 'keyword', content: 'เรียนการบิน, สอบนักบิน, รับสมัครนักบิน, ขับเครื่องบิน, อาชีพนักบิน, ฝึกบิน, เรียนบิน, นักบินพาณิชย์, นักบินพาณิชย์ตรี, ทุนเรียนการบิน, สถาบันสอนการบิน, สมัครเรียนการบิน, หลักสูตรการบิน, โรงเรียนการบินพาณิชย์, Thai Pilot, Aviation School, Flying School, Flying Club, Training School' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },

  css: [
    '~/css/style.css'
  ],

  /*
  ** Customize the progress bar color
  */

  loading: {
    color: '#f5b133',
    failedColor: '#bf5050'
  },

  plugins: [
    { src: '~/plugins/vee-validate' },
    { src: '~/plugins/vue-agile', ssr: false },
    { src: '~plugins/vue-scrollto.js', ssr: false }
  ],

  modules: [
    ['@nuxtjs/apollo'],
    ['@nuxtjs/google-analytics', {
      id: 'UA-25758815-4'
    }]
  ],

  apollo: {
    networkInterfaces: {
      default: '~/apollo/network-interfaces/default.js'
    }
  },
  /*
  
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vee-validate'],

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    routes: [
      'course/ppl',
      'course/cpl',
      'course/adv-cpl',
      'course/ir',
      'course/me',
      'course/ip'
    ]
  }
}
