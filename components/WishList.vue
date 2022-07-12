<template>
    <div class="app-wish-list-component">
        <div class="wish-list-container">
            <h6 class="mx-4 py-4 border-bottom">Your wish list</h6>
            <ul class="wish-list d-block p-0">
                <transition-group name="list">
                    <li v-for="item in list"
                        class="px-4"
                        :key="item.product.id">
                        <WishListItem :item="item"></WishListItem>
                    </li>
                </transition-group>
            </ul>
            <div class="mx-4 text-end">
                Total: $
                <span class="text-dark fw-bold ">
                    {{ total }}
                </span>
            </div>
        </div>
         <Nuxt />
    </div>
</template>


<script lang="ts">
import Vue, {PropOptions} from 'vue'
import { WishListItem } from '@/types';

export default Vue.extend({
    name: 'WishList',
    props: {
        list: {
            type: Array,
            required: true
        } as PropOptions<WishListItem[]>
    },
    computed: {
        total() : number {
            return this.$store.state.wishList.items.reduce((sum: number, value: WishListItem) => {
                    return sum + (value.quantity * value.product.price.value) }, 0)
                .toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })
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
