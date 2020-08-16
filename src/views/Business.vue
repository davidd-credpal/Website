<template>
  <div id="app">
    <!--Business Navigation component -->
    <BusinessHeaderComponent />
    <section class="xl:pt-24 imageHeaderBackground w-full h-full">
      <!-- <img src="../../public/images/header-bg-image.png" alt=""> -->
      <div class="container mx-auto md:pt-2">
        hi kaijdjeeiejekdnwdnwfionffm;lwnwm
      </div>
    </section>
  </div>
</template>

<script>
import BusinessHeaderComponent from "@/components/BusinessHeaderComponent.vue";
export default {
  name: "Business",
  components: {
    BusinessHeaderComponent
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Axiforma", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
}
.imageHeaderBackground {
  // background: #ffffff;
  background-image: url("../../public/images/header-bg-image.png");
  background-size: 100% 100%;
}
</style>
