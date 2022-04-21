import React from 'react'
import { reviews } from '../Strings'
import Styles from './review.module.css'
import star from '../../assets/images/star.svg'

function Review() {

    let review = reviews && reviews.map( (review, idx) => (
        <div className={Styles.card} key={idx}>
            <div className={Styles.header}>
                <div className={Styles.tag}>
                    <img src={review.img} alt="user" className={Styles.avatar}/>
                    <div> 
                        <p>{review.Name}</p>
                        <p className={Styles.location}>{review.location}</p>
                    </div>
                </div>
                <div className={Styles.stars}>
                    <img src={star} alt="star" />
                    <p>{review.stars}</p> 
                </div>
            </div>
            <div className={Styles.body}>
                <p>{review.review}</p>
            </div>
        </div>
    ))

    return (
        <div className={Styles.list}>
            <h2 className={Styles.head}>
                Trusted By Thousands Of Happy Customers.
            </h2>
            <div className={Styles.cards}>
                {review}
            </div>
        </div>
    )
}

export default Review
