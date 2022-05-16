import React from 'react'
import styles from './BooksFilter.module.css'
import { connect } from 'react-redux'
import { setSearchFilter, getCurrentBooks } from '../../../../redux/shopReducer'
const BooksFilter = (props) => {
    const onFilterChange = (e) => {
        const filter = e.target.value
        props.setSearchFilter(filter)
        props.getCurrentBooks(1, props.pageSize, filter)
    }
    return (
        <div className={styles.filter}>
            Filter
            <div className={styles.search}>
                <input type="text" onChange={onFilterChange} />
            </div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Dropdown</button>
                <div className={styles.dropdown_content}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
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
