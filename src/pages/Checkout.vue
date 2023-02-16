<template>
    <HeroComponent :isVisible="false"></HeroComponent>
    <section class="container">
        <div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Nome</label>
                <input type="text" id="name" v-model="customerName" required>
            </div>
            <div>
                <label for="surname">Cognome</label>
                <input type="text" id="surname" v-model="customerSurname" required>
            </div>
            <div>
                <label for="email">Mail</label>
                <input type="email" id="email" v-model="customerEmail" required>
            </div>
            <div>
                <label for="phone">Telefono</label>
                <input type="text" id="phone" v-model="customerPhone" required>
            </div>
            <div>
                <label for="address">Indirizzo</label>
                <input type="text" id="address" v-model="customerAddress" required>
            </div>
            <div>
                <label for="price_tot">Importo Totale</label>
                <input type="text" id="price_tot" :value="{{ store.priceTotLocal }}" disabled>
            </div>
            <button type="submit">Invia ordine</button>
        </form>

        </div>
    </section>
</template>

<script>
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
                priceTot: 0,
            };
        },
        methods: {
            async submitForm() {
                // Costruisce l'oggetto "order" con i dati del form
                const order = {
                    name: this.customerName,
                    surname: this.customerSurname,
                    email: this.customerEmail,
                    phone: this.customerPhone,
                    address: this.customerAddress,
                    price_tot: this.priceTot,
                    status: "in attesa di pagamento", // Lo stato del pagamento viene impostato su "in attesa"
                };

                // Invia l'oggetto "order" al server tramite una richiesta HTTP POST
                try {
                    const response = await fetch("/api/orders", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(order),
                    });

                    // Verifica lo stato della risposta
                    if (!response.ok) {
                        throw new Error("Errore nella creazione dell'ordine");
                    }

                    // Se la risposta è OK, siamo riusciti a creare l'ordine
                    // Possiamo quindi resettare il form e mostrare un messaggio di conferma
                    this.customerName = "";
                    this.customerSurname = "";
                    this.customerEmail = "";
                    this.customerAddress = "";
                    this.customerPhone = "";
                    this.priceTot = 0;
                    alert("Il tuo ordine è stato creato con successo!");
                } catch (error) {
                    console.error(error);
                    alert("Si è verificato un errore nella creazione dell'ordine");
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>