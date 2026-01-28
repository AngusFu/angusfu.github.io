<template>
  <article class="post page">
    <h1 class="title">{{ pageTitle }}</h1>
    <div class="entry-content">
      <!-- SSR: pre-rendered HTML from marked. Client: markstream-vue takes over -->
      <MarkdownRender v-if="isMounted" :content="markdown" :final="true" />
      <div v-else v-html="renderedHtml"></div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  config: {
    type: Object,
    required: true
  },
  markdown: {
    type: String,
    default: ''
  },
  renderedHtml: {
    type: String,
    default: ''
  }
})

const pageTitle = computed(() => props.config.title)
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

useHead({
  title: props.config.title,
  meta: [
    { name: 'description', content: props.config.desc || props.config.description || '' }
  ]
})
</script>
