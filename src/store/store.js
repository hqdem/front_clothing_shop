import { create } from 'zustand'

const useStore = create((set) => ({
    cartItems: [],
    addItem: (item) => set((state) => ({ cartItems: [...state.cartItems, item]})),
    removeItem: (item) => set((state) => ({
        cartItems: [...state.cartItems.filter((cartItem) => cartItem.id !== item.id)]
    }))
}))