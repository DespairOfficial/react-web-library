import React from 'react'
import BookReading from './BookReading/BookReading'
import Preloader from '../../common/Preloader/Preloader'

const ReadingRoom = (props) => {
    if (!props.book) {
        return <Preloader />
    }

    return <BookReading book={props.book} />
}
export default ReadingRoom
