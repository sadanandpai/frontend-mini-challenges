<template>
  <main>
    <div class="container">
      <div class="input-box">
        <div>
          <label for="row-number">Row</label>
          <input
            id="row-number"
            type="number"
            inputmode="numeric"
            min="0"
            :max="table.length"
            v-model="selectedRow"
          />
        </div>

        <div>
          <label for="column-number">Column</label>
          <input
            id="column-number"
            type="number"
            inputmode="numeric"
            min="0"
            :max="table[0].length"
            v-model="selectedColumn"
          />
        </div>
      </div>

      <div class="button-box">
        <button type="button" @click="colorSelected">Color selected cell</button>
        <button type="button" @click="clearSelected">Clear selected cell</button>
        <button type="button" @click="clearAll">Clear all cells</button>
      </div>

      <div class="table-box">
        <div v-for="row in table" class="row">
          <div v-for="cell in row" :class="[cell.colored ? 'colored' : '', 'cell']">
            {{  cell.content }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const table = ref([
  [
    { content: 1, colored: false },
    { content: 2, colored: false },
    { content: 3, colored: false },
  ],
  [
    { content: 4, colored: false },
    { content: 5, colored: false },
    { content: 6, colored: false },
  ],
  [
    { content: 7, colored: false },
    { content: 8, colored: false },
    { content: 9, colored: false },
  ],
])

const selectedRow = ref(1)
const selectedColumn = ref(1)

function colorSelected() {
  const row = selectedRow.value - 1
  const col = selectedColumn.value - 1

  table.value[row][col].colored = true
}

function clearSelected() {
  const row = selectedRow.value - 1
  const col = selectedColumn.value - 1

  table.value[row][col].colored = false
}

function clearAll() {
  for (const row of table.value) {
    for (const cell of row) {
      cell.colored = false
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 32rem;
  margin: auto;
  padding: 2rem 0;
}

.container > *:not(:first-child) {
  margin-top: 2rem;
}

/* Input box */
.input-box {
  max-width: 20rem;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  place-items: center;
}
.input-box > div {
  width: 100%;
}
.input-box label {
  display: block;
  font-size: small;
  font-weight: 600;
  margin-bottom: 2px;
}
.input-box input {
  display: block;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  width: 100%;
}

/* Button box */
.button-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
}
@media (width <= 480px) {
  .button-box {
    grid-template-columns: 1fr;
  }
}
.button-box > button {
  padding: 0.5rem 1rem;
  font-weight: 600;
}

/* Table box */
.table-box {
  width: max-content;
  margin: auto;
}
.table-box > *:not(:first-child) {
  margin-top: 0.5rem;
}
.table-box .row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  place-items: center;
}
.table-box .cell {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
}
.table-box .cell.colored {
  background-color: orange;
}
</style>
