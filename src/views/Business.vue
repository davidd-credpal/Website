<template>
  <div id="app">
    <!--Business Navigation component -->
    <BusinessHeaderComponent />
    <section class="xl:pt-20 bg-white imageHeaderBackground w-full h-full">
      <div class="container mx-auto pt-6">
        <div
          class="flex flex-row flex-wrap md:flex-no-wrap items-center justify-between pt-4 xl:pl-16 md:px-0 px-2"
        >
          <div class="xl:mb-40 xl:w-1/2 mb-12">
            <!-- <h4 class="text-primary not-italic text-xl font-extrabold">
              CredPal Business
            </h4> -->

            <h1
              class="md:text-6xl text-5xl xl:my-6 my-8 font-extrabold not-italic leading-tight"
            >
              Business Card for the Modern Enterprise
            </h1>

            <p class="not-italic font-light text-lg md:pr-16">
              CredPal offers powerful expense management solution which enables
              businesses issue credit/debit cards to take absolute control of
              their spending.
            </p>
          </div>
          <div class="mb-8 xl:mb-6 pr-10 md:pr-0">
            <img
              src="../../public/icons/user-dashboard-background.svg"
              alt="dashboard ui"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="bgPrimaryColor py-12">
        <div class="container mx-auto px-16">
          <h2
            class="text-white font-thin not-italic text-center text-2xl md:text-4xl xl:text-6xl"
          >
            Goodbye to
            <span class="text-white opacity-50">manual expense reports</span>
          </h2>
        </div>
      </div>
      <div class="container mx-auto px-10 md:px-16">
        <div class="w-full md:w-9/12 py-10">
          <h2
            class="not-italic font-extrabold text-4xl xl:text-6xl leading-tight py-8"
          >
            Up to 60% spend reduction on operational expenses
          </h2>
          <p class="not-italic font-light text-3xl xl:pr-8">
            CredPal gives your business an advance visibility edge into your
            business finances.
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 py-8">
          <div
            class="mb-10"
            v-for="expenseReportIcon in expenseReportIcons"
            :key="expenseReportIcon.name"
          >
            <div
              class="px-0 md:px-6"
              v-html="expenseReportIcon.iconSvgSrc"
            ></div>
            <h2 class="not-italic font-bold text-lg py-4">
              {{ expenseReportIcon.heading }}
            </h2>
            <p class="not-italic font-light text-tiny">
              {{ expenseReportIcon.text }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bgIssueCardFeature">
      <div class="container mx-auto px-10 py-10 md:px-16 xl:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="mt-16 xl:mt-0">
            <img src="../../public/images/create-card.png" alt="create card" />
          </div>
          <div>
            <h2 class="not-italic font-black text-2xl md:text-4xl pb-6">
              Issue physical credit/debit cards in minutes with zero technical
              requirements
            </h2>
            <p class="py-3  not-italic font-light text-sm">
              Enable faster purchasing and give every employee access to the
              funds they need in a safe and secure manner.
            </p>
            <p class="py-3  not-italic font-light text-sm">
              Easily manage everyday complicated and burdensome expenses, such
              as cash disbursements, petty cash, and account reconciliation.
            </p>
            <p class="py-3  not-italic font-light text-sm">
              Instantly issue corporate Credit Card for extra liquidity and
              quick credit for everyday expenses such as travels, invoice
              settlement, petty cash, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto px-10 md:px-16 xl:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="pt-16 md:py-16">
            <h2
              class="not-italic font-black text-2xl xl:text-4xl pl-0 xl:pr-8 pr-6 pb-4"
            >
              Expense Tracking & Overview
            </h2>
            <p class="py-3 not-italic font-light text-sm">
              ***Enable faster purchasing and give every employee access to the
              funds they need in a safe and secure manner.
            </p>
            <p class="py-3 not-italic font-light text-sm">
              Easily manage everyday complicated and burdensome expenses, such
              as cash disbursements, petty cash, and account reconciliation.
            </p>
            <p class="py-3 not-italic font-light text-sm">
              Instantly issue corporate Credit Card for extra liquidity and
              quick credit for everyday expenses such as travels, invoice
              settlement, petty cash, etc.
            </p>
          </div>
          <div class="mt-16 md:mt-0">
            <img
              class="pt-0 pb-6 px-0 xl:px-12"
              src="../../public/images/expense-summary.png"
              alt="expense summary feature"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bgIssueCardFeature">
      <div class="container mx-auto px-10 md:px-16 xl:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="mt-16 xl:mt-0">
            <img src="../../public/images/plain-background.png" alt="" />
          </div>
          <div>
            <h2 class="not-italic font-black text-2xl md:text-4xl pb-6">
              Continuous Business Credit Float for Expenses
            </h2>
            <p class="py-3 not-italic font-light text-sm">
              ***Enable faster purchasing and give every employee access to the
              funds they need in a safe and secure manner.
            </p>
            <p class="py-3 not-italic font-light text-sm">
              Easily manage everyday complicated and burdensome expenses, such
              as cash disbursements, petty cash, and account reconciliation.
            </p>
            <p class="py-3 not-italic font-light text-sm">
              Instantly issue corporate Credit Card for extra liquidity and
              quick credit for everyday expenses such as travels, invoice
              settlement, petty cash, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto px-10 md:px-16 xl:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="pt-16 md:py-16">
            <h2
              class="not-italic font-black text-2xl xl:text-4xl pl-0 xl:pr-8 pr-6 pb-4"
            >
              Direct Transfers & Bill Settlement
            </h2>
            <p class="py-3 not-italic font-light text-sm">
              ***Enable faster purchasing and give every employee access to the
              funds they need in a safe and secure manner.
            </p>
            <p class="py-3 not-italic font-light text-sm">
              Easily manage everyday complicated and burdensome expenses, such
              as cash disbursements, petty cash, and account reconciliation.
            </p>
            <p class="py-3  not-italic font-light text-sm">
              Instantly issue corporate Credit Card for extra liquidity and
              quick credit for everyday expenses such as travels, invoice
              settlement, petty cash, etc.
            </p>
          </div>
          <div class="mt-16 md:mt-0">
            <img
              class="pt-0 pb-6 md:pb-0 px-0 xl:px-12"
              src="../../public/images/airtime-bills-feature.png"
              alt="airtime&bills feature"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bgIssueCardFeature">
      <div class="container mx-auto px-10 py-10 xl:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="mt-16 xl:mt-0">
            <img src="../../public/images/export-data.png" alt="export data" />
          </div>
          <div>
            <h2 class="not-italic font-black text-2xl md:text-4xl py-8">
              Accounting Systems Integrations
            </h2>
            <p class="py-3 not-italic font-light text-2xl pr-6">
              Integrate CredPal expense Management with your accounting tools.
            </p>
            <p class="py-3 not-italic font-light text-sm pr-10 text-justify">
              CredPal works seamlessly with various accounting systems and saves
              you precious time on repetitive tasks. You can now import all
              expenses and associated data with a single click.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bgPrimaryColorLinks">
      <div class="container mx-auto px-10 py-10 md:px-16 xl:py-16">
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <!-- col-1 -->
          <div>
            <div class="bgPrimaryColorLinksItem my-4 rounded-md p-8 ">
              <a href="#" class=" not-italic font-bold text-sm text-white"
                ><span class="flex items-center justify-between"
                  >Quick onboarding
                  <i
                    ><svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 7.6665L16 4.33317M16 4.33317L12.6667 0.999837M16 4.33317L1 4.33317"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> </i></span
              ></a>
            </div>
            <div class="bgPrimaryColorLinksItem my-4 rounded-md p-8 ">
              <a href="#" class=" not-italic font-bold text-sm text-white"
                ><span class="flex items-center justify-between"
                  >Spending limits and rights
                  <i
                    ><svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 7.6665L16 4.33317M16 4.33317L12.6667 0.999837M16 4.33317L1 4.33317"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> </i></span
              ></a>
            </div>
            <div class="bgPrimaryColorLinksItem my-4 rounded-md p-8 ">
              <a href="#" class=" not-italic font-bold text-sm text-white"
                ><span class="flex items-center justify-between"
                  >Fraud Detection
                  <i
                    ><svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 7.6665L16 4.33317M16 4.33317L12.6667 0.999837M16 4.33317L1 4.33317"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> </i></span
              ></a>
            </div>
          </div>
          <!-- col-2 -->
          <div>
            <div class="bgPrimaryColorLinksItem my-4 rounded-md p-8 ">
              <a href="#" class=" not-italic font-bold text-sm text-white"
                ><span class="flex items-center justify-between"
                  >Receipt matching
                  <i
                    ><svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 7.6665L16 4.33317M16 4.33317L12.6667 0.999837M16 4.33317L1 4.33317"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> </i></span
              ></a>
            </div>
            <div class="bgPrimaryColorLinksItem my-4 rounded-md p-8 ">
              <a href="#" class=" not-italic font-bold text-sm text-white"
                ><span class="flex items-center justify-between"
                  >Real-time dashboard
                  <i
                    ><svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 7.6665L16 4.33317M16 4.33317L12.6667 0.999837M16 4.33317L1 4.33317"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> </i></span
              ></a>
            </div>
            <div class="bgPrimaryColorLinksItem my-4 rounded-md p-8 ">
              <a href="#" class=" not-italic font-bold text-sm text-white"
                ><span class="flex items-center justify-between"
                  >Accounting Software Integration
                  <i
                    ><svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 7.6665L16 4.33317M16 4.33317L12.6667 0.999837M16 4.33317L1 4.33317"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> </i></span
              ></a>
            </div>
          </div>
          <!-- col-3 -->
          <div>
            <div class="bgPrimaryColorLinksItem my-4 rounded-md p-8 ">
              <a href="#" class=" not-italic font-bold text-sm text-white"
                ><span class="flex items-center justify-between"
                  >Quick and free top-up
                  <i
                    ><svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 7.6665L16 4.33317M16 4.33317L12.6667 0.999837M16 4.33317L1 4.33317"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> </i></span
              ></a>
            </div>
            <div class="bgPrimaryColorLinksItem my-4 rounded-md p-8 ">
              <a href="#" class=" not-italic font-bold text-sm text-white"
                ><span class="flex items-center justify-between"
                  >Payment cards for employees
                  <i
                    ><svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 7.6665L16 4.33317M16 4.33317L12.6667 0.999837M16 4.33317L1 4.33317"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> </i></span
              ></a>
            </div>

            <div class="bgPrimaryColorLinksItem my-4 rounded-md p-8 hidden ">
              <a href="#" class=" not-italic font-bold text-sm text-white"
                ><span class="flex items-center justify-between"
                  >Fraud Detection
                  <i
                    ><svg
                      width="17"
                      height="9"
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 7.6665L16 4.33317M16 4.33317L12.6667 0.999837M16 4.33317L1 4.33317"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> </i></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="container mx-auto px-10 py-10 md:px-16 xl:py-20">
        <div class="text-black text-center">
          <h2
            class="not-italic font-black text-2xl md:text-6xl px-0 md:px-48 xl:py-4"
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
    <!-- footer component -->
    <FooterComponent />
  </div>
</template>

<script>
import BusinessHeaderComponent from "@/components/BusinessHeaderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "Business",
  components: {
    BusinessHeaderComponent,
    ButtonComponent,
    FooterComponent
  },
  data() {
    return {
      expenseReportIcons: [
        {
          name: "Company expense cards",
          heading: "Company expense cards",
          text:
            "Issue credit/debit cards with limits for your staff with a click.",
          iconSvgSrc: `<svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.9722 14.3352C23.9722 13.921 23.6364 13.5852 23.2222 13.5852C22.808 13.5852 22.4722 13.921 22.4722 14.3352H23.9722ZM12.9048 4.56481C13.319 4.56481 13.6548 4.22903 13.6548 3.81481C13.6548 3.4006 13.319 3.06481 12.9048 3.06481V4.56481ZM1.69444 9.39815C1.28023 9.39815 0.944444 9.73393 0.944444 10.1481C0.944444 10.5624 1.28023 10.8981 1.69444 10.8981L1.69444 9.39815ZM12.8056 10.8981C13.2198 10.8981 13.5556 10.5624 13.5556 10.1481C13.5556 9.73394 13.2198 9.39815 12.8056 9.39815V10.8981ZM18.3611 5.87963C17.9469 5.87963 17.6111 6.21542 17.6111 6.62963C17.6111 7.04384 17.9469 7.37963 18.3611 7.37963V5.87963ZM22.5278 7.37963C22.942 7.37963 23.2778 7.04384 23.2778 6.62963C23.2778 6.21542 22.942 5.87963 22.5278 5.87963V7.37963ZM21.1944 4.51852C21.1944 4.10431 20.8587 3.76852 20.4444 3.76852C20.0302 3.76852 19.6944 4.10431 19.6944 4.51852H21.1944ZM19.6944 8.74074C19.6944 9.15495 20.0302 9.49074 20.4444 9.49074C20.8587 9.49074 21.1944 9.15495 21.1944 8.74074H19.6944ZM26 6.62963H25.25H26ZM22.4722 14.3352V17.1852H23.9722V14.3352H22.4722ZM20.4444 19.25H3.77778V20.75H20.4444V19.25ZM1.75 17.1852V6.62963H0.25V17.1852H1.75ZM3.77778 4.56481H12.9048V3.06481H3.77778V4.56481ZM3.77778 19.25C2.6672 19.25 1.75 18.3349 1.75 17.1852H0.25C0.25 19.1446 1.82011 20.75 3.77778 20.75V19.25ZM22.4722 17.1852C22.4722 18.3349 21.555 19.25 20.4444 19.25V20.75C22.4021 20.75 23.9722 19.1446 23.9722 17.1852H22.4722ZM1.75 6.62963C1.75 5.47987 2.6672 4.56481 3.77778 4.56481V3.06481C1.82011 3.06481 0.25 4.67023 0.25 6.62963H1.75ZM1.69444 10.8981H12.8056V9.39815H1.69444L1.69444 10.8981ZM18.3611 7.37963H20.4444V5.87963H18.3611V7.37963ZM20.4444 7.37963H22.5278V5.87963H20.4444V7.37963ZM19.6944 4.51852V6.62963H21.1944V4.51852H19.6944ZM19.6944 6.62963V8.74074H21.1944V6.62963H19.6944ZM25.25 6.62963C25.25 7.2718 25.1252 7.90746 24.8829 8.50022L26.2713 9.06777C26.5874 8.2945 26.75 7.46605 26.75 6.62963H25.25ZM24.8829 8.50022C24.6406 9.09296 24.2857 9.6309 23.839 10.0836L24.9066 11.1372C25.4917 10.5443 25.9553 9.84107 26.2713 9.06777L24.8829 8.50022ZM23.839 10.0836C23.3923 10.5362 22.8625 10.8948 22.2802 11.1392L22.8607 12.5223C23.6265 12.2009 24.3216 11.7301 24.9066 11.1372L23.839 10.0836ZM22.2802 11.1392C21.6979 11.3836 21.0741 11.5093 20.4444 11.5093L20.4444 13.0093C21.2739 13.0093 22.095 12.8437 22.8607 12.5223L22.2802 11.1392ZM20.4444 11.5093C19.8148 11.5093 19.191 11.3836 18.6087 11.1392L18.0282 12.5223C18.7939 12.8437 19.615 13.0093 20.4444 13.0093L20.4444 11.5093ZM18.6087 11.1392C18.0264 10.8948 17.4966 10.5362 17.0499 10.0836L15.9822 11.1372C16.5673 11.7301 17.2624 12.2009 18.0282 12.5223L18.6087 11.1392ZM17.0499 10.0836C16.6032 9.6309 16.2483 9.09296 16.006 8.50022L14.6175 9.06777C14.9336 9.84107 15.3972 10.5443 15.9822 11.1372L17.0499 10.0836ZM16.006 8.50022C15.7637 7.90746 15.6389 7.2718 15.6389 6.62963H14.1389C14.1389 7.46605 14.3015 8.2945 14.6175 9.06777L16.006 8.50022ZM15.6389 6.62963C15.6389 5.98746 15.7637 5.3518 16.006 4.75904L14.6175 4.19148C14.3015 4.96476 14.1389 5.79321 14.1389 6.62963H15.6389ZM16.006 4.75904C16.2483 4.1663 16.6032 3.62836 17.0499 3.17569L15.9822 2.12207C15.3972 2.71492 14.9336 3.41819 14.6175 4.19148L16.006 4.75904ZM17.0499 3.17569C17.4966 2.72303 18.0264 2.36451 18.6087 2.12008L18.0282 0.736978C17.2624 1.05838 16.5673 1.52921 15.9822 2.12207L17.0499 3.17569ZM18.6087 2.12008C19.191 1.87567 19.8148 1.75 20.4444 1.75V0.25C19.615 0.25 18.7939 0.415562 18.0282 0.736978L18.6087 2.12008ZM20.4444 1.75C21.0741 1.75 21.6979 1.87567 22.2802 2.12008L22.8607 0.736979C22.095 0.415563 21.2739 0.25 20.4444 0.25V1.75ZM22.2802 2.12008C22.8625 2.36451 23.3923 2.72303 23.839 3.17569L24.9066 2.12207C24.3216 1.52921 23.6265 1.05839 22.8607 0.736979L22.2802 2.12008ZM23.839 3.17569C24.2857 3.62836 24.6406 4.1663 24.8829 4.75904L26.2713 4.19148C25.9553 3.41819 25.4917 2.71492 24.9066 2.12207L23.839 3.17569ZM24.8829 4.75904C25.1252 5.3518 25.25 5.98746 25.25 6.62963H26.75C26.75 5.79321 26.5874 4.96476 26.2713 4.19148L24.8829 4.75904Z" fill="#274FED"/>
          </svg>`
        },
        {
          name: "Track all spending",
          heading: "Track all spending",
          text:
            "Issue credit/debit cards with limits for your staff with a click.",
          iconSvgSrc: `<svg width="24" height="23" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1V17.3929C1 17.5539 1.08278 17.7083 1.23013 17.8222C1.37748 17.936 1.57733 18 1.78571 18H23M5.55172 8.3913H7.06897C7.48794 8.3913 7.82759 8.70154 7.82759 9.08424V14.3505C7.82759 14.7332 7.48794 15.0435 7.06897 15.0435H5.55172C5.13275 15.0435 4.7931 14.7332 4.7931 14.3505V9.08424C4.7931 8.70154 5.13275 8.3913 5.55172 8.3913ZM11.6207 6.17391H13.1379C13.5569 6.17391 13.8966 6.50483 13.8966 6.91304V14.3043C13.8966 14.7126 13.5569 15.0435 13.1379 15.0435H11.6207C11.2017 15.0435 10.8621 14.7126 10.8621 14.3043V6.91304C10.8621 6.50483 11.2017 6.17391 11.6207 6.17391ZM17.6897 3.95652H19.2069C19.6259 3.95652 19.9655 4.28309 19.9655 4.68593V14.3141C19.9655 14.7169 19.6259 15.0435 19.2069 15.0435H17.6897C17.2707 15.0435 16.931 14.7169 16.931 14.3141V4.68593C16.931 4.28309 17.2707 3.95652 17.6897 3.95652Z" stroke="#274FED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
        },
        {
          name: "Automated expenses",
          heading: "Automated expenses",
          text:
            "Issue credit/debit cards with limits for your staff with a click.",
          iconSvgSrc: `<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5303 6.53033C13.8232 6.23744 13.8232 5.76256 13.5303 5.46967L8.75736 0.696699C8.46447 0.403806 7.98959 0.403806 7.6967 0.696699C7.40381 0.989593 7.40381 1.46447 7.6967 1.75736L11.9393 6L7.6967 10.2426C7.40381 10.5355 7.40381 11.0104 7.6967 11.3033C7.98959 11.5962 8.46447 11.5962 8.75736 11.3033L13.5303 6.53033ZM7.26087 17.75C7.67508 17.75 8.01087 17.4142 8.01087 17C8.01087 16.5858 7.67508 16.25 7.26087 16.25V17.75ZM10.4697 16.4697C10.1768 16.7626 10.1768 17.2374 10.4697 17.5303L15.2426 22.3033C15.5355 22.5962 16.0104 22.5962 16.3033 22.3033C16.5962 22.0104 16.5962 21.5355 16.3033 21.2426L12.0607 17L16.3033 12.7574C16.5962 12.4645 16.5962 11.9896 16.3033 11.6967C16.0104 11.4038 15.5355 11.4038 15.2426 11.6967L10.4697 16.4697ZM16.7391 5.25C16.3249 5.25 15.9891 5.58579 15.9891 6C15.9891 6.41421 16.3249 6.75 16.7391 6.75V5.25ZM7 6.75H13V5.25H7V6.75ZM7.26087 16.25H7V17.75H7.26087V16.25ZM0.25 11.5C0.25 15.0119 3.33484 17.75 7 17.75V16.25C4.03774 16.25 1.75 14.0633 1.75 11.5H0.25ZM1.75 11.5C1.75 8.93674 4.03774 6.75 7 6.75V5.25C3.33484 5.25 0.25 7.98813 0.25 11.5H1.75ZM17 16.25H11V17.75H17V16.25ZM16.7391 6.75H17V5.25H16.7391V6.75ZM23.75 11.5C23.75 7.98813 20.6652 5.25 17 5.25V6.75C19.9623 6.75 22.25 8.93674 22.25 11.5H23.75ZM22.25 11.5C22.25 14.0633 19.9623 16.25 17 16.25V17.75C20.6652 17.75 23.75 15.0119 23.75 11.5H22.25Z" fill="#274FED"/>
          </svg>`
        },
        {
          name: "Simplified bookkeeping",
          heading: "Simplified bookkeeping",
          text:
            "Issue credit/debit cards with limits for your staff with a click.",
          iconSvgSrc: `<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.11111 5.725H11.8889M6.11111 9.325H11.8889M6.11111 12.925H9.22222M13.5255 16.854L15.4745 18.0578C16.1407 18.4693 17 17.99 17 17.207V2C17 1.44772 16.5523 1 16 1H2C1.44772 1 1 1.44772 1 2V17.207C1 17.99 1.85927 18.4693 2.52549 18.0578L4.47451 16.854C4.79659 16.655 5.20341 16.655 5.52549 16.854L8.47451 18.6754C8.79659 18.8744 9.20341 18.8744 9.52549 18.6754L12.4745 16.854C12.7966 16.655 13.2034 16.655 13.5255 16.854Z" stroke="#274FED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
        }
      ]
    };
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

.bgIssueCardFeature {
  background-color: #f3f5fc;
}

.bgPrimaryColorLinks {
  background-color: #3957cb;
}
.bgPrimaryColorLinksItem:hover {
  background-color: #2e49b7;
}
</style>
