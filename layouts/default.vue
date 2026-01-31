<template>
  <div class="min-h-screen">
    <a href="#main-content" class="skip-link">跳到主要内容</a>

    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 h-16 border-b border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-sm transition-colors duration-300">
      <div class="max-w-content mx-auto px-6 h-full flex items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-semibold text-[17px] no-underline shrink-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" @click="closeMenu">
          <img :src="config.logo_url" :alt="config.site_owner" width="32" height="32" class="w-8 h-8 rounded-full object-cover">
          <span>{{ config.title }}</span>
        </NuxtLink>

        <nav
          id="main-nav"
          class="flex items-center gap-0.5 max-md:hidden"
          :class="{ '!max-md:flex max-md:fixed max-md:top-16 max-md:left-0 max-md:right-0 max-md:z-[99] max-md:flex-col max-md:p-4 max-md:bg-white/[0.98] max-md:dark:bg-slate-900/[0.98] max-md:backdrop-blur-xl max-md:border-b max-md:border-slate-200 max-md:dark:border-slate-700 max-md:shadow-lg max-md:gap-0.5': menuOpen }"
          aria-label="主导航"
        >
          <NuxtLink
            v-for="nav in config.navigation"
            :key="nav.label"
            :to="nav.url"
            class="px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 no-underline rounded-md whitespace-nowrap transition-colors hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 max-md:px-3.5 max-md:py-2.5 max-md:text-[15px] max-md:w-full"
            active-class="!text-blue-600 dark:!text-blue-400 !bg-slate-50 dark:!bg-slate-800 font-medium"
            @click="closeMenu"
          >{{ nav.label }}</NuxtLink>
        </nav>

        <div class="flex items-center gap-1 shrink-0">
          <button
            class="inline-flex items-center justify-center w-9 h-9 rounded-md border-none bg-transparent text-slate-500 dark:text-slate-400 cursor-pointer transition-colors hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
            @click="toggleTheme"
            :aria-label="isDark ? '切换到亮色模式' : '切换到暗色模式'"
            type="button"
          >
            <svg v-if="isDark" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
            <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          <button
            class="hidden max-md:inline-flex items-center justify-center w-9 h-9 rounded-md border-none bg-transparent text-slate-500 dark:text-slate-400 cursor-pointer transition-colors hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
            @click="toggleMenu"
            :aria-expanded="String(menuOpen)"
            aria-controls="main-nav"
            aria-label="菜单"
            type="button"
          >
            <svg v-if="!menuOpen" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile overlay -->
    <div
      v-if="menuOpen"
      class="fixed inset-0 bg-black/40 z-40"
      @click="closeMenu"
      aria-hidden="true"
    ></div>

    <!-- Main -->
    <main id="main-content" class="pt-20 pb-10 min-h-[calc(100vh-200px)]">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-200 dark:border-slate-700 py-10 px-6 text-center text-sm text-slate-500 dark:text-slate-400 transition-colors" role="contentinfo">
      <div class="max-w-content mx-auto">
        <div class="flex justify-center gap-6 mb-5">
          <a v-if="config.github_url" :href="config.github_url" target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm transition-colors hover:text-slate-900 dark:hover:text-slate-100">
            <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
          <a href="/atom.xml" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm transition-colors hover:text-slate-900 dark:hover:text-slate-100">
            <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
            <span>RSS</span>
          </a>
        </div>
        <div>
          <p class="m-0 leading-relaxed">
            &copy; {{ currentYear }} {{ config.title }}
            <span>&nbsp;&middot;&nbsp;</span>
            <a v-if="config.miitbeian" target="_blank" rel="nofollow" href="http://www.miitbeian.gov.cn/" class="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">{{ config.miitbeian }}</a>
            <a v-else-if="config.mpsbeian" target="_blank" rel="nofollow" href="http://www.beian.gov.cn/" class="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">{{ config.mpsbeian }}</a>
            <NuxtLink v-else to="/" class="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">{{ config.hostname }}</NuxtLink>
          </p>
          <p class="m-0 mt-1 opacity-70">
            Powered by <a target="_blank" rel="noopener" href="https://nuxt.com" class="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Nuxt</a>
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
