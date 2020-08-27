<template>
  <div>
    <div
      class="faqs_item"
      v-for="(FAQsQuestion, index) in FAQsQuestions"
      :key="index"
      :class="{ index: index1, 'mt-10': True }"
    >
      <div class="flex items-center justify-between flex-row p-8">
        <h2 class="pr-40 text-xl font-bold text-black">
          {{ FAQsQuestion.topic }}
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
      <div class="pt-0 pb-8 pl-8 pr-8" v-show="!isOpen">
        <div v-html="FAQsQuestion.topicAnswer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQsComponent",
  components: {},
  data() {
    return {
      True: true,
      isOpen: false,
      index1: 1,
      FAQsQuestions: [
        {
          topic: "What is CredPal privacy Policy?",
          topicAnswer: `<p class="font-thin text-base">
        Account statements are required to validate customer and also compute a
        safe credit limistat em entser and also compute a safe credit limit.
        Statements are required to validate customer and also compute a safe
        credit unt statements are rto validate customer and also comit. Uint
        statements are required to validate customer and also compute a safe
        credit limit here.
      </p>`
        },
        {
          topic: "What is CredPal privacy Policy?",
          topicAnswer: `<p class="font-thin text-base">
        Account statements are required to validate customer and also compute a
        safe credit limistat em entser and also compute a safe credit limit.
        Statements are required to validate customer and also compute a safe
        credit unt statements are rto validate customer and also comit. Uint
        statements are required to validate customer and also compute a safe
        credit limit here.
      </p>`
        },
        {
          topic: "What is CredPal privacy Policy?",
          topicAnswer: `<p class="font-thin text-base">
        Account statements are required to validate customer and also compute a
        safe credit limistat em entser and also compute a safe credit limit.
        Statements are required to validate customer and also compute a safe
        credit unt statements are rto validate customer and also comit. Uint
        statements are required to validate customer and also compute a safe
        credit limit here.
      </p>`
        }
      ]
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
.faqs_item {
  background: #ffffff;
  box-shadow: 0px 0px 32px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
.faqs_item p {
  color: #555555;
}
</style>
