<template>
  <div class="app">
    <form @submit="validateGuess">
      <label for="input">Guess a number between 0 and 100</label>
      <input
        id="input"
        type="number"
        min="0"
        max="100"
        v-model="guessedNum"
        placeholder="Guess a number"
      />
      <div class="widget">
        <button type="button" @click="reset">
          Reset
        </button>
        <button type="submit" :disabled="guessDisabled">
          Check
        </button>
      </div>
    </form>

    <div class="hint">
      <p v-if="guessStatus === GuessStatus.LOW">
        Your guess is <b>Less</b> than the actual number
      </p>
      <p v-else-if="guessStatus === GuessStatus.HIGH">
        Your guess is <b>Higher</b> than the actual number
      </p>
      <p v-else-if="guessStatus === GuessStatus.CORRECT">
        Your guess is <b>right</b>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

enum GuessStatus {
  NONE = 'NONE',
  LOW = 'LOW',
  HIGH = 'HIGH',
  CORRECT = 'CORRECT',
}
/** If you are not using typescript then replace the enum with this object */
// const GuessStatus = {
//   NONE: 'NONE',
//   LOW: 'LOW',
//   HIGH: 'HIGH',
//   CORRECT: 'CORRECT',
// }

const generateRandom = () => Math.round(100 * Math.random())

const randomNum = ref(generateRandom())
const guessDisabled = ref(false)
const guessedNum = ref(1)
const guessStatus = ref<GuessStatus>(GuessStatus.NONE)

/** check if the guessed number is lower, higher, or correct */
const validateGuess = (e: Event) => {
  e.preventDefault()

  if (guessedNum.value < randomNum.value) {
    guessStatus.value = GuessStatus.LOW
  } else if (guessedNum.value > randomNum.value) {
    guessStatus.value = GuessStatus.HIGH
  } else {
    guessStatus.value = GuessStatus.CORRECT
    guessDisabled.value = true
  }
}

/** generate a new random number and reset game state */
const reset = () => {
  randomNum.value = generateRandom()
  guessStatus.value = GuessStatus.NONE
  guessDisabled.value = false
  guessedNum.value = 1
}
</script>

<style scoped>
.app {
  margin: 10px auto;
  max-width: 480px;
}

.widget {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.app .hint p {
  text-align: center;
}

.app form label {
  padding: 10px;
}

.app form input {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  width: 100%;
  text-align: center;
  outline: none;
}

.app form button {
  min-width: 40%;
  padding: 10px;
  font-size: 16px;
}

@media (width <= 768px) {
  .widget {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
