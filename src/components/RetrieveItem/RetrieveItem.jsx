import React, {useState} from 'react'
import {useQuery} from "react-query"
import {getRetrieveItem} from "../../api/items/itemsApi.js"
import Loading from "../Loading/Loading.jsx"
import defaultImage from "../../assets/img/default_image.png"
import {useParams} from "react-router-dom"
import classes from "./retrieve-item.module.css"
import {useStore} from "../../store/store.js"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const RetrieveItem = () => {

    const {id} = useParams()
    const [sizeValue, setSizeValue] = useState('')
    const [errorSize, setErrorSize] = useState(null)
    const addItem = useStore(state => state.addItem)

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
    const price = data.data.sale_price ? data.data.sale_price : data.data.price


    const handleRadioClick = (e) => {
        setSizeValue(e.target.value)
    }

    const handleBuyButtonClick = () => {
        if (sizeValue === '') {
            setErrorSize('Перед тем, как добавить товар в корзину выберете размер!')
            return
        }
        addItem({
            id: data.data.id,
            name: data.data.name,
            size: sizeValue,
            itemCount: 1,
            price: price,
            image:itemImage
        })
        setErrorSize(null)
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
                    {/*<img src={itemImage} alt=""/>*/}
                    {
                        data.data.item_images.length !== 0 ?
                            <Carousel >
                                {data.data.item_images.map(item => <div key={item.image_url}><img src={item.image_url} alt=""/></div>)}
                            </Carousel> :
                            <img src={itemImage} alt=""/>
                    }
                </div>

                <div className={classes.retrieve_item__content__retrieve_text}>
                    <h1 className={classes.retrieve_text__header}>{data.data.name}</h1>
                    <p className={classes.retrieve_text__price}>{price} ₽</p>
                    {/*<form className={classes.retrieve_item__form} action="">*/}
                    <div className={classes.form_radio_group}>
                        {
                            sizes.map((sizeCount) => {
                                return (
                                    <div key={sizeCount.size} className={classes.form_radio_groupItem}>
                                        <input
                                            id={sizeCount.size}
                                            type="radio"
                                            name="radio"
                                            value={sizeCount.size}
                                            disabled={sizeCount.item_count === 0}
                                            checked={sizeCount.size === sizeValue}
                                            onChange={handleRadioClick}
                                        />
                                        <label htmlFor={sizeCount.size}>{sizeCount.size}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        errorSize   ?
                                    <div className={classes.retrieve_item__size_error}>
                                        {errorSize}
                                    </div>
                                    : ''
                    }
                    <button className={classes.retrieve_text__button} onClick={handleBuyButtonClick}>Купить
                    </button>
                    {/*</form>*/}
                    <p className={classes.retrieve_text__undertext}>{data.data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default RetrieveItem
