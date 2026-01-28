<template>
  <Collection :data="posts" type="cate" />
</template>

<script setup>
import postsData from '../../../data/posts.json'

const posts = postsData
</script>
