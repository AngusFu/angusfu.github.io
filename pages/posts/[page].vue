<template>
  <Collection :data="posts" />
</template>

<script setup>
import postsData from '../../data/posts.json'

const posts = postsData
</script>
