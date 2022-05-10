import React from 'react'
import styles from './Books.module.css'
import Book from './Book/Book'
import Paginator from '../../../common/Paginator/Paginator'

const Books = (props) => {
    let pagesCount = Math.ceil(props.totalBookCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <Paginator
                pages={pages}
                onPageChange={props.onPageChange}
                currentPage={props.currentPage}
            />

            <div className={styles.books}>
                {props.books.map((book, index) => (
                    <Book
                        {...book}
                        key={index}
                        onToggleBookCard={props.onToggleBookCard}
                        isAddingInCard={props.isAddingInCard}
                        isInCard={book.isInCard}
                    />
                ))}
            </div>
        </div>
    )
}
export default Books
