
<template>
  <HeroComponent :isVisible="false"></HeroComponent>

  <div class="d-flex justify-content-center">
    <h2 class="my-5 display-4">Ristoranti</h2>
  </div>
  <div class="text-center d-flex justify-content-center align-items-center fs-5 p-5 h-loader" v-if="isLoading">
    <LoaderComponent class="absolute-loader"></LoaderComponent>
  </div>

  <div v-else>
  <div class="container mt-3 d-flex justify-content-center d-flex flex-wrap">
    <div class="form-check ms-2 " v-for="type in types" :key="type.id">
      <input class="form-check-input" type="checkbox" name="types" :value="type.id" :id="type.id" v-model="selectedType"/>
      <label class="form-check-label text-capitalize" :for="type.id">{{
        type.name
      }}</label>
    </div>
  </div>

  <div class="row justify-content-around my-cont container">
    <div class="col-sm-12 col-lg-6 col-md-12 col-xl-6 col-xxl-4" v-for="shopkeeper in filteredShopkeepers"
      :key="shopkeeper.id">
      <router-link :to="`shopkeepers/${shopkeeper.slug} `">
        <ShopkeeperCardComponent :shopkeeper="shopkeeper" :types="types"/>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import HeroComponent from "../components/HeroComponent.vue";
import ShopkeeperCardComponent from "../components/ShopkeeperCardComponent.vue";
import LoaderComponent from "../components/LoaderComponent.vue";
import { store } from "../store.js";

export default { 
  name: "ShopkeeperList",
  components: {
    HeroComponent,
    ShopkeeperCardComponent,
    LoaderComponent
  },
  data() {
    return {
      store,
      shopkeepers: [],
      types: [],
      selectedType: [],
      isLoading: true,
    
    };
  },
  computed: {
    filteredShopkeepers() {
      if (!this.selectedType.length) {
        return this.shopkeepers;
      } else {
        return this.shopkeepers.filter((shopkeeper) => {
          // console.log(this.shopkeepers);
          return shopkeeper.types.some(type => this.selectedType.includes(type.id));
        });
      }
    },
    getAllCart() {
      let storage = []
      let keys = Object.keys(localStorage)
      for (let i = 0; i < keys.length; i++) {
        storage.push(JSON.parse(localStorage.getItem(keys[i])))
      }
      return storage;
    },
  },
  methods: {
    getShopkeepers() {
      const data = {
        params: {
          selectedType: '',
        }
      }
      
      axios.get(this.store.apiUrl + "/shopkeepers", data).then((response) => {
        this.shopkeepers = response.data.results;
        // console.log(response.data.results)

        // this.isLoading = false;

      });
    },

    getShopkeeperTypes() {
      axios.get(this.store.apiUrl + "/types").then((response) => {
        this.types = response.data.results;
        // console.log(response.data.results)
      });
    },
  },
  mounted() {
    this.getShopkeepers();
    this.getShopkeeperTypes();
    store.cartItems = this.getAllCart

    setTimeout(() => {
      this.isLoading = false;
    }, 850);

  },
};
</script>


<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.my-cont {
  // width: 50%;
  margin: auto;
  margin-top: 2rem;
}

.h-loader{
  min-height: 43vh;
}

.absolute-loader{
  position: absolute ;
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

