<template>
  <HeaderComponent/>
<div>
  <!-- <router-view></router-view> -->
</div>
  <FooterComponent/>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    components: { HeaderComponent, FooterComponent }
}
</script>

<style lang="scss" scoped>

</style>