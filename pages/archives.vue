<template>
  <article class="post archive">
    <h1 class="title">归档</h1>
    <div class="entry-content" v-for="item in archiveData" :key="item.yearMonth">
      <h3>{{ item.yearMonth }} ({{ item.data.length }})</h3>
      <ul>
        <li v-for="post in item.data" :key="post.pathname">
          <NuxtLink :to="`/post/${post.pathname}`" :title="post.title">
            {{ post.title }}
          </NuxtLink>
          <span class="date">{{ post.create_time }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
import archives from '../data/archives.json'

const archiveData = archives

useHead({
  title: '归档'
})
</script>
