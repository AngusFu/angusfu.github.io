<template>
  <div class="container--narrow">
    <article class="post detail">
      <div class="meta">
        <time>{{ post.create_time }}</time>
      </div>
      <h1 class="title">{{ post.title }}</h1>
      <div class="entry-content">
        <blockquote v-if="post.translation">
          <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
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
    <nav class="pagination" v-if="prevPost.title || nextPost.title" aria-label="文章导航">
      <NuxtLink
        v-if="prevPost.title"
        :to="`/post/${prevPost.pathname}`"
        :title="prevPost.title"
        class="prev"
      >&laquo; {{ prevPost.title }}</NuxtLink>
      <span v-else></span>
      <NuxtLink
        v-if="nextPost.title"
        :to="`/post/${nextPost.pathname}`"
        :title="nextPost.title"
        class="next"
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
