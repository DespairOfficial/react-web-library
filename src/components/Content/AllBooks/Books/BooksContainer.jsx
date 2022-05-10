import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    toggleIsFetching,
    getUsers,
    toggleBookCard,
} from '../../../../redux/shopReducer'
import Books from './Books'
import Preloader from '../../../common/Preloader/Preloader'
const BooksAPI = (props) => {
    useEffect(() => {
        props.toggleIsFetching(true)
        props.getUsers(props.currentPage, props.pageSize)
    }, [])
    const onPageChange = (pageNumber) => {
        props.toggleIsFetching(true)
        props.getUsers(pageNumber, props.pageSize)
    }

    const onToggleBookCard = (bookId, isInCard) => {
        props.toggleBookCard(bookId, isInCard)
    }
    const isAddingInCard = (bookId) => {
        return props.isAddingBooks.some((id) => id === bookId)
    }

    return (
        <>
            {props.isFetching ? <Preloader /> : null}
            <Books
                totalBookCount={props.totalBookCount}
                pageSize={props.pageSize}
                onPageChange={onPageChange}
                currentPage={props.currentPage}
                books={props.books}
                onToggleBookCard={onToggleBookCard}
                isAddingInCard={isAddingInCard}
            />
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
    }
}

export default connect(mapStateToProps, {
    toggleIsFetching,
    getUsers,
    toggleBookCard,
})(BooksAPI)
