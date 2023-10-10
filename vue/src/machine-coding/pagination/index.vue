<template>
  <main>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="row in page">
            <td>{{  row.id }}</td>
            <td>{{ row.name }}</td>
          </tr>
        </tbody>
      </table>

      <div class="button-box">
        <button type="button" :disabled="start === 0" @click="prev">Prev</button>
        <button type="button" :disabled="end === total" @click="next">Next</button>
      </div>

      <div>
        <p>Showing data from {{ start }} to {{ end }}</p>
        <p>Total: {{ total }}</p>
        <p>Pages: {{ total / itemsPerPage }}</p>
        <p>Rows per page: {{ itemsPerPage }}</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface DummyObject {
  id: number
  name: string
}

const dummyData = ref<DummyObject[]>([])

for (let i = 1; i <= 30; i++) {
  dummyData.value.push({
    id: i,
    name: 'Item ' + i,
  })
}

const total = computed(() => dummyData.value.length)
const itemsPerPage = 5
const start = ref(0)
const end = ref(start.value + itemsPerPage)

const page = computed(() => dummyData.value.slice(start.value, end.value))

function prev() {
  start.value = Math.max(0, start.value - itemsPerPage)
  end.value = start.value + itemsPerPage
}

function next() {
  end.value = Math.min(total.value, end.value + itemsPerPage)
  start.value = end.value - itemsPerPage
}
</script>

<style scoped>
.container {
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  width: max-content;
  max-width: 32rem;
}

thead {
  text-align: left;
}

th, td {
  padding: 0.5rem 1rem;
}

.button-box {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto 0rem auto;
}

.button-box > button {
  padding: 0.5rem 1rem;
}
</style>
