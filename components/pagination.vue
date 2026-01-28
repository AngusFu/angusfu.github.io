<template>
  <nav class="pagination">
    <NuxtLink v-if="prev" :to="prev" class="prev">&laquo; 上一页</NuxtLink>
    <NuxtLink v-if="next" :to="next" class="next">下一页 &raquo;</NuxtLink>
    <div class="center">
      <NuxtLink to="/archives">博客归档</NuxtLink>
    </div>
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
  const n = +e.keyCode
  const path = n === 37 ? prev.value : n === 39 ? next.value : null
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
