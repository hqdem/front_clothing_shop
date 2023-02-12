import React from 'react'
import logo from '../../assets/img/logo.jpeg'
import InstImage from 'remixicon-react/InstagramFillIcon'
import TelegramImage from 'remixicon-react/TelegramFillIcon'

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
                        <a href="https://www.instagram.com/" target="_blank"><InstImage /></a>
                        <a href="https://web.telegram.org/" target="_blank"><TelegramImage /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
