import React from 'react'
import styles from './CenterContent.module.scss'
import AllUsers from './AllUsers/AllUsers'
import BooksBought from './BooksBought/BooksBought'
import BooksRated from './BooksRated/BooksRated'
import { Route, Routes } from 'react-router-dom'
const CenterContent = () => {
    return (
        <div className={styles.centerContent}>
            <Routes>
                <Route path="users" element={<AllUsers />} />
                <Route path="booksBought" element={<BooksBought />} />
                <Route path="booksRated" element={<BooksRated />} />
            </Routes>
        </div>
    )
}
export default CenterContent
