import React from 'react'

const RetrieveItem = ({item, itemPhoto}) => {
    return (
        <div className="retrieve__item">
            <div className="retrieve_item__header">
                <div className="retrieve_item__header__text">
                    <a href="/"><i className="ri-arrow-left-line"></i> <span> Все товары</span></a>
                </div>
                <div className="retrieve_item__header__sign">
                    <i className="ri-close-line"></i>
                </div>
            </div>
            <div className="retrieve_item__content">
                <div className="retrieve_item__content__photo">
                    <img src={itemPhoto} alt=""/>
                </div>

                <div className="retrieve_item__content__retrieve_text">
                    <h1 className="retrieve_text__header">{item.name}</h1>
                    <p className="retrieve_text__price">{item.price} ₽</p>
                    <button className="retrieve_text__button">Купить</button>
                    <p className="retrieve_text__undertext">{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default RetrieveItem
