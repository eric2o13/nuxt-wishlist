<template>
  <div>
    <div class="media align-items-lg-center d-flex justify-content-between flex-column flex-sm-row">
      <div class="image-container position-relative order-1 order-sm-2 col-sm-6" style="padding: 0;">
        <div class="wish-list-btn-container">
          <button
            v-if="onWishList"
            class="wish-list-btn remove-from-wish-list-btn"
            @click="removeFromWishList(product)"
          >
            <i class="bi bi-heart-fill" />
          </button>
          <button
            v-else
            class="wish-list-btn add-to-wish-list-btn"
            @click="addToWishList(product)"
          >
            <i class="bi bi-heart" />
          </button>
        </div>
        <client-only>
          <img
            v-lazy
            :data-src="getImagePath(product)"
            src="/placeholder-product.png"
            class="product-image"
          >
        </client-only>
      </div>
      <div class="p-4 order-2 order-sm-1 col-sm-6">
        <h5 class="card-title">
          {{ product.title }}
        </h5>
        <p class="card-text mb-0 mb-lg-2 text-muted">
          {{ product.description }}
        </p>
        <span class="text-muted">
          {{ product.price.symbol }}
          {{ product.price.value.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }}
        </span>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Product, WishListItem } from '@/types'
import lazy from '@/plugins/directives.client'

export default Vue.extend({
  name: 'ProductListItem',
  directives: {
    lazy
  },
  props: {
    product: {
      type: Object,
      required: true
    } as PropOptions<Product>
  },
  computed: {
    onWishList () : boolean {
      return !!this.$store.state.wishList.items.find((w: WishListItem) => this.$props.product.id === w.product.id)
    }
  },
  methods: {
    addToWishList (item: Product): void {
      this.$store.commit('wishList/addProduct', item)
    },
    removeFromWishList (item: Product): void {
      this.$store.commit('wishList/removeProduct', item)
    },
    getImagePath (item: Product) : string | undefined {
      return item.imagePath
    }
  }
})
</script>

<style scoped lang="scss">
    .image-container{
        background: #DDD;
    }
    .media {
        background: white;
    }
    .wish-list-btn-container {
        position: absolute;
        top: 8px;
        right: 8px;
    }
    .product-image {
        height: 100%;
    }
    button {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        border: none;
        background: none;
        transition: background 0.25s;
        &:hover {
            background: rgba(0, 0, 0, 0.35);
        }
        i {
            color: white;
            position: relative;
            top: 2px;
            font-size: 24px;
            &.active-icon {
                color: crimson;
            }
        }
    }
</style>
