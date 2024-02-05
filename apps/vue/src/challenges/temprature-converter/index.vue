<template>
  <div class="app">
    <div>
      <div class="input-tags">
        <input v-model.number="userInput" placeholder="Enter the value" type="number" />
        <select v-model="selectedValue" class="selected-value" @change="changeSelectedValue">
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
        <button @click.prevent="changeTemp">Convert</button>
      </div>
    </div>
    <h4 class="text-center" v-if="output !== null">
      Converted Temperature:{{ output }}{{ selectedValue == 'celsius' ? '°C' : '°F' }}
    </h4>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const selectedValue: Ref<string> = ref('celsius');
const userInput: Ref<number> = ref(0); // Initialize as 0 instead of null
const output: Ref<string | null> = ref(null); // Initialize as string or null

function changeTemp() {
  if (selectedValue.value === 'celsius') {
    output.value = ((userInput.value * 9) / 5 + 32).toFixed(3);
  } else {
    output.value = (((userInput.value - 32) * 5) / 9).toFixed(3);
  }
}
function changeSelectedValue() {
  if (output.value !== null) {
    output.value = null;
  }
}
</script>

<style scoped>
.input-tags {
  display: flex;
  justify-content: space-evenly;
}
.app {
  margin: 10px auto;
  padding: 20px;
  max-width: 550px;
  border: 1px solid;
}

.app input {
  padding: 10px;
  font-size: medium;
}
.selected-value {
  font-size: medium;
}

button {
  background-color: #007bff;
  color: white;
  border: none !important;
  border-radius: 3px;
  padding: 10px 20px;
}

button:hover {
  background-color: #0056b3;
}
</style>
