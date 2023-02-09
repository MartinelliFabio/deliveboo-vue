<template>
  <HeroComponent :isVisible="false"></HeroComponent>

  <div class="container">
    <h1
      style="font-size: 56px; margin-top: 4rem"
      class="text-center text-capitalize"
    >
      chi siamo
    </h1>
    <p class="mt-5 mb-5">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
      obcaecati velit modi minima neque, laudantium tempora iste cupiditate
      aspernatur non laboriosam dolor, nam unde placeat! Quam, suscipit dolorum.
      Dignissimos, natus fugit! Nihil minima qui, vel nobis fugiat cum unde
      minus? Sit a quae veniam repudiandae est esse at illo optio soluta facilis
      dignissimos dolores laborum fugit impedit ab ducimus in id qui maxime
      officia, accusamus rem aperiam aliquid. Eum doloribus, tempore atque odit
      optio at sunt odio sapiente distinctio quo. Hic corrupti architecto ex
      sunt neque! Dolor, consequatur dolores. Reprehenderit illum ipsam
      consectetur quasi asperiores fugiat ea distinctio nihil libero!
    </p>
  </div>

  <div class="container mb-5">
    <div class="row">
      <div
        class="col-lg-3 col-sm-6 g-3"
        v-for="(dev, index) in devCards"
        :key="index"
      >
        <div class="card my-card p-0">
          <div class="card-image">
            <img :src="dev.image" alt="" />
          </div>
          <div class="card-content d-flex flex-column align-items-center">
            <h4 class="pt-2 dev-name">{{ dev.name }}</h4>
            <h5 class="">{{ dev.role }}</h5>

            <ul class="social-icons d-flex justify-content-center">
              <li style="--i: 1" v-for="(item, index) in brands" :key="index">
                <a href="#">
                  <span :class="item"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import { store } from "../store.js";

export default {
  name: "AboutUs",
  components: { HeroComponent },
  data() {
    return {
      devCards: [
        {
          image: "https://avatars.githubusercontent.com/u/108491866?v=4",
          name: "Fabio Martinelli",
          role: "Jr. Full Stack Developer",
        },

        {
          image: "https://avatars.githubusercontent.com/u/106525869?v=4",
          name: "Angelo Calabrò",
          role: "Jr. Full Stack Developer",
        },

        {
          image: "https://avatars.githubusercontent.com/u/108661231?v=4",
          name: "Giovanni Andresini",
          role: "Jr. Full Stack Developer",
          facebook: "fab fa-facebook",
        },

        {
          image: "https://avatars.githubusercontent.com/u/109475511?v=4",
          name: "Adriano_Barboza",
          role: "Jr. Full Stack Developer",
        },
      ],

      brands: [
        "fab fa-facebook",
        "fab fa-instagram",
        "fa-brands fa-linkedin-in",
        "fa-brands fa-github",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/variables" as *;
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

body {
  min-height: 100vh;
  background: linear-gradient(to bottom, #000428, #004683);
}

.container {
  margin-top: 100px;
}

.container .row .col-lg-4 {
  display: flex;
  justify-content: center;
}

.card {
  position: relative;
  padding: 0;
  margin: 0 !important;
  border-radius: 20px;
  overflow: hidden;
  max-width: 280px;
  max-height: 340px;
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card .card-image {
  width: 100%;
  max-height: 340px;
}

.card .card-image img {
  width: 100%;
  max-height: 340px;
  object-fit: cover;
}

.card .card-content {
  position: absolute;
  bottom: -180px;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  min-height: 140px;
  width: 100%;
  transition: bottom 0.4s ease-in;
  box-shadow: 0 -10px 10px rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.card:hover .card-content {
  bottom: 0px;
}

.card:hover .card-content h4,
.card:hover .card-content h5 {
  transform: translateY(10px);
  opacity: 1;
}

.card .card-content h4,
.card .card-content h5 {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  transition: 0.8s;
  font-weight: 500;
  opacity: 0;
  transform: translateY(-40px);
  transition-delay: 0.2s;
}

.card .card-content h5 {
  transition: 0.5s;
  font-weight: 200;
  font-size: 0.8rem;
  letter-spacing: 2px;
}

.card .card-content .social-icons {
  list-style: none;
  padding: 0;
}

.card .card-content .social-icons li {
  margin: 10px;
  transition: 0.5s;
  transition-delay: calc(0.15s * var(--i));
  transform: translateY(50px);
}

.card:hover .card-content .social-icons li {
  transform: translateY(20px);
}

.card .card-content .social-icons li a {
  color: #fff;
}

.card .card-content .social-icons li a span {
  font-size: 1.3rem;
}

.dev-name {
  color: $blue;
  font-weight: 600 !important;
}

.role-color{
  color: $blue;
}

@media (max-width: 991.5px) {
  .container {
    margin-top: 20px;
  }

  .container .row .col-lg-4 {
    margin: 20px 0px;
  }
}

@media (max-width: 574px) {
  .my-card {
    margin: auto !important;
  }
}
</style>
