import React from 'react'
import Book from './Book/Book'

const Books = (props) => {
    let books = props.books
    return (
        <div>
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
export default Books
