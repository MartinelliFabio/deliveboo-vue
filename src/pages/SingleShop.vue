<template>
  <HeroComponent :isVisible="false"></HeroComponent>
 
  
      <h2 class="text-center text-capitalize my-5 display-4">prodotti</h2>
      <!-- <ul v-if="shopkeeper.products">
          <li v-for="(item,index) in shopkeeper.products">
              {{ item.name }}
          </li>
      </ul> -->

 
  <section v-if="shopkeeper" class="food_section layout_padding mb-5">
  <div  v-if="shopkeeper.products" class="container ">
      <div class="row justify-content-around">

      
    <div v-for="(item, i) in shopkeeper.products" class="filters-content col-sm-12 col-lg-6 col-md-12 col-xl-6 col-xxl-4">
      <div class="">
        <div  class="all pizza">
          <div  class="box">
            <div>
              <div class="img-box">
                <img v-if="(`${item.image}`).includes('products_images')" :src="`${store.imagePath}${item.image}`" class="card-image" />
                <img v-else=""  :src="`${item.image}`" alt="" />
              </div>
              <div class="detail-box">
                <h5 class="text-capitalize">{{ item.name }}</h5>
                <p>
                  {{ item.ingredient }}
                </p>
                <div class="options">
                  <h6 class="me-3">&euro;&nbsp;{{ item.price }}</h6>
                  <a href="" :disabled="vueLocalStorage.includes(item.slug)" @click.prevent="addToCartId(item)">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 456.029 456.029"
                      style="enable-background: new 0 0 456.029 456.029"
                      xml:space="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                       c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                       C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                       c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                       C457.728,97.71,450.56,86.958,439.296,84.91z"
                          ></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                       c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                          ></path>
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
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
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import HeroComponent from "../components/HeroComponent.vue";
import Swal from 'sweetalert2';
import CartComponent from "../components/CartComponent.vue";

  export default {
      name:'SingleShop',
      components: { HeroComponent, CartComponent },
      data(){
          return{
              store,
              shopkeeper: null,
              products: [],
              vueLocalStorage: ''
          }
      },
      watch: {
        'store.cartItems': {
          handler() {
            this.getStorageKeys()
          },
          deep: true
        }
      },
      mounted() {
        this.getShop();
        store.cartItems = this.getAllCart
        this.getStorageKeys()
      },
      computed: {
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
          getShop() {
              axios.get(`${this.store.apiUrl}/shopkeepers/${this.$route.params.slug}`).then((response) => {
                // console.log(response.data.results)
                this.shopkeeper = response.data.results;
              });
          },
          addToCartId(item) {
            if(localStorage.length) {
              const keys = Object.keys(localStorage)
              const shopkeeperId = JSON.parse(localStorage.getItem(keys[0])).shopkeeper_id
              if(item.shopkeeper_id != shopkeeperId) {
                this.sendError()
                return
              } else {
                this.addToCart(item)
                return
              }
            }
            this.addToCart(item)
          },
          addToCart(item) {
            let index = store.cartItems.findIndex(product => product.slug === item.slug);
            if (index !== -1) {
              store.cartItems[index].quantity += 1;
              localStorage.setItem(item.slug, JSON.stringify(store.cartItems[index]));
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Il piatto è stato aggiornato',
                showConfirmButton: false,
                timer: 1500
              });
            } else {
              item.quantity = 1
              store.cartItems.push(item)
              localStorage.setItem(item.slug, JSON.stringify(item))
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Il piatto è stato aggiunto all\'ordine',
                showConfirmButton: false,
                timer: 1500
              });
            }
          },
          sendError() {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Non puoi ordinare da due ristoranti diversi',
              showConfirmButton: false,
              timer: 2000
            });
          },
          getStorageKeys() {
            this.vueLocalStorage = Object.keys(localStorage)
          }
    },    
  }

</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

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