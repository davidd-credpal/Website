<template>
  <div id="app">
    <!--Business Navigation component -->
    <BusinessHeaderComponent />
    <section class="xl:pt-24 bg-white imageHeaderBackground w-full h-full">
      <div class="container mx-auto md:pt-2">
        <div class="flex items-center justify-between pt-6">
          <div>
            <h4>CredPal Business</h4>
          </div>
          <div class="">
            <img src="images/user-dashboard-background.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto pt-2">
      <h2>Hi ejeleod</h2>
    </section>
  </div>
</template>

<script>
import BusinessHeaderComponent from "@/components/BusinessHeaderComponent.vue";
export default {
  name: "Business",
  components: {
    BusinessHeaderComponent,
  },
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
