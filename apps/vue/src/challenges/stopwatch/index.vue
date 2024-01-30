<template>
    <div class="stopwatch">
        <div class="timer">
            <span>{{ time.hour.toString().padStart(2, "0") }}</span>&nbsp;:&nbsp;
            <span>{{ time.min.toString().padStart(2, "0") }}</span>
            &nbsp;:&nbsp;
            <span>{{ time.sec.toString().padStart(2, "0") }}</span>
        </div>
        <div class="flex-center">
            <button @click="startTimer" :disabled="Boolean(intervalID)">Start</button>
            <button @click="stop" :disabled="!intervalID">Stop</button>
            <button @click="resetTimer" :disabled="isResetDisabled">Reset</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const time = ref({
    hour: 0,
    min: 0,
    sec: 0,
});

const intervalID = ref(0);

// Local state value update
const updateTimer = () => {
    let { hour = 0, min = 0, sec = 0 } = { ...time.value };

    if (sec < 59) {
        sec = sec + 1;
    } else {
        min = min + 1;
        sec = 0;
    }

    if (min === 60) {
        min = 0;
        hour = hour + 1;
    }

    time.value = { min, hour, sec };
};

// Start button click
const startTimer = () => {
    if (intervalID.value) {
        return;
    }

    intervalID.value = setInterval(updateTimer, 1000);
};

// Stop button click
const stop = () => {
    if (!intervalID.value) {
        return;
    }
    clearInterval(intervalID.value);
    intervalID.value = 0;
};

// Reset button click
const resetTimer = () => {
    clearInterval(intervalID.value);
    intervalID.value = 0;

    time.value = {
        hour: 0,
        min: 0,
        sec: 0,
    };
};

// determine disabled state of reset button
const isResetDisabled = computed(() => {
    if (!intervalID) {
        return true
    }

    const { hour = 0, min = 0, sec = 0 } = time.value;
    return !(hour > 0 || min > 0 || sec > 0);

})
</script>

<style scoped>
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.timer {
    padding: 30px 30px 30px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    font-size: 50px;
    margin: 10px 0;
}

button {
    margin: 0 30px;
    padding: 10px;
    border-radius: 8px;
    background: #17a2b6;
    color: #fff;
}
</style>
