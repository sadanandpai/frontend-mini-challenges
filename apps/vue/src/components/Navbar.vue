<template>
  <nav class="navbar">
    <div class="left">
      <a :href="backURL" class="back"> &lt; </a>
      <a class="logo" :href="homeURL">
        <img
          src="https://github.com/sadanandpai/frontend-mini-challenges/raw/main/shared/assets/core/logo.png"
          alt="logo"
        />
      </a>
    </div>

    <h1>{{ title }}</h1>

    <div class="right">
      <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="github repo"
          class="github"
        />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;
const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/vue` : `/${VITE_PATH}/#/vue/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  background: linear-gradient(180deg, lavenderblush 0%, white 100%);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 10%);

  .left {
    display: flex;
    flex: 1;
    gap: 0.5rem;
    align-items: center;

    .back {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      color: black;
      transform: scaleY(2);
    }

    .logo {
      display: flex;
      flex-grow: 1;
      gap: 0.5rem;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
      }

      span {
        font-size: 1.2rem;
        font-weight: 500;
        color: #000;
      }
    }
  }

  h1 {
    margin: 0;
  }

  .right {
    flex: 1;
    text-align: right;

    .github {
      width: 30px;
      height: 30px;
      vertical-align: text-bottom;
    }
  }
}
</style>
