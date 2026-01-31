<template>
  <nav class="pagination" aria-label="分页导航">
    <NuxtLink v-if="prev" :to="prev" class="prev">&laquo; 上一页</NuxtLink>
    <span v-else></span>
    <span class="pagination-info" v-if="pagination.totalPages > 1">
      {{ pagination.currentPage }} / {{ pagination.totalPages }}
    </span>
    <NuxtLink v-if="next" :to="next" class="next">下一页 &raquo;</NuxtLink>
    <span v-else></span>
  </nav>
</template>

<script setup>
const props = defineProps({
  pagination: {
    type: Object,
    required: true
  }
})

const prev = computed(() => {
  const p = props.pagination
  if (p.currentPage > 1) return p.path + (p.currentPage - 1)
  return null
})

const next = computed(() => {
  const p = props.pagination
  if (p.currentPage < p.totalPages) return p.path + (p.currentPage + 1)
  return null
})

function onKeydown(e) {
  if (import.meta.client && document.activeElement !== document.body) {
    return
  }
  const path = e.key === 'ArrowLeft' ? prev.value : e.key === 'ArrowRight' ? next.value : null
  if (path) {
    navigateTo(path)
  }
}

onMounted(() => {
  if (import.meta.client) {
    document.addEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.removeEventListener('keydown', onKeydown)
  }
})
</script>
