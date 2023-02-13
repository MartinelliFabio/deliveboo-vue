<template>
  <section class="food_section layout_padding mb-5">
    <div class="container">
      <div class="filters-content">
        <div class="">
          <div class="all pizza">
            <div class="box">
              <div>
                <div class="img-box">
                  <img :src="`${product.image}`" alt="" />
                  <img :src="`${store.imageUrl}${product.image_link}`" :alt="product.name" class="card-image" />
                  {{ product.image }}
                </div>
                <div class="detail-box">
                  <h5 class="text-capitalize">{{ product.name }}</h5>
                  <p>
                    {{ product.ingredient }}
                </p>
                  <div class="options">
                    <h6 class="me-3">&euro;&nbsp;{{ product.price }}</h6>
                    <a href="" >
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 456.029 456.029"
                        style="enable-background: new 0 0 456.029 456.029"
                        xml:space="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                            ></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                            ></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                            ></path>
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "ProductCardComponent",

  data() {
    return {
      store,
     
    };
  },
  props: ["product"],
  methods: {
   
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
$white: #ffffff;
$black: #000000;
$primary1: #ffbe33;
$primary2: #222831;
$textCol: #1f1f1f;
a,
a:hover,
a:focus {
  text-decoration: none;
}

a:hover,
a:focus {
  color: initial;
}

.filters_menu {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 45px 0 20px 0;

  li {
    padding: 7px 25px;
    cursor: pointer;
    border-radius: 25px;

    &.active {
      background-color: $primary2;
      color: $white;
    }
  }
}
.box {
  position: relative;
  margin-top: 25px;
  background-color: $white;
  border-radius: 10px;
  color: $white;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(to bottom, #f1f2f3 25px, $primary2 25px);
  height: 410px;

  .img-box {
    background: #f1f2f3;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 215px;
    border-radius: 0 0 0 45px;
    margin: -1px;
    padding: 25px;

    img {
      max-width: 100%;
      max-height: 145px;
      transition: all 0.2s;
    }
  }

  .detail-box {
    padding: 25px;

    h5 {
      font-weight: 600;
    }

    p {
      font-size: 15px;
    }

    h6 {
      margin-top: 10px;
    }
  }

  .options {
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1rem;

    a {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: $primary1;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 18px;
        height: auto;
        fill: $white;
      }
    }
  }

  &:hover {
    .img-box {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
