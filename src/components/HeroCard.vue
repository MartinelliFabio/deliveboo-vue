<template>
    <div class="hero-card">
        <CarouselComponent/>
    </div>
</template>

<script>
import CarouselComponent from './CarouselComponent.vue';

    export default {
    name: "CardComponent",
    components: { 
        CarouselComponent 
    },
    data() {
        return {
        }
    }

}
</script>

<style lang="scss" scoped>
.hero-card {
    width: 100%;
}
</style>