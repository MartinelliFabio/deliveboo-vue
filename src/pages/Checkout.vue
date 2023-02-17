<template>
    <HeroComponent :isVisible="false"></HeroComponent>

    <section class="container">
        <div>
        <h1>Checkout</h1>
        <form @submit.prevent="submitForm()">
            <div>
                <label for="name">Nome</label>
                <input type="text" id="name" name="name" v-model="customerName" required>
            </div>
            <div>
                <label for="surname">Cognome</label>
                <input type="text" id="surname" name="surname" v-model="customerSurname" required>
            </div>
            <div>
                <label for="email">Mail</label>
                <input type="email" id="email" name="email" v-model="customerEmail" required>
            </div>
            <div>
                <label for="phone">Telefono</label>
                <input type="text" id="phone" name="phone" v-model="customerPhone" required>
            </div>
            <div>
                <label for="address">Indirizzo</label>
                <input type="text" id="address" name="address" v-model="customerAddress" required>
            </div>
            <div>
                <label for="price_tot">Importo Totale</label>
                <span>{{ totCart }}</span>
            </div>
            <button type="submit">Invia ordine</button>
        </form>

        </div>
    </section>
</template>

<script>
    import axios from "axios";
    import { store } from '../store';
    import HeroComponent from "../components/HeroComponent.vue";
    export default {
        components: { HeroComponent },
        data() {
            return {
                store,
                customerName: "",
                customerSurname: "",
                customerEmail: "",
                customerPhone: "",
                customerAddress: "",
            };
        },
        methods: {
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
                    status: "in attesa di pagamento", // Lo stato del pagamento viene impostato su "in attesa"
                }
                // Invia l'oggetto "data" al server tramite una richiesta HTTP POST
                axios.post(`${ store.apiUrl }/purchase`, data, {headers : {"Content-Type": "multipart/form-data" }})
                .then((response)=>{ 
                    console.log(response.data)
                    console.log(response.data.results)
                    console.log(response.data.order)

                    // Verifica lo stato della risposta
                    // if (!response.ok) {
                    //     throw new Error("Errore nella creazione dell'ordine");
                    // }

                    // Se la risposta è OK, siamo riusciti a creare l'ordine
                    // Possiamo quindi resettare il form e mostrare un messaggio di conferma
                    this.customerName = "";
                    this.customerSurname = "";
                    this.customerEmail = "";
                    this.customerAddress = "";
                    this.customerPhone = "";
                    localStorage.clear();
                    store.cartItems = [];
                    alert("Il tuo ordine è stato creato con successo!");
                })
                .catch((error) => {
                    console.error(error);
                    alert("Si è verificato un errore nella creazione dell'ordine");
                });
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
            store.cartItems = this.getAllCart
        }
    }
</script>

<style lang="scss" scoped>

</style>