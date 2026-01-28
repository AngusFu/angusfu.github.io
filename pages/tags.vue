<template>
  <article class="post tags">
    <h1 class="title">标签</h1>
    <div class="entry-content">
      <section>
        <NuxtLink
          v-for="tag in tags"
          :key="tag.name"
          :to="`/tag/${tag.pathname}`"
          :data-tag="tag.name"
        >{{ tag.name }} ({{ tag.count }})</NuxtLink>
      </section>
    </div>
  </article>
</template>

<script setup>
import tagsData from '../data/tags.json'

const tags = tagsData

useHead({
  title: '标签'
})
</script>
