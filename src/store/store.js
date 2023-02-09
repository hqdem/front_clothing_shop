import {create} from 'zustand'
import {persist} from "zustand/middleware"

export const useStore = create(persist((set, get) => ({
        cartItems: [],
        addItem: (item) => set((state) => {
            const findItem = state.cartItems.find(({id, size}) => id === item.id && size === item.size)
            if (findItem)
                return state
            return {
                cartItems: [...state.cartItems, item]
            }
        }),
        removeItem: (item) => set((state) => ({
            cartItems: [...state.cartItems.filter((cartItem) => cartItem.id !== item.id)]
        }))
    }),
    {
        name: 'cartItemsStorage'
    }
))
