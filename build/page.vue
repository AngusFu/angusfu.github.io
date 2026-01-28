<template>
  <Page v-if="pageData" :config="pageData.config" :markdown="pageData.markdown" :rendered-html="pageData.renderedHtml" />
</template>

<script setup>
const { data: pageData } = await useFetch('/api/pages/__SLUG__')
</script>
