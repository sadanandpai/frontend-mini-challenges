<template>
  <div class="container text-center">
    <input
      type="tel"
      id="phone"
      maxlength="16"
      placeholder="Mobile number"
      autocomplete="off"
      class="field"
      v-model="phone"
    />

    <div>
      <label for="phone">+(123) - 4567890</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const phone = ref("")

const getStringWithNumbersOnly = (str: string) =>
  str.split('').filter((v) => Number.isInteger(+v) && v !== ' ').join('')

watch(phone, (newVal) => {
  const numStr = getStringWithNumbersOnly(newVal)

  phone.value = numStr.length > 3
      ? "+(" + numStr.substring(0, 3) + ") - " + numStr.substring(3)
      : numStr
})
</script>

<style scoped>
.field {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
