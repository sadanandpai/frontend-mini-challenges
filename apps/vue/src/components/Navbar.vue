<template>
  <nav-bar
    :titleText="title"
    :backUrl="backURL"
    :homeUrl="homeURL"
    :sourceCodeLink="vueSourceCodeLink"
  />
</template>

<script setup lang="ts">
import '@fmc/components';
const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;

// import { logo } from '@fmc/assets/images';
const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/vue` : `/${VITE_PATH}/#/vue/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;
const sourceCodeBaseURL =
  'https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/vue/src/challenges/';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const vueSourceCodeLink = `${sourceCodeBaseURL}${props.link}`;
</script>
