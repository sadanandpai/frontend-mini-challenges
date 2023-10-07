<template>
  <div class="container">
    <Accordion
      v-for="(obj, i) in data"
      :heading="obj.heading"
      :content="obj.content"
      v-model="open[i]"
      @update:model-value="(v) => update(v, i)"
    />
  </div>
</template>

<!-- The AccordionGroup handles the open state of all accordions under it -->

<script setup lang="ts">
import { type PropType, reactive, watch, ref } from 'vue'
import Accordion from './Accordion.vue'

interface AccordionData {
  heading: string
  content: string
}

const props = defineProps({
  data: {
    type: Array as PropType<AccordionData[]>,
    required: true,
  },
  /** Whether multiple accordions can be open at the same time or not */
  allowMultipleOpen: {
    type: Boolean,
    default: true,
  }
})

const open = reactive(Array(props.data.length).fill(false))

/** Record the index of the previous accordion that was opened/closed */
const prev = ref<number | null>(null)

function update(val: boolean, i: number) {
  if (!props.allowMultipleOpen && prev.value !== null) {
    open[prev.value] = false
  }
  prev.value = i
  open[i] = val
}

watch(props, (newProps) => {
  // If `allowMultipleOpen` is toggled, then close all accordions except the immediate previous one
  if (!newProps.allowMultipleOpen) {
    open.fill(false)
    if (prev.value) open[prev.value] = true
  }
})
</script>

<style scoped>
.container {
  max-width: 40rem;
  margin: auto;
}
.container > *:not(:first-child) {
  margin-top: 1rem;
}
</style>
