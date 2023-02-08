import React from 'react'
import defaultImage from '../../../assets/img/default_image.png'

const Item = ({item}) => {
    let item_image = defaultImage
    if (item.item_images[0] ) {
        item_image = item.item_images[0].image_url
    }



    return (
        <div className="main__item_card">
            <div className="item__photo">
                <img src={item_image} alt=""/>
            </div>

            <div className="item__title">
                {item.name}
            </div>

            <div className="item__desc">
                {item.description}
            </div>

            <div className="item__price">
                {item.price} ₽
            </div>
        </div>
    )
}

export default Item
