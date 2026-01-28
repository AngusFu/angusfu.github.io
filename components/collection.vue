<template>
  <section id="page-index">
    <h1 v-if="tag" class="intro">
      标签<NuxtLink :to="`/tag/${tag}`">{{ tag }}</NuxtLink>下的文章
    </h1>
    <h1 v-if="cate" class="intro">
      分类<NuxtLink :to="`/category/${cate}`">{{ cate }}</NuxtLink>下的文章
    </h1>

    <article v-for="(post, i) in displayPosts" :key="post.title + '_' + i" class="post">
      <div class="meta">
        <div>
          <template v-if="post.user">
            <span class="author">{{ post.user }}</span>
            <span>发布于</span>
          </template>
          <span class="date">{{ post.create_time }}</span>
        </div>
      </div>

      <h1 class="title">
        <NuxtLink :to="`/post/${post.pathname}`">{{ post.title }}</NuxtLink>
      </h1>

      <div class="entry-content">
        <div class="summary" v-html="post.summary"></div>
        <p class="more">
          <NuxtLink :to="`/post/${post.pathname}`">阅读全文 &raquo;</NuxtLink>
        </p>
      </div>
    </article>
    <Pagination :pagination="paginationData" v-if="paginationData" />
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const config = runtimeConfig.public

const params = computed(() => route.params)
const tag = computed(() => params.value.tag)
const cate = computed(() => params.value.cate)

const pageTitle = computed(() => {
  if (props.type === 'cate') {
    return '分类: ' + params.value.cate
  } else if (props.type === 'tag') {
    return '标签: ' + params.value.tag
  }
  return ''
})

const filteredPosts = computed(() => {
  if (props.type === 'cate') {
    const decodedCate = decodeURIComponent(params.value.cate || '')
    return props.data.filter(post => post.category && post.category === decodedCate)
  } else if (props.type === 'tag') {
    const decodedTag = decodeURIComponent(params.value.tag || '')
    return props.data.filter(post => post.tags && post.tags.indexOf(decodedTag) > -1)
  }
  return props.data
})

const basePath = computed(() => {
  if (props.type === 'cate') {
    return '/category/' + params.value.cate + '/'
  } else if (props.type === 'tag') {
    return '/tag/' + params.value.tag + '/'
  }
  return '/posts/'
})

const pageSize = config.page_size || 10
const currentPage = computed(() => Number(params.value.page) || 1)
const totalPages = computed(() => Math.ceil(filteredPosts.value.length / pageSize))

const displayPosts = computed(() => {
  const index = currentPage.value - 1
  return filteredPosts.value.slice(pageSize * index, pageSize * currentPage.value)
})

const paginationData = computed(() => ({
  currentPage: currentPage.value,
  totalPages: totalPages.value,
  path: basePath.value
}))

useHead(() => {
  if (pageTitle.value) {
    return { title: pageTitle.value }
  }
  return {}
})
</script>
