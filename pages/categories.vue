<template>
  <article class="post tags">
    <h1 class="title">分类</h1>
    <div class="entry-content">
      <section>
        <NuxtLink
          v-for="cate in cates"
          :key="cate.name"
          :to="`/category/${cate.pathname}`"
          :data-tag="cate.name"
        >{{ cate.name }} ({{ cate.count }})</NuxtLink>
      </section>
    </div>
  </article>
</template>

<script setup>
import catesData from '../data/cates.json'

const cates = catesData

useHead({
  title: '分类'
})
</script>
