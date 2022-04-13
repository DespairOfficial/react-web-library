import React from 'react'
import styles from './Content.module.css'
import { Routes, Route } from 'react-router-dom'
import MyProfile from './MyProfile/MyProfile'
import ReadingRoom from './ReadingRoom/ReadingRoom'
import Shop from './Shop/Shop'
import Donate from './Donate/Donate'
import CommentSectionContainer from './CommentSection/CommentSectionContainer'
import Dialogs from './Dialogs/Dialogs'

const Content = (props) => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="myProfile" element={<MyProfile />} />
                <Route path="readingRoom" element={<ReadingRoom />} />
                <Route path="shop" element={<Shop />} />
                <Route path="donate" element={<Donate />} />
                <Route path="comments" element={<CommentSectionContainer />} />
                <Route path="dialogs" element={<Dialogs />} />
            </Routes>
        </div>
    )
}
export default Content
