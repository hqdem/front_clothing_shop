import React from 'react'
import classes from "../cart.module.css"
import defaultImage from '../../../assets/img/default_image.png'
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon"
import IndeterminateCircleLineIcon from "remixicon-react/IndeterminateCircleLineIcon"
import CloseCircleLineIcon from "remixicon-react/CloseCircleLineIcon.js"
import {NumericFormat} from "react-number-format"

const CartItem = () => {
    return (
        <div className={classes.cart__item}>
            <div className={classes.cart__item__photo}>
                <img src={defaultImage} alt=""/>
            </div>


            <div className={classes.cart__item__block}>
                <div className={classes.cart__item__desc}>
                    <div className={classes.cart__item__name}>XANAX BEANIE</div>
                    <div className={classes.cart__item__size}>Размер - ONE SIZE</div>
                </div>

                <div className={classes.cart__item__count}>
                    <IndeterminateCircleLineIcon className={classes.btn_minus}/>
                    <div className={classes.count_number}>19</div>
                    <AddCircleLineIcon className={classes.btn_plus}/>

                </div>
            </div>

            <div className={classes.cart__item__price}>
                <NumericFormat
                    value={36000}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" ₽"}
                />
                <CloseCircleLineIcon className={classes.btn_delete}/>
            </div>

            {/*<div className={classes.cart__item__btn_delete}>*/}
            {/*</div>*/}

        </div>
    )
}

export default CartItem
