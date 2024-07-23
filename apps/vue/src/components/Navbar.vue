<template>
  <nav class="navbar">
    <div class="left">
      <a :href="backURL" class="back"> &lt; </a>
      <a class="logo" :href="homeURL">
        <img :src="logo" alt="logo" />
      </a>
    </div>

    <h1>{{ title }}</h1>

    <div class="right">
      <div class="source_code">
        <a target="_blank" rel="noreferrer" :href="sourceCodeLink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
          Source code
        </a>
      </div>
      <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="github repo"
          class="github"
        />
      </a>
      <div id="responsive-nav">
        <div class="hamburger">
          <input type="checkbox" />
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <section id="menu">
            <ul>
              <a :href="sourceCodeLink" target="blank">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-external-link"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                  Source code
                </li>
              </a>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { logo } from '@fmc/assets/images';
const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;
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

const sourceCodeLink = `${sourceCodeBaseURL}${props.link}`;
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
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    flex: 1;
    text-align: right;

    .source_code {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 1rem;

      a {
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
      }

      a:hover {
        color: var(--text-link);
      }
    }

    .github {
      width: 30px;
      height: 30px;
      vertical-align: text-bottom;
    }

    #responsive-nav {
      display: none;
    }
  }
}

@media (max-width: 640px) {
  .right {
    .source_code {
      display: none !important;
    }

    /* responsive navbar */
    #responsive-nav {
      display: block !important;
      position: relative;
      margin-left: 1rem;
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      gap: 0.25rem;

      input {
        width: 1.5rem;
        height: 1.5rem;
        opacity: 0;
        position: absolute;
        z-index: 2;
        cursor: pointer;
      }

      div.line {
        height: 4px;
        width: 2rem;
        background-color: #0e0615;
        border-radius: 7px;
        transform-origin: 4px 0px;
        position: relative;
        z-index: 1;

        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      }

      input:checked ~ div.line:nth-child(2) {
        transform: rotate(45deg) translate(1px, -1px);
      }

      input:checked ~ div.line:nth-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
        background-color: rgb(204, 204, 204);
      }

      input:checked ~ div.line:nth-child(4) {
        transform: rotate(-45deg) translate(-2px, 0px);
      }
    }

    #menu {
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      background-color: #ffffff;
      padding: 1rem;
      transform: translateX(100%);
      transition: transform 0.5s cubic-bezier(0.51, 0.92, 0.24, 1.15);
      padding-top: 4rem;
      box-shadow: -4px 5px 22px -6px rgba(0, 0, 0, 0.1);

      ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
      }

      ul a {
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        gap: 0.25rem;
      }

      ul a:hover {
        color: var(--text-link);
      }

      ul li {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        margin-bottom: 1rem;
        gap: 0.25rem;
      }
    }

    .hamburger input:checked ~ #menu {
      transform: none;
    }
  }
}
</style>
