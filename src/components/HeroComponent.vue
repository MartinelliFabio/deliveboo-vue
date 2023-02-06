<template>
  <div class="hero" :class="{ 'is-visible': !isVisible }">
    <div class="bg-box container-fluid text-center p-0">
      <img src="../img/hero-bg.jpg" :class="{ 'card-visible': !isVisible }" alt="hero" />
    </div>
    <NavbarComponent />
    <div class="card-position" v-if="isVisible">
      <HeroCard></HeroCard>
    </div>
  </div>
</template>

<script>
import HeroCard from "./HeroCard.vue";
import NavbarComponent from "./NavbarComponent.vue";
export default {
  name: "HeroComponent",
  components: {
    HeroCard,
    NavbarComponent,
  },
  props: {
    isVisible: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/variables" as *;

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .bg-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-position {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 45px 0 75px 0;
  }
}

@media (max-width: 992px) {
  .hero {
    min-height: auto;
  }
}
</style>
