import React from 'react'
import styles from './BookInfo.module.css'
const BookInfo = (props) => {
    return (
        <div className={styles.book}>
            <img src={props.book.image} alt="cover" />
            <p className={styles.title}>{props.book.title}</p>
            <p className={styles.authors}>{props.book.authors.join(' ')}</p>
        </div>
    )
}
export default BookInfo
