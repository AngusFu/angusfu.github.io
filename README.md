# nuxt-firekylin

Simple personal blog built with [Nuxt 3](https://nuxt.com), using [Firekylin](https://github.com/firekylin/firekylin)'s theme.

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com) (Vue 3)
- **Node.js**: 22+
- **Markdown**: [marked](https://marked.js.org/) + [highlight.js](https://highlightjs.org/)
- **Deployment**: GitHub Actions → GitHub Pages (`gh-pages` branch)

## Development

```bash
# Install dependencies
npm install

# Start dev server (port 3333)
npm run start

# Build for production (static generation)
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── build/            # Build scripts (markdown → Vue pages)
├── components/       # Reusable Vue components
├── layouts/          # Nuxt layouts
├── pages/            # Nuxt pages (auto-routed)
├── public/           # Static assets (served as-is)
├── source/           # Blog content (markdown files)
│   ├── _post/        # Blog posts
│   └── *.md          # Static pages (about, links, etc.)
├── config.yaml       # Site configuration
└── nuxt.config.ts    # Nuxt configuration
```

## Related

- [Firekylin](https://github.com/firekylin/firekylin)
- [Nuxt 3](https://nuxt.com)
