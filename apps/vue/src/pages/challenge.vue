<template>
  <ChallengeNavbar :title="title" :link="link" />
  <div class="challenge-container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import ChallengeNavbar from '@/components/Navbar.vue';
import { vueChallenges } from '@fmc/data/content';

const route = useRoute();

const title = ref('');
const link = ref('');

watch(
  route,
  () => {
    // Extract challenge-id from url (last segment)
    const challengeId = route.path.split('/').filter(Boolean).pop()!;
    title.value = vueChallenges.get(challengeId)!.title;
    link.value = vueChallenges.get(challengeId)!.link;
  },
  { immediate: true }
);
</script>

<style scoped>
.challenge-container {
  max-width: 76rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 6px;
  box-shadow:
    0 1px 3px 0 var(--shadow-navbar),
    0 1px 2px -1px var(--shadow-navbar);
}
.dark .challenge-container {
  background-color: #1f2937;
}
</style>
