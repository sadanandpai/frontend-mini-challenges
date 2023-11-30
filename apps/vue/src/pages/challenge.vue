<template>
  <ChallengeNavbar :title="title" />
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import ChallengeNavbar from '@/components/ChallengeNavbar.vue'
import { challenges } from '@/helpers/challenges';

const route = useRoute()

const title = ref('')

watch(route, () => {
  // Extract challenge-id from url (last segment)
  const challengeId = route.path.split('/').filter(Boolean).pop()!
  title.value = challenges.get(challengeId)!.title
}, { immediate: true })
</script>

<style scoped>
.container {
  max-width: min(90%, 1200px);
  margin: 0 auto;
}
</style>
