import React, {useState} from 'react'
import {useQuery} from "react-query"
import {getRetrieveItem} from "../../api/items/itemsApi.js"
import Loading from "../Loading/Loading.jsx"
import defaultImage from "../../assets/img/default_image.png"
import {useParams} from "react-router-dom"
import classes from "./retrieve-item.module.css"

const RetrieveItem = () => {

    const {id} = useParams()
    const [sizeValue, setSizeValue] = useState('')

    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['item_retrieve', id],
        queryFn: () => getRetrieveItem(id)
    })

    if (isLoading)
        return <Loading/>


    let itemImage = defaultImage
    if (data.data.item_images[0]) {
        itemImage = data.data.item_images[0].image_url
    }

    const sizes = data.data.sizes


    const handleRadioClick = (e) => {
        setSizeValue(e.target.value)
    }


    return (
        <div className={classes.retrieve__item}>
            <div className={classes.retrieve_item__header}>
                <div className={classes.retrieve_item__header__text}>
                    <a href="/">Назад</a>
                </div>
            </div>
            <div className={classes.retrieve_item__content}>
                <div className={classes.retrieve_item__content__photo}>
                    <img src={itemImage} alt=""/>
                </div>

                <div className={classes.retrieve_item__content__retrieve_text}>
                    <h1 className={classes.retrieve_text__header}>{data.data.name}</h1>
                    <p className={classes.retrieve_text__price}>{data.data.price} ₽</p>
                    {/*<form className={classes.retrieve_item__form} action="">*/}
                        <div className={classes.form_radio_group}>
                            {
                                sizes.map((sizeCount) => {
                                    return (
                                        <div className={classes.form_radio_groupItem}>
                                            <input
                                                id={sizeCount.size}
                                                type="radio"
                                                name="radio"
                                                value={sizeCount.size}
                                                disabled={sizeCount.item_count === 0}
                                                checked={sizeCount.size === sizeValue}
                                                onClick={handleRadioClick}
                                            />
                                            <label htmlFor={sizeCount.size}>{sizeCount.size}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className={classes.retrieve_text__button}>Купить</button>
                    {/*</form>*/}
                    <p className={classes.retrieve_text__undertext}>{data.data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default RetrieveItem
