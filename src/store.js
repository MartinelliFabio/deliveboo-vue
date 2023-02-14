import { reactive } from 'vue';


export const store = reactive({

    apiUrl: 'http://127.0.0.1:8000/api',
    imagePath: 'http://127.0.0.1:8000/storage/',

    mainMenuItem: [
        'Contact US',
        'Help Center / FAQs',
        'Shipping',
        'Returns',
        'Cult Concierge',
    ],
    dropDownMenuItem: [
        {
            title: 'About',
            voices: [

                'About',
                'Careers',
                'Glossary',
                'People and Planet',
            ],
            menuOpen: false,
        },
        {
            title: 'Legal',
            voices: [
                'Terms & Conditions',
                'Privacy Policy',
                'Coockie Policy',
                'Modern Slavery Policy',
                'Accessibility',
            ],
            menuOpen: false,
        },
        {
            title: 'Find Out More',
            voices: [
                'Cult Status',
                'Promotions',
                'Affiliates',
                'Refer A Friend',
            ],
            menuOpen: false,
        },
    ],
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    computed:{
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    methods:{
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
              });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been saved',
                showConfirmButton: false,
                timer: 1500
              });
              console.log(this.cartItems.length)
            }
        }    
    },
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
})
