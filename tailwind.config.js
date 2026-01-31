/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',
          'Roboto', '"Noto Sans SC"', '"PingFang SC"', '"Hiragino Sans GB"',
          '"Microsoft YaHei"', 'sans-serif'
        ],
        mono: [
          'ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo',
          'Consolas', '"Liberation Mono"', 'monospace'
        ]
      },
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          light: '#60a5fa',
          'light-hover': '#93bbfd'
        }
      },
      maxWidth: {
        content: '960px',
        prose: '720px'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.600'),
            '--tw-prose-headings': theme('colors.slate.900'),
            '--tw-prose-links': theme('colors.blue.600'),
            '--tw-prose-code': theme('colors.slate.800'),
            maxWidth: 'none'
          }
        }
      })
    }
  },
  plugins: []
}
