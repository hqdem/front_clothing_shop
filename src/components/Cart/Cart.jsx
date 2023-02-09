import React from 'react'
import classes from "./cart.module.css"
import CartItem from "./CartItem/CartItem.jsx"


const Cart = () => {
    return (
        <div className={classes.cart}>
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}

export default Cart
