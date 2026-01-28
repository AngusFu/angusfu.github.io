import { readFileSync, existsSync } from 'fs'
import { load } from 'js-yaml'

// Load site config
const configPath = './config.yaml'
const siteConfig = existsSync(configPath)
  ? load(readFileSync(configPath, 'utf8')) as Record<string, any>
  : {}

const pageSize = siteConfig.page_size || 10

// Helper to generate dynamic routes
const getDynamicRoutes = (data: Array<{count: number, pathname: string}>, type: string) => {
  return data.reduce((acc: string[], { count, pathname }) => {
    const base = `/${type}/${pathname}`
    let pages = Math.ceil(count / pageSize)
    acc.push(base)
    while (pages) {
      acc.push(`${base}/${pages--}`)
    }
    return acc
  }, [])
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  ssr: true,

  // Runtime config accessible via useRuntimeConfig()
  runtimeConfig: {
    public: {
      ...siteConfig,
      site_url: `https://${siteConfig.hostname || 'localhost'}`
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
      link: [
        { rel: 'shortcut icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/all.css'],

  modules: [],

  // Static generation settings
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: ['/200.html'],
      failOnError: false
    }
  },

  // Generate dynamic routes
  hooks: {
    'nitro:config': async (nitroConfig) => {
      const { existsSync, readFileSync } = await import('fs')

      if (!existsSync('./data/cates.json') || !existsSync('./data/tags.json') || !existsSync('./data/posts.json')) {
        return
      }

      const catesData = JSON.parse(readFileSync('./data/cates.json', 'utf8'))
      const tagsData = JSON.parse(readFileSync('./data/tags.json', 'utf8'))
      const postData = JSON.parse(readFileSync('./data/posts.json', 'utf8'))

      const cates = getDynamicRoutes(catesData, 'category')
      const tags = getDynamicRoutes(tagsData, 'tag')

      const len = postData.length
      const posts: string[] = []
      let pages = Math.ceil(len / pageSize)
      const base = '/posts'
      while (pages) {
        posts.push(`${base}/${pages--}`)
      }

      // Individual post routes (for dynamic [slug].vue)
      const postRoutes = postData.map((p: any) => `/post/${p.pathname}`)

      nitroConfig.prerender = nitroConfig.prerender || {}
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || []
      nitroConfig.prerender.routes.push(...cates, ...tags, ...posts, ...postRoutes)
    }
  },

  vite: {
    build: {
      cssCodeSplit: false
    }
  }
})
