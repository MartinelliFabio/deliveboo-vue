<template>
    <HeroComponent :isVisible="true"></HeroComponent>
</template>

<script>
import HeroComponent from './HeroComponent.vue';
import NavbarComponent from './NavbarComponent.vue';

    export default {
    name: "HeaderComponent",
    components: { NavbarComponent, HeroComponent }
}
</script>

<style lang="scss" scoped>

</style>