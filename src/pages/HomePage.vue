<template>
  <HeroComponent :isVisible="true"></HeroComponent>
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import { store } from "../store.js";

export default {
  name: "HomePage",
  components: {
    HeroComponent,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    getAllCart() {
      let storage = []
      let keys = Object.keys(localStorage)
      for (let i = 0; i < keys.length; i++) {
        storage.push(JSON.parse(localStorage.getItem(keys[i])))
      }
      return storage;
    },
  },
  mounted() {
    store.cartItems = this.getAllCart

  },
};
</script>

<style lang="scss" scoped></style>
