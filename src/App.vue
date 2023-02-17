<template>
  <router-view>
  </router-view>
  <FooterComponent />
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import ProductCardComponent from "./components/ProductCardComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import HomePage from "./pages/HomePage.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    HomePage,
    ProductCardComponent,
    HeroComponent,
    SidebarComponent,
  },
};
</script>

<style lang="scss" scoped>

</style>
