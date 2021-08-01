<template>
  <h1 class="text-center">All Resources</h1>
  <ul class="all-resources" v-if="allResources.length > 0">
    <Resource
      v-for="resource in allResources"
      :id="resource.id"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
      @delete-action="deleteHandler"
    />
  </ul>
  <div class="center h-70" v-else>
    <h3>Start adding new resources.</h3>
  </div>
</template>

<script>
import Resource from "./Resource.vue";

export default {
  name: "AllResources",
  components: {
    Resource,
  },
  inject: ["allResources"],
  methods: {},
};
</script>

<style scoped>
.all-resources {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

h1 {
  text-align: center;
  margin-top: 1rem;
  color: rgb(2, 61, 71);
}

.h-70 {
  height: 70vh;
}
</style>
