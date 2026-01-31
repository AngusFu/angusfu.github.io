<template>
  <div class="max-w-prose mx-auto px-6 py-10">
    <article>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">{{ pageTitle }}</h1>
      <div class="entry-content">
        <slot></slot>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  config: {
    type: Object,
    required: true
  }
})

const pageTitle = computed(() => props.config.title)

useHead({
  title: props.config.title,
  meta: [
    { name: 'description', content: props.config.desc || props.config.description || '' }
  ]
})
</script>
