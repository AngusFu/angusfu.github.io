<template>
  <div class="fixed inset-0 z-[9999] p-4 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-center flex justify-center items-center flex-col font-sans">
    <main role="main" class="max-w-[450px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" viewBox="0 0 48 48" aria-hidden="true" focusable="false" class="text-slate-400 dark:text-slate-600 opacity-50 mx-auto">
        <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/>
      </svg>

      <h1 class="text-2xl font-semibold mt-5 mb-2 text-slate-900 dark:text-slate-100">{{ message }}</h1>
      <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5" v-if="statusCode === 404">
        抱歉，页面未找到
      </p>
      <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5" v-else>
        抱歉，出错啦~
      </p>
      <button
        class="mt-6 px-6 py-2.5 bg-blue-600 dark:bg-blue-500 text-white border-none rounded-md cursor-pointer text-sm font-medium font-sans transition-colors hover:bg-blue-700 dark:hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
        @click="handleError"
      >返回首页</button>
    </main>
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
