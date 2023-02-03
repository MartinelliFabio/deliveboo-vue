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
                        <li class="nav-item active">
                            <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Conctact Us</a>
                        </li>
                    </ul>
                    <div class="user_option">
                        <a href="" class="user_link">
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </a>
                        <a class="cart_link" href="#">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                        <form class="form-inline">
                            <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                        <a href="" class="order_online">
                            Order Online
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    data() {
        return {
            isMenuOpen: false
        }
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

            &:hover,
            &.active {
                .nav-link {
                    color: $yellow;
                }
            }
        }
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
            margin: 0 10px;
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