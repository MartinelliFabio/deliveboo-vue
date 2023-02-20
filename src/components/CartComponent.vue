<template>
    <HeroComponent :isVisible="false"></HeroComponent>
    <div class="cart container d-flex flex-column py-4">
        <h2 class="text-center my-4 display-4">Il tuo Ordine</h2>
        <div class="row my-5 justify-content-around" v-if="store.cartItems.length">
            <div class="back mb-5" v-if="shopkeeper">
            </div>
                <table>
                    <thead>
                        <tr>
                            <th>Quantità</th>
                            <th class="text-center">Immagine</th>
                            <th class="text-center">Prodotto</th>
                            <th class="text-center">Ingredienti</th>
                            <th class="text-end">Prezzo cad.</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, i) in store.cartItems">
                        <tr>
                            <td class="">
                                <button class="button add-subtract" @click="decrementQ(item, i)"> - </button>
                                <span class="mx-3 fs-5">{{ item.quantity }}</span>
                                <button class="button add-subtract" @click="incrementQ(item, i)"> + </button>
                            </td>
                            <td class="">
                                <div class="img-box">
                                    <img v-if="(`${item.image}`).includes('products_images')" :src="`${store.imagePath}${item.image}`" class="cart-img" />
                                    <img v-else :src="`${item.image}`" alt="" class="cart-img" />
                                </div>
                            </td>
                            <td class="text-capitalize text-center">
                                {{ item.name }}
                            </td>
                            <td class="text-capitalize ingredients">
                                {{ item.ingredient }}
                            </td>
                            <td class="text-end">
                                € {{ item.price }}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="4"></th>
                            <th>Totale carrello: €{{ totCart }}</th>
                        </tr>
                    </tfoot>
                </table>
        </div>
        <div v-else class="no-orders mt-5 container d-flex flex-column align-items-center justify-content-center">
            <div class="empty-cart">
                <svg viewBox="656 573 264 182" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect id="bg-line" stroke="none" fill-opacity="0.2" fill="#FFE100" fill-rule="evenodd" x="656" y="624" width="206" height="38" rx="19"></rect>
                    <rect id="bg-line" stroke="none" fill-opacity="0.2" fill="#FFE100" fill-rule="evenodd" x="692" y="665" width="192" height="29" rx="14.5"></rect>
                    <rect id="bg-line" stroke="none" fill-opacity="0.2" fill="#FFE100" fill-rule="evenodd" x="678" y="696" width="192" height="33" rx="16.5"></rect>
                    <g id="shopping-bag" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(721.000000, 630.000000)">
                        <polygon id="Fill-10" fill="#FFA800" points="4 29 120 29 120 0 4 0"></polygon>
                        <polygon id="Fill-14" fill="#FFE100" points="120 29 120 0 115.75 0 103 12.4285714 115.75 29"></polygon>
                        <polygon id="Fill-15" fill="#FFE100" points="4 29 4 0 8.25 0 21 12.4285714 8.25 29"></polygon>
                        <polygon id="Fill-33" fill="#FFA800" points="110 112 121.573723 109.059187 122 29 110 29"></polygon>
                        <polygon id="Fill-35" fill-opacity="0.5" fill="#FFFFFF" points="2 107.846154 10 112 10 31 2 31"></polygon>
                        <path d="M107.709596,112 L15.2883462,112 C11.2635,112 8,108.70905 8,104.648275 L8,29 L115,29 L115,104.648275 C115,108.70905 111.7365,112 107.709596,112" id="Fill-36" fill="#FFE100"></path>
                        <path d="M122,97.4615385 L122,104.230231 C122,108.521154 118.534483,112 114.257931,112 L9.74206897,112 C5.46551724,112 2,108.521154 2,104.230231 L2,58" id="Stroke-4916" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <polyline id="Stroke-4917" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="2 41.5 2 29 122 29 122 79"></polyline>
                        <path d="M4,50 C4,51.104 3.104,52 2,52 C0.896,52 0,51.104 0,50 C0,48.896 0.896,48 2,48 C3.104,48 4,48.896 4,50" id="Fill-4918" fill="#000000"></path>
                        <path d="M122,87 L122,89" id="Stroke-4919" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <polygon id="Stroke-4922" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="4 29 120 29 120 0 4 0"></polygon>
                        <path d="M87,46 L87,58.3333333 C87,71.9 75.75,83 62,83 L62,83 C48.25,83 37,71.9 37,58.3333333 L37,46" id="Stroke-4923" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M31,45 C31,41.686 33.686,39 37,39 C40.314,39 43,41.686 43,45" id="Stroke-4924" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M81,45 C81,41.686 83.686,39 87,39 C90.314,39 93,41.686 93,45" id="Stroke-4925" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M8,0 L20,12" id="Stroke-4928" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M20,12 L8,29" id="Stroke-4929" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M20,12 L20,29" id="Stroke-4930" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M115,0 L103,12" id="Stroke-4931" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M103,12 L115,29" id="Stroke-4932" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                        <path d="M103,12 L103,29" id="Stroke-4933" stroke="#000000" stroke-width="3" stroke-linecap="round"></path>
                    </g>
                    <g id="glow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(768.000000, 615.000000)">
                        <rect id="Rectangle-2" fill="#000000" x="14" y="0" width="2" height="9" rx="1"></rect>
                        <rect fill="#000000" transform="translate(7.601883, 6.142354) rotate(-12.000000) translate(-7.601883, -6.142354) " x="6.60188267" y="3.14235449" width="2" height="6" rx="1"></rect>
                        <rect fill="#000000" transform="translate(1.540235, 7.782080) rotate(-25.000000) translate(-1.540235, -7.782080) " x="0.54023518" y="6.28207994" width="2" height="3" rx="1"></rect>
                        <rect fill="#000000" transform="translate(29.540235, 7.782080) scale(-1, 1) rotate(-25.000000) translate(-29.540235, -7.782080) " x="28.5402352" y="6.28207994" width="2" height="3" rx="1"></rect>
                        <rect fill="#000000" transform="translate(22.601883, 6.142354) scale(-1, 1) rotate(-12.000000) translate(-22.601883, -6.142354) " x="21.6018827" y="3.14235449" width="2" height="6" rx="1"></rect>
                    </g>
                    <polygon id="plus" stroke="none" fill="#7DBFEB" fill-rule="evenodd" points="689.681239 597.614697 689.681239 596 690.771974 596 690.771974 597.614697 692.408077 597.614697 692.408077 598.691161 690.771974 598.691161 690.771974 600.350404 689.681239 600.350404 689.681239 598.691161 688 598.691161 688 597.614697"></polygon>
                    <polygon id="plus" stroke="none" fill="#EEE332" fill-rule="evenodd" points="913.288398 701.226961 913.288398 699 914.773039 699 914.773039 701.226961 917 701.226961 917 702.711602 914.773039 702.711602 914.773039 705 913.288398 705 913.288398 702.711602 911 702.711602 911 701.226961"></polygon>
                    <polygon id="plus" stroke="none" fill="#FFA800" fill-rule="evenodd" points="662.288398 736.226961 662.288398 734 663.773039 734 663.773039 736.226961 666 736.226961 666 737.711602 663.773039 737.711602 663.773039 740 662.288398 740 662.288398 737.711602 660 737.711602 660 736.226961"></polygon>
                    <circle id="oval" stroke="none" fill="#A5D6D3" fill-rule="evenodd" cx="699.5" cy="579.5" r="1.5"></circle>
                    <circle id="oval" stroke="none" fill="#CFC94E" fill-rule="evenodd" cx="712.5" cy="617.5" r="1.5"></circle>
                    <circle id="oval" stroke="none" fill="#8CC8C8" fill-rule="evenodd" cx="692.5" cy="738.5" r="1.5"></circle>
                    <circle id="oval" stroke="none" fill="#3EC08D" fill-rule="evenodd" cx="884.5" cy="657.5" r="1.5"></circle>
                    <circle id="oval" stroke="none" fill="#66739F" fill-rule="evenodd" cx="918.5" cy="681.5" r="1.5"></circle>
                    <circle id="oval" stroke="none" fill="#C48C47" fill-rule="evenodd" cx="903.5" cy="723.5" r="1.5"></circle>
                    <circle id="oval" stroke="none" fill="#A24C65" fill-rule="evenodd" cx="760.5" cy="587.5" r="1.5"></circle>
                    <circle id="oval" stroke="#66739F" stroke-width="2" fill="none" cx="745" cy="603" r="3"></circle>
                    <circle id="oval" stroke="#EFB549" stroke-width="2" fill="none" cx="716" cy="597" r="3"></circle>
                    <circle id="oval" stroke="#FFE100" stroke-width="2" fill="none" cx="681" cy="751" r="3"></circle>
                    <circle id="oval" stroke="#3CBC83" stroke-width="2" fill="none" cx="896" cy="680" r="3"></circle>
                    <polygon id="diamond" stroke="#C46F82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" points="886 705 889 708 886 711 883 708"></polygon>
                    <path d="M736,577 C737.65825,577 739,578.34175 739,580 C739,578.34175 740.34175,577 742,577 C740.34175,577 739,575.65825 739,574 C739,575.65825 737.65825,577 736,577 Z" id="bubble-rounded" stroke="#3CBC83" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                </svg>
      <div class="my-5 empty-cart-description">
          <h3>Il Carrello è Vuoto!</h3>
          <router-link :to="'/shopkeepers'">
              <p>Torna indietro nella sezione dei ristoranti. <a href="#"><span>Clicca Qui!</span></a></p>
          </router-link>
      </div>
    </div> 
        </div>
        <div class="text-center my-5" v-if="store.cartItems.length >= 1"> 
            <button class="button btn-hover me-4" @click="resetOrder()">Resetta</button>
            <router-link to="/checkout" @click="priceTotLocal()">
                <button class="button btn-hover">Procedi all'ordine</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from "axios";
import HeroComponent from "../components/HeroComponent.vue";
import Swal from 'sweetalert2';

    export default {
        components: {HeroComponent},
        data(){
            return{
                store,
                shopkeeper: null
            };
        },
        methods:{
            getShop() {
                axios
                    .get(`${this.store.apiUrl}/shopkeepers/${this.$route.params.slug}`)
                    .then((response) => {
                        // console.log(response.data.results)
                        this.shopkeeper = response.data.results;

                        // this.isLoading = false;
                    });
            },
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
            },
            resetOrder() {
                Swal.fire({
                    title: 'Sei sicuro di annullare l\'ordine?',
                    text: "Non sarai più in grado di recuperarlo!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Annulla',
                    confirmButtonText: 'Si, cancella!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.clearCart();
                        Swal.fire(
                            'Eliminato!',
                            'Il tuo ordine è stato cancellato.',
                            'success'
                        )
                    }
                })
            },
            priceTotLocal(){
                store.priceTotLocal = this.totCart;
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
            totCart(){
                return (store.cartItems.reduce((total, item) => total + (item.price * item.quantity) , 0)).toFixed(2);
            },
        },
        mounted() {
            store.cartItems = this.getAllCart;
            this.getShop();
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
.cart {

    .img-box {
        width: 15rem;
    }
    
    .back {
        a {
            color: inherit;
            text-decoration: none;
        }

        a {
            background:
                linear-gradient(
                    to right,
                        rgba(100, 200, 200, 1),
                        rgba(100, 200, 200, 1)
                    ),
                linear-gradient(
                    to right,
                        rgba(255, 0, 0, 1),
                        rgba(255, 0, 180, 1),
                        rgba(0, 100, 200, 1)
                );
                background-size: 100% 3px, 0 3px;
                background-position: 100% 100%, 0 100%;
                background-repeat: no-repeat;
                transition: background-size 400ms;
            }

        a:hover {
            background-size: 0 3px, 100% 3px;
        }
    }

    .button {
        appearance: none;
        background-color: $primary1;
        border: 1px solid $black;
        border-radius: 15px;
        box-sizing: border-box;
        color: $primary2;
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

    .add-subtract {
        font-size: 20px;
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

    .no-orders {
        .empty-cart {
            width: 50vw;
            margin: 0 auto;
            text-align: center;
            // font-family: 'Maison Neue';
            // font-weight: 300;

            svg {
                max-width: 60%;
                padding: 1rem;
            }
            
            #oval, #plus, #diamond, #bubble-rounded {
                animation: plopp 4s ease-out infinite;

                @for $i from 1 through 16 {

                    &:nth-child(#{$i}) {
                        animation-delay: -240 * $i + "ms";
                    }
                }
                
            }
        
            #bg-line {
                &:nth-child(2) {
                    fill-opacity: .3;
                }
                &:nth-child(3) {
                    fill-opacity: .4;
                }
            }
                
            @keyframes plopp {
                0% {
                    transform: translate(0, 0);
                    opacity: 1;
                }
                
                100% {
                    transform: translate(0, -10px);
                    opacity: 0;
                }
                
            }

            h3 {
                font-size: 2rem;
                line-height: 2rem;
                margin: 0;
                padding: 0;
                font-weight: 600;
            }
                
            p {
                color: rgba(0,0,0,0.5);
                font-size: 18px;
                line-height: 24px;
                max-width: 80%;
                margin: 1.25rem auto 0 auto;  
            }            
        }

        .empty-cart-description {
            a {
                color: inherit;
                text-decoration: none;
            }

            a {
                background:
                    linear-gradient(
                        to right,
                            rgba(100, 200, 200, 1),
                            rgba(100, 200, 200, 1)
                        ),
                    linear-gradient(
                        to right,
                            rgba(255, 0, 0, 1),
                            rgba(255, 0, 180, 1),
                            rgba(0, 100, 200, 1)
                    );
                    background-size: 100% 3px, 0 3px;
                    background-position: 100% 100%, 0 100%;
                    background-repeat: no-repeat;
                    transition: background-size 400ms;
                }

            a:hover {
                background-size: 0 3px, 100% 3px;
            }
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

        thead tr {
            background-color: $primary2;
            color: $white;
            text-align: left;
        }

        th,
        td {
            padding: 12px 15px;
        }

        tbody tr {
            border-bottom: 1px solid $border-grey;
        }

        tbody tr:nth-of-type(even) {
            background-color: $light-grey;
        }

        tbody tr:last-of-type {
            border-bottom: 2px solid $primary2;
        }

        button {
            color: $white;
            }
    }
}
</style>