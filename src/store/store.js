import {create} from 'zustand'
import {persist} from "zustand/middleware"
import {getAllItems, getItemAvailableSize} from "../api/items/itemsApi.js"
import {useQuery} from "react-query"

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
        incItemCount: (itemId, itemSize, availableSizeCount) => set((state) => {
            const item = state.cartItems.find(({id, size}) => id === itemId && size === itemSize)
            if (item.itemCount + 1 > availableSizeCount)
                return state

            item.itemCount++
            const excludeItems = state.cartItems.filter((cartItem) => cartItem.size !== itemSize || cartItem.id !== itemId)
            return {
                cartItems: [...excludeItems, item].sort((a, b) => a.id - b.id)
            }
        })

        ,
        decItemCount: (itemId, itemSize) => set((state) => {
            const item = state.cartItems.find(({id, size}) => id === itemId && size === itemSize)
            if (item.itemCount - 1 < 1)
                return state
            item.itemCount--
            const excludeItems = state.cartItems.filter((cartItem) => cartItem.size !== itemSize || cartItem.id !== itemId)
            return {
                cartItems: [...excludeItems, item].sort((a, b) => a.id - b.id)
            }
        }),
    }),
    {
        name: 'cartItemsStorage'
    }
))
