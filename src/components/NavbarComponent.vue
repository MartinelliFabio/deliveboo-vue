<template>
    <div class="header-section">
        <div class="container p-0">
            <nav class="navbar container navbar-expand-lg">
                <div class="navbar-brand">
                    <router-link :to="{ name: 'homepage' }"><img src="/img/Deliveboo_y-01.png" alt="Deliveboo" class="logo"></router-link>
                </div>
                <button class="navbar-toggler" @click="isMenuOpen = !isMenuOpen" :class="isMenuOpen ? 'is-active' : ''">
                    <span class=""> </span>
                </button>
                <div class="collapse navbar-collapse" :class="isMenuOpen ? 'd-block' : ''">
                    <ul class="navbar-nav mx-auto">
                        <!-- <li class="nav-item active">
                            <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                        </li> -->
                        <li  class="nav-item active"  v-for="(item, index) in navItems" :key="index">
                            <router-link :to="{ name: item.routeName }" active-class="active " class=" nav-link">
                                {{ item.label }}
                            </router-link>
                        </li>
                        
                    </ul>
                    <div class="user_option">
                        <a href="" class="user_link">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </a>
                        <router-link to="/cart">
                            <span class="cart_link">
                                <i class="fa-solid fa-cart-shopping"></i> 
                                <sup class="ms-1 fs-6 quantity-order">{{ store.cartItems.length }}</sup>
                            </span>
                            
                        </router-link>
                        <form class="form-inline">
                            <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                        <div v-if="store.cartItems.length">
                            <router-link to="/checkout" @click="priceTotLocal()">
                                <a href="" class="order_online">
                                    Order Online
                                </a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: "NavbarComponent",
    data() {
        return {
            store,
            isMenuOpen: false,
            navItems:[
                {
                    label: "Home",
                    routeName: "homepage",
                },
                {
                    label: "Ristoranti",
                    routeName: "shopkeepers",
                },
                {
                    label: "Chi Siamo",
                    routeName: "about",
                },
            ]
        }
    },
    methods: {
        priceTotLocal() {
            store.priceTotLocal = this.totCart;
        }
    },
    computed: {
        totCart() {
            return (store.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)).toFixed(2);
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;


.header-section {

    .logo {
        transform: scale(0.8);
    }

    .navbar {
        width: 100%;
        z-index: 9999;

    }

    .navbar-nav {

        .nav-item {
            .nav-link {
                padding: 5px 20px;
                color: $white;
                text-align: center;
                text-transform: uppercase;
                border-radius: 5px;
                transition: all 0.3s;
            }

            &:hover
            {
                .nav-link {
                    color: $yellow;
                }
            }
        }
    }

    .active{
    
        color: $yellow;
                    
    }
 
    .nav_search-btn {
        width: auto;
        height: auto;
        padding: 0;
        border: none;
        color: $white;
        margin: 0 10px;

        &:hover {
            color: $yellow;
        }
    }

    .user_option {
        display: flex;
        align-items: center;

        a {
            margin: 0 12px;
            color: $black;
        }

        .user_link {
            color: $white;

            &:hover {
                color: $yellow;
            }
        }

        .cart_link {
            display: flex;
            justify-content: center;
            align-items: center;
            color: $white;
            width: 17px;
            height: auto;
            fill: $white;
            margin-bottom: 2px;

            &:hover {
                color: $yellow;
            }

            .quantity-order {
                color: $primary1;
            }
        }
     
        .order_online {
            display: inline-block;
            padding: 8px 30px;
            color: $white;
            border-radius: 45px;
            transition: all 0.3s;
            border: none;
            background-color: $yellow;
        }
    }

}

.navbar-toggler {
    outline: none;

    padding: 0;
    width: 37px;
    height: 42px;
    transition: all 0.3s;

    span {
        display: block;
        width: 35px;
        height: 4px;
        background-color: $white;
        margin: 7px 0;
        transition: all 0.3s;
        position: relative;
        border-radius: 5px;
        transition: all 0.3s;

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: $white;
            top: -10px;
            border-radius: 5px;
            transition: all 0.3s;
        }

        &::after {
            top: 10px;
        }
    }

    &.is-active {
        transform: rotate(360deg);

        span {
            transform: rotate(45deg);

            &::before,
            &::after {
                transform: rotate(90deg);
                top: 0;
            }
        }

    }
}
.header-section .user_option a{
    color: white;
}
@media (max-width: 992px) {
    .header-section {

        .navbar-brand {
            margin: 0;
        }
        

        .navbar-nav {
            padding-top: 15px;
            padding-left: 0;
            align-items: center;
        }

        .user_option {
            justify-content: center;
            margin-top: 15px;
        }

        .navbar-nav .nav-item .nav-link {
            // padding: 5px 25px;
            margin: 5px 0;
        }
    }
}

@media (max-width: 576px) {
    .header-section {

        .navbar {
            padding-left: 0px;
            padding-right: 22px;
        }
    }
}
</style>