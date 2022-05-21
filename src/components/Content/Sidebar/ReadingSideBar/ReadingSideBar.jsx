import React, { useEffect } from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import styles from './ReadingSideBar.module.css'
import { setCurrentBook } from '../../../../redux/sidebarReducer'
import { connect } from 'react-redux'

const ReadingSideBar = (props) => {
    useEffect(() => {
        const params = window.location.pathname
        let text = params
        let pattern = /(?<=\/readingRoom\/)[\w+.-]+/
        let bookId = text.match(pattern)
        if (bookId) {
            props.setCurrentBook(bookId[0])
        }
    }, [])

    if (props.book) {
        return (
            <div className={styles.book}>
                <img src={props.book.image} alt="book" />
                <div className={styles.authors}>
                    {props.book.authors.join(' ')}
                </div>
                <div className={styles.title}>{props.book.title}</div>
            </div>
        )
    } else {
        return (
            <div className={styles.preloader}>
                <Preloader />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    book: state.sidebar.book,
})

export default connect(mapStateToProps, { setCurrentBook })(ReadingSideBar)
