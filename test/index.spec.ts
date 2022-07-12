import { mount } from '@vue/test-utils'
import IndexPage from '@/pages/index.vue'
import { MockAppState, MockProductStore, MockWishListItems } from '@/mocks'
import AppHeader from '@/components/AppHeader.vue'
import ProductList from '@/components/ProductList.vue'
import WishList from '@/components/WishList.vue'
import ProductListItem from '@/components/ProductListItem.vue'

describe('index.vue', () => {
  const createWrapper = (wishListOverrides = {}, productOverrides = {}) => {
    const $store = {
      state: MockAppState(wishListOverrides, MockProductStore)
    }
    return mount(IndexPage, {
      mocks: {
        $store
      },
      components: {
        AppHeader,
        ProductList,
        ProductListItem,
        WishList
      },
      stubs: {
        Nuxt: true,
        ClientOnly: true
      }
    })
  }
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    })
    window.IntersectionObserver = mockIntersectionObserver
  })

  it('Has a product list', () => {
    const wrapper = createWrapper()
    const numberOfListItems = wrapper.findAll('ul.product-list li').length
    expect(numberOfListItems).toEqual(2)
  })

  it('Hides the wishlist by default', () => {
    const wrapper = createWrapper({
      items: MockWishListItems,
      active: false
    })
    const numberOfListItems = wrapper.findAll('ul.wish-list li').length
    expect(numberOfListItems).toBeFalsy()
  })

  it('Shows the wishlist when active', () => {
    const wrapper = createWrapper({
      items: MockWishListItems,
      active: true
    })
    const numberOfListItems = wrapper.findAll('ul.wish-list li').length
    expect(numberOfListItems).toEqual(2)
  })
})
