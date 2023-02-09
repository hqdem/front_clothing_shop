import React from 'react'
import classes from "./cart.module.css"
import CartItem from "./CartItem/CartItem.jsx"
import {useStore} from "../../store/store.js"
import {nanoid} from "nanoid"


const Cart = () => {
    const cartItems = useStore(state => state.cartItems)

    return (
        <div className={classes.cart}>
            { cartItems.map(item => <CartItem key={nanoid()} item={item}/>)}
        </div>
    )
}

export default Cart
