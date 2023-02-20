<template>
    <HeroComponent :isVisible="false"></HeroComponent>

    <section class="container">
    <h1 class="text-center my-5 display-4">Checkout</h1>
        <div class="row mb-5">
            <div class="col-xl-6 col-md-12 col-12">
                <OrderSummaryComponent/>
            </div>
            <div class="col-xl-6 col-md-12 col-12">
                <h2>Inserisci i tuoi dati</h2>
                <form @submit.prevent="submitForm()" id="order-form">
                    <div>
                        <label for="name">Nome <span>*</span></label>
                        <input type="text" placeholder="Nome" id="name" name="name" v-model="customerName" :class="{ 'is-invalid': errors.name }" :readonly="pay" required maxlength="100">
                        <p v-for="(error, index) in errors.name" :key="index" class="invalid-feedback">
                            {{ error }}
                        </p>
                    </div>
                    <div>
                        <label for="surname">Cognome <span>*</span></label>
                        <input type="text" placeholder="Cognome" id="surname" name="surname" v-model="customerSurname" :class="{ 'is-invalid': errors.surname }" :readonly="pay" required maxlength="100">
                        <p v-for="(error, index) in errors.surname" :key="index" class="invalid-feedback">
                            {{ error }}
                        </p>
                    </div>
                    <div>
                        <label for="email">E-Mail <span>*</span></label>
                        <input type="email" placeholder="E-mail" id="email" name="email" v-model="customerEmail" :class="{ 'is-invalid': errors.email }" :readonly="pay" required maxlength="100">
                        <p v-for="(error, index) in errors.email" :key="index" class="invalid-feedback">
                            {{ error }}
                        </p>
                    </div>
                    <div>
                        <label for="phone">Telefono <span>*</span></label>
                        <input type="text" placeholder="Telefono" id="phone" name="phone" v-model="customerPhone" :class="{ 'is-invalid': errors.phone }" :readonly="pay" required maxlength="50">
                        <p v-for="(error, index) in errors.phone" :key="index" class="invalid-feedback">
                            {{ error }}
                        </p>                    
                    </div>
                    <div>
                        <label for="address">Indirizzo <span>*</span></label>
                        <input type="text" placeholder="Indirizzo" id="address" name="address" v-model="customerAddress" :readonly="pay" required maxlength="255">
                    </div>
                    <button class="mt-5 button btn-hover text-uppercase" :disabled="store.loading" @click.prevent="validate()">{{ pay ? 'Modifica i dati' : 'Procedi al pagamento' }}</button>
                    <p class="m-0 mt-4 field"><span>*</span> i campi sono obbligatori</p>
                </form>
            </div>
        </div>
        <div v-if="pay" class="my-5">
            <PaymentComponent/>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import { store } from '../store';
import HeroComponent from "../components/HeroComponent.vue";
import PaymentComponent from "../components/PaymentComponent.vue";
import OrderSummaryComponent from '../components/OrderSummaryComponent.vue';
import Swal from 'sweetalert2';

    export default {
        components: { HeroComponent, PaymentComponent, OrderSummaryComponent },
        data() {
            return {
                store,
                shopkeeper: null,
                customerName: "",
                customerSurname: "",
                customerEmail: "",
                customerPhone: "",
                customerAddress: "",
                pay: false,
                errors: {}
            };
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
            submitForm() {
                // Costruisce l'oggetto "order" con i dati del form
                const data = {
                    name: this.customerName,
                    surname: this.customerSurname,
                    email: this.customerEmail,
                    phone: this.customerPhone,
                    address: this.customerAddress,
                    price_tot: this.totCart,
                    cart: store.cartItems,
                    status: 'in attesa', // Lo stato del pagamento viene impostato su "in attesa"
                }
                // Invia l'oggetto "data" al server tramite una richiesta HTTP POST
                axios.post(`${ store.apiUrl }/purchase`, data, {headers : {"Content-Type": "multipart/form-data" }})
                .then((response)=>{ 
                    console.log(response.data)
                    console.log(response.data.results)
                    console.log(response.data.order)
                    store.loading = false;
                    // Verifica lo stato della risposta
                    if (!response.data.success) {
                        this.errors = response.data.errors;
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'I dati non sono corretti',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        // Se la risposta è OK, siamo riusciti a creare l'ordine
                        // Possiamo quindi resettare il form e mostrare un messaggio di conferma
                        this.customerName = "";
                        this.customerSurname = "";
                        this.customerEmail = "";
                        this.customerAddress = "";
                        this.customerPhone = "";
                        localStorage.clear();
                        store.cartItems = [];
                        setTimeout(() => this.pay = false, 2000)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'L\'ordine è stato effettuato',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch((error) => {
                    console.error(error);
                    alert("Si è verificato un errore nella creazione dell'ordine");
                });
            },
            validate() {
                if (this.pay) {
                    this.pay = false
                    return
                }
                if (!store.cartItems.length) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Il carrello è vuoto',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return
                }
                const form = document.getElementById('order-form')
                const check = form.checkValidity()
                console.log(check)
                const data = {
                    name: this.customerName,
                    surname: this.customerSurname,
                    email: this.customerEmail,
                    phone: this.customerPhone,
                    address: this.customerAddress,
                }
                if (check) {
                    axios.post(`${store.apiUrl}/checkform`, data, { headers: { "Content-Type": "multipart/form-data" } }).then((response) => {
                        if (!response.data.success) {
                            this.errors = response.data.errors;
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'I dati non sono corretti',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        } else {
                            this.errors = {}
                            this.pay = true
                        }
                    })
                } else {
                    form.reportValidity()
                }
            },
            priceTotLocal() {
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
            totCart() {
                return (store.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)).toFixed(2);
            },
        },
        mounted() {
            store.cartItems = this.getAllCart;
            this.getShop();
        },
        watch: {
            'store.saveOrder': {
                handler() {
                    this.submitForm()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

form {
    width: 100%;
    background-color: $primary2;
    padding: 50px;
    border-radius: 15px;
    // max-width: 400px;

    label {
        color: $white;
        margin-top: 10px;

        span {
            color: red;
        }
    }

    input {
        width: 100%;
        padding: 5px;
        border-radius: 5px;
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

    .field {
        color: grey;

        span {
            color: red;
        }
    }
}

</style>