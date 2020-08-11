<template>
  <div id="app">
    <!--  -->
    <PersonalHeaderComponent />
  </div>
</template>

<script>
import PersonalHeaderComponent from "@/components/PersonalHeaderComponent.vue";
// import BusinessHeaderComponent from "@/components/BusinessHeaderComponent.vue";
export default {
  name: "app",
  components: {
    PersonalHeaderComponent
    // BusinessHeaderComponent
  }
};
</script>

<style lang="scss">
@import "assets/css/app";
#app {
  font-family: AxiformaBook, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
