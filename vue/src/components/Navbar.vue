<template>
  <nav class="navbar">
    <a class="logo" href="/frontend-mini-challenges/">
      <img src="/logo.png" alt="logo" />
      <span>Frontend Mini Challenges</span>
    </a>

    <div class="links">
      <slot />
    </div>

    <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github repo" class="github" />
    </a>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(180deg, lavenderblush 0%, white 100%);

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

  .links {
    display: none;
    gap: 2rem;
    align-items: center;
    margin-left: auto;
  }

  .github {
    width: 30px;
    height: 30px;
    vertical-align: text-bottom;
  }
}

@media screen and (width >= 768px) {
  .navbar .links {
    display: flex;
  }
}
</style>
