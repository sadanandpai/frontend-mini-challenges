<template>
  <main class="main">
    <h2>{{ value }}</h2>

    <section>
      <button @click="decrement" aria-label="Decrement">
        -
      </button>
      <button @click="increment" aria-label="Increment">
        +
      </button>
    </section>

    <section>
      <label for="step">Increment/Decrement by</label>
      <input
        type="number"
        id="step"
        :defaultValue="step"
        @change="setStep"
        title="Step value"
      />
    </section>

    <section>
      <button @click="reset">Reset</button>
    </section>
  </main>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const value = ref(0);
  const step = ref(1);

  const setStep = (e: Event) => {
    step.value = (e.target as HTMLInputElement).valueAsNumber;
  };

  const increment = () => {
    value.value += step.value;
  };

  const decrement = () => {
    value.value -= step.value;
  };

  const reset = () => {
    value.value = 0;
  };
</script>

<style scoped lang="scss">
.main {
  text-align: center;

  section {
    margin: 1rem 0;
  }

  button {
    padding: 0.25rem 0.5rem;
    margin: 0 0.5rem;
    font-size: 1.15rem;
    cursor: pointer;
  }

  input {
    width: 5rem;
    padding: 0.15rem;
    margin-left: 1rem;
    font-size: 1.15rem;
  }
}

</style>
