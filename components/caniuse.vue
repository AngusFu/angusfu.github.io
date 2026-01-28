<template>
  <Embeding :src="src" :ratio="ratio" />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

const ratio = ref(2.8)
let tid = null

function resize(e) {
  if (import.meta.client) {
    const iframe = document.querySelector('.aspect-ratio iframe')
    if (iframe && e.source === iframe.contentWindow) {
      const match = String(e.data).match(/\d+$/)
      if (match) {
        const h = match[0]
        ratio.value = iframe.clientWidth / h
      }
    }
  }
}

function doResize(e) {
  clearTimeout(tid)
  tid = setTimeout(() => {
    resize(e)
  }, 150)
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('message', doResize)
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('message', doResize)
  }
})
</script>
