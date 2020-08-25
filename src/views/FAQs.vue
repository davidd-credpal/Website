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
              <li
                class="flex items-center py-2 font-thin hover:font-bold text-gray-600 hover:text-black hover:text-bold cursor-pointer"
              >
                <img
                  class="mr-3 pb-1 items-center"
                  :class="showImage == true ? 'hover:invisible' : 'hidden'"
                  src="../../public/icons/faqs-line.svg"
                  alt="faqs-line"
                />
                <h5 class="my-1">All Questions</h5>
              </li>
              <li
                class="flex items-center py-2 font-thin hover:font-bold text-gray-600 hover:text-black hover:text-bold cursor-pointer"
              >
                <img
                  class="mr-3 pb-1 items-center"
                  src="../../public/icons/faqs-line.svg"
                  alt="faqs-line"
                />

                Personal Credit Card
              </li>
              <li
                class="flex items-center py-2 font-thin hover:font-bold text-gray-600 hover:text-black hover:text-bold cursor-pointer"
              >
                <img
                  class="mr-3 pb-1 items-center"
                  src="../../public/icons/faqs-line.svg"
                  alt="faqs-line"
                />

                Corporate Expense Card
              </li>
            </ul>
          </aside>
          <!-- FAQs Section -->
          <div class="w-full px-20">
            <div class="faqs_item">
              <div class="flex items-center justify-between flex-row p-6">
                <h2 class="pr-40 text-xl font-bold text-black">
                  What is CredPal privacy Policy?
                </h2>
                <button
                  class="px-2 py-1 outline-none focus:outline-none text-3xl text-gray-900 hover:text-black"
                  v-show="!isOpen"
                  @click="openItem"
                >
                  -
                </button>
                <button
                  class="px-2 py-1 outline-none focus:outline-none text-3xl text-gray-900 hover:text-black"
                  v-show="isOpen"
                  @click="closeItem"
                >
                  +
                </button>
              </div>
              <div class="pt-4 pb-8 pl-8 pr-8" v-show="!isOpen">
                <p class="font-thin text-base">
                  Account statements are required to validate customer and also
                  compute a safe credit limistat em entser and also compute a
                  safe credit limit. Statements are required to validate
                  customer and also compute a safe credit unt statements are rto
                  validate customer and also comit. Uint statements are required
                  to validate customer and also compute a safe credit limit
                  here.
                </p>
              </div>
            </div>
            <div class="faqs_item my-10">
              <div class="flex items-center justify-between flex-row p-6">
                <h2 class="pr-40 text-xl font-bold text-black">
                  What is CredPal privacy Policy?
                </h2>
                <button
                  class="px-2 py-1 outline-none focus:outline-none text-3xl text-gray-900 hover:text-black"
                  v-show="!isOpen"
                  @click="openItem"
                >
                  -
                </button>
                <button
                  class="px-2 py-1 outline-none focus:outline-none text-3xl text-gray-900 hover:text-black"
                  v-show="isOpen"
                  @click="closeItem"
                >
                  +
                </button>
              </div>
              <div class="pt-4 pb-8 pl-8 pr-8" v-show="!isOpen">
                <p class="font-thin text-base">
                  Account statements are required to validate customer and also
                  compute a safe credit limistat em entser and also compute a
                  safe credit limit. Statements are required to validate
                  customer and also compute a safe credit unt statements are rto
                  validate customer and also comit. Uint statements are required
                  to validate customer and also compute a safe credit limit
                  here.
                </p>
              </div>
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
export default {
  name: "FAQs",
  components: {
    BusinessHeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      isOpen: false,
      showImage: true,
    };
  },
  methods: {
    openItem() {
      this.isOpen = true;
    },
    closeItem() {
      this.isOpen = false;
    },
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
.faqs_section {
  background: #fcfcfc;
}
</style>
