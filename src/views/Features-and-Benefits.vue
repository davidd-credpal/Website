<template>
  <div id="app">
    <!--Business Navigation component -->
    <BusinessHeaderComponent />

    <section class="xl:pt-20 bg-white imageHeaderBackground w-full h-full">
      <div class="container mx-auto pt-6 md:pt-0 md:pb-32 xl:pb-0">
        <div
          class="pt-4 md:pt-16 xl:pt-12 xl:px-16 md:px-8 px-2 flex flex-row flex-wrap md:flex-no-wrap items-center justify-between "
        >
          <div class="xl:mb-40 md:w-1/2 mb-0">
            <h2
              class="py-4 xl:pr-0 md:pr-32 text-4xl md:text-4xl xl:text-6xl font-black not-italic leading-tight"
            >
              Features & Benefits
            </h2>
            <h4
              class="text-xl xl:text-2xl pr-4 xl:pr-40 not-italic font-normal leading-normal"
            >
              Stay on top of company spending. In one place. In real-time
            </h4>
            <p class="py-4 not-italic font-light text-base text-justify">
              CredPal is company spending solution that everyone in your company
              will love. Finally, you can have better control over all spending,
              go fully paperless and make your employees happier.
            </p>
          </div>
          <div class="xl:mb-40 w-1/2">
            <img src="../../public/icons/benefit.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="advanced-expense-section w-full">
      <div class="container mx-auto pt-6 md:pt-0 md:pb-32 xl:pb-0">
        <div
          class="pt-4 md:pt-16 xl:pt-12 xl:px-16 md:px-8  px-2 flex flex-row flex-wrap md:flex-no-wrap items-center justify-between "
        >
          <div class="w-1/2">
            <img src="../../public/icons/advanced-expense-mgt.svg" alt="" />
          </div>
          <div class="w-full xl:mb-40 xl:pt-8 md:w-1/2 mb-0 pr-1">
            <h4
              class="pt-2 pb-2 text-primary not-italic font-normal text-lg leading-normal"
            >
              Advanced expense management
            </h4>
            <h2
              class="text-4xl md:text-5xl xl:text-5xl not-italic font-black leading-tight"
            >
              A complete insight into your company expenses
            </h2>
            <p class=" text-base not-italic font-normal leading-normal">
              No more waiting for end of month bank statements or expense
              reports to arrive. A transparent and real-time view of
              transactions gives you access to the full picture of company
              spending.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BusinessHeaderComponent from "@/components/BusinessHeaderComponent.vue";
export default {
  name: "Features and Benefits",
  components: {
    BusinessHeaderComponent,
  },
  data() {
    return {};
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
.advanced-expense-section {
  background-color: #f9faff;
}
</style>
