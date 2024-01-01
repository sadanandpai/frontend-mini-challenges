<template>
    <div class="app">
        <div>
            <input v-model="userInput" placeholder="Enter the value" style=" width: 100%;" />
            <div class="action-buttons">
                <button @click="pushItem">Push</button>
                <button @click="popItem">Pop</button>
                <button @click="peekItem">Peek</button>
                <button @click="isStackEmpty">IsEmpty</button>
                <button @click="isStackFull">IsFull</button>
                <button @click="clearAll">Clear All</button>
            </div>
        </div>
        <hr />
        <h4 class="text-center">{{ output }}</h4>
        <ul class="text-center">
            <li v-for="(value, index) in stack" :key="index">
                {{ value }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

const stack: Ref<string[]> = ref([])
const userInput: Ref<string> = ref('')
const output: Ref<string> = ref('')

function pushItem() {
    if (stack.value.length == 5) {
        output.value = 'Stack is full'
    } else if (userInput.value) {
        stack.value.push(userInput.value)
        output.value = `${userInput.value} is pushed into the Stack`
        userInput.value = ''
    } else {
        output.value = 'Please enter value first'
    }
}

function popItem() {
    if (!stack.value.length) {
        output.value = 'Stack is empty'
    } else {
        output.value = `${stack.value.at(-1)} is popped from the Stack`
        stack.value.pop()
    }
}

function peekItem() {
    if (!stack.value.length) {
        output.value = 'Stack is empty'
    } else {
        output.value = `Last element is ${stack.value.at(-1)}`
    }
}

function isStackEmpty() {
    if (!stack.value.length) {
        output.value = 'Stack is empty'
    } else {
        output.value = 'Stack is not empty'
    }
}

function isStackFull() {
    if (stack.value.length == 5) {
        output.value = 'Stack is full'
    } else {
        output.value = 'Stack is not full'
    }
}

function clearAll(){
    stack.value = [];
    output.value = 'Your stack is clear'
}

</script>

<style scoped css="scss">
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

ul {
    list-style-type: none;
    padding-inline-start: 0px !important
}

li {
    padding: 5px;
    margin-bottom: 10px;
    background-color: #007bff34;
    border-radius: 3px;
    font-size: medium;
}

.action-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
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
