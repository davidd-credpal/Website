<template>
  <div class="">
    <PersonalHeaderComponent />
    <section class="md:pt-20 container mx-auto">
      <!-- Two columns -->
      <section class="py-8 px-6 md:py-10 md:px-0">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-10"
        >
          <div class="mr-10 md:mr-0 md:py-8 mb-6 xl:pl-16 xl:pt-12">
            <h1 class="md:text-6xl text-4xl font-black not-italic leading-snug">
              CredPal <span>Card<sup>&trade;</sup></span>
              <!-- <span class="font-normal md:text-6xl xl:text-5xl xl:font-medium">
                <sup class="">&trade;</sup>
              </span> -->
              The modern Consumer Credit Card
            </h1>
            <p
              class="text-base md:text-lg font-normal leading-normal text-justify mt-4 xl:mt-8"
            >
              A card designed to help you meet your most important obligations
              when you need to and never keeps you in debt.
            </p>
          </div>
          <div class="mr-10 md:mr-0 mb-6 md:ml-10 py-12">
            <div class=" hidden md:block">
              <!-- just a test -->
              <span class="flex items-center">
                <svg
                  class="mr-2"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.04"
                    cx="11.5"
                    cy="11.5"
                    r="11.5"
                    fill="black"
                  />
                  <path
                    d="M12.0868 13.9179H10.8215L10.723 6H12.1929L12.0868 13.9179ZM10.6699 16.3274C10.6699 16.1001 10.7381 15.9106 10.8745 15.7591C11.0159 15.6025 11.223 15.5242 11.4958 15.5242C11.7686 15.5242 11.9757 15.6025 12.1171 15.7591C12.2586 15.9106 12.3293 16.1001 12.3293 16.3274C12.3293 16.5547 12.2586 16.7441 12.1171 16.8956C11.9757 17.0421 11.7686 17.1154 11.4958 17.1154C11.223 17.1154 11.0159 17.0421 10.8745 16.8956C10.7381 16.7441 10.6699 16.5547 10.6699 16.3274Z"
                    fill="black"
                  />
                </svg>
                <div class="flex items-center ">
                  <p class="text-xs font-thin pr-1">Your card is not a loan</p>
                  &#8209;
                  <p class="text-tiny font-medium pl-1">
                    Never incure charges nor interest when not in use
                  </p>
                </div>
              </span>
            </div>
            <img
              class="md:w-full"
              src="images/credpal-card.png"
              alt="Modern Consumer Credit Card"
            />
          </div>
        </div>
      </section>
    </section>
    <section class="bg-white bg-opacity-80">
      <div class="box-container p-8 items-center w-full bg-white">
        <p
          class="flex sm:justify-center text-center mb-8 font-light text-black text-tiny sm:text-center"
        >
          We’ve got you in mind, offering several cash-backs & prestigious
          points everytime you use your card
        </p>
        <div class="container mx-auto flex flex-row px-10">
          <div class="w-48 h-20 bg-gray-900 mr-4 rounded box"></div>
          <div class="w-48 h-20 bg-gray-900 mr-4 rounded box"></div>
          <div class="w-48 h-20 bg-gray-900 mr-4 rounded box"></div>
          <div class="w-48 h-20 bg-gray-900 mr-4 rounded box"></div>
          <div class="w-48 h-20 bg-gray-900 mr-4 rounded box"></div>
          <div class="w-48 h-20 bg-gray-900 mr-4 rounded box"></div>
          <div class="w-48 h-20 bg-gray-900 mr-4 rounded box"></div>
        </div>
      </div>
      <div class="mt-10 md:px-24 px-6 md:py-8 w-full">
        <!-- Full width column -->
        <div class="flex my-4">
          <div class="md:w-3/4 xl:w-2/4 w-screen">
            <h1
              class="text-3xl md:text-4xl lg:text-6xl font-black leading-normal mb-4"
            >
              Take care of your needs when you need to.
            </h1>
            <p
              class="text-xl md:text-2xl my-4 font-light not-italic md:whitespace-no-wrap"
            >
              Your important needs don’t have to wait for salary.
            </p>
          </div>
        </div>
        <!-- usecase list-->
        <div class="my-0 md:my-20">
          <div
            class="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:my-8"
          >
            <div class="mr-24 mb-10">
              <h3
                class=" not-italic font-bold text-primary leading-6 capitalize"
              >
                Grocery Shopping
              </h3>
              <p
                class="not-italic text-base font-light leading-6 text-black my-4"
              >
                CredPal cards are here to help you save on purchases. Your
                chart.
              </p>
            </div>
            <div class="mr-24 mb-10">
              <h3
                class=" not-italic font-bold text-primary leading-6 capitalize"
              >
                Data & Voice
              </h3>
              <p
                class="not-italic text-base font-light leading-6 text-black my-4"
              >
                CredPal cards are here to help you save on purchases. Your
                chart.
              </p>
            </div>
            <div class="mr-24 mb-10">
              <h3
                class=" not-italic font-bold text-primary leading- capitalize"
              >
                Electricity & Cable TV
              </h3>
              <p
                class="not-italic text-base font-light leading-6 text-black my-4"
              >
                CredPal cards are here to help you save on purchases. Your
                chart.
              </p>
            </div>
          </div>
          <div
            class="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:my-8"
          >
            <div class="mr-24 mb-10">
              <h3
                class=" not-italic font-bold text-primary leading-6 capitalize"
              >
                Flights & Hotels
              </h3>
              <p
                class="not-italic text-base font-light leading-6 text-black my-4"
              >
                CredPal cards are here to help you save on purchases. Your
                chart.
              </p>
            </div>
            <div class="mr-24 mb-10">
              <h3
                class=" not-italic font-bold text-primary leading-6 capitalize"
              >
                Dining
              </h3>
              <p
                class="not-italic text-base font-light leading-6 text-black my-4"
              >
                CredPal cards are here to help you save on purchases. Your
                chart.
              </p>
            </div>
            <div class="mr-24 mb-10">
              <h3
                class=" not-italic font-bold text-primary leading- capitalize"
              >
                Insurance
              </h3>
              <p
                class="not-italic text-base font-light leading-6 text-black my-4"
              >
                CredPal cards are here to help you save on purchases. Your
                chart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- instant personal loan section -->
    <section class="bg-section-instant-loan h-auto md:py-12 w-full md:px-24">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-1 md:my-10 "
      >
        <div class="m-8 sm:mb-0 md:m-0">
          <h2
            class=" not-italic font-extrabold md:text-4xl text-2xl md:leading-6  leading-normal md:pt-16 md:pb-8"
          >
            CredPal Cash
          </h2>
          <h3
            class="not-italic font-extrabold text-3xl md:text-6xl md:leading-tight mr-2 md:mb-8 mb-2"
          >
            Need more cash than your card limit ?
          </h3>
          <p class="not-italic font-normal md:leading-6 md:text-lg text-white">
            Simply apply and get an instant personal loan of up to 5million
          </p>
        </div>
        <div class="md:m-0 mx-1">
          <img
            class="w-auto ml-0 md:ml-24"
            :src="images.src"
            :alt="images.alt"
          />
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="md:px-24 md:py-16 px-6 py-20 w-full">
        <div class="md:mt-0">
          <div class="flex md:w-2/3 w-full">
            <h1
              class="not-italic font-extrabold md:text-5xl text-3xl md:leading-normal md:mr-16 md:pl-0 md:pr-4"
            >
              More amazing benefits with your CredPal Card
            </h1>
          </div>
        </div>
      </div>
      <div class="bg-no-hidden-charges md:px-24 md:py-20 px-6 py-10 w-full">
        <p
          class="not-italic text-4xl md:text-6xl xl:text-7xl font-medium md:font-hairline md:py-4 md:tracking-normal "
        >
          No
          <span class="text-primary">Hidden </span>
          Charges — never
        </p>
      </div>
      <div class="md:px-24 md:py-16 px-6 py-10 w-full">
        <div
          class="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:my-8 md:gap-20"
        >
          <div class="mb-10">
            <i class=" top-0 items-center justify-start"
              ><img src="images/top-up-icon.png" alt="icon"
            /></i>
            <h3
              class=" not-italic font-extrabold text-base md:text-lg my-6 md:my-8"
            >
              Low Interest Rate
            </h3>
            <p class="text-base font-light leading-7">
              Assign cards to employees or contractors with custom set spending
              limits.
            </p>
          </div>
          <div class="mb-10">
            <i class=" top-0 items-center justify-start"
              ><img src="images/top-up-icon.png" alt="icon"
            /></i>
            <h3
              class=" not-italic font-extrabold text-base md:text-lg my-6 md:my-8"
            >
              Low Interest Rate
            </h3>
            <p class="text-base font-light leading-7">
              Assign cards to employees or contractors with custom set spending
              limits.
            </p>
          </div>
          <div class="mb-10">
            <i class=" top-0 items-center justify-start"
              ><img src="images/top-up-icon.png" alt="icon"
            /></i>
            <h3
              class=" not-italic font-extrabold text-base md:text-lg my-6 md:my-8"
            >
              Low Interest Rate
            </h3>
            <p class="text-base font-light leading-7">
              Assign cards to employees or contractors with custom set spending
              limits.
            </p>
          </div>
        </div>
        <div class="my-10 md:my-20"></div>
        <div
          class="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:my-8 md:gap-20"
        >
          <div class="mb-10">
            <i class=" top-0 items-center justify-start"
              ><img src="images/top-up-icon.png" alt="icon"
            /></i>
            <h3
              class=" not-italic font-extrabold text-base md:text-lg my-6 md:my-8"
            >
              Low Interest Rate
            </h3>
            <p class="text-base font-light leading-7">
              Assign cards to employees or contractors with custom set spending
              limits.
            </p>
          </div>
          <div class="mb-10">
            <i class=" top-0 items-center justify-start"
              ><img src="images/top-up-icon.png" alt="icon"
            /></i>
            <h3
              class=" not-italic font-extrabold text-base md:text-lg my-6 md:my-8"
            >
              Low Interest Rate
            </h3>
            <p class="text-base font-light leading-7">
              Assign cards to employees or contractors with custom set spending
              limits.
            </p>
          </div>
          <div class="mb-10">
            <i class=" top-0 items-center justify-start"
              ><img src="images/top-up-icon.png" alt="icon"
            /></i>
            <h3
              class=" not-italic font-extrabold text-base md:text-lg my-6 md:my-8"
            >
              Low Interest Rate
            </h3>
            <p class="text-base font-light leading-7">
              Assign cards to employees or contractors with custom set spending
              limits.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-section-savemoney-feature">
      <div class="md:px-24 md:py-24 px-6 py-20">
        <div class="flex my-4 md:mb-8">
          <div class="w-screen md:w-11/12 xl:w-10/12">
            <h1
              class="text-2xl md:text-5xl xl:text-6xl font-black leading-normal mb-4 md:mb-6"
            >
              CredPal is focused on easing your finances while helping you save
              money.
            </h1>
            <p
              class="text-lg md:text-xl xl:text-2xl  my-4 font-light not-italic xl:whitespace-no-wrap"
            >
              Unlike other cards that entice you to spend more using complicated
              rewards.
            </p>
          </div>
        </div>
        <div class="divide-y divide-black">
          <div class="md:my-0 items-center text-justify py-8"></div>
          <div class="md:my-0 items-center py-8">
            <div class="grid grid-cols-2 gap-4 md:gap-6">
              <div>
                <h1
                  class="not-italic font-extrabold text-4xl md:text-8xl xl:text-rate "
                >
                  0.5 - 5%
                </h1>
              </div>
              <div class="self-center">
                <p
                  class="not-italic font-extrabold text-xs md:text-2xl xl:text-3xl text-right leading-tight items-center md:pl-2"
                >
                  Cash back on everything purchased
                </p>
              </div>
            </div>
          </div>
          <div class="md:my-0 items-center py-4 md:py-8">
            <div class="grid grid-cols-2 gap-4 md:gap-6">
              <div>
                <h1
                  class="not-italic font-black text-4xl md:text-8xl xl:text-rate"
                >
                  15%
                </h1>
              </div>
              <div class="self-center">
                <p
                  class="not-italic font-extrabold text-xs md:text-2xl xl:text-3xl text-right leading-tight items-center md:pl-2"
                >
                  Spend reduction with CredPal SmartBuy™️
                </p>
              </div>
            </div>
          </div>
          <div class="md:my-0 items-center py-8">
            <div class="grid grid-cols-2 gap-4 md:gap-6">
              <div>
                <h3
                  class="not-italic text-xs md:text-2xl leading-tight md:pl-2 mb-2 md:mb-4 font-black"
                >
                  Recurring
                </h3>
                <h1
                  class="not-italic font-extrabold text-4xl md:text-8xl xl:text-rate leading-none md:leading-tight"
                >
                  Bills
                </h1>
              </div>
              <div class="md:pl-4 self-center">
                <p
                  class="not-italic font-extrabold text-xs md:text-2xl xl:text-3xl text-right leading-tight items-center md:pl-2"
                >
                  All bills auto-cleared based on personal preference.
                </p>
              </div>
            </div>
          </div>
          <div class="md:my-0 items-center text-justify py-8"></div>
        </div>
      </div>
    </section>
    <section class="bg-white py-8 xl:py-24  ">
      <div class="md:px-24 md:py-24 px-6 py-20  xl:pt-10 xl:pb-20">
        <div class="xl:mt-0">
          <div class="flex xl:w-3/4">
            <h1
              class="not-italic font-black md:text-6xl text-3xl md:leading-normal md:pl-0 md:pr-4"
            >
              Available deals across many of your favourites
            </h1>
          </div>
        </div>
      </div>
      <div class="xl:w-full">
        <div class="grid grid-cols-7 sm:grid-cols-7  gap-4 pr-6">
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
        </div>
        <div class="mb-3"></div>
        <div class="grid grid-cols-7 sm:grid-cols-7 w-full gap-4 pl-6">
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
          <div class="h-24 bg-gray-900 rounded box"></div>
        </div>
      </div>
    </section>

    <!-- Section Ready to Get Started -->
    <section class="bg-section-get-started xl:py-24 px-3">
      <div>
        <div class="w-full text-center">
          <h2
            class="not-italic font-extrabold xl:text-6xl  md:text-5xl text-3xl md:leading-normal md:pl-0 md:pr-4 py-4"
          >
            Ready to get started?
          </h2>
          <span class="flex items-center justify-center xl:py-4">
            <i
              ><img
                class="object-center mx-2 hidden md:inline-block"
                src="images/alert-icon.png"
                alt="Applying is quick and easy, just a few steps to getting your card."
            /></i>
            <small class="text-sm not-italic leading-none font-normal"
              >Applying is quick and easy, just a few steps to getting your
              card.</small
            >
          </span>
        </div>
        <div class="w-full text-center py-12">
          <span>
            <button
              class="xl:mx-6 md:mx-6 mb-6 bg-primary hover:bg-blue-800 text-white font-bold hover:text-white px-16 py-4 border border-blue-500 hover:border-transparent rounded-sm"
              type="submit"
            >
              Get a Card
            </button>
            <button
              class="xl:mx-6 md:mx-6 mb-6  bg-transparent hover:bg-primary  hover:font-semibold text-white font-thin px-16 py-4 border border-black hover:border-transparent rounded-sm"
              type="submit"
            >
              Contact Us
            </button>
          </span>
        </div>
      </div>
    </section>
    <!-- footer section -->
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalHeaderComponent from "@/components/PersonalHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
// import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "Personal",
  props: [],

  components: {
    PersonalHeaderComponent,
    FooterComponent
    // ButtonComponent,
  },
  data() {
    return {
      images: {
        name: "loan amount",
        src: "images/loan-amount.png",
        alt: "loan amount"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
sup {
  top: -1.4rem;
  font-size: 55%;
  line-height: 0;
  position: relative;
  vertical-align: middle;
  font-weight: 400;
  @media only screen and (max-width: 1024px) {
    top: -0.8rem;
    font-size: 87%;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    top: -1rem;
  }
}
span > button:nth-child(1) {
  background-color: rgba(39, 79, 237, var(--bg-opacity));
  color: white;
}
// span > button:nth-child(2):hover {
//   background-color: rgba(39, 79, 237, var(--bg-opacity)) !important;
//   color: #fff;
//   font-weight: 700;
// }

.bg-default {
  background-color: #eaf7ff;
}
.bg-section-get-started {
  background-color: #f8f9fb;
}
.bg-section-savemoney-feature {
  background-color: #f9fdff;
}
.bg-section-instant-loan {
  background-color: #1489f4;
  color: white;
}
.bg-no-hidden-charges {
  background-color: #fbfbfb;
}

.box-container {
  background-color: #ffffff;
  box-shadow: 0px 16px 40px rgba(20, 116, 175, 0.03);
}

.box {
  background-color: #22306b;
  opacity: 0.03;
}
</style>
