<template>
  <div class="site">
    <a href="#main-content" class="skip-link">跳到主要内容</a>

    <header class="site-header">
      <div class="header-inner">
        <NuxtLink to="/" class="site-logo" @click="closeMenu">
          <img :src="config.logo_url" :alt="config.site_owner" width="32" height="32">
          <span>{{ config.title }}</span>
        </NuxtLink>

        <nav
          class="site-nav"
          :class="{ open: menuOpen }"
          id="main-nav"
          aria-label="主导航"
        >
          <NuxtLink
            v-for="nav in config.navigation"
            :key="nav.label"
            :to="nav.url"
            @click="closeMenu"
          >{{ nav.label }}</NuxtLink>
        </nav>

        <div class="header-actions">
          <button
            class="theme-toggle"
            @click="toggleTheme"
            :aria-label="isDark ? '切换到亮色模式' : '切换到暗色模式'"
            type="button"
          >
            <svg v-if="isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          <button
            class="menu-toggle"
            @click="toggleMenu"
            :aria-expanded="String(menuOpen)"
            aria-controls="main-nav"
            aria-label="菜单"
            type="button"
          >
            <svg v-if="!menuOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <div
      v-if="menuOpen"
      class="mobile-menu-overlay active"
      @click="closeMenu"
      aria-hidden="true"
    ></div>

    <main id="main-content" class="site-main">
      <slot />
    </main>

    <footer class="site-footer" role="contentinfo">
      <div class="footer-inner">
        <div class="footer-links">
          <a v-if="config.github_url" :href="config.github_url" target="_blank" rel="noopener nofollow">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
          <a href="/atom.xml" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
            <span>RSS</span>
          </a>
          <NuxtLink to="/search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <span>搜索</span>
          </NuxtLink>
        </div>
        <div class="footer-meta">
          <p>
            &copy; {{ currentYear }} {{ config.title }}
            <span>&nbsp;&middot;&nbsp;</span>
            <a
              v-if="config.miitbeian"
              target="_blank"
              rel="nofollow"
              href="http://www.miitbeian.gov.cn/"
            >{{ config.miitbeian }}</a>
            <a
              v-else-if="config.mpsbeian"
              target="_blank"
              rel="nofollow"
              href="http://www.beian.gov.cn/"
            >{{ config.mpsbeian }}</a>
            <NuxtLink v-else to="/">{{ config.hostname }}</NuxtLink>
          </p>
          <p class="footer-powered">
            Powered by <a target="_blank" rel="noopener" href="https://nuxt.com">Nuxt</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const config = runtimeConfig.public

const menuOpen = ref(false)
const currentYear = new Date().getFullYear()
const isDark = ref(false)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${config.title}` : config.title
  },
  meta: [
    { name: 'description', content: config.description }
  ]
})

onMounted(() => {
  isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'

  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light')
    }
  })

  document.addEventListener('keydown', onEscapeKey)
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.removeEventListener('keydown', onEscapeKey)
  }
})

function onEscapeKey(e) {
  if (e.key === 'Escape' && menuOpen.value) {
    closeMenu()
  }
}

function toggleTheme() {
  if (import.meta.client) {
    isDark.value = !isDark.value
    const theme = isDark.value ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (import.meta.client) {
    document.body.style.overflow = menuOpen.value ? 'hidden' : ''
  }
}

function closeMenu() {
  menuOpen.value = false
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
}
</script>

<style>
#__nuxt {
  width: 100%;
  min-height: 100%;
}
</style>
