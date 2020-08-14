<template>
  <div>
    <button
      class="bg-blue-600 hover:bg-blue-700 font-normal py-4 px-4 rounded-sm"
      type="submit"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonCTAComponent",
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
  // color: white;
}
</style>
