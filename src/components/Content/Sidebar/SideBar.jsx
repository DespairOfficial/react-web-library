import React from 'react'
import styles from './Sidebar.module.css'
import { Routes, Route } from 'react-router-dom'
import ReadingSideBar from './ReadingSideBar/ReadingSideBar'
import BooksFilter from './BooksFilter/BooksFIlter'
import DonationInfo from './DonationInfo/DonationInfo'
const Sidebar = (props) => {
    return (
        <div
            className={
                styles.sidebar +
                ' ' +
                (props.isShowingNavBar ? styles.showNavBar : null)
            }
        >
            <Routes>
                <Route path="readingRoom/*" element={<ReadingSideBar />} />
                <Route path="books" element={<BooksFilter />} />
                <Route path="donate" element={<DonationInfo />} />
            </Routes>
        </div>
    )
}
export default Sidebar
