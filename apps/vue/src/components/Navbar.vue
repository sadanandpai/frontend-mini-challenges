<template>
  <nav class="navbar">
    <a class="logo" href="/frontend-mini-challenges/">
      <img src="https://github.com/sadanandpai/frontend-mini-challenges/raw/main/shared/assets/logo.png" alt="logo" />
      <span>Frontend Mini Challenges</span>
    </a>

    <div class="right">
      <div class="links">
        <slot />
      </div>

      <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank" class="github">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
          />
        </svg>
      </a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--bg-navbar);
  box-shadow: 0 1px 3px 0 var(--shadow-navbar), 0 1px 2px -1px var(--shadow-navbar);
  transition: all 150ms ease-in-out;

  --icon-container-size: 26px;
  --github-svg-size: 26px;

  .logo {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    img {
      width: var(--icon-container-size);
      height: var(--icon-container-size);
    }

    span {
      color: var(--text-body);
      text-align: center;
      font-weight: 500;
      font-size: 1rem;
    }
  }

  .right {
    display: flex;
    gap: 2rem;
  }

  .links {
    display: none;
  }

  .github {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-container-size);
    height: var(--icon-container-size);
    color: var(--text-body);


    & > svg {
      width: var(--github-svg-size);
      height: var(--github-svg-size);
    }
  }
}

@media screen and (width >= 768px) {
  .navbar {
    --icon-container-size: 40px;
    --github-svg-size: 30px;

    .links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .logo > span {
      font-size: 1.2rem;
    }
  }
}
</style>
