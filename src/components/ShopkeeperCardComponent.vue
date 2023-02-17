<template>
  <section class="food_section layout_padding mb-5">
    <div class="container">
      <div class="filters-content">
        <div class="">
          <div class="all pizza">
            <div class="box">
              <div>
               <div>
                <img v-if="(`${shopkeeper.image}`).includes('shopkeeper_images')" :src="`${store.imagePath}${shopkeeper.image}`" class="card-image" />
                <img v-else=""  :src="`${shopkeeper.image}`" alt="" />
                </div>
                <div class="detail-box">
                  <h5 class="text-capitalize fs-5">{{ shopkeeper.name }}</h5>
                  <div class="options">
                  <div v-for="(type, i) in shopkeeper.types" class="text-capitalize">
                    <p class="m-0 type-name">{{ type.name }}</p>
                  </div>
                    <p class="m-0 mt-2 address">
                    {{ shopkeeper.address}}
                  </p>
                    <h6 class="m-0">{{ shopkeeper.hour }}</h6>
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
  name: "ShopkeeperCardComponent",

  data() {
    return {
      store,
    };
  },
  props: ["shopkeeper", "types"],
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

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
.box:hover{
  cursor: pointer;
}
.box {
  position: relative;
  margin-top: 25px;
  background-color: $white;
  border-radius: 10px;
  color: $white;
  border-radius: 15px;
  border: 3px solid #222831;
  overflow: hidden;
  background: linear-gradient(to bottom, #f1f2f3 25px, $primary2 25px);
  height: 350px;

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
      height: 50px;
      transition: all 0.2s;
    }
  }

  .detail-box {
    padding: 25px 16px;

    h5 {
      font-weight: 600;
      color: #ffbe33;
      font-size: 16px;
    }
  }

  .options {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1rem;
    width: 100%;

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

    .address {
      font-size: 17px;
    }

    .type-name {
      font-size: 14px;
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
img{
  height: 190px;
  width: 100%;
  object-fit: cover;
}
</style>
