import React from 'react'
import { connect } from 'react-redux'
import {
    toggleAddToCard,
    setBooks,
    setCurrentPage,
    setTotalBooksCount,
    toggleIsFetching,
    toggleIsAddingInCard,
} from '../../../../redux/shopReducer'
import Books from './Books'
import Preloader from '../../../common/Preloader/Preloader'
import {
    getBooks,
    addBookToCard,
    removeBookFromCard,
} from '../../../../http/booksAPI'
class BooksAPI extends React.Component {
    componentDidMount() {
        getBooks(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.setTotalBooksCount(data.booksCount)
            this.props.setBooks(data.books)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        getBooks(pageNumber, this.props.pageSize).then((data) => {
            this.props.setBooks(data.books)
            this.props.toggleIsFetching(false)
        })
    }
    onToggleBookToCard = (bookId, isInCard) => {
        toggleIsAddingInCard(bookId, true)
        isInCard ? removeBookFromCard(bookId) : addBookToCard(bookId) // query to back
        toggleIsAddingInCard(bookId, false)
    }
    isAddingInCard = (bookId) => {
        return this.props.isAddingBooks.some((id) => id === bookId)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Books
                    totalBookCount={this.props.totalBookCount}
                    pageSize={this.props.pageSize}
                    onPageChange={this.onPageChange}
                    currentPage={this.props.currentPage}
                    books={this.props.books}
                    toggleAddToCard={this.props.toggleAddToCard}
                    onToggleBookToCard={this.onToggleBookToCard}
                    isAddingInCard={this.isAddingInCard}
                />
            </>
        )
    }
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
    toggleAddToCard,
    setBooks,
    setCurrentPage,
    setTotalBooksCount,
    toggleIsFetching,
    toggleIsAddingInCard,
})(BooksAPI)
