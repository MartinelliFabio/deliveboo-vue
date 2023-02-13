<template>
    <div>
  
        <ul>
      <li  v-for="item in cartItems" >
        <span >{{ item.name }}</span>
        <span> - {{ item.price }}</span>
        <span>-{{ item.quantity }}</span>
        <button @click="removeFromCart(item)">Remove</button>
      </li>
    </ul>
    Total: €{{ cartTotal }}
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
            };
        },
        props: ["cart"],
        computed:{
            cartTotal(){
                return ( this.cartItems.reduce((total,item)=>total+item.price,0)).toFixed(2);
            }
        },
        methods:{
            removeFromCart(item) {
                this.cartItems.splice(item, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },
        }
    }
</script>

<style lang="scss" scoped>

</style>