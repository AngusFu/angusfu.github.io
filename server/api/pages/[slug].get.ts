import { readFileSync, existsSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const filePath = resolve('public/data/pages', `${slug}.json`)

  if (!existsSync(filePath)) {
    throw createError({ statusCode: 404, message: `Page not found: ${slug}` })
  }

  return JSON.parse(readFileSync(filePath, 'utf8'))
})
