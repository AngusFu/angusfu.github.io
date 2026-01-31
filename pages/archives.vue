<template>
  <div class="max-w-prose mx-auto px-6 py-10">
    <article>
      <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">归档</h1>
      <div v-for="item in archiveData" :key="item.yearMonth" class="mb-6">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 pb-2 border-b border-slate-200 dark:border-slate-700">
          {{ item.yearMonth }}
          <span class="font-normal text-slate-500 dark:text-slate-400 text-[0.9em]">({{ item.data.length }})</span>
        </h3>
        <ul class="list-none m-0 p-0">
          <li
            v-for="post in item.data"
            :key="post.pathname"
            class="flex justify-between items-baseline gap-4 py-2 border-b border-slate-100 dark:border-slate-800 last:border-b-0"
          >
            <NuxtLink
              :to="`/post/${post.pathname}`"
              :title="post.title"
              class="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-blue-600 dark:text-blue-400 no-underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              {{ post.title }}
            </NuxtLink>
            <time class="shrink-0 text-slate-500 dark:text-slate-400 text-[13px]">{{ post.create_time }}</time>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script setup>
import archives from '../data/archives.json'

const archiveData = archives

useHead({
  title: '归档'
})
</script>
