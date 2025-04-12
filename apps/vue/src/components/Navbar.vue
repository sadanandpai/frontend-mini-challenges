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
import { onMounted } from 'vue';
const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;

// import { logo } from '@fmc/assets/images';

interface ChallengeModalElement extends HTMLElement {
  showModal: (options: { title: string; description: string }) => void;
}

const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/vue` : `/${VITE_PATH}/#/vue/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;
const sourceCodeBaseURL =
  'https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/vue/src/challenges/';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  sourceCodeLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const vueSourceCodeLink = `${sourceCodeBaseURL}${props.sourceCodeLink}`;
onMounted(() => {
  let modal = document.querySelector('challenge-modal') as ChallengeModalElement;
  if (!modal) {
    modal = document.createElement('challenge-modal') as ChallengeModalElement;
    document.body.appendChild(modal);
  }
  const openBtn = document.querySelector('.open-modal-btn');
  if (openBtn && modal?.showModal) {
    openBtn.addEventListener('click', () => {
      modal.showModal({
        title: props.title,
        description: props.description ?? '',
      });
    });
  }
});
</script>
