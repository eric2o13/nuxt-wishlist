import { Product, ProductState } from '@/types'

export const state = (): ProductState => ({
    list: [],
  })
  
export const mutations = {
  setList(state: ProductState, list: Product[]) {
    state.list = list
  },
  setState(state: ProductState, payload: ProductState) {
    state.list = payload.list
  }
}
