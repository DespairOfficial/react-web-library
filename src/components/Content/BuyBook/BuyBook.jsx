import React from 'react'
import styles from './BuyBook.module.css'
import Preloader from '../../common/Preloader/Preloader'
import { useNavigate } from 'react-router-dom'
const BuyBook = (props) => {
    const onBuyBook = () => {
        props.buyBook(props.book.id).then(() => {
            navigate(`/books/${props.book.id}`)
        })
    }
    const navigate = useNavigate()
    if (props.book) {
        if (!props.is_free) {
            return (
                <div className={styles.buyPage}>
                    <div className={styles.book}>
                        <img src={props.book.image} alt="cover" />
                        <p className={styles.title}>{props.book.title}</p>
                        <p className={styles.authors}>
                            {props.book.authors.join(' ')}
                        </p>
                    </div>
                    <div className={styles.infocolumn}>
                        <div className={styles.description}>
                            {props.book.text}
                        </div>
                        <button onClick={onBuyBook}>
                            Нажмите, если действительно хотите купить эту книгу
                        </button>
                    </div>
                </div>
            )
        } else {
            navigate(`/books/${props.book.id}`)
        }
    } else {
        return <Preloader />
    }
}
export default BuyBook
