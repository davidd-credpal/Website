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
          <p class="text-gray-500 text-left not-italic text-sm leading-relaxed">
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
          <ul class="xl:mx-20 xl:whitespace-no-wrap text-gray-500 ">
            <li class="text-sm mb-3">
              <a href="/about">About us</a>
            </li>
            <li class="text-sm mb-3">
              <a href="#">Button2</a>
            </li>
            <li class="text-sm mb-3">
              <a href="/pricing">Pricing</a>
            </li>
            <li class="text-sm mb-3">
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
          <ul class="xl:mx-20 xl:whitespace-no-wrap text-gray-500 ">
            <li class="text-sm mb-3">
              <a href="/about">Term of Use</a>
            </li>
            <li class="text-sm mb-3">
              <a href="#">Privacy policy</a>
            </li>
            <li class="text-sm mb-3">
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
              class="text-sm text-gray-500  mb-3 xl:mx-2 xl:whitespace-no-wrap"
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
          <ul
            class="xl:mx-6 xl:whitespace-no-wrap text-gray-500 flex justify-between items-center"
          >
            <li
              v-for="icon in socialMediaIcons"
              :key="icon.name"
              v-html="icon.svgIcon"
              class="text-sm mb-3"
            ></li>
          </ul>
          <div class="py-6">
            <h3
              class="not-italic text-white text-xl xl:text-base xl:mx-6 xl:whitespace-no-wrap leading-none font-bold"
            >
              Contact
            </h3>
          </div>
          <small
            class="mb-3 xl:mx-6 xl:whitespace-no-wrap text-sm not-italic font-light text-gray-500 "
          >
            <a href="mailto:hello@credpal.com">hello@credpal.com</a>
          </small>
        </div>
      </div>
      <div class="divide-y divide-gray-400">
        <div class="text-center py-8"></div>
        <div class="text-center py-0"></div>
      </div>
      <div class="xl:py-10 text-gray-500 ">
        <div class="grid grid-cols-12 ">
          <div class="col-span-6">
            <small class="xl:text-xs"
              >Copyright © 2020 • All Rights Reserved</small
            >
          </div>
          <div class="col-span-6 text-right ">
            <div>
              <!-- Back to Top -->
              <button class="focus:outline-none hover:text-white hover:font-semibold" @click="backToTopButton">
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

                <span class="xl:text-xs font-light not-italic">
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
      socialMediaIcons: [
        {
          name: "Facebook Icon",
          svgIcon: `<a href="#"><svg width="32" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5" filter="url(#filter0_d)">
          <path d="M28 12C28 5.3736 22.6264 0 16 0C9.3736 0 4 5.3736 4 12C4 18.6264 9.3736 24 16 24C16.0705 24 16.1406 23.9985 16.2109 23.9973V14.6558H13.6328V11.6512H16.2109V9.44019C16.2109 6.87598 17.7763 5.48035 20.0637 5.48035C21.159 5.48035 22.1005 5.56201 22.375 5.59845V8.27838H20.7977C19.5533 8.27838 19.3124 8.86981 19.3124 9.73755V11.6512H22.2878L21.9 14.6558H19.3124V23.5364C24.3282 22.0984 28 17.4774 28 12Z" fill="white"/>
          </g>
          <defs>
          <filter id="filter0_d" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          </defs>
          </svg></a>`,
        },
        {
          name: "Twitter Icon",
          svgIcon: `<a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM17.4791 9.35632C17.4844 9.47443 17.4869 9.59308 17.4869 9.71228C17.4869 13.3519 14.7166 17.5488 9.65021 17.549H9.65039H9.65021C8.09473 17.549 6.64728 17.0931 5.42834 16.3118C5.64386 16.3372 5.86322 16.3499 6.08533 16.3499C7.37585 16.3499 8.56348 15.9097 9.50629 15.1708C8.30054 15.1485 7.28394 14.3522 6.93311 13.2578C7.10101 13.29 7.27368 13.3076 7.45074 13.3076C7.70215 13.3076 7.94568 13.2737 8.17712 13.2105C6.91681 12.9582 5.96741 11.8444 5.96741 10.5106C5.96741 10.4982 5.96741 10.487 5.96777 10.4755C6.33893 10.6818 6.76337 10.806 7.21527 10.8199C6.47571 10.3264 5.98956 9.48285 5.98956 8.52722C5.98956 8.02258 6.12598 7.5498 6.36255 7.14276C7.72083 8.80939 9.75073 9.90546 12.0399 10.0206C11.9927 9.81885 11.9683 9.60864 11.9683 9.39258C11.9683 7.87207 13.2019 6.63849 14.723 6.63849C15.5153 6.63849 16.2308 6.97339 16.7335 7.50879C17.361 7.38501 17.9502 7.15576 18.4825 6.84027C18.2765 7.48315 17.84 8.02258 17.2712 8.36371C17.8284 8.29706 18.3594 8.14929 18.8529 7.92993C18.4843 8.48236 18.0168 8.96759 17.4791 9.35632Z" fill="white"/>
          </svg></a>`,
        },
        {
          name: "Instagram Icon",
          svgIcon: `<a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
          <path d="M14.2969 12C14.2969 13.2686 13.2686 14.2969 12 14.2969C10.7314 14.2969 9.70312 13.2686 9.70312 12C9.70312 10.7314 10.7314 9.70312 12 9.70312C13.2686 9.70312 14.2969 10.7314 14.2969 12Z" fill="white"/>
          <path d="M17.3716 7.93597C17.2612 7.63678 17.085 7.36597 16.8561 7.14368C16.6339 6.91479 16.3632 6.73865 16.0638 6.62823C15.821 6.53394 15.4563 6.42169 14.7845 6.39111C14.0577 6.35797 13.8398 6.35083 12 6.35083C10.16 6.35083 9.94208 6.35779 9.21552 6.39093C8.5437 6.42169 8.17877 6.53394 7.93616 6.62823C7.63678 6.73865 7.36597 6.91479 7.14386 7.14368C6.91498 7.36597 6.73883 7.6366 6.62823 7.93597C6.53394 8.17877 6.42169 8.5437 6.39111 9.21552C6.35797 9.94208 6.35083 10.16 6.35083 12C6.35083 13.8398 6.35797 14.0577 6.39111 14.7845C6.42169 15.4563 6.53394 15.821 6.62823 16.0638C6.73883 16.3632 6.91479 16.6339 7.14368 16.8561C7.36597 17.085 7.6366 17.2612 7.93597 17.3716C8.17877 17.4661 8.5437 17.5783 9.21552 17.6089C9.94208 17.642 10.1598 17.649 11.9998 17.649C13.84 17.649 14.0579 17.642 14.7843 17.6089C15.4561 17.5783 15.821 17.4661 16.0638 17.3716C16.6648 17.1398 17.1398 16.6648 17.3716 16.0638C17.4659 15.821 17.5781 15.4563 17.6089 14.7845C17.642 14.0577 17.649 13.8398 17.649 12C17.649 10.16 17.642 9.94208 17.6089 9.21552C17.5783 8.5437 17.4661 8.17877 17.3716 7.93597ZM12 15.5381C10.0457 15.5381 8.46149 13.9541 8.46149 11.9998C8.46149 10.0455 10.0457 8.46149 12 8.46149C13.9541 8.46149 15.5383 10.0455 15.5383 11.9998C15.5383 13.9541 13.9541 15.5381 12 15.5381ZM15.6782 9.1485C15.2216 9.1485 14.8513 8.77826 14.8513 8.32159C14.8513 7.86493 15.2216 7.49469 15.6782 7.49469C16.1349 7.49469 16.5051 7.86493 16.5051 8.32159C16.5049 8.77826 16.1349 9.1485 15.6782 9.1485Z" fill="white"/>
          <path d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM18.8491 14.8409C18.8157 15.5744 18.6991 16.0752 18.5288 16.5135C18.1708 17.4391 17.4391 18.1708 16.5135 18.5288C16.0754 18.6991 15.5744 18.8156 14.8411 18.8491C14.1063 18.8826 13.8715 18.8906 12.0002 18.8906C10.1287 18.8906 9.8941 18.8826 9.15912 18.8491C8.42578 18.8156 7.9248 18.6991 7.48663 18.5288C7.02667 18.3558 6.61029 18.0846 6.26605 17.7339C5.91559 17.3899 5.64441 16.9733 5.47137 16.5135C5.30109 16.0754 5.18445 15.5744 5.15112 14.8411C5.11725 14.1061 5.10938 13.8713 5.10938 12C5.10938 10.1287 5.11725 9.89392 5.15094 9.15912C5.18427 8.4256 5.30072 7.9248 5.47101 7.48645C5.64404 7.02667 5.91541 6.61011 6.26605 6.26605C6.61011 5.91541 7.02667 5.64423 7.48645 5.47119C7.9248 5.3009 8.4256 5.18445 9.15912 5.15094C9.89392 5.11743 10.1287 5.10938 12 5.10938C13.8713 5.10938 14.1061 5.11743 14.8409 5.15112C15.5744 5.18445 16.0752 5.3009 16.5135 5.47101C16.9733 5.64404 17.3899 5.91541 17.7341 6.26605C18.0846 6.61029 18.356 7.02667 18.5288 7.48645C18.6993 7.9248 18.8157 8.4256 18.8492 9.15912C18.8828 9.89392 18.8906 10.1287 18.8906 12C18.8906 13.8713 18.8828 14.1061 18.8491 14.8409Z" fill="white"/>
          </g>
          </svg></a>`,
        },
        {
          name: "LinkedIn Icon",
          svgIcon: `<a href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM8.51294 18.1406H5.59039V9.34808H8.51294V18.1406ZM7.05176 8.14746H7.03271C6.052 8.14746 5.41772 7.47235 5.41772 6.6286C5.41772 5.76581 6.07141 5.10938 7.07117 5.10938C8.07092 5.10938 8.68616 5.76581 8.7052 6.6286C8.7052 7.47235 8.07092 8.14746 7.05176 8.14746ZM19.051 18.1406H16.1288V13.4368C16.1288 12.2547 15.7057 11.4485 14.6483 11.4485C13.8409 11.4485 13.3601 11.9923 13.1488 12.5173C13.0715 12.7051 13.0527 12.9677 13.0527 13.2305V18.1406H10.1303C10.1303 18.1406 10.1686 10.173 10.1303 9.34808H13.0527V10.593C13.441 9.9939 14.1359 9.14172 15.6865 9.14172C17.6093 9.14172 19.051 10.3984 19.051 13.099V18.1406Z" fill="white"/>
          </svg></a>`,
        },
      ],
    };
  },
  methods: {
    // scroll to the top of the window when function is called
    backToTopButton: function() {
      // scroll options to specify scroll behavior and position
      var scrollOptions = {
        top: 0,
        behavior: "smooth",
      };
      // pass scrollOptions to the window scrollTo API as an arg
      window.scrollTo(scrollOptions);
    },
  },
};
</script>

<style lang="scss" scoped>
#footerTextColor {
  background-color: black;
  opacity: 0.95;
}
</style>
