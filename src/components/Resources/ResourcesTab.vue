<template>
  <div>
    <button
      :class="{ active: activeTab === 'all-resources' }"
      @click="setActiveTab('all-resources')"
    >
      All Resources
    </button>
    <button
      :class="{ active: activeTab === 'create-resource' }"
      @click="setActiveTab('create-resource')"
    >
      Create New
    </button>
  </div>
  <keep-alive>
    <component :is="activeTab"></component>
  </keep-alive>
</template>

<script>
import AllResources from "./AllResources.vue";
import CreateResource from "./CreateResource.vue";

export default {
  name: "ResourcesTab",
  components: {
    AllResources,
    CreateResource,
  },
  data() {
    return {
      activeTab: "all-resources",
      allResources: [
        {
          id: "1",
          title: "Official guide",
          description: "This is the official documentation for vue.js",
          link: "https://vuejs.org",
        },
        {
          id: "2",
          title: "Official vue tool",
          description: "This is the official CLI for vue.js",
          link: "https://cli.vuejs.org",
        },
      ],
    };
  },
  provide() {
    return {
      allResources: this.allResources,
      addNewResource: this.addNewResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    addNewResource(resource) {
      const newResource = {
        id: new Date().toISOString(),
        title: resource.title,
        description: resource.description,
        link: resource.link,
      };

      this.allResources.unshift(newResource);
      this.activeTab = "all-resources";
    },
    deleteResource(resourceId) {
      const resourceIndex = this.allResources.findIndex(
        (resource) => resource.id === resourceId
      );
      this.allResources.splice(resourceIndex, 1);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  background-color: black;

  position: sticky;
  top: 4rem;
  left: 0;
}

button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  font: inherit;
  background-color: #111;
  color: #fff;
}

.active {
  background-color: #fff;
  color: #111;
}
</style>
