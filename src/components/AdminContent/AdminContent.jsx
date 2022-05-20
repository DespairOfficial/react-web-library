import React from 'react'
import Navbar from './Navbar/Navbar'
import CenterContent from './CenterContent/CenterContent'
import styles from './AdminContent.module.css'

const AdminContent = () => {
    return (
        <div className={styles.adminContent}>
            <Navbar />
            <CenterContent />
        </div>
    )
}
export default AdminContent
