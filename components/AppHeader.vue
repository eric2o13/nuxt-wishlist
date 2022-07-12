<template>
    <div class="app-header">
        <div class="container d-flex justify-content-between">
            <div id="nav">
                <button class="favorites-button" @click="toggleWishList()">
                    <span class="badge count">{{total}}</span>
                    <i class="bi bi-heart-fill"></i>
                </button>
            </div>
            <div class="d-flex">
                <span class="title">Nuxt Wishlist Demo</span>
                <NuxtLogo></NuxtLogo>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { WishListItem, WishListState } from '@/types';
import NuxtLogo from '@/components/NuxtLogo';

export default Vue.extend({
    name: "AppHeader",
    methods: {
        toggleWishList(): void {
            this.$store.commit("wishList/activate", !this.wishList.active);
        },
    },
    computed: {
      wishList(): WishListState {
            return this.$store.state.wishList;
        },
        total(): number {
            return this.$store.state.wishList.items.reduce((sum: number, value: WishListItem) => { return sum + (value.quantity); }, 0);
        }
    },
  components: {
      NuxtLogo
  }
})
</script>


<style scoped lang="scss">
    .app-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: white;
        z-index: 10;
        border-bottom: 2px solid #eee;
    }
    .badge {
        position: absolute;
        padding: 0;
        top: 23px;
        left: 0px;
        width: 60px;
        text-align: center;
        color: white;
        background: #000;
        font-size: 11px;
        display: inline-block;
        background: none;
        z-index: 10;
    }
    button {
        display: inline-block;
        position: relative;
        height: 60px;
        width: 60px;
        border: none;
        border-left: 1px solid #EEE;
        border-right: 1px solid #EEE;
        background: none;
        transition: background 0.25s;
        &:hover {
            background: #EEE;
        }
        i {
            color: crimson;
            font-size: 32px;
            position: relative;
            left: 1px;
        }
    }

    .title {
        color: #AAA;
        text-transform: uppercase;
        margin: 20px 10px 0 0;
    }
</style>
