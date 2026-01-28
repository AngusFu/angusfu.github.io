import { basename, resolve, dirname } from 'path'
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import { glob } from 'glob'
import yaml from 'js-yaml'
import matter from 'gray-matter'
import { fileURLToPath } from 'url'

import { renderMd } from './marked.js'
import { renderRSS } from './rss.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const POST_TMPL = readFileSync(resolve(__dirname, './post.vue')).toString()
const PAGE_TMPL = readFileSync(resolve(__dirname, './page.vue')).toString()
const siteConf = yaml.load(readFileSync(resolve(__dirname, '../config.yaml'), 'utf8'))

// Ensure directories exist
mkdirSync(resolve(__dirname, '../data'), { recursive: true })
mkdirSync(resolve(__dirname, '../pages/post'), { recursive: true })
mkdirSync(resolve(__dirname, '../public'), { recursive: true })

function indent(str, spaces) {
  const pad = ' '.repeat(spaces)
  return str.split('\n').map(line => pad + line).join('\n')
}

const main = function (data) {
  const metaTags = {}
  const metaCates = {}
  const metaArchives = {}

  writeFileSync(
    resolve(__dirname, '../public/atom.xml'),
    renderRSS(data, siteConf)
  )

  data.forEach((item, i) => {
    const {
      tags = [],
      category,
      date,
      filename,
      from
    } = item.config

    let title = item.config.title
    if (from) {
      title = from ? '[译] ' + title : title
      item.config.title = title
    }

    tags.forEach(tag => {
      metaTags[tag] = metaTags[tag] || []
      metaTags[tag].push(i)
    })

    if (category) {
      metaCates[category] = metaCates[category] || []
      metaCates[category].push(i)
    }

    const yearMonth = date.getFullYear() + ' 年 ' +
      (date.getMonth() + 1) + ' 月'
    metaArchives[yearMonth] = metaArchives[yearMonth] || []
    metaArchives[yearMonth].push({
      title,
      pathname: encodeURIComponent(filename),
      create_time: date.toISOString().slice(0, 10)
    })
  })

  // Generate tags summary data
  makeTagsFile(metaTags, './data/tags.json')
  // Generate categories data
  makeTagsFile(metaCates, './data/cates.json')

  // Generate archives data
  const archiveInfo = Object.keys(metaArchives).reduce((acc, key) => {
    acc.push({
      yearMonth: key,
      data: metaArchives[key]
    })
    return acc
  }, [])
  writeFileSync('./data/archives.json', JSON.stringify(archiveInfo))

  // Generate posts data
  writeFileSync('./data/posts.json', JSON.stringify(data.map(getPostAbstract)))

  // Clear and regenerate post pages
  const postDir = resolve(__dirname, '../pages/post')
  if (existsSync(postDir)) {
    rmSync(postDir, { recursive: true })
  }
  mkdirSync(postDir, { recursive: true })

  data.forEach((item, index) => {
    const content = makePostVue(makePostInfo(data, index))
    const file = './pages/post/' + item.config.filename + '.vue'
    writeFileSync(file, content)
  })
}

const postFiles = await glob('./source/_post/*.md')
const pages = await glob('./source/*.md')

async function processFiles() {
  const postData = await Promise.all(postFiles.map(getFileInfo))
  const sortedPosts = postData.sort((a, b) => b.config.date - a.config.date)
  main(sortedPosts)

  const pageData = await Promise.all(pages.map(getFileInfo))
  pageData.forEach((item) => {
    const content = PAGE_TMPL
      .replace('__MARKDOWN__', indent(item.source, 6))
      .replace('__CONFIG__', JSON.stringify(item.config))
    writeFileSync('./pages/' + item.config.filename + '.vue', content)
  })

  console.log('Build completed successfully!')
  console.log(`  - ${sortedPosts.length} posts processed`)
  console.log(`  - ${pageData.length} pages processed`)
}

processFiles()

function makePostVue(data) {
  return POST_TMPL
    .replace('__DATA_', JSON.stringify(data.meta))
    .replace('__CONTENT__', data.content)
}

function makePostInfo(posts, index) {
  const post = posts[index]
  if (!post) return null

  const config = post.config
  const content = post.source
  const prev = posts[index - 1]
  const next = posts[index + 1]

  const meta = {
    title: config.title,
    description: config.desc || config.description,
    keywords: (config.keywords || config.tags || []).join(','),
    pathname: encodeURIComponent(config.filename),
    translation: config.from ? {
      author: config.author,
      social: config.social,
      from: config.from
    } : null,
    create_time: config.date.toISOString().slice(0, 10),
    prev: !prev ? {} : {
      title: prev.config.title,
      pathname: encodeURIComponent(prev.config.filename)
    },
    next: !next ? {} : {
      title: next.config.title,
      pathname: encodeURIComponent(next.config.filename)
    }
  }
  return {
    meta,
    content
  }
}

function makeTagsFile(map, file) {
  const data = Object.keys(map).reduce((acc, key) => {
    acc.push({
      pathname: encodeURIComponent(key),
      name: key,
      count: map[key].length
    })
    return acc
  }, []).sort((a, b) => b.count - a.count)
  writeFileSync(file, JSON.stringify(data))
}

function getPostAbstract(item) {
  const {
    date,
    tags,
    title,
    category,
    filename,
    editor,
    desc,
    description
  } = item.config

  const summary = item.source
    .replace(/[\n\r\t]/g, '')
    .replace(/<svg[ >].*?<\/svg>/g, '')
    .replace(/<\/?[^>]*>/g, '')
    .replace(/(?:%\d+[\w-]+)+/g, '')
    .substr(0, 200).trim()

  return {
    user: editor || siteConf.site_owner || 'admin',
    title,
    tags: tags || [],
    category,
    date,
    create_time: date.toISOString().slice(0, 10),
    pathname: encodeURIComponent(filename),
    summary: summary ? (summary + '...') : (desc || description)
  }
}

async function getFileInfo(file) {
  const source = readFileSync(file, 'utf8')
  const data = getFrontMatter(source)
  const filename = basename(file).replace(/\.(?:md|markdown)$/, '')
  data.config.filename = filename
  return data
}

function getFrontMatter(source) {
  const result = matter(source)
  return {
    source: renderMd(result.content),
    config: result.data
  }
}
