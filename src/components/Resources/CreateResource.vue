<template>
  <base-alert v-if="inputError" title="Invalid Input!" @close="handleOk">
    <template #default>
      <p>Input fields must be valid, and must not me empty.</p>
    </template>
    <template #menu>
      <button @click="handleOk" class="btn primary">Okay</button>
    </template>
  </base-alert>
  <h1>Create a new resource</h1>
  <form @submit.prevent="handleAddResource" class="center">
    <base-card>
      <h3>Start Adding</h3>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" ref="titleRef" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" rows="5" ref="descRef"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="text" name="link" ref="linkRef" />
      </div>
      <div class="form-control btn-control">
        <button class="btn form-btn" type="submit">Add Resource</button>
      </div>
    </base-card>
  </form>
</template>

<script>
import BaseAlert from "../UI/BaseAlert.vue";
export default {
  components: { BaseAlert },
  name: "CreateResource",
  data() {
    return {
      inputError: false,
    };
  },
  inject: ["addNewResource"],
  methods: {
    handleAddResource() {
      const title = this.$refs.titleRef.value;
      const description = this.$refs.descRef.value;
      const link = this.$refs.linkRef.value;

      if (title.trim() == "" || description.trim() == "" || link.trim() == "") {
        this.inputError = true;
        return;
      }
      const newResource = { title, description, link };

      this.addNewResource(newResource);
    },
    handleOk() {
      this.inputError = false;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 1rem;
  color: rgb(9, 128, 108);
  font-size: 2.5rem;
}

h3 {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: gold;
}

form {
  margin-top: 1rem;
}

.form-control label {
  display: block;
  font: inherit;
  margin-bottom: 0.25rem;
}

.form-control input,
.form-control textarea {
  width: 100%;
  padding: 0.25rem 0.5rem;
  font: inherit;
  margin-bottom: 1rem;
  border: 1px solid lightgrey;
  outline: none;
}

.form-control input:focus,
.form-control textarea:focus {
  border: 1px solid black;
}

.form-btn {
  background-color: #ffd700;
}

.btn-control {
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 0;
}
</style>
