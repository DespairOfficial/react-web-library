import React from 'react'
import styles from './RatingWidget.module.scss'
const RatingWidget = (props) => {
    const onRate = (e) => {
        const id = e.target.id
        const rating = id.slice(1)
        const isConfirm = window.confirm(`Подтвердить оценку ${rating}?`)
        if (isConfirm) {
            props.setCurrentBookRating(props.bookId, rating)
        }
    }
    return (
        <div>
            <div className={styles.rating}>
                <input onClick={onRate} type="radio" name="rating" id="r5" />
                <label htmlFor="r5"></label>

                <input onClick={onRate} type="radio" name="rating" id="r4" />
                <label htmlFor="r4"></label>

                <input onClick={onRate} type="radio" name="rating" id="r3" />
                <label htmlFor="r3"></label>

                <input onClick={onRate} type="radio" name="rating" id="r2" />
                <label htmlFor="r2"></label>

                <input onClick={onRate} type="radio" name="rating" id="r1" />
                <label htmlFor="r1"></label>
            </div>
        </div>
    )
}
export default RatingWidget
