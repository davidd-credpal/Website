<template>
  <section id="footerTextColor" class="xl:pt-24">
    <div class="py-12 px-6 md:py-24 xl:py-0 xl:px-24 md:px-20 w-full">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-span-10  md:col-span-5 lg:col-span-5 xl:col-span-3">
          <div class="py-4">
            <img
              src="images/credpal-logo.png"
              class="w-auto h-auto"
              alt="credpal Inc"
            />
          </div>
          <p
            class="text-white text-left not-italic text-white text-opacity-50 text-sm leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            velit, varius in nisl aliquet, tincidunt tempor ex. Vestibulum non
            tristique dolor. Suspendisse ultrices accumsan fringilla. In massa
            metus, consectetur sit amet tincidunt eget, consectetur quis leo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            pellentesque felis. Suspendisse a mattis dui.
          </p>
        </div>
        <div class="col-span-10  md:col-span-4 lg:col-span-2 xl:col-span-2">
          <div class="py-6">
            <h3
              class="not-italic text-white text-xl xl:text-base xl:mx-20 xl:whitespace-no-wrap leading-none font-bold capitalize"
            >
              credPal
            </h3>
          </div>
          <ul class="xl:mx-20 xl:whitespace-no-wrap">
            <li class="text-sm text-gray-200 mb-3">
              <a href="/about">About us</a>
            </li>
            <li class="text-sm text-gray-200 mb-3">
              <a href="#">Button2</a>
            </li>
            <li class="text-sm text-gray-200 mb-3">
              <a href="/pricing">Pricing</a>
            </li>
            <li class="text-sm text-gray-200 mb-3">
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div class="col-span-10  md:col-span-3 lg:col-span-3 xl:col-span-2 ">
          <div class="py-6">
            <h3
              class="not-italic text-white text-xl xl:text-base xl:mx-20 xl:whitespace-no-wrap leading-none font-bold capitalize"
            >
              legal
            </h3>
          </div>
          <ul class="xl:mx-20 xl:whitespace-no-wrap">
            <li class="text-sm text-gray-200 mb-3">
              <a href="/about">Term of Use</a>
            </li>
            <li class="text-sm text-gray-200 mb-3">
              <a href="#">Privacy policy</a>
            </li>
            <li class="text-sm text-gray-200 mb-3">
              <a href="/pricing">Disclaimer</a>
            </li>
          </ul>
        </div>
        <div class="col-span-10  md:col-span-3 lg:col-span-4 xl:col-span-1 ">
          <div class="py-6">
            <h3
              class="not-italic text-white text-xl xl:text-base xl:mx-2 xl:whitespace-no-wrap leading-none font-bold capitalize"
            >
              Support
            </h3>
          </div>
          <ul>
            <li
              class="text-sm text-gray-200 mb-3 xl:mx-2 xl:whitespace-no-wrap"
            >
              <a href="/faqs">FAQs</a>
            </li>
          </ul>
        </div>
        <div
          class="col-span-10  md:col-span-3 lg:col-span-4 xl:col-span-2 xl:ml-10"
        >
          <div class="py-6">
            <h3
              class="not-italic text-white text-xl xl:text-base xl:mx-6 xl:whitespace-no-wrap leading-none font-bold"
            >
              Connect with us
            </h3>
          </div>
          <ul class="xl:mx-6 xl:whitespace-no-wrap">
            <li class="text-sm text-gray-200 mb-3">
              <a href="/about">Term of Use</a>
            </li>
            <li class="text-sm text-gray-200 mb-3">
              <a href="#">Privacy policy</a>
            </li>
            <li class="text-sm text-gray-200 mb-3">
              <a href="/pricing">Disclaimer</a>
            </li>
          </ul>
          <div class="py-6">
            <h3
              class="not-italic text-white text-xl xl:text-base xl:mx-6 xl:whitespace-no-wrap leading-none font-bold"
            >
              Contact
            </h3>
          </div>
          <small
            class="mb-3 xl:mx-6 xl:whitespace-no-wrap text-sm not-italic font-light"
            >hello@credpal.com</small
          >
        </div>
      </div>
      <div class="divide-y divide-gray-400">
        <div class="text-center py-8"></div>
        <div class="text-center py-0"></div>
      </div>
      <div class="xl:py-10">
        <div class="grid grid-cols-12">
          <div class="col-span-6">
            <small class="xl:text-xs text-black"
              >Copyright © 2020 • All Rights Reserved</small
            >
          </div>
          <div class="col-span-6 text-right ">
            <div>
              <!-- Back to Top -->
              <button class="focus:outline-none">
                <i
                  ><svg
                    class="mx-1 inline-block"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M1 5L5 1L9 5"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></i>

                <span class="text-black xl:text-xs font-light not-italic">
                  Back to Top
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComponent",
  components: {},
  data() {
    return {
      images: {
        name: "up-caret-icon",
        src: "images/up-caret.png",
        alt: "up-caret arrow"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#footerTextColor {
  color: #ffffff;
  background-color: black;
}
</style>
