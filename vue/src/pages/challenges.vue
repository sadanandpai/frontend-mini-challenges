<template>
  <Navbar>
    <a href="/frontend-mini-challenges/native">JavaScript Mini Challenges</a>
    <a href="/frontend-mini-challenges/react/dist/#/challenges">React Mini Challenges</a>
  </Navbar>

  <div className="container text-center">
    <ChallengeGrid />
  </div>
</template>

<script setup lang="ts">
import ChallengeGrid from '@/components/ChallengeGrid.vue';
import Navbar from '@/components/Navbar.vue';
</script>
