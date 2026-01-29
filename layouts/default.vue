<template>
  <div class="wrapper">
    <nav id="sidebar" class="behavior_1">
      <div class="wrap">
        <div class="profile" @click.prevent="hideSide">
          <NuxtLink to="/">
            <img :src="config.logo_url" :alt="config.title">
          </NuxtLink>
          <span>{{ config.title }}</span>
        </div>
        <ul class="buttons">
          <li v-for="nav in config.navigation" :key="nav.label" @click="hideSide">
            <NuxtLink v-if="nav.url.indexOf('http') === -1" :to="nav.url" :title="nav.label">
              <i :class="['iconfont', 'icon-' + nav.option]"></i>
              <span>&nbsp;{{ nav.label }}</span>
            </NuxtLink>
            <a v-else :href="nav.url" :title="nav.label" target="_blank">
              <i :class="['iconfont', 'icon-' + nav.option]"></i>
              <span>&nbsp;{{ nav.label }}</span>
            </a>
          </li>
        </ul>
      </div>

      <ul class="buttons">
        <li>
          <a v-if="config.github_url" :href="config.github_url" class="inline" rel="nofollow" target="_blank">
            <i class="iconfont icon-github-v" title="GitHub"></i>
          </a>
          <a v-if="twitterUrl && twitterUrl.indexOf('twitter.com') > -1" :href="twitterUrl" class="inline" rel="nofollow" target="_blank">
            <i class="iconfont icon-twitter-v" title="Twitter"></i>
          </a>
          <a v-if="twitterUrl && twitterUrl.indexOf('weibo.com') > -1" :href="twitterUrl" class="inline" rel="nofollow" target="_blank">
            <i class="iconfont icon-weibo" title="weibo"></i>
          </a>
          <a class="inline" href="/atom.xml" target="_blank">
            <i class="iconfont icon-rss-v" title="RSS"></i>
          </a>
          <NuxtLink class="inline" to="/search">
            <i class="iconfont icon-search" title="Search"></i>
          </NuxtLink>
          <a class="inline theme-toggle" href="#" @click.prevent="toggleTheme" :title="isDark ? 'Light Mode' : 'Dark Mode'">
            <svg v-if="isDark" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg v-else class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    <div id="header">
      <div class="btn-bar" @click.prevent="toggleSide"><i></i></div>
      <h1><NuxtLink to="/">{{ config.title }}</NuxtLink></h1>
      <NuxtLink class="me" to="/about/">
        <img :src="config.logo_url" :alt="config.title">
      </NuxtLink>
    </div>

    <div id="sidebar-mask" @click.prevent="toggleSide" :style="{ display: sideMaskShow ? 'block' : 'none' }"></div>

    <div id="main" class="main">
      <slot />
      <footer id="footer" class="inner">
        &copy; {{ currentYear }}&nbsp;-&nbsp; {{ config.title }}
        <span>&nbsp;-&nbsp;</span>
        <a
          v-if="config.miitbeian"
          target="_blank"
          rel="nofollow"
          class="external beian"
          href="http://www.miitbeian.gov.cn/"
        >{{ config.miitbeian }}</a>
        <a
          v-else-if="config.mpsbeian"
          target="_blank"
          rel="nofollow"
          class="external beian"
          href="http://www.beian.gov.cn/"
        >{{ config.mpsbeian }}</a>
        <NuxtLink v-else to="/">{{ config.hostname }}</NuxtLink>
        <br />
        Powered by&nbsp;<a target="_blank" href="https://nuxt.com">Nuxt 3</a>&nbsp;&amp;&nbsp;<a target="_blank" rel="nofollow" class="external" href="https://firekylin.org">FireKylin</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const config = runtimeConfig.public

const sideMaskShow = ref(false)
const currentYear = new Date().getFullYear()
const twitterUrl = config.twitter_url || ''
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
})

function toggleTheme() {
  if (import.meta.client) {
    isDark.value = !isDark.value
    const theme = isDark.value ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }
}

function toggleSide() {
  if (import.meta.client) {
    sideMaskShow.value = !document.body.classList.contains('side')
    document.body.classList.toggle('side')
  }
}

function hideSide() {
  if (import.meta.client) {
    document.body.classList.remove('side')
    sideMaskShow.value = false
  }
}
</script>

<style>
#__nuxt,
.wrapper {
  width: 100%;
  height: 100%;
}

.main {
  height: 100%;
}

.main > div,
.main > section,
.main > article {
  min-height: 100%;
  margin-bottom: -81px;
  border-bottom: 0;
}

.main > div::after,
.main > section::after,
.main > article::after {
  display: block;
  content: "";
  height: 81px;
}

.main > #footer {
  position: relative;
  z-index: 1;
  border-top: 0;
}

.theme-toggle {
  cursor: pointer;
}

.theme-icon {
  display: inline-block;
  vertical-align: middle;
  width: 25px;
  height: 45px;
  padding: 12.5px 2.5px;
  box-sizing: border-box;
  margin-right: 20px;
  color: #999;
  transition: color .2s cubic-bezier(.4,.01,.165,.99);
}

.theme-toggle:hover .theme-icon {
  color: rgba(153,153,153,.8);
}
</style>
