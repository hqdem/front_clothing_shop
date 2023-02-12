import React from 'react'
import classes from './gallery.module.css'
import gal1 from '../../assets/img/gal1.jpg'
import gal2 from '../../assets/img/gal2.jpg'
import gal3 from '../../assets/img/gal3.jpg'
import gal4 from '../../assets/img/gal4.jpg'
import gal5 from '../../assets/img/gal5.jpg'
import gal6 from '../../assets/img/gal6.jpg'

const Gallery = () => {
    return (
        <div className={classes.gallery_photos}>
            <div className={classes.gallery_photo}>
                <img src={gal1} alt=""/>
            </div>

            <div className={classes.gallery_photo}>
                <img src={gal2} alt=""/>
            </div>

            <div className={classes.gallery_photo}>
                <img src={gal3} alt=""/>
            </div>

            <div className={classes.gallery_photo}>
                <img src={gal4} alt=""/>
            </div>

            <div className={classes.gallery_photo}>
                <img src={gal5} alt=""/>
            </div>

            <div className={classes.gallery_photo}>
                <img src={gal6} alt=""/>
            </div>
        </div>
    )
}

export default Gallery
