<template>
  <div class="grid-container">
    <button
      class="grid-item"
      v-for="(cell, index) in grid.flat()"
      :key="index"
      :class="{
        inactive: cell || result?.winner,
        highlight: result?.winningPositions.has(index),
      }"
      @click="handleClick(index)"
    >
      {{ cell }}
    </button>
  </div>

  <button @click="reset()" class="reset">Reset</button>

  <p v-if="result?.winner" class="winner">{{ players[playerIdx] }} wins!</p>
  <p v-else-if="cellClicks === totalCells" class="winner">It's a draw!</p>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { getGameStatus } from './helpers';

let playerIdx = 0;
const size = 3;
const totalCells = size * size;
const players = ['X', 'O'];
let cellClicks = 0;
const grid: Ref<(string | null)[][]> = ref(
  Array.from(Array(size), () => new Array(size).fill(null))
);
let result: ReturnType<typeof getGameStatus> | null;

function getNextTurn() {
  return (playerIdx + 1) % players.length;
}

function handleClick(index: number) {
  const row = Math.floor(index / size);
  const col = index % size;

  if (grid.value[row][col] || result?.winner || cellClicks === totalCells) {
    return;
  }

  grid.value[row][col] = players[playerIdx];
  result = getGameStatus(grid.value, { row, col });
  if (result.winner) {
    return;
  }

  cellClicks += 1;
  playerIdx = getNextTurn();
}

function reset() {
  grid.value = Array.from(Array(size), () => new Array(size).fill(null));
  playerIdx = 0;
  cellClicks = 0;
  result = null;
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  width: 300px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  border-collapse: collapse;
}

.grid-item {
  border: 1px solid #000;
  padding: 20px;
  text-align: center;
  font-size: 1.5em;
}

.reset {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1.25em;
}

.inactive {
  cursor: not-allowed;
  background-color: #ddd;
}

.winner {
  font-size: 2em;
  text-align: center;
  color: #42b883;
}

.highlight {
  background-color: #c7ffe6;
  font-weight: bold;
  cursor: not-allowed;
}
</style>
