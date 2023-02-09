import React from 'react'
import {useState} from "react"
import {Link} from "react-router-dom"
import ShoppingCart from 'remixicon-react/ShoppingCart2LineIcon'
import {useStore} from "../../store/store.js"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const cartItems = useStore(state => state.cartItems)

    const handleBurgerBtnClick = () => {
        setIsMenuOpen((prevValue) => !prevValue)
    }

    return (
        <header className="header animate__animated animate__fadeInDown">
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        AUTOMATIC VERTICAL
                    </div>

                    <div className="header__menu">
                        <div className="header__cart_icon">
                            {/*<i className="ri-shopping-cart-2-line"></i>*/}
                            <ShoppingCart size="1em"/> <span> {cartItems.length}</span>
                        </div>

                        <div className={`header__burger_menu ${isMenuOpen ? "active" : ""}`} id="burger"
                             onClick={handleBurgerBtnClick}>
                            <div className="header__burger_line"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`header__collapse_menu animate__animated animate__fadeInDown ${isMenuOpen ? " active" : ""}`}
                id="header__menu">
                <div className="container">
                    <div className="header__menu_items">
                        <ul>
                            <li><Link to="/">МАГАЗИН</Link></li>
                            <li><Link to="/about">О БРЕНДЕ</Link></li>
                            <li><Link to="/gallery">ГАЛЕРЕЯ</Link></li>
                            <li><Link to="/info">ИНФОРМАЦИЯ</Link></li>
                            <li><Link to="/studio">AUTOMATIC STUDIO</Link></li>
                        </ul>
                    </div>

                    <div className="header__socials">
                        <a href="#"><i className="ri-instagram-fill"></i></a>
                        <a href="#"><i className="ri-telegram-fill"></i></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
