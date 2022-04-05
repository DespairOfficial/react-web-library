import React from 'react'
import styles from './Shop.module.css'
import Book from './Book/Book'

const Shop = (props) => {
    const books = props.shop.books
    return (
        <div className={styles.shop}>
            {books.map((book, index) => (
                <Book
                    key={index}
                    title={book.title}
                    authors={book.authors}
                    text={book.text}
                    image={book.image}
                />
            ))}
        </div>
    )
}
export default Shop
