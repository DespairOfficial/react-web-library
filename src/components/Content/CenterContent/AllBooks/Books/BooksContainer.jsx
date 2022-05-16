import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    getCurrentBooks,
    toggleBookCard,
} from '../../../../../redux/shopReducer'
import Books from './Books'
import NotFound from './NotFound/NotFound'
const BooksAPI = (props) => {
    useEffect(() => {
        props.getCurrentBooks(props.currentPage, props.pageSize, props.filter)
    }, [])
    const onPageChange = (pageNumber) => {
        props.getCurrentBooks(pageNumber, props.pageSize, props.filter)
    }

    const onToggleBookCard = (bookId, isInCard) => {
        props.toggleBookCard(bookId, isInCard)
    }

    return (
        <>
            {props.books.length ? (
                <Books
                    totalBookCount={props.totalBookCount}
                    pageSize={props.pageSize}
                    onPageChange={onPageChange}
                    currentPage={props.currentPage}
                    books={props.books}
                    onToggleBookCard={onToggleBookCard}
                />
            ) : (
                <NotFound />
            )}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        books: state.shopPage.books,
        pageSize: state.shopPage.pageSize,
        totalBookCount: state.shopPage.totalBookCount,
        currentPage: state.shopPage.currentPage,
        isFetching: state.shopPage.isFetching,
        isAddingBooks: state.shopPage.isAddingBooks,
        filter: state.shopPage.filter,
    }
}

export default connect(mapStateToProps, {
    getCurrentBooks,
    toggleBookCard,
})(BooksAPI)
