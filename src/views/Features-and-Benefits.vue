<template>
  <div id="app">
    <!--Business Navigation component -->
    <BusinessHeaderComponent />

    <section class="xl:pt-20 bg-white imageHeaderBackground w-full h-full">
      <div
        class="container mx-auto pt-6 md:pt-24 md:pb-24 px-4 xl:pb-0 xl:pt-0"
      >
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
          <div class="xl:mb-40 pb-8 md:pb-0 w-full md:w-1/2 ">
            <img src="../../public/icons/benefit.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-grey-default w-full">
      <div class="container mx-auto pt-24 pb-24 px-4  xl:pb-0 xl:pt-0">
        <div
          class="pt-4 md:pt-16 xl:py-24 xl:px-16 md:px-8 px-2 flex flex-row flex-wrap md:flex-no-wrap items-center justify-between "
        >
          <div class="w-full md:w-1/2 pb-8 md:pb-0">
            <img
              src="../../public/icons/advanced-expense-mgt.svg"
              alt="advanced expense management"
            />
          </div>
          <div class="w-full xl:pt-0 md:w-1/2 mb-0 pr-1">
            <h4
              class="pt-2 md:pb-0 xl:pt-2 pb-2 text-primary not-italic font-normal text-lg leading-normal"
            >
              Advanced expense management
            </h4>
            <h2
              class="text-4xl md:text-5xl xl:text-5xl not-italic font-black leading-tight pb-4 md:pb-0 xl:pb-10"
            >
              A complete insight into your company expenses
            </h2>
            <p
              class="text-base text-justify not-italic font-normal leading-normal"
            >
              No more waiting for end of month bank statements or expense
              reports to arrive. A transparent and real-time view of
              transactions gives you access to the full picture of company
              spending.
            </p>
            <!--Button component -->
            <div class="pt-6 md:pt-4 xl:pt-6 pb-4">
              <ButtonComponent class=" px-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white w-full">
      <div class="container mx-auto pt-24 pb-24 xl:pb-0 xl:pt-0 px-4">
        <div
          class="md:pt-16 xl:py-24 xl:px-16 md:px-8 px-2 py-8 flex flex-row flex-wrap md:flex-no-wrap items-center justify-between "
        >
          <div class="w-full xl:pt-0 md:w-1/2 mb-0 pr-0 xl:pr-8">
            <h4
              class="pt-2 md:pb-0 xl:pt-2 pb-2 text-primary not-italic font-normal text-lg leading-normal"
            >
              Let’s talk efficiency
            </h4>
            <h2
              class="text-4xl md:text-5xl xl:text-5xl not-italic font-black leading-tight pb-4 md:pb-0 xl:pb-8"
            >
              Save time and money on expense management
            </h2>
            <p
              class="text-base text-justify not-italic font-normal leading-normal md:w-10/12"
            >
              <span class="font-bold text-gray-800 underline"
                >Still manually doing expense reports?
              </span>
              Save your admin and employees up to 90% of that time by
              eliminating expense reports, so they can focus on their work.
            </p>
            <!--Button component -->
            <div class="pt-6 md:pt-4 xl:pt-6 pb-4">
              <ButtonComponent class=" px-12" />
            </div>
          </div>
          <div class="w-full md:w-1/2 py-10 md:py-0 md:pb-0">
            <img
              src="../../public/icons/savetime-expensemgt.svg"
              alt="expense management"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-grey-default w-full">
      <div class="container mx-auto pt-24 pb-24 px-4 xl:pb-0 xl:pt-0">
        <div
          class="pt-4 md:pt-16 xl:py-24 xl:px-16 md:px-8 px-2 flex flex-row flex-wrap md:flex-no-wrap items-center justify-between "
        >
          <div class="w-full md:w-1/2 pb-8 md:pb-0 md:mr-10 xl:mr-10">
            <img
              src="../../public/icons/productive-employee.svg"
              alt="productive employee "
            />
          </div>
          <div class="w-full xl:pt-0 md:w-1/2 mb-0 pr-1 md:ml-8 xl:ml-0">
            <h4
              class="pt-2 md:pb-0 xl:pt-2 pb-2 text-primary not-italic font-normal text-lg leading-normal"
            >
              The best part of all
            </h4>
            <h2
              class="text-3xl md:text-4xl xl:text-4.5xl not-italic font-black leading-tight pb-4 md:pb-0 xl:pb-10 "
            >
              Happier and more productive employees
            </h2>
            <p class="text-base not-italic font-normal leading-normal xl:pr-20">
              Get rid of reimbursements and don't burden your employees'
              personal finances for business purchases. Give them the feeling of
              being trusted and independent.
            </p>
            <!--Button component -->
            <div class="pt-6 md:pt-4 xl:pt-6 pb-4">
              <ButtonComponent class=" px-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white w-full">
      <div class="container mx-auto pt-24 pb-24 xl:px-16 px-4 md:px-8">
        <div class="py-2 w-full md:w-10/12">
          <h2
            class="not-italic text-2xl md:text-5xl xl:text-6xl leading-normal text-black font-black py-6 md:pr-20 xl:pr-0"
          >
            CredPal offers a spending solution that everyone in your company
            will love.
          </h2>
          <p
            class="not-italic font-thin text-base xl:text-2xl leading-normal md:w-10/12"
          >
            Finally, you can have better control over all spending, go fully
            paperless and make your employees happier.
          </p>
        </div>
        <div class="pt-10 w-full pr-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 py-8 ">
            <div
              class="col-span-3"
              v-for="feature in spendingSolutionFeatures"
              :key="feature"
            >
              <img :src="feature.image.src" :alt="feature.image.alt" />

              <h3 class="py-4 not-italic font-bold text-base leading-normal">
                {{ feature.heading }}
              </h3>
              <p class="pt-1 text-sm not-italic font-light leading-normal">
                {{ feature.text }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 py-8 ">
            <div
              class="col-span-3"
              v-for="featureTwo in spendingSolutionFeaturesTwo"
              :key="featureTwo"
            >
              <img :src="featureTwo.image.src" :alt="featureTwo.image.alt" />

              <h3 class="py-4 not-italic font-bold text-base leading-normal">
                {{ featureTwo.heading }}
              </h3>
              <p class="pt-1 text-sm not-italic font-light leading-normal">
                {{ featureTwo.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-grey-default">
      <div class="container mx-auto px-10 py-10 md:px-16 xl:py-20">
        <div class="text-black text-center">
          <h2
            class="not-italic font-black text-2xl md:text-5xl xl:text-6xl px-0 md:px-48 xl:py-4"
          >
            Give your business the real visility edge
          </h2>
          <p class="not-italic font-light text-base md:text-2xl">
            Get Started with CredPal Business
          </p>
          <!--Button component -->
          <div class="py-8"><ButtonComponent class="px-16" /></div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import BusinessHeaderComponent from "@/components/BusinessHeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "Features-and-Benefits",
  components: {
    BusinessHeaderComponent,
    ButtonComponent,
    FooterComponent,
  },
  data() {
    return {
      spendingSolutionFeatures: [
        {
          name: "Quick onboarding",
          heading: "Quick onboarding",
          image: {
            src: "icons/quick-onboarding.svg",
            alt: "Quick onboarding",
          },
          text: "Use your current bank and get going in a matter of minutes.",
        },
        {
          name: "Receipt matching",
          heading: "Receipt matching",
          image: {
            src: "icons/receipt-matching.svg",
            alt: "Receipt matching",
          },
          text: "Categorization and matching of receipts happen as you pay.",
        },
        {
          name: "Quick and free top-ups",
          heading: "Quick and free top-ups",
          image: {
            src: "icons/free-topups.svg",
            alt: "Quick and free top-ups",
          },
          text:
            "Load your CredPal wallet and CredPal cards fast, with no fees.",
        },
        {
          name: "Payment cards for employees",
          heading: "Payment cards for employees",
          image: {
            src: "icons/payment-card-employees.svg",
            alt: "Payment cards for employees",
          },
          text: "Generate virtual or plastic CredPal cards for all employees.",
        },
      ],
      spendingSolutionFeaturesTwo: [
        {
          name: "Spending limits and rights",
          heading: "Spending limits and rights",
          image: {
            src: "icons/spending-limits.svg",
            alt: "Spending limits and rights",
          },
          text: "Define custom rights and limitations for each employee.",
        },
        {
          name: "Real-time dashboard",
          heading: "Real-time dashboard",
          image: {
            src: "icons/realtime-dashboard.svg",
            alt: "Real-time dashboard",
          },
          text: "Stay on top of all company spending in real-time.",
        },
        {
          name: "Fraud Detection",
          heading: "Fraud Detection",
          image: {
            src: "icons/fraud-detection.svg",
            alt: "Fraud Detection",
          },
          text: "Detect suspicious purchases when they happen.",
        },
        {
          name: "Accounting Software Integration",
          heading: "Accounting Software Integration",
          image: {
            src: "icons/software-integration.svg",
            alt: "Accounting Software Integration",
          },
          text:
            "Avoid repetitive procedures, connect CredPal with your accounting software.",
        },
      ],
    };
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
.bg-grey-default {
  background-color: #f9faff;
}
</style>
