<template>
  <nav class="flex items-center justify-between mt-8 mb-4 px-2" aria-label="分页导航">
    <NuxtLink v-if="prev" :to="prev" class="text-sm font-medium text-blue-600 dark:text-blue-400 no-underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">&laquo; 上一页</NuxtLink>
    <span v-else></span>
    <span class="text-sm text-slate-500 dark:text-slate-400" v-if="pagination.totalPages > 1">
      {{ pagination.currentPage }} / {{ pagination.totalPages }}
    </span>
    <NuxtLink v-if="next" :to="next" class="text-sm font-medium text-blue-600 dark:text-blue-400 no-underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">下一页 &raquo;</NuxtLink>
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
