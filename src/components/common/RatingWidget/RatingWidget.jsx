import React from 'react'
import styles from './RatingWidget.module.scss'
const RatingWidget = (props) => {
    const userBookRating = props.userBookRating
    const onRate = (e) => {
        const id = e.target.id
        const rating = id.slice(1)
        const isConfirm = window.confirm(`Подтвердить оценку ${rating}?`)
        if (isConfirm) {
            props.setCurrentBookRating(props.bookId, rating)
        }
    }
    return (
        <div className={styles.rating}>
            {[5, 4, 3, 2, 1].map((num) => {
                return (
                    <React.Fragment key={num}>
                        <input
                            checked={userBookRating === num}
                            onChange={onRate}
                            type="radio"
                            name="rating"
                            id={'r' + num}
                        />
                        <label htmlFor={'r' + num}></label>
                    </React.Fragment>
                )
            })}
        </div>
    )
}
export default RatingWidget
