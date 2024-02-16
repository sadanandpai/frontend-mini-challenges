<template>
  <div class="app">
    <form>
      <input id="input" v-model="generatedPassword" style="width: 100%" />
      <div class="button-group">
        <button @click.prevent="generatePassword(8)">Generate 08 characters password</button>
        <button @click.prevent="generatePassword(10)">Generate 10 characters password</button>
        <button @click.prevent="generatePassword(16)">Generate 16 characters password</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const generatedPassword = ref('');

const allowed ={
    uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    lowers: "qwertyuiopasdfghjklzxcvbnm",
    numbers: "1234567890",
    symbols: "!@#$%^&"
}
const generatePassword = (length = 8) => {
    let pwd = "";
    pwd += getRandomCharFromString(allowed.uppers);  // pwd will have at least one upper
    pwd += getRandomCharFromString(allowed.lowers);  // pwd will have at least one lower
    pwd += getRandomCharFromString(allowed.numbers);  // pwd will have at least one number
    pwd += getRandomCharFromString(allowed.symbols); // pwd will have at least one symbol
    for (let i = pwd.length; i < length; i++)
      pwd += getRandomCharFromString(Object.values(allowed).join(''));  // fill the rest of the pwd with random characters
      generatedPassword.value = pwd
    return pwd
}
const getRandomCharFromString = (str: string) => {
  return str.charAt(Math.floor(Math.random() * str.length));
}

</script>

<style scoped>
.app {
  margin: auto;
  padding: 20px;
  max-width: 850px;
}

.app input {
  padding: 10px;
  font-size: medium;
}

.button-group {
  text-align: center;
}

button {
  background-color: #007bff;
  color: white;
  border: none !important;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 10px;
}
</style>
