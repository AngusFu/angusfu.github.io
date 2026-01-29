import { marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

// Configure marked with highlight.js
marked.use(markedHighlight({
  langPrefix: 'hljs lang-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  }
}))

// Custom renderer
const renderer = new marked.Renderer()

// Custom link renderer - open external links in new tab
renderer.link = function ({ href, title, tokens }) {
  const relative = !/^(https?:)?\/\//.test(href)
  const body = this.parser.parseInline(tokens)
  let out = `<a href="${href}"`

  if (!relative) {
    out += ` target="_blank" rel="noopener"`
  }

  if (title) {
    out += ` title="${title}"`
  }

  out += `>${body}</a>`
  return out
}

// Custom image renderer - lazy loading and CDN URL transformation
renderer.image = function ({ href, title, text }) {
  href = href
    .replace(
      /http:\/\/(s|p)([0-9])\.(qhimg|qhres)\.com/,
      (_, g1, g2, g3) => `https://${g1}${Math.min(Number(g2), 3)}.ssl.${g3}.com`
    )
    .replace(/qhres\.com/, 'qhres2.com')

  const alt = (text || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  let out = `<img loading="lazy" src="${href}" alt="${alt}"`
  if (title) {
    out += ` title="${title}"`
  }
  out += ' />'
  return out
}

// Custom HTML renderer - transform img tags
renderer.html = function ({ text }) {
  const code = text.replace(
    /<img src="([^"]+)"/g,
    (m, g1) => `<img loading="lazy" src="${g1}"`
  )
  return code
}

marked.use({ renderer })

export function renderMd(source) {
  return marked(source)
}
