<template>
  <div class="container--narrow">
    <article class="post detail">
      <h1 class="title">搜索</h1>
      <div class="entry-content">
        <div class="search-form" role="search">
          <label for="keyword" class="sr-only">搜索关键字</label>
          <div class="search-input-wrap">
            <input
              maxlength="80"
              placeholder="请输入关键字..."
              id="keyword"
              name="keyword"
              v-model="keyword"
              type="search"
              @keyup.enter="search"
              aria-label="搜索关键字"
            />
            <button type="button" class="search-btn" @click="search">搜索</button>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const config = runtimeConfig.public

const keyword = ref('')
const hostname = config.hostname

const url = computed(() => {
  return `https://www.google.com/search?q=${keyword.value}+site%3A${hostname}`
})

function search() {
  if (import.meta.client && keyword.value) {
    window.open(url.value, '_blank')
  }
}

useHead({
  title: '搜索'
})
</script>

<style>
.search-form {
  margin-top: 24px;
}

.search-input-wrap {
  display: flex;
  gap: 8px;
}

.search-input-wrap input {
  flex: 1;
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid var(--border-search);
  border-radius: var(--radius-sm);
  background: var(--bg-main);
  color: var(--text-primary);
  transition: border-color 0.2s ease;
  font-family: inherit;
}

.search-input-wrap input:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.search-btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: var(--color-link);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: inherit;
}

.search-btn:hover {
  background: var(--color-link-hover);
}
</style>
