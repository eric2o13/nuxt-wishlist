import {AppState, ProductState, WishListItem} from "~/types";

export const MockAppState = (wishListOverrides: Object, productOverrides: Object): AppState => ({
  wishList: {
    items: [],
    active: false,
    ...wishListOverrides
  },
  product: {
    list: [],
    ...productOverrides
  }
})

export const MockWishListItem: WishListItem = {
  quantity: 1,
  product: {
    "id": 1,
    "title": "My Title",
    "description": "A description of a product",
    "imagePath": "https://dummyimage.com/450x200/DD0/fff",
    "price": {
      "symbol": "$",
      "value": 5.00
    }
  }
}

export const MockWishListItems: WishListItem[] = [
  {
    quantity: 3,
    product: {
      "id": 1,
      "title": "My Title",
      "description": "A description of a product",
      "imagePath": "https://dummyimage.com/450x200/DD0/fff",
      "price": {
        "symbol": "$",
        "value": 5.00
      }
    }
  },
  {
    quantity: 3,
    product: {
      "id": 2,
      "title": "Another product",
      "description": "A description of a product",
      "imagePath": "https://dummyimage.com/450x200/DD0/fff",
      "price": {
        "symbol": "$",
        "value": 5.00
      }
    }
  }
]


export const MockProductStore: ProductState = {
  list: [
    {
      "id": 2,
      "title": "Another product",
      "description": "A description of a product",
      "imagePath": "https://dummyimage.com/450x200/DD0/fff",
      "price": {
        "symbol": "$",
        "value": 5.00
      }
    },
    {
      "id": 1,
      "title": "My Title",
      "description": "A description of a product",
      "imagePath": "https://dummyimage.com/450x200/DD0/fff",
      "price": {
        "symbol": "$",
        "value": 5.00
      }
    }
  ]
}
