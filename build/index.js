import { basename, resolve, dirname } from 'path'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { glob } from 'glob'
import yaml from 'js-yaml'
import matter from 'gray-matter'
import { fileURLToPath } from 'url'

import { renderMd } from './marked.js'
import { renderRSS } from './rss.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PAGE_TMPL = readFileSync(resolve(__dirname, './page.vue')).toString()
const siteConf = yaml.load(readFileSync(resolve(__dirname, '../config.yaml'), 'utf8'))

// Ensure directories exist
mkdirSync(resolve(__dirname, '../data'), { recursive: true })
mkdirSync(resolve(__dirname, '../public/data/posts'), { recursive: true })
mkdirSync(resolve(__dirname, '../public/data/pages'), { recursive: true })
mkdirSync(resolve(__dirname, '../public'), { recursive: true })

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

  // Generate posts data (summaries use rendered HTML stripped to plain text)
  writeFileSync('./data/posts.json', JSON.stringify(data.map(getPostAbstract)))

  // Generate individual post JSON data files (fetched via useFetch for SSR)
  data.forEach((item, index) => {
    const postInfo = makePostInfo(data, index)
    // Include pre-rendered HTML for SSR fallback (markstream-vue enhances on client)
    postInfo.meta.renderedHtml = item.renderedHtml
    const jsonFile = resolve(__dirname, '../public/data/posts/' + item.config.filename + '.json')
    writeFileSync(jsonFile, JSON.stringify(postInfo.meta))
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
    // Generate JSON data file
    const jsonFile = resolve(__dirname, '../public/data/pages/' + item.config.filename + '.json')
    writeFileSync(jsonFile, JSON.stringify({
      config: item.config,
      markdown: item.rawMarkdown,
      renderedHtml: item.renderedHtml
    }))
    // Generate minimal .vue file that fetches JSON via useFetch (SSR-compatible)
    const content = PAGE_TMPL.replace(/__SLUG__/g, item.config.filename)
    writeFileSync('./pages/' + item.config.filename + '.vue', content)
  })

  console.log('Build completed successfully!')
  console.log(`  - ${sortedPosts.length} posts processed`)
  console.log(`  - ${pageData.length} pages processed`)
}

processFiles()

function makePostInfo(posts, index) {
  const post = posts[index]
  if (!post) return null

  const config = post.config
  const prev = posts[index - 1]
  const next = posts[index + 1]

  const meta = {
    title: config.title,
    description: config.desc || config.description,
    keywords: (config.keywords || config.tags || []).join(','),
    pathname: encodeURIComponent(config.filename),
    markdown: post.rawMarkdown,
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
  return { meta }
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

  // Render HTML for summary extraction only
  const renderedHtml = item.renderedHtml
  const summary = renderedHtml
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
    rawMarkdown: result.content,
    renderedHtml: renderMd(result.content),
    config: result.data
  }
}
