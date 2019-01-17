<template>
  <div class="wrapper">
    <h1>Cart</h1>
    <ul class="cart-list">
      <li class="flex-col cart-list__item" v-for="item in cartItems" :key="">
        <img :src="makeImagePath(item)" class="thumbnail" alt="">
        <div class="flex-col cart-list__item__details">
          <div>
            <p>{{ item.name }}</p>
            <p>Size: {{ item.size }}</p>
            <p>Color: {{ item.color }}</p>
          </div>
          <p>${{ item.price }}</p>
          <button
            @click="removeFromCart(item.id)"
            class="btn cart-list__btn-remove">
            Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'
export default {
  name: 'cart',
  mixins: [imagePath],
  computed: {
    cartItems() {
      return this.$store.getters.cartItems
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch('removeFromCart', itemId)
    }
  }
};
</script>

<style>
.cart-list {
  width: 70%;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-list__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-list__item__details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-list__btn-remove {
  margin-top: .5rem;
  :hover {
    color: red;
  }
}
.thumbnail {
  max-width: 50px;
  margin-top: .5rem;
}
</style>