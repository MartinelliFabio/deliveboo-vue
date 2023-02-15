<template>
  <HeroComponent :isVisible="false"></HeroComponent>

    <div class="cart container d-flex flex-column py-4">
        <h2 class="text-center my-4 display-4">I tuoi Ordini</h2>
        <h3>{{  }}</h3>
        <div class="row mb-5 justify-content-around">
            <div v-for="(item, i) in store.cartItems" class="cart-item col-sm-12 col-lg-6 col-md-12 col-xl-6 col-xxl-4">
                <div class="box">
                    <div class="img-box">
                        <img v-if="(`${item.image}`).includes('products_images')" :src="`${store.imagePath}${item.image}`" class="card-image" />
                        <img v-else="" :src="`${item.image}`" alt="" />
                    </div>
                    <div class="options">
                        <div class="text-capitalize my-3 p-2">
                            <h5 class="text-capitalize">{{ item.name }}</h5>
                            <p>
                                {{ item.ingredient }}
                            </p>
                        </div>
                        <div class="d-flex justify-content-center align-items-center box-button">
                            <button class="button fs-5" @click="decrementQ(item, i)"> - </button>
                            <span class="mx-4 fs-5">{{ item.quantity }}</span>
                            <button class="button fs-5" @click="incrementQ(item, i)"> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center my-5" v-if="store.cartItems.length >= 1"> 
            <button class="button btn-hover me-4" @click="clearCart()">Resetta</button>
            <button class="button btn-hover">Compra</button>
        </div>
    </div>
       
</template>

<script>
import { store } from '../store';
import HeroComponent from "../components/HeroComponent.vue";


    export default {
        components: {HeroComponent},
        data(){
            return{
                store,
            };
        },
        methods:{
            incrementQ(product, i) {
                store.cartItems[i].quantity++
                const item = JSON.parse(localStorage.getItem(product.slug))
                item.quantity++
                localStorage.setItem(product.slug, JSON.stringify(item))
            },
            decrementQ(product, i) {
                const item = JSON.parse(localStorage.getItem(product.slug))
                item.quantity--
                if (item.quantity) {
                    localStorage.setItem(product.slug, JSON.stringify(item))
                    store.cartItems[i].quantity--
                } else {
                    localStorage.removeItem(product.slug)
                    store.cartItems.splice(i, 1)
                }
            },
            clearCart() {
                localStorage.clear()
                store.cartItems = [];
            }
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
        mounted() {
            store.cartItems = this.getAllCart
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
.cart {
    

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
    }
    .button {
        appearance: none;
        background-color: $primary1;
        border: 2px solid $black;
        border-radius: 15px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        margin: 0;
        min-width: 0;
        outline: none;
        padding: 8px 18px;
        text-align: center;
        text-decoration: none;
        transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        // width: 100%;
        will-change: transform;

        &:disabled {
            pointer-events: none;
        }

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.8) 0 8px 15px;
            transform: translateY(-2px);
        }

        &:active {
            box-shadow: none;
            transform: translateY(0);
        }
    }

    .btn-hover {
        color: $primary2;

        &:hover {
            background-color: $primary2;
            color: $primary1;
        }
    }
    

    .box-button {
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>