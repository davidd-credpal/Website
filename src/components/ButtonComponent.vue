<template>
  <button
    class="bgPrimaryButton hover:bg-blue-700 text-white font-bold not-italic text-sm py-4 px-4 rounded-sm"
    type="submit"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: ["buttonText"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
