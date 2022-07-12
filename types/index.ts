export interface ProductPrice {
  symbol: string;
  value: number;
}

export interface Product {
    readonly id: number;
    title: string;
    description: string;
    imagePath?: string;
    price: ProductPrice;
}

export interface WishListItem {
    product: Product;
    quantity: number;
}

export interface WishListState {
    items: WishListItem[];
    active: boolean
}

export interface ProductState {
    list: Product[];
}

export interface AppState {
    wishList: WishListState;
    product: ProductState;
}
