<template>
  <div :class="['toast-fixed-screen', vertical]">
    <div :class="['toast-container', horizontal]">
      <div v-show="modelValue" :class="['toast', type]">
        <p>
          {{ message }}
        </p>

        <button type="button" @click="close">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType, watch, toRef, ref } from 'vue'
import { Horizontal, ToastType, Vertical } from './enums'

const props = defineProps({
  vertical: {
    type: String as PropType<Vertical>,
    required: true,
  },
  horizontal: {
    type: String as PropType<Horizontal>,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  /** Toast timeout in milliseconds */
  timeout: {
    type: Number,
    default: 5000
  },
  type: {
    type: String as PropType<ToastType>,
    default: ToastType.INFO,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:model-value'])

const modelValue = toRef(props, 'modelValue')
const timeoutId = ref<number | null>(null)

const close = () => {
  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value)
    timeoutId.value = null
  }
  emit('update:model-value', false)
}

watch(modelValue, (newVal) => {
  if (newVal) timeoutId.value = setTimeout(close, props.timeout)
})
</script>

<style scoped>
/* Toast fixed screen */
.toast-fixed-screen {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  pointer-events: none;
}
.toast-fixed-screen.top {
  justify-content: flex-start;
}
.toast-fixed-screen.bottom {
  justify-content: flex-end;
}

/* Toast container */
.toast-container {
  display: flex;
  width: 100%;
}
.toast-container.left {
  justify-content: flex-start;
}
.toast-container.right {
  justify-content: flex-end;
}

/* Toast */
.toast {
  padding: 0.8rem 1rem;
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 1rem;
  pointer-events: all;
}
.toast > p {
  flex-grow: 1;
  margin: 0;
  max-width: 18rem;
  word-break: break-all;
}
.toast > button {
  border: none;
  background: none;
  color: inherit;
  padding: 0;
  display: flex;
  align-items: center;
}
.toast > button > svg {
  width: 1.5rem;
  height: 1.5rem;
}
.toast.info {
  background-color: blue;
}
.toast.success {
  background-color: green;
}
.toast.error {
  background-color: red;
}
.toast.warning {
  color: black;
  background-color: yellow;
  border: 1px solid black;
}
</style>
