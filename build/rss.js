export function renderRSS(data, config) {
  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${config.title}</title>
  <link href="/atom.xml" rel="self"/>
  <link href="https://${config.hostname}/"/>
  <updated>${new Date().toISOString()}</updated>
  <id>https://${config.hostname}/</id>
  <author>
    <name>${config.site_owner}</name>
  </author>
  ${data.slice(0, 10).map(item => `<entry>
    <title>${escapeXml(item.config.title)}</title>
    <link href="https://${config.hostname}/post/${item.config.filename}/"/>
    <id>https://${config.hostname}/${item.config.filename}/</id>
  </entry>`).join('\n  ')}
</feed>`
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
