import React from 'react'
import { connect } from 'react-redux'
import {
    toggleIsFetching,
    getUsers,
    toggleBookCard,
} from '../../../../redux/shopReducer'
import Books from './Books'
import Preloader from '../../../common/Preloader/Preloader'
class BooksAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    onToggleBookCard = (bookId, isInCard) => {
        this.props.toggleBookCard(bookId, isInCard)
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
                    onToggleBookCard={this.onToggleBookCard}
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
    toggleIsFetching,
    getUsers,
    toggleBookCard,
})(BooksAPI)
