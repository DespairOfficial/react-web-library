import React from 'react'
import styles from './Sidebar.module.css'
import { Routes, Route } from 'react-router-dom'
import ReadingSideBar from './ReadingSideBar/ReadingSideBar'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Routes>
                <Route path="readingRoom/*" element={<ReadingSideBar />} />
            </Routes>
        </div>
    )
}
export default Sidebar
