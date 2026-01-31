<template>
  <div class="max-w-prose mx-auto px-6 py-10">
    <article>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">标签</h1>
      <section class="flex flex-wrap gap-3">
        <NuxtLink
          v-for="tag in tags"
          :key="tag.name"
          :to="`/tag/${tag.pathname}`"
          class="inline-block px-3 py-1.5 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 no-underline hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >{{ tag.name }} ({{ tag.count }})</NuxtLink>
      </section>
    </article>
  </div>
</template>

<script setup>
import tagsData from '../data/tags.json'

const tags = tagsData

useHead({
  title: '标签'
})
</script>
