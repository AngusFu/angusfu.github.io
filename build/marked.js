import { marked } from 'marked'

// Simple markdown-to-HTML conversion for summary extraction only.
// Full rendering is handled client-side by markstream-vue.
export function renderMd(source) {
  return marked(source)
}
