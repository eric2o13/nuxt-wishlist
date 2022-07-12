<template>
<section>
  <AppHeader></AppHeader>
  <ProductList :list="products"></ProductList>
    <transition name="slide-fade">
      <WishList v-if="wishList.active" :list="wishList.items"></WishList>
  </transition>
</section>
</template>

<script lang="ts">
import Vue from 'vue'
import {Product, ProductState, WishListState, AppState} from '@/types'

export default Vue.extend({
    name: "IndexPage",
    beforeMount()  {

      if (!process.browser) {
        return;
      }
      const synchronizeLocalStorage = (state: AppState) => {
        localStorage.setItem('AppState', JSON.stringify(state))
      };

      const localState: string | null = localStorage.getItem('AppState')

      if (localState) {
        const productState: ProductState = JSON.parse(localState).product
        const wishListState: WishListState = JSON.parse(localState).wishList
        this.$store.commit('product/setState', (productState))
        this.$store.commit('wishList/setState', (wishListState))
      } else {
        this.fetchData()
      }

      this.$store.subscribe((mutation, state:AppState) => {
          synchronizeLocalStorage(state);
      });

    },
    methods: {
      async fetchData(){
          const url = "/data.json"
          const products: Awaited<Promise<{
              data: Product[];
          }>> = await this.$http.$get(url)
          this.$store.commit("product/setList", products.data)
      },
    },
    computed: {
      products() : Product[] {
        return this.$store.state.product.list
      },
      wishList(): WishListState {
        return this.$store.state.wishList
      }
    }
})
</script>

<style lang="scss">
    body {
        background: #f8f8f8;
    }
    .container {
        max-width: 900px;
    }
    .slide-fade-enter-active {
        transition: all .25s ease;
    }
    .slide-fade-leave-active {
        transition: all .25s;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(200px);
        opacity: 0;
    }
</style>
