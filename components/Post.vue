<template>
  <div class="max-w-prose mx-auto px-6 py-10">
    <article>
      <div class="text-sm text-slate-600 dark:text-slate-300 mb-2">
        <time>{{ post.create_time }}</time>
      </div>
      <h1 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6 tracking-tight">{{ post.title }}</h1>
      <div class="entry-content">
        <blockquote v-if="post.translation">
          <p class="whitespace-nowrap overflow-hidden text-ellipsis">
            原文作者:
            <a target="_blank" :href="post.translation.social">{{ post.translation.author }}</a>
            <br />原文地址:
            <a target="_blank" :href="post.translation.from">{{ post.translation.from }}</a>
            <br />译文地址:
            <a target="_blank" :href="permLink">{{ permLink }}</a>
            <br />本文由
            <a target="_blank" :href="config.site_url">{{ config.site_owner }}</a> 翻译，转载请保留此声明。
            <br />著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。
          </p>
        </blockquote>
        <slot></slot>
      </div>
    </article>
    <nav v-if="prevPost.title || nextPost.title" class="flex items-center justify-between gap-4 pt-8 mt-8 border-t border-slate-200 dark:border-slate-700 max-md:flex-col max-md:gap-3" aria-label="文章导航">
      <NuxtLink
        v-if="prevPost.title"
        :to="`/post/${prevPost.pathname}`"
        :title="prevPost.title"
        class="inline-flex items-center gap-1 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md no-underline transition-all hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 max-w-[45%] max-md:max-w-full max-md:w-full max-md:justify-center truncate"
      >&laquo; {{ prevPost.title }}</NuxtLink>
      <span v-else></span>
      <NuxtLink
        v-if="nextPost.title"
        :to="`/post/${nextPost.pathname}`"
        :title="nextPost.title"
        class="inline-flex items-center gap-1 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md no-underline transition-all hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 max-w-[45%] max-md:max-w-full max-md:w-full max-md:justify-center truncate"
      >{{ nextPost.title }} &raquo;</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const runtimeConfig = useRuntimeConfig()
const config = runtimeConfig.public

const post = computed(() => props.data)
const prevPost = computed(() => props.data.prev || {})
const nextPost = computed(() => props.data.next || {})
const permLink = computed(() => config.site_url + '/post/' + props.data.pathname)

useHead({
  title: props.data.title,
  meta: [
    { name: 'keywords', content: props.data.keywords || '' },
    { name: 'description', content: props.data.description || '' }
  ]
})

function onKeydown(e) {
  if (import.meta.client && document.activeElement !== document.body) {
    return
  }
  const item = e.key === 'ArrowLeft' ? prevPost.value : e.key === 'ArrowRight' ? nextPost.value : null
  const path = (item && item.pathname) || null
  if (path && path !== 'null') {
    navigateTo('/post/' + path)
  }
}

onMounted(() => {
  if (import.meta.client) {
    document.addEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.removeEventListener('keydown', onKeydown)
  }
})
</script>
