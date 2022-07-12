import { mount } from '@vue/test-utils';
import WishListItem from "@/components/WishListItem.vue";
import {MockAppState, MockWishListItem, MockWishListItems} from "@/mocks";

describe('WishListItem.vue', () => {

  const createWrapper = (wishListOverrides = {}, productOverrides = {}) => {
    const $store = {
      state: MockAppState(wishListOverrides, productOverrides)
    }
    return mount(WishListItem, {
        mocks: {
          $store
        },
        propsData: {
          item: MockWishListItem
        },
        stubs: {
            Nuxt: true,
        },
    });
  };

  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('Can be properly tested', () => {
    const wrapper = createWrapper({
      items: MockWishListItems,
    })
    expect(true).toEqual(true);
  })

})

