<template>
    <div>
        <h2>Riepilogo Ordine</h2>
        <table>
            <thead>
                <tr>
                    <th class="first-th">Quantità</th>
                    <th class="text-center">Immagine</th>
                    <th class="text-center">Prodotto</th>
                    <th class="text-end last-th">Prezzo cad.</th>
                </tr>
            </thead>
            <tbody v-for="(item, i) in store.cartItems">
                <tr>
                    <td class="">
                        <span class="mx-3 fs-5">{{ item.quantity }}x</span>
                    </td>
                    <td class="text-center">
                        <div class="img-box">
                            <img v-if="(`${item.image}`).includes('products_images')" :src="`${store.imagePath}${item.image}`" class="thumbnail" />
                            <img v-else :src="`${item.image}`" alt="" class="thumbnail" />
                        </div>
                    </td>
                    <td class="text-capitalize text-center">
                        {{ item.name }}
                    </td>
                    <td class="text-end">
                        € {{ item.price }}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="3"></th>
                    <th class="text-end">Totale Carrello : €{{ totCart }}</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        name: 'OrderSummaryComponent',
        data() {
            return {
                store,
            }
        },
        methods: {
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
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

table {
    border-radius: 15px; 

    .img-box {
        height: 5.5rem;
        .thumbnail {
            height: 100%;
        }
    }
    
    width: 100%;
    // margn: 0 auto;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    .first-th {
        border-top-left-radius: 15px;
    }

    .last-th {
        border-top-right-radius: 15px;
    }

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
</style>