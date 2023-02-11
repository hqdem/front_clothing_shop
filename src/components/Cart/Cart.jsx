import React from 'react'
import classes from "./cart.module.css"
import CartItem from "./CartItem/CartItem.jsx"
import {useStore} from "../../store/store.js"
import {nanoid} from "nanoid"
import {NumericFormat} from "react-number-format"


const Cart = () => {
    const cartItems = useStore(state => state.cartItems)
    const getTotalPrice = useStore(state => state.getTotalPrice)

    let totalPrice = getTotalPrice()

    return (
        <>
            <div className={classes.cart}>
                <div className={classes.cart__items}>
                    {cartItems.map(item => <CartItem key={nanoid()} item={item}/>)}
                </div>

                <div className={classes.cart__total_price}>
                    <span className={classes.text}>Общая сумма: </span> <NumericFormat
                                                                            value={totalPrice}
                                                                            displayType={"text"}
                                                                            thousandSeparator={true}
                                                                            suffix={" ₽"}
                                                                        />
                </div>

                <div className={classes.cart__form}>

                </div>

            </div>

        </>
    )
}

export default Cart
