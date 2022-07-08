import { Product, WishListState, WishListItem  } from '@/types'

export const state = (): WishListState => ({
  items: [],
  active: true
})
  
export const mutations = {
  addProduct(state: WishListState, payload: Product):void {
    const item: WishListItem = {product: payload, quantity: 1};
    state.items = [...state.items, item];
  },
  removeProduct(state: WishListState, payload: Product):void {
    state.items = state.items.filter((w: WishListItem) => w.product.id !== payload.id);
  },
  increaseProductQuantity(state: WishListState, payload: WishListItem):void {
    const item = state.items.find((w:WishListItem) => w.product.id === payload.product.id);
    if (item) {
        item.quantity = item.quantity + 1;
    }
  },
  decreaseProductQuantity(state: WishListState, payload: WishListItem):void {
    const item = state.items.find((w:WishListItem) => w.product.id === payload.product.id);
    if (item && item.quantity > 1) {
        item.quantity = item.quantity - 1;
    }
  },
  removeWishListItemFromWishList(state:WishListState, payload: WishListItem):void {
    state.items = state.items.filter((w: WishListItem) => w.product.id !== payload.product.id);
  },
  activate(state:WishListState, payload: boolean):void {
    state.active = payload;
  },
  setState(state: WishListState, payload: WishListState): void {
    state.items = payload.items
    state.active = payload.active
  }
}
