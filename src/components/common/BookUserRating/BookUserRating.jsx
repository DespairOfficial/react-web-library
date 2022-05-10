import React from 'react'
import styles from './BookUserRating.module.scss'
const BookUserRating = (props) => {
    const drawRateRow = () => {
        return props.bookRating.ratingTable.map((row, i) => {
            return (
                <div className={styles.row} key={i}>
                    <div className={styles.side}>
                        <div>{row.rating} ☆</div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.barcontainer}>
                            <div
                                className={styles.bar}
                                style={{
                                    width:
                                        (row.count /
                                            props.bookRating.ratesCount.count) *
                                            100 +
                                        '%',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className={styles.side + ' ' + styles.right}>
                        <div>{row.count}</div>
                    </div>
                </div>
            )
        })
    }
    if (props.bookRating.avgRating && props.bookRating.ratingTable) {
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />

                <span className={styles.heading}>User Rating</span>
                <p>
                    {parseFloat(props.bookRating.avgRating.avg).toFixed(1)}{' '}
                    average based on {props.bookRating.ratesCount.count}{' '}
                    reviews.
                </p>

                <div>{drawRateRow()}</div>
            </div>
        )
    } else {
        return (
            <div>
                <p>User rating</p>
            </div>
        )
    }
}
export default BookUserRating
