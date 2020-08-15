<template>
  <span>
    <button
      class="bgPrimaryButton hover:bg-blue-700 text-white font-bold not-italic text-sm py-4 px-4 rounded-sm"
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
// button {
//   background-color: rgba(39, 79, 237, var(--bg-opacity));
//   color: white;
// }
</style>
