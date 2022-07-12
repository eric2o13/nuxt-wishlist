import { mount } from '@vue/test-utils';
import WishList from "@/components/WishList.vue";
import {MockAppState, MockWishListItems} from "@/mocks";

describe('WishList.vue', () => {

  const createWrapper = (wishListOverrides = {}, productOverrides = {}) => {
    const $store = {
      state: MockAppState(wishListOverrides, productOverrides)
    }
    return mount(WishList, {
        mocks: {
          $store
        },
        propsData: {
          list: MockWishListItems
        },
        stubs: {
            Nuxt: true,
            WishListItem: true
        },
    });
  };

  it('Should display wishlist items', () => {
    const wrapper = createWrapper()
    const $wishList = 'ul.wish-list li'
    const numberOfListItems = wrapper.findAll($wishList).length;
    expect(numberOfListItems).toEqual(2);
  })

  it('Should display the sum total', () => {
    const wrapper = createWrapper({
      items: MockWishListItems,
    })
    const $total = '.wishlist-sum-total'
    const sumTotal = wrapper.get($total).text();
    expect(sumTotal).toEqual('30.00');
  })

})

