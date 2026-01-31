<template>
  <div class="container--narrow">
    <article class="post page">
      <h1 class="title">{{ pageTitle }}</h1>
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
