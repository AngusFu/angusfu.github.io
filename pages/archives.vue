<template>
  <div class="container--narrow">
    <article class="post archive">
      <h1 class="title">归档</h1>
      <div class="archive-group" v-for="item in archiveData" :key="item.yearMonth">
        <h3 class="archive-month">{{ item.yearMonth }} <span class="archive-count">({{ item.data.length }})</span></h3>
        <ul class="archive-list">
          <li v-for="post in item.data" :key="post.pathname">
            <NuxtLink :to="`/post/${post.pathname}`" :title="post.title">
              {{ post.title }}
            </NuxtLink>
            <time class="date">{{ post.create_time }}</time>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script setup>
import archives from '../data/archives.json'

const archiveData = archives

useHead({
  title: '归档'
})
</script>

<style>
.archive-group {
  margin-bottom: 24px;
}

.archive-month {
  font-size: 1.1em;
  font-weight: 600;
  color: var(--text-heading);
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border-light);
}

.archive-count {
  font-weight: 400;
  color: var(--text-secondary);
  font-size: 0.9em;
}

.archive-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.archive-list li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-light);
}

.archive-list li:last-child {
  border-bottom: none;
}

.archive-list li a {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.archive-list li .date {
  flex-shrink: 0;
  color: var(--text-secondary);
  font-size: 13px;
}
</style>
