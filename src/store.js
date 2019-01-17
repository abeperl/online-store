import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
      {
        name: "Crewneck T-Shirt",
        id: 53362,
        price: 9.5,
        color: "white",
        size: "small",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash",
          additional:
            "Some colors feature different-colored yarns for a heathered effect."
        },
        images: ["53362-1.jpg", "53362-2.jpg", "53362-3.jpg"]
      },
      {
        name: "Cardigan Sweater",
        id: 53363,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "women",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Sweaters",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          "53363-1.jpg",
          "53363-2.jpg",
          "53363-3.jpg",
          "53363-4.jpg",
          "53363-5.jpg"
        ]
      },
      {
        name: "Slim Fit Jeans",
        id: 53364,
        price: 29.5,
        color: "navy",
        size: {
          waist: 32,
          length: 32
        },
        gender: "men",
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Pants",
        details: {
          material: "denim",
          fit: "slim",
          maintenance: "machine wash cold with like colors, air dry",
          additional: ""
        },
        images: [
          "53364-1.jpg",
          "53364-2.jpg",
          "53364-3.jpg",
          "53364-4.jpg",
          "53364-5.jpg"
        ]
      }
    ]
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(Number(payload));
    },
    removeFromCart(state, payload) {
      let indexToDelete = state.cart.indexOf(Number(payload));
      state.cart.splice(indexToDelete, 1);
    },
    decrementProductInventory(state, payload) {
      let product = state.products.find(
        product => product.id === Number(payload)
      );
      product.quantity--;
    },
    incrementProductInventory(state, payload) {
      let product = state.products.find(
        product => product.id === Number(payload)
      );
      product.quantity++;
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload),
        commit("decrementProductInventory", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("removeFromCart", payload);
      commit("incrementProductInventory", payload);
    }
  },
  getters: {
    product: state => id => {
      return state.products.filter(p => p.id === Number(id))[0];
    },
    cartItems: state => {
      return state.cart.map(itemId =>
        state.products.find(product => product.id === itemId)
      );
    }
  }
});
