<template>
  <div class="error-page">
    <div class="error">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" viewBox="0 0 48 48" aria-hidden="true" class="error-icon">
        <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/>
      </svg>

      <h1 class="title">{{ message }}</h1>
      <p class="description" v-if="statusCode === 404">
        抱歉，页面未找到
      </p>
      <p class="description" v-else>
        抱歉，出错啦~
      </p>
      <button class="clear-btn" @click="handleError">返回首页</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const statusCode = computed(() => props.error?.statusCode || 500)
const message = computed(() => props.error?.message || 'Error')

useHead({
  title: message.value
})

onMounted(() => {
  console.error(props.error)
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<style>
.error-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  padding: 1rem;
  background: var(--bg-main, #f8fafc);
  color: var(--text-primary, #334155);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Noto Sans SC", "PingFang SC", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.error-page .error {
  max-width: 450px;
}

.error-page .error-icon {
  color: var(--text-secondary, #94a3b8);
  opacity: 0.5;
}

.error-page .title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 20px;
  color: var(--text-heading, #0f172a);
  margin-bottom: 8px;
}

.error-page .description {
  color: var(--text-secondary, #64748b);
  line-height: 1.6;
  margin-bottom: 10px;
}

.error-page .clear-btn {
  margin-top: 24px;
  padding: 10px 24px;
  background: var(--color-link, #2563eb);
  color: white;
  border: none;
  border-radius: var(--radius-sm, 6px);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  transition: background-color 0.2s ease;
}

.error-page .clear-btn:hover {
  background: var(--color-link-hover, #1d4ed8);
}

.error-page .clear-btn:focus-visible {
  outline: 2px solid var(--color-focus, #2563eb);
  outline-offset: 2px;
}
</style>
