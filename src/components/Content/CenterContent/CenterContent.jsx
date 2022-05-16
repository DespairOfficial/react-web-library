import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProfileContainer from './Profile/ProfileContainer'
import ReadingRoomContainer from './ReadingRoom/ReadingRoomContainer'
import AllBooks from './AllBooks/AllBooks'
import Donate from './Donate/Donate'
import Dialogs from './Dialogs/Dialogs'
import BuyBookContainer from './BuyBook/BuyBookContainer'
import BookInfoContainer from './BookInfo/BookInfoContainer'
import styles from './CenterContent.module.css'
const CenterContent = (props) => {
    return (
        <div
            className={
                styles.centerContent +
                ' ' +
                (props.isShowingNavBar ? styles.showNavBar : null)
            }
        >
            <Routes>
                <Route path="profile" element={<ProfileContainer />} />
                <Route
                    path="readingRoom/*"
                    element={<ReadingRoomContainer />}
                />
                <Route path="books" element={<AllBooks />} />
                <Route path="books/*" element={<BookInfoContainer />} />
                <Route path="donate" element={<Donate />} />
                <Route path="dialogs" element={<Dialogs />} />
                <Route path="buy/*" element={<BuyBookContainer />} />
            </Routes>
        </div>
    )
}
export default CenterContent
