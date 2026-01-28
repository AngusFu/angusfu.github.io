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

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${config.title}` : config.title
  },
  meta: [
    { name: 'description', content: config.description }
  ]
})

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
</style>
