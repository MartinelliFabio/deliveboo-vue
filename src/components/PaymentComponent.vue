<template>
    <body>
      <form id="payment-form" :action="`${store.apiUrl}/order/payment`" method="post">
        <!-- Putting the empty container you plan to pass to
          `braintree.dropin.create` inside a form will make layout and flow
          easier to manage -->
        <div id="dropin-container"></div>
        <input type="submit" />
        <input type="hidden" id="nonce" name="payment_method_nonce"/>
      </form>
    </body>
</template>

<script>
import axios from "axios";
import { store } from '../store';
    export default {
        name: 'PaymentComponent',
        data() {
            return {
                store,
            }
        },
        mounted() {
            // Step two: create a dropin instance using that container (or a string
            //   that functions as a query selector such as `#dropin-container`)
            const form = document.getElementById('payment-form');
            axios.get(`${store.apiUrl}/order`).then((response) => {
                braintree.dropin.create({
                    authorization: response.data.token,
                    container: '#dropin-container'
                // ...plus remaining configuration
            },(error, dropinInstance) => {
                if (error) console.error(error);
                    form.addEventListener('submit', event => {
                        event.preventDefault();

                        dropinInstance.requestPaymentMethod((error, payload) => {
                            if (error) console.error(error);

                            // Step four: when the user is ready to complete their
                            //   transaction, use the dropinInstance to get a payment
                            //   method nonce for the user's selected payment method, then add
                            //   it a the hidden field before submitting the complete form to
                            //   a server-side integration
                            document.getElementById('nonce').value = payload.nonce;
                            // form.submit();
                            axios.post(`${ store.apiUrl }/order/payment`, { payment_method_nonce: payload.nonce, amount: this.totCart }).then((response) => {
                            store.paymentStatus = response.data.success;
                            store.saveOrder = !store.saveOrder;
                            console.log(response.data);
                        })
                        });
                    });
                });
            });
        },
        computed: {
            totCart() {
                return (store.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)).toFixed(2);
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>