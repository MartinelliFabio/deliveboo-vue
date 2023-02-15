<template>
    <div class="container p-0" style="overscroll-behavior-y: contain;">
        <Carousel :autoplay="2000" :wrap-around="true">
            <Slide v-for="slide in 3" :key="slide">
            <div class="carousel__item">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 col-lg-7 col-xl-6 col-xxl-5 col-sm-12 col-12">
                            <div class="detail-box d-flex flex-column align-items-start">
                                <h1>I piatti che ami
                                Comodamente a casa tua</h1>
                                <p>
                                    Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error
                                    unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                </p>
                                <div class="btn-box">
                                    <a class="btn-menu">Go to Menu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Slide> 
            <template #addons>
                <pagination />
            </template>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
    name: 'CarouselComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
})
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

h1 {
    color: $white;
    font-size: 3.4rem;
    font-weight: bold;
    margin-bottom: 15px;
    white-space: break-spaces;
}

.carousel {
    padding: 0;
    text-align: start !important;

    .carousel__item {
        width: 100%;
        color: var(--vc-clr-white);
        display: flex;
        float: left;

        .detail-box {
            margin-bottom: 145px;

            p {
                font-size: 14px;
            }

            a {
                display: inline-block;
                padding: 10px 45px;
                background-color: $yellow;
                color: $white;
                border-radius: 45px;
                -webkit-transition: all 0.3s;
                transition: all 0.3s;
                border: none;
                margin-top: 10px;
                cursor: pointer;
            }
        }
    }

    .carousel__slide {
        padding: 10px;
        flex-direction: column;
        align-items: flex-start;
    }

    .carousel__pagination {
        padding: 0 10px;
        align-items: center;

        li.carousel__pagination-item {
            margin-right: 20px;
        }
    }

}
</style>