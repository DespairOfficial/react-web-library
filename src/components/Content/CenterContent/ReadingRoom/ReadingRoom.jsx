import React, { useEffect } from 'react'
import BookReading from './BookReading/BookReading'
import { useNavigate, NavLink } from 'react-router-dom'
import styles from './ReadingRoom.module.css'
const ReadingRoom = (props) => {
    const navigate = useNavigate()
    if (!props.book) {
        return (
            <div className={styles.notChoosed}>
                Вы не выбрали книгу для чтения
                <div>
                    <NavLink to="/books">Хотите выбрать?</NavLink>
                </div>
            </div>
        )
    }

    return (
        <BookReading
            book={props.book}
            confirmLastReadedPage={props.confirmLastReadedPage}
        />
    )
}
export default ReadingRoom
