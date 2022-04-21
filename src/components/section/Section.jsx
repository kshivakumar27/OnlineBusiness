import React from 'react'
import Styles from './section.module.css'

function Section({img, dir, head, subtext, points, alt, check}) {

    let sectionStyle = dir === 'right' ? Styles.sectionRight : Styles.sectionLeft;

    let bullets = points && check ? points.map((point, idx) => (
        <div className={Styles.bulletGroup} key={idx}>
            <img src={check} alt="checkmark" className={Styles.check} />
            <p className={Styles.bullet}>
                {point}
            </p>
        </div>
    )) : '';

    return (
        <div className={sectionStyle}>
            <div className={Styles.content}>
                <h2 className={Styles.head}>{head}</h2>
                {bullets ? bullets : ''}
                {subtext && <p className={Styles.subtext}> {subtext} </p>}    
            </div>
            <img src={img} className={Styles.image} alt={alt}/>
        </div>
    )
}

export default Section
