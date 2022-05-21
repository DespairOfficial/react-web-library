import React from 'react'
import styles from './BookUserRating.module.scss'
const BookUserRating = (props) => {
    const drawRateRow = () => {
        return props.bookRating.ratingTable.map((row, i) => {
            return (
                <div className={styles.row} key={i}>
                    <div className={styles.side}>
                        <div>
                            {row.rating}
                            <span className={styles.star}>★</span>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.barcontainer}>
                            <div
                                className={styles[`bar_${row.rating}`]}
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
            <div className={styles.userRating}>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />

                <span className={styles.heading}>Пользовательские оценки</span>
                <p>
                    {'Cредняя оценка, на основе ' +
                        props.bookRating.ratesCount.count +
                        ' отзывов:'}
                </p>
                <div
                    className={
                        styles.avgRating +
                        ' ' +
                        styles[
                            `rateColor_${Math.floor(
                                props.bookRating.avgRating.avg
                            )}`
                        ]
                    }
                >
                    {parseFloat(props.bookRating.avgRating.avg).toFixed(2)}
                </div>
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
