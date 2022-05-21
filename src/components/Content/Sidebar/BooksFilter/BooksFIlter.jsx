import React from 'react'
import styles from './BooksFilter.module.css'
import { connect } from 'react-redux'
import { setSearchFilter, getCurrentBooks } from '../../../../redux/shopReducer'
import search from '../../../../assets/images/search.png'
import Navigation from '../Navigation/Navigation'
const BooksFilter = (props) => {
    const onFilterChange = (e) => {
        const filter = e.target.value
        props.setSearchFilter(filter)
        props.getCurrentBooks(1, props.pageSize, filter)
    }
    return (
        <div className={styles.filter}>
            <div className={styles.title}>Поиск</div>

            <div className={styles.search}>
                <img src={search} alt="Search" />
                <input type="text" onChange={onFilterChange} />
            </div>
            <Navigation />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        filter: state.shopPage.filter,
        pageSize: state.shopPage.pageSize,
        currentPage: state.shopPage.currentPage,
    }
}
export default connect(mapStateToProps, { setSearchFilter, getCurrentBooks })(
    BooksFilter
)
