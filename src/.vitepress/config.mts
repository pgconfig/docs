import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PGConfig Documentation',
  description: 'API Documentation and usage',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    lastUpdated: true,

    nav: [
      { text: 'API Documentation', link: '/api/' },
      { text: 'V2 Proposal', link: '/v2/' },
      { text: 'pgconfig.org', link: 'https://pgconfig.org' }
    ],

    sidebar: {
      '/api/': [
        {
          text: 'V1 API Documentation',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Environment', link: '/api/environment' },
            { text: 'Other Options', link: '/api/other-options' },
            { text: 'Example', link: '/api/example' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pgconfig/docs' }
    ]
  }
})
