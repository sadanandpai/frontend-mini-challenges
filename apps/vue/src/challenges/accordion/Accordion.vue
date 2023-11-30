<template>
  <div class="accordion">
    <button type="button" @click="toggle">
      {{ heading }}
    </button>

    <div v-if="modelValue" class="panel">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['update:model-value'])

const toggle = () => {
  emit('update:model-value', !props.modelValue)
}
</script>

<style scoped>
.accordion {
  border-radius: 6px;
  overflow: hidden;
}

button {
  appearance: none;
  border: none;
  outline: none;
  display: block;
  width: 100%;
  background-color: #d1d5db;
  padding: 0.5rem;
  font-weight: 600;
}

.panel {
  font-size: small;
  padding: 1rem;
  background-color: #f3f4f6;
}
</style>
