<template>
       <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                       
                        <tbody>
                            <tr v-for="item in CartItems" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>
                                    <img :src="item.image" 
                                    class="fluid rounded"
                                    width="60"
                                    height="60"    
                                    :alt="item.name" />
                                </td>
                                <td>
                                    {{item.name}}
                                </td>
                                <td>
                                    <i 
                                        @click="data.incrementQ(item)"
                                        class="bi bi-caret-up"></i>
                                    <span class="mx-2">
                                        {{item.quantity}}
                                    </span>
                                    <i 
                                        @click="data.decrementQ(item)"
                                        class="bi bi-caret-down"></i>
                                </td>
                                <td>
                                    ${{item.price}}
                                </td>
                                <!-- <td>
                                    ${{item.price * item.quantity}} 
                                </td> -->
                                <td>
                                    <i 
                                        @click="data.removeFromCart(item)"
                                        class="bi bi-cart-x text-danger"></i>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="3" class="text-center">
                                    Total
                                </th>
                                <td colSpan="3" class="text-center">
                                    <span class="badge bg-danger rounded-pill">
                                        ${{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

    export default {
        data(){
            return{
                store,
                cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
            };
        },
        methods:{
            incrementQ(item) {
        let index = this.cartItems.findIndex(product => product.id === item.id);
        if(index !== -1) {
            this.cartItems[index].quantity += 1;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
            });
        }
    },
    decrementQ(item) {
        let index = this.cartItems.findIndex(product => product.id === item.id);
        if(index !== -1) {
            this.cartItems[index].quantity -= 1;
            if(this.cartItems[index].quantity === 0){
                this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            }
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
            });
        }
    },
    removeFromCart(item) {
        this.cartItems = this.cartItems.filter(product => product.id !== item.id);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your item has been removed',
          showConfirmButton: false,
          timer: 1500
        });
    }
        },
        props: ["cart"],
      
    }
</script>

<style lang="scss" scoped>
</style>