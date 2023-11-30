<template>
  <main>
    <div class="container">
      <form class="toast-form" @submit="showToast">
        <div class="field">
          <label for="horizontal">Horizontal position</label>
          <select name="horizontal" id="horizontal" v-model="horizontal">
            <option :value="Horizontal.LEFT">Left</option>
            <option :value="Horizontal.RIGHT">Right</option>
          </select>
        </div>

        <div class="field">
          <label for="vertical">Vertical position</label>
          <select name="vertical" id="vertical" v-model="vertical">
            <option :value="Vertical.TOP">Top</option>
            <option :value="Vertical.BOTTOM">Bottom</option>
          </select>
        </div>

        <div class="field">
          <label for="type">Toast type</label>
          <select name="type" id="type" v-model="toastType">
            <option :value="ToastType.INFO">Info</option>
            <option :value="ToastType.SUCCESS">Success</option>
            <option :value="ToastType.ERROR">Error</option>
            <option :value="ToastType.WARNING">Warning</option>
          </select>
        </div>

        <div class="field">
          <label for="message">Message</label>
          <input type="text" name="message" id="message" v-model="message" maxlength="40" />
        </div>

        <div class="field">
          <label for="timeout">Toast timeout (in milliseconds)</label>
          <input type="number" inputmode="numeric" name="timeout" id="timeout" max="30000" v-model="timeout" />
        </div>

        <button class="submit">Show toast</button>
      </form>

      <Toast
        v-model="show"
        :type="toastType"
        :timeout="timeout"
        :horizontal="horizontal"
        :vertical="vertical"
        :message="message"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Toast from './toast.vue'
import { Horizontal, Vertical, ToastType } from './enums'

const vertical = ref<Vertical>(Vertical.BOTTOM)
const horizontal = ref<Horizontal>(Horizontal.RIGHT)
const toastType = ref<ToastType>(ToastType.INFO)
const message = ref('This is a toast!!')
const show = ref(false)
const timeout = ref(5000)

const showToast = (e: Event) => {
  e.preventDefault()
  show.value = true
}
</script>

<style scoped>
.container {
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0rem;
}

select, input, button {
  padding: 0.5rem 1rem;
}

.toast-form > *:not(:first-child) {
  margin-top: 1rem;
}

.field > * {
  display: block;
  width: 100%;
}
.field > label {
  margin-bottom: 1px;
  font-size: small;
  font-weight: 600;
}
</style>
