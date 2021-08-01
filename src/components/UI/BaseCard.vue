<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style scoped>
div {
  width: 500px;
  box-shadow: var(--shadow);
  padding: 1rem;
}

@media (max-width: 768px) {
  div {
    width: 450px;
  }
}
</style>
