<template>
  <div id="app">
    <!--Business Navigation component -->
    <BusinessHeaderComponent />
    <section class="header">
      <div class="container mx-auto px-10 py-10 md:px-16 xl:py-20">
        <div class="text-center mx-48 py-32">
          <h2 class="not-italic font-black text-5xl capitalize px-24">
            Frequently Asked Questions
          </h2>
          <div class="mx-32 py-10">
            <form class="w-full px-10">
              <div
                class="flex items-center border-b border-gray-200 py-2 content-center"
              >
                <a href=""
                  ><img
                    class="mx-6 pb-6 hover:opacity-25"
                    src="../../public/icons/search-icon.svg"
                    alt="search icon"
                /></a>
                <input
                  class="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl py-1 px-4 pb-6 leading-tight focus:outline-none"
                  type="text"
                  placeholder="What do you want to know ?"
                  aria-label="Search words"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="faqs_section">
      <div class="container mx-auto px-10 py-10 md:px-16 xl:py-20 ">
        <div class="flex flex-row">
          <aside class="w-full md:w-3/12 px-2">
            <h4 class="text-xl font-bold ">Categories</h4>
            <ul class="capitalize py-8">
              <a
                class="flex items-center py-2 font-thin active:font-bold text-gray-600 hover:text-black hover:text-bold cursor-pointer"
                href="#"
              >
                <img
                  class="mr-3 pb-1 items-center"
                  :class="showImage == true ? 'hover:invisible' : 'hidden'"
                  src="../../public/icons/faqs-line.svg"
                  alt="faqs-line"
                />
                <h5 class="my-1">All Questions</h5>
              </a>
              <a
                class="flex items-center py-2 font-thin active:font-bold text-gray-600 hover:text-black hover:text-bold cursor-pointer"
                href="#"
              >
                <img
                  class="mr-3 pb-1 items-center"
                  src="../../public/icons/faqs-line.svg"
                  alt="faqs-line"
                />

                Personal Credit Card
              </a>
              <a
                class="flex items-center py-2 font-thin hover:font-bold text-gray-600 hover:text-black hover:text-bold cursor-pointer"
                href="#"
              >
                <img
                  class="mr-3 pb-1 items-center"
                  src="../../public/icons/faqs-line.svg"
                  alt="faqs-line"
                />

                Corporate Expense Card
              </a>
            </ul>
          </aside>
          <!-- FAQs Section -->
          <div class="w-full px-20">
            <!-- FAQs component -->
            <FAQsComponent class="my-10" />
          </div>
        </div>
        <!-- divider -->
        <div class="divide divide-y">
          <div class="py-2"></div>
          <div class="py-2"></div>
        </div>
        <div class="container mx-auto px-10 py-10 md:px-16 xl:py-10">
          <div class="text-black text-center">
            <h2
              class="not-italic font-black text-2xl md:text-5xl px-0 md:px-48 xl:py-2"
            >
              Would you need any further help?
            </h2>
            <!--Button component -->
            <div class="py-6">
              <ButtonComponent :buttonText="buttonText" class="py-6 px-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script>
import BusinessHeaderComponent from "@/components/BusinessHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import FAQsComponent from "@/components/FAQsComponent.vue";
export default {
  name: "FAQs",
  // props: ["Contact Support"],
  components: {
    BusinessHeaderComponent,
    FooterComponent,
    ButtonComponent,
    FAQsComponent
  },
  data() {
    return {
      isOpen: false,
      showImage: true,
      buttonText: "Contact Support"
    };
  },
  methods: {
    openItem() {
      this.isOpen = true;
    },
    closeItem() {
      this.isOpen = false;
    }
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

::-webkit-input-placeholder,
:-ms-input-placeholder {
  font-size: 12px;
  text-align: center;
  color: #999999;
}

.faqs_item {
  background: #ffffff;
  box-shadow: 0px 0px 32px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
.faqs_item p {
  color: #555555;
}
.faqs_section {
  background: #fcfcfc;
}
</style>
