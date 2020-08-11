<template>
  <span>
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white font-normal py-4 px-4 rounded-sm"
      type="submit"
    >
      {{ buttonText }}
    </button>
  </span>
</template>

<script>
export default {
  name: "ButtonComponent",
  data() {
    return {
      buttonText: "Get Started"
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  background-color: rgba(39, 79, 237, var(--bg-opacity));
}
</style>
