import React from 'react'
import logo from '../../assets/images/logo.svg'
import cover from '../../assets/images/cover.svg'
import Styles from './header.module.css'

function Header() {
    return (
        <div className={Styles.land}>
            <div className={Styles.navbar}>
              
            </div>
            <div className={Styles.hero}>
                <div className={Styles.heroContent}>
                    <h2 className={Styles.head}>Superpower your home business.</h2>
                    <p className={Styles.subtext}>Selling online is as simple as sharing content.</p>
                    <a href="#main" className={Styles.cta}>Learn More</a>
                </div>
                <img src={cover} alt="banner" className={Styles.bannerImg}/>
            </div>
        </div>
    )
}

export default Header
