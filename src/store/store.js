import {create} from 'zustand'
import {persist} from "zustand/middleware"


export const useStore = create(persist((set, get) => ({
        cartItems: [],
        addItem: (item) => set((state) => {
            const findItem = state.cartItems.find(({id, size}) => id === item.id && size === item.size)
            if (findItem)
                return state
            return {
                cartItems: [...state.cartItems, item].sort((a, b) => a.id - b.id)
            }
        }),
        removeItem: (itemId, itemSize) => set((state) => {
            return {
                cartItems: [...state.cartItems.filter((cartItem) => cartItem.size !== itemSize || cartItem.id !== itemId)]
            }
        }),
        clearItems: () => set((state) => {
           return {
               cartItems: []
           }
        }),
        incItemCount: (itemId, itemSize, availableSizeCount) => set((state) => {
            const newArr = state.cartItems.map(item => {
                if (item.id === itemId && item.size === itemSize)
                    if (item.itemCount + 1 <= availableSizeCount)
                        return {
                            ...item,
                            itemCount: item.itemCount + 1
                        }
                    else alert('Вы достигли максимально доступного количества данного товара.')
                
                return item
            })
            return {
                cartItems: [...newArr]
            }
        }),
        decItemCount: (itemId, itemSize) => set((state) => {
            const newArr = state.cartItems.map(item => {
                if (item.id === itemId && item.size === itemSize && item.itemCount - 1 >= 1 )
                    return {
                        ...item,
                        itemCount: item.itemCount - 1
                    }
                return item
            })
            return {
                cartItems: [...newArr]
            }
        }),
        getTotalPrice: () => {
            let totalPrice = 0
            for (let item of get().cartItems) {
                let itemTotalPrice = item.price * item.itemCount
                totalPrice += itemTotalPrice
            }
            return totalPrice
        },
        getCartItemsForOrderApi: () => {
            return get().cartItems.map(item => ({
                item_id: item.id,
                size: item.size,
                item_count: item.itemCount
            }))
        },
        getCartItemsForItemCheckAvailability: () => {
            return get().cartItems.map(item => ({
                item_id: item.id,
                count: item.itemCount,
                size: item.size,
                price: item.price
            }))
        }

    }),
    {
        name: 'cartItemsStorage'
    }
))
