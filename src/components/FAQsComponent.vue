<template>
  <div>
    <div v-for="(FAQsQuestion, index) in FAQsQuestions" :key="index">
      <div
        class="faqs_item"
        :class="{ 'mt-10': setMarginTop }"
        @click="isOpen = index"
      >
        <div
          class="flex items-center justify-between flex-row p-8 cursor-pointer"
        >
          <h2 class="pr-40 text-xl font-bold text-black">
            {{ FAQsQuestion.topic }}
          </h2>
          <button
            class="px-2 py-1 outline-none focus:outline-none text-3xl text-gray-900 hover:text-black"
          >
            +
          </button>
          <button
            class="px-2 py-1 outline-none focus:outline-none text-3xl text-gray-900 hover:text-black"
          >
            -
          </button>
        </div>
        <div class="pt-0 pb-8 pl-8 pr-8" v-show="isOpen == index">
          <div v-html="FAQsQuestion.topicAnswer"></div>
        </div>
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
      setMarginTop: true,
      isOpen: null,
      btnActive: "hidden",
      isActive: true,

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
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              perferendis molestias magni dolorum optio soluta, in dolore aliquid
              distinctio nobis facilis animi aliquam praesentium veritatis error eos
              voluptates, dolores rem, laborum ullam assumenda nesciunt. Numquam
              incidunt repudiandae dolorem amet, quod aut sint atque obcaecati saepe
              quia architecto laborum necessitatibus quam repellat, dolore quidem
              possimus quaerat et hic odit fuga ipsum eveniet ducimus tempora. Saepe
              odio, molestiae officiis doloribus nihil repellat iste exercitationem
              harum. Qui consectetur doloremque ipsam maxime quis error, neque
              delectus iusto distinctio repudiandae natus voluptas blanditiis
              mollitia itaque velit soluta asperiores sequi, quas veniam! Saepe vel
              est id.
          </p>`
        },
        {
          topic: "What is CredPal privacy Policy?",
          topicAnswer: `<p class="font-thin text-base">
            Account statements are required to validate customer and also compute a
            safe credit limistat em entser and also compute a safe credit limit.
            Statements are required to validate customer.

          </p>`
        }
      ]
    };
  },
  methods: {
    /*  toggleAccordion() {
      this.isOpen = !this.isOpen;
    } */
  }
};
</script>

<style lang="scss" scoped>
.isClosed {
  max-width: 0;
}
.isOpen {
  max-height: 10em;
}
.faqs_item {
  background: #ffffff;
  box-shadow: 0px 0px 32px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
.faqs_item p {
  color: #555555;
  font-size: 12px;
}
</style>
