<template>
  <div class="text-start border-bottom py-2">
    <div class="d-flex py-2">
      <img v-lazy :data-src="generateThumbnailPath(item.product.imagePath)" src="/placeholder-wish-list.png">
      <div class="mx-2">
        <h6 class="m-0">
          {{ item.product.title }}
        </h6>
        <small class="mb-0">
          {{ item.quantity }} x {{ item.product.price.symbol }}
          {{ item.product.price.value.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }}
        </small>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <button class="decrease-button" @click="decreaseQuantity(item)">
          <i class="bi bi-dash" />
        </button>
        <span class="d-inline-block mx-2">{{ item.quantity }}</span>
        <button class="increase-button" @click="increaseQuantity(item)">
          <i class="bi bi-plus" />
        </button>
      </div>
      <button class="remove-button" @click="removeFromWishList(item)">
        <i class="bi bi-trash" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { WishListItem } from '@/types'
import lazy from '@/plugins/directives.client'

export default Vue.extend({
  name: 'WishListItem',
  directives: {
    lazy
  },
  props: {
    item: {
      type: Object,
      required: true
    } as PropOptions<WishListItem>
  },
  methods: {
    generateThumbnailPath (path:string): string {
      return path.replace('450x200', '45x20')
    },
    decreaseQuantity (item:WishListItem): void {
      this.$store.commit('wishList/decreaseProductQuantity', item)
    },
    increaseQuantity (item:WishListItem): void {
      this.$store.commit('wishList/increaseProductQuantity', item)
    },
    removeFromWishList (item:WishListItem): void {
      this.$store.commit('wishList/removeWishListItemFromWishList', item)
    }
  }
})
</script>

<style scoped lang="scss">
    button {
        border: none;
        background: none;
        border-radius: 50%;
        &:hover, &:active {
            background: #EEE;
        }
    }
</style>F
