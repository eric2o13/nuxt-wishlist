<template>
<section>
    <div class="app-product-list-component container py-5">
        <div v-if="list.length">
            <ul class="product-list p-0 ">
                <li v-for="item in list" :key="item.id" class="d-block rounded-3 overflow-hidden mt-4 mb-lg-4 shadow-sm">
                    <ProductListItem :product="item"></ProductListItem>
                </li>
            </ul>
        </div>
        <div v-else>
            No products found
        </div>
    </div>
    <Nuxt />
</section>
</template>

<script lang="ts">
import Vue, {PropOptions} from 'vue'
import { Product } from '@/types';

export default Vue.extend({
    name: 'ProductList',
    props: {
        list: {
            type: Array,
            required: true
        } as PropOptions<Product[]>
    }
})
</script>
