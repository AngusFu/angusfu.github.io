<template>
  <Post v-if="data" :data="data" />
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug
const { data } = await useFetch(`/api/posts/${slug}`)
</script>
