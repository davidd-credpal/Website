<template>
  <span class="cursor-pointer mr-10" @click="isOpen = !isOpen">
    {{ title }}
    <svg
      class="mb-1 inline-block"
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.8"
        d="M1.52148 1L5.52148 5L9.52148 1"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <transition name="fade" appear>
      <div class="py-4 sub-menu-industries bg-white  shadow" v-show="isOpen">
        <ul
          v-for="(item, i) in items"
          :key="i"
          class="px-6 py-2 hover:font-medium hover:bg-gray-300 cursor-pointer"
        >
          <router-link :to="{ name: item.name }">
            {{ item.title }}
          </router-link>
        </ul>
      </div>
    </transition>
  </span>
</template>

<script>
export default {
  name: "BusinessDropDownComponent",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false
    };
  },
  created() {
    const handleEscape = e => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.isOpen = false;
      }
    };
    document.addEventListener("keydown", handleEscape);

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  }
};
</script>

<style lang="scss" scoped>
a {
  font-size: 13px;
  &.router-link-exact-active {
    font-weight: bold;
    color: #000000;
  }
}

span {
  font-size: 12px;
}
.sub-menu-industries {
  position: absolute;
  top: 70%;
  left: 63%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 8px 0px 8px 8px;
}

.fade-enter-active,
.fade.leave.fade-enter-active {
  transition: all 0.2s ease-out;
}
.fade-enter,
.fade.leave-to {
  opacity: 0;
  transition: all 0.5s ease-out;
}
</style>
