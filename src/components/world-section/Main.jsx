import React from 'react'
import Styles from './main.module.css';
import world from '../../assets/images/globe.png'

function World() {
    return (
        <div className={Styles.main} id="main">
            <div className={Styles.card}>
                <h2 className={Styles.head}> Take your home business to the world in a matter of clicks.</h2>
                <p className={Styles.subtext}>Click a picture and share, it’s that simple.</p>
            </div>
            <img src={world} className={Styles.world} alt="world"/>
        </div>
    )
}

export default World
