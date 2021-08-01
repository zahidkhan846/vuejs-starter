<template>
  <li>
    <base-card>
      <header class="list-header">
        <h3>{{ title }}</h3>
        <button class="btn danger" @click="deleteAction">Delete</button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">Read More</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  name: "Resource",
  props: {
    id: String,
    title: String,
    description: String,
    link: String,
  },
  inject: ["deleteResource"],
  emits: ["delete-action"],
  methods: {
    deleteAction() {
      this.deleteResource(this.id);
    },
  },
};
</script>

<style scoped>
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  text-transform: uppercase;
  color: rgb(123, 136, 10);
  font-size: 1.6rem;
}

p {
  line-height: 1.7;
  margin: 0.75rem 0;
  font-size: 1.1rem;
  font-weight: 300;
}

nav a {
  color: rgb(16, 128, 165);
}

nav a:hover {
  color: rgb(12, 60, 77);
}
</style>
