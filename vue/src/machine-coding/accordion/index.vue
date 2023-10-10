<template>
  <main>
    <div class="checkbox">
      <input id="allow-multiple-open" type="checkbox" v-model="allowMultipleOpen" />
      <label for="allow-multiple-open">Allow multiple open accordion</label>
    </div>

    <AccordionGroup :data="dummyData" :allowMultipleOpen="allowMultipleOpen" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AccordionGroup from './AccordionGroup.vue'
import { dummyData } from './data'

const allowMultipleOpen = ref(true)
</script>

<style scoped>
.checkbox {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  justify-content: center;
}
</style>
