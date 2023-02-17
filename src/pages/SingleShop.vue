<template>
  <HeroComponent :isVisible="false"></HeroComponent>

  <h2 class="text-center text-capitalize my-5 display-4">prodotti</h2>

  <div class="text-center d-flex justify-content-center align-items-center fs-5 p-5 h-loader" v-if="isLoading">
    <LoaderComponent class=""></LoaderComponent>
  </div>

  <div v-else>
    <section v-if="shopkeeper" class="food_section layout_padding mb-5">
      <div v-if="shopkeeper.products" class="container">
        <div class="row justify-content-around">
          <div
            v-for="(item, i) in shopkeeper.products"
            class="filters-content col-sm-12 col-lg-6 col-md-12 col-xl-6 col-xxl-4"
          >
            <div class="">
              <div class="all pizza">
                <div class="box">
                  <div>
                    <div class="img-box">
                      <img
                        v-if="`${item.image}`.includes('products_images')"
                        :src="`${store.imagePath}${item.image}`"
                        class="card-image"
                      />
                      <img v-else="" :src="`${item.image}`" alt="" />
                    </div>
                    <div class="detail-box">
                      <h5 class="text-capitalize">{{ item.name }}</h5>
                      <p>
                        {{ item.ingredient }}
                      </p>
                      <div class="options">
                        <h6 class="me-3">&euro;&nbsp;{{ item.price }}</h6>
                        <a
                          href=""
                          :disabled="vueLocalStorage.includes(item.slug)"
                          @click.prevent="addToCartId(item)"
                        >
                          <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import HeroComponent from "../components/HeroComponent.vue";
import Swal from "sweetalert2";
import CartComponent from "../components/CartComponent.vue";
import LoaderComponent from "../components/LoaderComponent.vue";

export default {
  name: "SingleShop",
  components: { HeroComponent, CartComponent, LoaderComponent },
  data() {
    return {
      store,
      shopkeeper: null,
      products: [],
      vueLocalStorage: "",
      isLoading: true,
    };
  },
  watch: {
    "store.cartItems": {
      handler() {
        this.getStorageKeys();
      },
      deep: true,
    },
  },

  computed: {
    getAllCart() {
      let storage = [];
      let keys = Object.keys(localStorage);
      for (let i = 0; i < keys.length; i++) {
        storage.push(JSON.parse(localStorage.getItem(keys[i])));
      }
      return storage;
    },
  },
  methods: {
    getShop() {
      axios
        .get(`${this.store.apiUrl}/shopkeepers/${this.$route.params.slug}`)
        .then((response) => {
          // console.log(response.data.results)
          this.shopkeeper = response.data.results;

          // this.isLoading = false;
        });
    },
    addToCartId(item) {
      if (localStorage.length) {
        const keys = Object.keys(localStorage);
        const shopkeeperId = JSON.parse(
          localStorage.getItem(keys[0])
        ).shopkeeper_id;
        if (item.shopkeeper_id != shopkeeperId) {
          this.sendError();
          return;
        } else {
          this.addToCart(item);
          return;
        }
      }
      this.addToCart(item);
    },
    addToCart(item) {
      let index = store.cartItems.findIndex(
        (product) => product.slug === item.slug
      );
      if (index !== -1) {
        store.cartItems[index].quantity += 1;
        localStorage.setItem(item.slug, JSON.stringify(store.cartItems[index]));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Il piatto è stato aggiornato",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        item.quantity = 1;
        store.cartItems.push(item);
        localStorage.setItem(item.slug, JSON.stringify(item));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Il piatto è stato aggiunto all'ordine",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    sendError() {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Non puoi ordinare da due ristoranti diversi",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    getStorageKeys() {
      this.vueLocalStorage = Object.keys(localStorage);
    },
  },
  mounted() {
    this.getShop();
    store.cartItems = this.getAllCart;
    this.getStorageKeys();
    setTimeout(() => {
      this.isLoading = false;
    }, 850);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/variables" as *;

a,
a:hover,
a:focus {
  text-decoration: none;
}
a:hover,
a:focus {
  color: initial;
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

.h-loader{
  min-height: 43vh;
}
.box {
  position: relative;
  margin-top: 25px;
  background-color: $white;
  border-radius: 10px;
  color: $white;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(to bottom, #f1f2f3 25px, $primary2 25px);
  height: 410px;
  .img-box {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 215px;
    border-radius: 15px 15px 0 45px;
    border: 1px solid $primary2;
    cursor: pointer;
    overflow: hidden;
    img {
      overflow: hidden;
      // width: 100%;
      height: 200px;
      transition: all 0.2s;
    }
  }
  .detail-box {
    padding: 25px;

    h5 {
      font-weight: 600;
    }
    p {
      font-size: 15px;
    }
    h6 {
      margin-top: 10px;
    }
  }
  .options {
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1rem;
    a {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: $primary1;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 18px;
        height: auto;
        fill: $white;
      }
    }
  }
  &:hover {
    .img-box {
      z-index: -1;
      overflow: hidden;
      img {
        transform: scale(1.2);
      }
    }
  }
}
</style>
