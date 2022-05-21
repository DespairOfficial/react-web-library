import React from 'react'
import styles from './BookInfo.module.css'
import Preloader from '../../../common/Preloader/Preloader'
import RatingWidget from '../../../common/RatingWidget/RatingWidget'
import BookUserRating from '../../../common/BookUserRating/BookUserRating'
import { NavLink } from 'react-router-dom'
import CommentSection from './CommentSection/CommentSectionContainer'

const BookInfo = (props) => {
    const buyOrRead = (id) => {
        if (props.book.is_free || props.isBookBought) {
            return (
                <div>
                    <NavLink to={'/readingRoom/' + id}>
                        <button
                            className={styles.fill + ' ' + styles.readButton}
                        >
                            Читать
                        </button>
                    </NavLink>
                </div>
            )
        } else {
            return (
                <div>
                    <NavLink to={'/buy/' + id}>
                        <button
                            className={styles.fill + ' ' + styles.buyButton}
                        >
                            Купить
                        </button>
                    </NavLink>
                </div>
            )
        }
    }
    if (props.book && props.isBookBought !== undefined) {
        return (
            <div>
                <div className={styles.bookInfo}>
                    <div className={styles.book}>
                        <img src={props.book.image} alt="cover" />
                        <p className={styles.title}>{props.book.title}</p>
                        <p className={styles.authors}>
                            {props.book.authors.join(' ')}
                        </p>
                    </div>
                    <div className={styles.additionalInfo}>
                        <div className={styles.description}>
                            <p>{props.book.text}</p>
                        </div>

                        <div className={styles.ratingWidget}>
                            <RatingWidget
                                userBookRating={
                                    props.book.rating.userBookRating
                                        ? props.book.rating.userBookRating
                                              .rating
                                        : 0
                                }
                                bookId={props.book.id}
                                setCurrentBookRating={
                                    props.setCurrentBookRating
                                }
                            />
                        </div>
                        <div>
                            <BookUserRating bookRating={props.book.rating} />
                        </div>
                        <div className={styles.buyOrRead}>
                            {buyOrRead(props.book.id)}
                        </div>
                    </div>
                </div>

                <div>
                    <CommentSection bookId={props.book.id} />
                </div>
            </div>
        )
    } else {
        return <Preloader />
    }
}
export default BookInfo
