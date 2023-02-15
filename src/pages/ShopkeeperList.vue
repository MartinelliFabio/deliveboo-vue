<template>
  <HeroComponent :isVisible="false"></HeroComponent>
  <div class="d-flex justify-content-center pt-4">
    <h2 style="font-size: 54px">Ristoranti</h2>
  </div>

  <!-- <div class="container mt-3 d-flex justify-content-center">
    <div class="form-check ms-2" v-for="type in types" :key="type.id">
      <input
        class="form-check-input"
        type="checkbox"
        :value="type.id"
        :id="type.id"
        v-model="typeFilter"
      />
      <label class="form-check-label text-capitalize" :for="type.id">{{
        type.name
      }}</label>
    </div>
  </div> -->

  <div class="container mt-3 d-flex justify-content-center">
    <div class="form-check ms-2" v-for="type in types" :key="type.id">
      <input
        class="form-check-input"
        type="checkbox"
        name="types"
        :value="type.id"
        :id="type.id"
        v-model="typeFilter"
      />
      <label class="form-check-label text-capitalize" :for="type.id">{{
        type.name
      }}</label>
    </div>
  </div>

  <div class="row justify-content-around my-cont container">
    <div
      class="col-sm-12 col-lg-6 col-md-12 col-xl-6 col-xxl-4"
      v-for="shopkeeper in filteredShopkeepers"
      :key="shopkeeper.id"
    >
      <router-link :to="`shopkeepers/${shopkeeper.slug} `">
        <ShopkeeperCardComponent :shopkeeper="shopkeeper" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeroComponent from "../components/HeroComponent.vue";
import ProductCardComponent from "../components/ProductCardComponent.vue";
import ShopkeeperCardComponent from "../components/ShopkeeperCardComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import { store } from "../store.js";
export default {
  name: "ShopkeeperList",
  components: {
    ProductCardComponent,
    HeroComponent,
    ShopkeeperCardComponent,
    SidebarComponent,
  },
  data() {
    return {
      store,
      products: [],
      shopkeepers: [],
      types: [],
      typeFilter: [],
    };
  },
  methods: {
    getProducts() {
      axios.get(`${this.store.apiUrl}/products`).then((response) => {
        // console.log(response.data.results);
        this.products = response.data.results;
      });
    },

    getShopkeepers() {
      axios.get(`${this.store.apiUrl}/shopkeepers`).then((response) => {
        // console.log(response.data.results);
        this.shopkeepers = response.data.results;
      });
    },

    getTypes() {
      axios.get(`${this.store.apiUrl}/types`).then((response) => {
        // console.log(response.data.results);
        this.types = response.data.results;
      });
    },

    filterShopkeepers() {
      if (this.typeFilter.length === 0) {
        return this.shopkeepers;
      } else {
        const filteredShopkeepers = this.shopkeepers.filter((shopkeeper) => {
          let check = false;
          this.typeFilter.forEach((element) => {
            if (shopkeeper.types.includes(element)) {
              check = true;
            }
          });
          return check;
        });
        // const filteredShopkeepers = this.typeFilter.includes(this.shopkeepers.type_id);
        console.log(filteredShopkeepers);
        return filteredShopkeepers;
      }
    },
  },
  mounted() {
    this.getProducts();
    this.getShopkeepers();
    this.getTypes();
  },

  computed: {
    filteredShopkeepers() {
      return this.filterShopkeepers();
    },
  },
};
</script>

<style lang="scss" scoped>
$white: #ffffff;
$black: #000000;
$primary1: #ffbe33;
$primary2: #222831;
$textCol: #1f1f1f;
.my-cont {
  // width: 50%;
  margin: auto;
  margin-top: 2rem;
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

.my-position {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
