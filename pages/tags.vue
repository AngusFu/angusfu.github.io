<template>
  <div class="container--narrow">
    <article class="post tags">
      <h1 class="title">标签</h1>
      <div class="entry-content">
        <section>
          <NuxtLink
            v-for="tag in tags"
            :key="tag.name"
            :to="`/tag/${tag.pathname}`"
          >{{ tag.name }} ({{ tag.count }})</NuxtLink>
        </section>
      </div>
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
