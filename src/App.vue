<template>
  <NavHeader />
  <ResourcesTab />
</template>

<script>
import ResourcesTab from "./components/Resources/ResourcesTab.vue";
import NavHeader from "./components/Layout/NavHeader.vue";

export default {
  name: "App",
  components: {
    NavHeader,
    ResourcesTab,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap");

:root {
  --shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:after,
*:before {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
}

a {
  color: black;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  display: block;
  width: 100%;
}

.btn {
  cursor: pointer;
  display: inline-block;
  padding: 0.7rem 1.4rem;
  font: inherit;
  box-shadow: var(--shadow);
  border: none;
  outline: none;

  transition: transform 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
}

.btn:active {
  transform: scale(0.95);
}

.danger {
  background: none;
  color: rgb(240, 49, 49);
  box-shadow: none;
  border-radius: 3px;
}

.danger:hover {
  background: lightpink;
  color: rgb(252, 10, 10);
}

.primary {
  background-color: rgb(22, 177, 138);
  color: white;
  border-radius: 3px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
