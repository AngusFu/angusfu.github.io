<template>
  <section class="max-w-content mx-auto px-6">
    <h1 v-if="tag" class="py-4 px-6 text-center text-slate-600 dark:text-slate-300 text-lg font-normal bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
      标签 <NuxtLink :to="`/tag/${tag}`" class="font-semibold">{{ tag }}</NuxtLink> 下的文章
    </h1>
    <h1 v-if="cate" class="py-4 px-6 text-center text-slate-600 dark:text-slate-300 text-lg font-normal bg-slate-50 dark:bg-slate-800 rounded-lg mb-6">
      分类 <NuxtLink :to="`/category/${cate}`" class="font-semibold">{{ cate }}</NuxtLink> 下的文章
    </h1>

    <article
      v-for="(post, i) in displayPosts"
      :key="post.title + '_' + i"
      class="p-6 mb-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800/50 transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 max-md:p-5"
    >
      <div class="text-sm text-slate-600 dark:text-slate-300 mb-2">
        <template v-if="post.user">
          <span>{{ post.user }}</span>
          <span> 发布于 </span>
        </template>
        <time>{{ post.create_time }}</time>
      </div>

      <h1 class="text-xl font-bold leading-snug mb-2">
        <NuxtLink :to="`/post/${post.pathname}`" class="text-slate-900 dark:text-slate-100 no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{{ post.title }}</NuxtLink>
      </h1>

      <div class="entry-content">
        <div class="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed mt-2 [&>p]:m-0" v-html="post.summary"></div>
        <p class="mt-3">
          <NuxtLink :to="`/post/${post.pathname}`" class="text-sm font-medium text-blue-600 dark:text-blue-400 no-underline hover:text-blue-800 dark:hover:text-blue-300">阅读全文 &raquo;</NuxtLink>
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
