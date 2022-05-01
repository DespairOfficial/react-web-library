import React from 'react'
import BookInfo from './BookInfo/BookInfo'
import styles from './ReadingRoom.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ReadingRoom = (props) => {
    if (!props.book) {
        return <Preloader />
    }

    return <BookInfo book={props.book} />
}
export default ReadingRoom
