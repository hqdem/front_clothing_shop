import React from 'react'
import classes from "../cart.module.css"
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon"
import IndeterminateCircleLineIcon from "remixicon-react/IndeterminateCircleLineIcon"
import CloseCircleLineIcon from "remixicon-react/CloseCircleLineIcon"
import {NumericFormat} from "react-number-format"
import {useStore} from "../../../store/store.js"
import {useQueryClient} from "react-query"
import {getItemAvailableSize} from "../../../api/items/itemsApi.js"

const CartItem = ({item}) => {

    const removeItem = useStore(state => state.removeItem)
    const incItemCount = useStore(state => state.incItemCount)
    const decItemCount = useStore(state => state.decItemCount)
    const queryClient = useQueryClient()

    // const handleIncButton = (itemId, itemSize) => {
    //     const {isLoading, isError, data, error} = useQuery({
    //         queryKey: ['availale-item-size'],
    //         queryFn: getItemAvailableSize(itemId, itemSize)
    //     })
    //
    //     console.log(data)
    // }

    return (
        <div className={classes.cart__item}>
            <div className={classes.cart__item__photo}>
                <img src={item.image} alt=""/>
            </div>


            <div className={classes.cart__item__block}>
                <div className={classes.cart__item__desc}>
                    <div className={classes.cart__item__name}>{item.name}</div>
                    <div className={classes.cart__item__size}>Размер - {item.size}</div>
                </div>

                <div className={classes.cart__item__count}>
                    <IndeterminateCircleLineIcon className={classes.btn_minus} onClick={() => {
                        decItemCount(item.id, item.size)
                    }
                    }/>
                    <div className={classes.count_number}>{item.itemCount}</div>
                    <AddCircleLineIcon className={classes.btn_plus} onClick={() => {
                        // handleIncButton(item.id, item.size)
                        // queryClient.invalidateQueries({queryKey: ['item_retrieve']})
                        getItemAvailableSize(item.id, item.size)
                            .then(res => {
                                const sizeCount = res.data[0].item_count
                                // console.log(sizeCount)
                                if (sizeCount)
                                    incItemCount(item.id, item.size, sizeCount)
                            })
                    }
                    }/>

                </div>
            </div>

            <div className={classes.cart__item__price}>
                <NumericFormat
                    value={item.price * item.itemCount}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" ₽"}
                />
                <CloseCircleLineIcon className={classes.btn_delete} onClick={() => removeItem(item.id, item.size)}/>
            </div>
        </div>
    )
}

export default CartItem
