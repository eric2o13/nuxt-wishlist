<template>
  <div class="app-wish-list-component">
    <div class="wish-list-container">
      <h6 class="mx-4 py-4 border-bottom">
        Your wish list
      </h6>
      <ul class="wish-list d-block p-0">
        <transition-group name="list">
          <li
            v-for="(item, key) in list"
            :key="key"
            class="px-4"
          >
            <WishListItem :item="item" />
          </li>
        </transition-group>
      </ul>
      <div class="mx-4 text-end">
        Total: $
        <span class="wishlist-sum-total text-dark fw-bold ">
          {{ total }}
        </span>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { WishListItem as Item } from '@/types'
import WishListItem from '@/components/WishListItem.vue'

export default Vue.extend({
  name: 'WishList',
  components: {
    WishListItem
  },
  props: {
    list: {
      type: Array,
      required: true
    } as PropOptions<Item[]>
  },
  computed: {
    total () : number {
      return this.$store.state.wishList.items.reduce((sum: number, value: Item) => {
        return sum + (value.quantity * value.product.price.value)
      }, 0)
        .toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })
    }
  }

})
</script>

<style scoped lang="scss">
    .app-wish-list-component {
        position: fixed;
        top: 61px;
        right: 0;
        bottom: 0;
        width: 330px;
        background: white;
        border-left: 1px solid #EEE;
    }
    .wish-list-container {
        max-height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .list-item {
        display: inline-block;
    }
    .list-enter-active, .list-leave-active {
        transition: all 0.25s;
    }
    .list-enter {
        transform: translateX(20px);
        opacity: 0;
    }
    .list-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
</style>
