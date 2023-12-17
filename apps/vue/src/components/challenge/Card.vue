<template>
  <button v-if="challenge.link === null" class="challenge-card disabled" disabled>
    <div>
      <h3>{{challenge.title}}</h3>
    </div>
  </button>

  <RouterLink
    v-else
    :class="['challenge-card', challenge.difficulty]"
    :to="challenge.link"
  >
    <span v-if="challenge.isNew" class="new">New</span>
    <div>
      <h3>{{challenge.title}}</h3>
      <div v-if="challenge.developer" class="developer">
        <img :src="contributors.get(challenge.developer)?.pic" alt="" />
        <span class="name">{{ contributors.get(challenge.developer)?.name }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import { RouterLink } from 'vue-router';
import { contributors } from '@/helpers/contributors';
import type { Challenge } from '@fmc/shared-types';

defineProps({
  challenge: {
    type: Object as PropType<Challenge>,
    required: true,
  }
})
</script>

<style scoped lang="scss">
.challenge-card {
  position: relative;
  padding: 10px;
  overflow: hidden;
  background-color: white;
  border: 1px solid rgb(0 0 0 / 15%);
  box-shadow: 0 6px 8px 0 rgb(0 0 0 / 15%);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 6px 8px 0 rgb(0 0 0 / 30%);
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: green;
  }

  &.disabled h3 {
    color: grey;
  }

  &.disabled {
    cursor: not-allowed;
    box-shadow: 0 3px 4px 0 rgb(0 0 0 / 10%);
  }

  &.disabled:hover {
    transform: scale(1);
  }

  a {
    color: chocolate;
    text-decoration: none;
  }

  .new {
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    font-size: 1rem;
    color: white;
    text-align: center;
    background-color: rgb(84 84 84);
  }

  .developer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: black;
  }

  img {
    width: 25px;
    height: 25px;
    margin-right: 0.5rem;
    border-radius: 50%;
  }

  .name {
    color: black;
  }

  &.medium h3 {
    color: rgb(75 75 255);
  }

  &.hard h3 {
    color: orangered;
  }
}

</style>