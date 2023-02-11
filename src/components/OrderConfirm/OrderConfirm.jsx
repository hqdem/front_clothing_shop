import React, {useEffect, useState} from 'react'
import classes from "./order-confirm.module.css"
import {useQuery} from "react-query"
import {confirmOrderPayment} from "../../api/orders/ordersApi.js"
import Loading from "../Loading/Loading.jsx"
import {redirect, useNavigate} from "react-router-dom"
import {useStore} from "../../store/store"


const OrderConfirm = () => {
    const clearItems = useStore(state => state.clearItems)
    const navigate = useNavigate();

    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['confirm-payment'],
        queryFn: () => confirmOrderPayment(localStorage.getItem('order_id')),
        onSuccess: () => {
            clearItems()
            localStorage.removeItem('order_id')
            setTimeout(() => navigate('/'), 5000)
        },
        retry: false
    })

    if (isLoading)
        return <Loading />

    if (isError) {
        if (error.response.status === 402)
            return (
                <div className={classes.order_confirm_error}>
                    Ошибка! Заказ не оплачен. Если вы оплачивали заказ, свяжитесь со службой поддержки.
                </div>
            )
        return (
            <div className={classes.order_confirm_error}>
                Ошибка! Заказ не найден. Если вы заказывали вещи, свяжитесь со службой поддержки.
            </div>
        )
    }

    return (
        <div className={classes.order_confirm_text}>
            Спасибо за Ваш заказ! Как заказ будет отправлен, мы свяжемся с вами для отправки трек кода.
        </div>
    )
}

export default OrderConfirm
