import React from 'react'
import defaultImage from '../../../assets/img/default_image.png'

const Item = ({item}) => {
    let itemImage = defaultImage
    if (item.item_images[0] ) {
        itemImage = item.item_images[0].image_url
    }

    return (
        <div className="main__item_card">
            <div className="item__photo">
                <img src={itemImage} alt=""/>
            </div>

            <div className="item__title">
                { item.is_available ? item.name : <span>{item.name} (SOLD OUT)</span>}
            </div>

            <div className="item__desc">
                {item.description}
            </div>
            {
                item.sale_price ?
                    <div className="item__price">
                        <span>{item.price} ₽</span> {item.sale_price} ₽
                    </div> :
                    <div className="item__price">
                        {item.price} ₽
                    </div>
            }
        </div>
    )
}

export default Item
