import React from 'react'
import { connect } from 'react-redux'
import { setReadingBook } from '../../../redux/readingRoomReducer'
import ReadingRoom from './ReadingRoom'
import { getBook } from '../../../http/booksAPI'
class ReadingRoomAPI extends React.Component {
    componentDidMount() {
        const params = window.location.pathname
        let text = params
        let pattern = /(?<=\/readingRoom\/)[\w+.-]+/
        let bookId = text.match(pattern)
        if (bookId) {
            getBook(bookId).then((data) => {
                let book = data
                this.props.setReadingBook(book)
            })
        }
    }
    render() {
        return <ReadingRoom {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    book: state.readingRoomPage.book,
})

export default connect(mapStateToProps, { setReadingBook })(ReadingRoomAPI)
