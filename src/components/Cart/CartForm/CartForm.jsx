import React, {useDebugValue, useState} from 'react'
import {createOrder} from "../../../api/orders/ordersApi.js"
import {useStore} from "../../../store/store.js"
import {useQuery} from "react-query"
import classes from "../cart.module.css"
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner.jsx"
import {checkItemsAvailability} from "../../../api/items/itemsApi.js"
import {nanoid} from "nanoid"

const CartForm = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userContacts, setUserContacts] = useState('')

    const [errors, setErrors] = useState({userEmail: null, userContacts: null})
    const [availabilityErrors, setAvailabilityErrors] = useState([])

    const getCartItemsForOrderApi = useStore(state => state.getCartItemsForOrderApi)
    const getCartItemsForItemCheckAvailability = useStore(state => state.getCartItemsForItemCheckAvailability)

    const {isLoading, isError, data, error, refetch} = useQuery({
        queryKey: ['create-order'],
        queryFn: () => createOrder({
            user_email: userEmail,
            user_contacts: userContacts,
            items: getCartItemsForOrderApi()
        }),
        enabled: false,
        retry: false,
        onError: (err) => {
            const responseMessage = err.response.data
            const userEmailErrMsgs = responseMessage.user_email ? responseMessage.user_email : null
            const userContactsErrMsgs = responseMessage.user_contacts ? responseMessage.user_contacts : null

            setErrors({
                userEmail: userEmailErrMsgs,
                userContacts: userContactsErrMsgs
            })


        },
        onSuccess: (responseData) => {
            setErrors({
                userEmail: null,
                userContacts: null
            })
            const resData = responseData.data
            localStorage.setItem('order_id', resData.id)
            window.location.replace(resData.payment_url)
        }
    })

    const handleOrderButtonClick = (e) => {
        e.preventDefault()
        const items = getCartItemsForItemCheckAvailability()
        checkItemsAvailability(items).then(
            (res) => {
                if (res.status === 204)
                    setAvailabilityErrors([])
                    refetch()
            },
            (err) => {
                setAvailabilityErrors(err.response.data.errors)
                console.log(err)
            }
        )

        // refetch()
    }

    if (isLoading)
        return (
            <div className={classes.loader_spinner}>
                <LoaderSpinner />
            </div>
        )

    return (
        <form>
            {availabilityErrors.length !== 0
                ? <div className={classes.cart__non_fields_errors}>
                    {availabilityErrors.map(avErr => <div key={nanoid()}>{avErr.detail}</div>)}
                </div>
                : ''
            }

            <label htmlFor="user-email">Электронная почта</label>
            <input type="email" id="user-email" value={userEmail} onChange={(e) => {
                setUserEmail(e.target.value)
            }
            }/>
            <div className={classes.form__error__message}>
                {errors.userEmail ? errors.userEmail : ''}
            </div>

            <label htmlFor="user-contacts">Ссылка на соц. сеть (для связи)</label>
            <input type="text" id="user-contacts" value={userContacts} onChange={(e) => {
                setUserContacts(e.target.value)
            }
            }/>
            <div className={classes.form__error__message}>
                {errors.userContacts ? errors.userContacts : ''}
            </div>

            <button onClick={handleOrderButtonClick}>Перейти к оплате</button>
        </form>
    )
}

export default CartForm
