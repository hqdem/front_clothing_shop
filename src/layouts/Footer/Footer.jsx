import React from 'react'
import logo from '../../assets/img/logo.jpeg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo_img">
                        <img src={logo} alt=""/>
                    </div>

                    <div className="footer__copyright">
                        AUTOMATIC VERTICAL &copy; 2023
                    </div>

                    <div className="footer__socials">
                        <a href="#"><i className="ri-instagram-fill"></i></a>
                        <a href="#"><i className="ri-telegram-fill"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
