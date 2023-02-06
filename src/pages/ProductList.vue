<template>
  <HeroComponent :isVisible="false"></HeroComponent>
    <div class="d-flex justify-content-center mt-5">
        <h2>Our Menu</h2>
      </div>

      <ul class="filters_menu d-flex justify-content-center">
        <li class="active" data-filter="*">All</li>
        <li data-filter=".burger">Burger</li>
        <li data-filter=".pizza">Pizza</li>
        <li data-filter=".pasta">Pasta</li>
        <li data-filter=".fries">Fries</li>
      </ul>
  <div class="row my-cont">
    <div class="col-sm-6 col-lg-4" v-for="(product, i) in products" :key="i">
      <ProductCardComponent :product="product" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeroComponent from "../components/HeroComponent.vue";
import ProductCardComponent from "../components/ProductCardComponent.vue";
import { store } from "../store.js";
export default {
  name: "ProductList",
  components: { ProductCardComponent, HeroComponent },
  data() {
    return {
      store,
      products: [],

    };
  },
  methods: {
    getProducts() {
      axios.get(`${this.store.apiUrl}/products`).then((response) => {
        // console.log(response.data.results);
        this.products = response.data.results;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>

$white: #ffffff;
$black: #000000;
$primary1: #ffbe33;
$primary2: #222831;
$textCol: #1f1f1f;
.my-cont{
    width: 50%;
    margin: auto;
    margin-top: 4rem;
}

.filters_menu {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    margin: 45px 0 20px 0;

    li {
      padding: 7px 25px;
      cursor: pointer;
      border-radius: 25px;

      &.active {
        background-color: $primary2;
        color: $white;
      }
    }
  }


</style>
