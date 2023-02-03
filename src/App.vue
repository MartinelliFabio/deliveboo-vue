<template>
  <HeaderComponent/>
    <router-view></router-view>
  <FooterComponent/>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import HomePage from './pages/HomePage.vue';

  export default {
    components: { HeaderComponent, FooterComponent, HomePage }
}
</script>

<style lang="scss" scoped>

</style>