<template>
  <Navbar>
    <a href="/frontend-mini-challenges/javascript">JavaScript Mini Challenges</a>
    <a href="/frontend-mini-challenges/react/">React Mini Challenges</a>
  </Navbar>

  <div className="container text-center">
    <div class="challenge-grid">

    <ChallengeCard
      v-for="challenge in challenges.values()"
      :key="challenge.title"
      :challenge="challenge"
    />
  </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import ChallengeCard from '@/components/challenge/Card.vue';
import { challenges } from '@/helpers/challenges';
</script>

<style scoped lang="scss">
.challenge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
  margin: 2rem 0;
}
</style>
