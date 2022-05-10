import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setCurrentBook } from '../../../redux/readingRoomReducer'
import ReadingRoom from './ReadingRoom'

const ReadingRoomAPI = (props) => {
    useEffect(() => {
        const params = window.location.pathname
        let text = params
        let pattern = /(?<=\/readingRoom\/)[\w+.-]+/
        let bookId = text.match(pattern)
        if (bookId) {
            props.setCurrentBook(bookId[0])
        }
    }, [])
    return <ReadingRoom {...props} />
}

let mapStateToProps = (state) => ({
    book: state.readingRoomPage.book,
})

export default connect(mapStateToProps, { setCurrentBook })(ReadingRoomAPI)
