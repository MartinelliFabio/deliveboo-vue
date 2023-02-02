<template>
    <div class="header-section">
        <div class="container">
           <nav class="navbar navbar-expand-lg">
                <a href="" class="navbar-brand">
                    DeliveBool
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=""> </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
        name: "HeaderComponent"
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.header-section {
    padding: 15px 0;

    .navbar-brand {
        font-weight: bold;
        font-size: 32px;
        // color: #ffffff;
        font-family: 'Dancing Script', cursive;
    }

    .navbar-nav {
        padding-left: 8%;

        .nav-item {
            .nav-link {
                padding: 5px 20px;
                // color: $white;
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
        // color: $white;
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
        }

        .user_link {
            // color: $white;

            &:hover {
                color: $yellow;
            }
        }

        .cart_link {
            display: flex;
            justify-content: center;
            align-items: center;
            // color: $white;
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
        background-color: $black;
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
            background-color: $black;
            top: -10px;
            border-radius: 5px;
            transition: all 0.3s;
        }

        &::after {
            top: 10px;
        }
    }

    &[aria-expanded="true"] {
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

@media (min-width: 1200px) {
    .container {
        max-width: 1170px;
    }
}

@media (max-width: 992px) {
    .header-section {

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
            padding: 5px 25px;
            margin: 5px 0;
        }
    }
}
</style>