import React from 'react'
import styles from './Paginator.module.css'

const Paginator = (props) => {
    return (
        <div className={styles.paginator}>
            {props.pages.map((pageNumber, i) => {
                return (
                    <span
                        onClick={() => props.onPageChange(pageNumber)}
                        key={i}
                        className={
                            styles.page +
                            ' ' +
                            (props.currentPage === pageNumber
                                ? styles.selectedPage
                                : undefined)
                        }
                    >
                        {pageNumber}
                    </span>
                )
            })}
        </div>
    )
}

export default Paginator
