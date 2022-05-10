import React from 'react'
import styles from './Content.module.css'
import { Routes, Route } from 'react-router-dom'
import ProfileContainer from './Profile/ProfileContainer'
import ReadingRoomContainer from './ReadingRoom/ReadingRoomContainer'
import AllBooks from './AllBooks/AllBooks'
import Donate from './Donate/Donate'
import CommentSectionContainer from './CommentSection/CommentSectionContainer'
import Dialogs from './Dialogs/Dialogs'
import BuyBookContainer from './BuyBook/BuyBookContainer'
import BookInfoContainer from './BookInfo/BookInfoContainer'
const Content = (props) => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="profile" element={<ProfileContainer />} />
                <Route
                    path="readingRoom/*"
                    element={<ReadingRoomContainer />}
                />
                <Route path="books" element={<AllBooks />} />
                <Route path="books/*" element={<BookInfoContainer />} />
                <Route path="donate" element={<Donate />} />
                <Route path="comments" element={<CommentSectionContainer />} />
                <Route path="dialogs" element={<Dialogs />} />
                <Route path="buy/*" element={<BuyBookContainer />} />
            </Routes>
        </div>
    )
}
export default Content
