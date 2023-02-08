import React from 'react'
import classes from "./loading.module.css"
import logo from '../../assets/img/logo.jpeg'

const Loading = () => {
    return (
        <div>
            <div className={classes.loading_logo}>
                <img className={classes.rot} src={logo} alt=""/>
            </div>
        </div>
    )
}

export default Loading
