<template>
  <header>
    <div class="logo">
      <img src="../../assets/icloud.png" alt="logo" />
    </div>
    <nav>
      <a href="https://www.codewithzahid.com" target="_blank">Learn More</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  background-color: darkgoldenrod;
  height: 4rem;
  position: sticky;
  top: 0;
  left: 0;
}

.logo img {
  width: 3rem;
}

nav a {
  color: darkblue;
}
</style>
