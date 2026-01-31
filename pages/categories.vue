<template>
  <div class="max-w-prose mx-auto px-6 py-10">
    <article>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">分类</h1>
      <section class="flex flex-wrap gap-3">
        <NuxtLink
          v-for="cate in cates"
          :key="cate.name"
          :to="`/category/${cate.pathname}`"
          class="inline-block px-3 py-1.5 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 no-underline hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >{{ cate.name }} ({{ cate.count }})</NuxtLink>
      </section>
    </article>
  </div>
</template>

<script setup>
import catesData from '../data/cates.json'

const cates = catesData

useHead({
  title: '分类'
})
</script>
