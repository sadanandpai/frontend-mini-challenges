<template>
  <main :class="isDark ? 'dark' : ''">
    <div class="content">
      <p class="text">Toggle the theme and see the change!</p>

      <button type="button" @click="isDark = !isDark">Toggle theme</button>

      <p class="current-theme">Current theme: <span>{{ isDark ? 'Dark' : 'Light' }}</span></p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)
</script>

<style scoped>
.content {
  height: 20rem;
  background-color: #f9fafb;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dark .content {
  background-color: #1f2937;
  color: white;
}

p.text {
  font-size: 2rem;
  font-weight: bold;
}

button {
  padding: 0.5rem 1rem;
}

.current-theme > span {
  font-weight: 600;
}
</style>
