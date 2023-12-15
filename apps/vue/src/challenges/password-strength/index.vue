<template>
    <div class="app">
        <form>
            <input id="input" v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Enter the password"
                style=" width: 100%;" />
            <div>
                <input type="checkbox" id="showPassword" @click="showPassword = !showPassword">
                <label for="showPassword" style="margin-left: 5px;">Show Password</label>
            </div>
        </form>

        <div v-show="password !== ''">
            <div v-if="passwordStrength <= 1">
                <p class="passStrengthText">Very weak</p>
                <div style="width: 50px; border: 1px solid red;"></div>
            </div>
            <div v-else-if="passwordStrength == 2">
                <p class="passStrengthText">Weak</p>
                <div style="width: 100px; border: 1px solid red;"></div>
            </div>
            <div v-else-if="passwordStrength == 3">
                <p class="passStrengthText">Medium</p>
                <div style="width: 150px; border: 1px solid orange;"></div>
            </div>
            <div v-else-if="passwordStrength == 4">
                <p class="passStrengthText">Good</p>
                <div style="width: 200px; border: 1px solid blue;"></div>
            </div>
            <div v-else>
                <p class="passStrengthText">Strong</p>
                <div style="width: 250px; border: 1px solid green;"></div>
            </div>


            <h3 class="font-size-16 text-left">Create a password that:</h3>
            <ul class="text-left"
                :style="[passwordLength ? { 'padding-inline-start': '0px !important' } : { 'padding-inline-start': '22px !important' }]">
                <li :style="[passwordLength ? { 'list-style-type': 'none' } : '']">
                    <div>
                        <span v-if="eightCharacterCheckPass" class="checkMarkIcon">&#10003;</span>
                        <span v-else-if="eightCharacterCheckPass == false" class="crossMarkIcon">&#215;</span>
                        contains at least 8 characters
                    </div>
                </li>
                <li :style="[passwordLength ? { 'list-style-type': 'none' } : '']">
                    <div>
                        <span v-if="lowerCaseCheckPass" class="checkMarkIcon">&#10003;</span>
                        <span v-else-if="lowerCaseCheckPass == false" class="crossMarkIcon">&#215;</span>
                        contains at least one lowercase letter (a-z)
                    </div>
                </li>
                <li :style="[passwordLength ? { 'list-style-type': 'none' } : '']">
                    <div>
                        <span v-if="upperCaseCheckPass" class="checkMarkIcon">&#10003;</span>
                        <span v-else-if="upperCaseCheckPass == false" class="crossMarkIcon">&#215;</span>
                        contains at least one uppercase letter (A-Z)
                    </div>
                </li>
                <li :style="[passwordLength ? { 'list-style-type': 'none' } : '']">
                    <div>
                        <span v-if="numberCheckPass" class="checkMarkIcon">&#10003;</span>
                        <span v-else-if="numberCheckPass == false" class="crossMarkIcon">&#215;</span>
                        contains at least one number (0-9)
                    </div>
                </li>
                <li :style="[passwordLength ? { 'list-style-type': 'none' } : '']">
                    <div>
                        <span v-if="symbolCheckPass" class="checkMarkIcon">&#10003;</span>
                        <span v-else-if="symbolCheckPass == false" class="crossMarkIcon">&#215;</span>
                        contains at least one number symbol (!,@,#,$,%,^,&,*,?,_,~,-,(,))
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const password = ref('')
const showPassword = ref(false)

const passwordLength = computed(() => password.value.length)

const passwordStrength = computed(() => {
    let points = 0;
    if (passwordLength.value >= 4) points++;
    if ((password.value.match(/[a-z]/)) && (password.value.match(/[A-Z]/))) points++;
    if (password.value.match(/\d+/)) points++;
    if (password.value.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) points++;
    if (passwordLength.value >= 8) points++;
    if (passwordLength.value >= 12) points++;

    return points
})

const eightCharacterCheckPass = computed(() => {
    let eightCharacter = false;
    if (passwordLength.value >= 8) {
        eightCharacter = true
    }
    return eightCharacter
})


const lowerCaseCheckPass = computed(() => {
    let lowercase = false;
    if (password.value.match(/[a-z]+/) != null) {
        lowercase = true
    }
    return lowercase
})

const upperCaseCheckPass = computed(() => {
    let uppercase = false;
    if (password.value.match(/[A-Z]+/) != null) {
        uppercase = true
    }
    return uppercase
})

const numberCheckPass = computed(() => {
    let number = false;
    if (password.value.match(/[0-9]+/) != null) {
        number = true
    }
    return number
})

const symbolCheckPass = computed(() => {
    let symbol = false;
    if (password.value.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
        symbol = true
    }
    return symbol
})
</script>

<style scoped>
.app {
    margin: 10px auto;
    max-width: 480px;
}

.app form input {
    margin-top: 20px;
    padding: 10px;
    font-size: medium;
}

.passStrengthText {
    text-align: left;
    margin-bottom: 15px !important;
}

.checkMarkIcon {
    color: green;
    padding-right: 5px;
    font-size: 20px;
}

.crossMarkIcon {
    color: red;
    padding-right: 5px;
    font-size: 20px;
}
</style>
