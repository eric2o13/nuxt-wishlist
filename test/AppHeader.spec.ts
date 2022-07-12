import { mount } from '@vue/test-utils';
import AppHeader from "@/components/AppHeader.vue";
import {WishListItem} from "@/types";
import {MockAppState, MockWishListItem, MockWishListItems} from "@/mocks";

describe('AppHeader.vue', () => {

  const createWrapper = (wishListOverrides = {}, productOverrides = {}) => {
    const $store = {
      state: MockAppState(wishListOverrides, productOverrides)
    }
    return mount(AppHeader, {
        mocks: {
          $store
        }
    });
  };

  it('Is a Vue instance', () => {
    const wrapper = createWrapper()
    expect(wrapper.vm).toBeTruthy()
  })

  it('Has a company logo', () => {
    const wrapper = createWrapper();
    const selector = '#app-logo';
    expect(wrapper.get(selector)).toBeTruthy();
  })

  it('Has a favorites button, showing the amount of wish list items', () => {

    const list: WishListItem[] = [MockWishListItem];

    const wrapper = createWrapper({
       items: list,
    });

    const selector = '.favorites-button';
    expect(wrapper.get(selector)).toBeTruthy();

    const badge = '.badge.count';
    expect(wrapper.get(badge).text()).toEqual('1');

  });

  test('Can contain multiple products', () => {
      const wrapper = createWrapper({
        items: MockWishListItems,
      })
      const badge = '.badge.count';
      expect(wrapper.get(badge).text()).toEqual('6');
  })

})

