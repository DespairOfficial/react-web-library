import React, { useState } from 'react'
import styles from './BookReading.module.css'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import JumpToPage from './JumpToPage/JumpToPage'

const BookReading = (props) => {
    console.log('updated')
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    let isLastPage = false

    const pdf = props.book.pdf
    if (pageNumber === numPages) {
        isLastPage = true
    }
    function jumpToExactPage(page) {
        page = Number(page)

        if (page >= numPages) {
            setPageNumber(numPages)
        } else if (page <= 1 || !page) {
            setPageNumber(1)
        } else {
            setPageNumber(page)
        }
    }
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
        setPageNumber(1)
    }
    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset)
    }
    function previousPage() {
        isLastPage = false
        changePage(-1)
    }
    function nextPage() {
        isLastPage = false
        changePage(1)
    }
    function isNeedToBuy() {
        return isLastPage && !props.book.isBookBought && !props.book.is_free
    }
    function pdfOrEndOfTrial() {
        if (isNeedToBuy()) {
            debugger
            return (
                <div className={styles.endOfTrial}>
                    <div className={styles.text}>
                        <p> Конец демонстрационной версии</p>
                        <a href={`/buy/${props.book.id}`}>
                            Купить полную версию
                        </a>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className={styles.pdf}>
            <div className={styles.paginator}>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of{' '}
                    {numPages || '--'}
                </p>

                <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
                </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
            <div>
                <JumpToPage jumpToExactPage={jumpToExactPage} />
            </div>
            <div className={styles.book}>
                {pdfOrEndOfTrial()}
                <div className={isNeedToBuy() ? styles.lastpage : null}>
                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>
        </div>
    )
}
export default BookReading
